import React from 'react';
import { createClient } from '@/utils/supabase/server';
import { GalleryClient } from './GalleryClient';

import { galleryItems } from '@/data/galleryData';

export const metadata = { title: 'Manage Gallery | Admin', robots: 'noindex, nofollow' };

export default async function GalleryPage() {
  const supabase = await createClient();
  const [
    { data: gallery },
    { data: categories }
  ] = await Promise.all([
    supabase.from('gallery_items').select('*').order('created_at', { ascending: false }),
    supabase.from('categories').select('*'),
  ]);

  const hasData = gallery && gallery.length > 0;
  
  const catIds: Record<string, string> = {
    'blouses': '11111111-1111-1111-1111-111111111111',
    'salwar-kurtis': '22222222-2222-2222-2222-222222222222',
    'lehengas-festive': '33333333-3333-3333-3333-333333333333',
    'saree-care': '44444444-4444-4444-4444-444444444444'
  };

  const displayItems = hasData ? gallery : galleryItems.map((item, i) => ({
    id: `88888888-8888-8888-8888-88888888888${i}`,
    title: item.title,
    description: item.description,
    image_url: (item as any).imagePlaceholderAlt || '',
    category_id: catIds[item.category] || null,
    is_active: true
  }));

  return (
    <div className="max-w-5xl mx-auto">
      <h1 className="text-3xl font-serif font-bold text-charcoal mb-6">Manage Gallery</h1>
      {!hasData && (
        <div className="bg-gold/20 text-gold-dark p-4 rounded-lg mb-6 border border-gold/40 text-sm">
          <strong>Note:</strong> You are viewing fallback frontend content because the database is currently empty. Please go to the <a href="/admin" className="underline font-bold">Dashboard</a> to safely run the Database Migration. Edits here will not save until migration is complete.
        </div>
      )}
      <GalleryClient initialData={displayItems} categories={categories || []} />
    </div>
  );
}
