import React from "react";
import { SectionContainer } from "@/components/layout/SectionContainer";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export const FAQPreparationChecklist: React.FC = () => {
  const checklistItems = [
    {
      title: "Bring your unstitched fabric",
      description:
        "Ensure your fabric length and width are sufficient for your chosen design. You can review general guidelines beforehand.",
    },
    {
      title: "Bring a reference garment",
      description:
        "Bringing an existing garment can help communicate the design, neckline cut, or fit you would like to reference.",
    },
    {
      title: "Bring or discuss lining material",
      description:
        "Bring lining material if required for your fabric, or discuss lining requirements directly in-store.",
    },
    {
      title: "Bring design & detailing materials",
      description:
        "Bring borders, laces, contrast patches, or other design materials if they are part of your intended garment styling.",
    },
    {
      title: "Bring reference photos or sample codes",
      description:
        "Save photos or note Gallery sample references (such as SAMPLE REF: B-101) to share during your consultation.",
    },
  ];

  return (
    <SectionContainer bg="blush" padding="md" className="border-b border-rose-soft/40">
      <div className="max-w-5xl mx-auto">
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
          <span className="text-[11px] font-sans font-bold tracking-[0.25em] text-rose uppercase block mb-2">
            SHOP CONSULTATION CHECKLIST
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-charcoal mb-3">
            Before You Visit
          </h2>
          <p className="font-sans text-xs sm:text-sm text-charcoal-light leading-relaxed">
            Preparing your materials and references in advance ensures an efficient in-shop design review and pricing discussion.
          </p>
        </div>

        {/* 5 Checklist Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-8">
          {checklistItems.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-5 sm:p-6 border border-rose-soft/70 shadow-2xs flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-2 mb-2 text-wine">
                  <CheckCircle2 className="w-4 h-4 shrink-0" />
                  <span className="font-serif text-sm font-bold text-charcoal">
                    {item.title}
                  </span>
                </div>
                <p className="font-sans text-xs text-charcoal-light leading-relaxed pl-6">
                  {item.description}
                </p>
              </div>
            </div>
          ))}

          {/* Meterage Guide Action Card */}
          <div className="bg-cream/80 rounded-2xl p-5 sm:p-6 border border-wine/20 shadow-2xs flex flex-col justify-between">
            <div>
              <span className="text-[10px] font-sans font-bold tracking-widest text-rose uppercase block mb-1">
                FABRIC GUIDANCE
              </span>
              <h3 className="font-serif text-sm font-bold text-charcoal mb-2">
                Need Meterage Estimates?
              </h3>
              <p className="font-sans text-xs text-charcoal-light leading-relaxed mb-4">
                Review approximate fabric lengths needed for blouses, kurtis, suits, and festive wear.
              </p>
            </div>
            <Link
              href="/services#meterage-guide"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-wine hover:text-wine-dark transition-colors"
            >
              <span>Check Fabric Meterage Guidelines →</span>
            </Link>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};
