import React,{ createContext } from "react";
import all_product from "../Components/Assets/all_product";
import { useState } from "react";

export const ShopContext = createContext(null);

const getDefaultCart = () => {
        let cart = {};
        for (let i = 1; i < all_product.length + 1; i++) {
            cart[i] = 0;
        }
        return cart;
    }

const ShopContextProvider = (props) => {

    const [cartItems, setCartItems] = useState(getDefaultCart());
    
    const addToCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    }
    
    const removeFromCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
    }

    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const itemId in cartItems) {
            if (cartItems[itemId] > 0) {
                let itemInfo = all_product.find((product) => product.id === Number(itemId));
                totalAmount += cartItems[itemId] * itemInfo.new_price;
            }
        }
        return totalAmount;
    }

    const getTotalCartItems = () => {
        let totalItems = 0;
        for (const itemId in cartItems) {
            if (cartItems[itemId] > 0)
            {
                totalItems += cartItems[itemId];
            }
        }
        return totalItems;
    }

    const contextValue = {all_product, cartItems, addToCart, removeFromCart, getTotalCartAmount, getTotalCartItems};

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    );
}

export default ShopContextProvider;
