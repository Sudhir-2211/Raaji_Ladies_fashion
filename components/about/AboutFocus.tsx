import React from "react";
import { SectionContainer } from "@/components/layout/SectionContainer";
import { tailoringFocusList } from "@/data/aboutData";
import { Layers, Ruler, FileText, CheckCircle2 } from "lucide-react";

export const AboutFocus: React.FC = () => {
  const icons = [
    <Layers key={0} className="w-5 h-5 text-wine" />,
    <Ruler key={1} className="w-5 h-5 text-wine" />,
    <FileText key={2} className="w-5 h-5 text-wine" />,
    <CheckCircle2 key={3} className="w-5 h-5 text-wine" />,
  ];

  return (
    <SectionContainer bg="white" padding="md" className="border-b border-rose-soft/40">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <span className="text-[11px] font-sans font-bold tracking-[0.25em] text-rose uppercase block mb-2">
            FOUR PILLARS
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal mb-4">
            Our Tailoring Focus
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {tailoringFocusList.map((item, idx) => (
            <div
              key={item.num}
              className="bg-cream/50 rounded-2xl p-6 border border-rose-soft/70 shadow-2xs flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[11px] font-sans font-bold tracking-widest text-rose uppercase">
                    {item.num}
                  </span>
                  <div className="w-9 h-9 rounded-xl bg-white border border-rose-soft flex items-center justify-center shadow-2xs">
                    {icons[idx]}
                  </div>
                </div>
                <h3 className="font-serif text-lg font-bold text-charcoal mb-2.5">
                  {item.title}
                </h3>
                <p className="font-sans text-xs sm:text-sm text-charcoal-light leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionContainer>
  );
};
