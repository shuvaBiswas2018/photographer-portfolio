import "../styles/hero.css";

export default function Hero() {
  return (
    <section className="hero-section">
      {/* Decorative blurred circles */}
      <div className="hero-glow hero-glow-left" />
      <div className="hero-glow hero-glow-right" />

      <div className="hero-content">
        {/* Decorative line */}
        <div className="hero-divider animate-fade-in">
          <span />
          <span className="dot" />
          <span />
        </div>

        {/* Name */}
        <h1 className="hero-title animate-fade-in">
          Elena Voss
          <span className="hero-underline" />
        </h1>

        {/* Tagline */}
        <p className="hero-tagline animate-fade-in animate-delay-2">
          Capturing Light &amp; Emotion
        </p>

        {/* Actions */}
        <div className="hero-actions animate-fade-in animate-delay-3">
          <a href="#work" className="hero-primary-btn">
            <span>View Portfolio</span>
            <i />
          </a>

          <a href="#contact" className="hero-secondary-btn">
            Get In Touch →
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="hero-scroll animate-fade-in animate-delay-4">
        <span>Scroll</span>
        <div className="scroll-line" />
      </div>
    </section>
  );
}
