import React from "react";
import {
    Circle,
    Square,
    LayoutGrid,
    Soup,
    Package,
    ArrowRight
} from "lucide-react";

const ProductCategories = () => {
    const categories = [
        {
            title: "Round Plates",
            description: "Durable round plates available in multiple sizes for meals, snacks, and serving.",
            icon: <Circle size={32} strokeWidth={1.5} />,
        },
        {
            title: "Square Plates",
            description: "Modern square trays and snack plates with premium finishing.",
            icon: <Square size={32} strokeWidth={1.5} />,
        },
        {
            title: "Compartment Plates",
            description: "Perfect for meal serving with multiple food sections for organized dining.",
            icon: <LayoutGrid size={32} strokeWidth={1.5} />,
        },
        {
            title: "Bowls",
            description: "Strong disposable bowls for curries, desserts, snacks, and side dishes.",
            icon: <Soup size={32} strokeWidth={1.5} />,
        },
        {
            title: "Clamshell Containers",
            description: "Secure takeaway packaging designed for restaurants and food delivery.",
            icon: <Package size={32} strokeWidth={1.5} />,
        },
    ];

    return (
        <section id="products" className="w-full bg-[#fcfbf9] py-20 md:py-28 border-t border-[#ece7df]">
            <div className="max-w-7xl mx-auto px-6">

                {/* SECTION HEADER */}
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                    <div className="max-w-2xl">
                        <p className="uppercase tracking-[3px] text-[12px] md:text-[13px] font-semibold text-[#a68a6d] mb-4">
                            Our Catalog
                        </p>
                        <h2 className="font-serif text-[36px] md:text-[46px] text-[#2c2825] leading-tight">
                            Our Product Categories
                        </h2>
                    </div>

                    {/* Optional Section CTA */}
                    <button className="text-[14px] md:text-[15px] font-medium text-[#2e5b47] hover:text-[#1e3c2f] transition flex items-center gap-2 group pb-1 border-b border-[#2e5b47]/30 hover:border-[#2e5b47]">
                        View Full Catalog
                        <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                </div>

                {/* CATEGORIES GRID */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {categories.map((category, index) => (
                        <div
                            key={index}
                            className="bg-white border border-[#ece7df] p-8 md:p-10 rounded-2xl flex flex-col h-full hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group cursor-pointer"
                        >
                            {/* Icon */}
                            <div className="w-16 h-16 rounded-full bg-[#f8f5f0] flex items-center justify-center text-[#2e5b47] mb-8 group-hover:scale-110 group-hover:bg-[#2e5b47] group-hover:text-white transition-all duration-300">
                                {category.icon}
                            </div>

                            {/* Text Content */}
                            <h3 className="text-[#2c2825] font-serif text-[24px] mb-3">
                                {category.title}
                            </h3>
                            <p className="text-[#8c857d] text-[15px] leading-relaxed mb-8 flex-grow">
                                {category.description}
                            </p>

                            {/* Bottom Link */}
                            <div className="flex items-center gap-2 text-[#a68a6d] font-medium text-[14px] uppercase tracking-wide group-hover:text-[#2e5b47] transition-colors">
                                Explore Category
                                <ArrowRight size={16} className="group-hover:translate-x-1.5 transition-transform duration-300" />
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default ProductCategories;