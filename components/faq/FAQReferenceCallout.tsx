import React from "react";
import { SectionContainer } from "@/components/layout/SectionContainer";
import { Button } from "@/components/ui/Button";
import { ArrowRight, Scissors } from "lucide-react";

export const FAQReferenceCallout: React.FC = () => {
  return (
    <SectionContainer
      bg="wine"
      padding="md"
      className="relative overflow-hidden my-8 rounded-2xl shadow-xl max-w-5xl mx-auto"
    >
      <div className="relative z-10 max-w-2xl mx-auto text-center flex flex-col items-center">
        <span className="text-[10px] font-sans font-bold tracking-[0.25em] text-gold uppercase mb-2">
          DESIGN CONSULTATION
        </span>

        <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 leading-snug">
          Have a Design Reference?
        </h2>

        <p className="font-sans text-xs sm:text-sm text-cream-dark/90 leading-relaxed mb-6">
          Bring a saved reference image or Gallery sample reference together with your customer-supplied fabric when visiting our Korattur shop for design review and pricing discussion.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <Button
            href="/gallery"
            variant="gold"
            size="md"
            icon={<ArrowRight className="w-4 h-4" />}
          >
            Browse Design Samples →
          </Button>

          <Button
            href="/services"
            variant="outline"
            size="md"
            className="border-white/30 text-white hover:bg-white/10"
          >
            View Tailoring Services →
          </Button>
        </div>
      </div>
    </SectionContainer>
  );
};
