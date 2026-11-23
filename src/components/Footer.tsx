import { useState } from "react";
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

export default function Footer() {
  const { openBooking } = useTheme();
  const [copied, setCopied] = useState(false);

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
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[var(--ink)] text-white text-sm font-semibold hover:opacity-90 transition-opacity cursor-pointer whitespace-nowrap"
                >
                  <span>Book a quick call</span>
                  <span aria-hidden="true">→</span>
                </button>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-[var(--border-strong)] bg-transparent text-[var(--ink)] text-sm font-semibold hover:bg-[var(--ink)]/5 transition-colors whitespace-nowrap"
                >
                  <span>Project brief form</span>
                </Link>
              </div>

              {/* Clean Single-Line Uppercase Link Row */}
              <nav
                aria-label="Footer Links"
                className="flex flex-wrap items-center gap-x-6 gap-y-2.5 text-[11px] font-bold tracking-[0.14em] uppercase text-[var(--ink)]"
              >
                <Link to="/projects" className="hover:text-[var(--accent)] transition-colors whitespace-nowrap">
                  Work
                </Link>
                <Link to="/about" className="hover:text-[var(--accent)] transition-colors whitespace-nowrap">
                  About
                </Link>
                <Link to="/blog" className="hover:text-[var(--accent)] transition-colors whitespace-nowrap">
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
              <div className="hidden sm:flex flex-col items-end -mr-4 -mt-14">
                <span className="font-hand text-2xl font-semibold text-[var(--ink)] -rotate-6 whitespace-nowrap">
                  yes, he replies to emails
                </span>
                <CurvedArrow direction="down-right" className="w-16 h-10 text-[var(--ink)] mt-0.5" />
              </div>
              <StickerPortrait
                src={TOBI_PHOTOS.footerCutout}
                alt="Tobiloba Akala - Available for projects"
                className="w-56 h-68 sm:w-64 sm:h-76 shrink-0"
                tilt="2deg"
              />
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
