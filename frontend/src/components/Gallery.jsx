import "../styles/gallery.css";

const galleryItems = [
  {
    title: "Traditional Portraits",
    year: "Indian Culture • 2024",
    size: "portrait",
    image: "/images/gallery/portrait01.jpg"
  },
  {
    title: "Indian Landscapes",
    year: "Across Bharat • 2023",
    size: "square",
    image: "/images/gallery/landscape01.jpg"
  },
  {
    title: "Heritage & Architecture",
    year: "Temples & Monuments • 2024",
    size: "portrait",
    image: "/images/gallery/portrait02.jpg"
  },
  {
    title: "Editorial & Fashion",
    year: "Featured Project • 2024",
    size: "wide",
    image: "/images/gallery/editorial01.jpg"
  },
  {
    title: "Indian Weddings",
    year: "Candid & Rituals • 2023–2024",
    size: "tall",
    image: "/images/gallery/wedding01.jpg"
  },
  {
    title: "Street Life of India",
    year: "Everyday Stories",
    size: "wideTall",
    image: "/images/gallery/street01.jpg"
  }
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
              style={
                item.image
                  ? { backgroundImage: `url(${item.image})` }
                  : {}
              }
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
