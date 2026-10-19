import React from 'react';
import { createClient } from '@/utils/supabase/server';
import { FAQsClient } from './FAQsClient';

import { faqItems } from '@/data/faqData';

export const metadata = { title: 'Manage FAQs | Admin', robots: 'noindex, nofollow' };

export default async function FAQsPage() {
  const supabase = await createClient();
  const { data: faqs } = await supabase.from('faqs').select('*').order('display_order', { ascending: true });
  
  const hasData = faqs && faqs.length > 0;
  
  const displayFaqs = hasData ? faqs : faqItems.map((faq, i) => ({
    id: `77777777-7777-7777-7777-77777777777${i}`,
    question: faq.question,
    answer: faq.answer,
    display_order: i,
    is_active: true
  }));

  return (
    <div className="max-w-5xl mx-auto">
      <h1 className="text-3xl font-serif font-bold text-charcoal mb-6">Manage FAQs</h1>
      {!hasData && (
        <div className="bg-gold/20 text-gold-dark p-4 rounded-lg mb-6 border border-gold/40 text-sm">
          <strong>Note:</strong> You are viewing fallback frontend content because the database is currently empty. Please go to the <a href="/admin" className="underline font-bold">Dashboard</a> to safely run the Database Migration. Edits here will not save until migration is complete.
        </div>
      )}
      <FAQsClient initialData={displayFaqs} />
    </div>
  );
}
