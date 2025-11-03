import React from "react";
import "./ProductCard.css";
import { useCart } from "../../context/CartContext.jsx";

const ProductCard = ({ product }) => {
  const { addItem } = useCart();
  return (
    <div className="card">
      <img src={product.image} alt={product.name} />
      <div className="card-body">
        <h3>{product.name}</h3>
        <p className="muted">{product.description}</p>
        <div className="card-footer">
          <strong>Rs{product.price.toFixed(2)}</strong>
          <button onClick={() => addItem(product)}>Add to cart</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
