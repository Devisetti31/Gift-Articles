import ReviewCard from "../components/ReviewCard";
import { reviews, ratingBreakdown } from "../data/reviews";
import { FaStar } from "react-icons/fa";

export default function Reviews() {
    const total = reviews.length;
    const avg = (reviews.reduce((s, r) => s + r.rating, 0) / total).toFixed(1);

    return (
        <section className="max-w-7xl mx-auto px-6 py-16">
            <div className="text-center mb-10">
                <h1 className="text-4xl md:text-5xl font-display font-bold text-brand-maroon">
                    Customer Reviews
                </h1>
                <p className="text-gray-600 mt-3">Real stories from real gift-givers</p>
            </div>

            {/* Rating summary */}
            <div className="bg-white rounded-2xl shadow-sm p-8 mb-12 grid md:grid-cols-2 gap-8 items-center">
                <div className="text-center md:text-left">
                    <p className="text-6xl font-display font-bold text-brand-maroon">{avg}</p>
                    <div className="flex justify-center md:justify-start gap-1 text-brand-gold mt-2 text-xl">
                        {[...Array(5)].map((_, i) => <FaStar key={i} />)}
                    </div>
                    <p className="text-sm text-gray-500 mt-2">Based on {total} reviews</p>
                </div>
                <div className="space-y-2">
                    {ratingBreakdown.map((b) => (
                        <div key={b.stars} className="flex items-center gap-3">
                            <span className="w-10 text-sm text-gray-600">{b.stars} ★</span>
                            <div className="flex-1 h-2 bg-brand-pink/30 rounded-full overflow-hidden">
                                <div
                                    className="h-full bg-brand-rose rounded-full"
                                    style={{ width: `${(b.count / total) * 100}%` }}
                                />
                            </div>
                            <span className="text-xs text-gray-500 w-6">{b.count}</span>
                        </div>
                    ))}
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {reviews.map((r) => (
                    <ReviewCard key={r.id} review={r} />
                ))}
            </div>
        </section>
    );
}