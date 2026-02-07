import { useState } from "react";
import { useLocation } from "react-router-dom";
import "../styles/navbar.css";

export default function Navbar() {
  const location = useLocation();
  const [open, setOpen] = useState(false);

  // 🔒 Hide navbar on session pages
  if (location.pathname.startsWith("/session")) {
    return null;
  }

  return (
    <nav className="navbar">
      <div className="navbar-name">Elena Voss</div>

      {/* Hamburger */}
      <div
        className={`hamburger ${open ? "active" : ""}`}
        onClick={() => setOpen(!open)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      <div className={`navbar-links ${open ? "open" : ""}`}>
        <a href="/home" className="nav-link" onClick={() => setOpen(false)}>Home</a>
        <a href="/work" className="nav-link" onClick={() => setOpen(false)}>Work</a>
        <a href="/about" className="nav-link" onClick={() => setOpen(false)}>About</a>
        <a href="/pricing" className="nav-link" onClick={() => setOpen(false)}>Pricing</a>
        <a href="/contact" className="nav-link" onClick={() => setOpen(false)}>Contact</a>
      </div>
    </nav>
  );
}
