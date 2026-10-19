import React from 'react';
import { createClient } from '@/utils/supabase/server';
import { BusinessClient } from './BusinessClient';
import { siteConfig } from '@/data/siteConfig';

export const metadata = { title: 'Business Information | Admin', robots: 'noindex, nofollow' };

export default async function BusinessPage() {
  const supabase = await createClient();
  const { data: siteContent } = await supabase.from('site_content').select('*').eq('id', 'site_config').single();
  const { data: branches } = await supabase.from('branches').select('*').order('created_at', { ascending: true });

  const initialConfig = siteContent?.content || {
    name: siteConfig.name,
    since: "2005",
    tagline: siteConfig.tagline,
    subtitle: siteConfig.subtitle,
    announcement: siteConfig.announcement,
    announcement_active: true
  };

  const initialBranches = branches && branches.length > 0 ? branches : [
    {
      id: '99999999-9999-9999-9999-999999999991',
      name: 'Korattur (Bus Terminus)',
      phone: '9840577561',
      whatsapp: '9840577561',
      google_maps_url: 'https://share.google/j4mzEfa6xKWc6cEn8',
      address: 'Near Korattur Bus Terminus & Railway Station, Korattur, Chennai - 600080',
      is_active: true
    },
    {
      id: '99999999-9999-9999-9999-999999999992',
      name: 'Korattur (Near Bv KG Block)',
      phone: '9677112878',
      whatsapp: '9677112878',
      google_maps_url: 'https://share.google/hlb26qSrDnSRx4HLl',
      address: 'Near Bv KG Block, Korattur, Chennai - 600080',
      is_active: true
    }
  ];

  return (
    <div className="max-w-5xl mx-auto space-y-6">
      <div>
        <h1 className="text-3xl font-serif font-bold text-charcoal mb-2">Business Details & Announcements</h1>
        <p className="text-sm text-charcoal-muted">Manage store identity, announcements, and quick branch reference.</p>
      </div>

      <BusinessClient initialConfig={initialConfig} initialBranches={initialBranches} />
    </div>
  );
}
