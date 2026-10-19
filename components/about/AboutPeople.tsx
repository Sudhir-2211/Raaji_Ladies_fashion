"use client";

import React, { useState } from "react";
import { SectionContainer } from "@/components/layout/SectionContainer";
import { proprietorsList, developerCredit } from "@/data/aboutData";
import { Code2, Linkedin, Instagram } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

export const AboutPeople: React.FC = () => {
  const [proprietorImageErrors, setProprietorImageErrors] = useState<Record<string, boolean>>({});
  const [developerImageError, setDeveloperImageError] = useState(false);

  return (
    <SectionContainer bg="cream" padding="md" className="border-b border-rose-soft/40">
      <div className="max-w-5xl mx-auto">
        {/* Section Heading */}
        <Reveal delay={0}>
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
            <span className="text-[11px] font-sans font-bold tracking-[0.25em] text-rose uppercase block mb-2">
              LEADERSHIP
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal mb-4">
              The People Behind Raaji Ladies Fashion
            </h2>
          </div>
        </Reveal>

        {/* Part A: Two Proprietor Profile Cards (Side-by-Side on Desktop, Stacked on Mobile) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-3xl mx-auto mb-10 sm:mb-12">
          {proprietorsList.map((person, index) => {
            const hasError = proprietorImageErrors[person.name];
            const showImage = person.photoUrl && !hasError;

            return (
              <Reveal key={person.name} delay={index * 150}>
                <div
                  className="bg-white rounded-2xl p-6 sm:p-8 border border-rose-soft/70 shadow-xs flex flex-col items-center text-center h-full hover:shadow-card transition-all duration-300"
                >
                  {/* Photo Profile Slot with Monogram Fallback */}
                  <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-cream border-2 border-gold/60 flex items-center justify-center font-serif text-xl sm:text-2xl font-bold text-wine mb-4 shadow-inner overflow-hidden relative">
                    {showImage ? (
                      /* eslint-disable-next-line @next/next/no-img-element */
                      <img
                        src={person.photoUrl}
                        alt={person.name}
                        className="w-full h-full object-cover"
                        onError={() =>
                          setProprietorImageErrors((prev) => ({
                            ...prev,
                            [person.name]: true,
                          }))
                        }
                      />
                    ) : (
                      <span>{person.initials}</span>
                    )}
                  </div>

                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-charcoal mb-1">
                    {person.name}
                  </h3>
                  <span className="font-sans text-xs sm:text-sm font-semibold text-wine tracking-wide block">
                    {person.role}
                  </span>
                  {person.description && (
                    <p className="font-sans text-xs sm:text-sm text-charcoal-light leading-relaxed mt-3">
                      {person.description}
                    </p>
                  )}
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* Part B: Developer Profile (Directly Below BOTH Proprietors, Horizontally Center-Aligned) */}
        <div className="pt-8 border-t border-rose-soft/60 flex justify-center">
          <Reveal delay={300} className="w-full max-w-lg">
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-rose-soft/70 shadow-xs flex flex-col items-center text-center hover:shadow-card transition-all duration-300">
              {/* Developer Photo Slot with Monogram Fallback */}
              <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-cream border-2 border-gold/60 flex items-center justify-center font-serif text-xl sm:text-2xl font-bold text-wine mb-4 shadow-inner overflow-hidden relative">
                {developerCredit.photoUrl && !developerImageError ? (
                  /* eslint-disable-next-line @next/next/no-img-element */
                  <img
                    src={developerCredit.photoUrl}
                    alt={developerCredit.name}
                    className="w-full h-full object-cover"
                    onError={() => setDeveloperImageError(true)}
                  />
                ) : (
                  <span>{developerCredit.initials}</span>
                )}
              </div>

              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cream border border-rose-soft text-[10px] font-sans font-bold tracking-widest text-rose uppercase mb-3 shadow-2xs">
                <Code2 className="w-3.5 h-3.5 text-wine" />
                <span>{developerCredit.eyebrow}</span>
              </div>

              <h4 className="font-serif text-xl sm:text-2xl font-bold text-charcoal mb-1">
                {developerCredit.name}
              </h4>
              <span className="font-sans text-xs sm:text-sm font-semibold text-wine tracking-wide block mb-3">
                {developerCredit.role}
              </span>

              <p className="font-sans text-xs sm:text-sm text-charcoal-light leading-relaxed max-w-md mb-5">
                {developerCredit.description}
              </p>

              {(developerCredit.linkedin || developerCredit.instagram) && (
                <div className="flex justify-center gap-3">
                  {developerCredit.linkedin && (
                    <a
                      href={developerCredit.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 bg-cream border border-rose-soft/50 text-wine rounded-full hover:bg-wine hover:text-white hover:border-wine transition-all shadow-2xs"
                      aria-label="LinkedIn"
                    >
                      <Linkedin className="w-4 h-4" />
                    </a>
                  )}
                  {developerCredit.instagram && (
                    <a
                      href={developerCredit.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 bg-cream border border-rose-soft/50 text-wine rounded-full hover:bg-wine hover:text-white hover:border-wine transition-all shadow-2xs"
                      aria-label="Instagram"
                    >
                      <Instagram className="w-4 h-4" />
                    </a>
                  )}
                </div>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </SectionContainer>
  );
};
