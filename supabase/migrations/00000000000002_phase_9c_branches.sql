-- Migration: Phase 9C Branches and Enquiries Update

-- 1. Create branches table
CREATE TABLE IF NOT EXISTS public.branches (
    id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
    name text NOT NULL,
    phone text NOT NULL,
    whatsapp text,
    google_maps_url text,
    is_active boolean DEFAULT true,
    created_at timestamp with time zone DEFAULT timezone('utc'::text, now()) NOT NULL,
    updated_at timestamp with time zone DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- ENABLE ROW LEVEL SECURITY
ALTER TABLE public.branches ENABLE ROW LEVEL SECURITY;

-- Branches policies
CREATE POLICY "Public can view active branches" ON public.branches
    FOR SELECT USING (is_active = true);
CREATE POLICY "Admin has full access to branches" ON public.branches
    FOR ALL TO authenticated USING (true) WITH CHECK (true);

-- Trigger for updated_at
CREATE TRIGGER branches_updated_at BEFORE UPDATE ON public.branches FOR EACH ROW EXECUTE FUNCTION handle_updated_at();

-- 2. Update enquiries table
ALTER TABLE public.enquiries ADD COLUMN IF NOT EXISTS branch_id uuid REFERENCES public.branches(id) ON DELETE SET NULL;
ALTER TABLE public.enquiries ADD COLUMN IF NOT EXISTS branch_name text; -- Fallback if branch is deleted

-- 3. Seed Branches
INSERT INTO public.branches (id, name, phone, whatsapp, google_maps_url, is_active) 
VALUES 
('99999999-9999-9999-9999-999999999991', 'Korattur (Bus Terminus)', '9840577561', '9840577561', 'https://share.google/j4mzEfa6xKWc6cEn8', true),
('99999999-9999-9999-9999-999999999992', 'Korattur (Near Bv KG Block)', '9677112878', '9677112878', 'https://share.google/hlb26qSrDnSRx4HLl', true)
ON CONFLICT DO NOTHING;
