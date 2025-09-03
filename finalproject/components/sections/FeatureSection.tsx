import React from "react";
import { FeatureSectionProps, Feature } from "@/components/types";

const FeatureSection: React.FC<FeatureSectionProps> = ({ features }) => {
  return (
    <section id="features" className="mb-20 text-center">
      <h2 className="text-5xl font-bold text-orange-900 mb-4 drop-shadow-md">
        Bé Có Gì Vui Ở SchoolMeal?
      </h2>
      <p className="text-xl text-orange-800 mb-12">
        Những tính năng tuyệt vời giúp bữa ăn của bé luôn thú vị!
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature: Feature, index: number) => (
          <div
            key={index}
            className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-3xl p-8 text-center hover:transform hover:-translate-y-4 hover:scale-105 transition-all duration-300 shadow-xl border-4 border-orange-200 border-b-8 border-b-orange-400 hover:border-orange-400"
          >
            <div
              className="text-6xl mb-5 drop-shadow-lg"
              role="img"
              aria-label={feature.title}
            >
              {feature.icon}
            </div>
            <h3 className="text-2xl font-bold mb-3 text-orange-900">
              {feature.title}
            </h3>
            <p className="text-orange-800">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeatureSection;
