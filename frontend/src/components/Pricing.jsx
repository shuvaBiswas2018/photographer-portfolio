import "../styles/pricing.css";

const pricingData = [
  {
    title: "Portrait Session",
    subtitle: "Personal & Professional",
    price: "₹35,000",
    duration: "90 Minutes",
    features: ["90-minute session", "30+ edited photos"],
  },
  {
    title: "Family Session",
    subtitle: "All Ages Welcome",
    price: "₹50,000",
    duration: "2 Hours",
    features: ["2-hour session", "50+ edited photos"],
  },
  {
    title: "Engagement",
    subtitle: "Couples Photography",
    price: "₹42,000",
    duration: "90 Minutes",
    features: ["90-minute session", "40+ edited photos"],
  },
  {
    title: "Wedding",
    subtitle: "Full Day Coverage",
    price: "₹50,000",
    duration: "8 Hours",
    features: ["8 hours coverage", "500+ edited photos"],
    featured: true,
  },
  {
    title: "Maternity",
    subtitle: "Expecting Parents",
    price: "₹38,000",
    duration: "2 Hours",
    features: ["2-hour session", "35+ edited photos"],
  },
  {
    title: "Newborn",
    subtitle: "0–4 Weeks Old",
    price: "₹45,000",
    duration: "3 Hours",
    features: ["3-hour session", "40+ edited photos"],
  },
  {
    title: "Event",
    subtitle: "Corporate & Social",
    price: "₹65,000",
    duration: "4 Hours",
    features: ["4-hour coverage", "200+ edited photos"],
  },
  {
    title: "Real Estate",
    subtitle: "Property Photography",
    price: "₹30,000",
    duration: "Per Property",
    features: ["25+ edited photos", "HDR processing"],
  },
  {
    title: "Commercial",
    subtitle: "Brand & Product",
    price: "Custom",
    duration: "Per Project",
    features: ["Flexible duration", "Full licensing"],
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="pricing-section">
      {/* Background pattern */}
      <div className="pricing-bg-pattern" />

      <div className="pricing-container">
        {/* Header */}
        <div className="pricing-header">
          <div className="pricing-label">
            <span />
            <span>Investment</span>
            <span />
          </div>

          <h2>Service Pricing</h2>
          <p>
            Tailored packages to bring your vision to life.  
            Prices shown are starting values and may vary based on requirements.
          </p>
        </div>

        {/* Cards */}
        <div className="pricing-grid">
          {pricingData.map((item, index) => (
            <div
              key={index}
              className={`pricing-card-wrapper ${
                item.featured ? "featured" : ""
              }`}
            >
              <div className="pricing-card">
                {item.featured && <div className="badge">Popular</div>}

                <h3>{item.title}</h3>
                <span className="subtitle">{item.subtitle}</span>

                <div className="price-box">
                  <div className="price">{item.price}</div>
                  {item.price !== "Custom" && (
                    <span className="price-note">
                      Starting from • {item.duration}
                    </span>
                  )}
                  {item.price === "Custom" && (
                    <span className="price-note">Custom Pricing</span>
                  )}
                </div>

                <ul>
                  {item.features.map((feature, i) => (
                    <li key={i}>✓ {feature}</li>
                  ))}
                </ul>

                <a href="#contact" className="pricing-btn">
                  {item.price === "Custom" ? "Get Quote" : "Enquire Now"}
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Footer text */}
        <div className="pricing-footer">
          <p>
            All prices mentioned are minimum starting investments and may vary
            depending on shoot duration, location, deliverables, and
            customization needs. Professional editing, color correction, and
            high-resolution digital files are included. Custom packages are
            available upon request.
          </p>
        </div>
      </div>
    </section>
  );
}
