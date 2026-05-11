import type { Metadata } from "next";
import Preloader from "@/components/Preloader";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Work from "@/components/Work";
import Services from "@/components/Services";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

// ── Page-level metadata (overrides layout defaults) ──────────
export const metadata: Metadata = {
  title:
    "Boring Studios – Premium Web Design & Development Agency | Revenue-First",
  description:
    "Revenue-first web design & development studio. We build high-converting websites, landing pages & e-commerce stores that turn visitors into customers. Book a free intro call today.",
  alternates: {
    canonical: "https://www.boringstudios.pro",
  },
};

// ── FAQ Structured Data (Section 3 of SEO_SKILL: Schema Markup) ──
const faqStructuredData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Do you handle everything from branding to website and e-commerce development?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We're a full-service digital partner, meaning we handle the entire project lifecycle—from visual identity and UX strategy to custom development and final deployment.",
      },
    },
    {
      "@type": "Question",
      name: "What's your process for delivering a project?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We start with a deep-dive discovery to align on revenue goals. From there, we map the user journey, design the interface, develop the solution, and rigorously test before launch.",
      },
    },
    {
      "@type": "Question",
      name: "How long does a typical project take?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "For a landing page, it usually takes 1-2 weeks. Full-scale websites and e-commerce platforms typically span 4-8 weeks, depending on the complexity and feature requirements.",
      },
    },
    {
      "@type": "Question",
      name: "Do you provide marketing services as well?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our focus is purely on building high-converting digital assets. While we don't run ad campaigns, we ensure the platform is perfectly optimized to convert the traffic your marketing team generates.",
      },
    },
    {
      "@type": "Question",
      name: "Do you build MVPs or just full-scale products?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We do both. For businesses validating new ideas, we build rapid, scalable MVPs. For established brands, we architect comprehensive, robust platforms tailored to complex operations.",
      },
    },
    {
      "@type": "Question",
      name: "Do you provide post-launch support?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolutely. We stand by our work with continuous performance monitoring, security updates, and bug fixes to ensure your platform remains optimal post-launch.",
      },
    },
    {
      "@type": "Question",
      name: "What if I need ongoing updates and changes?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We offer flexible retainer packages for continuous iteration, A/B testing, and feature development as your business evolves and scales.",
      },
    },
    {
      "@type": "Question",
      name: "Do you work with startups or only established businesses?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We partner with ambitious teams across the spectrum. Whether you're a funded startup needing to make a splash or an established enterprise requiring a technical overhaul, we adapt to your scale.",
      },
    },
    {
      "@type": "Question",
      name: "What platforms do you build on?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We are tech-agnostic but primarily utilize modern stacks like Next.js, React, and GSAP for custom builds, alongside leading e-commerce engines like Shopify when appropriate.",
      },
    },
  ],
};

export default function Home() {
  return (
    <>
      {/* FAQ Rich Snippet Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }}
      />

      <main
        className="relative w-full min-h-screen"
        role="main"
        id="main-content"
      >
        <Preloader />
        <Navigation />
        <Hero />
        <Marquee />
        <Work />
        <Services />
        <Pricing />
        <FAQ />
        <Footer />
      </main>
    </>
  );
}
