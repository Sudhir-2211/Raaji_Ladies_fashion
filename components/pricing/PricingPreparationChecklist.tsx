import React from "react";
import { SectionContainer } from "@/components/layout/SectionContainer";
import { preparationSteps } from "@/data/pricingData";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const PricingPreparationChecklist: React.FC = () => {
  return (
    <SectionContainer bg="blush" padding="md" className="border-b border-rose-soft/40">
      <div className="max-w-6xl mx-auto">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="text-[11px] font-sans font-bold tracking-[0.25em] text-rose uppercase block mb-2">
            SHOP VISIT PREPARATION
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal mb-4">
            What to Bring for Your Tailoring Consultation
          </h2>
          <p className="font-sans text-sm sm:text-base text-charcoal-light leading-relaxed">
            Bringing your materials and design references ensures an efficient in-shop consultation and accurate pricing discussion.
          </p>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {preparationSteps.map((step) => (
            <div
              key={step.stepNum}
              className="bg-white rounded-2xl p-6 border border-rose-soft/70 shadow-xs flex flex-col justify-between"
            >
              <div>
                <span className="font-serif text-2xl font-bold text-wine/80 block mb-3">
                  {step.stepNum}
                </span>
                <h3 className="font-serif text-base font-bold text-charcoal mb-2">
                  {step.title}
                </h3>
                <p className="font-sans text-xs sm:text-sm text-charcoal-light leading-relaxed">
                  {step.description}
                </p>
              </div>

              {step.stepNum === "01" && (
                <div className="mt-4 pt-3 border-t border-rose-soft/40">
                  <Link
                    href="/services#meterage-guide"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-wine hover:text-wine-dark transition-colors"
                  >
                    <span>View Meterage Guide</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </SectionContainer>
  );
};
