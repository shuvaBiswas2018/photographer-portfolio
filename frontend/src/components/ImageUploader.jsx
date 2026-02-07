import { useState } from "react";
import "../styles/imageUploader.css";

export default function ImageUploader({ sessionToken }) {
  const [selectedFile, setSelectedFile] = useState(null);
  const [files, setFiles] = useState([]);

  const uploadImage = async () => {
    if (!selectedFile) return alert("Please choose a file");

    const formData = new FormData();
    formData.append("file", selectedFile);

    const res = await fetch(
      `http://localhost:8000/api/session/${sessionToken}/upload`,
      {
        method: "POST",
        body: formData
      }
    );

    const data = await res.json();
    setFiles((prev) => [...prev, data.filename]);
    setSelectedFile(null);
  };

  return (
    <div className="image-uploader">
      <h3>Upload Event Photos</h3>

      <input
        type="file"
        accept="image/*"
        onChange={(e) => setSelectedFile(e.target.files[0])}
      />

      <button className="upload-btn" onClick={uploadImage}>
        Upload Photo
      </button>

      <div className="file-list">
        {files.map((file, index) => (
          <div key={index} className="file-name">
            {file}
          </div>
        ))}
      </div>
    </div>
  );
}
