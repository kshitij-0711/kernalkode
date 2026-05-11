import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
    // Serve images in modern formats for better CWV (SEO_SKILL Section 1: LCP)
    formats: ["image/avif", "image/webp"],
  },

  // ── SEO: Security & Performance Headers ──────────────────
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          // Security headers (SEO_SKILL Section 5: Trust Signals)
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
          {
            key: "X-XSS-Protection",
            value: "1; mode=block",
          },
          {
            key: "Referrer-Policy",
            value: "origin-when-cross-origin",
          },
          {
            key: "Permissions-Policy",
            value:
              "camera=(), microphone=(), geolocation=(), interest-cohort=()",
          },
        ],
      },
      {
        // Aggressive caching for static assets (SEO_SKILL Section 1: Page Speed)
        source: "/(.*)\\.(ico|png|jpg|jpeg|gif|webp|avif|svg|woff|woff2|ttf)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },

  // ── Compression ──────────────────────────────────────────
  compress: true,

  // ── Strict mode for better performance ──────────────────
  reactStrictMode: true,

  // ── Powered-by header removal (minor security) ──────────
  poweredByHeader: false,
};

export default nextConfig;
