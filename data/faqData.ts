export type FAQCategory =
  | "fabric"
  | "services"
  | "design"
  | "pricing"
  | "process"
  | "visit";

export interface FAQCategoryOption {
  id: "all" | FAQCategory;
  label: string;
}

export const faqCategories: FAQCategoryOption[] = [
  { id: "all", label: "All Questions" },
  { id: "fabric", label: "Fabric & Materials" },
  { id: "services", label: "Tailoring Services" },
  { id: "design", label: "Design & References" },
  { id: "pricing", label: "Pricing" },
  { id: "process", label: "Stitching Process" },
  { id: "visit", label: "Visiting the Shop" },
];

export interface FAQItem {
  id: string;
  category: FAQCategory;
  question: string;
  answer: string;
}

export const faqItems: FAQItem[] = [
  // 1. Fabric & Materials
  {
    id: "fabric-bring-own",
    category: "fabric",
    question: "Can I bring my own fabric?",
    answer:
      "Yes. Customers can bring their own fabric, and our tailoring services are designed around customer-supplied materials.",
  },
  {
    id: "fabric-meterage",
    category: "fabric",
    question: "How much fabric should I bring?",
    answer:
      "Fabric requirements depend on the garment design, sleeve style, and size. General meterage guidelines are available in our Fabric Meterage Guide on the Services page. Fabric requirements can be discussed when you bring your material to the shop.",
  },
  {
    id: "fabric-lining",
    category: "fabric",
    question: "Can I bring lining material?",
    answer:
      "Yes. You may bring your own lining material if your garment requires lining, or you can discuss lining requirements in-store.",
  },
  {
    id: "fabric-borders-laces",
    category: "fabric",
    question: "Can I bring borders, laces, contrast patches, or other design materials?",
    answer:
      "Yes. Customers can bring borders, laces, contrast patches, or other design materials if they are part of the intended garment design.",
  },
  {
    id: "fabric-unsure-quantity",
    category: "fabric",
    question: "What happens if I am unsure whether I have enough fabric?",
    answer:
      "Bring your unstitched fabric to the shop so the fabric quantity can be reviewed against your chosen design requirements.",
  },

  // 2. Tailoring Services
  {
    id: "services-garment-types",
    category: "services",
    question: "What types of garments do you stitch?",
    answer:
      "We offer tailoring services across four categories: Blouse Tailoring, Salwar, Anarkali & Kurti Tailoring, Lehengas & Festive Wear, and Saree Care & Finishing.",
  },
  {
    id: "services-blouses",
    category: "services",
    question: "Do you stitch blouses?",
    answer:
      "Yes. We offer blouse tailoring based on individual measurements, design requirements, neckline preferences, and sleeve requirements.",
  },
  {
    id: "services-salwar-anarkali",
    category: "services",
    question: "Do you stitch salwar, Anarkali and kurti garments?",
    answer:
      "Yes. We offer tailoring for salwar, Anarkali and kurti garments using customer-supplied fabrics.",
  },
  {
    id: "services-lehengas",
    category: "services",
    question: "Do you stitch lehengas and festive wear?",
    answer:
      "Yes. We offer tailoring for lehengas and festive wear using customer-supplied fabrics and design references.",
  },
  {
    id: "services-saree-care",
    category: "services",
    question: "What does Saree Care & Finishing cover?",
    answer:
      "Saree Care & Finishing covers preparation and finishing services for sarees based on the requirements discussed in-store.",
  },

  // 3. Design & References
  {
    id: "design-photo-reference",
    category: "design",
    question: "Can I bring a reference photo?",
    answer:
      "Yes. Customers can bring saved photos or design references to discuss how the pattern can be adapted to their fabric and measurements.",
  },
  {
    id: "design-sample-garment",
    category: "design",
    question: "Can I bring an existing garment as a reference?",
    answer:
      "Yes. Bringing a favourite or well-fitting garment can help communicate the design or fit you would like to reference.",
  },
  {
    id: "design-gallery-reference",
    category: "design",
    question: "Can I show a design from the website Gallery?",
    answer:
      "Yes. You can reference sample patterns shown in the website Gallery when visiting the shop.",
  },
  {
    id: "design-identify-gallery",
    category: "design",
    question: "How should I identify a Gallery sample?",
    answer:
      "Each Gallery sample has a reference identifier, such as SAMPLE REF: B-101. You can save or note this reference when visiting the shop.",
  },

  // 4. Pricing
  {
    id: "pricing-determination",
    category: "pricing",
    question: "How is tailoring pricing determined?",
    answer:
      "Stitching charges are discussed based on the garment design, cut complexity, neckline and design details, lining requirements, fabric characteristics, detailing materials, and overall construction requirements.",
  },
  {
    id: "pricing-variation",
    category: "pricing",
    question: "Why can the final stitching charge vary?",
    answer:
      "Stitching charges can vary depending on the garment design, cut complexity, neckline and design details, lining requirements, fabric characteristics, detailing materials, and overall construction requirements.",
  },
  {
    id: "pricing-price-guide",
    category: "pricing",
    question: "Can I see the Price Guide?",
    answer:
      "Yes. The website Price Guide outlines tailoring specifications, design considerations, and craftsmanship factors for our tailoring categories.",
  },
  {
    id: "pricing-when-discussed",
    category: "pricing",
    question: "When is pricing discussed?",
    answer:
      "Stitching charges are discussed in-shop after reviewing your fabric, design, and construction requirements.",
  },

  // 5. Stitching Process
  {
    id: "process-after-bringing-fabric",
    category: "process",
    question: "What happens after I bring my fabric?",
    answer:
      "The tailoring journey follows five stages: Fabric Handover & Consult, Anatomical Measurement, Paper Pattern Drafting, Artisanal Stitching, and Final Finishing & Handover.",
  },
  {
    id: "process-five-stages",
    category: "process",
    question: "What is the five-stage dress-making journey?",
    answer:
      "It is the structured tailoring process covering fabric consultation, measurement, paper pattern drafting, stitching, and final finishing and handover.",
  },
  {
    id: "process-paper-drafting",
    category: "process",
    question: "What is paper pattern drafting?",
    answer:
      "Paper pattern drafting involves drafting an individual 2D paper pattern based on individual measurements before cutting the fabric. This includes standard 2-inch side seam allowance where applicable to the garment design.",
  },
  {
    id: "process-final-finishing",
    category: "process",
    question: "What happens during final finishing and handover?",
    answer:
      "After stitching, the garment goes through final finishing and a quality check before handover.",
  },

  // 6. Visiting the Shop
  {
    id: "visit-location",
    category: "visit",
    question: "Where can I bring my fabric for consultation?",
    answer:
      "You can bring your fabric to our shop in Korattur, Chennai for design review and consultation.",
  },
  {
    id: "visit-what-to-bring",
    category: "visit",
    question: "What should I bring when visiting?",
    answer:
      "Bring your unstitched fabric, any reference garment or photo, lining material where required, and borders, laces, contrast patches, or other design materials if they are part of your intended design.",
  },
  {
    id: "visit-how-to-prepare",
    category: "visit",
    question: "How can I prepare before visiting the shop?",
    answer:
      "Review the Fabric Meterage Guide, save any design references you like, and bring your fabric and any useful reference material when visiting the shop.",
  },
];
