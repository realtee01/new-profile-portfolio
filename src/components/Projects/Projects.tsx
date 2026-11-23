import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowDown, ArrowUpRight, ExternalLink, Github, BookOpen } from "lucide-react";
import SEOHead from "../SEO/SEOHead";
import ProjectModal from "./ProjectModal";
import { projectsData, ProjectItem } from "../../data/projectsData";
import { useTheme } from "../../context/ThemeContext";
import {
  SparkleMark,
  TornEdge,
  StickerPortrait,
  TOBI_PHOTOS,
} from "../ui/EditorialPrimitives";
import {
  BrandStickerMarquee,
  ReferencesSection,
} from "../Editorial/EditorialSections";
import { LazyImage } from "../ui/LazyMedia";

const CATEGORIES = ["All", "Web App", "Landing Page", "Web3", "E-commerce"] as const;

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const { openBooking, reduceMotion, visitorName } = useTheme();

  // CineScope remains index 0 in projectsData and first in "All" & "Web App"
  const filteredProjects = projectsData.filter((project) => {
    if (activeCategory === "All") return true;
    return project.category === activeCategory;
  });

  const projectsSchema = [
    {
      "@type": "ItemList",
      "@id": "https://www.buildwithtobi.online/projects#project-list",
      name: "Web Development Portfolio Projects - Tobiloba Akala",
      description:
        "Curated engineering case studies and web applications created by Tobiloba Akala (BuildWithTobi).",
      numberOfItems: projectsData.length,
      itemListElement: projectsData.map((project, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: project.title,
        description: project.description,
        url: `https://www.buildwithtobi.online/projects/${project.slug}`,
      })),
    },
  ];

  const scrollToShowcase = () => {
    document.getElementById("work-showcase")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="relative">
      <SEOHead
        title="Work & Case Studies | Tobiloba Akala (BuildWithTobi)"
        description="Explore 19+ production web applications, high-converting landing pages, and full-stack case studies engineered by Tobiloba Akala (BuildWithTobi)."
        canonicalPath="/projects"
        keywords="web development portfolio, React case studies, CineScope, Tobiloba Akala projects, BuildWithTobi"
        jsonLd={projectsSchema}
      />

      {/* Top Paper Hero matching Reference 3 */}
      <section className="pt-28 sm:pt-36 pb-16 sm:pb-24 px-5 sm:px-8 lg:px-12">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-12 lg:gap-8">
            {/* Left Copy & Metrics */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.16em] text-[var(--ink-muted)] mb-5">
                <SparkleMark className="w-3 h-3 text-[var(--accent)]" />
                <span>Work</span>
              </div>

              <h1 className="font-editorial font-black text-[clamp(3rem,7.2vw,5.4rem)] leading-[0.95] tracking-[-0.03em] text-[var(--ink)] mb-6 text-balance">
                Here&apos;s what I&apos;ve been{" "}
                <span className="italic text-[var(--accent)] block sm:inline">
                  building.
                </span>
              </h1>

              <p className="text-[15px] sm:text-base text-[var(--ink-muted)] leading-relaxed max-w-md mb-8">
                {visitorName ? `Hi ${visitorName}. ` : ""}Production web apps,
                high-converting business sites, booking platforms and full-stack
                MVPs. I architect most of them from zero and obsess over the
                speed of every single one.
              </p>

              <div className="flex flex-wrap items-center gap-3 mb-10">
                <button
                  type="button"
                  onClick={scrollToShowcase}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[var(--ink)] text-white text-xs sm:text-sm font-semibold hover:opacity-90 transition-opacity cursor-pointer whitespace-nowrap"
                >
                  <span>Browse the work</span>
                  <ArrowDown size={14} />
                </button>
                <button
                  type="button"
                  onClick={() => openBooking("Web App / MVP")}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-[var(--border-strong)] bg-transparent text-[var(--ink)] text-xs sm:text-sm font-semibold hover:bg-[var(--ink)]/5 transition-colors cursor-pointer whitespace-nowrap"
                >
                  <span>Work with me</span>
                </button>
              </div>

              {/* Clean Unboxed Tabular Stats Strip */}
              <div className="flex flex-wrap items-start gap-8 sm:gap-11 pt-2">
                <div>
                  <p className="font-editorial font-black text-2xl sm:text-3xl text-[var(--ink)] tabular-nums leading-none mb-1">
                    {projectsData.length}
                  </p>
                  <p className="text-xs text-[var(--ink-muted)]">
                    case studies here
                  </p>
                </div>
                <div>
                  <p className="font-editorial font-black text-2xl sm:text-3xl text-[var(--ink)] tabular-nums leading-none mb-1">
                    35+
                  </p>
                  <p className="text-xs text-[var(--ink-muted)]">
                    builds shipped
                  </p>
                </div>
                <div>
                  <p className="font-editorial font-black text-2xl sm:text-3xl text-[var(--ink)] tabular-nums leading-none mb-1">
                    98+
                  </p>
                  <p className="text-xs text-[var(--ink-muted)]">
                    Lighthouse benchmarks
                  </p>
                </div>
              </div>
            </div>

            {/* Right Duo-Outlined Full-Body Silhouette Cutout + Handwritten Note */}
            <div className="lg:col-span-5 flex flex-col items-center lg:items-end">
              <p className="font-hand text-xl sm:text-2xl font-semibold text-[var(--accent)] -rotate-3 mb-1 self-center lg:self-start lg:ml-2">
                shipped before the deadline. usually.
              </p>
              <StickerPortrait
                src={TOBI_PHOTOS.workCutout}
                alt="Tobiloba Akala - Selected Engineering Work"
                variant="duo-outline"
                className="w-[270px] h-[390px] sm:w-[310px] sm:h-[440px]"
                tilt="1.5deg"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Torn-Paper Transition into Tinted Band Showcase (References 3 & 5) */}
      <TornEdge fill="var(--bg-band)" />

      <section
        id="work-showcase"
        className="paper-band pt-12 sm:pt-16 pb-20 sm:pb-28 px-5 sm:px-8 lg:px-12"
      >
        <div className="max-w-5xl mx-auto">
          {/* Interactive Category Filter Controls */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-10 mb-12 border-b border-[var(--border-hairline)]">
            <div className="flex flex-wrap items-center gap-2" role="tablist" aria-label="Filter projects by category">
              {CATEGORIES.map((cat) => {
                const active = activeCategory === cat;
                return (
                  <button
                    key={cat}
                    type="button"
                    role="tab"
                    aria-selected={active}
                    onClick={() => setActiveCategory(cat)}
                    className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer whitespace-nowrap ${
                      active
                        ? "bg-[var(--ink)] text-white shadow-sm"
                        : "bg-white/55 hover:bg-white/85 text-[var(--ink)] border border-[var(--border-hairline)]"
                    }`}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>

            <p className="font-mono text-xs tabular-nums text-[var(--ink-muted)]">
              Showing {String(filteredProjects.length).padStart(2, "0")} of{" "}
              {String(projectsData.length).padStart(2, "0")} projects
            </p>
          </div>

          {/* Numbered Editorial Showcases (01/19, 02/19...) */}
          <div className="space-y-16 sm:space-y-24">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, index) => {
                const indexLabel = String(index + 1).padStart(2, "0");
                const totalLabel = String(filteredProjects.length).padStart(2, "0");

                return (
                  <motion.article
                    key={project.id}
                    initial={reduceMotion ? false : { opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    exit={reduceMotion ? undefined : { opacity: 0 }}
                    viewport={{ once: true, amount: 0.08 }}
                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    className="scroll-mt-28 cv-auto"
                  >
                    {/* Header Row: 01/19 + Bold Editorial Title */}
                    <div className="flex flex-wrap items-baseline justify-between gap-4 mb-5">
                      <div className="flex items-baseline gap-1 font-editorial">
                        <span className="text-4xl sm:text-5xl font-black text-[var(--ink)] tabular-nums leading-none">
                          {indexLabel}
                        </span>
                        <span className="font-mono text-sm font-medium text-[var(--ink-muted)] tabular-nums">
                          /{totalLabel}
                        </span>
                      </div>

                      <div className="flex flex-wrap items-baseline gap-3">
                        <h2 className="font-editorial text-2xl sm:text-3xl font-black text-[var(--ink)] tracking-tight">
                          {project.title}
                        </h2>
                        <span className="text-xs font-medium text-[var(--ink-muted)]">
                          {project.category}
                          {project.year ? ` · ${project.year}` : ""}
                        </span>
                      </div>
                    </div>

                    {/* Split Showcase: Framed Media Preview + Frosted Editorial Brief Card */}
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 items-center">
                      {/* Media Preview Frame */}
                      <div className="md:col-span-6">
                        <button
                          type="button"
                          onClick={() => setSelectedProject(project)}
                          className="group block w-full text-left rounded-[1.5rem] p-2 bg-white/85 border-[1.5px] border-[var(--border-hairline)] hover:border-[var(--accent)] shadow-[0_18px_36px_-18px_rgba(24,19,26,0.28)] transition-all cursor-pointer overflow-hidden"
                          aria-label={`Inspect ${project.title} case study`}
                        >
                          <div className="relative aspect-[16/11] rounded-[1.1rem] overflow-hidden bg-[#18131A]">
                            <LazyImage
                              src={project.imgPath}
                              alt={`${project.title} interface preview`}
                              priority={index === 0}
                              maxWidth={720}
                              wrapperClassName="w-full h-full"
                              placeholderClassName="bg-[#231c29]"
                              className="w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-500"
                              fallback={
                                <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center bg-gradient-to-br from-[#231929] to-[#12161f] text-white">
                                  <span className="font-mono text-xs text-[#00e5ff] mb-2">
                                    {project.category}
                                  </span>
                                  <span className="font-editorial text-2xl font-black">
                                    {project.title}
                                  </span>
                                </div>
                              }
                            />

                            {/* Hover Reveal Prompt */}
                            <div className="absolute inset-0 bg-[#18131A]/0 group-hover:bg-[#18131A]/35 transition-colors flex items-end justify-end p-4">
                              <span className="opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white text-[var(--ink)] text-xs font-bold shadow-md">
                                <BookOpen size={13} />
                                <span>Open Case Study</span>
                              </span>
                            </div>
                          </div>
                        </button>
                      </div>

                      {/* Crisp Editorial Brief Card (Zero mobile backdrop-blur scroll overhead) */}
                      <div className="md:col-span-6">
                        <div className="rounded-2xl bg-white/75 border border-white/85 p-6 sm:p-7 space-y-4">
                          <div>
                            <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[var(--ink-soft)] mb-1">
                              {project.category} · The Brief
                            </p>
                            <p className="text-sm sm:text-[15px] text-[var(--ink)] leading-relaxed">
                              {project.description}
                            </p>
                          </div>

                          <div>
                            <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[var(--ink-soft)] mb-1">
                              What I Built
                            </p>
                            <p className="text-xs sm:text-sm text-[var(--ink-muted)] leading-relaxed">
                              {project.details.role} — {project.details.toolsUsed.join(" · ")}
                            </p>
                          </div>

                          <div>
                            <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[var(--ink-soft)] mb-1">
                              The Result
                            </p>
                            <p className="text-xs sm:text-sm font-semibold text-[var(--ink)] leading-relaxed">
                              {project.metrics || project.details.result}
                            </p>
                          </div>

                          {/* Clean Functional Action Bar */}
                          <div className="pt-3 border-t border-[var(--border-hairline)] flex flex-wrap items-center gap-3">
                            <button
                              type="button"
                              onClick={() => setSelectedProject(project)}
                              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[var(--ink)] text-white text-xs font-semibold hover:opacity-90 transition-opacity cursor-pointer whitespace-nowrap"
                            >
                              <span>Read Case Study</span>
                              <ArrowUpRight size={13} />
                            </button>

                            {project.demoLink && (
                              <a
                                href={project.demoLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-[var(--border-strong)] text-[var(--ink)] text-xs font-semibold hover:bg-[var(--ink)]/5 transition-colors whitespace-nowrap"
                              >
                                <span>Live Site</span>
                                <ExternalLink size={12} />
                              </a>
                            )}

                            {project.ghLink && (
                              <a
                                href={project.ghLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1 text-xs font-semibold text-[var(--ink-muted)] hover:text-[var(--ink)] transition-colors whitespace-nowrap"
                              >
                                <Github size={13} />
                                <span>Code</span>
                              </a>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.article>
                );
              })}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Torn-Paper Exit into Paper Canvas: Client Marquee & What They Say Proof */}
      <TornEdge fill="var(--bg-paper)" />
      <BrandStickerMarquee />
      <ReferencesSection layout="stacked" showHeading />

      {/* Immersive Case Study Modal Viewer */}
      <ProjectModal
        isOpen={selectedProject !== null}
        onClose={() => setSelectedProject(null)}
        title={selectedProject?.title || ""}
        details={selectedProject?.details || null}
        slug={selectedProject?.slug}
        imgPath={selectedProject?.imgPath}
        category={selectedProject?.category}
        year={selectedProject?.year}
        metrics={selectedProject?.metrics}
        clientOrContext={selectedProject?.clientOrContext}
        demoLink={selectedProject?.demoLink}
        ghLink={selectedProject?.ghLink}
      />
    </div>
  );
}
