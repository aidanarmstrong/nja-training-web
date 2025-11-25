/*
  NJA Training Solutions - Single-file React + Tailwind starter (TypeScript-ready)
  - Place this file in src/App.tsx of a Vite + React + TypeScript project
  - Tailwind CSS required (see notes below)
  - Replace placeholder images and links with your real assets
  - British English spelling and copy
*/

import { Footer, Navbar } from "../../Components";
import Excavator from "../../assets/images/digger.png";
// import PanVideo from "../../assets/videos/pan-yard.mp4"
import Digger2Video from "../../assets/videos/digger-video-2.mp4";
import Testimonials from "./Testimonials";
import { FcCheckmark } from "react-icons/fc";
import Contact from "./Contact";
import CoursesSection from "./Courses";
import Hero from "./Hero";
import { FaBookmark, FaCommentDots, FaHeart } from "react-icons/fa6";
import { IoMdShareAlt } from "react-icons/io";

const Information = () => {
    return (
        <section className="nja-training-section py-12 px-6 bg-gray-50">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold mb-6">
                    Why NJA Training Solutions?
                </h2>

                <p className="mb-4">
                    NJA Training Solutions delivers <strong>industry-recognised, career-boosting training</strong> for operators who want to stand out. Conveniently located just 30 minutes from Perth CBD, our courses are flexible and designed around your schedule.
                </p>

                <p className="mb-4">
                    We provide <strong>1-on-1 focused training</strong>, ensuring every student receives focused, hands-on guidance. Whether you’re new to the industry or an experienced operator looking to upskill, our courses help you progress into higher-paid opportunities.
                </p>

                <p className="mb-4">
                    NJA Training Solutions is Western Australia’s <strong>only facility offering Tilt-Rotator and Leica 3D GPS machine control training</strong> — two of the most in-demand skills in modern civil and earthmoving operations.
                </p>

                <p className="mb-4">
                    All courses are <strong>delivered under NJA Training Solutions</strong> and accredited by Full Tilt Training Solutions (RTO: 52793). Statements of Attainment are issued by Full Tilt Training Solutions and being <strong>nationally recognised</strong> ensures they are accepted by employers across Australia.
                </p>

                <p>
                    With over <strong>12 years of senior operating experience</strong> and certified trainer & assessors on our team, you’ll learn from trainers who have worked across civil construction, mining, and machinery operations. Our <strong>hands-on, practical, up-to-date training</strong> ensures you leave confident, capable, and job-ready.
                </p>
            </div>
        </section>
    );
};

const AboutSection = () => {
    return (
        <section id="about" className="py-20 bg-slate-50">
            <div className="max-w-6xl mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div>
                    <h2 className="text-3xl font-bold">About NJA Training Solutions</h2>
                    <p className="mt-4 text-slate-700">
                        NJA Training Solutions was born out of the frustration of seeing skilled workers struggle to gain practical experience with GPS technology and excavators. People were constantly asking for guidance and hands-on training to improve their career prospects in mining, construction, and civil works. We created NJA Training Solutions to bridge this gap — providing the knowledge, practical experience, and confidence that operators need to succeed on site and advance their careers.
                    </p>

                    <p className="mt-4 text-slate-700">
                        Our mission is simple: to turn motivated individuals into skilled, safety-conscious, and highly employable workers. Whether you’re new to the industry or looking to upskill, we deliver accredited training and assessments tailored to real-world conditions, helping you stand out in mining, construction, or civil projects across Australia.
                    </p>

                    <ul className="mt-6 space-y-4 text-slate-700">
                        {[
                            "One-on-one personalised training tailored to your needs",
                            "Hands-on experience with excavators, loaders, and GPS-controlled machinery",
                            "Small group sizes for focused, practical learning",
                            "Only 30 minutes from Perth CBD",
                            "Ideal for operators aiming to upskill for higher-paid opportunities",
                            "Designed to help you become safer, more competent, and highly employable",
                        ].map((item, index) => (
                            <li key={index} className="flex items-start gap-3">
                                <FcCheckmark className="mt-1 text-xl flex-shrink-0" />
                                <p className="leading-relaxed">{item}</p>
                            </li>
                        ))}
                    </ul>

                </div>

                <div className="flex justify-center py-12">
                    <div className="relative w-[300px] sm:w-[400px] md:w-[450px] lg:w-[500px] aspect-[9/16] rounded-xl overflow-hidden shadow-2xl border border-gray-200 bg-black">
                        
                        {/* Video */}
                        <video
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="absolute inset-0 w-full h-full object-cover"
                        >
                            <source src={Digger2Video} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>

                        {/* Overlay gradient for a TikTok feel */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/30"></div>

                        {/* Optional bottom label / CTA */}
                        <div className="absolute bottom-0 left-0 right-0 pb-12 p-2 md:p-4">
                            {/* Gradient background */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-black/0 pointer-events-none"></div>

                            {/* Overlay content */}
                            <div className="relative flex justify-between items-end text-white">
                                <div>
                                    <span className="block font-bold text-sm">NJA Training Solutions</span>
                                    <span className="block text-xs text-white/80 mt-1">
                                        Follow our TikTok to stay up-to-date
                                    </span>
                                </div>
                                <a 
                                    href="https://www.tiktok.com/@njatrainingsolutions"
                                    target="_blank"
                                    className="bg-white text-black font-bold px-4 py-1 rounded-full shadow-md hover:bg-white/90 transition cursor-pointer"
                                >
                                    Follow
                                </a>
                            </div>
                        </div>

                        {/* Optional side like/comment bar */}
                        <div className="absolute right-3 bottom-28 md:bottom-36 flex flex-col items-center space-y-4 md:space-y-6 text-white">
                            <div className="flex flex-col items-center text-center">
                                <FaHeart className="text-2xl md:text-3xl text-red-500" />
                                <span className="text-md">2503</span>
                            </div>

                            <div className="flex flex-col items-center text-center">
                                <FaCommentDots className="text-2xl md:text-3xl" />
                                <span className="text-md">135</span>
                            </div>

                            <div className="flex flex-col items-center text-center">
                                <FaBookmark className="text-2xl md:text-3xl" />
                                <span className="text-md">15</span>
                            </div>
                             <div className="flex flex-col items-center text-center">
                                <IoMdShareAlt className="text-3xl md:text-4xl" />
                                <span className="text-md">10</span>
                            </div>
                        </div>
                        
                    </div>
                </div>


            </div>
        </section>
    );
};

const HomeScreen = () => {

    return (
        <div className="font-inter antialiased text-slate-900">
            <Navbar />
            <main>
                <Hero />
                <Information/>
                <div className="relative w-full h-64 md:h-96 overflow-hidden">
                    {/* Background image */}
                    <img
                        src={Excavator} // replace PanVideo with your image import or URL
                        alt="Header Background"
                        className="absolute w-full h-full object-cover"
                    />

                    {/* Overlay to darken image for better text contrast */}
                    <div className="absolute inset-0 bg-black bg-opacity-15"></div>

                    {/* CTA content */}
                    <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
                        <h2 className="text-2xl md:text-4xl font-bold mt-24">
                            Ready to get started?
                        </h2>
                    </div>
                </div>


                <CoursesSection />
                <AboutSection />
                <Testimonials />
                <Contact />
            </main>
            <Footer />
        </div>
    );
}

export default HomeScreen;
