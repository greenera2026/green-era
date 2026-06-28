import React, { useState, useEffect, useCallback } from "react";
import { useParams, useLocation } from "react-router-dom";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import productsData from "../data/products.json";
import {
    Leaf,
    ArrowDownToLine,
    Droplet
} from "lucide-react";

const ProductCarousel = ({ images, name }) => {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
        Autoplay({ delay: 2000, stopOnInteraction: false })
    ]);
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [scrollSnaps, setScrollSnaps] = useState([]);

    const onSelect = useCallback(() => {
        if (!emblaApi) return;
        setSelectedIndex(emblaApi.selectedScrollSnap());
    }, [emblaApi]);

    useEffect(() => {
        if (!emblaApi) return;
        setScrollSnaps(emblaApi.scrollSnapList());
        emblaApi.on("select", onSelect);
        onSelect();
    }, [emblaApi, onSelect]);

    const scrollTo = useCallback((index) => {
        if (!emblaApi) return;
        emblaApi.scrollTo(index);
    }, [emblaApi]);

    return (
        <div className="w-full flex flex-col items-center">
            {/* Carousel viewport */}
            <div className="relative w-full aspect-square bg-white border border-[#ece7df] rounded-2xl overflow-hidden flex items-center justify-center p-6 mb-4 cursor-grab active:cursor-grabbing" ref={emblaRef}>
                <div className="flex h-full w-full">
                    {images.map((imgSrc, index) => (
                        <div key={index} className="flex-[0_0_100%] min-w-0 h-full flex items-center justify-center p-2 shrink-0">
                            <img
                                src={imgSrc}
                                alt={`${name} view ${index + 1}`}
                                className="max-h-full max-w-full object-contain"
                            />
                        </div>
                    ))}
                </div>
            </div>

            {/* Dots */}
            {images.length > 1 && (
                <div className="flex justify-center gap-2 mb-2">
                    {scrollSnaps.map((_, idx) => (
                        <button
                            key={idx}
                            onClick={() => scrollTo(idx)}
                            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                                selectedIndex === idx ? "bg-[#2e5b47] w-6" : "bg-gray-300"
                            }`}
                            aria-label={`Go to slide ${idx + 1}`}
                        />
                    ))}
                </div>
            )}
        </div>
    );
};

const CategoryPage = () => {
    const { categorySlug } = useParams();
    const location = useLocation();

    // Filter products belonging to this category slug
    const products = productsData.filter(p => p.slug === categorySlug);
    const categoryName = products.length > 0 ? products[0].category : "Products";

    // Scroll to the product defined by the hash in URL
    useEffect(() => {
        if (location.hash) {
            const targetId = location.hash.replace("#", "");
            const element = document.getElementById(targetId);
            if (element) {
                setTimeout(() => {
                    element.scrollIntoView({ behavior: "smooth", block: "start" });
                }, 300);
            }
        } else {
            window.scrollTo(0, 0);
        }
    }, [location.hash, categorySlug]);

    if (products.length === 0) {
        return (
            <div className="max-w-7xl mx-auto px-6 py-20 text-center">
                <h2 className="text-2xl font-serif text-[#2c2825]">Category Not Found</h2>
            </div>
        );
    }

    return (
        <div className="w-full bg-[#fcfbf9] py-16 md:py-24">
            <div className="max-w-7xl mx-auto px-6">
                
                {/* PAGE HEADER */}
                <div className="mb-16 border-b border-[#ece7df] pb-8">
                    <p className="uppercase tracking-[3px] text-[12px] md:text-[13px] font-semibold text-[#a68a6d] mb-3">
                        Collection Catalog
                    </p>
                    <h1 className="font-serif text-[40px] md:text-[52px] text-[#2c2825] leading-tight">
                        {categoryName}
                    </h1>
                </div>

                {/* PRODUCTS LIST */}
                <div className="flex flex-col gap-24 md:gap-32">
                    {products.map((product) => {
                        const images = [product.image];
                        if (product.dimensionImage && product.dimensionImage !== product.image) {
                            images.push(product.dimensionImage);
                        }
                        if (product.extraImages && product.extraImages.length > 0) {
                            images.push(...product.extraImages);
                        }

                        return (
                            <div
                                key={product.id}
                                id={product.id}
                                className="scroll-mt-32 border-b border-[#ece7df] pb-20 last:border-0"
                            >
                                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
                                    
                                    {/* LEFT: EMBLA CAROUSEL */}
                                    <div className="lg:col-span-5 flex flex-col items-center">
                                        <ProductCarousel images={images} name={product.name} />
                                    </div>

                                    {/* RIGHT: DETAILS */}
                                    <div className="lg:col-span-7 flex flex-col justify-center">
                                        <div className="flex items-center gap-2 mb-3">
                                            <Leaf size={16} className="text-[#2e5b47]" />
                                            <span className="text-[12px] text-[#2e5b47] uppercase font-semibold tracking-wider">
                                                Eco-Friendly & Compostable
                                            </span>
                                        </div>
                                        <h2 className="font-serif text-[32px] md:text-[40px] text-[#2c2825] mb-6 leading-tight">
                                            {product.name}
                                        </h2>
                                        <p className="text-[#6b655e] text-[16px] leading-relaxed mb-8">
                                            {product.description}
                                        </p>

                                        <div className="mb-6">
                                            <span className="border border-[#2e5b47] text-[#2e5b47] px-6 py-2 rounded text-[14px] font-semibold tracking-wide uppercase inline-block">
                                                Product Specifications
                                            </span>
                                        </div>

                                        <p className="text-[15px] font-medium text-[#2d2a26] mb-8">
                                            Material – Sugarcane Bagasse
                                        </p>
                                    </div>
                                </div>

                                {/* SPECIFICATIONS GRID CONTAINER */}
                                <div className="mt-12 bg-white border border-[#ece7df] rounded-2xl p-8 shadow-sm">
                                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-y-8 gap-x-6">
                                        {/* Product Size */}
                                        {product.specifications.productSize && (
                                            <div className="flex items-start gap-4">
                                                <div className="shrink-0 w-8 h-8 flex items-center justify-center pt-0.5">
                                                    <img src="/utilityimages/product-size.png" alt="Product Size" className="w-full h-full object-contain" />
                                                </div>
                                                <div className="min-h-[58px]">
                                                    <p className="text-[15px] font-semibold text-[#2d2a26] mb-1">Product Size</p>
                                                    <p className="text-[#6b655e] text-[14px] leading-relaxed whitespace-pre-line">{product.specifications.productSize}</p>
                                                </div>
                                            </div>
                                        )}

                                        {/* Depth */}
                                        {product.specifications.depth && (
                                            <div className="flex items-start gap-4">
                                                <div className="shrink-0 w-8 h-8 flex items-center justify-center text-[#2e5b47] pt-0.5">
                                                    <ArrowDownToLine size={24} strokeWidth={1.5} />
                                                </div>
                                                <div className="min-h-[58px]">
                                                    <p className="text-[15px] font-semibold text-[#2d2a26] mb-1">Depth</p>
                                                    <p className="text-[#6b655e] text-[14px] leading-relaxed">{product.specifications.depth}</p>
                                                </div>
                                            </div>
                                        )}

                                        {/* Volume */}
                                        {product.specifications.volume && (
                                            <div className="flex items-start gap-4">
                                                <div className="shrink-0 w-8 h-8 flex items-center justify-center text-[#2e5b47] pt-0.5">
                                                    <Droplet size={24} strokeWidth={1.5} />
                                                </div>
                                                <div className="min-h-[58px]">
                                                    <p className="text-[15px] font-semibold text-[#2d2a26] mb-1">Volume</p>
                                                    <p className="text-[#6b655e] text-[14px] leading-relaxed">{product.specifications.volume}</p>
                                                </div>
                                            </div>
                                        )}

                                        {/* Product Weight */}
                                        {product.specifications.productWeight && (
                                            <div className="flex items-start gap-4">
                                                <div className="shrink-0 w-8 h-8 flex items-center justify-center pt-0.5">
                                                    <img src="/utilityimages/product-weight.png" alt="Product Weight" className="w-full h-full object-contain" />
                                                </div>
                                                <div className="min-h-[58px]">
                                                    <p className="text-[15px] font-semibold text-[#2d2a26] mb-1">Product Weight</p>
                                                    <p className="text-[#6b655e] text-[14px] leading-relaxed">{product.specifications.productWeight}</p>
                                                </div>
                                            </div>
                                        )}

                                        {/* PCS in Pack */}
                                        {product.specifications.pcsInPack && (
                                            <div className="flex items-start gap-4">
                                                <div className="shrink-0 w-8 h-8 flex items-center justify-center pt-0.5">
                                                    <img src="/utilityimages/pcs-in-pack.png" alt="PCS In Pack" className="w-full h-full object-contain" />
                                                </div>
                                                <div className="min-h-[58px]">
                                                    <p className="text-[15px] font-semibold text-[#2d2a26] mb-1">PCS In Pack</p>
                                                    <p className="text-[#6b655e] text-[14px] leading-relaxed">{product.specifications.pcsInPack}</p>
                                                </div>
                                            </div>
                                        )}

                                        {/* Pack in Carton */}
                                        {product.specifications.packInCarton && (
                                            <div className="flex items-start gap-4">
                                                <div className="shrink-0 w-8 h-8 flex items-center justify-center pt-0.5">
                                                    <img src="/utilityimages/pack-in-carton.png" alt="Pack In Carton" className="w-full h-full object-contain" />
                                                </div>
                                                <div className="min-h-[58px]">
                                                    <p className="text-[15px] font-semibold text-[#2d2a26] mb-1">Pack In Carton</p>
                                                    <p className="text-[#6b655e] text-[14px] leading-relaxed">{product.specifications.packInCarton}</p>
                                                </div>
                                            </div>
                                        )}

                                        {/* Total PCS in Carton */}
                                        {product.specifications.totalPcsInCarton && (
                                            <div className="flex items-start gap-4">
                                                <div className="shrink-0 w-8 h-8 flex items-center justify-center pt-0.5">
                                                    <img src="/utilityimages/total-in-carton.png" alt="Total PCS In Carton" className="w-full h-full object-contain" />
                                                </div>
                                                <div className="min-h-[58px]">
                                                    <p className="text-[15px] font-semibold text-[#2d2a26] mb-1">Total PCS In Carton</p>
                                                    <p className="text-[#6b655e] text-[14px] leading-relaxed">{product.specifications.totalPcsInCarton}</p>
                                                </div>
                                            </div>
                                        )}

                                        {/* Box Dimension */}
                                        {product.specifications.boxDimension && (
                                            <div className="flex items-start gap-4">
                                                <div className="shrink-0 w-8 h-8 flex items-center justify-center pt-0.5">
                                                    <img src="/utilityimages/box-dimension.png" alt="Box Dimension L x W x H" className="w-full h-full object-contain" />
                                                </div>
                                                <div className="min-h-[58px]">
                                                    <p className="text-[15px] font-semibold text-[#2d2a26] mb-1">Box Dimension L x W x H</p>
                                                    <p className="text-[#6b655e] text-[14px] leading-relaxed whitespace-pre-line">{product.specifications.boxDimension}</p>
                                                </div>
                                            </div>
                                        )}

                                        {/* Box CBM */}
                                        {product.specifications.boxCbm && (
                                            <div className="flex items-start gap-4">
                                                <div className="shrink-0 w-8 h-8 flex items-center justify-center pt-0.5">
                                                    <img src="/utilityimages/box-cbm.png" alt="Box CBM" className="w-full h-full object-contain" />
                                                </div>
                                                <div className="min-h-[58px]">
                                                    <p className="text-[15px] font-semibold text-[#2d2a26] mb-1">Box CBM</p>
                                                    <p className="text-[#6b655e] text-[14px] leading-relaxed">{product.specifications.boxCbm}</p>
                                                </div>
                                            </div>
                                        )}

                                        {/* Container Quantity */}
                                        {product.specifications.containerQuantity && (
                                            <div className="flex items-start gap-4">
                                                <div className="shrink-0 w-8 h-8 flex items-center justify-center pt-0.5">
                                                    <img src="/utilityimages/container-quanity.png" alt="Container Quantity" className="w-full h-full object-contain" />
                                                </div>
                                                <div className="min-h-[58px]">
                                                    <p className="text-[15px] font-semibold text-[#2d2a26] mb-1">Container Quantity</p>
                                                    <p className="text-[#6b655e] text-[14px] leading-relaxed whitespace-pre-line">{product.specifications.containerQuantity}</p>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>

                            </div>
                        );
                    })}
                </div>

            </div>
        </div>
    );
};

export default CategoryPage;
