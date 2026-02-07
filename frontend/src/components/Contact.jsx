import "../styles/contact.css";

export default function Contact() {
  return (
    <section id="contact" className="contact-section">
      {/* Background glow */}
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
          </div>

          <div className="form-group">
            <label>Project Type</label>
            <select>
              <option value="">Select a category</option>
              <option>Portrait Session</option>
              <option>Wedding Photography</option>
              <option>Commercial Project</option>
              <option>Editorial Work</option>
              <option>Other</option>
            </select>
          </div>

          <div className="form-group">
            <label>Message</label>
            <textarea rows="4" placeholder="Tell me about your project..." />
          </div>

          <div className="form-actions">
            <button type="submit">Send Message</button>
          </div>
        </form>

        {/* Footer */}
        <div className="contact-footer">
          <p className="contact-email">hello@elenavoss.com</p>

          <div className="contact-socials">
            <a href="#" aria-label="Instagram">
              <i className="icon instagram" />
            </a>
            <a href="#" aria-label="Twitter">
              <i className="icon twitter" />
            </a>
            <a href="#" aria-label="LinkedIn">
              <i className="icon linkedin" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
