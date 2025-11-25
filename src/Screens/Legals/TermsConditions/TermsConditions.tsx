import React from "react";
import { Footer, Navbar } from "../../../Components";

const TermsConditions: React.FC = () => {
    const openEmailClient = () => {
        window.location.href = "mailto:admin@njatrainingsolutions.com";
    };

    return (
        <>
            <Navbar fixed={false} defaultFilled />
            <div className="max-w-4xl mx-auto px-6 py-10">
                <h1 className="text-3xl font-bold mb-6">Terms & Conditions</h1>

                <p className="mb-4">
                    These terms and conditions govern your use of the NJA Training Solutions website 
                    (hereafter referred to as "Website") operated by NJA Training Solutions 
                    (hereafter referred to as "Service Provider"). By accessing or using this Website, 
                    you agree to be bound by these terms. If you do not agree with any part of these terms, 
                    you must not use the Website.
                </p>

                <h2 className="text-2xl font-semibold mt-8 mb-4">Intellectual Property</h2>
                <p className="mb-4">
                    All content on this Website, including but not limited to text, images, logos, 
                    videos, graphics, and training materials, is the property of NJA Training Solutions 
                    and is protected by copyright, trademark, and other intellectual property laws. 
                    You may not copy, reproduce, modify, distribute, display, or create derivative works 
                    from any part of this Website without prior written permission from the Service Provider.
                </p>

                <h2 className="text-2xl font-semibold mt-8 mb-4">Use of Website</h2>
                <p className="mb-4">
                    You may use this Website for personal, non-commercial purposes only. You agree not to 
                    use the Website for any unlawful purposes, including but not limited to: 
                </p>
                <ul className="list-disc list-inside mb-4">
                    <li>attempting to gain unauthorised access to any part of the Website;</li>
                    <li>interfering with the operation or security of the Website;</li>
                    <li>posting or transmitting any material that is unlawful, harmful, defamatory, or offensive.</li>
                </ul>

                <h2 className="text-2xl font-semibold mt-8 mb-4">Booking and Third-Party Services</h2>
                <p className="mb-4">
                    The Website may include booking or scheduling services powered by third-party providers such as 
                    <a href="https://cal.com" target="_blank" rel="noopener noreferrer" className="text-primary underline"> Cal.com</a>. 
                    By making a booking through the Website, you agree to comply with the terms, conditions, and privacy policies 
                    of these third-party providers in addition to our Terms and Conditions.
                </p>

                <h2 className="text-2xl font-semibold mt-8 mb-4">Links to Other Websites</h2>
                <p className="mb-4">
                    The Website may contain links to other websites. These links are provided for convenience only. 
                    NJA Training Solutions does not control or endorse these third-party sites and is not responsible 
                    for their content, privacy policies, or practices. Your use of third-party websites is at your own risk.
                </p>

                <h2 className="text-2xl font-semibold mt-8 mb-4">Limitation of Liability</h2>
                <p className="mb-4">
                    NJA Training Solutions makes every effort to ensure that the information on this Website 
                    is accurate and up to date. However, the Service Provider does not guarantee the 
                    completeness or accuracy of the content and accepts no liability for any loss, 
                    damage, or inconvenience caused by reliance on this information. Your use of the 
                    Website is at your own risk.
                </p>

                <h2 className="text-2xl font-semibold mt-8 mb-4">Changes to Terms</h2>
                <p className="mb-4">
                    NJA Training Solutions reserves the right to update or modify these Terms and Conditions 
                    at any time without prior notice. Any changes will be posted on this page, and your 
                    continued use of the Website constitutes acceptance of the updated terms.
                </p>

                <h2 className="text-2xl font-semibold mt-8 mb-4">Governing Law</h2>
                <p className="mb-4">
                    These terms are governed by and construed in accordance with the laws of the United Kingdom. 
                    Any disputes arising from the use of this Website shall be subject to the exclusive 
                    jurisdiction of the courts of the United Kingdom.
                </p>

                <h2 className="text-2xl font-semibold mt-8 mb-4">Contact Us</h2>
                <p className="mb-4">
                    If you have any questions or concerns regarding these Terms and Conditions, please 
                    contact us at{" "}
                    <button
                        onClick={openEmailClient}
                        className="text-primary underline hover:opacity-80"
                    >
                        admin@njatrainingsolutions.com
                    </button>.
                </p>
            </div>
            <Footer />
        </>
    );
};

export default TermsConditions;
