import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

const FAQSection = () => {
    const faqs = [
        {
            question: "Are GreenEra products biodegradable?",
            answer: "Yes, all products are made from natural sugarcane pulp and decompose naturally.",
        },
        {
            question: "Are the products microwave safe?",
            answer: "Yes, they are safe for microwave and freezer use.",
        },
        {
            question: "Do the plates leak with oily food?",
            answer: "No, the products are oil and water resistant.",
        },
        {
            question: "Do you provide bulk orders?",
            answer: "Yes, we offer wholesale and distributor supply options.",
        },
        {
            question: "How long do the products take to decompose?",
            answer: "Typically within 60–90 days under composting conditions.",
        },
    ];

    // State to track which FAQ is currently open
    const [openIndex, setOpenIndex] = useState(0); // Set to 0 to have the first one open by default, or null to have all closed

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="w-full bg-white py-20 md:py-28 border-t border-[#ece7df]">
            <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row gap-12 lg:gap-20">

                {/* LEFT SIDE - HEADER TEXT */}
                <div className="w-full lg:w-1/3 flex flex-col lg:sticky lg:top-24 h-fit">
                    <p className="uppercase tracking-[3px] text-[12px] md:text-[13px] font-semibold text-[#a68a6d] mb-4">
                        Clear Your Doubts
                    </p>
                    <h2 className="font-serif text-[36px] md:text-[46px] text-[#2c2825] leading-tight mb-6">
                        Frequently Asked Questions
                    </h2>
                    <p className="text-[16px] md:text-[17px] text-[#6b655e] leading-relaxed">
                        Everything you need to know about our products, sustainability, and ordering process.
                    </p>
                </div>

                {/* RIGHT SIDE - ACCORDION */}
                <div className="w-full lg:w-2/3 flex flex-col gap-4">
                    {faqs.map((faq, index) => {
                        const isOpen = openIndex === index;

                        return (
                            <div
                                key={index}
                                className={`border rounded-2xl transition-all duration-300 ${isOpen
                                        ? "border-[#2e5b47]/20 bg-[#f8f5f0]"
                                        : "border-[#ece7df] bg-white hover:border-[#d2c7b9]"
                                    }`}
                            >
                                {/* Accordion Header (Question) */}
                                <button
                                    onClick={() => toggleFAQ(index)}
                                    className="w-full flex items-center justify-between p-6 md:p-8 text-left focus:outline-none"
                                >
                                    <h3 className={`font-semibold text-[16px] md:text-[18px] pr-8 transition-colors duration-300 ${isOpen ? "text-[#2e5b47]" : "text-[#2c2825]"
                                        }`}>
                                        {faq.question}
                                    </h3>

                                    {/* Plus / Minus Icon */}
                                    <div className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-300 ${isOpen ? "bg-[#2e5b47] text-white" : "bg-[#f8f5f0] text-[#a68a6d]"
                                        }`}>
                                        {isOpen ? (
                                            <Minus size={16} strokeWidth={2.5} />
                                        ) : (
                                            <Plus size={16} strokeWidth={2.5} />
                                        )}
                                    </div>
                                </button>

                                {/* Accordion Body (Answer) with smooth grid animation */}
                                <div
                                    className={`grid transition-all duration-300 ease-in-out px-6 md:px-8 ${isOpen
                                            ? "grid-rows-[1fr] opacity-100 pb-6 md:pb-8"
                                            : "grid-rows-[0fr] opacity-0 pb-0"
                                        }`}
                                >
                                    <div className="overflow-hidden">
                                        <p className="text-[#6b655e] text-[15px] md:text-[16px] leading-relaxed">
                                            {faq.answer}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

            </div>
        </section>
    );
};

export default FAQSection;