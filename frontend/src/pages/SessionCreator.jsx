import { useState } from "react";
import { QRCodeCanvas } from "qrcode.react";
import ImageUploader from "../components/ImageUploader";
import "../styles/sessionCreator.css";

export default function SessionCreator() {
  const [form, setForm] = useState({
    sessionName: "",
    clientName: "",
    eventName: "",
    eventType: ""
  });

  const [sessionToken, setSessionToken] = useState(null);
  const [shortId, setShortId] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const createSession = async () => {
    try {
      const res = await fetch("http://localhost:8000/api/session/create", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form)
      });

      const data = await res.json();

      // 🔑 Backend returns these two
      setSessionToken(data.sessionToken);
      setShortId(data.shortId);
    } catch (err) {
      console.error("Failed to create session", err);
    }
  };

  // ✅ SHORT & CLEAN URL
  const sessionUrl = shortId
    ? `${window.location.origin}/session/${shortId}`
    : "";

  return (
    <div className="session-creator">
      <h1>Create Live Session</h1>

      <div className="session-form">
        <input
          name="sessionName"
          placeholder="Session Name"
          onChange={handleChange}
        />

        <input
          name="clientName"
          placeholder="Client Name"
          onChange={handleChange}
        />

        <input
          name="eventName"
          placeholder="Event Name"
          onChange={handleChange}
        />

        <select name="eventType" onChange={handleChange}>
          <option value="">Select Event Type</option>
          <option value="Wedding">Wedding</option>
          <option value="Birthday">Birthday</option>
          <option value="Pre-Wedding">Pre-Wedding</option>
          <option value="Corporate">Corporate</option>
        </select>

        <button onClick={createSession}>Start Session</button>
      </div>

      {shortId && (
        <>
          <p className="creator-subtitle">
            Share this QR code with your client
          </p>

          <div className="creator-qr">
            <QRCodeCanvas
              value={sessionUrl}
              size={160}
              bgColor="#0a0a0a"
              fgColor="#c9a962"
              level="H"
            />
          </div>

          <p className="creator-url">{sessionUrl}</p>

          {/* Image upload still uses sessionToken */}
          <ImageUploader shortId={shortId} />
        </>
      )}
    </div>
  );
}
