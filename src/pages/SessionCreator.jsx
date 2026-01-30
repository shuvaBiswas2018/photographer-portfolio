import { QRCodeCanvas } from "qrcode.react";
import "../styles/sessionCreator.css";

export default function SessionCreator() {
  // ⚠️ TEMPORARY — will come from backend later
  const sessionToken = "abc123xyz987654"; 

  const sessionUrl = `${window.location.origin}/session/${sessionToken}`;

  return (
    <div className="session-creator">
      <h1>Live Session Started</h1>

      <p className="creator-subtitle">
        Share this QR code with your client to view live photos
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
    </div>
  );
}
