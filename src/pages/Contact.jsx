import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";
import { useState } from "react";

export default function Contact() {
    const [sent, setSent] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setSent(true);
        e.target.reset();
        setTimeout(() => setSent(false), 3000);
    };

    return (
        <section className="max-w-7xl mx-auto px-6 py-16">
            <div className="text-center mb-12">
                <h1 className="text-4xl md:text-5xl font-display font-bold text-brand-maroon">
                    Get in Touch
                </h1>
                <p className="text-gray-600 mt-3 max-w-xl mx-auto">
                    Questions, custom orders, or just want to say hello? We'd love to hear from you.
                </p>
            </div>

            <div className="grid md:grid-cols-2 gap-10">
                {/* Info */}
                <div className="space-y-6">
                    <div className="bg-white p-6 rounded-2xl shadow-sm flex items-start gap-4">
                        <FaMapMarkerAlt className="text-brand-rose text-xl mt-1" />
                        <div>
                            <p className="font-semibold text-brand-maroon">Visit Us</p>
                            <p className="text-sm text-gray-600">
                                21 Rose Garden Lane, Bandra West,<br /> Mumbai 400050, India
                            </p>
                        </div>
                    </div>
                    <div className="bg-white p-6 rounded-2xl shadow-sm flex items-start gap-4">
                        <FaPhone className="text-brand-rose text-xl mt-1" />
                        <div>
                            <p className="font-semibold text-brand-maroon">Call Us</p>
                            <p className="text-sm text-gray-600">+91 98765 43210</p>
                        </div>
                    </div>
                    <div className="bg-white p-6 rounded-2xl shadow-sm flex items-start gap-4">
                        <FaEnvelope className="text-brand-rose text-xl mt-1" />
                        <div>
                            <p className="font-semibold text-brand-maroon">Email Us</p>
                            <p className="text-sm text-gray-600">hello@giftly.in</p>
                        </div>
                    </div>

                    <div className="bg-white p-6 rounded-2xl shadow-sm">
                        <p className="font-semibold text-brand-maroon mb-3">Follow Us</p>
                        <div className="flex gap-4 text-xl text-brand-rose">
                            <FaInstagram className="cursor-pointer hover:text-brand-maroon" />
                            <FaFacebook className="cursor-pointer hover:text-brand-maroon" />
                            <FaTwitter className="cursor-pointer hover:text-brand-maroon" />
                        </div>
                    </div>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-sm p-8 space-y-4">
                    <h2 className="font-display text-2xl font-semibold text-brand-maroon">
                        Send a Message
                    </h2>
                    <div>
                        <label className="text-sm text-gray-600">Your Name</label>
                        <input
                            required
                            type="text"
                            className="w-full mt-1 px-4 py-2 border border-brand-pink/50 rounded-lg focus:outline-none focus:border-brand-rose"
                        />
                    </div>
                    <div>
                        <label className="text-sm text-gray-600">Email</label>
                        <input
                            required
                            type="email"
                            className="w-full mt-1 px-4 py-2 border border-brand-pink/50 rounded-lg focus:outline-none focus:border-brand-rose"
                        />
                    </div>
                    <div>
                        <label className="text-sm text-gray-600">Message</label>
                        <textarea
                            required
                            rows={5}
                            className="w-full mt-1 px-4 py-2 border border-brand-pink/50 rounded-lg focus:outline-none focus:border-brand-rose resize-none"
                        />
                    </div>
                    <button className="w-full bg-brand-rose text-white py-3 rounded-full font-medium hover:bg-brand-maroon transition">
                        Send Message
                    </button>
                    {sent && (
                        <p className="text-green-600 text-sm text-center">✅ Message sent! We'll be in touch soon.</p>
                    )}
                </form>
            </div>
        </section>
    );
}