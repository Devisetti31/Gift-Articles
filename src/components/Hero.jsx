import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";

export default function HeroSection() {
    return (
        <section className="relative overflow-hidden bg-gradient-to-br from-brand-cream via-brand-pink/30 to-brand-gold/20 dark:from-dark-bg dark:via-dark-card dark:to-dark-border">
            <div className="max-w-7xl mx-auto px-6 py-20 md:py-28 grid md:grid-cols-2 gap-10 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="inline-block bg-brand-rose/10 text-brand-rose text-xs font-semibold px-3 py-1 rounded-full mb-4">
                        🎉 Customized Gifts, Made with Love
                    </span>
                    <h1 className="text-4xl md:text-6xl font-display font-bold text-brand-maroon leading-tight">
                        Find the <span className="text-brand-rose">Perfect Gift</span> for
                        Every Occasion
                    </h1>
                    <p className="mt-5 text-gray-600 max-w-md">
                        Personalized chocolates, photo frames, gift boxes & printed bottles —
                        thoughtfully crafted to make every moment unforgettable.
                    </p>
                    <div className="mt-8 flex gap-4">
                        <Link
                            to="/categories"
                            className="inline-flex items-center gap-2 bg-brand-rose text-white px-6 py-3 rounded-full font-medium hover:bg-brand-maroon transition"
                        >
                            Shop Now <FaArrowRight />
                        </Link>
                        <Link
                            to="/new-arrival"
                            className="inline-flex items-center gap-2 border border-brand-rose text-brand-rose px-6 py-3 rounded-full font-medium hover:bg-brand-rose hover:text-white transition"
                        >
                            New Arrivals
                        </Link>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative"
                >
                    <div className="absolute -inset-6 bg-brand-pink/40 rounded-full blur-3xl" />
                    <img
                        src="https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=900&q=80"
                        alt="Beautiful gift boxes"
                        className="relative rounded-3xl shadow-2xl w-full h-[420px] object-cover"
                    />
                    <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-lg px-5 py-3 animate-float">
                        <p className="text-xs text-gray-500">Loved by</p>
                        <p className="font-bold text-brand-maroon">10,000+ Happy Customers</p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}