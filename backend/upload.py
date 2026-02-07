from fastapi import APIRouter, UploadFile, File
from googleapiclient.http import MediaIoBaseUpload
from datetime import datetime
import io

from drive_service import drive
from config import SESSIONS_PARENT_FOLDER_ID

router = APIRouter(prefix="/api/session")

def get_or_create_session_folder(session_token: str):
    query = (
        f"name='{session_token}' and "
        f"mimeType='application/vnd.google-apps.folder' and "
        f"'{SESSIONS_PARENT_FOLDER_ID}' in parents"
    )

    results = drive.files().list(q=query, fields="files(id)").execute()
    files = results.get("files", [])

    if files:
        return files[0]["id"]

    folder_metadata = {
        "name": session_token,
        "mimeType": "application/vnd.google-apps.folder",
        "parents": [SESSIONS_PARENT_FOLDER_ID]
    }

    folder = drive.files().create(
        body=folder_metadata,
        fields="id"
    ).execute()

    return folder["id"]

@router.post("/{session_token}/upload")
async def upload_image(session_token: str, file: UploadFile = File(...)):
    session_folder_id = get_or_create_session_folder(session_token)

    timestamp = datetime.utcnow().strftime("%Y%m%d_%H%M%S")
    filename = f"{timestamp}_{file.filename}"

    media = MediaIoBaseUpload(
        io.BytesIO(await file.read()),
        mimetype=file.content_type,
        resumable=True
    )

    file_metadata = {
        "name": filename,
        "parents": [session_folder_id]
    }

    uploaded = drive.files().create(
        body=file_metadata,
        media_body=media,
        fields="id, name"
    ).execute()

    return {
        "status": "uploaded",
        "filename": uploaded["name"]
    }
