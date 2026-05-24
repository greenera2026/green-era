import React from "react";
import { Quote, Star } from "lucide-react";

const TestimonialSection = () => {
    const testimonials = [
        {
            text: "The quality is excellent and the products are sturdy enough for daily restaurant use.",
            author: "Sarah Jenkins",
            role: "Restaurant Owner",
            initials: "SJ"
        },
        {
            text: "Perfect eco-friendly alternative for our catering business. Customers love the sustainable packaging.",
            author: "David Chen",
            role: "Catering Director",
            initials: "DC"
        },
        {
            text: "Reliable supply, premium finish, and great customer support.",
            author: "Priya Sharma",
            role: "Event Planner",
            initials: "PS"
        }
    ];

    return (
        <section className="w-full bg-[#fcfbf9] py-20 md:py-28 border-t border-[#ece7df]">
            <div className="max-w-7xl mx-auto px-6">

                {/* SECTION HEADER */}
                <div className="max-w-3xl mx-auto text-center mb-16 md:mb-20">
                    <p className="uppercase tracking-[3px] text-[12px] md:text-[13px] font-semibold text-[#a68a6d] mb-4">
                        Client Reviews
                    </p>
                    <h2 className="font-serif text-[36px] md:text-[46px] text-[#2c2825] leading-tight">
                        What Our Clients Say
                    </h2>
                </div>

                {/* TESTIMONIALS GRID */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <div
                            key={index}
                            className="bg-white border border-[#ece7df] p-8 md:p-10 rounded-3xl flex flex-col h-full hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative group"
                        >
                            {/* Decorative Background Quote Icon */}
                            <div className="absolute top-6 right-8 text-[#f8f5f0] group-hover:text-[#ece7df] transition-colors duration-300 pointer-events-none">
                                <Quote size={64} strokeWidth={1} fill="currentColor" />
                            </div>

                            {/* Stars */}
                            <div className="flex items-center gap-1 mb-6 relative z-10">
                                {[...Array(5)].map((_, i) => (
                                    <Star
                                        key={i}
                                        size={18}
                                        className="text-[#d8c3a5] fill-[#d8c3a5]"
                                    />
                                ))}
                            </div>

                            {/* Quote Text */}
                            <p className="text-[#6b655e] text-[16px] md:text-[17px] leading-relaxed mb-10 flex-grow relative z-10 italic">
                                "{testimonial.text}"
                            </p>

                            {/* Author Info */}
                            <div className="flex items-center gap-4 relative z-10 border-t border-[#f8f5f0] pt-6">
                                {/* Avatar */}
                                <div className="w-12 h-12 rounded-full bg-[#2e5b47] flex items-center justify-center text-white font-medium text-[15px] shrink-0">
                                    {testimonial.initials}
                                </div>

                                {/* Name & Role */}
                                <div>
                                    <h4 className="text-[#2c2825] font-semibold text-[15px] leading-tight">
                                        {testimonial.author}
                                    </h4>
                                    <p className="text-[#a68a6d] text-[13px] mt-1">
                                        {testimonial.role}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default TestimonialSection;