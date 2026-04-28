import { useState, useEffect, ReactNode } from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { AiOutlineHome, AiOutlineFundProjectionScreen, AiOutlineUser } from "react-icons/ai";
import { CgFileDocument } from "react-icons/cg";
import { ImBlog } from "react-icons/im";
import { Briefcase, MessageSquareQuote } from "lucide-react";
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
          <HashLink smooth to="/#top" className="text-2xl font-bold text-gradient" onClick={() => updateExpanded(false)}>
            TA.
          </HashLink>
          
          {/* Mobile menu button */}
          <div className="xl:hidden z-[60]">
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
          <div className="hidden xl:flex items-center space-x-6">
            <NavItem to="/#top" icon={<span className="mb-1 flex items-center"><AiOutlineHome /></span>} text="Home" />
            <NavItem to="/about#top" icon={<span className="mb-1 flex items-center"><AiOutlineUser /></span>} text="About" />
            <NavItem to="/projects#top" icon={<span className="mb-1 flex items-center"><AiOutlineFundProjectionScreen /></span>} text="Projects" />
            <NavItem to="/experience#top" icon={<span className="mb-1 flex items-center"><Briefcase size={18} /></span>} text="Experience" />
            <NavItem to="/testimonials#top" icon={<span className="mb-1 flex items-center"><MessageSquareQuote size={18} /></span>} text="Testimonials" />
            <NavItem to="/resume#top" icon={<span className="mb-1 flex items-center"><CgFileDocument /></span>} text="Resume" />
            <NavItem to="/blog#top" icon={<span className="mb-1 flex items-center"><ImBlog /></span>} text="Blogs" />
            <HashLink 
              smooth
              to="/contact#top" 
              className="bg-[#c770f0] hover:bg-[#00e5ff] text-white font-bold py-2.5 px-6 xl:px-8 rounded-full transition-all duration-300 shadow-[0_0_15px_rgba(199,112,240,0.5)] hover:shadow-[0_0_20px_rgba(0,229,255,0.6)] ml-4"
            >
              Contact Me
            </HashLink>
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
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[55] xl:hidden"
              onClick={() => updateExpanded(false)}
            />
            
            {/* Sidebar */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 200, damping: 25 }}
              className="fixed top-0 right-0 h-screen w-4/5 max-w-sm bg-[#0f0a1ae6] backdrop-blur-xl border-l border-white/5 shadow-[-10px_0_30px_rgba(0,0,0,0.5)] z-[60] flex flex-col pt-24 px-6 pb-12 overflow-y-auto"
            >
              <div className="flex flex-col space-y-2 mt-4 flex-1">
                <MobileNavItem to="/#top" icon={<AiOutlineHome size={22} />} text="Home" onClick={() => updateExpanded(false)} delay={0.1} />
                <MobileNavItem to="/about#top" icon={<AiOutlineUser size={22} />} text="About" onClick={() => updateExpanded(false)} delay={0.15} />
                <MobileNavItem to="/projects#top" icon={<AiOutlineFundProjectionScreen size={22} />} text="Projects" onClick={() => updateExpanded(false)} delay={0.2} />
                <MobileNavItem to="/experience#top" icon={<Briefcase size={22} />} text="Experience" onClick={() => updateExpanded(false)} delay={0.25} />
                <MobileNavItem to="/testimonials#top" icon={<MessageSquareQuote size={22} />} text="Testimonials" onClick={() => updateExpanded(false)} delay={0.3} />
                <MobileNavItem to="/resume#top" icon={<CgFileDocument size={22} />} text="Resume" onClick={() => updateExpanded(false)} delay={0.35} />
                <MobileNavItem to="/blog#top" icon={<ImBlog size={22} />} text="Blogs" onClick={() => updateExpanded(false)} delay={0.4} />
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
    <HashLink
      smooth
      to={to}
      className="text-white hover:text-[#00e5ff] flex items-center gap-1.5 px-3 py-2 rounded-full text-base lg:text-lg font-medium transition-all duration-300 hover:bg-white/10 hover:shadow-[0_0_15px_rgba(255,255,255,0.05)]"
    >
      {icon} {text}
    </HashLink>
  );
}

function MobileNavItem({ to, icon, text, onClick, delay }: { to: string; icon: ReactNode; text: string; onClick: () => void; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay, duration: 0.4 }}
    >
      <HashLink
        smooth
        to={to}
        onClick={onClick}
        className="text-gray-200 hover:text-white flex items-center gap-4 px-6 py-4 rounded-2xl text-xl font-medium transition-all duration-300 hover:bg-white/5 group border border-transparent hover:border-white/5"
      >
        <span className="text-[#c770f0] group-hover:text-[#00e5ff] transition-colors">{icon}</span>
        {text}
      </HashLink>
    </motion.div>
  );
}
