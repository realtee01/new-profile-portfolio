import ProjectCard from "./ProjectCards";
import { motion, Variants } from "motion/react";
import { Marquee } from "../ui/marquee";
import { FaReact } from "react-icons/fa";
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

export default function Projects() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
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
          <h1 className="text-4xl font-bold text-white mb-4">
            My Recent <strong className="text-gradient">Works</strong>
          </h1>
          <p className="text-white text-lg mb-10">
            Here are a few projects I've worked on recently.
          </p>

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
            </Marquee>
          </div>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8"
        >
          <motion.div variants={itemVariants} whileHover={{ y: -10, transition: { duration: 0.3 } }} className="h-full">
            <ProjectCard
              imgPath={forzchainImg}
              isBlog={false}
              title="Forzchain"
              description="A decentralized supply chain management system leveraging blockchain for transparency. Built with React, Tailwind, and Solidity."
              ghLink="https://github.com/realtee01"
              demoLink="https://forzchain-v-2.vercel.app"
            />
          </motion.div>

          <motion.div variants={itemVariants} whileHover={{ y: -10, transition: { duration: 0.3 } }} className="h-full">
            <ProjectCard
              imgPath={cinescopeImg}
              isBlog={false}
              title="Cinescope"
              description="A premium movie discovery platform showing real-time data and polished UI. Built with React, Tailwind, and Vite."
              ghLink="https://github.com/realtee01"
              demoLink="https://cinescope-tobiloba-niad.vercel.app"
            />
          </motion.div>

          <motion.div variants={itemVariants} whileHover={{ y: -10, transition: { duration: 0.3 } }} className="h-full">
            <ProjectCard
              imgPath={calcImg}
              isBlog={false}
              title="CGPA Calculator"
              description="A practical tool for University of Lagos students to track and calculate grades. Built with JavaScript, CSS, and HTML."
              ghLink="https://github.com/realtee01"
              demoLink="https://cgpa-calculator-tobiloba.vercel.app"
            />
          </motion.div>

          <motion.div variants={itemVariants} whileHover={{ y: -10, transition: { duration: 0.3 } }} className="h-full">
            <ProjectCard
              imgPath={nextcleanImg}
              isBlog={false}
              title="Nextclean"
              description="A Lagos-based cleaning service landing page built to convert. Sharp copy, filterable services, and a mobile-first layout."
              ghLink="https://github.com/realtee01"
              demoLink="https://nextclean.vercel.app"
            />
          </motion.div>

          <motion.div variants={itemVariants} whileHover={{ y: -10, transition: { duration: 0.3 } }} className="h-full">
            <ProjectCard
              imgPath={heritageKitchenImg}
              isBlog={false}
              title="Heritage Kitchen"
              description="A premium restaurant website showcasing a fine dining experience with an elegant UI and responsive layout."
              ghLink="https://github.com/realtee01/heritage-kitchen"
              demoLink="https://heriatage-kitchen.vercel.app/"
            />
          </motion.div>

          <motion.div variants={itemVariants} whileHover={{ y: -10, transition: { duration: 0.3 } }} className="h-full">
            <ProjectCard
              imgPath={trendyTransitImg}
              isBlog={false}
              title="Trendy Transit"
              description="A modern e-commerce and logistics platform offering a seamless shopping experience, featuring a dynamic product catalog, intuitive cart management, and a streamlined checkout process."
              ghLink="https://github.com/realtee01"
              demoLink="https://trendy-transit.vercel.app/"
            />
          </motion.div>
          <motion.div variants={itemVariants} whileHover={{ y: -10, transition: { duration: 0.3 } }} className="h-full">
            <ProjectCard
              imgPath={relayPropertiesImg}
              isBlog={false}
              title="Relay Properties"
              description="A refined real estate platform designed for seamless property discovery and management, featuring an intuitive interface and responsive design elements."
              ghLink="https://github.com/realtee01"
              demoLink="https://relay-properties.vercel.app/"
            />
          </motion.div>
          <motion.div variants={itemVariants} whileHover={{ y: -10, transition: { duration: 0.3 } }} className="h-full">
            <ProjectCard
              imgPath={nexchat3Img}
              isBlog={false}
              title="Nexchat3"
              description="A cutting-edge Web3 chatting platform and animation website. It combines seamless real-time communication with immersive animations and decentralized features for a next-gen digital experience."
              ghLink="https://github.com/realtee01"
              demoLink="https://nexus3-bay.vercel.app/"
            />
          </motion.div>

          <motion.div variants={itemVariants} whileHover={{ y: -10, transition: { duration: 0.3 } }} className="h-full">
            <ProjectCard
              customCover={<NotesCover />}
              isBlog={false}
              title="Roitech AI & LearnIQ"
              description={<RoitechDescription />}
              inProgress={true}
            />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
