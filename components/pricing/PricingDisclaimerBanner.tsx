import React from "react";
import { SectionContainer } from "@/components/layout/SectionContainer";
import { Info } from "lucide-react";

export const PricingDisclaimerBanner: React.FC = () => {
  return (
    <SectionContainer bg="blush" padding="sm" className="border-b border-rose-soft/40">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white/90 border border-wine/20 rounded-2xl p-5 sm:p-6 shadow-xs flex flex-col sm:flex-row items-start gap-4">
          <div className="w-10 h-10 rounded-full bg-cream border border-wine/20 flex items-center justify-center text-wine shrink-0">
            <Info className="w-5 h-5" />
          </div>
          <div className="flex-1">
            <h2 className="font-serif text-base sm:text-lg font-bold text-charcoal mb-1.5">
              Stitching estimates are finalized in-shop after reviewing the fabric, design, and construction requirements.
            </h2>
            <p className="font-sans text-xs sm:text-sm text-charcoal-light leading-relaxed">
              Because all garments are tailored from patron-provided fabrics, final charges depend on variables including garment silhouette, pattern cut, neckline shaping, inner lining requirements, fabric weight and delicacy, and detailing elements.
            </p>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};
