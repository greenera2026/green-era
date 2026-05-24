import React from "react";
import { MapPin, Phone, Mail, Send, Globe } from "lucide-react";

const ContactSection = () => {
    const contactDetails = [
        {
            icon: <MapPin size={22} strokeWidth={1.5} />,
            label: "Location",
            items: [
                {
                    text: "Gokuldham Main Road, Samrat Industrial Area, Rajkot - 360004 (Gujrat) - INDIA",
                    link: "https://maps.google.com/?q=Gokuldham+Main+Road,+Samrat+Industrial+Area,+Rajkot+-+360004"
                }
            ]
        },
        {
            icon: <Phone size={22} strokeWidth={1.5} />,
            label: "Phone",
            items: [
                {
                    text: "+91 93132 74748",
                    link: "tel:+919313274748"
                },
                {
                    text: "+91 63540 74748",
                    link: "tel:+916354074748"
                }
            ]
        },
        {
            icon: <Mail size={22} strokeWidth={1.5} />,
            label: "Email",
            items: [
                {
                    text: "greeneradisposable@gmail.com",
                    link: "mailto:greeneradisposable@gmail.com"
                }
            ]
        },
        {
            icon: <Globe size={22} strokeWidth={1.5} />,
            label: "Website",
            items: [
                {
                    text: "www.greeneradisposable.com",
                    link: "https://www.greeneradisposable.com"
                }
            ]
        }
    ];

    return (
        <section id="contact" className="w-full bg-[#fcfbf9] py-20 md:py-28 border-t border-[#ece7df]">
            <div className="max-w-7xl mx-auto px-6">

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20">

                    {/* LEFT SIDE - CONTACT INFO */}
                    <div className="flex flex-col justify-center">
                        <p className="uppercase tracking-[3px] text-[12px] md:text-[13px] font-semibold text-[#a68a6d] mb-4">
                            Connect With Us
                        </p>

                        <h2 className="font-serif text-[36px] md:text-[48px] text-[#2c2825] leading-[1.1] mb-6">
                            Let’s Build A Greener Future Together
                        </h2>

                        <p className="text-[16px] md:text-[18px] text-[#6b655e] leading-relaxed mb-12 max-w-md">
                            Get in touch for bulk orders & product inquiries. Our team is ready to help you switch to sustainable packaging solutions.
                        </p>

                        {/* Contact Details List */}
                        <div className="flex flex-col gap-8">
                            {contactDetails.map((detail, index) => (
                                <div
                                    key={index}
                                    className="flex items-start gap-5"
                                >
                                    {/* Icon Container */}
                                    <div className="w-12 h-12 rounded-full bg-white border border-[#ece7df] flex items-center justify-center text-[#2e5b47] shadow-sm shrink-0">
                                        {detail.icon}
                                    </div>

                                    {/* Text Content */}
                                    <div className="flex flex-col pt-1">
                                        <p className="text-[13px] text-[#a68a6d] uppercase tracking-wider font-medium mb-1.5">
                                            {detail.label}
                                        </p>
                                        <div className="flex flex-col gap-1.5">
                                            {detail.items.map((item, itemIdx) => (
                                                <a
                                                    key={itemIdx}
                                                    href={item.link}
                                                    target={detail.label === "Location" || detail.label === "Website" ? "_blank" : undefined}
                                                    rel={detail.label === "Location" || detail.label === "Website" ? "noopener noreferrer" : undefined}
                                                    className="text-[#2c2825] font-semibold text-[15px] md:text-[16px] hover:text-[#2e5b47] transition-colors duration-300 leading-snug"
                                                >
                                                    {item.text}
                                                </a>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* RIGHT SIDE - CONTACT FORM */}
                    <div className="w-full bg-white border border-[#ece7df] rounded-3xl p-8 md:p-12 shadow-sm">
                        <h3 className="text-[#2c2825] font-serif text-[26px] md:text-[30px] mb-8">
                            Send an Inquiry
                        </h3>

                        <form className="flex flex-col gap-5">
                            {/* Grid for Name & Phone */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                <div className="flex flex-col gap-2">
                                    <label htmlFor="name" className="text-[13px] font-semibold text-[#6b655e] ml-1">Full Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        placeholder="John Doe"
                                        className="w-full bg-[#f8f5f0] border border-transparent focus:border-[#2e5b47] focus:bg-white rounded-xl px-5 py-3.5 text-[15px] text-[#2c2825] outline-none transition-all duration-300 placeholder:text-[#a8a39d]"
                                    />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label htmlFor="phone" className="text-[13px] font-semibold text-[#6b655e] ml-1">Phone Number</label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        placeholder="+91"
                                        className="w-full bg-[#f8f5f0] border border-transparent focus:border-[#2e5b47] focus:bg-white rounded-xl px-5 py-3.5 text-[15px] text-[#2c2825] outline-none transition-all duration-300 placeholder:text-[#a8a39d]"
                                    />
                                </div>
                            </div>

                            {/* Email Input */}
                            <div className="flex flex-col gap-2">
                                <label htmlFor="email" className="text-[13px] font-semibold text-[#6b655e] ml-1">Email Address</label>
                                <input
                                    type="email"
                                    id="email"
                                    placeholder="john@example.com"
                                    className="w-full bg-[#f8f5f0] border border-transparent focus:border-[#2e5b47] focus:bg-white rounded-xl px-5 py-3.5 text-[15px] text-[#2c2825] outline-none transition-all duration-300 placeholder:text-[#a8a39d]"
                                />
                            </div>

                            {/* Message Input */}
                            <div className="flex flex-col gap-2">
                                <label htmlFor="message" className="text-[13px] font-semibold text-[#6b655e] ml-1">Your Message (Optional)</label>
                                <textarea
                                    id="message"
                                    rows="4"
                                    placeholder="Tell us about your requirements..."
                                    className="w-full bg-[#f8f5f0] border border-transparent focus:border-[#2e5b47] focus:bg-white rounded-xl px-5 py-3.5 text-[15px] text-[#2c2825] outline-none transition-all duration-300 placeholder:text-[#a8a39d] resize-none"
                                ></textarea>
                            </div>

                            {/* Submit Button */}
                            <button
                                type="button"
                                className="mt-4 w-full bg-[#2e5b47] hover:bg-[#244636] text-white py-4 rounded-xl text-[15px] font-medium transition-all duration-300 flex items-center justify-center gap-2 group shadow-md hover:shadow-lg"
                            >
                                Submit Inquiry
                                <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                            </button>
                        </form>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default ContactSection;