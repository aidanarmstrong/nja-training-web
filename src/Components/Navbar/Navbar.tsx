import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Logo } from "../../assets";


interface NavbarProps {
  fixed?: boolean;
  defaultFilled?: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({
  fixed = true,
  defaultFilled = false,
}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [showNav, setShowNav] = useState(true);
    const [scrolled, setScrolled] = useState(defaultFilled);
    const [lastScrollY, setLastScrollY] = useState(0);

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

    // Disable body scroll when mobile menu is open
    useEffect(() => {
        document.body.style.overflow = isOpen ? "hidden" : "";
    }, [isOpen]);

    const handleMobileNavClick = () => setIsOpen(false);

    return (
        <>
            {/* Top Navbar Bar */}
            <nav
                className={`${
                fixed ? "fixed top-0 left-0" : "relative"
                } w-full z-50 transition-transform duration-300 ${
                    showNav ? "translate-y-0" : "-translate-y-full"
                } ${
                scrolled || defaultFilled
                    ? "bg-white backdrop-blur-md shadow-sm"
                    : "bg-transparent"
                } `}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
                    <div className="flex items-center justify-between h-16">
                        {/* Logo */}
                        <Link to="/" className="flex items-center gap-3">
                            <img
                                className="h-14 w-auto object-contain"
                                src={Logo}
                                alt="NJA Training Solutions Logo"
                            />
                        </Link>

                        {/* Desktop Menu */}
                        <div className="hidden md:flex md:items-center md:space-x-14">
                            <a
                                href="/"
                                className={`${scrolled ? 'text-gray-500 hover:text-primary ' : 'text-gray-200 hover:text-gray-300 '} border-b-2 border-b-transparent hover:border-b-primary py-2`}
                            >
                                Home
                            </a>

                            <a
                                href="/#courses"
                                className={`${scrolled ? 'text-gray-500 hover:text-primary ' : 'text-gray-200 hover:text-gray-300 '} border-b-2 border-b-transparent hover:border-b-primary py-2`}
                            >
                                Courses
                            </a>

                            <a
                                href="/#about"
                                className={`${scrolled ? 'text-gray-500 hover:text-primary ' : 'text-gray-200 hover:text-gray-300 '} border-b-2 border-b-transparent hover:border-b-primary py-2`}
                            >
                                About
                            </a>

                            <a
                                href="#contact"
                                className={`${scrolled ? 'text-gray-500 hover:text-primary ' : 'text-gray-200 hover:text-gray-300 '} border-b-2 border-b-transparent hover:border-b-primary py-2`}
                            >
                                Contact
                            </a>

                            <a
                                href="#book"
                                className="p-2 px-8 bg-primary rounded-full hover:bg-primary/90 transition text-white"
                            >
                               Call on 0497083537
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
                        <Link
                            to="/"
                            onClick={handleMobileNavClick}
                            className="text-4xl font-bold text-white hover:text-gray-300 z-10"
                        >
                            Home
                        </Link>

                        <Link
                            to="/courses"
                            onClick={handleMobileNavClick}
                            className="text-4xl font-bold text-white hover:text-gray-300 z-10"
                        >
                            Courses
                        </Link>

                        <Link
                            to="/about"
                            onClick={handleMobileNavClick}
                            className="text-4xl font-bold text-white hover:text-gray-300 z-10"
                        >
                            About
                        </Link>

                        <Link
                            to="/contact"
                            onClick={handleMobileNavClick}
                            className="text-4xl font-bold text-white hover:text-gray-300 z-10"
                        >
                            Contact
                        </Link>

                        <Link
                            to="/book"
                            onClick={handleMobileNavClick}
                            className="text-4xl font-bold text-primary hover:text-gray-300 z-10"
                        >
                            Book Now
                        </Link>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};
