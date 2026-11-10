import { useState } from "react";
import ProductCard from "../components/ProductCard";
import { products } from "../data/products";

export default function NewArrival() {
    const newProducts = products.filter((p) => p.isNew);
    const [sort, setSort] = useState("default");

    const sorted = [...newProducts].sort((a, b) => {
        if (sort === "low") return a.price - b.price;
        if (sort === "high") return b.price - a.price;
        if (sort === "rating") return b.rating - a.rating;
        return 0;
    });

    return (
        <section className="max-w-7xl mx-auto px-6 py-16">
            <div className="text-center mb-10">
                <h1 className="text-4xl md:text-5xl font-display font-bold text-brand-maroon">
                    New Arrivals
                </h1>
                <p className="text-gray-600 mt-3">Freshly added gifts to make moments special</p>
            </div>

            <div className="flex justify-end mb-6">
                <select
                    value={sort}
                    onChange={(e) => setSort(e.target.value)}
                    className="border border-brand-pink rounded-full px-4 py-2 text-sm bg-white focus:outline-none"
                >
                    <option value="default">Sort: Featured</option>
                    <option value="low">Price: Low to High</option>
                    <option value="high">Price: High to Low</option>
                    <option value="rating">Top Rated</option>
                </select>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {sorted.map((p) => (
                    <ProductCard key={p.id} product={p} />
                ))}
            </div>
        </section>
    );
}