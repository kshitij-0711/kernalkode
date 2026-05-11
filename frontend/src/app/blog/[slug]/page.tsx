import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { blogPosts, getBlogPost, getAllSlugs } from "@/lib/blog-data";
import Navigation from "@/components/Navigation";
import BlogFooter from "@/components/BlogFooter";

// ── Static params for SSG ──
export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

// ── Dynamic metadata ──
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.description,
    keywords: post.keywords,
    alternates: {
      canonical: `https://www.boringstudios.pro/blog/${post.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.description,
      url: `https://www.boringstudios.pro/blog/${post.slug}`,
      type: "article",
      publishedTime: post.date,
      authors: ["Boring Studios"],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
    },
  };
}

// ── Simple markdown-to-HTML converter ──
function renderMarkdown(content: string): string {
  return content
    // Bold
    .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
    // Italic
    .replace(/\*(.+?)\*/g, "<em>$1</em>")
    // H3
    .replace(/^### (.+)$/gm, '<h3 class="font-serif text-[clamp(1.1rem,2vw,1.5rem)] font-light leading-tight tracking-tight mt-12 mb-4">$1</h3>')
    // H2
    .replace(/^## (.+)$/gm, '<h2 class="font-serif text-[clamp(1.3rem,2.5vw,2rem)] font-light leading-tight tracking-tight mt-16 mb-6 pt-8 border-t-[0.5px] border-[--border]">$1</h2>')
    // Unordered list items
    .replace(/^- (.+)$/gm, '<li class="font-sans text-[15px] leading-relaxed text-[--text-muted] pl-1">$1</li>')
    // Links
    .replace(
      /\[([^\]]+)\]\(([^)]+)\)/g,
      '<a href="$2" class="text-[--text] underline underline-offset-4 decoration-[--border-hover] hover:decoration-[--text] transition-colors duration-300">$1</a>'
    )
    // Paragraphs (lines that aren't already HTML tags)
    .replace(
      /^(?!<[hula]|<li|<strong)(.+)$/gm,
      '<p class="font-sans text-[15px] leading-[1.8] text-[--text-muted] mb-6">$1</p>'
    )
    // Wrap consecutive <li> in <ul>
    .replace(
      /(<li[^>]*>.*?<\/li>\n?)+/g,
      '<ul class="list-disc list-outside pl-5 mb-6 flex flex-col gap-2">$&</ul>'
    )
    // Clean empty paragraphs
    .replace(/<p[^>]*>\s*<\/p>/g, "");
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  // Find adjacent posts for navigation
  const currentIndex = blogPosts.findIndex((p) => p.slug === slug);
  const prevPost = currentIndex > 0 ? blogPosts[currentIndex - 1] : null;
  const nextPost =
    currentIndex < blogPosts.length - 1 ? blogPosts[currentIndex + 1] : null;

  const htmlContent = renderMarkdown(post.content);

  return (
    <>
      {/* ── Article Structured Data ── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: post.title,
            description: post.description,
            datePublished: post.date,
            dateModified: post.date,
            author: {
              "@type": "Organization",
              name: "Boring Studios",
              url: "https://www.boringstudios.pro",
            },
            publisher: {
              "@type": "Organization",
              name: "Boring Studios",
              url: "https://www.boringstudios.pro",
              logo: {
                "@type": "ImageObject",
                url: "https://www.boringstudios.pro/opengraph-image.png",
              },
            },
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": `https://www.boringstudios.pro/blog/${post.slug}`,
            },
            keywords: post.keywords.join(", "),
            wordCount: post.content.split(/\s+/).length,
            articleSection: post.category,
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
              {
                "@type": "ListItem",
                position: 3,
                name: post.title,
                item: `https://www.boringstudios.pro/blog/${post.slug}`,
              },
            ],
          }),
        }}
      />

      <main className="relative w-full min-h-screen" role="main">
        <Navigation />

        <article className="pt-[140px] pb-[80px] px-6 md:px-12">
          <div className="max-w-[720px] mx-auto">
            {/* ── Breadcrumb Nav ── */}
            <nav
              aria-label="Breadcrumb"
              className="mb-12 flex items-center gap-2"
            >
              <Link
                href="/"
                className="font-sans text-[12px] text-[--text-muted] hover:text-[--text] transition-colors duration-300"
                data-cursor
              >
                Home
              </Link>
              <span className="font-sans text-[12px] text-[--text-muted]">
                /
              </span>
              <Link
                href="/blog"
                className="font-sans text-[12px] text-[--text-muted] hover:text-[--text] transition-colors duration-300"
                data-cursor
              >
                Blog
              </Link>
              <span className="font-sans text-[12px] text-[--text-muted]">
                /
              </span>
              <span className="font-sans text-[12px] text-[--text-muted] truncate max-w-[200px]">
                {post.title.split(":")[0]}
              </span>
            </nav>

            {/* ── Article Header ── */}
            <header className="mb-16">
              <div className="flex items-center gap-3 mb-6">
                <span className="font-sans text-[11px] uppercase tracking-[0.15em] text-[--text-muted] border-[0.5px] border-[--border] px-3 py-1 rounded-[2px]">
                  {post.category}
                </span>
                <span className="font-sans text-[11px] text-[--text-muted]">
                  {post.readTime}
                </span>
              </div>

              <h1 className="font-serif text-[clamp(1.75rem,4vw,3.25rem)] font-light leading-[1.1] tracking-tighter mb-8">
                {post.title}
              </h1>

              <div className="flex items-center gap-4 pb-8 border-b-[0.5px] border-[--border]">
                <span className="font-sans text-[13px] text-[--text-muted]">
                  By Boring Studios
                </span>
                <span className="text-[--text-muted]">·</span>
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
              </div>
            </header>

            {/* ── Article Body ── */}
            <div
              className="blog-content"
              dangerouslySetInnerHTML={{ __html: htmlContent }}
            />

            {/* ── Post Navigation ── */}
            <nav
              className="mt-24 pt-12 border-t-[0.5px] border-[--border] grid grid-cols-1 md:grid-cols-2 gap-8"
              aria-label="Post navigation"
            >
              {prevPost ? (
                <Link
                  href={`/blog/${prevPost.slug}`}
                  className="group"
                  data-cursor
                >
                  <span className="font-sans text-[11px] uppercase tracking-[0.15em] text-[--text-muted] mb-3 block">
                    ← Previous
                  </span>
                  <span className="font-serif text-[clamp(1rem,1.5vw,1.25rem)] font-light leading-tight group-hover:text-[--text-muted] transition-colors duration-500">
                    {prevPost.title.split(":")[0]}
                  </span>
                </Link>
              ) : (
                <div />
              )}

              {nextPost ? (
                <Link
                  href={`/blog/${nextPost.slug}`}
                  className="group md:text-right"
                  data-cursor
                >
                  <span className="font-sans text-[11px] uppercase tracking-[0.15em] text-[--text-muted] mb-3 block">
                    Next →
                  </span>
                  <span className="font-serif text-[clamp(1rem,1.5vw,1.25rem)] font-light leading-tight group-hover:text-[--text-muted] transition-colors duration-500">
                    {nextPost.title.split(":")[0]}
                  </span>
                </Link>
              ) : (
                <div />
              )}
            </nav>
          </div>
        </article>

        <BlogFooter />
      </main>
    </>
  );
}
