# Brian Best Personal Blog - Redesign Plan 2025

**Date:** October 7, 2025  
**Version:** 1.0  
**Author:** Brian Best (via AI Assistant)

---

## Executive Summary

This document outlines a comprehensive redesign plan for Brian Best's personal blog, transitioning from the current Persona 5-inspired design to a modern 16-bit pixel aesthetic while maintaining clean, professional presentation suitable for a senior software engineer's portfolio and blog.

**Key Goals:**
- Modernize visual design with 16-bit pixel aesthetic
- Improve content discoverability and navigation
- Enhance personal branding and professional presence
- Maintain static generation and Vercel deployment compatibility
- Implement comprehensive testing strategy

---

## Research Findings

### Senior Engineer Blog Trends (2025)

After analyzing popular personal sites of senior-level engineers, the following patterns emerged:

#### Common Site Structure
1. **Home/Landing Page**
   - Brief personal introduction with photo
   - Featured/recent blog posts (3-6 cards)
   - Selected projects showcase
   - Quick links to social/professional profiles
   
2. **About Page**
   - Professional journey/timeline
   - Technical expertise/stack
   - Personal interests/hobbies
   - Current role and company
   - Resume/CV download option
   
3. **Blog/Writing Section**
   - Chronological or topic-based organization
   - Search and filtering capabilities
   - Tags/categories for content discovery
   - Reading time estimates
   - RSS feed support
   
4. **Projects Portfolio**
   - Featured projects with live demos/GitHub links
   - Technical stack used
   - Problem statement and solution
   - Screenshots or demos
   
5. **Now Page** (Trending)
   - Current focus areas
   - What they're learning
   - Recent reads/podcasts
   - Side projects in progress
   
6. **Uses Page** (Popular)
   - Development setup
   - Hardware specs
   - Software tools and services
   - Productivity workflows
   
7. **Speaking/Talks** (Optional)
   - Conference presentations
   - Podcast appearances
   - Workshop materials
   
8. **Contact/Connect**
   - Social links
   - Email/contact form
   - Availability for consulting/speaking

#### Content Patterns
- Technical deep-dives (architecture, debugging, system design)
- Career advice and reflections
- Tool reviews and comparisons
- Learning resources and recommendations
- Personal projects and experiments
- AI/ML integration and automation stories

### 16-Bit Pixel Design Trends (2025)

Modern pixel art websites successfully blend nostalgia with contemporary UX:

#### Color Palettes
**Modern Pixel Aesthetic Options:**

1. **Neo-Retro Cyber** (Recommended)
   - Primary: `#00F0FF` (Cyan)
   - Secondary: `#FF006E` (Hot Pink)
   - Accent: `#FFBE0B` (Amber)
   - Background: `#0D1B2A` (Deep Navy)
   - Surface: `#1B263B` (Slate Blue)
   - Text: `#E0E1DD` (Off-white)
   
2. **Pixel Garden**
   - Primary: `#06FFA5` (Mint Green)
   - Secondary: `#A15FFE` (Purple)
   - Accent: `#FFE66D` (Butter Yellow)
   - Background: `#1A1423` (Deep Plum)
   - Surface: `#2D2635` (Dim Purple)
   - Text: `#F4F1DE` (Cream)
   
3. **Sunset Terminal**
   - Primary: `#FF6B35` (Coral)
   - Secondary: `#F7931E` (Orange)
   - Accent: `#FBB040` (Gold)
   - Background: `#004E89` (Navy Blue)
   - Surface: `#1A659E` (Ocean Blue)
   - Text: `#EEEEEE` (Light Gray)

4. **Clean Pixel** (Most Modern)
   - Primary: `#5B8DEE` (Soft Blue)
   - Secondary: `#6C63FF` (Vibrant Purple)
   - Accent: `#FCA311` (Orange)
   - Background: `#F8F9FA` (Light Gray)
   - Surface: `#FFFFFF` (White)
   - Text: `#212529` (Dark Gray)
   - Has light/dark mode variants

#### Typography
- **Headings:** Pixel fonts (Press Start 2P, VT323, Pixelify Sans)
- **Body:** Modern sans-serif for readability (Inter, Outfit, Space Grotesk)
- **Code:** Monospace pixel fonts (Fira Code, JetBrains Mono)

#### Visual Elements
- **Pixel Art Icons:** Custom 16x16 or 32x32 pixel icons
- **Animated Sprites:** Subtle character animations (idle, typing, etc.)
- **Dithered Gradients:** 16-bit style gradient effects
- **Pixel Borders:** 1-2px borders with corner details
- **Shadow Effects:** Chunky, offset shadows (4-8px)
- **Scan Lines:** Optional CRT effect overlay
- **Particles:** Pixelated particle effects on interactions

#### Layout Patterns
- Grid-based layouts (8px or 16px grid system)
- Card-based content with pixel borders
- Bento box style layouts (popular in 2025)
- Terminal-inspired sections
- Retro game UI elements (health bars, menus, dialog boxes)

---

## Current Site Assessment

### Existing Structure

```
├── Home (/)
│   ├── Hero Banner with photo
│   ├── Latest Posts (3 cards)
│   └── Featured Projects
├── About (/about)
│   ├── Profile photo
│   ├── Career timeline
│   ├── Tech stack
│   └── Social links
├── Projects (/projects)
│   └── Project cards with tags
├── Blog (/blog)
│   ├── Post listing
│   └── Individual post pages (/blog/[slug])
└── Contact (/contact)
    └── Contact form
```

### Current Design System

**Colors (Persona 5 Inspired):**
- Red: `#cc2c34`
- Maroon: `#922526`
- Black: `#000000`
- White: `#ffffff`
- Grey: `#d9d0d1`

**Typography:**
- Headings: Bungee (bold, all-caps style)
- Body: Inter (clean, modern sans-serif)

**Visual Style:**
- High contrast (red/black/white)
- Skewed sections (-3deg transforms)
- Border shadows (shadow-thief effect)
- Rotated images (2-3deg)
- Pattern mask background (tile.png)

### What to Keep ✅

1. **Technical Foundation**
   - Next.js 15 App Router
   - TypeScript
   - Tailwind CSS
   - Sanity CMS integration
   - Static generation approach
   - Vercel deployment configuration

2. **Component Architecture**
   - Modular component structure
   - Theme provider setup (dark/light modes)
   - Responsive navigation (desktop + mobile)
   - Card-based content layout
   - MDX content support

3. **Content Types**
   - Blog posts with slug routing
   - Projects showcase
   - About page with timeline
   - Social links integration

4. **Features**
   - Reading time estimates
   - Featured projects flag
   - Tag system for projects
   - Image optimization (Next Image)

### What to Modify 🔄

1. **Design System**
   - Replace Persona 5 color scheme with modern pixel palette
   - Update typography (add pixel fonts for headings)
   - Redesign card components with pixel borders
   - Update button styles with pixel aesthetic
   - Modernize shadow effects (chunky pixel shadows)

2. **Layout Components**
   - Navbar: Add pixel-style logo/avatar, update nav links design
   - Footer: Pixel-style social icons, add email newsletter signup
   - Hero Banner: Pixel art portrait or animated sprite, pixel-style CTAs
   - Post Cards: Pixel borders, pixelated category badges
   - Project Cards: Add "Live Demo" pixel buttons, tech stack badges

3. **Page Structures**
   - Home: Add "Now" section, rearrange content hierarchy
   - About: Expand with "Uses" section, add resume download
   - Blog: Add search/filter, category navigation, RSS link
   - Projects: Add filtering by tech stack, add project detail modal

4. **Color Theme**
   - Implement new pixel-inspired color palette (recommend Neo-Retro Cyber)
   - Maintain dark/light mode support
   - Update all color references in globals.css
   - Create pixel-specific utility classes

5. **Typography Scale**
   - Add pixel font for h1, h2 (Press Start 2P or Pixelify Sans)
   - Keep Inter for body text (readability)
   - Update prose styling for blog posts
   - Add pixel-style code block themes

### What to Delete ❌

1. **Current Design Assets**
   - `/public/mask.svg` (replace with pixel pattern)
   - `/public/tile.png` (replace with pixel grid)
   - `/public/placeholder-*` files (replace with pixel art versions)
   - Persona 5-specific CSS classes (skew transforms, current shadows)

2. **Deprecated Components**
   - Remove unused UI components (40+ shadcn components, many unused)
   - Simplify theme toggle (simpler pixel design)

3. **Redundant Files**
   - `/styles/globals.css` (duplicate of `/app/globals.css`)
   - `/hooks/*` (duplicates of `/components/ui/use-*`)

---

## Proposed New Sitemap

```
Brian Best Personal Blog
│
├── 🏠 Home (/)
│   ├── Hero Section (pixel art portrait + animated sprite)
│   ├── About Summary (2-3 sentences)
│   ├── Latest Posts (3 cards)
│   ├── Featured Projects (2-3 cards)
│   ├── Now Section (current focus)
│   └── Newsletter Signup (pixel-style form)
│
├── 👤 About (/about)
│   ├── Personal Intro (expanded)
│   ├── Career Timeline (pixel-style timeline)
│   ├── Tech Stack (pixel badges)
│   ├── Stats/Achievements (game-style stats)
│   ├── Uses Section (tools & setup)
│   ├── Fun Facts/Hobbies
│   ├── Resume Download (pixel button)
│   └── Social Links
│
├── 📝 Blog (/blog)
│   ├── Search Bar (pixel-style input)
│   ├── Category Filter (pixel tabs)
│   ├── Tag Cloud (pixel badges)
│   ├── Post Grid (chronological)
│   ├── Pagination (pixel navigation)
│   ├── RSS Feed Link
│   └── Individual Posts (/blog/[slug])
│       ├── Cover image (pixel border)
│       ├── Metadata (date, reading time, tags)
│       ├── Table of contents (pixel menu)
│       ├── Content (MDX with pixel styling)
│       ├── Author bio (pixel card)
│       ├── Related posts (3 cards)
│       └── Comments (optional)
│
├── 🚀 Projects (/projects)
│   ├── Filter by Tech Stack (pixel dropdown)
│   ├── Filter by Featured (pixel toggle)
│   ├── Project Grid
│   └── Project Details (/projects/[id])
│       ├── Hero image/demo (pixel border)
│       ├── Overview
│       ├── Tech Stack (pixel badges)
│       ├── Problem & Solution
│       ├── Screenshots/Demo (pixel gallery)
│       ├── Links (GitHub, Live Demo) (pixel buttons)
│       └── Related Projects
│
├── 🎯 Now (/now) [NEW]
│   ├── Current Focus Areas
│   ├── Learning Goals (progress bars)
│   ├── Reading List (books/articles)
│   ├── Side Projects in Progress
│   ├── Recent Updates (changelog style)
│   └── Last Updated Date
│
├── 🛠️ Uses (/uses) [NEW]
│   ├── Hardware Setup (pixel icons)
│   ├── Software & Tools (categorized)
│   ├── VS Code Extensions
│   ├── Services & Subscriptions
│   ├── Productivity Workflow
│   └── Affiliate Disclaimer
│
├── 💬 Contact (/contact)
│   ├── Contact Form (pixel-style)
│   ├── Email Address (copy button)
│   ├── Social Links (pixel icons)
│   ├── Availability Status (green dot)
│   └── Response Time Estimate
│
└── 📊 Dashboard (/dashboard) [OPTIONAL/FUTURE]
    ├── Site Analytics (pixel charts)
    ├── Popular Posts
    ├── Recent Comments
    └── Visitor Stats
```

---

## Design System Specification

### Color Palette (Neo-Retro Cyber)

```css
:root {
  /* Primary Colors */
  --pixel-cyan: #00F0FF;
  --pixel-pink: #FF006E;
  --pixel-amber: #FFBE0B;
  
  /* Background & Surfaces */
  --pixel-navy: #0D1B2A;
  --pixel-slate: #1B263B;
  --pixel-dark-slate: #0A1628;
  
  /* Text */
  --pixel-white: #E0E1DD;
  --pixel-gray: #8D99AE;
  --pixel-muted: #6C7A89;
  
  /* Semantic Colors */
  --pixel-success: #06FFA5;
  --pixel-warning: #FFBE0B;
  --pixel-error: #FF006E;
  --pixel-info: #00F0FF;
  
  /* Light Mode Variants (optional) */
  --pixel-light-bg: #F8F9FA;
  --pixel-light-surface: #FFFFFF;
  --pixel-light-text: #212529;
}
```

### Typography Scale

```css
/* Font Families */
--font-pixel: 'Pixelify Sans', 'Press Start 2P', monospace;
--font-body: 'Inter', -apple-system, sans-serif;
--font-mono: 'JetBrains Mono', 'Fira Code', monospace;

/* Type Scale */
--text-xs: 0.75rem;    /* 12px */
--text-sm: 0.875rem;   /* 14px */
--text-base: 1rem;     /* 16px */
--text-lg: 1.125rem;   /* 18px */
--text-xl: 1.25rem;    /* 20px */
--text-2xl: 1.5rem;    /* 24px */
--text-3xl: 1.875rem;  /* 30px */
--text-4xl: 2.25rem;   /* 36px */
--text-5xl: 3rem;      /* 48px */

/* Headings (Pixel Font) */
h1: text-4xl md:text-5xl font-pixel tracking-tight
h2: text-3xl md:text-4xl font-pixel tracking-tight
h3: text-2xl md:text-3xl font-pixel
h4: text-xl md:text-2xl font-pixel
```

### Spacing System (8px Grid)

```
0: 0px
1: 4px   (0.25rem)
2: 8px   (0.5rem)
3: 12px  (0.75rem)
4: 16px  (1rem)
5: 20px  (1.25rem)
6: 24px  (1.5rem)
8: 32px  (2rem)
10: 40px (2.5rem)
12: 48px (3rem)
16: 64px (4rem)
20: 80px (5rem)
24: 96px (6rem)
```

### Component Styles

#### Pixel Button
```css
.pixel-button {
  font-family: var(--font-pixel);
  font-size: 0.875rem;
  padding: 12px 24px;
  border: 3px solid var(--pixel-cyan);
  background: var(--pixel-slate);
  color: var(--pixel-cyan);
  box-shadow: 4px 4px 0 0 var(--pixel-cyan);
  transition: all 0.1s ease;
}

.pixel-button:hover {
  transform: translate(2px, 2px);
  box-shadow: 2px 2px 0 0 var(--pixel-cyan);
}

.pixel-button:active {
  transform: translate(4px, 4px);
  box-shadow: none;
}
```

#### Pixel Card
```css
.pixel-card {
  background: var(--pixel-slate);
  border: 3px solid var(--pixel-cyan);
  padding: 24px;
  box-shadow: 6px 6px 0 0 rgba(0, 240, 255, 0.3);
}

.pixel-card:hover {
  transform: translate(-2px, -2px);
  box-shadow: 8px 8px 0 0 rgba(0, 240, 255, 0.5);
}
```

#### Pixel Badge
```css
.pixel-badge {
  display: inline-block;
  font-family: var(--font-pixel);
  font-size: 0.75rem;
  padding: 4px 12px;
  border: 2px solid var(--pixel-amber);
  background: var(--pixel-dark-slate);
  color: var(--pixel-amber);
  text-transform: uppercase;
}
```

#### Pixel Input
```css
.pixel-input {
  font-family: var(--font-body);
  font-size: 1rem;
  padding: 12px 16px;
  border: 3px solid var(--pixel-gray);
  background: var(--pixel-dark-slate);
  color: var(--pixel-white);
}

.pixel-input:focus {
  outline: none;
  border-color: var(--pixel-cyan);
  box-shadow: 0 0 0 3px rgba(0, 240, 255, 0.2);
}
```

### Animation Library

```css
/* Pixel Fade In */
@keyframes pixelFadeIn {
  from {
    opacity: 0;
    filter: blur(4px);
  }
  to {
    opacity: 1;
    filter: blur(0);
  }
}

/* Glitch Effect */
@keyframes glitch {
  0% { transform: translate(0); }
  20% { transform: translate(-2px, 2px); }
  40% { transform: translate(-2px, -2px); }
  60% { transform: translate(2px, 2px); }
  80% { transform: translate(2px, -2px); }
  100% { transform: translate(0); }
}

/* Pixel Float */
@keyframes pixelFloat {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-8px); }
}

/* Blink (for cursor, indicators) */
@keyframes blink {
  0%, 50%, 100% { opacity: 1; }
  25%, 75% { opacity: 0; }
}
```

---

## Implementation Plan

### Phase 1: Foundation (Week 1-2)

**Goals:** Update design system, create new component library

1. **Color System Migration**
   - Update `globals.css` with new color palette
   - Update Tailwind config with custom colors
   - Create color utility classes
   - Test dark/light mode variants

2. **Typography Setup**
   - Add Pixelify Sans font (Google Fonts)
   - Update font variable declarations
   - Create typography utility classes
   - Update heading components

3. **Core Component Library**
   - Create `PixelButton` component (variants: primary, secondary, outline, ghost)
   - Create `PixelCard` component (with hover effects)
   - Create `PixelBadge` component (for tags, tech stack)
   - Create `PixelInput` component (text, textarea, select)
   - Create `PixelSection` component (with pixel border wrapper)
   - Create `PixelIcon` component (wrapper for pixel-style icons)

4. **Layout Updates**
   - Update `Navbar` with pixel styling
   - Update `Footer` with pixel styling
   - Create `PixelContainer` wrapper component
   - Update `Layout` component

**Deliverables:**
- Updated design tokens in CSS
- 6-8 base pixel components
- Updated navigation components
- Style guide documentation

### Phase 2: Asset Creation (Week 2-3)

**Goals:** Create pixel art assets and visual elements

1. **Pixel Art Assets**
   - Create 64x64px pixel art avatar/portrait
   - Create animated idle sprite (optional, 4-8 frames)
   - Create pixel icons set (16x16, 32x32)
     - Social media icons (GitHub, LinkedIn, Twitter, etc.)
     - Tech stack icons (React, TypeScript, Java, etc.)
     - UI icons (search, menu, close, arrow, etc.)
   - Create pixel pattern/texture for backgrounds

2. **Visual Elements**
   - Design pixel-style logo/wordmark
   - Create loading spinner (pixel animation)
   - Design 404 page pixel character
   - Create pixel dividers/separators

3. **Image Optimization**
   - Prepare all assets for Next.js Image optimization
   - Create responsive variants
   - Optimize file sizes (PNG with reduced palette)

**Deliverables:**
- `/public/pixels/` directory with all assets
- Sprite sheet for animations (if applicable)
- Icon system documentation

### Phase 3: Page Redesigns (Week 3-5)

**Goals:** Redesign existing pages with new design system

#### 3.1 Home Page Redesign
- Update hero banner with pixel art portrait
- Redesign "Latest Posts" section with pixel cards
- Redesign "Featured Projects" section
- Add "Now" section preview (3-4 bullet points)
- Add newsletter signup form (pixel input + button)
- Implement smooth scroll animations

#### 3.2 About Page Redesign
- Enhance profile section with larger pixel portrait
- Redesign career timeline (pixel-style vertical timeline)
- Update tech stack display (pixel badges in grid)
- Add "Stats" section (game-style: Years of Experience, Projects Completed, etc.)
- Add "Uses" preview section with link to full page
- Add resume download button (pixel button)

#### 3.3 Blog Page Redesign
- Implement search bar (pixel input with icon)
- Add category filter tabs (pixel tabs)
- Add tag cloud/list (pixel badges)
- Redesign post cards with pixel borders
- Update post detail page template
  - Add table of contents (pixel menu)
  - Update prose styling for pixel aesthetic
  - Add author bio card at bottom
  - Add related posts section
- Add RSS feed link (pixel icon + text)

#### 3.4 Projects Page Redesign
- Add filter dropdown (by tech stack)
- Add featured toggle (show all / featured only)
- Redesign project cards with pixel styling
- Add hover effects (zoom, glow)
- Implement project detail page/modal
  - Hero image with pixel border
  - Tech stack badges
  - Project description
  - Screenshots gallery (pixel-bordered)
  - Links section (GitHub, Live Demo)

#### 3.5 Contact Page Redesign
- Redesign contact form (pixel inputs)
- Add availability indicator (green dot + status)
- Update social links with pixel icons
- Add "response time" estimate
- Add success/error states with pixel styling

**Deliverables:**
- 5 redesigned pages
- Updated routing (no changes, just styling)
- Responsive design for all breakpoints

### Phase 4: New Pages (Week 5-6)

**Goals:** Create new pages (/now, /uses)

#### 4.1 Now Page (/now)
- Create route: `/app/now/page.tsx`
- Design sections:
  - Current focus areas (pixel list)
  - Learning goals (pixel progress bars)
  - Reading list (pixel cards)
  - Side projects (pixel cards with status badges)
  - Recent updates (changelog style)
  - Last updated date (bottom, muted text)
- Implement Sanity CMS schema for "now" content type
- Create update workflow (manual updates via Sanity Studio)

#### 4.2 Uses Page (/uses)
- Create route: `/app/uses/page.tsx`
- Design sections:
  - Hardware (MacBook, monitor, keyboard, etc.) with pixel icons
  - Software (categorized: Dev Tools, Design, Productivity)
  - VS Code setup (extensions list)
  - Services (subscriptions, SaaS tools)
  - Workflow description
- Static data (TypeScript file or Sanity CMS)
- Optional: Affiliate disclaimer section

**Deliverables:**
- 2 new pages with full content
- Sanity schemas (if using CMS)
- Updated navigation links

### Phase 5: Enhancements (Week 6-7)

**Goals:** Add interactive features and polish

1. **Search Functionality**
   - Implement client-side search (fuzzy search)
   - Search posts by title, excerpt, tags
   - Display results in pixel-styled list
   - Keyboard navigation support (arrow keys)

2. **Filtering & Sorting**
   - Blog post filtering by category/tag
   - Project filtering by tech stack
   - Sort options (date, popularity, alphabetical)

3. **Animations & Interactions**
   - Implement scroll-triggered animations (fade in, slide up)
   - Add micro-interactions (button presses, hovers)
   - Create loading states (pixel spinner)
   - Add page transitions (fade, slide)

4. **Newsletter Integration** (Optional)
   - Choose service (ConvertKit, Mailchimp, Buttondown)
   - Implement API integration
   - Create signup form component
   - Add success/error handling

5. **Analytics Setup**
   - Implement privacy-friendly analytics (Plausible or Fathom)
   - Track page views, popular posts
   - Add event tracking (button clicks, outbound links)

**Deliverables:**
- Working search functionality
- Filtering system for blog & projects
- Smooth animations throughout
- Optional: Newsletter integration
- Analytics tracking

### Phase 6: Testing & Optimization (Week 7-8)

**Goals:** Ensure quality, performance, accessibility

See "Testing Strategy" section below for full details.

**Deliverables:**
- Test suite with 80%+ coverage
- Performance audit results
- Accessibility audit results
- Cross-browser testing report

---

## Testing Strategy

### Testing Approach

Given the current lack of tests, we'll implement a comprehensive testing strategy from scratch:

### 1. Unit Testing

**Framework:** Jest + React Testing Library

**What to Test:**
- Utility functions (`lib/utils.ts`)
- Data fetching functions (`lib/posts.ts`, `lib/projects.ts`)
- Component logic (button states, form validation)
- Custom hooks (theme toggle, mobile detection)

**Example Tests:**
```typescript
// __tests__/lib/utils.test.ts
describe('cn (classname merger)', () => {
  it('merges classnames correctly', () => {
    expect(cn('text-red', 'bg-blue')).toBe('text-red bg-blue')
  })
})

// __tests__/components/PixelButton.test.tsx
describe('PixelButton', () => {
  it('renders children correctly', () => {
    render(<PixelButton>Click me</PixelButton>)
    expect(screen.getByText('Click me')).toBeInTheDocument()
  })
  
  it('applies variant classes', () => {
    render(<PixelButton variant="primary">Test</PixelButton>)
    expect(screen.getByRole('button')).toHaveClass('pixel-button-primary')
  })
})
```

**Target Coverage:** 80%+ for utility functions and components

### 2. Integration Testing

**Framework:** React Testing Library + MSW (Mock Service Worker)

**What to Test:**
- Page rendering with data fetching
- Form submissions (contact, newsletter)
- Navigation flows
- Search functionality
- Filter/sort interactions

**Example Tests:**
```typescript
// __tests__/pages/blog.test.tsx
describe('Blog Page', () => {
  beforeEach(() => {
    // Mock Sanity API responses
    server.use(
      rest.get('/api/posts', (req, res, ctx) => {
        return res(ctx.json(mockPosts))
      })
    )
  })
  
  it('displays list of blog posts', async () => {
    render(<BlogPage />)
    await waitFor(() => {
      expect(screen.getByText('My First Post')).toBeInTheDocument()
    })
  })
  
  it('filters posts by tag', async () => {
    render(<BlogPage />)
    const tagButton = screen.getByText('TypeScript')
    fireEvent.click(tagButton)
    await waitFor(() => {
      expect(screen.queryByText('Unrelated Post')).not.toBeInTheDocument()
    })
  })
})
```

**Target Coverage:** All critical user journeys

### 3. End-to-End Testing

**Framework:** Playwright

**What to Test:**
- Full navigation flow (home → about → blog → post → contact)
- Responsive behavior (mobile, tablet, desktop)
- Form submissions
- Search and filter interactions
- External link clicks
- Image loading and optimization

**Example Tests:**
```typescript
// e2e/navigation.spec.ts
test('user can navigate through all main pages', async ({ page }) => {
  await page.goto('/')
  await expect(page.locator('h1')).toContainText('Brian Best')
  
  await page.click('text=About')
  await expect(page).toHaveURL('/about')
  
  await page.click('text=Blog')
  await expect(page).toHaveURL('/blog')
  
  const firstPost = page.locator('.post-card').first()
  await firstPost.click()
  await expect(page).toHaveURL(/\/blog\/.*/)
})

// e2e/responsive.spec.ts
test.describe('responsive design', () => {
  test('mobile navigation works', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 })
    await page.goto('/')
    
    const menuButton = page.locator('[aria-label="Open menu"]')
    await menuButton.click()
    
    await expect(page.locator('nav')).toBeVisible()
    await page.click('text=Projects')
    await expect(page).toHaveURL('/projects')
  })
})
```

**Target Coverage:** All critical user paths on 3 viewport sizes

### 4. Visual Regression Testing

**Framework:** Percy or Chromatic

**What to Test:**
- Homepage snapshot (desktop + mobile)
- Blog listing snapshot
- Blog post snapshot (with different content types)
- Project card variations
- Component library (Storybook recommended)

**Setup:**
```bash
# Install Percy CLI
npm install --save-dev @percy/cli @percy/playwright

# Add snapshot tests
import percySnapshot from '@percy/playwright'

test('homepage visual regression', async ({ page }) => {
  await page.goto('/')
  await percySnapshot(page, 'Homepage - Desktop')
})
```

### 5. Performance Testing

**Tools:** Lighthouse CI, WebPageTest

**Metrics to Track:**
- First Contentful Paint (FCP): < 1.5s
- Largest Contentful Paint (LCP): < 2.5s
- Time to Interactive (TTI): < 3.5s
- Cumulative Layout Shift (CLS): < 0.1
- Total Blocking Time (TBT): < 200ms

**Setup Lighthouse CI:**
```json
// lighthouserc.json
{
  "ci": {
    "collect": {
      "url": [
        "http://localhost:3000",
        "http://localhost:3000/about",
        "http://localhost:3000/blog",
        "http://localhost:3000/projects"
      ],
      "numberOfRuns": 3
    },
    "assert": {
      "assertions": {
        "first-contentful-paint": ["error", { "maxNumericValue": 1500 }],
        "largest-contentful-paint": ["error", { "maxNumericValue": 2500 }],
        "cumulative-layout-shift": ["error", { "maxNumericValue": 0.1 }],
        "categories:performance": ["error", { "minScore": 0.9 }],
        "categories:accessibility": ["error", { "minScore": 0.9 }]
      }
    }
  }
}
```

### 6. Accessibility Testing

**Tools:** axe-core, Pa11y, manual testing

**What to Test:**
- Keyboard navigation (tab order, focus states)
- Screen reader compatibility (ARIA labels, semantic HTML)
- Color contrast (WCAG AA minimum)
- Form labels and error messages
- Image alt text
- Heading hierarchy

**Automated Tests:**
```typescript
// __tests__/a11y/homepage.test.ts
import { axe, toHaveNoViolations } from 'jest-axe'

expect.extend(toHaveNoViolations)

test('homepage has no accessibility violations', async () => {
  const { container } = render(<HomePage />)
  const results = await axe(container)
  expect(results).toHaveNoViolations()
})
```

**Manual Checklist:**
- [ ] All interactive elements keyboard accessible
- [ ] Focus indicators clearly visible
- [ ] Screen reader announces all content correctly
- [ ] Form errors announced to assistive tech
- [ ] Skip navigation link present
- [ ] All images have meaningful alt text
- [ ] Color contrast meets WCAG AA (4.5:1 for normal text)

### 7. Cross-Browser Testing

**Browsers to Test:**
- Chrome (latest)
- Firefox (latest)
- Safari (latest, macOS + iOS)
- Edge (latest)

**Tools:** BrowserStack or manual testing

**What to Check:**
- Layout rendering
- CSS grid/flexbox behavior
- Font rendering
- Animation performance
- Form behavior
- JavaScript functionality

### 8. Test Data Management

**Strategy:**
- Create mock data factories for posts, projects
- Use fixtures for consistent test data
- Mock Sanity CMS API responses

**Example:**
```typescript
// __mocks__/data/posts.ts
export const mockPost = {
  slug: 'test-post',
  title: 'Test Post',
  date: '2025-10-01',
  excerpt: 'Test excerpt',
  content: '# Test Content',
  coverImage: '/test-image.jpg',
  readingTime: 5
}

export const mockPosts = [mockPost, ...]
```

### 9. CI/CD Integration

**Pipeline Steps:**
1. Lint code (ESLint, TypeScript)
2. Run unit tests (Jest)
3. Run integration tests (RTL + MSW)
4. Build production bundle
5. Run E2E tests (Playwright)
6. Run Lighthouse CI
7. Run accessibility tests
8. Visual regression tests (Percy/Chromatic)
9. Deploy to Vercel preview
10. On merge to main: Deploy to production

**GitHub Actions Workflow:**
```yaml
# .github/workflows/test.yml
name: Test Suite

on: [push, pull_request]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      
      - name: Install dependencies
        run: npm ci
      
      - name: Lint
        run: npm run lint
      
      - name: Type check
        run: npx tsc --noEmit
      
      - name: Unit tests
        run: npm test -- --coverage
      
      - name: Build
        run: npm run build
      
      - name: E2E tests
        run: npx playwright test
      
      - name: Lighthouse CI
        run: npx lhci autorun
```

### Testing Timeline

**Week 7:**
- Set up testing infrastructure (Jest, RTL, Playwright)
- Write unit tests for utilities and components (50+ tests)
- Write integration tests for pages (20+ tests)
- Set up Lighthouse CI

**Week 8:**
- Write E2E tests (10+ critical paths)
- Conduct accessibility audit
- Run cross-browser testing
- Set up visual regression testing
- Fix all discovered issues
- Achieve 80%+ code coverage

---

## Migration & Deployment Plan

### Pre-Deployment Checklist

**Content:**
- [ ] All existing blog posts migrated/verified
- [ ] All projects data updated
- [ ] New "Now" page content created
- [ ] New "Uses" page content created
- [ ] About page content expanded
- [ ] Resume PDF prepared and uploaded

**Technical:**
- [ ] All tests passing
- [ ] Lighthouse scores above thresholds
- [ ] No accessibility violations
- [ ] Cross-browser testing complete
- [ ] All images optimized
- [ ] Meta tags updated (SEO)
- [ ] Sitemap.xml generated
- [ ] Robots.txt configured
- [ ] Analytics configured
- [ ] RSS feed working

**Infrastructure:**
- [ ] Vercel project configured
- [ ] Environment variables set
- [ ] Custom domain configured (if applicable)
- [ ] SSL certificate active
- [ ] CDN caching configured

### Deployment Strategy

**Option 1: Gradual Rollout (Recommended)**

1. **Preview Deployment**
   - Deploy to Vercel preview URL
   - Share with friends/colleagues for feedback
   - Fix any discovered issues
   - Duration: 1-2 days

2. **Beta Phase** (Optional)
   - Deploy to `beta.brianb.dev` subdomain
   - Add "beta" banner to site
   - Monitor analytics and user feedback
   - Duration: 1 week

3. **Production Deployment**
   - Deploy to main domain
   - Monitor error tracking (Sentry)
   - Watch analytics for issues
   - Be ready to rollback if needed

**Option 2: Direct Deployment**

1. Final review of all pages
2. Deploy to production
3. Monitor closely for 24-48 hours
4. Fix any critical issues immediately

### Post-Deployment

**Week 1:**
- Monitor analytics daily
- Check for broken links
- Review console errors
- Collect user feedback

**Week 2-4:**
- Address any reported issues
- Make minor adjustments based on feedback
- Optimize images that load slowly
- Tune animation performance

**Ongoing:**
- Monthly performance audits
- Quarterly design reviews
- Regular content updates
- Keep dependencies updated

---

## Success Metrics

### Quantitative Metrics

**Performance:**
- Lighthouse Performance score: >90
- Lighthouse Accessibility score: 100
- Page load time (LCP): <2.5s
- Time to Interactive: <3.5s

**Engagement:**
- Bounce rate: <40% (down from current baseline)
- Average session duration: >2 minutes
- Pages per session: >2.5

**Technical:**
- Test coverage: >80%
- Zero critical accessibility violations
- Zero console errors in production

### Qualitative Metrics

**User Feedback:**
- Survey site visitors for design feedback
- Ask peers for professional opinion
- Collect testimonials for portfolio

**Business Goals:**
- Increased inbound opportunities (consulting, speaking)
- Higher engagement on blog posts
- More GitHub stars on featured projects
- Improved professional brand recognition

---

## Risks & Mitigation

### Risk 1: Pixel Design Too Extreme
**Impact:** Users find design hard to read or unprofessional  
**Mitigation:**
- Use pixel fonts only for headings (not body text)
- Ensure high color contrast
- Get feedback early (preview deployment)
- Have fallback: tone down pixel elements

### Risk 2: Performance Degradation
**Impact:** Animations or assets slow down site  
**Mitigation:**
- Optimize all pixel art assets
- Use CSS animations (not JS)
- Lazy load images and components
- Monitor Lighthouse scores throughout development

### Risk 3: Scope Creep
**Impact:** Project takes too long, burnout  
**Mitigation:**
- Follow phased approach strictly
- Mark features as "Phase 2" (post-launch)
- Set hard deadline (8 weeks)
- MVP first, enhancements later

### Risk 4: Content Management Complexity
**Impact:** Difficult to update content after launch  
**Mitigation:**
- Keep Sanity CMS integration simple
- Document content update process
- Create content templates
- Test content workflow before launch

### Risk 5: Accessibility Issues
**Impact:** Site not usable for all users  
**Mitigation:**
- Test with screen readers early
- Use semantic HTML
- Run automated accessibility tests
- Get external accessibility audit

---

## Future Enhancements (Post-Launch)

### Phase 2 Features (Months 2-3)
1. **Blog Comments** (Giscus or similar)
2. **Search Improvements** (Algolia integration)
3. **Post Series** (multi-part articles with navigation)
4. **Dark/Light Mode Toggle** (enhanced with pixel theme variants)
5. **Reading Progress Indicator** (pixel-style bar)

### Phase 3 Features (Months 4-6)
1. **Newsletter Integration** (ConvertKit/Buttondown)
2. **Webmentions** (social interactions)
3. **Related Posts Algorithm** (AI-powered suggestions)
4. **Speaking Page** (talks, workshops, podcasts)
5. **Bookmarks/Links Page** (curated resources)

### Phase 4 Features (Months 6+)
1. **Interactive Demos** (embedded CodeSandbox/StackBlitz)
2. **Course/Tutorial Section** (video content)
3. **Podcast Page** (if starting a podcast)
4. **Dashboard/Stats Page** (personal metrics)
5. **API for Blog** (programmatic access to content)

---

## Conclusion

This redesign plan transforms Brian Best's personal blog from a Persona 5-inspired dark theme to a modern, clean 16-bit pixel aesthetic that balances nostalgia with professionalism. The plan includes:

✅ **Comprehensive site architecture** with new pages (/now, /uses)  
✅ **Modern pixel design system** with clean colors and typography  
✅ **Phased implementation** over 8 weeks  
✅ **Robust testing strategy** (unit, integration, E2E, visual, accessibility)  
✅ **Clear migration path** preserving Next.js/Vercel infrastructure  
✅ **Success metrics** for measuring impact  

### Key Differentiators

This redesign positions Brian Best's site as:
- **Memorable:** Unique pixel aesthetic stands out from generic engineer blogs
- **Professional:** Clean, readable, accessible design suitable for senior-level presence
- **Personal:** Reflects personality and interests (gaming, tech, modern design)
- **Practical:** Fast, static, easy to maintain on Vercel
- **Complete:** All expected sections for a senior engineer (portfolio, blog, now, uses)

### Next Steps

1. ✅ Review and approve this plan
2. ⏭️ Set up development environment
3. ⏭️ Begin Phase 1 (Foundation) implementation
4. ⏭️ Schedule weekly progress reviews
5. ⏭️ Target launch date: **December 2, 2025** (8 weeks from now)

---

**Plan Status:** Draft v1.0  
**Last Updated:** October 7, 2025  
**Review Date:** October 14, 2025  
**Approved By:** [Pending]

---

*This document is a living specification and will be updated as the project progresses.*
