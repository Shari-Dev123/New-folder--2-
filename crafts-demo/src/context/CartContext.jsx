import React, { createContext, useContext, useReducer, useEffect } from "react";

const CartContext = createContext();

const initialState = {
  items: [] 
};

function cartReducer(state, action) {
  switch (action.type) {
    case "INIT": {
      return action.payload;
    }
    case "ADD_ITEM": {
      const existing = state.items.find(i => i.id === action.payload.id);
      if (existing) {
        return {
          ...state,
          items: state.items.map(i =>
            i.id === action.payload.id ? { ...i, qty: i.qty + 1 } : i
          )
        };
      }
      return { ...state, items: [...state.items, { ...action.payload, qty: 1 }] };
    }
    case "REMOVE_ITEM": {
      return { ...state, items: state.items.filter(i => i.id !== action.payload) };
    }
    case "SET_QTY": {
      const { id, qty } = action.payload;
      if (qty <= 0) {
        return { ...state, items: state.items.filter(i => i.id !== id) };
      }
      return {
        ...state,
        items: state.items.map(i => (i.id === id ? { ...i, qty } : i))
      };
    }
    case "CLEAR": {
      return { items: [] };
    }
    default:
      return state;
  }
}

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  useEffect(() => {
    const raw = localStorage.getItem("crafts_cart_v1");
    if (raw) {
      try {
        const parsed = JSON.parse(raw);
        dispatch({ type: "INIT", payload: parsed });
      } catch (e) {
        
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("crafts_cart_v1", JSON.stringify(state));
  }, [state]);

  const addItem = item => dispatch({ type: "ADD_ITEM", payload: item });
  const removeItem = id => dispatch({ type: "REMOVE_ITEM", payload: id });
  const setQty = (id, qty) => dispatch({ type: "SET_QTY", payload: { id, qty } });
  const clear = () => dispatch({ type: "CLEAR" });

  const totalItems = state.items.reduce((s, it) => s + it.qty, 0);
  const totalPrice = state.items.reduce((s, it) => s + it.qty * Number(it.price), 0);

  return (
    <CartContext.Provider value={{ state, addItem, removeItem, setQty, clear, totalItems, totalPrice }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
