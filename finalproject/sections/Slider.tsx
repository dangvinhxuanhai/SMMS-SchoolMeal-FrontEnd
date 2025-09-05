"use client";
import React, { useEffect, useRef, useState } from "react";
import { slides } from "@/data/constants";
import gsap from "gsap";

export default function MarqueeGallery() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const tl = useRef<gsap.core.Tween | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const marqueeWidth = containerRef.current.scrollWidth / 2;

    tl.current = gsap.to(containerRef.current, {
      x: -marqueeWidth,
      duration: 20,
      ease: "none",
      repeat: -1,
    });

    return () => {
      tl.current?.kill();
    };
  }, []);

  useEffect(() => {
    if (!tl.current) return;
    if (hoveredIndex !== null) {
      tl.current.pause();
    } else {
      tl.current.resume();
    }
  }, [hoveredIndex]);

  return (
    <section className="relative overflow-hidden py-10">
      <div ref={containerRef} className="flex gap-6 w-max">
        {[...slides, ...slides].map((slide, index) => (
          <div
            key={index}
            className={`w-80 h-60 flex-shrink-0 rounded-xl overflow-hidden relative cursor-pointer
              transition-all duration-500 ease-out
              ${hoveredIndex === index ? "scale-105 shadow-2xl" : ""}
            `}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <img
              src={slide.image}
              className={`w-full h-full object-cover transition-transform duration-700
                ${hoveredIndex === index ? "scale-110" : "scale-100"}
              `}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
