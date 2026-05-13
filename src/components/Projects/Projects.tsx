import ProjectCard from "./ProjectCards";
import { motion, Variants, AnimatePresence } from "motion/react";
import { Marquee } from "../ui/marquee";
import { Lock } from "lucide-react";
import { FaReact, FaHtml5, FaCss3Alt } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiTypescript, SiSupabase, SiFirebase, SiJavascript, SiNodedotjs } from "react-icons/si";

// Real images for projects from user's github
const forzchainImg = "https://raw.githubusercontent.com/realtee01/my-portfolio/main/src/assets/forzchain.jpg";
const cinescopeImg = "https://raw.githubusercontent.com/realtee01/my-portfolio/main/src/assets/cinescope-thumb.jpg";
const calcImg = "https://raw.githubusercontent.com/realtee01/my-portfolio/main/src/assets/calc.jpg";
const nextcleanImg = "https://raw.githubusercontent.com/realtee01/my-portfolio/main/src/assets/Nextclean.jpg";
const heritageKitchenImg = "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
const trendyTransitImg = "https://images.unsplash.com/photo-1560769629-975ec94e6a86?q=80&w=464&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
const relayPropertiesImg = "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1073&auto=format&fit=crop";
const nexchat3Img = "https://plus.unsplash.com/premium_photo-1733342554594-102b8e2d0623?q=80&w=1131&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
const kotiImg = "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1074&auto=format&fit=crop";
const pixelCleanImg = "https://plus.unsplash.com/premium_photo-1726079247228-993af4c05db8?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
const tribeFitnessImg = "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1170&auto=format&fit=crop";

import NotesCover from "./NotesCover";
import React, { useState } from "react";

const RoitechDescription = () => {
  const [showTechStack, setShowTechStack] = useState(false);

  return (
    <div className="flex flex-col gap-2 max-h-[160px] overflow-y-auto custom-scrollbar pr-2 text-xs sm:text-sm">
      <p>
        <strong className="text-[#00e5ff]">Status:</strong> In Development (2026 - Present)
      </p>
      <p className="leading-relaxed">
        Collaborating with backend engineers, product managers, and the Roitech AI team to architect and build scalable web and mobile applications from the ground up. My primary focus is ensuring a premium user experience through modern frontend patterns and fluid UI transitions.
      </p>
      <p className="leading-relaxed">
        Additionally, leading the frontend architecture for LearnIQ, an accessible learning platform featuring AI-driven summarization and audio transcription to bridge educational gaps.
      </p>
      {showTechStack ? (
        <div className="mt-1 flex flex-col gap-2 animate-in fade-in slide-in-from-top-2 duration-300">
          <p className="text-[#c770f0]">
            <strong>Tech Stack:</strong> React (Vite), Tailwind CSS, Framer Motion, Vercel
          </p>
          <button 
            onClick={() => setShowTechStack(false)}
            className="self-start text-[#00e5ff] hover:text-white transition-colors text-xs font-semibold"
          >
            Hide Tech Stack
          </button>
        </div>
      ) : (
        <button 
          onClick={() => setShowTechStack(true)}
          className="self-start mt-1 bg-transparent border border-[#00e5ff]/30 text-[#00e5ff] hover:bg-[#00e5ff]/10 px-3 py-1 rounded transition-colors text-xs font-semibold"
        >
          View Tech Stack
        </button>
      )}
    </div>
  );
};

const projectsData = [
  {
    id: 1,
    title: "Roitech AI & LearnIQ",
    description: <RoitechDescription />,
    customCover: <NotesCover />,
    inProgress: true,
    ghLink: "",
    demoLink: "",
    category: "Web App"
  },
  {
    id: 6,
    title: "Tribe Fitness",
    description: "A dynamic and engaging fitness platform featuring comprehensive workout plans, class schedules, and a vibrant community interface.",
    imgPath: tribeFitnessImg,
    ghLink: "https://github.com/realtee01",
    demoLink: "https://tribe-fitness-six.vercel.app/",
    category: "Landing Page"
  },
  {
    id: 7,
    title: "Cinescope",
    description: "A premium movie discovery platform showing real-time data and polished UI. Built with React, Tailwind, and Vite.",
    imgPath: cinescopeImg,
    ghLink: "https://github.com/realtee01",
    demoLink: "https://cinescope-tobiloba-niad.vercel.app",
    category: "Web App"
  },
  {
    id: 11,
    title: "Nextclean",
    description: "A Lagos-based cleaning service landing page built to convert. Sharp copy, filterable services, and a mobile-first layout.",
    imgPath: nextcleanImg,
    ghLink: "https://github.com/realtee01",
    demoLink: "https://nextclean.vercel.app",
    category: "Landing Page"
  },
  {
    id: 9,
    title: "Koti Restaurant",
    description: "A sophisticated website for a premium foreign restaurant, showcasing an exotic culinary experience with an elegant design and seamless reservation system.",
    imgPath: kotiImg,
    ghLink: "https://github.com/realtee01",
    demoLink: "https://koti-gray.vercel.app/",
    category: "Landing Page"
  },
  {
    id: 8,
    title: "Relay Properties",
    description: "A refined real estate platform designed for seamless property discovery and management, featuring an intuitive interface and responsive design elements.",
    imgPath: relayPropertiesImg,
    ghLink: "https://github.com/realtee01",
    demoLink: "https://relay-properties.vercel.app/",
    category: "Landing Page"
  },
  {
    id: 10,
    title: "Heritage Kitchen",
    description: "A premium restaurant website showcasing a fine dining experience with an elegant UI and responsive layout.",
    imgPath: heritageKitchenImg,
    ghLink: "https://github.com/realtee01/heritage-kitchen",
    demoLink: "https://heriatage-kitchen.vercel.app/",
    category: "Landing Page"
  },
  {
    id: 5,
    title: "Trendy Transit",
    description: "A modern e-commerce and logistics platform offering a seamless shopping experience, featuring a dynamic product catalog, intuitive cart management, and a streamlined checkout process.",
    imgPath: trendyTransitImg,
    ghLink: "https://github.com/realtee01",
    demoLink: "https://trendy-transit.vercel.app/",
    category: "E-commerce"
  },
  {
    id: 3,
    title: "Nexchat3",
    description: "A cutting-edge Web3 chatting platform and animation website. It combines seamless real-time communication with immersive animations and decentralized features for a next-gen digital experience.",
    imgPath: nexchat3Img,
    ghLink: "https://github.com/realtee01",
    demoLink: "https://nexus3-bay.vercel.app/",
    category: "Web3"
  },
  {
    id: 4,
    title: "Forzchain",
    description: "A decentralized supply chain management system leveraging blockchain for transparency. Built with React, Tailwind, and Solidity.",
    imgPath: forzchainImg,
    ghLink: "https://github.com/realtee01",
    demoLink: "https://forzchain-v-2.vercel.app",
    category: "Web3"
  },
  {
    id: 2,
    title: "Pixel Clean AI",
    description: "An AI-powered application offering intelligent image enhancement and background removal features with a modern and intuitive user interface.",
    imgPath: pixelCleanImg,
    ghLink: "https://github.com/realtee01",
    demoLink: "https://pixel-clean-ai-pi.vercel.app/",
    category: "Web App"
  },
  {
    id: 12,
    title: "CGPA Calculator",
    description: "A practical tool for University of Lagos students to track and calculate grades. Built with JavaScript, CSS, and HTML.",
    imgPath: calcImg,
    ghLink: "https://github.com/realtee01",
    demoLink: "https://cgpa-calculator-tobiloba.vercel.app",
    category: "Web App"
  }
];

export default function Projects() {
  const [filter, setFilter] = useState("All");

  const categories = ["All", "Web App", "Landing Page", "Web3", "E-commerce"];

  const filteredProjects = projectsData.filter(project => {
    if (filter === "All") return true;
    return project.category === filter;
  });

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, scale: 0.9, y: 30 },
    show: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
    exit: { opacity: 0, scale: 0.9, y: 30, transition: { duration: 0.3 } }
  };

  return (
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
            My Recent <strong className="text-gradient">Works</strong>
          </h1>
          <p className="text-gray-300 text-lg mb-6 font-light tracking-wide max-w-2xl mx-auto">
            Here are a few projects I've worked on recently.
          </p>
          <div className="flex justify-center mb-10">
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-[13px] text-gray-400 font-medium">
              <Lock className="w-3.5 h-3.5 text-[#00e5ff]" />
              <span>Some projects are hidden under NDA</span>
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
                  imgPath={project.imgPath}
                  customCover={project.customCover}
                  isBlog={false}
                  title={project.title}
                  description={project.description}
                  ghLink={project.ghLink}
                  demoLink={project.demoLink}
                  inProgress={project.inProgress}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
}
