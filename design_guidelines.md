# Freelance Portfolio Design Guidelines

## Design Approach
**Reference-Based Minimal Portfolio**
Drawing inspiration from modern minimal portfolios (Notion's simplicity, Apple's restraint, Linear's typography), prioritizing clean layouts, generous whitespace, and content-first design.

**Core Principles:**
- Radical simplification: Remove everything non-essential
- Content breathing room: Let work speak for itself
- Professional confidence: Clean, sophisticated, no gimmicks
- Easy navigation: Intuitive single-page flow

---

## Typography System

**Font Stack:**
- Primary: 'Inter' or 'DM Sans' (Google Fonts) - Clean, modern sans-serif
- Display/Headings: Same font, varied weights for consistency

**Hierarchy:**
- Hero Title: text-5xl md:text-7xl, font-bold, tracking-tight
- Section Headings: text-3xl md:text-4xl, font-semibold
- Project Titles: text-xl md:text-2xl, font-medium
- Body Text: text-base md:text-lg, leading-relaxed
- Small Text: text-sm, font-medium (labels, metadata)

---

## Layout System

**Spacing Primitives:** Use Tailwind units of 4, 8, 12, 16, 20, 32
- Section padding: py-20 md:py-32
- Component gaps: gap-8 md:gap-12
- Element spacing: p-4, m-8, etc.

**Container Strategy:**
- Max width: max-w-6xl mx-auto
- Side padding: px-6 md:px-8
- Text content: max-w-3xl for readability

---

## Component Library

### Navigation
**Fixed Header:** 
- Minimal navigation bar with logo/name left, nav links right
- Links: Home, Work, About, Contact
- Glass morphism effect with backdrop-blur
- Height: h-16, sticky positioning

### Hero Section
**Layout:** Full viewport height (min-h-screen) with centered content
- Professional headshot/avatar: rounded-full, w-24 h-24 md:w-32 md:h-32
- Name/Title: Large, bold typography
- One-line value proposition
- Dual CTAs: "View Work" (primary) + "Get in Touch" (secondary)
- Subtle scroll indicator at bottom

**No background image** - pure minimalism with subtle gradient or solid background

### Services/Skills Section
**Grid Layout:** 3 columns on desktop (grid-cols-1 md:grid-cols-3)
- Service cards with icons (Heroicons)
- Title + brief description (2-3 lines)
- Hover: subtle lift effect (translate-y)
- Cards: border, rounded-lg, p-8

### Portfolio/Work Section
**Masonry-style Grid:** 2 columns (grid-cols-1 md:grid-cols-2, gap-8)
- Project cards with:
  - Featured image placeholder (aspect-video, rounded-lg)
  - Project title + category tag
  - Brief description (2-3 sentences)
  - Tech stack badges (inline-flex, gap-2)
  - "View Project" link with arrow icon
- No hover animations on images, just subtle opacity change

**Project Count:** 4-6 featured projects

### About Section
**Two-column layout on desktop:**
- Left: Larger professional photo (aspect-square, rounded-lg)
- Right: Bio text (3-4 paragraphs max)
- Skills list: inline tags/badges
- Stats row: Years experience, Projects completed, Happy clients (3-column grid)

### Contact Section
**Centered, minimal layout:**
- Section heading
- Brief call-to-action text
- Email button (primary, large)
- Social links row: GitHub, LinkedIn (icons only, gap-6)
- Alternative: Simple contact form (Name, Email, Message fields + Submit)

### Footer
**Minimal footer:**
- Single line with copyright and "Built with [tech]"
- Social links repeated
- Back to top link

---

## Images

**Hero Section:** NO large hero image - use solid background with subtle gradient
**About Section:** Professional headshot/photo (square format, 600x600px minimum)
**Portfolio Section:** Project screenshots/mockups (16:9 aspect ratio, 1200x675px recommended)
- 4-6 project images showing work samples
- Clean, professional screenshots of websites/designs/work

**Image Treatment:**
- All images: rounded-lg, object-cover
- Lazy loading for performance
- Alt text for accessibility

---

## Interactive Elements

**Buttons:**
- Primary: Filled with padding (px-8 py-3), rounded-lg, font-medium
- Secondary: Outlined border, same padding
- Hover states: subtle scale and shadow changes

**Links:**
- Underline on hover with transition
- Consistent color treatment

**Cards:**
- Subtle shadow: shadow-sm
- Hover: shadow-lg with smooth transition
- Border: border border-gray-200 (or theme equivalent)

**NO complex animations** - only subtle transitions (duration-200 to duration-300)

---

## Responsive Behavior

**Mobile-First Approach:**
- Stack all multi-column layouts to single column
- Hero text sizes scale down appropriately
- Navigation collapses to hamburger menu (optional)
- Touch-friendly spacing (min-h-12 for buttons)
- Readable font sizes (minimum 16px body)

---

## Page Structure Summary

1. **Fixed Navigation** (always visible)
2. **Hero Section** (full viewport, centered)
3. **Services Section** (3-column grid of offerings)
4. **Portfolio Section** (2-column project grid, 4-6 items)
5. **About Section** (2-column: photo + bio)
6. **Contact Section** (centered, minimal)
7. **Footer** (minimal, single line)

**Total Sections:** 7 complete, purposeful sections
**Estimated Length:** 3-4 viewport heights when scrolled

This creates a comprehensive, professional portfolio that feels complete while maintaining the requested simplicity and cleanliness.