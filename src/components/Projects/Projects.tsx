import { useState } from "react";
import { motion, Variants, AnimatePresence } from "motion/react";
import { Marquee } from "../ui/marquee";
import { Lock } from "lucide-react";
import { FaReact, FaHtml5, FaCss3Alt } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiTypescript, SiSupabase, SiFirebase, SiJavascript, SiNodedotjs } from "react-icons/si";
import ProjectCard from "./ProjectCards";
import ProjectModal from "./ProjectModal";
import SEOHead from "../SEO/SEOHead";
import { useLanguage } from "../../context/LanguageContext";
import { projectsData, ProjectItem } from "../../data/projectsData";

export default function Projects() {
  const [filter, setFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const { t } = useLanguage();

  const categories = ["All", "Web App", "Landing Page", "Web3", "E-commerce"];

  const filteredProjects = projectsData.filter((project) => {
    if (filter === "All") return true;
    return project.category === filter;
  });

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, scale: 0.95, y: 20 },
    show: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.35, ease: "easeOut" } },
    exit: { opacity: 0, scale: 0.95, y: 20, transition: { duration: 0.25 } }
  };

  // Structured Data Schema for Projects Page
  const projectsSchema = [
    {
      "@type": "ItemList",
      "@id": "https://www.buildwithtobi.online/projects#project-list",
      "name": "Web Development Portfolio Projects - Tobiloba Akala",
      "description": "Curated engineering case studies and web applications created by Tobiloba Akala (BuildWithTobi).",
      "numberOfItems": projectsData.length,
      "itemListElement": projectsData.map((project, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "name": project.title,
        "description": project.description,
        "url": `https://www.buildwithtobi.online/projects/${project.slug}`
      }))
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.buildwithtobi.online/projects#breadcrumbs",
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
          "name": "Projects",
          "item": "https://www.buildwithtobi.online/projects"
        }
      ]
    }
  ];

  return (
    <>
      <SEOHead
        title="Web Engineering Portfolio & Case Studies | Tobiloba Akala"
        description="Explore 17+ production web applications, high-converting landing pages, and full-stack software case studies engineered by Tobiloba Akala (BuildWithTobi)."
        canonicalPath="/projects"
        keywords="web development portfolio, React case studies, frontend engineer portfolio, CineScope, Peak Echo Digitals, NextClean, Make-Up Booking Platform, Tobiloba Akala projects, BuildWithTobi"
        jsonLd={projectsSchema}
      />

      <div className="relative pt-32 pb-16 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl sm:text-5xl font-serif font-bold text-white mb-6 tracking-wide">
              {t('projects.title1')} <strong className="text-gradient">{t('projects.title2')}</strong>
            </h1>
            <p className="text-gray-300 text-lg mb-6 font-light tracking-wide max-w-2xl mx-auto">
              {t('projects.desc')}
            </p>
            <div className="flex justify-center mb-10">
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-[13px] text-gray-400 font-medium">
                <Lock className="w-3.5 h-3.5 text-[#00e5ff]" />
                <span>Selected production works & architectural case studies</span>
              </div>
            </div>

            <div className="flex items-center justify-center w-full mt-8 max-w-4xl mx-auto">
              <Marquee pauseOnHover={true} className="py-4">
                <div className="flex items-center gap-3 mx-8 text-2xl font-medium text-white/80 hover:text-[#00e5ff] transition-colors">
                  <span className="text-[#00e5ff] flex items-center"><FaReact /></span> <span>React</span>
                </div>
                <div className="flex items-center gap-3 mx-8 text-2xl font-medium text-white/80 hover:text-white transition-colors">
                  <span className="text-white flex items-center"><SiNextdotjs /></span> <span>Next.js</span>
                </div>
                <div className="flex items-center gap-3 mx-8 text-2xl font-medium text-white/80 hover:text-[#38bdf8] transition-colors">
                  <span className="text-[#38bdf8] flex items-center"><SiTailwindcss /></span> <span>Tailwind</span>
                </div>
                <div className="flex items-center gap-3 mx-8 text-2xl font-medium text-white/80 hover:text-[#3178c6] transition-colors">
                  <span className="text-[#3178c6] flex items-center"><SiTypescript /></span> <span>TypeScript</span>
                </div>
                <div className="flex items-center gap-3 mx-8 text-2xl font-medium text-white/80 hover:text-[#f7df1e] transition-colors">
                  <span className="text-[#f7df1e] flex items-center"><SiJavascript /></span> <span>JavaScript</span>
                </div>
                <div className="flex items-center gap-3 mx-8 text-2xl font-medium text-white/80 hover:text-[#339939] transition-colors">
                  <span className="text-[#339939] flex items-center"><SiNodedotjs /></span> <span>Node.js</span>
                </div>
                <div className="flex items-center gap-3 mx-8 text-2xl font-medium text-white/80 hover:text-[#3fcf8e] transition-colors">
                  <span className="text-[#3fcf8e] flex items-center"><SiSupabase /></span> <span>Supabase</span>
                </div>
                <div className="flex items-center gap-3 mx-8 text-2xl font-medium text-white/80 hover:text-[#ffca28] transition-colors">
                  <span className="text-[#ffca28] flex items-center"><SiFirebase /></span> <span>Firebase</span>
                </div>
                <div className="flex items-center gap-3 mx-8 text-2xl font-medium text-white/80 hover:text-[#e34f26] transition-colors">
                  <span className="text-[#e34f26] flex items-center"><FaHtml5 /></span> <span>HTML5</span>
                </div>
                <div className="flex items-center gap-3 mx-8 text-2xl font-medium text-white/80 hover:text-[#1572b6] transition-colors">
                  <span className="text-[#1572b6] flex items-center"><FaCss3Alt /></span> <span>CSS3</span>
                </div>
              </Marquee>
            </div>

            <div className="flex flex-wrap justify-center gap-3 mt-12 mb-4">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    filter === cat
                      ? "bg-[#00e5ff] text-[#0f0c29] shadow-[0_0_15px_rgba(0,229,255,0.4)]"
                      : "bg-white/5 text-gray-300 hover:bg-white/10 hover:text-white border border-white/10 hover:border-white/20"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </motion.div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="show"
            viewport={{ once: true, amount: 0.1 }}
            className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8"
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project) => (
                <motion.div 
                  layout
                  key={project.id} 
                  variants={itemVariants} 
                  initial="hidden"
                  animate="show"
                  exit="exit"
                  whileHover={{ y: -10, transition: { duration: 0.3 } }} 
                  className="h-full"
                >
                  <ProjectCard
                    slug={project.slug}
                    imgPath={project.imgPath}
                    customCover={project.customCover}
                    isBlog={false}
                    title={project.title}
                    description={project.description}
                    ghLink={project.ghLink}
                    demoLink={project.demoLink}
                    inProgress={project.inProgress}
                    featured={project.featured}
                    hasDetails={!!project.details}
                    details={project.details}
                    onViewDetails={() => {
                      setSelectedProject(project);
                    }}
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>

        <ProjectModal 
          isOpen={selectedProject !== null} 
          onClose={() => setSelectedProject(null)} 
          title={selectedProject?.title || ""} 
          details={selectedProject?.details || null}
          slug={selectedProject?.slug}
        />
      </div>
    </>
  );
}
