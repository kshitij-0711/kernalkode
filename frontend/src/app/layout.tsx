import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeContext";
import Providers from "./providers";
import CustomCursor from "@/components/CustomCursor";
import LenisProvider from "@/components/LenisProvider";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

const BASE_URL = "https://www.boringstudios.pro";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#0f0f0f" },
    { media: "(prefers-color-scheme: light)", color: "#f5f4f0" },
  ],
};

export const metadata: Metadata = {
  // ── Core Meta ──────────────────────────────────────────
  title: {
    default: "Boring Studios – Premium Web Design & Development Agency",
    template: "%s | Boring Studios",
  },
  description:
    "Revenue-first web design & development studio. We build high-converting websites, landing pages & e-commerce stores that turn visitors into customers. Book a free intro call today.",
  keywords: [
    "web design agency",
    "premium web development",
    "landing page design",
    "e-commerce development",
    "conversion-focused web design",
    "high-converting websites",
    "Next.js development",
    "Shopify development",
    "branding agency",
    "UI/UX design",
    "revenue-focused web design",
    "Boring Studios",
  ],
  authors: [{ name: "Boring Studios", url: BASE_URL }],
  creator: "Boring Studios",
  publisher: "Boring Studios",

  // ── Indexing & Crawling ────────────────────────────────
  metadataBase: new URL(BASE_URL),
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // ── Open Graph ─────────────────────────────────────────
  openGraph: {
    type: "website",
    locale: "en_US",
    url: BASE_URL,
    siteName: "Boring Studios",
    title: "Boring Studios – Premium Web Design & Development Agency",
    description:
      "Revenue-first web design & development studio. We build high-converting websites, landing pages & e-commerce stores. Book a free intro call.",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Boring Studios – Premium Web Design & Development Agency",
        type: "image/png",
      },
    ],
  },

  // ── Twitter Card ───────────────────────────────────────
  twitter: {
    card: "summary_large_image",
    title: "Boring Studios – Premium Web Design & Development",
    description:
      "Revenue-first design & development for businesses that refuse to blend in. High-converting websites, landing pages & e-commerce stores.",
    images: ["/twitter-image.png"],
    creator: "@kshitij_00",
    site: "@kshitij_00",
  },

  // ── Verification (update with actual tokens when available) ──
  // verification: {
  //   google: "YOUR_GOOGLE_VERIFICATION_TOKEN",
  //   yandex: "YOUR_YANDEX_TOKEN",
  // },

  // ── App-specific ───────────────────────────────────────
  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${cormorant.variable} ${jetbrainsMono.variable}`}
      data-theme="dark"
    >
      <head>
        {/* ── Preconnect to critical third-party origins ── */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          rel="preconnect"
          href="https://api.fontshare.com"
          crossOrigin="anonymous"
        />

        {/* ── JSON-LD Structured Data: Organization ── */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              name: "Boring Studios",
              url: BASE_URL,
              logo: `${BASE_URL}/opengraph-image.png`,
              image: `${BASE_URL}/opengraph-image.png`,
              description:
                "Revenue-first web design & development studio. We build high-converting websites, landing pages & e-commerce stores that turn visitors into customers.",
              address: {
                "@type": "PostalAddress",
                addressCountry: "IN",
              },
              telephone: "+919644348997",
              email: "kshitij@boringstudious.pro",
              priceRange: "$$",
              areaServed: "Worldwide",
              sameAs: [
                "https://www.linkedin.com/in/kshitij-kevat-42b81a280",
                "https://x.com/kshitij_00",
              ],
              founder: {
                "@type": "Person",
                name: "Kshitij Kevat",
                url: "https://www.linkedin.com/in/kshitij-kevat-42b81a280",
              },
              knowsAbout: [
                "Web Design",
                "Web Development",
                "E-Commerce",
                "Landing Page Design",
                "Branding",
                "UI/UX Design",
                "Next.js",
                "React",
                "Shopify",
              ],
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Web Design & Development Services",
                itemListElement: [
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Landing Page Design & Development",
                      description:
                        "Strategy-driven landing pages that convert cold traffic into booked calls.",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Website & E-Commerce Development",
                      description:
                        "Full-scale websites and e-commerce stores that reduce cart abandonment and drive revenue.",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Branding & Visual Identity",
                      description:
                        "Premium brand identities that let you charge more than competitors.",
                    },
                  },
                ],
              },
            }),
          }}
        />

        {/* ── JSON-LD: WebSite (enables sitelinks search box in Google) ── */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Boring Studios",
              url: BASE_URL,
              potentialAction: {
                "@type": "SearchAction",
                target: `${BASE_URL}/?q={search_term_string}`,
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />

        {/* ── JSON-LD: BreadcrumbList ── */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "Home",
                  item: BASE_URL,
                },
              ],
            }),
          }}
        />
      </head>

      <body className="antialiased transition-colors duration-300">
        <Providers>
          <ThemeProvider>
            <CustomCursor />
            <LenisProvider>{children}</LenisProvider>
          </ThemeProvider>
        </Providers>
      </body>
    </html>
  );
}
