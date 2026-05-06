import {
  SiPostman,
  SiSlack,
  SiVercel,
  SiGithub,
  SiFigma
} from "react-icons/si";
import { DiWindows, DiVisualstudio } from "react-icons/di";
import React from "react";

const SkillIcon = ({ icon: Icon, name, proficiency, projects }: { icon: React.ElementType, name: string, proficiency: string, projects: string }) => {
  return (
    <div className="relative group cursor-pointer">
      <div className="tech-icons flex justify-center items-center w-24 h-24 sm:w-32 sm:h-32 text-white">
        <Icon />
      </div>
      
      {/* Tooltip */}
      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-48 sm:w-56 bg-[#151421] border border-[#c770f0]/30 shadow-[0_10px_30px_-10px_rgba(199,112,240,0.3)] rounded-xl p-4 z-50">
        <div className="text-center">
          <h4 className="text-white font-bold text-lg mb-1">{name}</h4>
          <div className="w-full bg-gray-700 h-1.5 rounded-full mb-3 overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-[#00e5ff] to-[#c770f0]" 
              style={{ width: proficiency }}
            />
          </div>
          <p className="text-xs text-gray-300 font-medium">Used for: <span className="text-[#c770f0]">{projects}</span></p>
        </div>
        <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-1 border-4 border-transparent border-t-[#151421]"></div>
      </div>
    </div>
  );
};

export default function Toolstack() {
  const tools = [
    { icon: DiWindows, name: "Windows", proficiency: "95%", projects: "Primary OS" },
    { icon: DiVisualstudio, name: "VS Code", proficiency: "98%", projects: "Primary Editor" },
    { icon: SiPostman, name: "Postman", proficiency: "85%", projects: "API Testing" },
    { icon: SiVercel, name: "Vercel", proficiency: "90%", projects: "Deployment" },
    { icon: SiSlack, name: "Slack", proficiency: "85%", projects: "Communication & Integration" },
    { icon: SiGithub, name: "GitHub", proficiency: "95%", projects: "Version Control" },
    { icon: SiFigma, name: "Figma", proficiency: "80%", projects: "UI/UX Design" },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-4 sm:gap-6 pb-12">
      {tools.map((tool, index) => (
        <SkillIcon key={index} {...tool} />
      ))}
    </div>
  );
}
