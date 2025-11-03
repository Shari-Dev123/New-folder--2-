import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navabr.css";
import { useCart } from "../../context/CartContext.jsx";

const Navbar = () => {
  const { totalItems } = useCart();
  return (
    <header className="nav">
      <div className="nav__logo">
        <Link to="/">Crafts by Craftians</Link>
      </div>
      <nav className="nav__links">
        <NavLink to="/" end className={({isActive}) => isActive ? 'active' : ''}>Home</NavLink>
        <NavLink to="/products" className={({isActive}) => isActive ? 'active' : ''}>Products</NavLink>
        <NavLink to="/about" className={({isActive}) => isActive ? 'active' : ''}>About</NavLink>
        <NavLink to="/contact" className={({isActive}) => isActive ? 'active' : ''}>Contact</NavLink>
        <NavLink to="/cart" className="cart-link">
          Cart <span className="cart-badge">{totalItems}</span>
        </NavLink>
      </nav>
    </header>
  );
};

export default Navbar;
