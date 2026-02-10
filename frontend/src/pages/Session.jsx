import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import "../styles/session.css";
import logo from "/images/logo.png";
import Navbar from "../components/Navbar";


export default function Session() {
  const { token } = useParams(); // token = shortId
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchPhotos = async () => {
    try {
      const res = await fetch(
        `http://localhost:8000/api/session/photos/${token}`
      );
      const data = await res.json();
      setPhotos(data);
    } catch (err) {
      console.error("Failed to load photos", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPhotos();
    const interval = setInterval(fetchPhotos, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
  <>
    <Navbar />

    <div className="session-page">
      {/* LABEL */}
      <div className="gallery-label">
        <span />
        <span>Live Session</span>
        <span />
      </div>

      <h1>Live Session</h1>
      <p className="session-id">Session ID: {token}</p>

      {loading && <p>Loading photos...</p>}

      <div className="photo-grid">
        {photos.map((photo, index) => (
          <div className="photo-card" key={index}>
            <div className="photo-wrapper">
              <img src={photo.url} alt="Session" />

              <a
                href={`http://localhost:8000/api/session/download?key=${encodeURIComponent(
                  photo.key
                )}`}
                className="download-btn"
              >
                ⬇ Download
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  </>
);
}
