import { Link, useParams } from "react-router-dom";
import courses from "@/data/courses"; // your courses JSON
import { Footer, Navbar } from "@/Components";
import { HiArrowLeft } from "react-icons/hi";

const CourseOverviewScreen = () => {
    const { id } = useParams();
    const course = courses.find((c) => c.id === id);

    if (!course) return <div className="text-center py-20">Course not found.</div>;

    return (
        <div className="bg-white text-gray-900 min-h-screen flex flex-col">
            
            {/* Navbar */}
            <div className="bg-white h-[100px]">
                <Navbar defaultFilled activeScreen="courses"/>
            </div>

            {/* Hero Section */}
            <section className="relative w-full bg-gray-50 py-16">
                <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col gap-6">
                    
                    {/* Back button */}
                    <div>
                        <Link
                            to="/courses/all"
                            className="inline-flex items-center text-secondary hover:text-secondary/80 font-semibold mb-4"
                        >
                            <HiArrowLeft className="w-5 h-5 mr-2" />
                            Back to All Courses
                        </Link>
                    </div>

                    <div className="flex flex-col lg:flex-row items-center gap-12">
                        
                        {/* Image container with fixed aspect ratio */}
                        <div className="w-full lg:w-2/6 aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
                            <img
                                src={course.image}
                                alt={course?.title}
                                className="w-full h-full object-cover"
                            />
                        </div>

                        {/* Text content */}
                        <div className="lg:w-1/2 space-y-6">
                            <h1 className="text-4xl font-extrabold">{course.title}</h1>
                            <p className="text-lg text-gray-700">{course.summary}</p>
                            <p className="text-xl font-semibold">Cost: {course.price}</p>
                            <button
                                onClick={() => {
                                    // TODO: Replace with Cal.com link
                                    console.log("Enroll now clicked for", course.id);
                                }}
                                className="bg-secondary hover:bg-secondary/90 text-white font-semibold px-8 py-3 rounded-lg shadow-lg transition w-full md:w-1/2"
                            >
                                Enroll Now
                            </button>
                        </div>

                    </div>
                </div>
            </section>


            {/* Course Details */}
            <section className="max-w-5xl mx-auto px-6 lg:px-12 py-16 space-y-12">
                {/* Description */}
                <div>
                    <h2 className="text-2xl font-bold mb-4">Candidate Requirements</h2>
                    <p className="text-gray-700 leading-relaxed">
                        This course has been developed for experienced operators and to be delivered in the
                        workplace. It applies operator skills and knowledge for those working in site-based
                        roles required to operate an excavator to lift, carry and place materials. Excavators are
                        used across a range of industries including civil construction and the resource sectors.
                    </p>
                    <ul className="list-disc pl-5 mt-4 text-gray-700 space-y-2">
                        <li>Operating the excavator in line with established requirements</li>
                        <li>Lifting, carrying and placing materials to complete work activity</li>
                        <li>Selecting, removing, fitting and using attachments or an excavator</li>
                        <li>Preparing to relocate the excavator</li>
                        <li>Conducting housekeeping activities, including recycling and disposing of materials</li>
                    </ul>
                    <p className="mt-4 text-gray-700">
                        A Statement of Attainment will be issued on successful completion of the unit requirements.
                    </p>
                    <p className="mt-2 text-gray-700 italic">
                        Note: This unit alone does not provide sufficient skill to independently load and unload
                        equipment. To perform this activity safely, personnel must either complete or be assisting
                        someone who has completed the relevant unit.
                    </p>
                </div>

                {/* Additional Requirements */}
                <div>
                    <h2 className="text-2xl font-bold mb-4">Pre-requisites & Requirements</h2>
                    <ul className="list-disc pl-5 space-y-2 text-gray-700">
                        <li>Must be 18 years of age or older</li>
                        <li>Prior practical operator experience recommended</li>
                        <li>Unique Student Identifier (USI)</li>
                        <li>Photo ID (Drivers Licence, WA Photo Card)</li>
                        <li>PPE: Steel cap boots, long sleeve shirt, long pants, hat</li>
                        <li>Delivery: On-site training at NJA or client premises</li>
                        <li>Language Literacy and Numeracy (LLN) test on enrolment</li>
                    </ul>
                </div>

                {/* Contact / Enquiry */}
                <div>
                    <h2 className="text-2xl font-bold mb-4">Enquire or Enroll</h2>
                    <form
                        className="grid grid-cols-1 md:grid-cols-2 gap-6"
                        onSubmit={(e) => {
                            e.preventDefault();
                            // TODO: Add Cal.com integration or form submission
                            console.log("Form submitted for", course.id);
                        }}
                    >
                        <input
                            type="text"
                            placeholder="Full Name*"
                            required
                            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary outline-none"
                        />
                        <input
                            type="email"
                            placeholder="Email*"
                            required
                            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary outline-none"
                        />
                        <input
                            type="tel"
                            placeholder="Phone*"
                            required
                            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary outline-none"
                        />
                        <input
                            type="text"
                            placeholder="Subject"
                            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary outline-none"
                        />
                        <textarea
                            placeholder="Message"
                            className="w-full md:col-span-2 border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary outline-none"
                        />
                        <button
                            type="submit"
                            className="w-full md:col-span-2 bg-primary hover:bg-primary/90 text-white font-semibold px-8 py-3 rounded-lg shadow-lg transition"
                        >
                            Submit Enquiry
                        </button>
                    </form>
                </div>
            </section>

            {/* Footer */}
            <Footer />
        </div>
    );
};

export default CourseOverviewScreen;
