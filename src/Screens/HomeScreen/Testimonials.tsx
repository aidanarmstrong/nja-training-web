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
        }, 6000);
        return () => clearInterval(interval);
    }, [length]);

    const nextSlide = () => setCurrent((prev) => (prev + 1) % length);
    const prevSlide = () => setCurrent((prev) => (prev - 1 + length) % length);

    return (
        <section id="testimonials" className="py-24 bg-gray-50">
            <div className="max-w-4xl mx-auto px-6 text-center">

                <h2 className="text-4xl font-extrabold text-slate-900 mb-4">
                    What Our Students Say
                </h2>

                <p className="text-slate-600 mb-12 text-lg">
                    Genuine feedback from operators, supervisors, and site managers who completed our courses.
                </p>

                <div className="relative flex items-center justify-center">

                    {/* Left Button */}
                    <button
                        onClick={prevSlide}
                        className="absolute left-0 bg-white p-3 rounded-full shadow-md hover:bg-gray-100 transition"
                    >
                        <ChevronLeftIcon size={26} />
                    </button>

                    {/* Testimonial Card */}
                    <div className="w-[80%] md:w-[65%] overflow-hidden">
                        <AnimatePresence initial={false} mode="wait">
                            <motion.div
                                key={Reviews[current].id}
                                initial={{ opacity: 0, x: 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -50 }}
                                transition={{ duration: 0.45, ease: "easeOut" }}
                                className="bg-white px-10 py-8 rounded-2xl shadow-lg"
                            >
                                <p className="text-slate-700 text-lg leading-relaxed mb-5">
                                    “{Reviews[current].feedback}”
                                </p>

                                <footer className="font-semibold text-slate-800 mb-4">
                                    — {Reviews[current].name}, {Reviews[current].role}
                                </footer>

                                {/* Stars */}
                                <div className="flex justify-center space-x-1 mt-2">
                                    {Array.from({ length: 5 }).map((_, i) => (
                                        <FaStar
                                            key={i}
                                            className={`text-xl ${
                                                i < Reviews[current].rating
                                                    ? "text-yellow-400"
                                                    : "text-gray-300"
                                            }`}
                                        />
                                    ))}
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Right Button */}
                    <button
                        onClick={nextSlide}
                        className="absolute right-0 bg-white p-3 rounded-full shadow-md hover:bg-gray-100 transition"
                    >
                        <ChevronRightIcon size={26} />
                    </button>
                </div>

                {/* Carousel Dots */}
                <div className="flex justify-center mt-8 space-x-3">
                    {Reviews.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrent(index)}
                            className={`w-3 h-3 rounded-full transition-all duration-300 ${
                                index === current
                                    ? "bg-primary scale-125"
                                    : "bg-gray-300 hover:bg-gray-400"
                            }`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
