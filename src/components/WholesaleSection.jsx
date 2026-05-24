import React from "react";
import { PackageOpen, Phone, FileText } from "lucide-react";

const WholesaleSection = () => {
    return (
        <section id="wholesale" className="w-full bg-white py-20 md:py-28 border-t border-[#ece7df]">
            <div className="max-w-7xl mx-auto px-6">

                <div className="relative w-full bg-[#2e5b47] rounded-3xl overflow-hidden py-16 md:py-24 px-6 md:px-12 flex flex-col items-center text-center shadow-xl">

                    {/* BACKGROUND DECORATIVE ELEMENTS */}
                    {/* Top left subtle circle */}
                    <div className="absolute top-0 left-0 -translate-y-1/2 -translate-x-1/2 w-64 h-64 rounded-full bg-white/5 blur-2xl pointer-events-none" />

                    {/* Bottom right giant subtle icon */}
                    <div className="absolute -bottom-10 -right-10 text-white/5 pointer-events-none transform -rotate-12">
                        <PackageOpen size={300} strokeWidth={0.5} />
                    </div>

                    {/* CONTENT AREA */}
                    <div className="relative z-10 flex flex-col items-center max-w-3xl">

                        <p className="uppercase tracking-[3px] text-[12px] md:text-[13px] font-semibold text-[#d8c3a5] mb-4">
                            Partner With Us
                        </p>

                        <h2 className="font-serif text-[36px] sm:text-[46px] md:text-[52px] text-white leading-[1.1] mb-6">
                            Bulk Orders &<br className="hidden sm:block" /> Business Solutions
                        </h2>

                        <p className="text-[16px] md:text-[18px] text-[#d2c7b9] leading-relaxed mb-10 font-light max-w-2xl">
                            We provide reliable wholesale supply for restaurants, distributors,
                            event organizers, and food businesses across India.
                        </p>

                        {/* CTA BUTTONS */}
                        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">

                            {/* Primary Button */}
                            <a
                                href="#contact"
                                className="w-full sm:w-auto bg-white hover:bg-gray-100 text-[#2e5b47] px-8 py-4 rounded-full text-[15px] font-semibold transition-all duration-300 shadow-lg flex items-center justify-center gap-2 group hover:-translate-y-0.5"
                            >
                                <FileText size={18} className="group-hover:scale-110 transition-transform" />
                                Contact Us
                            </a>

                            {/* Secondary Button */}
                            <a
                                href="tel:+919313274748"
                                className="w-full sm:w-auto border border-white/30 hover:bg-white/10 hover:border-white text-white px-8 py-4 rounded-full text-[15px] font-medium transition-all duration-300 flex items-center justify-center gap-2 group"
                            >
                                <Phone size={18} className="group-hover:rotate-12 transition-transform" />
                                Call Sales Team
                            </a>

                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
};

export default WholesaleSection;