import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { ArrowUp } from "lucide-react";

export default function ScrollToTop() {
  const { pathname } = useLocation();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    const toggleVisibility = () => {
      const next = window.scrollY > 300;
      setIsVisible((prev) => (prev === next ? prev : next));
    };

    window.addEventListener("scroll", toggleVisibility, { passive: true });
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      id="scroll-to-top-btn"
      type="button"
      onClick={scrollToTop}
      tabIndex={isVisible ? 0 : -1}
      aria-hidden={!isVisible}
      className={`fixed bottom-8 right-8 z-[9999] flex h-11 w-11 items-center justify-center rounded-full bg-white text-[#141413] shadow-[0_8px_24px_-8px_rgba(20,20,19,0.2)] border border-[#E5E2DC] hover:bg-[#141413] hover:text-[#F8F7F4] hover:border-[#141413] hover:scale-105 active:scale-95 cursor-pointer transition-all duration-200 group ${
        isVisible
          ? "opacity-100 translate-y-0 scale-100 pointer-events-auto"
          : "opacity-0 translate-y-5 scale-90 pointer-events-none"
      }`}
      aria-label="Scroll to top"
    >
      <ArrowUp className="h-4 w-4 stroke-[2] transition-transform duration-200 group-hover:-translate-y-0.5" />
    </button>
  );
}

