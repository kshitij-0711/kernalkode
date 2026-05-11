# SEO SKILL — Rank #1 Optimization Guide

## Purpose
You are an elite SEO engineer. When given a website, codebase, or content, apply every technique in this skill to maximize organic search rankings. Your goal is first-page, position-#1 results on Google, Bing, and other major search engines.

---

## 1. TECHNICAL SEO (Highest Priority)

### Core Web Vitals (Google Ranking Signals)
- **LCP (Largest Contentful Paint)**: Must be < 2.5s
  - Preload hero images: `<link rel="preload" as="image" href="hero.webp">`
  - Use next-gen formats: WebP, AVIF
  - Serve images via CDN
- **INP (Interaction to Next Paint)**: Must be < 200ms
  - Break up long JavaScript tasks (< 50ms each)
  - Use `requestIdleCallback` for non-critical work
  - Minimize main thread blocking
- **CLS (Cumulative Layout Shift)**: Must be < 0.1
  - Always set explicit `width` and `height` on images/videos
  - Reserve space for ads/embeds with `min-height`
  - Avoid injecting content above existing content

### Crawlability & Indexability
- Generate and submit `sitemap.xml` to Google Search Console
- Maintain a clean `robots.txt` — never accidentally block CSS/JS
- Use canonical tags to prevent duplicate content:
  ```html
  <link rel="canonical" href="https://yourdomain.com/page/" />
  ```
- Implement hreflang for multi-language sites
- Fix all 404s and redirect chains (use 301, never 302 for permanent)
- Ensure all pages are reachable within 3 clicks from homepage

### Structured Data (Schema Markup)
Always add relevant JSON-LD schema. Examples:
```html
<!-- Organization -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Your Brand",
  "url": "https://yourdomain.com",
  "logo": "https://yourdomain.com/logo.png",
  "sameAs": ["https://twitter.com/yourbrand"]
}
</script>

<!-- Article / BlogPost -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Page Title Here",
  "author": {"@type": "Person", "name": "Author Name"},
  "datePublished": "2025-01-01",
  "dateModified": "2025-01-15",
  "image": "https://yourdomain.com/og-image.jpg"
}
</script>

<!-- FAQ (great for featured snippets) -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [{
    "@type": "Question",
    "name": "What is X?",
    "acceptedAnswer": {"@type": "Answer", "text": "X is..."}
  }]
}
</script>
```

### Page Speed Checklist
- [ ] Enable Gzip/Brotli compression on server
- [ ] Minify HTML, CSS, JS
- [ ] Defer non-critical JavaScript: `<script defer src="...">`
- [ ] Lazy-load below-fold images: `loading="lazy"`
- [ ] Use HTTP/2 or HTTP/3
- [ ] Set aggressive cache headers (Cache-Control: max-age=31536000 for static assets)
- [ ] Eliminate render-blocking resources
- [ ] Use a CDN (Cloudflare, Fastly, AWS CloudFront)

---

## 2. ON-PAGE SEO

### Title Tags
- 50–60 characters max
- Primary keyword near the start
- Include brand name at end
- Format: `Primary Keyword – Secondary Keyword | Brand`
- Every page must have a unique title

### Meta Descriptions
- 150–160 characters
- Include primary keyword naturally
- Write as a call-to-action; include a value proposition
- Every page must have a unique meta description
```html
<meta name="description" content="Learn how to [do X] with our step-by-step guide. [Benefit]. Start [action] today — [brand].">
```

### Heading Structure
```
H1  — One per page. Contains the primary keyword. Matches search intent.
H2  — Major sections. Include secondary/LSI keywords.
H3  — Subsections under H2. Long-tail keywords and questions.
H4+ — Deep detail only when necessary.
```
- Never skip heading levels
- Never use headings just for styling

### URL Structure
- Short, descriptive, lowercase, hyphen-separated
- Include primary keyword
- No dates unless content is truly time-sensitive
- ✅ `/seo-tips/` ❌ `/blog/post?id=123&cat=4`

### Image SEO
```html
<img
  src="descriptive-keyword-filename.webp"
  alt="Concise description with keyword if natural"
  width="800"
  height="600"
  loading="lazy"
/>
```

### Internal Linking
- Every new page should receive at least 2–3 internal links from existing pages
- Use descriptive, keyword-rich anchor text (not "click here")
- Link to pillar pages from cluster pages and vice versa
- Fix all broken internal links immediately

### Content Quality Rules
- Minimum 1,500 words for competitive topics; 800 for long-tail
- Answer the search intent in the first paragraph
- Include a TL;DR or summary for long articles
- Use bullet points, numbered lists, and tables for scannability
- Add a FAQ section targeting "People Also Ask" questions
- Update content regularly (Google favors freshness)

---

## 3. OPEN GRAPH & SOCIAL META

```html
<!-- Open Graph -->
<meta property="og:title" content="Page Title — Brand" />
<meta property="og:description" content="150-char description" />
<meta property="og:image" content="https://yourdomain.com/og-image.jpg" />
<meta property="og:image:width" content="1200" />
<meta property="og:image:height" content="630" />
<meta property="og:url" content="https://yourdomain.com/page/" />
<meta property="og:type" content="website" />
<meta property="og:site_name" content="Brand Name" />

<!-- Twitter Card -->
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="Page Title — Brand" />
<meta name="twitter:description" content="150-char description" />
<meta name="twitter:image" content="https://yourdomain.com/og-image.jpg" />
```

---

## 4. MOBILE SEO

- Always mobile-first design
- Viewport meta tag on every page:
  ```html
  <meta name="viewport" content="width=device-width, initial-scale=1">
  ```
- Tap targets minimum 48×48px with 8px spacing
- Font size minimum 16px for body text
- No horizontal scroll
- Test with Google's Mobile-Friendly Test tool

---

## 5. SECURITY & TRUST SIGNALS

- HTTPS on all pages (HTTP pages are penalized)
- Valid SSL certificate, no mixed content warnings
- Add `<meta name="robots" content="index, follow">` on all indexable pages
- Add privacy policy and terms of service pages (E-E-A-T signals)

---

## 6. E-E-A-T (Experience, Expertise, Authoritativeness, Trustworthiness)

Google's quality rater guidelines prioritize E-E-A-T:
- Add author bios with credentials on every article
- Display publication and last-updated dates
- Link out to authoritative sources (Wikipedia, .gov, .edu)
- Earn backlinks from high-DA domains (guest posts, HARO, digital PR)
- Add reviews, testimonials, and social proof
- Display contact information, physical address if applicable
- Get listed in Google Business Profile if local

---

## 7. KEYWORD STRATEGY

### Keyword Research Workflow
1. Start with seed keywords (your core topic)
2. Expand with tools: Google Keyword Planner, Ahrefs, Semrush, Ubersuggest
3. Classify by intent:
   - **Informational**: "how to X", "what is X" → blog posts, guides
   - **Navigational**: "brand login" → homepage, product pages
   - **Commercial**: "best X", "X vs Y" → comparison pages
   - **Transactional**: "buy X", "X price" → product/service pages
4. Target one primary keyword + 2–4 secondary/LSI keywords per page
5. Map keywords to pages (no keyword cannibalization)

### Long-Tail Strategy
- Target 3–5 word phrases for new sites (easier to rank)
- Build topical authority before targeting high-volume head terms
- Use "People Also Ask" and "Related Searches" for content ideas

---

## 8. PAGE-LEVEL SEO AUDIT CHECKLIST

Run this for every page before publishing:

```
[ ] Unique, keyword-optimized title tag (50–60 chars)
[ ] Unique meta description (150–160 chars)
[ ] One H1 with primary keyword
[ ] Logical H2/H3 structure
[ ] Canonical tag present
[ ] OG + Twitter meta tags
[ ] Images: WebP format, descriptive filenames, alt text, explicit dimensions
[ ] Internal links (at least 2 in, 2 out)
[ ] Schema markup (Article, FAQ, BreadcrumbList as appropriate)
[ ] Page loads in < 3s on mobile (test with PageSpeed Insights)
[ ] Mobile-friendly layout
[ ] HTTPS, no mixed content
[ ] robots meta tag: index, follow
[ ] URL: short, lowercase, hyphenated, includes keyword
[ ] Content: 800+ words, answers search intent, includes FAQ
[ ] Fresh: dateModified updated if content changed
```

---

## 9. NEXT.JS / REACT / FRAMEWORK-SPECIFIC SEO

### Next.js (App Router)
```tsx
// app/page.tsx
export const metadata = {
  title: 'Primary Keyword – Secondary | Brand',
  description: '150-char description with keyword.',
  openGraph: {
    title: 'Primary Keyword – Brand',
    description: '150-char description.',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
  },
  twitter: { card: 'summary_large_image' },
  alternates: { canonical: 'https://yourdomain.com/page/' },
  robots: { index: true, follow: true },
}
```

### Next.js Dynamic Sitemap
```tsx
// app/sitemap.ts
export default function sitemap() {
  return [
    { url: 'https://yourdomain.com', lastModified: new Date(), changeFrequency: 'weekly', priority: 1 },
    { url: 'https://yourdomain.com/blog', lastModified: new Date(), changeFrequency: 'daily', priority: 0.8 },
  ]
}
```

### React (without Next.js)
Use `react-helmet-async`:
```jsx
import { Helmet } from 'react-helmet-async'
<Helmet>
  <title>Keyword – Brand</title>
  <meta name="description" content="..." />
  <link rel="canonical" href="https://yourdomain.com/page/" />
</Helmet>
```
> ⚠️ CSR React is bad for SEO. Prefer SSR (Next.js) or SSG for SEO-critical pages.

---

## 10. MONITORING & TOOLS

| Tool | Purpose |
|------|---------|
| Google Search Console | Index coverage, clicks, impressions, Core Web Vitals |
| Google PageSpeed Insights | CWV scores, performance issues |
| Ahrefs / Semrush | Backlinks, keyword rankings, competitor analysis |
| Screaming Frog | Site crawl, broken links, duplicate content |
| Schema Markup Validator | Validate JSON-LD structured data |
| GTmetrix | Page speed waterfall analysis |
| Lighthouse (Chrome DevTools) | Full SEO + performance audit |

---

## USAGE INSTRUCTIONS FOR AI

When asked to audit or improve SEO on any file or project:
1. Run the **Page-Level SEO Audit Checklist** (Section 8) on every relevant file
2. Fix technical issues first (Core Web Vitals, crawlability)
3. Then fix on-page elements (title, meta, headings, schema)
4. Report what was changed and why, referencing the relevant section of this skill
5. Never remove existing content without explicit permission
6. Always output valid, production-ready code
