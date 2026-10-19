import React from "react";
import { SectionContainer } from "@/components/layout/SectionContainer";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Reveal } from "@/components/ui/Reveal";
import { siteConfig } from "@/data/siteConfig";
import { ArrowRight, Scissors, CheckCircle2, Ruler, Sparkles } from "lucide-react";

export const HeroSection: React.FC = () => {
  return (
    <SectionContainer bg="cream" padding="lg" className="border-b border-rose-soft/40 relative overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        
        {/* Left Column: Positioning Copy & CTAs */}
        <div className="lg:col-span-7 flex flex-col items-start text-left">
          <Reveal delay={0}>
            <Badge variant="gold" className="mb-4">
              KORATTUR'S PREMIER BESPOKE LADIES TAILORING SHOP
            </Badge>
          </Reveal>

          <Reveal delay={100}>
            <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-medium leading-[1.12] text-charcoal mb-4">
              {siteConfig.tagline}
            </h1>
          </Reveal>

          <Reveal delay={200}>
            <p className="font-serif text-base sm:text-xl text-rose font-medium mb-4 italic tracking-wide">
              {siteConfig.subtitle}
            </p>
          </Reveal>

          <Reveal delay={300}>
            <p className="font-sans text-sm sm:text-base text-charcoal-light leading-relaxed mb-8 max-w-xl">
              Bring your own fabrics. We transform your materials into impeccably tailored blouses, salwar suits, festive lehengas, and everyday wear with unmatched precision and artisanal finish.
            </p>
          </Reveal>

          <Reveal delay={400} className="w-full sm:w-auto">
            <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto">
              <Button
                href="/services"
                variant="primary"
                size="lg"
                icon={<ArrowRight className="w-4 h-4" />}
              >
                EXPLORE OUR SERVICES
              </Button>
              <Button href="/gallery" variant="secondary" size="lg">
                VIEW OUR DESIGNS
              </Button>
            </div>
          </Reveal>

          {/* Factual Trust Indicators Strip */}
          <Reveal delay={500} className="w-full">
            <div className="flex flex-wrap items-center gap-6 mt-10 pt-6 border-t border-rose-soft/60 text-xs font-medium text-charcoal-muted w-full">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-wine shrink-0" />
                <span>Bring Your Own Fabric</span>
              </div>
              <div className="flex items-center gap-2">
                <Ruler className="w-4 h-4 text-wine shrink-0" />
                <span>Anatomical Measurements</span>
              </div>
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-wine shrink-0" />
                <span>Paper Pattern Drafting</span>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Right Column: Tailoring Workshop Graphic Card */}
        <div className="lg:col-span-5 relative w-full flex justify-center">
          <Reveal delay={600} direction="left" className="w-full flex justify-center">
            <div className="relative w-full max-w-md bg-white rounded-2xl p-4 shadow-2xl border border-rose-soft/80 overflow-hidden group">
              {/* Tailoring Image Frame */}
              <div className="relative rounded-xl overflow-hidden flex flex-col bg-cream border border-rose-soft/30">
                {/* Top Image Section */}
                <div className="relative w-full h-56 sm:h-64 bg-charcoal/5 overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img 
                    src="/images/hero/hero-tailor-stitching.jpg" 
                    alt="Bespoke tailoring in progress with tailor stitching custom silk blouse on sewing machine in Korattur workshop" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                  <div className="absolute top-4 left-4 z-10">
                    <span className="bg-charcoal/90 text-gold text-[10px] font-sans font-bold tracking-widest uppercase px-3 py-1.5 rounded-full border border-gold/30 shadow-sm backdrop-blur-md">
                      MASTER PATTERN MAKER
                    </span>
                  </div>
                </div>

                {/* Bottom Content Section */}
                <div className="flex flex-col items-center p-6 sm:p-8 text-center bg-gradient-to-b from-white to-blush/20 relative">
                  <div className="w-14 h-14 rounded-full bg-white shadow-md border border-rose-soft flex items-center justify-center text-wine mb-4 -mt-14 relative z-10">
                    <Scissors className="w-6 h-6" />
                  </div>

                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-charcoal mb-2">
                    Raaji Tailoring Shop
                  </h3>
                  <p className="text-xs sm:text-sm text-charcoal-light font-sans max-w-xs leading-relaxed mb-6">
                    Dedicated exclusively to women&apos;s tailoring in Korattur. Master cutting, paper sloper drafting, and stitching precision.
                  </p>

                  <div className="pt-5 border-t border-rose-soft/60 w-full text-center">
                    <span className="text-[11px] font-sans font-semibold text-wine tracking-wider uppercase block">
                      KORATTUR MAIN SHOP
                    </span>
                    <span className="text-[10px] text-charcoal-muted block mt-1.5">
                      Bespoke cuts, lining canvas, 2-inch side seam allowance
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>

      </div>
    </SectionContainer>
  );
};
