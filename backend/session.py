# from backend import short_i   d
from fastapi import APIRouter
from pydantic import BaseModel
from fastapi import HTTPException
from fastapi.responses import StreamingResponse

import uuid
from s3_service import create_s3_folder
from datetime import datetime
from crypto_service import encrypt_payload, decrypt_payload
from short_id import generate_short_id
from session_db import save_session, get_session
from s3_service import s3, BUCKET_NAME
from urllib.parse import unquote



router = APIRouter(prefix="/api/session")

class SessionCreate(BaseModel):
    sessionName: str
    clientName: str
    eventName: str
    eventType: str

@router.post("/create")
def create_session(data: SessionCreate):
    short_id = generate_short_id()
    session_token = uuid.uuid4().hex[:16]

    # session_token = uuid.uuid4().hex[:12]

    session_name = data.sessionName.strip().replace(" ", "-").lower()
    client_name  = data.clientName.strip().replace(" ", "-").lower()
    event_name   = data.eventName.strip().replace(" ", "-").lower()
    event_type   = data.eventType.strip().lower()

    date_str = datetime.now().strftime("%Y-%m-%d")

    # base_folder = (
    #     f"{client_name}/"
    #     f"{date_str}/"
    #     f"{session_token}"
    #     f"{event_type}"
        
    # )

    # create_s3_folder(base_folder)

    payload = {
        "sessionToken": session_token,
        "clientName": data.clientName,
        "eventType": data.eventType,
        "date": date_str,
    }

    encrypted_payload = encrypt_payload(payload)
    save_session(short_id, encrypted_payload)
    

    return {
        "sessionToken": session_token,
        "shortId": short_id
    }

    # return {
    #     "sessionToken": session_token,
    #     "sessionName": session_name,
    #     "dateStr": date_str,
    #     "clientName": client_name,
    #     "eventName": event_name,
    #     "eventType": event_type,
    #     "s3Folder": base_folder
    # }

@router.get("/resolve/{short_id}")
async def resolve_session(short_id: str):
    encrypted = get_session(short_id)


    if not encrypted:
        raise HTTPException(status_code=404, detail="Invalid session")

    return decrypt_payload(encrypted)


@router.get("/photos/{shortId}")
async def get_session_photos(shortId: str):
    encrypted = get_session(shortId)
    if not encrypted:
        raise HTTPException(status_code=404, detail="Invalid session")

    session_data = decrypt_payload(encrypted)

    base_folder = (
    f"{session_data['clientName'].lower().replace(' ', '-')}_{session_data['date']}/"
    f"{session_data['eventType'].lower()}/"
    f"{session_data['sessionToken']}/"
)

    response = s3.list_objects_v2(
        Bucket=BUCKET_NAME,
        Prefix=base_folder
    )

    if "Contents" not in response:
        return []

    photos = []

    for obj in response.get("Contents", []):
        key = obj["Key"]
        if key.lower().endswith((".jpg", ".jpeg", ".png", ".webp")):
            url = s3.generate_presigned_url(
                "get_object",
                Params={"Bucket": BUCKET_NAME, "Key": key},
                ExpiresIn=3600
            )
            photos.append({
                "url": url,
                "key": key
            })

    return photos




@router.get("/download")
async def download_photo(key: str):
    try:
        key = unquote(key)  # important!

        s3_obj = s3.get_object(
            Bucket=BUCKET_NAME,
            Key=key
        )

        filename = key.split("/")[-1]

        return StreamingResponse(
            s3_obj["Body"],
            media_type=s3_obj.get("ContentType", "application/octet-stream"),
            headers={
                "Content-Disposition": f'attachment; filename="{filename}"'
            }
        )

    except Exception as e:
        print("Download error:", e)
        raise HTTPException(status_code=404, detail="File not found")