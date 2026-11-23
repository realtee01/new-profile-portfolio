import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, ArrowUpRight, ExternalLink, Github, BookOpen, Check } from "lucide-react";
import { Link } from "react-router-dom";
import { useTheme } from "../../context/ThemeContext";
import { SparkleMark } from "../ui/EditorialPrimitives";
import { LazyImage } from "../ui/LazyMedia";

export interface ProjectDetailsData {
  industry?: string;
  businessValue?: string;
  goals?: string;
  research?: string;
  designProcess?: string;
  development?: string;
  lessonsLearned?: string;
  demoLink?: string;
  ghLink?: string;
  problem: string;
  solution: string;
  role: string;
  toolsUsed: string[];
  whyTools: string;
  features: string[];
  challenges: string;
  result: string;
  architecture?: string;
}

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  details: ProjectDetailsData | null;
  slug?: string;
  imgPath?: string;
  category?: string;
  year?: string;
  metrics?: string;
  clientOrContext?: string;
  demoLink?: string;
  ghLink?: string;
}

export default function ProjectModal({
  isOpen,
  onClose,
  title,
  details,
  slug,
  imgPath,
  category,
  year,
  metrics,
  clientOrContext,
  demoLink,
  ghLink,
}: ProjectModalProps) {
  const [imgFailed, setImgFailed] = useState(false);
  const { openBooking } = useTheme();

  useEffect(() => {
    setImgFailed(false);
  }, [imgPath, title]);

  useEffect(() => {
    if (!isOpen) return;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!details) return null;

  const resolvedDemo = demoLink || details.demoLink;
  const resolvedGh = ghLink || details.ghLink;

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          className="fixed inset-0 z-[110] flex items-center justify-center p-3 sm:p-6 md:p-8"
          role="dialog"
          aria-modal="true"
          aria-labelledby="case-study-modal-title"
        >
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            className="fixed inset-0 bg-[#18131A]/65 backdrop-blur-xs cursor-pointer"
          />

          {/* Tactile Paper Monograph Sheet */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.97, y: 12 }}
            transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-5xl bg-[var(--surface-card)] border border-[var(--border-strong)] rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[92vh] z-10"
          >
            {/* Modal Header */}
            <div className="flex items-start justify-between gap-6 px-6 sm:px-10 py-6 border-b border-dashed border-[var(--border-hairline)] bg-[var(--bg-paper)]/85">
              <div className="min-w-0">
                <div className="flex flex-wrap items-center gap-2 text-xs text-[var(--ink-muted)] font-medium mb-2">
                  <SparkleMark className="w-3 h-3 text-[var(--accent)]" />
                  <span>{category || details.industry || "Case Study"}</span>
                  {year && (
                    <>
                      <span aria-hidden="true">·</span>
                      <span className="font-mono tabular-nums">{year}</span>
                    </>
                  )}
                  {clientOrContext && (
                    <>
                      <span aria-hidden="true">·</span>
                      <span>{clientOrContext}</span>
                    </>
                  )}
                </div>
                <h2
                  id="case-study-modal-title"
                  className="font-editorial text-3xl sm:text-4xl font-black text-[var(--ink)] tracking-tight leading-tight"
                >
                  {title}
                </h2>
              </div>

              <button
                type="button"
                onClick={onClose}
                className="w-10 h-10 shrink-0 rounded-full border border-[var(--border-hairline)] bg-white/80 hover:border-[var(--ink)] text-[var(--ink)] flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Close case study"
              >
                <X size={18} />
              </button>
            </div>

            {/* Scrollable Body */}
            <div className="px-6 sm:px-10 py-8 overflow-y-auto flex-grow space-y-9 text-[var(--ink-muted)]">
              {/* Rich Media Hero Preview */}
              {imgPath && !imgFailed ? (
                <div className="rounded-2xl overflow-hidden border border-[var(--border-hairline)] bg-[var(--bg-paper)] aspect-[16/8]">
                  <LazyImage
                    src={imgPath}
                    alt={`${title} interface preview`}
                    priority
                    maxWidth={960}
                    className="w-full h-full object-cover"
                    onError={() => setImgFailed(true)}
                  />
                </div>
              ) : (
                <div className="rounded-2xl border border-[var(--border-hairline)] bg-[var(--bg-band)]/55 px-8 py-12 flex flex-col justify-center">
                  <span className="font-mono text-xs text-[var(--ink-muted)] mb-2">
                    Engineering Case Study
                  </span>
                  <span className="font-editorial text-3xl font-black text-[var(--ink)]">
                    {title}
                  </span>
                </div>
              )}

              {/* Metrics & Specification Strip */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 py-6 border-y border-dashed border-[var(--border-hairline)]">
                <div>
                  <div className="text-[11px] font-bold uppercase tracking-[0.14em] text-[var(--ink-soft)] mb-1">
                    Role
                  </div>
                  <div className="text-sm font-bold text-[var(--ink)]">
                    {details.role}
                  </div>
                </div>
                <div>
                  <div className="text-[11px] font-bold uppercase tracking-[0.14em] text-[var(--ink-soft)] mb-1">
                    Key Metrics
                  </div>
                  <div className="text-sm font-bold text-[var(--accent)] font-mono tabular-nums">
                    {metrics || "95+ Core Web Vitals"}
                  </div>
                </div>
                <div>
                  <div className="text-[11px] font-bold uppercase tracking-[0.14em] text-[var(--ink-soft)] mb-1">
                    Tech Stack
                  </div>
                  <div className="text-sm text-[var(--ink)] leading-snug">
                    {details.toolsUsed.join(" · ")}
                  </div>
                </div>
              </div>

              {/* Challenge & Solution */}
              <section className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                <div>
                  <h3 className="font-editorial text-xl font-black text-[var(--ink)] mb-3">
                    01. The Challenge
                  </h3>
                  <p className="text-[15px] leading-relaxed">{details.problem}</p>
                </div>

                <div>
                  <h3 className="font-editorial text-xl font-black text-[var(--ink)] mb-3">
                    02. The Solution
                  </h3>
                  <p className="text-[15px] leading-relaxed">{details.solution}</p>
                </div>
              </section>

              {/* Architecture & Tooling */}
              <section className="bg-[var(--bg-paper)]/75 border border-[var(--border-hairline)] rounded-2xl p-6 sm:p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="font-editorial text-lg font-black text-[var(--ink)] mb-2">
                      Why These Tools
                    </h3>
                    <p className="text-sm leading-relaxed">{details.whyTools}</p>
                  </div>
                  <div>
                    <h3 className="font-editorial text-lg font-black text-[var(--ink)] mb-2">
                      {details.architecture
                        ? "Architecture Notes"
                        : "Technical Challenges"}
                    </h3>
                    <p className="text-sm leading-relaxed">
                      {details.architecture || details.challenges}
                    </p>
                  </div>
                </div>
              </section>

              {/* Key Deliverables & Outcome */}
              <section className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                <div>
                  <h3 className="font-editorial text-xl font-black text-[var(--ink)] mb-4">
                    03. Key Deliverables
                  </h3>
                  <ul className="space-y-3">
                    {details.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-3 text-sm leading-relaxed"
                      >
                        <Check
                          size={16}
                          className="text-[var(--accent)] shrink-0 mt-0.5"
                        />
                        <span className="text-[var(--ink)]">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-6">
                  {details.architecture && (
                    <div>
                      <h3 className="font-editorial text-xl font-black text-[var(--ink)] mb-3">
                        04. Key Obstacle Overcome
                      </h3>
                      <p className="text-sm leading-relaxed">
                        {details.challenges}
                      </p>
                    </div>
                  )}

                  <div className="paper-band border border-[var(--border-hairline)] rounded-2xl p-6">
                    <div className="text-[11px] font-bold uppercase tracking-[0.14em] text-[var(--accent)] mb-2">
                      Measurable Outcome
                    </div>
                    <p className="text-base font-bold text-[var(--ink)] leading-relaxed">
                      {details.result}
                    </p>
                  </div>
                </div>
              </section>

              {/* Modal Footer Actions */}
              <section className="pt-6 border-t border-dashed border-[var(--border-hairline)] flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
                <div className="flex flex-wrap items-center gap-3">
                  {resolvedDemo && (
                    <a
                      href={resolvedDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-[var(--ink)] text-white hover:opacity-90 text-sm font-semibold transition-opacity whitespace-nowrap"
                    >
                      <span>Live Site</span>
                      <ExternalLink size={14} />
                    </a>
                  )}
                  {slug && (
                    <Link
                      to={`/projects/${slug}`}
                      onClick={onClose}
                      className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full border border-[var(--border-strong)] bg-white/75 hover:bg-[var(--ink)]/5 text-[var(--ink)] text-sm font-semibold transition-colors whitespace-nowrap"
                    >
                      <BookOpen size={14} />
                      <span>Full Page View</span>
                    </Link>
                  )}
                  {resolvedGh && (
                    <a
                      href={resolvedGh}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-full border border-[var(--border-hairline)] bg-white/60 hover:border-[var(--ink)] text-[var(--ink-muted)] hover:text-[var(--ink)] text-sm font-semibold transition-colors whitespace-nowrap"
                    >
                      <Github size={14} />
                      <span>Source</span>
                    </a>
                  )}
                </div>

                <button
                  type="button"
                  onClick={() => {
                    onClose();
                    openBooking(`Similar to ${title}`);
                  }}
                  className="inline-flex items-center justify-center gap-1.5 text-sm font-bold text-[var(--accent)] hover:opacity-80 transition-opacity cursor-pointer whitespace-nowrap"
                >
                  <span>Build something similar</span>
                  <ArrowUpRight size={16} />
                </button>
              </section>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
