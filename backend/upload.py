from fastapi import APIRouter, UploadFile, File, Form, HTTPException
from typing import List
import os
import boto3

from s3_service import s3, BUCKET_NAME
from session_db import get_session
from crypto_service import decrypt_payload
from image_utils import compress_image


router = APIRouter()


@router.post("/api/upload/photos")
async def upload_photos(
    shortId: str = Form(...),
    files: List[UploadFile] = File(...)
):
    # 🔍 Resolve session
    encrypted = get_session(shortId)

    if not encrypted:
        raise HTTPException(status_code=404, detail="Invalid session")

    session_data = decrypt_payload(encrypted)

    base_folder = (
        f"{session_data['clientName'].lower().replace(' ', '-')}_{session_data['date']}/"
        f"{session_data['eventType'].lower()}/"
        f"{session_data['sessionToken']}"
    )

    uploaded_files = []

    for file in files:
        compressed_image = compress_image(file.file)

        # filename = file.filename.rsplit(".", 1)[0] + ".jpg"

        file_key = f"{base_folder}/{file.filename}"

        s3.upload_fileobj(
            compressed_image,
            BUCKET_NAME,
            file_key,
            ExtraArgs={
                "ContentType": file.content_type
            }
        )

        uploaded_files.append(file.filename)

    # for file in files:
    #     file_key = f"{base_folder}/{file.filename}"

    #     s3.upload_fileobj(
    #         file.file,
    #         BUCKET_NAME,
    #         file_key,
    #         ExtraArgs={"ContentType": file.content_type}
    #     )

    #     uploaded_files.append(file.filename)

    return {
        "status": "success",
        "uploaded": uploaded_files
    }
