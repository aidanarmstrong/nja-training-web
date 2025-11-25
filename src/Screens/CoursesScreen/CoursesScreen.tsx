import { Footer, Navbar } from "@/Components";
import coursesData from "@/data/courses";
import { Link } from "react-router-dom";

const CoursesScreen = () => {
    const courses = coursesData; // keep IDs

    return (
        <div className="bg-white min-h-screen">
            <div className="bg-white h-[100px]">
                <Navbar defaultFilled activeScreen="courses"/>
            </div>
            {/* CTA / Header Section */}
            <section className="bg-primary text-white py-24 px-6 md:px-12">
                <div className="max-w-7xl mx-auto text-center md:text-left">
                    <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
                        Explore Our Training Courses
                    </h1>
                    <p className="mt-4 text-lg md:text-xl max-w-3xl text-white/90">
                        Hands-on, accredited, and industry-ready. Select any course to view
                        full details, units, and upcoming dates. Fast-track your career today.
                    </p>
                    <div className="mt-8 flex flex-wrap gap-4 justify-center md:justify-start">
                        <a
                            href={`mailto:hello@nja.com?subject=${encodeURIComponent(
                                "Inquiry About NJA Training Courses"
                            )}&body=${encodeURIComponent(
                                "Hi NJA Team,\n\nI am interested in learning more about your training courses. Could you please provide more details?\n\nName:\nPhone:\nPreferred Courses:\n\nThank you!"
                            )}`}
                            className="bg-white text-primary px-6 py-3 rounded-lg font-semibold hover:bg-white/90 transition"
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
                        Browse our full range of accredited courses. Click “View Course” to
                        see course overview and booking availability.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {courses.map((course) => (
                        <article
                            key={course.id}
                            className="border rounded-2xl hover:shadow-xl transition bg-white flex flex-col overflow-hidden"
                        >
                            {/* Course Image */}
                            <div className="h-48 w-full flex items-center justify-center overflow-hidden">
                                <img
                                    src={course.image}
                                    alt={course.title}
                                    className="h-full w-full object-cover"
                                />
                            </div>

                            {/* Content */}
                            <div className="px-6 pb-6 pt-4 flex flex-col flex-grow">
                                <h3 className="text-xl font-bold text-slate-900 mb-3">
                                    {course.title}
                                </h3>
                                <p className="text-slate-600 text-base mb-5">
                                    {course.summary}
                                </p>

                                <div className="flex items-center justify-between text-slate-700 font-medium mb-4">
                                    <span>{course.duration || "Duration TBD"}</span>
                                    <strong>{course.price || "Price TBD"}</strong>
                                </div>

                                {/* View Course CTA */}
                                <Link
                                    to={`/courses/${course.id}/overview`}
                                    className="mt-auto w-full block bg-primary text-white px-4 py-3 rounded-lg font-medium hover:bg-primary/90 transition text-center"
                                >
                                    View Course
                                </Link>
                            </div>
                        </article>
                    ))}
                </div>
                <div className="flex justify-center items-center pt-20">
                    <p className="text-lg  text-gray-400 text-center font-pencil italic">
                        More courses coming soon...
                    </p>
                </div>

            </section>
            <Footer/>
        </div>
    );
};

export default CoursesScreen;
