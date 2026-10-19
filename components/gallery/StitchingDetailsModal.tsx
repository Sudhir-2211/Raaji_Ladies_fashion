"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { GalleryItem } from "@/data/galleryData";
import { Badge } from "@/components/ui/Badge";
import { X, CheckCircle2, Bookmark, Scissors } from "lucide-react";
import { clsx } from "clsx";

export interface StitchingDetailsModalProps {
  item: GalleryItem | null;
  onClose: () => void;
}

export const StitchingDetailsModal: React.FC<StitchingDetailsModalProps> = ({
  item,
  onClose,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeItem, setActiveItem] = useState<GalleryItem | null>(null);

  useEffect(() => {
    if (item) {
      setActiveItem(item);
      // Small delay to allow DOM render before transitioning classes
      const raf = requestAnimationFrame(() => setIsVisible(true));
      return () => cancelAnimationFrame(raf);
    } else {
      setIsVisible(false);
      // Wait for transition to complete before unmounting
      const timer = setTimeout(() => setActiveItem(null), 300);
      return () => clearTimeout(timer);
    }
  }, [item]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isVisible) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isVisible, onClose]);

  if (!activeItem) return null;

  return (
    <div
      className={clsx(
        "fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 transition-all duration-300",
        isVisible ? "opacity-100 visible pointer-events-auto" : "opacity-0 invisible pointer-events-none"
      )}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      {/* Backdrop */}
      <div
        className={clsx(
          "fixed inset-0 bg-charcoal/60 backdrop-blur-sm transition-opacity duration-300",
          isVisible ? "opacity-100" : "opacity-0"
        )}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Card */}
      <div 
        className={clsx(
          "relative bg-white w-full max-w-lg rounded-2xl shadow-2xl border border-rose-soft/80 p-6 sm:p-8 z-10 transition-transform duration-300 max-h-[90vh] overflow-y-auto motion-reduce:transition-none",
          isVisible ? "scale-100 translate-y-0" : "scale-95 translate-y-4"
        )}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-charcoal-muted hover:text-wine hover:bg-blush/60 bg-white/80 z-20 backdrop-blur-xs transition-colors"
          aria-label="Close stitching details"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Image Header */}
        {activeItem.imageUrl && (
          <div className="relative w-full h-64 sm:h-72 rounded-xl overflow-hidden mb-5 border border-rose-soft/50 shadow-inner">
            <Image
              src={activeItem.imageUrl}
              alt={activeItem.title}
              fill
              sizes="(max-width: 640px) 100vw, 512px"
              className="object-cover"
            />
          </div>
        )}

        {/* Top Badges */}
        <div className="flex flex-wrap items-center gap-2 mb-3">
          <Badge variant="wine" size="sm">
            {activeItem.sampleCode}
          </Badge>
          <Badge variant="gold" size="sm">
            {activeItem.fabricBadge}
          </Badge>
          <Badge variant="blush" size="sm">
            {activeItem.categoryLabel}
          </Badge>
        </div>

        {/* Title */}
        <h3
          id="modal-title"
          className="font-serif text-2xl font-bold text-charcoal mb-2 leading-snug"
        >
          {activeItem.title}
        </h3>

        <p className="text-xs sm:text-sm text-charcoal-light leading-relaxed mb-6 font-sans">
          {activeItem.description}
        </p>

        {/* Structural Pattern Specifications */}
        <div className="bg-cream/60 rounded-xl p-4 border border-rose-soft/50 mb-6">
          <div className="flex items-center gap-2 mb-3 text-xs font-semibold uppercase tracking-wider text-rose">
            <Scissors className="w-3.5 h-3.5 text-wine" />
            <span>Sample Pattern Specifications</span>
          </div>

          <ul className="space-y-2 text-xs text-charcoal-light">
            {activeItem.structuralHighlights.map((spec, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-wine shrink-0 mt-0.5" />
                <span>{spec}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* In-Shop Commission Guidance Callout */}
        <div className="bg-blush/70 border border-wine/20 rounded-xl p-4 flex items-start gap-3">
          <Bookmark className="w-4 h-4 text-wine shrink-0 mt-0.5" />
          <p className="text-xs text-charcoal-light leading-relaxed">
            <strong className="text-charcoal block mb-0.5 font-medium">
              How to Commission This Pattern:
            </strong>
            Save this sample reference (<strong>{activeItem.sampleCode}</strong>) or take a screenshot, and bring it along with your unstitched fabric when visiting our Korattur shop.
          </p>
        </div>
      </div>
    </div>
  );
};
