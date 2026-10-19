import React from "react";
import { SectionContainer } from "@/components/layout/SectionContainer";
import { journeyStagesList } from "@/data/aboutData";
import { Package, Ruler, FileText, Scissors, CheckCircle2 } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

export const AboutJourney: React.FC = () => {
  const icons = [
    <Package key={0} className="w-5 h-5 text-wine" />,
    <Ruler key={1} className="w-5 h-5 text-wine" />,
    <FileText key={2} className="w-5 h-5 text-wine" />,
    <Scissors key={3} className="w-5 h-5 text-wine" />,
    <CheckCircle2 key={4} className="w-5 h-5 text-wine" />,
  ];

  return (
    <SectionContainer bg="blush" padding="md" className="border-b border-rose-soft/40">
      <div className="max-w-6xl mx-auto">
        <Reveal delay={0}>
          <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
            <span className="text-[11px] font-sans font-bold tracking-[0.25em] text-rose uppercase block mb-2">
              STRUCTURED PROCESS
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal mb-4">
              The Five-Stage Tailoring Journey
            </h2>
            <p className="font-sans text-xs sm:text-sm text-charcoal-light leading-relaxed">
              Every customer fabric follows the same five-stage process from initial consultation to final garment handover.
            </p>
          </div>
        </Reveal>

        {/* 5-Step Desktop Grid, Stacked on Mobile */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-5">
          {journeyStagesList.map((stage, idx) => (
            <Reveal key={stage.num} delay={idx * 100}>
              <div
                className="bg-white rounded-2xl p-5 border border-rose-soft/70 shadow-2xs flex flex-col justify-between h-full hover:-translate-y-1 hover:shadow-card transition-all duration-300"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-serif text-xl font-bold text-wine/80">
                      {stage.num}
                    </span>
                    <div className="w-8 h-8 rounded-lg bg-cream border border-rose-soft flex items-center justify-center">
                      {icons[idx]}
                    </div>
                  </div>
                  <h3 className="font-serif text-base font-bold text-charcoal mb-2">
                    {stage.title}
                  </h3>
                  <p className="font-sans text-xs text-charcoal-light leading-relaxed">
                    {stage.description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </SectionContainer>
  );
};
