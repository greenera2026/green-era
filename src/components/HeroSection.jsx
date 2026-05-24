import React from "react";
import { ArrowRight, ArrowLeft, Circle, FlaskConical, Coffee, Soup } from "lucide-react";

const HeroSection = () => {
    return (
        <section id="home" className="relative w-full h-screen flex flex-col overflow-hidden">

            {/* MAIN HERO AREA */}
            <div className="relative flex-1 flex items-center justify-center w-full">

                {/* BACKGROUND IMAGE */}
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage:
                            "url('https://images.unsplash.com/photo-1610701596007-11502861dcfa?q=80&w=2070&auto=format&fit=crop')",
                    }}
                />

                {/* DARK OVERLAY */}
                <div className="absolute inset-0 bg-black/50" />

                {/* CENTER TEXT CONTENT */}
                <div className="relative z-10 text-center text-white px-4 flex flex-col items-center">
                    {/* SMALL TAGLINE */}
                    <p className="uppercase tracking-[2px] text-[12px] md:text-[13px] font-medium text-white mb-4">
                        Discover unique ceramics
                    </p>

                    {/* MAIN HEADING */}
                    <h1 className="font-serif text-[42px] sm:text-[56px] md:text-[72px] leading-[1.1] font-normal mb-10 max-w-3xl">
                        Our ceramics is<br />unique and cozy
                    </h1>

                    {/* CTA BUTTONS */}
                    <div className="flex flex-col sm:flex-row gap-4">
                        {/* PRIMARY BUTTON */}
                        <a
                            href="#products"
                            className="bg-white hover:bg-gray-100 transition-colors duration-300 text-black px-8 py-3.5 text-[13px] font-semibold tracking-wider uppercase text-center inline-block"
                        >
                            Explore Products
                        </a>

                        {/* SECONDARY BUTTON */}
                        <a
                            href="#contact"
                            className="border border-white hover:bg-white hover:text-black transition-colors duration-300 text-white px-8 py-3.5 text-[13px] font-semibold tracking-wider uppercase text-center inline-block"
                        >
                            Contact Us
                        </a>
                    </div>
                </div>

                {/* SIDE NAVIGATION BUTTONS */}
                <button className="absolute left-4 md:left-10 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/40 text-white/70 flex items-center justify-center hover:bg-white hover:text-black hover:border-white transition-all duration-300 z-20">
                    <ArrowLeft size={18} strokeWidth={1.5} />
                </button>

                <button className="absolute right-4 md:right-10 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/40 text-white/70 flex items-center justify-center hover:bg-white hover:text-black hover:border-white transition-all duration-300 z-20">
                    <ArrowRight size={18} strokeWidth={1.5} />
                </button>
            </div>

            {/* BOTTOM FEATURE BANNER */}
            <div className="w-full bg-[#f8f5f0] border-t border-[#e8e3dc] py-8 md:py-12 z-20">
                <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

                    {/* Feature 1 */}
                    <div className="flex items-center gap-5">
                        <div className="text-[#a68a6d]">
                            <Circle size={40} strokeWidth={1} />
                        </div>
                        <div>
                            <h3 className="text-[#2c2825] font-semibold text-[15px] mb-1">
                                Modern plate
                            </h3>
                            <p className="text-[#8c857d] text-[13px] leading-relaxed pr-4">
                                Lorem ipsum dolor sit amet consectetur adipiscing.
                            </p>
                        </div>
                    </div>

                    {/* Feature 2 */}
                    <div className="flex items-center gap-5">
                        <div className="text-[#a68a6d]">
                            <FlaskConical size={40} strokeWidth={1} />
                        </div>
                        <div>
                            <h3 className="text-[#2c2825] font-semibold text-[15px] mb-1">
                                Trendy vase
                            </h3>
                            <p className="text-[#8c857d] text-[13px] leading-relaxed pr-4">
                                Lorem ipsum dolor sit amet consectetur adipiscing.
                            </p>
                        </div>
                    </div>

                    {/* Feature 3 */}
                    <div className="flex items-center gap-5">
                        <div className="text-[#a68a6d]">
                            <Coffee size={40} strokeWidth={1} />
                        </div>
                        <div>
                            <h3 className="text-[#2c2825] font-semibold text-[15px] mb-1">
                                Handmade mug
                            </h3>
                            <p className="text-[#8c857d] text-[13px] leading-relaxed pr-4">
                                Lorem ipsum dolor sit amet consectetur adipiscing.
                            </p>
                        </div>
                    </div>

                    {/* Feature 4 */}
                    <div className="flex items-center gap-5">
                        <div className="text-[#a68a6d]">
                            <Soup size={40} strokeWidth={1} />
                        </div>
                        <div>
                            <h3 className="text-[#2c2825] font-semibold text-[15px] mb-1">
                                Classic pottery
                            </h3>
                            <p className="text-[#8c857d] text-[13px] leading-relaxed pr-4">
                                Lorem ipsum dolor sit amet consectetur adipiscing.
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default HeroSection;