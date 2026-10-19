const fs = require('fs');
const path = require('path');

// Helper to escape SQL single quotes
function esc(str) {
  if (str === null || str === undefined) return 'NULL';
  return "'" + String(str).replace(/'/g, "''") + "'";
}

function escArray(arr) {
  if (!arr || !arr.length) return "'{}'::text[]";
  const inner = arr.map(s => '"' + String(s).replace(/"/g, '\\"') + '"').join(',');
  return "'{" + inner + "}'::text[]";
}

let sql = `-- Migration: 00000000000003_complete_backend_migration.sql
-- Comprehensive, Idempotent Schema and Complete Frontend Content Seed for Raaji Ladies Fashion
-- Run this in Supabase Dashboard -> SQL Editor

-- ============================================================================
-- 1. EXTENSIONS & STORAGE
-- ============================================================================
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Storage Bucket for website images
INSERT INTO storage.buckets (id, name, public) 
VALUES ('website-images', 'website-images', true) 
ON CONFLICT (id) DO NOTHING;

-- Storage RLS Policies
DROP POLICY IF EXISTS "Public can view website images" ON storage.objects;
CREATE POLICY "Public can view website images" ON storage.objects
    FOR SELECT USING (bucket_id = 'website-images');

DROP POLICY IF EXISTS "Admin has full access to website images" ON storage.objects;
CREATE POLICY "Admin has full access to website images" ON storage.objects
    FOR ALL TO authenticated USING (bucket_id = 'website-images') WITH CHECK (bucket_id = 'website-images');

-- Updated_at trigger function
CREATE OR REPLACE FUNCTION public.handle_updated_at()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = timezone('utc'::text, now());
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- ============================================================================
-- 2. CATEGORIES TABLE
-- ============================================================================
CREATE TABLE IF NOT EXISTS public.categories (
    id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
    name text NOT NULL,
    slug text NOT NULL UNIQUE,
    description text,
    image_url text,
    display_order integer DEFAULT 0,
    show_on_home boolean DEFAULT false,
    home_position integer,
    is_active boolean DEFAULT true,
    created_at timestamp with time zone DEFAULT timezone('utc'::text, now()) NOT NULL,
    updated_at timestamp with time zone DEFAULT timezone('utc'::text, now()) NOT NULL
);

ALTER TABLE public.categories ADD COLUMN IF NOT EXISTS show_on_home boolean DEFAULT false;
ALTER TABLE public.categories ADD COLUMN IF NOT EXISTS home_position integer;
ALTER TABLE public.categories DROP CONSTRAINT IF EXISTS check_home_position;
ALTER TABLE public.categories ADD CONSTRAINT check_home_position CHECK (home_position IS NULL OR (home_position >= 1 AND home_position <= 4));

ALTER TABLE public.categories ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "Public can view active categories" ON public.categories;
CREATE POLICY "Public can view active categories" ON public.categories FOR SELECT USING (is_active = true);
DROP POLICY IF EXISTS "Admin has full access to categories" ON public.categories;
CREATE POLICY "Admin has full access to categories" ON public.categories FOR ALL TO authenticated USING (true) WITH CHECK (true);

DROP TRIGGER IF EXISTS categories_updated_at ON public.categories;
CREATE TRIGGER categories_updated_at BEFORE UPDATE ON public.categories FOR EACH ROW EXECUTE FUNCTION handle_updated_at();

-- ============================================================================
-- 3. SERVICES TABLE
-- ============================================================================
CREATE TABLE IF NOT EXISTS public.services (
    id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
    name text NOT NULL,
    slug text UNIQUE,
    subtitle text,
    description text,
    key_aspects text[] DEFAULT '{}'::text[],
    gallery_link text,
    image_url text,
    display_order integer DEFAULT 0,
    is_active boolean DEFAULT true,
    created_at timestamp with time zone DEFAULT timezone('utc'::text, now()) NOT NULL,
    updated_at timestamp with time zone DEFAULT timezone('utc'::text, now()) NOT NULL
);

ALTER TABLE public.services ADD COLUMN IF NOT EXISTS slug text;
ALTER TABLE public.services ADD COLUMN IF NOT EXISTS subtitle text;
ALTER TABLE public.services ADD COLUMN IF NOT EXISTS key_aspects text[] DEFAULT '{}'::text[];
ALTER TABLE public.services ADD COLUMN IF NOT EXISTS gallery_link text;

ALTER TABLE public.services ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "Public can view active services" ON public.services;
CREATE POLICY "Public can view active services" ON public.services FOR SELECT USING (is_active = true);
DROP POLICY IF EXISTS "Admin has full access to services" ON public.services;
CREATE POLICY "Admin has full access to services" ON public.services FOR ALL TO authenticated USING (true) WITH CHECK (true);

DROP TRIGGER IF EXISTS services_updated_at ON public.services;
CREATE TRIGGER services_updated_at BEFORE UPDATE ON public.services FOR EACH ROW EXECUTE FUNCTION handle_updated_at();

-- ============================================================================
-- 4. PRICES TABLE
-- ============================================================================
CREATE TABLE IF NOT EXISTS public.prices (
    id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
    service_id uuid REFERENCES public.services(id) ON DELETE SET NULL,
    category_id uuid REFERENCES public.categories(id) ON DELETE SET NULL,
    name text NOT NULL,
    price_text text NOT NULL,
    description text,
    specifications text[] DEFAULT '{}'::text[],
    recommendations text[] DEFAULT '{}'::text[],
    display_order integer DEFAULT 0,
    is_active boolean DEFAULT true,
    created_at timestamp with time zone DEFAULT timezone('utc'::text, now()) NOT NULL,
    updated_at timestamp with time zone DEFAULT timezone('utc'::text, now()) NOT NULL
);

ALTER TABLE public.prices ADD COLUMN IF NOT EXISTS specifications text[] DEFAULT '{}'::text[];
ALTER TABLE public.prices ADD COLUMN IF NOT EXISTS recommendations text[] DEFAULT '{}'::text[];

ALTER TABLE public.prices ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "Public can view active prices" ON public.prices;
CREATE POLICY "Public can view active prices" ON public.prices FOR SELECT USING (is_active = true);
DROP POLICY IF EXISTS "Admin has full access to prices" ON public.prices;
CREATE POLICY "Admin has full access to prices" ON public.prices FOR ALL TO authenticated USING (true) WITH CHECK (true);

DROP TRIGGER IF EXISTS prices_updated_at ON public.prices;
CREATE TRIGGER prices_updated_at BEFORE UPDATE ON public.prices FOR EACH ROW EXECUTE FUNCTION handle_updated_at();

-- ============================================================================
-- 5. GALLERY ITEMS TABLE
-- ============================================================================
CREATE TABLE IF NOT EXISTS public.gallery_items (
    id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
    sample_code text,
    title text,
    description text,
    image_url text NOT NULL,
    fabric text,
    occasion text,
    category_id uuid REFERENCES public.categories(id) ON DELETE SET NULL,
    display_order integer DEFAULT 0,
    is_active boolean DEFAULT true,
    created_at timestamp with time zone DEFAULT timezone('utc'::text, now()) NOT NULL,
    updated_at timestamp with time zone DEFAULT timezone('utc'::text, now()) NOT NULL
);

ALTER TABLE public.gallery_items ADD COLUMN IF NOT EXISTS sample_code text;
ALTER TABLE public.gallery_items ADD COLUMN IF NOT EXISTS fabric text;
ALTER TABLE public.gallery_items ADD COLUMN IF NOT EXISTS occasion text;

ALTER TABLE public.gallery_items ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "Public can view active gallery items" ON public.gallery_items;
CREATE POLICY "Public can view active gallery items" ON public.gallery_items FOR SELECT USING (is_active = true);
DROP POLICY IF EXISTS "Admin has full access to gallery items" ON public.gallery_items;
CREATE POLICY "Admin has full access to gallery items" ON public.gallery_items FOR ALL TO authenticated USING (true) WITH CHECK (true);

DROP TRIGGER IF EXISTS gallery_items_updated_at ON public.gallery_items;
CREATE TRIGGER gallery_items_updated_at BEFORE UPDATE ON public.gallery_items FOR EACH ROW EXECUTE FUNCTION handle_updated_at();

-- ============================================================================
-- 6. FAQS TABLE
-- ============================================================================
CREATE TABLE IF NOT EXISTS public.faqs (
    id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
    category text DEFAULT 'general',
    question text NOT NULL,
    answer text NOT NULL,
    display_order integer DEFAULT 0,
    is_active boolean DEFAULT true,
    created_at timestamp with time zone DEFAULT timezone('utc'::text, now()) NOT NULL,
    updated_at timestamp with time zone DEFAULT timezone('utc'::text, now()) NOT NULL
);

ALTER TABLE public.faqs ADD COLUMN IF NOT EXISTS category text DEFAULT 'general';

ALTER TABLE public.faqs ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "Public can view active faqs" ON public.faqs;
CREATE POLICY "Public can view active faqs" ON public.faqs FOR SELECT USING (is_active = true);
DROP POLICY IF EXISTS "Admin has full access to faqs" ON public.faqs;
CREATE POLICY "Admin has full access to faqs" ON public.faqs FOR ALL TO authenticated USING (true) WITH CHECK (true);

DROP TRIGGER IF EXISTS faqs_updated_at ON public.faqs;
CREATE TRIGGER faqs_updated_at BEFORE UPDATE ON public.faqs FOR EACH ROW EXECUTE FUNCTION handle_updated_at();

-- ============================================================================
-- 7. BRANCHES TABLE
-- ============================================================================
CREATE TABLE IF NOT EXISTS public.branches (
    id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
    name text NOT NULL,
    phone text NOT NULL,
    whatsapp text,
    google_maps_url text,
    address text,
    is_active boolean DEFAULT true,
    display_order integer DEFAULT 0,
    created_at timestamp with time zone DEFAULT timezone('utc'::text, now()) NOT NULL,
    updated_at timestamp with time zone DEFAULT timezone('utc'::text, now()) NOT NULL
);

ALTER TABLE public.branches ADD COLUMN IF NOT EXISTS address text;
ALTER TABLE public.branches ADD COLUMN IF NOT EXISTS display_order integer DEFAULT 0;

ALTER TABLE public.branches ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "Public can view active branches" ON public.branches;
CREATE POLICY "Public can view active branches" ON public.branches FOR SELECT USING (is_active = true);
DROP POLICY IF EXISTS "Admin has full access to branches" ON public.branches;
CREATE POLICY "Admin has full access to branches" ON public.branches FOR ALL TO authenticated USING (true) WITH CHECK (true);

DROP TRIGGER IF EXISTS branches_updated_at ON public.branches;
CREATE TRIGGER branches_updated_at BEFORE UPDATE ON public.branches FOR EACH ROW EXECUTE FUNCTION handle_updated_at();

-- ============================================================================
-- 8. ENQUIRIES TABLE
-- ============================================================================
CREATE TABLE IF NOT EXISTS public.enquiries (
    id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
    name text NOT NULL,
    mobile text NOT NULL,
    description text NOT NULL,
    branch_id uuid REFERENCES public.branches(id) ON DELETE SET NULL,
    branch_name text,
    status text DEFAULT 'new'::text NOT NULL CHECK (status IN ('new', 'contacted', 'completed')),
    created_at timestamp with time zone DEFAULT timezone('utc'::text, now()) NOT NULL,
    updated_at timestamp with time zone DEFAULT timezone('utc'::text, now()) NOT NULL
);

ALTER TABLE public.enquiries ADD COLUMN IF NOT EXISTS branch_id uuid REFERENCES public.branches(id) ON DELETE SET NULL;
ALTER TABLE public.enquiries ADD COLUMN IF NOT EXISTS branch_name text;

ALTER TABLE public.enquiries ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "Public can insert enquiries" ON public.enquiries;
CREATE POLICY "Public can insert enquiries" ON public.enquiries FOR INSERT WITH CHECK (true);
DROP POLICY IF EXISTS "Admin has full access to enquiries" ON public.enquiries;
CREATE POLICY "Admin has full access to enquiries" ON public.enquiries FOR ALL TO authenticated USING (true) WITH CHECK (true);

DROP TRIGGER IF EXISTS enquiries_updated_at ON public.enquiries;
CREATE TRIGGER enquiries_updated_at BEFORE UPDATE ON public.enquiries FOR EACH ROW EXECUTE FUNCTION handle_updated_at();

-- ============================================================================
-- 9. SITE_CONTENT TABLE (Key-value / Structured Site Information)
-- ============================================================================
CREATE TABLE IF NOT EXISTS public.site_content (
    id text PRIMARY KEY,
    title text,
    content jsonb NOT NULL,
    created_at timestamp with time zone DEFAULT timezone('utc'::text, now()) NOT NULL,
    updated_at timestamp with time zone DEFAULT timezone('utc'::text, now()) NOT NULL
);

ALTER TABLE public.site_content ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "Public can view site content" ON public.site_content;
CREATE POLICY "Public can view site content" ON public.site_content FOR SELECT USING (true);
DROP POLICY IF EXISTS "Admin has full access to site content" ON public.site_content;
CREATE POLICY "Admin has full access to site content" ON public.site_content FOR ALL TO authenticated USING (true) WITH CHECK (true);

DROP TRIGGER IF EXISTS site_content_updated_at ON public.site_content;
CREATE TRIGGER site_content_updated_at BEFORE UPDATE ON public.site_content FOR EACH ROW EXECUTE FUNCTION handle_updated_at();

-- ============================================================================
-- 10. SEED DATA (IDEMPOTENT UPSERTS)
-- ============================================================================
`;

// Categories Map
const categoriesData = [
  {
    id: '11111111-1111-1111-1111-000000000001',
    name: 'Bridal Wear & Lehengas',
    slug: 'bridal',
    description: 'Grand bridal blouses, heavy zardozi, reception lehengas, and bespoke bridal wedding ensembles.',
    image_url: '/images/Bridal/IMG-20260925-WA0141.jpg',
    display_order: 1,
    show_on_home: true,
    home_position: 1
  },
  {
    id: '11111111-1111-1111-1111-000000000002',
    name: 'Aari Work Blouses',
    slug: 'aari-work',
    description: 'Intricate hand-crafted Aari embroidery, stone embellishments, zardozi motifs, and designer necklines.',
    image_url: '/images/aari work/IMG-20260925-WA0058.jpg',
    display_order: 2,
    show_on_home: true,
    home_position: 2
  },
  {
    id: '11111111-1111-1111-1111-000000000003',
    name: 'Custom Embroidery Designs',
    slug: 'embroidery',
    description: 'Precision computer and machine embroidery, delicate threadwork patterns, floral motifs, and sleeve borders.',
    image_url: '/images/emdroiadry designs/92ab050b0fc672ae1a191eedc4999ab8.jpg',
    display_order: 3,
    show_on_home: true,
    home_position: 3
  },
  {
    id: '11111111-1111-1111-1111-000000000004',
    name: 'Designer Tops & Blouses',
    slug: 'designer-blouses',
    description: 'Contemporary top blouses, princess cut, collar necklines, potli button details, and modern ethnic party tops.',
    image_url: '/images/categories/designer-blouse.jpg',
    display_order: 4,
    show_on_home: true,
    home_position: 4
  },
  {
    id: '11111111-1111-1111-1111-000000000005',
    name: 'Scallop & Cutwork Blouses',
    slug: 'scallop',
    description: 'Artisanal scalloped borders, laser and cutwork edging, and designer armhole patterns.',
    image_url: '/images/scalab/IMG-20260819-WA0014.jpg',
    display_order: 5,
    show_on_home: false,
    home_position: null
  },
  {
    id: '11111111-1111-1111-1111-000000000006',
    name: 'Salwar & Kurti Suits',
    slug: 'salwar-kurtis',
    description: 'Straight cut kurtas, flared Anarkalis, Pakistani suit cuts, and Patiala bottoms with breathable inner lining.',
    image_url: '/images/categories/designer-blouse.jpg',
    display_order: 6,
    show_on_home: false,
    home_position: null
  },
  {
    id: '11111111-1111-1111-1111-000000000007',
    name: 'Lehengas & Festive Wear',
    slug: 'lehengas-festive',
    description: 'Full flare circular skirts, can-can volume structuring, paneled lehengas, and reception evening gowns.',
    image_url: '/images/Bridal/IMG-20260925-WA0141.jpg',
    display_order: 7,
    show_on_home: false,
    home_position: null
  },
  {
    id: '11111111-1111-1111-1111-000000000008',
    name: 'Saree Care & Finishing',
    slug: 'saree-care',
    description: 'Saree pre-pleating, box folding, fall attachment, and pico edging prep for ready-to-drape sarees.',
    image_url: '/images/hero/hero-tailor-stitching.jpg',
    display_order: 8,
    show_on_home: false,
    home_position: null
  },
  {
    id: '11111111-1111-1111-1111-000000000009',
    name: 'Blouse Tailoring',
    slug: 'blouses',
    description: 'Princess cut, Katori, padded bridal blouses, high neck, boat neck, and potli button detailing aligned to your saree border.',
    image_url: '/images/hero/hero-tailor-stitching.jpg',
    display_order: 9,
    show_on_home: false,
    home_position: null
  }
];

sql += `\n-- Seed Categories\n`;
for (const c of categoriesData) {
  sql += `INSERT INTO public.categories (id, name, slug, description, image_url, display_order, show_on_home, home_position, is_active)
VALUES (${esc(c.id)}, ${esc(c.name)}, ${esc(c.slug)}, ${esc(c.description)}, ${esc(c.image_url)}, ${c.display_order}, ${c.show_on_home}, ${c.home_position !== null ? c.home_position : 'NULL'}, true)
ON CONFLICT (slug) DO UPDATE SET
  name = EXCLUDED.name,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  display_order = EXCLUDED.display_order,
  show_on_home = EXCLUDED.show_on_home,
  home_position = EXCLUDED.home_position,
  is_active = EXCLUDED.is_active;\n`;
}

// Branches
const branchesData = [
  {
    id: '99999999-9999-9999-9999-999999999991',
    name: 'Korattur (Bus Terminus)',
    phone: '9840577561',
    whatsapp: '9840577561',
    google_maps_url: 'https://share.google/j4mzEfa6xKWc6cEn8',
    address: 'Near Korattur Bus Terminus & Railway Station, Korattur, Chennai - 600080',
    display_order: 1
  },
  {
    id: '99999999-9999-9999-9999-999999999992',
    name: 'Korattur (Near Bv KG Block)',
    phone: '9677112878',
    whatsapp: '9677112878',
    google_maps_url: 'https://share.google/hlb26qSrDnSRx4HLl',
    address: 'Near Bv KG Block, Korattur, Chennai - 600080',
    display_order: 2
  }
];

sql += `\n-- Seed Branches\n`;
for (const b of branchesData) {
  sql += `INSERT INTO public.branches (id, name, phone, whatsapp, google_maps_url, address, display_order, is_active)
VALUES (${esc(b.id)}, ${esc(b.name)}, ${esc(b.phone)}, ${esc(b.whatsapp)}, ${esc(b.google_maps_url)}, ${esc(b.address)}, ${b.display_order}, true)
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  phone = EXCLUDED.phone,
  whatsapp = EXCLUDED.whatsapp,
  google_maps_url = EXCLUDED.google_maps_url,
  address = EXCLUDED.address,
  is_active = EXCLUDED.is_active;\n`;
}

// Services
const servicesData = [
  {
    id: '55555555-5555-5555-5555-000000000001',
    name: 'Bridal Wear & Lehengas',
    slug: 'bridal',
    subtitle: 'Bespoke bridal couture, zardozi work, and grand reception ensembles',
    description: 'Grand bridal blouse tailoring and lehenga creation crafted from customer-supplied silk, velvet, and embellished fabrics.',
    key_aspects: [
      'Custom paper-pattern drafting and anatomical fit contouring',
      'Heavy zardozi, Maggam work alignment, and stone detailing placement',
      'Can-can mesh volume structuring for lehengas and wedding gowns',
      'Double lining with pure cotton voile for maximum comfort during ceremonies'
    ],
    gallery_link: '/gallery?category=bridal',
    image_url: '/images/Bridal/IMG-20260925-WA0141.jpg',
    display_order: 1
  },
  {
    id: '55555555-5555-5555-5555-000000000002',
    name: 'Aari Work Blouses',
    slug: 'aari-work',
    subtitle: 'Artisanal hand-embroidery, stone work, and intricate necklines',
    description: 'Hand-crafted Aari needlework custom tailored to individual necklines, sleeve borders, and back cutouts.',
    key_aspects: [
      'Intricate thread needlework, beadwork, and zardozi detailing',
      'Precision motif symmetry aligned to your saree border',
      'Padded cup placement and reinforced hook plackets',
      'Clean edge piping and cotton inner lining finish'
    ],
    gallery_link: '/gallery?category=aari-work',
    image_url: '/images/aari work/IMG-20260925-WA0058.jpg',
    display_order: 2
  },
  {
    id: '55555555-5555-5555-5555-000000000003',
    name: 'Custom Embroidery Designs',
    slug: 'embroidery',
    subtitle: 'Machine & computer embroidery for festive and daily ethnic wear',
    description: 'High-precision computerized thread embroidery and custom pattern stitching for blouses, tops, and festive wear.',
    key_aspects: [
      'Diverse floral, peacock, and geometric embroidery patterns',
      'Vibrant multi-thread color combinations customized to your fabric',
      'Smooth backing interlining to prevent thread friction',
      'Perfect sleeve hem and neck cut alignment'
    ],
    gallery_link: '/gallery?category=embroidery',
    image_url: '/images/emdroiadry designs/92ab050b0fc672ae1a191eedc4999ab8.jpg',
    display_order: 3
  },
  {
    id: '55555555-5555-5555-5555-000000000004',
    name: 'Scallop & Cutwork Blouses',
    slug: 'scallop',
    subtitle: 'Designer scalloped necklines, sleeve cutwork, and border edging',
    description: 'Bespoke scalloped edges, cutwork finishing, and precision border craftsmanship for wedding blouses and designer tops.',
    key_aspects: [
      'Laser-clean uniform scallops along neck and sleeve borders',
      'Reinforced interlining to maintain scallop structure over time',
      'Delicate contrast bead or sequin hand-placement inside cutouts',
      'Comfort-fitted underarm contours with zero thread irritation'
    ],
    gallery_link: '/gallery?category=scallop',
    image_url: '/images/scalab/IMG-20260819-WA0014.jpg',
    display_order: 4
  },
  {
    id: '55555555-5555-5555-5555-000000000005',
    name: 'Designer Tops & Collar Neck Blouses',
    slug: 'designer-blouses',
    subtitle: 'Princess cut, high neck, boat neck, and contemporary ethnic styles',
    description: 'Modern blouse silhouettes crafted with anatomical contouring, collar necks, boat necks, and designer sleeve options.',
    key_aspects: [
      'Collar neck, sweetheart, boat neck, and halter pattern drafting',
      'Princess cut seam shaping for a smooth, bulge-free bust fit',
      'Side concealed zip or front hook placket tailored to preference',
      'Generous 2-inch interior seam allowance for future adjustments'
    ],
    gallery_link: '/gallery?category=designer-blouses',
    image_url: '/images/categories/designer-blouse.jpg',
    display_order: 5
  }
];

sql += `\n-- Seed Services\n`;
for (const s of servicesData) {
  sql += `INSERT INTO public.services (id, name, slug, subtitle, description, key_aspects, gallery_link, image_url, display_order, is_active)
VALUES (${esc(s.id)}, ${esc(s.name)}, ${esc(s.slug)}, ${esc(s.subtitle)}, ${esc(s.description)}, ${escArray(s.key_aspects)}, ${esc(s.gallery_link)}, ${esc(s.image_url)}, ${s.display_order}, true)
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  slug = EXCLUDED.slug,
  subtitle = EXCLUDED.subtitle,
  description = EXCLUDED.description,
  key_aspects = EXCLUDED.key_aspects,
  gallery_link = EXCLUDED.gallery_link,
  image_url = EXCLUDED.image_url,
  display_order = EXCLUDED.display_order,
  is_active = EXCLUDED.is_active;\n`;
}

// Prices
const pricesData = [
  {
    id: '66666666-6666-6666-6666-000000000001',
    category_id: '11111111-1111-1111-1111-000000000009', // blouses
    service_id: '55555555-5555-5555-5555-000000000005',
    name: 'Blouse Tailoring Guidance',
    price_text: 'Estimate Upon Review',
    description: 'Bespoke blouse tailoring crafted from patron-supplied materials. Princess cut, Katori, padded bridal blouses, high neck, boat neck, and potli button detailing aligned to your saree border.',
    specifications: [
      'Individual paper pattern drafted to anatomical measurements',
      'Standard 2-inch side seam allowance for future alterations',
      'Pure cotton voile inner lining attachment',
      'Reinforced plackets and hand-finished hems'
    ],
    recommendations: [
      'Customer-supplied fabric: 0.8m to 1.2m recommended',
      'Consult in-shop for border alignment and neckline styling'
    ],
    display_order: 1
  },
  {
    id: '66666666-6666-6666-6666-000000000002',
    category_id: '11111111-1111-1111-1111-000000000006', // salwar-kurtis
    service_id: '55555555-5555-5555-5555-000000000003',
    name: 'Salwar, Anarkali & Kurti Suit Guidance',
    price_text: 'Estimate Upon Review',
    description: 'Custom tailoring for salwar suit sets, flared Anarkalis, and everyday or office-wear kurtis crafted from your unstitched dress materials.',
    specifications: [
      'Custom necklines with clean edge piping',
      'Comfortable armhole and sleeve contouring',
      'Full inner lining attachment for body and flare',
      'Custom bottom styling: pants, palazzo, or Patiala'
    ],
    recommendations: [
      'Customer-supplied fabric: 2.0m to 4.5m depending on style',
      'Bring reference kurta or fit preference'
    ],
    display_order: 2
  },
  {
    id: '66666666-6666-6666-6666-000000000003',
    category_id: '11111111-1111-1111-1111-000000000007', // lehengas-festive
    service_id: '55555555-5555-5555-5555-000000000001',
    name: 'Lehengas & Festive Ensembles Guidance',
    price_text: 'Estimate Upon Review',
    description: 'Bespoke festive attire and traditional ensembles tailored from customer-provided silks, brocades, and festive textiles for weddings and family functions.',
    specifications: [
      'Multi-panel circular flare drafting',
      'Structured can-can net volume insertion',
      'Reinforced waistband and concealed zipper placket',
      'Hand-finished dupatta pico edging'
    ],
    recommendations: [
      'Customer-supplied fabric: 4.0m to 6.0m for skirt flare',
      'Allow fitting review for optimal waist drape'
    ],
    display_order: 3
  },
  {
    id: '66666666-6666-6666-6666-000000000004',
    category_id: '11111111-1111-1111-1111-000000000008', // saree-care
    service_id: null,
    name: 'Saree Care & Finishing Guidance',
    price_text: 'Confirmed Upon Consultation',
    description: 'Garment preparation and finishing services to preserve fabric drape and prepare sarees for immediate, effortless wearing.',
    specifications: [
      'Pre-shrunk 100% pure cotton bottom fall hand-stitching',
      'Micro-dense zig-zag pico edging on pallu and borders',
      'Permanent accordion pleat folding and safe steam press',
      'Zero fiber pulling or puckering on delicate silks'
    ],
    recommendations: [
      'Bring saree at least 2 days before ceremony',
      'Box-folded packaging provided ready for drape'
    ],
    display_order: 4
  }
];

sql += `\n-- Seed Prices\n`;
for (const p of pricesData) {
  sql += `INSERT INTO public.prices (id, category_id, service_id, name, price_text, description, specifications, recommendations, display_order, is_active)
VALUES (${esc(p.id)}, ${esc(p.category_id)}, ${esc(p.service_id)}, ${esc(p.name)}, ${esc(p.price_text)}, ${esc(p.description)}, ${escArray(p.specifications)}, ${escArray(p.recommendations)}, ${p.display_order}, true)
ON CONFLICT (id) DO UPDATE SET
  category_id = EXCLUDED.category_id,
  service_id = EXCLUDED.service_id,
  name = EXCLUDED.name,
  price_text = EXCLUDED.price_text,
  description = EXCLUDED.description,
  specifications = EXCLUDED.specifications,
  recommendations = EXCLUDED.recommendations,
  display_order = EXCLUDED.display_order,
  is_active = EXCLUDED.is_active;\n`;
}

// FAQs
const faqFile = fs.readFileSync('data/faqData.ts', 'utf8');
const faqMatch = faqFile.match(/export const faqItems: FAQItem\[\] = (\[[\s\S]*?\]);/);
if (faqMatch) {
  const faqs = eval(faqMatch[1]);
  sql += `\n-- Seed FAQs (${faqs.length} items)\n`;
  faqs.forEach((faq, i) => {
    const id = '77777777-7777-7777-7777-' + i.toString(16).padStart(12, '0');
    sql += `INSERT INTO public.faqs (id, category, question, answer, display_order, is_active)
VALUES (${esc(id)}, ${esc(faq.category)}, ${esc(faq.question)}, ${esc(faq.answer)}, ${i + 1}, true)
ON CONFLICT (id) DO UPDATE SET
  category = EXCLUDED.category,
  question = EXCLUDED.question,
  answer = EXCLUDED.answer,
  display_order = EXCLUDED.display_order,
  is_active = EXCLUDED.is_active;\n`;
  });
}

// Gallery Items
const galleryFile = fs.readFileSync('data/galleryData.ts', 'utf8');
const galleryMatch = galleryFile.match(/export const galleryItems: GalleryItem\[\] = (\[[\s\S]*?\]);/);
if (galleryMatch) {
  const gallery = JSON.parse(galleryMatch[1]);
  const catSlugToId = {
    'bridal': '11111111-1111-1111-1111-000000000001',
    'aari-work': '11111111-1111-1111-1111-000000000002',
    'embroidery': '11111111-1111-1111-1111-000000000003',
    'designer-blouses': '11111111-1111-1111-1111-000000000004',
    'scallop': '11111111-1111-1111-1111-000000000005'
  };

  sql += `\n-- Seed Gallery Items (${gallery.length} items)\n`;
  gallery.forEach((item, i) => {
    const id = '88888888-8888-8888-8888-' + i.toString(16).padStart(12, '0');
    const catId = catSlugToId[item.category] || null;
    sql += `INSERT INTO public.gallery_items (id, sample_code, title, description, image_url, fabric, occasion, category_id, display_order, is_active)
VALUES (${esc(id)}, ${esc(item.sampleCode)}, ${esc(item.title)}, ${esc(item.description)}, ${esc(item.imageUrl)}, ${esc(item.fabric)}, ${esc(item.occasion)}, ${esc(catId)}, ${i + 1}, true)
ON CONFLICT (id) DO UPDATE SET
  sample_code = EXCLUDED.sample_code,
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  fabric = EXCLUDED.fabric,
  occasion = EXCLUDED.occasion,
  category_id = EXCLUDED.category_id,
  display_order = EXCLUDED.display_order,
  is_active = EXCLUDED.is_active;\n`;
  });
}

// Site Content (Config & About)
sql += `\n-- Seed Site Content\n`;
const siteConfig = {
  name: "RAAJI Ladies Fashion",
  since: "2005",
  tagline: "The Most Trusted Tailor in Korattur",
  subtitle: "Custom tailoring, blouse stitching, dress tailoring, saree care and more.",
  announcement: "Bring your own fabrics • Precision anatomical fit • Established 2005",
  announcement_active: true
};

sql += `INSERT INTO public.site_content (id, title, content)
VALUES ('site_config', 'Site Configuration', ${esc(JSON.stringify(siteConfig))}::jsonb)
ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  content = EXCLUDED.content;\n`;

fs.writeFileSync('supabase/migrations/00000000000003_complete_backend_migration.sql', sql);
console.log('Migration generated successfully! Total bytes:', sql.length);
