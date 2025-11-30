import { Footer, Navbar } from "@/Components";
import coursesData from "@/data/courses";
import { Link } from "react-router-dom";
import digger from "@/assets/images/digger.png";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Chip, Tooltip } from "@mui/material";
import { FaUserAlt } from "react-icons/fa";
import Slider from "react-slick";
import { Helmet } from "@dr.pogodin/react-helmet";

const CoursesScreen = () => {
    const courses = coursesData; // keep IDs
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedCourse, setSelectedCourse] = useState("");

    // Filter courses based on search input
    const filteredCourses = courses.filter((course) => {
        const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesDropdown = selectedCourse ? course.title === selectedCourse : true;
        return matchesSearch && matchesDropdown;
    });


    return (
        <>
            <Helmet>
                <title>All Training Courses — GPS, Excavator & VOC | NJA Training Solutions</title>

                <meta
                    name="description"
                    content="Browse all GPS machine control courses, excavator training, plant operator tickets and VOC certifications available Australia-wide."
                />

                <link rel="canonical" href="https://www.njatrainingsolutions.com.au/courses/all" />

                <meta property="og:title" content="All NJA Training Courses" />
                <meta
                    property="og:description"
                    content="Explore GPS machine control courses, excavator training and VOC certifications delivered by expert trainers across Australia."
                />
                <meta property="og:url" content="https://www.njatrainingsolutions.com.au/courses/all" />
            </Helmet>
            <div className="bg-white min-h-screen">
                <div className="bg-white h-[100px]">
                    <Navbar defaultFilled activeScreen="courses"/>
                </div>

                {/* CTA / Header Section */}
                <section className="relative bg-gray-800 text-white py-24 px-6 md:px-12">
                    <img
                        src={digger}
                        alt="Excavator Training"
                        className="absolute inset-0 w-full h-full object-cover opacity-30"
                    />
                    <div className="absolute inset-0 bg-black/20"></div>

                    <div className="relative max-w-7xl mx-auto text-center md:text-left">
                        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
                            Explore Our Training Courses
                        </h1>
                        <p className="mt-4 text-lg md:text-xl max-w-3xl text-white/90">
                            Hands-on, accredited, and industry-ready. Select any course to view full details, units, and upcoming dates. Fast-track your career today.
                        </p>
                        <div className="mt-8 flex flex-wrap gap-4 justify-center md:justify-start">
                            <a
                                href={`mailto:hello@njatrainingsolutions.com?subject=${encodeURIComponent(
                                    "Inquiry About NJA Training Courses"
                                )}&body=${encodeURIComponent(
                                    "Hi NJA Team,\n\nI am interested in learning more about your training courses. Could you please provide more details?\n\nName:\nPhone:\nPreferred Courses:\n\nThank you!"
                                )}`}
                                className="bg-transparent text-white px-6 border-2 border-white py-3 rounded-lg font-semibold hover:bg-primary hover:border-primary hover:text-white transition 3s"
                            >
                                Request More Info
                            </a>
                        </div>
                    </div>
                </section>

                {/* Courses Grid */}
                <section className="py-20 px-6 md:px-12 max-w-7xl mx-auto">
                <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-slate-900">
                            All Training Courses
                        </h2>
                        <p className="mt-3 text-secondary/60 max-w-2xl mx-auto">
                            Browse our full range of accredited courses. Click “View Course” to see course overview and booking availability.
                        </p>

                        {/* Search + Dropdown */}
                        <div className="mt-6 flex flex-col md:flex-row gap-4 justify-center items-center relative">
                            {/* Search Input with Clear Button */}
                            <div className="relative w-full md:w-72">
                                <input
                                    type="text"
                                    placeholder="Search courses..."
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition pr-10"
                                />
                                {searchTerm && (
                                    <button
                                        onClick={() => setSearchTerm("")}
                                        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition"
                                    >
                                        ✕
                                    </button>
                                )}
                            </div>

                            {/* Dropdown Filter with Chevron */}
                            <div className="relative w-full md:w-60">
                                <select
                                    value={selectedCourse || ""}
                                    onChange={(e) => setSelectedCourse(e.target.value)}
                                    className="appearance-none w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition bg-white text-slate-900 pr-10 hover:cursor-pointer"
                                >
                                    <option value="">All Courses</option>
                                    {courses.map((course) => (
                                        <option key={course.id} value={course.title}>
                                            {course.title}
                                        </option>
                                    ))}
                                </select>
                                {/* Chevron Icon */}
                                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none" size={20} />
                            </div>
                        </div>


                    </div>

                    {/* Courses Grid */}
                    {filteredCourses.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {filteredCourses.map((course) => (
                                <article
                                    key={course.id}
                                    className="border rounded-2xl hover:shadow transition bg-white flex flex-col overflow-hidden"
                                >
                                    {/* Course Image or Slider */}
                                <div className="w-full h-ful relative">
                                        <Slider
                                            dots={true}
                                            arrows={true}
                                            infinite={true}
                                            slidesToShow={course.image.length}
                                            speed={500}
                                            slidesToScroll={1}
                                        >
                                            {course.image.map((imgSrc, idx) => (
                                                <div key={idx} className="w-full h-48">
                                                    <img
                                                        src={imgSrc}
                                                        alt={`${course.title} ${idx + 1}`}
                                                        className="w-full h-full object-cover"
                                                    />
                                                </div>
                                            ))}
                                        </Slider>
                                    </div>

                                    {/* Content */}
                                    <div className="px-6 pb-6 pt-4 flex flex-col flex-grow">
                                        <h3 className="text-xl font-bold text-slate-900 mb-3">{course.title}</h3>
                                        
                                        <div className="flex flex-row flex-wrap gap-2 mb-3">
                                            {course.code?.map((codeItem: string, index: number) => (
                                                <Tooltip key={index} title={course.codeName[index]}>
                                                    <Chip label={codeItem} />
                                                </Tooltip>
                                            ))}
                                        </div>

                                        <p className="text-slate-600 text-base mb-5">{course.summary}</p>

                                        <div className="flex items-center justify-between text-slate-700 font-medium mb-4">
                                            <span>{course.duration || "Duration TBD"}</span>
                                            <strong>{course.price || "Price TBD"}</strong>
                                        </div>

                                        {course.groups && (
                                            <div className="flex text-slate-700 font-medium mb-4">
                                                <div className="flex flex-row items-center gap-2">
                                                    <FaUserAlt />
                                                    <p>{course.groups}</p>
                                                </div>
                                            </div>
                                        )}

                                        {/* View Course CTA */}
                                        <Link
                                            to={`/courses/${course.id}/overview`}
                                            className="mt-auto w-full block bg-primary text-white px-4 py-3 rounded-lg font-medium hover:bg-primary/80 transition text-center"
                                        >
                                            View Course
                                        </Link>
                                    </div>
                                </article>
                            ))}
                        </div>
                    ) : (
                        <div className="flex flex-col items-center justify-center py-20">
                            <p className="text-xl text-gray-400 font-semibold mb-4 text-center">
                                No courses found matching your search.
                            </p>
                            <p className="text-gray-300 text-center">
                                More courses coming soon — check back later!
                            </p>
                        </div>
                    )}
                </section>
                <Footer/>
            </div>
        </>
    );
};

export default CoursesScreen;
