import React, { useState } from "react";
import { Phone, Mail, Globe, Sparkles, Check, Send } from "lucide-react";

const ComingSoon = () => {
    // Waitlist Form State
    const [email, setEmail] = useState("");
    const [status, setStatus] = useState("idle"); // idle, loading, success

    const handleSubscribe = (e) => {
        e.preventDefault();
        if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            return;
        }
        setStatus("loading");
        setTimeout(() => {
            setStatus("success");
            localStorage.setItem("greenera_waitlist_email", email);
        }, 1200);
    };

    // Helper to generate the 3D solid vertical long-shadow
    const makeLongShadow = (color, depth) => {
        let shadow = "";
        for (let i = 1; i <= depth; i++) {
            shadow += `0px ${i}px 0px ${color}${i < depth ? "," : ""}`;
        }
        return shadow;
    };

    const shadowColor = "#0e241b"; // Dark shade for the 3D projection

    return (
        <div className="relative min-h-screen w-full flex flex-col justify-between items-center text-white overflow-hidden bg-gradient-to-b from-[#183d2d] to-[#122e22] px-6 pt-10 pb-20 select-none font-sans">

            {/* GREEN ERA LOGO & HEADER */}
            <header className="relative z-40 w-full max-w-xl mx-auto flex flex-col items-center gap-3">
                <div className="p-3 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 shadow-lg">
                    <img
                        src="/green-era-logo.svg"
                        alt="GreenEra Logo"
                        className="h-12 sm:h-14 w-auto object-contain drop-shadow-[0_0_10px_rgba(255,255,255,0.1)]"
                    />
                </div>
            </header>

            {/* 3D COMING SOON HEADING SECTION */}
            <main className="relative z-30 w-full max-w-4xl mx-auto flex flex-col items-center text-center my-auto py-10">

                {/* 3D COMING SOON TEXT */}
                <div className="flex flex-col items-center leading-none mb-12 sm:mb-16">
                    <h1
                        className="font-black text-6xl sm:text-7xl md:text-8xl lg:text-9xl uppercase tracking-wider text-white select-none"
                        style={{ textShadow: makeLongShadow(shadowColor, 90) }}
                    >
                        Coming
                    </h1>
                    <h1
                        className="font-black text-6xl sm:text-7xl md:text-8xl lg:text-9xl uppercase tracking-wider text-white select-none mt-2"
                        style={{ textShadow: makeLongShadow(shadowColor, 90) }}
                    >
                        Soon
                    </h1>
                </div>

                {/* BRIEF BRAND VALUE DETAIL */}
                <p className="text-emerald-200/90 text-[14px] sm:text-[15px] leading-relaxed max-w-lg mb-8 px-6 font-medium">
                    India's premium brand of 100% biodegradable & compostable tableware, crafted entirely from renewable sugarcane residue.
                </p>



            </main>

            {/* FLOATING 3D SHADOWED PAPER AIRPLANES (MATCHING REFERENCE IMAGE) */}
            <div className="absolute inset-0 z-20 pointer-events-none">

                {/* Left Large Yellow Plane */}
                <div className="absolute left-[8%] sm:left-[15%] bottom-[30%] sm:bottom-[35%] w-16 h-16 transform -rotate-12 animate-float" style={{ animationDuration: "14s" }}>
                    {/* Solid vertical trail shadow extending straight down */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-6 bg-gradient-to-b from-[#0b1e15] to-transparent h-[600px] z-10 opacity-80" />
                    {/* Paper Plane SVG */}
                    <svg viewBox="0 0 24 24" fill="#f2b705" className="w-full h-full relative z-20 drop-shadow-xl text-[#f2b705]">
                        <path d="M21.5 2.5L2 11.5L9.5 14.5L21.5 2.5Z" />
                        <path d="M21.5 2.5L9.5 14.5L14.5 22L21.5 2.5Z" />
                        <path d="M9.5 14.5L12 18L13.5 15.5L9.5 14.5Z" fill="#d99f00" />
                    </svg>
                </div>

                {/* Right Medium Red-Orange Plane */}
                <div className="absolute right-[8%] sm:right-[15%] bottom-[20%] sm:bottom-[25%] w-12 h-12 transform rotate-12 animate-float" style={{ animationDuration: "18s", animationDelay: "2s" }}>
                    {/* Solid vertical trail shadow extending straight down */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-4.5 bg-gradient-to-b from-[#0b1e15] to-transparent h-[600px] z-10 opacity-80" />
                    {/* Paper Plane SVG */}
                    <svg viewBox="0 0 24 24" fill="#e76f51" className="w-full h-full relative z-20 drop-shadow-xl text-[#e76f51]">
                        <path d="M21.5 2.5L2 11.5L9.5 14.5L21.5 2.5Z" />
                        <path d="M21.5 2.5L9.5 14.5L14.5 22L21.5 2.5Z" />
                        <path d="M9.5 14.5L12 18L13.5 15.5L9.5 14.5Z" fill="#c95337" />
                    </svg>
                </div>

                {/* Middle Small Teal Plane */}
                <div className="absolute left-[45%] bottom-[12%] sm:bottom-[16%] w-8 h-8 transform -rotate-6 animate-float" style={{ animationDuration: "16s", animationDelay: "4s" }}>
                    {/* Solid vertical shadow */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-3 bg-gradient-to-b from-[#0b1e15] to-transparent h-[600px] z-10 opacity-80" />
                    {/* Paper Plane SVG */}
                    <svg viewBox="0 0 24 24" fill="#2a9d8f" className="w-full h-full relative z-20 drop-shadow-xl text-[#2a9d8f]">
                        <path d="M21.5 2.5L2 11.5L9.5 14.5L21.5 2.5Z" />
                        <path d="M21.5 2.5L9.5 14.5L14.5 22L21.5 2.5Z" />
                        <path d="M9.5 14.5L12 18L13.5 15.5L9.5 14.5Z" fill="#1b7267" />
                    </svg>
                </div>

            </div>



            {/* FRONT EMBEDDED FOOTER DEVELOPER & COPYRIGHT CREDIT */}
            <div className="absolute bottom-4 left-0 right-0 text-center z-40 pointer-events-auto">
                <div className="flex flex-col sm:flex-row items-center justify-between max-w-5xl mx-auto px-8 text-[10px] sm:text-[11px] font-bold tracking-widest text-[#183d2d]/65 uppercase">
                    <span>© {new Date().getFullYear()} GREEN ERA TABLEWARE</span>
                    <span className="flex items-center gap-1.5 mt-1 sm:mt-0 text-[#e76f51]">
                        <Sparkles className="w-3.5 h-3.5 text-[#e76f51]" />
                        DEVELOPING BY <span className="text-[#e76f51]">VISION TECHX</span>
                    </span>
                </div>
            </div>

        </div>
    );
};

export default ComingSoon;
