from fastapi import APIRouter
from pydantic import BaseModel
import uuid

router = APIRouter(prefix="/api/session")

class SessionCreate(BaseModel):
    sessionName: str
    clientName: str
    eventName: str
    eventType: str

@router.post("/create")
def create_session(data: SessionCreate):
    session_token = uuid.uuid4().hex[:16]

    return {
        "sessionToken": session_token,
        "sessionName": data.sessionName,
        "clientName": data.clientName,
        "eventName": data.eventName,
        "eventType": data.eventType
    }
