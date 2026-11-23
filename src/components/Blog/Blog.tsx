import { useState } from "react";
import { motion } from "motion/react";
import BlogCard from "./BlogCard";
import { blogData } from "./blogData";
import SEOHead from "../SEO/SEOHead";
import { SparkleMark, CurvedArrow } from "../ui/EditorialPrimitives";
import { LazyImage } from "../ui/LazyMedia";
import { useTheme } from "../../context/ThemeContext";

const JOURNAL_COVER_PHOTO_URL =
  "https://res.cloudinary.com/dw8jtwbka/image/upload/v1795377539/photo_2026-11-22_20-17-48_huii8y.jpg";

const JOURNAL_TOPICS = [
  "All",
  "AI & Context",
  "Supabase",
  "Automation",
  "Frontend & Web",
] as const;

export default function Blog() {
  const { reduceMotion } = useTheme();
  const [activeTopic, setActiveTopic] = useState<string>("All");

  const filteredBlogs = blogData.filter((post) => {
    if (activeTopic === "All") return true;
    const category =
      post.category ||
      (post.tags.some((t) => t.toLowerCase().includes("supabase"))
        ? "Supabase"
        : "Frontend & Web");
    return category === activeTopic;
  });

  const blogListSchema = [
    {
      "@type": "Blog",
      "@id": "https://www.buildwithtobi.online/blog#blog",
      name: "Journal & Frontend Engineering Notes by Tobiloba Akala",
      description:
        "Technical insights on Context Engineering, Prompt Engineering, Supabase, AI automation, React performance, and conversion-focused web development.",
      publisher: { "@id": "https://www.buildwithtobi.online/#person" },
      blogPost: blogData.map((post) => ({
        "@type": "BlogPosting",
        headline: post.title,
        description: post.excerpt,
        url: `https://www.buildwithtobi.online/blog/${post.id}`,
        image: post.image,
        datePublished: post.date,
        author: {
          "@type": "Person",
          name: post.author?.name || "Tobiloba Akala",
        },
      })),
    },
  ];

  return (
    <section className="pt-28 sm:pt-36 pb-16 sm:pb-24 px-5 sm:px-8 lg:px-12 relative z-10">
      <SEOHead
        title="Journal & Notes | Tobiloba Akala (BuildWithTobi)"
        description="Practical notes on Context Engineering, Prompt Engineering, Supabase, AI automation, React architecture, and Core Web Vitals."
        canonicalPath="/blog"
        keywords="Context Engineering, Prompt Engineering, Supabase Production, AI Automation Workflows, React Performance, Tobiloba Akala Journal"
        jsonLd={blogListSchema}
      />

      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-10 lg:gap-12 mb-10 pb-12 border-b border-dashed border-[var(--border-hairline)]">
          {/* Left Editorial Title & Intro */}
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="lg:col-span-7"
          >
            <div className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.16em] text-[var(--ink-muted)] mb-5">
              <SparkleMark className="w-3 h-3 text-[var(--accent)]" />
              <span>Journal &amp; Notes</span>
            </div>

            <h1 className="font-editorial font-black text-[clamp(3rem,7.2vw,5.2rem)] leading-[0.95] tracking-[-0.03em] text-[var(--ink)] mb-5 text-balance">
              Writing &amp;{" "}
              <span className="italic text-[var(--accent)]">engineering notes.</span>
            </h1>

            <p className="text-[var(--ink-muted)] text-base sm:text-lg leading-relaxed max-w-xl">
              Practical essays on context &amp; prompt engineering, Supabase
              architecture, AI automation workflows, React performance, and
              shipping fast digital products in the real world.
            </p>
          </motion.div>

          {/* Right Framed Editorial Portrait */}
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 18, rotate: 1.5 }}
            animate={{ opacity: 1, y: 0, rotate: 0 }}
            transition={{ duration: 0.5, delay: 0.08 }}
            className="lg:col-span-5 flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-[290px] sm:max-w-[320px]">
              {/* Handwritten margin annotation on desktop */}
              <div className="hidden xl:flex flex-col items-end absolute -left-28 top-10 text-[var(--accent)] pointer-events-none select-none">
                <span className="font-hand text-2xl leading-none -rotate-6 whitespace-nowrap">
                  field notes
                </span>
                <CurvedArrow direction="down-right" className="w-14 h-9 mt-1" />
              </div>

              {/* Translucent masking tape accent */}
              <div
                aria-hidden="true"
                className="absolute -top-3 left-1/2 -translate-x-1/2 z-20 w-24 h-6 rounded-[2px] bg-[#EFE9DD]/85 border border-black/[0.06] shadow-sm -rotate-2 pointer-events-none"
              />

              {/* Warm-white editorial print / Polaroid frame */}
              <figure className="relative bg-[#FAF7F2] p-3 pb-10 sm:p-3.5 sm:pb-11 rounded-[1.25rem] border border-[var(--border-hairline)] shadow-[0_18px_40px_rgba(24,19,26,0.13)] rotate-[2deg] hover:rotate-0 transition-transform duration-300">
                <div className="aspect-[4/5] w-full overflow-hidden rounded-[0.85rem] bg-[var(--ink)]/5">
                  <LazyImage
                    src={JOURNAL_COVER_PHOTO_URL}
                    alt="Tobiloba Akala — Writing & Engineering Notes"
                    priority
                    maxWidth={720}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <figcaption className="absolute bottom-2.5 inset-x-4 flex items-center justify-between text-[var(--ink-muted)]">
                  <span className="font-hand text-xl sm:text-[22px] leading-none text-[var(--ink)]">
                    writing &amp; shipping
                  </span>
                  <span className="text-[10px] font-bold uppercase tracking-[0.14em] opacity-70">
                    Lagos · NG
                  </span>
                </figcaption>
              </figure>
            </div>
          </motion.div>
        </div>

        {/* Editorial Topic Filter Strip */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-9">
          <div className="flex flex-wrap items-center gap-2">
            {JOURNAL_TOPICS.map((topic) => {
              const isActive = activeTopic === topic;
              return (
                <button
                  key={topic}
                  type="button"
                  onClick={() => setActiveTopic(topic)}
                  className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                    isActive
                      ? "bg-[var(--ink)] text-white shadow-sm"
                      : "bg-[var(--surface-card)]/85 text-[var(--ink-muted)] border border-[var(--border-hairline)] hover:border-[var(--ink)]/40 hover:text-[var(--ink)]"
                  }`}
                >
                  {topic}
                </button>
              );
            })}
          </div>
          <p className="font-mono text-[11px] text-[var(--ink-soft)] tabular-nums">
            {filteredBlogs.length} {filteredBlogs.length === 1 ? "note" : "notes"}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {filteredBlogs.map((blog, index) => (
            <motion.div
              key={blog.id}
              initial={reduceMotion ? false : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: Math.min(index, 5) * 0.04, duration: 0.35 }}
            >
              <BlogCard
                title={blog.title}
                date={blog.date}
                readTime={blog.readTime}
                topic={blog.tags[0]}
                excerpt={blog.excerpt}
                image={blog.image}
                link={`/blog/${blog.id}`}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
