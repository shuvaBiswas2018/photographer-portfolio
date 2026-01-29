import "../styles/about.css";

export default function About() {
  return (
    <section id="about" className="about-section">
      {/* Background decoration */}
      <div className="about-bg-glow" />

      <div className="about-container">
        {/* Image / Card */}
        <div className="about-card group">
          <div className="about-card-icon">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="#c9a962"
              strokeWidth="0.4"
            >
              <circle cx="12" cy="8" r="5" />
              <path d="M3 21c0-5 4-8 9-8s9 3 9 8" />
            </svg>
          </div>

          {/* Decorative frame */}
          <div className="about-card-frame" />
          <div className="about-card-glow" />
        </div>

        {/* Content */}
        <div className="about-content">
          <div className="about-label">
            <span />
            <span>About</span>
          </div>

          <h2 className="about-title">
            The Story Behind the Lens
          </h2>

          <p className="about-text">
            With over a decade of experience capturing life&apos;s most precious
            moments, I believe every photograph tells a story waiting to be
            discovered. My approach blends documentary authenticity with
            artistic vision, creating images that resonate on an emotional
            level.
          </p>

          <p className="about-subtext">
            Based in New York, available worldwide for creative collaborations
            and commissions.
          </p>

          {/* Stats */}
          <div className="about-stats">
            <div>
              <h3>500+</h3>
              <span>Projects Completed</span>
            </div>
            <div>
              <h3>12</h3>
              <span>Years Experience</span>
            </div>
            <div>
              <h3>30+</h3>
              <span>Countries Visited</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
