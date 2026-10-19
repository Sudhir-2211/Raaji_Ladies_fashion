"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/data/siteConfig";
import { navItems, specializationsList } from "@/data/navigation";
import { branchesData } from "@/data/branches";
import { Phone, Mail, Clock, MapPin, Award, MessageSquare } from "lucide-react";
import { EnquiryModal } from "@/components/ui/EnquiryModal";
import { EnquireModal } from "./EnquireModal";

export const Footer: React.FC<{ branches?: any[] }> = ({ branches = [] }) => {
  const [isEnquiryOpen, setIsEnquiryOpen] = React.useState(false);

  return (
    <footer className="bg-blush text-charcoal pt-16 pb-8 border-t border-rose-soft/60 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-rose-soft/60">
          
          {/* Column 1: Brand Info */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center">
              <Image 
                src="/images/logo/logo.png"
                alt="Raaji Ladies Fashion"
                width={160}
                height={48}
                className="h-10 sm:h-12 w-auto object-contain"
              />
            </div>

            <p className="text-xs text-charcoal-light leading-relaxed mt-1">
              Bespoke ladies tailoring shop crafted exclusively for women in Korattur and Chennai. Bringing your fabrics to life with flawless fit, precision cuts, and quality stitching.
            </p>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/80 border border-wine/15 text-[11px] font-medium text-wine mt-2 w-fit">
              <Award className="w-3.5 h-3.5 text-gold-dark" />
              <span>MASTER TAILOR PATTERN STANDARDS</span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="font-serif text-base font-semibold text-charcoal mb-4 tracking-wide">
              Quick Links
            </h3>
            <ul className="space-y-2.5 text-xs text-charcoal-light">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="hover:text-wine transition-colors inline-block"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Specializations */}
          <div>
            <h3 className="font-serif text-base font-semibold text-charcoal mb-4 tracking-wide">
              Specializations
            </h3>
            <ul className="space-y-2.5 text-xs text-charcoal-light">
              {specializationsList.map((item, idx) => (
                <li key={idx} className="hover:text-wine transition-colors">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Visit & Contact */}
          <div>
            <h3 className="font-serif text-base font-semibold text-charcoal mb-4 tracking-wide">
              Visit & Contact
            </h3>
            <div className="space-y-3.5 text-xs text-charcoal-light">
              {branches.length > 0 ? (
                branches.map((branch) => (
                  <div key={branch.id} className="flex flex-col gap-1">
                    <strong className="text-charcoal font-medium">{branch.name}</strong>
                    <div className="flex items-center gap-2">
                      <Phone className="w-3 h-3 text-wine" />
                      <a href={`tel:${branch.phone.replace(/[^0-9]/g, '')}`} className="hover:text-wine">{branch.phone}</a>
                    </div>
                    {branch.whatsapp && (
                      <div className="flex items-center gap-2">
                        <MessageSquare className="w-3 h-3 text-wine" />
                        <a href={`https://wa.me/91${branch.whatsapp.replace(/[^0-9]/g, '')}`} className="hover:text-wine">WhatsApp</a>
                      </div>
                    )}
                    {branch.google_maps_url && (
                      <div className="flex items-center gap-2 mt-1">
                        <MapPin className="w-3 h-3 text-wine" />
                        <a href={branch.google_maps_url} target="_blank" rel="noreferrer" className="hover:text-wine hover:underline">View on Maps</a>
                      </div>
                    )}
                  </div>
                ))
              ) : (
                branchesData.map((branch) => (
                  <div key={branch.id} className="flex items-start gap-2">
                    <MapPin className="w-3.5 h-3.5 text-wine shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-charcoal font-medium block">{branch.tag}:</strong>
                      <span>{branch.address}</span>
                    </div>
                  </div>
                ))
              )}

              <div className="flex items-start gap-2 pt-1">
                <Clock className="w-3.5 h-3.5 text-wine shrink-0 mt-0.5" />
                <div>
                  <strong className="text-charcoal font-medium block">Shop Timings:</strong>
                  <span>{siteConfig.timings.weekdays}</span>
                  <span className="block">{siteConfig.timings.sunday}</span>
                </div>
              </div>

              <div className="flex items-center gap-2 pt-1">
                <Phone className="w-3.5 h-3.5 text-wine shrink-0" />
                <a href={siteConfig.phoneHref} className="hover:text-wine transition-colors">
                  {siteConfig.phoneDisplay}
                </a>
              </div>

              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-wine shrink-0" />
                <a href={`mailto:${siteConfig.email}`} className="hover:text-wine transition-colors">
                  {siteConfig.email}
                </a>
              </div>

              <div className="pt-2">
                <button 
                  onClick={() => setIsEnquiryOpen(true)}
                  className="flex items-center justify-center gap-2 w-full py-2 px-4 rounded border border-wine/30 text-wine hover:bg-wine/5 hover:border-wine transition-colors font-medium text-xs focus:outline-none focus-visible:ring-2 focus-visible:ring-wine"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  Send an Enquiry
                </button>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] text-charcoal-muted gap-4">
          <p>© {new Date().getFullYear()} {siteConfig.name}. All rights reserved. • Handcrafted with precision</p>
          <p className="font-medium text-wine">{siteConfig.developerCredit}</p>
        </div>
      </div>
      <EnquireModal isOpen={isEnquiryOpen} onClose={() => setIsEnquiryOpen(false)} branches={branches} />
    </footer>
  );
};
