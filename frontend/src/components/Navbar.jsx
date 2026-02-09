import { useState } from "react";
import { useLocation, Link } from "react-router-dom";
import "../styles/navbar.css";
import logo from "/images/logo.png";

export default function Navbar() {
  const location = useLocation();
  const [open, setOpen] = useState(false);

  // 🔒 Hide navbar on session pages
  if (location.pathname.startsWith("/session")) {
    return null;
  }

  return (
    <nav className="navbar">
      {/* Brand / Logo */}
      <Link
        to="/home"
        className="navbar-brand"
        onClick={() => setOpen(false)}
      >
        <img src={logo} alt="Shaajora Logo" className="navbar-logo" />
        <div className="brand-text">
          <span className="brand-name">SHAAJORA</span>
          <span className="brand-tagline">Where Tradition Meets Art</span>
        </div>
      </Link>

      {/* Hamburger */}
      <div
        className={`hamburger ${open ? "active" : ""}`}
        onClick={() => setOpen(!open)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Navigation Links */}
      <div className={`navbar-links ${open ? "open" : ""}`}>
        <Link to="/home" className="nav-link" onClick={() => setOpen(false)}>
          Home
        </Link>
        <Link to="/work" className="nav-link" onClick={() => setOpen(false)}>
          Work
        </Link>
        <Link to="/about" className="nav-link" onClick={() => setOpen(false)}>
          About
        </Link>
        <Link to="/pricing" className="nav-link" onClick={() => setOpen(false)}>
          Pricing
        </Link>
        <Link to="/contact" className="nav-link" onClick={() => setOpen(false)}>
          Contact
        </Link>
      </div>
    </nav>
  );
}
