import { Link, useParams } from "react-router-dom";
import courses from "@/data/courses"; // your courses JSON
import { Footer, Navbar } from "@/Components";
import { HiArrowLeft } from "react-icons/hi";
import { useEffect, useState } from "react";
import { getCalApi } from "@calcom/embed-react";
import emailjs from "@emailjs/browser";
import { Helmet } from "@dr.pogodin/react-helmet";

const CourseOverviewScreen = () => {
    const { id } = useParams();
    const course = courses.find((c) => c.id === id);
    const [status, setStatus] = useState("");
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        (async function () {
        const cal = await getCalApi({"namespace": course?.id});
        cal("ui", {"theme":"light","cssVarsPerTheme":{"light":{"cal-brand":"#79D35E"},"dark":{"cal-brand":"#fff"}},"hideEventTypeDetails":true,"layout":"month_view"});
        })();
    }, [])


    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const form = e.currentTarget;

        // Honeypot check
        const honeypot = (form.elements.namedItem("honeypot-1223") as HTMLInputElement).value;
        if (honeypot) {
            console.warn("Bot detected! Form not submitted.");
            return;
        }

        setLoading(true);
        setStatus(""); // clear previous status

        emailjs
        .sendForm(
            "service_tumj0n1",
            "template_goqh03k",
            form,
            "DLa_hSipoh4g9aKq6"
        )
        .then(
            () => {
                setStatus("Form submitted! We will contact you soon.");
                form.reset();
            },
            (error) => {
                setStatus("Oops! Something went wrong. Please try again.");
                console.error(error.text);
            }
        ).finally(() => {
            setLoading(false);
        });
    };


    if (!course) return <div className="text-center py-20">Course not found.</div>;

    return (
        <>
            <Helmet>
                <title>{course.title} — NJA Training Solutions</title>

                <meta name="description" content={course.summary} />

                <link
                    rel="canonical"
                    href={`https://www.njatrainingsolutions.com.au/courses/${course.id}`}
                />

                <meta property="og:title" content={course.title} />
                <meta property="og:description" content={course.summary} />

                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Course",
                        name: course.title,
                        description: course.summary,
                        provider: {
                            "@type": "Organization",
                            name: "NJA Training Solutions",
                            sameAs: "https://www.njatrainingsolutions.com.au/",
                        },
                    })}
                </script>
            </Helmet>
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
                                    src={course.image[0]}
                                    alt={course?.title}
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            {/* Text content */}
                           <div className="lg:w-1/2 space-y-6">
                                <h1 className="text-4xl font-extrabold">{course.title}</h1>

                                <p className="text-lg text-gray-700">
                                    {course.summary}
                                </p>

                                <p className="text-xl font-semibold">
                                    Cost: {course.price}
                                </p>

                                <a
                                    href="#enroll-form"
                                    className="inline-flex bg-primary hover:bg-primary/90 text-white font-semibold px-8 py-3 rounded-lg shadow-lg transition self-start"
                                >
                                    Enroll Now
                                </a>
                            </div>


                        </div>
                    </div>
                </section>


                {/* Course Details */}
                <section className="max-w-5xl mx-auto px-6 lg:px-12 py-16 space-y-12">
                    {/* Description */}
                    <div dangerouslySetInnerHTML={{ __html: course.course_overview }} />

                    <div>
                        <h2 className="text-2xl font-bold mb-4">Online Theory Requirements</h2>
                        <p className="text-gray-700 leading-relaxed">
                            Some of our courses include an online theory component that <b>must</b> be completed before attending your practical 
                            training session. Other courses may require classroom-based theory delivered on the day. After booking, please 
                            check your confirmation and follow-up emails for instructions on accessing and completing your online theory. 
                            <b> If you’re unsure about the requirements for your course, contact us prior to your training date so we can ensure 
                            everything is completed and you are fully prepared.</b>
                        </p>
                    </div>


                    {/* Additional Requirements */}
                    <div>
                        <h2 className="text-2xl font-bold mb-4">Pre-requisites & Requirements</h2>
                        <ul className="list-disc pl-6 space-y-2 text-gray-700">
                            <li><strong>Age Requirement:</strong> Participants must be 18 years or older.</li>
                            <li><strong>Experience:</strong> Prior practical operator experience is recommended.</li>
                            <li>
                                <strong>Unique Student Identifier (USI):</strong> Required for enrolment and issuance of a Statement of Attainment. 
                                Apply for your free USI at <a className="text-blue-500 underline" href="https://www.usi.gov.au/" target="_blank" rel="noopener noreferrer">usi.gov.au</a>.
                            </li>
                            <li><strong>Photo Identification:</strong> Valid driver’s licence or WA Photo Card.</li>
                            <li><strong>Personal Protective Equipment (PPE):</strong> Steel-capped boots, long sleeve shirt, long pants, and hat.</li>
                            <li><strong>Delivery:</strong> On-site training at the NJA Training Facility.</li>
                        </ul>
                    </div>

                    <div className="mx-auto bg-blue-50 border-l-4 border-primary p-6 rounded-lg shadow-sm mt-8">
                        <h2 className="text-2xl font-bold mb-4 text-primary">Looking to Book Multiple Days?</h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            If you’re planning to book training over a few days or need a tailored schedule, we can help! Fill out the enquiry form below and our team will work with you to reserve a suitable time slot that fits your needs.
                        </p>
                        <p className="text-gray-700 font-semibold">
                            We’ll contact you promptly to confirm availability and arrange your training sessions.
                        </p>
                    </div>


                    
                    {/* Contact / Enquiry */}
                    <div id="enroll-form" className="max-w-2-xl bg-white shadow-lg border border-gray-50 rounded-lg p-6">
                        <h2 className="text-2xl font-bold mb-4">Enroll or Enquire</h2>
                        {status !== "" ? (
                            <>
                                <div className="w-full md:col-span-2 bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg flex items-center gap-3">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5 text-green-600"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M5 13l4 4L19 7"
                                        />
                                    </svg>

                                    <span className="font-medium">
                                        Your enquiry has been sent successfully! We'll get back to you shortly.
                                    </span>
                                </div>
                            </>
                        ) : (
                            <>
                                <form
                                    className="grid grid-cols-1 md:grid-cols-2 gap-6"
                                    onSubmit={handleSubmit}
                                >
                                    <input type="text" name="honeypot-1223" style={{ display: "none" }} autoComplete="off" />
                                    <input
                                        type="text"
                                        placeholder="Full Name*"
                                        required
                                        name="user_name"
                                        className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary outline-none"
                                    />
                                    <input
                                        type="email"
                                        placeholder="Email*"
                                        name="user_email"
                                        required
                                        className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary outline-none"
                                    />
                                    <input
                                        type="tel"
                                        placeholder="Phone*"
                                        name="user_phone"
                                        required
                                        className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary outline-none"
                                    />
                                    <input
                                        type="text"
                                        placeholder="Subject"
                                        name="subject"
                                        className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary outline-none"
                                    />
                                    <textarea
                                        placeholder="Message"
                                        name="message"
                                        className="w-full md:col-span-2 border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary outline-none"
                                    />
                                    <button
                                        type="submit"
                                        className="w-full md:col-span-2 bg-primary hover:bg-primary/90 text-white font-semibold px-8 py-3 rounded-lg shadow-lg transition"
                                        disabled={loading}
                                    >
                                        {/* Submit Enquiry */}
                                        {loading ? "Sending..." : "Submit Enquiry"}
                                    </button>
                                </form>
                            </>
                        )}
                    </div>

                </section>

                {/* Footer */}
                <Footer />
            </div>
        </>
    );
};

export default CourseOverviewScreen;
