import ProductCard from "../components/ProductCard";
import { categories } from "../data/categories";
import { products } from "../data/products";

export default function Categories() {
    return (
        <section className="max-w-7xl mx-auto px-6 py-16">
            <div className="text-center mb-12">
                <h1 className="text-4xl md:text-5xl font-display font-bold text-brand-maroon">
                    Our Categories
                </h1>
                <p className="text-gray-600 mt-3 max-w-xl mx-auto">
                    Explore our full range of personalized gift collections — crafted to
                    make every occasion unforgettable.
                </p>
            </div>

            {categories.map((cat) => {
                const catProducts = products.filter((p) => p.category === cat.slug);
                return (
                    <div key={cat.id} className="mb-16">
                        <div className="flex items-center gap-3 mb-6">
                            <h2 className="text-2xl md:text-3xl font-display font-semibold text-brand-maroon">
                                {cat.name}
                            </h2>
                            <span className="text-sm text-brand-rose">({catProducts.length} items)</span>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            {catProducts.map((p) => (
                                <ProductCard key={p.id} product={p} />
                            ))}
                        </div>
                    </div>
                );
            })}
        </section>
    );
}