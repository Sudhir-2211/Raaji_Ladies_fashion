"use client";

import React from "react";
import { SectionContainer } from "@/components/layout/SectionContainer";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { dressMakingStages } from "@/data/homeData";
import { Package, FileText, Compass, Scissors, CheckCircle2 } from "lucide-react";
import { clsx } from "clsx";
import { Reveal } from "@/components/ui/Reveal";

const stageIconMap: Record<string, React.ReactNode> = {
  Package: <Package className="w-5 h-5" />,
  FileText: <FileText className="w-5 h-5" />,
  Compass: <Compass className="w-5 h-5" />,
  Scissors: <Scissors className="w-5 h-5" />,
  CheckCircle2: <CheckCircle2 className="w-5 h-5" />,
};

export const DressMakingJourney: React.FC = () => {
  return (
    <SectionContainer bg="blush" padding="lg" className="border-b border-rose-soft/40 relative overflow-hidden">
      <Reveal delay={0}>
        <SectionHeading
          eyebrow="STEP-BY-STEP CRAFTSMANSHIP"
          title="The Bespoke Dress-Making Journey"
          description="From your raw, unstitched fabric to a carefully crafted custom garment."
          align="center"
        />
      </Reveal>

      {/* Desktop Horizontal Process Flowchart */}
      <div className="hidden lg:block relative my-8">
        {/* Progress Line */}
        <div className="absolute top-1/4 left-10 right-10 h-0.5 bg-rose-soft/80 z-0 -translate-y-1/2">
          <div className="h-full bg-gold/50 w-full" />
        </div>

        {/* 5 Stages Grid */}
        <div className="grid grid-cols-5 gap-4 relative z-10">
          {dressMakingStages.map((stage, idx) => {
            return (
              <Reveal key={stage.step} delay={idx * 150}>
                <div
                  className={clsx(
                    "p-5 rounded-xl transition-all duration-300 bg-white border flex flex-col justify-between h-full shadow-card border-rose-soft/60 hover:border-wine/30 hover:-translate-y-1 hover:shadow-card-hover motion-reduce:transform-none"
                  )}
                >
                  <div>
                    {/* Header Row */}
                    <div className="flex items-center justify-between mb-4">
                      <span className="font-serif text-2xl font-bold tracking-tight text-wine/80">
                        {stage.step}
                      </span>
                      <div className="w-9 h-9 rounded-full flex items-center justify-center transition-colors shadow-sm bg-cream text-wine border border-rose-soft">
                        {stageIconMap[stage.iconName]}
                      </div>
                    </div>

                    <span className="text-[10px] font-sans font-semibold tracking-[0.2em] text-rose uppercase block mb-1">
                      {stage.stageName}
                    </span>

                    <h3 className="font-serif text-base font-bold text-charcoal mb-2 leading-snug">
                      {stage.title}
                    </h3>
                  </div>

                  <p className="text-xs text-charcoal-light font-sans leading-relaxed mt-2">
                    {stage.description}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>

      {/* Mobile Vertical Timeline */}
      <div className="block lg:hidden relative ml-2 pl-7 border-l-2 border-wine/20 space-y-6 my-4 pr-1">
        {dressMakingStages.map((stage, idx) => {
          return (
            <Reveal key={stage.step} delay={idx * 150}>
              <div
                className={clsx(
                  "relative p-5 rounded-xl transition-all bg-white border shadow-card border-rose-soft/60 hover:shadow-card-hover hover:border-wine/30"
                )}
              >
                {/* Timeline Bullet */}
                <div
                  className="absolute -left-[39px] top-6 w-5 h-5 rounded-full border-2 border-wine bg-white flex items-center justify-center transition-colors"
                />

                <div className="flex items-center justify-between mb-2 gap-2">
                  <span className="text-[11px] font-serif font-bold text-wine tracking-wide">
                    {stage.step} • {stage.stageName}
                  </span>
                  <div className="text-wine shrink-0">{stageIconMap[stage.iconName]}</div>
                </div>

                <h3 className="font-serif text-lg font-bold text-charcoal mb-1">
                  {stage.title}
                </h3>
                <p className="text-xs text-charcoal-light font-sans leading-relaxed break-words">
                  {stage.description}
                </p>
              </div>
            </Reveal>
          );
        })}
      </div>
    </SectionContainer>
  );
};
