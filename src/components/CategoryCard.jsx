import { Link } from "react-router-dom";

export default function CategoryCard({ category }) {
    return (
        <Link
            to="/categories"
            className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
        >
            <div className="h-52 overflow-hidden">
                <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
            </div>
            <div className="p-5">
                <h3 className="font-display font-semibold text-lg text-brand-maroon">
                    {category.name}
                </h3>
                <p className="text-sm text-gray-600 mt-2 line-clamp-2">
                    {category.description}
                </p>
                <span className="inline-block mt-3 text-brand-rose text-sm font-medium">
                    Explore →
                </span>
            </div>
        </Link>
    );
}