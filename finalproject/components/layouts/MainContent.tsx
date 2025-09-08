import React from "react";
import { MainContentProps } from "@/types";
import Slider from "@/sections/Slider";
import FoodCarousel from "@/sections/FoodCarousel";
import HeroSection from "@/sections/HeroSection";

const MainContent: React.FC<MainContentProps> = ({ foodItems }) => {
  return (
    <main>
      <div className="pt-24">
        <HeroSection />
      </div>
      <Slider />
      <div className="max-w-7xl mx-auto px-5 py-10">
        <FoodCarousel foodItems={foodItems} />
      </div>
    </main>
  );
};

export default MainContent;
