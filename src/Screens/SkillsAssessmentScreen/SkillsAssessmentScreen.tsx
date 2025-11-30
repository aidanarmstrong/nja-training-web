import { Footer, Navbar } from "@/Components";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

import DuckDiggingPhoto from "@/assets/images/duck-digging.png";
import YellowDiggerPhoto from "@/assets/images/yellow-digger.png";
import DuckFillingPhoto from "@/assets/images//duck-filling-trench.png";
import DuckEmptyingPhoto from "@/assets/images/ducking-emptying.png";

const SkillsAssessmentScreen = () => {
    const fadeIn = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 },
    };

    const listItem = {
        hidden: { opacity: 0, x: -10 },
        show: (i: any) => ({
            opacity: 1,
            x: 0,
            transition: { delay: i * 0.07 },
        }),
    };

    return (
        <div className="bg-white min-h-screen flex flex-col">
            <div className="bg-white h-[100px] shadow-sm">
                <Navbar defaultFilled activeScreen="skills-assessment" fixed />
            </div>

            {/* HERO */}
            <section className="relative w-full h-[600px] flex items-center justify-center">
                <img
                src={DuckDiggingPhoto}
                alt="Operator Assessment Hero"
                className="absolute inset-0 w-full h-full object-cover brightness-[0.45]"
                />

                <motion.div
                    initial="hidden"
                    animate="show"
                    variants={fadeIn}
                    className="relative z-10 text-center px-6 max-w-3xl text-white"
                >
                    <h1 className="text-5xl font-extrabold mb-6 drop-shadow-xl">
                        Verify Operator Skill Before They Touch Your Machines
                    </h1>
                    <p className="text-xl opacity-90 leading-relaxed mb-8">
                        Real machines. Real site conditions. Real proof of competency before
                        you hire.
                    </p>

                    <a 
                        href={`mailto:hello@njatrainingsolutions.com?subject=${encodeURIComponent(
                            "Book a Skills Assessment"
                        )}`}
                        className="bg-primary text-white font-semibold text-lg px-10 py-4 rounded-2xl shadow-xl hover:bg-primary/80 transition"
                    >
                        Book an Assessment
                    </a>
                </motion.div>
            </section>

            {/* WHAT WE ASSESS */}
            <section className="py-24 px-6 bg-white">
                <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
                    <motion.img
                        src={YellowDiggerPhoto}
                        className="rounded-2xl shadow-lg w-full object-cover"
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    />

                    <div>
                        <h2 className="text-4xl font-bold mb-10 text-gray-900">
                            Skills We Assess
                        </h2>

                        <ul className="space-y-5">
                            {[
                                "Tracked & wheeled excavator operation",
                                "Tilt-Rotator capability",
                                "Leica 3D GPS machine control proficiency",
                                "Safe digging & service awareness",
                                "Attachment control & lifting accuracy",
                                "Productivity & precision on real tasks",
                                "Safety, risk and machine care habits",
                            ].map((item, i) => (
                                <motion.li
                                    key={i}
                                    custom={i}
                                    initial="hidden"
                                    whileInView="show"
                                    viewport={{ once: true }}
                                    variants={listItem}
                                    className="flex items-start gap-3 text-gray-800 text-lg"
                                >
                                    <CheckCircle className="w-6 h-6 text-primary shrink-0" />
                                    {item}
                                </motion.li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>

            {/* WHY US */}
            <section className="py-24 px-6">
                <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-4xl font-bold mb-10 text-gray-900">
                            Why Companies Choose Us
                        </h2>

                        <ul className="space-y-5">
                            {[
                                "Avoid expensive mobilisation mistakes",
                                "Know real competency — not what they claim",
                                "Reduce damage and downtime costs",
                                "Improve site safety & job performance",
                                "Hire faster with accurate skill data",
                            ].map((item, i) => (
                                <motion.li
                                key={i}
                                custom={i}
                                initial="hidden"
                                whileInView="show"
                                viewport={{ once: true }}
                                variants={listItem}
                                className="flex items-start gap-3 text-gray-800 text-lg"
                                >
                                <CheckCircle className="w-6 h-6 text-primary shrink-0" />
                                {item}
                                </motion.li>
                            ))}
                        </ul>
                    </div>

                    <motion.img
                        src={DuckFillingPhoto}
                        className="rounded-2xl shadow-lg w-full object-cover"
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    />
                </div>
            </section>

            {/* WHAT YOU GET */}
            <section className="py-24 px-6 bg-gray-50">
                <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
                    <motion.img
                        src={DuckEmptyingPhoto}
                        className="rounded-2xl shadow-lg w-full object-cover"
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    />

                    <div>
                        <h2 className="text-4xl font-bold mb-10 text-gray-900">
                        What You Receive
                        </h2>

                        <ul className="space-y-5">
                            {[
                                "Competency report",
                                "Clear pass/fail recommendation",
                                "Training recommendations for gaps or up skill",
                            ].map((item, i) => (
                                <motion.li
                                    key={i}
                                    custom={i}
                                    initial="hidden"
                                    whileInView="show"
                                    viewport={{ once: true }}
                                    variants={listItem}
                                    className="flex items-start gap-3 text-gray-800 text-lg"
                                >
                                    <CheckCircle className="w-6 h-6 text-primary shrink-0" />
                                    {item}
                                </motion.li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="relative w-full py-24 px-6 bg-gray-800 text-white text-center">
                <motion.h2
                    initial="hidden"
                    animate="show"
                    variants={fadeIn}
                    className="text-4xl font-bold mb-6"
                >
                    Ready to Confirm Operator Skill?
                </motion.h2>

                <p className="text-lg opacity-90 max-w-2xl mx-auto mb-10">
                    Fast availability. Real machines. Real site tasks. Reliable results.
                </p>

               <a
                    href={`mailto:hello@njatrainingsolutions.com?subject=${encodeURIComponent(
                        "Book a Skills Assessment"
                    )}`}
                    className="bg-white text-secondary font-semibold text-lg px-10 py-4 rounded-2xl shadow-xl hover:bg-gray-200 transition"
                >
                    Book Your Assessment
                </a>

            </section>

            <Footer />
        </div>
    );
};

export default SkillsAssessmentScreen;
