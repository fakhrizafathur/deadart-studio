import { Button } from "react-bootstrap";
import { useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { portfolioItems } from "./data/portfolioData";

const PortfolioSlider = ({ items }) => {
  const sliderRef = useRef(null);

  const scroll = (direction) => {
    if (sliderRef.current) {
      const scrollAmount = window.innerWidth < 768 ? 240 : 320;
      sliderRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="portfolio-slider-container">
      <div className="portfolio-slider" ref={sliderRef}>
        <AnimatePresence>
          {items.map((item) => (
            <motion.div key={item.id} className="portfolio-slide" whileHover={{ scale: 1.05 }} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <div className="portfolio-image-container">
                <img src={item.image} alt={item.title} className="portfolio-img" />
                <div className="portfolio-overlay">
                  <h3>{item.title}</h3>
                  <p className="portfolio-desc">{item.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
      <Button variant="dark" className="slider-btn left" onClick={() => scroll("left")}>
        &#8592;
      </Button>
      <Button variant="dark" className="slider-btn right" onClick={() => scroll("right")}>
        &#8594;
      </Button>
    </div>
  );
};

const SinglePage = () => {
  const artworkBandItems = portfolioItems.filter((item) => item.category === "Artwork Band");
  const komunitasItems = portfolioItems.filter((item) => item.category === "Komunitas");

  return (
    <div className="singlepage-bg">
      {/* Header Section - Full width */}
      <div className="header-section text-center">
        <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 0.5 }}>
          <img src={import.meta.env.BASE_URL + "images/logo.png"} alt="Deadart Studio Logo" className="studio-logo" />
        </motion.div>
        <motion.h1 className="studio-title" initial={{ y: -50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2 }}>
          Deadart Studio
        </motion.h1>
        <motion.div className="studio-badges" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}>
          {/* First row of badges */}
          <div className="badge-row service-badges">
            <span className="badge-service">LOGO</span>
            <span className="badge-service">COVER</span>
            <span className="badge-service">MERCH</span>
            <span className="badge-service">POSTER</span>
          </div>
          {/* Second row of badges */}
          <div className="badge-row style-badges">
            <span className="badge-style">PUNK</span>
            <span className="badge-style">LOWBROW</span>
            <span className="badge-style">ROCKABILLY</span>
            <span className="badge-style">VINTAGSLEAZE</span>
            <span className="badge-style">ROCK'N'ROLL</span>
          </div>
        </motion.div>
        <motion.p className="studio-description" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}>
          DeadArt Studio adalah studio ilustrasi kreatif dengan sentuhan Oldskool Punkrock yang berbasis di Brebes, tumbuh bersama komunitas kreatif lokal, dan berkembang melalui Instagram (@deadart.studio). Kami telah dipercaya menggarap
          artwork untuk band-band lokal untuk keperluan cover album di Spotify dan merchandise, kami juga seringkali menggarap berbagai pesanan dari komunitas maupun proyek personal. Dengan gaya ilustrasi yang penuh karakter, setiap karya
          tidak hanya menjadi visual, tapi juga suara identitas yang ingin disampaikan.
        </motion.p>
      </div>

      <div className="services-section">
        <h2 className="section-title">Our Services</h2>
        <div className="services-grid">
          <div className="service-card">
            <i className="service-icon">🎸</i>
            <h3>Band Artwork</h3>
            <p>Design untuk album, merchandise, dan promotional material</p>
          </div>
          <div className="service-card">
            <i className="service-icon">👕</i>
            <h3>Clothing Design</h3>
            <p>Custom design untuk clothing brand dan merchandise</p>
          </div>
          <div className="service-card">
            <i className="service-icon">🎨</i>
            <h3>Custom Design</h3>
            <p>Artwork kustom sesuai kebutuhan dan karaktermu</p>
          </div>
        </div>
      </div>

      {/* Portfolio Sections - Full width */}
      <div className="portfolio-sections">
        <h2 className="portfolio-section-title">Artwork Band</h2>
        <PortfolioSlider items={artworkBandItems} />

        <h2 className="portfolio-section-title">Artwork Komunitas</h2>
        <PortfolioSlider items={komunitasItems} />
      </div>

      {/* Contact Section - Full width */}
      <footer className="footer-punk">
        <div className="footer-content">
          <div className="contact-info">
            <h3 className="contact-title">Get in Touch</h3>
            <div className="social-links">
              <a href="https://wa.me/6282324609276" className="social-btn whatsapp" target="_blank" rel="noopener noreferrer">
                WhatsApp <span className="social-icon">📱</span>
              </a>
              <a href="https://instagram.com/deadart.studio" className="social-btn instagram" target="_blank" rel="noopener noreferrer">
                Instagram <span className="social-icon">📸</span>
              </a>
            </div>
          </div>
          <div className="footer-quote">"Art Thats Rock Your Story"</div>
        </div>
      </footer>
    </div>
  );
};

export default SinglePage;
