import { Suspense, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { ArrowRight, Disc3, ExternalLink } from "lucide-react";
import SEOHead from "../SEO/SEOHead";
import { projectsData, ProjectItem } from "../../data/projectsData";
import { useTheme } from "../../context/ThemeContext";
import { lazyWithRetry, prefetchRoute } from "../../utils/lazyWithRetry";

const ProjectModal = lazyWithRetry(
  () => import("../Projects/ProjectModal"),
  "projectModal"
);
import {
  SparkleMark,
  StickerPortrait,
  TOBI_PHOTOS,
} from "../ui/EditorialPrimitives";
import { LazyImage, LazyVideo } from "../ui/LazyMedia";
import {
  BrandStickerMarquee,
  BrandsAndContactSection,
  ByTheNumbersShowcase,
  CINESCOPE_PREVIEW_VIDEO,
  DarkPortfolioCarousel,
  ReferencesSection,
} from "../Editorial/EditorialSections";

const SCRAP_PATHS = [
  // Organic hand-cut uneven paper scraps with tiny corner snips matching Screenshot 1
  "M6,4 L24,1 L48,5 L74,2 L95,7 L93,28 L97,52 L94,81 L97,114 L77,118 L51,114 L26,119 L3,115 L7,88 L2,58 L6,30 Z",
  "M3,7 L28,3 L56,7 L82,2 L97,6 L94,35 L98,66 L93,95 L96,117 L71,113 L45,119 L19,114 L4,118 L6,86 L2,53 L6,25 Z",
  "M5,3 L26,8 L52,2 L79,7 L98,3 L94,27 L98,59 L95,91 L98,116 L80,113 L54,118 L27,113 L2,117 L5,87 L2,54 L6,24 Z",
  "M4,6 L30,2 L58,6 L85,3 L96,8 L93,33 L97,64 L94,94 L97,115 L74,119 L47,113 L21,118 L3,113 L6,82 L3,49 L7,21 Z",
  "M7,3 L31,7 L59,2 L84,6 L97,4 L94,31 L98,62 L93,93 L97,118 L72,114 L43,119 L18,114 L4,117 L7,85 L3,51 L6,22 Z",
  "M4,5 L25,2 L53,7 L78,2 L98,6 L95,30 L98,61 L94,90 L98,116 L76,113 L49,118 L24,114 L3,118 L6,89 L2,56 L5,26 Z",
  "M6,2 L29,6 L57,3 L83,7 L96,3 L93,34 L97,65 L94,95 L96,116 L70,119 L44,113 L19,117 L4,113 L6,84 L2,52 L5,23 Z",
  "M3,6 L27,2 L54,6 L81,2 L98,7 L94,32 L98,63 L94,92 L97,117 L75,113 L48,118 L22,113 L2,116 L6,86 L3,53 L5,24 Z",
];

const CUTOUT_LETTERS = [
  { char: "T", variant: "paper", tileTilt: "-2.4deg", charTilt: "-1.5deg", scrap: 0 },
  { char: "O", variant: "cream", tileTilt: "2.1deg", charTilt: "1.5deg", scrap: 1 },
  { char: "B", variant: "ink", tileTilt: "-2.2deg", charTilt: "2deg", scrap: 2 },
  { char: "I", variant: "paper", tileTilt: "1.8deg", charTilt: "-1.2deg", scrap: 3 },
  { char: "L", variant: "cream", tileTilt: "-1.9deg", charTilt: "1.8deg", scrap: 4 },
  { char: "O", variant: "ink-cyan", tileTilt: "2.3deg", charTilt: "-1.5deg", scrap: 5 },
  { char: "B", variant: "paper", tileTilt: "-1.6deg", charTilt: "1deg", scrap: 6 },
  { char: "A", variant: "ink", tileTilt: "2.1deg", charTilt: "-2deg", scrap: 7 },
] as const;

const SPOTIFY_URL =
  "https://open.spotify.com/playlist/37i9dQZF1DXdl8xYyG9Dm1?si=Jar_msbbQ1Gg3i5-XXiH8g&utm_source=copy-link&pi=tJP3I8PnRL2h3";

export default function Home() {
  const { openBooking, reduceMotion, visitorName, reopenWelcome, mood } = useTheme();
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [videoFailed, setVideoFailed] = useState(false);

  // CineScope is guaranteed to be index 0 per project order rule
  const featuredProject = projectsData[0];

  const homeSchema = [
    {
      "@type": "Person",
      "@id": "https://www.buildwithtobi.online/#person",
      name: "Tobiloba Akala",
      alternateName: ["BuildWithTobi", "Tobi Akala"],
      url: "https://www.buildwithtobi.online/",
      image:
        "https://res.cloudinary.com/dw8jtwbka/image/upload/f_auto,q_auto,w_800/v1780309581/refined_profile_picture_keiybp.png",
      jobTitle: "Web Developer & Frontend Specialist",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Lagos",
        addressCountry: "NG",
      },
      sameAs: [
        "https://github.com/realtee01",
        "https://x.com/realtee1111101",
        "https://ng.linkedin.com/in/tobiloba-akala-35448a38b",
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://www.buildwithtobi.online/#website",
      url: "https://www.buildwithtobi.online/",
      name: "BuildWithTobi | Tobiloba Akala Portfolio",
      author: { "@id": "https://www.buildwithtobi.online/#person" },
      inLanguage: "en-US",
    },
  ];

  const quickNavCards = [
    {
      kicker: "Web Apps & Case Studies",
      title: "Work",
      to: "/projects",
      thumb:
        "https://res.cloudinary.com/dw8jtwbka/image/upload/v1795390033/83d76c380d986c7d61fbd071eae09c06_e7xdxx.png",
      thumbBg: "#f5f3f6",
      fit: "contain" as const,
    },
    {
      kicker: "Story, Stack & CV",
      title: "About",
      to: "/about",
      thumb: TOBI_PHOTOS.balcony,
      thumbBg: "var(--bg-band)",
      fit: "cover" as const,
    },
    {
      kicker: "Writing & Notes",
      title: "Journal",
      to: "/blog",
      thumb:
        "https://res.cloudinary.com/dw8jtwbka/image/upload/v1795389946/b38ed4bb874e04b873d044c2fdda37d2_njgiln.png",
      thumbBg: "#f5f3f6",
      fit: "contain" as const,
    },
  ];

  return (
    <div className="relative overflow-x-clip">
      <section className="relative pt-24 sm:pt-28 pb-10 sm:pb-14 px-4 sm:px-8 lg:px-12">
      <SEOHead
        title="Tobiloba Akala | Web Developer & Frontend Specialist (BuildWithTobi)"
        description="Official portfolio of Tobiloba Akala (BuildWithTobi) - Web Developer & Frontend Specialist in Lagos, Nigeria. Engineering high-converting websites and scalable React web applications."
        canonicalPath="/"
        keywords="Tobiloba Akala, BuildWithTobi, Web Developer Nigeria, Frontend Developer Lagos, React Developer Nigeria, Software Engineer Portfolio"
        jsonLd={homeSchema}
      />

      <div className="max-w-[1360px] mx-auto">
        {/* Hand-Cut Paper Scrap Ransom-Note Name Banner matching Reference Screenshot 1 */}
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-4 sm:grid-cols-8 gap-1.5 sm:gap-2.5 lg:gap-3 max-w-[1140px] mx-auto pt-2 sm:pt-4"
          aria-label="Tobiloba"
        >
          {CUTOUT_LETTERS.map((item, idx) => {
            const isDark = item.variant === "ink" || item.variant === "ink-cyan";
            const paperFill = isDark
              ? "#151216"
              : item.variant === "cream"
              ? "var(--surface-cream)"
              : "#f2eff2";

            const letterColor =
              item.variant === "ink-cyan"
                ? mood === "mono"
                  ? "#f4f3ef"
                  : "#67e8f9"
                : item.variant === "ink"
                ? "var(--cutout-black-letter)"
                : "var(--ink)";

            return (
              <motion.div
                key={`${item.char}-${idx}`}
                whileHover={reduceMotion ? undefined : { y: -5, rotate: 0, scale: 1.03 }}
                transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                style={{ transform: `rotate(${item.tileTilt})` }}
                className="relative aspect-[5/6] flex items-center justify-center select-none drop-shadow-[0_6px_10px_rgba(24,19,26,0.14)] sm:drop-shadow-[0_10px_18px_rgba(24,19,26,0.16)]"
              >
                {/* Organic Hand-Torn Paper Scrap SVG Backdrop */}
                <svg
                  viewBox="0 0 100 120"
                  preserveAspectRatio="none"
                  aria-hidden="true"
                  className="absolute inset-0 w-full h-full overflow-visible"
                >
                  <path d={SCRAP_PATHS[item.scrap]} fill={paperFill} />
                </svg>

                {/* Chunky Rounded Retro Cutout Letter */}
                <span
                  style={{
                    color: letterColor,
                    transform: `rotate(${item.charTilt})`,
                  }}
                  className="relative z-10 font-cutout font-normal text-[clamp(2.85rem,7.8vw,6.6rem)] leading-none tracking-tight block"
                >
                  {item.char}
                </span>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Main 3-Column Asymmetric Editorial Composition */}
        <div className="relative grid grid-cols-1 lg:grid-cols-12 items-center gap-10 lg:gap-6 mt-6 lg:-mt-8 mb-12 sm:mb-14">
          {/* Left Column: Personalized Handwritten Greeting + Value Proposition + CTAs */}
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.45, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-4 order-2 lg:order-1 max-w-md mx-auto lg:mx-0 text-center lg:text-left"
          >
            <button
              type="button"
              onClick={reopenWelcome}
              title="Click to update your name"
              className="font-hand text-3xl sm:text-[38px] font-bold text-[var(--accent)] -rotate-2 mb-3 leading-none hover:opacity-80 transition-opacity cursor-pointer inline-block bg-transparent border-0 p-0"
            >
              {visitorName ? `hi ${visitorName},` : "hey there,"}
            </button>

            <h1 className="text-[19px] sm:text-[21px] font-bold text-[var(--ink)] tracking-tight leading-snug mb-3 text-balance">
              I build web apps people actually use.
            </h1>

            <p className="text-[15px] text-[var(--ink-muted)] leading-relaxed mb-7">
              React, TypeScript, Next.js and the architecture behind it. Startups,
              founders and agencies trust me to ship fast, conversion-focused
              products that score 98+ out of the box.
            </p>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3">
              <Link
                to="/projects"
                onMouseEnter={() => prefetchRoute("/projects")}
                onTouchStart={() => prefetchRoute("/projects")}
                className="group btn-anim-blue inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[var(--ink)] text-white text-sm font-semibold shadow-sm whitespace-nowrap shrink-0"
              >
                <span className="relative z-10">See the work</span>
                <ArrowRight
                  size={15}
                  className="relative z-10 transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>

              <button
                type="button"
                onClick={() => openBooking("Web App / MVP")}
                className="group btn-anim-blue inline-flex items-center gap-2 px-6 py-3 rounded-full border border-[var(--border-strong)] bg-transparent text-[var(--ink)] text-sm font-semibold cursor-pointer whitespace-nowrap shrink-0"
              >
                <span className="relative z-10">Book a call</span>
              </button>
            </div>
          </motion.div>

          {/* Center Column: Overlapping True Silhouette Die-Cut Sticker Portrait */}
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, scale: 0.96, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.04, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-4 order-1 lg:order-2 flex justify-center relative z-10 lg:-mt-4"
          >
            <StickerPortrait
              src={TOBI_PHOTOS.heroCutout}
              alt="Tobiloba Akala - Frontend & Full-Stack Web Developer"
              className="w-[300px] h-[390px] sm:w-[350px] sm:h-[455px] lg:w-[390px] lg:h-[495px] hover:-translate-y-1 transition-transform duration-300"
              tilt="-0.8deg"
              priority
            />
          </motion.div>

          {/* Right Column: Tilted CineScope Live Preview Card + Now Playing Spotify Widget */}
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, x: 16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.45, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-4 order-3 flex flex-col items-center lg:items-end gap-5"
          >
            {/* Tilted Featured Build Phone/Card Preview (CineScope) */}
            {featuredProject && (
              <button
                type="button"
                onClick={() => setSelectedProject(featuredProject)}
                className="group relative w-[230px] sm:w-[248px] bg-[#161218] rounded-[1.85rem] p-3 border-[4px] border-white shadow-[0_20px_38px_-14px_rgba(24,19,26,0.34)] rotate-[3deg] hover:rotate-0 hover:-translate-y-1 transition-all duration-300 text-left cursor-pointer"
                aria-label={`Open ${featuredProject.title} case study`}
              >
                <div className="relative aspect-[9/11] rounded-[1.25rem] overflow-hidden bg-[#1e1824] flex flex-col justify-between p-3.5">
                  {!videoFailed ? (
                    <>
                      <LazyVideo
                        src={CINESCOPE_PREVIEW_VIDEO}
                        poster={featuredProject.imgPath}
                        eager
                        reduceMotion={reduceMotion}
                        loopEndSeconds={5.5}
                        onError={() => setVideoFailed(true)}
                        className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#120d16]/95 via-[#120d16]/45 via-45% to-[#120d16]/20" />
                    </>
                  ) : featuredProject.imgPath ? (
                    <>
                      <LazyImage
                        src={featuredProject.imgPath}
                        alt={`${featuredProject.title} Featured Build`}
                        maxWidth={480}
                        wrapperClassName="absolute inset-0 w-full h-full"
                        className="w-full h-full object-cover opacity-95 group-hover:scale-105 transition-transform duration-500"
                        fallback={
                          <div className="absolute inset-0 bg-gradient-to-br from-[#2a1834] via-[#18131a] to-[#0f2930]" />
                        }
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#120d16] via-[#120d16]/45 via-45% to-transparent" />
                    </>
                  ) : (
                    <div className="absolute inset-0 bg-gradient-to-br from-[#2a1834] via-[#18131a] to-[#0f2930]" />
                  )}

                  {/* Top Badge inside Dark Frame */}
                  <div className="relative z-10 inline-flex items-center gap-1.5 self-start px-3 py-1 rounded-full bg-white text-[#18131A] text-[10px] font-bold uppercase tracking-[0.14em]">
                    <SparkleMark className="w-2.5 h-2.5 text-[var(--accent)]" />
                    <span>Featured Build</span>
                  </div>

                  {/* Bottom Details inside Frame */}
                  <div className="relative z-10 text-white">
                    <p className="font-mono text-[10px] text-[#00e5ff] mb-1 tabular-nums">
                      01 · 98 Lighthouse
                    </p>
                    <p className="font-editorial text-xl font-black leading-tight mb-1">
                      {featuredProject.title}
                    </p>
                    <p className="text-[11px] text-white/80 leading-snug line-clamp-2 mb-2.5">
                      Real-time cinematic discovery app with &lt;400ms search.
                    </p>
                    <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-white group-hover:text-[#00e5ff] transition-colors">
                      <span>Inspect case study</span>
                      <ArrowRight size={12} />
                    </span>
                  </div>
                </div>
              </button>
            )}

            {/* Crisp Ink-Bordered Spotify NOW PLAYING Card */}
            <a
              href={SPOTIFY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group btn-anim-blue w-full max-w-[270px] bg-[var(--surface-card)]/90 border-[1.5px] border-[var(--border-strong)] rounded-2xl p-3 flex items-center gap-3.5 shadow-[var(--shadow-paper)]"
            >
              <div className="relative z-10 w-12 h-12 rounded-xl bg-[#18131A] group-hover:bg-white/20 flex items-center justify-center text-[#c770f0] group-hover:text-white shrink-0 overflow-hidden transition-colors duration-300">
                <Disc3 className={`w-7 h-7 ${reduceMotion ? "" : "animate-vinyl"}`} />
              </div>
              <div className="relative z-10 min-w-0 flex-1">
                <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-[var(--accent)] group-hover:text-sky-200 transition-colors duration-300">
                  Now Playing
                </p>
                <p className="text-sm font-bold text-[var(--ink)] group-hover:text-white truncate transition-colors duration-300">
                  Coding &amp; Focus Mode
                </p>
                <p className="text-[11px] text-[var(--ink-muted)] group-hover:text-white/85 truncate flex items-center gap-1 transition-colors duration-300">
                  <span>Spotify · Tobi&apos;s rotation</span>
                  <ExternalLink
                    size={10}
                    className="opacity-70 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300"
                  />
                </p>
              </div>
            </a>
          </motion.div>
        </div>

        {/* Bottom 3 Horizontal Frosted-Paper Quick-Navigation Cards */}
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.16, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-5xl mx-auto"
        >
          {quickNavCards.map((card) => (
            <Link
              key={card.title}
              to={card.to}
              onMouseEnter={() => prefetchRoute(card.to)}
              onTouchStart={() => prefetchRoute(card.to)}
              onFocus={() => prefetchRoute(card.to)}
              className="group flex items-center justify-between gap-4 p-3.5 sm:p-4 rounded-[1.35rem] bg-[var(--surface-card)]/82 hover:bg-[var(--surface-card)] border border-white/85 shadow-[var(--shadow-paper)] transition-all duration-200 hover:-translate-y-0.5"
            >
              <div className="flex items-center gap-3.5 min-w-0">
                <div
                  className="w-12 h-12 rounded-xl overflow-hidden shrink-0 flex items-center justify-center border border-black/5"
                  style={{ backgroundColor: card.thumbBg }}
                >
                  <LazyImage
                    src={card.thumb}
                    alt={card.title}
                    maxWidth={160}
                    wrapperClassName="w-full h-full"
                    placeholderClassName="bg-black/[0.04]"
                    className={
                      card.fit === "contain"
                        ? "w-full h-full object-contain p-1"
                        : "w-full h-full object-cover object-top"
                    }
                  />
                </div>
                <div className="min-w-0">
                  <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-[var(--ink-soft)] truncate">
                    {card.kicker}
                  </p>
                  <p className="font-editorial text-2xl font-black text-[var(--ink)] leading-tight group-hover:text-[var(--accent)] transition-colors">
                    {card.title}
                  </p>
                </div>
              </div>

              <span className="w-9 h-9 rounded-full border border-[var(--border-hairline)] group-hover:border-[var(--ink)] group-hover:bg-[var(--ink)] group-hover:text-white text-[var(--ink)] flex items-center justify-center transition-colors shrink-0">
                <ArrowRight size={15} />
              </span>
            </Link>
          ))}
        </motion.div>
      </div>
      </section>

      {/* Dark Torn-Paper Horizontal Portfolio Carousel ("The portfolio") */}
      <DarkPortfolioCarousel onSelectProject={(project) => setSelectedProject(project)} />

      {/* Dark Full-Bleed Client & Project Sticker Ribbon Marquee */}
      <BrandStickerMarquee />

      {/* "Production, By The Numbers" Overlapping Device Mockups + 2x2 Metrics */}
      <ByTheNumbersShowcase />

      {/* "References — What they say" Stacked Editorial Quote Cards */}
      <ReferencesSection layout="stacked" showHeading />

      {/* "Brands and Contact — Let's talk" Floating Sticker Cloud + Oversized Email */}
      <BrandsAndContactSection />

      {/* Immersive Case Study Modal loaded on-demand when a project card is clicked */}
      {selectedProject && (
        <Suspense fallback={null}>
          <ProjectModal
            isOpen={true}
            onClose={() => setSelectedProject(null)}
            title={selectedProject.title}
            details={selectedProject.details || null}
            slug={selectedProject.slug}
            imgPath={selectedProject.imgPath}
            category={selectedProject.category}
            year={selectedProject.year}
            metrics={selectedProject.metrics}
            clientOrContext={selectedProject.clientOrContext}
            demoLink={selectedProject.demoLink}
            ghLink={selectedProject.ghLink}
          />
        </Suspense>
      )}
    </div>
  );
}
