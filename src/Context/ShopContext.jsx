import React, { useState, createContext } from "react";
import all_product from "../Components/Assets/all_product";
import { stringify } from "postcss";
export const ShopContext = createContext(null);

const getDefaultCart = () => {
  let cart = {};
  for (let index = 0; index < all_product.length + 1; index++) {
    cart[index] = 0;
  }
  return cart;
};

const ShopContextProvider = (props) => {

  const [cartItems, setCartItems] = useState([]);

  const addToCart = (itemId) => {
    if(!cartItems.includes(itemId)) {
        setCartItems((prev) => [...prev, itemId ]);
    }
  };
  const removeFromCart = (itemId) => {
    setCartItems((prev) => cartItems.filter(i => i != itemId));
  };

  const getTotalCartAmount = () => {
    return cartItems.length;
  };

  const getTotalCartItems = () => {
    let totalItem = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        totalItem += cartItems[item];
      }
    }
    return totalItem;
  };

  const contextValue = {
    getTotalCartItems,
    getTotalCartAmount,
    all_product,
    cartItems,
    addToCart,
    removeFromCart,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
