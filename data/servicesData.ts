export interface ServiceCategory {
  id: "bridal" | "aari-work" | "embroidery" | "scallop" | "designer-blouses";
  categoryNum: string;
  title: string;
  subtitle: string;
  description: string;
  keyAspects: string[];
  galleryLink: string;
  galleryLinkText: string;
  imageUrl?: string;
}

export const serviceCategories: ServiceCategory[] = [
  {
    id: "bridal",
    categoryNum: "CATEGORY 01",
    title: "Bridal Wear & Lehengas",
    subtitle: "Bespoke bridal couture, zardozi work, and grand reception ensembles",
    description:
      "Grand bridal blouse tailoring and lehenga creation crafted from customer-supplied silk, velvet, and embellished fabrics.",
    keyAspects: [
      "Custom paper-pattern drafting and anatomical fit contouring",
      "Heavy zardozi, Maggam work alignment, and stone detailing placement",
      "Can-can mesh volume structuring for lehengas and wedding gowns",
      "Double lining with pure cotton voile for maximum comfort during ceremonies",
    ],
    galleryLink: "/gallery?category=bridal",
    galleryLinkText: "View Bridal Designs in Gallery",
    imageUrl: "/images/Bridal/IMG-20260925-WA0141.jpg",
  },
  {
    id: "aari-work",
    categoryNum: "CATEGORY 02",
    title: "Aari Work Blouses",
    subtitle: "Artisanal hand-embroidery, stone work, and intricate necklines",
    description:
      "Hand-crafted Aari needlework custom tailored to individual necklines, sleeve borders, and back cutouts.",
    keyAspects: [
      "Intricate thread needlework, beadwork, and zardozi detailing",
      "Precision motif symmetry aligned to your saree border",
      "Padded cup placement and reinforced hook plackets",
      "Clean edge piping and cotton inner lining finish",
    ],
    galleryLink: "/gallery?category=aari-work",
    galleryLinkText: "View Aari Work Designs in Gallery",
    imageUrl: "/images/aari work/IMG-20260925-WA0058.jpg",
  },
  {
    id: "embroidery",
    categoryNum: "CATEGORY 03",
    title: "Custom Embroidery Designs",
    subtitle: "Machine & computer embroidery for festive and daily ethnic wear",
    description:
      "High-precision computerized thread embroidery and custom pattern stitching for blouses, tops, and festive wear.",
    keyAspects: [
      "Diverse floral, peacock, and geometric embroidery patterns",
      "Vibrant multi-thread color combinations customized to your fabric",
      "Smooth backing interlining to prevent thread friction",
      "Perfect sleeve hem and neck cut alignment",
    ],
    galleryLink: "/gallery?category=embroidery",
    galleryLinkText: "View Embroidery Designs in Gallery",
    imageUrl: "/images/emdroiadry designs/92ab050b0fc672ae1a191eedc4999ab8.jpg",
  },
  {
    id: "scallop",
    categoryNum: "CATEGORY 04",
    title: "Scallop & Cutwork Blouses",
    subtitle: "Designer scalloped necklines, sleeve cutwork, and border edging",
    description:
      "Specialized scallop stitching and decorative cutwork tailoring for elegant, modern, and festive saree blouses.",
    keyAspects: [
      "Hand-guided cutwork along sleeve borders and back cutouts",
      "Laser-clean scalloped necklines reinforced with interlining",
      "Custom deep neck shapes and back dori tassels",
      "Breathable pure cotton inner lining",
    ],
    galleryLink: "/gallery?category=scallop",
    galleryLinkText: "View Cutwork Designs in Gallery",
    imageUrl: "/images/scalab/IMG-20260819-WA0014.jpg",
  },
  {
    id: "designer-blouses",
    categoryNum: "CATEGORY 05",
    title: "Designer Tops & Blouses",
    subtitle: "Contemporary tops, collar necklines, and modern party wear",
    description:
      "Modern blouse cuts, collar neck patterns, peplum silhouettes, and versatile ethnic tops tailored to your exact measurements.",
    keyAspects: [
      "Princess cut, boat neck, collar neck, and potli button detailing",
      "Concealed side zipper or front hook placket construction",
      "Versatile pairing options for sarees, skirts, and dhoti pants",
      "Itemized tailoring estimates and guaranteed fit",
    ],
    galleryLink: "/gallery?category=designer-blouses",
    galleryLinkText: "View Designer Tops in Gallery",
    imageUrl: "/images/categories/designer-blouse.jpg",
  },
];

export interface MeterageItem {
  garmentType: string;
  guidelineRange: string;
  notes: string;
}

export const meterageGuidelines: MeterageItem[] = [
  {
    garmentType: "Standard Blouse",
    guidelineRange: "~0.80 – 1.0 meter",
    notes: "Suitable for regular sleeve length with standard neck styling",
  },
  {
    garmentType: "Elbow / Designer Sleeve Blouse",
    guidelineRange: "~1.0 – 1.25 meters",
    notes: "Recommended for elbow-length sleeves or specialized neck cuts",
  },
  {
    garmentType: "Salwar Kameez Suit Set",
    guidelineRange: "~2.0 – 2.5 m (Top) • ~2.0 m (Bottom)",
    notes: "Standard 3-piece unstitched dress material requirements",
  },
  {
    garmentType: "Flared Anarkali / Gown",
    guidelineRange: "~3.5 – 5.5 meters",
    notes: "Required for multi-kali flare and full circular sweep",
  },
];
