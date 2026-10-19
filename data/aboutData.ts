export interface AboutHighlight {
  num: string;
  metric: string;
  label: string;
}

export interface TailoringFocusItem {
  num: string;
  title: string;
  description: string;
}

export interface JourneyStageItem {
  num: string;
  title: string;
  description: string;
}

export interface GarmentCategoryItem {
  num: string;
  title: string;
  description: string;
  href: string;
}

export interface ProcessVisualStep {
  stepNum: string;
  name: string;
  description: string;
}

export interface ProprietorProfile {
  name: string;
  role: string;
  description?: string;
  initials: string;
  photoUrl?: string;
}

export interface DeveloperAttribution {
  eyebrow: string;
  name: string;
  role: string;
  description: string;
  initials: string;
  photoUrl?: string;
  linkedin?: string;
  instagram?: string;
}

export interface TailoringValueItem {
  num: string;
  title: string;
  description: string;
}

export const aboutHighlights: AboutHighlight[] = [
  { num: "01", metric: "SINCE 2005", label: "Established in Korattur, Chennai" },
  { num: "02", metric: "10,000+", label: "Happy Customers" },
  { num: "03", metric: "OUR PEOPLE", label: "Experienced Proprietors" },
  { num: "04", metric: "OUR CRAFT", label: "Tailoring With Care" },
];

export const tailoringFocusList: TailoringFocusItem[] = [
  {
    num: "01",
    title: "Customer-Supplied Fabrics",
    description:
      "Customers bring their own fabric or unstitched material. We provide tailoring services based on the chosen fabric.",
  },
  {
    num: "02",
    title: "Individual Measurements",
    description:
      "Garments are developed around individual measurements and design requirements.",
  },
  {
    num: "03",
    title: "Paper Pattern Drafting",
    description:
      "A 2D paper pattern is prepared based on individual measurements before fabric cutting. Standard 2-inch side seam allowance where applicable to the garment design.",
  },
  {
    num: "04",
    title: "Final Finishing",
    description:
      "After stitching, the garment goes through final finishing and a quality check before handover.",
  },
];

export const journeyStagesList: JourneyStageItem[] = [
  {
    num: "01",
    title: "Fabric Handover & Consult",
    description: "Discussion of the fabric and design requirements.",
  },
  {
    num: "02",
    title: "Anatomical Measurement",
    description: "Individual measurements are taken based on the garment requirements.",
  },
  {
    num: "03",
    title: "Paper Pattern Drafting",
    description: "An individual 2D paper pattern is drafted based on the measurements.",
  },
  {
    num: "04",
    title: "Artisanal Stitching",
    description: "The garment is constructed according to the approved design requirements.",
  },
  {
    num: "05",
    title: "Final Finishing & Handover",
    description: "Final finishing and a quality check are completed before handover.",
  },
];

export const garmentCategoriesList: GarmentCategoryItem[] = [
  {
    num: "01",
    title: "Blouse Tailoring",
    description:
      "Tailoring services for blouses based on individual measurements and design requirements.",
    href: "/gallery?category=blouses",
  },
  {
    num: "02",
    title: "Salwar, Anarkali & Kurti Tailoring",
    description:
      "Tailoring services for salwar, Anarkali and kurti garments using customer-supplied fabrics.",
    href: "/gallery?category=salwar-kurtis",
  },
  {
    num: "03",
    title: "Lehengas & Festive Wear",
    description:
      "Tailoring services for lehengas and festive wear using customer-supplied fabrics and design references.",
    href: "/gallery?category=lehengas-festive",
  },
  {
    num: "04",
    title: "Saree Care & Finishing",
    description:
      "Preparation and finishing services for sarees based on requirements discussed in-store.",
    href: "/gallery?category=saree-care",
  },
];

export const processVisualSteps: ProcessVisualStep[] = [
  {
    stepNum: "01",
    name: "Customer Fabric",
    description: "Customer-supplied fabric brought to the shop.",
  },
  {
    stepNum: "02",
    name: "Measurement",
    description: "Individual measurements based on garment requirements.",
  },
  {
    stepNum: "03",
    name: "Paper Pattern",
    description: "Individual 2D paper pattern drafting.",
  },
  {
    stepNum: "04",
    name: "Stitching",
    description: "Garment construction based on the design requirements.",
  },
  {
    stepNum: "05",
    name: "Final Finishing",
    description: "Final finishing and quality check before handover.",
  },
];

export const proprietorsList: ProprietorProfile[] = [
  {
    name: "R. Jayaprakash",
    role: "Founder / Proprietor",
    initials: "RJ",
    photoUrl: "",
  },
  {
    name: "J. Muthulakshmi",
    role: "Proprietor",
    initials: "JM",
    photoUrl: "",
  },
];

export const developerCredit: DeveloperAttribution = {
  eyebrow: "WEBSITE DEVELOPMENT",
  name: "Sudhir Kumar J.",
  role: "Full-Stack Web Developer & Data Analyst",
  description:
    "Designed and developed the Raaji Ladies Fashion website with a focus on modern design, performance, and user experience.",
  initials: "SK",
  photoUrl: "/images/team/sudhir-kumar.jpg",
  linkedin: "#",
  instagram: "#",
};

export const valuesList: TailoringValueItem[] = [
  {
    num: "01",
    title: "Customer-Supplied Fabric",
    description: "Tailoring services based on fabrics brought by customers.",
  },
  {
    num: "02",
    title: "Individual Design Requirements",
    description: "Tailoring based on individual design preferences and measurements.",
  },
  {
    num: "03",
    title: "Structured Pattern Process",
    description: "Individual paper pattern drafting before fabric cutting.",
  },
  {
    num: "04",
    title: "Careful Tailoring Consultation",
    description: "Discussion of fabric, design and tailoring requirements in-store.",
  },
];
