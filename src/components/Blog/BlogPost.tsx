import { useParams, Link } from "react-router-dom";
import { blogData } from "./blogData";
import { motion } from "motion/react";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import SEOHead from "../SEO/SEOHead";
import { TOBI_AVATAR_URL } from "../ui/EditorialPrimitives";
import { LazyImage } from "../ui/LazyMedia";
import { useTheme } from "../../context/ThemeContext";

export default function BlogPost() {
  const { id } = useParams();
  const { openBooking, reduceMotion } = useTheme();
  const blog = blogData.find((b) => b.id === id);

  if (!blog) {
    return (
      <div className="pt-36 pb-24 min-h-screen flex flex-col items-center justify-center px-5 text-center">
        <h2 className="font-editorial font-black text-3xl text-[var(--ink)] mb-4">
          Article not found.
        </h2>
        <Link
          to="/blog"
          className="text-[var(--accent)] hover:underline inline-flex items-center gap-2 text-sm font-semibold"
        >
          <ArrowLeft size={16} /> Return to Journal
        </Link>
      </div>
    );
  }

  const postSchema = [
    {
      "@type": "BlogPosting",
      "@id": `https://www.buildwithtobi.online/blog/${blog.id}#article`,
      headline: blog.title,
      description: blog.excerpt,
      image: blog.image,
      datePublished: blog.date,
      dateModified: blog.date,
      author: {
        "@type": "Person",
        "@id": "https://www.buildwithtobi.online/#person",
        name: blog.author?.name || "Tobiloba Akala",
      },
    },
  ];

  const otherArticles = blogData.filter((b) => b.id !== blog.id).slice(0, 2);

  return (
    <>
      <SEOHead
        title={blog.title}
        description={blog.excerpt}
        canonicalPath={`/blog/${blog.id}`}
        ogType="article"
        ogImage={blog.image}
        publishedTime={blog.date}
        keywords={blog.tags?.join(", ")}
        jsonLd={postSchema}
      />

      <section className="pt-28 sm:pt-36 pb-20 px-5 sm:px-8 relative z-10">
        <div className="max-w-3xl mx-auto">
          <Link
            to="/blog"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-[var(--ink-muted)] hover:text-[var(--accent)] transition-colors mb-8"
          >
            <ArrowLeft size={14} /> Back to Journal
          </Link>

          <motion.article
            initial={reduceMotion ? false : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <p className="font-mono text-xs text-[var(--ink-soft)] mb-3 tabular-nums">
              {blog.date}
              {blog.readTime ? ` · ${blog.readTime}` : ""}
            </p>

            <h1 className="font-editorial font-black text-3xl sm:text-5xl text-[var(--ink)] mb-7 leading-[1.05] tracking-tight">
              {blog.title}
            </h1>

            <div className="flex items-center gap-3.5 pb-7 mb-8 border-b border-dashed border-[var(--border-hairline)]">
              <div className="w-11 h-11 rounded-full overflow-hidden border border-[var(--border-hairline)] shrink-0">
                <LazyImage
                  src={blog.author?.avatar || TOBI_AVATAR_URL}
                  alt={blog.author?.name || "Tobiloba Akala"}
                  maxWidth={120}
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div>
                <div className="text-sm font-bold text-[var(--ink)]">
                  {blog.author?.name || "Tobiloba Akala"}
                </div>
                <div className="text-xs text-[var(--ink-muted)]">
                  {blog.author?.role || "Frontend Developer"} · Lagos, Nigeria
                </div>
              </div>
            </div>

            <div className="rounded-3xl p-2 bg-white/85 border border-[var(--border-hairline)] shadow-[var(--shadow-paper)] mb-10">
              <div className="aspect-[16/9] rounded-2xl overflow-hidden bg-[var(--bg-band)]/45">
                <LazyImage
                  src={blog.image}
                  alt={blog.title}
                  priority
                  maxWidth={960}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="bg-[var(--surface-card)]/90 border border-white/85 rounded-3xl p-6 sm:p-10 space-y-6 text-[var(--ink)]/90 text-base sm:text-[17px] leading-[1.85] shadow-[var(--shadow-paper)] mb-10">
              {blog.content.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            {blog.tags && blog.tags.length > 0 && (
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mb-12 text-xs font-mono text-[var(--ink-soft)]">
                <span className="uppercase tracking-[0.12em]">Topics:</span>
                {blog.tags.map((tag, idx) => (
                  <span key={idx} className="text-[var(--ink-muted)]">
                    #{tag}
                  </span>
                ))}
              </div>
            )}

            <div className="paper-band border border-[var(--border-hairline)] rounded-3xl p-6 sm:p-8 mb-14 flex flex-col sm:flex-row items-start sm:items-center gap-6">
              <div className="w-16 h-16 rounded-2xl overflow-hidden border-2 border-white shrink-0">
                <LazyImage
                  src={TOBI_AVATAR_URL}
                  alt="Tobiloba Akala"
                  maxWidth={160}
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div>
                <h3 className="font-editorial font-black text-xl text-[var(--ink)] mb-1">
                  Written by Tobiloba Akala
                </h3>
                <p className="text-[var(--ink-muted)] text-sm leading-relaxed mb-3">
                  Web developer &amp; frontend specialist in Lagos, Nigeria
                  building fast React applications and conversion-driven sites.
                </p>
                <button
                  type="button"
                  onClick={() => openBooking("Web App / MVP")}
                  className="text-[var(--accent)] text-xs font-bold inline-flex items-center gap-1 hover:underline cursor-pointer"
                >
                  <span>Work with Tobi</span>
                  <ArrowUpRight size={13} />
                </button>
              </div>
            </div>

            {otherArticles.length > 0 && (
              <div className="border-t border-dashed border-[var(--border-hairline)] pt-10">
                <p className="font-mono text-xs uppercase tracking-[0.16em] text-[var(--ink-soft)] mb-6">
                  Continue Reading
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {otherArticles.map((rel) => (
                    <Link
                      key={rel.id}
                      to={`/blog/${rel.id}`}
                      className="bg-[var(--surface-card)]/90 p-6 rounded-2xl border border-white/85 hover:border-[var(--accent)] transition-colors group shadow-[var(--shadow-paper)]"
                    >
                      <span className="font-mono text-[11px] text-[var(--ink-soft)] block mb-2 tabular-nums">
                        {rel.date}
                      </span>
                      <h4 className="font-editorial font-black text-lg text-[var(--ink)] group-hover:text-[var(--accent)] transition-colors mb-2 line-clamp-2">
                        {rel.title}
                      </h4>
                      <p className="text-xs text-[var(--ink-muted)] leading-relaxed line-clamp-2">
                        {rel.excerpt}
                      </p>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </motion.article>
        </div>
      </section>
    </>
  );
}
