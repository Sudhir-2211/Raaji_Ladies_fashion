import React from 'react';
import { createClient } from '@/utils/supabase/server';
import { ServicesClient } from './ServicesClient';

import { serviceCategories } from '@/data/servicesData';

export const metadata = { title: 'Manage Services | Admin', robots: 'noindex, nofollow' };

export default async function ServicesPage() {
  const supabase = await createClient();
  const { data: services } = await supabase.from('services').select('*').order('display_order', { ascending: true });
  
  const hasData = services && services.length > 0;
  
  const displayServices = hasData ? services : serviceCategories.map((serv, i) => ({
    id: `55555555-5555-5555-5555-55555555555${i}`,
    name: serv.title,
    description: serv.description,
    display_order: i,
    is_active: true
  }));

  return (
    <div className="max-w-5xl mx-auto">
      <h1 className="text-3xl font-serif font-bold text-charcoal mb-6">Manage Services</h1>
      {!hasData && (
        <div className="bg-gold/20 text-gold-dark p-4 rounded-lg mb-6 border border-gold/40 text-sm">
          <strong>Note:</strong> You are viewing fallback frontend content because the database is currently empty. Please go to the <a href="/admin" className="underline font-bold">Dashboard</a> to safely run the Database Migration. Edits here will not save until migration is complete.
        </div>
      )}
      <ServicesClient initialData={displayServices} />
    </div>
  );
}
