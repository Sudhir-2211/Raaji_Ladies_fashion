import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ServiceCategory } from "@/data/servicesData";
import { Badge } from "@/components/ui/Badge";
import { ArrowRight, Sparkles, Scissors, CheckCircle2 } from "lucide-react";

export interface ServiceCardProps {
  category: ServiceCategory;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ category }) => {
  return (
    <div
      id={category.id}
      className="group scroll-mt-28 bg-white rounded-3xl border border-rose-soft/80 shadow-card hover:shadow-card-hover hover:border-wine/40 transition-all duration-500 overflow-hidden p-5 sm:p-7"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
        {/* PHOTO HERO SHOWCASE (60% Desktop Width / Full Mobile Width) */}
        <div className="lg:col-span-7 relative w-full aspect-[4/3] sm:aspect-[16/11] rounded-2xl overflow-hidden bg-cream-dark border border-rose-soft/60 shadow-sm group-hover:shadow-md transition-shadow duration-500">
          {/* Badge Overlay */}
          <div className="absolute top-4 left-4 z-10 flex gap-2 items-center">
            <Badge variant="wine" size="sm" className="shadow-md backdrop-blur-xs">
              {category.categoryNum}
            </Badge>
            <span className="text-[10px] font-sans font-bold tracking-widest text-white uppercase bg-charcoal/70 backdrop-blur-xs px-2.5 py-1 rounded-full border border-white/20">
              BESPOKE CRAFT
            </span>
          </div>

          {category.imageUrl ? (
            <div className="relative w-full h-full overflow-hidden">
              <Image
                src={category.imageUrl}
                alt={category.title}
                fill
                sizes="(max-width: 1024px) 100vw, 55vw"
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-charcoal/10 to-transparent z-0 opacity-40 group-hover:opacity-20 transition-opacity duration-500" />
            </div>
          ) : (
            <div className="relative z-0 flex flex-col items-center justify-center p-6 text-center w-full h-full bg-gradient-to-br from-rose/10 via-cream to-blush/40">
              <div className="w-14 h-14 rounded-full bg-white/90 border border-wine/20 flex items-center justify-center mb-3 text-wine shadow-sm">
                <Scissors className="w-7 h-7" />
              </div>
              <span className="text-xs font-serif font-semibold text-charcoal/80">
                {category.title}
              </span>
            </div>
          )}

          {/* Bottom Photo Overlay Quick Action */}
          <div className="absolute bottom-4 right-4 z-10">
            <Link
              href={category.galleryLink}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/90 hover:bg-white text-wine text-xs font-bold shadow-md backdrop-blur-xs transition-all hover:scale-105"
            >
              <span>View Designs</span>
              <Sparkles className="w-3.5 h-3.5 text-gold" />
            </Link>
          </div>
        </div>

        {/* ELEGANT & COMPACT DETAILS (40% Desktop Width) */}
        <div className="lg:col-span-5 flex flex-col justify-between h-full space-y-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-[10px] font-sans font-bold tracking-[0.2em] text-wine uppercase">
                TAILORING SPECIFICATION
              </span>
            </div>

            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-charcoal mb-1.5 leading-snug group-hover:text-wine transition-colors">
              {category.title}
            </h3>

            <p className="font-sans text-xs sm:text-sm font-medium text-rose mb-3 italic">
              {category.subtitle}
            </p>

            <p className="font-sans text-xs sm:text-sm text-charcoal-light leading-relaxed mb-4">
              {category.description}
            </p>

            {/* Compact Key Aspects Pills */}
            {category.keyAspects && category.keyAspects.length > 0 && (
              <div className="space-y-2 mb-4">
                <span className="text-[10px] font-sans font-bold tracking-widest text-charcoal-muted uppercase block">
                  Signature Highlights
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {category.keyAspects.map((aspect, idx) => (
                    <span
                      key={idx}
                      className="inline-flex items-center gap-1 text-[11px] font-sans font-medium text-charcoal bg-cream px-2.5 py-1 rounded-md border border-rose-soft/60"
                    >
                      <CheckCircle2 className="w-3 h-3 text-wine shrink-0" />
                      <span>{aspect}</span>
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Action CTA */}
          <div className="pt-3 border-t border-rose-soft/50 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <span className="text-[10px] text-charcoal-muted font-sans italic">
              Custom paper-pattern drafted for your fabric
            </span>

            <Link
              href={category.galleryLink}
              className="group/btn inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-wine text-white text-xs font-semibold hover:bg-wine-dark transition-all shadow-sm w-full sm:w-auto"
            >
              <span>{category.galleryLinkText}</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

