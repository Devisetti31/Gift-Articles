import { FaStar, FaCartPlus } from "react-icons/fa";
import { motion } from "framer-motion";
import { useCart } from "../context/CartContext";

export default function ProductCard({ product }) {
    const { addToCart } = useCart();

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.4 }}
            whileHover={{ y: -6 }}
            className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow flex flex-col"
        >
            <div className="relative h-52 overflow-hidden">
                <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {product.isNew && (
                    <span className="absolute top-3 left-3 bg-brand-rose text-white text-[10px] font-bold px-2 py-1 rounded-full uppercase">
                        New
                    </span>
                )}
            </div>
            <div className="p-5 flex flex-col flex-1">
                <h3 className="font-semibold text-brand-maroon line-clamp-1">
                    {product.name}
                </h3>
                <p className="text-xs text-gray-500 mt-1 line-clamp-2">
                    {product.description}
                </p>
                <div className="flex items-center gap-1 text-brand-gold text-sm mt-2">
                    <FaStar /> <span>{product.rating}</span>
                </div>
                <div className="mt-4 flex items-center justify-between">
                    <span className="text-lg font-bold text-brand-maroon">
                        ₹{product.price}
                    </span>
                    <motion.button
                        whileTap={{ scale: 0.9 }}
                        onClick={() => addToCart(product)}
                        className="flex items-center gap-2 bg-brand-rose text-white text-xs px-3 py-2 rounded-full hover:bg-brand-maroon transition"
                    >
                        <FaCartPlus /> Add
                    </motion.button>
                </div>
            </div>
        </motion.div>
    );
}