import { useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, ArrowRight, ExternalLink, Github, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

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
}

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  details: ProjectDetailsData | null;
  slug?: string;
}

export default function ProjectModal({ isOpen, onClose, title, details, slug }: ProjectModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!details) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-[#06020c]/90 backdrop-blur-md"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full max-w-5xl bg-[#110c1c] border border-[#c770f0]/20 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 sm:p-8 border-b border-white/10 bg-white/[0.02] relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#c770f0] to-[#00e5ff]" />
              <div>
                {details.industry && (
                  <span className="text-[#00e5ff] text-xs font-semibold tracking-widest uppercase mb-2 block">
                    {details.industry} Case Study
                  </span>
                )}
                <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white">
                  {title}
                </h2>
              </div>
              <button
                onClick={onClose}
                className="p-3 bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white rounded-full transition-colors backdrop-blur-sm border border-white/10"
                aria-label="Close modal"
              >
                <X size={20} />
              </button>
            </div>

            {/* Body */}
            <div className="p-6 sm:p-8 overflow-y-auto custom-scrollbar flex-grow space-y-12 text-gray-300 leading-relaxed font-light">
              
              {/* Challenge & Solution */}
              <section className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                <div className="space-y-4">
                  <h3 className="text-white font-semibold text-xl border-b border-white/10 pb-2">The Challenge</h3>
                  <p className="text-gray-300 text-lg">{details.problem}</p>
                  {details.goals && (
                    <div className="mt-4 p-4 bg-white/5 rounded-xl border border-white/5">
                      <h4 className="text-[#c770f0] font-semibold text-sm tracking-widest uppercase mb-2">Goals</h4>
                      <p className="text-sm">{details.goals}</p>
                    </div>
                  )}
                </div>
                <div className="space-y-4">
                  <h3 className="text-white font-semibold text-xl border-b border-white/10 pb-2">The Solution</h3>
                  <p className="text-gray-300 text-lg">{details.solution}</p>
                  {details.businessValue && (
                    <div className="mt-4 p-4 bg-[#27c93f]/10 border border-[#27c93f]/20 rounded-xl">
                      <h4 className="text-[#27c93f] font-semibold text-sm tracking-widest uppercase mb-2">Business Impact</h4>
                      <p className="text-sm text-gray-200">{details.businessValue}</p>
                    </div>
                  )}
                </div>
              </section>

              {/* Research & Design */}
              {(details.research || details.designProcess) && (
                <section className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 bg-white/[0.02] border border-white/5 p-6 sm:p-8 rounded-2xl">
                  {details.research && (
                    <div>
                      <h3 className="text-white font-semibold text-lg mb-3">User Research</h3>
                      <p className="text-gray-400 text-sm leading-relaxed">{details.research}</p>
                    </div>
                  )}
                  {details.designProcess && (
                    <div>
                      <h3 className="text-white font-semibold text-lg mb-3">Design Process</h3>
                      <p className="text-gray-400 text-sm leading-relaxed">{details.designProcess}</p>
                    </div>
                  )}
                </section>
              )}

              {/* Role & Tech Stack */}
              <section className="bg-white/5 border border-white/10 p-6 sm:p-8 rounded-2xl">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div>
                    <h3 className="text-white font-semibold mb-2">My Role</h3>
                    <p className="text-gray-400">{details.role}</p>
                    {details.development && (
                      <div className="mt-4">
                        <h4 className="text-white/70 font-semibold mb-1 text-sm uppercase tracking-wider">Implementation</h4>
                        <p className="text-xs text-gray-400 leading-relaxed">{details.development}</p>
                      </div>
                    )}
                  </div>
                  <div className="md:col-span-2">
                    <h3 className="text-white font-semibold mb-4">Technologies Used</h3>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {details.toolsUsed.map((tool, idx) => (
                        <span key={idx} className="bg-white/10 px-3 py-1.5 rounded-lg text-sm text-white font-medium border border-white/10 shadow-sm">
                          {tool}
                        </span>
                      ))}
                    </div>
                    <div className="bg-black/30 p-4 rounded-xl">
                      <h4 className="text-white/70 font-semibold mb-2 text-sm uppercase tracking-wider">Why these tools?</h4>
                      <p className="text-sm text-gray-300">{details.whyTools}</p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Features & Challenges */}
              <section className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                <div>
                  <h3 className="text-white font-semibold text-lg mb-4">Key Features</h3>
                  <ul className="space-y-3">
                    {details.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <span className="text-[#00e5ff] mt-1">✓</span>
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-white font-semibold text-lg mb-4">The Challenges</h3>
                  <p className="text-gray-400 bg-black/20 p-5 rounded-xl border border-white/5">{details.challenges}</p>
                </div>
              </section>
              
              {/* Results & Lessons */}
              <section className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 bg-gradient-to-br from-[#00e5ff]/5 to-[#c770f0]/5 border border-white/10 p-6 sm:p-8 rounded-2xl relative overflow-hidden">
                <div className="absolute -inset-20 bg-gradient-to-r from-[#00e5ff]/10 to-[#c770f0]/10 blur-3xl opacity-50 pointer-events-none" />
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold text-white mb-4">The Result</h3>
                  <p className="text-white/90 text-lg leading-relaxed">{details.result}</p>
                </div>
                {details.lessonsLearned && (
                  <div className="relative z-10">
                    <h3 className="text-lg font-semibold text-white mb-3">Lessons Learned</h3>
                    <p className="text-gray-300">{details.lessonsLearned}</p>
                  </div>
                )}
              </section>

              {/* CTA Section */}
              <section className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6">
                <div className="flex flex-wrap gap-3 w-full sm:w-auto">
                  {slug && (
                    <Link
                      to={`/projects/${slug}`}
                      onClick={onClose}
                      className="flex-1 sm:flex-none bg-white/10 hover:bg-white/20 border border-[#00e5ff]/40 text-white px-5 py-3 rounded-xl flex justify-center items-center gap-2 transition-all duration-300 font-bold text-xs uppercase tracking-wider"
                    >
                      <BookOpen size={16} className="text-[#00e5ff]" />
                      <span>Dedicated Page</span>
                    </Link>
                  )}
                  {details.demoLink && (
                    <a
                      href={details.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 sm:flex-none bg-gradient-to-r from-[#c770f0] to-[#00e5ff] text-[#0c0513] px-6 py-3 rounded-xl flex justify-center items-center gap-2 transition-all duration-300 font-bold text-xs uppercase tracking-wider shadow-[0_0_20px_rgba(0,229,255,0.2)] hover:shadow-[0_0_30px_rgba(0,229,255,0.4)]"
                    >
                      <ExternalLink size={16} />
                      <span>Live Demo</span>
                    </a>
                  )}
                  {details.ghLink && (
                    <a
                      href={details.ghLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 sm:flex-none bg-white/5 hover:bg-white/10 border border-white/20 text-white px-5 py-3 rounded-xl flex justify-center items-center gap-2 transition-all duration-300 font-bold text-xs uppercase tracking-wider"
                    >
                      <Github size={16} />
                      <span>Source</span>
                    </a>
                  )}
                </div>
                <HashLink
                  smooth
                  to="/contact#top"
                  onClick={onClose}
                  className="w-full sm:w-auto group flex items-center justify-center gap-2 text-[#00e5ff] font-bold text-xs uppercase tracking-wider px-6 py-3 rounded-xl border border-[#00e5ff]/30 hover:bg-[#00e5ff]/10 transition-all duration-300"
                >
                  Book Something Similar
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </HashLink>
              </section>

            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
