import React from "react";
import { SectionContainer } from "@/components/layout/SectionContainer";
import { meterageGuidelines } from "@/data/servicesData";
import { Ruler, Info } from "lucide-react";

export const FabricMeterageGuide: React.FC = () => {
  return (
    <SectionContainer id="meterage-guide" bg="blush" padding="md" className="border-b border-rose-soft/40 scroll-mt-20">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-8">
          <span className="text-[10px] font-sans font-bold tracking-[0.25em] text-rose uppercase block mb-1">
            FABRIC GUIDELINE REFERENCE
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-charcoal mb-2">
            Bringing Your Own Fabric? Check Meterage Guidelines
          </h2>
          <p className="font-sans text-xs sm:text-sm text-charcoal-light leading-relaxed">
            Ensure sufficient fabric for drafting body margins and custom sleeve cuts by referencing our general meterage guidelines below.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          {meterageGuidelines.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl p-5 border border-rose-soft/70 shadow-sm flex flex-col justify-between"
            >
              <div>
                <div className="w-8 h-8 rounded-lg bg-cream border border-wine/15 flex items-center justify-center text-wine mb-3">
                  <Ruler className="w-4 h-4" />
                </div>
                <h3 className="font-serif text-base font-bold text-charcoal mb-1">
                  {item.garmentType}
                </h3>
                <span className="font-sans text-xs font-bold text-wine tracking-wide block mb-2">
                  {item.guidelineRange}
                </span>
              </div>
              <p className="text-[11px] text-charcoal-muted leading-relaxed font-sans pt-2 border-t border-rose-soft/40">
                {item.notes}
              </p>
            </div>
          ))}
        </div>

        {/* Mandatory Disclaimer Callout */}
        <div className="bg-white/80 border border-wine/20 rounded-xl p-4 flex items-start gap-3 text-xs text-charcoal-light shadow-sm">
          <Info className="w-4 h-4 text-wine shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            <strong className="text-charcoal font-medium">Important Note:</strong>{" "}
            Fabric quantities are approximate guidelines only and may vary depending on garment size, design style, sleeve length, lining requirements, and pattern construction. Our tailors will inspect your fabric in-shop to confirm exact requirements.
          </p>
        </div>
      </div>
    </SectionContainer>
  );
};
