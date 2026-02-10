import { useState, useRef } from "react";
import "../styles/imageUploader.css";

export default function ImageUploader({ shortId }) {
  const [files, setFiles] = useState([]);
  const [uploading, setUploading] = useState(false);
  const [success, setSuccess] = useState(false);
  const fileInputRef = useRef(null);

  const handleFileChange = (e) => {
    setFiles(e.target.files);
    setSuccess(false);
  };

  const uploadImages = async () => {
    if (!files.length) return;

    const formData = new FormData();
    formData.append("shortId", shortId);

    for (let i = 0; i < files.length; i++) {
      formData.append("files", files[i]);
    }

    setUploading(true);

    try {
      const res = await fetch("http://localhost:8000/api/upload/photos", {
        method: "POST",
        body: formData
      });

      if (!res.ok) throw new Error("Upload failed");

      // ✅ Clear after success
      setFiles([]);
      fileInputRef.current.value = "";
      setSuccess(true);
    } catch (err) {
      console.error("Upload error", err);
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="image-uploader">
      {/* 🔹 Heading */}
      <h2 className="uploader-title">Upload Event Photos</h2>

      {/* 🔹 Instructions */}
      <p className="uploader-instructions">
        Select one or more photos from the event and upload them to make them
        instantly available in the live session gallery.
      </p>

      <input
        ref={fileInputRef}
        type="file"
        multiple
        accept="image/*"
        onChange={handleFileChange}
      />

      <button
        className="upload-btn"
        onClick={uploadImages}
        disabled={uploading || !files.length}
      >
        {uploading ? "Uploading..." : "Upload Photos"}
      </button>

      {success && (
        <p className="upload-success">
          ✅ Photos uploaded successfully
        </p>
      )}
    </div>
  );
}
