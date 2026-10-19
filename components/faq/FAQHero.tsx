import React from "react";
import { SectionContainer } from "@/components/layout/SectionContainer";
import { Badge } from "@/components/ui/Badge";
import { HelpCircle } from "lucide-react";

export const FAQHero: React.FC = () => {
  return (
    <SectionContainer bg="cream" padding="md" className="border-b border-rose-soft/40">
      <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
        <Badge variant="wine" className="mb-4">
          FREQUENTLY ASKED QUESTIONS • RAAJI LADIES FASHION
        </Badge>

        <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl font-medium leading-tight text-charcoal mb-4">
          Questions About Ladies Tailoring?
        </h1>

        <p className="font-sans text-sm sm:text-base md:text-lg text-charcoal-light max-w-2xl leading-relaxed mb-6">
          Find answers about bringing your own fabric, design references, tailoring categories, fabric requirements, pricing discussions, and the stitching journey at our Korattur shop.
        </p>

        {/* Subtle Decorative Element */}
        <div className="flex items-center gap-3 text-xs text-charcoal-muted pt-2 border-t border-rose-soft/60">
          <HelpCircle className="w-4 h-4 text-wine" />
          <span className="font-medium tracking-wide">
            Customer-Supplied Fabrics • Custom Drafting • Transparent Consultations
          </span>
        </div>
      </div>
    </SectionContainer>
  );
};
