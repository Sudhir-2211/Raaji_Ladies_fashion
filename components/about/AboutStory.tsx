import React from "react";
import { SectionContainer } from "@/components/layout/SectionContainer";
import { Reveal } from "@/components/ui/Reveal";

export const AboutStory: React.FC = () => {
  return (
    <SectionContainer bg="cream" padding="md" className="border-b border-rose-soft/40">
      <div className="max-w-4xl mx-auto">
        <Reveal delay={0}>
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-[11px] font-sans font-bold tracking-[0.25em] text-rose uppercase block mb-2">
              ESTABLISHED 2005
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal mb-4">
              A Ladies Tailoring Shop in Korattur
            </h2>
          </div>
        </Reveal>

        <Reveal delay={200}>
          <div className="bg-white rounded-2xl p-8 sm:p-12 border border-rose-soft/70 shadow-xs space-y-6 text-sm sm:text-base text-charcoal-light font-sans leading-relaxed transition-all duration-300 hover:shadow-card">
            <p>
              Established in 2005, Raaji Ladies Fashion is a ladies tailoring shop in Korattur, Chennai. The business provides tailoring services based on customer-supplied fabrics, individual measurements, and design requirements.
            </p>
            <p>
              Founded by R. Jayaprakash, with J. Muthulakshmi as Proprietor, the tailoring process includes fabric consultation, measurement, paper pattern drafting, stitching, and final finishing.
            </p>
            <p>
              Since 2005, Raaji Ladies Fashion has served more than 10,000 customers through its tailoring services.
            </p>
          </div>
        </Reveal>
      </div>
    </SectionContainer>
  );
};
