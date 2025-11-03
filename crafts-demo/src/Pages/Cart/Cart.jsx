import React from "react";
import { useCart } from "../../context/CartContext.jsx";
import CartItem from "../../Components/CardItem/CardItem.jsx";
import "./Cart.css";

const Cart = () => {
  const { state, removeItem, setQty, totalPrice, clear } = useCart();
  const items = state.items;

  return (
    <div className="cart-page">
      <h2 className="section-title">Your Cart</h2>
      {items.length === 0 ? (
        <div className="empty">
          <p>Your cart is empty — add some beautiful crafts!</p>
        </div>
      ) : (
        <div className="cart-layout">
          <div className="cart-items">
            {items.map(it => (
              <CartItem
                key={it.id}
                item={it}
                onRemove={removeItem}
                onSetQty={setQty}
              />
            ))}
          </div>

          <aside className="cart-summary">
            <div className="summary-box">
              <h3>Order Summary</h3>
              <p>Items: {items.reduce((s,i)=>s+i.qty,0)}</p>
              <p className="total">Total: Rs{totalPrice.toFixed(2)}</p>
              <button className="checkout">Proceed (Demo)</button>
              <button className="clear" onClick={clear}>Clear Cart</button>
            </div>
          </aside>
        </div>
      )}
    </div>
  );
};

export default Cart;
