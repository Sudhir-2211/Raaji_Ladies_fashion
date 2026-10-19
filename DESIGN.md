# DESIGN.md — Raaji Ladies Fashion

## 1. Design Source

This document records the finalized visual and interaction direction represented in the supplied Figma/Stitch design exports for Raaji Ladies Fashion.

The visual direction is based on a premium ladies tailoring atelier aesthetic: refined, warm, elegant, editorial, trustworthy, and highly polished.

The Figma design is the primary visual reference. This document translates the visual decisions into implementation rules.

---

# 2. Brand Visual Direction

The website should communicate:

- Trust
- Premium tailoring
- Precision
- Elegance
- Craftsmanship
- Women's fashion
- Local Korattur identity
- Established business experience

The design should feel like a high-end tailoring atelier rather than a generic clothing store or basic tailoring website.

Avoid excessive decoration, excessive rounded UI, overly bright colors, or stereotypical "pink women's website" styling.

---

# 3. Color System

The supplied design uses a warm cream / blush foundation with deep wine as the primary brand color.

## Primary

**Deep Wine / Burgundy**

`#8B2346`

Use for:

- Primary buttons
- Main headings/accent headings
- Active navigation states
- Important CTAs
- Announcement bars
- Strong section accents
- Important icons
- Footer/CTA backgrounds where appropriate

---

## Secondary

**Muted Rose**

`#8C4A59`

Use for:

- Secondary accents
- Supporting labels
- Muted brand elements
- Secondary decorative elements

---

## Tertiary

**Deep Green**

Approximate design value:

`#255344`

Use sparingly for:

- Fabric-related visual accents
- Selected informational panels
- Supporting trust/craftsmanship elements
- Contrast areas

Do not allow the green to compete with the primary wine color.

---

## Main Background

**Warm Cream**

`#FFF8F3`

Use as the primary page background.

---

## Soft Blush Background

`#FFF0F3`

Use for:

- Alternating sections
- Highlight panels
- CTA areas
- Supporting cards
- Team sections
- Feature backgrounds

---

## Main Text

**Deep Charcoal**

`#2B2527`

Use for:

- Body text
- Navigation
- Supporting information
- Descriptions

Avoid pure black for normal body text.

---

## White

`#FFFFFF`

Use for:

- Cards
- Navigation/header surfaces
- Clean content panels
- Contrast areas

---

# 4. Typography

## Primary Display Font

**Playfair Display**

Use for:

- Main hero heading
- Major page headings
- Editorial section headings
- Important titles
- Large feature statements

The display typography should create the premium editorial/fashion feel.

---

## Body Font

**Plus Jakarta Sans**

Use for:

- Body text
- Navigation
- Buttons
- Labels
- Pricing
- Metadata
- Supporting descriptions
- Forms
- Small UI text

---

## Typography Hierarchy

### Hero heading

Large editorial serif heading.

Desktop:
- Large and visually dominant
- Approximately 56–68px depending on viewport

Mobile:
- Approximately 36–44px

### Section heading

Desktop:
- Approximately 36–48px

Mobile:
- Approximately 28–36px

### Body text

Desktop:
- Approximately 15–17px

Mobile:
- Approximately 14–16px

### Labels / eyebrow text

Use uppercase or small-cap styling with increased letter spacing.

Typical size:
- 10–12px

Labels should remain secondary to the main heading.

---

# 5. Overall Layout

The website uses:

- Wide centered content containers
- Generous whitespace
- Strong section separation
- Warm background blocks
- White content cards
- Wine-colored accents
- Editorial typography
- Structured grids

Use a consistent maximum content width across pages.

Recommended implementation target:

`max-width: 1200–1280px`

with responsive horizontal padding.

---

# 6. Header

The design uses a two-level header structure.

## Announcement Bar

A thin wine-colored bar appears at the very top.

It communicates short business messaging such as:

- Korattur location
- Bring-your-own-material positioning
- Appointments / walk-ins
- Phone contact

Characteristics:

- Small typography
- High contrast
- Compact height
- Centered content
- Should not dominate the page

---

## Main Navigation

The main header uses:

- Raaji Ladies Fashion logo
- Brand name
- Navigation links
- Phone/contact option
- Primary "Book Measurement" CTA
- Mobile menu on smaller screens

Primary navigation:

- Home
- Gallery
- Services
- Price Guide
- FAQ
- About Us

The currently active page should have a subtle blush/wine highlight.

The header should remain visually clean and should not consume excessive vertical space.

---

# 7. Buttons

## Primary Button

Use:

- Deep wine background
- White text
- Compact but comfortable padding
- Subtle border/shadow where appropriate

Typical uses:

- Book Measurement
- Explore Our Services
- Book Stitching
- Book Consultation
- Get Directions

---

## Secondary Button

Use:

- Light/white background
- Wine border or text
- Subtle hover state

Typical uses:

- View Designs
- View Gallery
- Call Atelier
- Supporting actions

---

## Button Behavior

Buttons should have subtle interaction feedback:

- Small color transition
- Slight elevation or movement
- Smooth transition
- Clear focus state

Avoid large scale changes.

---

# 8. Home Page Design

## 8.1 Hero

The hero is split into:

- Text/content area
- Large tailoring/fashion image area

Main heading:

**"The Most Trusted Tailor in Korattur"**

Supporting positioning:

**"Custom Crafting From Your Fabrics • Precision Anatomical Fit"**

The hero should communicate the bring-your-own-material model immediately.

Primary CTA:

**Explore Our Services**

Secondary CTA:

**View Our Designs**

Supporting trust indicators can appear below the CTAs.

The hero image should be large, premium, and visually relevant to tailoring.

---

## 8.2 Trust / Statistics Strip

Immediately below the hero, use a strong wine-colored statistics strip.

The design currently communicates examples such as:

- 25+ years
- 15K+ custom garments
- 100% own-fabric treated
- 24–48h express option

Final values must always reflect verified business information.

---

## 8.3 Why Choose Section

Use an editorial heading such as:

**"Why Women Across Korattur Trust Us"**

Display four feature cards.

Current visual themes include:

1. Master Fit & Precision Cut
2. Bring Your Own Fabric
3. Timely Delivery Commitment
4. Transparent, Honest Pricing

Cards should remain clean, compact, and easy to scan.

---

## 8.4 Dress-Making Journey

Use an editorial section titled around the bespoke dress-making journey.

The current visual contains five stages:

1. Material Handover & Consult
2. Precision Measurement
3. Master Cutting & Pattern
4. Artisanal Stitching
5. Trial & Final Delivery

The process should visually read as a connected journey.

---

## 8.5 Tailoring Categories

The homepage should feature four major categories:

### Category 01
**Blouse Tailoring**

### Category 02
**Salwar & Kurti Suits**

### Category 03
**Lehengas & Festive Wear**

### Category 04
**Saree Care & Finishing**

Each category card contains:

- Category label
- Image
- Category title
- Short description
- CTA

The card should visually expand/enlarge or otherwise clearly emphasize the selected category before navigating to its relevant gallery.

---

# 9. Gallery Page

The gallery uses a premium editorial portfolio layout.

Characteristics:

- Large image cards
- Masonry/grid-inspired arrangement
- Category filters
- Occasion filters
- Fabric filters where appropriate
- Image-focused browsing
- Service/design metadata
- Individual design cards

The gallery should support many images without feeling crowded.

Cards should contain only enough metadata to help users understand the design.

---

# 10. Services Page

The Services page is information-dense but should remain easy to scan.

The design uses grouped service categories.

Current visual groups:

### Category 01
Designer Blouse Stitching

### Category 02
Salwar, Anarkali & Kurti Tailoring

### Category 03
Festive & Wedding Wear

### Category 04
Fittings & Saree Care

Each service item can contain:

- Image
- Service name
- Approximate price
- Description
- Feature list
- Turnaround time
- CTA

Price should be visually prominent but not overpower the service name.

---

# 11. Price Guide

The Price Guide should use a structured pricing catalogue.

Important characteristics:

- Clear category grouping
- Service name
- Approximate price range
- Short explanation
- Optional tags
- Supporting notes
- Easy comparison

The page may include an interactive sartorial calculator concept if it is implemented later.

Prices must be clearly described as approximate and may vary depending on the garment, fabric, design, fitting, and work involved.

---

# 12. FAQ

The FAQ page uses:

- Large editorial page heading
- Introductory explanation
- Feature cards
- Category filters
- Search/filter field
- Accordion questions

The open FAQ item should have:

- Clear question heading
- Supporting answer area
- Highlighted information panel where necessary

Accordion opening/closing should be smooth and fast.

---

# 13. About Us

## Story Section

Use a strong editorial heading:

**"The Story of Raaji Ladies Fashion"**

Layout:

- Text/story area
- Supporting tailoring image

---

## Business Values

Use a four-card feature row around themes such as:

- Precision Pattern Drafting
- Fabric Integrity
- Comfort-First Fit
- Honest Chennai Heritage

Exact content should follow verified business information.

---

## Branches

The design shows two branch/location cards side by side on desktop.

Each branch card should contain:

- Branch name
- Address
- Map
- Opening hours
- Phone
- Directions CTA
- Call CTA

On mobile, stack the branch cards vertically.

---

# 14. Team Section

The design contains three people.

## Left

**R. Jayaprakash**

Role:

**Founder & Proprietor**

Include a professional photograph.

---

## Right

**J. Muthulakshmi**

Role:

**Proprietor / Master Pattern Consultant**

Include a professional photograph.

---

## Centered Below

**Sudhir Kumar J**

Role:

**Full-Stack Developer & Data Analyst**

Include a professional photograph.

The desktop layout should maintain the two-upper / one-centered-below structure.

On mobile:

1. R. Jayaprakash
2. J. Muthulakshmi
3. Sudhir Kumar J

Stack vertically with consistent spacing.

---

# 15. Footer

The footer is divided into multiple columns.

Include:

- Brand/business description
- Quick Links
- Specializations
- Visit & Contact
- Branch information
- Opening hours
- Phone
- Email

Include the developer credit:

**Designed & Built by Sudhir Kumar J.**

The footer should use a light warm/pink background and remain visually consistent across all pages.

---

# 16. Cards

Cards should generally use:

- White or very light background
- Subtle border
- Very subtle shadow
- Small to moderate corner radius
- Generous internal spacing
- Wine-colored headings/accent
- Small icon or image where appropriate

Avoid excessively rounded "app-style" cards.

The overall look should remain editorial and premium.

---

# 17. Images

Images are a major part of the design.

Prioritize:

- High-quality tailoring images
- Real business photographs where available
- Consistent image ratios within each component
- Proper cropping
- High visual quality
- Optimized image delivery

Do not stretch images.

Use `object-fit: cover` where the design requires consistent card dimensions.

---

# 18. Scroll Animations

The supplied design includes animated variants for the Home and About Us pages.

Animations should be subtle and premium.

## Hero

- Gentle entrance/fade
- Small upward movement
- CTA reveal after primary heading/content

Do not delay access to the content.

## Feature Cards

Use:

- Fade-in
- Small upward movement
- Subtle stagger

## Dress-Making Journey

This should be one of the strongest scroll-driven interactions.

As the user scrolls:

1. Reveal each stage
2. Progressively emphasize the current step
3. Animate the connecting journey/path where appropriate

On mobile, use a vertical timeline.

## Category Cards

Use:

- Subtle reveal
- Gentle image scaling
- Hover elevation on desktop

## Gallery

Use restrained image reveal/stagger effects.

Do not animate every image aggressively.

## Services

Use subtle card entrance animations.

## FAQ

Use smooth accordion expansion/collapse.

## About Us

Use subtle reveal effects for story, branches, and team profiles.

---

# 19. Motion Rules

Animation should enhance the brand rather than distract from it.

Use:

- Short transitions
- Smooth easing
- Small movement distances
- Opacity transitions
- Subtle scale

Avoid:

- Large flying elements
- Excessive parallax
- Constant background movement
- Long animations
- Animations that delay reading
- Excessive bounce effects

Respect `prefers-reduced-motion`.

---

# 20. Responsive Design

## Desktop

Use:

- Multi-column layouts
- Large editorial typography
- Wide image areas
- Two-column hero
- Four-column category/features where appropriate
- Two-column branch/team arrangements

---

## Tablet

Reduce:

- Column count
- Heading size
- Horizontal spacing

Maintain strong visual hierarchy.

---

## Mobile

Use:

- Single-column sections
- Compact navigation/menu
- Reduced heading sizes
- Full-width CTAs where useful
- Vertical process timeline
- Stacked service cards
- Stacked branch cards
- Stacked team profiles
- Responsive gallery
- Comfortable touch targets

The mobile design must not feel like a compressed desktop version.

---

# 21. Accessibility

The implementation should maintain:

- Strong text/background contrast
- Keyboard accessibility
- Visible focus states
- Semantic headings
- Alt text for meaningful images
- Accessible buttons
- Accessible accordions
- Reduced-motion support

Animations must never be the only way information is communicated.

---

# 22. Consistency Rules

Across all pages:

- Use the same header
- Use the same footer
- Use the same typography system
- Use the same button styles
- Use the same color tokens
- Use consistent spacing
- Use consistent card treatment
- Use consistent icon style
- Maintain the same visual language

Do not introduce unrelated colors, fonts, card styles, or interaction patterns without updating this design specification.

---

# 23. Implementation Priority

When visual decisions conflict, prioritize in this order:

1. Business clarity
2. Readability
3. Mobile usability
4. Brand consistency
5. Performance
6. Visual polish
7. Animation/decorative effects

The website should remain useful and fast even if animations or decorative effects are disabled.

---

# 24. Design Source of Truth

The latest approved Figma design should be treated as the visual source of truth.

If a future design revision changes:

- Colors
- Typography
- Layout
- Components
- Page structure
- Animation
- Responsive behavior

this document should be updated to match the approved design before implementation changes are considered complete.
