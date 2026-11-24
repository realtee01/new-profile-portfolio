import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowUp, Check, Copy } from "lucide-react";
import { useTheme } from "../context/ThemeContext";
import {
  SparkleMark,
  TornEdge,
  StickerPortrait,
  CurvedArrow,
  TOBI_PHOTOS,
  RESUME_PDF_URL,
} from "./ui/EditorialPrimitives";
import { prefetchRoute } from "../utils/lazyWithRetry";

function formatLagosTime(date: Date): string {
  try {
    return new Intl.DateTimeFormat("en-GB", {
      timeZone: "Africa/Lagos",
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    }).format(date);
  } catch {
    return date.toTimeString().slice(0, 5);
  }
}

export default function Footer() {
  const { openBooking } = useTheme();
  const [copied, setCopied] = useState(false);
  const [lagosTime, setLagosTime] = useState(() => formatLagosTime(new Date()));

  useEffect(() => {
    let intervalId: number | undefined;
    const syncTime = () => setLagosTime(formatLagosTime(new Date()));
    const msUntilNextMinute = 60_000 - (Date.now() % 60_000);
    const timeoutId = window.setTimeout(() => {
      syncTime();
      intervalId = window.setInterval(syncTime, 60_000);
    }, msUntilNextMinute + 50);

    return () => {
      window.clearTimeout(timeoutId);
      if (intervalId !== undefined) window.clearInterval(intervalId);
    };
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard?.writeText("tobilobaakala@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="cv-auto relative z-10 mt-12">
      {/* Organic Torn-Paper Edge Transition */}
      <TornEdge fill="var(--bg-band)" />

      {/* Tinted Paper Band Footer */}
      <div className="paper-band pt-14 sm:pt-20 pb-10 px-5 sm:px-10 lg:px-14">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12 lg:gap-10 pb-14">
            {/* Left Editorial CTA */}
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.16em] text-[var(--ink)] mb-5">
                <SparkleMark className="w-3.5 h-3.5 text-[var(--ink)]" />
                <span>Let&apos;s Work Together</span>
              </div>

              <h2 className="font-editorial font-black text-[clamp(3.1rem,8.5vw,6.4rem)] leading-[0.94] tracking-[-0.03em] text-[var(--ink)] mb-7 text-balance">
                Got a brief?
                <br />
                <span className="italic">Send it.</span>
              </h2>

              <div className="flex flex-wrap items-center gap-4 mb-10">
                <a
                  href="mailto:tobilobaakala@gmail.com"
                  className="font-editorial font-bold text-xl sm:text-3xl text-[var(--ink)] underline underline-offset-8 decoration-2 decoration-[var(--ink)]/75 hover:text-[var(--accent)] hover:decoration-[var(--accent)] transition-colors break-all"
                >
                  tobilobaakala@gmail.com
                </a>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  aria-label="Copy email address"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-[var(--border-hairline)] bg-white/45 hover:bg-white/80 text-xs font-semibold text-[var(--ink)] transition-colors cursor-pointer whitespace-nowrap"
                >
                  {copied ? <Check size={13} /> : <Copy size={13} />}
                  <span>{copied ? "Copied" : "Copy"}</span>
                </button>
              </div>

              <div className="flex flex-wrap items-center gap-3 mb-10">
                <button
                  type="button"
                  onClick={() => openBooking("Web App / MVP")}
                  className="group btn-anim-aesthetic inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[var(--ink)] text-white text-sm font-semibold cursor-pointer whitespace-nowrap"
                >
                  <span className="relative z-10">Book a quick call</span>
                  <span
                    aria-hidden="true"
                    className="relative z-10 inline-block transition-transform duration-300 group-hover:translate-x-1"
                  >
                    →
                  </span>
                </button>
                <Link
                  to="/contact"
                  onMouseEnter={() => prefetchRoute("/contact")}
                  onTouchStart={() => prefetchRoute("/contact")}
                  className="group btn-anim-aesthetic inline-flex items-center gap-2 px-6 py-3 rounded-full border border-[var(--border-strong)] bg-transparent text-[var(--ink)] text-sm font-semibold whitespace-nowrap"
                >
                  <span className="relative z-10">Project brief form</span>
                </Link>
              </div>

              {/* Clean Single-Line Uppercase Link Row */}
              <nav
                aria-label="Footer Links"
                className="flex flex-wrap items-center gap-x-6 gap-y-2.5 text-[11px] font-bold tracking-[0.14em] uppercase text-[var(--ink)]"
              >
                <Link
                  to="/projects"
                  onMouseEnter={() => prefetchRoute("/projects")}
                  onTouchStart={() => prefetchRoute("/projects")}
                  className="hover:text-[var(--accent)] transition-colors whitespace-nowrap"
                >
                  Work
                </Link>
                <Link
                  to="/about"
                  onMouseEnter={() => prefetchRoute("/about")}
                  onTouchStart={() => prefetchRoute("/about")}
                  className="hover:text-[var(--accent)] transition-colors whitespace-nowrap"
                >
                  About
                </Link>
                <Link
                  to="/blog"
                  onMouseEnter={() => prefetchRoute("/blog")}
                  onTouchStart={() => prefetchRoute("/blog")}
                  className="hover:text-[var(--accent)] transition-colors whitespace-nowrap"
                >
                  Journal
                </Link>
                <a
                  href="https://github.com/realtee01"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[var(--accent)] transition-colors whitespace-nowrap"
                >
                  GitHub
                </a>
                <a
                  href="https://wa.me/2347032533869"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[var(--accent)] transition-colors whitespace-nowrap"
                >
                  WhatsApp
                </a>
                <a
                  href="https://ng.linkedin.com/in/tobiloba-akala-35448a38b"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[var(--accent)] transition-colors whitespace-nowrap"
                >
                  LinkedIn
                </a>
                <a
                  href={RESUME_PDF_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  download="Tobiloba_Akala_Frontend_Developer_Resume.pdf"
                  className="hover:text-[var(--accent)] transition-colors whitespace-nowrap"
                >
                  Download CV
                </a>
              </nav>
            </div>

            {/* Right Annotated Silhouette Sticker Portrait */}
            <div className="relative flex items-center justify-start lg:justify-end gap-2 self-start lg:self-end">
              <div className="hidden sm:flex flex-col items-end -mr-6 -mt-24">
                <span className="font-hand text-2xl sm:text-[26px] font-semibold text-[var(--ink)] -rotate-6 whitespace-nowrap">
                  yes, he replies to emails
                </span>
                <CurvedArrow direction="down-right" className="w-16 h-10 text-[var(--ink)] mt-0.5" />
              </div>
              <StickerPortrait
                src={TOBI_PHOTOS.heroCutout}
                srcSet={`${TOBI_PHOTOS.heroCutoutMobile} 460w, ${TOBI_PHOTOS.heroCutout} 643w`}
                sizes="(max-width: 640px) 288px, 360px"
                width={643}
                height={820}
                alt="Tobiloba Akala - Available for projects"
                variant="classic"
                className="w-72 h-[350px] sm:w-80 sm:h-[400px] lg:w-[360px] lg:h-[445px] shrink-0 hover:-translate-y-1 transition-transform duration-300"
                tilt="2deg"
              />
            </div>
          </div>

          {/* Buildwithtobi & Live Lagos Time Strip */}
          <div
            aria-label="Buildwithtobi Local Time"
            className="py-5 sm:py-6 border-t border-dashed border-[var(--border-hairline)] flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1.5"
          >
            <span className="font-editorial font-black italic text-lg text-[var(--ink)] tracking-tight whitespace-nowrap">
              Buildwithtobi
            </span>

            <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
              <span className="font-mono text-xs text-[var(--ink-muted)] tabular-nums whitespace-nowrap">
                Local Time{" "}
                <time className="font-semibold text-[var(--ink)]">
                  {lagosTime} WAT
                </time>
              </span>
              <span
                className="hidden sm:inline text-[var(--ink-soft)]"
                aria-hidden="true"
              >
                ·
              </span>
              <span className="hidden sm:inline font-mono text-[11px] text-[var(--ink-muted)] tabular-nums whitespace-nowrap">
                6.5244° N, 3.3792° E
              </span>
            </div>
          </div>

          {/* Minimal Hairline Bottom Bar */}
          <div className="pt-6 border-t border-[var(--border-hairline)] flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] font-bold tracking-[0.14em] uppercase text-[var(--ink)]/80">
            <span>© {new Date().getFullYear()} Tobiloba Akala</span>
            <span>Web Developer in Lagos, Nigeria</span>
            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 hover:text-[var(--accent)] transition-colors cursor-pointer whitespace-nowrap"
            >
              <span>Back to top</span>
              <ArrowUp size={13} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
