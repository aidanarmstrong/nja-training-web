import React from "react";
import { Footer, Navbar } from "../../../Components";

const PrivacyPolicy: React.FC = () => {
    const openEmailClient = () => {
        window.location.href = "mailto:support@fifoclock.com";
    };

    return (
        <>
            <Navbar fixed={false} defaultFilled />
            <div className="max-w-4xl mx-auto p-6 text-gray-800">
                <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>

                <p className="mb-4">
                    This privacy policy applies to the FIFO Clock app (hereby referred to as
                    "Application") for mobile devices that was created by HANDY FIND PTY LTD
                    (hereby referred to as "Service Provider") as an Ad Supported service.
                    This service is intended for use "AS IS".
                </p>

                <h2 className="text-2xl font-semibold mt-6 mb-3">
                    Information Collection and Use
                </h2>
                <p className="mb-4">
                    The Application collects information when you download and use it. This
                    information may include:
                </p>
                <ul className="list-disc list-inside mb-4">
                    <li>Your device's Internet Protocol address (e.g. IP address)</li>
                    <li>The pages of the Application that you visit</li>
                    <li>The time and date of your visit, the time spent on those pages</li>
                    <li>The operating system you use on your mobile device</li>
                </ul>
                <p className="mb-4">
                    The Application does not gather precise information about the location
                    of your mobile device.
                </p>
                <p className="mb-4">
                    The Service Provider may use the information you provided to contact you
                    from time to time to provide you with important information, required
                    notices, and marketing promotions.
                </p>

                <h2 className="text-2xl font-semibold mt-6 mb-3">Third Party Access</h2>
                <p className="mb-4">
                    Only aggregated, anonymized data is periodically transmitted to external
                    services to aid the Service Provider in improving the Application and
                    their service. The Service Provider may share your information with
                    third parties as described in this privacy policy.
                </p>

                <h2 className="text-2xl font-semibold mt-6 mb-3">Opt-Out Rights</h2>
                <p className="mb-4">
                    You can stop all collection of information by the Application easily by
                    uninstalling it. You may use the standard uninstall processes available
                    as part of your mobile device or via the app marketplace.
                </p>

                <h2 className="text-2xl font-semibold mt-6 mb-3">Data Retention Policy</h2>
                <p className="mb-4">
                    The Service Provider will retain user-provided data for as long as you
                    use the Application and for a reasonable time thereafter. If you'd like
                    them to delete user-provided data, please contact them at{" "}
                    <button
                        onClick={openEmailClient}
                        className="text-primary underline hover:text-primary-dark"
                    >
                        support@fifoclock.com
                    </button>
                    .
                </p>

                <h2 className="text-2xl font-semibold mt-6 mb-3">Children</h2>
                <p className="mb-4">
                    The Application does not address anyone under the age of 13. The Service
                    Provider does not knowingly collect personally identifiable information
                    from children under 13 years of age. If you are a parent or guardian and
                    are aware that your child has provided personal information, please
                    contact the Service Provider at{" "}
                    <button
                        onClick={openEmailClient}
                        className="text-primary underline hover:text-primary-dark"
                    >
                        support@fifoclock.com
                    </button>
                    .
                </p>

                <h2 className="text-2xl font-semibold mt-6 mb-3">Security</h2>
                <p className="mb-4">
                    The Service Provider is concerned about safeguarding the confidentiality
                    of your information and provides physical, electronic, and procedural
                    safeguards to protect information processed and maintained.
                </p>

                <h2 className="text-2xl font-semibold mt-6 mb-3">Changes</h2>
                <p className="mb-4">
                    This Privacy Policy may be updated from time to time. The Service
                    Provider will notify you of changes by updating this page.
                </p>

                <h2 className="text-2xl font-semibold mt-6 mb-3">Your Consent</h2>
                <p className="mb-4">
                    By using the Application, you are consenting to the processing of your
                    information as set forth in this Privacy Policy now and as amended.
                </p>

                <h2 className="text-2xl font-semibold mt-6 mb-3">Contact Us</h2>
                <p className="mb-4">
                    If you have any questions regarding privacy while using the Application,
                    please contact the Service Provider at{" "}
                    <button
                        onClick={openEmailClient}
                        className="text-primary underline hover:text-primary-dark"
                    >
                        support@fifoclock.com
                    </button>
                    .
                </p>
            </div>
            <Footer/>
        </>
    );
};

export default PrivacyPolicy;
