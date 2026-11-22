import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, ArrowUpRight, Download, Film, Play } from "lucide-react";
import { ProjectItem, projectsData } from "../../data/projectsData";
import { useTheme } from "../../context/ThemeContext";
import { RESUME_PDF_URL, SparkleMark, TornEdge } from "../ui/EditorialPrimitives";

export const CINESCOPE_PREVIEW_VIDEO =
  "https://res.cloudinary.com/dw8jtwbka/video/upload/v1795386063/Screen_Recording_2026-11-22_231714_yvo1g3.mp4";

export interface BrandSticker {
  name: string;
  monogram: string;
  bg: string;
  fg: string;
  tilt: string;
}

export const CLIENT_BRAND_STICKERS: BrandSticker[] = [
  { name: "CineScope", monogram: "CS", bg: "#8b5cf6", fg: "#ffffff", tilt: "-2.2deg" },
  { name: "Relay Group", monogram: "RG", bg: "#111827", fg: "#00e5ff", tilt: "1.8deg" },
  { name: "Luxe Thread", monogram: "LT", bg: "#0f2922", fg: "#a7f3d0", tilt: "-1.5deg" },
  { name: "Peak Echo", monogram: "PE", bg: "#0b192c", fg: "#38bdf8", tilt: "2.1deg" },
  { name: "Stratix", monogram: "SX", bg: "#061611", fg: "#00f5a0", tilt: "-2deg" },
  { name: "Looya Lyte", monogram: "LL", bg: "#1c1610", fg: "#f5c451", tilt: "1.6deg" },
  { name: "NextClean", monogram: "NC", bg: "#0d2a3a", fg: "#67e8f9", tilt: "-1.8deg" },
  { name: "Julio's Pizza", monogram: "JP", bg: "#7f1d1d", fg: "#fef08a", tilt: "2.2deg" },
  { name: "Riad Dental", monogram: "RD", bg: "#155e75", fg: "#ecfeff", tilt: "-1.4deg" },
  { name: "Lumière", monogram: "LM", bg: "#3b1d2e", fg: "#f5d0fe", tilt: "1.7deg" },
  { name: "Roitech AI", monogram: "RA", bg: "#1e1b4b", fg: "#c084fc", tilt: "-2.1deg" },
  { name: "Axia Africa", monogram: "AA", bg: "#422006", fg: "#fbbf24", tilt: "1.5deg" },
];

export const CLIENT_REFERENCES = [
  {
    quote:
      "Collaborating with Tobiloba was seamless from start to finish. He quickly grasped our goals and delivered a fast, modern platform that exceeded expectations.",
    author: "Micheal Cheng",
    role: "CEO, Relay Group of Companies",
  },
  {
    quote:
      "Tobiloba understood our Luxe Thread vision immediately. He delivered a high-end storefront experience that feels as refined as our clothing line.",
    author: "Olamide Bakare",
    role: "Founder & Creative Director, Luxe Thread",
  },
  {
    quote:
      "His final project was a masterclass in React performance and responsive CSS. Consistently clean component architecture and reliable delivery — truly top-tier.",
    author: "Lead Tutor",
    role: "Engineering Faculty, Axia Africa Academy",
  },
];

const IMPACT_METRICS = [
  {
    value: "98%+",
    caption: "Lighthouse performance score on CineScope & client production builds",
  },
  {
    value: "65%",
    caption: "reduction in unnecessary TMDB API activity via debounced search & caching",
  },
  {
    value: "35+",
    caption: "deployed projects including 15+ client solutions across web apps & e-commerce",
  },
  {
    value: "Top 5%",
    caption: "Axia Africa Cohort 9 faculty recognition for engineering craft & UI quality",
  },
];

export const SKILLS_LIST = [
  "React.js",
  "Next.js",
  "TypeScript",
  "JavaScript (ES6+)",
  "Vite",
  "Tailwind CSS",
  "CSS Grid & Flexbox",
  "Supabase",
  "Firebase & Firestore",
  "REST APIs",
  "Lighthouse Optimization",
  "Code Splitting & Lazy Loading",
  "Technical SEO",
  "Git, GitHub & Vercel",
];

export const EDUCATION_LIST = [
  "B.Sc. Computer Science — University of Lagos (UNILAG), 2021 to Present",
  "Professional Certificate in Frontend Development — Axia Africa (Cohort 9), Mar 2026 · Top 5%",
];

const EXPERIENCE_HISTORY = [
  {
    num: "01",
    role: "Frontend Developer",
    org: "Axia Africa",
    period: "Oct 2025 – Mar 2026",
    meta: "6-Month Intensive Program · Top 5% Cohort Recognition",
    points: [
      "Delivered 15 production-style projects using React, state management, debugging, and performance optimization within a six-month intensive program.",
      "Ranked in the top 5% of the cohort based on faculty recognition for technical performance and project quality.",
      "Built client-oriented web solutions under deadlines, translating requirements into responsive interfaces and functional application flows.",
    ],
  },
  {
    num: "02",
    role: "Content Marketer / Web Developer",
    org: "PeakEcho Digitals",
    period: "Jan 2025 – Present",
    meta: "Remote · Engineering & Growth",
    points: [
      "Build and maintain the company website using React, Next.js, and Tailwind CSS, combining responsive implementation with professional branding and technical SEO.",
      "Create technical documentation and engineering-marketing content for technology-focused campaigns.",
      "Use data-driven content strategy to support technology product campaigns and online visibility.",
    ],
  },
  {
    num: "03",
    role: "Frontend Developer / Technical Collaborator",
    org: "Roitech",
    period: "2024 – 2025",
    meta: "Collaborative Product Development · Roitech AI Ecosystem",
    points: [
      "Partnered with backend developers to build a full web application across frontend implementation, API integration, and product workflows.",
      "Architected LearnIQ (2024 Hackathon) within the Roitech AI ecosystem—an accessible learning platform converting raw audio and lecture notes into summarized study content.",
    ],
  },
  {
    num: "04",
    role: "Independent Frontend Development Training",
    org: "JavaScript, HTML5 & CSS3",
    period: "2023 – 2024",
    meta: "Structured Hands-On Foundation",
    points: [
      "Completed structured, hands-on training in JavaScript ES6+, HTML5, CSS3, DOM fundamentals, and responsive mobile-first interfaces.",
      "Applied core web technologies through progressive frontend builds, establishing the engineering foundation for React and Next.js production work.",
    ],
  },
];

/**
 * 1. Dark Torn-Paper Horizontal Portfolio Carousel ("The portfolio")
 *    Matches Reference Screenshot 4 — CineScope is always index 0.
 */
export function DarkPortfolioCarousel({
  onSelectProject,
}: {
  onSelectProject: (project: ProjectItem) => void;
}) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [failedImgs, setFailedImgs] = useState<Record<number, boolean>>({});
  const { reduceMotion } = useTheme();

  // CineScope is guaranteed index 0 in projectsData
  const showcaseProjects = projectsData.slice(0, 10);

  const scrollByCard = (dir: "left" | "right") => {
    if (!scrollRef.current) return;
    const distance = Math.min(scrollRef.current.clientWidth * 0.72, 620);
    scrollRef.current.scrollBy({
      left: dir === "right" ? distance : -distance,
      behavior: reduceMotion ? "auto" : "smooth",
    });
  };

  return (
    <section className="relative mt-10 sm:mt-14">
      <TornEdge fill="#242327" />

      <div className="dark-paper-band pt-10 sm:pt-14 pb-16 sm:pb-24 px-5 sm:px-8 lg:px-12 text-[#f6f4f6]">
        <div className="max-w-[1360px] mx-auto">
          {/* Header Row */}
          <div className="flex flex-wrap items-end justify-between gap-6 mb-8 sm:mb-10">
            <div>
              <div className="inline-flex items-center gap-2 text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.18em] text-white/70 mb-3">
                <SparkleMark className="w-3 h-3 text-[var(--cutout-black-letter)]" />
                <span>Selected Work · Tap to Inspect</span>
              </div>
              <h2 className="font-editorial font-black text-[clamp(2.8rem,7vw,5.4rem)] leading-[0.95] tracking-[-0.03em] text-[#f5f3f5]">
                The{" "}
                <span className="italic text-[var(--cutout-black-letter)]">
                  portfolio
                </span>
              </h2>
            </div>

            {/* Circular Arrow Controls */}
            <div className="flex items-center gap-2.5">
              <button
                type="button"
                onClick={() => scrollByCard("left")}
                aria-label="Scroll portfolio left"
                className="w-11 h-11 rounded-full border border-white/35 bg-white/[0.04] hover:bg-white hover:text-[#18131A] text-white flex items-center justify-center transition-colors cursor-pointer"
              >
                <ArrowLeft size={16} />
              </button>
              <button
                type="button"
                onClick={() => scrollByCard("right")}
                aria-label="Scroll portfolio right"
                className="w-11 h-11 rounded-full border border-white/35 bg-white/[0.04] hover:bg-white hover:text-[#18131A] text-white flex items-center justify-center transition-colors cursor-pointer"
              >
                <ArrowRight size={16} />
              </button>
            </div>
          </div>

          {/* Horizontal Tall Vertical Cards Track */}
          <div
            ref={scrollRef}
            className="flex gap-4 sm:gap-5 overflow-x-auto snap-x snap-mandatory no-scrollbar pb-2 -mx-1 px-1"
          >
            {showcaseProjects.map((project, index) => {
              const isCinescope = index === 0;
              const imgBroken = failedImgs[project.id];

              return (
                <button
                  key={project.id}
                  type="button"
                  onClick={() => onSelectProject(project)}
                  aria-label={`Inspect ${project.title} case study`}
                  className="group relative w-[230px] sm:w-[260px] lg:w-[272px] aspect-[9/14] rounded-[1.35rem] overflow-hidden shrink-0 snap-start bg-[#17151b] border border-white/12 text-left cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  {/* Visual Media: CineScope gets crisp looping preview video, others get full-bleed cover */}
                  {isCinescope && !reduceMotion ? (
                    <video
                      src={CINESCOPE_PREVIEW_VIDEO}
                      poster={project.imgPath}
                      autoPlay
                      muted
                      playsInline
                      loop
                      preload="metadata"
                      onTimeUpdate={(e) => {
                        if (e.currentTarget.currentTime >= 5.5) {
                          e.currentTarget.currentTime = 0;
                          e.currentTarget.play().catch(() => {});
                        }
                      }}
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : project.imgPath && !imgBroken ? (
                    <img
                      src={project.imgPath}
                      alt={`${project.title} showcase preview`}
                      referrerPolicy="no-referrer"
                      loading={index < 4 ? "eager" : "lazy"}
                      onError={() =>
                        setFailedImgs((prev) => ({ ...prev, [project.id]: true }))
                      }
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <div className="absolute inset-0 bg-gradient-to-br from-[#2f1c3d] via-[#1a1622] to-[#0f2b33]" />
                  )}

                  {/* Measured Contrast Scrim */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0d0b10]/95 via-[#0d0b10]/35 via-45% to-[#0d0b10]/30" />

                  {/* Top Row: Subtle Index & Live Reel Indicator on CineScope */}
                  <div className="relative z-10 flex items-center justify-between p-4">
                    <span className="font-mono text-[11px] font-semibold text-white/85 tabular-nums">
                      {String(index + 1).padStart(2, "0")} · {project.category}
                    </span>
                    {isCinescope && (
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-black/55 backdrop-blur-sm border border-white/15 text-[10px] font-semibold text-[#00e5ff]">
                        <Play size={9} fill="currentColor" />
                        <span>Reel</span>
                      </span>
                    )}
                  </div>

                  {/* Bottom Editorial Title & Metric Overlay */}
                  <div className="absolute inset-x-0 bottom-0 z-10 p-4 sm:p-5">
                    <p className="text-[11px] font-mono text-[var(--cutout-black-letter)] truncate mb-1">
                      {project.metrics || project.clientOrContext || "Production Build"}
                    </p>
                    <h3 className="font-editorial font-black text-xl sm:text-2xl text-white leading-tight mb-1.5 group-hover:text-[var(--cutout-black-letter)] transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs text-white/75 line-clamp-2 leading-relaxed mb-3">
                      {project.description}
                    </p>
                    <span className="inline-flex items-center gap-1 text-xs font-semibold text-white group-hover:translate-x-0.5 transition-transform">
                      <span>Read case study</span>
                      <ArrowUpRight size={13} />
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Quiet Footer Link inside Dark Band */}
          <div className="mt-8 flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-white/10">
            <p className="text-xs sm:text-sm text-white/65">
              Showing 10 featured builds — {projectsData.length} full case studies in the archive.
            </p>
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-white hover:text-[var(--cutout-black-letter)] transition-colors whitespace-nowrap"
            >
              <span>See all {projectsData.length} projects</span>
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </div>

      <TornEdge fill="var(--bg-paper)" />
    </section>
  );
}

/**
 * 2. Dark Full-Bleed Client & Project Sticker Ribbon Marquee
 *    Matches Reference Screenshot 8 (top band)
 */
export function BrandStickerMarquee() {
  const items = [...CLIENT_BRAND_STICKERS, ...CLIENT_BRAND_STICKERS];

  return (
    <section
      aria-label="Projects, clients and engineering partners"
      className="marquee-wrap relative w-full overflow-hidden bg-[#151526] py-5 sm:py-6 border-y border-white/10 my-8 sm:my-12"
    >
      <div className="animate-marquee flex items-center gap-3.5 sm:gap-4 px-2">
        {items.map((brand, idx) => (
          <div
            key={`${brand.name}-${idx}`}
            style={{ transform: `rotate(${brand.tilt})` }}
            className="inline-flex items-center gap-2.5 pl-2 pr-4 py-1.5 rounded-full bg-[#f6f4f6] text-[#18131A] shadow-[0_6px_16px_rgba(0,0,0,0.28)] shrink-0 select-none"
          >
            <span
              className="w-7 h-7 rounded-full flex items-center justify-center font-mono text-[10px] font-bold tracking-tight shrink-0"
              style={{ backgroundColor: brand.bg, color: brand.fg }}
              aria-hidden="true"
            >
              {brand.monogram}
            </span>
            <span className="font-editorial font-black text-sm sm:text-[15px] tracking-tight whitespace-nowrap">
              {brand.name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}

/**
 * 3. "By The Numbers" Impact Showcase with Overlapping Tilted Device Analytics Mockups
 *    Matches Reference Screenshots 3 & 8
 */
export function ByTheNumbersShowcase() {
  return (
    <section className="py-12 sm:py-20 px-5 sm:px-8 lg:px-12 overflow-x-clip">
      <div className="max-w-6xl mx-auto">
        {/* Kicker + Massive Editorial Headline */}
        <div className="max-w-3xl mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.18em] text-[var(--ink-muted)] mb-4">
            <SparkleMark className="w-3 h-3 text-[var(--accent)]" />
            <span>Production, By The Numbers</span>
          </div>

          <h2 className="font-editorial font-black text-[clamp(2.6rem,6.5vw,5.2rem)] leading-[0.95] tracking-[-0.03em] text-[var(--ink)] text-balance">
            What happened when I built for real users
          </h2>
        </div>

        {/* Split Composition: Overlapping Tilted Device Mockups (Left) + 2x2 Frosted Metric Cards (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-12 lg:gap-10">
          {/* Left: 3 Overlapping Tilted Performance & Analytics Device Frames */}
          <div className="lg:col-span-6 relative flex items-center justify-center min-h-[340px] sm:min-h-[390px] py-4 select-none">
            {/* Back-Left Tilted Dark Phone: Lighthouse Audit */}
            <div className="w-[155px] sm:w-[178px] rounded-[1.7rem] bg-[#101219] border-[4px] border-[#262936] p-3.5 text-white shadow-[0_24px_45px_-16px_rgba(16,18,25,0.45)] -rotate-[8deg] -mr-10 sm:-mr-12 translate-y-3 z-10">
              <div className="flex items-center justify-between text-[9px] text-white/55 font-mono mb-2.5">
                <span>8:34</span>
                <span>Core Web Vitals</span>
              </div>
              <p className="text-[10px] font-bold text-white/90 mb-2">
                Lighthouse Audit
              </p>
              {/* Mini Bars */}
              <div className="flex items-end gap-1 h-12 mb-3 px-1">
                {[58, 72, 65, 84, 92, 88, 96, 98, 95, 99].map((h, i) => (
                  <span
                    key={i}
                    style={{ height: `${h}%` }}
                    className="flex-1 rounded-t-sm bg-gradient-to-t from-[#00e5ff]/60 to-[#00e5ff]"
                  />
                ))}
              </div>
              <div className="grid grid-cols-2 gap-1.5">
                <div className="rounded-lg bg-white/[0.06] p-2">
                  <p className="text-[8px] text-white/55">LCP</p>
                  <p className="font-mono text-xs font-bold text-[#00e5ff] tabular-nums">
                    0.8s
                  </p>
                </div>
                <div className="rounded-lg bg-white/[0.06] p-2">
                  <p className="text-[8px] text-white/55">CLS</p>
                  <p className="font-mono text-xs font-bold text-[#c770f0] tabular-nums">
                    0.00
                  </p>
                </div>
                <div className="rounded-lg bg-white/[0.06] p-2">
                  <p className="text-[8px] text-white/55">SEO</p>
                  <p className="font-mono text-xs font-bold text-emerald-400 tabular-nums">
                    100
                  </p>
                </div>
                <div className="rounded-lg bg-white/[0.06] p-2">
                  <p className="text-[8px] text-white/55">A11y</p>
                  <p className="font-mono text-xs font-bold text-emerald-400 tabular-nums">
                    100
                  </p>
                </div>
              </div>
            </div>

            {/* Center Foreground Dark Phone: CineScope Speed & Performance Ring */}
            <div className="w-[178px] sm:w-[205px] rounded-[2rem] bg-[#0e0c14] border-[5px] border-[#241f2d] p-4 text-white shadow-[0_28px_54px_-14px_rgba(14,12,20,0.62)] rotate-[1.5deg] z-20 relative">
              {/* Notch */}
              <div className="w-14 h-3.5 rounded-full bg-black mx-auto mb-3" />

              <div className="flex items-center justify-between text-[9px] text-white/60 mb-2">
                <span className="inline-flex items-center gap-1 font-semibold text-white">
                  <Film size={10} className="text-[#c770f0]" />
                  CineScope
                </span>
                <span className="font-mono">v2.6 Live</span>
              </div>

              {/* Donut Ring Performance Gauge */}
              <div className="flex flex-col items-center my-3">
                <div className="relative w-24 h-24 flex items-center justify-center">
                  <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90">
                    <circle
                      cx="50"
                      cy="50"
                      r="38"
                      fill="none"
                      stroke="rgba(255,255,255,0.1)"
                      strokeWidth="9"
                    />
                    <circle
                      cx="50"
                      cy="50"
                      r="38"
                      fill="none"
                      stroke="url(#cinescopeRing)"
                      strokeWidth="9"
                      strokeLinecap="round"
                      strokeDasharray="238"
                      strokeDashoffset="10"
                    />
                    <defs>
                      <linearGradient id="cinescopeRing" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#c770f0" />
                        <stop offset="100%" stopColor="#00e5ff" />
                      </linearGradient>
                    </defs>
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="font-editorial font-black text-2xl leading-none tabular-nums">
                      98
                    </span>
                    <span className="text-[8px] uppercase tracking-wider text-white/60 mt-0.5">
                      Score
                    </span>
                  </div>
                </div>
                <p className="font-mono text-[10px] text-[#00e5ff] mt-1 tabular-nums">
                  &lt;400ms Search Latency
                </p>
              </div>

              {/* Stack Breakdown Bars */}
              <div className="space-y-2 mt-3 pt-2.5 border-t border-white/10">
                <div>
                  <div className="flex justify-between text-[9px] text-white/75 mb-1">
                    <span>React 19 + Vite</span>
                    <span className="font-mono tabular-nums">99%</span>
                  </div>
                  <div className="h-1.5 rounded-full bg-white/10 overflow-hidden">
                    <div className="h-full w-[96%] rounded-full bg-[#c770f0]" />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-[9px] text-white/75 mb-1">
                    <span>Edge Caching</span>
                    <span className="font-mono tabular-nums">94%</span>
                  </div>
                  <div className="h-1.5 rounded-full bg-white/10 overflow-hidden">
                    <div className="h-full w-[90%] rounded-full bg-[#00e5ff]" />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-[9px] text-white/75 mb-1">
                    <span>Mobile UX</span>
                    <span className="font-mono tabular-nums">100%</span>
                  </div>
                  <div className="h-1.5 rounded-full bg-white/10 overflow-hidden">
                    <div className="h-full w-full rounded-full bg-emerald-400" />
                  </div>
                </div>
              </div>
            </div>

            {/* Back-Right Tilted Light Phone: Vercel Shipments & Conversion */}
            <div className="w-[152px] sm:w-[172px] rounded-[1.7rem] bg-[#f8f7f5] border-[4px] border-[#26232b] p-3.5 text-[#18131A] shadow-[0_22px_40px_-16px_rgba(24,19,26,0.34)] rotate-[8deg] -ml-10 sm:-ml-12 translate-y-4 z-10">
              <div className="flex items-center justify-between text-[8px] font-mono text-[#6e6773] mb-2">
                <span>Production</span>
                <span className="px-1.5 py-0.5 rounded bg-emerald-100 text-emerald-800 font-bold">
                  Live
                </span>
              </div>
              <p className="text-[10px] font-bold text-[#18131A] mb-2">
                Client Impact
              </p>
              <div className="grid grid-cols-2 gap-1.5 mb-2.5">
                <div className="rounded-lg bg-black/[0.04] p-2">
                  <p className="font-editorial font-black text-sm tabular-nums">
                    35+
                  </p>
                  <p className="text-[8px] text-[#5a505c]">Shipped</p>
                </div>
                <div className="rounded-lg bg-black/[0.04] p-2">
                  <p className="font-editorial font-black text-sm text-[#a62d96] tabular-nums">
                    -65%
                  </p>
                  <p className="text-[8px] text-[#5a505c]">API Load</p>
                </div>
              </div>
              {/* Clean Sparkline SVG */}
              <div className="rounded-lg bg-white border border-black/8 p-2">
                <p className="text-[8px] text-[#6e6773] mb-1">Conversion Trend</p>
                <svg viewBox="0 0 120 40" className="w-full h-9" aria-hidden="true">
                  <path
                    d="M4,34 L22,29 L40,31 L58,20 L78,16 L98,10 L116,4"
                    fill="none"
                    stroke="#0b728c"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <p className="mt-2 font-mono text-[8px] text-[#6e6773] tabular-nums">
                99.98% Vercel Uptime
              </p>
            </div>
          </div>

          {/* Right: 2x2 Frosted Paper Metric Cards */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {IMPACT_METRICS.map((item) => (
              <div
                key={item.value}
                className="rounded-2xl bg-[var(--surface-card)]/78 border border-white/80 p-6 sm:p-7 shadow-[var(--shadow-paper)]"
              >
                <p className="font-editorial font-black text-4xl sm:text-[42px] text-[var(--ink)] tracking-tight leading-none tabular-nums mb-2.5">
                  {item.value}
                </p>
                <p className="text-xs sm:text-[13px] text-[var(--ink-muted)] leading-relaxed">
                  {item.caption}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/**
 * 4. "What they say" References Section
 *    - layout="stacked": Full-width stacked paper quote cards (Matches Reference Screenshot 1)
 *    - layout="grid": 3-column horizontal quote cards (Matches Reference Screenshot 7)
 */
export function ReferencesSection({
  layout = "stacked",
  showHeading = true,
}: {
  layout?: "stacked" | "grid";
  showHeading?: boolean;
}) {
  return (
    <section className="py-12 sm:py-20 px-5 sm:px-8 lg:px-12">
      <div className="max-w-6xl mx-auto">
        {showHeading && (
          <div className="mb-8 sm:mb-10">
            <div className="inline-flex items-center gap-2 text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.18em] text-[var(--ink-muted)] mb-3.5">
              <SparkleMark className="w-3 h-3 text-[var(--accent)]" />
              <span>References</span>
            </div>
            <h2 className="font-editorial font-black text-[clamp(2.6rem,6.5vw,5rem)] leading-[0.95] tracking-[-0.03em] text-[var(--ink)]">
              What they say
            </h2>
          </div>
        )}

        {layout === "stacked" ? (
          <div className="space-y-4">
            {CLIENT_REFERENCES.map((ref) => (
              <blockquote
                key={ref.author}
                className="rounded-2xl bg-[var(--surface-card)]/72 border border-white/80 px-6 sm:px-8 py-6 sm:py-7 shadow-[0_8px_24px_-14px_rgba(24,19,26,0.12)]"
              >
                <p className="font-editorial text-base sm:text-[17px] font-semibold text-[var(--ink)] leading-relaxed mb-6">
                  “{ref.quote}”
                </p>
                <footer>
                  <p className="text-xs sm:text-[13px] font-bold text-[var(--ink)]">
                    {ref.author}
                  </p>
                  <p className="text-[11px] sm:text-xs text-[var(--ink-soft)] mt-0.5">
                    {ref.role}
                  </p>
                </footer>
              </blockquote>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5">
            {CLIENT_REFERENCES.map((ref) => (
              <blockquote
                key={ref.author}
                className="rounded-2xl bg-[var(--surface-card)]/75 border border-white/80 p-6 sm:p-7 flex flex-col justify-between shadow-[0_8px_24px_-14px_rgba(24,19,26,0.12)]"
              >
                <p className="font-editorial text-[15px] sm:text-base font-semibold text-[var(--ink)] leading-relaxed mb-8">
                  “{ref.quote}”
                </p>
                <footer>
                  <p className="text-xs sm:text-[13px] font-bold text-[var(--ink)]">
                    {ref.author}
                  </p>
                  <p className="text-[11px] text-[var(--ink-soft)] mt-0.5">
                    {ref.role}
                  </p>
                </footer>
              </blockquote>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

/**
 * 5. Professional Experience & Track Record (Synced with Updated Frontend Dev CV)
 *    Placed directly under "What I do, properly" on the About page
 */
export function ExperienceTrackRecordSection() {
  return (
    <section
      id="experience"
      className="py-14 sm:py-20 px-5 sm:px-8 lg:px-12 border-t border-dashed border-[var(--border-hairline)]"
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 sm:mb-14">
          <div>
            <div className="inline-flex items-center gap-2 text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.18em] text-[var(--ink-muted)] mb-3.5">
              <SparkleMark className="w-3 h-3 text-[var(--accent)]" />
              <span>Experience &amp; Track Record</span>
            </div>
            <h2 className="font-editorial font-black text-[clamp(2.5rem,6vw,4.6rem)] leading-[0.96] tracking-[-0.03em] text-[var(--ink)]">
              Where I&apos;ve{" "}
              <span className="italic text-[var(--accent)]">shipped</span>
            </h2>
          </div>

          <a
            href={RESUME_PDF_URL}
            target="_blank"
            rel="noopener noreferrer"
            download="Tobiloba_Akala_Frontend_Developer_Resume.pdf"
            className="inline-flex items-center gap-2 self-start md:self-end px-5 py-2.5 rounded-full bg-[var(--ink)] text-white text-xs sm:text-sm font-semibold hover:opacity-90 transition-opacity whitespace-nowrap shrink-0"
          >
            <span>Download Updated CV</span>
            <Download size={14} />
          </a>
        </div>

        {/* Clean Numbered Editorial Experience Ledger */}
        <ol className="divide-y divide-[var(--border-hairline)] border-t-2 border-[var(--ink)]">
          {EXPERIENCE_HISTORY.map((item) => (
            <li
              key={`${item.org}-${item.num}`}
              className="py-7 sm:py-9 grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-8"
            >
              {/* Left Metadata Column */}
              <div className="lg:col-span-4">
                <div className="flex items-baseline gap-3 mb-1.5">
                  <span className="font-mono text-xs font-semibold text-[var(--ink-soft)] tabular-nums">
                    {item.num}
                  </span>
                  <span className="font-mono text-xs text-[var(--accent)] font-semibold tabular-nums">
                    {item.period}
                  </span>
                </div>
                <h3 className="font-editorial font-black text-2xl text-[var(--ink)] leading-tight">
                  {item.org}
                </h3>
                <p className="text-sm font-bold text-[var(--ink)] mt-1">
                  {item.role}
                </p>
                <p className="text-xs text-[var(--ink-muted)] mt-1">
                  {item.meta}
                </p>
              </div>

              {/* Right Impact Bullets */}
              <div className="lg:col-span-8">
                <ul className="space-y-2.5">
                  {item.points.map((pt, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-3 text-sm sm:text-[15px] text-[var(--ink-muted)] leading-relaxed"
                    >
                      <span
                        className="mt-2 w-1.5 h-1.5 rounded-full bg-[var(--accent)] shrink-0"
                        aria-hidden="true"
                      />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>

        {/* Selected Impact Summary Strip from CV */}
        <div className="mt-8 rounded-2xl bg-[var(--surface-card)]/78 border border-white/80 p-6 sm:p-7 shadow-[var(--shadow-paper)] grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div>
            <p className="font-editorial font-black text-2xl sm:text-3xl text-[var(--ink)] tabular-nums leading-none mb-1.5">
              35+ / 15+
            </p>
            <p className="text-xs text-[var(--ink-muted)] leading-relaxed">
              Live deployed projects &amp; client solutions across e-commerce, booking systems, and business sites.
            </p>
          </div>
          <div>
            <p className="font-editorial font-black text-2xl sm:text-3xl text-[var(--ink)] tabular-nums leading-none mb-1.5">
              65% Less API Load
            </p>
            <p className="text-xs text-[var(--ink-muted)] leading-relaxed">
              Optimized CineScope&apos;s TMDB search architecture with debounced queries and 98%+ Lighthouse builds.
            </p>
          </div>
          <div>
            <p className="font-editorial font-black text-2xl sm:text-3xl text-[var(--ink)] tabular-nums leading-none mb-1.5">
              AI &amp; Full-Stack
            </p>
            <p className="text-xs text-[var(--ink-muted)] leading-relaxed">
              Hands-on work spanning LearnIQ AI notes, Gemini Vision image tools, Supabase, and real-time Firebase apps.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/**
 * 6. Two-Column "Toolkit — Skills" & "Education — Schooled" Section
 *    Matches Reference Screenshot 7 (bottom half)
 */
export function SkillsAndEducationSection() {
  return (
    <section className="py-12 sm:py-16 px-5 sm:px-8 lg:px-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
        {/* Left: Toolkit / Skills */}
        <div>
          <div className="inline-flex items-center gap-2 text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.18em] text-[var(--ink-muted)] mb-3">
            <SparkleMark className="w-3 h-3 text-[var(--accent)]" />
            <span>Toolkit</span>
          </div>
          <h2 className="font-editorial font-black text-4xl sm:text-5xl text-[var(--ink)] tracking-tight leading-none mb-6">
            Skills
          </h2>
          <div className="flex flex-wrap gap-2.5">
            {SKILLS_LIST.map((skill) => (
              <span
                key={skill}
                className="px-4 py-2 rounded-full bg-[var(--surface-card)]/75 border border-white/80 text-xs sm:text-[13px] font-medium text-[var(--ink)] shadow-[0_4px_12px_-8px_rgba(24,19,26,0.16)]"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Right: Education / Schooled */}
        <div>
          <div className="inline-flex items-center gap-2 text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.18em] text-[var(--ink-muted)] mb-3">
            <SparkleMark className="w-3 h-3 text-[var(--accent)]" />
            <span>Education</span>
          </div>
          <h2 className="font-editorial font-black text-4xl sm:text-5xl text-[var(--ink)] tracking-tight leading-none mb-6">
            Schooled
          </h2>
          <div className="flex flex-col items-start gap-2.5">
            {EDUCATION_LIST.map((entry) => (
              <span
                key={entry}
                className="px-4 py-2.5 rounded-full bg-[var(--surface-card)]/75 border border-white/80 text-xs sm:text-[13px] font-medium text-[var(--ink)] shadow-[0_4px_12px_-8px_rgba(24,19,26,0.16)]"
              >
                {entry}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/**
 * 6. "Brands and Contact — Let's talk" Floating Brand Sticker Cloud + Oversized Email
 *    Matches Reference Screenshot 2
 */
export function BrandsAndContactSection() {
  return (
    <section className="py-14 sm:py-22 px-5 sm:px-8 lg:px-12">
      <div className="max-w-5xl mx-auto">
        <div className="inline-flex items-center gap-2 text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.18em] text-[var(--ink-muted)] mb-4">
          <SparkleMark className="w-3 h-3 text-[var(--accent)]" />
          <span>Brands and Contact</span>
        </div>

        <h2 className="font-editorial font-black text-[clamp(3rem,7.5vw,5.6rem)] leading-[0.94] tracking-[-0.03em] text-[var(--ink)] mb-8 sm:mb-10">
          Let&apos;s talk
        </h2>

        {/* Playful Tilted Brand Sticker Cloud */}
        <div className="flex flex-wrap items-center gap-3 sm:gap-3.5 max-w-2xl mb-12 sm:mb-14">
          {CLIENT_BRAND_STICKERS.map((brand) => (
            <div
              key={brand.name}
              style={{ transform: `rotate(${brand.tilt})` }}
              className="inline-flex items-center gap-2.5 pl-2.5 pr-4 py-2 rounded-full bg-[var(--surface-card)] border border-white/90 text-[var(--ink)] shadow-[0_8px_20px_-10px_rgba(24,19,26,0.2)] hover:scale-[1.04] hover:rotate-0 transition-transform duration-200 select-none"
            >
              <span
                className="w-7 h-7 rounded-full flex items-center justify-center font-mono text-[10px] font-bold tracking-tight shrink-0"
                style={{ backgroundColor: brand.bg, color: brand.fg }}
                aria-hidden="true"
              >
                {brand.monogram}
              </span>
              <span className="font-editorial font-black text-sm sm:text-base tracking-tight whitespace-nowrap">
                {brand.name}
              </span>
            </div>
          ))}
        </div>

        {/* Oversized Underlined Direct Email */}
        <a
          href="mailto:tobilobaakala@gmail.com"
          className="inline-block font-editorial font-black text-[clamp(1.65rem,4.4vw,3.1rem)] text-[var(--ink)] underline decoration-2 underline-offset-[8px] hover:text-[var(--accent)] transition-colors break-all mb-7"
        >
          tobilobaakala@gmail.com
        </a>

        {/* Horizontal Micro-Link Strip */}
        <div className="flex flex-wrap items-center gap-x-6 gap-y-2.5 text-[11px] sm:text-xs font-bold uppercase tracking-[0.14em] text-[var(--ink)]">
          <a
            href="https://wa.me/2347032533869"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[var(--accent)] transition-colors whitespace-nowrap"
          >
            +234 703 253 3869
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
          <Link
            to="/projects"
            className="hover:text-[var(--accent)] transition-colors whitespace-nowrap"
          >
            See the full work
          </Link>
        </div>
      </div>
    </section>
  );
}
