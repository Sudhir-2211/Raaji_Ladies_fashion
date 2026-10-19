import React from "react";
import { SectionContainer } from "@/components/layout/SectionContainer";
import { aboutHighlights } from "@/data/aboutData";
import { Reveal } from "@/components/ui/Reveal";

export const AboutHighlights: React.FC = () => {
  return (
    <SectionContainer bg="white" padding="sm" className="border-b border-rose-soft/40">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {aboutHighlights.map((item, index) => (
            <Reveal key={item.num} delay={index * 100}>
              <div
                className="bg-cream/50 rounded-2xl p-6 border border-rose-soft/70 shadow-2xs flex flex-col justify-between h-full hover:-translate-y-1 hover:shadow-card-hover transition-all duration-300"
              >
                <div className="text-[10px] font-sans font-bold tracking-widest text-rose uppercase mb-2">
                  {item.num}
                </div>
                <div>
                  <div className="font-serif text-2xl sm:text-3xl font-bold text-charcoal mb-1 tracking-tight">
                    {item.metric}
                  </div>
                  <div className="font-sans text-xs text-charcoal-muted font-medium">
                    {item.label}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </SectionContainer>
  );
};
