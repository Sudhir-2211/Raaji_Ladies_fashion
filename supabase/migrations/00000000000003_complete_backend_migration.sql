-- Migration: 00000000000003_complete_backend_migration.sql
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

-- Seed Categories
INSERT INTO public.categories (id, name, slug, description, image_url, display_order, show_on_home, home_position, is_active)
VALUES ('11111111-1111-1111-1111-000000000001', 'Bridal Wear & Lehengas', 'bridal', 'Grand bridal blouses, heavy zardozi, reception lehengas, and bespoke bridal wedding ensembles.', '/images/Bridal/IMG-20260925-WA0141.jpg', 1, true, 1, true)
ON CONFLICT (slug) DO UPDATE SET
  name = EXCLUDED.name,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  display_order = EXCLUDED.display_order,
  show_on_home = EXCLUDED.show_on_home,
  home_position = EXCLUDED.home_position,
  is_active = EXCLUDED.is_active;
INSERT INTO public.categories (id, name, slug, description, image_url, display_order, show_on_home, home_position, is_active)
VALUES ('11111111-1111-1111-1111-000000000002', 'Aari Work Blouses', 'aari-work', 'Intricate hand-crafted Aari embroidery, stone embellishments, zardozi motifs, and designer necklines.', '/images/aari work/IMG-20260925-WA0058.jpg', 2, true, 2, true)
ON CONFLICT (slug) DO UPDATE SET
  name = EXCLUDED.name,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  display_order = EXCLUDED.display_order,
  show_on_home = EXCLUDED.show_on_home,
  home_position = EXCLUDED.home_position,
  is_active = EXCLUDED.is_active;
INSERT INTO public.categories (id, name, slug, description, image_url, display_order, show_on_home, home_position, is_active)
VALUES ('11111111-1111-1111-1111-000000000003', 'Custom Embroidery Designs', 'embroidery', 'Precision computer and machine embroidery, delicate threadwork patterns, floral motifs, and sleeve borders.', '/images/emdroiadry designs/92ab050b0fc672ae1a191eedc4999ab8.jpg', 3, true, 3, true)
ON CONFLICT (slug) DO UPDATE SET
  name = EXCLUDED.name,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  display_order = EXCLUDED.display_order,
  show_on_home = EXCLUDED.show_on_home,
  home_position = EXCLUDED.home_position,
  is_active = EXCLUDED.is_active;
INSERT INTO public.categories (id, name, slug, description, image_url, display_order, show_on_home, home_position, is_active)
VALUES ('11111111-1111-1111-1111-000000000004', 'Designer Tops & Blouses', 'designer-blouses', 'Contemporary top blouses, princess cut, collar necklines, potli button details, and modern ethnic party tops.', '/images/categories/designer-blouse.jpg', 4, true, 4, true)
ON CONFLICT (slug) DO UPDATE SET
  name = EXCLUDED.name,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  display_order = EXCLUDED.display_order,
  show_on_home = EXCLUDED.show_on_home,
  home_position = EXCLUDED.home_position,
  is_active = EXCLUDED.is_active;
INSERT INTO public.categories (id, name, slug, description, image_url, display_order, show_on_home, home_position, is_active)
VALUES ('11111111-1111-1111-1111-000000000005', 'Scallop & Cutwork Blouses', 'scallop', 'Artisanal scalloped borders, laser and cutwork edging, and designer armhole patterns.', '/images/scalab/IMG-20260819-WA0014.jpg', 5, false, NULL, true)
ON CONFLICT (slug) DO UPDATE SET
  name = EXCLUDED.name,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  display_order = EXCLUDED.display_order,
  show_on_home = EXCLUDED.show_on_home,
  home_position = EXCLUDED.home_position,
  is_active = EXCLUDED.is_active;
INSERT INTO public.categories (id, name, slug, description, image_url, display_order, show_on_home, home_position, is_active)
VALUES ('11111111-1111-1111-1111-000000000006', 'Salwar & Kurti Suits', 'salwar-kurtis', 'Straight cut kurtas, flared Anarkalis, Pakistani suit cuts, and Patiala bottoms with breathable inner lining.', '/images/categories/designer-blouse.jpg', 6, false, NULL, true)
ON CONFLICT (slug) DO UPDATE SET
  name = EXCLUDED.name,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  display_order = EXCLUDED.display_order,
  show_on_home = EXCLUDED.show_on_home,
  home_position = EXCLUDED.home_position,
  is_active = EXCLUDED.is_active;
INSERT INTO public.categories (id, name, slug, description, image_url, display_order, show_on_home, home_position, is_active)
VALUES ('11111111-1111-1111-1111-000000000007', 'Lehengas & Festive Wear', 'lehengas-festive', 'Full flare circular skirts, can-can volume structuring, paneled lehengas, and reception evening gowns.', '/images/Bridal/IMG-20260925-WA0141.jpg', 7, false, NULL, true)
ON CONFLICT (slug) DO UPDATE SET
  name = EXCLUDED.name,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  display_order = EXCLUDED.display_order,
  show_on_home = EXCLUDED.show_on_home,
  home_position = EXCLUDED.home_position,
  is_active = EXCLUDED.is_active;
INSERT INTO public.categories (id, name, slug, description, image_url, display_order, show_on_home, home_position, is_active)
VALUES ('11111111-1111-1111-1111-000000000008', 'Saree Care & Finishing', 'saree-care', 'Saree pre-pleating, box folding, fall attachment, and pico edging prep for ready-to-drape sarees.', '/images/hero/hero-tailor-stitching.jpg', 8, false, NULL, true)
ON CONFLICT (slug) DO UPDATE SET
  name = EXCLUDED.name,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  display_order = EXCLUDED.display_order,
  show_on_home = EXCLUDED.show_on_home,
  home_position = EXCLUDED.home_position,
  is_active = EXCLUDED.is_active;
INSERT INTO public.categories (id, name, slug, description, image_url, display_order, show_on_home, home_position, is_active)
VALUES ('11111111-1111-1111-1111-000000000009', 'Blouse Tailoring', 'blouses', 'Princess cut, Katori, padded bridal blouses, high neck, boat neck, and potli button detailing aligned to your saree border.', '/images/hero/hero-tailor-stitching.jpg', 9, false, NULL, true)
ON CONFLICT (slug) DO UPDATE SET
  name = EXCLUDED.name,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  display_order = EXCLUDED.display_order,
  show_on_home = EXCLUDED.show_on_home,
  home_position = EXCLUDED.home_position,
  is_active = EXCLUDED.is_active;

-- Seed Branches
INSERT INTO public.branches (id, name, phone, whatsapp, google_maps_url, address, display_order, is_active)
VALUES ('99999999-9999-9999-9999-999999999991', 'Korattur (Bus Terminus)', '9840577561', '9840577561', 'https://share.google/j4mzEfa6xKWc6cEn8', 'Near Korattur Bus Terminus & Railway Station, Korattur, Chennai - 600080', 1, true)
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  phone = EXCLUDED.phone,
  whatsapp = EXCLUDED.whatsapp,
  google_maps_url = EXCLUDED.google_maps_url,
  address = EXCLUDED.address,
  is_active = EXCLUDED.is_active;
INSERT INTO public.branches (id, name, phone, whatsapp, google_maps_url, address, display_order, is_active)
VALUES ('99999999-9999-9999-9999-999999999992', 'Korattur (Near Bv KG Block)', '9677112878', '9677112878', 'https://share.google/hlb26qSrDnSRx4HLl', 'Near Bv KG Block, Korattur, Chennai - 600080', 2, true)
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  phone = EXCLUDED.phone,
  whatsapp = EXCLUDED.whatsapp,
  google_maps_url = EXCLUDED.google_maps_url,
  address = EXCLUDED.address,
  is_active = EXCLUDED.is_active;

-- Seed Services
INSERT INTO public.services (id, name, slug, subtitle, description, key_aspects, gallery_link, image_url, display_order, is_active)
VALUES ('55555555-5555-5555-5555-000000000001', 'Bridal Wear & Lehengas', 'bridal', 'Bespoke bridal couture, zardozi work, and grand reception ensembles', 'Grand bridal blouse tailoring and lehenga creation crafted from customer-supplied silk, velvet, and embellished fabrics.', '{"Custom paper-pattern drafting and anatomical fit contouring","Heavy zardozi, Maggam work alignment, and stone detailing placement","Can-can mesh volume structuring for lehengas and wedding gowns","Double lining with pure cotton voile for maximum comfort during ceremonies"}'::text[], '/gallery?category=bridal', '/images/Bridal/IMG-20260925-WA0141.jpg', 1, true)
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  slug = EXCLUDED.slug,
  subtitle = EXCLUDED.subtitle,
  description = EXCLUDED.description,
  key_aspects = EXCLUDED.key_aspects,
  gallery_link = EXCLUDED.gallery_link,
  image_url = EXCLUDED.image_url,
  display_order = EXCLUDED.display_order,
  is_active = EXCLUDED.is_active;
INSERT INTO public.services (id, name, slug, subtitle, description, key_aspects, gallery_link, image_url, display_order, is_active)
VALUES ('55555555-5555-5555-5555-000000000002', 'Aari Work Blouses', 'aari-work', 'Artisanal hand-embroidery, stone work, and intricate necklines', 'Hand-crafted Aari needlework custom tailored to individual necklines, sleeve borders, and back cutouts.', '{"Intricate thread needlework, beadwork, and zardozi detailing","Precision motif symmetry aligned to your saree border","Padded cup placement and reinforced hook plackets","Clean edge piping and cotton inner lining finish"}'::text[], '/gallery?category=aari-work', '/images/aari work/IMG-20260925-WA0058.jpg', 2, true)
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  slug = EXCLUDED.slug,
  subtitle = EXCLUDED.subtitle,
  description = EXCLUDED.description,
  key_aspects = EXCLUDED.key_aspects,
  gallery_link = EXCLUDED.gallery_link,
  image_url = EXCLUDED.image_url,
  display_order = EXCLUDED.display_order,
  is_active = EXCLUDED.is_active;
INSERT INTO public.services (id, name, slug, subtitle, description, key_aspects, gallery_link, image_url, display_order, is_active)
VALUES ('55555555-5555-5555-5555-000000000003', 'Custom Embroidery Designs', 'embroidery', 'Machine & computer embroidery for festive and daily ethnic wear', 'High-precision computerized thread embroidery and custom pattern stitching for blouses, tops, and festive wear.', '{"Diverse floral, peacock, and geometric embroidery patterns","Vibrant multi-thread color combinations customized to your fabric","Smooth backing interlining to prevent thread friction","Perfect sleeve hem and neck cut alignment"}'::text[], '/gallery?category=embroidery', '/images/emdroiadry designs/92ab050b0fc672ae1a191eedc4999ab8.jpg', 3, true)
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  slug = EXCLUDED.slug,
  subtitle = EXCLUDED.subtitle,
  description = EXCLUDED.description,
  key_aspects = EXCLUDED.key_aspects,
  gallery_link = EXCLUDED.gallery_link,
  image_url = EXCLUDED.image_url,
  display_order = EXCLUDED.display_order,
  is_active = EXCLUDED.is_active;
INSERT INTO public.services (id, name, slug, subtitle, description, key_aspects, gallery_link, image_url, display_order, is_active)
VALUES ('55555555-5555-5555-5555-000000000004', 'Scallop & Cutwork Blouses', 'scallop', 'Designer scalloped necklines, sleeve cutwork, and border edging', 'Bespoke scalloped edges, cutwork finishing, and precision border craftsmanship for wedding blouses and designer tops.', '{"Laser-clean uniform scallops along neck and sleeve borders","Reinforced interlining to maintain scallop structure over time","Delicate contrast bead or sequin hand-placement inside cutouts","Comfort-fitted underarm contours with zero thread irritation"}'::text[], '/gallery?category=scallop', '/images/scalab/IMG-20260819-WA0014.jpg', 4, true)
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  slug = EXCLUDED.slug,
  subtitle = EXCLUDED.subtitle,
  description = EXCLUDED.description,
  key_aspects = EXCLUDED.key_aspects,
  gallery_link = EXCLUDED.gallery_link,
  image_url = EXCLUDED.image_url,
  display_order = EXCLUDED.display_order,
  is_active = EXCLUDED.is_active;
INSERT INTO public.services (id, name, slug, subtitle, description, key_aspects, gallery_link, image_url, display_order, is_active)
VALUES ('55555555-5555-5555-5555-000000000005', 'Designer Tops & Collar Neck Blouses', 'designer-blouses', 'Princess cut, high neck, boat neck, and contemporary ethnic styles', 'Modern blouse silhouettes crafted with anatomical contouring, collar necks, boat necks, and designer sleeve options.', '{"Collar neck, sweetheart, boat neck, and halter pattern drafting","Princess cut seam shaping for a smooth, bulge-free bust fit","Side concealed zip or front hook placket tailored to preference","Generous 2-inch interior seam allowance for future adjustments"}'::text[], '/gallery?category=designer-blouses', '/images/categories/designer-blouse.jpg', 5, true)
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  slug = EXCLUDED.slug,
  subtitle = EXCLUDED.subtitle,
  description = EXCLUDED.description,
  key_aspects = EXCLUDED.key_aspects,
  gallery_link = EXCLUDED.gallery_link,
  image_url = EXCLUDED.image_url,
  display_order = EXCLUDED.display_order,
  is_active = EXCLUDED.is_active;

-- Seed Prices
INSERT INTO public.prices (id, category_id, service_id, name, price_text, description, specifications, recommendations, display_order, is_active)
VALUES ('66666666-6666-6666-6666-000000000001', '11111111-1111-1111-1111-000000000009', '55555555-5555-5555-5555-000000000005', 'Blouse Tailoring Guidance', 'Estimate Upon Review', 'Bespoke blouse tailoring crafted from patron-supplied materials. Princess cut, Katori, padded bridal blouses, high neck, boat neck, and potli button detailing aligned to your saree border.', '{"Individual paper pattern drafted to anatomical measurements","Standard 2-inch side seam allowance for future alterations","Pure cotton voile inner lining attachment","Reinforced plackets and hand-finished hems"}'::text[], '{"Customer-supplied fabric: 0.8m to 1.2m recommended","Consult in-shop for border alignment and neckline styling"}'::text[], 1, true)
ON CONFLICT (id) DO UPDATE SET
  category_id = EXCLUDED.category_id,
  service_id = EXCLUDED.service_id,
  name = EXCLUDED.name,
  price_text = EXCLUDED.price_text,
  description = EXCLUDED.description,
  specifications = EXCLUDED.specifications,
  recommendations = EXCLUDED.recommendations,
  display_order = EXCLUDED.display_order,
  is_active = EXCLUDED.is_active;
INSERT INTO public.prices (id, category_id, service_id, name, price_text, description, specifications, recommendations, display_order, is_active)
VALUES ('66666666-6666-6666-6666-000000000002', '11111111-1111-1111-1111-000000000006', '55555555-5555-5555-5555-000000000003', 'Salwar, Anarkali & Kurti Suit Guidance', 'Estimate Upon Review', 'Custom tailoring for salwar suit sets, flared Anarkalis, and everyday or office-wear kurtis crafted from your unstitched dress materials.', '{"Custom necklines with clean edge piping","Comfortable armhole and sleeve contouring","Full inner lining attachment for body and flare","Custom bottom styling: pants, palazzo, or Patiala"}'::text[], '{"Customer-supplied fabric: 2.0m to 4.5m depending on style","Bring reference kurta or fit preference"}'::text[], 2, true)
ON CONFLICT (id) DO UPDATE SET
  category_id = EXCLUDED.category_id,
  service_id = EXCLUDED.service_id,
  name = EXCLUDED.name,
  price_text = EXCLUDED.price_text,
  description = EXCLUDED.description,
  specifications = EXCLUDED.specifications,
  recommendations = EXCLUDED.recommendations,
  display_order = EXCLUDED.display_order,
  is_active = EXCLUDED.is_active;
INSERT INTO public.prices (id, category_id, service_id, name, price_text, description, specifications, recommendations, display_order, is_active)
VALUES ('66666666-6666-6666-6666-000000000003', '11111111-1111-1111-1111-000000000007', '55555555-5555-5555-5555-000000000001', 'Lehengas & Festive Ensembles Guidance', 'Estimate Upon Review', 'Bespoke festive attire and traditional ensembles tailored from customer-provided silks, brocades, and festive textiles for weddings and family functions.', '{"Multi-panel circular flare drafting","Structured can-can net volume insertion","Reinforced waistband and concealed zipper placket","Hand-finished dupatta pico edging"}'::text[], '{"Customer-supplied fabric: 4.0m to 6.0m for skirt flare","Allow fitting review for optimal waist drape"}'::text[], 3, true)
ON CONFLICT (id) DO UPDATE SET
  category_id = EXCLUDED.category_id,
  service_id = EXCLUDED.service_id,
  name = EXCLUDED.name,
  price_text = EXCLUDED.price_text,
  description = EXCLUDED.description,
  specifications = EXCLUDED.specifications,
  recommendations = EXCLUDED.recommendations,
  display_order = EXCLUDED.display_order,
  is_active = EXCLUDED.is_active;
INSERT INTO public.prices (id, category_id, service_id, name, price_text, description, specifications, recommendations, display_order, is_active)
VALUES ('66666666-6666-6666-6666-000000000004', '11111111-1111-1111-1111-000000000008', NULL, 'Saree Care & Finishing Guidance', 'Confirmed Upon Consultation', 'Garment preparation and finishing services to preserve fabric drape and prepare sarees for immediate, effortless wearing.', '{"Pre-shrunk 100% pure cotton bottom fall hand-stitching","Micro-dense zig-zag pico edging on pallu and borders","Permanent accordion pleat folding and safe steam press","Zero fiber pulling or puckering on delicate silks"}'::text[], '{"Bring saree at least 2 days before ceremony","Box-folded packaging provided ready for drape"}'::text[], 4, true)
ON CONFLICT (id) DO UPDATE SET
  category_id = EXCLUDED.category_id,
  service_id = EXCLUDED.service_id,
  name = EXCLUDED.name,
  price_text = EXCLUDED.price_text,
  description = EXCLUDED.description,
  specifications = EXCLUDED.specifications,
  recommendations = EXCLUDED.recommendations,
  display_order = EXCLUDED.display_order,
  is_active = EXCLUDED.is_active;

-- Seed FAQs (25 items)
INSERT INTO public.faqs (id, category, question, answer, display_order, is_active)
VALUES ('77777777-7777-7777-7777-000000000000', 'fabric', 'Can I bring my own fabric?', 'Yes. Customers can bring their own fabric, and our tailoring services are designed around customer-supplied materials.', 1, true)
ON CONFLICT (id) DO UPDATE SET
  category = EXCLUDED.category,
  question = EXCLUDED.question,
  answer = EXCLUDED.answer,
  display_order = EXCLUDED.display_order,
  is_active = EXCLUDED.is_active;
INSERT INTO public.faqs (id, category, question, answer, display_order, is_active)
VALUES ('77777777-7777-7777-7777-000000000001', 'fabric', 'How much fabric should I bring?', 'Fabric requirements depend on the garment design, sleeve style, and size. General meterage guidelines are available in our Fabric Meterage Guide on the Services page. Fabric requirements can be discussed when you bring your material to the shop.', 2, true)
ON CONFLICT (id) DO UPDATE SET
  category = EXCLUDED.category,
  question = EXCLUDED.question,
  answer = EXCLUDED.answer,
  display_order = EXCLUDED.display_order,
  is_active = EXCLUDED.is_active;
INSERT INTO public.faqs (id, category, question, answer, display_order, is_active)
VALUES ('77777777-7777-7777-7777-000000000002', 'fabric', 'Can I bring lining material?', 'Yes. You may bring your own lining material if your garment requires lining, or you can discuss lining requirements in-store.', 3, true)
ON CONFLICT (id) DO UPDATE SET
  category = EXCLUDED.category,
  question = EXCLUDED.question,
  answer = EXCLUDED.answer,
  display_order = EXCLUDED.display_order,
  is_active = EXCLUDED.is_active;
INSERT INTO public.faqs (id, category, question, answer, display_order, is_active)
VALUES ('77777777-7777-7777-7777-000000000003', 'fabric', 'Can I bring borders, laces, contrast patches, or other design materials?', 'Yes. Customers can bring borders, laces, contrast patches, or other design materials if they are part of the intended garment design.', 4, true)
ON CONFLICT (id) DO UPDATE SET
  category = EXCLUDED.category,
  question = EXCLUDED.question,
  answer = EXCLUDED.answer,
  display_order = EXCLUDED.display_order,
  is_active = EXCLUDED.is_active;
INSERT INTO public.faqs (id, category, question, answer, display_order, is_active)
VALUES ('77777777-7777-7777-7777-000000000004', 'fabric', 'What happens if I am unsure whether I have enough fabric?', 'Bring your unstitched fabric to the shop so the fabric quantity can be reviewed against your chosen design requirements.', 5, true)
ON CONFLICT (id) DO UPDATE SET
  category = EXCLUDED.category,
  question = EXCLUDED.question,
  answer = EXCLUDED.answer,
  display_order = EXCLUDED.display_order,
  is_active = EXCLUDED.is_active;
INSERT INTO public.faqs (id, category, question, answer, display_order, is_active)
VALUES ('77777777-7777-7777-7777-000000000005', 'services', 'What types of garments do you stitch?', 'We offer tailoring services across four categories: Blouse Tailoring, Salwar, Anarkali & Kurti Tailoring, Lehengas & Festive Wear, and Saree Care & Finishing.', 6, true)
ON CONFLICT (id) DO UPDATE SET
  category = EXCLUDED.category,
  question = EXCLUDED.question,
  answer = EXCLUDED.answer,
  display_order = EXCLUDED.display_order,
  is_active = EXCLUDED.is_active;
INSERT INTO public.faqs (id, category, question, answer, display_order, is_active)
VALUES ('77777777-7777-7777-7777-000000000006', 'services', 'Do you stitch blouses?', 'Yes. We offer blouse tailoring based on individual measurements, design requirements, neckline preferences, and sleeve requirements.', 7, true)
ON CONFLICT (id) DO UPDATE SET
  category = EXCLUDED.category,
  question = EXCLUDED.question,
  answer = EXCLUDED.answer,
  display_order = EXCLUDED.display_order,
  is_active = EXCLUDED.is_active;
INSERT INTO public.faqs (id, category, question, answer, display_order, is_active)
VALUES ('77777777-7777-7777-7777-000000000007', 'services', 'Do you stitch salwar, Anarkali and kurti garments?', 'Yes. We offer tailoring for salwar, Anarkali and kurti garments using customer-supplied fabrics.', 8, true)
ON CONFLICT (id) DO UPDATE SET
  category = EXCLUDED.category,
  question = EXCLUDED.question,
  answer = EXCLUDED.answer,
  display_order = EXCLUDED.display_order,
  is_active = EXCLUDED.is_active;
INSERT INTO public.faqs (id, category, question, answer, display_order, is_active)
VALUES ('77777777-7777-7777-7777-000000000008', 'services', 'Do you stitch lehengas and festive wear?', 'Yes. We offer tailoring for lehengas and festive wear using customer-supplied fabrics and design references.', 9, true)
ON CONFLICT (id) DO UPDATE SET
  category = EXCLUDED.category,
  question = EXCLUDED.question,
  answer = EXCLUDED.answer,
  display_order = EXCLUDED.display_order,
  is_active = EXCLUDED.is_active;
INSERT INTO public.faqs (id, category, question, answer, display_order, is_active)
VALUES ('77777777-7777-7777-7777-000000000009', 'services', 'What does Saree Care & Finishing cover?', 'Saree Care & Finishing covers preparation and finishing services for sarees based on the requirements discussed in-store.', 10, true)
ON CONFLICT (id) DO UPDATE SET
  category = EXCLUDED.category,
  question = EXCLUDED.question,
  answer = EXCLUDED.answer,
  display_order = EXCLUDED.display_order,
  is_active = EXCLUDED.is_active;
INSERT INTO public.faqs (id, category, question, answer, display_order, is_active)
VALUES ('77777777-7777-7777-7777-00000000000a', 'design', 'Can I bring a reference photo?', 'Yes. Customers can bring saved photos or design references to discuss how the pattern can be adapted to their fabric and measurements.', 11, true)
ON CONFLICT (id) DO UPDATE SET
  category = EXCLUDED.category,
  question = EXCLUDED.question,
  answer = EXCLUDED.answer,
  display_order = EXCLUDED.display_order,
  is_active = EXCLUDED.is_active;
INSERT INTO public.faqs (id, category, question, answer, display_order, is_active)
VALUES ('77777777-7777-7777-7777-00000000000b', 'design', 'Can I bring an existing garment as a reference?', 'Yes. Bringing a favourite or well-fitting garment can help communicate the design or fit you would like to reference.', 12, true)
ON CONFLICT (id) DO UPDATE SET
  category = EXCLUDED.category,
  question = EXCLUDED.question,
  answer = EXCLUDED.answer,
  display_order = EXCLUDED.display_order,
  is_active = EXCLUDED.is_active;
INSERT INTO public.faqs (id, category, question, answer, display_order, is_active)
VALUES ('77777777-7777-7777-7777-00000000000c', 'design', 'Can I show a design from the website Gallery?', 'Yes. You can reference sample patterns shown in the website Gallery when visiting the shop.', 13, true)
ON CONFLICT (id) DO UPDATE SET
  category = EXCLUDED.category,
  question = EXCLUDED.question,
  answer = EXCLUDED.answer,
  display_order = EXCLUDED.display_order,
  is_active = EXCLUDED.is_active;
INSERT INTO public.faqs (id, category, question, answer, display_order, is_active)
VALUES ('77777777-7777-7777-7777-00000000000d', 'design', 'How should I identify a Gallery sample?', 'Each Gallery sample has a reference identifier, such as SAMPLE REF: B-101. You can save or note this reference when visiting the shop.', 14, true)
ON CONFLICT (id) DO UPDATE SET
  category = EXCLUDED.category,
  question = EXCLUDED.question,
  answer = EXCLUDED.answer,
  display_order = EXCLUDED.display_order,
  is_active = EXCLUDED.is_active;
INSERT INTO public.faqs (id, category, question, answer, display_order, is_active)
VALUES ('77777777-7777-7777-7777-00000000000e', 'pricing', 'How is tailoring pricing determined?', 'Stitching charges are discussed based on the garment design, cut complexity, neckline and design details, lining requirements, fabric characteristics, detailing materials, and overall construction requirements.', 15, true)
ON CONFLICT (id) DO UPDATE SET
  category = EXCLUDED.category,
  question = EXCLUDED.question,
  answer = EXCLUDED.answer,
  display_order = EXCLUDED.display_order,
  is_active = EXCLUDED.is_active;
INSERT INTO public.faqs (id, category, question, answer, display_order, is_active)
VALUES ('77777777-7777-7777-7777-00000000000f', 'pricing', 'Why can the final stitching charge vary?', 'Stitching charges can vary depending on the garment design, cut complexity, neckline and design details, lining requirements, fabric characteristics, detailing materials, and overall construction requirements.', 16, true)
ON CONFLICT (id) DO UPDATE SET
  category = EXCLUDED.category,
  question = EXCLUDED.question,
  answer = EXCLUDED.answer,
  display_order = EXCLUDED.display_order,
  is_active = EXCLUDED.is_active;
INSERT INTO public.faqs (id, category, question, answer, display_order, is_active)
VALUES ('77777777-7777-7777-7777-000000000010', 'pricing', 'Can I see the Price Guide?', 'Yes. The website Price Guide outlines tailoring specifications, design considerations, and craftsmanship factors for our tailoring categories.', 17, true)
ON CONFLICT (id) DO UPDATE SET
  category = EXCLUDED.category,
  question = EXCLUDED.question,
  answer = EXCLUDED.answer,
  display_order = EXCLUDED.display_order,
  is_active = EXCLUDED.is_active;
INSERT INTO public.faqs (id, category, question, answer, display_order, is_active)
VALUES ('77777777-7777-7777-7777-000000000011', 'pricing', 'When is pricing discussed?', 'Stitching charges are discussed in-shop after reviewing your fabric, design, and construction requirements.', 18, true)
ON CONFLICT (id) DO UPDATE SET
  category = EXCLUDED.category,
  question = EXCLUDED.question,
  answer = EXCLUDED.answer,
  display_order = EXCLUDED.display_order,
  is_active = EXCLUDED.is_active;
INSERT INTO public.faqs (id, category, question, answer, display_order, is_active)
VALUES ('77777777-7777-7777-7777-000000000012', 'process', 'What happens after I bring my fabric?', 'The tailoring journey follows five stages: Fabric Handover & Consult, Anatomical Measurement, Paper Pattern Drafting, Artisanal Stitching, and Final Finishing & Handover.', 19, true)
ON CONFLICT (id) DO UPDATE SET
  category = EXCLUDED.category,
  question = EXCLUDED.question,
  answer = EXCLUDED.answer,
  display_order = EXCLUDED.display_order,
  is_active = EXCLUDED.is_active;
INSERT INTO public.faqs (id, category, question, answer, display_order, is_active)
VALUES ('77777777-7777-7777-7777-000000000013', 'process', 'What is the five-stage dress-making journey?', 'It is the structured tailoring process covering fabric consultation, measurement, paper pattern drafting, stitching, and final finishing and handover.', 20, true)
ON CONFLICT (id) DO UPDATE SET
  category = EXCLUDED.category,
  question = EXCLUDED.question,
  answer = EXCLUDED.answer,
  display_order = EXCLUDED.display_order,
  is_active = EXCLUDED.is_active;
INSERT INTO public.faqs (id, category, question, answer, display_order, is_active)
VALUES ('77777777-7777-7777-7777-000000000014', 'process', 'What is paper pattern drafting?', 'Paper pattern drafting involves drafting an individual 2D paper pattern based on individual measurements before cutting the fabric. This includes standard 2-inch side seam allowance where applicable to the garment design.', 21, true)
ON CONFLICT (id) DO UPDATE SET
  category = EXCLUDED.category,
  question = EXCLUDED.question,
  answer = EXCLUDED.answer,
  display_order = EXCLUDED.display_order,
  is_active = EXCLUDED.is_active;
INSERT INTO public.faqs (id, category, question, answer, display_order, is_active)
VALUES ('77777777-7777-7777-7777-000000000015', 'process', 'What happens during final finishing and handover?', 'After stitching, the garment goes through final finishing and a quality check before handover.', 22, true)
ON CONFLICT (id) DO UPDATE SET
  category = EXCLUDED.category,
  question = EXCLUDED.question,
  answer = EXCLUDED.answer,
  display_order = EXCLUDED.display_order,
  is_active = EXCLUDED.is_active;
INSERT INTO public.faqs (id, category, question, answer, display_order, is_active)
VALUES ('77777777-7777-7777-7777-000000000016', 'visit', 'Where can I bring my fabric for consultation?', 'You can bring your fabric to our shop in Korattur, Chennai for design review and consultation.', 23, true)
ON CONFLICT (id) DO UPDATE SET
  category = EXCLUDED.category,
  question = EXCLUDED.question,
  answer = EXCLUDED.answer,
  display_order = EXCLUDED.display_order,
  is_active = EXCLUDED.is_active;
INSERT INTO public.faqs (id, category, question, answer, display_order, is_active)
VALUES ('77777777-7777-7777-7777-000000000017', 'visit', 'What should I bring when visiting?', 'Bring your unstitched fabric, any reference garment or photo, lining material where required, and borders, laces, contrast patches, or other design materials if they are part of your intended design.', 24, true)
ON CONFLICT (id) DO UPDATE SET
  category = EXCLUDED.category,
  question = EXCLUDED.question,
  answer = EXCLUDED.answer,
  display_order = EXCLUDED.display_order,
  is_active = EXCLUDED.is_active;
INSERT INTO public.faqs (id, category, question, answer, display_order, is_active)
VALUES ('77777777-7777-7777-7777-000000000018', 'visit', 'How can I prepare before visiting the shop?', 'Review the Fabric Meterage Guide, save any design references you like, and bring your fabric and any useful reference material when visiting the shop.', 25, true)
ON CONFLICT (id) DO UPDATE SET
  category = EXCLUDED.category,
  question = EXCLUDED.question,
  answer = EXCLUDED.answer,
  display_order = EXCLUDED.display_order,
  is_active = EXCLUDED.is_active;

-- Seed Gallery Items (174 items)
INSERT INTO public.gallery_items (id, sample_code, title, description, image_url, fabric, occasion, category_id, display_order, is_active)
VALUES ('88888888-8888-8888-8888-000000000000', 'BR-101', 'Bridal Wear & Lehengas Sample #1', 'Hand-crafted bridal wear & lehengas showcasing signature necklines, precision fit, and bespoke finish by Raaji Ladies Fashion.', '/images/Bridal/IMG-20210609-WA0006.jpg', 'Silk', 'Bridal', '11111111-1111-1111-1111-000000000001', 1, true)
ON CONFLICT (id) DO UPDATE SET
  sample_code = EXCLUDED.sample_code,
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  fabric = EXCLUDED.fabric,
  occasion = EXCLUDED.occasion,
  category_id = EXCLUDED.category_id,
  display_order = EXCLUDED.display_order,
  is_active = EXCLUDED.is_active;
INSERT INTO public.gallery_items (id, sample_code, title, description, image_url, fabric, occasion, category_id, display_order, is_active)
VALUES ('88888888-8888-8888-8888-000000000001', 'BR-102', 'Bridal Wear & Lehengas Sample #2', 'Hand-crafted bridal wear & lehengas showcasing signature necklines, precision fit, and bespoke finish by Raaji Ladies Fashion.', '/images/Bridal/IMG-20210611-WA0004.jpg', 'Silk', 'Bridal', '11111111-1111-1111-1111-000000000001', 2, true)
ON CONFLICT (id) DO UPDATE SET
  sample_code = EXCLUDED.sample_code,
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  fabric = EXCLUDED.fabric,
  occasion = EXCLUDED.occasion,
  category_id = EXCLUDED.category_id,
  display_order = EXCLUDED.display_order,
  is_active = EXCLUDED.is_active;
INSERT INTO public.gallery_items (id, sample_code, title, description, image_url, fabric, occasion, category_id, display_order, is_active)
VALUES ('88888888-8888-8888-8888-000000000002', 'BR-103', 'Bridal Wear & Lehengas Sample #3', 'Hand-crafted bridal wear & lehengas showcasing signature necklines, precision fit, and bespoke finish by Raaji Ladies Fashion.', '/images/Bridal/IMG-20210611-WA0005.jpg', 'Silk', 'Bridal', '11111111-1111-1111-1111-000000000001', 3, true)
ON CONFLICT (id) DO UPDATE SET
  sample_code = EXCLUDED.sample_code,
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  fabric = EXCLUDED.fabric,
  occasion = EXCLUDED.occasion,
  category_id = EXCLUDED.category_id,
  display_order = EXCLUDED.display_order,
  is_active = EXCLUDED.is_active;
INSERT INTO public.gallery_items (id, sample_code, title, description, image_url, fabric, occasion, category_id, display_order, is_active)
VALUES ('88888888-8888-8888-8888-000000000003', 'BR-104', 'Bridal Wear & Lehengas Sample #4', 'Hand-crafted bridal wear & lehengas showcasing signature necklines, precision fit, and bespoke finish by Raaji Ladies Fashion.', '/images/Bridal/IMG-20210611-WA0006.jpg', 'Silk', 'Bridal', '11111111-1111-1111-1111-000000000001', 4, true)
ON CONFLICT (id) DO UPDATE SET
  sample_code = EXCLUDED.sample_code,
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  fabric = EXCLUDED.fabric,
  occasion = EXCLUDED.occasion,
  category_id = EXCLUDED.category_id,
  display_order = EXCLUDED.display_order,
  is_active = EXCLUDED.is_active;
INSERT INTO public.gallery_items (id, sample_code, title, description, image_url, fabric, occasion, category_id, display_order, is_active)
VALUES ('88888888-8888-8888-8888-000000000004', 'BR-105', 'Bridal Wear & Lehengas Sample #5', 'Hand-crafted bridal wear & lehengas showcasing signature necklines, precision fit, and bespoke finish by Raaji Ladies Fashion.', '/images/Bridal/IMG-20210611-WA0007.jpg', 'Silk', 'Bridal', '11111111-1111-1111-1111-000000000001', 5, true)
ON CONFLICT (id) DO UPDATE SET
  sample_code = EXCLUDED.sample_code,
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  fabric = EXCLUDED.fabric,
  occasion = EXCLUDED.occasion,
  category_id = EXCLUDED.category_id,
  display_order = EXCLUDED.display_order,
  is_active = EXCLUDED.is_active;
INSERT INTO public.gallery_items (id, sample_code, title, description, image_url, fabric, occasion, category_id, display_order, is_active)
VALUES ('88888888-8888-8888-8888-000000000005', 'BR-106', 'Bridal Wear & Lehengas Sample #6', 'Hand-crafted bridal wear & lehengas showcasing signature necklines, precision fit, and bespoke finish by Raaji Ladies Fashion.', '/images/Bridal/IMG-20210611-WA0008.jpg', 'Silk', 'Bridal', '11111111-1111-1111-1111-000000000001', 6, true)
ON CONFLICT (id) DO UPDATE SET
  sample_code = EXCLUDED.sample_code,
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  fabric = EXCLUDED.fabric,
  occasion = EXCLUDED.occasion,
  category_id = EXCLUDED.category_id,
  display_order = EXCLUDED.display_order,
  is_active = EXCLUDED.is_active;
INSERT INTO public.gallery_items (id, sample_code, title, description, image_url, fabric, occasion, category_id, display_order, is_active)
VALUES ('88888888-8888-8888-8888-000000000006', 'BR-107', 'Bridal Wear & Lehengas Sample #7', 'Hand-crafted bridal wear & lehengas showcasing signature necklines, precision fit, and bespoke finish by Raaji Ladies Fashion.', '/images/Bridal/IMG-20210619-WA0004.jpg', 'Silk', 'Bridal', '11111111-1111-1111-1111-000000000001', 7, true)
ON CONFLICT (id) DO UPDATE SET
  sample_code = EXCLUDED.sample_code,
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  fabric = EXCLUDED.fabric,
  occasion = EXCLUDED.occasion,
  category_id = EXCLUDED.category_id,
  display_order = EXCLUDED.display_order,
  is_active = EXCLUDED.is_active;
INSERT INTO public.gallery_items (id, sample_code, title, description, image_url, fabric, occasion, category_id, display_order, is_active)
VALUES ('88888888-8888-8888-8888-000000000007', 'BR-108', 'Bridal Wear & Lehengas Sample #8', 'Hand-crafted bridal wear & lehengas showcasing signature necklines, precision fit, and bespoke finish by Raaji Ladies Fashion.', '/images/Bridal/IMG-20210619-WA0006.jpg', 'Silk', 'Bridal', '11111111-1111-1111-1111-000000000001', 8, true)
ON CONFLICT (id) DO UPDATE SET
  sample_code = EXCLUDED.sample_code,
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  fabric = EXCLUDED.fabric,
  occasion = EXCLUDED.occasion,
  category_id = EXCLUDED.category_id,
  display_order = EXCLUDED.display_order,
  is_active = EXCLUDED.is_active;
INSERT INTO public.gallery_items (id, sample_code, title, description, image_url, fabric, occasion, category_id, display_order, is_active)
VALUES ('88888888-8888-8888-8888-000000000008', 'BR-109', 'Bridal Wear & Lehengas Sample #9', 'Hand-crafted bridal wear & lehengas showcasing signature necklines, precision fit, and bespoke finish by Raaji Ladies Fashion.', '/images/Bridal/IMG-20210619-WA0007.jpg', 'Silk', 'Bridal', '11111111-1111-1111-1111-000000000001', 9, true)
ON CONFLICT (id) DO UPDATE SET
  sample_code = EXCLUDED.sample_code,
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  fabric = EXCLUDED.fabric,
  occasion = EXCLUDED.occasion,
  category_id = EXCLUDED.category_id,
  display_order = EXCLUDED.display_order,
  is_active = EXCLUDED.is_active;
INSERT INTO public.gallery_items (id, sample_code, title, description, image_url, fabric, occasion, category_id, display_order, is_active)
VALUES ('88888888-8888-8888-8888-000000000009', 'BR-110', 'Bridal Wear & Lehengas Sample #10', 'Hand-crafted bridal wear & lehengas showcasing signature necklines, precision fit, and bespoke finish by Raaji Ladies Fashion.', '/images/Bridal/IMG-20210619-WA0008.jpg', 'Silk', 'Bridal', '11111111-1111-1111-1111-000000000001', 10, true)
ON CONFLICT (id) DO UPDATE SET
  sample_code = EXCLUDED.sample_code,
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  fabric = EXCLUDED.fabric,
  occasion = EXCLUDED.occasion,
  category_id = EXCLUDED.category_id,
  display_order = EXCLUDED.display_order,
  is_active = EXCLUDED.is_active;
INSERT INTO public.gallery_items (id, sample_code, title, description, image_url, fabric, occasion, category_id, display_order, is_active)
VALUES ('88888888-8888-8888-8888-00000000000a', 'BR-111', 'Bridal Wear & Lehengas Sample #11', 'Hand-crafted bridal wear & lehengas showcasing signature necklines, precision fit, and bespoke finish by Raaji Ladies Fashion.', '/images/Bridal/IMG-20210619-WA0009.jpg', 'Silk', 'Bridal', '11111111-1111-1111-1111-000000000001', 11, true)
ON CONFLICT (id) DO UPDATE SET
  sample_code = EXCLUDED.sample_code,
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  fabric = EXCLUDED.fabric,
  occasion = EXCLUDED.occasion,
  category_id = EXCLUDED.category_id,
  display_order = EXCLUDED.display_order,
  is_active = EXCLUDED.is_active;
INSERT INTO public.gallery_items (id, sample_code, title, description, image_url, fabric, occasion, category_id, display_order, is_active)
VALUES ('88888888-8888-8888-8888-00000000000b', 'BR-112', 'Bridal Wear & Lehengas Sample #12', 'Hand-crafted bridal wear & lehengas showcasing signature necklines, precision fit, and bespoke finish by Raaji Ladies Fashion.', '/images/Bridal/IMG-20210619-WA0010.jpg', 'Silk', 'Bridal', '11111111-1111-1111-1111-000000000001', 12, true)
ON CONFLICT (id) DO UPDATE SET
  sample_code = EXCLUDED.sample_code,
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  fabric = EXCLUDED.fabric,
  occasion = EXCLUDED.occasion,
  category_id = EXCLUDED.category_id,
  display_order = EXCLUDED.display_order,
  is_active = EXCLUDED.is_active;
INSERT INTO public.gallery_items (id, sample_code, title, description, image_url, fabric, occasion, category_id, display_order, is_active)
VALUES ('88888888-8888-8888-8888-00000000000c', 'BR-113', 'Bridal Wear & Lehengas Sample #13', 'Hand-crafted bridal wear & lehengas showcasing signature necklines, precision fit, and bespoke finish by Raaji Ladies Fashion.', '/images/Bridal/IMG-20210619-WA0011.jpg', 'Silk', 'Bridal', '11111111-1111-1111-1111-000000000001', 13, true)
ON CONFLICT (id) DO UPDATE SET
  sample_code = EXCLUDED.sample_code,
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  fabric = EXCLUDED.fabric,
  occasion = EXCLUDED.occasion,
  category_id = EXCLUDED.category_id,
  display_order = EXCLUDED.display_order,
  is_active = EXCLUDED.is_active;
INSERT INTO public.gallery_items (id, sample_code, title, description, image_url, fabric, occasion, category_id, display_order, is_active)
VALUES ('88888888-8888-8888-8888-00000000000d', 'BR-114', 'Bridal Wear & Lehengas Sample #14', 'Hand-crafted bridal wear & lehengas showcasing signature necklines, precision fit, and bespoke finish by Raaji Ladies Fashion.', '/images/Bridal/IMG-20210619-WA0012.jpg', 'Silk', 'Bridal', '11111111-1111-1111-1111-000000000001', 14, true)
ON CONFLICT (id) DO UPDATE SET
  sample_code = EXCLUDED.sample_code,
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  fabric = EXCLUDED.fabric,
  occasion = EXCLUDED.occasion,
  category_id = EXCLUDED.category_id,
  display_order = EXCLUDED.display_order,
  is_active = EXCLUDED.is_active;
INSERT INTO public.gallery_items (id, sample_code, title, description, image_url, fabric, occasion, category_id, display_order, is_active)
VALUES ('88888888-8888-8888-8888-00000000000e', 'BR-115', 'Bridal Wear & Lehengas Sample #15', 'Hand-crafted bridal wear & lehengas showcasing signature necklines, precision fit, and bespoke finish by Raaji Ladies Fashion.', '/images/Bridal/IMG-20210619-WA0013.jpg', 'Silk', 'Bridal', '11111111-1111-1111-1111-000000000001', 15, true)
ON CONFLICT (id) DO UPDATE SET
  sample_code = EXCLUDED.sample_code,
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  fabric = EXCLUDED.fabric,
  occasion = EXCLUDED.occasion,
  category_id = EXCLUDED.category_id,
  display_order = EXCLUDED.display_order,
  is_active = EXCLUDED.is_active;
INSERT INTO public.gallery_items (id, sample_code, title, description, image_url, fabric, occasion, category_id, display_order, is_active)
VALUES ('88888888-8888-8888-8888-00000000000f', 'BR-116', 'Bridal Wear & Lehengas Sample #16', 'Hand-crafted bridal wear & lehengas showcasing signature necklines, precision fit, and bespoke finish by Raaji Ladies Fashion.', '/images/Bridal/IMG-20210619-WA0014.jpg', 'Silk', 'Bridal', '11111111-1111-1111-1111-000000000001', 16, true)
ON CONFLICT (id) DO UPDATE SET
  sample_code = EXCLUDED.sample_code,
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  fabric = EXCLUDED.fabric,
  occasion = EXCLUDED.occasion,
  category_id = EXCLUDED.category_id,
  display_order = EXCLUDED.display_order,
  is_active = EXCLUDED.is_active;
INSERT INTO public.gallery_items (id, sample_code, title, description, image_url, fabric, occasion, category_id, display_order, is_active)
VALUES ('88888888-8888-8888-8888-000000000010', 'BR-117', 'Bridal Wear & Lehengas Sample #17', 'Hand-crafted bridal wear & lehengas showcasing signature necklines, precision fit, and bespoke finish by Raaji Ladies Fashion.', '/images/Bridal/IMG-20210619-WA0015.jpg', 'Silk', 'Bridal', '11111111-1111-1111-1111-000000000001', 17, true)
ON CONFLICT (id) DO UPDATE SET
  sample_code = EXCLUDED.sample_code,
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  fabric = EXCLUDED.fabric,
  occasion = EXCLUDED.occasion,
  category_id = EXCLUDED.category_id,
  display_order = EXCLUDED.display_order,
  is_active = EXCLUDED.is_active;
INSERT INTO public.gallery_items (id, sample_code, title, description, image_url, fabric, occasion, category_id, display_order, is_active)
VALUES ('88888888-8888-8888-8888-000000000011', 'BR-118', 'Bridal Wear & Lehengas Sample #18', 'Hand-crafted bridal wear & lehengas showcasing signature necklines, precision fit, and bespoke finish by Raaji Ladies Fashion.', '/images/Bridal/IMG-20210619-WA0016.jpg', 'Silk', 'Bridal', '11111111-1111-1111-1111-000000000001', 18, true)
ON CONFLICT (id) DO UPDATE SET
  sample_code = EXCLUDED.sample_code,
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  fabric = EXCLUDED.fabric,
  occasion = EXCLUDED.occasion,
  category_id = EXCLUDED.category_id,
  display_order = EXCLUDED.display_order,
  is_active = EXCLUDED.is_active;
INSERT INTO public.gallery_items (id, sample_code, title, description, image_url, fabric, occasion, category_id, display_order, is_active)
VALUES ('88888888-8888-8888-8888-000000000012', 'BR-119', 'Bridal Wear & Lehengas Sample #19', 'Hand-crafted bridal wear & lehengas showcasing signature necklines, precision fit, and bespoke finish by Raaji Ladies Fashion.', '/images/Bridal/IMG-20210619-WA0017.jpg', 'Silk', 'Bridal', '11111111-1111-1111-1111-000000000001', 19, true)
ON CONFLICT (id) DO UPDATE SET
  sample_code = EXCLUDED.sample_code,
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  fabric = EXCLUDED.fabric,
  occasion = EXCLUDED.occasion,
  category_id = EXCLUDED.category_id,
  display_order = EXCLUDED.display_order,
  is_active = EXCLUDED.is_active;
INSERT INTO public.gallery_items (id, sample_code, title, description, image_url, fabric, occasion, category_id, display_order, is_active)
VALUES ('88888888-8888-8888-8888-000000000013', 'BR-120', 'Bridal Wear & Lehengas Sample #20', 'Hand-crafted bridal wear & lehengas showcasing signature necklines, precision fit, and bespoke finish by Raaji Ladies Fashion.', '/images/Bridal/IMG-20210619-WA0018.jpg', 'Silk', 'Bridal', '11111111-1111-1111-1111-000000000001', 20, true)
ON CONFLICT (id) DO UPDATE SET
  sample_code = EXCLUDED.sample_code,
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  fabric = EXCLUDED.fabric,
  occasion = EXCLUDED.occasion,
  category_id = EXCLUDED.category_id,
  display_order = EXCLUDED.display_order,
  is_active = EXCLUDED.is_active;
INSERT INTO public.gallery_items (id, sample_code, title, description, image_url, fabric, occasion, category_id, display_order, is_active)
VALUES ('88888888-8888-8888-8888-000000000014', 'BR-121', 'Bridal Wear & Lehengas Sample #21', 'Hand-crafted bridal wear & lehengas showcasing signature necklines, precision fit, and bespoke finish by Raaji Ladies Fashion.', '/images/Bridal/IMG-20210619-WA0020.jpg', 'Silk', 'Bridal', '11111111-1111-1111-1111-000000000001', 21, true)
ON CONFLICT (id) DO UPDATE SET
  sample_code = EXCLUDED.sample_code,
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  fabric = EXCLUDED.fabric,
  occasion = EXCLUDED.occasion,
  category_id = EXCLUDED.category_id,
  display_order = EXCLUDED.display_order,
  is_active = EXCLUDED.is_active;
INSERT INTO public.gallery_items (id, sample_code, title, description, image_url, fabric, occasion, category_id, display_order, is_active)
VALUES ('88888888-8888-8888-8888-000000000015', 'BR-122', 'Bridal Wear & Lehengas Sample #22', 'Hand-crafted bridal wear & lehengas showcasing signature necklines, precision fit, and bespoke finish by Raaji Ladies Fashion.', '/images/Bridal/IMG-20210619-WA0021.jpg', 'Silk', 'Bridal', '11111111-1111-1111-1111-000000000001', 22, true)
ON CONFLICT (id) DO UPDATE SET
  sample_code = EXCLUDED.sample_code,
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  fabric = EXCLUDED.fabric,
  occasion = EXCLUDED.occasion,
  category_id = EXCLUDED.category_id,
  display_order = EXCLUDED.display_order,
  is_active = EXCLUDED.is_active;
INSERT INTO public.gallery_items (id, sample_code, title, description, image_url, fabric, occasion, category_id, display_order, is_active)
VALUES ('88888888-8888-8888-8888-000000000016', 'BR-123', 'Bridal Wear & Lehengas Sample #23', 'Hand-crafted bridal wear & lehengas showcasing signature necklines, precision fit, and bespoke finish by Raaji Ladies Fashion.', '/images/Bridal/IMG-20210619-WA0022.jpg', 'Silk', 'Bridal', '11111111-1111-1111-1111-000000000001', 23, true)
ON CONFLICT (id) DO UPDATE SET
  sample_code = EXCLUDED.sample_code,
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  fabric = EXCLUDED.fabric,
  occasion = EXCLUDED.occasion,
  category_id = EXCLUDED.category_id,
  display_order = EXCLUDED.display_order,
  is_active = EXCLUDED.is_active;
INSERT INTO public.gallery_items (id, sample_code, title, description, image_url, fabric, occasion, category_id, display_order, is_active)
VALUES ('88888888-8888-8888-8888-000000000017', 'BR-124', 'Bridal Wear & Lehengas Sample #24', 'Hand-crafted bridal wear & lehengas showcasing signature necklines, precision fit, and bespoke finish by Raaji Ladies Fashion.', '/images/Bridal/IMG-20210619-WA0024.jpg', 'Silk', 'Bridal', '11111111-1111-1111-1111-000000000001', 24, true)
ON CONFLICT (id) DO UPDATE SET
  sample_code = EXCLUDED.sample_code,
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  fabric = EXCLUDED.fabric,
  occasion = EXCLUDED.occasion,
  category_id = EXCLUDED.category_id,
  display_order = EXCLUDED.display_order,
  is_active = EXCLUDED.is_active;
INSERT INTO public.gallery_items (id, sample_code, title, description, image_url, fabric, occasion, category_id, display_order, is_active)
VALUES ('88888888-8888-8888-8888-000000000018', 'BR-125', 'Bridal Wear & Lehengas Sample #25', 'Hand-crafted bridal wear & lehengas showcasing signature necklines, precision fit, and bespoke finish by Raaji Ladies Fashion.', '/images/Bridal/IMG-20210619-WA0025.jpg', 'Silk', 'Bridal', '11111111-1111-1111-1111-000000000001', 25, true)
ON CONFLICT (id) DO UPDATE SET
  sample_code = EXCLUDED.sample_code,
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  fabric = EXCLUDED.fabric,
  occasion = EXCLUDED.occasion,
  category_id = EXCLUDED.category_id,
  display_order = EXCLUDED.display_order,
  is_active = EXCLUDED.is_active;
INSERT INTO public.gallery_items (id, sample_code, title, description, image_url, fabric, occasion, category_id, display_order, is_active)
VALUES ('88888888-8888-8888-8888-000000000019', 'BR-126', 'Bridal Wear & Lehengas Sample #26', 'Hand-crafted bridal wear & lehengas showcasing signature necklines, precision fit, and bespoke finish by Raaji Ladies Fashion.', '/images/Bridal/IMG-20210619-WA0026.jpg', 'Silk', 'Bridal', '11111111-1111-1111-1111-000000000001', 26, true)
ON CONFLICT (id) DO UPDATE SET
  sample_code = EXCLUDED.sample_code,
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  fabric = EXCLUDED.fabric,
  occasion = EXCLUDED.occasion,
  category_id = EXCLUDED.category_id,
  display_order = EXCLUDED.display_order,
  is_active = EXCLUDED.is_active;
INSERT INTO public.gallery_items (id, sample_code, title, description, image_url, fabric, occasion, category_id, display_order, is_active)
VALUES ('88888888-8888-8888-8888-00000000001a', 'BR-127', 'Bridal Wear & Lehengas Sample #27', 'Hand-crafted bridal wear & lehengas showcasing signature necklines, precision fit, and bespoke finish by Raaji Ladies Fashion.', '/images/Bridal/IMG-20210619-WA0027.jpg', 'Silk', 'Bridal', '11111111-1111-1111-1111-000000000001', 27, true)
ON CONFLICT (id) DO UPDATE SET
  sample_code = EXCLUDED.sample_code,
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  fabric = EXCLUDED.fabric,
  occasion = EXCLUDED.occasion,
  category_id = EXCLUDED.category_id,
  display_order = EXCLUDED.display_order,
  is_active = EXCLUDED.is_active;
INSERT INTO public.gallery_items (id, sample_code, title, description, image_url, fabric, occasion, category_id, display_order, is_active)
VALUES ('88888888-8888-8888-8888-00000000001b', 'BR-128', 'Bridal Wear & Lehengas Sample #28', 'Hand-crafted bridal wear & lehengas showcasing signature necklines, precision fit, and bespoke finish by Raaji Ladies Fashion.', '/images/Bridal/IMG-20210619-WA0028.jpg', 'Silk', 'Bridal', '11111111-1111-1111-1111-000000000001', 28, true)
ON CONFLICT (id) DO UPDATE SET
  sample_code = EXCLUDED.sample_code,
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  fabric = EXCLUDED.fabric,
  occasion = EXCLUDED.occasion,
  category_id = EXCLUDED.category_id,
  display_order = EXCLUDED.display_order,
  is_active = EXCLUDED.is_active;
INSERT INTO public.gallery_items (id, sample_code, title, description, image_url, fabric, occasion, category_id, display_order, is_active)
VALUES ('88888888-8888-8888-8888-00000000001c', 'BR-129', 'Bridal Wear & Lehengas Sample #29', 'Hand-crafted bridal wear & lehengas showcasing signature necklines, precision fit, and bespoke finish by Raaji Ladies Fashion.', '/images/Bridal/IMG-20210619-WA0029.jpg', 'Silk', 'Bridal', '11111111-1111-1111-1111-000000000001', 29, true)
ON CONFLICT (id) DO UPDATE SET
  sample_code = EXCLUDED.sample_code,
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  fabric = EXCLUDED.fabric,
  occasion = EXCLUDED.occasion,
  category_id = EXCLUDED.category_id,
  display_order = EXCLUDED.display_order,
  is_active = EXCLUDED.is_active;
INSERT INTO public.gallery_items (id, sample_code, title, description, image_url, fabric, occasion, category_id, display_order, is_active)
VALUES ('88888888-8888-8888-8888-00000000001d', 'BR-130', 'Bridal Wear & Lehengas Sample #30', 'Hand-crafted bridal wear & lehengas showcasing signature necklines, precision fit, and bespoke finish by Raaji Ladies Fashion.', '/images/Bridal/IMG-20210619-WA0031.jpg', 'Silk', 'Bridal', '11111111-1111-1111-1111-000000000001', 30, true)
ON CONFLICT (id) DO UPDATE SET
  sample_code = EXCLUDED.sample_code,
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  fabric = EXCLUDED.fabric,
  occasion = EXCLUDED.occasion,
  category_id = EXCLUDED.category_id,
  display_order = EXCLUDED.display_order,
  is_active = EXCLUDED.is_active;
INSERT INTO public.gallery_items (id, sample_code, title, description, image_url, fabric, occasion, category_id, display_order, is_active)
VALUES ('88888888-8888-8888-8888-00000000001e', 'BR-131', 'Bridal Wear & Lehengas Sample #31', 'Hand-crafted bridal wear & lehengas showcasing signature necklines, precision fit, and bespoke finish by Raaji Ladies Fashion.', '/images/Bridal/IMG-20210619-WA0032.jpg', 'Silk', 'Bridal', '11111111-1111-1111-1111-000000000001', 31, true)
ON CONFLICT (id) DO UPDATE SET
  sample_code = EXCLUDED.sample_code,
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  fabric = EXCLUDED.fabric,
  occasion = EXCLUDED.occasion,
  category_id = EXCLUDED.category_id,
  display_order = EXCLUDED.display_order,
  is_active = EXCLUDED.is_active;
INSERT INTO public.gallery_items (id, sample_code, title, description, image_url, fabric, occasion, category_id, display_order, is_active)
VALUES ('88888888-8888-8888-8888-00000000001f', 'BR-132', 'Bridal Wear & Lehengas Sample #32', 'Hand-crafted bridal wear & lehengas showcasing signature necklines, precision fit, and bespoke finish by Raaji Ladies Fashion.', '/images/Bridal/IMG-20210619-WA0033.jpg', 'Silk', 'Bridal', '11111111-1111-1111-1111-000000000001', 32, true)
ON CONFLICT (id) DO UPDATE SET
  sample_code = EXCLUDED.sample_code,
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  fabric = EXCLUDED.fabric,
  occasion = EXCLUDED.occasion,
  category_id = EXCLUDED.category_id,
  display_order = EXCLUDED.display_order,
  is_active = EXCLUDED.is_active;
INSERT INTO public.gallery_items (id, sample_code, title, description, image_url, fabric, occasion, category_id, display_order, is_active)
VALUES ('88888888-8888-8888-8888-000000000020', 'BR-133', 'Bridal Wear & Lehengas Sample #33', 'Hand-crafted bridal wear & lehengas showcasing signature necklines, precision fit, and bespoke finish by Raaji Ladies Fashion.', '/images/Bridal/IMG-20210619-WA0034.jpg', 'Silk', 'Bridal', '11111111-1111-1111-1111-000000000001', 33, true)
ON CONFLICT (id) DO UPDATE SET
  sample_code = EXCLUDED.sample_code,
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  fabric = EXCLUDED.fabric,
  occasion = EXCLUDED.occasion,
  category_id = EXCLUDED.category_id,
  display_order = EXCLUDED.display_order,
  is_active = EXCLUDED.is_active;
INSERT INTO public.gallery_items (id, sample_code, title, description, image_url, fabric, occasion, category_id, display_order, is_active)
VALUES ('88888888-8888-8888-8888-000000000021', 'BR-134', 'Bridal Wear & Lehengas Sample #34', 'Hand-crafted bridal wear & lehengas showcasing signature necklines, precision fit, and bespoke finish by Raaji Ladies Fashion.', '/images/Bridal/IMG-20210619-WA0035.jpg', 'Silk', 'Bridal', '11111111-1111-1111-1111-000000000001', 34, true)
ON CONFLICT (id) DO UPDATE SET
  sample_code = EXCLUDED.sample_code,
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  fabric = EXCLUDED.fabric,
  occasion = EXCLUDED.occasion,
  category_id = EXCLUDED.category_id,
  display_order = EXCLUDED.display_order,
  is_active = EXCLUDED.is_active;
INSERT INTO public.gallery_items (id, sample_code, title, description, image_url, fabric, occasion, category_id, display_order, is_active)
VALUES ('88888888-8888-8888-8888-000000000022', 'BR-135', 'Bridal Wear & Lehengas Sample #35', 'Hand-crafted bridal wear & lehengas showcasing signature necklines, precision fit, and bespoke finish by Raaji Ladies Fashion.', '/images/Bridal/IMG-20210622-WA0002.jpg', 'Silk', 'Bridal', '11111111-1111-1111-1111-000000000001', 35, true)
ON CONFLICT (id) DO UPDATE SET
  sample_code = EXCLUDED.sample_code,
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  fabric = EXCLUDED.fabric,
  occasion = EXCLUDED.occasion,
  category_id = EXCLUDED.category_id,
  display_order = EXCLUDED.display_order,
  is_active = EXCLUDED.is_active;
INSERT INTO public.gallery_items (id, sample_code, title, description, image_url, fabric, occasion, category_id, display_order, is_active)
VALUES ('88888888-8888-8888-8888-000000000023', 'BR-136', 'Bridal Wear & Lehengas Sample #36', 'Hand-crafted bridal wear & lehengas showcasing signature necklines, precision fit, and bespoke finish by Raaji Ladies Fashion.', '/images/Bridal/IMG-20210622-WA0003.jpg', 'Silk', 'Bridal', '11111111-1111-1111-1111-000000000001', 36, true)
ON CONFLICT (id) DO UPDATE SET
  sample_code = EXCLUDED.sample_code,
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  fabric = EXCLUDED.fabric,
  occasion = EXCLUDED.occasion,
  category_id = EXCLUDED.category_id,
  display_order = EXCLUDED.display_order,
  is_active = EXCLUDED.is_active;
INSERT INTO public.gallery_items (id, sample_code, title, description, image_url, fabric, occasion, category_id, display_order, is_active)
VALUES ('88888888-8888-8888-8888-000000000024', 'BR-137', 'Bridal Wear & Lehengas Sample #37', 'Hand-crafted bridal wear & lehengas showcasing signature necklines, precision fit, and bespoke finish by Raaji Ladies Fashion.', '/images/Bridal/IMG-20210928-WA0023.jpg', 'Silk', 'Bridal', '11111111-1111-1111-1111-000000000001', 37, true)
ON CONFLICT (id) DO UPDATE SET
  sample_code = EXCLUDED.sample_code,
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  fabric = EXCLUDED.fabric,
  occasion = EXCLUDED.occasion,
  category_id = EXCLUDED.category_id,
  display_order = EXCLUDED.display_order,
  is_active = EXCLUDED.is_active;
INSERT INTO public.gallery_items (id, sample_code, title, description, image_url, fabric, occasion, category_id, display_order, is_active)
VALUES ('88888888-8888-8888-8888-000000000025', 'BR-138', 'Bridal Wear & Lehengas Sample #38', 'Hand-crafted bridal wear & lehengas showcasing signature necklines, precision fit, and bespoke finish by Raaji Ladies Fashion.', '/images/Bridal/IMG-20210928-WA0024.jpg', 'Silk', 'Bridal', '11111111-1111-1111-1111-000000000001', 38, true)
ON CONFLICT (id) DO UPDATE SET
  sample_code = EXCLUDED.sample_code,
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  fabric = EXCLUDED.fabric,
  occasion = EXCLUDED.occasion,
  category_id = EXCLUDED.category_id,
  display_order = EXCLUDED.display_order,
  is_active = EXCLUDED.is_active;
INSERT INTO public.gallery_items (id, sample_code, title, description, image_url, fabric, occasion, category_id, display_order, is_active)
VALUES ('88888888-8888-8888-8888-000000000026', 'BR-139', 'Bridal Wear & Lehengas Sample #39', 'Hand-crafted bridal wear & lehengas showcasing signature necklines, precision fit, and bespoke finish by Raaji Ladies Fashion.', '/images/Bridal/IMG-20210928-WA0025.jpg', 'Silk', 'Bridal', '11111111-1111-1111-1111-000000000001', 39, true)
ON CONFLICT (id) DO UPDATE SET
  sample_code = EXCLUDED.sample_code,
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  fabric = EXCLUDED.fabric,
  occasion = EXCLUDED.occasion,
  category_id = EXCLUDED.category_id,
  display_order = EXCLUDED.display_order,
  is_active = EXCLUDED.is_active;
INSERT INTO public.gallery_items (id, sample_code, title, description, image_url, fabric, occasion, category_id, display_order, is_active)
VALUES ('88888888-8888-8888-8888-000000000027', 'BR-140', 'Bridal Wear & Lehengas Sample #40', 'Hand-crafted bridal wear & lehengas showcasing signature necklines, precision fit, and bespoke finish by Raaji Ladies Fashion.', '/images/Bridal/IMG-20210928-WA0026.jpg', 'Silk', 'Bridal', '11111111-1111-1111-1111-000000000001', 40, true)
ON CONFLICT (id) DO UPDATE SET
  sample_code = EXCLUDED.sample_code,
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  fabric = EXCLUDED.fabric,
  occasion = EXCLUDED.occasion,
  category_id = EXCLUDED.category_id,
  display_order = EXCLUDED.display_order,
  is_active = EXCLUDED.is_active;
INSERT INTO public.gallery_items (id, sample_code, title, description, image_url, fabric, occasion, category_id, display_order, is_active)
VALUES ('88888888-8888-8888-8888-000000000028', 'BR-141', 'Bridal Wear & Lehengas Sample #41', 'Hand-crafted bridal wear & lehengas showcasing signature necklines, precision fit, and bespoke finish by Raaji Ladies Fashion.', '/images/Bridal/IMG-20220323-WA0005.jpg', 'Silk', 'Bridal', '11111111-1111-1111-1111-000000000001', 41, true)
ON CONFLICT (id) DO UPDATE SET
  sample_code = EXCLUDED.sample_code,
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  fabric = EXCLUDED.fabric,
  occasion = EXCLUDED.occasion,
  category_id = EXCLUDED.category_id,
  display_order = EXCLUDED.display_order,
  is_active = EXCLUDED.is_active;
INSERT INTO public.gallery_items (id, sample_code, title, description, image_url, fabric, occasion, category_id, display_order, is_active)
VALUES ('88888888-8888-8888-8888-000000000029', 'BR-142', 'Bridal Wear & Lehengas Sample #42', 'Hand-crafted bridal wear & lehengas showcasing signature necklines, precision fit, and bespoke finish by Raaji Ladies Fashion.', '/images/Bridal/IMG-20220323-WA0006.jpg', 'Silk', 'Bridal', '11111111-1111-1111-1111-000000000001', 42, true)
ON CONFLICT (id) DO UPDATE SET
  sample_code = EXCLUDED.sample_code,
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  fabric = EXCLUDED.fabric,
  occasion = EXCLUDED.occasion,
  category_id = EXCLUDED.category_id,
  display_order = EXCLUDED.display_order,
  is_active = EXCLUDED.is_active;
INSERT INTO public.gallery_items (id, sample_code, title, description, image_url, fabric, occasion, category_id, display_order, is_active)
VALUES ('88888888-8888-8888-8888-00000000002a', 'BR-143', 'Bridal Wear & Lehengas Sample #43', 'Hand-crafted bridal wear & lehengas showcasing signature necklines, precision fit, and bespoke finish by Raaji Ladies Fashion.', '/images/Bridal/IMG-20220323-WA0009.jpg', 'Silk', 'Bridal', '11111111-1111-1111-1111-000000000001', 43, true)
ON CONFLICT (id) DO UPDATE SET
  sample_code = EXCLUDED.sample_code,
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  fabric = EXCLUDED.fabric,
  occasion = EXCLUDED.occasion,
  category_id = EXCLUDED.category_id,
  display_order = EXCLUDED.display_order,
  is_active = EXCLUDED.is_active;
INSERT INTO public.gallery_items (id, sample_code, title, description, image_url, fabric, occasion, category_id, display_order, is_active)
VALUES ('88888888-8888-8888-8888-00000000002b', 'BR-144', 'Bridal Wear & Lehengas Sample #44', 'Hand-crafted bridal wear & lehengas showcasing signature necklines, precision fit, and bespoke finish by Raaji Ladies Fashion.', '/images/Bridal/IMG-20220413-WA0000.jpg', 'Silk', 'Bridal', '11111111-1111-1111-1111-000000000001', 44, true)
ON CONFLICT (id) DO UPDATE SET
  sample_code = EXCLUDED.sample_code,
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  fabric = EXCLUDED.fabric,
  occasion = EXCLUDED.occasion,
  category_id = EXCLUDED.category_id,
  display_order = EXCLUDED.display_order,
  is_active = EXCLUDED.is_active;
INSERT INTO public.gallery_items (id, sample_code, title, description, image_url, fabric, occasion, category_id, display_order, is_active)
VALUES ('88888888-8888-8888-8888-00000000002c', 'BR-145', 'Bridal Wear & Lehengas Sample #45', 'Hand-crafted bridal wear & lehengas showcasing signature necklines, precision fit, and bespoke finish by Raaji Ladies Fashion.', '/images/Bridal/IMG-20220413-WA0001.jpg', 'Silk', 'Bridal', '11111111-1111-1111-1111-000000000001', 45, true)
ON CONFLICT (id) DO UPDATE SET
  sample_code = EXCLUDED.sample_code,
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  fabric = EXCLUDED.fabric,
  occasion = EXCLUDED.occasion,
  category_id = EXCLUDED.category_id,
  display_order = EXCLUDED.display_order,
  is_active = EXCLUDED.is_active;
INSERT INTO public.gallery_items (id, sample_code, title, description, image_url, fabric, occasion, category_id, display_order, is_active)
VALUES ('88888888-8888-8888-8888-00000000002d', 'BR-146', 'Bridal Wear & Lehengas Sample #46', 'Hand-crafted bridal wear & lehengas showcasing signature necklines, precision fit, and bespoke finish by Raaji Ladies Fashion.', '/images/Bridal/IMG-20220704-WA0001.jpg', 'Silk', 'Bridal', '11111111-1111-1111-1111-000000000001', 46, true)
ON CONFLICT (id) DO UPDATE SET
  sample_code = EXCLUDED.sample_code,
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  fabric = EXCLUDED.fabric,
  occasion = EXCLUDED.occasion,
  category_id = EXCLUDED.category_id,
  display_order = EXCLUDED.display_order,
  is_active = EXCLUDED.is_active;
INSERT INTO public.gallery_items (id, sample_code, title, description, image_url, fabric, occasion, category_id, display_order, is_active)
VALUES ('88888888-8888-8888-8888-00000000002e', 'BR-147', 'Bridal Wear & Lehengas Sample #47', 'Hand-crafted bridal wear & lehengas showcasing signature necklines, precision fit, and bespoke finish by Raaji Ladies Fashion.', '/images/Bridal/IMG-20220704-WA0002.jpg', 'Silk', 'Bridal', '11111111-1111-1111-1111-000000000001', 47, true)
ON CONFLICT (id) DO UPDATE SET
  sample_code = EXCLUDED.sample_code,
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  fabric = EXCLUDED.fabric,
  occasion = EXCLUDED.occasion,
  category_id = EXCLUDED.category_id,
  display_order = EXCLUDED.display_order,
  is_active = EXCLUDED.is_active;
INSERT INTO public.gallery_items (id, sample_code, title, description, image_url, fabric, occasion, category_id, display_order, is_active)
VALUES ('88888888-8888-8888-8888-00000000002f', 'BR-148', 'Bridal Wear & Lehengas Sample #48', 'Hand-crafted bridal wear & lehengas showcasing signature necklines, precision fit, and bespoke finish by Raaji Ladies Fashion.', '/images/Bridal/IMG-20220704-WA0004.jpg', 'Silk', 'Bridal', '11111111-1111-1111-1111-000000000001', 48, true)
ON CONFLICT (id) DO UPDATE SET
  sample_code = EXCLUDED.sample_code,
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  fabric = EXCLUDED.fabric,
  occasion = EXCLUDED.occasion,
  category_id = EXCLUDED.category_id,
  display_order = EXCLUDED.display_order,
  is_active = EXCLUDED.is_active;
INSERT INTO public.gallery_items (id, sample_code, title, description, image_url, fabric, occasion, category_id, display_order, is_active)
VALUES ('88888888-8888-8888-8888-000000000030', 'BR-149', 'Bridal Wear & Lehengas Sample #49', 'Hand-crafted bridal wear & lehengas showcasing signature necklines, precision fit, and bespoke finish by Raaji Ladies Fashion.', '/images/Bridal/IMG-20220704-WA0005.jpg', 'Silk', 'Bridal', '11111111-1111-1111-1111-000000000001', 49, true)
ON CONFLICT (id) DO UPDATE SET
  sample_code = EXCLUDED.sample_code,
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  fabric = EXCLUDED.fabric,
  occasion = EXCLUDED.occasion,
  category_id = EXCLUDED.category_id,
  display_order = EXCLUDED.display_order,
  is_active = EXCLUDED.is_active;
INSERT INTO public.gallery_items (id, sample_code, title, description, image_url, fabric, occasion, category_id, display_order, is_active)
VALUES ('88888888-8888-8888-8888-000000000031', 'BR-150', 'Bridal Wear & Lehengas Sample #50', 'Hand-crafted bridal wear & lehengas showcasing signature necklines, precision fit, and bespoke finish by Raaji Ladies Fashion.', '/images/Bridal/IMG-20220704-WA0006.jpg', 'Silk', 'Bridal', '11111111-1111-1111-1111-000000000001', 50, true)
ON CONFLICT (id) DO UPDATE SET
  sample_code = EXCLUDED.sample_code,
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  fabric = EXCLUDED.fabric,
  occasion = EXCLUDED.occasion,
  category_id = EXCLUDED.category_id,
  display_order = EXCLUDED.display_order,
  is_active = EXCLUDED.is_active;
INSERT INTO public.gallery_items (id, sample_code, title, description, image_url, fabric, occasion, category_id, display_order, is_active)
VALUES ('88888888-8888-8888-8888-000000000032', 'BR-151', 'Bridal Wear & Lehengas Sample #51', 'Hand-crafted bridal wear & lehengas showcasing signature necklines, precision fit, and bespoke finish by Raaji Ladies Fashion.', '/images/Bridal/IMG-20260925-WA0136.jpg', 'Silk', 'Bridal', '11111111-1111-1111-1111-000000000001', 51, true)
ON CONFLICT (id) DO UPDATE SET
  sample_code = EXCLUDED.sample_code,
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  fabric = EXCLUDED.fabric,
  occasion = EXCLUDED.occasion,
  category_id = EXCLUDED.category_id,
  display_order = EXCLUDED.display_order,
  is_active = EXCLUDED.is_active;
INSERT INTO public.gallery_items (id, sample_code, title, description, image_url, fabric, occasion, category_id, display_order, is_active)
VALUES ('88888888-8888-8888-8888-000000000033', 'BR-152', 'Bridal Wear & Lehengas Sample #52', 'Hand-crafted bridal wear & lehengas showcasing signature necklines, precision fit, and bespoke finish by Raaji Ladies Fashion.', '/images/Bridal/IMG-20260925-WA0140.jpg', 'Silk', 'Bridal', '11111111-1111-1111-1111-000000000001', 52, true)
ON CONFLICT (id) DO UPDATE SET
  sample_code = EXCLUDED.sample_code,
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  fabric = EXCLUDED.fabric,
  occasion = EXCLUDED.occasion,
  category_id = EXCLUDED.category_id,
  display_order = EXCLUDED.display_order,
  is_active = EXCLUDED.is_active;
INSERT INTO public.gallery_items (id, sample_code, title, description, image_url, fabric, occasion, category_id, display_order, is_active)
VALUES ('88888888-8888-8888-8888-000000000034', 'BR-153', 'Bridal Wear & Lehengas Sample #53', 'Hand-crafted bridal wear & lehengas showcasing signature necklines, precision fit, and bespoke finish by Raaji Ladies Fashion.', '/images/Bridal/IMG-20260925-WA0141.jpg', 'Silk', 'Bridal', '11111111-1111-1111-1111-000000000001', 53, true)
ON CONFLICT (id) DO UPDATE SET
  sample_code = EXCLUDED.sample_code,
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  fabric = EXCLUDED.fabric,
  occasion = EXCLUDED.occasion,
  category_id = EXCLUDED.category_id,
  display_order = EXCLUDED.display_order,
  is_active = EXCLUDED.is_active;
INSERT INTO public.gallery_items (id, sample_code, title, description, image_url, fabric, occasion, category_id, display_order, is_active)
VALUES ('88888888-8888-8888-8888-000000000035', 'BR-154', 'Bridal Wear & Lehengas Sample #54', 'Hand-crafted bridal wear & lehengas showcasing signature necklines, precision fit, and bespoke finish by Raaji Ladies Fashion.', '/images/Bridal/IMG-20260925-WA0142.jpg', 'Silk', 'Bridal', '11111111-1111-1111-1111-000000000001', 54, true)
ON CONFLICT (id) DO UPDATE SET
  sample_code = EXCLUDED.sample_code,
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  fabric = EXCLUDED.fabric,
  occasion = EXCLUDED.occasion,
  category_id = EXCLUDED.category_id,
  display_order = EXCLUDED.display_order,
  is_active = EXCLUDED.is_active;
INSERT INTO public.gallery_items (id, sample_code, title, description, image_url, fabric, occasion, category_id, display_order, is_active)
VALUES ('88888888-8888-8888-8888-000000000036', 'BR-155', 'Bridal Wear & Lehengas Sample #55', 'Hand-crafted bridal wear & lehengas showcasing signature necklines, precision fit, and bespoke finish by Raaji Ladies Fashion.', '/images/Bridal/IMG-20260925-WA0149.jpg', 'Silk', 'Bridal', '11111111-1111-1111-1111-000000000001', 55, true)
ON CONFLICT (id) DO UPDATE SET
  sample_code = EXCLUDED.sample_code,
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  fabric = EXCLUDED.fabric,
  occasion = EXCLUDED.occasion,
  category_id = EXCLUDED.category_id,
  display_order = EXCLUDED.display_order,
  is_active = EXCLUDED.is_active;
INSERT INTO public.gallery_items (id, sample_code, title, description, image_url, fabric, occasion, category_id, display_order, is_active)
VALUES ('88888888-8888-8888-8888-000000000037', 'BR-156', 'Bridal Wear & Lehengas Sample #56', 'Hand-crafted bridal wear & lehengas showcasing signature necklines, precision fit, and bespoke finish by Raaji Ladies Fashion.', '/images/Bridal/IMG-20260925-WA0165.jpg', 'Silk', 'Bridal', '11111111-1111-1111-1111-000000000001', 56, true)
ON CONFLICT (id) DO UPDATE SET
  sample_code = EXCLUDED.sample_code,
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  fabric = EXCLUDED.fabric,
  occasion = EXCLUDED.occasion,
  category_id = EXCLUDED.category_id,
  display_order = EXCLUDED.display_order,
  is_active = EXCLUDED.is_active;
INSERT INTO public.gallery_items (id, sample_code, title, description, image_url, fabric, occasion, category_id, display_order, is_active)
VALUES ('88888888-8888-8888-8888-000000000038', 'BR-157', 'Bridal Wear & Lehengas Sample #57', 'Hand-crafted bridal wear & lehengas showcasing signature necklines, precision fit, and bespoke finish by Raaji Ladies Fashion.', '/images/Bridal/IMG-20260925-WA0167.jpg', 'Silk', 'Bridal', '11111111-1111-1111-1111-000000000001', 57, true)
ON CONFLICT (id) DO UPDATE SET
  sample_code = EXCLUDED.sample_code,
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  fabric = EXCLUDED.fabric,
  occasion = EXCLUDED.occasion,
  category_id = EXCLUDED.category_id,
  display_order = EXCLUDED.display_order,
  is_active = EXCLUDED.is_active;
INSERT INTO public.gallery_items (id, sample_code, title, description, image_url, fabric, occasion, category_id, display_order, is_active)
VALUES ('88888888-8888-8888-8888-000000000039', 'BR-158', 'Bridal Wear & Lehengas Sample #58', 'Hand-crafted bridal wear & lehengas showcasing signature necklines, precision fit, and bespoke finish by Raaji Ladies Fashion.', '/images/Bridal/IMG-20260925-WA0168.jpg', 'Silk', 'Bridal', '11111111-1111-1111-1111-000000000001', 58, true)
ON CONFLICT (id) DO UPDATE SET
  sample_code = EXCLUDED.sample_code,
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  fabric = EXCLUDED.fabric,
  occasion = EXCLUDED.occasion,
  category_id = EXCLUDED.category_id,
  display_order = EXCLUDED.display_order,
  is_active = EXCLUDED.is_active;
INSERT INTO public.gallery_items (id, sample_code, title, description, image_url, fabric, occasion, category_id, display_order, is_active)
VALUES ('88888888-8888-8888-8888-00000000003a', 'BR-159', 'Bridal Wear & Lehengas Sample #59', 'Hand-crafted bridal wear & lehengas showcasing signature necklines, precision fit, and bespoke finish by Raaji Ladies Fashion.', '/images/Bridal/IMG-20260925-WA0171.jpg', 'Silk', 'Bridal', '11111111-1111-1111-1111-000000000001', 59, true)
ON CONFLICT (id) DO UPDATE SET
  sample_code = EXCLUDED.sample_code,
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  fabric = EXCLUDED.fabric,
  occasion = EXCLUDED.occasion,
  category_id = EXCLUDED.category_id,
  display_order = EXCLUDED.display_order,
  is_active = EXCLUDED.is_active;
INSERT INTO public.gallery_items (id, sample_code, title, description, image_url, fabric, occasion, category_id, display_order, is_active)
VALUES ('88888888-8888-8888-8888-00000000003b', 'BR-160', 'Bridal Wear & Lehengas Sample #60', 'Hand-crafted bridal wear & lehengas showcasing signature necklines, precision fit, and bespoke finish by Raaji Ladies Fashion.', '/images/Bridal/IMG-20260925-WA0172.jpg', 'Silk', 'Bridal', '11111111-1111-1111-1111-000000000001', 60, true)
ON CONFLICT (id) DO UPDATE SET
  sample_code = EXCLUDED.sample_code,
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  fabric = EXCLUDED.fabric,
  occasion = EXCLUDED.occasion,
  category_id = EXCLUDED.category_id,
  display_order = EXCLUDED.display_order,
  is_active = EXCLUDED.is_active;
INSERT INTO public.gallery_items (id, sample_code, title, description, image_url, fabric, occasion, category_id, display_order, is_active)
VALUES ('88888888-8888-8888-8888-00000000003c', 'BR-161', 'Bridal Wear & Lehengas Sample #61', 'Hand-crafted bridal wear & lehengas showcasing signature necklines, precision fit, and bespoke finish by Raaji Ladies Fashion.', '/images/Bridal/IMG-20260925-WA0200.jpg', 'Silk', 'Bridal', '11111111-1111-1111-1111-000000000001', 61, true)
ON CONFLICT (id) DO UPDATE SET
  sample_code = EXCLUDED.sample_code,
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  fabric = EXCLUDED.fabric,
  occasion = EXCLUDED.occasion,
  category_id = EXCLUDED.category_id,
  display_order = EXCLUDED.display_order,
  is_active = EXCLUDED.is_active;
INSERT INTO public.gallery_items (id, sample_code, title, description, image_url, fabric, occasion, category_id, display_order, is_active)
VALUES ('88888888-8888-8888-8888-00000000003d', 'BR-162', 'Bridal Wear & Lehengas Sample #62', 'Hand-crafted bridal wear & lehengas showcasing signature necklines, precision fit, and bespoke finish by Raaji Ladies Fashion.', '/images/Bridal/IMG-20260925-WA0203.jpg', 'Silk', 'Bridal', '11111111-1111-1111-1111-000000000001', 62, true)
ON CONFLICT (id) DO UPDATE SET
  sample_code = EXCLUDED.sample_code,
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  fabric = EXCLUDED.fabric,
  occasion = EXCLUDED.occasion,
  category_id = EXCLUDED.category_id,
  display_order = EXCLUDED.display_order,
  is_active = EXCLUDED.is_active;
INSERT INTO public.gallery_items (id, sample_code, title, description, image_url, fabric, occasion, category_id, display_order, is_active)
VALUES ('88888888-8888-8888-8888-00000000003e', 'BR-163', 'Bridal Wear & Lehengas Sample #63', 'Hand-crafted bridal wear & lehengas showcasing signature necklines, precision fit, and bespoke finish by Raaji Ladies Fashion.', '/images/Bridal/IMG-20260925-WA0206.jpg', 'Silk', 'Bridal', '11111111-1111-1111-1111-000000000001', 63, true)
ON CONFLICT (id) DO UPDATE SET
  sample_code = EXCLUDED.sample_code,
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  fabric = EXCLUDED.fabric,
  occasion = EXCLUDED.occasion,
  category_id = EXCLUDED.category_id,
  display_order = EXCLUDED.display_order,
  is_active = EXCLUDED.is_active;
INSERT INTO public.gallery_items (id, sample_code, title, description, image_url, fabric, occasion, category_id, display_order, is_active)
VALUES ('88888888-8888-8888-8888-00000000003f', 'BR-164', 'Bridal Wear & Lehengas Sample #64', 'Hand-crafted bridal wear & lehengas showcasing signature necklines, precision fit, and bespoke finish by Raaji Ladies Fashion.', '/images/Bridal/IMG-20260925-WA0207.jpg', 'Silk', 'Bridal', '11111111-1111-1111-1111-000000000001', 64, true)
ON CONFLICT (id) DO UPDATE SET
  sample_code = EXCLUDED.sample_code,
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  fabric = EXCLUDED.fabric,
  occasion = EXCLUDED.occasion,
  category_id = EXCLUDED.category_id,
  display_order = EXCLUDED.display_order,
  is_active = EXCLUDED.is_active;
INSERT INTO public.gallery_items (id, sample_code, title, description, image_url, fabric, occasion, category_id, display_order, is_active)
VALUES ('88888888-8888-8888-8888-000000000040', 'BR-165', 'Bridal Wear & Lehengas Sample #65', 'Hand-crafted bridal wear & lehengas showcasing signature necklines, precision fit, and bespoke finish by Raaji Ladies Fashion.', '/images/Bridal/IMG-20260925-WA0208.jpg', 'Silk', 'Bridal', '11111111-1111-1111-1111-000000000001', 65, true)
ON CONFLICT (id) DO UPDATE SET
  sample_code = EXCLUDED.sample_code,
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  fabric = EXCLUDED.fabric,
  occasion = EXCLUDED.occasion,
  category_id = EXCLUDED.category_id,
  display_order = EXCLUDED.display_order,
  is_active = EXCLUDED.is_active;
INSERT INTO public.gallery_items (id, sample_code, title, description, image_url, fabric, occasion, category_id, display_order, is_active)
VALUES ('88888888-8888-8888-8888-000000000041', 'BR-166', 'Bridal Wear & Lehengas Sample #66', 'Hand-crafted bridal wear & lehengas showcasing signature necklines, precision fit, and bespoke finish by Raaji Ladies Fashion.', '/images/Bridal/IMG-20260925-WA0210.jpg', 'Silk', 'Bridal', '11111111-1111-1111-1111-000000000001', 66, true)
ON CONFLICT (id) DO UPDATE SET
  sample_code = EXCLUDED.sample_code,
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  fabric = EXCLUDED.fabric,
  occasion = EXCLUDED.occasion,
  category_id = EXCLUDED.category_id,
  display_order = EXCLUDED.display_order,
  is_active = EXCLUDED.is_active;
INSERT INTO public.gallery_items (id, sample_code, title, description, image_url, fabric, occasion, category_id, display_order, is_active)
VALUES ('88888888-8888-8888-8888-000000000042', 'BR-167', 'Bridal Wear & Lehengas Sample #67', 'Hand-crafted bridal wear & lehengas showcasing signature necklines, precision fit, and bespoke finish by Raaji Ladies Fashion.', '/images/Bridal/IMG-20260925-WA0211.jpg', 'Silk', 'Bridal', '11111111-1111-1111-1111-000000000001', 67, true)
ON CONFLICT (id) DO UPDATE SET
  sample_code = EXCLUDED.sample_code,
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  fabric = EXCLUDED.fabric,
  occasion = EXCLUDED.occasion,
  category_id = EXCLUDED.category_id,
  display_order = EXCLUDED.display_order,
  is_active = EXCLUDED.is_active;
INSERT INTO public.gallery_items (id, sample_code, title, description, image_url, fabric, occasion, category_id, display_order, is_active)
VALUES ('88888888-8888-8888-8888-000000000043', 'BR-168', 'Bridal Wear & Lehengas Sample #68', 'Hand-crafted bridal wear & lehengas showcasing signature necklines, precision fit, and bespoke finish by Raaji Ladies Fashion.', '/images/Bridal/IMG-20260925-WA0212.jpg', 'Silk', 'Bridal', '11111111-1111-1111-1111-000000000001', 68, true)
ON CONFLICT (id) DO UPDATE SET
  sample_code = EXCLUDED.sample_code,
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  fabric = EXCLUDED.fabric,
  occasion = EXCLUDED.occasion,
  category_id = EXCLUDED.category_id,
  display_order = EXCLUDED.display_order,
  is_active = EXCLUDED.is_active;
INSERT INTO public.gallery_items (id, sample_code, title, description, image_url, fabric, occasion, category_id, display_order, is_active)
VALUES ('88888888-8888-8888-8888-000000000044', 'BR-169', 'Bridal Wear & Lehengas Sample #69', 'Hand-crafted bridal wear & lehengas showcasing signature necklines, precision fit, and bespoke finish by Raaji Ladies Fashion.', '/images/Bridal/IMG_20210703_122417.jpg', 'Silk', 'Bridal', '11111111-1111-1111-1111-000000000001', 69, true)
ON CONFLICT (id) DO UPDATE SET
  sample_code = EXCLUDED.sample_code,
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  fabric = EXCLUDED.fabric,
  occasion = EXCLUDED.occasion,
  category_id = EXCLUDED.category_id,
  display_order = EXCLUDED.display_order,
  is_active = EXCLUDED.is_active;
INSERT INTO public.gallery_items (id, sample_code, title, description, image_url, fabric, occasion, category_id, display_order, is_active)
VALUES ('88888888-8888-8888-8888-000000000045', 'BR-170', 'Bridal Wear & Lehengas Sample #70', 'Hand-crafted bridal wear & lehengas showcasing signature necklines, precision fit, and bespoke finish by Raaji Ladies Fashion.', '/images/Bridal/IMG_20210715_121218.jpg', 'Silk', 'Bridal', '11111111-1111-1111-1111-000000000001', 70, true)
ON CONFLICT (id) DO UPDATE SET
  sample_code = EXCLUDED.sample_code,
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  fabric = EXCLUDED.fabric,
  occasion = EXCLUDED.occasion,
  category_id = EXCLUDED.category_id,
  display_order = EXCLUDED.display_order,
  is_active = EXCLUDED.is_active;
INSERT INTO public.gallery_items (id, sample_code, title, description, image_url, fabric, occasion, category_id, display_order, is_active)
VALUES ('88888888-8888-8888-8888-000000000046', 'BR-171', 'Bridal Wear & Lehengas Sample #71', 'Hand-crafted bridal wear & lehengas showcasing signature necklines, precision fit, and bespoke finish by Raaji Ladies Fashion.', '/images/Bridal/IMG_20220510_235045.jpg', 'Silk', 'Bridal', '11111111-1111-1111-1111-000000000001', 71, true)
ON CONFLICT (id) DO UPDATE SET
  sample_code = EXCLUDED.sample_code,
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  fabric = EXCLUDED.fabric,
  occasion = EXCLUDED.occasion,
  category_id = EXCLUDED.category_id,
  display_order = EXCLUDED.display_order,
  is_active = EXCLUDED.is_active;
INSERT INTO public.gallery_items (id, sample_code, title, description, image_url, fabric, occasion, category_id, display_order, is_active)
VALUES ('88888888-8888-8888-8888-000000000047', 'BR-172', 'Bridal Wear & Lehengas Sample #72', 'Hand-crafted bridal wear & lehengas showcasing signature necklines, precision fit, and bespoke finish by Raaji Ladies Fashion.', '/images/Bridal/IMG_20220510_235133.jpg', 'Silk', 'Bridal', '11111111-1111-1111-1111-000000000001', 72, true)
ON CONFLICT (id) DO UPDATE SET
  sample_code = EXCLUDED.sample_code,
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  fabric = EXCLUDED.fabric,
  occasion = EXCLUDED.occasion,
  category_id = EXCLUDED.category_id,
  display_order = EXCLUDED.display_order,
  is_active = EXCLUDED.is_active;
INSERT INTO public.gallery_items (id, sample_code, title, description, image_url, fabric, occasion, category_id, display_order, is_active)
VALUES ('88888888-8888-8888-8888-000000000048', 'AW-101', 'Aari Work Blouses Sample #1', 'Hand-crafted aari work blouses showcasing signature necklines, precision fit, and bespoke finish by Raaji Ladies Fashion.', '/images/aari work/IMG-20260925-WA0058.jpg', 'Silk', 'Bridal', '11111111-1111-1111-1111-000000000002', 73, true)
ON CONFLICT (id) DO UPDATE SET
  sample_code = EXCLUDED.sample_code,
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  fabric = EXCLUDED.fabric,
  occasion = EXCLUDED.occasion,
  category_id = EXCLUDED.category_id,
  display_order = EXCLUDED.display_order,
  is_active = EXCLUDED.is_active;
INSERT INTO public.gallery_items (id, sample_code, title, description, image_url, fabric, occasion, category_id, display_order, is_active)
VALUES ('88888888-8888-8888-8888-000000000049', 'AW-102', 'Aari Work Blouses Sample #2', 'Hand-crafted aari work blouses showcasing signature necklines, precision fit, and bespoke finish by Raaji Ladies Fashion.', '/images/aari work/IMG-20260925-WA0061.jpg', 'Silk', 'Bridal', '11111111-1111-1111-1111-000000000002', 74, true)
ON CONFLICT (id) DO UPDATE SET
  sample_code = EXCLUDED.sample_code,
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  fabric = EXCLUDED.fabric,
  occasion = EXCLUDED.occasion,
  category_id = EXCLUDED.category_id,
  display_order = EXCLUDED.display_order,
  is_active = EXCLUDED.is_active;
INSERT INTO public.gallery_items (id, sample_code, title, description, image_url, fabric, occasion, category_id, display_order, is_active)
VALUES ('88888888-8888-8888-8888-00000000004a', 'AW-103', 'Aari Work Blouses Sample #3', 'Hand-crafted aari work blouses showcasing signature necklines, precision fit, and bespoke finish by Raaji Ladies Fashion.', '/images/aari work/IMG-20260925-WA0062.jpg', 'Silk', 'Bridal', '11111111-1111-1111-1111-000000000002', 75, true)
ON CONFLICT (id) DO UPDATE SET
  sample_code = EXCLUDED.sample_code,
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  fabric = EXCLUDED.fabric,
  occasion = EXCLUDED.occasion,
  category_id = EXCLUDED.category_id,
  display_order = EXCLUDED.display_order,
  is_active = EXCLUDED.is_active;
INSERT INTO public.gallery_items (id, sample_code, title, description, image_url, fabric, occasion, category_id, display_order, is_active)
VALUES ('88888888-8888-8888-8888-00000000004b', 'AW-104', 'Aari Work Blouses Sample #4', 'Hand-crafted aari work blouses showcasing signature necklines, precision fit, and bespoke finish by Raaji Ladies Fashion.', '/images/aari work/IMG-20260925-WA0063.jpg', 'Silk', 'Bridal', '11111111-1111-1111-1111-000000000002', 76, true)
ON CONFLICT (id) DO UPDATE SET
  sample_code = EXCLUDED.sample_code,
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  fabric = EXCLUDED.fabric,
  occasion = EXCLUDED.occasion,
  category_id = EXCLUDED.category_id,
  display_order = EXCLUDED.display_order,
  is_active = EXCLUDED.is_active;
INSERT INTO public.gallery_items (id, sample_code, title, description, image_url, fabric, occasion, category_id, display_order, is_active)
VALUES ('88888888-8888-8888-8888-00000000004c', 'AW-105', 'Aari Work Blouses Sample #5', 'Hand-crafted aari work blouses showcasing signature necklines, precision fit, and bespoke finish by Raaji Ladies Fashion.', '/images/aari work/IMG-20260925-WA0058.jpg', 'Silk', 'Bridal', '11111111-1111-1111-1111-000000000002', 77, true)
ON CONFLICT (id) DO UPDATE SET
  sample_code = EXCLUDED.sample_code,
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  fabric = EXCLUDED.fabric,
  occasion = EXCLUDED.occasion,
  category_id = EXCLUDED.category_id,
  display_order = EXCLUDED.display_order,
  is_active = EXCLUDED.is_active;
INSERT INTO public.gallery_items (id, sample_code, title, description, image_url, fabric, occasion, category_id, display_order, is_active)
VALUES ('88888888-8888-8888-8888-00000000004d', 'AW-106', 'Aari Work Blouses Sample #6', 'Hand-crafted aari work blouses showcasing signature necklines, precision fit, and bespoke finish by Raaji Ladies Fashion.', '/images/aari work/IMG-20260925-WA0066.jpg', 'Silk', 'Bridal', '11111111-1111-1111-1111-000000000002', 78, true)
ON CONFLICT (id) DO UPDATE SET
  sample_code = EXCLUDED.sample_code,
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  fabric = EXCLUDED.fabric,
  occasion = EXCLUDED.occasion,
  category_id = EXCLUDED.category_id,
  display_order = EXCLUDED.display_order,
  is_active = EXCLUDED.is_active;
INSERT INTO public.gallery_items (id, sample_code, title, description, image_url, fabric, occasion, category_id, display_order, is_active)
VALUES ('88888888-8888-8888-8888-00000000004e', 'AW-107', 'Aari Work Blouses Sample #7', 'Hand-crafted aari work blouses showcasing signature necklines, precision fit, and bespoke finish by Raaji Ladies Fashion.', '/images/aari work/IMG-20260925-WA0067.jpg', 'Silk', 'Bridal', '11111111-1111-1111-1111-000000000002', 79, true)
ON CONFLICT (id) DO UPDATE SET
  sample_code = EXCLUDED.sample_code,
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  fabric = EXCLUDED.fabric,
  occasion = EXCLUDED.occasion,
  category_id = EXCLUDED.category_id,
  display_order = EXCLUDED.display_order,
  is_active = EXCLUDED.is_active;
INSERT INTO public.gallery_items (id, sample_code, title, description, image_url, fabric, occasion, category_id, display_order, is_active)
VALUES ('88888888-8888-8888-8888-00000000004f', 'AW-108', 'Aari Work Blouses Sample #8', 'Hand-crafted aari work blouses showcasing signature necklines, precision fit, and bespoke finish by Raaji Ladies Fashion.', '/images/aari work/IMG-20260925-WA0068.jpg', 'Silk', 'Bridal', '11111111-1111-1111-1111-000000000002', 80, true)
ON CONFLICT (id) DO UPDATE SET
  sample_code = EXCLUDED.sample_code,
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  fabric = EXCLUDED.fabric,
  occasion = EXCLUDED.occasion,
  category_id = EXCLUDED.category_id,
  display_order = EXCLUDED.display_order,
  is_active = EXCLUDED.is_active;
INSERT INTO public.gallery_items (id, sample_code, title, description, image_url, fabric, occasion, category_id, display_order, is_active)
VALUES ('88888888-8888-8888-8888-000000000050', 'AW-109', 'Aari Work Blouses Sample #9', 'Hand-crafted aari work blouses showcasing signature necklines, precision fit, and bespoke finish by Raaji Ladies Fashion.', '/images/aari work/IMG-20260925-WA0075.jpg', 'Silk', 'Bridal', '11111111-1111-1111-1111-000000000002', 81, true)
ON CONFLICT (id) DO UPDATE SET
  sample_code = EXCLUDED.sample_code,
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  fabric = EXCLUDED.fabric,
  occasion = EXCLUDED.occasion,
  category_id = EXCLUDED.category_id,
  display_order = EXCLUDED.display_order,
  is_active = EXCLUDED.is_active;
INSERT INTO public.gallery_items (id, sample_code, title, description, image_url, fabric, occasion, category_id, display_order, is_active)
VALUES ('88888888-8888-8888-8888-000000000051', 'AW-110', 'Aari Work Blouses Sample #10', 'Hand-crafted aari work blouses showcasing signature necklines, precision fit, and bespoke finish by Raaji Ladies Fashion.', '/images/aari work/IMG-20260925-WA0076.jpg', 'Silk', 'Bridal', '11111111-1111-1111-1111-000000000002', 82, true)
ON CONFLICT (id) DO UPDATE SET
  sample_code = EXCLUDED.sample_code,
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  fabric = EXCLUDED.fabric,
  occasion = EXCLUDED.occasion,
  category_id = EXCLUDED.category_id,
  display_order = EXCLUDED.display_order,
  is_active = EXCLUDED.is_active;
INSERT INTO public.gallery_items (id, sample_code, title, description, image_url, fabric, occasion, category_id, display_order, is_active)
VALUES ('88888888-8888-8888-8888-000000000052', 'AW-111', 'Aari Work Blouses Sample #11', 'Hand-crafted aari work blouses showcasing signature necklines, precision fit, and bespoke finish by Raaji Ladies Fashion.', '/images/aari work/IMG-20260925-WA0112.jpg', 'Silk', 'Bridal', '11111111-1111-1111-1111-000000000002', 83, true)
ON CONFLICT (id) DO UPDATE SET
  sample_code = EXCLUDED.sample_code,
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  fabric = EXCLUDED.fabric,
  occasion = EXCLUDED.occasion,
  category_id = EXCLUDED.category_id,
  display_order = EXCLUDED.display_order,
  is_active = EXCLUDED.is_active;
INSERT INTO public.gallery_items (id, sample_code, title, description, image_url, fabric, occasion, category_id, display_order, is_active)
VALUES ('88888888-8888-8888-8888-000000000053', 'AW-112', 'Aari Work Blouses Sample #12', 'Hand-crafted aari work blouses showcasing signature necklines, precision fit, and bespoke finish by Raaji Ladies Fashion.', '/images/aari work/IMG-20260925-WA0114.jpg', 'Silk', 'Bridal', '11111111-1111-1111-1111-000000000002', 84, true)
ON CONFLICT (id) DO UPDATE SET
  sample_code = EXCLUDED.sample_code,
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  fabric = EXCLUDED.fabric,
  occasion = EXCLUDED.occasion,
  category_id = EXCLUDED.category_id,
  display_order = EXCLUDED.display_order,
  is_active = EXCLUDED.is_active;
INSERT INTO public.gallery_items (id, sample_code, title, description, image_url, fabric, occasion, category_id, display_order, is_active)
VALUES ('88888888-8888-8888-8888-000000000054', 'AW-113', 'Aari Work Blouses Sample #13', 'Hand-crafted aari work blouses showcasing signature necklines, precision fit, and bespoke finish by Raaji Ladies Fashion.', '/images/aari work/IMG-20260925-WA0117.jpg', 'Silk', 'Bridal', '11111111-1111-1111-1111-000000000002', 85, true)
ON CONFLICT (id) DO UPDATE SET
  sample_code = EXCLUDED.sample_code,
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  fabric = EXCLUDED.fabric,
  occasion = EXCLUDED.occasion,
  category_id = EXCLUDED.category_id,
  display_order = EXCLUDED.display_order,
  is_active = EXCLUDED.is_active;
INSERT INTO public.gallery_items (id, sample_code, title, description, image_url, fabric, occasion, category_id, display_order, is_active)
VALUES ('88888888-8888-8888-8888-000000000055', 'AW-114', 'Aari Work Blouses Sample #14', 'Hand-crafted aari work blouses showcasing signature necklines, precision fit, and bespoke finish by Raaji Ladies Fashion.', '/images/aari work/IMG-20260925-WA0119.jpg', 'Silk', 'Bridal', '11111111-1111-1111-1111-000000000002', 86, true)
ON CONFLICT (id) DO UPDATE SET
  sample_code = EXCLUDED.sample_code,
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  fabric = EXCLUDED.fabric,
  occasion = EXCLUDED.occasion,
  category_id = EXCLUDED.category_id,
  display_order = EXCLUDED.display_order,
  is_active = EXCLUDED.is_active;
INSERT INTO public.gallery_items (id, sample_code, title, description, image_url, fabric, occasion, category_id, display_order, is_active)
VALUES ('88888888-8888-8888-8888-000000000056', 'AW-115', 'Aari Work Blouses Sample #15', 'Hand-crafted aari work blouses showcasing signature necklines, precision fit, and bespoke finish by Raaji Ladies Fashion.', '/images/aari work/IMG-20260925-WA0120.jpg', 'Silk', 'Bridal', '11111111-1111-1111-1111-000000000002', 87, true)
ON CONFLICT (id) DO UPDATE SET
  sample_code = EXCLUDED.sample_code,
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  fabric = EXCLUDED.fabric,
  occasion = EXCLUDED.occasion,
  category_id = EXCLUDED.category_id,
  display_order = EXCLUDED.display_order,
  is_active = EXCLUDED.is_active;
INSERT INTO public.gallery_items (id, sample_code, title, description, image_url, fabric, occasion, category_id, display_order, is_active)
VALUES ('88888888-8888-8888-8888-000000000057', 'AW-116', 'Aari Work Blouses Sample #16', 'Hand-crafted aari work blouses showcasing signature necklines, precision fit, and bespoke finish by Raaji Ladies Fashion.', '/images/aari work/IMG-20260925-WA0131.jpg', 'Silk', 'Bridal', '11111111-1111-1111-1111-000000000002', 88, true)
ON CONFLICT (id) DO UPDATE SET
  sample_code = EXCLUDED.sample_code,
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  fabric = EXCLUDED.fabric,
  occasion = EXCLUDED.occasion,
  category_id = EXCLUDED.category_id,
  display_order = EXCLUDED.display_order,
  is_active = EXCLUDED.is_active;
INSERT INTO public.gallery_items (id, sample_code, title, description, image_url, fabric, occasion, category_id, display_order, is_active)
VALUES ('88888888-8888-8888-8888-000000000058', 'AW-117', 'Aari Work Blouses Sample #17', 'Hand-crafted aari work blouses showcasing signature necklines, precision fit, and bespoke finish by Raaji Ladies Fashion.', '/images/aari work/IMG-20260925-WA0132.jpg', 'Silk', 'Bridal', '11111111-1111-1111-1111-000000000002', 89, true)
ON CONFLICT (id) DO UPDATE SET
  sample_code = EXCLUDED.sample_code,
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  fabric = EXCLUDED.fabric,
  occasion = EXCLUDED.occasion,
  category_id = EXCLUDED.category_id,
  display_order = EXCLUDED.display_order,
  is_active = EXCLUDED.is_active;
INSERT INTO public.gallery_items (id, sample_code, title, description, image_url, fabric, occasion, category_id, display_order, is_active)
VALUES ('88888888-8888-8888-8888-000000000059', 'AW-118', 'Aari Work Blouses Sample #18', 'Hand-crafted aari work blouses showcasing signature necklines, precision fit, and bespoke finish by Raaji Ladies Fashion.', '/images/aari work/IMG-20260925-WA0133.jpg', 'Silk', 'Bridal', '11111111-1111-1111-1111-000000000002', 90, true)
ON CONFLICT (id) DO UPDATE SET
  sample_code = EXCLUDED.sample_code,
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  fabric = EXCLUDED.fabric,
  occasion = EXCLUDED.occasion,
  category_id = EXCLUDED.category_id,
  display_order = EXCLUDED.display_order,
  is_active = EXCLUDED.is_active;
INSERT INTO public.gallery_items (id, sample_code, title, description, image_url, fabric, occasion, category_id, display_order, is_active)
VALUES ('88888888-8888-8888-8888-00000000005a', 'AW-119', 'Aari Work Blouses Sample #19', 'Hand-crafted aari work blouses showcasing signature necklines, precision fit, and bespoke finish by Raaji Ladies Fashion.', '/images/aari work/IMG-20260925-WA0134.jpg', 'Silk', 'Bridal', '11111111-1111-1111-1111-000000000002', 91, true)
ON CONFLICT (id) DO UPDATE SET
  sample_code = EXCLUDED.sample_code,
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  fabric = EXCLUDED.fabric,
  occasion = EXCLUDED.occasion,
  category_id = EXCLUDED.category_id,
  display_order = EXCLUDED.display_order,
  is_active = EXCLUDED.is_active;
INSERT INTO public.gallery_items (id, sample_code, title, description, image_url, fabric, occasion, category_id, display_order, is_active)
VALUES ('88888888-8888-8888-8888-00000000005b', 'AW-120', 'Aari Work Blouses Sample #20', 'Hand-crafted aari work blouses showcasing signature necklines, precision fit, and bespoke finish by Raaji Ladies Fashion.', '/images/aari work/IMG-20260925-WA0177.jpg', 'Silk', 'Bridal', '11111111-1111-1111-1111-000000000002', 92, true)
ON CONFLICT (id) DO UPDATE SET
  sample_code = EXCLUDED.sample_code,
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  fabric = EXCLUDED.fabric,
  occasion = EXCLUDED.occasion,
  category_id = EXCLUDED.category_id,
  display_order = EXCLUDED.display_order,
  is_active = EXCLUDED.is_active;
INSERT INTO public.gallery_items (id, sample_code, title, description, image_url, fabric, occasion, category_id, display_order, is_active)
VALUES ('88888888-8888-8888-8888-00000000005c', 'AW-121', 'Aari Work Blouses Sample #21', 'Hand-crafted aari work blouses showcasing signature necklines, precision fit, and bespoke finish by Raaji Ladies Fashion.', '/images/aari work/IMG-20260925-WA0181.jpg', 'Silk', 'Bridal', '11111111-1111-1111-1111-000000000002', 93, true)
ON CONFLICT (id) DO UPDATE SET
  sample_code = EXCLUDED.sample_code,
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  fabric = EXCLUDED.fabric,
  occasion = EXCLUDED.occasion,
  category_id = EXCLUDED.category_id,
  display_order = EXCLUDED.display_order,
  is_active = EXCLUDED.is_active;
INSERT INTO public.gallery_items (id, sample_code, title, description, image_url, fabric, occasion, category_id, display_order, is_active)
VALUES ('88888888-8888-8888-8888-00000000005d', 'AW-122', 'Aari Work Blouses Sample #22', 'Hand-crafted aari work blouses showcasing signature necklines, precision fit, and bespoke finish by Raaji Ladies Fashion.', '/images/aari work/IMG-20260925-WA0184.jpg', 'Silk', 'Bridal', '11111111-1111-1111-1111-000000000002', 94, true)
ON CONFLICT (id) DO UPDATE SET
  sample_code = EXCLUDED.sample_code,
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  fabric = EXCLUDED.fabric,
  occasion = EXCLUDED.occasion,
  category_id = EXCLUDED.category_id,
  display_order = EXCLUDED.display_order,
  is_active = EXCLUDED.is_active;
INSERT INTO public.gallery_items (id, sample_code, title, description, image_url, fabric, occasion, category_id, display_order, is_active)
VALUES ('88888888-8888-8888-8888-00000000005e', 'AW-123', 'Aari Work Blouses Sample #23', 'Hand-crafted aari work blouses showcasing signature necklines, precision fit, and bespoke finish by Raaji Ladies Fashion.', '/images/aari work/IMG-20260925-WA0198.jpg', 'Silk', 'Bridal', '11111111-1111-1111-1111-000000000002', 95, true)
ON CONFLICT (id) DO UPDATE SET
  sample_code = EXCLUDED.sample_code,
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  fabric = EXCLUDED.fabric,
  occasion = EXCLUDED.occasion,
  category_id = EXCLUDED.category_id,
  display_order = EXCLUDED.display_order,
  is_active = EXCLUDED.is_active;
INSERT INTO public.gallery_items (id, sample_code, title, description, image_url, fabric, occasion, category_id, display_order, is_active)
VALUES ('88888888-8888-8888-8888-00000000005f', 'AW-124', 'Aari Work Blouses Sample #24', 'Hand-crafted aari work blouses showcasing signature necklines, precision fit, and bespoke finish by Raaji Ladies Fashion.', '/images/aari work/IMG-20260925-WA0201.jpg', 'Silk', 'Bridal', '11111111-1111-1111-1111-000000000002', 96, true)
ON CONFLICT (id) DO UPDATE SET
  sample_code = EXCLUDED.sample_code,
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  fabric = EXCLUDED.fabric,
  occasion = EXCLUDED.occasion,
  category_id = EXCLUDED.category_id,
  display_order = EXCLUDED.display_order,
  is_active = EXCLUDED.is_active;
INSERT INTO public.gallery_items (id, sample_code, title, description, image_url, fabric, occasion, category_id, display_order, is_active)
VALUES ('88888888-8888-8888-8888-000000000060', 'AW-125', 'Aari Work Blouses Sample #25', 'Hand-crafted aari work blouses showcasing signature necklines, precision fit, and bespoke finish by Raaji Ladies Fashion.', '/images/aari work/IMG-20260925-WA0202.jpg', 'Silk', 'Bridal', '11111111-1111-1111-1111-000000000002', 97, true)
ON CONFLICT (id) DO UPDATE SET
  sample_code = EXCLUDED.sample_code,
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  fabric = EXCLUDED.fabric,
  occasion = EXCLUDED.occasion,
  category_id = EXCLUDED.category_id,
  display_order = EXCLUDED.display_order,
  is_active = EXCLUDED.is_active;
INSERT INTO public.gallery_items (id, sample_code, title, description, image_url, fabric, occasion, category_id, display_order, is_active)
VALUES ('88888888-8888-8888-8888-000000000061', 'EM-101', 'Custom Embroidery Designs Sample #1', 'Hand-crafted custom embroidery designs showcasing signature necklines, precision fit, and bespoke finish by Raaji Ladies Fashion.', '/images/emdroiadry designs/92ab050b0fc672ae1a191eedc4999ab8.jpg', 'Silk Blend', 'Festive', '11111111-1111-1111-1111-000000000003', 98, true)
ON CONFLICT (id) DO UPDATE SET
  sample_code = EXCLUDED.sample_code,
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  fabric = EXCLUDED.fabric,
  occasion = EXCLUDED.occasion,
  category_id = EXCLUDED.category_id,
  display_order = EXCLUDED.display_order,
  is_active = EXCLUDED.is_active;
INSERT INTO public.gallery_items (id, sample_code, title, description, image_url, fabric, occasion, category_id, display_order, is_active)
VALUES ('88888888-8888-8888-8888-000000000062', 'EM-102', 'Custom Embroidery Designs Sample #2', 'Hand-crafted custom embroidery designs showcasing signature necklines, precision fit, and bespoke finish by Raaji Ladies Fashion.', '/images/emdroiadry designs/IMG-20180212-WA0018_1762436076544.jpg', 'Silk Blend', 'Festive', '11111111-1111-1111-1111-000000000003', 99, true)
ON CONFLICT (id) DO UPDATE SET
  sample_code = EXCLUDED.sample_code,
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  fabric = EXCLUDED.fabric,
  occasion = EXCLUDED.occasion,
  category_id = EXCLUDED.category_id,
  display_order = EXCLUDED.display_order,
  is_active = EXCLUDED.is_active;
INSERT INTO public.gallery_items (id, sample_code, title, description, image_url, fabric, occasion, category_id, display_order, is_active)
VALUES ('88888888-8888-8888-8888-000000000063', 'EM-103', 'Custom Embroidery Designs Sample #3', 'Hand-crafted custom embroidery designs showcasing signature necklines, precision fit, and bespoke finish by Raaji Ladies Fashion.', '/images/emdroiadry designs/IMG-20260925-WA0009.jpg', 'Silk Blend', 'Festive', '11111111-1111-1111-1111-000000000003', 100, true)
ON CONFLICT (id) DO UPDATE SET
  sample_code = EXCLUDED.sample_code,
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  fabric = EXCLUDED.fabric,
  occasion = EXCLUDED.occasion,
  category_id = EXCLUDED.category_id,
  display_order = EXCLUDED.display_order,
  is_active = EXCLUDED.is_active;
INSERT INTO public.gallery_items (id, sample_code, title, description, image_url, fabric, occasion, category_id, display_order, is_active)
VALUES ('88888888-8888-8888-8888-000000000064', 'EM-104', 'Custom Embroidery Designs Sample #4', 'Hand-crafted custom embroidery designs showcasing signature necklines, precision fit, and bespoke finish by Raaji Ladies Fashion.', '/images/emdroiadry designs/IMG-20260925-WA0010.jpg', 'Silk Blend', 'Festive', '11111111-1111-1111-1111-000000000003', 101, true)
ON CONFLICT (id) DO UPDATE SET
  sample_code = EXCLUDED.sample_code,
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  fabric = EXCLUDED.fabric,
  occasion = EXCLUDED.occasion,
  category_id = EXCLUDED.category_id,
  display_order = EXCLUDED.display_order,
  is_active = EXCLUDED.is_active;
INSERT INTO public.gallery_items (id, sample_code, title, description, image_url, fabric, occasion, category_id, display_order, is_active)
VALUES ('88888888-8888-8888-8888-000000000065', 'EM-105', 'Custom Embroidery Designs Sample #5', 'Hand-crafted custom embroidery designs showcasing signature necklines, precision fit, and bespoke finish by Raaji Ladies Fashion.', '/images/emdroiadry designs/IMG-20260925-WA0011.jpg', 'Silk Blend', 'Festive', '11111111-1111-1111-1111-000000000003', 102, true)
ON CONFLICT (id) DO UPDATE SET
  sample_code = EXCLUDED.sample_code,
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  fabric = EXCLUDED.fabric,
  occasion = EXCLUDED.occasion,
  category_id = EXCLUDED.category_id,
  display_order = EXCLUDED.display_order,
  is_active = EXCLUDED.is_active;
INSERT INTO public.gallery_items (id, sample_code, title, description, image_url, fabric, occasion, category_id, display_order, is_active)
VALUES ('88888888-8888-8888-8888-000000000066', 'EM-106', 'Custom Embroidery Designs Sample #6', 'Hand-crafted custom embroidery designs showcasing signature necklines, precision fit, and bespoke finish by Raaji Ladies Fashion.', '/images/emdroiadry designs/IMG-20260925-WA0012.jpg', 'Silk Blend', 'Festive', '11111111-1111-1111-1111-000000000003', 103, true)
ON CONFLICT (id) DO UPDATE SET
  sample_code = EXCLUDED.sample_code,
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  fabric = EXCLUDED.fabric,
  occasion = EXCLUDED.occasion,
  category_id = EXCLUDED.category_id,
  display_order = EXCLUDED.display_order,
  is_active = EXCLUDED.is_active;
INSERT INTO public.gallery_items (id, sample_code, title, description, image_url, fabric, occasion, category_id, display_order, is_active)
VALUES ('88888888-8888-8888-8888-000000000067', 'EM-107', 'Custom Embroidery Designs Sample #7', 'Hand-crafted custom embroidery designs showcasing signature necklines, precision fit, and bespoke finish by Raaji Ladies Fashion.', '/images/emdroiadry designs/IMG-20260925-WA0013.jpg', 'Silk Blend', 'Festive', '11111111-1111-1111-1111-000000000003', 104, true)
ON CONFLICT (id) DO UPDATE SET
  sample_code = EXCLUDED.sample_code,
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  fabric = EXCLUDED.fabric,
  occasion = EXCLUDED.occasion,
  category_id = EXCLUDED.category_id,
  display_order = EXCLUDED.display_order,
  is_active = EXCLUDED.is_active;
INSERT INTO public.gallery_items (id, sample_code, title, description, image_url, fabric, occasion, category_id, display_order, is_active)
VALUES ('88888888-8888-8888-8888-000000000068', 'EM-108', 'Custom Embroidery Designs Sample #8', 'Hand-crafted custom embroidery designs showcasing signature necklines, precision fit, and bespoke finish by Raaji Ladies Fashion.', '/images/emdroiadry designs/IMG-20260925-WA0014.jpg', 'Silk Blend', 'Festive', '11111111-1111-1111-1111-000000000003', 105, true)
ON CONFLICT (id) DO UPDATE SET
  sample_code = EXCLUDED.sample_code,
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  fabric = EXCLUDED.fabric,
  occasion = EXCLUDED.occasion,
  category_id = EXCLUDED.category_id,
  display_order = EXCLUDED.display_order,
  is_active = EXCLUDED.is_active;
INSERT INTO public.gallery_items (id, sample_code, title, description, image_url, fabric, occasion, category_id, display_order, is_active)
VALUES ('88888888-8888-8888-8888-000000000069', 'EM-109', 'Custom Embroidery Designs Sample #9', 'Hand-crafted custom embroidery designs showcasing signature necklines, precision fit, and bespoke finish by Raaji Ladies Fashion.', '/images/emdroiadry designs/IMG-20260925-WA0015.jpg', 'Silk Blend', 'Festive', '11111111-1111-1111-1111-000000000003', 106, true)
ON CONFLICT (id) DO UPDATE SET
  sample_code = EXCLUDED.sample_code,
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  fabric = EXCLUDED.fabric,
  occasion = EXCLUDED.occasion,
  category_id = EXCLUDED.category_id,
  display_order = EXCLUDED.display_order,
  is_active = EXCLUDED.is_active;
INSERT INTO public.gallery_items (id, sample_code, title, description, image_url, fabric, occasion, category_id, display_order, is_active)
VALUES ('88888888-8888-8888-8888-00000000006a', 'EM-110', 'Custom Embroidery Designs Sample #10', 'Hand-crafted custom embroidery designs showcasing signature necklines, precision fit, and bespoke finish by Raaji Ladies Fashion.', '/images/emdroiadry designs/IMG-20260925-WA0016.jpg', 'Silk Blend', 'Festive', '11111111-1111-1111-1111-000000000003', 107, true)
ON CONFLICT (id) DO UPDATE SET
  sample_code = EXCLUDED.sample_code,
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  fabric = EXCLUDED.fabric,
  occasion = EXCLUDED.occasion,
  category_id = EXCLUDED.category_id,
  display_order = EXCLUDED.display_order,
  is_active = EXCLUDED.is_active;
INSERT INTO public.gallery_items (id, sample_code, title, description, image_url, fabric, occasion, category_id, display_order, is_active)
VALUES ('88888888-8888-8888-8888-00000000006b', 'EM-111', 'Custom Embroidery Designs Sample #11', 'Hand-crafted custom embroidery designs showcasing signature necklines, precision fit, and bespoke finish by Raaji Ladies Fashion.', '/images/emdroiadry designs/IMG-20260925-WA0017.jpg', 'Silk Blend', 'Festive', '11111111-1111-1111-1111-000000000003', 108, true)
ON CONFLICT (id) DO UPDATE SET
  sample_code = EXCLUDED.sample_code,
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  fabric = EXCLUDED.fabric,
  occasion = EXCLUDED.occasion,
  category_id = EXCLUDED.category_id,
  display_order = EXCLUDED.display_order,
  is_active = EXCLUDED.is_active;
INSERT INTO public.gallery_items (id, sample_code, title, description, image_url, fabric, occasion, category_id, display_order, is_active)
VALUES ('88888888-8888-8888-8888-00000000006c', 'EM-112', 'Custom Embroidery Designs Sample #12', 'Hand-crafted custom embroidery designs showcasing signature necklines, precision fit, and bespoke finish by Raaji Ladies Fashion.', '/images/emdroiadry designs/IMG-20260925-WA0018.jpg', 'Silk Blend', 'Festive', '11111111-1111-1111-1111-000000000003', 109, true)
ON CONFLICT (id) DO UPDATE SET
  sample_code = EXCLUDED.sample_code,
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  fabric = EXCLUDED.fabric,
  occasion = EXCLUDED.occasion,
  category_id = EXCLUDED.category_id,
  display_order = EXCLUDED.display_order,
  is_active = EXCLUDED.is_active;
INSERT INTO public.gallery_items (id, sample_code, title, description, image_url, fabric, occasion, category_id, display_order, is_active)
VALUES ('88888888-8888-8888-8888-00000000006d', 'EM-113', 'Custom Embroidery Designs Sample #13', 'Hand-crafted custom embroidery designs showcasing signature necklines, precision fit, and bespoke finish by Raaji Ladies Fashion.', '/images/emdroiadry designs/IMG-20260925-WA0019.jpg', 'Silk Blend', 'Festive', '11111111-1111-1111-1111-000000000003', 110, true)
ON CONFLICT (id) DO UPDATE SET
  sample_code = EXCLUDED.sample_code,
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  fabric = EXCLUDED.fabric,
  occasion = EXCLUDED.occasion,
  category_id = EXCLUDED.category_id,
  display_order = EXCLUDED.display_order,
  is_active = EXCLUDED.is_active;
INSERT INTO public.gallery_items (id, sample_code, title, description, image_url, fabric, occasion, category_id, display_order, is_active)
VALUES ('88888888-8888-8888-8888-00000000006e', 'EM-114', 'Custom Embroidery Designs Sample #14', 'Hand-crafted custom embroidery designs showcasing signature necklines, precision fit, and bespoke finish by Raaji Ladies Fashion.', '/images/emdroiadry designs/IMG-20260925-WA0020.jpg', 'Silk Blend', 'Festive', '11111111-1111-1111-1111-000000000003', 111, true)
ON CONFLICT (id) DO UPDATE SET
  sample_code = EXCLUDED.sample_code,
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  fabric = EXCLUDED.fabric,
  occasion = EXCLUDED.occasion,
  category_id = EXCLUDED.category_id,
  display_order = EXCLUDED.display_order,
  is_active = EXCLUDED.is_active;
INSERT INTO public.gallery_items (id, sample_code, title, description, image_url, fabric, occasion, category_id, display_order, is_active)
VALUES ('88888888-8888-8888-8888-00000000006f', 'EM-115', 'Custom Embroidery Designs Sample #15', 'Hand-crafted custom embroidery designs showcasing signature necklines, precision fit, and bespoke finish by Raaji Ladies Fashion.', '/images/emdroiadry designs/IMG-20260925-WA0021.jpg', 'Silk Blend', 'Festive', '11111111-1111-1111-1111-000000000003', 112, true)
ON CONFLICT (id) DO UPDATE SET
  sample_code = EXCLUDED.sample_code,
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  fabric = EXCLUDED.fabric,
  occasion = EXCLUDED.occasion,
  category_id = EXCLUDED.category_id,
  display_order = EXCLUDED.display_order,
  is_active = EXCLUDED.is_active;
INSERT INTO public.gallery_items (id, sample_code, title, description, image_url, fabric, occasion, category_id, display_order, is_active)
VALUES ('88888888-8888-8888-8888-000000000070', 'EM-116', 'Custom Embroidery Designs Sample #16', 'Hand-crafted custom embroidery designs showcasing signature necklines, precision fit, and bespoke finish by Raaji Ladies Fashion.', '/images/emdroiadry designs/IMG-20260925-WA0022.jpg', 'Silk Blend', 'Festive', '11111111-1111-1111-1111-000000000003', 113, true)
ON CONFLICT (id) DO UPDATE SET
  sample_code = EXCLUDED.sample_code,
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  fabric = EXCLUDED.fabric,
  occasion = EXCLUDED.occasion,
  category_id = EXCLUDED.category_id,
  display_order = EXCLUDED.display_order,
  is_active = EXCLUDED.is_active;
INSERT INTO public.gallery_items (id, sample_code, title, description, image_url, fabric, occasion, category_id, display_order, is_active)
VALUES ('88888888-8888-8888-8888-000000000071', 'EM-117', 'Custom Embroidery Designs Sample #17', 'Hand-crafted custom embroidery designs showcasing signature necklines, precision fit, and bespoke finish by Raaji Ladies Fashion.', '/images/emdroiadry designs/IMG-20260925-WA0023.jpg', 'Silk Blend', 'Festive', '11111111-1111-1111-1111-000000000003', 114, true)
ON CONFLICT (id) DO UPDATE SET
  sample_code = EXCLUDED.sample_code,
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  fabric = EXCLUDED.fabric,
  occasion = EXCLUDED.occasion,
  category_id = EXCLUDED.category_id,
  display_order = EXCLUDED.display_order,
  is_active = EXCLUDED.is_active;
INSERT INTO public.gallery_items (id, sample_code, title, description, image_url, fabric, occasion, category_id, display_order, is_active)
VALUES ('88888888-8888-8888-8888-000000000072', 'EM-118', 'Custom Embroidery Designs Sample #18', 'Hand-crafted custom embroidery designs showcasing signature necklines, precision fit, and bespoke finish by Raaji Ladies Fashion.', '/images/emdroiadry designs/IMG-20260925-WA0024.jpg', 'Silk Blend', 'Festive', '11111111-1111-1111-1111-000000000003', 115, true)
ON CONFLICT (id) DO UPDATE SET
  sample_code = EXCLUDED.sample_code,
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  fabric = EXCLUDED.fabric,
  occasion = EXCLUDED.occasion,
  category_id = EXCLUDED.category_id,
  display_order = EXCLUDED.display_order,
  is_active = EXCLUDED.is_active;
INSERT INTO public.gallery_items (id, sample_code, title, description, image_url, fabric, occasion, category_id, display_order, is_active)
VALUES ('88888888-8888-8888-8888-000000000073', 'EM-119', 'Custom Embroidery Designs Sample #19', 'Hand-crafted custom embroidery designs showcasing signature necklines, precision fit, and bespoke finish by Raaji Ladies Fashion.', '/images/emdroiadry designs/IMG-20260925-WA0025.jpg', 'Silk Blend', 'Festive', '11111111-1111-1111-1111-000000000003', 116, true)
ON CONFLICT (id) DO UPDATE SET
  sample_code = EXCLUDED.sample_code,
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  fabric = EXCLUDED.fabric,
  occasion = EXCLUDED.occasion,
  category_id = EXCLUDED.category_id,
  display_order = EXCLUDED.display_order,
  is_active = EXCLUDED.is_active;
INSERT INTO public.gallery_items (id, sample_code, title, description, image_url, fabric, occasion, category_id, display_order, is_active)
VALUES ('88888888-8888-8888-8888-000000000074', 'EM-120', 'Custom Embroidery Designs Sample #20', 'Hand-crafted custom embroidery designs showcasing signature necklines, precision fit, and bespoke finish by Raaji Ladies Fashion.', '/images/emdroiadry designs/IMG-20260925-WA0026.jpg', 'Silk Blend', 'Festive', '11111111-1111-1111-1111-000000000003', 117, true)
ON CONFLICT (id) DO UPDATE SET
  sample_code = EXCLUDED.sample_code,
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  fabric = EXCLUDED.fabric,
  occasion = EXCLUDED.occasion,
  category_id = EXCLUDED.category_id,
  display_order = EXCLUDED.display_order,
  is_active = EXCLUDED.is_active;
INSERT INTO public.gallery_items (id, sample_code, title, description, image_url, fabric, occasion, category_id, display_order, is_active)
VALUES ('88888888-8888-8888-8888-000000000075', 'EM-121', 'Custom Embroidery Designs Sample #21', 'Hand-crafted custom embroidery designs showcasing signature necklines, precision fit, and bespoke finish by Raaji Ladies Fashion.', '/images/emdroiadry designs/IMG-20260925-WA0027.jpg', 'Silk Blend', 'Festive', '11111111-1111-1111-1111-000000000003', 118, true)
ON CONFLICT (id) DO UPDATE SET
  sample_code = EXCLUDED.sample_code,
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  fabric = EXCLUDED.fabric,
  occasion = EXCLUDED.occasion,
  category_id = EXCLUDED.category_id,
  display_order = EXCLUDED.display_order,
  is_active = EXCLUDED.is_active;
INSERT INTO public.gallery_items (id, sample_code, title, description, image_url, fabric, occasion, category_id, display_order, is_active)
VALUES ('88888888-8888-8888-8888-000000000076', 'EM-122', 'Custom Embroidery Designs Sample #22', 'Hand-crafted custom embroidery designs showcasing signature necklines, precision fit, and bespoke finish by Raaji Ladies Fashion.', '/images/emdroiadry designs/IMG-20260925-WA0028.jpg', 'Silk Blend', 'Festive', '11111111-1111-1111-1111-000000000003', 119, true)
ON CONFLICT (id) DO UPDATE SET
  sample_code = EXCLUDED.sample_code,
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  fabric = EXCLUDED.fabric,
  occasion = EXCLUDED.occasion,
  category_id = EXCLUDED.category_id,
  display_order = EXCLUDED.display_order,
  is_active = EXCLUDED.is_active;
INSERT INTO public.gallery_items (id, sample_code, title, description, image_url, fabric, occasion, category_id, display_order, is_active)
VALUES ('88888888-8888-8888-8888-000000000077', 'EM-123', 'Custom Embroidery Designs Sample #23', 'Hand-crafted custom embroidery designs showcasing signature necklines, precision fit, and bespoke finish by Raaji Ladies Fashion.', '/images/emdroiadry designs/IMG-20260925-WA0029.jpg', 'Silk Blend', 'Festive', '11111111-1111-1111-1111-000000000003', 120, true)
ON CONFLICT (id) DO UPDATE SET
  sample_code = EXCLUDED.sample_code,
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  fabric = EXCLUDED.fabric,
  occasion = EXCLUDED.occasion,
  category_id = EXCLUDED.category_id,
  display_order = EXCLUDED.display_order,
  is_active = EXCLUDED.is_active;
INSERT INTO public.gallery_items (id, sample_code, title, description, image_url, fabric, occasion, category_id, display_order, is_active)
VALUES ('88888888-8888-8888-8888-000000000078', 'EM-124', 'Custom Embroidery Designs Sample #24', 'Hand-crafted custom embroidery designs showcasing signature necklines, precision fit, and bespoke finish by Raaji Ladies Fashion.', '/images/emdroiadry designs/IMG-20260925-WA0030.jpg', 'Silk Blend', 'Festive', '11111111-1111-1111-1111-000000000003', 121, true)
ON CONFLICT (id) DO UPDATE SET
  sample_code = EXCLUDED.sample_code,
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  fabric = EXCLUDED.fabric,
  occasion = EXCLUDED.occasion,
  category_id = EXCLUDED.category_id,
  display_order = EXCLUDED.display_order,
  is_active = EXCLUDED.is_active;
INSERT INTO public.gallery_items (id, sample_code, title, description, image_url, fabric, occasion, category_id, display_order, is_active)
VALUES ('88888888-8888-8888-8888-000000000079', 'EM-125', 'Custom Embroidery Designs Sample #25', 'Hand-crafted custom embroidery designs showcasing signature necklines, precision fit, and bespoke finish by Raaji Ladies Fashion.', '/images/emdroiadry designs/IMG-20260925-WA0031.jpg', 'Silk Blend', 'Festive', '11111111-1111-1111-1111-000000000003', 122, true)
ON CONFLICT (id) DO UPDATE SET
  sample_code = EXCLUDED.sample_code,
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  fabric = EXCLUDED.fabric,
  occasion = EXCLUDED.occasion,
  category_id = EXCLUDED.category_id,
  display_order = EXCLUDED.display_order,
  is_active = EXCLUDED.is_active;
INSERT INTO public.gallery_items (id, sample_code, title, description, image_url, fabric, occasion, category_id, display_order, is_active)
VALUES ('88888888-8888-8888-8888-00000000007a', 'EM-126', 'Custom Embroidery Designs Sample #26', 'Hand-crafted custom embroidery designs showcasing signature necklines, precision fit, and bespoke finish by Raaji Ladies Fashion.', '/images/emdroiadry designs/IMG-20260925-WA0032.jpg', 'Silk Blend', 'Festive', '11111111-1111-1111-1111-000000000003', 123, true)
ON CONFLICT (id) DO UPDATE SET
  sample_code = EXCLUDED.sample_code,
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  fabric = EXCLUDED.fabric,
  occasion = EXCLUDED.occasion,
  category_id = EXCLUDED.category_id,
  display_order = EXCLUDED.display_order,
  is_active = EXCLUDED.is_active;
INSERT INTO public.gallery_items (id, sample_code, title, description, image_url, fabric, occasion, category_id, display_order, is_active)
VALUES ('88888888-8888-8888-8888-00000000007b', 'EM-127', 'Custom Embroidery Designs Sample #27', 'Hand-crafted custom embroidery designs showcasing signature necklines, precision fit, and bespoke finish by Raaji Ladies Fashion.', '/images/emdroiadry designs/IMG-20260925-WA0033.jpg', 'Silk Blend', 'Festive', '11111111-1111-1111-1111-000000000003', 124, true)
ON CONFLICT (id) DO UPDATE SET
  sample_code = EXCLUDED.sample_code,
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  fabric = EXCLUDED.fabric,
  occasion = EXCLUDED.occasion,
  category_id = EXCLUDED.category_id,
  display_order = EXCLUDED.display_order,
  is_active = EXCLUDED.is_active;
INSERT INTO public.gallery_items (id, sample_code, title, description, image_url, fabric, occasion, category_id, display_order, is_active)
VALUES ('88888888-8888-8888-8888-00000000007c', 'EM-128', 'Custom Embroidery Designs Sample #28', 'Hand-crafted custom embroidery designs showcasing signature necklines, precision fit, and bespoke finish by Raaji Ladies Fashion.', '/images/emdroiadry designs/IMG-20260925-WA0034.jpg', 'Silk Blend', 'Festive', '11111111-1111-1111-1111-000000000003', 125, true)
ON CONFLICT (id) DO UPDATE SET
  sample_code = EXCLUDED.sample_code,
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  fabric = EXCLUDED.fabric,
  occasion = EXCLUDED.occasion,
  category_id = EXCLUDED.category_id,
  display_order = EXCLUDED.display_order,
  is_active = EXCLUDED.is_active;
INSERT INTO public.gallery_items (id, sample_code, title, description, image_url, fabric, occasion, category_id, display_order, is_active)
VALUES ('88888888-8888-8888-8888-00000000007d', 'EM-129', 'Custom Embroidery Designs Sample #29', 'Hand-crafted custom embroidery designs showcasing signature necklines, precision fit, and bespoke finish by Raaji Ladies Fashion.', '/images/emdroiadry designs/IMG-20260925-WA0035.jpg', 'Silk Blend', 'Festive', '11111111-1111-1111-1111-000000000003', 126, true)
ON CONFLICT (id) DO UPDATE SET
  sample_code = EXCLUDED.sample_code,
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  fabric = EXCLUDED.fabric,
  occasion = EXCLUDED.occasion,
  category_id = EXCLUDED.category_id,
  display_order = EXCLUDED.display_order,
  is_active = EXCLUDED.is_active;
INSERT INTO public.gallery_items (id, sample_code, title, description, image_url, fabric, occasion, category_id, display_order, is_active)
VALUES ('88888888-8888-8888-8888-00000000007e', 'EM-130', 'Custom Embroidery Designs Sample #30', 'Hand-crafted custom embroidery designs showcasing signature necklines, precision fit, and bespoke finish by Raaji Ladies Fashion.', '/images/emdroiadry designs/IMG-20260925-WA0036.jpg', 'Silk Blend', 'Festive', '11111111-1111-1111-1111-000000000003', 127, true)
ON CONFLICT (id) DO UPDATE SET
  sample_code = EXCLUDED.sample_code,
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  fabric = EXCLUDED.fabric,
  occasion = EXCLUDED.occasion,
  category_id = EXCLUDED.category_id,
  display_order = EXCLUDED.display_order,
  is_active = EXCLUDED.is_active;
INSERT INTO public.gallery_items (id, sample_code, title, description, image_url, fabric, occasion, category_id, display_order, is_active)
VALUES ('88888888-8888-8888-8888-00000000007f', 'EM-131', 'Custom Embroidery Designs Sample #31', 'Hand-crafted custom embroidery designs showcasing signature necklines, precision fit, and bespoke finish by Raaji Ladies Fashion.', '/images/emdroiadry designs/IMG-20260925-WA0037.jpg', 'Silk Blend', 'Festive', '11111111-1111-1111-1111-000000000003', 128, true)
ON CONFLICT (id) DO UPDATE SET
  sample_code = EXCLUDED.sample_code,
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  fabric = EXCLUDED.fabric,
  occasion = EXCLUDED.occasion,
  category_id = EXCLUDED.category_id,
  display_order = EXCLUDED.display_order,
  is_active = EXCLUDED.is_active;
INSERT INTO public.gallery_items (id, sample_code, title, description, image_url, fabric, occasion, category_id, display_order, is_active)
VALUES ('88888888-8888-8888-8888-000000000080', 'EM-132', 'Custom Embroidery Designs Sample #32', 'Hand-crafted custom embroidery designs showcasing signature necklines, precision fit, and bespoke finish by Raaji Ladies Fashion.', '/images/emdroiadry designs/IMG-20260925-WA0038.jpg', 'Silk Blend', 'Festive', '11111111-1111-1111-1111-000000000003', 129, true)
ON CONFLICT (id) DO UPDATE SET
  sample_code = EXCLUDED.sample_code,
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  fabric = EXCLUDED.fabric,
  occasion = EXCLUDED.occasion,
  category_id = EXCLUDED.category_id,
  display_order = EXCLUDED.display_order,
  is_active = EXCLUDED.is_active;
INSERT INTO public.gallery_items (id, sample_code, title, description, image_url, fabric, occasion, category_id, display_order, is_active)
VALUES ('88888888-8888-8888-8888-000000000081', 'EM-133', 'Custom Embroidery Designs Sample #33', 'Hand-crafted custom embroidery designs showcasing signature necklines, precision fit, and bespoke finish by Raaji Ladies Fashion.', '/images/emdroiadry designs/IMG-20260925-WA0039.jpg', 'Silk Blend', 'Festive', '11111111-1111-1111-1111-000000000003', 130, true)
ON CONFLICT (id) DO UPDATE SET
  sample_code = EXCLUDED.sample_code,
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  fabric = EXCLUDED.fabric,
  occasion = EXCLUDED.occasion,
  category_id = EXCLUDED.category_id,
  display_order = EXCLUDED.display_order,
  is_active = EXCLUDED.is_active;
INSERT INTO public.gallery_items (id, sample_code, title, description, image_url, fabric, occasion, category_id, display_order, is_active)
VALUES ('88888888-8888-8888-8888-000000000082', 'EM-134', 'Custom Embroidery Designs Sample #34', 'Hand-crafted custom embroidery designs showcasing signature necklines, precision fit, and bespoke finish by Raaji Ladies Fashion.', '/images/emdroiadry designs/IMG-20260925-WA0040.jpg', 'Silk Blend', 'Festive', '11111111-1111-1111-1111-000000000003', 131, true)
ON CONFLICT (id) DO UPDATE SET
  sample_code = EXCLUDED.sample_code,
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  fabric = EXCLUDED.fabric,
  occasion = EXCLUDED.occasion,
  category_id = EXCLUDED.category_id,
  display_order = EXCLUDED.display_order,
  is_active = EXCLUDED.is_active;
INSERT INTO public.gallery_items (id, sample_code, title, description, image_url, fabric, occasion, category_id, display_order, is_active)
VALUES ('88888888-8888-8888-8888-000000000083', 'EM-135', 'Custom Embroidery Designs Sample #35', 'Hand-crafted custom embroidery designs showcasing signature necklines, precision fit, and bespoke finish by Raaji Ladies Fashion.', '/images/emdroiadry designs/IMG-20260925-WA0041.jpg', 'Silk Blend', 'Festive', '11111111-1111-1111-1111-000000000003', 132, true)
ON CONFLICT (id) DO UPDATE SET
  sample_code = EXCLUDED.sample_code,
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  fabric = EXCLUDED.fabric,
  occasion = EXCLUDED.occasion,
  category_id = EXCLUDED.category_id,
  display_order = EXCLUDED.display_order,
  is_active = EXCLUDED.is_active;
INSERT INTO public.gallery_items (id, sample_code, title, description, image_url, fabric, occasion, category_id, display_order, is_active)
VALUES ('88888888-8888-8888-8888-000000000084', 'EM-136', 'Custom Embroidery Designs Sample #36', 'Hand-crafted custom embroidery designs showcasing signature necklines, precision fit, and bespoke finish by Raaji Ladies Fashion.', '/images/emdroiadry designs/IMG-20260925-WA0042.jpg', 'Silk Blend', 'Festive', '11111111-1111-1111-1111-000000000003', 133, true)
ON CONFLICT (id) DO UPDATE SET
  sample_code = EXCLUDED.sample_code,
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  fabric = EXCLUDED.fabric,
  occasion = EXCLUDED.occasion,
  category_id = EXCLUDED.category_id,
  display_order = EXCLUDED.display_order,
  is_active = EXCLUDED.is_active;
INSERT INTO public.gallery_items (id, sample_code, title, description, image_url, fabric, occasion, category_id, display_order, is_active)
VALUES ('88888888-8888-8888-8888-000000000085', 'EM-137', 'Custom Embroidery Designs Sample #37', 'Hand-crafted custom embroidery designs showcasing signature necklines, precision fit, and bespoke finish by Raaji Ladies Fashion.', '/images/emdroiadry designs/IMG-20260925-WA0043.jpg', 'Silk Blend', 'Festive', '11111111-1111-1111-1111-000000000003', 134, true)
ON CONFLICT (id) DO UPDATE SET
  sample_code = EXCLUDED.sample_code,
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  fabric = EXCLUDED.fabric,
  occasion = EXCLUDED.occasion,
  category_id = EXCLUDED.category_id,
  display_order = EXCLUDED.display_order,
  is_active = EXCLUDED.is_active;
INSERT INTO public.gallery_items (id, sample_code, title, description, image_url, fabric, occasion, category_id, display_order, is_active)
VALUES ('88888888-8888-8888-8888-000000000086', 'EM-138', 'Custom Embroidery Designs Sample #38', 'Hand-crafted custom embroidery designs showcasing signature necklines, precision fit, and bespoke finish by Raaji Ladies Fashion.', '/images/emdroiadry designs/IMG-20260925-WA0044.jpg', 'Silk Blend', 'Festive', '11111111-1111-1111-1111-000000000003', 135, true)
ON CONFLICT (id) DO UPDATE SET
  sample_code = EXCLUDED.sample_code,
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  fabric = EXCLUDED.fabric,
  occasion = EXCLUDED.occasion,
  category_id = EXCLUDED.category_id,
  display_order = EXCLUDED.display_order,
  is_active = EXCLUDED.is_active;
INSERT INTO public.gallery_items (id, sample_code, title, description, image_url, fabric, occasion, category_id, display_order, is_active)
VALUES ('88888888-8888-8888-8888-000000000087', 'EM-139', 'Custom Embroidery Designs Sample #39', 'Hand-crafted custom embroidery designs showcasing signature necklines, precision fit, and bespoke finish by Raaji Ladies Fashion.', '/images/emdroiadry designs/IMG-20260925-WA0045.jpg', 'Silk Blend', 'Festive', '11111111-1111-1111-1111-000000000003', 136, true)
ON CONFLICT (id) DO UPDATE SET
  sample_code = EXCLUDED.sample_code,
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  fabric = EXCLUDED.fabric,
  occasion = EXCLUDED.occasion,
  category_id = EXCLUDED.category_id,
  display_order = EXCLUDED.display_order,
  is_active = EXCLUDED.is_active;
INSERT INTO public.gallery_items (id, sample_code, title, description, image_url, fabric, occasion, category_id, display_order, is_active)
VALUES ('88888888-8888-8888-8888-000000000088', 'EM-140', 'Custom Embroidery Designs Sample #40', 'Hand-crafted custom embroidery designs showcasing signature necklines, precision fit, and bespoke finish by Raaji Ladies Fashion.', '/images/emdroiadry designs/IMG-20260925-WA0046.jpg', 'Silk Blend', 'Festive', '11111111-1111-1111-1111-000000000003', 137, true)
ON CONFLICT (id) DO UPDATE SET
  sample_code = EXCLUDED.sample_code,
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  fabric = EXCLUDED.fabric,
  occasion = EXCLUDED.occasion,
  category_id = EXCLUDED.category_id,
  display_order = EXCLUDED.display_order,
  is_active = EXCLUDED.is_active;
INSERT INTO public.gallery_items (id, sample_code, title, description, image_url, fabric, occasion, category_id, display_order, is_active)
VALUES ('88888888-8888-8888-8888-000000000089', 'EM-141', 'Custom Embroidery Designs Sample #41', 'Hand-crafted custom embroidery designs showcasing signature necklines, precision fit, and bespoke finish by Raaji Ladies Fashion.', '/images/emdroiadry designs/IMG-20260925-WA0047.jpg', 'Silk Blend', 'Festive', '11111111-1111-1111-1111-000000000003', 138, true)
ON CONFLICT (id) DO UPDATE SET
  sample_code = EXCLUDED.sample_code,
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  fabric = EXCLUDED.fabric,
  occasion = EXCLUDED.occasion,
  category_id = EXCLUDED.category_id,
  display_order = EXCLUDED.display_order,
  is_active = EXCLUDED.is_active;
INSERT INTO public.gallery_items (id, sample_code, title, description, image_url, fabric, occasion, category_id, display_order, is_active)
VALUES ('88888888-8888-8888-8888-00000000008a', 'EM-142', 'Custom Embroidery Designs Sample #42', 'Hand-crafted custom embroidery designs showcasing signature necklines, precision fit, and bespoke finish by Raaji Ladies Fashion.', '/images/emdroiadry designs/IMG-20260925-WA0048.jpg', 'Silk Blend', 'Festive', '11111111-1111-1111-1111-000000000003', 139, true)
ON CONFLICT (id) DO UPDATE SET
  sample_code = EXCLUDED.sample_code,
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  fabric = EXCLUDED.fabric,
  occasion = EXCLUDED.occasion,
  category_id = EXCLUDED.category_id,
  display_order = EXCLUDED.display_order,
  is_active = EXCLUDED.is_active;
INSERT INTO public.gallery_items (id, sample_code, title, description, image_url, fabric, occasion, category_id, display_order, is_active)
VALUES ('88888888-8888-8888-8888-00000000008b', 'EM-143', 'Custom Embroidery Designs Sample #43', 'Hand-crafted custom embroidery designs showcasing signature necklines, precision fit, and bespoke finish by Raaji Ladies Fashion.', '/images/emdroiadry designs/IMG-20260925-WA0049.jpg', 'Silk Blend', 'Festive', '11111111-1111-1111-1111-000000000003', 140, true)
ON CONFLICT (id) DO UPDATE SET
  sample_code = EXCLUDED.sample_code,
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  fabric = EXCLUDED.fabric,
  occasion = EXCLUDED.occasion,
  category_id = EXCLUDED.category_id,
  display_order = EXCLUDED.display_order,
  is_active = EXCLUDED.is_active;
INSERT INTO public.gallery_items (id, sample_code, title, description, image_url, fabric, occasion, category_id, display_order, is_active)
VALUES ('88888888-8888-8888-8888-00000000008c', 'EM-144', 'Custom Embroidery Designs Sample #44', 'Hand-crafted custom embroidery designs showcasing signature necklines, precision fit, and bespoke finish by Raaji Ladies Fashion.', '/images/emdroiadry designs/IMG-20260925-WA0050.jpg', 'Silk Blend', 'Festive', '11111111-1111-1111-1111-000000000003', 141, true)
ON CONFLICT (id) DO UPDATE SET
  sample_code = EXCLUDED.sample_code,
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  fabric = EXCLUDED.fabric,
  occasion = EXCLUDED.occasion,
  category_id = EXCLUDED.category_id,
  display_order = EXCLUDED.display_order,
  is_active = EXCLUDED.is_active;
INSERT INTO public.gallery_items (id, sample_code, title, description, image_url, fabric, occasion, category_id, display_order, is_active)
VALUES ('88888888-8888-8888-8888-00000000008d', 'EM-145', 'Custom Embroidery Designs Sample #45', 'Hand-crafted custom embroidery designs showcasing signature necklines, precision fit, and bespoke finish by Raaji Ladies Fashion.', '/images/emdroiadry designs/IMG-20260925-WA0051.jpg', 'Silk Blend', 'Festive', '11111111-1111-1111-1111-000000000003', 142, true)
ON CONFLICT (id) DO UPDATE SET
  sample_code = EXCLUDED.sample_code,
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  fabric = EXCLUDED.fabric,
  occasion = EXCLUDED.occasion,
  category_id = EXCLUDED.category_id,
  display_order = EXCLUDED.display_order,
  is_active = EXCLUDED.is_active;
INSERT INTO public.gallery_items (id, sample_code, title, description, image_url, fabric, occasion, category_id, display_order, is_active)
VALUES ('88888888-8888-8888-8888-00000000008e', 'EM-146', 'Custom Embroidery Designs Sample #46', 'Hand-crafted custom embroidery designs showcasing signature necklines, precision fit, and bespoke finish by Raaji Ladies Fashion.', '/images/emdroiadry designs/IMG-20260925-WA0052.jpg', 'Silk Blend', 'Festive', '11111111-1111-1111-1111-000000000003', 143, true)
ON CONFLICT (id) DO UPDATE SET
  sample_code = EXCLUDED.sample_code,
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  fabric = EXCLUDED.fabric,
  occasion = EXCLUDED.occasion,
  category_id = EXCLUDED.category_id,
  display_order = EXCLUDED.display_order,
  is_active = EXCLUDED.is_active;
INSERT INTO public.gallery_items (id, sample_code, title, description, image_url, fabric, occasion, category_id, display_order, is_active)
VALUES ('88888888-8888-8888-8888-00000000008f', 'EM-147', 'Custom Embroidery Designs Sample #47', 'Hand-crafted custom embroidery designs showcasing signature necklines, precision fit, and bespoke finish by Raaji Ladies Fashion.', '/images/emdroiadry designs/IMG-20260925-WA0053.jpg', 'Silk Blend', 'Festive', '11111111-1111-1111-1111-000000000003', 144, true)
ON CONFLICT (id) DO UPDATE SET
  sample_code = EXCLUDED.sample_code,
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  fabric = EXCLUDED.fabric,
  occasion = EXCLUDED.occasion,
  category_id = EXCLUDED.category_id,
  display_order = EXCLUDED.display_order,
  is_active = EXCLUDED.is_active;
INSERT INTO public.gallery_items (id, sample_code, title, description, image_url, fabric, occasion, category_id, display_order, is_active)
VALUES ('88888888-8888-8888-8888-000000000090', 'EM-148', 'Custom Embroidery Designs Sample #48', 'Hand-crafted custom embroidery designs showcasing signature necklines, precision fit, and bespoke finish by Raaji Ladies Fashion.', '/images/emdroiadry designs/IMG-20260925-WA0054.jpg', 'Silk Blend', 'Festive', '11111111-1111-1111-1111-000000000003', 145, true)
ON CONFLICT (id) DO UPDATE SET
  sample_code = EXCLUDED.sample_code,
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  fabric = EXCLUDED.fabric,
  occasion = EXCLUDED.occasion,
  category_id = EXCLUDED.category_id,
  display_order = EXCLUDED.display_order,
  is_active = EXCLUDED.is_active;
INSERT INTO public.gallery_items (id, sample_code, title, description, image_url, fabric, occasion, category_id, display_order, is_active)
VALUES ('88888888-8888-8888-8888-000000000091', 'EM-149', 'Custom Embroidery Designs Sample #49', 'Hand-crafted custom embroidery designs showcasing signature necklines, precision fit, and bespoke finish by Raaji Ladies Fashion.', '/images/emdroiadry designs/IMG-20260925-WA0055.jpg', 'Silk Blend', 'Festive', '11111111-1111-1111-1111-000000000003', 146, true)
ON CONFLICT (id) DO UPDATE SET
  sample_code = EXCLUDED.sample_code,
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  fabric = EXCLUDED.fabric,
  occasion = EXCLUDED.occasion,
  category_id = EXCLUDED.category_id,
  display_order = EXCLUDED.display_order,
  is_active = EXCLUDED.is_active;
INSERT INTO public.gallery_items (id, sample_code, title, description, image_url, fabric, occasion, category_id, display_order, is_active)
VALUES ('88888888-8888-8888-8888-000000000092', 'EM-150', 'Custom Embroidery Designs Sample #50', 'Hand-crafted custom embroidery designs showcasing signature necklines, precision fit, and bespoke finish by Raaji Ladies Fashion.', '/images/emdroiadry designs/IMG-20260925-WA0060.jpg', 'Silk Blend', 'Festive', '11111111-1111-1111-1111-000000000003', 147, true)
ON CONFLICT (id) DO UPDATE SET
  sample_code = EXCLUDED.sample_code,
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  fabric = EXCLUDED.fabric,
  occasion = EXCLUDED.occasion,
  category_id = EXCLUDED.category_id,
  display_order = EXCLUDED.display_order,
  is_active = EXCLUDED.is_active;
INSERT INTO public.gallery_items (id, sample_code, title, description, image_url, fabric, occasion, category_id, display_order, is_active)
VALUES ('88888888-8888-8888-8888-000000000093', 'EM-151', 'Custom Embroidery Designs Sample #51', 'Hand-crafted custom embroidery designs showcasing signature necklines, precision fit, and bespoke finish by Raaji Ladies Fashion.', '/images/emdroiadry designs/IMG-20260925-WA0083.jpg', 'Silk Blend', 'Festive', '11111111-1111-1111-1111-000000000003', 148, true)
ON CONFLICT (id) DO UPDATE SET
  sample_code = EXCLUDED.sample_code,
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  fabric = EXCLUDED.fabric,
  occasion = EXCLUDED.occasion,
  category_id = EXCLUDED.category_id,
  display_order = EXCLUDED.display_order,
  is_active = EXCLUDED.is_active;
INSERT INTO public.gallery_items (id, sample_code, title, description, image_url, fabric, occasion, category_id, display_order, is_active)
VALUES ('88888888-8888-8888-8888-000000000094', 'EM-152', 'Custom Embroidery Designs Sample #52', 'Hand-crafted custom embroidery designs showcasing signature necklines, precision fit, and bespoke finish by Raaji Ladies Fashion.', '/images/emdroiadry designs/IMG-20260925-WA0089.jpg', 'Silk Blend', 'Festive', '11111111-1111-1111-1111-000000000003', 149, true)
ON CONFLICT (id) DO UPDATE SET
  sample_code = EXCLUDED.sample_code,
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  fabric = EXCLUDED.fabric,
  occasion = EXCLUDED.occasion,
  category_id = EXCLUDED.category_id,
  display_order = EXCLUDED.display_order,
  is_active = EXCLUDED.is_active;
INSERT INTO public.gallery_items (id, sample_code, title, description, image_url, fabric, occasion, category_id, display_order, is_active)
VALUES ('88888888-8888-8888-8888-000000000095', 'EM-153', 'Custom Embroidery Designs Sample #53', 'Hand-crafted custom embroidery designs showcasing signature necklines, precision fit, and bespoke finish by Raaji Ladies Fashion.', '/images/emdroiadry designs/IMG-20260925-WA0091.jpg', 'Silk Blend', 'Festive', '11111111-1111-1111-1111-000000000003', 150, true)
ON CONFLICT (id) DO UPDATE SET
  sample_code = EXCLUDED.sample_code,
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  fabric = EXCLUDED.fabric,
  occasion = EXCLUDED.occasion,
  category_id = EXCLUDED.category_id,
  display_order = EXCLUDED.display_order,
  is_active = EXCLUDED.is_active;
INSERT INTO public.gallery_items (id, sample_code, title, description, image_url, fabric, occasion, category_id, display_order, is_active)
VALUES ('88888888-8888-8888-8888-000000000096', 'EM-154', 'Custom Embroidery Designs Sample #54', 'Hand-crafted custom embroidery designs showcasing signature necklines, precision fit, and bespoke finish by Raaji Ladies Fashion.', '/images/emdroiadry designs/IMG-20260925-WA0093.jpg', 'Silk Blend', 'Festive', '11111111-1111-1111-1111-000000000003', 151, true)
ON CONFLICT (id) DO UPDATE SET
  sample_code = EXCLUDED.sample_code,
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  fabric = EXCLUDED.fabric,
  occasion = EXCLUDED.occasion,
  category_id = EXCLUDED.category_id,
  display_order = EXCLUDED.display_order,
  is_active = EXCLUDED.is_active;
INSERT INTO public.gallery_items (id, sample_code, title, description, image_url, fabric, occasion, category_id, display_order, is_active)
VALUES ('88888888-8888-8888-8888-000000000097', 'EM-155', 'Custom Embroidery Designs Sample #55', 'Hand-crafted custom embroidery designs showcasing signature necklines, precision fit, and bespoke finish by Raaji Ladies Fashion.', '/images/emdroiadry designs/IMG-20260925-WA0127.jpg', 'Silk Blend', 'Festive', '11111111-1111-1111-1111-000000000003', 152, true)
ON CONFLICT (id) DO UPDATE SET
  sample_code = EXCLUDED.sample_code,
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  fabric = EXCLUDED.fabric,
  occasion = EXCLUDED.occasion,
  category_id = EXCLUDED.category_id,
  display_order = EXCLUDED.display_order,
  is_active = EXCLUDED.is_active;
INSERT INTO public.gallery_items (id, sample_code, title, description, image_url, fabric, occasion, category_id, display_order, is_active)
VALUES ('88888888-8888-8888-8888-000000000098', 'EM-156', 'Custom Embroidery Designs Sample #56', 'Hand-crafted custom embroidery designs showcasing signature necklines, precision fit, and bespoke finish by Raaji Ladies Fashion.', '/images/emdroiadry designs/IMG20200929202254.jpg', 'Silk Blend', 'Festive', '11111111-1111-1111-1111-000000000003', 153, true)
ON CONFLICT (id) DO UPDATE SET
  sample_code = EXCLUDED.sample_code,
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  fabric = EXCLUDED.fabric,
  occasion = EXCLUDED.occasion,
  category_id = EXCLUDED.category_id,
  display_order = EXCLUDED.display_order,
  is_active = EXCLUDED.is_active;
INSERT INTO public.gallery_items (id, sample_code, title, description, image_url, fabric, occasion, category_id, display_order, is_active)
VALUES ('88888888-8888-8888-8888-000000000099', 'EM-157', 'Custom Embroidery Designs Sample #57', 'Hand-crafted custom embroidery designs showcasing signature necklines, precision fit, and bespoke finish by Raaji Ladies Fashion.', '/images/emdroiadry designs/IMG20201205174819.jpg', 'Silk Blend', 'Festive', '11111111-1111-1111-1111-000000000003', 154, true)
ON CONFLICT (id) DO UPDATE SET
  sample_code = EXCLUDED.sample_code,
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  fabric = EXCLUDED.fabric,
  occasion = EXCLUDED.occasion,
  category_id = EXCLUDED.category_id,
  display_order = EXCLUDED.display_order,
  is_active = EXCLUDED.is_active;
INSERT INTO public.gallery_items (id, sample_code, title, description, image_url, fabric, occasion, category_id, display_order, is_active)
VALUES ('88888888-8888-8888-8888-00000000009a', 'EM-158', 'Custom Embroidery Designs Sample #58', 'Hand-crafted custom embroidery designs showcasing signature necklines, precision fit, and bespoke finish by Raaji Ladies Fashion.', '/images/emdroiadry designs/IMG20201223184023.jpg', 'Silk Blend', 'Festive', '11111111-1111-1111-1111-000000000003', 155, true)
ON CONFLICT (id) DO UPDATE SET
  sample_code = EXCLUDED.sample_code,
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  fabric = EXCLUDED.fabric,
  occasion = EXCLUDED.occasion,
  category_id = EXCLUDED.category_id,
  display_order = EXCLUDED.display_order,
  is_active = EXCLUDED.is_active;
INSERT INTO public.gallery_items (id, sample_code, title, description, image_url, fabric, occasion, category_id, display_order, is_active)
VALUES ('88888888-8888-8888-8888-00000000009b', 'EM-159', 'Custom Embroidery Designs Sample #59', 'Hand-crafted custom embroidery designs showcasing signature necklines, precision fit, and bespoke finish by Raaji Ladies Fashion.', '/images/emdroiadry designs/IMG20201223184051.jpg', 'Silk Blend', 'Festive', '11111111-1111-1111-1111-000000000003', 156, true)
ON CONFLICT (id) DO UPDATE SET
  sample_code = EXCLUDED.sample_code,
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  fabric = EXCLUDED.fabric,
  occasion = EXCLUDED.occasion,
  category_id = EXCLUDED.category_id,
  display_order = EXCLUDED.display_order,
  is_active = EXCLUDED.is_active;
INSERT INTO public.gallery_items (id, sample_code, title, description, image_url, fabric, occasion, category_id, display_order, is_active)
VALUES ('88888888-8888-8888-8888-00000000009c', 'SC-101', 'Scallop & Cutwork Blouses Sample #1', 'Hand-crafted scallop & cutwork blouses showcasing signature necklines, precision fit, and bespoke finish by Raaji Ladies Fashion.', '/images/scalab/IMG-20260819-WA0014.jpg', 'Organza', 'Contemporary', '11111111-1111-1111-1111-000000000005', 157, true)
ON CONFLICT (id) DO UPDATE SET
  sample_code = EXCLUDED.sample_code,
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  fabric = EXCLUDED.fabric,
  occasion = EXCLUDED.occasion,
  category_id = EXCLUDED.category_id,
  display_order = EXCLUDED.display_order,
  is_active = EXCLUDED.is_active;
INSERT INTO public.gallery_items (id, sample_code, title, description, image_url, fabric, occasion, category_id, display_order, is_active)
VALUES ('88888888-8888-8888-8888-00000000009d', 'TB-101', 'Designer Tops & Blouses Sample #1', 'Hand-crafted designer tops & blouses showcasing signature necklines, precision fit, and bespoke finish by Raaji Ladies Fashion.', '/images/top blouse/538dc319df3726c2638939851010cae0.jpg', 'Cotton', 'Festive', '11111111-1111-1111-1111-000000000004', 158, true)
ON CONFLICT (id) DO UPDATE SET
  sample_code = EXCLUDED.sample_code,
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  fabric = EXCLUDED.fabric,
  occasion = EXCLUDED.occasion,
  category_id = EXCLUDED.category_id,
  display_order = EXCLUDED.display_order,
  is_active = EXCLUDED.is_active;
INSERT INTO public.gallery_items (id, sample_code, title, description, image_url, fabric, occasion, category_id, display_order, is_active)
VALUES ('88888888-8888-8888-8888-00000000009e', 'TB-102', 'Designer Tops & Blouses Sample #2', 'Hand-crafted designer tops & blouses showcasing signature necklines, precision fit, and bespoke finish by Raaji Ladies Fashion.', '/images/categories/designer-blouse.jpg', 'Cotton', 'Festive', '11111111-1111-1111-1111-000000000004', 159, true)
ON CONFLICT (id) DO UPDATE SET
  sample_code = EXCLUDED.sample_code,
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  fabric = EXCLUDED.fabric,
  occasion = EXCLUDED.occasion,
  category_id = EXCLUDED.category_id,
  display_order = EXCLUDED.display_order,
  is_active = EXCLUDED.is_active;
INSERT INTO public.gallery_items (id, sample_code, title, description, image_url, fabric, occasion, category_id, display_order, is_active)
VALUES ('88888888-8888-8888-8888-00000000009f', 'TB-103', 'Designer Tops & Blouses Sample #3', 'Hand-crafted designer tops & blouses showcasing signature necklines, precision fit, and bespoke finish by Raaji Ladies Fashion.', '/images/top blouse/96f879541a930b81063f4a813c73492f.jpg', 'Cotton', 'Festive', '11111111-1111-1111-1111-000000000004', 160, true)
ON CONFLICT (id) DO UPDATE SET
  sample_code = EXCLUDED.sample_code,
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  fabric = EXCLUDED.fabric,
  occasion = EXCLUDED.occasion,
  category_id = EXCLUDED.category_id,
  display_order = EXCLUDED.display_order,
  is_active = EXCLUDED.is_active;
INSERT INTO public.gallery_items (id, sample_code, title, description, image_url, fabric, occasion, category_id, display_order, is_active)
VALUES ('88888888-8888-8888-8888-0000000000a0', 'TB-104', 'Designer Tops & Blouses Sample #4', 'Hand-crafted designer tops & blouses showcasing signature necklines, precision fit, and bespoke finish by Raaji Ladies Fashion.', '/images/top blouse/9d73fd4f2a4dac16c6ecb9bccee35276.jpg', 'Cotton', 'Festive', '11111111-1111-1111-1111-000000000004', 161, true)
ON CONFLICT (id) DO UPDATE SET
  sample_code = EXCLUDED.sample_code,
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  fabric = EXCLUDED.fabric,
  occasion = EXCLUDED.occasion,
  category_id = EXCLUDED.category_id,
  display_order = EXCLUDED.display_order,
  is_active = EXCLUDED.is_active;
INSERT INTO public.gallery_items (id, sample_code, title, description, image_url, fabric, occasion, category_id, display_order, is_active)
VALUES ('88888888-8888-8888-8888-0000000000a1', 'TB-105', 'Designer Tops & Blouses Sample #5', 'Hand-crafted designer tops & blouses showcasing signature necklines, precision fit, and bespoke finish by Raaji Ladies Fashion.', '/images/top blouse/ebd776fbfd1039955287481b2a246fec.jpg', 'Cotton', 'Festive', '11111111-1111-1111-1111-000000000004', 162, true)
ON CONFLICT (id) DO UPDATE SET
  sample_code = EXCLUDED.sample_code,
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  fabric = EXCLUDED.fabric,
  occasion = EXCLUDED.occasion,
  category_id = EXCLUDED.category_id,
  display_order = EXCLUDED.display_order,
  is_active = EXCLUDED.is_active;
INSERT INTO public.gallery_items (id, sample_code, title, description, image_url, fabric, occasion, category_id, display_order, is_active)
VALUES ('88888888-8888-8888-8888-0000000000a2', 'TB-106', 'Designer Tops & Blouses Sample #6', 'Hand-crafted designer tops & blouses showcasing signature necklines, precision fit, and bespoke finish by Raaji Ladies Fashion.', '/images/top blouse/IMG-20210416-WA0017.jpg', 'Cotton', 'Festive', '11111111-1111-1111-1111-000000000004', 163, true)
ON CONFLICT (id) DO UPDATE SET
  sample_code = EXCLUDED.sample_code,
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  fabric = EXCLUDED.fabric,
  occasion = EXCLUDED.occasion,
  category_id = EXCLUDED.category_id,
  display_order = EXCLUDED.display_order,
  is_active = EXCLUDED.is_active;
INSERT INTO public.gallery_items (id, sample_code, title, description, image_url, fabric, occasion, category_id, display_order, is_active)
VALUES ('88888888-8888-8888-8888-0000000000a3', 'TB-107', 'Designer Tops & Blouses Sample #7', 'Hand-crafted designer tops & blouses showcasing signature necklines, precision fit, and bespoke finish by Raaji Ladies Fashion.', '/images/top blouse/IMG-20210416-WA0018.jpg', 'Cotton', 'Festive', '11111111-1111-1111-1111-000000000004', 164, true)
ON CONFLICT (id) DO UPDATE SET
  sample_code = EXCLUDED.sample_code,
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  fabric = EXCLUDED.fabric,
  occasion = EXCLUDED.occasion,
  category_id = EXCLUDED.category_id,
  display_order = EXCLUDED.display_order,
  is_active = EXCLUDED.is_active;
INSERT INTO public.gallery_items (id, sample_code, title, description, image_url, fabric, occasion, category_id, display_order, is_active)
VALUES ('88888888-8888-8888-8888-0000000000a4', 'TB-108', 'Designer Tops & Blouses Sample #8', 'Hand-crafted designer tops & blouses showcasing signature necklines, precision fit, and bespoke finish by Raaji Ladies Fashion.', '/images/top blouse/IMG-20210416-WA0019.jpg', 'Cotton', 'Festive', '11111111-1111-1111-1111-000000000004', 165, true)
ON CONFLICT (id) DO UPDATE SET
  sample_code = EXCLUDED.sample_code,
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  fabric = EXCLUDED.fabric,
  occasion = EXCLUDED.occasion,
  category_id = EXCLUDED.category_id,
  display_order = EXCLUDED.display_order,
  is_active = EXCLUDED.is_active;
INSERT INTO public.gallery_items (id, sample_code, title, description, image_url, fabric, occasion, category_id, display_order, is_active)
VALUES ('88888888-8888-8888-8888-0000000000a5', 'TB-109', 'Designer Tops & Blouses Sample #9', 'Hand-crafted designer tops & blouses showcasing signature necklines, precision fit, and bespoke finish by Raaji Ladies Fashion.', '/images/top blouse/IMG-20210417-WA0024.jpg', 'Cotton', 'Festive', '11111111-1111-1111-1111-000000000004', 166, true)
ON CONFLICT (id) DO UPDATE SET
  sample_code = EXCLUDED.sample_code,
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  fabric = EXCLUDED.fabric,
  occasion = EXCLUDED.occasion,
  category_id = EXCLUDED.category_id,
  display_order = EXCLUDED.display_order,
  is_active = EXCLUDED.is_active;
INSERT INTO public.gallery_items (id, sample_code, title, description, image_url, fabric, occasion, category_id, display_order, is_active)
VALUES ('88888888-8888-8888-8888-0000000000a6', 'TB-110', 'Designer Tops & Blouses Sample #10', 'Hand-crafted designer tops & blouses showcasing signature necklines, precision fit, and bespoke finish by Raaji Ladies Fashion.', '/images/top blouse/IMG-20210417-WA0025.jpg', 'Cotton', 'Festive', '11111111-1111-1111-1111-000000000004', 167, true)
ON CONFLICT (id) DO UPDATE SET
  sample_code = EXCLUDED.sample_code,
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  fabric = EXCLUDED.fabric,
  occasion = EXCLUDED.occasion,
  category_id = EXCLUDED.category_id,
  display_order = EXCLUDED.display_order,
  is_active = EXCLUDED.is_active;
INSERT INTO public.gallery_items (id, sample_code, title, description, image_url, fabric, occasion, category_id, display_order, is_active)
VALUES ('88888888-8888-8888-8888-0000000000a7', 'TB-111', 'Designer Tops & Blouses Sample #11', 'Hand-crafted designer tops & blouses showcasing signature necklines, precision fit, and bespoke finish by Raaji Ladies Fashion.', '/images/top blouse/IMG-20210707-WA0002.jpg', 'Cotton', 'Festive', '11111111-1111-1111-1111-000000000004', 168, true)
ON CONFLICT (id) DO UPDATE SET
  sample_code = EXCLUDED.sample_code,
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  fabric = EXCLUDED.fabric,
  occasion = EXCLUDED.occasion,
  category_id = EXCLUDED.category_id,
  display_order = EXCLUDED.display_order,
  is_active = EXCLUDED.is_active;
INSERT INTO public.gallery_items (id, sample_code, title, description, image_url, fabric, occasion, category_id, display_order, is_active)
VALUES ('88888888-8888-8888-8888-0000000000a8', 'TB-112', 'Designer Tops & Blouses Sample #12', 'Hand-crafted designer tops & blouses showcasing signature necklines, precision fit, and bespoke finish by Raaji Ladies Fashion.', '/images/top blouse/IMG-20210707-WA0004.jpg', 'Cotton', 'Festive', '11111111-1111-1111-1111-000000000004', 169, true)
ON CONFLICT (id) DO UPDATE SET
  sample_code = EXCLUDED.sample_code,
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  fabric = EXCLUDED.fabric,
  occasion = EXCLUDED.occasion,
  category_id = EXCLUDED.category_id,
  display_order = EXCLUDED.display_order,
  is_active = EXCLUDED.is_active;
INSERT INTO public.gallery_items (id, sample_code, title, description, image_url, fabric, occasion, category_id, display_order, is_active)
VALUES ('88888888-8888-8888-8888-0000000000a9', 'TB-113', 'Designer Tops & Blouses Sample #13', 'Hand-crafted designer tops & blouses showcasing signature necklines, precision fit, and bespoke finish by Raaji Ladies Fashion.', '/images/top blouse/IMG-20210708-WA0003.jpg', 'Cotton', 'Festive', '11111111-1111-1111-1111-000000000004', 170, true)
ON CONFLICT (id) DO UPDATE SET
  sample_code = EXCLUDED.sample_code,
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  fabric = EXCLUDED.fabric,
  occasion = EXCLUDED.occasion,
  category_id = EXCLUDED.category_id,
  display_order = EXCLUDED.display_order,
  is_active = EXCLUDED.is_active;
INSERT INTO public.gallery_items (id, sample_code, title, description, image_url, fabric, occasion, category_id, display_order, is_active)
VALUES ('88888888-8888-8888-8888-0000000000aa', 'TB-114', 'Designer Tops & Blouses Sample #14', 'Hand-crafted designer tops & blouses showcasing signature necklines, precision fit, and bespoke finish by Raaji Ladies Fashion.', '/images/top blouse/IMG-20210708-WA0004.jpg', 'Cotton', 'Festive', '11111111-1111-1111-1111-000000000004', 171, true)
ON CONFLICT (id) DO UPDATE SET
  sample_code = EXCLUDED.sample_code,
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  fabric = EXCLUDED.fabric,
  occasion = EXCLUDED.occasion,
  category_id = EXCLUDED.category_id,
  display_order = EXCLUDED.display_order,
  is_active = EXCLUDED.is_active;
INSERT INTO public.gallery_items (id, sample_code, title, description, image_url, fabric, occasion, category_id, display_order, is_active)
VALUES ('88888888-8888-8888-8888-0000000000ab', 'TB-115', 'Designer Tops & Blouses Sample #15', 'Hand-crafted designer tops & blouses showcasing signature necklines, precision fit, and bespoke finish by Raaji Ladies Fashion.', '/images/top blouse/IMG-20210708-WA0005.jpg', 'Cotton', 'Festive', '11111111-1111-1111-1111-000000000004', 172, true)
ON CONFLICT (id) DO UPDATE SET
  sample_code = EXCLUDED.sample_code,
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  fabric = EXCLUDED.fabric,
  occasion = EXCLUDED.occasion,
  category_id = EXCLUDED.category_id,
  display_order = EXCLUDED.display_order,
  is_active = EXCLUDED.is_active;
INSERT INTO public.gallery_items (id, sample_code, title, description, image_url, fabric, occasion, category_id, display_order, is_active)
VALUES ('88888888-8888-8888-8888-0000000000ac', 'TB-116', 'Designer Tops & Blouses Sample #16', 'Hand-crafted designer tops & blouses showcasing signature necklines, precision fit, and bespoke finish by Raaji Ladies Fashion.', '/images/top blouse/IMG-20210708-WA0006.jpg', 'Cotton', 'Festive', '11111111-1111-1111-1111-000000000004', 173, true)
ON CONFLICT (id) DO UPDATE SET
  sample_code = EXCLUDED.sample_code,
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  fabric = EXCLUDED.fabric,
  occasion = EXCLUDED.occasion,
  category_id = EXCLUDED.category_id,
  display_order = EXCLUDED.display_order,
  is_active = EXCLUDED.is_active;
INSERT INTO public.gallery_items (id, sample_code, title, description, image_url, fabric, occasion, category_id, display_order, is_active)
VALUES ('88888888-8888-8888-8888-0000000000ad', 'TB-117', 'Designer Tops & Blouses Sample #17', 'Hand-crafted designer tops & blouses showcasing signature necklines, precision fit, and bespoke finish by Raaji Ladies Fashion.', '/images/top blouse/IMG-20211008-WA0030.jpg', 'Cotton', 'Festive', '11111111-1111-1111-1111-000000000004', 174, true)
ON CONFLICT (id) DO UPDATE SET
  sample_code = EXCLUDED.sample_code,
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  fabric = EXCLUDED.fabric,
  occasion = EXCLUDED.occasion,
  category_id = EXCLUDED.category_id,
  display_order = EXCLUDED.display_order,
  is_active = EXCLUDED.is_active;

-- Seed Site Content
INSERT INTO public.site_content (id, title, content)
VALUES ('site_config', 'Site Configuration', '{"name":"RAAJI Ladies Fashion","since":"2005","tagline":"The Most Trusted Tailor in Korattur","subtitle":"Custom tailoring, blouse stitching, dress tailoring, saree care and more.","announcement":"Bring your own fabrics • Precision anatomical fit • Established 2005","announcement_active":true}'::jsonb)
ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  content = EXCLUDED.content;
