# AGENTS.md — Raaji Ladies Fashion

## 1. Purpose

This document defines the engineering rules for the Raaji Ladies Fashion website.

The implementation must follow these project documents in order of importance:

1. `PROJECT.md` — business vision and objectives
2. `REQUIREMENTS.md` — required functionality and pages
3. `DESIGN.md` — visual design and interaction system
4. `AGENTS.md` — implementation and engineering rules
5. `SEO.md` — search optimization requirements
6. `SECURITY.md` — security requirements
7. `TESTING.md` — verification requirements

When documents conflict, do not silently choose one. Identify the conflict and resolve it before implementing the affected feature.

---

# 2. Project Type

Raaji Ladies Fashion is a professional website for a ladies tailoring shop in Korattur, Chennai.

The website is primarily a public-facing content, service, gallery, pricing, FAQ, location, and business-information website.

The initial version should remain as simple as possible while satisfying the requirements.

Do not introduce unnecessary infrastructure.

---

# 3. Preferred Technology Stack

Use:

- Next.js
- React
- TypeScript
- Tailwind CSS
- Git
- GitHub
- Vercel for deployment

Use semantic HTML wherever possible.

Prefer modern Next.js conventions and maintain a clean App Router structure.

Do not add a backend, database, authentication system, or admin dashboard unless a requirement specifically requires persistent server-side functionality.

---

# 4. Architecture

Use a component-based architecture.

Recommended structure:

```text
raaji-ladies-fashion/
│
├── app/
│   ├── page.tsx
│   ├── gallery/
│   ├── services/
│   ├── price-guide/
│   ├── faq/
│   ├── about/
│   ├── layout.tsx
│   └── ...
│
├── components/
│   ├── layout/
│   ├── navigation/
│   ├── hero/
│   ├── home/
│   ├── gallery/
│   ├── services/
│   ├── pricing/
│   ├── faq/
│   ├── about/
│   ├── ui/
│   └── ...
│
├── data/
│   ├── categories.ts
│   ├── services.ts
│   ├── pricing.ts
│   ├── faq.ts
│   └── ...
│
├── public/
│   ├── images/
│   │   ├── logo/
│   │   ├── hero/
│   │   ├── categories/
│   │   ├── gallery/
│   │   ├── services/
│   │   ├── team/
│   │   └── branches/
│   └── ...
│
├── PROJECT.md
├── REQUIREMENTS.md
├── DESIGN.md
├── AGENTS.md
├── SEO.md
├── SECURITY.md
├── TESTING.md
└── README.md
```

The exact structure may be adjusted if the implementation benefits from a better organization, but unnecessary complexity should be avoided.

---

# 5. Source of Truth

Before implementing a feature:

1. Read `PROJECT.md`.
2. Check `REQUIREMENTS.md`.
3. Check the relevant part of `DESIGN.md`.
4. Implement consistently with those documents.
5. Test the result.
6. Update the relevant documentation if the approved requirement/design changes.

Do not permanently change a business requirement merely because it is easier to code.

---

# 6. Figma Fidelity

The supplied Figma design is the primary visual reference.

Match the approved design closely, including:

- Layout
- Typography
- Colors
- Spacing
- Image proportions
- Cards
- Buttons
- Navigation
- Section hierarchy
- Responsive behavior
- Animations
- Interaction states

Do not replace the design with a generic template.

If an exact Figma detail cannot be reproduced literally, preserve the intended visual result and document any meaningful deviation.

---

# 7. Brand System

Use the documented design tokens.

Primary wine:

`#8B2346`

Secondary muted rose:

`#8C4A59`

Tertiary deep green:

`#255344`

Warm cream:

`#FFF8F3`

Soft blush:

`#FFF0F3`

Deep charcoal:

`#2B2527`

Typography:

- Playfair Display for major editorial/display headings
- Plus Jakarta Sans for body/UI text

Do not introduce unrelated colors or fonts without an approved design change.

---

# 8. Reusable Components

Prefer reusable components over repeated markup.

Examples:

- `Header`
- `AnnouncementBar`
- `Footer`
- `Button`
- `SectionHeading`
- `CategoryCard`
- `ServiceCard`
- `GalleryCard`
- `PriceCard`
- `FAQAccordion`
- `BranchCard`
- `TeamMemberCard`
- `CTASection`

If the same UI pattern appears in multiple places, consider creating a shared component.

Avoid creating abstractions for tiny pieces that are used only once unless they materially improve readability.

---

# 9. Content and Data

Keep frequently changing business information separate from presentation code where practical.

Use structured data files for:

- Services
- Categories
- Prices
- FAQs
- Gallery metadata
- Branch information

For example:

```text
data/services.ts
data/pricing.ts
data/faq.ts
data/categories.ts
```

This allows business content to be updated without unnecessarily editing page layouts.

Do not invent business claims, prices, addresses, opening hours, statistics, or service details.

Use placeholders until verified information is supplied.

---

# 10. Image Management

Images are a major part of the website.

Organize them clearly:

```text
public/images/
├── logo/
├── hero/
├── categories/
├── gallery/
├── services/
├── team/
└── branches/
```

Use meaningful filenames.

Prefer optimized image formats and Next.js image optimization where appropriate.

Do not use unnecessarily huge source images.

Do not stretch images.

Use suitable `object-fit` behavior based on the design.

The gallery should make it easy to add new designs and remove outdated designs.

No customer-facing image administration panel is required in the initial version.

---

# 11. Navigation

Primary navigation:

- Home
- Gallery
- Services
- Price Guide
- FAQ
- About Us

Maintain consistent navigation across all pages.

Ensure every navigation item has a valid destination.

Use descriptive URLs:

```text
/
 /gallery
 /services
 /price-guide
 /faq
 /about
```

---

# 12. Home Page Requirements

Implement:

1. Announcement bar
2. Main navigation
3. Hero
4. Trust/statistics strip
5. Why Choose section
6. Dress-making journey
7. Four categories
8. Supporting CTA/content
9. Footer

Hero headline:

**The Most Trusted Tailor in Korattur**

Hero CTAs should match the approved design.

The statistics shown in the design must only use verified business figures.

The dress-making journey should be a meaningful scroll interaction rather than decorative animation.

---

# 13. Category Behavior

The four homepage categories must:

- Display a strong image
- Display category title
- Display short description
- Provide a clear interaction
- Expand/enlarge when selected where supported by the design
- Provide the relevant CTA
- Lead to the correct gallery/category content

Do not create broken or fake category routes.

---

# 14. Services Behavior

The Services page must:

- Display service categories
- Show service descriptions
- Show approximate pricing where provided
- Provide access to related designs/images
- Work on mobile
- Avoid hiding essential price information behind unnecessary interaction

Prices must remain clearly identified as approximate.

---

# 15. Gallery Behavior

The gallery must:

- Support category organization
- Support many images
- Load efficiently
- Maintain consistent image presentation
- Provide useful navigation/filtering where designed
- Work well on mobile
- Avoid layout shifts as images load

When a category-specific gallery is requested, display only relevant designs.

---

# 16. FAQ Behavior

Use an accessible accordion.

Requirements:

- Keyboard usable
- Clear expanded/collapsed state
- Appropriate ARIA attributes
- Smooth but short transition
- Only hide answer content visually; do not make content inaccessible to assistive technology

---

# 17. About Page

Include:

- Business story
- Two branches
- Location information
- Team profiles

Team:

R. Jayaprakash — Founder & Proprietor

J. Muthulakshmi — Proprietor / Master Pattern Consultant

Sudhir Kumar J — Full-Stack Developer & Data Analyst

Use supplied photographs when available.

Do not replace supplied real business/team images with generic stock imagery.

---

# 18. Responsive Development

Build mobile-first.

Verify:

- 360px-width mobile layouts
- Typical smartphone widths
- Tablet
- Laptop
- Desktop
- Wide desktop

Do not simply shrink desktop layouts.

Reflow:

- Navigation
- Hero
- Cards
- Process journey
- Gallery
- Pricing
- Branches
- Team section

as appropriate.

---

# 19. Motion

Use motion described in `DESIGN.md`.

Preferred behavior:

- Fade
- Small translate
- Subtle scale
- Stagger
- Progressive process reveal

Do not:

- Delay content unnecessarily
- Use excessive parallax
- Create continuous distracting motion
- Make animations essential to understanding content
- Cause horizontal scrolling

Respect:

```css
@media (prefers-reduced-motion: reduce)
```

---

# 20. Performance

Prioritize:

- Optimized images
- Appropriate image dimensions
- Lazy loading below the fold
- Minimal client-side JavaScript
- Server-rendered/static content where appropriate
- Avoid unnecessary dependencies
- Avoid oversized animation libraries unless required
- Avoid unnecessary API requests

Do not sacrifice a large amount of performance for decorative effects.

---

# 21. Accessibility

Use:

- Semantic HTML
- Proper heading hierarchy
- Descriptive alt text
- Keyboard navigation
- Visible focus states
- Accessible buttons
- Accessible accordions
- Adequate contrast
- Appropriate touch targets
- Reduced-motion support

Never use text embedded only inside images when the information is important.

---

# 22. SEO Implementation

Follow `SEO.md`.

Each page should have:

- Appropriate title
- Meta description
- Canonical URL where appropriate
- Correct heading structure
- Relevant internal links
- Open Graph metadata
- Descriptive image alt text

Use structured data only where it accurately represents the business.

Do not create fake reviews, ratings, locations, awards, or claims.

---

# 23. Security

Follow `SECURITY.md`.

Never commit:

- API keys
- Passwords
- Tokens
- Private credentials
- `.env.local`
- Production secrets

Use environment variables for secrets.

---

# 24. Git Rules

Use meaningful commits.

Examples:

```text
feat: add home hero section
feat: add service catalogue
feat: implement gallery filters
fix: correct mobile navigation
fix: improve gallery image loading
perf: optimize gallery images
seo: add local business metadata
```

Do not commit generated secrets, build artifacts, or unnecessary system files.

---

# 25. Change Management

When a requirement changes:

1. Update the appropriate `.md` file.
2. Review affected components.
3. Implement the change.
4. Test related pages.
5. Check for regressions.
6. Update documentation if implementation details changed.

Do not make undocumented permanent business changes.

---

# 26. Definition of Done

A feature is not complete merely because it visually appears.

Before marking it complete:

- Requirements implemented
- Design matched
- Desktop checked
- Mobile checked
- Keyboard interaction checked where applicable
- Links checked
- Images checked
- Animations checked
- Console errors checked
- Performance considered
- SEO considered
- Security considered
- No unintended regressions

