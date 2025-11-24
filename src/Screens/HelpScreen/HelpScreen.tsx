import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react"; // lucide icons
import { Navbar, Footer } from "../../Components";

type FAQ = {
  question: string;
  answer: React.ReactNode;
};

const faqs: { general: FAQ[]; pro: FAQ[] } = {
    general: [
        {
            question: "How do I request a refund on the App Store?",
            answer: (
                <>
                    To request a refund on the Apple App Store, please visit{" "}
                    <a
                        href="https://support.apple.com/en-au/118223"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 underline hover:text-blue-500"
                    >
                        Apple's Problem Reports page
                    </a>
                    . Log in with your Apple ID, find your purchase, then select "Report a Problem" to submit your refund request.
                </>
            ),
        },
        {
            question: "How can I cancel my subscription?",
            answer: (
                <>
                    You can cancel your subscription directly on your device:
                    <ul className="list-disc pl-5 mt-2 space-y-1">
                        <li>
                            <strong>iOS:</strong> Open Settings &gt; Your Name &gt; Subscriptions &gt; Select FIFO Clock &gt; Tap “Cancel Subscription”.
                        </li>
                        <li>
                            <strong>Android:</strong> Launch Google Play Store &gt; Profile icon &gt; Payments & Subscriptions &gt; Subscriptions &gt; Choose FIFO Clock &gt; Cancel.
                        </li>
                    </ul>
                    <p className="mt-2 font-semibold text-gray-700">
                        You will keep access to Pro features until the current billing period ends.
                    </p>
                </>
            ),
        },
        {
            question: "Can I use FIFO Clock offline?",
            answer: (
                <>
                    Yes! FIFO Clock caches your roster data locally so you can view shifts and calendars without internet access. However, features such as syncing rosters with friends and exporting calendars require an internet connection.
                </>
            ),
        },
        {
            question: "Why am I only allowed 3 rosters on the free version?",
            answer: (
              <>
                We believe 3 rosters provide plenty of room to explore and get familiar with the app. If you need more, upgrading to Pro unlocks unlimited rosters and additional features.
              </>
            ),
        },
        {
            question: "How do I add friends’ rosters for syncing?",
            answer: (
                <>
                    You can add your friends' rosters to view shifts side-by-side:
                    <ol className="list-decimal pl-5 mt-2">
                        <li>Go to the Rosters tab in FIFO Clock.</li>
                        <li>Add your friend’s roster by entering their roster.</li>
                        <li>Once added, got to 'Roster Sync' and you can compare rosters and coordinate your schedules easily.</li>
                    </ol>
                </>
            ),
        },
        {
            question: "Duplicate entries after export to external calendar",
            answer: (
                <>
                    Duplicate entries can occur if the calendar export is set up on several devices at the same time (e.g. smartphone and tablet). In order to avoid duplicate entries, the export should only be activated on one device.
                </>
            ),
        },
    ],
    pro: [
        {
            question: "What extra features do I get with FIFO Clock Pro?",
            answer: (
                <>
                    Pro unlocks advanced features such as:
                    <ul className="list-disc pl-5 mt-2 space-y-1">
                        <li>Earnings estimator</li>
                        <li>Day/ Night Rosters</li>
                        <li>Custom Roster builder</li>
                        <li>Export to calendars</li>
                        <li>Priority support and early access to new features</li>
                    </ul>
                </>
            ),
        },
        {
            question: "How do I export my roster to an external calendar?",
            answer: (
                <>
                    Exporting your roster to external calendars is available with FIFO Clock Pro:
                    <ul className="list-disc pl-5 mt-2 space-y-1">
                        <li>
                            <strong>Apple Calendar (iOS):</strong> Use the “Export to Calendar” feature within the app to sync your roster directly.
                        </li>
                        <li>
                            <strong>Google Calendar (iOS & Android):</strong> To display your roster, ensure your Google account is added in your device’s calendar settings:
                            <ol className="list-decimal pl-5 mt-1 space-y-1">
                            <li>On iOS: Go to Settings &gt; Calendar &gt; Accounts &gt; Add Account, then add your Google account.</li>
                            <li>On Android: Add your Google account via Settings &gt; Accounts.</li>
                            </ol>
                            Once added, your roster synced through FIFO Clock should appear in your calendar app.
                        </li>
                    </ul>
                    <p className="mt-2">
                        For best experience on iOS, you may also install the Google Calendar app or verify your account is active under Settings &gt; Calendar 
                    </p>
                </>
            )
        },
          
        {
            question: "Can I switch devices and keep my Pro subscription?",
            answer: (
                <>
                    Yes! Your Pro subscription is linked to your Apple ID or Google account.
                    <ul className="list-disc pl-5 mt-2 space-y-1">
                        <li>
                            On <strong>iOS</strong>, sign in with the same Apple ID and reinstall FIFO Clock to restore your subscription.
                        </li>
                        <li>
                            On <strong>Android</strong>, sign in with your Google account in the Play Store to regain access.
                        </li>
                        <li>
                            Please note: Switching between iOS and Android requires purchasing a new subscription on the new platform.
                        </li>
                    </ul>
                </>
            ),
        }
    ],
};

const AccordionItem: React.FC<{
    faq: FAQ;
    isOpen: boolean;
    onClick: () => void;
}> = ({ faq, isOpen, onClick }) => {
    return (
        <div className="border-b border-gray-200 last:border-b-0 max-w-[600px] w-full bg-gray-50 rounded-lg shadow-sm divide-y divide-gray-200 my-4">
            <button
                onClick={onClick}
                className="flex text-start justify-between w-full px-6 py-3 gap-6 items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500"
                aria-expanded={isOpen}
            >
                <span className="text-lg font-semibold text-black break-words">{faq.question}</span>
                <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-primary"
                >
                    <ChevronDown size={24} />
                </motion.div>
            </button>
    
            <AnimatePresence initial={false}>
                {isOpen && (
                    <motion.div
                        key="content"
                        layout
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.1 }}
                        className="w-full px-6 pt-2 pb-6 text-gray-700 break-words"
                        style={{ boxSizing: "border-box" }}
                    >
                        {faq.answer}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
  };
  

const HelpScreen: React.FC = () => {
    const [openGeneralIndex, setOpenGeneralIndex] = useState<number | null>(null);
    const [openProIndex, setOpenProIndex] = useState<number | null>(null);

    const toggleGeneral = (i: number) => {
        setOpenGeneralIndex(openGeneralIndex === i ? null : i);
    };

    const togglePro = (i: number) => {
        setOpenProIndex(openProIndex === i ? null : i);
    };

    return (
        <>
            <Navbar fixed={false} defaultFilled />
            <div className="min-h-screen bg-white text-gray-900 font-sans flex flex-col">

                <main className="flex-grow max-w-4xl mx-auto px-6 py-12">
                    <div className="text-center mb-16">
                        <h2 className="text-5xl font-bold text-black mb-4">
                            FAQ
                        </h2>
                        <p className="text-lg text-black/60 max-w-2xl mx-auto">
                            Find answers to the most common questions to help you get started quickly.
                        </p>
                    </div>

                    <section className="mb-16">
                        <h2 className="text-3xl font-semibold text-black mb-6 border-b border-orange-300 pb-2">
                            General
                        </h2>
                        <div >
                            {faqs.general.map((faq, i) => (
                                <AccordionItem
                                    key={i}
                                    faq={faq}
                                    isOpen={openGeneralIndex === i}
                                    onClick={() => toggleGeneral(i)}
                                />
                            ))}
                        </div>
                    </section>

                    <section>
                        <h2 className="text-3xl font-semibold text-blackmb-6 border-b border-orange-300 pb-2">
                            Pro Features & Subscription
                        </h2>
                        <div className="mt-5">
                            {faqs.pro.map((faq, i) => (
                                <AccordionItem
                                    key={i}
                                    faq={faq}
                                    isOpen={openProIndex === i}
                                    onClick={() => togglePro(i)}
                                />
                            ))}
                        </div>
                    </section>
                </main>
            </div>
            <Footer />
        </>
    );
};

export default HelpScreen;
