import React from "react";
import { SectionContainer } from "@/components/layout/SectionContainer";
import { garmentCategoriesList } from "@/data/aboutData";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const AboutCategories: React.FC = () => {
  return (
    <SectionContainer bg="cream" padding="md" className="border-b border-rose-soft/40">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <span className="text-[11px] font-sans font-bold tracking-[0.25em] text-rose uppercase block mb-2">
            TAILORING SERVICES
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal mb-4">
            Garment Categories We Tailor
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {garmentCategoriesList.map((item) => (
            <div
              key={item.num}
              className="bg-white rounded-2xl p-6 sm:p-8 border border-rose-soft/70 shadow-xs flex flex-col justify-between"
            >
              <div>
                <span className="text-[11px] font-sans font-bold tracking-widest text-rose uppercase block mb-2">
                  {item.num}
                </span>
                <h3 className="font-serif text-2xl font-bold text-charcoal mb-3">
                  {item.title}
                </h3>
                <p className="font-sans text-xs sm:text-sm text-charcoal-light leading-relaxed mb-6">
                  {item.description}
                </p>
              </div>

              <div className="pt-4 border-t border-rose-soft/40">
                <Link
                  href={item.href}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-wine hover:text-wine-dark transition-colors group"
                >
                  <span>View in Gallery</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionContainer>
  );
};
