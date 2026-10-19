import React from 'react';
import { createClient } from '@/utils/supabase/server';
import { BranchesClient } from './BranchesClient';

export const metadata = { title: 'Manage Branches | Admin', robots: 'noindex, nofollow' };

export default async function BranchesPage() {
  const supabase = await createClient();
  const { data: branches, error } = await supabase.from('branches').select('*').order('created_at', { ascending: true });
  
  const hasData = branches && branches.length > 0;

  const fallbackBranches = [
    {
      id: '99999999-9999-9999-9999-999999999991',
      name: 'Korattur (Bus Terminus)',
      phone: '9840577561',
      whatsapp: '9840577561',
      google_maps_url: 'https://share.google/j4mzEfa6xKWc6cEn8',
      is_active: true
    },
    {
      id: '99999999-9999-9999-9999-999999999992',
      name: 'Korattur (Near Bv KG Block)',
      phone: '9677112878',
      whatsapp: '9677112878',
      google_maps_url: 'https://share.google/hlb26qSrDnSRx4HLl',
      is_active: true
    }
  ];

  const displayBranches = hasData ? branches : fallbackBranches;

  return (
    <div className="max-w-5xl mx-auto">
      <h1 className="text-3xl font-serif font-bold text-charcoal mb-6">Manage Branches</h1>
      
      {(!hasData || error) && (
        <div className="bg-gold/20 text-gold-dark p-4 rounded-lg mb-6 border border-gold/40 text-sm">
          <strong>Note:</strong> You are viewing fallback frontend content because the database table is empty or missing. Please ensure you have run the Phase 9C SQL Migration for Branches in your Supabase Dashboard.
        </div>
      )}
      
      <BranchesClient initialData={displayBranches} />
    </div>
  );
}
