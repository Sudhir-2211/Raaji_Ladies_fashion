-- Migration: Phase 9C Schema Update and Seed Data

-- 1. Add Home Page columns to categories
ALTER TABLE public.categories ADD COLUMN IF NOT EXISTS show_on_home boolean DEFAULT false;
ALTER TABLE public.categories ADD COLUMN IF NOT EXISTS home_position integer;
ALTER TABLE public.categories DROP CONSTRAINT IF EXISTS check_home_position;
ALTER TABLE public.categories ADD CONSTRAINT check_home_position CHECK (home_position >= 1 AND home_position <= 4);

-- 2. Seed Categories
INSERT INTO public.categories (id, name, slug, description, image_url, display_order, show_on_home, home_position, is_active) 
VALUES ('11111111-1111-1111-1111-111111111111', 'Blouse Tailoring', 'blouses', 'Princess cut, Katori, padded bridal blouses, high neck, boat neck, and potli button detailing aligned to your saree border.', 'Custom Kanchipuram silk blouse tailoring with zardozi embroidery work', 0, true, 1, true) 
ON CONFLICT (slug) DO UPDATE SET show_on_home = EXCLUDED.show_on_home, home_position = EXCLUDED.home_position;
INSERT INTO public.categories (id, name, slug, description, image_url, display_order, show_on_home, home_position, is_active) 
VALUES ('22222222-2222-2222-2222-222222222222', 'Salwar & Kurti Suits', 'salwar-kurtis', 'Straight cut kurtas, flared Anarkalis, Pakistani suit cuts, and Patiala bottoms with breathable inner lining.', 'Tailored Chanderi silk kurti and cigarette pants set', 1, true, 2, true) 
ON CONFLICT (slug) DO UPDATE SET show_on_home = EXCLUDED.show_on_home, home_position = EXCLUDED.home_position;
INSERT INTO public.categories (id, name, slug, description, image_url, display_order, show_on_home, home_position, is_active) 
VALUES ('33333333-3333-3333-3333-333333333333', 'Lehengas & Festive Wear', 'lehengas-festive', 'Full flare circular skirts, can-can volume structuring, paneled lehengas, and reception evening gowns.', 'Bridal velvet lehenga with double can-can structuring', 2, true, 3, true) 
ON CONFLICT (slug) DO UPDATE SET show_on_home = EXCLUDED.show_on_home, home_position = EXCLUDED.home_position;
INSERT INTO public.categories (id, name, slug, description, image_url, display_order, show_on_home, home_position, is_active) 
VALUES ('44444444-4444-4444-4444-444444444444', 'Saree Care & Finishing', 'saree-care', 'Saree pre-pleating, box folding, fall attachment, and pico edging prep for ready-to-drape sarees.', 'Pre-pleated Pattu saree with box pleating finish', 3, true, 4, true) 
ON CONFLICT (slug) DO UPDATE SET show_on_home = EXCLUDED.show_on_home, home_position = EXCLUDED.home_position;

-- 3. Seed Services
INSERT INTO public.services (id, name, description, display_order, is_active)
VALUES ('55555555-5555-5555-5555-555555555550', 'Blouse Tailoring', 'Custom blouse tailoring crafted from patron-supplied materials, with individual paper-pattern drafting matched to customer measurements and fabric border placement.', 0, true)
ON CONFLICT (id) DO NOTHING;
INSERT INTO public.services (id, name, description, display_order, is_active)
VALUES ('55555555-5555-5555-5555-555555555551', 'Salwar, Anarkali & Kurti Tailoring', 'Custom tailoring for salwar kameez suit sets, flared Anarkalis, and everyday or office-wear kurtis crafted from your unstitched dress materials.', 1, true)
ON CONFLICT (id) DO NOTHING;
INSERT INTO public.services (id, name, description, display_order, is_active)
VALUES ('55555555-5555-5555-5555-555555555552', 'Lehengas & Festive Wear', 'Bespoke festive attire and traditional ensembles tailored from customer-provided silks, brocades, and festive textiles for weddings and family functions.', 2, true)
ON CONFLICT (id) DO NOTHING;
INSERT INTO public.services (id, name, description, display_order, is_active)
VALUES ('55555555-5555-5555-5555-555555555553', 'Saree Care & Finishing', 'Essential garment preparation and finishing services to preserve fabric drape and prepare sarees for immediate, effortless wearing.', 3, true)
ON CONFLICT (id) DO NOTHING;

-- 4. Seed FAQs
INSERT INTO public.faqs (id, question, answer, display_order, is_active)
VALUES (gen_random_uuid(), 'Can I bring my own fabric?', 'Yes. Customers can bring their own fabric, and our tailoring services are designed around customer-supplied materials.', 0, true);
INSERT INTO public.faqs (id, question, answer, display_order, is_active)
VALUES (gen_random_uuid(), 'How much fabric should I bring?', 'Fabric requirements depend on the garment design, sleeve style, and size. General meterage guidelines are available in our Fabric Meterage Guide on the Services page. Fabric requirements can be discussed when you bring your material to the shop.', 1, true);
INSERT INTO public.faqs (id, question, answer, display_order, is_active)
VALUES (gen_random_uuid(), 'Can I bring lining material?', 'Yes. You may bring your own lining material if your garment requires lining, or you can discuss lining requirements in-store.', 2, true);
INSERT INTO public.faqs (id, question, answer, display_order, is_active)
VALUES (gen_random_uuid(), 'Can I bring borders, laces, contrast patches, or other design materials?', 'Yes. Customers can bring borders, laces, contrast patches, or other design materials if they are part of the intended garment design.', 3, true);
INSERT INTO public.faqs (id, question, answer, display_order, is_active)
VALUES (gen_random_uuid(), 'What happens if I am unsure whether I have enough fabric?', 'Bring your unstitched fabric to the shop so the fabric quantity can be reviewed against your chosen design requirements.', 4, true);
INSERT INTO public.faqs (id, question, answer, display_order, is_active)
VALUES (gen_random_uuid(), 'What types of garments do you stitch?', 'We offer tailoring services across four categories: Blouse Tailoring, Salwar, Anarkali & Kurti Tailoring, Lehengas & Festive Wear, and Saree Care & Finishing.', 5, true);
INSERT INTO public.faqs (id, question, answer, display_order, is_active)
VALUES (gen_random_uuid(), 'Do you stitch blouses?', 'Yes. We offer blouse tailoring based on individual measurements, design requirements, neckline preferences, and sleeve requirements.', 6, true);
INSERT INTO public.faqs (id, question, answer, display_order, is_active)
VALUES (gen_random_uuid(), 'Do you stitch salwar, Anarkali and kurti garments?', 'Yes. We offer tailoring for salwar, Anarkali and kurti garments using customer-supplied fabrics.', 7, true);
INSERT INTO public.faqs (id, question, answer, display_order, is_active)
VALUES (gen_random_uuid(), 'Do you stitch lehengas and festive wear?', 'Yes. We offer tailoring for lehengas and festive wear using customer-supplied fabrics and design references.', 8, true);
INSERT INTO public.faqs (id, question, answer, display_order, is_active)
VALUES (gen_random_uuid(), 'What does Saree Care & Finishing cover?', 'Saree Care & Finishing covers preparation and finishing services for sarees based on the requirements discussed in-store.', 9, true);
INSERT INTO public.faqs (id, question, answer, display_order, is_active)
VALUES (gen_random_uuid(), 'Can I bring a reference photo?', 'Yes. Customers can bring saved photos or design references to discuss how the pattern can be adapted to their fabric and measurements.', 10, true);
INSERT INTO public.faqs (id, question, answer, display_order, is_active)
VALUES (gen_random_uuid(), 'Can I bring an existing garment as a reference?', 'Yes. Bringing a favourite or well-fitting garment can help communicate the design or fit you would like to reference.', 11, true);
INSERT INTO public.faqs (id, question, answer, display_order, is_active)
VALUES (gen_random_uuid(), 'Can I show a design from the website Gallery?', 'Yes. You can reference sample patterns shown in the website Gallery when visiting the shop.', 12, true);
INSERT INTO public.faqs (id, question, answer, display_order, is_active)
VALUES (gen_random_uuid(), 'How should I identify a Gallery sample?', 'Each Gallery sample has a reference identifier, such as SAMPLE REF: B-101. You can save or note this reference when visiting the shop.', 13, true);
INSERT INTO public.faqs (id, question, answer, display_order, is_active)
VALUES (gen_random_uuid(), 'How is tailoring pricing determined?', 'Stitching charges are discussed based on the garment design, cut complexity, neckline and design details, lining requirements, fabric characteristics, detailing materials, and overall construction requirements.', 14, true);
INSERT INTO public.faqs (id, question, answer, display_order, is_active)
VALUES (gen_random_uuid(), 'Why can the final stitching charge vary?', 'Stitching charges can vary depending on the garment design, cut complexity, neckline and design details, lining requirements, fabric characteristics, detailing materials, and overall construction requirements.', 15, true);
INSERT INTO public.faqs (id, question, answer, display_order, is_active)
VALUES (gen_random_uuid(), 'Can I see the Price Guide?', 'Yes. The website Price Guide outlines tailoring specifications, design considerations, and craftsmanship factors for our tailoring categories.', 16, true);
INSERT INTO public.faqs (id, question, answer, display_order, is_active)
VALUES (gen_random_uuid(), 'When is pricing discussed?', 'Stitching charges are discussed in-shop after reviewing your fabric, design, and construction requirements.', 17, true);
INSERT INTO public.faqs (id, question, answer, display_order, is_active)
VALUES (gen_random_uuid(), 'What happens after I bring my fabric?', 'The tailoring journey follows five stages: Fabric Handover & Consult, Anatomical Measurement, Paper Pattern Drafting, Artisanal Stitching, and Final Finishing & Handover.', 18, true);
INSERT INTO public.faqs (id, question, answer, display_order, is_active)
VALUES (gen_random_uuid(), 'What is the five-stage dress-making journey?', 'It is the structured tailoring process covering fabric consultation, measurement, paper pattern drafting, stitching, and final finishing and handover.', 19, true);
INSERT INTO public.faqs (id, question, answer, display_order, is_active)
VALUES (gen_random_uuid(), 'What is paper pattern drafting?', 'Paper pattern drafting involves drafting an individual 2D paper pattern based on individual measurements before cutting the fabric. This includes standard 2-inch side seam allowance where applicable to the garment design.', 20, true);
INSERT INTO public.faqs (id, question, answer, display_order, is_active)
VALUES (gen_random_uuid(), 'What happens during final finishing and handover?', 'After stitching, the garment goes through final finishing and a quality check before handover.', 21, true);
INSERT INTO public.faqs (id, question, answer, display_order, is_active)
VALUES (gen_random_uuid(), 'Where can I bring my fabric for consultation?', 'You can bring your fabric to our shop in Korattur, Chennai for design review and consultation.', 22, true);
INSERT INTO public.faqs (id, question, answer, display_order, is_active)
VALUES (gen_random_uuid(), 'What should I bring when visiting?', 'Bring your unstitched fabric, any reference garment or photo, lining material where required, and borders, laces, contrast patches, or other design materials if they are part of your intended design.', 23, true);
INSERT INTO public.faqs (id, question, answer, display_order, is_active)
VALUES (gen_random_uuid(), 'How can I prepare before visiting the shop?', 'Review the Fabric Meterage Guide, save any design references you like, and bring your fabric and any useful reference material when visiting the shop.', 24, true);

-- 6. Seed Gallery Items
INSERT INTO public.gallery_items (id, title, description, image_url, category_id, display_order, is_active)
VALUES (gen_random_uuid(), 'Gallery Sample — Princess Cut Blouse Pattern', 'Sample pattern layout showing princess cut bodice contour, deep pot-neck cutout styling, and reinforced hook placket construction.', 'Sample pattern reference for princess cut silk blouse', '11111111-1111-1111-1111-111111111111', 0, true);
INSERT INTO public.gallery_items (id, title, description, image_url, category_id, display_order, is_active)
VALUES (gen_random_uuid(), 'Gallery Sample — Sweetheart Neckline Blouse Pattern', 'Sample pattern layout demonstrating a deep sweetheart front neckline, elbow-length sleeves with contrast thread piping, and secure back tie dori.', 'Sample pattern reference for sweetheart neckline padded blouse', '11111111-1111-1111-1111-111111111111', 1, true);
INSERT INTO public.gallery_items (id, title, description, image_url, category_id, display_order, is_active)
VALUES (gen_random_uuid(), 'Gallery Sample — High-Neck Sheer Back Blouse Pattern', 'Sample pattern layout featuring high collar band, sheer organza back cutout framing, and side concealed zip closure.', 'Sample pattern reference for high-neck sheer back blouse', '11111111-1111-1111-1111-111111111111', 2, true);
INSERT INTO public.gallery_items (id, title, description, image_url, category_id, display_order, is_active)
VALUES (gen_random_uuid(), 'Gallery Sample — Peplum Style Blouse Pattern', 'Sample pattern layout illustrating flared peplum waist transition and boat neckline suitable for handloom cotton fabrics.', 'Sample pattern reference for cotton peplum style blouse', '11111111-1111-1111-1111-111111111111', 3, true);
INSERT INTO public.gallery_items (id, title, description, image_url, category_id, display_order, is_active)
VALUES (gen_random_uuid(), 'Gallery Sample — Front Slit Kurti & Trousers Pattern', 'Sample pattern layout displaying mandarin collar tunic with front center slit, concealed hip pockets, and straight trousers.', 'Sample pattern reference for front slit kurti and trousers set', '22222222-2222-2222-2222-222222222222', 4, true);
INSERT INTO public.gallery_items (id, title, description, image_url, category_id, display_order, is_active)
VALUES (gen_random_uuid(), 'Gallery Sample — Classic Pleated Patiala Suit Pattern', 'Sample pattern layout showing forward-facing symmetrical pleating for drape volume, paired with a fitted short kameez.', 'Sample pattern reference for classic pleated Patiala suit', '22222222-2222-2222-2222-222222222222', 5, true);
INSERT INTO public.gallery_items (id, title, description, image_url, category_id, display_order, is_active)
VALUES (gen_random_uuid(), 'Gallery Sample — Flared Kali Anarkali Gown Pattern', 'Sample pattern layout demonstrating multi-kali flare drafting to eliminate hemline dips, with fitted bodice and dual-layer lining.', 'Sample pattern reference for multi-kali flared Anarkali gown', '22222222-2222-2222-2222-222222222222', 6, true);
INSERT INTO public.gallery_items (id, title, description, image_url, category_id, display_order, is_active)
VALUES (gen_random_uuid(), 'Gallery Sample — Volume-Structured Lehenga Pattern', 'Sample pattern layout demonstrating waistband weight distribution, integrated can-can net volume, and paneled flare styling.', 'Sample pattern reference for volume-structured lehenga', '33333333-3333-3333-3333-333333333333', 7, true);
INSERT INTO public.gallery_items (id, title, description, image_url, category_id, display_order, is_active)
VALUES (gen_random_uuid(), 'Gallery Sample — Traditional Half-Saree Set Pattern', 'Sample pattern layout for South Indian pattu pavadai and voni tailoring with box pleats, border-aligned lined blouse, and pico-edged dupatta.', 'Sample pattern reference for traditional half-saree set', '33333333-3333-3333-3333-333333333333', 8, true);
INSERT INTO public.gallery_items (id, title, description, image_url, category_id, display_order, is_active)
VALUES (gen_random_uuid(), 'Gallery Sample — Pre-Pleated Saree Finishing Prep', 'Sample demonstration of permanent waist pleat stitching and safe steam-pressing for ready-to-drape ease while preserving fabric fibers.', 'Sample demonstration of pre-pleated saree folding', '44444444-4444-4444-4444-444444444444', 9, true);
INSERT INTO public.gallery_items (id, title, description, image_url, category_id, display_order, is_active)
VALUES (gen_random_uuid(), 'Gallery Sample — Hem Fall Attachment & Pico Edging', 'Sample demonstration of pre-shrunk pure cotton bottom fall hand-stitched along the hem, paired with micro-dense zig-zag pico edging on the pallu.', 'Sample demonstration of pure cotton fall attachment and pico edging', '44444444-4444-4444-4444-444444444444', 10, true);
