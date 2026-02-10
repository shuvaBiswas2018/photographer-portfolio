import "../styles/hero.css";
import logo from "/images/logo.png";

export default function Hero() {
  return (
    <section className="hero-section" id="home">
      {/* Background Video */}
      <video
        className="hero-video"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster="/images/hero-poster.jpg"
      >
        <source src="/images/hero-video.mp4" type="video/mp4" />
      </video>

      {/* Overlay layers */}
      <div className="hero-overlay" />
      <div className="hero-grain" />

      {/* Decorative glows */}
      <div className="hero-glow hero-glow-left" />
      <div className="hero-glow hero-glow-right" />

      {/* Content */}
      <div className="hero-content">
        <img
          src={logo}
          alt="Shaajora Logo"
          className="hero-logo animate-fade-in"
        />

        <div className="hero-divider animate-fade-in animate-delay-2">
          <span />
          <span className="dot" />
          <span />
        </div>

        <h1 className="hero-title animate-fade-in animate-delay-3">
          SHAAJORA
          <span className="hero-underline" />
        </h1>

        <p className="hero-tagline animate-fade-in animate-delay-4">
          Where Tradition Meets Art
        </p>

        <div className="hero-actions animate-fade-in animate-delay-4">
          <a href="#work" className="hero-primary-btn">
            <span>View Portfolio</span>
            <i />
          </a>

          <a href="#contact" className="hero-secondary-btn">
            Get In Touch →
          </a>
        </div>
      </div>

      {/* Scroll */}
      <div className="hero-scroll animate-fade-in animate-delay-4">
        <span>Scroll</span>
        <div className="scroll-line" />
      </div>
    </section>
  );
}
