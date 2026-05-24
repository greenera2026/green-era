import React from "react";
import {
    Store,
    Coffee,
    UtensilsCrossed,
    Truck,
    ChefHat,
    Briefcase,
    Sparkles,
    ShoppingBag
} from "lucide-react";

const IndustriesWeServe = () => {
    const industries = [
        {
            name: "Restaurants",
            icon: <Store size={32} strokeWidth={1.5} />,
        },
        {
            name: "Cafes",
            icon: <Coffee size={32} strokeWidth={1.5} />,
        },
        {
            name: "Catering Services",
            icon: <UtensilsCrossed size={32} strokeWidth={1.5} />,
        },
        {
            name: "Food Trucks",
            icon: <Truck size={32} strokeWidth={1.5} />,
        },
        {
            name: "Cloud Kitchens",
            icon: <ChefHat size={32} strokeWidth={1.5} />,
        },
        {
            name: "Corporate Events",
            icon: <Briefcase size={32} strokeWidth={1.5} />,
        },
        {
            name: "Weddings & Parties",
            icon: <Sparkles size={32} strokeWidth={1.5} />,
        },
        {
            name: "Takeaway Businesses",
            icon: <ShoppingBag size={32} strokeWidth={1.5} />,
        },
    ];

    return (
        <section id="industries" className="w-full bg-white py-20 md:py-28 border-t border-[#ece7df]">
            <div className="max-w-7xl mx-auto px-6">

                {/* SECTION HEADER */}
                <div className="max-w-3xl mx-auto text-center mb-16 md:mb-20">
                    <p className="uppercase tracking-[3px] text-[12px] md:text-[13px] font-semibold text-[#a68a6d] mb-4">
                        Who We Serve
                    </p>
                    <h2 className="font-serif text-[36px] md:text-[46px] text-[#2c2825] leading-tight mb-6">
                        Perfect For Every Food Business
                    </h2>
                    <p className="text-[16px] md:text-[17px] text-[#6b655e] leading-relaxed max-w-2xl mx-auto">
                        Whether you are hosting a grand wedding or running a fast-paced cloud kitchen,
                        our durable and compostable tableware is designed to meet your specific needs.
                    </p>
                </div>

                {/* INDUSTRIES GRID */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
                    {industries.map((industry, index) => (
                        <div
                            key={index}
                            className="bg-[#fcfbf9] border border-[#ece7df] rounded-2xl p-6 md:p-8 flex flex-col items-center text-center group hover:bg-[#2e5b47] transition-colors duration-300 cursor-pointer"
                        >
                            {/* Icon Container */}
                            <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center text-[#a68a6d] mb-5 shadow-sm group-hover:text-[#2e5b47] group-hover:scale-110 transition-all duration-300">
                                {industry.icon}
                            </div>

                            {/* Industry Name */}
                            <h3 className="text-[#2c2825] font-medium text-[15px] md:text-[16px] group-hover:text-white transition-colors duration-300">
                                {industry.name}
                            </h3>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default IndustriesWeServe;