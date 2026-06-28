import React from "react";
import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Globe } from "lucide-react";

// Lucide doesn't include brand icons, so we use standard SVG paths for them
const FacebookIcon = ({ size }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
);
const TwitterIcon = ({ size }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
);
const InstagramIcon = ({ size }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
);
const LinkedinIcon = ({ size }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
);

const Footer = () => {
    const links = [
        { name: "Home", href: "/" },
        { name: "About Us", href: "/#about" },
        { name: "Products", to: "/products" },
        { name: "Sustainability", href: "/#sustainability" },
        { name: "Industries", href: "/#industries" },
        { name: "Bulk Orders", href: "/#wholesale" },
        { name: "Contact Us", href: "/#contact" }
    ];

    return (
        <footer className="w-full bg-[#2c2825] pt-20 pb-8">
            <div className="max-w-7xl mx-auto px-6">

                {/* MAIN FOOTER CONTENT */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8 mb-16">

                    {/* COLUMN 1: Brand & About */}
                    <div className="md:col-span-12 lg:col-span-5 flex flex-col">

                        {/* Logo */}
                        <div className="flex items-center mb-6 cursor-pointer w-fit">
                            <img
                                src="/green-era-logo.svg"
                                alt="GreenEra Logo"
                                className="h-12 w-auto object-contain"
                            />
                        </div>

                        {/* About Text */}
                        <p className="text-[#a8a39d] text-[15px] leading-relaxed max-w-sm">
                            GreenEra delivers premium biodegradable bagasse tableware solutions
                            designed for sustainable food service and eco-conscious businesses.
                        </p>

                        {/* Social Icons */}
                        <div className="flex gap-4 mt-8">
                            {[FacebookIcon, TwitterIcon, InstagramIcon, LinkedinIcon].map((Icon, idx) => (
                                <a
                                    key={idx}
                                    href="#"
                                    className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-[#a8a39d] hover:bg-[#2e5b47] hover:text-white hover:border-[#2e5b47] transition-all duration-300"
                                >
                                    <Icon size={18} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* COLUMN 2: Quick Links */}
                    <div className="md:col-span-6 lg:col-span-3 flex flex-col">
                        <h4 className="text-white font-semibold tracking-wider uppercase text-[13px] mb-6">
                            Explore
                        </h4>
                        <ul className="flex flex-col gap-3">
                            {links.map((link, index) => (
                                <li key={index}>
                                    {link.to ? (
                                        <Link
                                            to={link.to}
                                            className="text-[#a8a39d] text-[15px] hover:text-white transition-colors duration-300"
                                        >
                                            {link.name}
                                        </Link>
                                    ) : (
                                        <a
                                            href={link.href}
                                            className="text-[#a8a39d] text-[15px] hover:text-white transition-colors duration-300"
                                        >
                                            {link.name}
                                        </a>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* COLUMN 3: Contact Info */}
                    <div className="md:col-span-6 lg:col-span-4 flex flex-col">
                        <h4 className="text-white font-semibold tracking-wider uppercase text-[13px] mb-6">
                            Contact Us
                        </h4>
                        <ul className="flex flex-col gap-4 text-[#a8a39d] text-[15px] leading-relaxed">
                            <li className="flex items-start gap-3">
                                <MapPin size={18} className="text-[#2e5b47] shrink-0 mt-1" />
                                <a
                                    href="https://maps.google.com/?q=Gokuldham+Main+Road,+Samrat+Industrial+Area,+Rajkot+-+360004"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-white transition-colors duration-300"
                                >
                                    Gokuldham Main Road,<br />
                                    Samrat Industrial Area,<br />
                                    Rajkot - 360004 (Gujrat) - INDIA
                                </a>
                            </li>
                            <li className="flex items-start gap-3">
                                <Phone size={18} className="text-[#2e5b47] shrink-0 mt-1" />
                                <div className="flex flex-col">
                                    <a href="tel:+919313274748" className="hover:text-white transition-colors duration-300">+91 93132 74748</a>
                                    <a href="tel:+916354074748" className="hover:text-white transition-colors duration-300">+91 63540 74748</a>
                                </div>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail size={18} className="text-[#2e5b47] shrink-0" />
                                <a href="mailto:greeneradisposable@gmail.com" className="hover:text-white transition-colors duration-300 break-all">
                                    greeneradisposable@gmail.com
                                </a>
                            </li>
                            <li className="flex items-center gap-3">
                                <Globe size={18} className="text-[#2e5b47] shrink-0" />
                                <a href="https://www.greeneradisposable.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-300">
                                    www.greeneradisposable.com
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* BOTTOM LINE */}
                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left text-[#8c857d] text-[14px]">
                    <p>© 2026 GreenEra Disposable. All Rights Reserved.</p>

                    {/* Small sign-off */}
                    <p className="flex items-center justify-center gap-1.5">
                        Crafted for a greener planet
                        <span className="text-[#2e5b47]">💚</span>
                    </p>

                    {/* Developed By */}
                    <p>
                        Developed By{" "}
                        <a
                            href="https://visiontechx.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#2e5b47] hover:text-white transition-colors duration-300 font-semibold"
                        >
                            Vision TechX
                        </a>
                    </p>
                </div>

            </div>
        </footer>
    );
};

export default Footer;