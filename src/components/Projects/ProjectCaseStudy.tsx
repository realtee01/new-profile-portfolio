import { useParams, Link, Navigate } from "react-router-dom";
import { ArrowLeft, ExternalLink, Github, Check, ArrowUpRight } from "lucide-react";
import SEOHead from "../SEO/SEOHead";
import { projectsData } from "../../data/projectsData";
import { useTheme } from "../../context/ThemeContext";
import { SparkleMark } from "../ui/EditorialPrimitives";
import { LazyImage } from "../ui/LazyMedia";

export default function ProjectCaseStudy() {
  const { slug } = useParams<{ slug: string }>();
  const { openBooking } = useTheme();
  const project = projectsData.find((p) => p.slug === slug);

  if (!project) {
    return <Navigate to="/projects" replace />;
  }

  const relatedProjects = projectsData
    .filter((p) => p.slug !== project.slug)
    .slice(0, 3);

  const caseStudySchema = [
    {
      "@type": "SoftwareApplication",
      "@id": `https://www.buildwithtobi.online/projects/${project.slug}#app`,
      name: project.title,
      description: project.description,
      applicationCategory:
        project.category === "Web App" ? "WebApplication" : "BusinessApplication",
      operatingSystem: "All modern web browsers",
      author: { "@id": "https://www.buildwithtobi.online/#person" },
      image: project.imgPath,
      url:
        project.demoLink ||
        `https://www.buildwithtobi.online/projects/${project.slug}`,
    },
  ];

  return (
    <>
      <SEOHead
        title={`${project.title} Case Study | Tobiloba Akala`}
        description={`Frontend engineering case study for ${project.title}: Problem, solution, tech stack (${project.details.toolsUsed.join(", ")}), and outcomes.`}
        canonicalPath={`/projects/${project.slug}`}
        ogImage={project.imgPath}
        keywords={`${project.title}, frontend case study, ${project.details.toolsUsed.join(", ")}, Tobiloba Akala`}
        jsonLd={caseStudySchema}
      />

      <div className="relative pt-28 sm:pt-36 pb-20 px-5 sm:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Top Breadcrumb */}
          <div className="flex items-center justify-between gap-4 mb-10 text-xs sm:text-sm text-[var(--ink-muted)]">
            <Link
              to="/projects"
              className="inline-flex items-center gap-1.5 text-[var(--ink)] hover:text-[var(--accent)] font-semibold transition-colors"
            >
              <ArrowLeft size={15} /> Back to Work
            </Link>
            <span className="font-mono tabular-nums">{project.year || "2026"}</span>
          </div>

          {/* Monograph Header */}
          <div className="mb-10">
            <div className="flex flex-wrap items-center gap-2 text-xs text-[var(--ink-muted)] mb-3">
              <SparkleMark className="w-3 h-3 text-[var(--accent)]" />
              <span>{project.category}</span>
              {project.clientOrContext && (
                <>
                  <span aria-hidden="true">·</span>
                  <span>{project.clientOrContext}</span>
                </>
              )}
              {project.metrics && (
                <>
                  <span aria-hidden="true">·</span>
                  <span className="font-mono font-semibold text-[var(--accent)] tabular-nums">
                    {project.metrics}
                  </span>
                </>
              )}
            </div>

            <h1 className="font-editorial font-black text-4xl sm:text-6xl text-[var(--ink)] tracking-tight leading-[0.98] mb-5">
              {project.title}
            </h1>

            <p className="text-lg sm:text-xl text-[var(--ink-muted)] leading-relaxed mb-8">
              {project.description}
            </p>

            <div className="flex flex-wrap items-center gap-3.5">
              {project.demoLink && (
                <a
                  href={project.demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[var(--ink)] text-white text-sm font-semibold hover:opacity-90 transition-opacity"
                >
                  <span>Visit Live Site</span>
                  <ExternalLink size={15} />
                </a>
              )}
              {project.ghLink && (
                <a
                  href={project.ghLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-[var(--border-strong)] bg-white/60 text-[var(--ink)] text-sm font-semibold hover:bg-[var(--ink)]/5 transition-colors"
                >
                  <Github size={15} />
                  <span>View Source</span>
                </a>
              )}
            </div>
          </div>

          {/* Framed Preview */}
          {project.imgPath && (
            <div className="rounded-3xl p-2 bg-white/85 border border-[var(--border-hairline)] shadow-[var(--shadow-paper)] mb-12">
              <div className="rounded-2xl overflow-hidden bg-[#18131A] aspect-[16/9]">
                <LazyImage
                  src={project.imgPath}
                  alt={`${project.title} interface preview`}
                  priority
                  maxWidth={960}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          )}

          {/* Specification Strip */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 py-7 mb-14 border-y border-dashed border-[var(--border-hairline)]">
            <div>
              <div className="text-[11px] font-bold uppercase tracking-[0.14em] text-[var(--ink-soft)] mb-1">
                Role
              </div>
              <div className="text-sm font-bold text-[var(--ink)]">
                {project.details.role}
              </div>
            </div>
            <div>
              <div className="text-[11px] font-bold uppercase tracking-[0.14em] text-[var(--ink-soft)] mb-1">
                Technologies
              </div>
              <div className="text-sm text-[var(--ink)]">
                {project.details.toolsUsed.join(" · ")}
              </div>
            </div>
            <div>
              <div className="text-[11px] font-bold uppercase tracking-[0.14em] text-[var(--ink-soft)] mb-1">
                Context
              </div>
              <div className="text-sm text-[var(--ink)]">
                {project.clientOrContext || "Production Build"}
              </div>
            </div>
          </div>

          {/* Narrative */}
          <div className="space-y-12 mb-16">
            <section>
              <p className="font-mono text-xs text-[var(--ink-soft)] mb-2">
                01. The Problem
              </p>
              <h2 className="font-editorial text-2xl sm:text-3xl font-black text-[var(--ink)] mb-3">
                What needed solving
              </h2>
              <p className="text-base text-[var(--ink-muted)] leading-relaxed">
                {project.details.problem}
              </p>
            </section>

            <section className="pt-10 border-t border-dashed border-[var(--border-hairline)]">
              <p className="font-mono text-xs text-[var(--ink-soft)] mb-2">
                02. The Solution
              </p>
              <h2 className="font-editorial text-2xl sm:text-3xl font-black text-[var(--ink)] mb-3">
                Engineering approach
              </h2>
              <p className="text-base text-[var(--ink-muted)] leading-relaxed mb-6">
                {project.details.solution}
              </p>
              {project.details.architecture && (
                <div className="p-6 rounded-2xl bg-[var(--surface-card)] border border-white/85 shadow-[var(--shadow-paper)]">
                  <div className="text-xs font-bold uppercase tracking-[0.14em] text-[var(--accent)] mb-1.5">
                    Architecture Note
                  </div>
                  <p className="text-sm text-[var(--ink-muted)] leading-relaxed">
                    {project.details.architecture}
                  </p>
                </div>
              )}
            </section>

            <section className="pt-10 border-t border-dashed border-[var(--border-hairline)]">
              <p className="font-mono text-xs text-[var(--ink-soft)] mb-2">
                03. Key Deliverables
              </p>
              <h2 className="font-editorial text-2xl sm:text-3xl font-black text-[var(--ink)] mb-5">
                What shipped
              </h2>
              <ul className="space-y-3">
                {project.details.features.map((feat, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm sm:text-base">
                    <Check size={17} className="text-[var(--accent)] shrink-0 mt-1" />
                    <span className="text-[var(--ink)] leading-relaxed">{feat}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section className="paper-band rounded-3xl p-7 sm:p-9 border border-[var(--border-hairline)]">
              <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-[var(--accent)] mb-2">
                Outcome
              </p>
              <p className="font-editorial text-xl sm:text-2xl font-bold text-[var(--ink)] leading-snug mb-6">
                {project.details.result}
              </p>
              <button
                type="button"
                onClick={() => openBooking(`Similar to ${project.title}`)}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[var(--ink)] text-white text-sm font-semibold hover:opacity-90 transition-opacity cursor-pointer"
              >
                <span>Build something similar</span>
                <ArrowUpRight size={15} />
              </button>
            </section>
          </div>

          {/* More Selected Projects */}
          <div className="pt-12 border-t border-dashed border-[var(--border-hairline)]">
            <h3 className="font-editorial text-2xl font-black text-[var(--ink)] mb-6">
              More selected work
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              {relatedProjects.map((rel) => (
                <Link
                  key={rel.id}
                  to={`/projects/${rel.slug}`}
                  className="group rounded-2xl bg-[var(--surface-card)]/90 border border-white/85 hover:border-[var(--accent)] p-5 transition-colors shadow-[var(--shadow-paper)]"
                >
                  <p className="font-mono text-[11px] text-[var(--ink-soft)] mb-1.5">
                    {rel.category}
                  </p>
                  <p className="font-editorial text-lg font-black text-[var(--ink)] group-hover:text-[var(--accent)] transition-colors mb-1.5">
                    {rel.title}
                  </p>
                  <p className="text-xs text-[var(--ink-muted)] line-clamp-2">
                    {rel.description}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
