# TESTING.md — Raaji Ladies Fashion

## 1. Testing Objective

The website must be tested as a real production website before launch.

Testing must cover:

- Functionality
- Visual fidelity
- Responsive behavior
- Navigation
- Images
- Forms
- Animations
- Accessibility
- SEO
- Performance
- Security
- Cross-browser behavior

---

# 2. Page Checklist

Test every public page:

- Home
- Gallery
- Services
- Price Guide
- FAQ
- About Us

Every page must:

- Load successfully
- Display the correct header
- Display the correct footer
- Have correct navigation
- Have no broken images
- Have no broken links
- Have correct page title
- Work on mobile and desktop

---

# 3. Home Page Testing

Verify:

### Announcement bar

- Text is readable
- Correct information
- No overflow

### Header

- Logo displays correctly
- Navigation works
- Active state works
- Contact CTA works
- Mobile menu opens/closes correctly

### Hero

- Correct headline
- Correct supporting text
- Correct image
- CTA destinations work
- No layout shift
- Mobile layout works

### Statistics

- Values are verified
- No incorrect business claims
- Cards align correctly

### Why Choose

- All intended cards display
- Icons/images display
- Responsive layout works

### Dress-Making Journey

Test:

- All stages visible
- Scroll animation triggers correctly
- Connecting path works
- No content is hidden if motion is reduced
- Mobile vertical timeline works

### Categories

Test:

- Four categories appear
- Correct images
- Correct titles
- Expand interaction works
- CTA works
- Category gallery destination is correct

---

# 4. Gallery Testing

Verify:

- Images load
- Images have correct aspect ratio
- Categories work
- Filters work if implemented
- No broken images
- Image loading does not cause major layout shifts
- Mobile grid works
- Large image sets remain usable

Test both:

- Slow network
- Normal network

---

# 5. Services Testing

For every service:

- Name is correct
- Description is correct
- Approximate price is correct
- Related design CTA works
- Related images are relevant
- No placeholder content remains

Test service layouts on:

- Mobile
- Tablet
- Desktop

---

# 6. Price Guide Testing

Verify:

- Every service has the correct approximate range
- Currency is clear
- Approximate pricing disclaimer is visible
- Tables/cards do not overflow horizontally
- Mobile layout remains readable

Never publish unverified prices.

---

# 7. FAQ Testing

For every FAQ:

- Question is readable
- Accordion opens
- Accordion closes
- Keyboard interaction works
- Focus state is visible
- Multiple open/closed states behave as designed
- Answers are accessible

Check for accidental clipping or hidden text.

---

# 8. About Us Testing

Verify:

### Story

- Content is correct
- Images display

### Branches

- Both branches appear
- Addresses are correct
- Maps work
- Directions work
- Phone links work
- Opening hours are correct

### Team

- R. Jayaprakash photo/name/role
- J. Muthulakshmi photo/name/role
- Sudhir Kumar J photo/name/role

Desktop:

- First two profiles appear parallel
- Third profile centered below

Mobile:

- Profiles stack correctly
- No awkward spacing
- Images remain properly cropped

---

# 9. Navigation Testing

Click every navigation link.

Test:

```text
Home → Gallery
Home → Services
Home → Price Guide
Home → FAQ
Home → About
```

Test all CTA links.

Test:

- Logo → Home
- Phone links
- WhatsApp links if present
- Maps/directions
- Gallery category links
- Service design links

No dead-end page should exist.

---

# 10. Responsive Testing

Minimum target widths:

- 360px
- 375px
- 390px
- 414px
- 768px
- 1024px
- 1280px
- 1440px

Look for:

- Horizontal scrolling
- Overflow
- Broken grids
- Text clipping
- Buttons overflowing
- Incorrect image cropping
- Navigation problems
- Excessive whitespace
- Tiny touch targets

---

# 11. Browser Testing

At minimum test the production build in:

- Chrome
- Edge
- Safari where available
- Firefox where practical

Test both desktop and mobile layouts.

---

# 12. Animation Testing

Verify:

- Animations trigger at the correct time
- Animations do not block interaction
- Animations are not too slow
- No flickering
- No horizontal movement
- No scroll-jacking
- No excessive CPU usage
- Reduced-motion behavior works

Specifically test the dress-making journey.

---

# 13. Accessibility Testing

Check:

- Keyboard navigation
- Tab order
- Focus visibility
- Heading hierarchy
- Image alt text
- Button labels
- Link labels
- Contrast
- Accordion accessibility
- Mobile touch targets
- Reduced-motion support

Run an accessibility audit before launch.

---

# 14. SEO Testing

Verify every indexable page has:

- Unique title
- Useful meta description
- One primary H1
- Logical H2/H3 hierarchy
- Canonical URL where appropriate
- Open Graph metadata
- Descriptive image alt text
- Internal links

Verify:

- `sitemap.xml`
- `robots.txt`

Check structured data for validity where used.

---

# 15. Performance Testing

Use Lighthouse or equivalent performance tooling.

Check:

- Performance
- Accessibility
- Best Practices
- SEO

Pay special attention to:

- Hero image
- Gallery images
- Font loading
- JavaScript size
- Layout shifts
- Animation performance

Optimize before launch if major problems are detected.

---

# 16. Console Testing

Production build should not contain:

- Unhandled errors
- Repeated warnings
- Failed network requests
- Missing image errors
- Missing font errors
- Hydration errors

Check browser DevTools.

---

# 17. Build Testing

Before deployment run the production build.

Confirm:

- Dependencies install successfully
- TypeScript passes
- Linting passes where configured
- Production build succeeds
- No runtime errors on major routes

---

# 18. Content Testing

Search the entire project for temporary content.

Remove or replace:

- Lorem ipsum
- Placeholder names
- Placeholder addresses
- Placeholder phone numbers
- Dummy prices
- Dummy business statistics
- Test links
- Unfinished sections

Only publish verified business information.

---

# 19. Final Pre-Launch Checklist

```text
[ ] All pages complete
[ ] Navigation complete
[ ] Mobile layout complete
[ ] Desktop layout complete
[ ] Gallery complete
[ ] Services complete
[ ] Prices verified
[ ] FAQ complete
[ ] Branch details verified
[ ] Team information verified
[ ] Team photographs added
[ ] Contact links verified
[ ] Maps verified
[ ] Images optimized
[ ] Animations tested
[ ] Reduced motion tested
[ ] Accessibility checked
[ ] SEO checked
[ ] Sitemap checked
[ ] Robots checked
[ ] Performance checked
[ ] Console checked
[ ] Production build succeeds
[ ] No secrets committed
[ ] No placeholder content remains
```

