import { FoodItem } from "@/types";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { FOOD_ITEMS } from "@/data/constants";

const Menu = () => {
  return (
    <section className="mt-[150px] mb-6">
      <h2 className="text-2xl font-bold text-center mb-8">
        Thực đơn ngày hôm nay:
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-[250px]">
        {FOOD_ITEMS.map((item: FoodItem, index: number) => (
          <div
            key={index}
            className={`relative group rounded-2xl overflow-hidden shadow-lg border-4 border-orange-200 bg-gradient-to-br from-orange-50 to-orange-100 
            ${index % 5 === 0 ? "sm:col-span-2 sm:row-span-2" : ""}
            ${index % 7 === 0 ? "lg:col-span-2" : ""}
          `}
          >
            <Image
              src={item.image}
              alt={item.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4 text-left">
              <h4 className="text-2xl font-bold text-white drop-shadow-md">
                {item.title}
              </h4>
              <p className="text-sm text-gray-200 mb-3">{item.description}</p>
              <Button
                className="bg-gradient-to-r from-orange-400 to-orange-600 text-white font-bold hover:scale-105 transition-transform duration-300"
                type="button"
              >
                Xem thực đơn
              </Button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Menu;
