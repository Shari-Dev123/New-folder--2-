import React, { useState } from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import { FaGift, FaHeart, FaHandshake, FaStar } from "react-icons/fa";

import handmade from "../../assets/Handmade cards.png";
import chocolate from "../../assets/Chocolate bouquet.png";
import mini from "../../assets/Mini cards.png";
import scrapbook from "../../assets/Scrapbook.png";
import handmade1 from "../../assets/Handmade cards1.png";
import Mini2 from "../../assets/Mini cards2.png";
import Mini3 from "../../assets/Mini cards3.png";
import Chocolate1 from "../../assets/Chocolate bouquet1.png";

const categories = [
  {
    id: 1,
    title: "Chocolate Bouquets",
    direction: "left",
    products: [
      { id: 101, name: "Deluxe Chocolate Bouquet", img: Chocolate1 },
      { id: 102, name: "Sweet Surprise", img: chocolate },
      { id: 103, name: "Gift Bundle Pack", img: chocolate },
    ],
  },
  {
    id: 2,
    title: "Handmade Cards ",
    direction: "right",
    products: [
      { id: 201, name: "Birthday Card", img: handmade1 },
      { id: 202, name: "Anniversary Card", img: handmade },
      { id: 203, name: "Friendship Card", img: handmade },
    ],
  },
  {
    id: 3,
    title: "Mini Cards ",
    direction: "left",
    products: [
      { id: 301, name: "Tiny Love Notes", img: Mini2 },
      { id: 302, name: "Mini Thank You", img: Mini3 },
      { id: 303, name: "Pocket Greeting", img: mini },
    ],
  },
  {
    id: 4,
    title: "Scrapbooks ",
    direction: "right",
    products: [
      { id: 401, name: "Custom Scrapbook", img: scrapbook },
      { id: 402, name: "Memory Journal", img: scrapbook },
      { id: 403, name: "Gift Scrap Album", img: scrapbook },
    ],
  },
];

const Home = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleProductClick = (product) => setSelectedProduct(product);
  const handleCloseOverlay = () => setSelectedProduct(null);

  return (
    <div className="home-page">
      
      <section className="hero full-height">
        <div className="hero-content">
          <h1 className="hero-title">Crafts by Craftians</h1>
          <p className="hero-subtitle">
            Discover handmade decor and personalized gifts crafted with love.
            Every piece tells your story.
          </p>
          <div className="hero-buttons">
            <Link className="btn primary" to="/products">Explore Products</Link>
            <a
              className="btn secondary"
              href="https://www.tiktok.com/@crafts.by.craftians"
              target="_blank"
              rel="noreferrer"
            >
              Visit TikTok
            </a>
          </div>
        </div>
      </section>

      <section className="intro">
        <h2>Our Collections</h2>
        <p>Browse our handcrafted product categories and find something special.</p>
      </section>

      {categories.map((cat) => (
        <section key={cat.id} className="category-section">
          <h2 className="category-title">{cat.title}</h2>
          <div className="scroll-container">
            {cat.products.map((p) => (
              <div key={p.id} className="product-card" onClick={() => handleProductClick(p)}>
                <img src={p.img} alt={p.name} />
                <p>{p.name}</p>
              </div>
            ))}
          </div>
          <div className="show-more">
            <Link to="/products" className="btn show-more-btn">
              Show More →
            </Link>
          </div>
        </section>
      ))}

      <section className="why-us">
        <h2>Why Choose Us</h2>
        <div className="why-grid">
          <div className="why-card">
            <FaGift className="icon" />
            <h3>Handcrafted Gifts</h3>
            <p>Every item is uniquely made with care and creativity.</p>
          </div>
          <div className="why-card">
            <FaHeart className="icon" />
            <h3>Made with Love</h3>
            <p>Each product carries warmth and authenticity.</p>
          </div>
          <div className="why-card">
            <FaHandshake className="icon" />
            <h3>Custom Orders</h3>
            <p>Personalize your orders to match your style and story.</p>
          </div>
          <div className="why-card">
            <FaStar className="icon" />
            <h3>Customer Satisfaction</h3>
            <p>We value trust, quality, and long-term relationships.</p>
          </div>
        </div>
      </section>

      <section className="testimonials">
        <h2>What Our Customers Say</h2>
        <div className="testimonial-grid">
          <div className="testimonial-card">
            <p>"The handmade card was absolutely beautiful. Perfect detailing!"</p>
            <h4>— Ayesha K.</h4>
          </div>
          <div className="testimonial-card">
            <p>"Loved the chocolate bouquet! It made my gift extra special."</p>
            <h4>— Ali R.</h4>
          </div>
          <div className="testimonial-card">
            <p>"They delivered exactly what I imagined. Highly recommend!"</p>
            <h4>— Sarah T.</h4>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <h2>Want Something Custom?</h2>
        <p>We create personalized gifts for birthdays, weddings, and special occasions.</p>
        <Link to="/contact" className="btn primary">Contact Us</Link>
      </section>

      {selectedProduct && (
        <div className="overlay" onClick={handleCloseOverlay}>
          <div className="overlay-box" onClick={(e) => e.stopPropagation()}>
            <img src={selectedProduct.img} alt={selectedProduct.name} />
            <h3>{selectedProduct.name}</h3>
            <div className="overlay-actions">
              <button className="btn primary">Add to Cart</button>
              <Link to="/products" className="btn secondary">View in Products</Link>
            </div>
            <button className="close-btn" onClick={handleCloseOverlay}>×</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
