import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useNavigate } from "react-router-dom";
import { X, Wind, ArrowRight, Zap } from "lucide-react";
import { TOBI_AVATAR_SVG } from "../../constants/avatar";

export default function WelcomeOfferModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Show after a gentle 1.2s delay on first visit or refresh
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  // Body scroll lock & ESC key listener
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
      "Hi Tobi! I'm visiting your website and I'd love to chat about building a website for my business with your 20% welcome offer."
    );
    window.open(`https://wa.me/2347032533869?text=${message}`, "_blank", "noopener,noreferrer");
  };

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <div
            id="welcome-flash-offer-modal"
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
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
              className="fixed inset-0 bg-black/75 backdrop-blur-md cursor-pointer"
            />

            {/* Simple, sleek card matching website dark & cyan/purple aesthetic */}
            <motion.div
              id="flash-offer-card"
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              transition={{ type: "spring", stiffness: 350, damping: 30 }}
              className="relative w-full max-w-md bg-[#130f1e]/95 rounded-2xl border border-white/15 shadow-[0_20px_50px_rgba(0,0,0,0.8)] backdrop-blur-xl overflow-hidden z-10 p-6 sm:p-7 text-white text-center"
            >
              {/* Subtle top gradient glow line matching site palette */}
              <div
                id="modal-accent-line"
                className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#c770f0] via-[#00e5ff] to-[#c770f0]"
              />

              {/* Close Button */}
              <button
                id="close-flash-offer-btn"
                onClick={handleClose}
                aria-label="Close offer modal"
                className="absolute top-3.5 right-3.5 p-2 rounded-full text-gray-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
              >
                <X size={17} />
              </button>

              {/* Friendly Author Profile with SVG Avatar (Glasses on) */}
              <div className="w-full flex items-center justify-start gap-3 mb-4">
                <div className="relative">
                  <div className="w-12 h-12 rounded-full p-[2px] bg-gradient-to-tr from-[#c770f0] to-[#00e5ff] shadow-[0_0_15px_rgba(0,229,255,0.35)]">
                    <img
                      src={TOBI_AVATAR_SVG}
                      alt="Tobiloba Akala - Web Developer"
                      width={48}
                      height={48}
                      className="w-full h-full rounded-full bg-[#1b162b] object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <span
                    className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 rounded-full bg-emerald-400 border-2 border-[#130f1e]"
                    title="Online now"
                  />
                </div>
                <div className="text-left">
                  <div className="text-sm font-semibold text-white">Tobi Akala</div>
                  <div className="text-[11px] text-gray-400 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span>Online • Ready to chat</span>
                  </div>
                </div>
              </div>

              {/* Friendly Pill Tag */}
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-cyan-400/30 text-cyan-300 text-xs font-medium mb-3.5">
                <Wind size={13} className="text-[#00e5ff]" />
                <span>HVAC & Business Special</span>
                <span className="text-amber-400 font-bold ml-1 inline-flex items-center gap-0.5">
                  <Zap size={11} fill="currentColor" /> 20% OFF
                </span>
              </div>

              {/* Friendly, Clear Title */}
              <h2
                id="flash-offer-title"
                className="text-xl sm:text-2xl font-bold tracking-tight text-white mb-2.5 font-serif"
              >
                Need a website that brings in{" "}
                <span className="text-gradient">more clients?</span>
              </h2>

              {/* Friendly, easy-to-understand explanation */}
              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed mb-6 max-w-sm mx-auto">
                Hi! I build simple, super-fast websites for HVAC contractors, home services, and businesses. 
                I make it easy for your visitors to call, message you on WhatsApp, and book your services without hassle.
              </p>

              {/* Two Simple Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center gap-2.5 mb-3.5">
                <button
                  id="claim-hvac-offer-btn"
                  onClick={handleClaimOffer}
                  className="w-full sm:flex-1 inline-flex items-center justify-center gap-1.5 bg-gradient-to-r from-[#c770f0] to-[#00e5ff] text-[#0f0c1b] font-bold py-2.5 px-4 rounded-xl text-sm transition-all hover:opacity-95 shadow-[0_0_20px_rgba(0,229,255,0.25)] active:scale-[0.98] cursor-pointer"
                >
                  <span>Chat With Me (Save 20%)</span>
                  <ArrowRight size={14} />
                </button>

                <button
                  id="view-work-direct-btn"
                  onClick={handleViewWork}
                  className="w-full sm:w-auto inline-flex items-center justify-center bg-white/5 hover:bg-white/10 text-white border border-white/15 font-medium py-2.5 px-4 rounded-xl text-sm transition-all active:scale-[0.98] cursor-pointer"
                >
                  <span>See My Work</span>
                </button>
              </div>

              {/* Spots indicator & friendly dismiss */}
              <div className="flex items-center justify-between text-[11px] text-gray-400 pt-1">
                <span className="text-emerald-400/90 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Available to start • 2 spots left
                </span>
                <button
                  id="dismiss-offer-btn"
                  onClick={handleClose}
                  className="hover:text-gray-200 transition-colors cursor-pointer"
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
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsOpen(true)}
          className="fixed bottom-24 left-4 z-40 flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#151022]/90 text-gray-200 shadow-xl border border-white/15 text-xs font-medium backdrop-blur-md hover:text-white hover:border-cyan-400/40 transition-all group cursor-pointer"
          title="Reopen Welcome Flash Offer"
        >
          <img
            src={TOBI_AVATAR_SVG}
            alt="Tobi avatar"
            width={20}
            height={20}
            className="w-5 h-5 rounded-full border border-cyan-400/50 bg-[#1b162b] object-cover"
            referrerPolicy="no-referrer"
          />
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00e5ff] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00e5ff]"></span>
          </span>
          <Wind size={12} className="text-[#00e5ff]" />
          <span>Welcome Offer (20% Off)</span>
        </motion.button>
      )}
    </>
  );
}
