import React from "react";
import Image from "next/image";
import { GalleryItem } from "@/data/galleryData";
import { Badge } from "@/components/ui/Badge";
import { ArrowRight, Scissors } from "lucide-react";

export interface GalleryCardProps {
  item: GalleryItem;
  onOpenDetails: (item: GalleryItem) => void;
}

export const GalleryCard: React.FC<GalleryCardProps> = ({
  item,
  onOpenDetails,
}) => {
  return (
    <div className="group bg-white rounded-xl border border-rose-soft/60 shadow-card hover:shadow-card-hover hover:border-wine/30 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between overflow-hidden">
      {/* Top Image Container */}
      <div className="relative aspect-[4/3] w-full bg-cream-dark overflow-hidden flex items-center justify-center cursor-pointer" onClick={() => onOpenDetails(item)}>
        {/* Fabric Badge */}
        <div className="absolute top-3 left-3 z-10 flex gap-1.5 flex-wrap">
          <Badge variant="wine" size="sm">
            {item.fabricBadge}
          </Badge>
        </div>

        {item.imageUrl ? (
          <div className="relative w-full h-full overflow-hidden">
            <Image
              src={item.imageUrl}
              alt={item.title}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/40 via-transparent to-transparent z-0 opacity-30 group-hover:opacity-10 transition-opacity duration-300" />
          </div>
        ) : (
          <>
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/30 via-transparent to-transparent z-0 opacity-40" />
            <div className="relative z-0 flex flex-col items-center justify-center p-6 text-center w-full h-full bg-gradient-to-br from-rose/10 via-cream to-blush/30 group-hover:scale-[1.02] motion-reduce:transform-none transition-transform duration-500">
              <div className="w-12 h-12 rounded-full bg-white/90 border border-wine/20 flex items-center justify-center mb-2 text-wine shadow-sm">
                <Scissors className="w-6 h-6" />
              </div>
              <span className="text-[11px] font-serif font-medium text-charcoal/80 tracking-wide px-3">
                {item.imagePlaceholderAlt}
              </span>
            </div>
          </>
        )}
      </div>

      {/* Content Area */}
      <div className="p-6 flex flex-col flex-1 justify-between">
        <div>
          {/* Sample Code & Feature Tag */}
          <div className="flex items-center justify-between gap-2 mb-2">
            <span className="text-[10px] font-sans font-bold tracking-[0.15em] text-wine uppercase">
              {item.sampleCode}
            </span>
            <span className="text-[10px] text-charcoal-muted font-medium bg-cream px-2 py-0.5 rounded border border-rose-soft/40">
              {item.featureTag}
            </span>
          </div>

          <h3 className="font-serif text-lg sm:text-xl font-bold text-charcoal group-hover:text-wine transition-colors mb-2 leading-snug">
            {item.title}
          </h3>

          <p className="text-xs text-charcoal-light leading-relaxed font-sans mb-4">
            {item.description}
          </p>
        </div>

        {/* Bottom Action: View Stitching Details */}
        <div className="pt-3 border-t border-rose-soft/40 flex items-center justify-between">
          <button
            onClick={() => onOpenDetails(item)}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-wine hover:text-wine-dark transition-colors group/btn py-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-wine rounded-sm"
          >
            <span>View Stitching Details</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-1 motion-reduce:transform-none" />
          </button>
          <span className="text-[10px] text-rose uppercase tracking-widest font-semibold">
            {item.fabric}
          </span>
        </div>
      </div>
    </div>
  );
};
