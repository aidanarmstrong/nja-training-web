import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Logo } from "../../assets";

interface NavbarProps {
    fixed?: boolean;
    defaultFilled?: boolean;
    activeScreen?: "home" | "courses" | "about" | "contact" | "book";
}

export const Navbar: React.FC<NavbarProps> = ({
    fixed = true,
    defaultFilled = false,
    activeScreen,
}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [showNav, setShowNav] = useState(true);
    const [scrolled, setScrolled] = useState(defaultFilled);
    const [lastScrollY, setLastScrollY] = useState(0);

    const navigate = useNavigate();
    const location = useLocation();

    // Scroll hide/show & background
    useEffect(() => {
        if (!fixed) return;

        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            if (currentScrollY > lastScrollY && currentScrollY > 50) {
                setShowNav(false);
            } else {
                setShowNav(true);
            }

            if (!defaultFilled) {
                setScrolled(currentScrollY > 10);
            }

            setLastScrollY(currentScrollY);
        };

        window.addEventListener("scroll", handleScroll, { passive: true });

        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScrollY, defaultFilled, fixed]);

    // Disable scroll when mobile menu is open
    useEffect(() => {
        document.body.style.overflow = isOpen ? "hidden" : "";
    }, [isOpen]);

    // Scroll to hash or top after route change
    useEffect(() => {
        if (location.hash) {
            const el = document.querySelector(location.hash);
            if (el) {
                el.scrollIntoView({ behavior: "smooth" });
            }
        } else {
            window.scrollTo({ top: 0, behavior: "smooth" });
        }
    }, [location.pathname, location.hash]);

    const linkClass = (screen: NavbarProps["activeScreen"]) => {
        const base = scrolled
            ? "text-gray-500 hover:text-primary"
            : "text-gray-200 hover:text-primary";

        const isActive = activeScreen === screen;

        return `
            relative
            ${base}
            pb-2 px-1
            transition-colors duration-200
            after:content-['']
            after:absolute
            after:left-0
            after:bottom-0
            after:h-[3px]
            after:bg-primary
            after:rounded-sm
            after:transition-all
            after:duration-300
            after:ease-out
            ${isActive ? "after:w-full" : "after:w-0 hover:after:w-full"}
        `;
    };

    // --- Helper for navigating & scrolling ---
    const handleScrollOrNavigate = (hash?: string, path?: string) => {

        if (path && location.pathname !== path) {
            // Navigate first
            navigate(path + (hash || ""), { replace: false });
            // Close menu after short delay
            setTimeout(() => setIsOpen(false), 50);
        } else if (hash) {
            const el = document.querySelector(hash);
            el?.scrollIntoView({ behavior: "smooth" });
            setIsOpen(false);
        } else {
            window.scrollTo({ top: 0, behavior: "smooth" });
            setIsOpen(false);
        }
    };


    return (
        <>
            <nav
                className={`${
                    fixed ? "fixed top-0 left-0" : "relative"
                } w-full z-50 transition-transform duration-300 ${
                    showNav ? "translate-y-0" : "-translate-y-full"
                } ${
                    scrolled || defaultFilled
                        ? "bg-white backdrop-blur-md shadow-sm border-b-[5px] border-primary"
                        : "bg-transparent"
                }`}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
                    <div className="flex items-center justify-between h-16">
                        {/* Logo */}
                        <button onClick={() => handleScrollOrNavigate(undefined, "/")}>
                            <img
                                className="h-14 w-auto object-contain"
                                src={Logo}
                                alt="NJA Training Solutions Logo"
                            />
                        </button>

                        {/* Desktop Menu */}
                        <div className="hidden md:flex md:items-center md:space-x-14">
                            <button
                                onClick={() => handleScrollOrNavigate(undefined, "/")}
                                className={linkClass("home")}
                            >
                                Home
                            </button>

                            <button
                                onClick={() => navigate("/courses/all")}
                                className={linkClass("courses")}
                            >
                                Our Courses
                            </button>

                            <button
                                onClick={() => handleScrollOrNavigate("#about", "/")}
                                className={linkClass("about")}
                            >
                                About
                            </button>

                            <button
                                onClick={() => handleScrollOrNavigate("#contact", "/")}
                                className={linkClass("contact")}
                            >
                                Contact
                            </button>

                            <a
                                href="tel:0497083537"
                                className="p-2 px-8 bg-primary rounded-full hover:bg-primary/90 transition text-white"
                            >
                                Enroll Now
                            </a>
                        </div>

                        {/* Mobile Toggle */}
                        <div className="md:hidden">
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                className="text-gray-200 hover:text-gray-400 focus:outline-none"
                                aria-label={isOpen ? "Close menu" : "Open menu"}
                                aria-expanded={isOpen}
                                aria-controls="mobile-menu"
                            >
                                <svg
                                    className="h-6 w-6"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    aria-hidden="true"
                                >
                                    {isOpen ? (
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M6 18L18 6M6 6l12 12"
                                        />
                                    ) : (
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                    )}
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        key="mobile-menu"
                        id="mobile-menu"
                        initial={{ x: "100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "100%" }}
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        className="fixed inset-0 z-[1000] flex flex-col justify-center items-center space-y-10 md:hidden"
                        role="dialog"
                        aria-modal="true"
                    >
                        <div className="absolute inset-0 bg-black/75 backdrop-blur-lg" />

                        {/* Close */}
                        <button
                            onClick={() => setIsOpen(false)}
                            className="absolute top-0 right-5 text-gray-200 hover:text-gray-400 focus:outline-none z-10"
                            aria-label="Close menu"
                        >
                            <svg
                                className="h-8 w-8"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        </button>

                        {/* Mobile links */}
                        <button
                            onClick={() => handleScrollOrNavigate(undefined, "/")}
                            className="text-4xl font-bold text-white hover:text-gray-300 z-10"
                        >
                            Home
                        </button>

                        <button
                            onClick={() => handleScrollOrNavigate(undefined, "/courses/all")}
                            className="text-4xl font-bold text-white hover:text-gray-300 z-10"
                        >
                            Our Courses
                        </button>

                        <button
                            onClick={() => handleScrollOrNavigate("#about", "/")}
                            className="text-4xl font-bold text-white hover:text-gray-300 z-10"
                        >
                            About
                        </button>

                        <button
                            onClick={() => handleScrollOrNavigate("#testimonials", "/")}
                            className="text-4xl font-bold text-white hover:text-gray-300 z-10"
                        >
                            Reviews
                        </button>

                        <button
                            onClick={() => handleScrollOrNavigate("#contact", "/")}
                            className="text-4xl font-bold text-white hover:text-gray-300 z-10"
                        >
                            Contact
                        </button>

                        <a
                            href="tel:0497083537"
                            className="text-4xl font-bold text-primary hover:text-gray-300 z-10"
                        >
                            Enroll Now
                        </a>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};
