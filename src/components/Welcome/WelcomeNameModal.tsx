import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useTheme } from "../../context/ThemeContext";
import { SparkleMark } from "../ui/EditorialPrimitives";

export default function WelcomeNameModal() {
  const {
    showWelcomeModal,
    visitorName,
    saveVisitorName,
    skipWelcome,
    reduceMotion,
  } = useTheme();

  const [inputValue, setInputValue] = useState(visitorName);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (showWelcomeModal) {
      setInputValue(visitorName);
      document.body.style.overflow = "hidden";
      const timer = window.setTimeout(() => {
        inputRef.current?.focus();
      }, 120);
      return () => {
        window.clearTimeout(timer);
        document.body.style.overflow = "";
      };
    }
    return undefined;
  }, [showWelcomeModal, visitorName]);

  useEffect(() => {
    if (!showWelcomeModal) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") skipWelcome();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [showWelcomeModal, skipWelcome]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    saveVisitorName(inputValue);
  };

  return (
    <AnimatePresence>
      {showWelcomeModal && (
        <div
          className="fixed inset-0 z-[140] flex items-center justify-center p-5"
          role="dialog"
          aria-modal="true"
          aria-labelledby="welcome-prompt-title"
        >
          {/* Blurred Soft Dimmed Backdrop matching Reference 2 */}
          <motion.div
            initial={reduceMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={reduceMotion ? undefined : { opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 bg-[#1a131b]/35 backdrop-blur-md"
          />

          {/* Tactile Paper Welcome Card */}
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, scale: 0.95, y: 14 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={reduceMotion ? undefined : { opacity: 0, scale: 0.96, y: 10 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10 w-full max-w-[430px] rounded-[1.85rem] bg-[var(--surface-card)] border border-white/90 shadow-[0_26px_60px_-18px_rgba(24,19,26,0.34)] px-7 py-8 sm:px-9 sm:py-9"
          >
            {/* Kicker */}
            <div className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-[0.16em] text-[var(--ink)] mb-4">
              <SparkleMark className="w-3.5 h-3.5 text-[var(--accent)]" />
              <span>Quick One</span>
            </div>

            {/* Bold Editorial Prompt */}
            <h2
              id="welcome-prompt-title"
              className="font-editorial font-black text-[28px] sm:text-[32px] leading-[1.08] tracking-[-0.025em] text-[var(--ink)] mb-3 text-balance"
            >
              What should Tobi call you?
            </h2>

            <p className="text-sm text-[var(--ink-muted)] leading-relaxed mb-6">
              Just your first name. It makes the site a little more yours (and a
              little less awkward).
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                ref={inputRef}
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="First name"
                maxLength={32}
                autoComplete="given-name"
                aria-label="Your first name"
                className="w-full px-4 py-3.5 rounded-xl bg-transparent border border-[var(--border-strong)]/60 focus:border-[var(--ink)] focus:outline-none text-[15px] text-[var(--ink)] placeholder:text-[var(--ink-soft)] transition-colors"
              />

              <div className="grid grid-cols-2 gap-3 pt-1">
                <button
                  type="button"
                  onClick={skipWelcome}
                  className="py-3 px-5 rounded-full border border-[var(--border-strong)] bg-transparent text-[var(--ink)] text-sm font-bold hover:bg-[var(--ink)]/5 transition-colors cursor-pointer whitespace-nowrap"
                >
                  Skip
                </button>
                <button
                  type="submit"
                  className="py-3 px-5 rounded-full bg-[var(--ink)] text-white text-sm font-bold hover:opacity-90 transition-opacity cursor-pointer whitespace-nowrap"
                >
                  Continue
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
