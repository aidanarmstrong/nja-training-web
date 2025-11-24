/*
  NJA Training Solutions - Single-file React + Tailwind starter (TypeScript-ready)
  - Place this file in src/App.tsx of a Vite + React + TypeScript project
  - Tailwind CSS required (see notes below)
  - Replace placeholder images and links with your real assets
  - British English spelling and copy
*/

import { Footer, Navbar } from "../../Components";
import HeroVideo from "../../assets/videos/hero-video.mp4";
import Course1Image from "../../assets/images/course-1.png";
import Testimonials from "./Testimonials";
import { FcCheckmark } from "react-icons/fc";
import Contact from "./Contact";

const courses = [
    {
        id: 'gps-machine-control',
        title: 'GPS Machine Control Training',
        summary: 'Practical, accredited training for GPS-guided earthmoving equipment. Ideal for machine operators and site supervisors.',
        duration: '1 day',
        price: 'From $749',
        image: Course1Image
    },
    {
        id: 'excavator-operator',
        title: 'Excavator Operator Course',
        summary: 'Hands-on excavator courses from beginner to advanced. Includes safety, maintenance and operational efficiency topics.',
        duration: '1 – 2 days',
        price: 'From $1199',
        image: Course1Image
    },
    {
        id: 'vocs-certification',
        title: 'VOC / Plant Operator Ticketing',
        summary: 'Vocationally recognised certification for plant and machinery operators to meet industry standards.',
        duration: '1 day',
        price: 'From $599',
        image: Course1Image
    },
    {
        id: 'custom-corp',
        title: 'Bespoke Corporate Training',
        summary: 'On-site tailored programmes for companies — safety, operations, and supervisory training delivered to your staff.',
        duration: 'Bespoke',
        price: 'Quote on request',
        image: Course1Image
    }
];


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
                        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
                            Premium Excavator Training & GPS Machine Control Certifications
                        </h1>

                        <p className="mt-4 text-lg text-slate-200 max-w-xl">
                            Industry-leading training for excavators, GPS machine control and VOC
                            assessments — practical, accredited and delivered by experienced
                            trainers across Australia.
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
                            Small group discounts • On-site delivery available • Accredited VOCs
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
    return(
        <>
            <section className="nja-training-section py-12 px-6 bg-gray-50">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl font-bold mb-6">Why NJA Training Solutions</h2>
                    <p className="mb-4">
                        Located in the heart of Perth CBD, NJA Training Solutions is your trusted provider for professional, high-quality training and assessment services. We specialise in mobile plant and civil construction training, high-risk WorkSafe licensing, and VOCs, tailored for both new and experienced operators. Training can be delivered on-site at your workplace or at our central Perth facility for maximum convenience.
                    </p>
                    <p className="mb-4">
                        Our team of highly qualified trainers has extensive experience in the earthmoving and training industries. We are dedicated to providing practical, flexible, and supportive training to help you or your team gain the skills and qualifications needed to succeed in your field.
                    </p>
                    <p>
                        With our Perth CBD location, students can easily access our facilities, combining hands-on practical experience with industry-standard knowledge and licensing requirements.
                    </p>
                </div>
            </section>
        </>
    )
}

const CoursesSection = () => {
    return (
        <section id="courses" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold">Our Featured Courses</h2>
                    <p className="mt-3 text-primary max-w-2xl mx-auto">
                        Practical, accredited and designed for immediate on-site use.
                        Select any course for full details, units and upcoming dates.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {courses.map((course) => (
                        <article
                            key={course.id}
                            className="border rounded-2xl hover:shadow-xl transition bg-white flex flex-col justify-between"
                        >
                            {/* Course Image */}
                            <div
                                className="h-48 w-full rounded-t-xl mb-3 flex items-center justify-center"
                                aria-hidden="true"
                            >
                                <img src={course.image} alt={course.title} className="h-full w-full object-cover rounded-t-xl" />
                            </div>
                            <div className="px-6 pb-6">

                                {/* Title */}
                                <h3 className="text-xl font-bold text-slate-800 mb-3">
                                    {course.title}
                                </h3>

                                {/* Summary */}
                                <p className="text-slate-600 text-base mb-5">{course.summary}</p>

                                {/* Duration & Price */}
                                <div className="flex items-center justify-between text-slate-700 font-medium mb-4">
                                    <span>{course.duration || "Duration TBD"}</span>
                                    <strong>{course.price || "Price TBD"}</strong>
                                </div>

                                {/* Links */}
                                <div className="flex gap-3 mt-auto">
                                    <a
                                        href={`#${course.id}`}
                                        className="text-primary font-semibold underline text-base"
                                    >
                                        Course details
                                    </a>
                                    <a
                                        href={`mailto:hello@njatrainingsolutions.com?subject=COURSE: ${encodeURIComponent(course.title)}&body=${encodeURIComponent("Are there any available spaces for this course?")}`}
                                        className="ml-auto inline-block bg-primary text-white px-4 py-2 rounded-lg text-base font-medium hover:bg-primary/90 transition"
                                    >
                                        Book now
                                    </a>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
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
                            "Accredited training and VOCs for mobile plant operators",
                            "Hands-on experience with excavators, loaders, and GPS-controlled machinery",
                            "Small group sizes for focused, practical learning",
                            "Flexible delivery: on-site at your workplace or at our Perth CBD facility",
                            "Corporate packages and flexible scheduling to suit your team",
                            "Designed to help you become safer, more competent, and highly employable",
                        ].map((item, index) => (
                            <li key={index} className="flex items-start gap-3">
                                <FcCheckmark className="mt-1 flex-shrink-0" />
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                <div>
                    <div
                        className="w-full h-96 bg-[url('/placeholder-about.jpg')] bg-cover bg-center bg-gray-300 rounded-lg shadow-md flex justify-center items-center"
                        aria-hidden="true"
                    >Image goes here</div>
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
