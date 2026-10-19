import React from "react";
import { SectionContainer } from "@/components/layout/SectionContainer";
import { Badge } from "@/components/ui/Badge";
import { Sparkles } from "lucide-react";

export interface GalleryHeroProps {
  totalCount: number;
}

export const GalleryHero: React.FC<GalleryHeroProps> = ({ totalCount }) => {
  return (
    <SectionContainer bg="cream" padding="md" className="border-b border-rose-soft/40">
      <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
        <Badge variant="wine" className="mb-4">
          TAILORING PORTFOLIO & WORK ARCHIVE
        </Badge>

        <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl font-medium leading-tight text-charcoal mb-4">
          Our Craftsmanship in Every Stitch
        </h1>

        <p className="font-sans text-sm sm:text-base md:text-lg text-charcoal-light max-w-2xl leading-relaxed mb-6">
          Browse sample garment patterns and tailored silhouettes drafted from patron-supplied fabrics at our Korattur shop. Explore design cuts, neckline patterns, and seam finishes.
        </p>

        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-rose-soft text-xs font-medium text-charcoal-muted shadow-sm">
          <Sparkles className="w-3.5 h-3.5 text-gold-dark" />
          <span>Gallery Preview • Design Pattern Samples</span>
        </div>
      </div>
    </SectionContainer>
  );
};
