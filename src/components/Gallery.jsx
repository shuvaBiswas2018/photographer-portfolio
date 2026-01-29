import "../styles/gallery.css";

const galleryItems = [
  { title: "Portrait Series", year: "2024", size: "portrait" },
  { title: "Landscapes", year: "2023", size: "square" },
  { title: "Architecture", year: "2024", size: "portrait" },
  { title: "Editorial Work", year: "Featured Project • 2024", size: "wide" },
  { title: "Weddings", year: "2023–2024", size: "tall" },
  { title: "Time & Motion", year: "Experimental Series", size: "wideTall" }
];

export default function Gallery() {
  return (
    <section id="work" className="gallery-section">
      {/* Background pattern */}
      <div className="gallery-bg-pattern" />

      <div className="gallery-container">
        {/* Header */}
        <div className="gallery-header">
          <div className="gallery-label">
            <span />
            <span>Portfolio</span>
            <span />
          </div>

          <h2 className="gallery-title animate-fade-in">
            Selected Work
          </h2>

          <p className="gallery-subtitle">
            A curated collection of moments frozen in time
          </p>
        </div>

        {/* Grid */}
        <div className="gallery-grid">
          {galleryItems.map((item, index) => (
            <div
              key={index}
              className={`gallery-item ${item.size} animate-fade-in animate-delay-${index + 1}`}
            >
              {/* Icon placeholder */}
              <div className="gallery-icon" />

              {/* Soft glow */}
              <div className="gallery-glow" />

              {/* Overlay */}
              <div className="gallery-overlay">
                <h3>{item.title}</h3>
                <span>{item.year}</span>
              </div>

              {/* Decorative border */}
              <div className="gallery-deco" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
