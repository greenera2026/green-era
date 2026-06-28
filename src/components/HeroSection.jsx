import React, { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowLeft, Circle, FlaskConical, Coffee, Soup } from "lucide-react";

const slides = [
  { image: "/carousel/hero-1.png" },
  { image: "/carousel/image.png" },
  { image: "/carousel/image copy.png" },
  { image: "/carousel/image copy 2.png" },
  { image: "/carousel/image copy 3.png" },
];

const AUTOPLAY_INTERVAL = 3000;

const HeroSection = () => {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);

  const goTo = useCallback(
    (index) => {
      if (animating) return;
      setAnimating(true);
      setTimeout(() => {
        setCurrent(index);
        setAnimating(false);
      }, 500);
    },
    [animating]
  );

  const goPrev = () => {
    goTo((current - 1 + slides.length) % slides.length);
  };

  const goNext = useCallback(() => {
    goTo((current + 1) % slides.length);
  }, [current, goTo]);

  useEffect(() => {
    const timer = setInterval(() => {
      goNext();
    }, AUTOPLAY_INTERVAL);
    return () => clearInterval(timer);
  }, [goNext]);



  return (
    <section id="home" className="relative w-full flex flex-col overflow-hidden" style={{ minHeight: '100svh' }}>

      {/* MAIN HERO AREA */}
      <div className="relative flex-1 flex items-center justify-center w-full min-h-[70vh] md:min-h-0">

        {/* BACKGROUND IMAGES — crossfade layer */}
        {slides.map((slide, i) => (
          <div
            key={slide.image}
            className="absolute inset-0 bg-cover bg-center transition-opacity duration-700 ease-in-out"
            style={{
              backgroundImage: `url('${slide.image}')`,
              opacity: i === current ? 1 : 0,
              zIndex: 0,
            }}
          />
        ))}

        {/* DARK OVERLAY */}
        <div className="absolute inset-0 bg-black/50 z-10" />

        {/* CENTER TEXT CONTENT — fixed, does not change with slides */}
        <div className="relative z-20 text-center text-white px-4 flex flex-col items-center">
          {/* SMALL TAGLINE */}
          <p className="uppercase tracking-[2px] text-[12px] md:text-[13px] font-medium text-white mb-4">
            From Sugarcane Waste, For a Greener World
          </p>

          {/* MAIN HEADING */}
          <h1 className="font-serif text-[32px] sm:text-[56px] md:text-[72px] leading-[1.1] font-normal mb-8 sm:mb-10 max-w-3xl">
            Eco-Friendly Disposables,{"\n"}Built to Perform
          </h1>

          {/* CTA BUTTONS */}
          <div className="flex flex-col sm:flex-row gap-4">
            {/* PRIMARY BUTTON */}
            <Link
              to="/products"
              className="bg-white hover:bg-gray-100 transition-colors duration-300 text-black px-8 py-3.5 text-[13px] font-semibold tracking-wider uppercase text-center inline-block"
            >
              Explore Products
            </Link>

            {/* SECONDARY BUTTON */}
            <a
              href="#contact"
              className="border border-white hover:bg-white hover:text-black transition-colors duration-300 text-white px-8 py-3.5 text-[13px] font-semibold tracking-wider uppercase text-center inline-block"
            >
              Contact Us
            </a>
          </div>
        </div>

        {/* SIDE NAVIGATION BUTTONS */}
        <button
          onClick={goPrev}
          className="absolute left-4 md:left-10 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/40 text-white/70 flex items-center justify-center hover:bg-white hover:text-black hover:border-white transition-all duration-300 z-20"
        >
          <ArrowLeft size={18} strokeWidth={1.5} />
        </button>

        <button
          onClick={goNext}
          className="absolute right-4 md:right-10 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/40 text-white/70 flex items-center justify-center hover:bg-white hover:text-black hover:border-white transition-all duration-300 z-20"
        >
          <ArrowRight size={18} strokeWidth={1.5} />
        </button>

        {/* DOT INDICATORS */}
        <div className="absolute bottom-16 sm:bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className="transition-all duration-300"
              style={{
                width: i === current ? "24px" : "8px",
                height: "8px",
                borderRadius: "4px",
                backgroundColor: i === current ? "#ffffff" : "rgba(255,255,255,0.45)",
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;