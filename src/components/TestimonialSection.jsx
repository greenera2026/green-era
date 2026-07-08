import React, { useRef, useState, useEffect } from "react";
import { Star } from "lucide-react";

const testimonials = [
  {
    text: "The quality is excellent and the products are sturdy enough for daily restaurant use.",
    author: "Vidya Rathi",
    role: "Restaurant Owner",
    initials: "VR",
  },
  {
    text: "Perfect eco-friendly alternative for our catering business. Customers love the sustainable packaging.",
    author: "Anuj Sharma",
    role: "Catering Director",
    initials: "AS",
  },
  {
    text: "Reliable supply, premium finish, and great customer support.",
    author: "Priya Sharma",
    role: "Event Planner",
    initials: "PS",
  },
  {
    text: "Switched to GreenEra compartment plates for our chaat counters. They don't get soggy even with hot chutney and curd. Extremely satisfied!",
    author: "Rajesh Mehta",
    role: "Sweet Shop Owner",
    initials: "RM",
  },
  {
    text: "Our customers appreciate that we use compostable tableware. The bagasse bowls look elegant and are perfect for our hot ramen dishes.",
    author: "Meera Sen",
    role: "Eco-Café Owner",
    initials: "MS",
  },
  {
    text: "We used these square plates for a destination wedding of 800 guests. Excellent durability, and they stack beautifully without sticking.",
    author: "Vikram Malhotra",
    role: "Wedding Caterer",
    initials: "VM",
  },
  {
    text: "The 4-compartment meal trays are a lifesaver for our lunchtime office deliveries. Zero leaks, and they keep the food hot.",
    author: "Shweta Iyer",
    role: "Quick Service Restaurant Manager",
    initials: "SI",
  },
  {
    text: "Managing garbage disposal became so much simpler after shifting to GreenEra compostable bowls and plates. Fully recommended.",
    author: "Amit Kulkarni",
    role: "Corporate Cafeteria Manager",
    initials: "AK",
  },
  {
    text: "We replaced single-use plastics with these sugarcane bagasse plates in our university dining halls. Very sturdy and premium.",
    author: "Radhika Nair",
    role: "Green Campus Initiative Leader",
    initials: "RN",
  },
  {
    text: "GreenEra's clamshell containers are incredibly strong. They lock securely, preventing spills during bike deliveries.",
    author: "Sandeep Bansal",
    role: "Food Truck Owner",
    initials: "SB",
  },
  {
    text: "Used their round plates for our annual fundraising dinner. Not a single plate bent or leaked. Truly reliable.",
    author: "Kavita Deshmukh",
    role: "NGO Founder",
    initials: "KD",
  },
  {
    text: "Ideal for our pastries and wraps. The natural off-white texture of the plates elevates the presentation of our organic food.",
    author: "Tarun Khanna",
    role: "Bakery & Bistro Owner",
    initials: "TK",
  },
  {
    text: "We tried many brands, but GreenEra's lids fit tightest on the 3-compartment boxes. Essential for food delivery apps.",
    author: "Rohan Joshi",
    role: "Cloud Kitchen Operator",
    initials: "RJ",
  },
  {
    text: "Clients are moving away from plastics. Having a trusted biodegradable partner like GreenEra makes pitching green events easy.",
    author: "Deepa Pillai",
    role: "Event Decorator & Planner",
    initials: "DP",
  },
  {
    text: "We serve heavy Punjabi thalis with lots of butter and gravy. These plates easily handle the weight and wetness.",
    author: "Harpreet Singh",
    role: "Dhaba & Lounge Owner",
    initials: "HS",
  },
  {
    text: "The small bowls are perfect for serving acai bowls and fruit salads. They add to our brand's sustainability aesthetic.",
    author: "Sneha Reddy",
    role: "Organic Grocer & Juice Bar",
    initials: "SR",
  },
  {
    text: "Consistent supply and high demand in local markets. The packaging keeps the plates dust-free during transit.",
    author: "Manoj Pandey",
    role: "Wholesale Distributor",
    initials: "MP",
  },
  {
    text: "Perfect for hosting weekend house parties. Clean-up is instant, and I feel good knowing it's 100% compostable.",
    author: "Neha Gupta",
    role: "Home Chef",
    initials: "NG",
  },
  {
    text: "Our resort pool buffet needs non-breakable, premium dinnerware. These plates fit our eco-luxury theme perfectly.",
    author: "Arjun Verma",
    role: "Resort General Manager",
    initials: "AV",
  },
  {
    text: "We stock our office pantry with GreenEra cups and plates. It's an easy step towards our corporate ESG goals.",
    author: "Pooja Patel",
    role: "Startup Co-founder",
    initials: "PP",
  },
  {
    text: "Very affordable for bulk buying. The customer feedback has been excellent since we stopped using cheap plastic plates.",
    author: "Sameer Sheikh",
    role: "Street Food Vendor",
    initials: "SS",
  },
  {
    text: "The round plates easily hold heavy meals. They are much better than paper plates that fold under the weight of rice.",
    author: "Divya Chawla",
    role: "Cafeteria Vendor",
    initials: "DC",
  },
  {
    text: "Aesthetically pleasing for food photography. The matte finish of the sugarcane pulp looks great under restaurant lighting.",
    author: "Rahul Hegde",
    role: "Food Blogger & Event Host",
    initials: "RH",
  },
  {
    text: "Delivery is always on time, which is critical for catering businesses. The material quality remains consistent across orders.",
    author: "Alok Roy",
    role: "Catering Service Lead",
    initials: "AR",
  },
  {
    text: "Our school canteen transitioned completely to GreenEra plates this semester. Great way to teach kids about sustainability.",
    author: "Preeti Saxena",
    role: "School Principal",
    initials: "PS",
  },
  {
    text: "The clamshell boxes retain food crispness without building up excess condensation. A game-changer for burger delivery.",
    author: "Yash Vardhan",
    role: "Cloud Kitchen Franchise Owner",
    initials: "YV",
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
              animation: "testimonial-marquee 240s linear infinite",
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