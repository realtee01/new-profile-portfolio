import { useParams, Link } from "react-router-dom";
import { blogData } from "./blogData";
import { motion } from "motion/react";
import { ArrowLeft, Clock, Calendar, Tag, User, ArrowRight } from "lucide-react";
import SEOHead from "../SEO/SEOHead";
import ChromeButton from "../ui/chrome-button";

export default function BlogPost() {
  const { id } = useParams();
  const blog = blogData.find((b) => b.id === id);

  if (!blog) {
    return (
      <div className="pt-32 pb-16 min-h-screen flex flex-col items-center justify-center text-white px-4">
        <h2 className="text-3xl font-bold mb-4">Blog article not found.</h2>
        <Link to="/blog" className="text-[#00e5ff] hover:underline flex items-center gap-2">
          <ArrowLeft size={18} /> Return to Engineering Blog
        </Link>
      </div>
    );
  }

  const postSchema = [
    {
      "@type": "BlogPosting",
      "@id": `https://www.buildwithtobi.online/blog/${blog.id}#article`,
      "headline": blog.title,
      "description": blog.excerpt,
      "image": blog.image,
      "datePublished": blog.date,
      "dateModified": blog.date,
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": `https://www.buildwithtobi.online/blog/${blog.id}`
      },
      "author": {
        "@type": "Person",
        "@id": "https://www.buildwithtobi.online/#person",
        "name": blog.author?.name || "Tobiloba Akala",
        "jobTitle": blog.author?.role || "Web Developer & Frontend Specialist",
        "url": "https://www.buildwithtobi.online/"
      },
      "publisher": {
        "@type": "Organization",
        "name": "BuildWithTobi",
        "url": "https://www.buildwithtobi.online/"
      },
      "keywords": blog.tags?.join(", ") || "Web Development, React, Frontend"
    },
    {
      "@type": "BreadcrumbList",
      "@id": `https://www.buildwithtobi.online/blog/${blog.id}#breadcrumbs`,
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
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": blog.title,
          "item": `https://www.buildwithtobi.online/blog/${blog.id}`
        }
      ]
    }
  ];

  // Related articles
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

      <section className="pt-32 pb-20 min-h-screen relative z-10 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Breadcrumbs */}
          <nav aria-label="Breadcrumbs" className="mb-8 flex items-center gap-2 text-xs sm:text-sm text-gray-400">
            <Link to="/" className="hover:text-[#00e5ff] transition-colors">Home</Link>
            <span>/</span>
            <Link to="/blog" className="hover:text-[#00e5ff] transition-colors">Blog</Link>
            <span>/</span>
            <span className="text-[#00e5ff] font-medium line-clamp-1">{blog.title}</span>
          </nav>

          <Link 
            to="/blog" 
            className="inline-flex items-center gap-2 text-xs sm:text-sm text-gray-400 hover:text-[#00e5ff] transition-colors mb-6 font-medium"
          >
            <ArrowLeft size={16} /> Back to all articles
          </Link>
          
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Meta tags header */}
            <div className="flex flex-wrap items-center gap-3 text-xs text-gray-400 mb-4">
              <span className="bg-[#00e5ff]/10 text-[#00e5ff] border border-[#00e5ff]/30 px-3 py-1 rounded-full flex items-center gap-1.5 font-semibold">
                <Calendar size={12} /> {blog.date}
              </span>
              {blog.readTime && (
                <span className="bg-white/5 border border-white/10 px-3 py-1 rounded-full flex items-center gap-1.5">
                  <Clock size={12} /> {blog.readTime}
                </span>
              )}
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white mb-6 leading-tight tracking-wide">
              {blog.title}
            </h1>

            {/* Author bar */}
            <div className="flex items-center gap-3 pb-8 mb-8 border-b border-white/10">
              <img 
                src={blog.author?.avatar || "https://res.cloudinary.com/dw8jtwbka/image/upload/v1780309581/refined_profile_picture_keiybp.png"} 
                alt={blog.author?.name || "Tobiloba Akala"} 
                className="w-11 h-11 rounded-full object-cover border border-[#00e5ff]/40"
              />
              <div>
                <div className="text-sm font-semibold text-white">
                  {blog.author?.name || "Tobiloba Akala"}
                </div>
                <div className="text-xs text-gray-400">
                  {blog.author?.role || "Web Developer & Frontend Specialist"} • Lagos, Nigeria
                </div>
              </div>
            </div>

            {/* Banner image */}
            <div className="w-full h-64 sm:h-96 rounded-2xl mb-10 overflow-hidden shadow-2xl border border-white/10 bg-black/40">
              <img 
                src={blog.image} 
                alt={blog.title} 
                className="w-full h-full object-cover" 
                referrerPolicy="no-referrer"
              />
            </div>
            
            {/* Article Content */}
            <div className="bg-[#151421]/80 backdrop-blur-md border border-white/5 rounded-3xl p-6 sm:p-10 shadow-xl space-y-6 text-gray-200 text-base sm:text-lg leading-relaxed font-light mb-12">
              {blog.content.map((paragraph, index) => (
                <p key={index} className="leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Article Tags */}
            {blog.tags && blog.tags.length > 0 && (
              <div className="flex flex-wrap items-center gap-2 mb-12">
                <span className="text-xs font-semibold text-gray-400 flex items-center gap-1 mr-2">
                  <Tag size={12} /> Tags:
                </span>
                {blog.tags.map((tag, idx) => (
                  <span key={idx} className="bg-white/5 border border-white/10 px-3 py-1 rounded-lg text-xs text-[#00e5ff]">
                    #{tag}
                  </span>
                ))}
              </div>
            )}

            {/* Author Bio Box */}
            <div className="bg-gradient-to-r from-[#1b1a2e] to-[#151421] border border-white/10 rounded-2xl p-6 sm:p-8 mb-16 flex flex-col sm:flex-row items-center gap-6">
              <img 
                src="https://res.cloudinary.com/dw8jtwbka/image/upload/v1780309581/refined_profile_picture_keiybp.png" 
                alt="Tobiloba Akala" 
                className="w-20 h-20 rounded-2xl object-cover border-2 border-[#00e5ff]/50 flex-shrink-0"
              />
              <div>
                <h3 className="text-lg font-bold text-white mb-1">Written by Tobiloba Akala (BuildWithTobi)</h3>
                <p className="text-gray-300 text-sm font-light leading-relaxed mb-3">
                  Frontend engineer and digital builder based in Lagos, Nigeria. Specializing in high-converting React applications, Core Web Vitals optimization, and modern web architectures.
                </p>
                <Link to="/contact" className="text-[#00e5ff] text-xs font-semibold inline-flex items-center gap-1 hover:underline">
                  Hire Tobi for your next project <ArrowRight size={12} />
                </Link>
              </div>
            </div>

            {/* Next Articles */}
            {otherArticles.length > 0 && (
              <div className="border-t border-white/10 pt-10">
                <h3 className="text-xl font-serif font-bold text-white mb-6">Related Articles</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {otherArticles.map((rel) => (
                    <Link
                      key={rel.id}
                      to={`/blog/${rel.id}`}
                      className="bg-[#151421]/60 p-6 rounded-2xl border border-white/5 hover:border-[#00e5ff]/40 transition-all group"
                    >
                      <span className="text-[11px] font-semibold text-[#00e5ff] block mb-1">{rel.date}</span>
                      <h4 className="text-base font-bold text-white group-hover:text-[#00e5ff] transition-colors mb-2 line-clamp-2">
                        {rel.title}
                      </h4>
                      <p className="text-xs text-gray-400 font-light line-clamp-2">{rel.excerpt}</p>
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
