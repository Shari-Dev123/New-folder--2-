import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="site-footer">
      <div>
        © {new Date().getFullYear()} Crafts by Craftians — made with care.
      </div>
      <div>
        Follow on <a href="https://www.tiktok.com/@crafts.by.craftians" target="_blank" rel="noreferrer">TikTok</a>
      </div>
    </footer>
  );
};

export default Footer;
