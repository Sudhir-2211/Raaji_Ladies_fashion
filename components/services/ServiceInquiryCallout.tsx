import React from "react";
import { SectionContainer } from "@/components/layout/SectionContainer";
import { Button } from "@/components/ui/Button";
import { ArrowRight, Scissors } from "lucide-react";

export const ServiceInquiryCallout: React.FC = () => {
  return (
    <SectionContainer bg="wine" padding="md" className="relative overflow-hidden my-8 rounded-2xl shadow-xl max-w-5xl mx-auto">
      <div className="relative z-10 max-w-2xl mx-auto text-center flex flex-col items-center">
        <span className="text-[10px] font-sans font-bold tracking-[0.25em] text-gold uppercase mb-2">
          BESPOKE COMMISSIONS
        </span>

        <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 leading-snug">
          Have a Custom Reference or Photo?
        </h2>

        <p className="font-sans text-xs sm:text-sm text-cream-dark/90 leading-relaxed mb-6">
          If you have a design photo or saved pattern reference, bring it along with your unstitched fabric to our Korattur shop. We will review pattern feasibility and measurements during your visit.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <Button
            href="/gallery"
            variant="gold"
            size="md"
            icon={<ArrowRight className="w-4 h-4" />}
          >
            Explore Gallery Designs
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
