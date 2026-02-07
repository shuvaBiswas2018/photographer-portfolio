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

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const createSession = async () => {
    const res = await fetch("http://localhost:8000/api/session/create", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form)
    });

    const data = await res.json();
    setSessionToken(data.sessionToken);
  };

  const sessionUrl = sessionToken
    ? `${window.location.origin}/session/${sessionToken}`
    : "";

  return (
    <div className="session-creator">
      <h1>Create Live Session</h1>

      <div className="session-form">
        <input name="sessionName" placeholder="Session Name" onChange={handleChange} />
        <input name="clientName" placeholder="Client Name" onChange={handleChange} />
        <input name="eventName" placeholder="Event Name" onChange={handleChange} />

        <select name="eventType" onChange={handleChange}>
          <option value="">Select Event Type</option>
          <option>Wedding</option>
          <option>Birthday</option>
          <option>Pre-Wedding</option>
          <option>Corporate</option>
        </select>

        <button onClick={createSession}>Start Session</button>
      </div>

      {sessionToken && (
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

          <ImageUploader sessionToken={sessionToken} />
        </>
      )}
    </div>
  );
}
