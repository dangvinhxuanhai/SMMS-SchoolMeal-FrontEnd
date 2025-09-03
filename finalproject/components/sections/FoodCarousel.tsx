import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FoodCarouselProps, FoodItem } from "@/components/types";

const FoodCarousel: React.FC<FoodCarouselProps> = ({ foodItems }) => {
  const [currentCarouselIndex, setCurrentCarouselIndex] = useState<number>(0);

  const handlePrevCarousel = (): void => {
    setCurrentCarouselIndex((prev) => Math.max(prev - 1, 0));
  };

  const handleNextCarousel = (): void => {
    setCurrentCarouselIndex((prev) => Math.min(prev + 1, foodItems.length - 1));
  };

  const handleImageError = (
    event: React.SyntheticEvent<HTMLImageElement, Event>
  ): void => {
    const target = event.target as HTMLImageElement;
    target.src =
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYGD4AQAA5gB4C9L5wgAAAABJRU5ErkJggg==";
  };

  return (
    <section id="food-gallery" className="mb-20 text-center">
      <h2 className="text-5xl font-bold text-orange-900 mb-4 drop-shadow-md">
        Món Ngon Mỗi Ngày
      </h2>
      <p className="text-xl text-orange-800 mb-12">
        Khám phá thực đơn đầy màu sắc và bổ dưỡng cho bé!
      </p>
      <div className="relative bg-gradient-to-br from-orange-50 to-orange-100 rounded-3xl p-5 shadow-2xl border-4 border-orange-200 overflow-hidden">
        <div className="flex transition-transform duration-500 ease-in-out">
          {foodItems.map((item: FoodItem, index: number) => (
            <div
              key={index}
              className="w-full md:w-1/3 flex-shrink-0 p-5 text-center"
              style={{
                transform: `translateX(-${currentCarouselIndex * 100}%)`,
              }}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-48 object-cover rounded-2xl shadow-lg border-4 border-orange-200 mb-4"
                onError={handleImageError}
              />
              <h4 className="text-2xl font-bold text-orange-900 mb-3">
                {item.title}
              </h4>
              <p className="text-orange-800 mb-4">{item.description}</p>
              <Button
                className="bg-gradient-to-r from-orange-400 to-orange-600 text-white font-bold hover:scale-105 transition-transform duration-300"
                type="button"
              >
                Xem thực đơn
              </Button>
            </div>
          ))}
        </div>

        {/* Carousel Controls */}
        <div className="absolute inset-y-0 left-0 right-0 flex justify-between items-center px-3 pointer-events-none">
          <Button
            onClick={handlePrevCarousel}
            className="pointer-events-auto bg-gradient-to-r from-orange-400 to-orange-600 text-white rounded-full w-12 h-12 p-0 hover:scale-110 hover:shadow-xl transition-all duration-300 border-2 border-orange-600"
            disabled={currentCarouselIndex === 0}
            type="button"
            aria-label="Previous food item"
          >
            <ChevronLeft size={24} />
          </Button>
          <Button
            onClick={handleNextCarousel}
            className="pointer-events-auto bg-gradient-to-r from-orange-400 to-orange-600 text-white rounded-full w-12 h-12 p-0 hover:scale-110 hover:shadow-xl transition-all duration-300 border-2 border-orange-600"
            disabled={currentCarouselIndex === foodItems.length - 1}
            type="button"
            aria-label="Next food item"
          >
            <ChevronRight size={24} />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FoodCarousel;
