import React from "react";

const marqueeItems = [
  "Made from Sugarcane Bagasse Fiber",
  "100% Compostable",
  "Food-Grade Certified",
  "Heat-Resistant",
  "Oil- & Leak-Proof",
  "Made in India"
];

const MarqueeBanner = () => {
  // A single copy of the items list
  const listFragment = (
    <div className="flex items-center gap-10 md:gap-16 pr-10 md:pr-16 shrink-0">
      {marqueeItems.map((item, index) => (
        <span
          key={index}
          className="flex items-center gap-2 md:gap-3 text-white text-[12px] md:text-[14px] font-semibold tracking-wider uppercase whitespace-nowrap"
        >
          <span className="text-[#a4c28a]">✦</span>
          {item}
        </span>
      ))}
    </div>
  );

  return (
    <div className="w-full bg-[#1e3d2f] py-3.5 md:py-4 overflow-hidden select-none border-y border-[#2d5241]/30">
      <div className="flex w-max animate-marquee">
        {listFragment}
        {listFragment}
        {listFragment}
        {listFragment}
      </div>
    </div>
  );
};

export default MarqueeBanner;
