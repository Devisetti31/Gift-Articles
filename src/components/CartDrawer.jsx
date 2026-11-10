import { AnimatePresence, motion } from "framer-motion";
import { FaTimes, FaTrash, FaPlus, FaMinus, FaShoppingBag } from "react-icons/fa";
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

export default function CartDrawer() {
    const {
        cartItems, cartTotal, isCartOpen, setIsCartOpen,
        removeFromCart, updateQty, clearCart,
    } = useCart();

    return (
        <AnimatePresence>
            {isCartOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setIsCartOpen(false)}
                        className="fixed inset-0 bg-black/40 z-[60]"
                    />

                    {/* Drawer */}
                    <motion.aside
                        initial={{ x: "100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "100%" }}
                        transition={{ type: "tween", duration: 0.3 }}
                        className="fixed top-0 right-0 h-full w-full max-w-md bg-white dark:bg-dark-card z-[70] shadow-2xl flex flex-col"
                    >
                        <header className="flex items-center justify-between px-6 py-4 border-b border-brand-pink/30">
                            <h2 className="font-display text-xl font-semibold text-brand-maroon flex items-center gap-2">
                                <FaShoppingBag /> Your Cart
                            </h2>
                            <button
                                onClick={() => setIsCartOpen(false)}
                                className="text-brand-maroon hover:text-brand-rose text-lg"
                                aria-label="Close cart"
                            >
                                <FaTimes />
                            </button>
                        </header>

                        <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4">
                            {cartItems.length === 0 ? (
                                <div className="text-center text-gray-500 mt-20">
                                    <FaShoppingBag className="mx-auto text-5xl text-brand-pink mb-3" />
                                    <p>Your cart is empty</p>
                                    <Link
                                        to="/categories"
                                        onClick={() => setIsCartOpen(false)}
                                        className="mt-4 inline-block text-brand-rose font-medium hover:underline"
                                    >
                                        Browse gifts →
                                    </Link>
                                </div>
                            ) : (
                                cartItems.map((item) => (
                                    <div
                                        key={item.id}
                                        className="flex gap-3 bg-brand-cream dark:bg-dark-bg rounded-xl p-3"
                                    >
                                        <img
                                            src={item.image}
                                            alt={item.name}
                                            className="w-16 h-16 rounded-lg object-cover"
                                        />
                                        <div className="flex-1">
                                            <p className="text-sm font-semibold text-brand-maroon line-clamp-1">
                                                {item.name}
                                            </p>
                                            <p className="text-xs text-gray-500">₹{item.price}</p>
                                            <div className="flex items-center gap-2 mt-2">
                                                <button
                                                    onClick={() => updateQty(item.id, -1)}
                                                    className="w-6 h-6 flex items-center justify-center rounded-full bg-brand-pink/40 text-brand-maroon text-xs"
                                                >
                                                    <FaMinus />
                                                </button>
                                                <span className="text-sm w-5 text-center">{item.qty}</span>
                                                <button
                                                    onClick={() => updateQty(item.id, 1)}
                                                    className="w-6 h-6 flex items-center justify-center rounded-full bg-brand-pink/40 text-brand-maroon text-xs"
                                                >
                                                    <FaPlus />
                                                </button>
                                                <button
                                                    onClick={() => removeFromCart(item.id)}
                                                    className="ml-auto text-brand-rose hover:text-brand-maroon"
                                                >
                                                    <FaTrash />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            )}
                        </div>

                        {cartItems.length > 0 && (
                            <footer className="border-t border-brand-pink/30 p-6 space-y-3">
                                <div className="flex justify-between font-semibold text-brand-maroon">
                                    <span>Subtotal</span>
                                    <span>₹{cartTotal}</span>
                                </div>
                                <button
                                    onClick={() => {
                                        alert("🎉 Order placed! (Static demo — no backend)");
                                        clearCart();
                                        setIsCartOpen(false);
                                    }}
                                    className="w-full bg-brand-rose text-white py-3 rounded-full font-medium hover:bg-brand-maroon transition"
                                >
                                    Checkout
                                </button>
                                <button
                                    onClick={clearCart}
                                    className="w-full text-sm text-gray-500 hover:text-brand-rose"
                                >
                                    Clear cart
                                </button>
                            </footer>
                        )}
                    </motion.aside>
                </>
            )}
        </AnimatePresence>
    );
}
