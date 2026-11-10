import { FaHeart, FaBullseye, FaEye, FaGift } from "react-icons/fa";

const stats = [
    { label: "Happy Customers", value: "10,000+" },
    { label: "Gifts Delivered", value: "25,000+" },
    { label: "Cities Served", value: "120+" },
    { label: "Years of Craft", value: "8+" },
];

const team = [
    { name: "Aditi Rao", role: "Founder & CEO", img: "https://i.pravatar.cc/200?img=47" },
    { name: "Rohit Bansal", role: "Head of Design", img: "https://i.pravatar.cc/200?img=15" },
    { name: "Meera Joshi", role: "Customer Delight", img: "https://i.pravatar.cc/200?img=32" },
    { name: "Sameer Khan", role: "Operations Lead", img: "https://i.pravatar.cc/200?img=12" },
];

export default function About() {
    return (
        <section className="max-w-7xl mx-auto px-6 py-16">
            <div className="text-center mb-14">
                <h1 className="text-4xl md:text-5xl font-display font-bold text-brand-maroon">
                    Our Story
                </h1>
                <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
                    Giftly was born out of a simple belief — that gifts are more than
                    objects. They carry emotions, memories, and love.
                </p>
            </div>

            {/* Story */}
            <div className="grid md:grid-cols-2 gap-10 items-center mb-20">
                <img
                    src="https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=900&q=80"
                    alt="Our gift studio"
                    className="rounded-3xl shadow-lg w-full h-[360px] object-cover"
                />
                <div>
                    <h2 className="text-2xl font-display font-semibold text-brand-maroon mb-3">
                        Handcrafted with Heart Since 2017
                    </h2>
                    <p className="text-gray-600 leading-relaxed">
                        From small artisan batches of customized chocolates to beautifully
                        packaged gift boxes, every product we ship is handled with care. Our
                        team blends traditional craft with modern personalization so that your
                        gift feels one-of-a-kind — because it is.
                    </p>
                </div>
            </div>

            {/* Mission & Vision */}
            <div className="grid md:grid-cols-2 gap-6 mb-20">
                <div className="bg-white p-8 rounded-2xl shadow-sm">
                    <FaBullseye className="text-3xl text-brand-rose mb-3" />
                    <h3 className="font-display font-semibold text-xl text-brand-maroon">Our Mission</h3>
                    <p className="text-gray-600 mt-2">
                        To help people express love through beautifully personalized gifts,
                        crafted with attention to every detail.
                    </p>
                </div>
                <div className="bg-white p-8 rounded-2xl shadow-sm">
                    <FaEye className="text-3xl text-brand-rose mb-3" />
                    <h3 className="font-display font-semibold text-xl text-brand-maroon">Our Vision</h3>
                    <p className="text-gray-600 mt-2">
                        To become India's most-loved destination for thoughtful, personalized gifting.
                    </p>
                </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
                {stats.map((s, i) => (
                    <div key={i} className="bg-brand-pink/15 text-center py-8 rounded-2xl">
                        <p className="text-3xl font-display font-bold text-brand-maroon">{s.value}</p>
                        <p className="text-sm text-gray-600 mt-1">{s.label}</p>
                    </div>
                ))}
            </div>

            {/* Team */}
            <div>
                <h2 className="text-3xl font-display font-bold text-brand-maroon text-center mb-8">
                    Meet the Team
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {team.map((m, i) => (
                        <div key={i} className="bg-white rounded-2xl p-6 text-center shadow-sm">
                            <img
                                src={m.img}
                                alt={m.name}
                                className="w-24 h-24 rounded-full mx-auto object-cover"
                            />
                            <p className="font-semibold text-brand-maroon mt-3">{m.name}</p>
                            <p className="text-xs text-gray-500">{m.role}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}