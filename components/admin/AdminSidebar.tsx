"use client";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { siteConfig } from '@/data/siteConfig';
import { LayoutDashboard, Image as ImageIcon, Tags, Scissors, IndianRupee, MessageCircleQuestion, Inbox, LogOut, MapPin, Building2 } from 'lucide-react';
import { createClient } from '@/utils/supabase/client';
import { useRouter } from 'next/navigation';

export const AdminSidebar = () => {
  const pathname = usePathname();
  const router = useRouter();
  const supabase = createClient();

  const links = [
    { name: 'Dashboard', href: '/admin', icon: LayoutDashboard },
    { name: 'Categories', href: '/admin/categories', icon: Tags },
    { name: 'Services', href: '/admin/services', icon: Scissors },
    { name: 'Prices', href: '/admin/prices', icon: IndianRupee },
    { name: 'Gallery', href: '/admin/gallery', icon: ImageIcon },
    { name: 'FAQs', href: '/admin/faqs', icon: MessageCircleQuestion },
    { name: 'Branches', href: '/admin/branches', icon: MapPin },
    { name: 'Business Info', href: '/admin/business', icon: Building2 },
    { name: 'Enquiries', href: '/admin/enquiries', icon: Inbox },
  ];

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push('/admin/login');
  };

  return (
    <div className="hidden lg:flex flex-col w-64 bg-white border-r border-rose-soft/50 shadow-sm z-10">
      <div className="p-6 border-b border-rose-soft/50 flex items-center justify-center">
         <Image src="/images/logo/logo.png" alt={siteConfig.name} width={140} height={40} className="h-8 w-auto object-contain" />
      </div>
      <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
        {links.map(link => {
          const isActive = pathname === link.href;
          const Icon = link.icon;
          return (
            <Link key={link.href} href={link.href} className={`flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium transition-colors ${isActive ? 'bg-blush text-wine' : 'text-charcoal-muted hover:bg-cream hover:text-wine'}`}>
              <Icon className="w-4 h-4" />
              {link.name}
            </Link>
          );
        })}
      </nav>
      <div className="p-4 border-t border-rose-soft/50">
        <button onClick={handleLogout} className="flex items-center gap-3 px-3 py-2 w-full text-left rounded-md text-sm font-medium text-charcoal-muted hover:bg-cream hover:text-wine transition-colors">
          <LogOut className="w-4 h-4" />
          Logout
        </button>
      </div>
    </div>
  );
};
