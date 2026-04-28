import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ExternalLink } from "lucide-react";

const allProjects = [
  {
    title: "Abasi Store",
    category: "E-commerce",
    image:
      "https://res.cloudinary.com/dvd7wbty8/image/upload/v1766133496/abasiHome_if0crx.png",
    link: "https://www.shopabasi.com/",
  },
  {
    title: "YourChildEducation",
    category: "Web App",
    image:
      "https://res.cloudinary.com/dvd7wbty8/image/upload/v1762633960/yourchildeducation_iuvg3m.png",
    link: "https://yourchildeducation.com/",
  },
  {
    title: "EMW3",
    category: "E-commerce",
    image:
      "https://res.cloudinary.com/dvd7wbty8/image/upload/v1774880540/emw-landing-page_jkgrts.png",
    link: "https://www.emw3.com.ng/",
  },
  {
    title: "Cynoure",
    category: "Landing Page",
    image:
      "https://res.cloudinary.com/dvd7wbty8/image/upload/v1762633964/Cynosure_auvpwi.png",
    link: "https://cyno-sure.netlify.app/",
  },
  {
    title: "Habeeb.Js",
    category: "Landing Page",
    image:
      "https://res.cloudinary.com/dvd7wbty8/image/upload/v1762713330/habeeb_j4gk5d.png",
    link: "https://habeebjs.dev/",
  },
  {
    title: "Innovative Tech",
    category: "Landing Page",
    image:
      "https://res.cloudinary.com/dvd7wbty8/image/upload/v1762633961/innovative-tech_kb2g9h.png",
    link: "https://innovative-tech-two.vercel.app/",
  },
  {
    title: "Stayest",
    category: "Web App",
    image:
      "https://res.cloudinary.com/dvd7wbty8/image/upload/v1762633959/Staynest_ii4rpp.png",
    link: "http://stayynest.netlify.app/",
  },
];

const categories = ["All", "Landing Page", "Web App", "E-commerce"];

export const AllProjects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? allProjects
      : allProjects.filter((p) => p.category === activeCategory);

  return (
    <section className="bg-white py-24">
      <div className="mx-auto px-6 max-w-7xl">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="mb-4 font-serif text-black text-3xl md:text-5xl md:text-center text-start"
          style={{ fontFamily: "Playfair Display, serif" }}
        >
          All Projects
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={isInView ? { opacity: 1, scaleX: 1 } : {}}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="bg-[#D4AF37] md:mx-auto mb-8 w-20 h-1"
        ></motion.div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3.5 md:px-6 py-2 text-xs md:text-base rounded-full font-semibold transition-all ${
                activeCategory === cat
                  ? "bg-[#D4AF37] text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <motion.div
          ref={ref}
          layout
          className="gap-6 grid md:grid-cols-2 lg:grid-cols-3"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              layout
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.4 }}
              whileHover={{ y: -10 }}
              className="group relative shadow-lg rounded-xl overflow-hidden cursor-pointer"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full md:h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              />

              <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black via-black/50 to-transparent opacity-0 group-hover:opacity-100 p-6 transition-opacity">
                <h3 className="mb-2 font-bold text-white text-lg md:text-2xl">
                  {project.title}
                </h3>
                <p className="mb-4 text-[#D4AF37]">{project.category}</p>
                <a
                  href={project.link}
                  className="flex items-center gap-2 text-white hover:text-[#D4AF37] text-xs md:text-sm transition-colors"
                >
                  <ExternalLink size={20} />
                  <span>View Project</span>
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
