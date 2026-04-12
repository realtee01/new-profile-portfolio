import { useParams, Link } from "react-router-dom";
import { blogData } from "./blogData";
import { motion } from "framer-motion";
import { AiOutlineArrowLeft } from "react-icons/ai";

export default function BlogPost() {
  const { id } = useParams();
  const blog = blogData.find((b) => b.id === id);

  if (!blog) {
    return (
      <div className="pt-32 pb-16 min-h-screen flex flex-col items-center justify-center text-white">
        <h2 className="text-3xl font-bold mb-4">Blog post not found.</h2>
        <Link to="/blog" className="text-[#00e5ff] hover:underline flex items-center">
          <AiOutlineArrowLeft className="mr-2" /> Return to Blogs
        </Link>
      </div>
    );
  }

  return (
    <section className="pt-32 pb-16 min-h-screen relative z-10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link 
          to="/blog" 
          className="inline-flex items-center text-[#00e5ff] hover:text-white transition-colors mb-8 font-medium"
        >
          <AiOutlineArrowLeft className="mr-2" /> Back to Blogs
        </Link>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="w-full h-64 md:h-96 rounded-xl mb-8 overflow-hidden shadow-[0_0_20px_rgba(200,137,230,0.2)] border border-[rgba(200,137,230,0.3)]">
            <img 
              src={blog.image} 
              alt={blog.title} 
              className="w-full h-full object-cover" 
              referrerPolicy="no-referrer"
            />
          </div>
          
          <p className="text-[#00e5ff] font-medium mb-4">{blog.date}</p>
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-8 leading-tight">{blog.title}</h1>
          
          <div className="bg-white/5 backdrop-blur-md border border-[rgba(200,137,230,0.3)] rounded-xl p-6 md:p-10 shadow-lg">
            {blog.content.map((paragraph, index) => (
              <p key={index} className="text-gray-300 text-lg leading-relaxed mb-6 last:mb-0">
                {paragraph}
              </p>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
