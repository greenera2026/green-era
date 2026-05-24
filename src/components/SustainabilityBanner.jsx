import React from "react";
import { Recycle, Ban, Sprout, PackageCheck } from "lucide-react";

const SustainabilityBanner = () => {
    const highlights = [
        {
            text: "100% Compostable",
            icon: <Recycle size={36} strokeWidth={1.5} />,
        },
        {
            text: "Plastic-Free Manufacturing",
            icon: <Ban size={36} strokeWidth={1.5} />,
        },
        {
            text: "Natural Sugarcane Fiber",
            icon: <Sprout size={36} strokeWidth={1.5} />,
        },
        {
            text: "Sustainable Packaging Solutions",
            icon: <PackageCheck size={36} strokeWidth={1.5} />,
        },
    ];

    return (
        <section id="sustainability" className="relative w-full bg-[#2e5b47] py-24 md:py-32 overflow-hidden">

            {/* BACKGROUND DECORATIONS */}
            {/* Large subtle circle to break up the flat background */}
            <div className="absolute top-0 right-0 -translate-y-1/3 translate-x-1/3 w-[600px] h-[600px] rounded-full border border-white/5 pointer-events-none" />
            <div className="absolute bottom-0 left-0 translate-y-1/3 -translate-x-1/3 w-[400px] h-[400px] rounded-full bg-white/5 blur-3xl pointer-events-none" />

            <div className="relative z-10 max-w-7xl mx-auto px-6 flex flex-col items-center text-center">

                {/* TEXT CONTENT */}
                <div className="max-w-4xl mx-auto mb-20">
                    <h2 className="font-serif text-[42px] sm:text-[52px] md:text-[64px] text-[#fcfbf9] leading-[1.1] mb-6">
                        Better Packaging For A Better Future
                    </h2>
                    <p className="text-[17px] md:text-[20px] text-[#d2c7b9] leading-relaxed max-w-2xl mx-auto font-light">
                        Every GreenEra product helps reduce plastic waste and promotes a cleaner, healthier planet through sustainable alternatives.
                    </p>
                </div>

                {/* STATS / HIGHLIGHTS GRID */}
                <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12">
                    {highlights.map((item, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center group"
                        >
                            {/* Icon Container */}
                            <div className="w-20 h-20 rounded-full border border-[#d8c3a5]/30 flex items-center justify-center text-[#d8c3a5] mb-6 group-hover:bg-[#d8c3a5] group-hover:text-[#2e5b47] transition-colors duration-300">
                                {item.icon}
                            </div>

                            {/* Highlight Text */}
                            <h3 className="text-[#fcfbf9] font-medium text-[16px] md:text-[18px] leading-snug px-4">
                                {item.text}
                            </h3>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default SustainabilityBanner;