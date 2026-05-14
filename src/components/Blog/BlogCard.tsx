import { motion } from "framer-motion";
import { Link } from "react-router-dom";

interface BlogCardProps {
  title: string;
  date: string;
  excerpt: string;
  image: string;
  link: string;
}

export default function BlogCard({ title, date, excerpt, image, link }: BlogCardProps) {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      className="bg-black/40 backdrop-blur-2xl border border-white/5 rounded-3xl overflow-hidden shadow-[0_20px_40px_-10px_rgba(0,0,0,0.5)] hover:shadow-[0_20px_40px_-10px_rgba(0,229,255,0.15)] hover:border-white/10 transition-all duration-300 flex flex-col h-full group"
    >
      <div className="overflow-hidden h-48 sm:h-56">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-80 group-hover:opacity-100"
          referrerPolicy="no-referrer"
        />
      </div>
      <div className="p-6 sm:p-8 flex flex-col flex-grow relative z-10 bg-gradient-to-t from-black/80 to-transparent">
        <p className="text-[#00e5ff] text-xs font-semibold tracking-widest uppercase mb-3">{date}</p>
        <h3 className="text-2xl font-serif font-bold text-white mb-3 line-clamp-2 tracking-wide group-hover:text-[#c770f0] transition-colors">{title}</h3>
        <p className="text-gray-400 font-light text-sm mb-8 flex-grow line-clamp-3 leading-relaxed">{excerpt}</p>
        <Link
          to={link}
          className="inline-block px-8 py-3 bg-white/5 border border-white/10 text-white rounded-full hover:bg-white/10 hover:border-white/30 transition-all duration-300 font-medium text-center hover:shadow-[0_0_20px_rgba(255,255,255,0.1)] mt-auto"
        >
          Read More
        </Link>
      </div>
    </motion.div>
  );
}
