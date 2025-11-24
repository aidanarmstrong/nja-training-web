import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import { FaStar } from "react-icons/fa";

const Reviews = [
    { id: 1, name: "Jamie R.", role: "Site Operator", feedback: "Excellent trainer — very practical and exactly what I needed to get confident operating the excavator on site.", rating: 5 },
    { id: 2, name: "Samantha K.", role: "Machine Operator", feedback: "The GPS machine control course was thorough, hands-on, and very clear. I now feel confident managing machines independently.", rating: 4 },
    { id: 3, name: "Liam T.", role: "Site Supervisor", feedback: "VOC certification delivered professionally. Trainers were knowledgeable, approachable and made the course enjoyable.", rating: 5 },
    { id: 4, name: "Olivia P.", role: "Plant Operator", feedback: "Practical exercises were fantastic. I learnt techniques I could immediately apply on the job. Highly recommend.", rating: 5 },
    { id: 5, name: "Connor B.", role: "Excavator Operator", feedback: "Well-structured training and clear explanations. The course content was exactly what I needed to improve my skills.", rating: 4 },
];

const Testimonials = () => {
    const [current, setCurrent] = useState(0);
    const length = Reviews.length;

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent((prev) => (prev + 1) % length);
        }, 5000);
        return () => clearInterval(interval);
    }, [length]);

    const nextSlide = () => setCurrent((prev) => (prev + 1) % length);
    const prevSlide = () => setCurrent((prev) => (prev - 1 + length) % length);

    return (
        <section id="testimonials" className="py-24 bg-gray-50">
            <div className="max-w-3xl mx-auto px-6 text-center">
                <h2 className="text-3xl font-bold text-slate-900 mb-4">What Our Students Say</h2>
                <p className="text-slate-600 mb-12">
                    Genuine feedback from operators, supervisors, and site managers who completed our courses.
                </p>

                <div className="relative flex items-center justify-center">
                    {/* Left Chevron */}
                    <button
                        onClick={prevSlide}
                        className="absolute left-[-40px] bg-white p-2 rounded-full shadow hover:bg-gray-100 transition"
                    >
                        <ChevronLeftIcon size={28} />
                    </button>

                    <div className="w-full overflow-hidden">
                        <AnimatePresence initial={false}>
                            <motion.div
                                key={Reviews[current].id}
                                initial={{ opacity: 0, x: 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -50 }}
                                transition={{ duration: 0.5 }}
                                className="w-full bg-white p-8 rounded-xl shadow-md mx-auto"
                            >
                                <p className="text-slate-700 mb-4">“{Reviews[current].feedback}”</p>
                                <footer className="text-sm font-semibold text-slate-800 mb-4">
                                    — {Reviews[current].name}, {Reviews[current].role}
                                </footer>
                                <div className="flex justify-center space-x-1">
                                    {Array.from({ length: 5 }).map((_, i) => (
                                        <svg
                                            key={i}
                                            className={`w-5 h-5 ${i < Reviews[current].rating ? "text-yellow-400" : "text-gray-300"}`}
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <FaStar />
                                        </svg>
                                    ))}
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Right Chevron */}
                    <button
                        onClick={nextSlide}
                        className="absolute right-[-40px] bg-white p-2 rounded-full shadow hover:bg-gray-100 transition"
                    >
                        <ChevronRightIcon size={28} />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
