import { FcCheckmark } from "react-icons/fc";
import HeroVideo from "../../assets/videos/hero-video.mp4";

const Hero = () => {
    return (
        <section className="relative text-white min-h-[60vh] lg:min-h-[60vh] overflow-hidden">
            {/* Background video */}
            <video
                className="absolute inset-0 w-full h-full object-cover"
                src={HeroVideo}
                autoPlay
                muted
                loop
                playsInline
            />

            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80" />

            <div className="relative max-w-7xl mx-auto px-6 lg:px-12 py-36 md:py-64">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">

                    {/* LEFT — CONTENT */}
                    <div className="lg:col-span-7">
                        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight drop-shadow-xl">
                            Premium 1-on-1 GPS Excavator Training
                        </h1>

                        <p className="mt-6 text-lg md:text-xl text-slate-200 max-w-xl leading-relaxed">
                            Hands-on & fully accredited. Master Leica 3D GPS, tilt rotators, safety,
                            and precision excavation with real site scenarios.
                        </p>

                        <div className="mt-8 flex flex-wrap gap-4">
                            <a
                                href="#courses"
                                className="bg-primary hover:bg-primary/90 px-7 py-3 rounded-lg text-white font-semibold shadow-lg transition"
                            >
                                View Courses
                            </a>
                            <a
                                href="#contact"
                                className="border border-white/70 hover:bg-white/10 px-7 py-3 rounded-lg text-white font-semibold transition"
                            >
                                Request a Quote
                            </a>
                        </div>

                        <p className="mt-6 text-sm text-slate-300">
                            Accredited training • 1-on-1 sessions • 30 minutes from Perth CBD
                        </p>
                    </div>

                    {/* RIGHT — PROFESSIONAL BENEFITS PANEL */}
                    <div className="lg:col-span-5 flex justify-center lg:justify-end">
                        <div className="w-full bg-white text-slate-900 rounded-2xl p-10 shadow-2xl space-y-6 lg:max-w-md">
                            <h3 className="text-2xl font-bold">Why Choose NJA?</h3>
                            <ul className="space-y-4">
                                <li className="flex items-start gap-3">
                                    <FcCheckmark className="mt-1 text-xl flex-shrink-0" />
                                    Accredited 1-on-1 training
                                </li>
                                <li className="flex items-start gap-3">
                                    <FcCheckmark className="mt-1 text-xl flex-shrink-0" />
                                    Hands-on GPS & Excavator skills
                                </li>
                                <li className="flex items-start gap-3">
                                    <FcCheckmark className="mt-1 text-xl flex-shrink-0" />
                                    Small class sizes for better focus
                                </li>
                                <li className="flex items-start gap-3">
                                    <FcCheckmark className="mt-1 text-xl flex-shrink-0" />
                                    Only 30 mins from Perth CBD
                                </li>
                            </ul>
                            <a
                                href="/courses/all"
                                className="mt-4 block bg-primary hover:bg-primary/90 text-white font-semibold px-6 py-3 rounded-lg shadow-lg text-center transition"
                            >
                                See All Courses
                            </a>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Hero;
