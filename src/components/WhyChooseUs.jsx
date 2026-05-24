import React from "react";
import { Factory, Leaf, Shield, HeartHandshake } from "lucide-react";

const WhyChooseUs = () => {
    const features = [
        {
            icon: <Factory size={32} strokeWidth={1.5} />,
            title: "Advanced Manufacturing",
            description:
                "Crafted using modern molding technology for superior strength, durability, and finish.",
        },
        {
            icon: <Leaf size={32} strokeWidth={1.5} />,
            title: "100% Eco-Conscious",
            description:
                "Made entirely from natural sugarcane pulp that safely returns to nature after use.",
        },
        {
            icon: <Shield size={32} strokeWidth={1.5} />,
            title: "Strong & Durable",
            description:
                "Designed to handle heavy meals, liquids, oils, and heat without bending or leaking.",
        },
        {
            icon: <HeartHandshake size={32} strokeWidth={1.5} />,
            title: "Health & Safety First",
            description:
                "Chemical-free, non-toxic, microwave-safe, and refrigerator-safe for daily food use.",
        },
    ];

    return (
        <section id="about" className="w-full bg-white py-20 md:py-28 border-t border-[#ece7df]">
            <div className="max-w-7xl mx-auto px-6">

                {/* SECTION HEADER */}
                <div className="max-w-3xl mx-auto text-center mb-16 md:mb-20">
                    <h2 className="font-serif text-[36px] md:text-[46px] text-[#2c2825] leading-tight mb-6">
                        Why Choose GreenEra
                    </h2>
                    <p className="text-[16px] md:text-[17px] text-[#6b655e] leading-relaxed">
                        At GreenEra, we believe convenience should never come at the cost of the environment.
                        Our eco-friendly tableware is made from reclaimed sugarcane bagasse, offering a
                        sustainable alternative to plastic and styrofoam products.
                    </p>
                </div>

                {/* FEATURE CARDS GRID */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="bg-[#f8f5f0] rounded-2xl p-8 border border-[#ece7df] hover:-translate-y-1.5 transition-transform duration-300 group"
                        >
                            {/* Icon Container */}
                            <div className="w-14 h-14 rounded-full bg-white border border-[#e2dacd] flex items-center justify-center text-[#2e5b47] mb-6 group-hover:bg-[#2e5b47] group-hover:text-white transition-colors duration-300">
                                {feature.icon}
                            </div>

                            {/* Card Content */}
                            <h3 className="text-[#2c2825] font-semibold text-[18px] mb-3">
                                {feature.title}
                            </h3>
                            <p className="text-[#8c857d] text-[14.5px] leading-relaxed">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;