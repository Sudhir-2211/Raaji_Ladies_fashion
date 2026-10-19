import React from "react";
import { SectionContainer } from "@/components/layout/SectionContainer";
import { Badge } from "@/components/ui/Badge";
import { Scissors, Sparkles, CheckCircle2 } from "lucide-react";
import Link from "next/link";

export const ServicesHero: React.FC = () => {
  const jumpLinks = [
    { label: "Bridal Wear", href: "#bridal" },
    { label: "Aari Work", href: "#aari-work" },
    { label: "Embroidery", href: "#embroidery" },
    { label: "Scallop & Cutwork", href: "#scallop" },
    { label: "Designer Tops", href: "#designer-blouses" },
  ];

  return (
    <SectionContainer bg="cream" padding="md" className="border-b border-rose-soft/40">
      <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
        <Badge variant="wine" className="mb-4">
          BESPOKE TAILORING SERVICES • KORATTUR, CHENNAI
        </Badge>

        <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl font-medium leading-tight text-charcoal mb-4">
          Precision Ladies Tailoring for Every Fabric & Occasion
        </h1>

        <p className="font-sans text-sm sm:text-base md:text-lg text-charcoal-light max-w-2xl leading-relaxed mb-8">
          Bring your own cherished silks, cottons, georgettes, and festive dress materials to our Korattur shop. We craft custom blouses, salwar suits, lehengas, and everyday wear with precision cut and artisanal finish.
        </p>

        {/* Quick Category Jump Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
          {jumpLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="px-3.5 py-1.5 rounded-full text-xs font-medium text-charcoal bg-white border border-rose-soft/80 hover:border-wine hover:text-wine hover:bg-blush/40 transition-colors shadow-sm"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Factual Value Strip */}
        <div className="inline-flex flex-wrap items-center justify-center gap-4 sm:gap-6 pt-4 border-t border-rose-soft/60 text-xs font-medium text-charcoal-muted">
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-wine" />
            <span>Bring Your Own Fabric</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Scissors className="w-3.5 h-3.5 text-wine" />
            <span>Paper Pattern Drafting</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-wine" />
            <span>Clean Internal Seam Margins</span>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};
