import "../styles/navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-name">
        Elena Voss
      </div>

      <div className="navbar-links">
        <a href="#work" className="nav-link">Work</a>
        <a href="#about" className="nav-link">About</a>
        <a href="#pricing" className="nav-link">Pricing</a>
        <a href="#contact" className="nav-link">Contact</a>
      </div>
    </nav>
  );
}
