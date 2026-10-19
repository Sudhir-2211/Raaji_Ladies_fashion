# Raaji Ladies Fashion

Professional website for Raaji Ladies Fashion, a ladies tailoring shop in Korattur, Chennai.

---

# 1. Project Overview

The website provides:

- Business information
- Tailoring services
- Approximate pricing
- Design gallery
- Tailoring process
- Frequently asked questions
- Branch/location information
- Team information
- Contact and directions

The site is designed around a premium, elegant tailoring-atelier visual direction.

---

# 2. Documentation

Before making major changes, review:

```text
PROJECT.md
REQUIREMENTS.md
DESIGN.md
AGENTS.md
SEO.md
SECURITY.md
TESTING.md
```

### Documentation responsibilities

`PROJECT.md`
- Business purpose
- Target customers
- Overall goals

`REQUIREMENTS.md`
- Pages
- Features
- User interactions
- Business requirements

`DESIGN.md`
- Visual system
- Figma design
- Typography
- Colors
- Layout
- Animations
- Responsive behavior

`AGENTS.md`
- Development rules
- Architecture
- Coding standards

`SEO.md`
- Local SEO
- Metadata
- Structured data
- Search Console
- Business profile requirements

`SECURITY.md`
- Secrets
- Input handling
- Integrations
- Production security

`TESTING.md`
- Functional testing
- Responsive testing
- Accessibility
- SEO
- Performance
- Pre-launch checks

---

# 3. Technology

Preferred stack:

- Next.js
- React
- TypeScript
- Tailwind CSS
- Git
- GitHub
- Vercel

---

# 4. Requirements

Install:

- Node.js
- npm
- Git

Check versions:

```bash
node --version
npm --version
git --version
```

Use a current stable Node.js version compatible with the project's Next.js version.

---

# 5. Install Dependencies

From the project root:

```bash
npm install
```

---

# 6. Development

Run:

```bash
npm run dev
```

Open the local development URL shown by Next.js, normally:

```text
http://localhost:3000
```

---

# 7. Production Build

Run:

```bash
npm run build
```

Then:

```bash
npm run start
```

The production site should be tested locally before deployment.

---

# 8. Project Structure

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
│   └── layout.tsx
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
│   └── ui/
│
├── data/
│   ├── categories.ts
│   ├── services.ts
│   ├── pricing.ts
│   └── faq.ts
│
├── public/
│   └── images/
│       ├── logo/
│       ├── hero/
│       ├── categories/
│       ├── gallery/
│       ├── services/
│       ├── team/
│       └── branches/
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

---

# 9. Updating Business Content

Frequently changing information should be kept in the appropriate data files.

Examples:

```text
data/services.ts
data/pricing.ts
data/faq.ts
data/categories.ts
```

When changing business content:

1. Verify the information.
2. Update the appropriate data file.
3. Check affected pages.
4. Run the relevant tests.
5. Confirm mobile and desktop layouts.

---

# 10. Updating Gallery Images

Gallery images are maintained manually.

Recommended locations:

```text
public/images/gallery/
public/images/categories/
public/images/services/
```

Use descriptive filenames.

Example:

```text
bridal-blouse-red-zari.jpg
designer-blouse-green-embroidery.jpg
anarkali-festive-pink.jpg
```

Avoid:

```text
IMG_001.jpg
image2.jpg
finalfinal.jpg
```

When replacing images:

- Preserve appropriate dimensions
- Optimize file size
- Check cropping
- Check mobile appearance
- Verify alt text

---

# 11. Design Updates

If the approved Figma design changes:

1. Update the relevant design in Figma.
2. Update `DESIGN.md`.
3. Identify affected components.
4. Implement changes.
5. Test all affected pages.
6. Check responsive behavior.

Do not make major visual changes without updating the documented design direction.

---

# 12. Requirement Updates

If a business requirement changes:

1. Update `REQUIREMENTS.md`.
2. Identify affected pages/components.
3. Implement the change.
4. Test affected functionality.
5. Update other documentation if necessary.

Example:

If the business adds a new service:

```text
REQUIREMENTS.md
      ↓
data/services.ts
      ↓
Services page
      ↓
Price Guide
      ↓
Related Gallery
      ↓
SEO/internal links
      ↓
Testing
```

---

# 13. Git Workflow

Check status:

```bash
git status
```

Stage changes:

```bash
git add .
```

Commit:

```bash
git commit -m "feat: add service category"
```

Push:

```bash
git push
```

Use meaningful commit messages.

---

# 14. Deployment

The preferred deployment platform is Vercel.

Typical workflow:

```text
Local project
    ↓
Git repository
    ↓
Vercel project
    ↓
Production deployment
```

Before production deployment:

- Run build
- Run testing checklist
- Verify domain
- Verify HTTPS
- Verify navigation
- Verify contact links
- Verify Maps
- Verify SEO
- Verify images
- Verify mobile layout

---

# 15. Domain Ownership

The business owner should ideally control the domain registrar account.

The developer can configure:

- DNS
- Deployment
- Domain connection
- HTTPS
- Technical settings

Do not make the website permanently dependent on a personal developer account where business ownership is expected elsewhere.

---

# 16. Production Maintenance

Regular maintenance should include:

- Updating gallery images
- Removing outdated designs
- Updating services
- Updating approximate prices
- Updating FAQs
- Updating opening hours
- Updating branch information
- Checking contact links
- Checking website forms if added
- Checking Search Console
- Reviewing performance

---

# 17. Important Rules

Do not:

- Commit secrets
- Publish unverified prices
- Publish incorrect addresses
- Publish fake reviews
- Publish fake statistics
- Use placeholder content in production
- Add unnecessary dependencies
- Add a database without a real requirement
- Break existing responsive behavior
- Replace the approved design with a generic template

---

# 18. Launch Checklist

Before launch, confirm:

- [ ] Home complete
- [ ] Gallery complete
- [ ] Services complete
- [ ] Price Guide complete
- [ ] FAQ complete
- [ ] About Us complete
- [ ] Branch details verified
- [ ] Team photos added
- [ ] Contact information verified
- [ ] Navigation tested
- [ ] Mobile tested
- [ ] Desktop tested
- [ ] Images optimized
- [ ] Animations tested
- [ ] Accessibility checked
- [ ] SEO checked
- [ ] Sitemap submitted
- [ ] Google Search Console configured
- [ ] Business Profile information consistent
- [ ] Production build succeeds
- [ ] No secrets committed
- [ ] No placeholder content remains
