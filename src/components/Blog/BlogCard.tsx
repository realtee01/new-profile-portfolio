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
      className="bg-white/5 backdrop-blur-md border border-[rgba(200,137,230,0.3)] rounded-lg overflow-hidden shadow-[0_4px_15px_rgba(0,0,0,0.2)] hover:shadow-[0_0_20px_rgba(0,229,255,0.3)] hover:border-[#00e5ff] transition-all duration-300 flex flex-col h-full"
    >
      <div className="overflow-hidden h-48">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
          referrerPolicy="no-referrer"
        />
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <p className="text-[#00e5ff] text-sm font-medium mb-2">{date}</p>
        <h3 className="text-xl font-bold text-white mb-3 line-clamp-2">{title}</h3>
        <p className="text-gray-300 text-sm mb-6 flex-grow line-clamp-3">{excerpt}</p>
        <Link
          to={link}
          className="inline-block px-6 py-2 border border-[#00e5ff] text-[#00e5ff] rounded hover:bg-[#00e5ff] hover:text-[#1b1a2e] transition-colors duration-300 font-medium text-center shadow-[0_0_10px_rgba(0,229,255,0.2)] hover:shadow-[0_0_20px_rgba(0,229,255,0.6)] mt-auto"
        >
          Read More
        </Link>
      </div>
    </motion.div>
  );
}
