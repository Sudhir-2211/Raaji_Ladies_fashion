import React from 'react';
import { createClient } from '@/utils/supabase/server';
import { EnquiriesClient } from './EnquiriesClient';

export const metadata = { title: 'Manage Enquiries | Admin', robots: 'noindex, nofollow' };

export default async function EnquiriesPage() {
  const supabase = await createClient();
  const { data: enquiries } = await supabase.from('enquiries').select('*').order('created_at', { ascending: false });
  return (
    <div className="max-w-5xl mx-auto">
      <h1 className="text-3xl font-serif font-bold text-charcoal mb-6">Customer Enquiries</h1>
      <EnquiriesClient initialData={enquiries || []} />
    </div>
  );
}
