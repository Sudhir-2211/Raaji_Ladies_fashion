import React from "react";
import { SectionContainer } from "@/components/layout/SectionContainer";
import { processVisualSteps } from "@/data/aboutData";
import { Scissors } from "lucide-react";

export const AboutProcessVisual: React.FC = () => {
  return (
    <SectionContainer bg="white" padding="md" className="border-b border-rose-soft/40">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <span className="text-[11px] font-sans font-bold tracking-[0.25em] text-rose uppercase block mb-2">
            THE TAILORING PROCESS
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal mb-4">
            From Fabric to Finished Garment
          </h2>
        </div>

        {/* 5-Step Process Sequence */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {processVisualSteps.map((step) => (
            <div
              key={step.stepNum}
              className="bg-cream/40 rounded-2xl border border-rose-soft/70 overflow-hidden shadow-2xs flex flex-col justify-between"
            >
              {/* Structured Visual Reference Slot */}
              <div className="h-32 bg-cream/70 border-b border-rose-soft/60 flex flex-col items-center justify-center p-4 text-center">
                <div className="w-8 h-8 rounded-full bg-white border border-rose-soft flex items-center justify-center text-wine mb-2 shadow-2xs">
                  <Scissors className="w-4 h-4" />
                </div>
                <span className="text-[10px] font-sans font-semibold tracking-wider text-charcoal-muted uppercase">
                  Reference Slot: {step.name}
                </span>
              </div>

              {/* Text Content */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <span className="font-serif text-xs font-bold text-wine/80 block mb-1">
                    STEP {step.stepNum}
                  </span>
                  <h3 className="font-serif text-base font-bold text-charcoal mb-2">
                    {step.name}
                  </h3>
                  <p className="font-sans text-xs text-charcoal-light leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionContainer>
  );
};
