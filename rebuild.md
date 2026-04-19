# BORING STUDIOS — ANTIGRAVITY BUILD PROMPT
# Paste this entire prompt into Antigravity's mission/agent input to start the build.

---

## MISSION

Act as a senior frontend developer and creative director. Build a complete, production-ready agency website for **Boring Studios** — a premium web development studio. The site must have award-winning design quality (Awwwards / CSSDA level), inspired by the editorial luxury aesthetic of leonidkostetskyi.com. This is NOT a generic landing page. Every pixel is intentional.

---

## TECH STACK

- **Framework:** Next.js 14+ with App Router
- **Language:** TypeScript
- **Styling:** Tailwind CSS + custom CSS variables for theming
- **Animations:** GSAP (with ScrollTrigger and SplitText plugins via CDN or npm)
- **Smooth Scroll:** Lenis.js
- **Fonts:** Use Google Fonts — `Cormorant Garamond` (display, light 300) + `DM Sans` (body, 400/500)
- **Deployment-ready:** No external backend needed. Static site.

---

## DESIGN SYSTEM

### Colors (CSS variables — both themes required)

```css
:root[data-theme="dark"] {
  --bg: #0f0f0f;
  --text: #f0ede8;
  --text-muted: rgba(240, 237, 232, 0.45);
  --border: rgba(240, 237, 232, 0.08);
  --border-hover: rgba(240, 237, 232, 0.25);
}
:root[data-theme="light"] {
  --bg: #f5f4f0;
  --text: #111110;
  --text-muted: rgba(17, 17, 16, 0.45);
  --border: rgba(17, 17, 16, 0.08);
  --border-hover: rgba(17, 17, 16, 0.25);
}
```

Default theme: **dark**. Toggle via a button in the nav that swaps `data-theme` on `<html>`.

### Typography rules
- Display headings: `Cormorant Garamond`, weight 300, sizes 8–12vw, letter-spacing 0.02–0.06em
- Section labels: `DM Sans`, 11px, uppercase, letter-spacing 0.2em, `var(--text-muted)`
- Body: `DM Sans`, 15–16px, weight 400, line-height 1.8, `var(--text-muted)`
- NO bold headings. Light and thin weights only. Restraint is the entire aesthetic.
- NO gradients, NO shadows, NO glow effects, NO colored accents

### Custom Cursor
A small 8px filled circle (`var(--text)`) that follows the mouse via JS `mousemove`. On hover over any `<a>` or `[data-cursor]` element, it scales to a 44px hollow ring with `border: 1px solid var(--text)` and `background: transparent`. Smooth `transform` transition 0.15s ease.

---

## PAGE STRUCTURE

### 1. PRELOADER (full-screen, shown on first load)

- Full-screen div, `background: var(--bg)`, z-index 9999
- Center: The word **`Boring.`** in 10vw Cormorant Garamond, light, fades in on load
- Below it: a percentage counter `0%` → `100%` in DM Sans 12px, uppercase, `var(--text-muted)`, counting up over 1.8s using a JS easing function (ease-in-out cubic)
- When counter hits 100%: GSAP timeline — top half of preloader slides to `y: -100%`, bottom half to `y: 100%` (vertical split wipe), duration 0.8s, ease: `power3.inOut`
- After wipe: hero elements stagger in (each 80ms apart), `y: 40px → 0`, `opacity: 0 → 1`

### 2. NAVIGATION (fixed, full-width)

```
[Boring.]                    [Home]  [Work]  [Services]  [Pricing]  [FAQ]  [Contact]    [Dark / Light]
```

- Height: 64px. Padding: 0 48px.
- Logo `Boring.` — Cormorant Garamond, 20px, light weight, links to `/`
- Nav links — DM Sans, 11px, uppercase, letter-spacing 0.15em, `var(--text-muted)`. Hover → `var(--text)`, smooth color transition 0.3s. Underline on hover via CSS `::after` pseudo element that animates `scaleX: 0 → 1` from left.
- Theme toggle — DM Sans, 11px, uppercase. Shows `Dark` or `Light` depending on current theme.
- Background: fully transparent. No backdrop blur.
- On mobile (< 768px): hide nav links. Show a thin hamburger (two 1px lines, 20px wide, 6px apart). Click opens a full-screen overlay with the nav links centered vertically, large (5vw), Cormorant Garamond.

### 3. HERO SECTION (100vh, centered)

Content centered vertically and horizontally, or left-aligned with generous top padding.

```
— Premium Web Development Studio          ← 11px label, DM Sans, uppercase, muted

We help businesses
increase revenue.                         ← 10vw Cormorant Garamond, light, two lines

Revenue-first design and development      ← 16px DM Sans, muted, max-width 520px
for businesses that refuse to blend in.

[Book an Intro Call →]                    ← minimal border button (see button spec)
```

**Hero text animation (GSAP SplitText):**
- Split the headline into individual words
- Each word wrapped in `overflow: hidden` span
- On load (after preloader exits): each word animates `y: 100% → 0` with 60ms stagger, duration 0.7s, ease `power3.out`
- Label and subtext fade in after headline completes (400ms delay), `opacity: 0 → 1`, `y: 20px → 0`

**Scroll indicator** — bottom center of hero:
- A vertical 1px line, 48px tall, `var(--border-hover)` color
- Below it: `Scroll` in 10px DM Sans uppercase, `var(--text-muted)`
- Line animates with a subtle breathing scale or opacity pulse in CSS `@keyframes`

**Button spec:**
- Text: DM Sans, 12px, uppercase, letter-spacing 0.12em
- Border: 0.5px solid `var(--border-hover)`, padding 14px 32px
- Background: transparent
- Hover: background fills with `var(--text)`, text color becomes `var(--bg)` — transition via CSS `clip-path` sweep or `background-size` trick, duration 0.35s
- No border-radius (sharp rectangle) OR very slight `border-radius: 2px`

### 4. MARQUEE TICKER

Full-width horizontal strip between hero and services, with 0.5px borders above and below.

Scrolling text (infinite left loop, ~45s, CSS animation):
```
Design Excellence  —  Scalable Systems  —  Revenue Focused  —  Forward Thinking  —  Pixel Perfect  —
```

- DM Sans, 13px, uppercase, letter-spacing 0.12em, `var(--text-muted)`
- Two rows: first row scrolls left, second row scrolls right (creates optical texture)
- Padding: 14px 0

### 5. SERVICES SECTION

Section padding: 120px 48px.

**Label:** `— Specialization` | DM Sans 11px uppercase muted  
**Heading:** `What We Do` | Cormorant Garamond 6vw light  
**Subtext:** `We bridge the gap between aesthetics and conversion, formulating solutions that work relentlessly for your business.` | DM Sans 16px muted max-width 560px margin-bottom 80px

**Three service rows** — full width, each separated by 0.5px `var(--border)` line. Top border on first, bottom border on last.

Each row:
```
[01]    Website & Landing Page                                          [→]
```
- Padding: 28px 0
- Number: DM Sans 11px muted, min-width 48px
- Name: Cormorant Garamond 3vw light, `var(--text)`
- Arrow icon: 18px, `var(--text-muted)`, right-aligned, `transition: transform 0.3s`

**Hover state on row:** Subtle background tint `rgba(var(--text-rgb), 0.02)`, arrow moves right `translateX(4px)`.

**Click to expand (accordion):** GSAP height tween from 0 → auto, duration 0.5s ease. Arrow rotates 90°. Expanded content:

- `Website & Landing Page:` Stop bleeding money on ads that lead nowhere. We design sites that convert cold traffic into booked calls without you lifting a finger.
- `E-Commerce:` Pretty product photos mean nothing if your checkout scares customers away. We create e-commerce sites that reduce cart abandonment and turn browsers into buyers.  
- `Branding:` Generic brand = commodity pricing. We create visual identities that let you charge 2x–3x more than competitors selling the exact same thing.

Expanded text: DM Sans 15px muted, padding-left 48px (aligned under the service name), padding-bottom 28px.

### 6. PRICING SECTION

Section padding: 120px 48px.

**Label:** `— Plans`  
**Heading:** `Simple, Honest Pricing`

**Two cards side by side** (on desktop), or stacked on mobile. Cards use CSS Grid: `grid-template-columns: 1fr 1fr`, gap 24px.

Each card:
- Background: transparent
- Border: 0.5px solid `var(--border)`
- Padding: 48px 40px
- Border-radius: 2px
- Hover: border becomes `var(--border-hover)`, transition 0.3s

**Card 1 — High-Converting Landing Page**
```
Landing Page

For businesses launching products, testing 
offers or validating ideas fast.

────────────────────────────────
Strategy & discovery session
Conversion copywriting
Mobile-optimized design
Unlimited revisions
Analytics setup
48-hour response time
────────────────────────────────

[Book an Intro Call →]
```

**Card 2 — Websites & E-Commerce**
```
Website & E-Commerce

For businesses that need a site or store
that actually converts browsers into buyers.

────────────────────────────────
Strategy & discovery session
Up to 5–6 pages
Conversion copywriting
Development (Framer, Next.js, Shopify)
Mobile-optimized & fast loading
48-hour response time
────────────────────────────────

[Book an Intro Call →]
```

Feature list items: DM Sans 14px, `var(--text-muted)`, each separated by 0.5px `var(--border)` line (no bullets).

Below cards, full-width centered:
```
Let's see how we can fix the issues holding you back from driving more revenue.

[Book an Intro Call →]
```

### 7. FAQ SECTION

Section padding: 120px 48px.

**Label:** `— Questions`  
**Heading:** `We Got Answers.`

Nine accordion rows, same pattern as services. Each row:
```
[01]   Do you handle everything from branding to website development?         [+]
```

Questions:
1. Do you handle everything from branding to website and e-commerce development?
2. What's your process for delivering a project?
3. How long does a typical project take?
4. Do you provide marketing services as well?
5. Do you build MVPs or just full-scale products?
6. Do you provide post-launch support?
7. What if I need ongoing updates and changes?
8. Do you work with startups or only established businesses?
9. What platforms do you build on?

`+` icon rotates 45° → `×` on expand. Answers: 2–3 sentences each (write realistic placeholder answers for a premium web dev agency). GSAP height animation.

### 8. CONTACT / FOOTER SECTION

**Large display text** — full viewport width, Cormorant Garamond, `15vw`, light weight, `var(--text)`:
```
Boring Studios
```
This sits above the footer as a typographic statement. Optionally implement as a slow horizontal marquee.

**Footer grid** — two columns below the display text, 0.5px top border, padding 48px 48px 32px:

```
Directory                          Follow
─────────────────                  ─────────────────
Inquiries                          LinkedIn
hello@boringstudios.pro
```

Labels: DM Sans 11px uppercase muted. Links: DM Sans 14px `var(--text)`. Hover: muted → full opacity.

**Footer bar** — full width, 0.5px top border, padding 16px 48px:
```
[Location]        [Live clock: 00:00:00]        [© 2025. Boring Studios. All rights reserved]
```

Live clock: JS `setInterval` updating every second, DM Sans 12px monospace `font-variant-numeric: tabular-nums`.

### 9. PAGE TRANSITION OVERLAY

Implement a `<div id="page-transition">` that covers the screen during navigation:
- Fixed, full-screen, `background: var(--bg)`, initially `y: 100%`
- On link click: `y: 100% → 0` (slides up), then after new page loads `y: 0 → -100%` (slides out upward)
- GSAP, duration 0.6s, `power3.inOut`

---

## SCROLL ANIMATIONS

Use GSAP ScrollTrigger for all section entrance animations:

- **Section labels and headings:** clip-mask reveal — wrap text in `overflow: hidden` container, animate `y: 100% → 0` when section enters viewport. Trigger: `start: "top 85%"`.
- **Cards and rows:** stagger fade + translate, `y: 30px → 0`, `opacity: 0 → 1`, stagger 0.1s
- **Marquee:** runs continuously, no scroll trigger needed

---

## LENIS SMOOTH SCROLL SETUP

```js
import Lenis from '@studio-freight/lenis'
const lenis = new Lenis({ duration: 1.2, easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)) })
function raf(time) { lenis.raf(time); requestAnimationFrame(raf) }
requestAnimationFrame(raf)
```

Connect to GSAP ScrollTrigger via `lenis.on('scroll', ScrollTrigger.update)`.

---

## FILE STRUCTURE

```
/app
  /page.tsx              ← homepage
  /layout.tsx            ← root layout with Lenis, cursor, theme provider
  /globals.css           ← CSS variables, base resets, fonts
/components
  /Preloader.tsx
  /Navigation.tsx
  /Hero.tsx
  /Marquee.tsx
  /Services.tsx
  /Pricing.tsx
  /FAQ.tsx
  /Footer.tsx
  /CustomCursor.tsx
  /PageTransition.tsx
/lib
  /gsap.ts               ← GSAP + ScrollTrigger setup
  /lenis.ts              ← Lenis setup
```

---

## CONSTRAINTS & QUALITY REQUIREMENTS

- **Performance:** No images required. Pure typography and code.
- **Mobile-first:** All sections fully responsive. Headings scale with `clamp()`.
- **No color accents anywhere.** Monochromatic only.
- **No rounded corners** on cards/buttons (or max `border-radius: 2px`).
- **No box shadows.**
- **No gradients.**
- The site should feel like it belongs next to leonidkostetskyi.com, craft.co, and linear.app in quality.
- All animations must respect `prefers-reduced-motion: reduce` — wrap GSAP calls in a check.

---

## START COMMAND

After generating the project, run:
```bash
npm install && npm run dev
```
Open the browser preview and confirm the preloader, hero animation, smooth scroll, and dark/light theme toggle all work correctly before marking complete.
