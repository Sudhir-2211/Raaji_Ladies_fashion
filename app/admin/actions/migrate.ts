"use server";
import { createClient } from '@/utils/supabase/server';
import { tailoringCategories } from '@/data/homeData';
import { serviceCategories } from '@/data/servicesData';
import { pricingCategories } from '@/data/pricingData';
import { galleryItems } from '@/data/galleryData';
import { faqItems } from '@/data/faqData';
import { branchesData } from '@/data/branches';
import { siteConfig } from '@/data/siteConfig';

export async function migrateAllContent() {
  const supabase = await createClient();
  
  const report = {
    categoriesFound: 9,
    categoriesMigrated: 0,
    servicesFound: serviceCategories.length,
    servicesMigrated: 0,
    pricesFound: pricingCategories.length,
    pricesMigrated: 0,
    galleryFound: galleryItems.length,
    galleryMigrated: 0,
    faqsFound: faqItems.length,
    faqsMigrated: 0,
    branchesFound: 2,
    branchesMigrated: 0,
    errors: [] as string[]
  };

  try {
    // 1. Migrate Categories (all 9 categories)
    const allCategories = [
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

    for (const cat of allCategories) {
      const { error } = await supabase.from('categories').upsert({
        id: cat.id,
        name: cat.name,
        slug: cat.slug,
        description: cat.description,
        image_url: cat.image_url,
        display_order: cat.display_order,
        show_on_home: cat.show_on_home,
        home_position: cat.home_position,
        is_active: true
      }, { onConflict: 'slug' });
      
      if (error) report.errors.push(`Category ${cat.name}: ${error.message}`);
      else report.categoriesMigrated++;
    }

    // 2. Migrate Branches
    const branches = [
      {
        id: '99999999-9999-9999-9999-999999999991',
        name: 'Korattur (Bus Terminus)',
        phone: '9840577561',
        whatsapp: '9840577561',
        google_maps_url: 'https://share.google/j4mzEfa6xKWc6cEn8',
        address: 'Near Korattur Bus Terminus & Railway Station, Korattur, Chennai - 600080',
        display_order: 1,
        is_active: true
      },
      {
        id: '99999999-9999-9999-9999-999999999992',
        name: 'Korattur (Near Bv KG Block)',
        phone: '9677112878',
        whatsapp: '9677112878',
        google_maps_url: 'https://share.google/hlb26qSrDnSRx4HLl',
        address: 'Near Bv KG Block, Korattur, Chennai - 600080',
        display_order: 2,
        is_active: true
      }
    ];

    for (const b of branches) {
      const { error } = await supabase.from('branches').upsert(b, { onConflict: 'id' });
      if (error) report.errors.push(`Branch ${b.name}: ${error.message}`);
      else report.branchesMigrated++;
    }

    // 3. Migrate Services
    for (let i = 0; i < serviceCategories.length; i++) {
      const serv = serviceCategories[i];
      const id = '55555555-5555-5555-5555-' + (i + 1).toString(16).padStart(12, '0');
      const { error } = await supabase.from('services').upsert({
        id: id,
        name: serv.title,
        slug: serv.id,
        subtitle: serv.subtitle,
        description: serv.description,
        key_aspects: serv.keyAspects,
        gallery_link: serv.galleryLink,
        image_url: serv.imageUrl || null,
        display_order: i + 1,
        is_active: true
      }, { onConflict: 'id' });
      if (error) report.errors.push(`Service ${serv.title}: ${error.message}`);
      else report.servicesMigrated++;
    }

    // 4. Migrate Prices
    const pricingItems: Array<{
      id: string;
      category_id: string;
      service_id: string | null;
      name: string;
      price_text: string;
      description: string;
      specifications: string[];
      recommendations: string[];
      display_order: number;
      is_active: boolean;
    }> = [
      {
        id: '66666666-6666-6666-6666-000000000001',
        category_id: '11111111-1111-1111-1111-000000000009',
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
        display_order: 1,
        is_active: true
      },
      {
        id: '66666666-6666-6666-6666-000000000002',
        category_id: '11111111-1111-1111-1111-000000000006',
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
        display_order: 2,
        is_active: true
      },
      {
        id: '66666666-6666-6666-6666-000000000003',
        category_id: '11111111-1111-1111-1111-000000000007',
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
        display_order: 3,
        is_active: true
      },
      {
        id: '66666666-6666-6666-6666-000000000004',
        category_id: '11111111-1111-1111-1111-000000000008',
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
        display_order: 4,
        is_active: true
      }
    ];

    for (const price of pricingItems) {
      const { error } = await supabase.from('prices').upsert(price, { onConflict: 'id' });
      if (error) report.errors.push(`Price ${price.name}: ${error.message}`);
      else report.pricesMigrated++;
    }

    // 5. Migrate FAQs
    for (let i = 0; i < faqItems.length; i++) {
      const faq = faqItems[i];
      const id = '77777777-7777-7777-7777-' + i.toString(16).padStart(12, '0');
      const { error } = await supabase.from('faqs').upsert({
        id: id,
        category: faq.category,
        question: faq.question,
        answer: faq.answer,
        display_order: i + 1,
        is_active: true
      }, { onConflict: 'id' });
      if (error) report.errors.push(`FAQ ${i + 1}: ${error.message}`);
      else report.faqsMigrated++;
    }

    // 6. Migrate Gallery Items (in chunks of 50 for optimal performance)
    const catSlugToId: Record<string, string> = {
      'bridal': '11111111-1111-1111-1111-000000000001',
      'aari-work': '11111111-1111-1111-1111-000000000002',
      'embroidery': '11111111-1111-1111-1111-000000000003',
      'designer-blouses': '11111111-1111-1111-1111-000000000004',
      'scallop': '11111111-1111-1111-1111-000000000005'
    };

    const chunkSize = 50;
    for (let i = 0; i < galleryItems.length; i += chunkSize) {
      const chunk = galleryItems.slice(i, i + chunkSize);
      const rows = chunk.map((item, idx) => {
        const itemIdx = i + idx;
        const id = '88888888-8888-8888-8888-' + itemIdx.toString(16).padStart(12, '0');
        const catId = catSlugToId[item.category] || null;
        return {
          id: id,
          sample_code: item.sampleCode,
          title: item.title,
          description: item.description,
          image_url: item.imageUrl,
          fabric: item.fabric,
          occasion: item.occasion,
          category_id: catId,
          display_order: itemIdx + 1,
          is_active: true
        };
      });

      const { error } = await supabase.from('gallery_items').upsert(rows, { onConflict: 'id' });
      if (error) {
        report.errors.push(`Gallery batch [${i}..${i + chunk.length}]: ${error.message}`);
      } else {
        report.galleryMigrated += chunk.length;
      }
    }

    // 7. Migrate Site Content
    await supabase.from('site_content').upsert({
      id: 'site_config',
      title: 'Site Configuration',
      content: {
        name: siteConfig.name,
        since: "2005",
        tagline: siteConfig.tagline,
        subtitle: siteConfig.subtitle,
        announcement: siteConfig.announcement,
        announcement_active: true
      }
    }, { onConflict: 'id' });
    
    return { success: report.errors.length === 0, report };
  } catch (err: any) {
    report.errors.push(`General error: ${err.message}`);
    return { success: false, report };
  }
}
