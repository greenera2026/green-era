import React, { useState, useMemo, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Leaf, ChevronDown, Download } from "lucide-react";
import products from "../data/products.json";

const FeaturedProducts = ({ selectedCategory, onCategoryConsumed }) => {

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
                        <Link
                            key={product.id || index}
                            to={`/category/${product.slug}#${product.id}`}
                            className="group cursor-pointer flex flex-col bg-white border border-[#ece7df] rounded-2xl overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                        >
                            {/* IMAGE CONTAINER */}
                            <div className="relative w-full aspect-square bg-white overflow-hidden flex items-center justify-center p-6">
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-700 ease-in-out"
                                />
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/[0.02] transition-colors duration-300 z-10 pointer-events-none" />
                            </div>
 
                            {/* CARD FOOTER */}
                            <div className="flex flex-col p-6 border-t border-[#ece7df]/50 bg-white">
                                <div className="flex items-center gap-2 mb-3">
                                    <Leaf size={14} className="text-[#2e5b47]" />
                                    <p className="text-[11px] md:text-[12px] text-[#2e5b47] font-semibold tracking-[1px] uppercase">
                                        100% Compostable
                                    </p>
                                </div>
 
                                <div className="flex items-center justify-between gap-4">
                                    <h3 className="text-[#2c2825] font-serif text-[20px] md:text-[22px] group-hover:text-[#2e5b47] transition-colors duration-300 leading-tight">
                                        {product.name}
                                    </h3>
                                    <div className="w-10 h-10 rounded-full border border-[#ece7df] flex items-center justify-center text-[#6b655e] group-hover:bg-[#2e5b47] group-hover:text-white group-hover:border-[#2e5b47] transition-all duration-300 shrink-0">
                                        <ArrowRight size={18} className="group-hover:translate-x-0.5 transition-transform duration-300" />
                                    </div>
                                </div>
                            </div>
                        </Link>
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