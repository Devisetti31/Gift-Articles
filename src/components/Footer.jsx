import { Link } from "react-router-dom";
import { FaGift, FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="bg-brand-maroon text-brand-cream mt-20">
            <div className="max-w-7xl mx-auto px-6 py-14 grid gap-10 md:grid-cols-4">
                <div>
                    <div className="flex items-center gap-2 font-display text-2xl font-bold">
                        <FaGift className="text-brand-pink" /> Giftly
                    </div>
                    <p className="mt-3 text-sm text-brand-pink/80">
                        Handcrafted gifts for every occasion. Made with love, delivered with care.
                    </p>
                </div>

                <div>
                    <h4 className="font-semibold mb-3">Quick Links</h4>
                    <ul className="space-y-2 text-sm text-brand-pink/80">
                        <li><Link to="/" className="hover:text-white">Home</Link></li>
                        <li><Link to="/categories" className="hover:text-white">Categories</Link></li>
                        <li><Link to="/new-arrival" className="hover:text-white">New Arrival</Link></li>
                        <li><Link to="/about" className="hover:text-white">About</Link></li>
                    </ul>
                </div>

                <div>
                    <h4 className="font-semibold mb-3">Support</h4>
                    <ul className="space-y-2 text-sm text-brand-pink/80">
                        <li><Link to="/reviews" className="hover:text-white">Reviews</Link></li>
                        <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
                        <li>Shipping Info</li>
                        <li>Returns</li>
                    </ul>
                </div>

                <div>
                    <h4 className="font-semibold mb-3">Stay in Touch</h4>
                    <p className="text-sm text-brand-pink/80 mb-3">
                        Subscribe for offers & new arrivals.
                    </p>
                    <form
                        onSubmit={(e) => { e.preventDefault(); alert("Subscribed! 🎉"); }}
                        className="flex"
                    >
                        <input
                            type="email"
                            required
                            placeholder="Email address"
                            className="flex-1 px-3 py-2 rounded-l-md text-sm text-gray-800 bg-brand-cream focus:outline-none"
                        />
                        <button className="bg-brand-rose px-4 rounded-r-md text-sm font-medium hover:bg-brand-pink hover:text-brand-maroon transition">
                            Join
                        </button>
                    </form>
                    <div className="flex gap-3 mt-4 text-lg">
                        <FaInstagram className="hover:text-brand-pink cursor-pointer" />
                        <FaFacebook className="hover:text-brand-pink cursor-pointer" />
                        <FaTwitter className="hover:text-brand-pink cursor-pointer" />
                    </div>
                </div>
            </div>
            <div className="border-t border-brand-pink/20 text-center py-4 text-xs text-brand-pink/70">
                © {new Date().getFullYear()} Giftly. All rights reserved.
            </div>
        </footer>
    );
}