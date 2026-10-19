const fs = require('fs');
const path = require('path');

const write = (p, content) => {
  const fullPath = path.join(__dirname, '..', p);
  fs.mkdirSync(path.dirname(fullPath), { recursive: true });
  fs.writeFileSync(fullPath, content.trim() + '\n', 'utf8');
};

// CATEGORIES
write('app/admin/categories/page.tsx', `
import React from 'react';
import { createClient } from '@/utils/supabase/server';
import { CategoriesClient } from './CategoriesClient';

export const metadata = { title: 'Manage Categories | Admin', robots: 'noindex, nofollow' };

export default async function CategoriesPage() {
  const supabase = await createClient();
  const { data: categories } = await supabase.from('categories').select('*').order('display_order', { ascending: true });
  return (
    <div className="max-w-5xl mx-auto">
      <h1 className="text-3xl font-serif font-bold text-charcoal mb-6">Manage Categories</h1>
      <CategoriesClient initialData={categories || []} />
    </div>
  );
}
`);

// SERVICES
write('app/admin/services/page.tsx', `
import React from 'react';
import { createClient } from '@/utils/supabase/server';
import { ServicesClient } from './ServicesClient';

export const metadata = { title: 'Manage Services | Admin', robots: 'noindex, nofollow' };

export default async function ServicesPage() {
  const supabase = await createClient();
  const { data: services } = await supabase.from('services').select('*').order('display_order', { ascending: true });
  return (
    <div className="max-w-5xl mx-auto">
      <h1 className="text-3xl font-serif font-bold text-charcoal mb-6">Manage Services</h1>
      <ServicesClient initialData={services || []} />
    </div>
  );
}
`);

// FAQS
write('app/admin/faqs/page.tsx', `
import React from 'react';
import { createClient } from '@/utils/supabase/server';
import { FAQsClient } from './FAQsClient';

export const metadata = { title: 'Manage FAQs | Admin', robots: 'noindex, nofollow' };

export default async function FAQsPage() {
  const supabase = await createClient();
  const { data: faqs } = await supabase.from('faqs').select('*').order('display_order', { ascending: true });
  return (
    <div className="max-w-5xl mx-auto">
      <h1 className="text-3xl font-serif font-bold text-charcoal mb-6">Manage FAQs</h1>
      <FAQsClient initialData={faqs || []} />
    </div>
  );
}
`);

// ENQUIRIES
write('app/admin/enquiries/page.tsx', `
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
`);

console.log('Generated basic CRUD pages');
