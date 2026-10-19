import React from "react";
import { SectionContainer } from "@/components/layout/SectionContainer";
import { pricingFactors } from "@/data/pricingData";
import {
  Scissors,
  Sparkles,
  Layers,
  Shirt,
  Palette,
  Maximize2,
} from "lucide-react";

export const PricingFactors: React.FC = () => {
  const factorIcons = [
    <Scissors key={0} className="w-5 h-5 text-wine" />,
    <Sparkles key={1} className="w-5 h-5 text-wine" />,
    <Layers key={2} className="w-5 h-5 text-wine" />,
    <Shirt key={3} className="w-5 h-5 text-wine" />,
    <Palette key={4} className="w-5 h-5 text-wine" />,
    <Maximize2 key={5} className="w-5 h-5 text-wine" />,
  ];

  return (
    <SectionContainer bg="white" padding="md" className="border-b border-rose-soft/40">
      <div className="max-w-6xl mx-auto">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="text-[11px] font-sans font-bold tracking-[0.25em] text-rose uppercase block mb-2">
            CRAFTSMANSHIP DETERMINANTS
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal mb-4">
            Factors That Influence Stitching Charges
          </h2>
          <p className="font-sans text-sm sm:text-base text-charcoal-light leading-relaxed">
            Because each garment is individually drafted from customer-supplied fabrics, estimates reflect the time, cutting care, and craftsmanship required for your selected design.
          </p>
        </div>

        {/* 6 Factors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pricingFactors.map((factor, idx) => (
            <div
              key={idx}
              className="bg-cream/60 rounded-2xl p-6 border border-rose-soft/60 shadow-xs flex flex-col justify-start"
            >
              <div className="w-10 h-10 rounded-xl bg-white border border-rose-soft flex items-center justify-center mb-4 shrink-0 shadow-2xs">
                {factorIcons[idx]}
              </div>
              <h3 className="font-serif text-lg font-bold text-charcoal mb-2">
                {factor.title}
              </h3>
              <p className="font-sans text-xs sm:text-sm text-charcoal-light leading-relaxed">
                {factor.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </SectionContainer>
  );
};
