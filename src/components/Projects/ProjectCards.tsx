import React from "react";
import { BsGithub } from "react-icons/bs";
import { CgWebsite } from "react-icons/cg";
import { ArrowRight, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";
import { ProjectDetailsData } from "./ProjectModal";
import { HashLink } from "react-router-hash-link";

interface ProjectCardProps {
  slug?: string;
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
  featured?: boolean;
  details?: ProjectDetailsData;
}

export default function ProjectCards(props: ProjectCardProps) {
  return (
    <div className={`group relative flex flex-col rounded-2xl overflow-hidden backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 h-full ${
      props.featured 
        ? "bg-gradient-to-b from-[#1c1530] to-[#110c1c] border border-[#c770f0]/40 shadow-[0_0_30px_-5px_rgba(199,112,240,0.15)] hover:border-[#c770f0]/70 hover:shadow-[0_10px_40px_-5px_rgba(199,112,240,0.3)]" 
        : "bg-[#151421] border border-white/5 hover:border-[#00e5ff]/30 hover:shadow-[0_10px_40px_-10px_rgba(0,229,255,0.2)]"
    }`}>
      {/* Image Container */}
      <div className="relative w-full h-52 sm:h-60 overflow-hidden bg-[#1a1927]">
        {props.featured && (
          <div className="absolute top-4 right-4 z-20 bg-[#c770f0]/20 border border-[#c770f0]/50 text-[#c770f0] px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-md shadow-[0_0_15px_rgba(199,112,240,0.3)]">
            Featured
          </div>
        )}
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
        <div className="absolute inset-0 bg-gradient-to-t from-[#151421] via-[#151421]/60 to-transparent opacity-90 transition-opacity duration-500" />
      </div>

      {/* Content Container */}
      <div className="relative p-6 sm:p-8 flex flex-col flex-grow z-10 -mt-8">
        {props.details?.industry && (
          <span className="text-xs font-semibold tracking-widest uppercase text-[#c770f0] mb-2 block">
            {props.details.industry}
          </span>
        )}
        
        <h3 className="text-2xl font-serif font-bold mb-4 text-white transition-colors duration-300 group-hover:text-[#00e5ff] tracking-wide">
          {props.title}
        </h3>
        
        {props.details ? (
          <div className="flex-grow space-y-4 mb-8">
            <div>
              <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-widest mb-1">Business Problem</h4>
              <p className="text-gray-300 text-sm line-clamp-2 leading-relaxed">{props.details.problem}</p>
            </div>
            <div>
              <h4 className="text-xs font-semibold text-[#00e5ff] uppercase tracking-widest mb-1">Solution Provided</h4>
              <p className="text-gray-300 text-sm line-clamp-2 leading-relaxed">{props.details.solution}</p>
            </div>
            
            {props.details.businessValue && (
              <div>
                <h4 className="text-xs font-semibold text-[#27c93f] uppercase tracking-widest mb-1">Business Value</h4>
                <p className="text-gray-300 text-sm line-clamp-2 leading-relaxed">{props.details.businessValue}</p>
              </div>
            )}

            <div className="pt-2">
              <div className="flex flex-wrap gap-1.5 mt-2">
                {props.details.toolsUsed.slice(0, 4).map((tool, idx) => (
                  <span key={idx} className="bg-white/5 border border-white/10 px-2 py-1 rounded text-[10px] text-gray-400">
                    {tool}
                  </span>
                ))}
                {props.details.toolsUsed.length > 4 && (
                  <span className="bg-white/5 border border-white/10 px-2 py-1 rounded text-[10px] text-gray-400">
                    +{props.details.toolsUsed.length - 4}
                  </span>
                )}
              </div>
            </div>
          </div>
        ) : (
          <div className="text-gray-400 text-sm sm:text-base mb-8 flex-grow leading-relaxed">
            {props.description}
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center gap-3 mt-auto">
          {props.inProgress ? (
            <span className="w-full justify-center bg-[#00e5ff]/10 text-[#00e5ff] border border-[#00e5ff]/20 px-6 py-2.5 rounded-xl text-sm font-medium flex items-center gap-2">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00e5ff] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#00e5ff]"></span>
              </span>
              In Progress
            </span>
          ) : (
            <div className="flex flex-col gap-3 w-full">
              <div className="flex gap-3">
                {props.slug ? (
                  <Link
                    to={`/projects/${props.slug}`}
                    className="flex-1 bg-white/5 hover:bg-white/10 border border-[#c770f0]/30 text-white px-4 py-2.5 rounded-xl flex justify-center items-center gap-1.5 transition-all duration-300 text-xs font-bold uppercase tracking-wider shadow-[0_0_15px_rgba(199,112,240,0.1)] hover:shadow-[0_0_20px_rgba(199,112,240,0.25)]"
                  >
                    <BookOpen size={14} className="text-[#c770f0]" />
                    <span>Case Study</span>
                  </Link>
                ) : props.hasDetails ? (
                  <button
                    onClick={props.onViewDetails}
                    className="flex-1 bg-white/5 hover:bg-white/10 border border-[#c770f0]/30 text-white px-4 py-2.5 rounded-xl flex justify-center items-center transition-all duration-300 text-xs font-bold uppercase tracking-wider shadow-[0_0_15px_rgba(199,112,240,0.1)] hover:shadow-[0_0_20px_rgba(199,112,240,0.25)]"
                  >
                    Case Study
                  </button>
                ) : null}

                {!props.isBlog && props.demoLink && (
                  <a
                    href={props.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-gradient-to-r from-[#c770f0] to-[#00e5ff] opacity-90 hover:opacity-100 text-[#0c0513] px-4 py-2.5 rounded-xl flex justify-center items-center gap-2 transition-all duration-300 text-xs font-bold uppercase tracking-wider shadow-[0_0_20px_rgba(0,229,255,0.2)] hover:shadow-[0_0_25px_rgba(0,229,255,0.4)]"
                  >
                    <CgWebsite className="text-base" />
                    <span>Live Demo</span>
                  </a>
                )}
              </div>

              <div className="flex items-center gap-2">
                <HashLink 
                  smooth
                  to="/contact#top" 
                  className="flex-1 bg-transparent hover:bg-white/5 border border-white/20 text-gray-300 hover:text-white px-4 py-2 rounded-xl flex justify-center items-center transition-all duration-300 text-xs font-medium uppercase tracking-wider"
                >
                  Hire Tobi
                </HashLink>
                {props.ghLink && (
                  <a
                    href={props.ghLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl border border-white/10 bg-white/5 text-gray-400 hover:text-white transition-colors"
                    aria-label="View source code"
                  >
                    <BsGithub className="text-base" />
                  </a>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
