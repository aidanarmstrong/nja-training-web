import courses from "@/data/courses";
import { FaTrophy } from "react-icons/fa";
import { Link } from "react-router-dom";

const CoursesSection = () => {
    const popularCourses = courses.slice(0, 3); // top 3

    return (
        <section id="courses" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                
                {/* HEADER */}
                <div className="text-center mb-14">
                    <div className="flex items-center justify-center space-x-3 mb-3">
                        <FaTrophy className="text-primary text-3xl" />
                        <h2 className="text-4xl font-extrabold text-slate-900">
                            Our Most Popular Training
                        </h2>
                    </div>

                    <p className="text-secondary/70 max-w-2xl mx-auto text-lg">
                        Industry-ready, hands-on and accredited.  
                        Learn the skills employers look for and fast-track your career with our top-rated training programs.
                    </p>
                </div>


                {/* POPULAR COURSES */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {popularCourses.map((course) => (
                        <article
                            key={course.id}
                            className="border rounded-2xl hover:shadow transition bg-white flex flex-col justify-between overflow-hidden"
                        >
                            <img
                                src={course.image}
                                alt={course.title}
                                className="h-48 w-full object-cover"
                            />

                            <div className="px-6 pb-6 pt-4">
                                
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

                                <Link
                                    to={`/courses/${course.id}/overview`}
                                    className="w-full block bg-primary text-white px-4 py-3 rounded-lg font-medium hover:bg-primary/90 transition text-center"
                                >
                                    Course Overview
                                </Link>
                            </div>
                        </article>
                    ))}
                </div>

                {/* CTA — VIEW ALL COURSES */}
                <div className="text-center mt-14">
                    <a
                        href="/courses/all"
                        className="inline-block px-8 py-2 bg-white text-secondary border-2 border-primary font-semibold text-lg rounded-lg shadow-sm hover:bg-primary/10 hover:text-black transition"
                    >
                        Browse All Courses
                    </a>

                    <p className="mt-4 text-secondary/60 max-w-xl mx-auto text-sm">
                        Explore our full range of accredited plant operator training, GPS guidance programs, 
                        and onsite assessment options. Enrol today and take the next step in your career.
                    </p>
                </div>

            </div>
        </section>
    );
};

export default CoursesSection;
