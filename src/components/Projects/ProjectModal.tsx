import React, { useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X } from "lucide-react";

export interface ProjectDetailsData {
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
}

export default function ProjectModal({ isOpen, onClose, title, details }: ProjectModalProps) {
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
            className="fixed inset-0 bg-[#06020c]/80 backdrop-blur-sm"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full max-w-4xl bg-[#151421] border border-white/10 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-white/5 bg-white/[0.02]">
              <h2 className="text-2xl font-serif font-bold text-white">
                {title} <span className="text-[#00e5ff] font-sans font-normal text-lg tracking-wider opacity-80 ml-2">CASE STUDY</span>
              </h2>
              <button
                onClick={onClose}
                className="p-2 bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white rounded-full transition-colors"
                aria-label="Close modal"
              >
                <X size={20} />
              </button>
            </div>

            {/* Body */}
            <div className="p-6 sm:p-8 overflow-y-auto custom-scrollbar flex-grow space-y-8 text-gray-300 leading-relaxed font-light">
              <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div space-y-3>
                  <h3 className="text-[#c770f0] font-semibold text-sm tracking-widest uppercase mb-3">The Problem</h3>
                  <p>{details.problem}</p>
                </div>
                <div space-y-3>
                  <h3 className="text-[#00e5ff] font-semibold text-sm tracking-widest uppercase mb-3">The Solution</h3>
                  <p>{details.solution}</p>
                </div>
              </section>

              <div className="h-px w-full bg-white/5" />

              <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                  <h3 className="text-white font-semibold mb-3">My Role</h3>
                  <p>{details.role}</p>
                </div>
                <div className="md:col-span-2">
                  <h3 className="text-white font-semibold mb-3">The Tools Used</h3>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {details.toolsUsed.map((tool, idx) => (
                      <span key={idx} className="bg-white/5 px-3 py-1.5 rounded-md text-xs border border-white/10">
                        {tool}
                      </span>
                    ))}
                  </div>
                  <h4 className="text-white/70 font-semibold mb-2 text-sm">Why these tools?</h4>
                  <p className="text-sm">{details.whyTools}</p>
                </div>
              </section>

              <div className="h-px w-full bg-white/5" />

              <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-white font-semibold mb-3">Key Features</h3>
                  <ul className="list-disc list-inside space-y-2 text-sm">
                    {details.features.map((feature, idx) => (
                      <li key={idx} className="text-gray-400">
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-3">The Challenges</h3>
                  <p className="text-sm">{details.challenges}</p>
                </div>
              </section>
              
              <div className="h-px w-full bg-white/5" />

              <section className="bg-gradient-to-r from-[#00e5ff]/5 to-transparent border-l-2 border-[#00e5ff] p-5 rounded-r-lg">
                <h3 className="text-[#00e5ff] font-semibold mb-2">The Result & Impact</h3>
                <p className="text-white/90">{details.result}</p>
              </section>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
