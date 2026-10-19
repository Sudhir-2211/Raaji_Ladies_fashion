import React from "react";
import Link from "next/link";
import { PricingCategoryItem } from "@/data/pricingData";
import { Check, Layers, Sparkles } from "lucide-react";

interface PricingCardProps {
  item: PricingCategoryItem;
}

export const PricingCard: React.FC<PricingCardProps> = ({ item }) => {
  return (
    <article
      id={item.id}
      className="group scroll-mt-24 bg-white rounded-2xl border border-rose-soft/70 shadow-xs hover:shadow-card-hover hover:border-wine/30 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between p-6 sm:p-8"
    >
      <div>
        {/* Header Badges */}
        <div className="flex items-center justify-between gap-2 mb-3">
          <span className="text-[11px] font-sans font-bold tracking-[0.2em] text-rose uppercase">
            {item.categoryNum}
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cream border border-rose-soft text-[11px] font-medium text-wine">
            <span className="w-1.5 h-1.5 rounded-full bg-gold" />
            {item.pricingStatus}
          </span>
        </div>

        {/* Title & Subtitle */}
        <h3 className="font-serif text-2xl sm:text-3xl font-bold text-charcoal mb-2 group-hover:text-wine transition-colors duration-300">
          {item.title}
        </h3>
        <p className="font-sans text-xs sm:text-sm font-medium text-rose mb-4">
          {item.subtitle}
        </p>

        {/* Description */}
        <p className="font-sans text-xs sm:text-sm text-charcoal-light leading-relaxed mb-6">
          {item.description}
        </p>

        {/* Design Considerations */}
        <div className="mb-6 pt-4 border-t border-rose-soft/40">
          <h4 className="font-sans text-xs font-bold uppercase tracking-wider text-charcoal mb-3 flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-wine transition-transform duration-300 group-hover:scale-110 motion-reduce:transition-none" />
            <span>Design & Construction Details</span>
          </h4>
          <ul className="space-y-2.5">
            {item.designConsiderations.map((consideration, idx) => (
              <li key={idx} className="flex items-start gap-2.5 text-xs text-charcoal-light leading-relaxed">
                <Check className="w-3.5 h-3.5 text-wine shrink-0 mt-0.5" />
                <span>{consideration}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Fabric Suitability */}
        <div className="mb-6 p-3.5 bg-cream/70 rounded-xl border border-rose-soft/50 flex items-start gap-2.5 transition-colors duration-300 group-hover:border-rose-soft/80">
          <Layers className="w-4 h-4 text-wine shrink-0 mt-0.5" />
          <div className="text-xs text-charcoal-light leading-relaxed">
            <strong className="text-charcoal font-semibold block mb-0.5">Fabric Suitability:</strong>
            {item.fabricSuitability}
          </div>
        </div>
      </div>

      {/* Footer Consultation Note & Gallery CTA */}
      <div className="pt-5 border-t border-rose-soft/40 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
        <div className="text-[11px] text-charcoal-muted leading-tight">
          Pricing discussed upon in-shop review of fabric, cut & lining choices.
        </div>
        <Link
          href={item.galleryDeepLink}
          className="inline-flex items-center justify-center px-4 py-2.5 rounded-xl text-xs font-semibold text-white bg-wine hover:bg-wine-dark transition-colors shadow-xs shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-wine"
        >
          {item.galleryButtonText}
        </Link>
      </div>
    </article>
  );
};
