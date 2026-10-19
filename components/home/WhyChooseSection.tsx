import React from "react";
import { SectionContainer } from "@/components/layout/SectionContainer";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Reveal } from "@/components/ui/Reveal";
import { whyChooseCards } from "@/data/homeData";
import { Ruler, Scissors, Sparkles, Tag } from "lucide-react";

const iconMap: Record<string, React.ReactNode> = {
  Ruler: <Ruler className="w-6 h-6 text-wine" />,
  Scissors: <Scissors className="w-6 h-6 text-wine" />,
  Sparkles: <Sparkles className="w-6 h-6 text-wine" />,
  Tag: <Tag className="w-6 h-6 text-wine" />,
};

export const WhyChooseSection: React.FC = () => {
  return (
    <SectionContainer bg="cream" padding="md" className="border-b border-rose-soft/40">
      <Reveal delay={0}>
        <SectionHeading
          eyebrow="OUR TAILORING STANDARDS"
          title="Why Women Across Korattur Trust Us"
          description="Bespoke tailoring that honors your personal fabric, anatomical comfort, and unique silhouette."
          align="center"
        />
      </Reveal>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {whyChooseCards.map((item, index) => (
          <Reveal key={item.id} delay={index * 100}>
            <Card hoverable padding="md" className="flex flex-col justify-between h-full">
              <div>
                <div className="w-12 h-12 rounded-lg bg-blush border border-wine/15 flex items-center justify-center mb-5">
                  {iconMap[item.iconName]}
                </div>

                <h3 className="font-serif text-xl font-bold text-charcoal mb-3">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-charcoal-light leading-relaxed font-sans mb-6">
                  {item.description}
                </p>
              </div>

              <div className="pt-4 border-t border-rose-soft/40">
                <Badge variant="rose" size="sm">
                  {item.tag}
                </Badge>
              </div>
            </Card>
          </Reveal>
        ))}
      </div>
    </SectionContainer>
  );
};
