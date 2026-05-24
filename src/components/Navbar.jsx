import React, { useState } from "react";
import {
    Phone,
    Menu,
    X,
} from "lucide-react";

const Navbar = () => {
    const [mobileMenu, setMobileMenu] = useState(false);

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
                <div className="flex items-center cursor-pointer shrink-0">
                    <img
                        src="/green-era-logo.svg"
                        alt="GreenEra Logo"
                        className="h-14 lg:h-[58px] w-auto object-contain transition-transform hover:scale-105"
                    />
                </div>

                {/* CENTER NAVIGATION */}
                <div className="hidden lg:flex items-center lg:gap-4 xl:gap-8">
                    <a
                        href="#home"
                        className="text-[14px] xl:text-[15px] text-[#2d2a26] font-medium hover:text-[#9c7b58] transition whitespace-nowrap"
                    >
                        Home
                    </a>

                    <a
                        href="#about"
                        className="text-[14px] xl:text-[15px] text-[#2d2a26] font-medium hover:text-[#9c7b58] transition whitespace-nowrap"
                    >
                        About Us
                    </a>

                    {/* PRODUCTS DROPDOWN */}
                    <a
                        href="#products"
                        className="text-[14px] xl:text-[15px] text-[#2d2a26] font-medium hover:text-[#9c7b58] transition whitespace-nowrap"
                    >
                        Products
                    </a>

                    <a
                        href="#sustainability"
                        className="text-[14px] xl:text-[15px] text-[#2d2a26] font-medium hover:text-[#9c7b58] transition whitespace-nowrap"
                    >
                        Sustainability
                    </a>

                    <a
                        href="#industries"
                        className="text-[14px] xl:text-[15px] text-[#2d2a26] font-medium hover:text-[#9c7b58] transition whitespace-nowrap"
                    >
                        Industries
                    </a>

                    <a
                        href="#wholesale"
                        className="text-[14px] xl:text-[15px] text-[#2d2a26] font-medium hover:text-[#9c7b58] transition whitespace-nowrap"
                    >
                        Bulk Orders
                    </a>

                    <a
                        href="#contact"
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
                        href="#contact"
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
                            { name: "Home", href: "#home" },
                            { name: "About Us", href: "#about" },
                            { name: "Sustainability", href: "#sustainability" },
                            { name: "Industries", href: "#industries" },
                            { name: "Bulk Orders", href: "#wholesale" },
                            { name: "Contact Us", href: "#contact" },
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
                    <div>
                        <p className="text-[15px] font-semibold text-[#2d2a26] mb-3">
                            Products
                        </p>

                        <div className="flex flex-col gap-3 pl-3">
                            {[
                                "Round Plates",
                                "Square Plates",
                                "Compartment Plates",
                                "Bowls",
                                "Clamshell Containers",
                            ].map((item) => (
                                <a
                                    key={item}
                                    href="#products"
                                    onClick={() => setMobileMenu(false)}
                                    className="text-[14px] text-[#6b655e]"
                                >
                                    {item}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* CTA */}
                    <button
                        onClick={() => {
                            setMobileMenu(false);
                            window.location.hash = "#wholesale";
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