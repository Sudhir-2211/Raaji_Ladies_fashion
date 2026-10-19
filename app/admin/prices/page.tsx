import React from 'react';
import { createClient } from '@/utils/supabase/server';
import { PricesClient } from './PricesClient';

import { pricingCategories } from '@/data/pricingData';

export const metadata = { title: 'Manage Prices | Admin', robots: 'noindex, nofollow' };

export default async function PricesPage() {
  const supabase = await createClient();
  const [
    { data: prices },
    { data: categories },
    { data: services }
  ] = await Promise.all([
    supabase.from('prices').select('*').order('display_order', { ascending: true }),
    supabase.from('categories').select('*'),
    supabase.from('services').select('*'),
  ]);

  const hasData = prices && prices.length > 0;
  
  const catIds: Record<string, string> = {
    'blouses': '11111111-1111-1111-1111-111111111111',
    'salwar-kurtis': '22222222-2222-2222-2222-222222222222',
    'lehengas-festive': '33333333-3333-3333-3333-333333333333',
    'saree-care': '44444444-4444-4444-4444-444444444444'
  };

  const displayPrices = hasData ? prices : pricingCategories.map((price, i) => ({
    id: `66666666-6666-6666-6666-66666666666${i}`,
    name: price.title,
    price_text: price.pricingStatus,
    description: price.description,
    category_id: catIds[price.id] || null,
    display_order: i,
    is_active: true
  }));

  return (
    <div className="max-w-5xl mx-auto">
      <h1 className="text-3xl font-serif font-bold text-charcoal mb-6">Manage Prices</h1>
      {!hasData && (
        <div className="bg-gold/20 text-gold-dark p-4 rounded-lg mb-6 border border-gold/40 text-sm">
          <strong>Note:</strong> You are viewing fallback frontend content because the database is currently empty. Please go to the <a href="/admin" className="underline font-bold">Dashboard</a> to safely run the Database Migration. Edits here will not save until migration is complete.
        </div>
      )}
      <PricesClient initialData={displayPrices} categories={categories || []} services={services || []} />
    </div>
  );
}
