import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { Download } from "lucide-react";
import SEOHead from "../SEO/SEOHead";
import { useTheme } from "../../context/ThemeContext";
import {
  SparkleMark,
  StickerPortrait,
  CurvedArrow,
  TOBI_PHOTOS,
  RESUME_PDF_URL,
} from "../ui/EditorialPrimitives";
import {
  ExperienceTrackRecordSection,
  ReferencesSection,
  SkillsAndEducationSection,
} from "../Editorial/EditorialSections";

const QUICK_FACTS = [
  { label: "Based in", value: "Lagos, Nigeria" },
  { label: "Doing this since", value: "2023 — 3+ yrs · 35+ deployed builds" },
  { label: "Right now", value: "B.Sc. CS @ UNILAG & PeakEcho Digitals" },
  { label: "Off screen", value: "Gaming, tech writing, music & travel" },
];

const FRONTEND_CAPABILITIES = [
  {
    num: "01",
    title: "React & Next.js web apps",
    desc: "Fast, modular interfaces engineered for real users and clean maintenance.",
  },
  {
    num: "02",
    title: "TypeScript component systems",
    desc: "Strict type safety and scalable design tokens that hold up as teams grow.",
  },
  {
    num: "03",
    title: "Conversion-focused websites",
    desc: "Editorial visual hierarchy designed to earn trust and drive bookings.",
  },
  {
    num: "04",
    title: "Fluid motion & craft",
    desc: "Compositor-smooth interactions that feel physical without slowing anything down.",
  },
  {
    num: "05",
    title: "Core Web Vitals & technical SEO",
    desc: "98+ Lighthouse performance, sub-second loads, and structured metadata.",
  },
];

const FULLSTACK_CAPABILITIES = [
  {
    num: "01",
    title: "Custom SaaS & product MVPs",
    desc: "Taking product ideas from Figma or rough notes straight into production.",
  },
  {
    num: "02",
    title: "Supabase & Firebase backends",
    desc: "Auth, relational databases, Row-Level Security, and real-time sync.",
  },
  {
    num: "03",
    title: "Booking & payment workflows",
    desc: "Concurrency-safe scheduling and seamless checkout experiences.",
  },
  {
    num: "04",
    title: "API & data layer architecture",
    desc: "Debounced search, smart caching, resilient error states, zero jank.",
  },
  {
    num: "05",
    title: "Speed audits & rebuilds",
    desc: "Turning sluggish legacy sites into crisp, modern web applications.",
  },
];

export default function About() {
  const { reduceMotion } = useTheme();

  const aboutSchema = [
    {
      "@type": "ProfilePage",
      "@id": "https://www.buildwithtobi.online/about#webpage",
      url: "https://www.buildwithtobi.online/about",
      name: "About Tobiloba Akala | Web Developer & Frontend Specialist",
      about: { "@id": "https://www.buildwithtobi.online/#person" },
      inLanguage: "en-US",
    },
  ];

  return (
    <div className="relative pt-28 sm:pt-36 pb-16 sm:pb-24 px-5 sm:px-8 lg:px-12">
      <SEOHead
        title="About Tobiloba Akala | Web Developer & Frontend Specialist"
        description="Learn about Tobiloba Akala (BuildWithTobi) — Computer Science student at UNILAG and full-stack frontend engineer in Lagos building production web apps."
        canonicalPath="/about"
        keywords="About Tobiloba Akala, BuildWithTobi, Frontend Developer Lagos, UNILAG Computer Science, React Engineer Nigeria"
        jsonLd={aboutSchema}
      />

      <div className="max-w-6xl mx-auto">
        {/* Top Split Editorial Bio + Annotated Sticker Portrait (Reference 8) */}
        <section className="grid grid-cols-1 lg:grid-cols-12 items-start gap-14 lg:gap-10 pb-16 sm:pb-24">
          {/* Left Column: Hi, I'm Tobiloba + Story Card + 2x2 Quick Facts */}
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6"
          >
            <div className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.16em] text-[var(--ink-muted)] mb-5">
              <SparkleMark className="w-3 h-3 text-[var(--accent)]" />
              <span>About</span>
            </div>

            <h1 className="font-editorial font-black text-[clamp(3.3rem,8vw,5.8rem)] leading-[0.92] tracking-[-0.03em] text-[var(--ink)] mb-7">
              Hi, I&apos;m
              <br />
              <span className="italic text-[var(--accent)]">Tobiloba.</span>
            </h1>

            <p className="text-base sm:text-[17px] text-[var(--ink-muted)] leading-relaxed max-w-lg mb-9">
              A full-stack web developer and frontend specialist with a sharp eye
              for craft and speed. I design interfaces, write clean TypeScript,
              architect backends, and ship digital products that turn visitors
              into customers. Currently studying Computer Science at UNILAG.
            </p>

            {/* Taped "how it started" Editorial Story Card */}
            <div className="relative bg-[var(--surface-card)]/85 border border-white/85 rounded-2xl p-6 sm:p-7 shadow-[var(--shadow-paper)] mb-6">
              <span className="inline-block -mt-10 mb-2 px-3 py-0.5 bg-[var(--bg-band)] text-[var(--ink)] font-hand text-xl font-bold -rotate-2 shadow-xs">
                how it started
              </span>
              <p className="text-sm sm:text-[15px] text-[var(--ink-muted)] leading-relaxed">
                It started with curiosity—inspecting websites late at night and
                rebuilding layouts from scratch just to see how they worked.
                Then a friend needed a site. Then founders and agencies reached
                out. Years later, turning rough ideas into fast, resilient web
                applications is still my favorite thing to do.
              </p>
            </div>

            {/* 2x2 Subtle Bordered Quick Facts Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-9">
              {QUICK_FACTS.map((fact) => (
                <div
                  key={fact.label}
                  className="rounded-2xl border border-[var(--border-hairline)] bg-white/35 px-4 py-3.5"
                >
                  <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-[var(--ink-soft)] mb-1">
                    {fact.label}
                  </p>
                  <p className="text-sm font-semibold text-[var(--ink)] leading-snug">
                    {fact.value}
                  </p>
                </div>
              ))}
            </div>

            {/* Download CV + See the Work Action Pair (Reference 4) */}
            <div className="flex flex-wrap items-center gap-3.5">
              <a
                href={RESUME_PDF_URL}
                target="_blank"
                rel="noopener noreferrer"
                download="Tobiloba_Akala_Frontend_Developer_Resume.pdf"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[var(--ink)] text-white text-sm font-semibold hover:opacity-90 transition-opacity whitespace-nowrap"
              >
                <span>Download CV</span>
                <Download size={15} />
              </a>
              <Link
                to="/projects"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-[var(--border-strong)] bg-transparent text-[var(--ink)] text-sm font-semibold hover:bg-[var(--ink)]/5 transition-colors whitespace-nowrap"
              >
                <span>See the work</span>
              </Link>
            </div>
          </motion.div>

          {/* Right Column: "What I do" + Sticker Portrait with Handwritten Curved Arrows */}
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 flex flex-col items-center lg:pt-8"
          >
            <h2 className="font-editorial font-black text-4xl sm:text-5xl text-[var(--ink)] tracking-tight mb-8 text-center">
              What I do
            </h2>

            <div className="relative flex items-center justify-center w-full max-w-[520px] py-4">
              {/* Top-Left Annotation */}
              <div className="hidden sm:flex items-center gap-1.5 absolute left-0 top-[26%] z-20 text-[var(--accent)]">
                <span className="font-hand text-2xl font-bold -rotate-3 whitespace-nowrap">
                  architects the UI
                </span>
                <CurvedArrow direction="right" className="w-11 h-5" />
              </div>

              {/* Bottom-Left Annotation */}
              <div className="hidden sm:flex items-center gap-1.5 absolute left-2 bottom-[20%] z-20 text-[var(--accent)]">
                <span className="font-hand text-2xl font-bold rotate-2 whitespace-nowrap">
                  debugs till 2am
                </span>
                <CurvedArrow direction="right" className="w-11 h-5" />
              </div>

              {/* Top-Right Annotation */}
              <div className="hidden sm:flex items-center gap-1.5 absolute right-0 top-[14%] z-20 text-[var(--accent)]">
                <CurvedArrow direction="left" className="w-11 h-5" />
                <span className="font-hand text-2xl font-bold rotate-2 whitespace-nowrap">
                  ships full-stack MVPs
                </span>
              </div>

              {/* Mid-Right Annotation */}
              <div className="hidden sm:flex items-center gap-1.5 absolute right-0 bottom-[32%] z-20 text-[var(--accent)]">
                <CurvedArrow direction="left" className="w-11 h-5" />
                <span className="font-hand text-2xl font-bold -rotate-2 whitespace-nowrap">
                  obsesses over speed
                </span>
              </div>

              {/* Central Silhouette Sticker Portrait */}
              <StickerPortrait
                src={TOBI_PHOTOS.aboutCutout}
                alt="Tobiloba Akala - What I do"
                className="w-[290px] h-[370px] sm:w-[340px] sm:h-[430px]"
                tilt="1deg"
              />
            </div>

            {/* Mobile-only clean inline summary of the handwritten callouts */}
            <p className="sm:hidden font-hand text-2xl text-[var(--accent)] text-center mt-4 leading-snug">
              architects the UI · ships full-stack MVPs · obsesses over speed · debugs till 2am
            </p>
          </motion.div>
        </section>

        {/* Capabilities Ledger: "What I do, properly" (Reference 4) */}
        <section
          id="capabilities"
          className="pt-14 sm:pt-20 border-t border-dashed border-[var(--border-hairline)]"
        >
          <div className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.16em] text-[var(--ink-muted)] mb-4">
            <SparkleMark className="w-3 h-3 text-[var(--accent)]" />
            <span>The Full List</span>
          </div>

          <h2 className="font-editorial font-black text-[clamp(2.6rem,6.5vw,4.8rem)] leading-[0.98] tracking-[-0.03em] text-[var(--ink)] mb-12 sm:mb-16">
            What I do, properly
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Column 1: Frontend & UI Craft */}
            <div>
              <div className="flex items-baseline justify-between gap-4 pb-3 border-b-2 border-[var(--ink)] mb-2">
                <h3 className="font-editorial font-black text-2xl sm:text-3xl text-[var(--ink)]">
                  Frontend &amp; UI Craft
                </h3>
                <span className="font-mono text-xs text-[var(--ink-muted)] tabular-nums">
                  05 things
                </span>
              </div>

              <ol className="divide-y divide-[var(--border-hairline)]">
                {FRONTEND_CAPABILITIES.map((item) => (
                  <li key={item.num} className="py-5 flex items-baseline gap-5">
                    <span className="font-mono text-xs font-semibold text-[var(--ink-soft)] tabular-nums shrink-0">
                      {item.num}
                    </span>
                    <div>
                      <h4 className="text-base font-bold text-[var(--ink)] mb-1">
                        {item.title}
                      </h4>
                      <p className="text-sm text-[var(--ink-muted)] leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>

            {/* Column 2: Full-Stack & Product */}
            <div>
              <div className="flex items-baseline justify-between gap-4 pb-3 border-b-2 border-[var(--ink)] mb-2">
                <h3 className="font-editorial font-black text-2xl sm:text-3xl text-[var(--ink)]">
                  Full-Stack &amp; Product
                </h3>
                <span className="font-mono text-xs text-[var(--ink-muted)] tabular-nums">
                  05 things
                </span>
              </div>

              <ol className="divide-y divide-[var(--border-hairline)]">
                {FULLSTACK_CAPABILITIES.map((item) => (
                  <li key={item.num} className="py-5 flex items-baseline gap-5">
                    <span className="font-mono text-xs font-semibold text-[var(--ink-soft)] tabular-nums shrink-0">
                      {item.num}
                    </span>
                    <div>
                      <h4 className="text-base font-bold text-[var(--ink)] mb-1">
                        {item.title}
                      </h4>
                      <p className="text-sm text-[var(--ink-muted)] leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>
      </div>

      {/* Professional Experience & Updated CV Track Record directly under What I do */}
      <div className="mt-10 sm:mt-16">
        <ExperienceTrackRecordSection />
      </div>

      {/* 3-Column Client References Grid + 2-Column Skills & Schooled (Reference Screenshot 7) */}
      <div className="border-t border-dashed border-[var(--border-hairline)]">
        <ReferencesSection layout="grid" showHeading={false} />
        <SkillsAndEducationSection />
      </div>
    </div>
  );
}
