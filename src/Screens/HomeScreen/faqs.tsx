import { useState } from "react";
import { Collapse } from "@mui/material";
import { HiChevronDown } from "react-icons/hi";

const faqs = [
    {
        question: "Do I require any prerequisites to take your courses?",
        answer: "We do recommend a valid WA driving license, although our courses are suitable for beginners or experienced operators wanting to upskill."
    },
    {
        question: "Can I learn GPS and machine attachments even if I already have the tickets?",
        answer: "Absolutely! Upskilling with GPS and attachments keeps you ahead and makes you more attractive to employers."
    },
    {
        question: "How long are the courses?",
        answer: "Our courses vary, but most are 4-8 hours depending on the candidates experience."
    },
    {
        question: "Are the courses nationally recognised?",
        answer: "Yes! All courses are accredited and nationally recognised through our RTO partnerships."
    }
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index: any) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="max-w-4xl mx-auto py-12 px-6">
            <h2 className="text-3xl font-bold mb-8 text-primary text-center">Frequently Asked Questions</h2>
            <div className="space-y-4">
                {faqs.map((faq, index) => (
                <div
                    key={index}
                    className="border border-gray-300 rounded-lg overflow-hidden"
                >
                    <button
                        className="flex justify-between items-center w-full px-6 py-4 bg-gray-100 hover:bg-gray-200 transition-colors"
                        onClick={() => toggleFAQ(index)}
                    >
                        <span className="font-medium">{faq.question}</span>
                        <HiChevronDown
                            className={`w-6 h-6 transition-transform duration-300 ${
                            openIndex === index ? "rotate-180" : ""
                            }`}
                        />
                    </button>
                    <Collapse in={openIndex === index}>
                        <div className="px-6 py-4 bg-white text-gray-700">
                            {faq.answer}
                        </div>
                    </Collapse>
                </div>
                ))}
            </div>
        </section>
    );
}
