import { FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa";
import { Logo } from "../../assets";
import FullTiltLogo from "@/assets/images/partners/FTT_LOGO.png";
import CourseData from "@/data/courses";
import { Link } from "react-router-dom";

export const Footer = () => {
    return (
        <footer className="bg-slate-900 text-slate-300 pt-14 pb-10">
            <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 md:grid-cols-5 gap-12">

                {/* LEFT — LOGO + ABOUT */}
                <div className="md:col-span-2">
                    <div className="flex items-center mb-4">
                        <img className="h-12 w-auto" src={Logo} alt="NJA Training Solutions Logo" />
                    </div>

                    <h4 className="text-white font-semibold text-lg">
                        NJA Training Solutions
                    </h4>

                    <p className="mt-3 text-sm text-slate-400 leading-relaxed max-w-sm">
                        Practical, hands-on training for plant operators. 
                        Experienced trainers, flexible delivery, and industry-ready skills.
                    </p>

                    {/* RTO Block */}
                    <div className="mt-8">
                        <img
                            src={FullTiltLogo}
                            alt="Full Tilt Training Solutions Logo"
                            className="max-w-[200px] opacity-90 mb-2"
                        />

                        <p className="text-xs text-slate-500 max-w-xs leading-tight">
                            Training & assessment delivered on behalf of
                            <span className="font-semibold text-slate-300">
                                {" "}Full Tilt Training Solutions (RTO 52793)
                            </span>, the issuing RTO for all nationally recognised Statements of Attainment.
                            
                        </p>
                    </div>

                    {/* SOCIAL MEDIA */}
                    <div className="flex space-x-4 mt-8">
                        <a
                            href="https://www.facebook.com/njatrainingsolutions"
                            target="_blank"
                            className="p-2 rounded-full bg-slate-800 hover:bg-slate-700 transition"
                        >
                            <FaFacebookF className="text-white text-sm" />
                        </a>
                        <a
                            href="https://www.instagram.com/njatrainingsolutions"
                            target="_blank"
                            className="p-2 rounded-full bg-slate-800 hover:bg-slate-700 transition"
                        >
                            <FaInstagram className="text-white text-sm" />
                        </a>
                        <a
                            href="https://www.tiktok.com/@njatrainingsolutions"
                            target="_blank"
                            className="p-2 rounded-full bg-slate-800 hover:bg-slate-700 transition"
                        >
                            <FaTiktok className="text-white text-sm" />
                        </a>
                    </div>
                </div>

                {/* QUICK LINKS */}
                <div>
                    <h4 className="text-white text-lg font-semibold pb-2 border-b border-slate-700">
                        Quick Links
                    </h4>
                    <ul className="mt-4 space-y-2 text-sm">
                        <li><a href="/courses/all" className="hover:text-primary">All Training Courses</a></li>
                        <li><a href="/#about" className="hover:text-primary">About Us</a></li>
                        <li><a href="/#contact" className="hover:text-primary">Contact</a></li>
                        <li><a href="/voc" className="hover:text-primary">VOC Assessments</a></li>
                    </ul>
                </div>

                {/* OUR COURSES — FIXED MOBILE STACKING */}
                <div className="md:col-span-1">
                    <h4 className="text-white text-lg font-semibold pb-2 border-b border-slate-700">
                        Our Courses
                    </h4>
                    <ul className="mt-4 space-y-2 text-sm">
                        {CourseData.slice(0, 4).map((course, index) => (
                            <li key={index}>
                                <Link 
                                    to={`/courses/${course.id}/overview`} 
                                    className="hover:text-primary transition"
                                >
                                    {course.title}
                                </Link>
                            </li>
                        ))}

                        <li className="pt-1">
                            <Link 
                                to="/courses/all" 
                                className="text-primary font-medium hover:underline"
                            >
                                Browse All Courses →
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* RESOURCES + CONTACT */}
                <div className="md:w-[120%]">
                    <h4 className="text-white text-lg font-semibold pb-2 border-b border-slate-700">
                        Resources
                    </h4>
                    <ul className="mt-4 space-y-2 text-sm">
                        <li>Student Info</li>
                        <li>Compliance Docs</li>
                        <li>Safety Guidelines</li>
                        <li>Training Support</li>
                    </ul>

                    <h4 className="text-white text-lg font-semibold mt-8 pb-2 border-b border-slate-700">
                        Get in Touch
                    </h4>
                    <ul className="mt-4 space-y-2 text-sm text-slate-300">
                        <li>📍 599 Oxley Rd, Forrestdale WA 6112</li>
                        <li>✉️ hello@njatrainingsolutions.com</li>
                        <li><a href="tel:0497 083 537">📞 0497 083 537</a></li>
                    </ul>
                </div>
            </div>

            {/* COPYRIGHT BAR */}
            <div className="mt-10 pt-6 border-t border-slate-800 text-center text-xs text-slate-500">
                © {new Date().getFullYear()} NJA Training Solutions. All rights reserved.
                <div className="flex justify-center space-x-4 mt-2">
                    <a href="/legals/privacy-policy" className="hover:text-primary">Privacy Policy</a>
                    <span>•</span>
                    <a href="/legals/terms-and-conditions" className="hover:text-primary">Terms of Service</a>
                </div>
            </div>
             {/* Footer Bottom Section */}
                <div className="flex flex-col md:flex-row justify-end items-center text-sm text-gray-400 mx-6 mt-4 md:mt-0">
                    <p>
                        Website made by <a className="text-gray-400 hover:text-red-300" href="https://www.tokyodigital.com.au" target="_blank" rel="noopener noreferrer">Tokyo Digital</a>
                    </p>
                </div>
        </footer>
    );
};
