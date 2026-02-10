import "../styles/about.css";
import aboutImg from "/images/shaajora_admin.jpg"; // adjust path if needed

export default function About() {
  return (
    <section id="about" className="about-section">
      {/* Background glow */}
      <div className="about-bg-glow" />

      {/* Centered ABOUT label */}
      <div className="about-label-wrapper">
        <div className="about-label">
          <span className="label-line" />
          <span className="label-text">About</span>
          <span className="label-line" />
        </div>
      </div>

      {/* Main content */}
      <div className="about-container">
        {/* Image card */}
        <div className="about-card">
          <img
            src={aboutImg}
            alt="Photographer portrait"
            className="about-image"
          />
          <div className="about-card-frame" />
          <div className="about-card-glow" />
        </div>

        {/* Text content */}
        <div className="about-content">
          <h2 className="about-title">The Story Behind the Lens</h2>

          <p className="about-text">
            With over five years of hands-on experience, I specialize in
            capturing authentic moments that feel natural, emotional, and
            timeless. My photography style focuses on storytelling — preserving
            real expressions, subtle details, and meaningful connections.
          </p>

          <p className="about-subtext">
            Every project is approached with patience, creativity, and a deep
            respect for the story being told — whether it’s a portrait,
            lifestyle shoot, or a special personal moment.
          </p>

          <div className="about-stats">
            <div>
              <h3>150+</h3>
              <span>Projects Completed</span>
            </div>
            <div>
              <h3>5+</h3>
              <span>Years Experience</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
