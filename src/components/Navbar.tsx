import { useState, useEffect } from "react";
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
          <div className="hidden md:flex space-x-8">
            <NavItem to="/" icon={<AiOutlineHome className="mb-1" />} text="Home" />
            <NavItem to="/about" icon={<AiOutlineUser className="mb-1" />} text="About" />
            <NavItem to="/projects" icon={<AiOutlineFundProjectionScreen className="mb-1" />} text="Projects" />
            <NavItem to="/resume" icon={<CgFileDocument className="mb-1" />} text="Resume" />
            <NavItem to="/blog" icon={<ImBlog className="mb-1" />} text="Blogs" />
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
          </div>
        </div>
      )}
    </nav>
  );
}

function NavItem({ to, icon, text }: { to: string; icon: React.ReactNode; text: string }) {
  return (
    <Link
      to={to}
      className="text-white hover:text-[#00e5ff] flex items-center gap-1 text-lg font-medium transition-colors relative group"
    >
      {icon} {text}
      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#00e5ff] transition-all group-hover:w-full"></span>
    </Link>
  );
}

function MobileNavItem({ to, icon, text, onClick }: { to: string; icon: React.ReactNode; text: string; onClick: () => void }) {
  return (
    <Link
      to={to}
      onClick={onClick}
      className="text-white hover:text-[#00e5ff] flex items-center gap-2 px-3 py-2 rounded-md text-base font-medium"
    >
      {icon} {text}
    </Link>
  );
}
