import React from "react";
import { SectionContainer } from "@/components/layout/SectionContainer";
import { Button } from "@/components/ui/Button";
import { ArrowRight, Scissors, Sparkles } from "lucide-react";

export const GalleryInquiryCTA: React.FC = () => {
  return (
    <SectionContainer bg="wine" padding="md" className="relative overflow-hidden my-8 rounded-2xl shadow-xl">
      <div className="relative z-10 max-w-3xl mx-auto text-center flex flex-col items-center">
        <span className="text-[11px] font-sans font-bold tracking-[0.25em] text-gold uppercase mb-2">
          CUSTOM COMMISSIONS
        </span>

        <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3">
          Have a Design in Mind?
        </h2>

        <p className="font-sans text-xs sm:text-sm text-cream-dark/90 leading-relaxed mb-6 max-w-xl">
          Bring your reference photo (saved styles, fabric swatches) and your unstitched fabric to our Korattur shop. We will review your pattern specifications and cut requirements.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <Button
            href="/services"
            variant="gold"
            size="md"
            icon={<ArrowRight className="w-4 h-4" />}
          >
            Explore Tailoring Services
          </Button>
          <div className="inline-flex items-center gap-2 px-4 py-2.5 rounded-md bg-white/10 text-white border border-white/20 text-xs font-medium">
            <Scissors className="w-3.5 h-3.5 text-gold" />
            <span>Korattur Main Shop • Fabric & Design Consultation</span>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};
