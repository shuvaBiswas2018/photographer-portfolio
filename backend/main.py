from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from session import router as session_router
from upload import router as upload_router

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

# 🔴 THIS IS CRITICAL
app.include_router(session_router)
app.include_router(upload_router)

@app.get("/")
def root():
    return {"status": "API running"}
