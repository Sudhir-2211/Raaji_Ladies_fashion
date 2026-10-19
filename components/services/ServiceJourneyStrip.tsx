import React from "react";
import { SectionContainer } from "@/components/layout/SectionContainer";
import { Package, FileText, Compass, Scissors, CheckCircle2 } from "lucide-react";

export const ServiceJourneyStrip: React.FC = () => {
  const steps = [
    {
      num: "01",
      title: "Fabric Handover & Consult",
      desc: "Inspection of customer fabric and discussion of neckline and pattern preferences.",
      icon: <Package className="w-5 h-5" />,
    },
    {
      num: "02",
      title: "Anatomical Measurement",
      desc: "Taking customer measurements or taking measurements from a reference sample garment.",
      icon: <FileText className="w-5 h-5" />,
    },
    {
      num: "03",
      title: "Paper Pattern Drafting",
      desc: "Individual paper pattern drafting tailored to customer measurements and fabric motifs.",
      icon: <Compass className="w-5 h-5" />,
    },
    {
      num: "04",
      title: "Artisanal Stitching",
      desc: "Garment assembly, neckline piping, and reinforced seam construction.",
      icon: <Scissors className="w-5 h-5" />,
    },
    {
      num: "05",
      title: "Final Finishing & Handover",
      desc: "Final pressing and quality check before the completed garment is handed over.",
      icon: <CheckCircle2 className="w-5 h-5" />,
    },
  ];

  return (
    <SectionContainer bg="blush" padding="md" className="border-b border-rose-soft/40">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-8">
          <span className="text-[10px] font-sans font-bold tracking-[0.25em] text-rose uppercase block mb-1">
            THE TAILORING PROCESS
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-charcoal mb-2">
            Our 5-Step Customer Fabric Journey
          </h2>
          <p className="font-sans text-xs sm:text-sm text-charcoal-light leading-relaxed">
            Every garment follows a structured tailoring process from unstitched yardage to final handover.
          </p>
        </div>

        {/* Desktop 5-Column Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {steps.map((step) => (
            <div
              key={step.num}
              className="bg-white rounded-xl p-4 sm:p-5 border border-rose-soft/70 shadow-sm flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="font-serif text-xl font-bold text-wine">
                    {step.num}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-cream border border-wine/15 flex items-center justify-center text-wine">
                    {step.icon}
                  </div>
                </div>

                <h3 className="font-serif text-sm font-bold text-charcoal mb-1.5 leading-snug">
                  {step.title}
                </h3>
              </div>

              <p className="text-[11px] text-charcoal-muted leading-relaxed font-sans pt-2 border-t border-rose-soft/40">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </SectionContainer>
  );
};
