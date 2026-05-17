import { BsGithub } from "react-icons/bs";
import { CgWebsite } from "react-icons/cg";

interface ProjectCardProps {
  imgPath?: string;
  title: string;
  description: React.ReactNode;
  ghLink?: string;
  isBlog?: boolean;
  demoLink?: string;
  inProgress?: boolean;
  customCover?: React.ReactNode;
  hasDetails?: boolean;
  onViewDetails?: () => void;
}

export default function ProjectCards(props: ProjectCardProps) {
  return (
    <div className="group relative flex flex-col rounded-2xl overflow-hidden bg-[#151421] border border-white/5 backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:border-[#00e5ff]/30 hover:shadow-[0_10px_40px_-10px_rgba(0,229,255,0.2)] h-full">
      {/* Image Container */}
      <div className="relative w-full h-52 sm:h-60 overflow-hidden bg-[#1a1927]">
        {props.customCover ? (
          props.customCover
        ) : (
          props.imgPath && (
            <img 
              src={props.imgPath} 
              alt={props.title} 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
              loading="lazy"
              decoding="async"
            />
          )
        )}
        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#151421] via-[#151421]/20 to-transparent opacity-90 transition-opacity duration-500 group-hover:opacity-70" />
      </div>

      {/* Content Container */}
      <div className="relative p-6 sm:p-8 flex flex-col flex-grow z-10 -mt-6">
        <h3 className="text-2xl font-serif font-bold mb-3 text-white transition-colors duration-300 group-hover:text-[#00e5ff] tracking-wide">
          {props.title}
        </h3>
        
        <div className="text-gray-400 text-sm sm:text-base mb-8 flex-grow leading-relaxed">
          {props.description}
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center gap-4 mt-auto">
          {props.inProgress ? (
            <span className="w-full justify-center bg-[#00e5ff]/10 text-[#00e5ff] border border-[#00e5ff]/20 px-6 py-2.5 rounded-xl text-sm font-medium flex items-center gap-2">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00e5ff] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#00e5ff]"></span>
              </span>
              In Progress
            </span>
          ) : (
            <>
              {props.ghLink && (
                <a
                  href={props.ghLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-white px-4 py-2.5 rounded-xl flex justify-center items-center gap-2 transition-all duration-300 text-sm font-medium group/btn"
                >
                  <BsGithub className="text-lg group-hover/btn:text-white text-gray-300 transition-colors" />
                  <span>{props.isBlog ? "Read Post" : "Repository"}</span>
                </a>
              )}

              {!props.isBlog && props.demoLink && (
                <a
                  href={props.demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-gradient-to-r from-[#c770f0] to-[#00e5ff] opacity-90 hover:opacity-100 text-[#0c0513] px-4 py-2.5 rounded-xl flex justify-center items-center gap-2 transition-all duration-300 text-sm font-bold shadow-[0_0_20px_rgba(0,229,255,0.2)] hover:shadow-[0_0_25px_rgba(0,229,255,0.4)]"
                >
                  <CgWebsite className="text-lg" />
                  <span>Live Demo</span>
                </a>
              )}
              {props.hasDetails && (
                <button
                  onClick={props.onViewDetails}
                  className="w-full mt-2 bg-white/5 hover:bg-white/10 border border-[#00e5ff]/30 text-[#00e5ff] px-4 py-2.5 rounded-xl flex justify-center items-center gap-2 transition-all duration-300 text-sm font-medium"
                >
                  View Case Study
                </button>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}
