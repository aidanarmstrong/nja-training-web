import React from "react";
import { Footer, Navbar } from "../../../Components";

const PrivacyPolicy: React.FC = () => {
    const openEmailClient = () => {
        window.location.href = "mailto:admin@njatrainingsolutions.com";
    };

    return (
        <>
            <Navbar fixed={false} defaultFilled />
            <div className="max-w-4xl mx-auto p-6 text-gray-800">
                <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>

                <p className="mb-4">
                    This Privacy Policy governs the manner in which NJA Training Solutions 
                    (hereafter referred to as "Service Provider") collects, uses, maintains, 
                    and discloses information collected from users of its website 
                    (hereafter referred to as "Website"). By using the Website, you agree 
                    to the practices described in this policy.
                </p>

                <h2 className="text-2xl font-semibold mt-6 mb-3">
                    Information Collection
                </h2>
                <p className="mb-4">
                    The Website may collect certain personally identifiable information 
                    from users in a lawful and transparent manner. This may include, but is 
                    not limited to:
                </p>
                <ul className="list-disc list-inside mb-4">
                    <li>Name, email address, and contact information provided voluntarily;</li>
                    <li>Information about bookings or inquiries made through the Website;</li>
                    <li>Technical data such as IP address, browser type, and pages visited.</li>
                </ul>

                <h2 className="text-2xl font-semibold mt-6 mb-3">Use of Information</h2>
                <p className="mb-4">
                    The information collected may be used for the following purposes:
                </p>
                <ul className="list-disc list-inside mb-4">
                    <li>Providing and managing services, including training bookings;</li>
                    <li>Improving the Website and customer experience;</li>
                    <li>Communicating important updates or promotional offers with your consent;</li>
                    <li>Complying with legal obligations.</li>
                </ul>

                <h2 className="text-2xl font-semibold mt-6 mb-3">Third-Party Services</h2>
                <p className="mb-4">
                    The Website may integrate third-party services such as 
                    <a href="https://cal.com" target="_blank" rel="noopener noreferrer" className="text-primary underline">
                        Cal.com
                    </a> 
                    for booking and scheduling. By using these services, you acknowledge and agree 
                    that their own Privacy Policies and Terms of Service also apply.
                </p>

                <h2 className="text-2xl font-semibold mt-6 mb-3">Data Security</h2>
                <p className="mb-4">
                    The Service Provider implements reasonable technical and organisational measures 
                    to protect the personal information collected via the Website. However, no 
                    method of transmission or storage is completely secure, and we cannot guarantee 
                    absolute security.
                </p>

                <h2 className="text-2xl font-semibold mt-6 mb-3">Data Retention</h2>
                <p className="mb-4">
                    Personal data will be retained only for as long as necessary to provide services 
                    or as required by law. Users may request deletion of their personal data by 
                    contacting us at{" "}
                    <button
                        onClick={openEmailClient}
                        className="text-primary underline hover:text-primary-dark"
                    >
                        admin@njatrainingsolutions.com
                    </button>.
                </p>

                <h2 className="text-2xl font-semibold mt-6 mb-3">Children</h2>
                <p className="mb-4">
                    The Website is not directed at children under 13 years of age. The Service Provider 
                    does not knowingly collect personally identifiable information from children under 13. 
                    If a parent or guardian believes their child has provided such information, please contact us.
                </p>

                <h2 className="text-2xl font-semibold mt-6 mb-3">Cookies and Tracking</h2>
                <p className="mb-4">
                    The Website may use cookies and similar tracking technologies to enhance user experience. 
                    Users can choose to disable cookies in their browser settings, but this may affect 
                    functionality of the Website.
                </p>

                <h2 className="text-2xl font-semibold mt-6 mb-3">Changes to this Policy</h2>
                <p className="mb-4">
                    NJA Training Solutions reserves the right to update this Privacy Policy at any time. 
                    Any changes will be posted on this page, and continued use of the Website constitutes 
                    acceptance of the updated policy.
                </p>

                <h2 className="text-2xl font-semibold mt-6 mb-3">Contact</h2>
                <p className="mb-4">
                    If you have any questions regarding this Privacy Policy, please contact the Service Provider at{" "}
                    <button
                        onClick={openEmailClient}
                        className="text-primary underline hover:text-primary-dark"
                    >
                        admin@njatrainingsolutions.com
                    </button>.
                </p>
            </div>
            <Footer />
        </>
    );
};

export default PrivacyPolicy;
