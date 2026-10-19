export interface WhyChooseItem {
  id: string;
  iconName: string;
  title: string;
  description: string;
  tag: string;
}

export interface JourneyStage {
  step: string;
  stageName: string;
  title: string;
  description: string;
  iconName: string;
}

export interface CategoryItem {
  id: string;
  categoryNum: string;
  title: string;
  label: string;
  description: string;
  linkText: string;
  href: string;
  imagePlaceholderAlt: string;
  imageUrl?: string;
}

export const whyChooseCards: WhyChooseItem[] = [
  {
    id: "master-fit",
    iconName: "Ruler",
    title: "Master Fit & Precision Cut",
    description:
      "Every seam contoured to your posture and measurements with rigorous paper-pattern checks and clean internal seam allowances.",
    tag: "PRECISION CUT",
  },
  {
    id: "byo-fabric",
    iconName: "Scissors",
    title: "Bring Your Own Fabric",
    description:
      "Complete freedom to supply your sarees, silk bits, or unstitched suit sets with honest advice on lining compatibility and drape.",
    tag: "ALL FABRICS WELCOMED",
  },
  {
    id: "craftsmanship",
    iconName: "Sparkles",
    title: "Tailoring Craftsmanship",
    description:
      "Dedicated attention across every seam, neck cut, border alignment, and lining finish for everyday and festive garments.",
    tag: "ARTISANAL QUALITY",
  },
  {
    id: "transparent-pricing",
    iconName: "Tag",
    title: "Transparent, Honest Pricing",
    description:
      "Fair, itemized stitching rates based on chosen neck cuts, sleeve styles, padding, and lining fabric.",
    tag: "ITEMIZED ESTIMATES",
  },
];

export const dressMakingStages: JourneyStage[] = [
  {
    step: "01",
    stageName: "Stage 1",
    title: "Material Handover & Consult",
    description:
      "Bring your own fabric. We inspect weave grain, discuss necklines, sleeve depths, and lining quality.",
    iconName: "Package",
  },
  {
    step: "02",
    stageName: "Stage 2",
    title: "Precision Measurement & Design",
    description:
      "Comprehensive anatomical measurements or exact replication of your favorite reference blouse.",
    iconName: "FileText",
  },
  {
    step: "03",
    stageName: "Stage 3",
    title: "Master Pattern Drafting",
    description:
      "Individually hand-drafted paper patterns maximizing your fabric's borders, motifs, and drape symmetry.",
    iconName: "Compass",
  },
  {
    step: "04",
    stageName: "Stage 4",
    title: "Artisanal Stitching",
    description:
      "Double interlocked seam reinforcement, neck piping, hand-hemmed finish, and sturdy hook closures.",
    iconName: "Scissors",
  },
  {
    step: "05",
    stageName: "Stage 5",
    title: "Final Finishing & Handover",
    description:
      "Final pressing and quality check before the completed garment is handed over.",
    iconName: "CheckCircle2",
  },
];

export const tailoringCategories: CategoryItem[] = [
  {
    id: "bridal",
    categoryNum: "CATEGORY 01",
    title: "Bridal Wear & Lehengas",
    label: "BRIDAL COUTURE",
    description:
      "Grand bridal blouses, heavy zardozi, reception lehengas, and bespoke bridal wedding ensembles.",
    linkText: "View Bridal Gallery",
    href: "/gallery?category=bridal",
    imageUrl: "/images/Bridal/IMG-20260925-WA0141.jpg",
    imagePlaceholderAlt: "Grand bridal couture blouse and lehenga tailoring",
  },
  {
    id: "aari-work",
    categoryNum: "CATEGORY 02",
    title: "Aari Work Blouses",
    label: "HAND EMBROIDERY",
    description:
      "Intricate hand-crafted Aari embroidery, stone embellishments, zardozi motifs, and designer necklines.",
    linkText: "View Aari Work Gallery",
    href: "/gallery?category=aari-work",
    imageUrl: "/images/aari work/IMG-20260925-WA0058.jpg",
    imagePlaceholderAlt: "Hand-crafted Aari work designer blouse tailoring",
  },
  {
    id: "embroidery",
    categoryNum: "CATEGORY 03",
    title: "Custom Embroidery Designs",
    label: "MACHINE & HAND EMBROIDERY",
    description:
      "Precision computer and machine embroidery, delicate threadwork patterns, floral motifs, and sleeve borders.",
    linkText: "View Embroidery Gallery",
    href: "/gallery?category=embroidery",
    imageUrl: "/images/emdroiadry designs/92ab050b0fc672ae1a191eedc4999ab8.jpg",
    imagePlaceholderAlt: "Custom machine embroidery blouse pattern tailoring",
  },
  {
    id: "designer-blouses",
    categoryNum: "CATEGORY 04",
    title: "Designer Tops & Blouses",
    label: "CONTEMPORARY PATTERNS",
    description:
      "Contemporary top blouses, princess cut, collar necklines, potli button details, and modern ethnic party tops.",
    linkText: "View Designer Tops Gallery",
    href: "/gallery?category=designer-blouses",
    imageUrl: "/images/categories/designer-blouse.jpg",
    imagePlaceholderAlt: "Close-up of a beautifully tailored designer blouse with elegant fabric details",
  },
];

