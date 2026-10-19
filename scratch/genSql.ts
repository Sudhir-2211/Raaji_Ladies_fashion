import { tailoringCategories } from '../data/homeData';
import { serviceCategories } from '../data/servicesData';
import { faqItems } from '../data/faqData';
import { galleryItems } from '../data/galleryData';
import * as fs from 'fs';
import * as path from 'path';

// Helper to escape SQL strings
const escapeSql = (str: string | undefined | null) => {
  if (!str) return 'NULL';
  return "'" + str.replace(/'/g, "''") + "'";
};

let sql = "-- Migration: Phase 9C Schema Update and Seed Data\n\n";

sql += "-- 1. Add Home Page columns to categories\n";
sql += "ALTER TABLE public.categories ADD COLUMN IF NOT EXISTS show_on_home boolean DEFAULT false;\n";
sql += "ALTER TABLE public.categories ADD COLUMN IF NOT EXISTS home_position integer;\n";
sql += "ALTER TABLE public.categories DROP CONSTRAINT IF EXISTS check_home_position;\n";
sql += "ALTER TABLE public.categories ADD CONSTRAINT check_home_position CHECK (home_position >= 1 AND home_position <= 4);\n\n";

sql += "-- 2. Seed Categories\n";
const catIds: Record<string, string> = {
  'blouses': '11111111-1111-1111-1111-111111111111',
  'salwar-kurtis': '22222222-2222-2222-2222-222222222222',
  'lehengas-festive': '33333333-3333-3333-3333-333333333333',
  'saree-care': '44444444-4444-4444-4444-444444444444'
};

tailoringCategories.forEach((cat, index) => {
  const id = catIds[cat.id] || `11111111-1111-1111-1111-11111111111${index}`;
  sql += `INSERT INTO public.categories (id, name, slug, description, image_url, display_order, show_on_home, home_position, is_active) 
VALUES ('${id}', ${escapeSql(cat.title)}, ${escapeSql(cat.id)}, ${escapeSql(cat.description)}, ${escapeSql((cat as any).imagePlaceholderAlt)}, ${index}, true, ${index + 1}, true) 
ON CONFLICT (slug) DO UPDATE SET show_on_home = EXCLUDED.show_on_home, home_position = EXCLUDED.home_position;\n`;
});

sql += "\n-- 3. Seed Services\n";
serviceCategories.forEach((serv, index) => {
  const id = '55555555-5555-5555-5555-55555555555' + index;
  sql += `INSERT INTO public.services (id, name, description, display_order, is_active)
VALUES ('${id}', ${escapeSql(serv.title)}, ${escapeSql(serv.description)}, ${index}, true)
ON CONFLICT (id) DO NOTHING;\n`;
});

sql += "\n-- 4. Seed FAQs\n";
faqItems.forEach((faq, index) => {
  sql += `INSERT INTO public.faqs (id, question, answer, display_order, is_active)
VALUES (gen_random_uuid(), ${escapeSql(faq.question)}, ${escapeSql(faq.answer)}, ${index}, true);\n`;
});


sql += "\n-- 6. Seed Gallery Items\n";
galleryItems.forEach((item, index) => {
  const catId = catIds[item.category] || null;
  const catIdStr = catId ? `'${catId}'` : 'NULL';
  sql += `INSERT INTO public.gallery_items (id, title, description, image_url, category_id, display_order, is_active)
VALUES (gen_random_uuid(), ${escapeSql(item.title)}, ${escapeSql(item.description || '')}, ${escapeSql((item as any).imagePlaceholderAlt)}, ${catIdStr}, ${index}, true);\n`;
});

fs.writeFileSync(path.join(__dirname, '../supabase/migrations/00000000000001_phase_9c_seed.sql'), sql);
console.log('SQL generated!');
