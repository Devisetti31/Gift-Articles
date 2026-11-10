import { Link } from "react-router-dom";
import { FaGift } from "react-icons/fa";

export default function NotFound() {
    return (
        <section className="min-h-[70vh] flex flex-col items-center justify-center text-center px-6">
            <FaGift className="text-6xl text-brand-rose mb-6 animate-float" />
            <h1 className="text-5xl font-display font-bold text-brand-maroon">404</h1>
            <p className="text-gray-600 mt-3">
                Oops! This gift seems to have been re-boxed. The page you're looking for doesn't exist.
            </p>
            <Link
                to="/"
                className="mt-6 bg-brand-rose text-white px-6 py-3 rounded-full font-medium hover:bg-brand-maroon transition"
            >
                Back to Home
            </Link>
        </section>
    );
}