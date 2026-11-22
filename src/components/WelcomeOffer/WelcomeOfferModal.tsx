import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useNavigate } from "react-router-dom";
import { X, ArrowRight } from "lucide-react";
import { TOBI_AVATAR_SVG } from "../../constants/avatar";

export default function WelcomeOfferModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 10000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsOpen(false);
        setHasInteracted(true);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  const handleClose = () => {
    setIsOpen(false);
    setHasInteracted(true);
  };

  const handleViewWork = () => {
    setIsOpen(false);
    setHasInteracted(true);
    navigate("/projects");
  };

  const handleClaimOffer = () => {
    setIsOpen(false);
    setHasInteracted(true);
    const message = encodeURIComponent(
      "Hi Tobi! I'm visiting your portfolio and I'd love to chat about a frontend / website project with your 20% welcome offer."
    );
    window.open(`https://wa.me/2347032533869?text=${message}`, "_blank", "noopener,noreferrer");
  };

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <div
            id="welcome-flash-offer-modal"
            className="fixed inset-0 z-[105] flex items-center justify-center p-4 sm:p-6"
            role="dialog"
            aria-modal="true"
            aria-labelledby="flash-offer-title"
          >
            {/* Backdrop */}
            <motion.div
              id="flash-offer-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={handleClose}
              className="fixed inset-0 bg-[#141413]/50 backdrop-blur-xs cursor-pointer"
            />

            {/* Simple Editorial Card matching website aesthetics */}
            <motion.div
              id="flash-offer-card"
              initial={{ opacity: 0, scale: 0.96, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 10 }}
              transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-md bg-[#FFFFFF] rounded-2xl border border-[#E5E2DC] shadow-2xl overflow-hidden z-10 p-6 sm:p-8 text-[#141413]"
            >
              {/* Close Button */}
              <button
                id="close-flash-offer-btn"
                onClick={handleClose}
                aria-label="Close offer modal"
                className="absolute top-4 right-4 w-9 h-9 rounded-full border border-[#E5E2DC] bg-[#F8F7F4] text-[#575550] hover:text-[#141413] hover:border-[#141413] flex items-center justify-center transition-colors cursor-pointer"
              >
                <X size={16} />
              </button>

              {/* Friendly Author Profile with Glasses Cartoon SVG aligned extreme left */}
              <div className="w-full flex items-center justify-start gap-3 mb-5">
                <div className="w-12 h-12 rounded-full border border-[#E5E2DC] bg-[#F8F7F4] overflow-hidden shrink-0">
                  <img
                    src={TOBI_AVATAR_SVG}
                    alt="Tobi Akala"
                    width={48}
                    height={48}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="text-left">
                  <div className="text-sm font-semibold text-[#141413]">Tobi Akala</div>
                  <div className="text-xs text-[#575550]">
                    Ready to chat · 2 project spots open
                  </div>
                </div>
              </div>

              {/* Clean Unboxed Offer Line */}
              <div className="text-xs font-medium text-[#1D4ED8] mb-2">
                New Project Welcome Offer · 20% Off
              </div>

              {/* Friendly, Clear Title */}
              <h2
                id="flash-offer-title"
                className="text-2xl font-serif font-semibold tracking-tight text-[#141413] mb-3"
              >
                Need a clean, fast frontend for your website or app?
              </h2>

              {/* Friendly, easy-to-understand explanation */}
              <p className="text-sm text-[#575550] leading-relaxed mb-6">
                Hi! I build fast, modern websites and React web apps that look sharp and make it
                easy for your visitors to reach you or book your services.
              </p>

              {/* Two Clean Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 mb-4">
                <button
                  id="claim-hvac-offer-btn"
                  onClick={handleClaimOffer}
                  className="flex-1 inline-flex items-center justify-center gap-1.5 bg-[#141413] hover:bg-[#1D4ED8] text-white font-medium py-2.5 px-5 rounded-full text-sm transition-colors cursor-pointer whitespace-nowrap"
                >
                  <span>Chat With Me (20% Off)</span>
                  <ArrowRight size={14} />
                </button>

                <button
                  id="view-work-direct-btn"
                  onClick={handleViewWork}
                  className="inline-flex items-center justify-center bg-[#F8F7F4] hover:bg-[#F1EFEA] text-[#141413] border border-[#E5E2DC] font-medium py-2.5 px-5 rounded-full text-sm transition-colors cursor-pointer whitespace-nowrap"
                >
                  <span>See My Work</span>
                </button>
              </div>

              {/* Friendly dismiss */}
              <div className="flex items-center justify-end text-xs text-[#86837C]">
                <button
                  id="dismiss-offer-btn"
                  onClick={handleClose}
                  className="hover:text-[#141413] transition-colors cursor-pointer"
                >
                  Just looking around, thanks!
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Discreet Floating Trigger to re-open anytime */}
      {!isOpen && hasInteracted && (
        <motion.button
          id="reopen-flash-offer-btn"
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{ y: -2 }}
          onClick={() => setIsOpen(true)}
          className="fixed bottom-5 left-5 z-40 flex items-center gap-2.5 pl-1.5 pr-4 py-1.5 rounded-full bg-white text-[#141413] shadow-lg border border-[#E5E2DC] hover:border-[#141413] text-xs font-medium transition-colors cursor-pointer"
          title="Reopen Welcome Offer"
        >
          <img
            src={TOBI_AVATAR_SVG}
            alt="Tobi avatar"
            width={24}
            height={24}
            className="w-6 h-6 rounded-full border border-[#E5E2DC] bg-[#F8F7F4] object-cover"
            referrerPolicy="no-referrer"
          />
          <span>20% Welcome Offer</span>
        </motion.button>
      )}
    </>
  );
}
