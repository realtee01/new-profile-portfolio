import { useState, useEffect, ReactNode } from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { Home, User, Briefcase, MessageSquareQuote, FileText, LayoutGrid, Newspaper, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function Navbar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", scrollHandler);
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
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        navColour ? "bg-[#1b1a2ea9] backdrop-blur-md shadow-lg py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <HashLink smooth to="/#top" className="text-2xl font-bold text-gradient px-2" onClick={() => updateExpanded(false)}>
              TA.
            </HashLink>
          </motion.div>
          
          {/* Mobile menu button */}
          <div className="lg:hidden z-[60]">
            <button
              onClick={() => updateExpanded(!expand)}
              className="text-white hover:text-[#00e5ff] focus:outline-none transition-colors"
            >
              <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {expand ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {/* Desktop menu */}
          <div className="hidden lg:flex items-center lg:space-x-1 xl:space-x-4">
            <NavItem to="/#top" icon={<Home size={18} />} text="Home" />
            <NavItem to="/about#top" icon={<User size={18} />} text="About" />
            <NavItem to="/projects#top" icon={<LayoutGrid size={18} />} text="Projects" />
            <NavItem to="/experience#top" icon={<Briefcase size={18} />} text="Experience" />
            <NavItem to="/testimonials#top" icon={<MessageSquareQuote size={18} />} text="Testimonials" />
            <NavItem to="/resume#top" icon={<FileText size={18} />} text="Resume" />
            <NavItem to="/blog#top" icon={<Newspaper size={18} />} text="Blogs" />
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <HashLink 
                smooth
                to="/contact#top" 
                className="bg-[#c770f0] hover:bg-[#00e5ff] text-white font-bold py-2.5 px-4 xl:px-6 rounded-full transition-all duration-300 shadow-[0_0_15px_rgba(199,112,240,0.5)] hover:shadow-[0_0_20px_rgba(0,229,255,0.6)] lg:ml-2 xl:ml-4 text-sm xl:text-base whitespace-nowrap"
              >
                Contact Me
              </HashLink>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Premium Mobile Slide-out Menu */}
      <AnimatePresence>
        {expand && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-lg z-[55] lg:hidden"
              onClick={() => updateExpanded(false)}
            />
            
            {/* Sidebar */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 200, damping: 25 }}
              className="fixed top-0 right-0 h-screen w-4/5 max-w-sm bg-[#0f0a1a] border-l border-white/5 shadow-[-10px_0_30px_rgba(0,0,0,0.5)] z-[60] flex flex-col pt-24 px-6 pb-12 overflow-y-auto"
            >
              <button 
                onClick={() => updateExpanded(false)}
                className="absolute top-6 right-6 p-2 rounded-full bg-white/5 hover:bg-[#c770f0]/20 text-gray-300 hover:text-[#00e5ff] transition-all duration-300 border border-white/10 hover:border-[#00e5ff]/50 hover:shadow-[0_0_15px_rgba(0,229,255,0.3)] z-50 hover:rotate-90"
                aria-label="Close Menu"
              >
                <X size={24} />
              </button>

              <div className="flex flex-col space-y-2 mt-4 flex-1">
                <MobileNavItem to="/#top" icon={<Home size={22} />} text="Home" onClick={() => updateExpanded(false)} delay={0.1} />
                <MobileNavItem to="/about#top" icon={<User size={22} />} text="About" onClick={() => updateExpanded(false)} delay={0.15} />
                <MobileNavItem to="/projects#top" icon={<LayoutGrid size={22} />} text="Projects" onClick={() => updateExpanded(false)} delay={0.2} />
                <MobileNavItem to="/experience#top" icon={<Briefcase size={22} />} text="Experience" onClick={() => updateExpanded(false)} delay={0.25} />
                <MobileNavItem to="/testimonials#top" icon={<MessageSquareQuote size={22} />} text="Testimonials" onClick={() => updateExpanded(false)} delay={0.3} />
                <MobileNavItem to="/resume#top" icon={<FileText size={22} />} text="Resume" onClick={() => updateExpanded(false)} delay={0.35} />
                <MobileNavItem to="/blog#top" icon={<Newspaper size={22} />} text="Blogs" onClick={() => updateExpanded(false)} delay={0.4} />
              </div>

              <div className="mt-8 flex justify-center">
                <HashLink 
                  smooth
                  to="/contact#top" 
                  onClick={() => updateExpanded(false)}
                  className="bg-gradient-to-r from-[#c770f0] to-[#00e5ff] text-white font-bold py-3.5 px-12 rounded-full transition-all duration-300 shadow-[0_0_20px_rgba(199,112,240,0.3)] hover:shadow-[0_0_25px_rgba(0,229,255,0.5)] w-full text-center text-lg"
                >
                  Contact Me
                </HashLink>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
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
        className="text-white hover:text-[#00e5ff] flex items-center gap-1.5 px-2 xl:px-3 py-2 rounded-full text-sm xl:text-base font-medium transition-all duration-300 hover:bg-white/10 hover:shadow-[0_0_20px_rgba(0,229,255,0.1)] group whitespace-nowrap"
      >
        <span className="group-hover:rotate-12 transition-transform duration-300 scale-90 xl:scale-100">{icon}</span>
        {text}
      </HashLink>
    </motion.div>
  );
}

function MobileNavItem({ to, icon, text, onClick, delay }: { to: string; icon: ReactNode; text: string; onClick: () => void; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      whileTap={{ scale: 0.98 }}
      transition={{ delay, duration: 0.4 }}
    >
      <HashLink
        smooth
        to={to}
        onClick={onClick}
        className="text-gray-200 hover:text-white flex items-center gap-4 px-6 py-4 rounded-2xl text-xl font-medium transition-all duration-300 hover:bg-white/5 group border border-transparent hover:border-white/5 w-full"
      >
        <span className="text-[#c770f0] group-hover:text-[#00e5ff] transition-colors">{icon}</span>
        {text}
      </HashLink>
    </motion.div>
  );
}
