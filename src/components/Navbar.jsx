import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaGift, FaBars, FaTimes, FaShoppingBag, FaMoon, FaSun } from "react-icons/fa";
import { useCart } from "../context/CartContext";
import { useTheme } from "../context/ThemeContext";

const links = [
    { id: "home", label: "Home" },
    { id: "categories", label: "Categories" },
    { id: "new-arrival", label: "New Arrival" },
    { id: "about", label: "About" },
    { id: "reviews", label: "Reviews" },
    { id: "contact", label: "Contact" },
];

export default function Navbar() {
    const [open, setOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState("home");
    const { cartCount, setIsCartOpen } = useCart();
    const { theme, toggleTheme } = useTheme();

    const location = useLocation();
    const navigate = useNavigate();

    // 1. Handle sticky background
    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    // 2. Scroll Spy (Highlight based on scroll position)
    useEffect(() => {
        if (location.pathname !== "/") return; // Only spy on Home page

        const observerOptions = {
            root: null,
            rootMargin: "-20% 0px -60% 0px", // Triggers when section is in middle of screen
            threshold: 0,
        };

        const observerCallback = (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                }
            });
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);
        links.forEach((link) => {
            const el = document.getElementById(link.id);
            if (el) observer.observe(el);
        });

        return () => observer.disconnect();
    }, [location.pathname]);

    // 3. Handle Nav Click
    const handleNavClick = (e, id) => {
        e.preventDefault();
        setOpen(false); // Close mobile menu

        if (location.pathname === "/") {
            // If on home page, scroll smoothly
            const el = document.getElementById(id);
            if (el) {
                el.scrollIntoView({ behavior: "smooth" });
                setActiveSection(id); // Instantly highlight
            }
        } else {
            // If on another page, go to Home page first, then scroll
            navigate("/");
            setTimeout(() => {
                const el = document.getElementById(id);
                if (el) el.scrollIntoView({ behavior: "smooth" });
            }, 100);
        }
    };

    return (
        <header
            className={`sticky top-0 z-50 transition-all duration-300 ${scrolled
                    ? "bg-brand-cream/95 dark:bg-dark-bg/95 backdrop-blur shadow-md"
                    : "bg-brand-cream dark:bg-dark-bg"
                }`}
        >
            <nav className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 h-16">
                <Link to="/" className="flex items-center gap-2 text-brand-maroon font-display text-2xl font-bold">
                    <FaGift className="text-brand-rose" />
                    Giftly
                </Link>

                {/* Desktop Links */}
                <ul className="hidden md:flex items-center gap-8">
                    {links.map((l) => {
                        // Check active state: either URL matches (for non-home) OR activeSection matches (for home)
                        const isActive =
                            location.pathname === "/"
                                ? activeSection === l.id
                                : location.pathname === `/${l.id}` || location.pathname === `/${l.id}/`;

                        return (
                            <li key={l.id}>
                                <a
                                    href={`#${l.id}`}
                                    onClick={(e) => handleNavClick(e, l.id)}
                                    className={`text-sm font-medium transition-colors cursor-pointer ${isActive
                                            ? "text-brand-rose"
                                            : "text-gray-700 dark:text-dark-text hover:text-brand-rose"
                                        }`}
                                >
                                    {l.label}
                                </a>
                            </li>
                        );
                    })}
                </ul>

                <div className="flex items-center gap-4">
                    <button
                        onClick={toggleTheme}
                        className="text-lg text-brand-maroon hover:text-brand-rose transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-rose rounded-full p-1 hover:scale-110 active:scale-95 cursor-pointer"
                        aria-label="Toggle theme"
                    >
                        {theme === "light" ? <FaMoon /> : <FaSun />}
                    </button>

                    <button
                        onClick={() => setIsCartOpen(true)}
                        className="relative group focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-rose focus-visible:ring-offset-2 focus-visible:ring-offset-brand-cream rounded-full p-1 transition-transform duration-200 hover:scale-110 active:scale-95 cursor-pointer"
                        aria-label="Open cart"
                    >
                        <FaShoppingBag className="text-xl text-brand-maroon group-hover:text-brand-rose transition-colors" />
                        {cartCount > 0 && (
                            <span className="absolute -top-1 -right-1 bg-brand-rose text-white text-[10px] font-bold rounded-full w-5 h-5 flex items-center justify-center shadow-md">
                                {cartCount}
                            </span>
                        )}
                    </button>

                    <button
                        className="md:hidden text-2xl text-brand-maroon"
                        onClick={() => setOpen(!open)}
                        aria-label="Toggle menu"
                    >
                        {open ? <FaTimes /> : <FaBars />}
                    </button>
                </div>
            </nav>

            {/* Mobile Drawer */}
            {open && (
                <ul className="md:hidden bg-brand-cream dark:bg-dark-bg border-t border-brand-pink/30 px-6 py-4 space-y-3">
                    {links.map((l) => {
                        const isActive =
                            location.pathname === "/"
                                ? activeSection === l.id
                                : location.pathname === `/${l.id}`;

                        return (
                            <li key={l.id}>
                                <a
                                    href={`#${l.id}`}
                                    onClick={(e) => handleNavClick(e, l.id)}
                                    className={`block py-1 text-sm font-medium cursor-pointer ${isActive ? "text-brand-rose" : "text-gray-700 dark:text-dark-text"
                                        }`}
                                >
                                    {l.label}
                                </a>
                            </li>
                        );
                    })}
                </ul>
            )}
        </header>
    );
}