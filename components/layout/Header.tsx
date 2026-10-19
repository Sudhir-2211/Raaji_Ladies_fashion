"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { AnnouncementBar } from "./AnnouncementBar";
import { Navigation } from "./Navigation";
import { MobileDrawer } from "./MobileDrawer";
import { siteConfig } from "@/data/siteConfig";
import { Menu } from "lucide-react";
import { ContactModal } from "./ContactModal";
import { EnquireModal } from "./EnquireModal";

export const Header: React.FC<{ branches?: any[] }> = ({ branches = [] }) => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur-md border-b border-rose-soft/50 shadow-sm transition-all">
        <AnnouncementBar />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center group">
              <Image 
                src="/images/logo/logo.png"
                alt="Raaji Ladies Fashion"
                width={200}
                height={60}
                className="h-12 sm:h-14 w-auto object-contain"
                priority
              />
            </Link>

            {/* Desktop Navigation Links */}
            <Navigation />

            {/* Right Action Items */}
            <div className="hidden lg:flex items-center gap-3">
              <ContactModal branches={branches} />
              <EnquireModal branches={branches} />
            </div>

            {/* Mobile Menu Toggle Button */}
            <div className="flex items-center lg:hidden gap-2">
              <button
                onClick={() => setIsMobileOpen(true)}
                className="p-2 text-charcoal hover:text-wine rounded-md hover:bg-blush/60 transition-colors"
                aria-label="Open navigation menu"
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Drawer (outside header to escape stacking context) */}
      <MobileDrawer isOpen={isMobileOpen} onClose={() => setIsMobileOpen(false)} branches={branches} />
    </>
  );
};
