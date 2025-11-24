import courses from './data';

const CoursesSection = () => {
    return (
        <section id="courses" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold">Our Featured Courses</h2>
                    <p className="mt-3 text-secondary/60 max-w-2xl mx-auto">
                        Practical, accredited and designed for immediate on-site use.
                        Select any course for full details, units and upcoming dates.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
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
                                        href={`mailto:hello@njatrainingsolutions.com?subject=COURSE: ${encodeURIComponent(course.title)}&body=${encodeURIComponent("Are there any available spaces for this course?")}`}
                                        className="w-full inline-block bg-primary text-white px-4 py-2 my-2 rounded-lg text-base font-medium hover:bg-primary/90 transition text-center"
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


export default CoursesSection;