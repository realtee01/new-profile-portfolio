import { useState, useEffect, ReactNode } from "react";
import { Link } from "react-router-dom";
import { AiOutlineHome, AiOutlineFundProjectionScreen, AiOutlineUser } from "react-icons/ai";
import { CgFileDocument } from "react-icons/cg";
import { ImBlog } from "react-icons/im";

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

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        navColour ? "bg-[#1b1a2ea9] backdrop-blur-md shadow-lg py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold text-gradient" onClick={() => updateExpanded(false)}>
            TA.
          </Link>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => updateExpanded(!expand)}
              className="text-white hover:text-[#00e5ff] focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {expand ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-8">
            <NavItem to="/" icon={<span className="mb-1 flex items-center"><AiOutlineHome /></span>} text="Home" />
            <NavItem to="/about" icon={<span className="mb-1 flex items-center"><AiOutlineUser /></span>} text="About" />
            <NavItem to="/projects" icon={<span className="mb-1 flex items-center"><AiOutlineFundProjectionScreen /></span>} text="Projects" />
            <NavItem to="/resume" icon={<span className="mb-1 flex items-center"><CgFileDocument /></span>} text="Resume" />
            <NavItem to="/blog" icon={<span className="mb-1 flex items-center"><ImBlog /></span>} text="Blogs" />
            <Link 
              to="/contact" 
              className="bg-[#c770f0] hover:bg-[#00e5ff] text-white font-bold py-2 px-6 rounded-full transition-all duration-300 shadow-[0_0_15px_rgba(199,112,240,0.5)] hover:shadow-[0_0_20px_rgba(0,229,255,0.6)]"
            >
              Contact Me
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {expand && (
        <div className="md:hidden bg-[#1b1a2ea9] backdrop-blur-md absolute w-full">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 flex flex-col items-center">
            <MobileNavItem to="/" icon={<AiOutlineHome />} text="Home" onClick={() => updateExpanded(false)} />
            <MobileNavItem to="/about" icon={<AiOutlineUser />} text="About" onClick={() => updateExpanded(false)} />
            <MobileNavItem to="/projects" icon={<AiOutlineFundProjectionScreen />} text="Projects" onClick={() => updateExpanded(false)} />
            <MobileNavItem to="/resume" icon={<CgFileDocument />} text="Resume" onClick={() => updateExpanded(false)} />
            <MobileNavItem to="/blog" icon={<ImBlog />} text="Blogs" onClick={() => updateExpanded(false)} />
            <Link 
              to="/contact" 
              onClick={() => updateExpanded(false)}
              className="mt-4 bg-[#c770f0] hover:bg-[#00e5ff] text-white font-bold py-2 px-8 rounded-full transition-all duration-300 shadow-[0_0_15px_rgba(199,112,240,0.5)] hover:shadow-[0_0_20px_rgba(0,229,255,0.6)]"
            >
              Contact Me
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}

function NavItem({ to, icon, text }: { to: string; icon: ReactNode; text: string }) {
  return (
    <Link
      to={to}
      className="text-white hover:text-[#00e5ff] flex items-center gap-1.5 px-4 py-2 rounded-full text-lg font-medium transition-all duration-300 hover:bg-white/10 hover:shadow-[0_0_15px_rgba(255,255,255,0.05)]"
    >
      {icon} {text}
    </Link>
  );
}

function MobileNavItem({ to, icon, text, onClick }: { to: string; icon: ReactNode; text: string; onClick: () => void }) {
  return (
    <Link
      to={to}
      onClick={onClick}
      className="text-white hover:text-[#00e5ff] flex items-center gap-2 px-6 py-3 rounded-full text-base font-medium transition-all duration-300 hover:bg-white/10 w-full justify-center"
    >
      {icon} {text}
    </Link>
  );
}
