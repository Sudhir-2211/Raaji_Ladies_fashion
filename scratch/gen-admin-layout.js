const fs = require('fs');
const path = require('path');

const write = (p, content) => {
  const fullPath = path.join(__dirname, '..', p);
  fs.mkdirSync(path.dirname(fullPath), { recursive: true });
  fs.writeFileSync(fullPath, content.trim() + '\n', 'utf8');
};

const layout = `
import React from 'react';
import { AdminSidebar } from '@/components/admin/AdminSidebar';
import { AdminTopbar } from '@/components/admin/AdminTopbar';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen bg-cream">
      <AdminSidebar />
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        <AdminTopbar />
        <main className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8">
          {children}
        </main>
      </div>
    </div>
  );
}
`;

const sidebar = `
"use client";
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { siteConfig } from '@/data/siteConfig';
import { LayoutDashboard, Image as ImageIcon, Tags, Scissors, IndianRupee, MessageCircleQuestion, Inbox, LogOut } from 'lucide-react';
import { createClient } from '@/utils/supabase/client';
import { useRouter } from 'next/navigation';

export const AdminSidebar = () => {
  const pathname = usePathname();
  const router = useRouter();
  const supabase = createClient();

  const links = [
    { name: 'Dashboard', href: '/admin', icon: LayoutDashboard },
    { name: 'Gallery', href: '/admin/gallery', icon: ImageIcon },
    { name: 'Categories', href: '/admin/categories', icon: Tags },
    { name: 'Services', href: '/admin/services', icon: Scissors },
    { name: 'Prices', href: '/admin/prices', icon: IndianRupee },
    { name: 'FAQs', href: '/admin/faqs', icon: MessageCircleQuestion },
    { name: 'Enquiries', href: '/admin/enquiries', icon: Inbox },
  ];

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push('/admin/login');
  };

  return (
    <div className="hidden lg:flex flex-col w-64 bg-white border-r border-rose-soft/50 shadow-sm z-10">
      <div className="p-6 border-b border-rose-soft/50 flex items-center gap-3">
         <div className="w-8 h-8 rounded-full border border-gold bg-cream flex items-center justify-center font-serif font-bold text-wine text-xs">
           R
         </div>
         <span className="font-serif font-bold text-charcoal">{siteConfig.name}</span>
      </div>
      <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
        {links.map(link => {
          const isActive = pathname === link.href;
          const Icon = link.icon;
          return (
            <Link key={link.href} href={link.href} className={\`flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium transition-colors \${isActive ? 'bg-blush text-wine' : 'text-charcoal-muted hover:bg-cream hover:text-wine'}\`}>
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
`;

const topbar = `
"use client";
import React, { useState } from 'react';
import { Menu } from 'lucide-react';
// We would add mobile drawer here in a real app, keeping simple for now
export const AdminTopbar = () => {
  return (
    <header className="lg:hidden bg-white border-b border-rose-soft/50 p-4 flex items-center justify-between">
      <span className="font-serif font-bold text-charcoal">Admin</span>
      <button className="p-2 rounded-md hover:bg-cream"><Menu className="w-5 h-5" /></button>
    </header>
  );
};
`;

write('app/admin/layout.tsx', layout);
write('components/admin/AdminSidebar.tsx', sidebar);
write('components/admin/AdminTopbar.tsx', topbar);

console.log('Generated admin layout files');
