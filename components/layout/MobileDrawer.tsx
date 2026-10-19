"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { navItems } from "@/data/navigation";
import { siteConfig } from "@/data/siteConfig";
import { X, Phone, MessageSquare } from "lucide-react";
import { clsx } from "clsx";
import { EnquireModal } from "./EnquireModal";
import { ContactModal } from "./ContactModal";

export interface MobileDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  branches?: any[];
}

export const MobileDrawer: React.FC<MobileDrawerProps> = ({ isOpen, onClose, branches = [] }) => {
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    onClose();
  }, [pathname]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!mounted) return null;

  return (
    <div
      className={clsx(
        "fixed inset-0 z-50 lg:hidden transition-all duration-300",
        isOpen ? "opacity-100 pointer-events-auto visible" : "opacity-0 pointer-events-none invisible"
      )}
    >
      {/* Backdrop */}
      <div
        className={clsx(
          "fixed inset-0 bg-charcoal/60 backdrop-blur-sm transition-opacity duration-300",
          isOpen ? "opacity-100" : "opacity-0"
        )}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer panel */}
      <div
        className={clsx(
          "fixed inset-y-0 right-0 w-full max-w-xs bg-white shadow-2xl flex flex-col justify-between p-6 z-10 transition-transform duration-300 ease-in-out motion-reduce:transition-none overflow-y-auto",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div>
          {/* Header */}
          <div className="flex items-center justify-between pb-6 border-b border-rose-soft/60">
            <div className="flex items-center">
              <Image 
                src="/images/logo/logo.png"
                alt="Raaji Ladies Fashion"
                width={140}
                height={40}
                className="h-8 w-auto object-contain"
              />
            </div>
            <button
              onClick={onClose}
              className="p-2 text-charcoal-muted hover:text-wine rounded-md hover:bg-blush/60 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-wine"
              aria-label="Close menu"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Links */}
          <nav className="py-6 flex flex-col gap-1">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={clsx(
                    "px-4 py-3 rounded-lg text-base font-medium transition-colors flex items-center justify-between focus:outline-none focus-visible:ring-2 focus-visible:ring-wine",
                    isActive
                      ? "bg-blush text-wine font-semibold border-l-4 border-wine"
                      : "text-charcoal hover:bg-blush/40 hover:text-wine"
                  )}
                >
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Footer CTAs */}
        <div className="pt-6 border-t border-rose-soft/60 flex flex-col gap-3">
          <button
            onClick={() => {
              setIsEnquiryOpen(true);
              onClose();
            }}
            className="group flex items-center justify-center gap-2 py-2.5 px-4 rounded-md bg-wine text-white text-sm font-medium hover:bg-wine-dark transition-colors"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Enquire Now</span>
          </button>
          
          <div className="w-full">
             <div className="text-center mb-2 text-xs font-semibold text-charcoal-muted uppercase tracking-wider">Contact Now</div>
             <div className="flex flex-col gap-2">
               {branches.map(b => (
                 <div key={b.id} className="bg-cream p-3 rounded-lg border border-charcoal/5">
                   <div className="font-semibold text-sm mb-2">{b.name}</div>
                   <div className="flex gap-2">
                     <a href={`tel:${b.phone.replace(/[^0-9]/g, '')}`} className="flex-1 py-1.5 flex items-center justify-center gap-1.5 text-xs bg-white text-charcoal font-medium rounded shadow-xs">
                       <Phone className="w-3 h-3 text-gold-dark" /> Call
                     </a>
                     {b.whatsapp && (
                       <a href={`https://wa.me/91${b.whatsapp.replace(/[^0-9]/g, '')}`} target="_blank" rel="noopener noreferrer" className="flex-1 py-1.5 flex items-center justify-center gap-1.5 text-xs bg-green/10 text-green-dark font-medium rounded shadow-xs">
                         <MessageSquare className="w-3 h-3" /> WhatsApp
                       </a>
                     )}
                   </div>
                 </div>
               ))}
             </div>
          </div>
        </div>
      </div>
      <EnquireModal isOpen={isEnquiryOpen} onClose={() => setIsEnquiryOpen(false)} branches={branches} />
    </div>
  );
};
