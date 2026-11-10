import HeroSection from "../components/Hero";
import CategoryCard from "../components/CategoryCard";
import ProductCard from "../components/ProductCard";
import ReviewCard from "../components/ReviewCard";
import { categories } from "../data/categories";
import { products } from "../data/products";
import { reviews } from "../data/reviews";
import { FaTruck, FaPalette, FaAward, FaBolt } from "react-icons/fa";
import { Link } from "react-router-dom";

const features = [
    { icon: <FaTruck />, title: "Free Shipping", desc: "On orders above ₹999" },
    { icon: <FaPalette />, title: "Full Customization", desc: "Add photos, names & messages" },
    { icon: <FaAward />, title: "Premium Quality", desc: "Handpicked & gift-ready" },
    { icon: <FaBolt />, title: "Fast Delivery", desc: "Ship within 24 hours" },
];

export default function Home() {
    const featured = products.filter((p) => p.isNew).slice(0, 4);

    return (
        <>
            {/* Add id="home" */}
            <section id="home">
                <HeroSection />
            </section>

            {/* Add id="categories" */}
            <section id="categories" className="max-w-7xl mx-auto px-6 py-16 scroll-mt-20">
                <div className="text-center mb-10">
                    <h2 className="text-3xl md:text-4xl font-display font-bold text-brand-maroon">
                        Shop by Category
                    </h2>
                    <p className="text-gray-600 mt-2">Thoughtfully curated gifts for every moment</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {categories.map((c) => (
                        <CategoryCard key={c.id} category={c} />
                    ))}
                </div>
            </section>

            {/* Add id="new-arrival" */}
            <section id="new-arrival" className="bg-brand-pink/10 py-16 scroll-mt-20">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex items-end justify-between mb-8">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-display font-bold text-brand-maroon">
                                New Arrivals
                            </h2>
                            <p className="text-gray-600 mt-2">Fresh additions to our gift collection</p>
                        </div>
                        <Link to="/new-arrival" className="text-brand-rose font-medium hover:underline">
                            View All →
                        </Link>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {featured.map((p) => (
                            <ProductCard key={p.id} product={p} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Add id="about" (Why Choose Us) */}
            <section id="about" className="max-w-7xl mx-auto px-6 py-16 scroll-mt-20">
                <div className="text-center mb-10">
                    <h2 className="text-3xl md:text-4xl font-display font-bold text-brand-maroon">
                        Why Choose Us
                    </h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {features.map((f, i) => (
                        <div
                            key={i}
                            className="bg-white rounded-2xl p-6 text-center shadow-sm hover:shadow-lg transition"
                        >
                            <div className="text-3xl text-brand-rose mb-3 flex justify-center">
                                {f.icon}
                            </div>
                            <h3 className="font-semibold text-brand-maroon">{f.title}</h3>
                            <p className="text-sm text-gray-600 mt-1">{f.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Add id="reviews" */}
            <section id="reviews" className="bg-brand-pink/10 py-16 scroll-mt-20">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-10">
                        <h2 className="text-3xl md:text-4xl font-display font-bold text-brand-maroon">
                            What Our Customers Say
                        </h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {reviews.slice(0, 3).map((r) => (
                            <ReviewCard key={r.id} review={r} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Add id="contact" - Added a small contact section to Home */}
            <section id="contact" className="max-w-7xl mx-auto px-6 py-16 scroll-mt-20 text-center">
                <h2 className="text-3xl md:text-4xl font-display font-bold text-brand-maroon mb-4">
                    Need Help Finding a Gift?
                </h2>
                <p className="text-gray-600 mb-6">Contact our gift experts today!</p>
                <Link to="/contact" className="bg-brand-rose text-white px-6 py-3 rounded-full font-medium hover:bg-brand-maroon transition">
                    Contact Us
                </Link>
            </section>
        </>
    );
}