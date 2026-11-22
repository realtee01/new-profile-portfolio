import React, { useState } from "react";
import { ArrowUpRight, ExternalLink, Github } from "lucide-react";
import { Link } from "react-router-dom";
import { ProjectDetailsData } from "./ProjectModal";

interface ProjectCardProps {
  slug?: string;
  imgPath?: string;
  title: string;
  description: React.ReactNode;
  category?: string;
  year?: string;
  metrics?: string;
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
  const [imgFailed, setImgFailed] = useState(false);

  return (
    <article
      onClick={props.onViewDetails}
      className="group editorial-card rounded-2xl overflow-hidden flex flex-col h-full cursor-pointer"
    >
      {/* Clean Media Frame */}
      <div className="relative w-full aspect-[16/10] overflow-hidden bg-[#EFECE6]">
        {props.customCover ? (
          props.customCover
        ) : props.imgPath && !imgFailed ? (
          <img
            src={props.imgPath}
            alt={props.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
            loading="lazy"
            decoding="async"
            referrerPolicy="no-referrer"
            onError={() => setImgFailed(true)}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center p-6 bg-[#F1EFEA]">
            <span className="font-serif text-xl text-[#141413]">{props.title}</span>
          </div>
        )}
      </div>

      {/* Editorial Body */}
      <div className="p-6 flex flex-col flex-grow justify-between">
        <div>
          <div className="flex flex-wrap items-center gap-2 text-xs text-[#86837C] mb-2">
            <span>{props.category || props.details?.industry || "Frontend"}</span>
            {props.year && (
              <>
                <span aria-hidden="true">·</span>
                <span className="font-mono tabular-nums">{props.year}</span>
              </>
            )}
            {props.inProgress && (
              <>
                <span aria-hidden="true">·</span>
                <span className="text-[#1D4ED8] font-medium">In Progress</span>
              </>
            )}
          </div>

          <h3 className="font-serif text-2xl font-semibold text-[#141413] group-hover:text-[#1D4ED8] transition-colors mb-2.5">
            {props.title}
          </h3>

          <p className="text-sm text-[#575550] leading-relaxed line-clamp-3 mb-5">
            {props.description}
          </p>

          {props.details && (
            <p className="text-xs text-[#86837C] font-mono mb-5 truncate">
              {props.details.toolsUsed.slice(0, 4).join(" · ")}
            </p>
          )}
        </div>

        {/* Clean Action Row */}
        <div className="pt-4 border-t border-[#E5E2DC] flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            {props.hasDetails && (
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  props.onViewDetails?.();
                }}
                className="text-xs font-semibold text-[#141413] hover:text-[#1D4ED8] inline-flex items-center gap-1 transition-colors cursor-pointer whitespace-nowrap"
              >
                <span>Quick Preview</span>
                <ArrowUpRight size={13} />
              </button>
            )}
            {props.slug && (
              <Link
                to={`/projects/${props.slug}`}
                onClick={(e) => e.stopPropagation()}
                className="text-xs font-medium text-[#575550] hover:text-[#141413] transition-colors whitespace-nowrap"
              >
                Full Page
              </Link>
            )}
          </div>

          <div className="flex items-center gap-2.5">
            {!props.isBlog && props.demoLink && (
              <a
                href={props.demoLink}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="text-xs font-medium text-[#1D4ED8] hover:text-[#1E40AF] inline-flex items-center gap-1 whitespace-nowrap"
              >
                <span>Live</span>
                <ExternalLink size={12} />
              </a>
            )}
            {props.ghLink && (
              <a
                href={props.ghLink}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="text-[#86837C] hover:text-[#141413] transition-colors p-1"
                aria-label="View source code"
              >
                <Github size={14} />
              </a>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}
