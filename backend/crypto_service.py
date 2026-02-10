import os
import json
from cryptography.fernet import Fernet
from dotenv import load_dotenv

load_dotenv()

key = os.getenv("SESSION_ENCRYPTION_KEY")
fernet = Fernet(key.encode())


def encrypt_payload(payload: dict) -> str:
    print("Encrypting payload:", payload)
    data = json.dumps(payload).encode()
    return fernet.encrypt(data).decode()


def decrypt_payload(token: str) -> dict:
    decrypted = fernet.decrypt(token.encode())
    return json.loads(decrypted)
