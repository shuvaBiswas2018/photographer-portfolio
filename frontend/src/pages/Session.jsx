import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import "../styles/session.css";

const FOLDER_ID = "1kB5QUa5g-aSNymQkOswzvJDZW722yOb9";
const API_KEY = import.meta.env.VITE_GOOGLE_DRIVE_API_KEY;

export default function Session() {
  const { token } = useParams();
  const [photos, setPhotos] = useState([]);

  const fetchPhotos = async () => {
    const url = `https://www.googleapis.com/drive/v3/files?q='${FOLDER_ID}'+in+parents+and+mimeType+contains+'image/'&fields=files(id,name,thumbnailLink)&key=${API_KEY}`;
    const res = await fetch(url);
    const data = await res.json();
    setPhotos(data.files || []);
  };

  useEffect(() => {
    fetchPhotos();
    const interval = setInterval(fetchPhotos, 1000000);
    return () => clearInterval(interval);
  }, []);

  const downloadImage = (id, name) => {
    const link = document.createElement("a");
    link.href = `https://drive.google.com/uc?export=download&id=${id}`;
    link.download = name;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    
    <div className="session-page">
      <nav className="navbar">
      <div className="navbar-name">Elena Voss</div>

      <div className="navbar-links">
        <a href="/home" className="nav-link">Home</a>
        <a href="/work" className="nav-link">Work</a>
        <a href="/about" className="nav-link">About</a>
        <a href="/pricing" className="nav-link">Pricing</a>
        <a href="/contact" className="nav-link">Contact</a>
      </div>
    </nav>
      <div className="gallery-label">
        <span />
        <span>Live Session</span>
        <span />
      </div>
      <h1>Live Session</h1>
      <p className="session-id">Session ID: {token}</p>

      <div className="photo-grid">
        {photos.map((p) => (
          <div className="photo-card" key={p.id}>
            <img
              src={p.thumbnailLink?.replace("=s220", "=s1200")}
              alt={p.name}
            />

            <button
              className="download-btn"
              onClick={() => downloadImage(p.id, p.name)}
            >
              ⬇ Download
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}