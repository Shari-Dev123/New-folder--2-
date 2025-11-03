import React from "react";
import "./Contact.css";
import { FaTiktok, FaEnvelope, FaPhoneAlt, FaInstagram } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="contact-page">
      <div className="contact-header">
        <h2>Get in Touch </h2>
        <p>
          Have a custom order in mind or just want to say hello? We’d love to hear from you.  
          Reach out through any of the platforms below.
        </p>
      </div>

      <div className="contact-grid">
        <div className="contact-card">
          <FaTiktok className="icon" />
          <h3>TikTok</h3>
          <a
            href="https://www.tiktok.com/@crafts.by.craftians"
            target="_blank"
            rel="noreferrer"
          >
            @crafts.by.craftians
          </a>
        </div>

        <div className="contact-card">
          <FaInstagram className="icon" />
          <h3>Instagram</h3>
          <a
            href="https://www.instagram.com/crafts.by.craftians"
            target="_blank"
            rel="noreferrer"
          >
            @crafts.by.craftians
          </a>
        </div>

        <div className="contact-card">
          <FaEnvelope className="icon" />
          <h3>Email</h3>
          <p>hello@craftsbycraftians.example</p>
        </div>

        <div className="contact-card">
          <FaPhoneAlt className="icon" />
          <h3>Phone</h3>
          <p>+92 318 1722672</p>
        </div>
      </div>

      
    </div>
  );
};

export default Contact;
