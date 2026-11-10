import { FaStar } from "react-icons/fa";

export default function ReviewCard({ review }) {
    return (
        <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition">
            <div className="flex items-center gap-3">
                <img
                    src={review.avatar}
                    alt={review.name}
                    className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                    <p className="font-semibold text-brand-maroon">{review.name}</p>
                    <p className="text-xs text-gray-500">{review.date}</p>
                </div>
            </div>
            <div className="flex gap-1 text-brand-gold mt-3 text-sm">
                {Array.from({ length: review.rating }).map((_, i) => (
                    <FaStar key={i} />
                ))}
            </div>
            <p className="text-sm text-gray-600 mt-3 leading-relaxed">
                "{review.comment}"
            </p>
        </div>
    );
}