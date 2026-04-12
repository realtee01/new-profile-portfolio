import Particle from "../Particle";
import ProjectCard from "./ProjectCards";
import { motion } from "motion/react";

// Real images for projects from user's github
const forzchainImg = "https://raw.githubusercontent.com/realtee01/my-portfolio/main/src/assets/forzchain.jpg";
const cinescopeImg = "https://raw.githubusercontent.com/realtee01/my-portfolio/main/src/assets/cinescope-thumb.jpg";
const jobBoardImg = "https://raw.githubusercontent.com/realtee01/my-portfolio/main/src/assets/job-board-thumb.jpg";
const calcImg = "https://raw.githubusercontent.com/realtee01/my-portfolio/main/src/assets/calc.jpg";
const nextcleanImg = "https://raw.githubusercontent.com/realtee01/my-portfolio/main/src/assets/Nextclean.jpg";
const heritageKitchenImg = "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

export default function Projects() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <div className="relative pt-32 pb-16 min-h-screen">
      <Particle />
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
          <p className="text-white text-lg">
            Here are a few projects I've worked on recently.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <motion.div variants={itemVariants} whileHover={{ y: -10, transition: { duration: 0.3 } }} className="h-full">
            <ProjectCard
              imgPath={forzchainImg}
              isBlog={false}
              title="Forzchain"
              description="A decentralized supply chain management system leveraging blockchain for transparency. Built with React, Tailwind, and Solidity."
              ghLink="https://github.com/realtee01"
              demoLink="https://forzchain.vercel.app/"
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
              imgPath={jobBoardImg}
              isBlog={false}
              title="Job Listing Board"
              description="A functional board for finding tech roles with dynamic filtering and clean layout. Built with React, Tailwind, and JS."
              ghLink="https://github.com/realtee01"
              demoLink="https://job-listings-board-7i6s.vercel.app"
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
        </motion.div>
      </div>
    </div>
  );
}
