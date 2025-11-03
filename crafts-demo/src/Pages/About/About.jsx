import React from "react";
import "./About.css";
import logo from "../../assets/logo.png";

const About = () => {
  return (
    <div className="about-page">
      <section className="about-hero">
        <div className="about-hero-content">
          <img src={logo} alt="Crafts by Craftians Logo" className="about-logo" />
          <h1>About <span>Crafts by Craftians</span></h1>
          <p>Where creativity meets craftsmanship — turning everyday ideas into beautifully handcrafted designs.</p>
        </div>
      </section>

      <section className="about-grid">
        <div className="about-text">
          <p><strong>Crafts by Craftians</strong> is a small creative studio specializing in handmade gifts, decor, and custom accessories. Each product is designed and crafted with love — every detail tells a story.</p>

          <p>We’re an online-based business, currently active on TikTok where we engage directly with customers and take pre-orders. This demo website showcases our product gallery, pre-order flow, and creative philosophy.</p>

          <div className="about-values">
            <h3>Our Core Values</h3>
            <ul>
              <li> Premium handcrafted quality</li>
              <li> Personalized customer experience</li>
              <li> Quick order response & pre-order updates</li>
            </ul>
          </div>
        </div>

        <div className="about-visual">
          <img src={logo} alt="Handmade crafts" />
        </div>
      </section>

      <section className="about-mission">
        <h2>Our Mission</h2>
        <p>
          To bring joy and creativity into people’s lives through handcrafted designs that feel personal, thoughtful, and timeless.
        </p>
      </section>
    </div>
  );
};

export default About;
