// src/context/CartContext.jsx
import { createContext, useContext, useState } from "react";
import toast from "react-hot-toast";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);
    const [isCartOpen, setIsCartOpen] = useState(false);

    // ✅ Fixed: toast called OUTSIDE the state updater
    const addToCart = (product) => {
        const existing = cartItems.find((i) => i.id === product.id);

        if (existing) {
            setCartItems((items) =>
                items.map((i) =>
                    i.id === product.id ? { ...i, qty: i.qty + 1 } : i
                )
            );
            toast.success(`Quantity updated: ${product.name}`, { icon: "🛒" });
        } else {
            setCartItems((items) => [...items, { ...product, qty: 1 }]);
            toast.success(`${product.name} added to cart!`, { icon: "🎁" });
        }
    };

    const removeFromCart = (id) => {
        setCartItems((items) => items.filter((i) => i.id !== id));
        toast.error("Removed from cart");
    };

    const updateQty = (id, delta) => {
        setCartItems((items) =>
            items
                .map((i) => (i.id === id ? { ...i, qty: i.qty + delta } : i))
                .filter((i) => i.qty > 0)
        );
    };

    const clearCart = () => {
        setCartItems([]);
        toast.success("Cart cleared");
    };

    const cartCount = cartItems.reduce((s, i) => s + i.qty, 0);
    const cartTotal = cartItems.reduce((s, i) => s + i.qty * i.price, 0);

    return (
        <CartContext.Provider
            value={{
                cartItems,
                cartCount,
                cartTotal,
                addToCart,
                removeFromCart,
                updateQty,
                clearCart,
                isCartOpen,
                setIsCartOpen,
            }}
        >
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => useContext(CartContext);