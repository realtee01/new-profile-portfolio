import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiGit,
} from "react-icons/di";
import {
  SiNextdotjs,
  SiSolidity,
  SiTailwindcss,
  SiTypescript
} from "react-icons/si";
import { motion } from "motion/react";
import React, { useState } from "react";

const SkillIcon = ({ icon: Icon, name, proficiency, projects }: { icon: React.ElementType, name: string, proficiency: string, projects: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div 
      className="relative group cursor-pointer"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="tech-icons flex justify-center items-center w-24 h-24 sm:w-32 sm:h-32 text-white">
        <Icon />
      </div>
      
      {/* Tooltip */}
      <div className={`transition-opacity duration-300 pointer-events-none absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-48 sm:w-56 bg-black/60 border backdrop-blur-2xl border-[#00e5ff]/30 shadow-[0_20px_40px_-10px_rgba(0,229,255,0.3)] rounded-2xl p-4 z-50 ${isOpen ? 'opacity-100' : 'opacity-0'}`}>
        <div className="text-center">
          <h4 className="text-white font-bold text-lg mb-1">{name}</h4>
          <div className="w-full bg-gray-700 h-1.5 rounded-full mb-3 overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-[#c770f0] to-[#00e5ff]" 
              style={{ width: proficiency }}
            />
          </div>
          <p className="text-xs text-gray-300 font-medium">Projects: <span className="text-[#00e5ff]">{projects}</span></p>
        </div>
        <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-1 border-4 border-transparent border-t-[#151421]"></div>
      </div>
    </div>
  );
};

export default function Techstack() {
  const skills = [
    { icon: DiReact, name: "React", proficiency: "95%", projects: "Pixel Clean AI, Nexchat3" },
    { icon: DiJavascript1, name: "JavaScript", proficiency: "90%", projects: "Nexus3, Trendy Transit" },
    { icon: SiTailwindcss, name: "Tailwind CSS", proficiency: "98%", projects: "Nextclean, Heritage Kitchen" },
    { icon: SiTypescript, name: "TypeScript", proficiency: "85%", projects: "Forzchain, Pixel Clean AI" },
    { icon: DiNodejs, name: "Node.js", proficiency: "80%", projects: "Relay Properties" },
    { icon: SiNextdotjs, name: "Next.js", proficiency: "85%", projects: "Trendy Transit, Nexchat3" },
    { icon: DiGit, name: "Git", proficiency: "90%", projects: "All Projects" },
    { icon: SiSolidity, name: "Solidity", proficiency: "70%", projects: "Forzchain" },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-4 sm:gap-6 pb-12">
      {skills.map((skill, index) => (
        <SkillIcon key={index} {...skill} />
      ))}
    </div>
  );
}

