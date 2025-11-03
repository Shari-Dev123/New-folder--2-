import React from "react";
import "./CardItem.css";

const CartItem = ({ item, onRemove, onSetQty }) => {
  return (
    <div className="cart-item">
      <img src={item.image} alt={item.name} />
      <div className="cart-item-body">
        <h4>{item.name}</h4>
        <p className="muted">${item.price.toFixed(2)} each</p>
        <div className="qty-controls">
          <button onClick={() => onSetQty(item.id, item.qty - 1)}>-</button>
          <span>{item.qty}</span>
          <button onClick={() => onSetQty(item.id, item.qty + 1)}>+</button>
        </div>
      </div>
      <div className="cart-item-right">
        <div className="item-total">${(item.price * item.qty).toFixed(2)}</div>
        <button className="remove" onClick={() => onRemove(item.id)}>Remove</button>
      </div>
    </div>
  );
};

export default CartItem;
