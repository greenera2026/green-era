import React from "react";
import {
    Droplets,
    Flame,
    Layers,
    Sparkles,
    Utensils,
    Check
} from "lucide-react";

const QualitySection = () => {
    const qualityPoints = [
        {
            title: "Leak Resistant",
            icon: <Droplets size={20} strokeWidth={2} />,
        },
        {
            title: "Heat Resistant",
            icon: <Flame size={20} strokeWidth={2} />,
        },
        {
            title: "Strong Structure",
            icon: <Layers size={20} strokeWidth={2} />,
        },
        {
            title: "Smooth Premium Finish",
            icon: <Sparkles size={20} strokeWidth={2} />,
        },
        {
            title: "Safe For Food Contact",
            icon: <Utensils size={20} strokeWidth={2} />,
        },
    ];

    return (
        <section className="w-full bg-[#f8f5f0] py-20 md:py-28 overflow-hidden border-t border-[#ece7df]">
            <div className="max-w-7xl mx-auto px-6">

                <div className="flex flex-col lg:flex-row items-center gap-12 md:gap-16 lg:gap-20">

                    {/* LEFT SIDE - IMAGE PLACEHOLDER */}
                    <div className="w-full lg:w-1/2 relative group">
                        {/* Decorative Background Element */}
                        <div className="absolute -inset-4 bg-[#e8e3dc] rounded-3xl transform rotate-3 group-hover:rotate-6 transition-transform duration-500" />

                        {/* Main Image Container */}
                        {/* Replace the bg color with your actual image: <img src="..." className="w-full aspect-[4/5] object-cover rounded-2xl relative z-10" /> */}
                        <div className="relative z-10 w-full aspect-[4/5] bg-white rounded-2xl overflow-hidden border border-[#ece7df] shadow-lg flex items-center justify-center">
                            <div className="text-center p-8">
                                <div className="w-20 h-20 mx-auto border border-[#d2c7b9] rounded-full flex items-center justify-center mb-4 text-[#a68a6d]">
                                    <Sparkles size={32} strokeWidth={1} />
                                </div>
                                <p className="font-serif text-[24px] text-[#2c2825] opacity-50">
                                    Quality Image
                                </p>
                                <p className="text-[#8c857d] text-[13px] mt-2">
                                    (Lifestyle product shot)
                                </p>
                            </div>
                        </div>

                        {/* Floating Satisfaction Badge */}
                        <div className="absolute -bottom-6 -right-6 md:bottom-8 md:-right-8 z-20 bg-white p-4 rounded-2xl shadow-xl border border-[#ece7df] flex items-center gap-4 animate-bounce-slow">
                            <div className="w-12 h-12 rounded-full bg-[#2e5b47] flex items-center justify-center text-white">
                                <Check size={24} strokeWidth={3} />
                            </div>
                            <div className="pr-2">
                                <p className="text-[12px] text-[#8c857d] font-bold tracking-wider uppercase mb-0.5">Verified</p>
                                <p className="text-[15px] font-serif text-[#2c2825] font-semibold leading-none">Premium Grade</p>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT SIDE - TEXT & FEATURES */}
                    <div className="w-full lg:w-1/2 flex flex-col">

                        {/* Header Text */}
                        <div className="mb-10">
                            <p className="uppercase tracking-[3px] text-[12px] md:text-[13px] font-semibold text-[#a68a6d] mb-4">
                                Uncompromising Standards
                            </p>
                            <h2 className="font-serif text-[36px] md:text-[46px] text-[#2c2825] leading-tight mb-6">
                                Premium Quality You Can Trust
                            </h2>
                            <p className="text-[16px] md:text-[18px] text-[#6b655e] leading-relaxed max-w-lg">
                                Engineered for durability and designed for modern food service,
                                GreenEra products combine sustainability with uncompromising performance.
                            </p>
                        </div>

                        {/* Quality Points List */}
                        <div className="flex flex-col gap-4">
                            {qualityPoints.map((point, index) => (
                                <div
                                    key={index}
                                    className="flex items-center gap-5 p-4 rounded-xl hover:bg-white transition-colors duration-300 border border-transparent hover:border-[#ece7df] hover:shadow-sm"
                                >
                                    {/* Icon */}
                                    <div className="w-12 h-12 shrink-0 rounded-full bg-[#e8e3dc] flex items-center justify-center text-[#2e5b47]">
                                        {point.icon}
                                    </div>

                                    {/* Text */}
                                    <h3 className="text-[#2c2825] font-medium text-[16px] md:text-[17px]">
                                        {point.title}
                                    </h3>
                                </div>
                            ))}
                        </div>

                    </div>
                </div>

            </div>

            {/* Custom Animation defined in an inline style block for the slow bounce effect */}
            <style dangerouslySetInnerHTML={{
                __html: `
                @keyframes bounce-slow {
                    0%, 100% { transform: translateY(-5%); }
                    50% { transform: translateY(5%); }
                }
                .animate-bounce-slow {
                    animation: bounce-slow 4s infinite ease-in-out;
                }
            `}} />
        </section>
    );
};

export default QualitySection;