import { motion } from "framer-motion";
import BlogCard from "./BlogCard";
import { blogData } from "./blogData";

export default function Blog() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section className="pt-32 pb-16 min-h-screen relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            My <strong className="text-gradient">Blog & News</strong>
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Thoughts, tutorials, and insights on frontend engineering, design, and the modern web.
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
