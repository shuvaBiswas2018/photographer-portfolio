import { useLocation } from "react-router-dom";
import "../styles/navbar.css";

export default function Navbar() {
  const location = useLocation();

  // 🔒 Hide navbar on session pages
  if (location.pathname.startsWith("/session")) {
    return null;
  }

  return (
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
  );
}
