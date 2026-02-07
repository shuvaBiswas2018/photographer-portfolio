import "../styles/pricing.css";

const pricingData = [
  {
    title: "Portrait Session",
    subtitle: "Personal & Professional",
    price: "$450",
    duration: "Starting",
    features: ["90-minute session", "30+ edited photos"],
  },
  {
    title: "Family Session",
    subtitle: "All Ages Welcome",
    price: "$650",
    duration: "2 Hours",
    features: ["2-hour session", "50+ edited photos"],
  },
  {
    title: "Engagement",
    subtitle: "Couples Photography",
    price: "$550",
    duration: "90 Minutes",
    features: ["90-minute session", "40+ edited photos"],
  },
  {
    title: "Wedding",
    subtitle: "Full Day Coverage",
    price: "$3,200",
    duration: "8 Hours",
    features: ["8 hours coverage", "500+ edited photos"],
    featured: true,
  },
  {
    title: "Maternity",
    subtitle: "Expecting Parents",
    price: "$500",
    duration: "2 Hours",
    features: ["2-hour session", "35+ edited photos"],
  },
  {
    title: "Newborn",
    subtitle: "0–4 Weeks Old",
    price: "$600",
    duration: "3 Hours",
    features: ["3-hour session", "40+ edited photos"],
  },
  {
    title: "Event",
    subtitle: "Corporate & Social",
    price: "$850",
    duration: "4 Hours",
    features: ["4-hour coverage", "200+ edited photos"],
  },
  {
    title: "Real Estate",
    subtitle: "Property Photography",
    price: "$400",
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
  {
    title: "Headshots",
    subtitle: "Professional Profile",
    price: "$250",
    duration: "30 Minutes",
    features: ["30-minute session", "10+ edited photos"],
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
          <p>Tailored packages to bring your vision to life</p>
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
                  <span>{item.duration}</span>
                </div>

                <ul>
                  {item.features.map((feature, i) => (
                    <li key={i}>✓ {feature}</li>
                  ))}
                </ul>

                <a href="#contact" className="pricing-btn">
                  {item.price === "Custom" ? "Get Quote" : "Book Now"}
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Footer text */}
        <div className="pricing-footer">
          <p>
            All packages include professional editing, color correction, and
            high-resolution digital files. Travel fees may apply for locations
            beyond 50 miles. Custom packages available upon request.
          </p>
        </div>
      </div>
    </section>
  );
}
