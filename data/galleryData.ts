export type GalleryCategory = "bridal" | "aari-work" | "embroidery" | "scallop" | "designer-blouses";

export interface GalleryItem {
  id: string;
  sampleCode: string;
  title: string;
  category: GalleryCategory;
  categoryLabel: string;
  fabric: "Silk" | "Cotton" | "Georgette" | "Chanderi" | "Organza" | "Velvet" | "Silk Blend";
  fabricBadge: string;
  occasion: "Bridal" | "Festive" | "Daily" | "Contemporary";
  description: string;
  featureTag: string;
  imageUrl: string;
  imagePlaceholderAlt: string;
  structuralHighlights: string[];
}

export const galleryItems: GalleryItem[] = [
  {
    "id": "bridal-1",
    "sampleCode": "BR-101",
    "title": "Bridal Wear & Lehengas Sample #1",
    "category": "bridal",
    "categoryLabel": "Bridal Wear & Lehengas",
    "fabric": "Silk",
    "fabricBadge": "BRIDAL SILK",
    "occasion": "Bridal",
    "description": "Hand-crafted bridal wear & lehengas showcasing signature necklines, precision fit, and bespoke finish by Raaji Ladies Fashion.",
    "featureTag": "Bridal Wear & Lehengas",
    "imageUrl": "/images/Bridal/IMG-20210609-WA0006.jpg",
    "imagePlaceholderAlt": "Bridal Wear & Lehengas sample 1",
    "structuralHighlights": [
      "Custom paper pattern drafted to individual measurements",
      "Pure cotton voile inner lining for breathable comfort",
      "Double interlocked side seam assembly with 2-inch margins",
      "Hand-finished hooks, piping, and neck contouring"
    ]
  },
  {
    "id": "bridal-2",
    "sampleCode": "BR-102",
    "title": "Bridal Wear & Lehengas Sample #2",
    "category": "bridal",
    "categoryLabel": "Bridal Wear & Lehengas",
    "fabric": "Silk",
    "fabricBadge": "BRIDAL SILK",
    "occasion": "Bridal",
    "description": "Hand-crafted bridal wear & lehengas showcasing signature necklines, precision fit, and bespoke finish by Raaji Ladies Fashion.",
    "featureTag": "Bridal Wear & Lehengas",
    "imageUrl": "/images/Bridal/IMG-20210611-WA0004.jpg",
    "imagePlaceholderAlt": "Bridal Wear & Lehengas sample 2",
    "structuralHighlights": [
      "Custom paper pattern drafted to individual measurements",
      "Pure cotton voile inner lining for breathable comfort",
      "Double interlocked side seam assembly with 2-inch margins",
      "Hand-finished hooks, piping, and neck contouring"
    ]
  },
  {
    "id": "bridal-3",
    "sampleCode": "BR-103",
    "title": "Bridal Wear & Lehengas Sample #3",
    "category": "bridal",
    "categoryLabel": "Bridal Wear & Lehengas",
    "fabric": "Silk",
    "fabricBadge": "BRIDAL SILK",
    "occasion": "Bridal",
    "description": "Hand-crafted bridal wear & lehengas showcasing signature necklines, precision fit, and bespoke finish by Raaji Ladies Fashion.",
    "featureTag": "Bridal Wear & Lehengas",
    "imageUrl": "/images/Bridal/IMG-20210611-WA0005.jpg",
    "imagePlaceholderAlt": "Bridal Wear & Lehengas sample 3",
    "structuralHighlights": [
      "Custom paper pattern drafted to individual measurements",
      "Pure cotton voile inner lining for breathable comfort",
      "Double interlocked side seam assembly with 2-inch margins",
      "Hand-finished hooks, piping, and neck contouring"
    ]
  },
  {
    "id": "bridal-4",
    "sampleCode": "BR-104",
    "title": "Bridal Wear & Lehengas Sample #4",
    "category": "bridal",
    "categoryLabel": "Bridal Wear & Lehengas",
    "fabric": "Silk",
    "fabricBadge": "BRIDAL SILK",
    "occasion": "Bridal",
    "description": "Hand-crafted bridal wear & lehengas showcasing signature necklines, precision fit, and bespoke finish by Raaji Ladies Fashion.",
    "featureTag": "Bridal Wear & Lehengas",
    "imageUrl": "/images/Bridal/IMG-20210611-WA0006.jpg",
    "imagePlaceholderAlt": "Bridal Wear & Lehengas sample 4",
    "structuralHighlights": [
      "Custom paper pattern drafted to individual measurements",
      "Pure cotton voile inner lining for breathable comfort",
      "Double interlocked side seam assembly with 2-inch margins",
      "Hand-finished hooks, piping, and neck contouring"
    ]
  },
  {
    "id": "bridal-5",
    "sampleCode": "BR-105",
    "title": "Bridal Wear & Lehengas Sample #5",
    "category": "bridal",
    "categoryLabel": "Bridal Wear & Lehengas",
    "fabric": "Silk",
    "fabricBadge": "BRIDAL SILK",
    "occasion": "Bridal",
    "description": "Hand-crafted bridal wear & lehengas showcasing signature necklines, precision fit, and bespoke finish by Raaji Ladies Fashion.",
    "featureTag": "Bridal Wear & Lehengas",
    "imageUrl": "/images/Bridal/IMG-20210611-WA0007.jpg",
    "imagePlaceholderAlt": "Bridal Wear & Lehengas sample 5",
    "structuralHighlights": [
      "Custom paper pattern drafted to individual measurements",
      "Pure cotton voile inner lining for breathable comfort",
      "Double interlocked side seam assembly with 2-inch margins",
      "Hand-finished hooks, piping, and neck contouring"
    ]
  },
  {
    "id": "bridal-6",
    "sampleCode": "BR-106",
    "title": "Bridal Wear & Lehengas Sample #6",
    "category": "bridal",
    "categoryLabel": "Bridal Wear & Lehengas",
    "fabric": "Silk",
    "fabricBadge": "BRIDAL SILK",
    "occasion": "Bridal",
    "description": "Hand-crafted bridal wear & lehengas showcasing signature necklines, precision fit, and bespoke finish by Raaji Ladies Fashion.",
    "featureTag": "Bridal Wear & Lehengas",
    "imageUrl": "/images/Bridal/IMG-20210611-WA0008.jpg",
    "imagePlaceholderAlt": "Bridal Wear & Lehengas sample 6",
    "structuralHighlights": [
      "Custom paper pattern drafted to individual measurements",
      "Pure cotton voile inner lining for breathable comfort",
      "Double interlocked side seam assembly with 2-inch margins",
      "Hand-finished hooks, piping, and neck contouring"
    ]
  },
  {
    "id": "bridal-7",
    "sampleCode": "BR-107",
    "title": "Bridal Wear & Lehengas Sample #7",
    "category": "bridal",
    "categoryLabel": "Bridal Wear & Lehengas",
    "fabric": "Silk",
    "fabricBadge": "BRIDAL SILK",
    "occasion": "Bridal",
    "description": "Hand-crafted bridal wear & lehengas showcasing signature necklines, precision fit, and bespoke finish by Raaji Ladies Fashion.",
    "featureTag": "Bridal Wear & Lehengas",
    "imageUrl": "/images/Bridal/IMG-20210619-WA0004.jpg",
    "imagePlaceholderAlt": "Bridal Wear & Lehengas sample 7",
    "structuralHighlights": [
      "Custom paper pattern drafted to individual measurements",
      "Pure cotton voile inner lining for breathable comfort",
      "Double interlocked side seam assembly with 2-inch margins",
      "Hand-finished hooks, piping, and neck contouring"
    ]
  },
  {
    "id": "bridal-8",
    "sampleCode": "BR-108",
    "title": "Bridal Wear & Lehengas Sample #8",
    "category": "bridal",
    "categoryLabel": "Bridal Wear & Lehengas",
    "fabric": "Silk",
    "fabricBadge": "BRIDAL SILK",
    "occasion": "Bridal",
    "description": "Hand-crafted bridal wear & lehengas showcasing signature necklines, precision fit, and bespoke finish by Raaji Ladies Fashion.",
    "featureTag": "Bridal Wear & Lehengas",
    "imageUrl": "/images/Bridal/IMG-20210619-WA0006.jpg",
    "imagePlaceholderAlt": "Bridal Wear & Lehengas sample 8",
    "structuralHighlights": [
      "Custom paper pattern drafted to individual measurements",
      "Pure cotton voile inner lining for breathable comfort",
      "Double interlocked side seam assembly with 2-inch margins",
      "Hand-finished hooks, piping, and neck contouring"
    ]
  },
  {
    "id": "bridal-9",
    "sampleCode": "BR-109",
    "title": "Bridal Wear & Lehengas Sample #9",
    "category": "bridal",
    "categoryLabel": "Bridal Wear & Lehengas",
    "fabric": "Silk",
    "fabricBadge": "BRIDAL SILK",
    "occasion": "Bridal",
    "description": "Hand-crafted bridal wear & lehengas showcasing signature necklines, precision fit, and bespoke finish by Raaji Ladies Fashion.",
    "featureTag": "Bridal Wear & Lehengas",
    "imageUrl": "/images/Bridal/IMG-20210619-WA0007.jpg",
    "imagePlaceholderAlt": "Bridal Wear & Lehengas sample 9",
    "structuralHighlights": [
      "Custom paper pattern drafted to individual measurements",
      "Pure cotton voile inner lining for breathable comfort",
      "Double interlocked side seam assembly with 2-inch margins",
      "Hand-finished hooks, piping, and neck contouring"
    ]
  },
  {
    "id": "bridal-10",
    "sampleCode": "BR-110",
    "title": "Bridal Wear & Lehengas Sample #10",
    "category": "bridal",
    "categoryLabel": "Bridal Wear & Lehengas",
    "fabric": "Silk",
    "fabricBadge": "BRIDAL SILK",
    "occasion": "Bridal",
    "description": "Hand-crafted bridal wear & lehengas showcasing signature necklines, precision fit, and bespoke finish by Raaji Ladies Fashion.",
    "featureTag": "Bridal Wear & Lehengas",
    "imageUrl": "/images/Bridal/IMG-20210619-WA0008.jpg",
    "imagePlaceholderAlt": "Bridal Wear & Lehengas sample 10",
    "structuralHighlights": [
      "Custom paper pattern drafted to individual measurements",
      "Pure cotton voile inner lining for breathable comfort",
      "Double interlocked side seam assembly with 2-inch margins",
      "Hand-finished hooks, piping, and neck contouring"
    ]
  },
  {
    "id": "bridal-11",
    "sampleCode": "BR-111",
    "title": "Bridal Wear & Lehengas Sample #11",
    "category": "bridal",
    "categoryLabel": "Bridal Wear & Lehengas",
    "fabric": "Silk",
    "fabricBadge": "BRIDAL SILK",
    "occasion": "Bridal",
    "description": "Hand-crafted bridal wear & lehengas showcasing signature necklines, precision fit, and bespoke finish by Raaji Ladies Fashion.",
    "featureTag": "Bridal Wear & Lehengas",
    "imageUrl": "/images/Bridal/IMG-20210619-WA0009.jpg",
    "imagePlaceholderAlt": "Bridal Wear & Lehengas sample 11",
    "structuralHighlights": [
      "Custom paper pattern drafted to individual measurements",
      "Pure cotton voile inner lining for breathable comfort",
      "Double interlocked side seam assembly with 2-inch margins",
      "Hand-finished hooks, piping, and neck contouring"
    ]
  },
  {
    "id": "bridal-12",
    "sampleCode": "BR-112",
    "title": "Bridal Wear & Lehengas Sample #12",
    "category": "bridal",
    "categoryLabel": "Bridal Wear & Lehengas",
    "fabric": "Silk",
    "fabricBadge": "BRIDAL SILK",
    "occasion": "Bridal",
    "description": "Hand-crafted bridal wear & lehengas showcasing signature necklines, precision fit, and bespoke finish by Raaji Ladies Fashion.",
    "featureTag": "Bridal Wear & Lehengas",
    "imageUrl": "/images/Bridal/IMG-20210619-WA0010.jpg",
    "imagePlaceholderAlt": "Bridal Wear & Lehengas sample 12",
    "structuralHighlights": [
      "Custom paper pattern drafted to individual measurements",
      "Pure cotton voile inner lining for breathable comfort",
      "Double interlocked side seam assembly with 2-inch margins",
      "Hand-finished hooks, piping, and neck contouring"
    ]
  },
  {
    "id": "bridal-13",
    "sampleCode": "BR-113",
    "title": "Bridal Wear & Lehengas Sample #13",
    "category": "bridal",
    "categoryLabel": "Bridal Wear & Lehengas",
    "fabric": "Silk",
    "fabricBadge": "BRIDAL SILK",
    "occasion": "Bridal",
    "description": "Hand-crafted bridal wear & lehengas showcasing signature necklines, precision fit, and bespoke finish by Raaji Ladies Fashion.",
    "featureTag": "Bridal Wear & Lehengas",
    "imageUrl": "/images/Bridal/IMG-20210619-WA0011.jpg",
    "imagePlaceholderAlt": "Bridal Wear & Lehengas sample 13",
    "structuralHighlights": [
      "Custom paper pattern drafted to individual measurements",
      "Pure cotton voile inner lining for breathable comfort",
      "Double interlocked side seam assembly with 2-inch margins",
      "Hand-finished hooks, piping, and neck contouring"
    ]
  },
  {
    "id": "bridal-14",
    "sampleCode": "BR-114",
    "title": "Bridal Wear & Lehengas Sample #14",
    "category": "bridal",
    "categoryLabel": "Bridal Wear & Lehengas",
    "fabric": "Silk",
    "fabricBadge": "BRIDAL SILK",
    "occasion": "Bridal",
    "description": "Hand-crafted bridal wear & lehengas showcasing signature necklines, precision fit, and bespoke finish by Raaji Ladies Fashion.",
    "featureTag": "Bridal Wear & Lehengas",
    "imageUrl": "/images/Bridal/IMG-20210619-WA0012.jpg",
    "imagePlaceholderAlt": "Bridal Wear & Lehengas sample 14",
    "structuralHighlights": [
      "Custom paper pattern drafted to individual measurements",
      "Pure cotton voile inner lining for breathable comfort",
      "Double interlocked side seam assembly with 2-inch margins",
      "Hand-finished hooks, piping, and neck contouring"
    ]
  },
  {
    "id": "bridal-15",
    "sampleCode": "BR-115",
    "title": "Bridal Wear & Lehengas Sample #15",
    "category": "bridal",
    "categoryLabel": "Bridal Wear & Lehengas",
    "fabric": "Silk",
    "fabricBadge": "BRIDAL SILK",
    "occasion": "Bridal",
    "description": "Hand-crafted bridal wear & lehengas showcasing signature necklines, precision fit, and bespoke finish by Raaji Ladies Fashion.",
    "featureTag": "Bridal Wear & Lehengas",
    "imageUrl": "/images/Bridal/IMG-20210619-WA0013.jpg",
    "imagePlaceholderAlt": "Bridal Wear & Lehengas sample 15",
    "structuralHighlights": [
      "Custom paper pattern drafted to individual measurements",
      "Pure cotton voile inner lining for breathable comfort",
      "Double interlocked side seam assembly with 2-inch margins",
      "Hand-finished hooks, piping, and neck contouring"
    ]
  },
  {
    "id": "bridal-16",
    "sampleCode": "BR-116",
    "title": "Bridal Wear & Lehengas Sample #16",
    "category": "bridal",
    "categoryLabel": "Bridal Wear & Lehengas",
    "fabric": "Silk",
    "fabricBadge": "BRIDAL SILK",
    "occasion": "Bridal",
    "description": "Hand-crafted bridal wear & lehengas showcasing signature necklines, precision fit, and bespoke finish by Raaji Ladies Fashion.",
    "featureTag": "Bridal Wear & Lehengas",
    "imageUrl": "/images/Bridal/IMG-20210619-WA0014.jpg",
    "imagePlaceholderAlt": "Bridal Wear & Lehengas sample 16",
    "structuralHighlights": [
      "Custom paper pattern drafted to individual measurements",
      "Pure cotton voile inner lining for breathable comfort",
      "Double interlocked side seam assembly with 2-inch margins",
      "Hand-finished hooks, piping, and neck contouring"
    ]
  },
  {
    "id": "bridal-17",
    "sampleCode": "BR-117",
    "title": "Bridal Wear & Lehengas Sample #17",
    "category": "bridal",
    "categoryLabel": "Bridal Wear & Lehengas",
    "fabric": "Silk",
    "fabricBadge": "BRIDAL SILK",
    "occasion": "Bridal",
    "description": "Hand-crafted bridal wear & lehengas showcasing signature necklines, precision fit, and bespoke finish by Raaji Ladies Fashion.",
    "featureTag": "Bridal Wear & Lehengas",
    "imageUrl": "/images/Bridal/IMG-20210619-WA0015.jpg",
    "imagePlaceholderAlt": "Bridal Wear & Lehengas sample 17",
    "structuralHighlights": [
      "Custom paper pattern drafted to individual measurements",
      "Pure cotton voile inner lining for breathable comfort",
      "Double interlocked side seam assembly with 2-inch margins",
      "Hand-finished hooks, piping, and neck contouring"
    ]
  },
  {
    "id": "bridal-18",
    "sampleCode": "BR-118",
    "title": "Bridal Wear & Lehengas Sample #18",
    "category": "bridal",
    "categoryLabel": "Bridal Wear & Lehengas",
    "fabric": "Silk",
    "fabricBadge": "BRIDAL SILK",
    "occasion": "Bridal",
    "description": "Hand-crafted bridal wear & lehengas showcasing signature necklines, precision fit, and bespoke finish by Raaji Ladies Fashion.",
    "featureTag": "Bridal Wear & Lehengas",
    "imageUrl": "/images/Bridal/IMG-20210619-WA0016.jpg",
    "imagePlaceholderAlt": "Bridal Wear & Lehengas sample 18",
    "structuralHighlights": [
      "Custom paper pattern drafted to individual measurements",
      "Pure cotton voile inner lining for breathable comfort",
      "Double interlocked side seam assembly with 2-inch margins",
      "Hand-finished hooks, piping, and neck contouring"
    ]
  },
  {
    "id": "bridal-19",
    "sampleCode": "BR-119",
    "title": "Bridal Wear & Lehengas Sample #19",
    "category": "bridal",
    "categoryLabel": "Bridal Wear & Lehengas",
    "fabric": "Silk",
    "fabricBadge": "BRIDAL SILK",
    "occasion": "Bridal",
    "description": "Hand-crafted bridal wear & lehengas showcasing signature necklines, precision fit, and bespoke finish by Raaji Ladies Fashion.",
    "featureTag": "Bridal Wear & Lehengas",
    "imageUrl": "/images/Bridal/IMG-20210619-WA0017.jpg",
    "imagePlaceholderAlt": "Bridal Wear & Lehengas sample 19",
    "structuralHighlights": [
      "Custom paper pattern drafted to individual measurements",
      "Pure cotton voile inner lining for breathable comfort",
      "Double interlocked side seam assembly with 2-inch margins",
      "Hand-finished hooks, piping, and neck contouring"
    ]
  },
  {
    "id": "bridal-20",
    "sampleCode": "BR-120",
    "title": "Bridal Wear & Lehengas Sample #20",
    "category": "bridal",
    "categoryLabel": "Bridal Wear & Lehengas",
    "fabric": "Silk",
    "fabricBadge": "BRIDAL SILK",
    "occasion": "Bridal",
    "description": "Hand-crafted bridal wear & lehengas showcasing signature necklines, precision fit, and bespoke finish by Raaji Ladies Fashion.",
    "featureTag": "Bridal Wear & Lehengas",
    "imageUrl": "/images/Bridal/IMG-20210619-WA0018.jpg",
    "imagePlaceholderAlt": "Bridal Wear & Lehengas sample 20",
    "structuralHighlights": [
      "Custom paper pattern drafted to individual measurements",
      "Pure cotton voile inner lining for breathable comfort",
      "Double interlocked side seam assembly with 2-inch margins",
      "Hand-finished hooks, piping, and neck contouring"
    ]
  },
  {
    "id": "bridal-21",
    "sampleCode": "BR-121",
    "title": "Bridal Wear & Lehengas Sample #21",
    "category": "bridal",
    "categoryLabel": "Bridal Wear & Lehengas",
    "fabric": "Silk",
    "fabricBadge": "BRIDAL SILK",
    "occasion": "Bridal",
    "description": "Hand-crafted bridal wear & lehengas showcasing signature necklines, precision fit, and bespoke finish by Raaji Ladies Fashion.",
    "featureTag": "Bridal Wear & Lehengas",
    "imageUrl": "/images/Bridal/IMG-20210619-WA0020.jpg",
    "imagePlaceholderAlt": "Bridal Wear & Lehengas sample 21",
    "structuralHighlights": [
      "Custom paper pattern drafted to individual measurements",
      "Pure cotton voile inner lining for breathable comfort",
      "Double interlocked side seam assembly with 2-inch margins",
      "Hand-finished hooks, piping, and neck contouring"
    ]
  },
  {
    "id": "bridal-22",
    "sampleCode": "BR-122",
    "title": "Bridal Wear & Lehengas Sample #22",
    "category": "bridal",
    "categoryLabel": "Bridal Wear & Lehengas",
    "fabric": "Silk",
    "fabricBadge": "BRIDAL SILK",
    "occasion": "Bridal",
    "description": "Hand-crafted bridal wear & lehengas showcasing signature necklines, precision fit, and bespoke finish by Raaji Ladies Fashion.",
    "featureTag": "Bridal Wear & Lehengas",
    "imageUrl": "/images/Bridal/IMG-20210619-WA0021.jpg",
    "imagePlaceholderAlt": "Bridal Wear & Lehengas sample 22",
    "structuralHighlights": [
      "Custom paper pattern drafted to individual measurements",
      "Pure cotton voile inner lining for breathable comfort",
      "Double interlocked side seam assembly with 2-inch margins",
      "Hand-finished hooks, piping, and neck contouring"
    ]
  },
  {
    "id": "bridal-23",
    "sampleCode": "BR-123",
    "title": "Bridal Wear & Lehengas Sample #23",
    "category": "bridal",
    "categoryLabel": "Bridal Wear & Lehengas",
    "fabric": "Silk",
    "fabricBadge": "BRIDAL SILK",
    "occasion": "Bridal",
    "description": "Hand-crafted bridal wear & lehengas showcasing signature necklines, precision fit, and bespoke finish by Raaji Ladies Fashion.",
    "featureTag": "Bridal Wear & Lehengas",
    "imageUrl": "/images/Bridal/IMG-20210619-WA0022.jpg",
    "imagePlaceholderAlt": "Bridal Wear & Lehengas sample 23",
    "structuralHighlights": [
      "Custom paper pattern drafted to individual measurements",
      "Pure cotton voile inner lining for breathable comfort",
      "Double interlocked side seam assembly with 2-inch margins",
      "Hand-finished hooks, piping, and neck contouring"
    ]
  },
  {
    "id": "bridal-24",
    "sampleCode": "BR-124",
    "title": "Bridal Wear & Lehengas Sample #24",
    "category": "bridal",
    "categoryLabel": "Bridal Wear & Lehengas",
    "fabric": "Silk",
    "fabricBadge": "BRIDAL SILK",
    "occasion": "Bridal",
    "description": "Hand-crafted bridal wear & lehengas showcasing signature necklines, precision fit, and bespoke finish by Raaji Ladies Fashion.",
    "featureTag": "Bridal Wear & Lehengas",
    "imageUrl": "/images/Bridal/IMG-20210619-WA0024.jpg",
    "imagePlaceholderAlt": "Bridal Wear & Lehengas sample 24",
    "structuralHighlights": [
      "Custom paper pattern drafted to individual measurements",
      "Pure cotton voile inner lining for breathable comfort",
      "Double interlocked side seam assembly with 2-inch margins",
      "Hand-finished hooks, piping, and neck contouring"
    ]
  },
  {
    "id": "bridal-25",
    "sampleCode": "BR-125",
    "title": "Bridal Wear & Lehengas Sample #25",
    "category": "bridal",
    "categoryLabel": "Bridal Wear & Lehengas",
    "fabric": "Silk",
    "fabricBadge": "BRIDAL SILK",
    "occasion": "Bridal",
    "description": "Hand-crafted bridal wear & lehengas showcasing signature necklines, precision fit, and bespoke finish by Raaji Ladies Fashion.",
    "featureTag": "Bridal Wear & Lehengas",
    "imageUrl": "/images/Bridal/IMG-20210619-WA0025.jpg",
    "imagePlaceholderAlt": "Bridal Wear & Lehengas sample 25",
    "structuralHighlights": [
      "Custom paper pattern drafted to individual measurements",
      "Pure cotton voile inner lining for breathable comfort",
      "Double interlocked side seam assembly with 2-inch margins",
      "Hand-finished hooks, piping, and neck contouring"
    ]
  },
  {
    "id": "bridal-26",
    "sampleCode": "BR-126",
    "title": "Bridal Wear & Lehengas Sample #26",
    "category": "bridal",
    "categoryLabel": "Bridal Wear & Lehengas",
    "fabric": "Silk",
    "fabricBadge": "BRIDAL SILK",
    "occasion": "Bridal",
    "description": "Hand-crafted bridal wear & lehengas showcasing signature necklines, precision fit, and bespoke finish by Raaji Ladies Fashion.",
    "featureTag": "Bridal Wear & Lehengas",
    "imageUrl": "/images/Bridal/IMG-20210619-WA0026.jpg",
    "imagePlaceholderAlt": "Bridal Wear & Lehengas sample 26",
    "structuralHighlights": [
      "Custom paper pattern drafted to individual measurements",
      "Pure cotton voile inner lining for breathable comfort",
      "Double interlocked side seam assembly with 2-inch margins",
      "Hand-finished hooks, piping, and neck contouring"
    ]
  },
  {
    "id": "bridal-27",
    "sampleCode": "BR-127",
    "title": "Bridal Wear & Lehengas Sample #27",
    "category": "bridal",
    "categoryLabel": "Bridal Wear & Lehengas",
    "fabric": "Silk",
    "fabricBadge": "BRIDAL SILK",
    "occasion": "Bridal",
    "description": "Hand-crafted bridal wear & lehengas showcasing signature necklines, precision fit, and bespoke finish by Raaji Ladies Fashion.",
    "featureTag": "Bridal Wear & Lehengas",
    "imageUrl": "/images/Bridal/IMG-20210619-WA0027.jpg",
    "imagePlaceholderAlt": "Bridal Wear & Lehengas sample 27",
    "structuralHighlights": [
      "Custom paper pattern drafted to individual measurements",
      "Pure cotton voile inner lining for breathable comfort",
      "Double interlocked side seam assembly with 2-inch margins",
      "Hand-finished hooks, piping, and neck contouring"
    ]
  },
  {
    "id": "bridal-28",
    "sampleCode": "BR-128",
    "title": "Bridal Wear & Lehengas Sample #28",
    "category": "bridal",
    "categoryLabel": "Bridal Wear & Lehengas",
    "fabric": "Silk",
    "fabricBadge": "BRIDAL SILK",
    "occasion": "Bridal",
    "description": "Hand-crafted bridal wear & lehengas showcasing signature necklines, precision fit, and bespoke finish by Raaji Ladies Fashion.",
    "featureTag": "Bridal Wear & Lehengas",
    "imageUrl": "/images/Bridal/IMG-20210619-WA0028.jpg",
    "imagePlaceholderAlt": "Bridal Wear & Lehengas sample 28",
    "structuralHighlights": [
      "Custom paper pattern drafted to individual measurements",
      "Pure cotton voile inner lining for breathable comfort",
      "Double interlocked side seam assembly with 2-inch margins",
      "Hand-finished hooks, piping, and neck contouring"
    ]
  },
  {
    "id": "bridal-29",
    "sampleCode": "BR-129",
    "title": "Bridal Wear & Lehengas Sample #29",
    "category": "bridal",
    "categoryLabel": "Bridal Wear & Lehengas",
    "fabric": "Silk",
    "fabricBadge": "BRIDAL SILK",
    "occasion": "Bridal",
    "description": "Hand-crafted bridal wear & lehengas showcasing signature necklines, precision fit, and bespoke finish by Raaji Ladies Fashion.",
    "featureTag": "Bridal Wear & Lehengas",
    "imageUrl": "/images/Bridal/IMG-20210619-WA0029.jpg",
    "imagePlaceholderAlt": "Bridal Wear & Lehengas sample 29",
    "structuralHighlights": [
      "Custom paper pattern drafted to individual measurements",
      "Pure cotton voile inner lining for breathable comfort",
      "Double interlocked side seam assembly with 2-inch margins",
      "Hand-finished hooks, piping, and neck contouring"
    ]
  },
  {
    "id": "bridal-30",
    "sampleCode": "BR-130",
    "title": "Bridal Wear & Lehengas Sample #30",
    "category": "bridal",
    "categoryLabel": "Bridal Wear & Lehengas",
    "fabric": "Silk",
    "fabricBadge": "BRIDAL SILK",
    "occasion": "Bridal",
    "description": "Hand-crafted bridal wear & lehengas showcasing signature necklines, precision fit, and bespoke finish by Raaji Ladies Fashion.",
    "featureTag": "Bridal Wear & Lehengas",
    "imageUrl": "/images/Bridal/IMG-20210619-WA0031.jpg",
    "imagePlaceholderAlt": "Bridal Wear & Lehengas sample 30",
    "structuralHighlights": [
      "Custom paper pattern drafted to individual measurements",
      "Pure cotton voile inner lining for breathable comfort",
      "Double interlocked side seam assembly with 2-inch margins",
      "Hand-finished hooks, piping, and neck contouring"
    ]
  },
  {
    "id": "bridal-31",
    "sampleCode": "BR-131",
    "title": "Bridal Wear & Lehengas Sample #31",
    "category": "bridal",
    "categoryLabel": "Bridal Wear & Lehengas",
    "fabric": "Silk",
    "fabricBadge": "BRIDAL SILK",
    "occasion": "Bridal",
    "description": "Hand-crafted bridal wear & lehengas showcasing signature necklines, precision fit, and bespoke finish by Raaji Ladies Fashion.",
    "featureTag": "Bridal Wear & Lehengas",
    "imageUrl": "/images/Bridal/IMG-20210619-WA0032.jpg",
    "imagePlaceholderAlt": "Bridal Wear & Lehengas sample 31",
    "structuralHighlights": [
      "Custom paper pattern drafted to individual measurements",
      "Pure cotton voile inner lining for breathable comfort",
      "Double interlocked side seam assembly with 2-inch margins",
      "Hand-finished hooks, piping, and neck contouring"
    ]
  },
  {
    "id": "bridal-32",
    "sampleCode": "BR-132",
    "title": "Bridal Wear & Lehengas Sample #32",
    "category": "bridal",
    "categoryLabel": "Bridal Wear & Lehengas",
    "fabric": "Silk",
    "fabricBadge": "BRIDAL SILK",
    "occasion": "Bridal",
    "description": "Hand-crafted bridal wear & lehengas showcasing signature necklines, precision fit, and bespoke finish by Raaji Ladies Fashion.",
    "featureTag": "Bridal Wear & Lehengas",
    "imageUrl": "/images/Bridal/IMG-20210619-WA0033.jpg",
    "imagePlaceholderAlt": "Bridal Wear & Lehengas sample 32",
    "structuralHighlights": [
      "Custom paper pattern drafted to individual measurements",
      "Pure cotton voile inner lining for breathable comfort",
      "Double interlocked side seam assembly with 2-inch margins",
      "Hand-finished hooks, piping, and neck contouring"
    ]
  },
  {
    "id": "bridal-33",
    "sampleCode": "BR-133",
    "title": "Bridal Wear & Lehengas Sample #33",
    "category": "bridal",
    "categoryLabel": "Bridal Wear & Lehengas",
    "fabric": "Silk",
    "fabricBadge": "BRIDAL SILK",
    "occasion": "Bridal",
    "description": "Hand-crafted bridal wear & lehengas showcasing signature necklines, precision fit, and bespoke finish by Raaji Ladies Fashion.",
    "featureTag": "Bridal Wear & Lehengas",
    "imageUrl": "/images/Bridal/IMG-20210619-WA0034.jpg",
    "imagePlaceholderAlt": "Bridal Wear & Lehengas sample 33",
    "structuralHighlights": [
      "Custom paper pattern drafted to individual measurements",
      "Pure cotton voile inner lining for breathable comfort",
      "Double interlocked side seam assembly with 2-inch margins",
      "Hand-finished hooks, piping, and neck contouring"
    ]
  },
  {
    "id": "bridal-34",
    "sampleCode": "BR-134",
    "title": "Bridal Wear & Lehengas Sample #34",
    "category": "bridal",
    "categoryLabel": "Bridal Wear & Lehengas",
    "fabric": "Silk",
    "fabricBadge": "BRIDAL SILK",
    "occasion": "Bridal",
    "description": "Hand-crafted bridal wear & lehengas showcasing signature necklines, precision fit, and bespoke finish by Raaji Ladies Fashion.",
    "featureTag": "Bridal Wear & Lehengas",
    "imageUrl": "/images/Bridal/IMG-20210619-WA0035.jpg",
    "imagePlaceholderAlt": "Bridal Wear & Lehengas sample 34",
    "structuralHighlights": [
      "Custom paper pattern drafted to individual measurements",
      "Pure cotton voile inner lining for breathable comfort",
      "Double interlocked side seam assembly with 2-inch margins",
      "Hand-finished hooks, piping, and neck contouring"
    ]
  },
  {
    "id": "bridal-35",
    "sampleCode": "BR-135",
    "title": "Bridal Wear & Lehengas Sample #35",
    "category": "bridal",
    "categoryLabel": "Bridal Wear & Lehengas",
    "fabric": "Silk",
    "fabricBadge": "BRIDAL SILK",
    "occasion": "Bridal",
    "description": "Hand-crafted bridal wear & lehengas showcasing signature necklines, precision fit, and bespoke finish by Raaji Ladies Fashion.",
    "featureTag": "Bridal Wear & Lehengas",
    "imageUrl": "/images/Bridal/IMG-20210622-WA0002.jpg",
    "imagePlaceholderAlt": "Bridal Wear & Lehengas sample 35",
    "structuralHighlights": [
      "Custom paper pattern drafted to individual measurements",
      "Pure cotton voile inner lining for breathable comfort",
      "Double interlocked side seam assembly with 2-inch margins",
      "Hand-finished hooks, piping, and neck contouring"
    ]
  },
  {
    "id": "bridal-36",
    "sampleCode": "BR-136",
    "title": "Bridal Wear & Lehengas Sample #36",
    "category": "bridal",
    "categoryLabel": "Bridal Wear & Lehengas",
    "fabric": "Silk",
    "fabricBadge": "BRIDAL SILK",
    "occasion": "Bridal",
    "description": "Hand-crafted bridal wear & lehengas showcasing signature necklines, precision fit, and bespoke finish by Raaji Ladies Fashion.",
    "featureTag": "Bridal Wear & Lehengas",
    "imageUrl": "/images/Bridal/IMG-20210622-WA0003.jpg",
    "imagePlaceholderAlt": "Bridal Wear & Lehengas sample 36",
    "structuralHighlights": [
      "Custom paper pattern drafted to individual measurements",
      "Pure cotton voile inner lining for breathable comfort",
      "Double interlocked side seam assembly with 2-inch margins",
      "Hand-finished hooks, piping, and neck contouring"
    ]
  },
  {
    "id": "bridal-37",
    "sampleCode": "BR-137",
    "title": "Bridal Wear & Lehengas Sample #37",
    "category": "bridal",
    "categoryLabel": "Bridal Wear & Lehengas",
    "fabric": "Silk",
    "fabricBadge": "BRIDAL SILK",
    "occasion": "Bridal",
    "description": "Hand-crafted bridal wear & lehengas showcasing signature necklines, precision fit, and bespoke finish by Raaji Ladies Fashion.",
    "featureTag": "Bridal Wear & Lehengas",
    "imageUrl": "/images/Bridal/IMG-20210928-WA0023.jpg",
    "imagePlaceholderAlt": "Bridal Wear & Lehengas sample 37",
    "structuralHighlights": [
      "Custom paper pattern drafted to individual measurements",
      "Pure cotton voile inner lining for breathable comfort",
      "Double interlocked side seam assembly with 2-inch margins",
      "Hand-finished hooks, piping, and neck contouring"
    ]
  },
  {
    "id": "bridal-38",
    "sampleCode": "BR-138",
    "title": "Bridal Wear & Lehengas Sample #38",
    "category": "bridal",
    "categoryLabel": "Bridal Wear & Lehengas",
    "fabric": "Silk",
    "fabricBadge": "BRIDAL SILK",
    "occasion": "Bridal",
    "description": "Hand-crafted bridal wear & lehengas showcasing signature necklines, precision fit, and bespoke finish by Raaji Ladies Fashion.",
    "featureTag": "Bridal Wear & Lehengas",
    "imageUrl": "/images/Bridal/IMG-20210928-WA0024.jpg",
    "imagePlaceholderAlt": "Bridal Wear & Lehengas sample 38",
    "structuralHighlights": [
      "Custom paper pattern drafted to individual measurements",
      "Pure cotton voile inner lining for breathable comfort",
      "Double interlocked side seam assembly with 2-inch margins",
      "Hand-finished hooks, piping, and neck contouring"
    ]
  },
  {
    "id": "bridal-39",
    "sampleCode": "BR-139",
    "title": "Bridal Wear & Lehengas Sample #39",
    "category": "bridal",
    "categoryLabel": "Bridal Wear & Lehengas",
    "fabric": "Silk",
    "fabricBadge": "BRIDAL SILK",
    "occasion": "Bridal",
    "description": "Hand-crafted bridal wear & lehengas showcasing signature necklines, precision fit, and bespoke finish by Raaji Ladies Fashion.",
    "featureTag": "Bridal Wear & Lehengas",
    "imageUrl": "/images/Bridal/IMG-20210928-WA0025.jpg",
    "imagePlaceholderAlt": "Bridal Wear & Lehengas sample 39",
    "structuralHighlights": [
      "Custom paper pattern drafted to individual measurements",
      "Pure cotton voile inner lining for breathable comfort",
      "Double interlocked side seam assembly with 2-inch margins",
      "Hand-finished hooks, piping, and neck contouring"
    ]
  },
  {
    "id": "bridal-40",
    "sampleCode": "BR-140",
    "title": "Bridal Wear & Lehengas Sample #40",
    "category": "bridal",
    "categoryLabel": "Bridal Wear & Lehengas",
    "fabric": "Silk",
    "fabricBadge": "BRIDAL SILK",
    "occasion": "Bridal",
    "description": "Hand-crafted bridal wear & lehengas showcasing signature necklines, precision fit, and bespoke finish by Raaji Ladies Fashion.",
    "featureTag": "Bridal Wear & Lehengas",
    "imageUrl": "/images/Bridal/IMG-20210928-WA0026.jpg",
    "imagePlaceholderAlt": "Bridal Wear & Lehengas sample 40",
    "structuralHighlights": [
      "Custom paper pattern drafted to individual measurements",
      "Pure cotton voile inner lining for breathable comfort",
      "Double interlocked side seam assembly with 2-inch margins",
      "Hand-finished hooks, piping, and neck contouring"
    ]
  },
  {
    "id": "bridal-41",
    "sampleCode": "BR-141",
    "title": "Bridal Wear & Lehengas Sample #41",
    "category": "bridal",
    "categoryLabel": "Bridal Wear & Lehengas",
    "fabric": "Silk",
    "fabricBadge": "BRIDAL SILK",
    "occasion": "Bridal",
    "description": "Hand-crafted bridal wear & lehengas showcasing signature necklines, precision fit, and bespoke finish by Raaji Ladies Fashion.",
    "featureTag": "Bridal Wear & Lehengas",
    "imageUrl": "/images/Bridal/IMG-20220323-WA0005.jpg",
    "imagePlaceholderAlt": "Bridal Wear & Lehengas sample 41",
    "structuralHighlights": [
      "Custom paper pattern drafted to individual measurements",
      "Pure cotton voile inner lining for breathable comfort",
      "Double interlocked side seam assembly with 2-inch margins",
      "Hand-finished hooks, piping, and neck contouring"
    ]
  },
  {
    "id": "bridal-42",
    "sampleCode": "BR-142",
    "title": "Bridal Wear & Lehengas Sample #42",
    "category": "bridal",
    "categoryLabel": "Bridal Wear & Lehengas",
    "fabric": "Silk",
    "fabricBadge": "BRIDAL SILK",
    "occasion": "Bridal",
    "description": "Hand-crafted bridal wear & lehengas showcasing signature necklines, precision fit, and bespoke finish by Raaji Ladies Fashion.",
    "featureTag": "Bridal Wear & Lehengas",
    "imageUrl": "/images/Bridal/IMG-20220323-WA0006.jpg",
    "imagePlaceholderAlt": "Bridal Wear & Lehengas sample 42",
    "structuralHighlights": [
      "Custom paper pattern drafted to individual measurements",
      "Pure cotton voile inner lining for breathable comfort",
      "Double interlocked side seam assembly with 2-inch margins",
      "Hand-finished hooks, piping, and neck contouring"
    ]
  },
  {
    "id": "bridal-43",
    "sampleCode": "BR-143",
    "title": "Bridal Wear & Lehengas Sample #43",
    "category": "bridal",
    "categoryLabel": "Bridal Wear & Lehengas",
    "fabric": "Silk",
    "fabricBadge": "BRIDAL SILK",
    "occasion": "Bridal",
    "description": "Hand-crafted bridal wear & lehengas showcasing signature necklines, precision fit, and bespoke finish by Raaji Ladies Fashion.",
    "featureTag": "Bridal Wear & Lehengas",
    "imageUrl": "/images/Bridal/IMG-20220323-WA0009.jpg",
    "imagePlaceholderAlt": "Bridal Wear & Lehengas sample 43",
    "structuralHighlights": [
      "Custom paper pattern drafted to individual measurements",
      "Pure cotton voile inner lining for breathable comfort",
      "Double interlocked side seam assembly with 2-inch margins",
      "Hand-finished hooks, piping, and neck contouring"
    ]
  },
  {
    "id": "bridal-44",
    "sampleCode": "BR-144",
    "title": "Bridal Wear & Lehengas Sample #44",
    "category": "bridal",
    "categoryLabel": "Bridal Wear & Lehengas",
    "fabric": "Silk",
    "fabricBadge": "BRIDAL SILK",
    "occasion": "Bridal",
    "description": "Hand-crafted bridal wear & lehengas showcasing signature necklines, precision fit, and bespoke finish by Raaji Ladies Fashion.",
    "featureTag": "Bridal Wear & Lehengas",
    "imageUrl": "/images/Bridal/IMG-20220413-WA0000.jpg",
    "imagePlaceholderAlt": "Bridal Wear & Lehengas sample 44",
    "structuralHighlights": [
      "Custom paper pattern drafted to individual measurements",
      "Pure cotton voile inner lining for breathable comfort",
      "Double interlocked side seam assembly with 2-inch margins",
      "Hand-finished hooks, piping, and neck contouring"
    ]
  },
  {
    "id": "bridal-45",
    "sampleCode": "BR-145",
    "title": "Bridal Wear & Lehengas Sample #45",
    "category": "bridal",
    "categoryLabel": "Bridal Wear & Lehengas",
    "fabric": "Silk",
    "fabricBadge": "BRIDAL SILK",
    "occasion": "Bridal",
    "description": "Hand-crafted bridal wear & lehengas showcasing signature necklines, precision fit, and bespoke finish by Raaji Ladies Fashion.",
    "featureTag": "Bridal Wear & Lehengas",
    "imageUrl": "/images/Bridal/IMG-20220413-WA0001.jpg",
    "imagePlaceholderAlt": "Bridal Wear & Lehengas sample 45",
    "structuralHighlights": [
      "Custom paper pattern drafted to individual measurements",
      "Pure cotton voile inner lining for breathable comfort",
      "Double interlocked side seam assembly with 2-inch margins",
      "Hand-finished hooks, piping, and neck contouring"
    ]
  },
  {
    "id": "bridal-46",
    "sampleCode": "BR-146",
    "title": "Bridal Wear & Lehengas Sample #46",
    "category": "bridal",
    "categoryLabel": "Bridal Wear & Lehengas",
    "fabric": "Silk",
    "fabricBadge": "BRIDAL SILK",
    "occasion": "Bridal",
    "description": "Hand-crafted bridal wear & lehengas showcasing signature necklines, precision fit, and bespoke finish by Raaji Ladies Fashion.",
    "featureTag": "Bridal Wear & Lehengas",
    "imageUrl": "/images/Bridal/IMG-20220704-WA0001.jpg",
    "imagePlaceholderAlt": "Bridal Wear & Lehengas sample 46",
    "structuralHighlights": [
      "Custom paper pattern drafted to individual measurements",
      "Pure cotton voile inner lining for breathable comfort",
      "Double interlocked side seam assembly with 2-inch margins",
      "Hand-finished hooks, piping, and neck contouring"
    ]
  },
  {
    "id": "bridal-47",
    "sampleCode": "BR-147",
    "title": "Bridal Wear & Lehengas Sample #47",
    "category": "bridal",
    "categoryLabel": "Bridal Wear & Lehengas",
    "fabric": "Silk",
    "fabricBadge": "BRIDAL SILK",
    "occasion": "Bridal",
    "description": "Hand-crafted bridal wear & lehengas showcasing signature necklines, precision fit, and bespoke finish by Raaji Ladies Fashion.",
    "featureTag": "Bridal Wear & Lehengas",
    "imageUrl": "/images/Bridal/IMG-20220704-WA0002.jpg",
    "imagePlaceholderAlt": "Bridal Wear & Lehengas sample 47",
    "structuralHighlights": [
      "Custom paper pattern drafted to individual measurements",
      "Pure cotton voile inner lining for breathable comfort",
      "Double interlocked side seam assembly with 2-inch margins",
      "Hand-finished hooks, piping, and neck contouring"
    ]
  },
  {
    "id": "bridal-48",
    "sampleCode": "BR-148",
    "title": "Bridal Wear & Lehengas Sample #48",
    "category": "bridal",
    "categoryLabel": "Bridal Wear & Lehengas",
    "fabric": "Silk",
    "fabricBadge": "BRIDAL SILK",
    "occasion": "Bridal",
    "description": "Hand-crafted bridal wear & lehengas showcasing signature necklines, precision fit, and bespoke finish by Raaji Ladies Fashion.",
    "featureTag": "Bridal Wear & Lehengas",
    "imageUrl": "/images/Bridal/IMG-20220704-WA0004.jpg",
    "imagePlaceholderAlt": "Bridal Wear & Lehengas sample 48",
    "structuralHighlights": [
      "Custom paper pattern drafted to individual measurements",
      "Pure cotton voile inner lining for breathable comfort",
      "Double interlocked side seam assembly with 2-inch margins",
      "Hand-finished hooks, piping, and neck contouring"
    ]
  },
  {
    "id": "bridal-49",
    "sampleCode": "BR-149",
    "title": "Bridal Wear & Lehengas Sample #49",
    "category": "bridal",
    "categoryLabel": "Bridal Wear & Lehengas",
    "fabric": "Silk",
    "fabricBadge": "BRIDAL SILK",
    "occasion": "Bridal",
    "description": "Hand-crafted bridal wear & lehengas showcasing signature necklines, precision fit, and bespoke finish by Raaji Ladies Fashion.",
    "featureTag": "Bridal Wear & Lehengas",
    "imageUrl": "/images/Bridal/IMG-20220704-WA0005.jpg",
    "imagePlaceholderAlt": "Bridal Wear & Lehengas sample 49",
    "structuralHighlights": [
      "Custom paper pattern drafted to individual measurements",
      "Pure cotton voile inner lining for breathable comfort",
      "Double interlocked side seam assembly with 2-inch margins",
      "Hand-finished hooks, piping, and neck contouring"
    ]
  },
  {
    "id": "bridal-50",
    "sampleCode": "BR-150",
    "title": "Bridal Wear & Lehengas Sample #50",
    "category": "bridal",
    "categoryLabel": "Bridal Wear & Lehengas",
    "fabric": "Silk",
    "fabricBadge": "BRIDAL SILK",
    "occasion": "Bridal",
    "description": "Hand-crafted bridal wear & lehengas showcasing signature necklines, precision fit, and bespoke finish by Raaji Ladies Fashion.",
    "featureTag": "Bridal Wear & Lehengas",
    "imageUrl": "/images/Bridal/IMG-20220704-WA0006.jpg",
    "imagePlaceholderAlt": "Bridal Wear & Lehengas sample 50",
    "structuralHighlights": [
      "Custom paper pattern drafted to individual measurements",
      "Pure cotton voile inner lining for breathable comfort",
      "Double interlocked side seam assembly with 2-inch margins",
      "Hand-finished hooks, piping, and neck contouring"
    ]
  },
  {
    "id": "bridal-51",
    "sampleCode": "BR-151",
    "title": "Bridal Wear & Lehengas Sample #51",
    "category": "bridal",
    "categoryLabel": "Bridal Wear & Lehengas",
    "fabric": "Silk",
    "fabricBadge": "BRIDAL SILK",
    "occasion": "Bridal",
    "description": "Hand-crafted bridal wear & lehengas showcasing signature necklines, precision fit, and bespoke finish by Raaji Ladies Fashion.",
    "featureTag": "Bridal Wear & Lehengas",
    "imageUrl": "/images/Bridal/IMG-20260925-WA0136.jpg",
    "imagePlaceholderAlt": "Bridal Wear & Lehengas sample 51",
    "structuralHighlights": [
      "Custom paper pattern drafted to individual measurements",
      "Pure cotton voile inner lining for breathable comfort",
      "Double interlocked side seam assembly with 2-inch margins",
      "Hand-finished hooks, piping, and neck contouring"
    ]
  },
  {
    "id": "bridal-52",
    "sampleCode": "BR-152",
    "title": "Bridal Wear & Lehengas Sample #52",
    "category": "bridal",
    "categoryLabel": "Bridal Wear & Lehengas",
    "fabric": "Silk",
    "fabricBadge": "BRIDAL SILK",
    "occasion": "Bridal",
    "description": "Hand-crafted bridal wear & lehengas showcasing signature necklines, precision fit, and bespoke finish by Raaji Ladies Fashion.",
    "featureTag": "Bridal Wear & Lehengas",
    "imageUrl": "/images/Bridal/IMG-20260925-WA0140.jpg",
    "imagePlaceholderAlt": "Bridal Wear & Lehengas sample 52",
    "structuralHighlights": [
      "Custom paper pattern drafted to individual measurements",
      "Pure cotton voile inner lining for breathable comfort",
      "Double interlocked side seam assembly with 2-inch margins",
      "Hand-finished hooks, piping, and neck contouring"
    ]
  },
  {
    "id": "bridal-53",
    "sampleCode": "BR-153",
    "title": "Bridal Wear & Lehengas Sample #53",
    "category": "bridal",
    "categoryLabel": "Bridal Wear & Lehengas",
    "fabric": "Silk",
    "fabricBadge": "BRIDAL SILK",
    "occasion": "Bridal",
    "description": "Hand-crafted bridal wear & lehengas showcasing signature necklines, precision fit, and bespoke finish by Raaji Ladies Fashion.",
    "featureTag": "Bridal Wear & Lehengas",
    "imageUrl": "/images/Bridal/IMG-20260925-WA0141.jpg",
    "imagePlaceholderAlt": "Bridal Wear & Lehengas sample 53",
    "structuralHighlights": [
      "Custom paper pattern drafted to individual measurements",
      "Pure cotton voile inner lining for breathable comfort",
      "Double interlocked side seam assembly with 2-inch margins",
      "Hand-finished hooks, piping, and neck contouring"
    ]
  },
  {
    "id": "bridal-54",
    "sampleCode": "BR-154",
    "title": "Bridal Wear & Lehengas Sample #54",
    "category": "bridal",
    "categoryLabel": "Bridal Wear & Lehengas",
    "fabric": "Silk",
    "fabricBadge": "BRIDAL SILK",
    "occasion": "Bridal",
    "description": "Hand-crafted bridal wear & lehengas showcasing signature necklines, precision fit, and bespoke finish by Raaji Ladies Fashion.",
    "featureTag": "Bridal Wear & Lehengas",
    "imageUrl": "/images/Bridal/IMG-20260925-WA0142.jpg",
    "imagePlaceholderAlt": "Bridal Wear & Lehengas sample 54",
    "structuralHighlights": [
      "Custom paper pattern drafted to individual measurements",
      "Pure cotton voile inner lining for breathable comfort",
      "Double interlocked side seam assembly with 2-inch margins",
      "Hand-finished hooks, piping, and neck contouring"
    ]
  },
  {
    "id": "bridal-55",
    "sampleCode": "BR-155",
    "title": "Bridal Wear & Lehengas Sample #55",
    "category": "bridal",
    "categoryLabel": "Bridal Wear & Lehengas",
    "fabric": "Silk",
    "fabricBadge": "BRIDAL SILK",
    "occasion": "Bridal",
    "description": "Hand-crafted bridal wear & lehengas showcasing signature necklines, precision fit, and bespoke finish by Raaji Ladies Fashion.",
    "featureTag": "Bridal Wear & Lehengas",
    "imageUrl": "/images/Bridal/IMG-20260925-WA0149.jpg",
    "imagePlaceholderAlt": "Bridal Wear & Lehengas sample 55",
    "structuralHighlights": [
      "Custom paper pattern drafted to individual measurements",
      "Pure cotton voile inner lining for breathable comfort",
      "Double interlocked side seam assembly with 2-inch margins",
      "Hand-finished hooks, piping, and neck contouring"
    ]
  },
  {
    "id": "bridal-56",
    "sampleCode": "BR-156",
    "title": "Bridal Wear & Lehengas Sample #56",
    "category": "bridal",
    "categoryLabel": "Bridal Wear & Lehengas",
    "fabric": "Silk",
    "fabricBadge": "BRIDAL SILK",
    "occasion": "Bridal",
    "description": "Hand-crafted bridal wear & lehengas showcasing signature necklines, precision fit, and bespoke finish by Raaji Ladies Fashion.",
    "featureTag": "Bridal Wear & Lehengas",
    "imageUrl": "/images/Bridal/IMG-20260925-WA0165.jpg",
    "imagePlaceholderAlt": "Bridal Wear & Lehengas sample 56",
    "structuralHighlights": [
      "Custom paper pattern drafted to individual measurements",
      "Pure cotton voile inner lining for breathable comfort",
      "Double interlocked side seam assembly with 2-inch margins",
      "Hand-finished hooks, piping, and neck contouring"
    ]
  },
  {
    "id": "bridal-57",
    "sampleCode": "BR-157",
    "title": "Bridal Wear & Lehengas Sample #57",
    "category": "bridal",
    "categoryLabel": "Bridal Wear & Lehengas",
    "fabric": "Silk",
    "fabricBadge": "BRIDAL SILK",
    "occasion": "Bridal",
    "description": "Hand-crafted bridal wear & lehengas showcasing signature necklines, precision fit, and bespoke finish by Raaji Ladies Fashion.",
    "featureTag": "Bridal Wear & Lehengas",
    "imageUrl": "/images/Bridal/IMG-20260925-WA0167.jpg",
    "imagePlaceholderAlt": "Bridal Wear & Lehengas sample 57",
    "structuralHighlights": [
      "Custom paper pattern drafted to individual measurements",
      "Pure cotton voile inner lining for breathable comfort",
      "Double interlocked side seam assembly with 2-inch margins",
      "Hand-finished hooks, piping, and neck contouring"
    ]
  },
  {
    "id": "bridal-58",
    "sampleCode": "BR-158",
    "title": "Bridal Wear & Lehengas Sample #58",
    "category": "bridal",
    "categoryLabel": "Bridal Wear & Lehengas",
    "fabric": "Silk",
    "fabricBadge": "BRIDAL SILK",
    "occasion": "Bridal",
    "description": "Hand-crafted bridal wear & lehengas showcasing signature necklines, precision fit, and bespoke finish by Raaji Ladies Fashion.",
    "featureTag": "Bridal Wear & Lehengas",
    "imageUrl": "/images/Bridal/IMG-20260925-WA0168.jpg",
    "imagePlaceholderAlt": "Bridal Wear & Lehengas sample 58",
    "structuralHighlights": [
      "Custom paper pattern drafted to individual measurements",
      "Pure cotton voile inner lining for breathable comfort",
      "Double interlocked side seam assembly with 2-inch margins",
      "Hand-finished hooks, piping, and neck contouring"
    ]
  },
  {
    "id": "bridal-59",
    "sampleCode": "BR-159",
    "title": "Bridal Wear & Lehengas Sample #59",
    "category": "bridal",
    "categoryLabel": "Bridal Wear & Lehengas",
    "fabric": "Silk",
    "fabricBadge": "BRIDAL SILK",
    "occasion": "Bridal",
    "description": "Hand-crafted bridal wear & lehengas showcasing signature necklines, precision fit, and bespoke finish by Raaji Ladies Fashion.",
    "featureTag": "Bridal Wear & Lehengas",
    "imageUrl": "/images/Bridal/IMG-20260925-WA0171.jpg",
    "imagePlaceholderAlt": "Bridal Wear & Lehengas sample 59",
    "structuralHighlights": [
      "Custom paper pattern drafted to individual measurements",
      "Pure cotton voile inner lining for breathable comfort",
      "Double interlocked side seam assembly with 2-inch margins",
      "Hand-finished hooks, piping, and neck contouring"
    ]
  },
  {
    "id": "bridal-60",
    "sampleCode": "BR-160",
    "title": "Bridal Wear & Lehengas Sample #60",
    "category": "bridal",
    "categoryLabel": "Bridal Wear & Lehengas",
    "fabric": "Silk",
    "fabricBadge": "BRIDAL SILK",
    "occasion": "Bridal",
    "description": "Hand-crafted bridal wear & lehengas showcasing signature necklines, precision fit, and bespoke finish by Raaji Ladies Fashion.",
    "featureTag": "Bridal Wear & Lehengas",
    "imageUrl": "/images/Bridal/IMG-20260925-WA0172.jpg",
    "imagePlaceholderAlt": "Bridal Wear & Lehengas sample 60",
    "structuralHighlights": [
      "Custom paper pattern drafted to individual measurements",
      "Pure cotton voile inner lining for breathable comfort",
      "Double interlocked side seam assembly with 2-inch margins",
      "Hand-finished hooks, piping, and neck contouring"
    ]
  },
  {
    "id": "bridal-61",
    "sampleCode": "BR-161",
    "title": "Bridal Wear & Lehengas Sample #61",
    "category": "bridal",
    "categoryLabel": "Bridal Wear & Lehengas",
    "fabric": "Silk",
    "fabricBadge": "BRIDAL SILK",
    "occasion": "Bridal",
    "description": "Hand-crafted bridal wear & lehengas showcasing signature necklines, precision fit, and bespoke finish by Raaji Ladies Fashion.",
    "featureTag": "Bridal Wear & Lehengas",
    "imageUrl": "/images/Bridal/IMG-20260925-WA0200.jpg",
    "imagePlaceholderAlt": "Bridal Wear & Lehengas sample 61",
    "structuralHighlights": [
      "Custom paper pattern drafted to individual measurements",
      "Pure cotton voile inner lining for breathable comfort",
      "Double interlocked side seam assembly with 2-inch margins",
      "Hand-finished hooks, piping, and neck contouring"
    ]
  },
  {
    "id": "bridal-62",
    "sampleCode": "BR-162",
    "title": "Bridal Wear & Lehengas Sample #62",
    "category": "bridal",
    "categoryLabel": "Bridal Wear & Lehengas",
    "fabric": "Silk",
    "fabricBadge": "BRIDAL SILK",
    "occasion": "Bridal",
    "description": "Hand-crafted bridal wear & lehengas showcasing signature necklines, precision fit, and bespoke finish by Raaji Ladies Fashion.",
    "featureTag": "Bridal Wear & Lehengas",
    "imageUrl": "/images/Bridal/IMG-20260925-WA0203.jpg",
    "imagePlaceholderAlt": "Bridal Wear & Lehengas sample 62",
    "structuralHighlights": [
      "Custom paper pattern drafted to individual measurements",
      "Pure cotton voile inner lining for breathable comfort",
      "Double interlocked side seam assembly with 2-inch margins",
      "Hand-finished hooks, piping, and neck contouring"
    ]
  },
  {
    "id": "bridal-63",
    "sampleCode": "BR-163",
    "title": "Bridal Wear & Lehengas Sample #63",
    "category": "bridal",
    "categoryLabel": "Bridal Wear & Lehengas",
    "fabric": "Silk",
    "fabricBadge": "BRIDAL SILK",
    "occasion": "Bridal",
    "description": "Hand-crafted bridal wear & lehengas showcasing signature necklines, precision fit, and bespoke finish by Raaji Ladies Fashion.",
    "featureTag": "Bridal Wear & Lehengas",
    "imageUrl": "/images/Bridal/IMG-20260925-WA0206.jpg",
    "imagePlaceholderAlt": "Bridal Wear & Lehengas sample 63",
    "structuralHighlights": [
      "Custom paper pattern drafted to individual measurements",
      "Pure cotton voile inner lining for breathable comfort",
      "Double interlocked side seam assembly with 2-inch margins",
      "Hand-finished hooks, piping, and neck contouring"
    ]
  },
  {
    "id": "bridal-64",
    "sampleCode": "BR-164",
    "title": "Bridal Wear & Lehengas Sample #64",
    "category": "bridal",
    "categoryLabel": "Bridal Wear & Lehengas",
    "fabric": "Silk",
    "fabricBadge": "BRIDAL SILK",
    "occasion": "Bridal",
    "description": "Hand-crafted bridal wear & lehengas showcasing signature necklines, precision fit, and bespoke finish by Raaji Ladies Fashion.",
    "featureTag": "Bridal Wear & Lehengas",
    "imageUrl": "/images/Bridal/IMG-20260925-WA0207.jpg",
    "imagePlaceholderAlt": "Bridal Wear & Lehengas sample 64",
    "structuralHighlights": [
      "Custom paper pattern drafted to individual measurements",
      "Pure cotton voile inner lining for breathable comfort",
      "Double interlocked side seam assembly with 2-inch margins",
      "Hand-finished hooks, piping, and neck contouring"
    ]
  },
  {
    "id": "bridal-65",
    "sampleCode": "BR-165",
    "title": "Bridal Wear & Lehengas Sample #65",
    "category": "bridal",
    "categoryLabel": "Bridal Wear & Lehengas",
    "fabric": "Silk",
    "fabricBadge": "BRIDAL SILK",
    "occasion": "Bridal",
    "description": "Hand-crafted bridal wear & lehengas showcasing signature necklines, precision fit, and bespoke finish by Raaji Ladies Fashion.",
    "featureTag": "Bridal Wear & Lehengas",
    "imageUrl": "/images/Bridal/IMG-20260925-WA0208.jpg",
    "imagePlaceholderAlt": "Bridal Wear & Lehengas sample 65",
    "structuralHighlights": [
      "Custom paper pattern drafted to individual measurements",
      "Pure cotton voile inner lining for breathable comfort",
      "Double interlocked side seam assembly with 2-inch margins",
      "Hand-finished hooks, piping, and neck contouring"
    ]
  },
  {
    "id": "bridal-66",
    "sampleCode": "BR-166",
    "title": "Bridal Wear & Lehengas Sample #66",
    "category": "bridal",
    "categoryLabel": "Bridal Wear & Lehengas",
    "fabric": "Silk",
    "fabricBadge": "BRIDAL SILK",
    "occasion": "Bridal",
    "description": "Hand-crafted bridal wear & lehengas showcasing signature necklines, precision fit, and bespoke finish by Raaji Ladies Fashion.",
    "featureTag": "Bridal Wear & Lehengas",
    "imageUrl": "/images/Bridal/IMG-20260925-WA0210.jpg",
    "imagePlaceholderAlt": "Bridal Wear & Lehengas sample 66",
    "structuralHighlights": [
      "Custom paper pattern drafted to individual measurements",
      "Pure cotton voile inner lining for breathable comfort",
      "Double interlocked side seam assembly with 2-inch margins",
      "Hand-finished hooks, piping, and neck contouring"
    ]
  },
  {
    "id": "bridal-67",
    "sampleCode": "BR-167",
    "title": "Bridal Wear & Lehengas Sample #67",
    "category": "bridal",
    "categoryLabel": "Bridal Wear & Lehengas",
    "fabric": "Silk",
    "fabricBadge": "BRIDAL SILK",
    "occasion": "Bridal",
    "description": "Hand-crafted bridal wear & lehengas showcasing signature necklines, precision fit, and bespoke finish by Raaji Ladies Fashion.",
    "featureTag": "Bridal Wear & Lehengas",
    "imageUrl": "/images/Bridal/IMG-20260925-WA0211.jpg",
    "imagePlaceholderAlt": "Bridal Wear & Lehengas sample 67",
    "structuralHighlights": [
      "Custom paper pattern drafted to individual measurements",
      "Pure cotton voile inner lining for breathable comfort",
      "Double interlocked side seam assembly with 2-inch margins",
      "Hand-finished hooks, piping, and neck contouring"
    ]
  },
  {
    "id": "bridal-68",
    "sampleCode": "BR-168",
    "title": "Bridal Wear & Lehengas Sample #68",
    "category": "bridal",
    "categoryLabel": "Bridal Wear & Lehengas",
    "fabric": "Silk",
    "fabricBadge": "BRIDAL SILK",
    "occasion": "Bridal",
    "description": "Hand-crafted bridal wear & lehengas showcasing signature necklines, precision fit, and bespoke finish by Raaji Ladies Fashion.",
    "featureTag": "Bridal Wear & Lehengas",
    "imageUrl": "/images/Bridal/IMG-20260925-WA0212.jpg",
    "imagePlaceholderAlt": "Bridal Wear & Lehengas sample 68",
    "structuralHighlights": [
      "Custom paper pattern drafted to individual measurements",
      "Pure cotton voile inner lining for breathable comfort",
      "Double interlocked side seam assembly with 2-inch margins",
      "Hand-finished hooks, piping, and neck contouring"
    ]
  },
  {
    "id": "bridal-69",
    "sampleCode": "BR-169",
    "title": "Bridal Wear & Lehengas Sample #69",
    "category": "bridal",
    "categoryLabel": "Bridal Wear & Lehengas",
    "fabric": "Silk",
    "fabricBadge": "BRIDAL SILK",
    "occasion": "Bridal",
    "description": "Hand-crafted bridal wear & lehengas showcasing signature necklines, precision fit, and bespoke finish by Raaji Ladies Fashion.",
    "featureTag": "Bridal Wear & Lehengas",
    "imageUrl": "/images/Bridal/IMG_20210703_122417.jpg",
    "imagePlaceholderAlt": "Bridal Wear & Lehengas sample 69",
    "structuralHighlights": [
      "Custom paper pattern drafted to individual measurements",
      "Pure cotton voile inner lining for breathable comfort",
      "Double interlocked side seam assembly with 2-inch margins",
      "Hand-finished hooks, piping, and neck contouring"
    ]
  },
  {
    "id": "bridal-70",
    "sampleCode": "BR-170",
    "title": "Bridal Wear & Lehengas Sample #70",
    "category": "bridal",
    "categoryLabel": "Bridal Wear & Lehengas",
    "fabric": "Silk",
    "fabricBadge": "BRIDAL SILK",
    "occasion": "Bridal",
    "description": "Hand-crafted bridal wear & lehengas showcasing signature necklines, precision fit, and bespoke finish by Raaji Ladies Fashion.",
    "featureTag": "Bridal Wear & Lehengas",
    "imageUrl": "/images/Bridal/IMG_20210715_121218.jpg",
    "imagePlaceholderAlt": "Bridal Wear & Lehengas sample 70",
    "structuralHighlights": [
      "Custom paper pattern drafted to individual measurements",
      "Pure cotton voile inner lining for breathable comfort",
      "Double interlocked side seam assembly with 2-inch margins",
      "Hand-finished hooks, piping, and neck contouring"
    ]
  },
  {
    "id": "bridal-71",
    "sampleCode": "BR-171",
    "title": "Bridal Wear & Lehengas Sample #71",
    "category": "bridal",
    "categoryLabel": "Bridal Wear & Lehengas",
    "fabric": "Silk",
    "fabricBadge": "BRIDAL SILK",
    "occasion": "Bridal",
    "description": "Hand-crafted bridal wear & lehengas showcasing signature necklines, precision fit, and bespoke finish by Raaji Ladies Fashion.",
    "featureTag": "Bridal Wear & Lehengas",
    "imageUrl": "/images/Bridal/IMG_20220510_235045.jpg",
    "imagePlaceholderAlt": "Bridal Wear & Lehengas sample 71",
    "structuralHighlights": [
      "Custom paper pattern drafted to individual measurements",
      "Pure cotton voile inner lining for breathable comfort",
      "Double interlocked side seam assembly with 2-inch margins",
      "Hand-finished hooks, piping, and neck contouring"
    ]
  },
  {
    "id": "bridal-72",
    "sampleCode": "BR-172",
    "title": "Bridal Wear & Lehengas Sample #72",
    "category": "bridal",
    "categoryLabel": "Bridal Wear & Lehengas",
    "fabric": "Silk",
    "fabricBadge": "BRIDAL SILK",
    "occasion": "Bridal",
    "description": "Hand-crafted bridal wear & lehengas showcasing signature necklines, precision fit, and bespoke finish by Raaji Ladies Fashion.",
    "featureTag": "Bridal Wear & Lehengas",
    "imageUrl": "/images/Bridal/IMG_20220510_235133.jpg",
    "imagePlaceholderAlt": "Bridal Wear & Lehengas sample 72",
    "structuralHighlights": [
      "Custom paper pattern drafted to individual measurements",
      "Pure cotton voile inner lining for breathable comfort",
      "Double interlocked side seam assembly with 2-inch margins",
      "Hand-finished hooks, piping, and neck contouring"
    ]
  },
  {
    "id": "aari-work-1",
    "sampleCode": "AW-101",
    "title": "Aari Work Blouses Sample #1",
    "category": "aari-work",
    "categoryLabel": "Aari Work Blouses",
    "fabric": "Silk",
    "fabricBadge": "AARI WORK",
    "occasion": "Bridal",
    "description": "Hand-crafted aari work blouses showcasing signature necklines, precision fit, and bespoke finish by Raaji Ladies Fashion.",
    "featureTag": "Aari Work Blouses",
    "imageUrl": "/images/aari work/IMG-20260925-WA0058.jpg",
    "imagePlaceholderAlt": "Aari Work Blouses sample 1",
    "structuralHighlights": [
      "Custom paper pattern drafted to individual measurements",
      "Pure cotton voile inner lining for breathable comfort",
      "Double interlocked side seam assembly with 2-inch margins",
      "Hand-finished hooks, piping, and neck contouring"
    ]
  },
  {
    "id": "aari-work-2",
    "sampleCode": "AW-102",
    "title": "Aari Work Blouses Sample #2",
    "category": "aari-work",
    "categoryLabel": "Aari Work Blouses",
    "fabric": "Silk",
    "fabricBadge": "AARI WORK",
    "occasion": "Bridal",
    "description": "Hand-crafted aari work blouses showcasing signature necklines, precision fit, and bespoke finish by Raaji Ladies Fashion.",
    "featureTag": "Aari Work Blouses",
    "imageUrl": "/images/aari work/IMG-20260925-WA0061.jpg",
    "imagePlaceholderAlt": "Aari Work Blouses sample 2",
    "structuralHighlights": [
      "Custom paper pattern drafted to individual measurements",
      "Pure cotton voile inner lining for breathable comfort",
      "Double interlocked side seam assembly with 2-inch margins",
      "Hand-finished hooks, piping, and neck contouring"
    ]
  },
  {
    "id": "aari-work-3",
    "sampleCode": "AW-103",
    "title": "Aari Work Blouses Sample #3",
    "category": "aari-work",
    "categoryLabel": "Aari Work Blouses",
    "fabric": "Silk",
    "fabricBadge": "AARI WORK",
    "occasion": "Bridal",
    "description": "Hand-crafted aari work blouses showcasing signature necklines, precision fit, and bespoke finish by Raaji Ladies Fashion.",
    "featureTag": "Aari Work Blouses",
    "imageUrl": "/images/aari work/IMG-20260925-WA0062.jpg",
    "imagePlaceholderAlt": "Aari Work Blouses sample 3",
    "structuralHighlights": [
      "Custom paper pattern drafted to individual measurements",
      "Pure cotton voile inner lining for breathable comfort",
      "Double interlocked side seam assembly with 2-inch margins",
      "Hand-finished hooks, piping, and neck contouring"
    ]
  },
  {
    "id": "aari-work-4",
    "sampleCode": "AW-104",
    "title": "Aari Work Blouses Sample #4",
    "category": "aari-work",
    "categoryLabel": "Aari Work Blouses",
    "fabric": "Silk",
    "fabricBadge": "AARI WORK",
    "occasion": "Bridal",
    "description": "Hand-crafted aari work blouses showcasing signature necklines, precision fit, and bespoke finish by Raaji Ladies Fashion.",
    "featureTag": "Aari Work Blouses",
    "imageUrl": "/images/aari work/IMG-20260925-WA0063.jpg",
    "imagePlaceholderAlt": "Aari Work Blouses sample 4",
    "structuralHighlights": [
      "Custom paper pattern drafted to individual measurements",
      "Pure cotton voile inner lining for breathable comfort",
      "Double interlocked side seam assembly with 2-inch margins",
      "Hand-finished hooks, piping, and neck contouring"
    ]
  },
  {
    "id": "aari-work-5",
    "sampleCode": "AW-105",
    "title": "Aari Work Blouses Sample #5",
    "category": "aari-work",
    "categoryLabel": "Aari Work Blouses",
    "fabric": "Silk",
    "fabricBadge": "AARI WORK",
    "occasion": "Bridal",
    "description": "Hand-crafted aari work blouses showcasing signature necklines, precision fit, and bespoke finish by Raaji Ladies Fashion.",
    "featureTag": "Aari Work Blouses",
    "imageUrl": "/images/aari work/IMG-20260925-WA0058.jpg",
    "imagePlaceholderAlt": "Aari Work Blouses sample 5",
    "structuralHighlights": [
      "Custom paper pattern drafted to individual measurements",
      "Pure cotton voile inner lining for breathable comfort",
      "Double interlocked side seam assembly with 2-inch margins",
      "Hand-finished hooks, piping, and neck contouring"
    ]
  },
  {
    "id": "aari-work-6",
    "sampleCode": "AW-106",
    "title": "Aari Work Blouses Sample #6",
    "category": "aari-work",
    "categoryLabel": "Aari Work Blouses",
    "fabric": "Silk",
    "fabricBadge": "AARI WORK",
    "occasion": "Bridal",
    "description": "Hand-crafted aari work blouses showcasing signature necklines, precision fit, and bespoke finish by Raaji Ladies Fashion.",
    "featureTag": "Aari Work Blouses",
    "imageUrl": "/images/aari work/IMG-20260925-WA0066.jpg",
    "imagePlaceholderAlt": "Aari Work Blouses sample 6",
    "structuralHighlights": [
      "Custom paper pattern drafted to individual measurements",
      "Pure cotton voile inner lining for breathable comfort",
      "Double interlocked side seam assembly with 2-inch margins",
      "Hand-finished hooks, piping, and neck contouring"
    ]
  },
  {
    "id": "aari-work-7",
    "sampleCode": "AW-107",
    "title": "Aari Work Blouses Sample #7",
    "category": "aari-work",
    "categoryLabel": "Aari Work Blouses",
    "fabric": "Silk",
    "fabricBadge": "AARI WORK",
    "occasion": "Bridal",
    "description": "Hand-crafted aari work blouses showcasing signature necklines, precision fit, and bespoke finish by Raaji Ladies Fashion.",
    "featureTag": "Aari Work Blouses",
    "imageUrl": "/images/aari work/IMG-20260925-WA0067.jpg",
    "imagePlaceholderAlt": "Aari Work Blouses sample 7",
    "structuralHighlights": [
      "Custom paper pattern drafted to individual measurements",
      "Pure cotton voile inner lining for breathable comfort",
      "Double interlocked side seam assembly with 2-inch margins",
      "Hand-finished hooks, piping, and neck contouring"
    ]
  },
  {
    "id": "aari-work-8",
    "sampleCode": "AW-108",
    "title": "Aari Work Blouses Sample #8",
    "category": "aari-work",
    "categoryLabel": "Aari Work Blouses",
    "fabric": "Silk",
    "fabricBadge": "AARI WORK",
    "occasion": "Bridal",
    "description": "Hand-crafted aari work blouses showcasing signature necklines, precision fit, and bespoke finish by Raaji Ladies Fashion.",
    "featureTag": "Aari Work Blouses",
    "imageUrl": "/images/aari work/IMG-20260925-WA0068.jpg",
    "imagePlaceholderAlt": "Aari Work Blouses sample 8",
    "structuralHighlights": [
      "Custom paper pattern drafted to individual measurements",
      "Pure cotton voile inner lining for breathable comfort",
      "Double interlocked side seam assembly with 2-inch margins",
      "Hand-finished hooks, piping, and neck contouring"
    ]
  },
  {
    "id": "aari-work-9",
    "sampleCode": "AW-109",
    "title": "Aari Work Blouses Sample #9",
    "category": "aari-work",
    "categoryLabel": "Aari Work Blouses",
    "fabric": "Silk",
    "fabricBadge": "AARI WORK",
    "occasion": "Bridal",
    "description": "Hand-crafted aari work blouses showcasing signature necklines, precision fit, and bespoke finish by Raaji Ladies Fashion.",
    "featureTag": "Aari Work Blouses",
    "imageUrl": "/images/aari work/IMG-20260925-WA0075.jpg",
    "imagePlaceholderAlt": "Aari Work Blouses sample 9",
    "structuralHighlights": [
      "Custom paper pattern drafted to individual measurements",
      "Pure cotton voile inner lining for breathable comfort",
      "Double interlocked side seam assembly with 2-inch margins",
      "Hand-finished hooks, piping, and neck contouring"
    ]
  },
  {
    "id": "aari-work-10",
    "sampleCode": "AW-110",
    "title": "Aari Work Blouses Sample #10",
    "category": "aari-work",
    "categoryLabel": "Aari Work Blouses",
    "fabric": "Silk",
    "fabricBadge": "AARI WORK",
    "occasion": "Bridal",
    "description": "Hand-crafted aari work blouses showcasing signature necklines, precision fit, and bespoke finish by Raaji Ladies Fashion.",
    "featureTag": "Aari Work Blouses",
    "imageUrl": "/images/aari work/IMG-20260925-WA0076.jpg",
    "imagePlaceholderAlt": "Aari Work Blouses sample 10",
    "structuralHighlights": [
      "Custom paper pattern drafted to individual measurements",
      "Pure cotton voile inner lining for breathable comfort",
      "Double interlocked side seam assembly with 2-inch margins",
      "Hand-finished hooks, piping, and neck contouring"
    ]
  },
  {
    "id": "aari-work-11",
    "sampleCode": "AW-111",
    "title": "Aari Work Blouses Sample #11",
    "category": "aari-work",
    "categoryLabel": "Aari Work Blouses",
    "fabric": "Silk",
    "fabricBadge": "AARI WORK",
    "occasion": "Bridal",
    "description": "Hand-crafted aari work blouses showcasing signature necklines, precision fit, and bespoke finish by Raaji Ladies Fashion.",
    "featureTag": "Aari Work Blouses",
    "imageUrl": "/images/aari work/IMG-20260925-WA0112.jpg",
    "imagePlaceholderAlt": "Aari Work Blouses sample 11",
    "structuralHighlights": [
      "Custom paper pattern drafted to individual measurements",
      "Pure cotton voile inner lining for breathable comfort",
      "Double interlocked side seam assembly with 2-inch margins",
      "Hand-finished hooks, piping, and neck contouring"
    ]
  },
  {
    "id": "aari-work-12",
    "sampleCode": "AW-112",
    "title": "Aari Work Blouses Sample #12",
    "category": "aari-work",
    "categoryLabel": "Aari Work Blouses",
    "fabric": "Silk",
    "fabricBadge": "AARI WORK",
    "occasion": "Bridal",
    "description": "Hand-crafted aari work blouses showcasing signature necklines, precision fit, and bespoke finish by Raaji Ladies Fashion.",
    "featureTag": "Aari Work Blouses",
    "imageUrl": "/images/aari work/IMG-20260925-WA0114.jpg",
    "imagePlaceholderAlt": "Aari Work Blouses sample 12",
    "structuralHighlights": [
      "Custom paper pattern drafted to individual measurements",
      "Pure cotton voile inner lining for breathable comfort",
      "Double interlocked side seam assembly with 2-inch margins",
      "Hand-finished hooks, piping, and neck contouring"
    ]
  },
  {
    "id": "aari-work-13",
    "sampleCode": "AW-113",
    "title": "Aari Work Blouses Sample #13",
    "category": "aari-work",
    "categoryLabel": "Aari Work Blouses",
    "fabric": "Silk",
    "fabricBadge": "AARI WORK",
    "occasion": "Bridal",
    "description": "Hand-crafted aari work blouses showcasing signature necklines, precision fit, and bespoke finish by Raaji Ladies Fashion.",
    "featureTag": "Aari Work Blouses",
    "imageUrl": "/images/aari work/IMG-20260925-WA0117.jpg",
    "imagePlaceholderAlt": "Aari Work Blouses sample 13",
    "structuralHighlights": [
      "Custom paper pattern drafted to individual measurements",
      "Pure cotton voile inner lining for breathable comfort",
      "Double interlocked side seam assembly with 2-inch margins",
      "Hand-finished hooks, piping, and neck contouring"
    ]
  },
  {
    "id": "aari-work-14",
    "sampleCode": "AW-114",
    "title": "Aari Work Blouses Sample #14",
    "category": "aari-work",
    "categoryLabel": "Aari Work Blouses",
    "fabric": "Silk",
    "fabricBadge": "AARI WORK",
    "occasion": "Bridal",
    "description": "Hand-crafted aari work blouses showcasing signature necklines, precision fit, and bespoke finish by Raaji Ladies Fashion.",
    "featureTag": "Aari Work Blouses",
    "imageUrl": "/images/aari work/IMG-20260925-WA0119.jpg",
    "imagePlaceholderAlt": "Aari Work Blouses sample 14",
    "structuralHighlights": [
      "Custom paper pattern drafted to individual measurements",
      "Pure cotton voile inner lining for breathable comfort",
      "Double interlocked side seam assembly with 2-inch margins",
      "Hand-finished hooks, piping, and neck contouring"
    ]
  },
  {
    "id": "aari-work-15",
    "sampleCode": "AW-115",
    "title": "Aari Work Blouses Sample #15",
    "category": "aari-work",
    "categoryLabel": "Aari Work Blouses",
    "fabric": "Silk",
    "fabricBadge": "AARI WORK",
    "occasion": "Bridal",
    "description": "Hand-crafted aari work blouses showcasing signature necklines, precision fit, and bespoke finish by Raaji Ladies Fashion.",
    "featureTag": "Aari Work Blouses",
    "imageUrl": "/images/aari work/IMG-20260925-WA0120.jpg",
    "imagePlaceholderAlt": "Aari Work Blouses sample 15",
    "structuralHighlights": [
      "Custom paper pattern drafted to individual measurements",
      "Pure cotton voile inner lining for breathable comfort",
      "Double interlocked side seam assembly with 2-inch margins",
      "Hand-finished hooks, piping, and neck contouring"
    ]
  },
  {
    "id": "aari-work-16",
    "sampleCode": "AW-116",
    "title": "Aari Work Blouses Sample #16",
    "category": "aari-work",
    "categoryLabel": "Aari Work Blouses",
    "fabric": "Silk",
    "fabricBadge": "AARI WORK",
    "occasion": "Bridal",
    "description": "Hand-crafted aari work blouses showcasing signature necklines, precision fit, and bespoke finish by Raaji Ladies Fashion.",
    "featureTag": "Aari Work Blouses",
    "imageUrl": "/images/aari work/IMG-20260925-WA0131.jpg",
    "imagePlaceholderAlt": "Aari Work Blouses sample 16",
    "structuralHighlights": [
      "Custom paper pattern drafted to individual measurements",
      "Pure cotton voile inner lining for breathable comfort",
      "Double interlocked side seam assembly with 2-inch margins",
      "Hand-finished hooks, piping, and neck contouring"
    ]
  },
  {
    "id": "aari-work-17",
    "sampleCode": "AW-117",
    "title": "Aari Work Blouses Sample #17",
    "category": "aari-work",
    "categoryLabel": "Aari Work Blouses",
    "fabric": "Silk",
    "fabricBadge": "AARI WORK",
    "occasion": "Bridal",
    "description": "Hand-crafted aari work blouses showcasing signature necklines, precision fit, and bespoke finish by Raaji Ladies Fashion.",
    "featureTag": "Aari Work Blouses",
    "imageUrl": "/images/aari work/IMG-20260925-WA0132.jpg",
    "imagePlaceholderAlt": "Aari Work Blouses sample 17",
    "structuralHighlights": [
      "Custom paper pattern drafted to individual measurements",
      "Pure cotton voile inner lining for breathable comfort",
      "Double interlocked side seam assembly with 2-inch margins",
      "Hand-finished hooks, piping, and neck contouring"
    ]
  },
  {
    "id": "aari-work-18",
    "sampleCode": "AW-118",
    "title": "Aari Work Blouses Sample #18",
    "category": "aari-work",
    "categoryLabel": "Aari Work Blouses",
    "fabric": "Silk",
    "fabricBadge": "AARI WORK",
    "occasion": "Bridal",
    "description": "Hand-crafted aari work blouses showcasing signature necklines, precision fit, and bespoke finish by Raaji Ladies Fashion.",
    "featureTag": "Aari Work Blouses",
    "imageUrl": "/images/aari work/IMG-20260925-WA0133.jpg",
    "imagePlaceholderAlt": "Aari Work Blouses sample 18",
    "structuralHighlights": [
      "Custom paper pattern drafted to individual measurements",
      "Pure cotton voile inner lining for breathable comfort",
      "Double interlocked side seam assembly with 2-inch margins",
      "Hand-finished hooks, piping, and neck contouring"
    ]
  },
  {
    "id": "aari-work-19",
    "sampleCode": "AW-119",
    "title": "Aari Work Blouses Sample #19",
    "category": "aari-work",
    "categoryLabel": "Aari Work Blouses",
    "fabric": "Silk",
    "fabricBadge": "AARI WORK",
    "occasion": "Bridal",
    "description": "Hand-crafted aari work blouses showcasing signature necklines, precision fit, and bespoke finish by Raaji Ladies Fashion.",
    "featureTag": "Aari Work Blouses",
    "imageUrl": "/images/aari work/IMG-20260925-WA0134.jpg",
    "imagePlaceholderAlt": "Aari Work Blouses sample 19",
    "structuralHighlights": [
      "Custom paper pattern drafted to individual measurements",
      "Pure cotton voile inner lining for breathable comfort",
      "Double interlocked side seam assembly with 2-inch margins",
      "Hand-finished hooks, piping, and neck contouring"
    ]
  },
  {
    "id": "aari-work-20",
    "sampleCode": "AW-120",
    "title": "Aari Work Blouses Sample #20",
    "category": "aari-work",
    "categoryLabel": "Aari Work Blouses",
    "fabric": "Silk",
    "fabricBadge": "AARI WORK",
    "occasion": "Bridal",
    "description": "Hand-crafted aari work blouses showcasing signature necklines, precision fit, and bespoke finish by Raaji Ladies Fashion.",
    "featureTag": "Aari Work Blouses",
    "imageUrl": "/images/aari work/IMG-20260925-WA0177.jpg",
    "imagePlaceholderAlt": "Aari Work Blouses sample 20",
    "structuralHighlights": [
      "Custom paper pattern drafted to individual measurements",
      "Pure cotton voile inner lining for breathable comfort",
      "Double interlocked side seam assembly with 2-inch margins",
      "Hand-finished hooks, piping, and neck contouring"
    ]
  },
  {
    "id": "aari-work-21",
    "sampleCode": "AW-121",
    "title": "Aari Work Blouses Sample #21",
    "category": "aari-work",
    "categoryLabel": "Aari Work Blouses",
    "fabric": "Silk",
    "fabricBadge": "AARI WORK",
    "occasion": "Bridal",
    "description": "Hand-crafted aari work blouses showcasing signature necklines, precision fit, and bespoke finish by Raaji Ladies Fashion.",
    "featureTag": "Aari Work Blouses",
    "imageUrl": "/images/aari work/IMG-20260925-WA0181.jpg",
    "imagePlaceholderAlt": "Aari Work Blouses sample 21",
    "structuralHighlights": [
      "Custom paper pattern drafted to individual measurements",
      "Pure cotton voile inner lining for breathable comfort",
      "Double interlocked side seam assembly with 2-inch margins",
      "Hand-finished hooks, piping, and neck contouring"
    ]
  },
  {
    "id": "aari-work-22",
    "sampleCode": "AW-122",
    "title": "Aari Work Blouses Sample #22",
    "category": "aari-work",
    "categoryLabel": "Aari Work Blouses",
    "fabric": "Silk",
    "fabricBadge": "AARI WORK",
    "occasion": "Bridal",
    "description": "Hand-crafted aari work blouses showcasing signature necklines, precision fit, and bespoke finish by Raaji Ladies Fashion.",
    "featureTag": "Aari Work Blouses",
    "imageUrl": "/images/aari work/IMG-20260925-WA0184.jpg",
    "imagePlaceholderAlt": "Aari Work Blouses sample 22",
    "structuralHighlights": [
      "Custom paper pattern drafted to individual measurements",
      "Pure cotton voile inner lining for breathable comfort",
      "Double interlocked side seam assembly with 2-inch margins",
      "Hand-finished hooks, piping, and neck contouring"
    ]
  },
  {
    "id": "aari-work-23",
    "sampleCode": "AW-123",
    "title": "Aari Work Blouses Sample #23",
    "category": "aari-work",
    "categoryLabel": "Aari Work Blouses",
    "fabric": "Silk",
    "fabricBadge": "AARI WORK",
    "occasion": "Bridal",
    "description": "Hand-crafted aari work blouses showcasing signature necklines, precision fit, and bespoke finish by Raaji Ladies Fashion.",
    "featureTag": "Aari Work Blouses",
    "imageUrl": "/images/aari work/IMG-20260925-WA0198.jpg",
    "imagePlaceholderAlt": "Aari Work Blouses sample 23",
    "structuralHighlights": [
      "Custom paper pattern drafted to individual measurements",
      "Pure cotton voile inner lining for breathable comfort",
      "Double interlocked side seam assembly with 2-inch margins",
      "Hand-finished hooks, piping, and neck contouring"
    ]
  },
  {
    "id": "aari-work-24",
    "sampleCode": "AW-124",
    "title": "Aari Work Blouses Sample #24",
    "category": "aari-work",
    "categoryLabel": "Aari Work Blouses",
    "fabric": "Silk",
    "fabricBadge": "AARI WORK",
    "occasion": "Bridal",
    "description": "Hand-crafted aari work blouses showcasing signature necklines, precision fit, and bespoke finish by Raaji Ladies Fashion.",
    "featureTag": "Aari Work Blouses",
    "imageUrl": "/images/aari work/IMG-20260925-WA0201.jpg",
    "imagePlaceholderAlt": "Aari Work Blouses sample 24",
    "structuralHighlights": [
      "Custom paper pattern drafted to individual measurements",
      "Pure cotton voile inner lining for breathable comfort",
      "Double interlocked side seam assembly with 2-inch margins",
      "Hand-finished hooks, piping, and neck contouring"
    ]
  },
  {
    "id": "aari-work-25",
    "sampleCode": "AW-125",
    "title": "Aari Work Blouses Sample #25",
    "category": "aari-work",
    "categoryLabel": "Aari Work Blouses",
    "fabric": "Silk",
    "fabricBadge": "AARI WORK",
    "occasion": "Bridal",
    "description": "Hand-crafted aari work blouses showcasing signature necklines, precision fit, and bespoke finish by Raaji Ladies Fashion.",
    "featureTag": "Aari Work Blouses",
    "imageUrl": "/images/aari work/IMG-20260925-WA0202.jpg",
    "imagePlaceholderAlt": "Aari Work Blouses sample 25",
    "structuralHighlights": [
      "Custom paper pattern drafted to individual measurements",
      "Pure cotton voile inner lining for breathable comfort",
      "Double interlocked side seam assembly with 2-inch margins",
      "Hand-finished hooks, piping, and neck contouring"
    ]
  },
  {
    "id": "embroidery-1",
    "sampleCode": "EM-101",
    "title": "Custom Embroidery Designs Sample #1",
    "category": "embroidery",
    "categoryLabel": "Custom Embroidery Designs",
    "fabric": "Silk Blend",
    "fabricBadge": "EMBROIDERY",
    "occasion": "Festive",
    "description": "Hand-crafted custom embroidery designs showcasing signature necklines, precision fit, and bespoke finish by Raaji Ladies Fashion.",
    "featureTag": "Custom Embroidery Designs",
    "imageUrl": "/images/emdroiadry designs/92ab050b0fc672ae1a191eedc4999ab8.jpg",
    "imagePlaceholderAlt": "Custom Embroidery Designs sample 1",
    "structuralHighlights": [
      "Custom paper pattern drafted to individual measurements",
      "Pure cotton voile inner lining for breathable comfort",
      "Double interlocked side seam assembly with 2-inch margins",
      "Hand-finished hooks, piping, and neck contouring"
    ]
  },
  {
    "id": "embroidery-2",
    "sampleCode": "EM-102",
    "title": "Custom Embroidery Designs Sample #2",
    "category": "embroidery",
    "categoryLabel": "Custom Embroidery Designs",
    "fabric": "Silk Blend",
    "fabricBadge": "EMBROIDERY",
    "occasion": "Festive",
    "description": "Hand-crafted custom embroidery designs showcasing signature necklines, precision fit, and bespoke finish by Raaji Ladies Fashion.",
    "featureTag": "Custom Embroidery Designs",
    "imageUrl": "/images/emdroiadry designs/IMG-20180212-WA0018_1762436076544.jpg",
    "imagePlaceholderAlt": "Custom Embroidery Designs sample 2",
    "structuralHighlights": [
      "Custom paper pattern drafted to individual measurements",
      "Pure cotton voile inner lining for breathable comfort",
      "Double interlocked side seam assembly with 2-inch margins",
      "Hand-finished hooks, piping, and neck contouring"
    ]
  },
  {
    "id": "embroidery-3",
    "sampleCode": "EM-103",
    "title": "Custom Embroidery Designs Sample #3",
    "category": "embroidery",
    "categoryLabel": "Custom Embroidery Designs",
    "fabric": "Silk Blend",
    "fabricBadge": "EMBROIDERY",
    "occasion": "Festive",
    "description": "Hand-crafted custom embroidery designs showcasing signature necklines, precision fit, and bespoke finish by Raaji Ladies Fashion.",
    "featureTag": "Custom Embroidery Designs",
    "imageUrl": "/images/emdroiadry designs/IMG-20260925-WA0009.jpg",
    "imagePlaceholderAlt": "Custom Embroidery Designs sample 3",
    "structuralHighlights": [
      "Custom paper pattern drafted to individual measurements",
      "Pure cotton voile inner lining for breathable comfort",
      "Double interlocked side seam assembly with 2-inch margins",
      "Hand-finished hooks, piping, and neck contouring"
    ]
  },
  {
    "id": "embroidery-4",
    "sampleCode": "EM-104",
    "title": "Custom Embroidery Designs Sample #4",
    "category": "embroidery",
    "categoryLabel": "Custom Embroidery Designs",
    "fabric": "Silk Blend",
    "fabricBadge": "EMBROIDERY",
    "occasion": "Festive",
    "description": "Hand-crafted custom embroidery designs showcasing signature necklines, precision fit, and bespoke finish by Raaji Ladies Fashion.",
    "featureTag": "Custom Embroidery Designs",
    "imageUrl": "/images/emdroiadry designs/IMG-20260925-WA0010.jpg",
    "imagePlaceholderAlt": "Custom Embroidery Designs sample 4",
    "structuralHighlights": [
      "Custom paper pattern drafted to individual measurements",
      "Pure cotton voile inner lining for breathable comfort",
      "Double interlocked side seam assembly with 2-inch margins",
      "Hand-finished hooks, piping, and neck contouring"
    ]
  },
  {
    "id": "embroidery-5",
    "sampleCode": "EM-105",
    "title": "Custom Embroidery Designs Sample #5",
    "category": "embroidery",
    "categoryLabel": "Custom Embroidery Designs",
    "fabric": "Silk Blend",
    "fabricBadge": "EMBROIDERY",
    "occasion": "Festive",
    "description": "Hand-crafted custom embroidery designs showcasing signature necklines, precision fit, and bespoke finish by Raaji Ladies Fashion.",
    "featureTag": "Custom Embroidery Designs",
    "imageUrl": "/images/emdroiadry designs/IMG-20260925-WA0011.jpg",
    "imagePlaceholderAlt": "Custom Embroidery Designs sample 5",
    "structuralHighlights": [
      "Custom paper pattern drafted to individual measurements",
      "Pure cotton voile inner lining for breathable comfort",
      "Double interlocked side seam assembly with 2-inch margins",
      "Hand-finished hooks, piping, and neck contouring"
    ]
  },
  {
    "id": "embroidery-6",
    "sampleCode": "EM-106",
    "title": "Custom Embroidery Designs Sample #6",
    "category": "embroidery",
    "categoryLabel": "Custom Embroidery Designs",
    "fabric": "Silk Blend",
    "fabricBadge": "EMBROIDERY",
    "occasion": "Festive",
    "description": "Hand-crafted custom embroidery designs showcasing signature necklines, precision fit, and bespoke finish by Raaji Ladies Fashion.",
    "featureTag": "Custom Embroidery Designs",
    "imageUrl": "/images/emdroiadry designs/IMG-20260925-WA0012.jpg",
    "imagePlaceholderAlt": "Custom Embroidery Designs sample 6",
    "structuralHighlights": [
      "Custom paper pattern drafted to individual measurements",
      "Pure cotton voile inner lining for breathable comfort",
      "Double interlocked side seam assembly with 2-inch margins",
      "Hand-finished hooks, piping, and neck contouring"
    ]
  },
  {
    "id": "embroidery-7",
    "sampleCode": "EM-107",
    "title": "Custom Embroidery Designs Sample #7",
    "category": "embroidery",
    "categoryLabel": "Custom Embroidery Designs",
    "fabric": "Silk Blend",
    "fabricBadge": "EMBROIDERY",
    "occasion": "Festive",
    "description": "Hand-crafted custom embroidery designs showcasing signature necklines, precision fit, and bespoke finish by Raaji Ladies Fashion.",
    "featureTag": "Custom Embroidery Designs",
    "imageUrl": "/images/emdroiadry designs/IMG-20260925-WA0013.jpg",
    "imagePlaceholderAlt": "Custom Embroidery Designs sample 7",
    "structuralHighlights": [
      "Custom paper pattern drafted to individual measurements",
      "Pure cotton voile inner lining for breathable comfort",
      "Double interlocked side seam assembly with 2-inch margins",
      "Hand-finished hooks, piping, and neck contouring"
    ]
  },
  {
    "id": "embroidery-8",
    "sampleCode": "EM-108",
    "title": "Custom Embroidery Designs Sample #8",
    "category": "embroidery",
    "categoryLabel": "Custom Embroidery Designs",
    "fabric": "Silk Blend",
    "fabricBadge": "EMBROIDERY",
    "occasion": "Festive",
    "description": "Hand-crafted custom embroidery designs showcasing signature necklines, precision fit, and bespoke finish by Raaji Ladies Fashion.",
    "featureTag": "Custom Embroidery Designs",
    "imageUrl": "/images/emdroiadry designs/IMG-20260925-WA0014.jpg",
    "imagePlaceholderAlt": "Custom Embroidery Designs sample 8",
    "structuralHighlights": [
      "Custom paper pattern drafted to individual measurements",
      "Pure cotton voile inner lining for breathable comfort",
      "Double interlocked side seam assembly with 2-inch margins",
      "Hand-finished hooks, piping, and neck contouring"
    ]
  },
  {
    "id": "embroidery-9",
    "sampleCode": "EM-109",
    "title": "Custom Embroidery Designs Sample #9",
    "category": "embroidery",
    "categoryLabel": "Custom Embroidery Designs",
    "fabric": "Silk Blend",
    "fabricBadge": "EMBROIDERY",
    "occasion": "Festive",
    "description": "Hand-crafted custom embroidery designs showcasing signature necklines, precision fit, and bespoke finish by Raaji Ladies Fashion.",
    "featureTag": "Custom Embroidery Designs",
    "imageUrl": "/images/emdroiadry designs/IMG-20260925-WA0015.jpg",
    "imagePlaceholderAlt": "Custom Embroidery Designs sample 9",
    "structuralHighlights": [
      "Custom paper pattern drafted to individual measurements",
      "Pure cotton voile inner lining for breathable comfort",
      "Double interlocked side seam assembly with 2-inch margins",
      "Hand-finished hooks, piping, and neck contouring"
    ]
  },
  {
    "id": "embroidery-10",
    "sampleCode": "EM-110",
    "title": "Custom Embroidery Designs Sample #10",
    "category": "embroidery",
    "categoryLabel": "Custom Embroidery Designs",
    "fabric": "Silk Blend",
    "fabricBadge": "EMBROIDERY",
    "occasion": "Festive",
    "description": "Hand-crafted custom embroidery designs showcasing signature necklines, precision fit, and bespoke finish by Raaji Ladies Fashion.",
    "featureTag": "Custom Embroidery Designs",
    "imageUrl": "/images/emdroiadry designs/IMG-20260925-WA0016.jpg",
    "imagePlaceholderAlt": "Custom Embroidery Designs sample 10",
    "structuralHighlights": [
      "Custom paper pattern drafted to individual measurements",
      "Pure cotton voile inner lining for breathable comfort",
      "Double interlocked side seam assembly with 2-inch margins",
      "Hand-finished hooks, piping, and neck contouring"
    ]
  },
  {
    "id": "embroidery-11",
    "sampleCode": "EM-111",
    "title": "Custom Embroidery Designs Sample #11",
    "category": "embroidery",
    "categoryLabel": "Custom Embroidery Designs",
    "fabric": "Silk Blend",
    "fabricBadge": "EMBROIDERY",
    "occasion": "Festive",
    "description": "Hand-crafted custom embroidery designs showcasing signature necklines, precision fit, and bespoke finish by Raaji Ladies Fashion.",
    "featureTag": "Custom Embroidery Designs",
    "imageUrl": "/images/emdroiadry designs/IMG-20260925-WA0017.jpg",
    "imagePlaceholderAlt": "Custom Embroidery Designs sample 11",
    "structuralHighlights": [
      "Custom paper pattern drafted to individual measurements",
      "Pure cotton voile inner lining for breathable comfort",
      "Double interlocked side seam assembly with 2-inch margins",
      "Hand-finished hooks, piping, and neck contouring"
    ]
  },
  {
    "id": "embroidery-12",
    "sampleCode": "EM-112",
    "title": "Custom Embroidery Designs Sample #12",
    "category": "embroidery",
    "categoryLabel": "Custom Embroidery Designs",
    "fabric": "Silk Blend",
    "fabricBadge": "EMBROIDERY",
    "occasion": "Festive",
    "description": "Hand-crafted custom embroidery designs showcasing signature necklines, precision fit, and bespoke finish by Raaji Ladies Fashion.",
    "featureTag": "Custom Embroidery Designs",
    "imageUrl": "/images/emdroiadry designs/IMG-20260925-WA0018.jpg",
    "imagePlaceholderAlt": "Custom Embroidery Designs sample 12",
    "structuralHighlights": [
      "Custom paper pattern drafted to individual measurements",
      "Pure cotton voile inner lining for breathable comfort",
      "Double interlocked side seam assembly with 2-inch margins",
      "Hand-finished hooks, piping, and neck contouring"
    ]
  },
  {
    "id": "embroidery-13",
    "sampleCode": "EM-113",
    "title": "Custom Embroidery Designs Sample #13",
    "category": "embroidery",
    "categoryLabel": "Custom Embroidery Designs",
    "fabric": "Silk Blend",
    "fabricBadge": "EMBROIDERY",
    "occasion": "Festive",
    "description": "Hand-crafted custom embroidery designs showcasing signature necklines, precision fit, and bespoke finish by Raaji Ladies Fashion.",
    "featureTag": "Custom Embroidery Designs",
    "imageUrl": "/images/emdroiadry designs/IMG-20260925-WA0019.jpg",
    "imagePlaceholderAlt": "Custom Embroidery Designs sample 13",
    "structuralHighlights": [
      "Custom paper pattern drafted to individual measurements",
      "Pure cotton voile inner lining for breathable comfort",
      "Double interlocked side seam assembly with 2-inch margins",
      "Hand-finished hooks, piping, and neck contouring"
    ]
  },
  {
    "id": "embroidery-14",
    "sampleCode": "EM-114",
    "title": "Custom Embroidery Designs Sample #14",
    "category": "embroidery",
    "categoryLabel": "Custom Embroidery Designs",
    "fabric": "Silk Blend",
    "fabricBadge": "EMBROIDERY",
    "occasion": "Festive",
    "description": "Hand-crafted custom embroidery designs showcasing signature necklines, precision fit, and bespoke finish by Raaji Ladies Fashion.",
    "featureTag": "Custom Embroidery Designs",
    "imageUrl": "/images/emdroiadry designs/IMG-20260925-WA0020.jpg",
    "imagePlaceholderAlt": "Custom Embroidery Designs sample 14",
    "structuralHighlights": [
      "Custom paper pattern drafted to individual measurements",
      "Pure cotton voile inner lining for breathable comfort",
      "Double interlocked side seam assembly with 2-inch margins",
      "Hand-finished hooks, piping, and neck contouring"
    ]
  },
  {
    "id": "embroidery-15",
    "sampleCode": "EM-115",
    "title": "Custom Embroidery Designs Sample #15",
    "category": "embroidery",
    "categoryLabel": "Custom Embroidery Designs",
    "fabric": "Silk Blend",
    "fabricBadge": "EMBROIDERY",
    "occasion": "Festive",
    "description": "Hand-crafted custom embroidery designs showcasing signature necklines, precision fit, and bespoke finish by Raaji Ladies Fashion.",
    "featureTag": "Custom Embroidery Designs",
    "imageUrl": "/images/emdroiadry designs/IMG-20260925-WA0021.jpg",
    "imagePlaceholderAlt": "Custom Embroidery Designs sample 15",
    "structuralHighlights": [
      "Custom paper pattern drafted to individual measurements",
      "Pure cotton voile inner lining for breathable comfort",
      "Double interlocked side seam assembly with 2-inch margins",
      "Hand-finished hooks, piping, and neck contouring"
    ]
  },
  {
    "id": "embroidery-16",
    "sampleCode": "EM-116",
    "title": "Custom Embroidery Designs Sample #16",
    "category": "embroidery",
    "categoryLabel": "Custom Embroidery Designs",
    "fabric": "Silk Blend",
    "fabricBadge": "EMBROIDERY",
    "occasion": "Festive",
    "description": "Hand-crafted custom embroidery designs showcasing signature necklines, precision fit, and bespoke finish by Raaji Ladies Fashion.",
    "featureTag": "Custom Embroidery Designs",
    "imageUrl": "/images/emdroiadry designs/IMG-20260925-WA0022.jpg",
    "imagePlaceholderAlt": "Custom Embroidery Designs sample 16",
    "structuralHighlights": [
      "Custom paper pattern drafted to individual measurements",
      "Pure cotton voile inner lining for breathable comfort",
      "Double interlocked side seam assembly with 2-inch margins",
      "Hand-finished hooks, piping, and neck contouring"
    ]
  },
  {
    "id": "embroidery-17",
    "sampleCode": "EM-117",
    "title": "Custom Embroidery Designs Sample #17",
    "category": "embroidery",
    "categoryLabel": "Custom Embroidery Designs",
    "fabric": "Silk Blend",
    "fabricBadge": "EMBROIDERY",
    "occasion": "Festive",
    "description": "Hand-crafted custom embroidery designs showcasing signature necklines, precision fit, and bespoke finish by Raaji Ladies Fashion.",
    "featureTag": "Custom Embroidery Designs",
    "imageUrl": "/images/emdroiadry designs/IMG-20260925-WA0023.jpg",
    "imagePlaceholderAlt": "Custom Embroidery Designs sample 17",
    "structuralHighlights": [
      "Custom paper pattern drafted to individual measurements",
      "Pure cotton voile inner lining for breathable comfort",
      "Double interlocked side seam assembly with 2-inch margins",
      "Hand-finished hooks, piping, and neck contouring"
    ]
  },
  {
    "id": "embroidery-18",
    "sampleCode": "EM-118",
    "title": "Custom Embroidery Designs Sample #18",
    "category": "embroidery",
    "categoryLabel": "Custom Embroidery Designs",
    "fabric": "Silk Blend",
    "fabricBadge": "EMBROIDERY",
    "occasion": "Festive",
    "description": "Hand-crafted custom embroidery designs showcasing signature necklines, precision fit, and bespoke finish by Raaji Ladies Fashion.",
    "featureTag": "Custom Embroidery Designs",
    "imageUrl": "/images/emdroiadry designs/IMG-20260925-WA0024.jpg",
    "imagePlaceholderAlt": "Custom Embroidery Designs sample 18",
    "structuralHighlights": [
      "Custom paper pattern drafted to individual measurements",
      "Pure cotton voile inner lining for breathable comfort",
      "Double interlocked side seam assembly with 2-inch margins",
      "Hand-finished hooks, piping, and neck contouring"
    ]
  },
  {
    "id": "embroidery-19",
    "sampleCode": "EM-119",
    "title": "Custom Embroidery Designs Sample #19",
    "category": "embroidery",
    "categoryLabel": "Custom Embroidery Designs",
    "fabric": "Silk Blend",
    "fabricBadge": "EMBROIDERY",
    "occasion": "Festive",
    "description": "Hand-crafted custom embroidery designs showcasing signature necklines, precision fit, and bespoke finish by Raaji Ladies Fashion.",
    "featureTag": "Custom Embroidery Designs",
    "imageUrl": "/images/emdroiadry designs/IMG-20260925-WA0025.jpg",
    "imagePlaceholderAlt": "Custom Embroidery Designs sample 19",
    "structuralHighlights": [
      "Custom paper pattern drafted to individual measurements",
      "Pure cotton voile inner lining for breathable comfort",
      "Double interlocked side seam assembly with 2-inch margins",
      "Hand-finished hooks, piping, and neck contouring"
    ]
  },
  {
    "id": "embroidery-20",
    "sampleCode": "EM-120",
    "title": "Custom Embroidery Designs Sample #20",
    "category": "embroidery",
    "categoryLabel": "Custom Embroidery Designs",
    "fabric": "Silk Blend",
    "fabricBadge": "EMBROIDERY",
    "occasion": "Festive",
    "description": "Hand-crafted custom embroidery designs showcasing signature necklines, precision fit, and bespoke finish by Raaji Ladies Fashion.",
    "featureTag": "Custom Embroidery Designs",
    "imageUrl": "/images/emdroiadry designs/IMG-20260925-WA0026.jpg",
    "imagePlaceholderAlt": "Custom Embroidery Designs sample 20",
    "structuralHighlights": [
      "Custom paper pattern drafted to individual measurements",
      "Pure cotton voile inner lining for breathable comfort",
      "Double interlocked side seam assembly with 2-inch margins",
      "Hand-finished hooks, piping, and neck contouring"
    ]
  },
  {
    "id": "embroidery-21",
    "sampleCode": "EM-121",
    "title": "Custom Embroidery Designs Sample #21",
    "category": "embroidery",
    "categoryLabel": "Custom Embroidery Designs",
    "fabric": "Silk Blend",
    "fabricBadge": "EMBROIDERY",
    "occasion": "Festive",
    "description": "Hand-crafted custom embroidery designs showcasing signature necklines, precision fit, and bespoke finish by Raaji Ladies Fashion.",
    "featureTag": "Custom Embroidery Designs",
    "imageUrl": "/images/emdroiadry designs/IMG-20260925-WA0027.jpg",
    "imagePlaceholderAlt": "Custom Embroidery Designs sample 21",
    "structuralHighlights": [
      "Custom paper pattern drafted to individual measurements",
      "Pure cotton voile inner lining for breathable comfort",
      "Double interlocked side seam assembly with 2-inch margins",
      "Hand-finished hooks, piping, and neck contouring"
    ]
  },
  {
    "id": "embroidery-22",
    "sampleCode": "EM-122",
    "title": "Custom Embroidery Designs Sample #22",
    "category": "embroidery",
    "categoryLabel": "Custom Embroidery Designs",
    "fabric": "Silk Blend",
    "fabricBadge": "EMBROIDERY",
    "occasion": "Festive",
    "description": "Hand-crafted custom embroidery designs showcasing signature necklines, precision fit, and bespoke finish by Raaji Ladies Fashion.",
    "featureTag": "Custom Embroidery Designs",
    "imageUrl": "/images/emdroiadry designs/IMG-20260925-WA0028.jpg",
    "imagePlaceholderAlt": "Custom Embroidery Designs sample 22",
    "structuralHighlights": [
      "Custom paper pattern drafted to individual measurements",
      "Pure cotton voile inner lining for breathable comfort",
      "Double interlocked side seam assembly with 2-inch margins",
      "Hand-finished hooks, piping, and neck contouring"
    ]
  },
  {
    "id": "embroidery-23",
    "sampleCode": "EM-123",
    "title": "Custom Embroidery Designs Sample #23",
    "category": "embroidery",
    "categoryLabel": "Custom Embroidery Designs",
    "fabric": "Silk Blend",
    "fabricBadge": "EMBROIDERY",
    "occasion": "Festive",
    "description": "Hand-crafted custom embroidery designs showcasing signature necklines, precision fit, and bespoke finish by Raaji Ladies Fashion.",
    "featureTag": "Custom Embroidery Designs",
    "imageUrl": "/images/emdroiadry designs/IMG-20260925-WA0029.jpg",
    "imagePlaceholderAlt": "Custom Embroidery Designs sample 23",
    "structuralHighlights": [
      "Custom paper pattern drafted to individual measurements",
      "Pure cotton voile inner lining for breathable comfort",
      "Double interlocked side seam assembly with 2-inch margins",
      "Hand-finished hooks, piping, and neck contouring"
    ]
  },
  {
    "id": "embroidery-24",
    "sampleCode": "EM-124",
    "title": "Custom Embroidery Designs Sample #24",
    "category": "embroidery",
    "categoryLabel": "Custom Embroidery Designs",
    "fabric": "Silk Blend",
    "fabricBadge": "EMBROIDERY",
    "occasion": "Festive",
    "description": "Hand-crafted custom embroidery designs showcasing signature necklines, precision fit, and bespoke finish by Raaji Ladies Fashion.",
    "featureTag": "Custom Embroidery Designs",
    "imageUrl": "/images/emdroiadry designs/IMG-20260925-WA0030.jpg",
    "imagePlaceholderAlt": "Custom Embroidery Designs sample 24",
    "structuralHighlights": [
      "Custom paper pattern drafted to individual measurements",
      "Pure cotton voile inner lining for breathable comfort",
      "Double interlocked side seam assembly with 2-inch margins",
      "Hand-finished hooks, piping, and neck contouring"
    ]
  },
  {
    "id": "embroidery-25",
    "sampleCode": "EM-125",
    "title": "Custom Embroidery Designs Sample #25",
    "category": "embroidery",
    "categoryLabel": "Custom Embroidery Designs",
    "fabric": "Silk Blend",
    "fabricBadge": "EMBROIDERY",
    "occasion": "Festive",
    "description": "Hand-crafted custom embroidery designs showcasing signature necklines, precision fit, and bespoke finish by Raaji Ladies Fashion.",
    "featureTag": "Custom Embroidery Designs",
    "imageUrl": "/images/emdroiadry designs/IMG-20260925-WA0031.jpg",
    "imagePlaceholderAlt": "Custom Embroidery Designs sample 25",
    "structuralHighlights": [
      "Custom paper pattern drafted to individual measurements",
      "Pure cotton voile inner lining for breathable comfort",
      "Double interlocked side seam assembly with 2-inch margins",
      "Hand-finished hooks, piping, and neck contouring"
    ]
  },
  {
    "id": "embroidery-26",
    "sampleCode": "EM-126",
    "title": "Custom Embroidery Designs Sample #26",
    "category": "embroidery",
    "categoryLabel": "Custom Embroidery Designs",
    "fabric": "Silk Blend",
    "fabricBadge": "EMBROIDERY",
    "occasion": "Festive",
    "description": "Hand-crafted custom embroidery designs showcasing signature necklines, precision fit, and bespoke finish by Raaji Ladies Fashion.",
    "featureTag": "Custom Embroidery Designs",
    "imageUrl": "/images/emdroiadry designs/IMG-20260925-WA0032.jpg",
    "imagePlaceholderAlt": "Custom Embroidery Designs sample 26",
    "structuralHighlights": [
      "Custom paper pattern drafted to individual measurements",
      "Pure cotton voile inner lining for breathable comfort",
      "Double interlocked side seam assembly with 2-inch margins",
      "Hand-finished hooks, piping, and neck contouring"
    ]
  },
  {
    "id": "embroidery-27",
    "sampleCode": "EM-127",
    "title": "Custom Embroidery Designs Sample #27",
    "category": "embroidery",
    "categoryLabel": "Custom Embroidery Designs",
    "fabric": "Silk Blend",
    "fabricBadge": "EMBROIDERY",
    "occasion": "Festive",
    "description": "Hand-crafted custom embroidery designs showcasing signature necklines, precision fit, and bespoke finish by Raaji Ladies Fashion.",
    "featureTag": "Custom Embroidery Designs",
    "imageUrl": "/images/emdroiadry designs/IMG-20260925-WA0033.jpg",
    "imagePlaceholderAlt": "Custom Embroidery Designs sample 27",
    "structuralHighlights": [
      "Custom paper pattern drafted to individual measurements",
      "Pure cotton voile inner lining for breathable comfort",
      "Double interlocked side seam assembly with 2-inch margins",
      "Hand-finished hooks, piping, and neck contouring"
    ]
  },
  {
    "id": "embroidery-28",
    "sampleCode": "EM-128",
    "title": "Custom Embroidery Designs Sample #28",
    "category": "embroidery",
    "categoryLabel": "Custom Embroidery Designs",
    "fabric": "Silk Blend",
    "fabricBadge": "EMBROIDERY",
    "occasion": "Festive",
    "description": "Hand-crafted custom embroidery designs showcasing signature necklines, precision fit, and bespoke finish by Raaji Ladies Fashion.",
    "featureTag": "Custom Embroidery Designs",
    "imageUrl": "/images/emdroiadry designs/IMG-20260925-WA0034.jpg",
    "imagePlaceholderAlt": "Custom Embroidery Designs sample 28",
    "structuralHighlights": [
      "Custom paper pattern drafted to individual measurements",
      "Pure cotton voile inner lining for breathable comfort",
      "Double interlocked side seam assembly with 2-inch margins",
      "Hand-finished hooks, piping, and neck contouring"
    ]
  },
  {
    "id": "embroidery-29",
    "sampleCode": "EM-129",
    "title": "Custom Embroidery Designs Sample #29",
    "category": "embroidery",
    "categoryLabel": "Custom Embroidery Designs",
    "fabric": "Silk Blend",
    "fabricBadge": "EMBROIDERY",
    "occasion": "Festive",
    "description": "Hand-crafted custom embroidery designs showcasing signature necklines, precision fit, and bespoke finish by Raaji Ladies Fashion.",
    "featureTag": "Custom Embroidery Designs",
    "imageUrl": "/images/emdroiadry designs/IMG-20260925-WA0035.jpg",
    "imagePlaceholderAlt": "Custom Embroidery Designs sample 29",
    "structuralHighlights": [
      "Custom paper pattern drafted to individual measurements",
      "Pure cotton voile inner lining for breathable comfort",
      "Double interlocked side seam assembly with 2-inch margins",
      "Hand-finished hooks, piping, and neck contouring"
    ]
  },
  {
    "id": "embroidery-30",
    "sampleCode": "EM-130",
    "title": "Custom Embroidery Designs Sample #30",
    "category": "embroidery",
    "categoryLabel": "Custom Embroidery Designs",
    "fabric": "Silk Blend",
    "fabricBadge": "EMBROIDERY",
    "occasion": "Festive",
    "description": "Hand-crafted custom embroidery designs showcasing signature necklines, precision fit, and bespoke finish by Raaji Ladies Fashion.",
    "featureTag": "Custom Embroidery Designs",
    "imageUrl": "/images/emdroiadry designs/IMG-20260925-WA0036.jpg",
    "imagePlaceholderAlt": "Custom Embroidery Designs sample 30",
    "structuralHighlights": [
      "Custom paper pattern drafted to individual measurements",
      "Pure cotton voile inner lining for breathable comfort",
      "Double interlocked side seam assembly with 2-inch margins",
      "Hand-finished hooks, piping, and neck contouring"
    ]
  },
  {
    "id": "embroidery-31",
    "sampleCode": "EM-131",
    "title": "Custom Embroidery Designs Sample #31",
    "category": "embroidery",
    "categoryLabel": "Custom Embroidery Designs",
    "fabric": "Silk Blend",
    "fabricBadge": "EMBROIDERY",
    "occasion": "Festive",
    "description": "Hand-crafted custom embroidery designs showcasing signature necklines, precision fit, and bespoke finish by Raaji Ladies Fashion.",
    "featureTag": "Custom Embroidery Designs",
    "imageUrl": "/images/emdroiadry designs/IMG-20260925-WA0037.jpg",
    "imagePlaceholderAlt": "Custom Embroidery Designs sample 31",
    "structuralHighlights": [
      "Custom paper pattern drafted to individual measurements",
      "Pure cotton voile inner lining for breathable comfort",
      "Double interlocked side seam assembly with 2-inch margins",
      "Hand-finished hooks, piping, and neck contouring"
    ]
  },
  {
    "id": "embroidery-32",
    "sampleCode": "EM-132",
    "title": "Custom Embroidery Designs Sample #32",
    "category": "embroidery",
    "categoryLabel": "Custom Embroidery Designs",
    "fabric": "Silk Blend",
    "fabricBadge": "EMBROIDERY",
    "occasion": "Festive",
    "description": "Hand-crafted custom embroidery designs showcasing signature necklines, precision fit, and bespoke finish by Raaji Ladies Fashion.",
    "featureTag": "Custom Embroidery Designs",
    "imageUrl": "/images/emdroiadry designs/IMG-20260925-WA0038.jpg",
    "imagePlaceholderAlt": "Custom Embroidery Designs sample 32",
    "structuralHighlights": [
      "Custom paper pattern drafted to individual measurements",
      "Pure cotton voile inner lining for breathable comfort",
      "Double interlocked side seam assembly with 2-inch margins",
      "Hand-finished hooks, piping, and neck contouring"
    ]
  },
  {
    "id": "embroidery-33",
    "sampleCode": "EM-133",
    "title": "Custom Embroidery Designs Sample #33",
    "category": "embroidery",
    "categoryLabel": "Custom Embroidery Designs",
    "fabric": "Silk Blend",
    "fabricBadge": "EMBROIDERY",
    "occasion": "Festive",
    "description": "Hand-crafted custom embroidery designs showcasing signature necklines, precision fit, and bespoke finish by Raaji Ladies Fashion.",
    "featureTag": "Custom Embroidery Designs",
    "imageUrl": "/images/emdroiadry designs/IMG-20260925-WA0039.jpg",
    "imagePlaceholderAlt": "Custom Embroidery Designs sample 33",
    "structuralHighlights": [
      "Custom paper pattern drafted to individual measurements",
      "Pure cotton voile inner lining for breathable comfort",
      "Double interlocked side seam assembly with 2-inch margins",
      "Hand-finished hooks, piping, and neck contouring"
    ]
  },
  {
    "id": "embroidery-34",
    "sampleCode": "EM-134",
    "title": "Custom Embroidery Designs Sample #34",
    "category": "embroidery",
    "categoryLabel": "Custom Embroidery Designs",
    "fabric": "Silk Blend",
    "fabricBadge": "EMBROIDERY",
    "occasion": "Festive",
    "description": "Hand-crafted custom embroidery designs showcasing signature necklines, precision fit, and bespoke finish by Raaji Ladies Fashion.",
    "featureTag": "Custom Embroidery Designs",
    "imageUrl": "/images/emdroiadry designs/IMG-20260925-WA0040.jpg",
    "imagePlaceholderAlt": "Custom Embroidery Designs sample 34",
    "structuralHighlights": [
      "Custom paper pattern drafted to individual measurements",
      "Pure cotton voile inner lining for breathable comfort",
      "Double interlocked side seam assembly with 2-inch margins",
      "Hand-finished hooks, piping, and neck contouring"
    ]
  },
  {
    "id": "embroidery-35",
    "sampleCode": "EM-135",
    "title": "Custom Embroidery Designs Sample #35",
    "category": "embroidery",
    "categoryLabel": "Custom Embroidery Designs",
    "fabric": "Silk Blend",
    "fabricBadge": "EMBROIDERY",
    "occasion": "Festive",
    "description": "Hand-crafted custom embroidery designs showcasing signature necklines, precision fit, and bespoke finish by Raaji Ladies Fashion.",
    "featureTag": "Custom Embroidery Designs",
    "imageUrl": "/images/emdroiadry designs/IMG-20260925-WA0041.jpg",
    "imagePlaceholderAlt": "Custom Embroidery Designs sample 35",
    "structuralHighlights": [
      "Custom paper pattern drafted to individual measurements",
      "Pure cotton voile inner lining for breathable comfort",
      "Double interlocked side seam assembly with 2-inch margins",
      "Hand-finished hooks, piping, and neck contouring"
    ]
  },
  {
    "id": "embroidery-36",
    "sampleCode": "EM-136",
    "title": "Custom Embroidery Designs Sample #36",
    "category": "embroidery",
    "categoryLabel": "Custom Embroidery Designs",
    "fabric": "Silk Blend",
    "fabricBadge": "EMBROIDERY",
    "occasion": "Festive",
    "description": "Hand-crafted custom embroidery designs showcasing signature necklines, precision fit, and bespoke finish by Raaji Ladies Fashion.",
    "featureTag": "Custom Embroidery Designs",
    "imageUrl": "/images/emdroiadry designs/IMG-20260925-WA0042.jpg",
    "imagePlaceholderAlt": "Custom Embroidery Designs sample 36",
    "structuralHighlights": [
      "Custom paper pattern drafted to individual measurements",
      "Pure cotton voile inner lining for breathable comfort",
      "Double interlocked side seam assembly with 2-inch margins",
      "Hand-finished hooks, piping, and neck contouring"
    ]
  },
  {
    "id": "embroidery-37",
    "sampleCode": "EM-137",
    "title": "Custom Embroidery Designs Sample #37",
    "category": "embroidery",
    "categoryLabel": "Custom Embroidery Designs",
    "fabric": "Silk Blend",
    "fabricBadge": "EMBROIDERY",
    "occasion": "Festive",
    "description": "Hand-crafted custom embroidery designs showcasing signature necklines, precision fit, and bespoke finish by Raaji Ladies Fashion.",
    "featureTag": "Custom Embroidery Designs",
    "imageUrl": "/images/emdroiadry designs/IMG-20260925-WA0043.jpg",
    "imagePlaceholderAlt": "Custom Embroidery Designs sample 37",
    "structuralHighlights": [
      "Custom paper pattern drafted to individual measurements",
      "Pure cotton voile inner lining for breathable comfort",
      "Double interlocked side seam assembly with 2-inch margins",
      "Hand-finished hooks, piping, and neck contouring"
    ]
  },
  {
    "id": "embroidery-38",
    "sampleCode": "EM-138",
    "title": "Custom Embroidery Designs Sample #38",
    "category": "embroidery",
    "categoryLabel": "Custom Embroidery Designs",
    "fabric": "Silk Blend",
    "fabricBadge": "EMBROIDERY",
    "occasion": "Festive",
    "description": "Hand-crafted custom embroidery designs showcasing signature necklines, precision fit, and bespoke finish by Raaji Ladies Fashion.",
    "featureTag": "Custom Embroidery Designs",
    "imageUrl": "/images/emdroiadry designs/IMG-20260925-WA0044.jpg",
    "imagePlaceholderAlt": "Custom Embroidery Designs sample 38",
    "structuralHighlights": [
      "Custom paper pattern drafted to individual measurements",
      "Pure cotton voile inner lining for breathable comfort",
      "Double interlocked side seam assembly with 2-inch margins",
      "Hand-finished hooks, piping, and neck contouring"
    ]
  },
  {
    "id": "embroidery-39",
    "sampleCode": "EM-139",
    "title": "Custom Embroidery Designs Sample #39",
    "category": "embroidery",
    "categoryLabel": "Custom Embroidery Designs",
    "fabric": "Silk Blend",
    "fabricBadge": "EMBROIDERY",
    "occasion": "Festive",
    "description": "Hand-crafted custom embroidery designs showcasing signature necklines, precision fit, and bespoke finish by Raaji Ladies Fashion.",
    "featureTag": "Custom Embroidery Designs",
    "imageUrl": "/images/emdroiadry designs/IMG-20260925-WA0045.jpg",
    "imagePlaceholderAlt": "Custom Embroidery Designs sample 39",
    "structuralHighlights": [
      "Custom paper pattern drafted to individual measurements",
      "Pure cotton voile inner lining for breathable comfort",
      "Double interlocked side seam assembly with 2-inch margins",
      "Hand-finished hooks, piping, and neck contouring"
    ]
  },
  {
    "id": "embroidery-40",
    "sampleCode": "EM-140",
    "title": "Custom Embroidery Designs Sample #40",
    "category": "embroidery",
    "categoryLabel": "Custom Embroidery Designs",
    "fabric": "Silk Blend",
    "fabricBadge": "EMBROIDERY",
    "occasion": "Festive",
    "description": "Hand-crafted custom embroidery designs showcasing signature necklines, precision fit, and bespoke finish by Raaji Ladies Fashion.",
    "featureTag": "Custom Embroidery Designs",
    "imageUrl": "/images/emdroiadry designs/IMG-20260925-WA0046.jpg",
    "imagePlaceholderAlt": "Custom Embroidery Designs sample 40",
    "structuralHighlights": [
      "Custom paper pattern drafted to individual measurements",
      "Pure cotton voile inner lining for breathable comfort",
      "Double interlocked side seam assembly with 2-inch margins",
      "Hand-finished hooks, piping, and neck contouring"
    ]
  },
  {
    "id": "embroidery-41",
    "sampleCode": "EM-141",
    "title": "Custom Embroidery Designs Sample #41",
    "category": "embroidery",
    "categoryLabel": "Custom Embroidery Designs",
    "fabric": "Silk Blend",
    "fabricBadge": "EMBROIDERY",
    "occasion": "Festive",
    "description": "Hand-crafted custom embroidery designs showcasing signature necklines, precision fit, and bespoke finish by Raaji Ladies Fashion.",
    "featureTag": "Custom Embroidery Designs",
    "imageUrl": "/images/emdroiadry designs/IMG-20260925-WA0047.jpg",
    "imagePlaceholderAlt": "Custom Embroidery Designs sample 41",
    "structuralHighlights": [
      "Custom paper pattern drafted to individual measurements",
      "Pure cotton voile inner lining for breathable comfort",
      "Double interlocked side seam assembly with 2-inch margins",
      "Hand-finished hooks, piping, and neck contouring"
    ]
  },
  {
    "id": "embroidery-42",
    "sampleCode": "EM-142",
    "title": "Custom Embroidery Designs Sample #42",
    "category": "embroidery",
    "categoryLabel": "Custom Embroidery Designs",
    "fabric": "Silk Blend",
    "fabricBadge": "EMBROIDERY",
    "occasion": "Festive",
    "description": "Hand-crafted custom embroidery designs showcasing signature necklines, precision fit, and bespoke finish by Raaji Ladies Fashion.",
    "featureTag": "Custom Embroidery Designs",
    "imageUrl": "/images/emdroiadry designs/IMG-20260925-WA0048.jpg",
    "imagePlaceholderAlt": "Custom Embroidery Designs sample 42",
    "structuralHighlights": [
      "Custom paper pattern drafted to individual measurements",
      "Pure cotton voile inner lining for breathable comfort",
      "Double interlocked side seam assembly with 2-inch margins",
      "Hand-finished hooks, piping, and neck contouring"
    ]
  },
  {
    "id": "embroidery-43",
    "sampleCode": "EM-143",
    "title": "Custom Embroidery Designs Sample #43",
    "category": "embroidery",
    "categoryLabel": "Custom Embroidery Designs",
    "fabric": "Silk Blend",
    "fabricBadge": "EMBROIDERY",
    "occasion": "Festive",
    "description": "Hand-crafted custom embroidery designs showcasing signature necklines, precision fit, and bespoke finish by Raaji Ladies Fashion.",
    "featureTag": "Custom Embroidery Designs",
    "imageUrl": "/images/emdroiadry designs/IMG-20260925-WA0049.jpg",
    "imagePlaceholderAlt": "Custom Embroidery Designs sample 43",
    "structuralHighlights": [
      "Custom paper pattern drafted to individual measurements",
      "Pure cotton voile inner lining for breathable comfort",
      "Double interlocked side seam assembly with 2-inch margins",
      "Hand-finished hooks, piping, and neck contouring"
    ]
  },
  {
    "id": "embroidery-44",
    "sampleCode": "EM-144",
    "title": "Custom Embroidery Designs Sample #44",
    "category": "embroidery",
    "categoryLabel": "Custom Embroidery Designs",
    "fabric": "Silk Blend",
    "fabricBadge": "EMBROIDERY",
    "occasion": "Festive",
    "description": "Hand-crafted custom embroidery designs showcasing signature necklines, precision fit, and bespoke finish by Raaji Ladies Fashion.",
    "featureTag": "Custom Embroidery Designs",
    "imageUrl": "/images/emdroiadry designs/IMG-20260925-WA0050.jpg",
    "imagePlaceholderAlt": "Custom Embroidery Designs sample 44",
    "structuralHighlights": [
      "Custom paper pattern drafted to individual measurements",
      "Pure cotton voile inner lining for breathable comfort",
      "Double interlocked side seam assembly with 2-inch margins",
      "Hand-finished hooks, piping, and neck contouring"
    ]
  },
  {
    "id": "embroidery-45",
    "sampleCode": "EM-145",
    "title": "Custom Embroidery Designs Sample #45",
    "category": "embroidery",
    "categoryLabel": "Custom Embroidery Designs",
    "fabric": "Silk Blend",
    "fabricBadge": "EMBROIDERY",
    "occasion": "Festive",
    "description": "Hand-crafted custom embroidery designs showcasing signature necklines, precision fit, and bespoke finish by Raaji Ladies Fashion.",
    "featureTag": "Custom Embroidery Designs",
    "imageUrl": "/images/emdroiadry designs/IMG-20260925-WA0051.jpg",
    "imagePlaceholderAlt": "Custom Embroidery Designs sample 45",
    "structuralHighlights": [
      "Custom paper pattern drafted to individual measurements",
      "Pure cotton voile inner lining for breathable comfort",
      "Double interlocked side seam assembly with 2-inch margins",
      "Hand-finished hooks, piping, and neck contouring"
    ]
  },
  {
    "id": "embroidery-46",
    "sampleCode": "EM-146",
    "title": "Custom Embroidery Designs Sample #46",
    "category": "embroidery",
    "categoryLabel": "Custom Embroidery Designs",
    "fabric": "Silk Blend",
    "fabricBadge": "EMBROIDERY",
    "occasion": "Festive",
    "description": "Hand-crafted custom embroidery designs showcasing signature necklines, precision fit, and bespoke finish by Raaji Ladies Fashion.",
    "featureTag": "Custom Embroidery Designs",
    "imageUrl": "/images/emdroiadry designs/IMG-20260925-WA0052.jpg",
    "imagePlaceholderAlt": "Custom Embroidery Designs sample 46",
    "structuralHighlights": [
      "Custom paper pattern drafted to individual measurements",
      "Pure cotton voile inner lining for breathable comfort",
      "Double interlocked side seam assembly with 2-inch margins",
      "Hand-finished hooks, piping, and neck contouring"
    ]
  },
  {
    "id": "embroidery-47",
    "sampleCode": "EM-147",
    "title": "Custom Embroidery Designs Sample #47",
    "category": "embroidery",
    "categoryLabel": "Custom Embroidery Designs",
    "fabric": "Silk Blend",
    "fabricBadge": "EMBROIDERY",
    "occasion": "Festive",
    "description": "Hand-crafted custom embroidery designs showcasing signature necklines, precision fit, and bespoke finish by Raaji Ladies Fashion.",
    "featureTag": "Custom Embroidery Designs",
    "imageUrl": "/images/emdroiadry designs/IMG-20260925-WA0053.jpg",
    "imagePlaceholderAlt": "Custom Embroidery Designs sample 47",
    "structuralHighlights": [
      "Custom paper pattern drafted to individual measurements",
      "Pure cotton voile inner lining for breathable comfort",
      "Double interlocked side seam assembly with 2-inch margins",
      "Hand-finished hooks, piping, and neck contouring"
    ]
  },
  {
    "id": "embroidery-48",
    "sampleCode": "EM-148",
    "title": "Custom Embroidery Designs Sample #48",
    "category": "embroidery",
    "categoryLabel": "Custom Embroidery Designs",
    "fabric": "Silk Blend",
    "fabricBadge": "EMBROIDERY",
    "occasion": "Festive",
    "description": "Hand-crafted custom embroidery designs showcasing signature necklines, precision fit, and bespoke finish by Raaji Ladies Fashion.",
    "featureTag": "Custom Embroidery Designs",
    "imageUrl": "/images/emdroiadry designs/IMG-20260925-WA0054.jpg",
    "imagePlaceholderAlt": "Custom Embroidery Designs sample 48",
    "structuralHighlights": [
      "Custom paper pattern drafted to individual measurements",
      "Pure cotton voile inner lining for breathable comfort",
      "Double interlocked side seam assembly with 2-inch margins",
      "Hand-finished hooks, piping, and neck contouring"
    ]
  },
  {
    "id": "embroidery-49",
    "sampleCode": "EM-149",
    "title": "Custom Embroidery Designs Sample #49",
    "category": "embroidery",
    "categoryLabel": "Custom Embroidery Designs",
    "fabric": "Silk Blend",
    "fabricBadge": "EMBROIDERY",
    "occasion": "Festive",
    "description": "Hand-crafted custom embroidery designs showcasing signature necklines, precision fit, and bespoke finish by Raaji Ladies Fashion.",
    "featureTag": "Custom Embroidery Designs",
    "imageUrl": "/images/emdroiadry designs/IMG-20260925-WA0055.jpg",
    "imagePlaceholderAlt": "Custom Embroidery Designs sample 49",
    "structuralHighlights": [
      "Custom paper pattern drafted to individual measurements",
      "Pure cotton voile inner lining for breathable comfort",
      "Double interlocked side seam assembly with 2-inch margins",
      "Hand-finished hooks, piping, and neck contouring"
    ]
  },
  {
    "id": "embroidery-50",
    "sampleCode": "EM-150",
    "title": "Custom Embroidery Designs Sample #50",
    "category": "embroidery",
    "categoryLabel": "Custom Embroidery Designs",
    "fabric": "Silk Blend",
    "fabricBadge": "EMBROIDERY",
    "occasion": "Festive",
    "description": "Hand-crafted custom embroidery designs showcasing signature necklines, precision fit, and bespoke finish by Raaji Ladies Fashion.",
    "featureTag": "Custom Embroidery Designs",
    "imageUrl": "/images/emdroiadry designs/IMG-20260925-WA0060.jpg",
    "imagePlaceholderAlt": "Custom Embroidery Designs sample 50",
    "structuralHighlights": [
      "Custom paper pattern drafted to individual measurements",
      "Pure cotton voile inner lining for breathable comfort",
      "Double interlocked side seam assembly with 2-inch margins",
      "Hand-finished hooks, piping, and neck contouring"
    ]
  },
  {
    "id": "embroidery-51",
    "sampleCode": "EM-151",
    "title": "Custom Embroidery Designs Sample #51",
    "category": "embroidery",
    "categoryLabel": "Custom Embroidery Designs",
    "fabric": "Silk Blend",
    "fabricBadge": "EMBROIDERY",
    "occasion": "Festive",
    "description": "Hand-crafted custom embroidery designs showcasing signature necklines, precision fit, and bespoke finish by Raaji Ladies Fashion.",
    "featureTag": "Custom Embroidery Designs",
    "imageUrl": "/images/emdroiadry designs/IMG-20260925-WA0083.jpg",
    "imagePlaceholderAlt": "Custom Embroidery Designs sample 51",
    "structuralHighlights": [
      "Custom paper pattern drafted to individual measurements",
      "Pure cotton voile inner lining for breathable comfort",
      "Double interlocked side seam assembly with 2-inch margins",
      "Hand-finished hooks, piping, and neck contouring"
    ]
  },
  {
    "id": "embroidery-52",
    "sampleCode": "EM-152",
    "title": "Custom Embroidery Designs Sample #52",
    "category": "embroidery",
    "categoryLabel": "Custom Embroidery Designs",
    "fabric": "Silk Blend",
    "fabricBadge": "EMBROIDERY",
    "occasion": "Festive",
    "description": "Hand-crafted custom embroidery designs showcasing signature necklines, precision fit, and bespoke finish by Raaji Ladies Fashion.",
    "featureTag": "Custom Embroidery Designs",
    "imageUrl": "/images/emdroiadry designs/IMG-20260925-WA0089.jpg",
    "imagePlaceholderAlt": "Custom Embroidery Designs sample 52",
    "structuralHighlights": [
      "Custom paper pattern drafted to individual measurements",
      "Pure cotton voile inner lining for breathable comfort",
      "Double interlocked side seam assembly with 2-inch margins",
      "Hand-finished hooks, piping, and neck contouring"
    ]
  },
  {
    "id": "embroidery-53",
    "sampleCode": "EM-153",
    "title": "Custom Embroidery Designs Sample #53",
    "category": "embroidery",
    "categoryLabel": "Custom Embroidery Designs",
    "fabric": "Silk Blend",
    "fabricBadge": "EMBROIDERY",
    "occasion": "Festive",
    "description": "Hand-crafted custom embroidery designs showcasing signature necklines, precision fit, and bespoke finish by Raaji Ladies Fashion.",
    "featureTag": "Custom Embroidery Designs",
    "imageUrl": "/images/emdroiadry designs/IMG-20260925-WA0091.jpg",
    "imagePlaceholderAlt": "Custom Embroidery Designs sample 53",
    "structuralHighlights": [
      "Custom paper pattern drafted to individual measurements",
      "Pure cotton voile inner lining for breathable comfort",
      "Double interlocked side seam assembly with 2-inch margins",
      "Hand-finished hooks, piping, and neck contouring"
    ]
  },
  {
    "id": "embroidery-54",
    "sampleCode": "EM-154",
    "title": "Custom Embroidery Designs Sample #54",
    "category": "embroidery",
    "categoryLabel": "Custom Embroidery Designs",
    "fabric": "Silk Blend",
    "fabricBadge": "EMBROIDERY",
    "occasion": "Festive",
    "description": "Hand-crafted custom embroidery designs showcasing signature necklines, precision fit, and bespoke finish by Raaji Ladies Fashion.",
    "featureTag": "Custom Embroidery Designs",
    "imageUrl": "/images/emdroiadry designs/IMG-20260925-WA0093.jpg",
    "imagePlaceholderAlt": "Custom Embroidery Designs sample 54",
    "structuralHighlights": [
      "Custom paper pattern drafted to individual measurements",
      "Pure cotton voile inner lining for breathable comfort",
      "Double interlocked side seam assembly with 2-inch margins",
      "Hand-finished hooks, piping, and neck contouring"
    ]
  },
  {
    "id": "embroidery-55",
    "sampleCode": "EM-155",
    "title": "Custom Embroidery Designs Sample #55",
    "category": "embroidery",
    "categoryLabel": "Custom Embroidery Designs",
    "fabric": "Silk Blend",
    "fabricBadge": "EMBROIDERY",
    "occasion": "Festive",
    "description": "Hand-crafted custom embroidery designs showcasing signature necklines, precision fit, and bespoke finish by Raaji Ladies Fashion.",
    "featureTag": "Custom Embroidery Designs",
    "imageUrl": "/images/emdroiadry designs/IMG-20260925-WA0127.jpg",
    "imagePlaceholderAlt": "Custom Embroidery Designs sample 55",
    "structuralHighlights": [
      "Custom paper pattern drafted to individual measurements",
      "Pure cotton voile inner lining for breathable comfort",
      "Double interlocked side seam assembly with 2-inch margins",
      "Hand-finished hooks, piping, and neck contouring"
    ]
  },
  {
    "id": "embroidery-56",
    "sampleCode": "EM-156",
    "title": "Custom Embroidery Designs Sample #56",
    "category": "embroidery",
    "categoryLabel": "Custom Embroidery Designs",
    "fabric": "Silk Blend",
    "fabricBadge": "EMBROIDERY",
    "occasion": "Festive",
    "description": "Hand-crafted custom embroidery designs showcasing signature necklines, precision fit, and bespoke finish by Raaji Ladies Fashion.",
    "featureTag": "Custom Embroidery Designs",
    "imageUrl": "/images/emdroiadry designs/IMG20200929202254.jpg",
    "imagePlaceholderAlt": "Custom Embroidery Designs sample 56",
    "structuralHighlights": [
      "Custom paper pattern drafted to individual measurements",
      "Pure cotton voile inner lining for breathable comfort",
      "Double interlocked side seam assembly with 2-inch margins",
      "Hand-finished hooks, piping, and neck contouring"
    ]
  },
  {
    "id": "embroidery-57",
    "sampleCode": "EM-157",
    "title": "Custom Embroidery Designs Sample #57",
    "category": "embroidery",
    "categoryLabel": "Custom Embroidery Designs",
    "fabric": "Silk Blend",
    "fabricBadge": "EMBROIDERY",
    "occasion": "Festive",
    "description": "Hand-crafted custom embroidery designs showcasing signature necklines, precision fit, and bespoke finish by Raaji Ladies Fashion.",
    "featureTag": "Custom Embroidery Designs",
    "imageUrl": "/images/emdroiadry designs/IMG20201205174819.jpg",
    "imagePlaceholderAlt": "Custom Embroidery Designs sample 57",
    "structuralHighlights": [
      "Custom paper pattern drafted to individual measurements",
      "Pure cotton voile inner lining for breathable comfort",
      "Double interlocked side seam assembly with 2-inch margins",
      "Hand-finished hooks, piping, and neck contouring"
    ]
  },
  {
    "id": "embroidery-58",
    "sampleCode": "EM-158",
    "title": "Custom Embroidery Designs Sample #58",
    "category": "embroidery",
    "categoryLabel": "Custom Embroidery Designs",
    "fabric": "Silk Blend",
    "fabricBadge": "EMBROIDERY",
    "occasion": "Festive",
    "description": "Hand-crafted custom embroidery designs showcasing signature necklines, precision fit, and bespoke finish by Raaji Ladies Fashion.",
    "featureTag": "Custom Embroidery Designs",
    "imageUrl": "/images/emdroiadry designs/IMG20201223184023.jpg",
    "imagePlaceholderAlt": "Custom Embroidery Designs sample 58",
    "structuralHighlights": [
      "Custom paper pattern drafted to individual measurements",
      "Pure cotton voile inner lining for breathable comfort",
      "Double interlocked side seam assembly with 2-inch margins",
      "Hand-finished hooks, piping, and neck contouring"
    ]
  },
  {
    "id": "embroidery-59",
    "sampleCode": "EM-159",
    "title": "Custom Embroidery Designs Sample #59",
    "category": "embroidery",
    "categoryLabel": "Custom Embroidery Designs",
    "fabric": "Silk Blend",
    "fabricBadge": "EMBROIDERY",
    "occasion": "Festive",
    "description": "Hand-crafted custom embroidery designs showcasing signature necklines, precision fit, and bespoke finish by Raaji Ladies Fashion.",
    "featureTag": "Custom Embroidery Designs",
    "imageUrl": "/images/emdroiadry designs/IMG20201223184051.jpg",
    "imagePlaceholderAlt": "Custom Embroidery Designs sample 59",
    "structuralHighlights": [
      "Custom paper pattern drafted to individual measurements",
      "Pure cotton voile inner lining for breathable comfort",
      "Double interlocked side seam assembly with 2-inch margins",
      "Hand-finished hooks, piping, and neck contouring"
    ]
  },
  {
    "id": "scallop-1",
    "sampleCode": "SC-101",
    "title": "Scallop & Cutwork Blouses Sample #1",
    "category": "scallop",
    "categoryLabel": "Scallop & Cutwork Blouses",
    "fabric": "Organza",
    "fabricBadge": "CUTWORK",
    "occasion": "Contemporary",
    "description": "Hand-crafted scallop & cutwork blouses showcasing signature necklines, precision fit, and bespoke finish by Raaji Ladies Fashion.",
    "featureTag": "Scallop & Cutwork Blouses",
    "imageUrl": "/images/scalab/IMG-20260819-WA0014.jpg",
    "imagePlaceholderAlt": "Scallop & Cutwork Blouses sample 1",
    "structuralHighlights": [
      "Custom paper pattern drafted to individual measurements",
      "Pure cotton voile inner lining for breathable comfort",
      "Double interlocked side seam assembly with 2-inch margins",
      "Hand-finished hooks, piping, and neck contouring"
    ]
  },
  {
    "id": "designer-blouses-1",
    "sampleCode": "TB-101",
    "title": "Designer Tops & Blouses Sample #1",
    "category": "designer-blouses",
    "categoryLabel": "Designer Tops & Blouses",
    "fabric": "Cotton",
    "fabricBadge": "DESIGNER BLOUSE",
    "occasion": "Festive",
    "description": "Hand-crafted designer tops & blouses showcasing signature necklines, precision fit, and bespoke finish by Raaji Ladies Fashion.",
    "featureTag": "Designer Tops & Blouses",
    "imageUrl": "/images/top blouse/538dc319df3726c2638939851010cae0.jpg",
    "imagePlaceholderAlt": "Designer Tops & Blouses sample 1",
    "structuralHighlights": [
      "Custom paper pattern drafted to individual measurements",
      "Pure cotton voile inner lining for breathable comfort",
      "Double interlocked side seam assembly with 2-inch margins",
      "Hand-finished hooks, piping, and neck contouring"
    ]
  },
  {
    "id": "designer-blouses-2",
    "sampleCode": "TB-102",
    "title": "Designer Tops & Blouses Sample #2",
    "category": "designer-blouses",
    "categoryLabel": "Designer Tops & Blouses",
    "fabric": "Cotton",
    "fabricBadge": "DESIGNER BLOUSE",
    "occasion": "Festive",
    "description": "Hand-crafted designer tops & blouses showcasing signature necklines, precision fit, and bespoke finish by Raaji Ladies Fashion.",
    "featureTag": "Designer Tops & Blouses",
    "imageUrl": "/images/categories/designer-blouse.jpg",
    "imagePlaceholderAlt": "Designer Tops & Blouses sample 2",
    "structuralHighlights": [
      "Custom paper pattern drafted to individual measurements",
      "Pure cotton voile inner lining for breathable comfort",
      "Double interlocked side seam assembly with 2-inch margins",
      "Hand-finished hooks, piping, and neck contouring"
    ]
  },
  {
    "id": "designer-blouses-3",
    "sampleCode": "TB-103",
    "title": "Designer Tops & Blouses Sample #3",
    "category": "designer-blouses",
    "categoryLabel": "Designer Tops & Blouses",
    "fabric": "Cotton",
    "fabricBadge": "DESIGNER BLOUSE",
    "occasion": "Festive",
    "description": "Hand-crafted designer tops & blouses showcasing signature necklines, precision fit, and bespoke finish by Raaji Ladies Fashion.",
    "featureTag": "Designer Tops & Blouses",
    "imageUrl": "/images/top blouse/96f879541a930b81063f4a813c73492f.jpg",
    "imagePlaceholderAlt": "Designer Tops & Blouses sample 3",
    "structuralHighlights": [
      "Custom paper pattern drafted to individual measurements",
      "Pure cotton voile inner lining for breathable comfort",
      "Double interlocked side seam assembly with 2-inch margins",
      "Hand-finished hooks, piping, and neck contouring"
    ]
  },
  {
    "id": "designer-blouses-4",
    "sampleCode": "TB-104",
    "title": "Designer Tops & Blouses Sample #4",
    "category": "designer-blouses",
    "categoryLabel": "Designer Tops & Blouses",
    "fabric": "Cotton",
    "fabricBadge": "DESIGNER BLOUSE",
    "occasion": "Festive",
    "description": "Hand-crafted designer tops & blouses showcasing signature necklines, precision fit, and bespoke finish by Raaji Ladies Fashion.",
    "featureTag": "Designer Tops & Blouses",
    "imageUrl": "/images/top blouse/9d73fd4f2a4dac16c6ecb9bccee35276.jpg",
    "imagePlaceholderAlt": "Designer Tops & Blouses sample 4",
    "structuralHighlights": [
      "Custom paper pattern drafted to individual measurements",
      "Pure cotton voile inner lining for breathable comfort",
      "Double interlocked side seam assembly with 2-inch margins",
      "Hand-finished hooks, piping, and neck contouring"
    ]
  },
  {
    "id": "designer-blouses-5",
    "sampleCode": "TB-105",
    "title": "Designer Tops & Blouses Sample #5",
    "category": "designer-blouses",
    "categoryLabel": "Designer Tops & Blouses",
    "fabric": "Cotton",
    "fabricBadge": "DESIGNER BLOUSE",
    "occasion": "Festive",
    "description": "Hand-crafted designer tops & blouses showcasing signature necklines, precision fit, and bespoke finish by Raaji Ladies Fashion.",
    "featureTag": "Designer Tops & Blouses",
    "imageUrl": "/images/top blouse/ebd776fbfd1039955287481b2a246fec.jpg",
    "imagePlaceholderAlt": "Designer Tops & Blouses sample 5",
    "structuralHighlights": [
      "Custom paper pattern drafted to individual measurements",
      "Pure cotton voile inner lining for breathable comfort",
      "Double interlocked side seam assembly with 2-inch margins",
      "Hand-finished hooks, piping, and neck contouring"
    ]
  },
  {
    "id": "designer-blouses-6",
    "sampleCode": "TB-106",
    "title": "Designer Tops & Blouses Sample #6",
    "category": "designer-blouses",
    "categoryLabel": "Designer Tops & Blouses",
    "fabric": "Cotton",
    "fabricBadge": "DESIGNER BLOUSE",
    "occasion": "Festive",
    "description": "Hand-crafted designer tops & blouses showcasing signature necklines, precision fit, and bespoke finish by Raaji Ladies Fashion.",
    "featureTag": "Designer Tops & Blouses",
    "imageUrl": "/images/top blouse/IMG-20210416-WA0017.jpg",
    "imagePlaceholderAlt": "Designer Tops & Blouses sample 6",
    "structuralHighlights": [
      "Custom paper pattern drafted to individual measurements",
      "Pure cotton voile inner lining for breathable comfort",
      "Double interlocked side seam assembly with 2-inch margins",
      "Hand-finished hooks, piping, and neck contouring"
    ]
  },
  {
    "id": "designer-blouses-7",
    "sampleCode": "TB-107",
    "title": "Designer Tops & Blouses Sample #7",
    "category": "designer-blouses",
    "categoryLabel": "Designer Tops & Blouses",
    "fabric": "Cotton",
    "fabricBadge": "DESIGNER BLOUSE",
    "occasion": "Festive",
    "description": "Hand-crafted designer tops & blouses showcasing signature necklines, precision fit, and bespoke finish by Raaji Ladies Fashion.",
    "featureTag": "Designer Tops & Blouses",
    "imageUrl": "/images/top blouse/IMG-20210416-WA0018.jpg",
    "imagePlaceholderAlt": "Designer Tops & Blouses sample 7",
    "structuralHighlights": [
      "Custom paper pattern drafted to individual measurements",
      "Pure cotton voile inner lining for breathable comfort",
      "Double interlocked side seam assembly with 2-inch margins",
      "Hand-finished hooks, piping, and neck contouring"
    ]
  },
  {
    "id": "designer-blouses-8",
    "sampleCode": "TB-108",
    "title": "Designer Tops & Blouses Sample #8",
    "category": "designer-blouses",
    "categoryLabel": "Designer Tops & Blouses",
    "fabric": "Cotton",
    "fabricBadge": "DESIGNER BLOUSE",
    "occasion": "Festive",
    "description": "Hand-crafted designer tops & blouses showcasing signature necklines, precision fit, and bespoke finish by Raaji Ladies Fashion.",
    "featureTag": "Designer Tops & Blouses",
    "imageUrl": "/images/top blouse/IMG-20210416-WA0019.jpg",
    "imagePlaceholderAlt": "Designer Tops & Blouses sample 8",
    "structuralHighlights": [
      "Custom paper pattern drafted to individual measurements",
      "Pure cotton voile inner lining for breathable comfort",
      "Double interlocked side seam assembly with 2-inch margins",
      "Hand-finished hooks, piping, and neck contouring"
    ]
  },
  {
    "id": "designer-blouses-9",
    "sampleCode": "TB-109",
    "title": "Designer Tops & Blouses Sample #9",
    "category": "designer-blouses",
    "categoryLabel": "Designer Tops & Blouses",
    "fabric": "Cotton",
    "fabricBadge": "DESIGNER BLOUSE",
    "occasion": "Festive",
    "description": "Hand-crafted designer tops & blouses showcasing signature necklines, precision fit, and bespoke finish by Raaji Ladies Fashion.",
    "featureTag": "Designer Tops & Blouses",
    "imageUrl": "/images/top blouse/IMG-20210417-WA0024.jpg",
    "imagePlaceholderAlt": "Designer Tops & Blouses sample 9",
    "structuralHighlights": [
      "Custom paper pattern drafted to individual measurements",
      "Pure cotton voile inner lining for breathable comfort",
      "Double interlocked side seam assembly with 2-inch margins",
      "Hand-finished hooks, piping, and neck contouring"
    ]
  },
  {
    "id": "designer-blouses-10",
    "sampleCode": "TB-110",
    "title": "Designer Tops & Blouses Sample #10",
    "category": "designer-blouses",
    "categoryLabel": "Designer Tops & Blouses",
    "fabric": "Cotton",
    "fabricBadge": "DESIGNER BLOUSE",
    "occasion": "Festive",
    "description": "Hand-crafted designer tops & blouses showcasing signature necklines, precision fit, and bespoke finish by Raaji Ladies Fashion.",
    "featureTag": "Designer Tops & Blouses",
    "imageUrl": "/images/top blouse/IMG-20210417-WA0025.jpg",
    "imagePlaceholderAlt": "Designer Tops & Blouses sample 10",
    "structuralHighlights": [
      "Custom paper pattern drafted to individual measurements",
      "Pure cotton voile inner lining for breathable comfort",
      "Double interlocked side seam assembly with 2-inch margins",
      "Hand-finished hooks, piping, and neck contouring"
    ]
  },
  {
    "id": "designer-blouses-11",
    "sampleCode": "TB-111",
    "title": "Designer Tops & Blouses Sample #11",
    "category": "designer-blouses",
    "categoryLabel": "Designer Tops & Blouses",
    "fabric": "Cotton",
    "fabricBadge": "DESIGNER BLOUSE",
    "occasion": "Festive",
    "description": "Hand-crafted designer tops & blouses showcasing signature necklines, precision fit, and bespoke finish by Raaji Ladies Fashion.",
    "featureTag": "Designer Tops & Blouses",
    "imageUrl": "/images/top blouse/IMG-20210707-WA0002.jpg",
    "imagePlaceholderAlt": "Designer Tops & Blouses sample 11",
    "structuralHighlights": [
      "Custom paper pattern drafted to individual measurements",
      "Pure cotton voile inner lining for breathable comfort",
      "Double interlocked side seam assembly with 2-inch margins",
      "Hand-finished hooks, piping, and neck contouring"
    ]
  },
  {
    "id": "designer-blouses-12",
    "sampleCode": "TB-112",
    "title": "Designer Tops & Blouses Sample #12",
    "category": "designer-blouses",
    "categoryLabel": "Designer Tops & Blouses",
    "fabric": "Cotton",
    "fabricBadge": "DESIGNER BLOUSE",
    "occasion": "Festive",
    "description": "Hand-crafted designer tops & blouses showcasing signature necklines, precision fit, and bespoke finish by Raaji Ladies Fashion.",
    "featureTag": "Designer Tops & Blouses",
    "imageUrl": "/images/top blouse/IMG-20210707-WA0004.jpg",
    "imagePlaceholderAlt": "Designer Tops & Blouses sample 12",
    "structuralHighlights": [
      "Custom paper pattern drafted to individual measurements",
      "Pure cotton voile inner lining for breathable comfort",
      "Double interlocked side seam assembly with 2-inch margins",
      "Hand-finished hooks, piping, and neck contouring"
    ]
  },
  {
    "id": "designer-blouses-13",
    "sampleCode": "TB-113",
    "title": "Designer Tops & Blouses Sample #13",
    "category": "designer-blouses",
    "categoryLabel": "Designer Tops & Blouses",
    "fabric": "Cotton",
    "fabricBadge": "DESIGNER BLOUSE",
    "occasion": "Festive",
    "description": "Hand-crafted designer tops & blouses showcasing signature necklines, precision fit, and bespoke finish by Raaji Ladies Fashion.",
    "featureTag": "Designer Tops & Blouses",
    "imageUrl": "/images/top blouse/IMG-20210708-WA0003.jpg",
    "imagePlaceholderAlt": "Designer Tops & Blouses sample 13",
    "structuralHighlights": [
      "Custom paper pattern drafted to individual measurements",
      "Pure cotton voile inner lining for breathable comfort",
      "Double interlocked side seam assembly with 2-inch margins",
      "Hand-finished hooks, piping, and neck contouring"
    ]
  },
  {
    "id": "designer-blouses-14",
    "sampleCode": "TB-114",
    "title": "Designer Tops & Blouses Sample #14",
    "category": "designer-blouses",
    "categoryLabel": "Designer Tops & Blouses",
    "fabric": "Cotton",
    "fabricBadge": "DESIGNER BLOUSE",
    "occasion": "Festive",
    "description": "Hand-crafted designer tops & blouses showcasing signature necklines, precision fit, and bespoke finish by Raaji Ladies Fashion.",
    "featureTag": "Designer Tops & Blouses",
    "imageUrl": "/images/top blouse/IMG-20210708-WA0004.jpg",
    "imagePlaceholderAlt": "Designer Tops & Blouses sample 14",
    "structuralHighlights": [
      "Custom paper pattern drafted to individual measurements",
      "Pure cotton voile inner lining for breathable comfort",
      "Double interlocked side seam assembly with 2-inch margins",
      "Hand-finished hooks, piping, and neck contouring"
    ]
  },
  {
    "id": "designer-blouses-15",
    "sampleCode": "TB-115",
    "title": "Designer Tops & Blouses Sample #15",
    "category": "designer-blouses",
    "categoryLabel": "Designer Tops & Blouses",
    "fabric": "Cotton",
    "fabricBadge": "DESIGNER BLOUSE",
    "occasion": "Festive",
    "description": "Hand-crafted designer tops & blouses showcasing signature necklines, precision fit, and bespoke finish by Raaji Ladies Fashion.",
    "featureTag": "Designer Tops & Blouses",
    "imageUrl": "/images/top blouse/IMG-20210708-WA0005.jpg",
    "imagePlaceholderAlt": "Designer Tops & Blouses sample 15",
    "structuralHighlights": [
      "Custom paper pattern drafted to individual measurements",
      "Pure cotton voile inner lining for breathable comfort",
      "Double interlocked side seam assembly with 2-inch margins",
      "Hand-finished hooks, piping, and neck contouring"
    ]
  },
  {
    "id": "designer-blouses-16",
    "sampleCode": "TB-116",
    "title": "Designer Tops & Blouses Sample #16",
    "category": "designer-blouses",
    "categoryLabel": "Designer Tops & Blouses",
    "fabric": "Cotton",
    "fabricBadge": "DESIGNER BLOUSE",
    "occasion": "Festive",
    "description": "Hand-crafted designer tops & blouses showcasing signature necklines, precision fit, and bespoke finish by Raaji Ladies Fashion.",
    "featureTag": "Designer Tops & Blouses",
    "imageUrl": "/images/top blouse/IMG-20210708-WA0006.jpg",
    "imagePlaceholderAlt": "Designer Tops & Blouses sample 16",
    "structuralHighlights": [
      "Custom paper pattern drafted to individual measurements",
      "Pure cotton voile inner lining for breathable comfort",
      "Double interlocked side seam assembly with 2-inch margins",
      "Hand-finished hooks, piping, and neck contouring"
    ]
  },
  {
    "id": "designer-blouses-17",
    "sampleCode": "TB-117",
    "title": "Designer Tops & Blouses Sample #17",
    "category": "designer-blouses",
    "categoryLabel": "Designer Tops & Blouses",
    "fabric": "Cotton",
    "fabricBadge": "DESIGNER BLOUSE",
    "occasion": "Festive",
    "description": "Hand-crafted designer tops & blouses showcasing signature necklines, precision fit, and bespoke finish by Raaji Ladies Fashion.",
    "featureTag": "Designer Tops & Blouses",
    "imageUrl": "/images/top blouse/IMG-20211008-WA0030.jpg",
    "imagePlaceholderAlt": "Designer Tops & Blouses sample 17",
    "structuralHighlights": [
      "Custom paper pattern drafted to individual measurements",
      "Pure cotton voile inner lining for breathable comfort",
      "Double interlocked side seam assembly with 2-inch margins",
      "Hand-finished hooks, piping, and neck contouring"
    ]
  }
];
