import React from "react";
import { Sprout, Recycle, Utensils, Leaf } from "lucide-react";

const OurProcess = () => {
    const steps = [
        {
            number: "01",
            title: "Sugarcane Collection",
            description: "Natural sugarcane fibers are collected after juice extraction.",
            icon: <Sprout size={26} strokeWidth={1.5} />,
        },
        {
            number: "02",
            title: "Bagasse Processing",
            description: "The leftover bagasse is cleaned and refined into usable pulp.",
            icon: <Recycle size={26} strokeWidth={1.5} />,
        },
        {
            number: "03",
            title: "Eco Molding",
            description: "The pulp is molded into durable plates, bowls, and containers using advanced technology.",
            icon: <Utensils size={26} strokeWidth={1.5} />,
        },
        {
            number: "04",
            title: "Ready To Compost",
            description: "After use, the products decompose naturally within 60–90 days.",
            icon: <Leaf size={26} strokeWidth={1.5} />,
        },
    ];

    return (
        <section className="w-full bg-[#fcfbf9] py-20 md:py-28 overflow-hidden border-t border-[#ece7df]">
            <div className="max-w-7xl mx-auto px-6">

                {/* SECTION HEADER */}
                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-16 md:mb-24 gap-8">
                    <div className="max-w-2xl">
                        <h2 className="font-serif text-[36px] md:text-[46px] text-[#2c2825] leading-tight">
                            From Sugarcane Waste To<br className="hidden md:block" /> Sustainable Tableware
                        </h2>
                    </div>

                    {/* Side Note Tag */}
                    <div className="lg:max-w-xs border-l-2 border-[#2e5b47] pl-5 py-1">
                        <p className="text-[15px] md:text-[16px] text-[#7a746d] leading-relaxed font-medium">
                            Turning agricultural waste into premium sustainable dining solutions.
                        </p>
                    </div>
                </div>

                {/* TIMELINE GRID */}
                <div className="relative grid grid-cols-1 lg:grid-cols-4 gap-12 lg:gap-6">
                    {steps.map((step, index) => (
                        <div
                            key={index}
                            className="relative flex flex-row lg:flex-col items-start lg:items-center text-left lg:text-center gap-6 lg:gap-8 group"
                        >
                            {/* CONNECTING LINES */}
                            {/* Horizontal Line for Desktop */}
                            {index !== steps.length - 1 && (
                                <div className="hidden lg:block absolute top-[35px] left-[50%] w-full h-[1px] border-t-2 border-dashed border-[#e0dcd5] z-0" />
                            )}

                            {/* Vertical Line for Mobile/Tablet */}
                            {index !== steps.length - 1 && (
                                <div className="block lg:hidden absolute top-[35px] left-[35px] w-[1px] h-[calc(100%+48px)] border-l-2 border-dashed border-[#e0dcd5] z-0" />
                            )}

                            {/* ICON CONTAINER */}
                            <div className="relative shrink-0 w-[70px] h-[70px] bg-white rounded-full flex items-center justify-center border border-[#e2dacd] text-[#2e5b47] z-10 shadow-sm group-hover:scale-110 group-hover:shadow-md transition-all duration-300">
                                {step.icon}

                                {/* Step Number Badge */}
                                <div className="absolute -top-1 -right-1 bg-[#2e5b47] text-white text-[11px] font-bold w-6 h-6 rounded-full flex items-center justify-center border-2 border-[#fcfbf9]">
                                    {step.number}
                                </div>
                            </div>

                            {/* TEXT CONTENT */}
                            <div className="flex flex-col pt-1 lg:pt-0">
                                <h3 className="text-[#2c2825] font-semibold text-[17px] mb-2">
                                    {step.title}
                                </h3>
                                <p className="text-[#8c857d] text-[14.5px] leading-relaxed max-w-xs">
                                    {step.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default OurProcess;