/*
  NJA Training Solutions - Single-file React + Tailwind starter (TypeScript-ready)
  - Place this file in src/App.tsx of a Vite + React + TypeScript project
  - Tailwind CSS required (see notes below)
  - Replace placeholder images and links with your real assets
  - British English spelling and copy
*/

import { Footer, Navbar } from "../../Components";
import HeroVideo from "../../assets/videos/hero-video.mp4";
import Excavator from "../../assets/images/digger.png";
import PanVideo from "../../assets/videos/pan-yard.mp4"
import Testimonials from "./Testimonials";
import { FcCheckmark } from "react-icons/fc";
import Contact from "./Contact";
import CoursesSection from "./Courses";
import courses from './data';



const Hero = ({ courses }: { courses: { id: string; title: string }[] }) => {
    return (
        <section className="relative text-white h-[80%]">
            {/* Background video */}
            <video
                className="absolute inset-0 w-full h-full object-cover"
                src={HeroVideo} // or "/videos/hero-video.mp4" if in public folder
                autoPlay
                loop
                muted
                playsInline
            />

        {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/40" />

            <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-20 md:py-28 flex items-center min-h-screen">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center w-full">
                    {/* Left content */}
                    <div>
                        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mt-20 md:mt-0">
                            1-on-1 Leica 3D GPS Excavator Training
                        </h1>

                        <p className="mt-4 text-lg text-slate-200 max-w-xl">
                            Hands-on, accredited, and practical — master excavators with precision GPS guidance & tilt rotator familiarisation. <b><br/>Get to know the controls</b> 
                        </p>


                        <div className="mt-8 flex flex-wrap gap-4">
                            <a
                                href="#courses"
                                className="inline-block bg-primary text-white px-6 py-3 rounded-md shadow-md hover:bg-primary/90 transition"
                            >
                                View Courses
                            </a>
                            <a
                                href="#contact"
                                className="inline-block border-2 border-white text-white px-6 py-3 rounded-md hover:bg-white/10 transition"
                            >
                                Request a Quote
                            </a>
                        </div>

                        <div className="mt-8 text-sm text-slate-300">
                            Small, focused groups • Conveniently located 30 minutes from Perth CBD • Fully accredited Tickets & VOCs
                        </div>

                    </div>

                    {/* Right side — enquiry card */}
                    <div className="flex justify-center md:justify-end h-[100%]">
                        <div className="w-full max-w-sm bg-white rounded p-6 shadow-lg text-slate-800">
                            <div className="text-sm font-semibold text-primary">Quick enquiry</div>
                            <h3 className="mt-2 text-lg font-bold">
                                Book a place or request onsite training
                            </h3>

                            <form
                                className="mt-4 space-y-8"
                                onSubmit={(e) => {
                                e.preventDefault();
                                alert("Enquiry submitted — replace with real handler");
                                }}
                            >
                                <input
                                    aria-label="Name"
                                    placeholder="Full name"
                                    className="w-full border border-slate-200 rounded px-3 py-4 text-sm"
                                />
                                <input
                                    aria-label="Email"
                                    placeholder="Email address"
                                    className="w-full border border-slate-200 rounded px-3 py-4 text-sm"
                                />
                                <select className="w-full border border-slate-200 rounded px-3 py-4 text-sm">
                                <option>Choose a course</option>
                                    {courses.map((c) => (
                                        <option key={c.id} value={c.id}>
                                            {c.title}
                                        </option>
                                    ))}
                                </select>

                                <button
                                    type="submit"
                                    className="w-full bg-primary text-white py-4 rounded"
                                >
                                    Send enquiry
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

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

                <div>
                    <div
                        className="w-full h-96 rounded-lg shadow-md overflow-hidden relative flex justify-center items-center"
                        aria-hidden="true"
                    >
                        {/* Background video */}
                        <video
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="absolute w-full h-full object-cover"
                        >
                            <source src={PanVideo} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>

                        {/* Optional overlay */}
                        <div className="absolute inset-0 bg-black bg-opacity-10"></div>

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
                <Hero courses={courses} />
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
