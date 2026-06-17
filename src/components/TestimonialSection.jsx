import React, { useRef, useState, useEffect } from "react";
import { Star } from "lucide-react";

const testimonials = [
  {
    text: "The quality is excellent and the products are sturdy enough for daily restaurant use.",
    author: "Vidya Rathi",
    role: "Restaurant Owner",
    initials: "SJ",
  },
  {
    text: "Perfect eco-friendly alternative for our catering business. Customers love the sustainable packaging.",
    author: " Anuj Sharma",
    role: "Catering Director",
    initials: "DC",
  },
  {
    text: "Reliable supply, premium finish, and great customer support.",
    author: "Priya Sharma",
    role: "Event Planner",
    initials: "PS",
  },
];

/* Vertical stagger pattern */
const offsets = [0, 36, -18];

const TestimonialCard = ({ testimonial, offset, onMouseEnter, onMouseLeave }) => (
  <div
    className="flex-shrink-0 w-[300px] sm:w-[340px] group"
    style={{ transform: `translateY(${offset}px)` }}
  >
    <div
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className="relative h-full bg-white border border-[#ece7df] rounded-3xl p-7 sm:p-8
        transition-all duration-300 ease-out
        group-hover:bg-[#f9f4ef] group-hover:border-[#d8c3a5]
        group-hover:shadow-[0_12px_40px_rgba(166,138,109,0.18)]
        group-hover:-translate-y-1 group-hover:scale-[1.02]"
    >
      {/* Decorative quote mark */}
      <span
        className="absolute top-4 right-6 text-[64px] leading-none font-serif
          text-[#f3ede6] group-hover:text-[#ece7df] transition-colors duration-300
          pointer-events-none select-none"
        aria-hidden="true"
      >
        "
      </span>

      {/* Stars */}
      <div className="flex items-center gap-1 mb-5 relative z-10">
        {[...Array(5)].map((_, i) => (
          <Star key={i} size={15} className="text-[#d8c3a5] fill-[#d8c3a5]" />
        ))}
      </div>

      {/* Quote text */}
      <p className="text-[14px] sm:text-[15px] leading-[1.8] text-[#6b655e] italic mb-7 relative z-10">
        "{testimonial.text}"
      </p>

      {/* Author */}
      <div className="flex items-center gap-3 border-t border-[#f3ede6] pt-5 relative z-10">
        <div
          className="w-10 h-10 rounded-full flex items-center justify-center
            text-white text-xs font-medium flex-shrink-0
            bg-[#2e5b47] group-hover:bg-[#a68a6d] transition-colors duration-300"
        >
          {testimonial.initials}
        </div>
        <div>
          <p className="text-[14px] font-semibold text-[#2c2825] leading-tight">
            {testimonial.author}
          </p>
          <p className="text-[11px] uppercase tracking-[0.14em] text-[#a68a6d] mt-0.5">
            {testimonial.role}
          </p>
        </div>
      </div>
    </div>
  </div>
);

const TestimonialSection = () => {
  const [isPaused, setIsPaused] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full py-20 md:py-28 border-t border-[#ece7df] overflow-hidden"
      style={{ background: "#fcfbf9" }}
    >
      {/* Section header */}
      <div className="max-w-3xl mx-auto text-center px-6 mb-16 md:mb-20">
        <p className="uppercase tracking-[3px] text-[12px] md:text-[13px] font-semibold text-[#a68a6d] mb-4">
          Client Reviews
        </p>
        <h2 className="font-serif text-[36px] md:text-[46px] text-[#2c2825] leading-tight">
          What Our Clients Say
        </h2>
      </div>

      {/* Marquee carousel */}
      <div
        className={`relative transition-opacity duration-700 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        {/* Edge fades */}
        <div
          className="absolute left-0 top-0 bottom-0 w-20 sm:w-32 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to right, #fcfbf9, transparent)" }}
        />
        <div
          className="absolute right-0 top-0 bottom-0 w-20 sm:w-32 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to left, #fcfbf9, transparent)" }}
        />

        {/* Scrolling track */}
        <div className="pb-12 pt-4">
          <div
            className="flex gap-6 sm:gap-8 items-start"
            style={{
              animation: "testimonial-marquee 40s linear infinite",
              animationPlayState: isPaused ? "paused" : "running",
              width: "max-content",
            }}
          >
            {/* First set */}
            {testimonials.map((t, i) => (
              <TestimonialCard
                key={`a-${i}`}
                testimonial={t}
                offset={offsets[i % offsets.length]}
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
              />
            ))}
            {/* Duplicate for seamless loop */}
            {testimonials.map((t, i) => (
              <TestimonialCard
                key={`b-${i}`}
                testimonial={t}
                offset={offsets[i % offsets.length]}
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
              />
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes testimonial-marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
};

export default TestimonialSection;