import sqlite3

conn = sqlite3.connect("sessions.db", check_same_thread=False)
cursor = conn.cursor()

cursor.execute("""
CREATE TABLE IF NOT EXISTS sessions (
  short_id TEXT PRIMARY KEY,
  encrypted_payload TEXT
)
""")

conn.commit()


def save_session(short_id, encrypted_payload):
    cursor.execute(
        "INSERT INTO sessions (short_id, encrypted_payload) VALUES (?, ?)",
        (short_id, encrypted_payload)
    )
    conn.commit()


def get_session(short_id):
    cursor.execute(
        "SELECT encrypted_payload FROM sessions WHERE short_id = ?",
        (short_id,)
    )
    row = cursor.fetchone()
    return row[0] if row else None
