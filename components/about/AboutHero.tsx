import React from "react";
import { SectionContainer } from "@/components/layout/SectionContainer";
import { Badge } from "@/components/ui/Badge";
import { Scissors, Sparkles, MapPin } from "lucide-react";

export const AboutHero: React.FC = () => {
  return (
    <SectionContainer bg="cream" padding="md" className="border-b border-rose-soft/40">
      <div className="max-w-5xl mx-auto flex flex-col items-center text-center">
        <Badge variant="wine" className="mb-4">
          ABOUT RAAJI LADIES FASHION
        </Badge>

        <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl font-medium leading-tight text-charcoal mb-5 max-w-4xl">
          Tailoring Built Around Your Fabric, Your Design &amp; Your Measurements
        </h1>

        <p className="font-sans text-sm sm:text-base md:text-lg text-charcoal-light max-w-3xl leading-relaxed mb-8">
          Raaji Ladies Fashion is a ladies tailoring shop in Korattur, Chennai. We provide tailoring services based on customer-supplied fabrics, individual measurements, and design requirements through a structured process from paper pattern drafting to final finishing.
        </p>

        {/* Location & Craftsmanship Anchor */}
        <div className="inline-flex flex-wrap items-center justify-center gap-4 sm:gap-6 pt-4 border-t border-rose-soft/60 text-xs font-medium text-charcoal-muted mb-10">
          <div className="flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-wine" />
            <span>Korattur, Chennai</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Scissors className="w-3.5 h-3.5 text-wine" />
            <span>Customer-Supplied Fabrics</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-wine" />
            <span>Individual Paper Pattern Drafting</span>
          </div>
        </div>

        {/* Editorial Visual Slot with Photography */}
        <div className="w-full max-w-4xl h-80 sm:h-96 md:h-[450px] rounded-2xl border border-rose-soft/80 shadow-xs relative overflow-hidden flex items-center justify-center mt-4">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img 
            src="/images/about/about-workshop-drafting.jpg" 
            alt="Tailoring cutting table with blouse paper pattern sloper, measuring tape, shears, and silk fabric" 
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-charcoal/20"></div>
          <div className="relative z-10 bg-white/95 backdrop-blur-sm rounded-xl p-6 sm:p-10 flex flex-col items-center justify-center text-center shadow-lg border border-white/50 max-w-[90%] sm:max-w-md m-4">
            <div className="w-12 h-12 rounded-full bg-cream border border-rose-soft/60 flex items-center justify-center text-wine mb-3 shadow-2xs">
              <Scissors className="w-6 h-6" />
            </div>
            <span className="font-serif text-lg sm:text-xl font-bold text-charcoal mb-1">
              Tailoring Workshop &amp; Fabric Drafting
            </span>
            <span className="font-sans text-[10px] sm:text-xs text-charcoal-muted tracking-widest uppercase mt-1">
              Korattur, Chennai • Established 2005
            </span>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};
