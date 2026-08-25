import { motion } from "motion/react";
import BlogCard from "./BlogCard";
import { blogData } from "./blogData";
import { useLanguage } from "../../context/LanguageContext";
import SEOHead from "../SEO/SEOHead";

export default function Blog() {
  const { t } = useLanguage();
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.4,
      },
    },
  };

  const blogListSchema = [
    {
      "@type": "Blog",
      "@id": "https://www.buildwithtobi.online/blog#blog",
      "name": "Engineering & Web Strategy Insights by Tobiloba Akala",
      "description": "Technical insights on React performance, Nigerian network optimization, web architecture, and conversion-focused frontend development.",
      "publisher": {
        "@id": "https://www.buildwithtobi.online/#person"
      },
      "blogPost": blogData.map((post) => ({
        "@type": "BlogPosting",
        "headline": post.title,
        "description": post.excerpt,
        "url": `https://www.buildwithtobi.online/blog/${post.id}`,
        "image": post.image,
        "datePublished": post.date,
        "author": {
          "@type": "Person",
          "name": post.author?.name || "Tobiloba Akala"
        }
      }))
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.buildwithtobi.online/blog#breadcrumbs",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.buildwithtobi.online/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Blog",
          "item": "https://www.buildwithtobi.online/blog"
        }
      ]
    }
  ];

  return (
    <section className="pt-32 pb-16 min-h-screen relative z-10">
      <SEOHead
        title="Web Engineering Insights & Articles | Tobiloba Akala"
        description="Explore technical tutorials and architectural articles on React 19, web performance optimization for Nigerian mobile networks, and conversion engineering."
        canonicalPath="/blog"
        keywords="Web Development Blog Nigeria, React Performance Articles, Frontend Engineering Tutorials, Tobiloba Akala blog, BuildWithTobi"
        jsonLd={blogListSchema}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6 tracking-wide">
            {t('blogs.title1')} <strong className="text-gradient">{t('blogs.title2')}</strong>
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto font-light tracking-wide">
            Engineering breakdowns, technical tutorials, and web strategies written from real-world production experience.
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {blogData.map((blog, index) => (
            <motion.div key={index} variants={itemVariants}>
              <BlogCard 
                title={blog.title}
                date={blog.date}
                excerpt={blog.excerpt}
                image={blog.image}
                link={`/blog/${blog.id}`}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
