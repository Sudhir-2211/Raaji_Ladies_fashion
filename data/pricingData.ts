export type GalleryCategory =
  | "bridal"
  | "aari-work"
  | "embroidery"
  | "scallop"
  | "designer-blouses";

export interface PricingCategoryItem {
  id: GalleryCategory;
  categoryNum: string;
  title: string;
  subtitle: string;
  description: string;
  designConsiderations: string[];
  fabricSuitability: string;
  startingPrice?: number;
  pricingStatus: string;
  galleryDeepLink: string;
  galleryButtonText: string;
}

export const pricingCategories: PricingCategoryItem[] = [
  {
    id: "bridal",
    categoryNum: "CATEGORY 01",
    title: "Bridal Wear & Lehengas",
    subtitle: "Bespoke bridal couture, zardozi work, and grand reception ensembles",
    description:
      "Grand bridal blouse tailoring and lehenga creation crafted from customer-supplied silk, velvet, and embellished fabrics.",
    designConsiderations: [
      "Custom paper-pattern drafting and anatomical fit contouring",
      "Heavy zardozi, Maggam work alignment, and stone detailing placement",
      "Can-can mesh volume structuring for lehengas and wedding gowns",
      "Double lining with pure cotton voile for maximum comfort during ceremonies",
    ],
    fabricSuitability:
      "Suitable for pure silk, velvet, Banarasi brocade, organza, and embellished textiles",
    pricingStatus: "Pricing confirmed upon in-shop consultation.",
    galleryDeepLink: "/gallery?category=bridal",
    galleryButtonText: "Explore Bridal Samples in Gallery →",
  },
  {
    id: "aari-work",
    categoryNum: "CATEGORY 02",
    title: "Aari Work Blouses",
    subtitle: "Artisanal hand-embroidery, stone work, and intricate necklines",
    description:
      "Hand-crafted Aari needlework custom tailored to individual necklines, sleeve borders, and back cutouts.",
    designConsiderations: [
      "Intricate thread needlework, beadwork, and zardozi detailing",
      "Precision motif symmetry aligned to your saree border",
      "Padded cup placement and reinforced hook plackets",
      "Clean edge piping and cotton inner lining finish",
    ],
    fabricSuitability:
      "Suitable for raw silk, Kanchipuram silk, tussar silk, and cotton silk",
    pricingStatus: "Pricing confirmed upon in-shop consultation.",
    galleryDeepLink: "/gallery?category=aari-work",
    galleryButtonText: "Explore Aari Work Samples in Gallery →",
  },
  {
    id: "embroidery",
    categoryNum: "CATEGORY 03",
    title: "Custom Embroidery Designs",
    subtitle: "Machine & computer embroidery for festive and daily ethnic wear",
    description:
      "High-precision computerized thread embroidery and custom pattern stitching for blouses, tops, and festive wear.",
    designConsiderations: [
      "Diverse floral, peacock, and geometric embroidery patterns",
      "Vibrant multi-thread color combinations customized to your fabric",
      "Smooth backing interlining to prevent thread friction",
      "Perfect sleeve hem and neck cut alignment",
    ],
    fabricSuitability:
      "Suitable for silk, chanderi, georgette, crepe, and cotton blends",
    pricingStatus: "Pricing confirmed upon in-shop consultation.",
    galleryDeepLink: "/gallery?category=embroidery",
    galleryButtonText: "Explore Embroidery Samples in Gallery →",
  },
  {
    id: "scallop",
    categoryNum: "CATEGORY 04",
    title: "Scallop & Cutwork Blouses",
    subtitle: "Designer scalloped necklines, sleeve cutwork, and border edging",
    description:
      "Specialized scallop stitching and decorative cutwork tailoring for elegant, modern, and festive saree blouses.",
    designConsiderations: [
      "Hand-guided cutwork along sleeve borders and back cutouts",
      "Laser-clean scalloped necklines reinforced with interlining",
      "Custom deep neck shapes and back dori tassels",
      "Breathable pure cotton inner lining",
    ],
    fabricSuitability:
      "Suitable for organza, silk, net, georgette, and linen",
    pricingStatus: "Pricing confirmed upon in-shop consultation.",
    galleryDeepLink: "/gallery?category=scallop",
    galleryButtonText: "Explore Cutwork Samples in Gallery →",
  },
  {
    id: "designer-blouses",
    categoryNum: "CATEGORY 05",
    title: "Designer Tops & Blouses",
    subtitle: "Contemporary tops, collar necklines, and modern party wear",
    description:
      "Modern blouse cuts, collar neck patterns, peplum silhouettes, and versatile ethnic tops tailored to your exact measurements.",
    designConsiderations: [
      "Princess cut, boat neck, collar neck, and potli button detailing",
      "Concealed side zipper or front hook placket construction",
      "Versatile pairing options for sarees, skirts, and dhoti pants",
      "Itemized tailoring estimates and guaranteed fit",
    ],
    fabricSuitability:
      "Suitable for cotton, linen, silk, brocade, and printed textiles",
    pricingStatus: "Pricing confirmed upon in-shop consultation.",
    galleryDeepLink: "/gallery?category=designer-blouses",
    galleryButtonText: "Explore Designer Tops in Gallery →",
  },
];

export interface PricingFactor {
  title: string;
  description: string;
}

export const pricingFactors: PricingFactor[] = [
  {
    title: "Silhouette & Cut Complexity",
    description:
      "Basic straight cuts, multi-panel flares, and specialized pattern contours each require distinct cutting layout and drafting attention.",
  },
  {
    title: "Neckline & Design Details",
    description:
      "Classic necklines and customized front or back design styling influence assembly time and drafting precision.",
  },
  {
    title: "Lining Requirements",
    description:
      "Garments requiring inner lining involve additional pattern cutting, alignment, and internal finishing steps.",
  },
  {
    title: "Fabric Characteristics",
    description:
      "Textiles vary in weight, weave, slippage, and delicacy—delicate sheers, pure silks, and heavy brocades require dedicated handling.",
  },
  {
    title: "Embellishment & Border Detailing",
    description:
      "Placement of customer-supplied borders, laces, contrast patches, or other design materials where applicable adds finishing steps.",
  },
  {
    title: "Overall Construction Requirements",
    description:
      "Specific skirt flare sweep, waistband drafting, closure specifications, and overall garment dimensions determine construction work.",
  },
];

export interface PreparationStep {
  stepNum: string;
  title: string;
  description: string;
}

export const preparationSteps: PreparationStep[] = [
  {
    stepNum: "01",
    title: "Bring Adequate Fabric Meterage",
    description:
      "Ensure sufficient fabric length and width for your desired silhouette, sleeve style, and design requirements.",
  },
  {
    stepNum: "02",
    title: "Bring Reference Garments",
    description:
      "Bring reference blouses or sample garments if you want to discuss a particular design, neckline shape, or fit preference.",
  },
  {
    stepNum: "03",
    title: "Bring or Discuss Lining Material",
    description:
      "Bring lining material if your garment requires lining, or discuss the lining requirement directly in-store with our team.",
  },
  {
    stepNum: "04",
    title: "Bring Design Detailing Materials",
    description:
      "Bring borders, laces, contrast patches, or other design materials if they are part of your intended garment styling.",
  },
];
