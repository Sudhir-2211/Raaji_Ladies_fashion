import React from "react";
import { SectionContainer } from "@/components/layout/SectionContainer";
import { MapPin, Scissors, MessageSquare } from "lucide-react";

export const AboutVisit: React.FC = () => {
  return (
    <SectionContainer bg="cream" padding="md" className="border-b border-rose-soft/40">
      <div className="max-w-4xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-[11px] font-sans font-bold tracking-[0.25em] text-rose uppercase block mb-2">
            SHOP LOCATION
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal mb-4">
            Visit Us in Korattur, Chennai
          </h2>
        </div>

        <div className="bg-white rounded-2xl p-8 sm:p-10 border border-rose-soft/70 shadow-xs">
          <div className="space-y-4 text-sm sm:text-base text-charcoal-light font-sans leading-relaxed mb-8">
            <p>
              Raaji Ladies Fashion is located in Korattur, Chennai. You can bring your unstitched fabric and any design references to the shop for discussion and tailoring consultation.
            </p>
            <p>
              During your visit, you can discuss your fabric, design requirements, and measurements for your custom garment.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-rose-soft/40">
            <div className="flex items-center gap-3 p-3.5 rounded-xl bg-cream/50 border border-rose-soft/60">
              <MapPin className="w-4 h-4 text-wine shrink-0" />
              <span className="text-xs font-semibold text-charcoal">
                Korattur, Chennai
              </span>
            </div>
            <div className="flex items-center gap-3 p-3.5 rounded-xl bg-cream/50 border border-rose-soft/60">
              <Scissors className="w-4 h-4 text-wine shrink-0" />
              <span className="text-xs font-semibold text-charcoal">
                Customer Fabric Tailoring
              </span>
            </div>
            <div className="flex items-center gap-3 p-3.5 rounded-xl bg-cream/50 border border-rose-soft/60">
              <MessageSquare className="w-4 h-4 text-wine shrink-0" />
              <span className="text-xs font-semibold text-charcoal">
                In-Store Consultation
              </span>
            </div>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};
