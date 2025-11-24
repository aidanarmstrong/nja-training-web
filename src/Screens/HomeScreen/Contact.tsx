import emailjs from "@emailjs/browser";
import { useState } from "react";

const Contact = () => {
    const [status, setStatus] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const form = e.currentTarget;

        // Honeypot check
        const honeypot = (form.elements.namedItem("honeypot") as HTMLInputElement).value;
        if (honeypot) {
            console.warn("Bot detected! Form not submitted.");
        return;
        }

        setLoading(true);
        setStatus(""); // clear previous status

        emailjs
        .sendForm(
            "service_tumj0n1",
            "template_bindqsh",
            form,
            "DLa_hSipoh4g9aKq6"
        )
        .then(
            () => {
                setStatus("Form submitted! We will contact you soon.");
                form.reset();
            },
            (error) => {
                setStatus("Oops! Something went wrong. Please try again.");
                console.error(error.text);
            }
        ).finally(() => {
            setLoading(false);
        });
    };

    return (
        <section id="contact" className="py-16 bg-slate-900 text-white">
            <div className="max-w-6xl mx-auto px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
                <div>
                    <h3 className="text-2xl font-bold">Contact us</h3>
                    <p className="mt-3 text-slate-200">
                        Enquiries, bookings and corporate training requests. We aim to respond within one working day.
                    </p>
                </div>

                <div>
                    <div className="bg-white rounded-lg p-6 text-slate-800 shadow-md">
                        <h4 className="text-lg font-bold">Request a callback</h4>
                        <form className="mt-4 space-y-3" onSubmit={handleSubmit}>
                            {/* Honeypot field */}
                            <input type="text" name="honeypot" style={{ display: "none" }} autoComplete="off" />

                            <input
                                placeholder="Your name"
                                name="user_name"
                                className="w-full border border-slate-200 rounded px-3 py-2 text-sm"
                                required
                            />
                            <input
                                type="tel"
                                placeholder="Phone number"
                                name="user_phone"
                                className="w-full border border-slate-200 rounded px-3 py-2 text-sm"
                                maxLength={12}
                                required
                                onInput={(e) => {
                                e.currentTarget.value = e.currentTarget.value.replace(/\D/g, "");
                                }}
                            />
                            <textarea
                                placeholder="Brief message (optional)"
                                name="message"
                                className="w-full border border-slate-200 rounded px-3 py-2 text-sm"
                                rows={4}
                            />
                            <button
                                type="submit"
                                className={`w-full bg-primary text-white py-2 rounded transition ${
                                loading ? "opacity-70 cursor-not-allowed" : "hover:bg-primary-dark"
                                }`}
                                disabled={loading}
                            >
                                {loading ? "Sending..." : "Request callback"}
                            </button>
                        </form>

                        {status && <p className="mt-3 text-sm text-green-600">{status}</p>}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
