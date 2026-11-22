import { motion } from "motion/react";
import BlogCard from "./BlogCard";
import { blogData } from "./blogData";
import SEOHead from "../SEO/SEOHead";
import { SparkleMark } from "../ui/EditorialPrimitives";
import { useTheme } from "../../context/ThemeContext";

export default function Blog() {
  const { reduceMotion } = useTheme();

  const blogListSchema = [
    {
      "@type": "Blog",
      "@id": "https://www.buildwithtobi.online/blog#blog",
      name: "Journal & Frontend Engineering Notes by Tobiloba Akala",
      description:
        "Technical insights on React performance, Nigerian network optimization, web architecture, and conversion-focused frontend development.",
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
        description="Practical notes on React architecture, Core Web Vitals, UI craft, and shipping faster web interfaces in production."
        canonicalPath="/blog"
        keywords="Web Development Blog Nigeria, React Performance Articles, Frontend Engineering Tutorials, Tobiloba Akala Journal"
        jsonLd={blogListSchema}
      />

      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="max-w-2xl mb-14 pb-10 border-b border-dashed border-[var(--border-hairline)]"
        >
          <div className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.16em] text-[var(--ink-muted)] mb-5">
            <SparkleMark className="w-3 h-3 text-[var(--accent)]" />
            <span>Journal &amp; Notes</span>
          </div>

          <h1 className="font-editorial font-black text-[clamp(3rem,7.2vw,5.2rem)] leading-[0.95] tracking-[-0.03em] text-[var(--ink)] mb-5 text-balance">
            Writing &amp;{" "}
            <span className="italic text-[var(--accent)]">engineering notes.</span>
          </h1>

          <p className="text-[var(--ink-muted)] text-base sm:text-lg leading-relaxed">
            Practical essays on React architecture, Core Web Vitals, UI craft,
            and shipping fast digital products in the real world.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {blogData.map((blog, index) => (
            <motion.div
              key={blog.id}
              initial={reduceMotion ? false : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: index * 0.05, duration: 0.35 }}
            >
              <BlogCard
                title={blog.title}
                date={blog.date}
                readTime={blog.readTime}
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
