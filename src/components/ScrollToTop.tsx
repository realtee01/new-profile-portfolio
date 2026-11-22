import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { ArrowUp } from "lucide-react";

export default function ScrollToTop() {
  const { pathname } = useLocation();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          id="scroll-to-top-btn"
          onClick={scrollToTop}
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.2 }}
          className="fixed bottom-8 right-8 z-[9999] flex h-11 w-11 items-center justify-center rounded-full bg-white text-[#141413] shadow-[0_8px_24px_-8px_rgba(20,20,19,0.2)] border border-[#E5E2DC] hover:bg-[#141413] hover:text-[#F8F7F4] hover:border-[#141413] cursor-pointer transition-colors duration-200 group"
          aria-label="Scroll to top"
        >
          <ArrowUp className="h-4 w-4 stroke-[2] transition-transform duration-200 group-hover:-translate-y-0.5" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}

