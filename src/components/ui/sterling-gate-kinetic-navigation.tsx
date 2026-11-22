import React from "react";
import { motion, AnimatePresence } from "motion/react";
import { HashLink } from "react-router-hash-link";
import { X, ArrowUpRight, Globe } from "lucide-react";

interface SterlingKineticNavProps {
  isOpen: boolean;
  onClose: () => void;
  language: string;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

export function SterlingGateKineticNavigation({
  isOpen,
  onClose,
  language,
  toggleLanguage,
  t,
}: SterlingKineticNavProps) {
  const menuItems = [
    { index: "01", to: "/#top", text: t("nav.home") || "Home" },
    { index: "02", to: "/projects#top", text: "Selected Work" },
    { index: "03", to: "/services#top", text: "Services" },
    { index: "04", to: "/about#top", text: t("nav.about") || "About" },
    { index: "05", to: "/experience#top", text: "Experience" },
    { index: "06", to: "/testimonials#top", text: "Testimonials" },
    { index: "07", to: "/resume#top", text: t("nav.resume") || "Resume" },
    { index: "08", to: "/blog#top", text: "Journal" },
    { index: "09", to: "/web-developer-nigeria#top", text: "Nigeria Web Dev" },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] lg:hidden">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            className="fixed inset-0 bg-[#141413]/40 backdrop-blur-xs cursor-pointer"
          />

          <motion.nav
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
            className="fixed top-0 right-0 h-full w-[88%] max-w-[380px] bg-[#F8F7F4] border-l border-[#E5E2DC] shadow-2xl flex flex-col z-10"
            aria-label="Mobile Navigation"
          >
            <div className="flex items-center justify-between px-6 py-5 border-b border-[#E5E2DC]">
              <span className="font-serif text-lg font-semibold text-[#141413]">
                Menu
              </span>
              <div className="flex items-center gap-2">
                <button
                  onClick={toggleLanguage}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-[#E5E2DC] bg-white text-xs font-medium text-[#575550] hover:text-[#141413] transition-colors cursor-pointer"
                >
                  <Globe size={13} />
                  <span className="uppercase">{language}</span>
                </button>
                <button
                  onClick={onClose}
                  className="w-9 h-9 rounded-full border border-[#E5E2DC] bg-white flex items-center justify-center text-[#141413] hover:border-[#141413] transition-colors cursor-pointer"
                  aria-label="Close Menu"
                >
                  <X size={17} />
                </button>
              </div>
            </div>

            <div className="flex-1 overflow-y-auto px-6 py-6">
              <ul className="divide-y divide-[#E5E2DC]">
                {menuItems.map((item) => (
                  <li key={item.index}>
                    <HashLink
                      smooth
                      to={item.to}
                      onClick={onClose}
                      className="flex items-center justify-between py-3.5 group"
                    >
                      <div className="flex items-baseline gap-4">
                        <span className="font-mono text-xs text-[#86837C] tabular-nums">
                          {item.index}
                        </span>
                        <span className="font-serif text-xl text-[#141413] group-hover:text-[#1D4ED8] transition-colors">
                          {item.text}
                        </span>
                      </div>
                      <ArrowUpRight
                        size={16}
                        className="text-[#86837C] group-hover:text-[#1D4ED8] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
                      />
                    </HashLink>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-6 border-t border-[#E5E2DC] bg-white">
              <HashLink
                smooth
                to="/contact#top"
                onClick={onClose}
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-6 rounded-full bg-[#141413] text-white text-sm font-medium hover:bg-[#1D4ED8] transition-colors"
              >
                Book a Discovery Call
                <ArrowUpRight size={15} />
              </HashLink>
              <p className="text-xs text-[#86837C] text-center mt-3">
                tobilobaakala@gmail.com · Lagos, NG
              </p>
            </div>
          </motion.nav>
        </div>
      )}
    </AnimatePresence>
  );
}

export default SterlingGateKineticNavigation;
