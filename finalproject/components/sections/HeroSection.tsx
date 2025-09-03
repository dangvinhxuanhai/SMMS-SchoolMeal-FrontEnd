"use client";
import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { slides } from "../../data/constants";

export const HeroSection: React.FC = () => {
  const plugin = React.useRef(
    Autoplay({
      delay: 2000,
      stopOnInteraction: true,
    })
  );

  return (
    <section className="mb-16">
      <Carousel
        plugins={[plugin.current]}
        className="w-full max-w-6xl mx-auto"
        opts={{ loop: true, align: "start" }}
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
      >
        <CarouselContent>
          {slides.map((slide, index) => (
            <CarouselItem key={index}>
              <div className="flex flex-col lg:flex-row items-center justify-between bg-gradient-to-r from-orange-50 to-orange-100 rounded-3xl p-10 shadow-2xl border-4 border-orange-200">
                <div className="lg:w-1/2 mb-8 lg:mb-0">
                  <h1 className="text-5xl lg:text-6xl font-bold text-orange-900 mb-6 leading-tight">
                    {slide.title}{" "}
                    <span className="text-orange-600 drop-shadow-md">
                      {slide.subtitle}
                    </span>
                  </h1>
                  <p className="text-xl text-orange-800 mb-8">
                    {slide.description}
                  </p>
                  <button
                    type="button"
                    className="bg-gradient-to-r from-orange-400 to-orange-600 hover:from-orange-600 hover:to-red-600 text-white font-bold text-lg px-8 py-4 rounded-full hover:scale-105 hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
                  >
                    Khám phá ngay!
                  </button>
                </div>
                <div className="lg:max-w-fit text-center">
                  <img
                    src={slide.image}
                    className="w-full h-auto rounded-2xl shadow-xl border-4 border-orange-200"
                  />
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  );
};

export default HeroSection;
