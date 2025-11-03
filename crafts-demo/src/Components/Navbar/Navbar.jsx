import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";
import { useCart } from "../../context/CartContext.jsx";

const Navbar = () => {
  const { totalItems } = useCart();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="nav">
      <div className="nav__logo">
        <Link to="/" onClick={closeMenu}>Crafts by Craftians</Link>
      </div>

      <div className="menu-icon" onClick={toggleMenu}>
        {menuOpen ? "×" : "≡"}
      </div>

      <nav className={`nav__links ${menuOpen ? "active" : ""}`}>
        <NavLink to="/" end onClick={closeMenu} className={({ isActive }) => isActive ? "active" : ""}>
          Home
        </NavLink>
        <NavLink to="/products" onClick={closeMenu} className={({ isActive }) => isActive ? "active" : ""}>
          Products
        </NavLink>
        <NavLink to="/about" onClick={closeMenu} className={({ isActive }) => isActive ? "active" : ""}>
          About
        </NavLink>
        <NavLink to="/contact" onClick={closeMenu} className={({ isActive }) => isActive ? "active" : ""}>
          Contact
        </NavLink>
        <NavLink to="/cart" onClick={closeMenu} className="cart-link">
          Cart <span className="cart-badge">{totalItems}</span>
        </NavLink>
      </nav>
    </header>
  );
};

export default Navbar;
