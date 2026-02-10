# from fastapi import APIRouter
# from datetime import datetime
# import uuid

# from s3_service import create_s3_folder

# router = APIRouter()

# @router.post("/api/session/create")
# async def create_session(data: dict):
#     session_token = uuid.uuid4().hex[:12]

#     session_name = data["sessionName"].strip().replace(" ", "-").lower()
#     client_name = data["clientName"].strip().replace(" ", "-").lower()
#     event_name = data["eventName"].strip().replace(" ", "-").lower()
#     event_type = data["eventType"].strip().lower()

#     date_str = datetime.now().strftime("%Y-%m-%d")

#     # 🔥 S3 folder path
#     base_folder = (
#         f"photography-sessions/"
#         f"{event_type}/"
#         f"{client_name}/"
#         f"{date_str}/"
#         f"{session_token}"
#     )

#     # Create folders
#     create_s3_folder(base_folder)
#     create_s3_folder(f"{base_folder}/uploads")
#     create_s3_folder(f"{base_folder}/previews")

#     return {
#         "sessionToken": session_token,
#         "sessionName": session_name,
#         "clientName": client_name,
#         "eventName": event_name,
#         "eventType": event_type,
#         "s3Folder": base_folder
#     }
