import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { Github, Linkedin, Twitter, Disc3, ExternalLink } from "lucide-react";
import { useTheme, PortfolioMood } from "../context/ThemeContext";
import { TALogo, SparkleMark, TOBI_AVATAR_URL } from "./ui/EditorialPrimitives";

const NAV_ITEMS = [
  { num: "01", label: "Home", to: "/", note: "start here" },
  { num: "02", label: "Work", to: "/projects", note: "the good stuff" },
  { num: "03", label: "About", to: "/about", note: "the backstory" },
  { num: "04", label: "Journal", to: "/blog", note: "his thoughts" },
];

const MOOD_OPTIONS: {
  id: PortfolioMood;
  title: string;
  subtitle: string;
  swatch: string;
}[] = [
  {
    id: "violet",
    title: "Main Character",
    subtitle: "violet, obviously",
    swatch: "#c770f0",
  },
  {
    id: "cyan",
    title: "Soft Launch",
    subtitle: "electric cyan",
    swatch: "#00b8d4",
  },
  {
    id: "mono",
    title: "HR Friendly =)",
    subtitle: "just the facts",
    swatch: "#18131a",
  },
];

const SPOTIFY_URL =
  "https://open.spotify.com/playlist/0Ymw2v0SbK6btauZEL9lRz?si=a1dfa08a37954282";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [vinylOpen, setVinylOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const containerRef = useRef<HTMLDivElement>(null);
  const { mood, setMood, reduceMotion, toggleReduceMotion } = useTheme();

  useEffect(() => {
    setMenuOpen(false);
    setVinylOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 18);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMenuOpen(false);
        setVinylOpen(false);
      }
    };
    const onClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setMenuOpen(false);
        setVinylOpen(false);
      }
    };
    window.addEventListener("keydown", onKeyDown);
    document.addEventListener("mousedown", onClickOutside);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("mousedown", onClickOutside);
    };
  }, []);

  return (
    <header
      ref={containerRef}
      className="fixed top-4 left-1/2 -translate-x-1/2 z-50 flex flex-col items-center w-auto max-w-[94vw]"
    >
      {/* Centered Floating Frosted Paper Pill */}
      <nav
        aria-label="Primary Navigation"
        className={`flex items-center gap-2 sm:gap-2.5 pl-2.5 pr-2 py-1.5 rounded-full border transition-all duration-300 ${
          scrolled || menuOpen
            ? "bg-[var(--surface-card)]/95 border-[var(--border-hairline)] shadow-[0_14px_34px_-10px_rgba(24,19,26,0.22)] backdrop-blur-md"
            : "bg-[var(--surface-card)]/85 border-white/80 shadow-[0_10px_28px_-10px_rgba(24,19,26,0.16)] backdrop-blur-md"
        }`}
      >
        {/* Zone 1: Brand Wordmark + Preserved TA Logo */}
        <Link
          to="/"
          className="group flex items-center gap-2.5 pl-0.5 pr-2.5 py-0.5 rounded-full transition-opacity whitespace-nowrap shrink-0"
          aria-label="Tobiloba Akala Home"
        >
          <TALogo className="w-9 h-9 shrink-0 rounded-full shadow-[0_4px_12px_rgba(24,19,26,0.22)] transition-transform duration-200 group-hover:scale-105" />
          <span className="font-editorial font-black italic text-[15px] sm:text-[17px] tracking-tight text-[var(--ink)] leading-none">
            Buildwithtobi
          </span>
          <SparkleMark className="w-3 h-3 text-[var(--accent)] -ml-1.5 -mt-2" />
        </Link>

        {/* Zone 2: Minimal Menu Toggle Pill */}
        <button
          type="button"
          onClick={() => {
            setMenuOpen((prev) => !prev);
            setVinylOpen(false);
          }}
          aria-expanded={menuOpen}
          aria-controls="editorial-nav-dropdown"
          className="flex items-center justify-between gap-4 sm:gap-5 px-4 py-2 rounded-full bg-[var(--ink)]/[0.06] hover:bg-[var(--ink)]/[0.11] text-[var(--ink)] text-xs sm:text-[13px] font-semibold tracking-tight transition-colors cursor-pointer whitespace-nowrap shrink-0"
        >
          <span>Menu</span>
          <span className="relative w-3.5 h-3.5 flex items-center justify-center" aria-hidden="true">
            {menuOpen ? (
              <svg viewBox="0 0 14 14" className="w-3.5 h-3.5" fill="none">
                <path
                  d="M2.5 2.5L11.5 11.5M11.5 2.5L2.5 11.5"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                />
              </svg>
            ) : (
              <svg viewBox="0 0 14 14" className="w-3.5 h-3.5" fill="none">
                <path
                  d="M1.5 4.5H12.5M4.5 9.5H12.5"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                />
              </svg>
            )}
          </span>
        </button>

        {/* Zone 3: Spinning Vinyl / Playlist Quick Popover Button */}
        <button
          type="button"
          onClick={() => {
            setVinylOpen((prev) => !prev);
            setMenuOpen(false);
          }}
          aria-label="Coding & Focus Playlist"
          title="Now Playing: Coding & Focus Mode"
          className="relative w-9 h-9 rounded-full bg-[#18131A] p-1 flex items-center justify-center shadow-sm hover:scale-105 transition-transform cursor-pointer shrink-0 overflow-hidden"
        >
          <span
            className={`w-full h-full rounded-full border border-white/15 flex items-center justify-center ${
              reduceMotion ? "" : "animate-vinyl"
            }`}
          >
            <img
              src={TOBI_AVATAR_URL}
              alt="Tobi vinyl avatar"
              referrerPolicy="no-referrer"
              className="w-5 h-5 rounded-full object-cover object-top"
            />
          </span>
        </button>
      </nav>

      {/* Mini Now Playing Popover when Vinyl Disc is clicked */}
      <AnimatePresence>
        {vinylOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.96 }}
            transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
            className="mt-2.5 w-[270px] rounded-2xl bg-[var(--surface-card)] border border-[var(--border-strong)] shadow-[var(--shadow-paper)] p-3.5"
          >
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-xl bg-[#18131A] flex items-center justify-center text-[#c770f0] shrink-0">
                <Disc3 className={`w-6 h-6 ${reduceMotion ? "" : "animate-vinyl"}`} />
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-[10px] font-bold tracking-[0.14em] uppercase text-[var(--accent)]">
                  Now Playing
                </p>
                <p className="text-sm font-bold text-[var(--ink)] truncate">
                  Coding &amp; Focus Mode
                </p>
                <p className="text-[11px] text-[var(--ink-muted)] truncate">
                  Tobi&apos;s Spotify Rotation
                </p>
              </div>
            </div>
            <a
              href={SPOTIFY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 w-full inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-full bg-[var(--ink)] text-white text-xs font-semibold hover:opacity-90 transition-opacity"
            >
              <span>Listen on Spotify</span>
              <ExternalLink size={12} />
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Torn-Paper Editorial Dropdown Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="editorial-nav-dropdown"
            initial={{ opacity: 0, y: -10, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.97 }}
            transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
            className="mt-2.5 w-[min(92vw,390px)] relative drop-shadow-[0_22px_40px_rgba(24,19,26,0.2)]"
          >
            <div className="bg-[var(--surface-card)] rounded-t-3xl px-6 sm:px-7 pt-6 pb-5 border-x border-t border-white/80">
              {/* Numbered Navigation Links with Pill Hover & Handwritten Side Notes */}
              <ul className="space-y-1 pb-4">
                {NAV_ITEMS.map((item) => {
                  const isActive =
                    item.to === "/"
                      ? location.pathname === "/"
                      : location.pathname.startsWith(item.to);
                  return (
                    <li key={item.to}>
                      <Link
                        to={item.to}
                        onClick={() => setMenuOpen(false)}
                        className="group flex items-baseline justify-between gap-4 px-3.5 py-2 -mx-3.5 rounded-2xl hover:bg-[var(--ink)]/[0.065] focus-visible:bg-[var(--ink)]/[0.065] transition-colors"
                      >
                        <div className="flex items-baseline gap-3.5">
                          <span className="font-mono text-[11px] tabular-nums text-[var(--ink-soft)]">
                            {item.num}
                          </span>
                          <span className="font-editorial text-[28px] sm:text-[32px] font-black leading-[1.08] tracking-tight text-[var(--ink)]">
                            {item.label}
                          </span>
                        </div>
                        <span
                          className={`font-hand text-lg text-[var(--accent)] -rotate-2 transition-all duration-200 whitespace-nowrap ${
                            isActive
                              ? "opacity-100 translate-x-0"
                              : "opacity-0 translate-x-1.5 group-hover:opacity-100 group-hover:translate-x-0 group-focus-visible:opacity-100 group-focus-visible:translate-x-0"
                          }`}
                        >
                          {item.note}
                        </span>
                      </Link>
                    </li>
                  );
                })}
              </ul>

              {/* Dashed Divider: Socials + Direct Email */}
              <div className="border-t border-dashed border-[var(--border-hairline)] py-4 flex items-center justify-between gap-3">
                <div className="flex items-center gap-3 text-[var(--ink)]">
                  <a
                    href="https://github.com/realtee01"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                    className="p-1.5 rounded-full hover:bg-[var(--ink)]/5 hover:text-[var(--accent)] transition-colors"
                  >
                    <Github size={16} />
                  </a>
                  <a
                    href="https://ng.linkedin.com/in/tobiloba-akala-35448a38b"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    className="p-1.5 rounded-full hover:bg-[var(--ink)]/5 hover:text-[var(--accent)] transition-colors"
                  >
                    <Linkedin size={16} />
                  </a>
                  <a
                    href="https://x.com/realtee1111101"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="X / Twitter"
                    className="p-1.5 rounded-full hover:bg-[var(--ink)]/5 hover:text-[var(--accent)] transition-colors"
                  >
                    <Twitter size={16} />
                  </a>
                </div>
                <a
                  href="mailto:tobilobaakala@gmail.com"
                  className="text-xs font-bold text-[var(--ink)] underline underline-offset-4 decoration-[var(--ink)]/50 hover:text-[var(--accent)] transition-colors truncate"
                >
                  tobilobaakala@gmail.com
                </a>
              </div>

              {/* Dashed Divider: Reduce Motion Switch */}
              <div className="border-t border-dashed border-[var(--border-hairline)] py-3.5 flex items-center justify-between">
                <span className="text-[11px] font-bold tracking-[0.14em] uppercase text-[var(--ink)]">
                  Reduce Motion
                </span>
                <button
                  type="button"
                  role="switch"
                  aria-checked={reduceMotion}
                  onClick={toggleReduceMotion}
                  className={`relative w-10 h-5.5 rounded-full transition-colors cursor-pointer ${
                    reduceMotion ? "bg-[var(--accent)]" : "bg-[var(--ink)]"
                  }`}
                >
                  <span
                    className={`block w-4 h-4 rounded-full bg-white shadow-sm transition-transform ${
                      reduceMotion ? "translate-x-5" : "translate-x-1"
                    }`}
                  />
                </button>
              </div>

              {/* Dashed Divider: Pick a Mood */}
              <div className="border-t border-dashed border-[var(--border-hairline)] pt-4 pb-1">
                <p className="text-[11px] font-bold tracking-[0.14em] uppercase text-[var(--ink)] mb-3">
                  Pick a Mood
                </p>
                <div className="grid grid-cols-3 gap-2">
                  {MOOD_OPTIONS.map((option) => {
                    const active = mood === option.id;
                    return (
                      <button
                        key={option.id}
                        type="button"
                        onClick={() => setMood(option.id)}
                        className="relative flex flex-col items-center text-center px-2 py-3 rounded-xl bg-[var(--ink)]/[0.045] hover:bg-[var(--ink)]/[0.08] transition-colors cursor-pointer"
                      >
                        <span
                          className="w-4 h-4 rounded-full border border-black/15 mb-2 block"
                          style={{ backgroundColor: option.swatch }}
                        />
                        <span className="text-[11px] font-bold text-[var(--ink)] leading-tight">
                          {option.title}
                        </span>
                        <span className="font-hand text-[13px] text-[var(--ink-muted)] leading-tight mt-0.5">
                          {option.subtitle}
                        </span>

                        {/* Hand-drawn oval ring around active mood */}
                        {active && (
                          <svg
                            viewBox="0 0 120 90"
                            preserveAspectRatio="none"
                            aria-hidden="true"
                            className="absolute -inset-1 w-[calc(100%+8px)] h-[calc(100%+8px)] pointer-events-none text-[var(--accent)]"
                          >
                            <ellipse
                              cx="60"
                              cy="45"
                              rx="55"
                              ry="40"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2.4"
                              strokeDasharray="340"
                              transform="rotate(-3 60 45)"
                            />
                          </svg>
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Jagged Torn-Paper Bottom Edge of Dropdown */}
            <svg
              viewBox="0 0 400 18"
              preserveAspectRatio="none"
              className="block w-full h-[14px] text-[var(--surface-card)]"
              aria-hidden="true"
            >
              <path
                d="M0,0 L400,0 L400,10 L388,16 L374,6 L360,15 L344,7 L328,17 L312,6 L296,14 L280,8 L264,17 L248,7 L232,16 L216,6 L200,15 L184,8 L168,17 L152,6 L136,15 L120,7 L104,16 L88,8 L72,17 L56,6 L40,15 L24,8 L10,16 L0,10 Z"
                fill="currentColor"
              />
            </svg>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
