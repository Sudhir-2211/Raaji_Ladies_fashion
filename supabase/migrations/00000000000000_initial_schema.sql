-- Migration: Initial Schema for Raaji Ladies Fashion
-- Setup tables for website content and customer enquiries with Row Level Security (RLS)

-- 1. Create categories table
CREATE TABLE IF NOT EXISTS public.categories (
    id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
    name text NOT NULL,
    slug text NOT NULL UNIQUE,
    description text,
    image_url text,
    display_order integer DEFAULT 0,
    is_active boolean DEFAULT true,
    created_at timestamp with time zone DEFAULT timezone('utc'::text, now()) NOT NULL,
    updated_at timestamp with time zone DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 2. Create services table
CREATE TABLE IF NOT EXISTS public.services (
    id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
    name text NOT NULL,
    description text,
    image_url text,
    display_order integer DEFAULT 0,
    is_active boolean DEFAULT true,
    created_at timestamp with time zone DEFAULT timezone('utc'::text, now()) NOT NULL,
    updated_at timestamp with time zone DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 3. Create prices table
CREATE TABLE IF NOT EXISTS public.prices (
    id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
    service_id uuid REFERENCES public.services(id) ON DELETE SET NULL,
    category_id uuid REFERENCES public.categories(id) ON DELETE SET NULL,
    name text NOT NULL,
    price_text text NOT NULL,
    description text,
    display_order integer DEFAULT 0,
    is_active boolean DEFAULT true,
    created_at timestamp with time zone DEFAULT timezone('utc'::text, now()) NOT NULL,
    updated_at timestamp with time zone DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 4. Create gallery_items table
CREATE TABLE IF NOT EXISTS public.gallery_items (
    id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
    title text,
    description text,
    image_url text NOT NULL,
    category_id uuid REFERENCES public.categories(id) ON DELETE SET NULL,
    display_order integer DEFAULT 0,
    is_active boolean DEFAULT true,
    created_at timestamp with time zone DEFAULT timezone('utc'::text, now()) NOT NULL,
    updated_at timestamp with time zone DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 5. Create faqs table
CREATE TABLE IF NOT EXISTS public.faqs (
    id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
    question text NOT NULL,
    answer text NOT NULL,
    display_order integer DEFAULT 0,
    is_active boolean DEFAULT true,
    created_at timestamp with time zone DEFAULT timezone('utc'::text, now()) NOT NULL,
    updated_at timestamp with time zone DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 6. Create enquiries table
CREATE TABLE IF NOT EXISTS public.enquiries (
    id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
    name text NOT NULL,
    mobile text NOT NULL,
    description text NOT NULL,
    status text DEFAULT 'new'::text NOT NULL CHECK (status IN ('new', 'contacted', 'completed')),
    created_at timestamp with time zone DEFAULT timezone('utc'::text, now()) NOT NULL,
    updated_at timestamp with time zone DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- ENABLE ROW LEVEL SECURITY
ALTER TABLE public.categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.services ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.prices ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.gallery_items ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.faqs ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.enquiries ENABLE ROW LEVEL SECURITY;


-- SET UP POLICIES
-- For public content (categories, services, prices, gallery_items, faqs):
-- Public can SELECT if is_active is true.
-- Authenticated users (admin) have ALL access.

-- Categories policies
CREATE POLICY "Public can view active categories" ON public.categories
    FOR SELECT USING (is_active = true);
CREATE POLICY "Admin has full access to categories" ON public.categories
    FOR ALL TO authenticated USING (true) WITH CHECK (true);

-- Services policies
CREATE POLICY "Public can view active services" ON public.services
    FOR SELECT USING (is_active = true);
CREATE POLICY "Admin has full access to services" ON public.services
    FOR ALL TO authenticated USING (true) WITH CHECK (true);

-- Prices policies
CREATE POLICY "Public can view active prices" ON public.prices
    FOR SELECT USING (is_active = true);
CREATE POLICY "Admin has full access to prices" ON public.prices
    FOR ALL TO authenticated USING (true) WITH CHECK (true);

-- Gallery items policies
CREATE POLICY "Public can view active gallery items" ON public.gallery_items
    FOR SELECT USING (is_active = true);
CREATE POLICY "Admin has full access to gallery items" ON public.gallery_items
    FOR ALL TO authenticated USING (true) WITH CHECK (true);

-- FAQs policies
CREATE POLICY "Public can view active faqs" ON public.faqs
    FOR SELECT USING (is_active = true);
CREATE POLICY "Admin has full access to faqs" ON public.faqs
    FOR ALL TO authenticated USING (true) WITH CHECK (true);

-- Enquiries policies
-- Public can only INSERT. Public cannot SELECT, UPDATE, or DELETE.
-- Admin has ALL access.
CREATE POLICY "Public can insert enquiries" ON public.enquiries
    FOR INSERT WITH CHECK (true);
CREATE POLICY "Admin has full access to enquiries" ON public.enquiries
    FOR ALL TO authenticated USING (true) WITH CHECK (true);


-- 7. Storage Setup for 'website-images' bucket
INSERT INTO storage.buckets (id, name, public) VALUES ('website-images', 'website-images', true) ON CONFLICT (id) DO NOTHING;

-- Storage Policies
-- Public can read images
CREATE POLICY "Public can view website images" ON storage.objects
    FOR SELECT USING (bucket_id = 'website-images');

-- Admin can manage images
CREATE POLICY "Admin has full access to website images" ON storage.objects
    FOR ALL TO authenticated USING (bucket_id = 'website-images') WITH CHECK (bucket_id = 'website-images');

-- 8. Functions & Triggers
-- Auto-update updated_at column function
CREATE OR REPLACE FUNCTION public.handle_updated_at()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = timezone('utc'::text, now());
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Apply triggers
CREATE TRIGGER categories_updated_at BEFORE UPDATE ON public.categories FOR EACH ROW EXECUTE FUNCTION handle_updated_at();
CREATE TRIGGER services_updated_at BEFORE UPDATE ON public.services FOR EACH ROW EXECUTE FUNCTION handle_updated_at();
CREATE TRIGGER prices_updated_at BEFORE UPDATE ON public.prices FOR EACH ROW EXECUTE FUNCTION handle_updated_at();
CREATE TRIGGER gallery_items_updated_at BEFORE UPDATE ON public.gallery_items FOR EACH ROW EXECUTE FUNCTION handle_updated_at();
CREATE TRIGGER faqs_updated_at BEFORE UPDATE ON public.faqs FOR EACH ROW EXECUTE FUNCTION handle_updated_at();
CREATE TRIGGER enquiries_updated_at BEFORE UPDATE ON public.enquiries FOR EACH ROW EXECUTE FUNCTION handle_updated_at();
