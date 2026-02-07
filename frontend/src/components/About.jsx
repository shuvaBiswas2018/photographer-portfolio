import "../styles/about.css";

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
        {/* Card */}
        <div className="about-card">
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

          <div className="about-card-frame" />
          <div className="about-card-glow" />
        </div>

        {/* Text content */}
        <div className="about-content">
          <h2 className="about-title">The Story Behind the Lens</h2>

          <p className="about-text">
            With over a decade of experience capturing life&apos;s most precious
            moments, I believe every photograph tells a story waiting to be
            discovered. My approach blends documentary authenticity with
            artistic vision, creating images that resonate emotionally.
          </p>

          <p className="about-subtext">
            Based in New York, available worldwide for creative collaborations
            and commissions.
          </p>

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
