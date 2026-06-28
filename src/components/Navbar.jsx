import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
    Phone,
    Menu,
    X,
    ChevronDown,
} from "lucide-react";

const dropdownCategories = [
    { name: "Round Plates", image: "/rp-10.jpg", slug: "round-plates" },
    { name: "Compartment Plates", image: "/cp-4.jpg", slug: "compartment-plates" },
    { name: "Square Plates", image: "/sp-1d.jpg", slug: "square-plates" },
    { name: "Bowls", image: "/b-large.jpg", slug: "bowls" },
    { name: "Clamshell", image: "/cs-9x9.jpg", slug: "clamshell-containers" }
];

const Navbar = () => {
    const [mobileMenu, setMobileMenu] = useState(false);
    const [showDropdown, setShowDropdown] = useState(false);
    const navigate = useNavigate();

    return (
        <header className="fixed top-0 left-0 w-full border-b border-[#e9e4de] bg-white z-50 shadow-sm">
            {/* TOP ANNOUNCEMENT BAR */}
            <div className="w-full bg-[#f7f4ef] border-b border-[#ece7df]">
                <div className="max-w-7xl mx-auto px-4 lg:px-6 py-2">
                    <div className="hidden lg:flex items-center justify-between text-[12px] xl:text-[13px] tracking-wide text-[#6f6a63] font-medium w-full">
                        <p className="whitespace-nowrap">100% Biodegradable & Compostable Tableware</p>
                        <p className="whitespace-nowrap">Sustainable Solutions For Food Businesses</p>
                        <p className="whitespace-nowrap">Bulk Orders Available Across India</p>
                    </div>

                    {/* Mobile Text */}
                    <div className="lg:hidden text-center text-[12px] text-[#6f6a63] font-medium">
                        Sustainable Eco-Friendly Tableware
                    </div>
                </div>
            </div>

            {/* MAIN NAVBAR */}
            <nav className="max-w-7xl mx-auto px-4 lg:px-6 h-[82px] flex items-center justify-between">

                {/* LEFT - LOGO */}
                <Link to="/" className="flex items-center cursor-pointer shrink-0">
                    <img
                        src="/green-era-logo.svg"
                        alt="GreenEra Logo"
                        className="h-14 lg:h-[58px] w-auto object-contain transition-transform hover:scale-105"
                    />
                </Link>

                {/* CENTER NAVIGATION */}
                <div className="hidden lg:flex items-center lg:gap-4 xl:gap-8">
                    <a
                        href="/"
                        className="text-[14px] xl:text-[15px] text-[#2d2a26] font-medium hover:text-[#9c7b58] transition whitespace-nowrap"
                    >
                        Home
                    </a>

                    <a
                        href="/#about"
                        className="text-[14px] xl:text-[15px] text-[#2d2a26] font-medium hover:text-[#9c7b58] transition whitespace-nowrap"
                    >
                        About Us
                    </a>

                    {/* PRODUCTS LINK WITH DROPDOWN */}
                    <div 
                        className="relative py-6"
                        onMouseEnter={() => setShowDropdown(true)}
                        onMouseLeave={() => setShowDropdown(false)}
                    >
                        <Link
                            to="/products"
                            onClick={() => setShowDropdown(false)}
                            className="text-[14px] xl:text-[15px] text-[#2d2a26] font-medium hover:text-[#9c7b58] transition whitespace-nowrap flex items-center gap-1"
                        >
                            Products
                            <ChevronDown size={14} className={`transition-transform duration-300 ${showDropdown ? "rotate-180" : ""}`} />
                        </Link>
                        
                        {/* Mega Menu Dropdown */}
                        <div className={`absolute left-1/2 -translate-x-[45%] top-[100%] w-[90vw] max-w-5xl bg-white shadow-xl border border-[#ece7df] rounded-2xl p-6 transition-all duration-300 z-50 ${showDropdown ? "opacity-100 visible translate-y-0 pointer-events-auto" : "opacity-0 invisible translate-y-2 pointer-events-none"}`}>
                            <div className="grid grid-cols-5 gap-6">
                                {dropdownCategories.map((cat, idx) => (
                                    <div
                                        key={idx}
                                        onClick={() => {
                                            setShowDropdown(false);
                                            navigate(`/category/${cat.slug}`);
                                        }}
                                        className="group/item cursor-pointer flex flex-col items-center text-center bg-white border border-[#ece7df]/60 rounded-xl p-3 hover:shadow-md hover:border-[#2e5b47]/30 transition-all duration-300"
                                    >
                                        {/* Image Container */}
                                        <div className="relative w-full aspect-square bg-[#fcfbf9] overflow-hidden rounded-lg mb-4">
                                            <img
                                                src={cat.image}
                                                alt={cat.name}
                                                className="w-full h-full object-cover group-hover/item:scale-105 transition-transform duration-500"
                                            />
                                        </div>
                                        {/* Category Label */}
                                        <span className="text-[#2c2825] font-serif text-[15px] font-medium group-hover/item:text-[#2e5b47] transition-colors">
                                            {cat.name}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <a
                        href="/#sustainability"
                        className="text-[14px] xl:text-[15px] text-[#2d2a26] font-medium hover:text-[#9c7b58] transition whitespace-nowrap"
                    >
                        Sustainability
                    </a>

                    <a
                        href="/#industries"
                        className="text-[14px] xl:text-[15px] text-[#2d2a26] font-medium hover:text-[#9c7b58] transition whitespace-nowrap"
                    >
                        Industries
                    </a>

                    <a
                        href="/#wholesale"
                        className="text-[14px] xl:text-[15px] text-[#2d2a26] font-medium hover:text-[#9c7b58] transition whitespace-nowrap"
                    >
                        Bulk Orders
                    </a>

                    <a
                        href="/#contact"
                        className="text-[14px] xl:text-[15px] text-[#2d2a26] font-medium hover:text-[#9c7b58] transition whitespace-nowrap"
                    >
                        Contact Us
                    </a>
                </div>

                {/* RIGHT SECTION */}
                <div className="hidden lg:flex items-center lg:gap-4 xl:gap-6 shrink-0">
                    {/* Phone Dialer */}
                    <a
                        href="tel:+919313274748"
                        className="flex items-center justify-center text-[#2d2a26] hover:text-[#9c7b58] transition duration-300"
                        title="Call Us"
                    >
                        <Phone size={20} strokeWidth={2} />
                    </a>

                    {/* CTA BUTTON */}
                    <a
                        href="/#contact"
                        className="bg-[#2e5b47] hover:bg-[#244636] text-white lg:px-5 xl:px-7 py-2.5 rounded-full text-[13px] xl:text-[14px] font-medium tracking-wide transition-all duration-300 shadow-md hover:shadow-lg whitespace-nowrap text-center inline-block"
                    >
                        Get Quote
                    </a>
                </div>

                {/* MOBILE MENU BUTTON */}
                <button
                    onClick={() => setMobileMenu(!mobileMenu)}
                    className="lg:hidden text-[#2d2a26] p-1"
                >
                    {mobileMenu ? <X size={28} /> : <Menu size={28} />}
                </button>
            </nav>

            {/* MOBILE MENU */}
            <div
                className={`lg:hidden overflow-hidden transition-all duration-300 bg-white ${mobileMenu ? "max-h-[800px]" : "max-h-0"
                    }`}
            >
                <div className="px-6 pb-8 pt-2 border-t border-[#ece7df]">
                    <div className="flex flex-col gap-5">
                        {[
                            { name: "Home", href: "/" },
                            { name: "About Us", href: "/#about" },
                            { name: "Sustainability", href: "/#sustainability" },
                            { name: "Industries", href: "/#industries" },
                            { name: "Bulk Orders", href: "/#wholesale" },
                            { name: "Contact Us", href: "/#contact" },
                        ].map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                onClick={() => setMobileMenu(false)}
                                className="text-[15px] text-[#2d2a26] font-medium"
                            >
                                {item.name}
                            </a>
                        ))}
                    </div>

                    {/* Mobile Products */}
                    <div className="mt-5 pt-5 border-t border-[#ece7df]">
                        <Link
                            to="/products"
                            onClick={() => setMobileMenu(false)}
                            className="text-[15px] font-semibold text-[#2d2a26] mb-3 block"
                        >
                            Products
                        </Link>

                        <div className="flex flex-col gap-3 pl-3">
                            {[
                                { name: "Round Plates", slug: "round-plates" },
                                { name: "Square Plates", slug: "square-plates" },
                                { name: "Compartment Plates", slug: "compartment-plates" },
                                { name: "Bowls", slug: "bowls" },
                                { name: "Clamshell Containers", slug: "clamshell-containers" }
                            ].map((item) => (
                                <Link
                                    key={item.slug}
                                    to={`/category/${item.slug}`}
                                    onClick={() => setMobileMenu(false)}
                                    className="text-[14px] text-[#6b655e] hover:text-[#2e5b47] transition-colors"
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* CTA */}
                    <button
                        onClick={() => {
                            setMobileMenu(false);
                            window.location.href = "/#wholesale";
                        }}
                        className="mt-4 bg-[#2e5b47] text-white py-3 rounded-full text-[14px] font-medium w-full cursor-pointer"
                    >
                        Wholesale Inquiry
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Navbar;