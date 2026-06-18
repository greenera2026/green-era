import React, { useState, useMemo, useEffect, useRef } from "react";
import { ArrowRight, Leaf, ChevronDown, Download } from "lucide-react";

const FeaturedProducts = ({ selectedCategory, onCategoryConsumed }) => {
    const products = [
        { "id": "b-dona", "category": "Bowls", "name": "Dona Square Bowl", "image": "/b-dona.jpg" },
        { "id": "b-exim", "category": "Bowls", "name": "Exim Bowl", "image": "/b-exim.jpg" },
        { "id": "b-large", "category": "Bowls", "name": "Large Bowl", "image": "/b-large.jpg" },
        { "id": "b-medium", "category": "Bowls", "name": "Medium Bowl", "image": "/b-medium.jpg" },
        { "id": "b-smart", "category": "Bowls", "name": "Smart Bowl", "image": "/b-smart.jpg" },
        { "id": "cp-3sq", "category": "Compartment Plates", "name": "3CP Square Compartment", "image": "/cp-3sq.jpg" },
        { "id": "cp-4", "category": "Compartment Plates", "name": "4CP Meal Tray", "image": "/cp-4.jpg" },
        { "id": "cp-5", "category": "Compartment Plates", "name": "5CP Meal Tray", "image": "/cp-5.jpg" },
        { "id": "cp-6", "category": "Compartment Plates", "name": "6CP Meal Tray", "image": "/cp-6.jpg" },
        { "id": "cp-9r-3", "category": "Compartment Plates", "name": "9 Inch 3CP Round Plate", "image": "/cp-9r-3.jpg" },
        { "id": "cp-9r-9", "category": "Compartment Plates", "name": "9CP Round Plate", "image": "/cp-9r-9.jpg" },
        { "id": "cp-10r-3", "category": "Compartment Plates", "name": "10 Inch 3CP Round Plate", "image": "/cp-10r-3.jpg" },
        { "id": "cp-11r-4", "category": "Compartment Plates", "name": "11 Inch 4CP Round Plate", "image": "/cp-11r-4.jpg" },
        { "id": "cp-12r-4", "category": "Compartment Plates", "name": "12 Inch 4CP Round Plate", "image": "/cp-12r-4.jpg" },
        { "id": "cs-6x6", "category": "Clamshell Containers", "name": "6x6 Inch Clamshell", "image": "/cs-6x6.jpg" },
        { "id": "cs-9x6", "category": "Clamshell Containers", "name": "9x6 Inch Clamshell", "image": "/cs-9x6.jpg" },
        { "id": "cs-9x9", "category": "Clamshell Containers", "name": "9x9 Inch Clamshell", "image": "/cs-9x9.jpg" },
        { "id": "cs-9x9-3cp", "category": "Clamshell Containers", "name": "9x9 Inch 3CP Clamshell", "image": "/cs-9x9-3cp.jpg" },
        { "id": "rp-6", "category": "Round Plates", "name": "Round Plate 6 Inch", "image": "/rp-6.jpg" },
        { "id": "rp-7", "category": "Round Plates", "name": "Round Plate 7 Inch", "image": "/rp-7.jpg" },
        { "id": "rp-9", "category": "Round Plates", "name": "Round Plate 9 Inch", "image": "/rp-9.jpg" },
        { "id": "rp-10", "category": "Round Plates", "name": "Round Plate 10 Inch", "image": "/rp-10.jpg" },
        { "id": "rp-11", "category": "Round Plates", "name": "Round Plate 11 Inch", "image": "/rp-11.jpg" },
        { "id": "rp-12", "category": "Round Plates", "name": "Round Plate 12 Inch", "image": "/rp-12.jpg" },
        { "id": "sp-1d", "category": "Square Plates", "name": "Square Plate 1D Tray", "image": "/sp-1d.jpg" },
        { "id": "sp-2cp", "category": "Square Plates", "name": "Square Plate 2CP Tray", "image": "/sp-2cp.jpg" }
    ];

    // States for Tabs and Load More
    const [activeCategory, setActiveCategory] = useState("All");
    const [visibleCount, setVisibleCount] = useState(6);

    // Get unique categories directly from the products array
    const categories = ["All", ...new Set(products.map(item => item.category))];

    // Filter products based on selected tab
    const filteredProducts = useMemo(() => {
        if (activeCategory === "All") return products;
        return products.filter(product => product.category === activeCategory);
    }, [activeCategory, products]);

    // Handle changing tabs
    const handleTabChange = (category) => {
        setActiveCategory(category);
        setVisibleCount(6); // Reset the visible count when switching categories
    };

    const handleLoadMore = () => {
        setVisibleCount(prev => prev + 6);
    };

    // React to category selection from ProductCategories
    useEffect(() => {
        if (selectedCategory) {
            setActiveCategory(selectedCategory);
            setVisibleCount(6);
            if (onCategoryConsumed) {
                onCategoryConsumed();
            }
        }
    }, [selectedCategory]);

    return (
        <section id="catalog" className="w-full bg-[#fcfbf9] py-20 md:py-28 border-t border-[#ece7df]">
            <div className="max-w-7xl mx-auto px-6">

                {/* SECTION HEADER */}
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
                    <div className="max-w-2xl">
                        <p className="uppercase tracking-[3px] text-[12px] md:text-[13px] font-semibold text-[#a68a6d] mb-4">
                            Featured Collection
                        </p>
                        <h2 className="font-serif text-[36px] md:text-[46px] text-[#2c2825] leading-tight">
                            Explore Our Catalog
                        </h2>
                    </div>

                    {/* DESKTOP DOWNLOAD BUTTON */}
                    <a
                        href="/GreenEra Cataloge-1.pdf"
                        download="GreenEra_Catalog.pdf"
                        className="hidden md:flex bg-[#2e5b47] hover:bg-[#244636] text-white px-8 py-3.5 rounded-full text-[14px] font-medium transition-all duration-300 shadow-sm hover:shadow-md items-center gap-2 shrink-0"
                    >
                        Download Full Catalog
                        <Download size={16} />
                    </a>
                </div>

                {/* CATEGORY TABS */}
                {/* Horizontal scroll on mobile, wrap on desktop */}
                <div className="flex items-center gap-3 overflow-x-auto pb-6 mb-4 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                    {categories.map((category, index) => (
                        <button
                            key={index}
                            onClick={() => handleTabChange(category)}
                            className={`px-6 py-2.5 rounded-full text-[14px] font-medium whitespace-nowrap transition-all duration-300 ${activeCategory === category
                                ? "bg-[#2e5b47] text-white shadow-md border border-[#2e5b47]"
                                : "bg-white text-[#6b655e] border border-[#ece7df] hover:border-[#2e5b47] hover:text-[#2e5b47]"
                                }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {/* PRODUCTS GRID */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
                    {/* Render the filtered list up to the visibleCount limit */}
                    {filteredProducts.slice(0, visibleCount).map((product, index) => (
                        <div
                            key={product.id || index}
                            className="group cursor-pointer flex flex-col bg-white border border-[#ece7df] rounded-2xl overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                        >
                            {/* IMAGE CONTAINER */}
                            <div className="relative w-full aspect-square bg-white overflow-hidden">
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out"
                                />
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300 z-10 pointer-events-none" />
                            </div>

                            {/* CARD FOOTER */}
                            <div className="flex flex-col p-6 border-t border-[#ece7df]/50">
                                <div className="flex items-center gap-2 mb-3">
                                    <Leaf size={14} className="text-[#2e5b47]" />
                                    <p className="text-[11px] md:text-[12px] text-[#2e5b47] font-semibold tracking-[1px] uppercase">
                                        100% Compostable
                                    </p>
                                </div>

                                <div className="flex items-end justify-between gap-4">
                                    <div>
                                        <h3 className="text-[#2c2825] font-serif text-[20px] md:text-[22px] group-hover:text-[#2e5b47] transition-colors duration-300 leading-tight">
                                            {product.name}
                                        </h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* EMPTY STATE (Just in case a category somehow has 0 products) */}
                {filteredProducts.length === 0 && (
                    <div className="text-center py-12">
                        <p className="text-[#6b655e]">No products found in this category.</p>
                    </div>
                )}

                {/* LOAD MORE BUTTON */}
                {visibleCount < filteredProducts.length && (
                    <div className="mt-12 flex justify-center">
                        <button
                            onClick={handleLoadMore}
                            className="border border-[#2e5b47] text-[#2e5b47] hover:bg-[#2e5b47] hover:text-white px-10 py-3 rounded-full text-[14px] font-medium transition-all duration-300 flex items-center gap-2"
                        >
                            Load More Products
                            <ChevronDown size={16} />
                        </button>
                    </div>
                )}

                {/* MOBILE DOWNLOAD CTA BUTTON */}
                <div className="mt-12 flex justify-center md:hidden border-t border-[#ece7df] pt-8">
                    <a
                        href="/GreenEra Cataloge-1.pdf"
                        download="GreenEra_Catalog.pdf"
                        className="w-full bg-[#2e5b47] hover:bg-[#244636] text-white px-8 py-3.5 rounded-full text-[14px] font-medium transition-all duration-300 flex items-center justify-center gap-2"
                    >
                        Download Full Catalog
                        <Download size={16} />
                    </a>
                </div>

            </div>
        </section>
    );
};

export default FeaturedProducts;