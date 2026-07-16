import { useState, useEffect, ReactNode } from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { Home, User, Briefcase, MessageSquareQuote, FileText, LayoutGrid, Newspaper, X, Globe } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import ChromeButton from "./ui/chrome-button";
import { useLanguage } from "../context/LanguageContext";

export default function Navbar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);
  const { language, toggleLanguage, t } = useLanguage();

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", scrollHandler, { passive: true });
    return () => window.removeEventListener("scroll", scrollHandler);
  }, []);

  // Prevent scroll when menu is open
  useEffect(() => {
    if (expand) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => { document.body.style.overflow = "auto"; };
  }, [expand]);

  return (
    <>
      <nav
        className={`fixed top-4 left-1/2 -translate-x-1/2 w-[94%] sm:w-[92%] max-w-7xl z-50 transition-all duration-300 rounded-full bg-[#1b1a2e]/70 backdrop-blur-md border border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.3)] ${
          navColour ? "py-1.5 px-3 sm:px-4 lg:px-5 xl:px-6 shadow-[0_15px_40px_rgba(0,0,0,0.5)] border-white/20 bg-[#151421]/90" : "py-2.5 px-4 sm:px-5 lg:px-6 xl:px-8"
        }`}
      >
        <div className="w-full">
          <div className="flex justify-between items-center">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="navbar-logo-wrapper"
          >
            <HashLink smooth to="/#top" className="flex items-center px-1" onClick={() => updateExpanded(false)}>
              <svg viewBox="0 0 100 100" className="w-11 h-11 sm:w-12 sm:h-12 drop-shadow-[0_0_10px_rgba(0,229,255,0.3)] transition-all duration-300" aria-label="TA Logo">
                <defs>
                  <linearGradient id="logo-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#c770f0" />
                    <stop offset="100%" stopColor="#00e5ff" />
                  </linearGradient>
                  <clipPath id="circle-clip">
                    <circle cx="50" cy="50" r="50" />
                  </clipPath>
                  <mask id="logo-mask">
                    <rect x="0" y="0" width="100" height="100" fill="black" />
                    <circle cx="50" cy="50" r="50" fill="white" />
                    <circle cx="50" cy="50" r="32" fill="black" />
                    <rect x="0" y="0" width="71" height="100" fill="black" />
                    <rect x="53" y="0" width="18" height="100" fill="white" />
                    <rect x="71" y="42" width="29" height="16" fill="white" />
                    <rect x="29" y="30" width="18" height="70" fill="white" />
                    <rect x="0" y="0" width="47" height="30" fill="white" />
                  </mask>
                </defs>
                <rect x="0" y="0" width="100" height="100" fill="url(#logo-grad)" clipPath="url(#circle-clip)" mask="url(#logo-mask)" />
              </svg>
            </HashLink>
          </motion.div>
          
          {/* Mobile menu button & Language Toggle */}
          <div className="flex items-center gap-2.5 lg:hidden z-[60]">
            <button
              onClick={toggleLanguage}
              className="flex items-center justify-center gap-1 text-white/90 hover:text-[#00e5ff] px-2.5 py-1 rounded-full border border-white/10 bg-white/5 text-xs transition-colors"
            >
              <Globe size={13} />
              <span className="text-[10px] font-bold uppercase">{language}</span>
            </button>
            <button
              onClick={() => updateExpanded(!expand)}
              className="text-white hover:text-[#00e5ff] focus:outline-none transition-colors p-1.5 rounded-full hover:bg-white/5 border border-white/5"
              aria-label="Toggle Menu"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {expand ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8h16M4 16h16" />
                )}
              </svg>
            </button>
          </div>

          {/* Desktop menu */}
          <div className="hidden lg:flex items-center space-x-0.5 xl:space-x-1.5 bg-white/5 border border-white/5 rounded-full px-1.5 py-1">
            <NavItem to="/#top" icon={<Home size={15} />} text={t('nav.home')} />
            <NavItem to="/about#top" icon={<User size={15} />} text={t('nav.about')} />
            <NavItem to="/projects#top" icon={<LayoutGrid size={15} />} text={t('nav.projects')} />
            <NavItem to="/experience#top" icon={<Briefcase size={15} />} text="Experience" />
            <NavItem to="/testimonials#top" icon={<MessageSquareQuote size={15} />} text="Testimonials" />
            <NavItem to="/resume#top" icon={<FileText size={15} />} text={t('nav.resume')} />
            <NavItem to="/blog#top" icon={<Newspaper size={15} />} text={t('nav.blogs')} />
          </div>

          {/* Right Action buttons */}
          <div className="hidden lg:flex items-center gap-2.5">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <button
                onClick={toggleLanguage}
                className="flex items-center justify-center gap-1 text-white hover:text-[#00e5ff] px-3 py-1.5 rounded-full border border-white/10 hover:border-[#00e5ff]/30 bg-white/5 transition-colors"
                title="Toggle Language"
              >
                <Globe size={15} />
                <span className="text-[10px] font-bold uppercase">{language}</span>
              </button>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <ChromeButton to="/contact#top" className="whitespace-nowrap !rounded-full !py-1.5 !px-3.5 xl:!py-2 xl:!px-5 text-[10px] xl:text-xs tracking-wider uppercase font-bold shadow-[0_4px_15px_rgba(0,229,255,0.2)]">
                {t('nav.contact')}
              </ChromeButton>
            </motion.div>
          </div>
        </div>
      </div>
    </nav>

    {/* Mobile Slide-out Menu - Rendered completely outside the transformed nav to prevent containment bugs */}
    <AnimatePresence>
      {expand && (
        <div className="fixed inset-0 z-[100] lg:hidden">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="fixed inset-0 bg-[#06020c]/80 backdrop-blur-sm"
            onClick={() => updateExpanded(false)}
          />
          
          {/* Sidebar */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed top-0 right-0 h-screen w-[85%] max-w-[400px] bg-[#06020c]/95 backdrop-blur-2xl border-l border-white/10 shadow-[-20px_0_50px_rgba(0,0,0,0.8)] flex flex-col overflow-hidden"
          >
            {/* Ambient background glows */}
            <div className="absolute top-[-10%] right-[-10%] w-[250px] h-[250px] rounded-full bg-[#00e5ff]/10 blur-[80px] pointer-events-none" />
            <div className="absolute bottom-[5%] left-[-10%] w-[200px] h-[200px] rounded-full bg-[#c770f0]/10 blur-[70px] pointer-events-none" />

            {/* Sidebar Header */}
            <div className="relative flex items-center justify-between p-6 border-b border-white/5 bg-[#06020c]/50 backdrop-blur-md z-10">
              <div className="flex items-center gap-2.5">
                <svg viewBox="0 0 100 100" className="w-10 h-10 drop-shadow-[0_0_15px_rgba(0,229,255,0.35)] transition-all duration-300" aria-label="TA Logo">
                  <defs>
                    <linearGradient id="logo-grad-sidebar" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#c770f0" />
                      <stop offset="100%" stopColor="#00e5ff" />
                    </linearGradient>
                    <clipPath id="circle-clip-sidebar">
                      <circle cx="50" cy="50" r="50" />
                    </clipPath>
                    <mask id="logo-mask-sidebar">
                      <rect x="0" y="0" width="100" height="100" fill="black" />
                      <circle cx="50" cy="50" r="50" fill="white" />
                      <circle cx="50" cy="50" r="32" fill="black" />
                      <rect x="0" y="0" width="71" height="100" fill="black" />
                      <rect x="53" y="0" width="18" height="100" fill="white" />
                      <rect x="71" y="42" width="29" height="16" fill="white" />
                      <rect x="29" y="30" width="18" height="70" fill="white" />
                      <rect x="0" y="0" width="47" height="30" fill="white" />
                    </mask>
                  </defs>
                  <rect x="0" y="0" width="100" height="100" fill="url(#logo-grad-sidebar)" clipPath="url(#circle-clip-sidebar)" mask="url(#logo-mask-sidebar)" />
                </svg>
                <div>
                  <span className="text-white font-bold tracking-wider text-sm uppercase block">Navigation</span>
                  <span className="text-[10px] text-gray-400 font-mono tracking-widest uppercase">Portfolio</span>
                </div>
              </div>
              <button 
                onClick={() => updateExpanded(false)}
                className="p-2.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/10 text-gray-300 hover:text-white transition-all duration-300 group"
                aria-label="Close Menu"
              >
                <X size={18} className="transition-transform duration-300 group-hover:rotate-90" />
              </button>
            </div>

            {/* Sidebar Links */}
            <div className="flex-1 overflow-y-auto py-8 px-6 flex flex-col gap-3.5 z-10 scrollbar-thin scrollbar-thumb-white/10">
              <MobileNavItem index="01" to="/#top" icon={<Home size={18} />} text={t('nav.home')} onClick={() => updateExpanded(false)} delay={0.05} />
              <MobileNavItem index="02" to="/about#top" icon={<User size={18} />} text={t('nav.about')} onClick={() => updateExpanded(false)} delay={0.1} />
              <MobileNavItem index="03" to="/projects#top" icon={<LayoutGrid size={18} />} text={t('nav.projects')} onClick={() => updateExpanded(false)} delay={0.15} />
              <MobileNavItem index="04" to="/experience#top" icon={<Briefcase size={18} />} text="Experience" onClick={() => updateExpanded(false)} delay={0.2} />
              <MobileNavItem index="05" to="/testimonials#top" icon={<MessageSquareQuote size={18} />} text="Testimonials" onClick={() => updateExpanded(false)} delay={0.25} />
              <MobileNavItem index="06" to="/resume#top" icon={<FileText size={18} />} text={t('nav.resume')} onClick={() => updateExpanded(false)} delay={0.3} />
              <MobileNavItem index="07" to="/blog#top" icon={<Newspaper size={18} />} text={t('nav.blogs')} onClick={() => updateExpanded(false)} delay={0.35} />
            </div>

            {/* Sidebar Footer */}
            <div className="p-6 border-t border-white/5 bg-white/5 z-10 relative">
              <ChromeButton
                to="/contact#top" 
                onClick={() => updateExpanded(false)}
                className="w-full flex justify-center !py-3.5 !text-sm tracking-widest shadow-[0_0_20px_rgba(199,112,240,0.25)]"
              >
                {t('nav.contact')}
              </ChromeButton>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  </>
);
}

function NavItem({ to, icon, text }: { to: string; icon: ReactNode; text: string }) {
  return (
    <motion.div
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.95 }}
    >
      <HashLink
        smooth
        to={to}
        className="text-white hover:text-[#00e5ff] flex items-center gap-1 lg:gap-1.5 px-1.5 lg:px-2 xl:px-3 py-1.5 lg:py-2 rounded-full text-[10px] lg:text-[10.5px] xl:text-xs uppercase tracking-widest font-semibold transition-all duration-300 hover:bg-white/10 hover:shadow-[0_0_20px_rgba(0,229,255,0.1)] group whitespace-nowrap font-sans"
      >
        <span className="group-hover:rotate-12 transition-transform duration-300 scale-90 xl:scale-100">{icon}</span>
        {text}
      </HashLink>
    </motion.div>
  );
}

function MobileNavItem({ 
  to, 
  icon, 
  text, 
  onClick, 
  delay, 
  index 
}: { 
  to: string; 
  icon: ReactNode; 
  text: string; 
  onClick: () => void; 
  delay: number;
  index: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 25 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 15 }}
      whileTap={{ scale: 0.98 }}
      transition={{ delay, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
    >
      <HashLink
        smooth
        to={to}
        onClick={onClick}
        className="group relative flex items-center justify-between w-full p-3.5 rounded-2xl bg-white/[0.02] hover:bg-gradient-to-r hover:from-white/[0.06] hover:to-transparent border border-white/5 hover:border-white/10 transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.1)] hover:shadow-[0_8px_30px_rgba(0,229,255,0.05)]"
      >
        <div className="flex items-center gap-4">
          <span className="font-mono text-xs font-semibold tracking-wider text-[#00e5ff]/50 group-hover:text-[#00e5ff] transition-colors duration-300">
            {index}
          </span>
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 border border-white/5 text-[#c770f0] group-hover:bg-[#00e5ff]/10 group-hover:text-[#00e5ff] group-hover:border-[#00e5ff]/30 transition-all duration-300 shadow-inner">
            {icon}
          </div>
          <span className="text-base font-semibold tracking-wide text-white/90 group-hover:text-white group-hover:translate-x-1 transition-all duration-300">
            {text}
          </span>
        </div>
        <div className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300 text-[#00e5ff]">
          <svg className="w-5 h-5 stroke-[2.5]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </HashLink>
    </motion.div>
  );
}
