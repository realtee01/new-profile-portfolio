import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, ArrowRight, Check, Calendar, MessageCircle } from "lucide-react";
import { useTheme } from "../../context/ThemeContext";
import { SparkleMark } from "../ui/EditorialPrimitives";

const PROJECT_TYPES = [
  "Web App / MVP",
  "Business Website",
  "Redesign & Speed",
  "Frontend Role / Contract",
];

const CALL_SLOTS = [
  "This week · Morning (WAT)",
  "This week · Afternoon (WAT)",
  "Next week · Flexible",
  "Async email brief first",
];

export default function BookingModal() {
  const { isBookingOpen, closeBooking, bookingTopic } = useTheme();
  const [projectType, setProjectType] = useState(bookingTopic || PROJECT_TYPES[0]);
  const [slot, setSlot] = useState(CALL_SLOTS[0]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [notes, setNotes] = useState("");
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (bookingTopic) setProjectType(bookingTopic);
  }, [bookingTopic]);

  useEffect(() => {
    if (!isBookingOpen) return;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeBooking();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [isBookingOpen, closeBooking]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !/\S+@\S+\.\S+/.test(email)) {
      setError("Please enter your name and a valid email address.");
      return;
    }
    setError("");
    setSubmitting(true);

    try {
      await fetch("https://formspree.io/f/xaqlbalq", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          projectType,
          preferredSlot: slot,
          message: notes || `Inquiry about ${projectType} (${slot})`,
        }),
      });
      setSubmitted(true);
    } catch {
      setSubmitted(true);
    } finally {
      setSubmitting(false);
    }
  };

  const resetAndClose = () => {
    setSubmitted(false);
    setName("");
    setEmail("");
    setNotes("");
    setError("");
    closeBooking();
  };

  return (
    <AnimatePresence>
      {isBookingOpen && (
        <div
          className="fixed inset-0 z-[120] flex items-center justify-center p-4 sm:p-6"
          role="dialog"
          aria-modal="true"
          aria-labelledby="booking-modal-title"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={resetAndClose}
            className="fixed inset-0 bg-[#18131A]/60 backdrop-blur-xs cursor-pointer"
          />

          <motion.div
            initial={{ opacity: 0, y: 18, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 14, scale: 0.97 }}
            transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10 w-full max-w-xl bg-[var(--surface-card)] border border-[var(--border-strong)] rounded-3xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col"
          >
            {/* Header */}
            <div className="px-6 sm:px-8 pt-6 pb-5 border-b border-dashed border-[var(--border-hairline)] flex items-start justify-between gap-4 bg-[var(--bg-paper)]/60">
              <div>
                <div className="flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-[0.16em] text-[var(--accent)] mb-1.5">
                  <SparkleMark className="w-3 h-3" />
                  <span>Book a Call or Send a Brief</span>
                </div>
                <h2
                  id="booking-modal-title"
                  className="font-editorial text-2xl sm:text-3xl font-black tracking-tight text-[var(--ink)]"
                >
                  Let&apos;s build something sharp.
                </h2>
              </div>
              <button
                type="button"
                onClick={resetAndClose}
                aria-label="Close booking drawer"
                className="w-9 h-9 rounded-full border border-[var(--border-hairline)] bg-white/70 hover:border-[var(--ink)] text-[var(--ink)] flex items-center justify-center transition-colors cursor-pointer shrink-0"
              >
                <X size={16} />
              </button>
            </div>

            {/* Body */}
            <div className="px-6 sm:px-8 py-6 overflow-y-auto">
              {submitted ? (
                <div className="py-8 text-center">
                  <div className="w-14 h-14 rounded-full bg-[var(--bg-band)] text-[var(--ink)] mx-auto flex items-center justify-center mb-5 border border-[var(--border-strong)]">
                    <Check size={24} strokeWidth={2.4} />
                  </div>
                  <h3 className="font-editorial text-3xl font-black text-[var(--ink)] mb-2">
                    Got it, {name || "friend"}.
                  </h3>
                  <p className="text-sm text-[var(--ink-muted)] max-w-sm mx-auto leading-relaxed mb-7">
                    Your brief is in my inbox. I reply personally within 24 hours with next steps and a calendar invite for{" "}
                    <span className="font-semibold text-[var(--ink)]">{slot}</span>.
                  </p>
                  <button
                    type="button"
                    onClick={resetAndClose}
                    className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full bg-[var(--ink)] text-white text-sm font-semibold hover:opacity-90 transition-opacity cursor-pointer"
                  >
                    Back to portfolio
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Project Type */}
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-[0.14em] text-[var(--ink-muted)] mb-2">
                      What are we building?
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {PROJECT_TYPES.map((type) => {
                        const active = projectType === type;
                        return (
                          <button
                            key={type}
                            type="button"
                            onClick={() => setProjectType(type)}
                            className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-colors cursor-pointer whitespace-nowrap ${
                              active
                                ? "bg-[var(--ink)] text-white"
                                : "bg-white/75 border border-[var(--border-hairline)] text-[var(--ink)] hover:border-[var(--ink)]"
                            }`}
                          >
                            {type}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Call Slot */}
                  <div>
                    <label className="flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-[0.14em] text-[var(--ink-muted)] mb-2">
                      <Calendar size={12} />
                      <span>Preferred Intro Call Slot</span>
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {CALL_SLOTS.map((option) => {
                        const active = slot === option;
                        return (
                          <button
                            key={option}
                            type="button"
                            onClick={() => setSlot(option)}
                            className={`text-left px-3.5 py-2 rounded-xl text-xs font-medium border transition-colors cursor-pointer ${
                              active
                                ? "bg-[var(--bg-band)]/75 border-[var(--ink)] text-[var(--ink)] font-semibold"
                                : "bg-white/60 border-[var(--border-hairline)] text-[var(--ink-muted)] hover:border-[var(--ink)]/50"
                            }`}
                          >
                            {option}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Contact Inputs */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div>
                      <label htmlFor="booking-name" className="block text-xs font-semibold text-[var(--ink)] mb-1">
                        Your Name
                      </label>
                      <input
                        id="booking-name"
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Adaeze Okafor"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-white/85 border border-[var(--border-hairline)] focus:border-[var(--ink)] focus:outline-none text-sm text-[var(--ink)] placeholder:text-[var(--ink-soft)]"
                      />
                    </div>
                    <div>
                      <label htmlFor="booking-email" className="block text-xs font-semibold text-[var(--ink)] mb-1">
                        Email Address
                      </label>
                      <input
                        id="booking-email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="you@company.com"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-white/85 border border-[var(--border-hairline)] focus:border-[var(--ink)] focus:outline-none text-sm text-[var(--ink)] placeholder:text-[var(--ink-soft)]"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="booking-notes" className="block text-xs font-semibold text-[var(--ink)] mb-1">
                      Quick Brief (optional)
                    </label>
                    <textarea
                      id="booking-notes"
                      rows={3}
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      placeholder="Share your goals, timeline, or current site URL..."
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white/85 border border-[var(--border-hairline)] focus:border-[var(--ink)] focus:outline-none text-sm text-[var(--ink)] placeholder:text-[var(--ink-soft)] resize-none"
                    />
                  </div>

                  {error && (
                    <p className="text-xs font-semibold text-rose-700">{error}</p>
                  )}

                  <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 pt-1">
                    <button
                      type="submit"
                      disabled={submitting}
                      className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[var(--ink)] text-white text-sm font-semibold hover:opacity-90 transition-opacity cursor-pointer disabled:opacity-60 whitespace-nowrap"
                    >
                      <span>{submitting ? "Sending brief..." : "Send Brief & Request Call"}</span>
                      <ArrowRight size={15} />
                    </button>

                    <a
                      href="https://wa.me/2347032533869"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-1.5 text-xs font-semibold text-[var(--ink-muted)] hover:text-[var(--ink)] transition-colors whitespace-nowrap"
                    >
                      <MessageCircle size={14} />
                      <span>Or chat on WhatsApp</span>
                    </a>
                  </div>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
