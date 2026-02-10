import "../styles/contact.css";

export default function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-bg-glow" />

      <div className="contact-container">
        {/* Header */}
        <div className="contact-header">
          <div className="contact-label">
            <span />
            <span>Get In Touch</span>
            <span />
          </div>

          <h2>Let&apos;s Create Together</h2>
          <p>
            Available for commissions, collaborations, and creative projects
            worldwide
          </p>
        </div>

        {/* Form */}
        <form className="contact-form">
          <div className="form-grid">
            <div className="form-group">
              <label>Name</label>
              <input type="text" placeholder="Your name" />
            </div>

            <div className="form-group">
              <label>Email</label>
              <input type="email" placeholder="your@email.com" />
            </div>

            <div className="form-group">
              <label>Phone Number</label>
              <input type="tel" placeholder="+91 XXXXX XXXXX" />
            </div>

            <div className="form-group">
              <label>Project Type</label>
              <select>
                <option value="">Select a category</option>
                <option>Portrait Session</option>
                <option>Family Session</option>
                <option>Engagement</option>
                <option>Maternity Session</option>
                <option>Wedding Photography</option>
                <option>Newborn Session</option>
                <option>Commercial Project</option>
                <option>Real Estate</option>
                <option>Other</option>
              </select>
            </div>

            {/* Message */}
            <div className="form-group full-width">
              <label>Message</label>
              <textarea rows="4" placeholder="Tell me about your project..." />
            </div>
          </div>

          <div className="form-actions">
            <button type="submit">Send Message</button>
          </div>
        </form>

        {/* Footer */}
        <div className="contact-footer">
          <p className="contact-email">shajoora@hotmail.com</p>
          <p className="contact-phone">+91 98366 63903</p>

          <div className="contact-socials">
  {/* Instagram */}
  <a href="#" aria-label="Instagram" className="social-icon">
    <svg viewBox="0 0 24 24" width="22" height="22">
      <defs>
        <linearGradient id="ig" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#feda75" />
          <stop offset="25%" stopColor="#fa7e1e" />
          <stop offset="50%" stopColor="#d62976" />
          <stop offset="75%" stopColor="#962fbf" />
          <stop offset="100%" stopColor="#4f5bd5" />
        </linearGradient>
      </defs>
      <path
        fill="url(#ig)"
        d="M7 2h10a5 5 0 015 5v10a5 5 0 01-5 5H7a5 5 0 01-5-5V7a5 5 0 015-5zm5 5a5 5 0 100 10 5 5 0 000-10z"
      />
    </svg>
  </a>

  {/* Facebook */}
  <a href="#" aria-label="Facebook" className="social-icon">
    <svg viewBox="0 0 24 24" width="22" height="22" fill="#1877F2">
      <path d="M13 22v-9h3l1-4h-4V7c0-1 .5-2 2-2h2V1h-3c-4 0-5 3-5 6v2H6v4h3v9z" />
    </svg>
  </a>

  {/* WhatsApp */}
  <a href="#" aria-label="WhatsApp" className="social-icon">
    <svg viewBox="0 0 24 24" width="22" height="22" fill="#25D366">
      <path d="M20 3.9A10 10 0 003.3 17L2 22l5-1.3A10 10 0 1020 3.9z" />
    </svg>
  </a>
</div>

        </div>
      </div>
    </section>
  );
}
