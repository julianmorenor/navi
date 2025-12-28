import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
    const [cartOpen, setCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);

    const toggleCart = () => setCartOpen(!cartOpen);

    const addToCart = (product) => {
        setCartItems(prev => [...prev, product]);
        setCartOpen(true);
    };

    const removeFromCart = (index) => {
        setCartItems(prev => prev.filter((_, i) => i !== index));
    };

    const cartTotal = cartItems.reduce((acc, item) => {
        const price = parseFloat(item.price.replace('$', ''));
        return acc + price;
    }, 0);

    return (
        <CartContext.Provider value={{ cartOpen, toggleCart, cartItems, addToCart, removeFromCart, cartTotal }}>
            {children}
        </CartContext.Provider>
    );
};
