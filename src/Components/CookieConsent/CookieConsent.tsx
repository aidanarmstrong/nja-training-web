// src/components/CookieConsent.tsx
import React, { useEffect, useState } from "react";
import { AiOutlineClose, AiOutlineCheck } from "react-icons/ai";

// Cookie helpers
const setCookie = (name: string, value: string, days = 365) => {
    const expires = new Date();
    expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
    document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/`;
};

const getCookie = (name: string) => {
    const match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
    return match ? match[2] : null;
};

const CookieConsent: React.FC = () => {
    const [visible, setVisible] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [analytics, setAnalytics] = useState(true);
    const [marketing, setMarketing] = useState(true);

    useEffect(() => {
        const consent = getCookie("cookie_consent");
        if (!consent) setVisible(true);
    }, []);

    const acceptAll = () => {
        setCookie("cookie_consent", JSON.stringify({ analytics: true, marketing: true }));
        setVisible(false);
    };

    const declineAll = () => {
        setCookie("cookie_consent", JSON.stringify({ analytics: false, marketing: false }));
        setVisible(false);
    };

    const savePreferences = () => {
        setCookie("cookie_consent", JSON.stringify({ analytics, marketing }));
        setVisible(false);
        setShowModal(false);
    };

    if (!visible) return null;

    return (
        <>
            {/* Bottom Banner */}
            {/* Bottom Cookie Card */}
           <div className="fixed bottom-0 md:bottom-4 left-1/2 md:left-4 transform -translate-x-1/2 md:translate-x-0 bg-gray-900 text-white p-5 sm:p-6 flex flex-col items-start sm:items-start md:rounded-2xl shadow-2xl z-50 md:max-w-sm w-full md:w-auto">

                {/* Message */}
                <div className="flex-1 text-sm sm:text-base leading-relaxed">
                    <span className="font-semibold">Hello 👋, it's cookie time!</span>
                    <p className="mt-1 text-gray-200 text-sm">
                        We use cookies to improve your experience. Customize your settings or accept all to continue.
                    </p>
                </div>

                {/* Buttons */}
                <div className="flex flex-col gap-2 sm:gap-3 w-full mt-4">
                    <button
                        onClick={acceptAll}
                        className="px-4 py-2  bg-primary text-white font-semibold rounded-md shadow hover:opacity-90 transition"
                    >
                        Accept All
                    </button>
                    <button
                        onClick={declineAll}
                        className="px-4 py-2 bg-gray-700 text-white font-semibold rounded-md shadow hover:bg-gray-600 transition"
                    >
                        Reject All
                    </button>
                    <button
                        onClick={() => setShowModal(true)}
                        className="px-4 py-2 border border-white rounded-md hover:bg-white hover:text-black transition font-semibold"
                    >
                        Manage Preferences
                    </button>
                </div>

               {/* Links */}
                <div className="mt-3 sm:mt-4 text-xs sm:text-sm flex flex-row justify-end gap-2 text-gray-400 w-full">
                    <a href="/legals/privacy-policy" className="hover:text-white text-xs">Privacy Policy</a>
                    <a href="/legals/terms-and-conditions" className="hover:text-white text-xs">Terms & Conditions</a>
                </div>

            </div>






            {/* Modal */}
            {showModal && (
                <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50 p-4">
                    <div className="bg-white rounded-3xl shadow-2xl max-w-lg w-full p-8 relative overflow-hidden animate-fadeIn">
                    
                    {/* Close button */}
                    <button
                        onClick={() => setShowModal(false)}
                        className="absolute top-5 right-5 text-gray-400 hover:text-gray-700 transition"
                    >
                        <AiOutlineClose size={24} />
                    </button>

                    {/* Header */}
                    <h2 className="text-3xl font-extrabold text-gray-900 mb-3 tracking-wide">Cookie Preferences</h2>
                    <p className="mb-6 text-gray-600 leading-relaxed">
                        Select the types of cookies you allow. You can change these later in your preferences.
                    </p>

                    {/* Options */}
                    <div className="flex flex-col gap-4 mb-6">
                        <label className="flex items-center justify-between border border-gray-200 p-4 rounded-xl hover:bg-gray-50 transition-shadow shadow-sm hover:shadow-md">
                            <span className="text-gray-800 font-medium">Analytics Cookies</span>
                            <input
                                type="checkbox"
                                checked={analytics}
                                onChange={() => setAnalytics(!analytics)}
                                className="w-6 h-6 accent-secondary transition"
                            />
                        </label>
                        <label className="flex items-center justify-between border border-gray-200 p-4 rounded-xl hover:bg-gray-50 transition-shadow shadow-sm hover:shadow-md">
                            <span className="text-gray-800 font-medium">Marketing Cookies</span>
                        <input
                            type="checkbox"
                            checked={marketing}
                            onChange={() => setMarketing(!marketing)}
                            className="w-6 h-6 accent-secondary transition"
                        />
                        </label>
                    </div>

                    {/* Action buttons */}
                    <div className="flex justify-end gap-3">
                        <button
                            onClick={() => setShowModal(false)}
                            className="px-5 py-2 rounded-lg border border-gray-300 hover:bg-gray-100 transition font-medium"
                        >
                            Cancel
                        </button>
                        <button
                            onClick={savePreferences}
                            className="px-5 py-2 rounded-lg bg-secondary text-white font-semibold hover:opacity-90 transition flex items-center gap-2"
                        >
                            <AiOutlineCheck /> Save Preferences
                        </button>
                    </div>

                    </div>
                </div>
            )}

        </>
    );
};

export default CookieConsent;
