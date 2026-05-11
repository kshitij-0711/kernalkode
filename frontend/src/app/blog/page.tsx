import type { Metadata } from "next";
import Link from "next/link";
import { blogPosts } from "@/lib/blog-data";
import Navigation from "@/components/Navigation";
import BlogFooter from "@/components/BlogFooter";

export const metadata: Metadata = {
  title: "Blog – Web Design, E-Commerce & Conversion Insights",
  description:
    "Expert insights on premium web design, conversion optimization, e-commerce strategy, and revenue-first development. Practical guides from Boring Studios.",
  alternates: {
    canonical: "https://www.boringstudios.pro/blog",
  },
  openGraph: {
    title: "Blog – Boring Studios",
    description:
      "Expert insights on premium web design, conversion optimization, and e-commerce strategy.",
    url: "https://www.boringstudios.pro/blog",
    type: "website",
  },
};

export default function BlogPage() {
  return (
    <>
      {/* ── Blog Listing Structured Data ── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Blog",
            name: "Boring Studios Blog",
            url: "https://www.boringstudios.pro/blog",
            description:
              "Expert insights on premium web design, conversion optimization, and e-commerce strategy.",
            publisher: {
              "@type": "Organization",
              name: "Boring Studios",
              url: "https://www.boringstudios.pro",
            },
            blogPost: blogPosts.map((post) => ({
              "@type": "BlogPosting",
              headline: post.title,
              description: post.description,
              datePublished: post.date,
              url: `https://www.boringstudios.pro/blog/${post.slug}`,
              author: {
                "@type": "Organization",
                name: "Boring Studios",
              },
            })),
          }),
        }}
      />

      {/* ── Breadcrumb Structured Data ── */}
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
                item: "https://www.boringstudios.pro",
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "Blog",
                item: "https://www.boringstudios.pro/blog",
              },
            ],
          }),
        }}
      />

      <main className="relative w-full min-h-screen" role="main">
        <Navigation />

        <section className="pt-[160px] pb-[80px] px-6 md:px-12">
          <div className="max-w-[1200px] mx-auto">
            {/* ── Header ── */}
            <p className="font-sans text-[11px] uppercase tracking-[0.2em] text-[--text-muted] mb-4">
              — Insights
            </p>
            <h1 className="font-serif text-[clamp(2.5rem,6vw,5rem)] font-light leading-[0.95] tracking-tighter mb-6">
              The Journal
            </h1>
            <p className="font-sans text-[15px] text-[--text-muted] max-w-[520px] leading-relaxed mb-20">
              Practical insights on web design, conversion optimization, and
              building digital products that generate revenue.
            </p>

            {/* ── Posts Grid ── */}
            <div className="grid grid-cols-1 gap-0 border-t-[0.5px] border-[--border]">
              {blogPosts.map((post, index) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group block py-10 md:py-14 border-b-[0.5px] border-[--border] transition-colors duration-300 hover:bg-[rgba(240,237,232,0.02)]"
                  data-cursor
                >
                  <article className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-start">
                    {/* Index number */}
                    <div className="md:col-span-1">
                      <span className="font-mono text-[12px] text-[--text-muted]">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>

                    {/* Content */}
                    <div className="md:col-span-8">
                      <div className="flex items-center gap-3 mb-4">
                        <span className="font-sans text-[11px] uppercase tracking-[0.15em] text-[--text-muted] border-[0.5px] border-[--border] px-3 py-1 rounded-[2px]">
                          {post.category}
                        </span>
                        <span className="font-sans text-[11px] text-[--text-muted]">
                          {post.readTime}
                        </span>
                      </div>

                      <h2 className="font-serif text-[clamp(1.25rem,2.5vw,2rem)] font-light leading-[1.15] tracking-tight mb-4 group-hover:text-[--text-muted] transition-colors duration-500">
                        {post.title}
                      </h2>

                      <p className="font-sans text-[14px] text-[--text-muted] leading-relaxed max-w-[560px]">
                        {post.description}
                      </p>
                    </div>

                    {/* Date + Arrow */}
                    <div className="md:col-span-3 flex md:flex-col items-start md:items-end justify-between md:justify-start gap-4">
                      <time
                        dateTime={post.date}
                        className="font-mono text-[12px] text-[--text-muted]"
                      >
                        {new Date(post.date).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </time>

                      <span className="font-sans text-[13px] text-[--text-muted] group-hover:text-[--text] transition-colors duration-500 flex items-center gap-2 mt-0 md:mt-4">
                        Read
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          className="transform group-hover:translate-x-1 transition-transform duration-500"
                        >
                          <path
                            d="M3 8h10M9 4l4 4-4 4"
                            stroke="currentColor"
                            strokeWidth="1"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <BlogFooter />
      </main>
    </>
  );
}
