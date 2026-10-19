import React from 'react';
import { createClient } from '@/utils/supabase/server';
import { CategoriesClient } from './CategoriesClient';

export const metadata = { title: 'Manage Categories | Admin', robots: 'noindex, nofollow' };

export default async function CategoriesPage() {
  const supabase = await createClient();
  const { data: categories } = await supabase.from('categories').select('*').order('display_order', { ascending: true });
  
  const hasData = categories && categories.length > 0;
  
  const fallbackCategories = [
    {
      id: '11111111-1111-1111-1111-000000000001',
      name: 'Bridal Wear & Lehengas',
      slug: 'bridal',
      description: 'Grand bridal blouses, heavy zardozi, reception lehengas, and bespoke bridal wedding ensembles.',
      image_url: '/images/Bridal/IMG-20260925-WA0141.jpg',
      display_order: 1,
      show_on_home: true,
      home_position: 1,
      is_active: true
    },
    {
      id: '11111111-1111-1111-1111-000000000002',
      name: 'Aari Work Blouses',
      slug: 'aari-work',
      description: 'Intricate hand-crafted Aari embroidery, stone embellishments, zardozi motifs, and designer necklines.',
      image_url: '/images/aari work/IMG-20260925-WA0058.jpg',
      display_order: 2,
      show_on_home: true,
      home_position: 2,
      is_active: true
    },
    {
      id: '11111111-1111-1111-1111-000000000003',
      name: 'Custom Embroidery Designs',
      slug: 'embroidery',
      description: 'Precision computer and machine embroidery, delicate threadwork patterns, floral motifs, and sleeve borders.',
      image_url: '/images/emdroiadry designs/92ab050b0fc672ae1a191eedc4999ab8.jpg',
      display_order: 3,
      show_on_home: true,
      home_position: 3,
      is_active: true
    },
    {
      id: '11111111-1111-1111-1111-000000000004',
      name: 'Designer Tops & Blouses',
      slug: 'designer-blouses',
      description: 'Contemporary top blouses, princess cut, collar necklines, potli button details, and modern ethnic party tops.',
      image_url: '/images/categories/designer-blouse.jpg',
      display_order: 4,
      show_on_home: true,
      home_position: 4,
      is_active: true
    },
    {
      id: '11111111-1111-1111-1111-000000000005',
      name: 'Scallop & Cutwork Blouses',
      slug: 'scallop',
      description: 'Artisanal scalloped borders, laser and cutwork edging, and designer armhole patterns.',
      image_url: '/images/scalab/IMG-20260819-WA0014.jpg',
      display_order: 5,
      show_on_home: false,
      home_position: null,
      is_active: true
    },
    {
      id: '11111111-1111-1111-1111-000000000006',
      name: 'Salwar & Kurti Suits',
      slug: 'salwar-kurtis',
      description: 'Straight cut kurtas, flared Anarkalis, Pakistani suit cuts, and Patiala bottoms with breathable inner lining.',
      image_url: '/images/categories/designer-blouse.jpg',
      display_order: 6,
      show_on_home: false,
      home_position: null,
      is_active: true
    },
    {
      id: '11111111-1111-1111-1111-000000000007',
      name: 'Lehengas & Festive Wear',
      slug: 'lehengas-festive',
      description: 'Full flare circular skirts, can-can volume structuring, paneled lehengas, and reception evening gowns.',
      image_url: '/images/Bridal/IMG-20260925-WA0141.jpg',
      display_order: 7,
      show_on_home: false,
      home_position: null,
      is_active: true
    },
    {
      id: '11111111-1111-1111-1111-000000000008',
      name: 'Saree Care & Finishing',
      slug: 'saree-care',
      description: 'Saree pre-pleating, box folding, fall attachment, and pico edging prep for ready-to-drape sarees.',
      image_url: '/images/hero/hero-tailor-stitching.jpg',
      display_order: 8,
      show_on_home: false,
      home_position: null,
      is_active: true
    },
    {
      id: '11111111-1111-1111-1111-000000000009',
      name: 'Blouse Tailoring',
      slug: 'blouses',
      description: 'Princess cut, Katori, padded bridal blouses, high neck, boat neck, and potli button detailing aligned to your saree border.',
      image_url: '/images/hero/hero-tailor-stitching.jpg',
      display_order: 9,
      show_on_home: false,
      home_position: null,
      is_active: true
    }
  ];

  const displayCategories = hasData ? categories : fallbackCategories;

  return (
    <div className="max-w-5xl mx-auto">
      <h1 className="text-3xl font-serif font-bold text-charcoal mb-6">Manage Categories</h1>
      {!hasData && (
        <div className="bg-gold/20 text-gold-dark p-4 rounded-lg mb-6 border border-gold/40 text-sm">
          <strong>Note:</strong> You are viewing fallback frontend categories because the database table is currently empty. Run the migration to connect with live Supabase data.
        </div>
      )}
      <CategoriesClient initialData={displayCategories} />
    </div>
  );
}
