"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { CategoryItem } from "@/data/homeData";
import { Badge } from "@/components/ui/Badge";
import { ArrowRight, Scissors } from "lucide-react";
import { clsx } from "clsx";

export interface CategoryCardProps {
  category: CategoryItem;
  isExpanded?: boolean;
  onHover?: () => void;
}

export const CategoryCard: React.FC<CategoryCardProps> = ({
  category,
  isExpanded = false,
  onHover,
}) => {
  return (
    <div
      onMouseEnter={onHover}
      className={clsx(
        "group relative bg-white rounded-2xl border transition-all duration-300 overflow-hidden flex flex-col justify-between h-full shadow-card",
        isExpanded
          ? "border-wine ring-2 ring-wine/20 -translate-y-1.5 shadow-card-hover"
          : "border-rose-soft/60 hover:border-wine/40 hover:-translate-y-1 hover:shadow-card-hover"
      )}
    >
      {/* Top Image Container (Uniform Aspect Ratio across all cards) */}
      <div className="relative aspect-[4/3] w-full bg-cream-dark overflow-hidden flex items-center justify-center shrink-0">
        {/* Visual Badge overlay */}
        <div className="absolute top-3 left-3 z-10">
          <Badge variant="wine" size="sm">
            {category.label}
          </Badge>
        </div>

        {/* Real Image or Fallback */}
        {category.imageUrl ? (
          <div className="relative w-full h-full overflow-hidden">
            <Image
              src={category.imageUrl}
              alt={category.title}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              priority={category.id === "bridal"}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-charcoal/10 to-transparent z-0 opacity-40 group-hover:opacity-20 transition-opacity duration-300" />
          </div>
        ) : (
          <>
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/40 via-transparent to-transparent z-0 opacity-60" />
            <div className="relative z-0 flex flex-col items-center justify-center p-6 text-center group-hover:scale-105 transition-transform duration-500 w-full h-full bg-gradient-to-br from-rose/10 via-cream to-blush/40">
              <div className="w-16 h-16 rounded-full bg-white/90 border border-wine/20 flex items-center justify-center mb-3 text-wine shadow-sm">
                <Scissors className="w-8 h-8" />
              </div>
              <span className="text-xs font-serif font-semibold text-charcoal/80 tracking-wide px-4">
                {category.imagePlaceholderAlt}
              </span>
            </div>
          </>
        )}
      </div>

      {/* Card Content Area (Flex stretch for uniform box height) */}
      <div className="p-6 flex flex-col flex-1 justify-between">
        <div>
          <span className="text-[10px] font-sans font-bold tracking-[0.2em] text-wine uppercase block mb-1">
            {category.categoryNum}
          </span>
          <h3 className="font-serif text-xl sm:text-2xl font-bold text-charcoal group-hover:text-wine transition-colors mb-2 leading-snug">
            {category.title}
          </h3>
          <p className="text-xs sm:text-sm text-charcoal-light leading-relaxed mb-4 font-sans line-clamp-3">
            {category.description}
          </p>
        </div>

        {/* Action CTA Link */}
        <Link
          href={category.href}
          className="inline-flex items-center gap-2 text-xs font-semibold text-wine hover:text-wine-dark tracking-wide group/btn pt-3 border-t border-rose-soft/40 w-full justify-between mt-2"
        >
          <span>{category.linkText}</span>
          <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
        </Link>
      </div>
    </div>
  );
};
