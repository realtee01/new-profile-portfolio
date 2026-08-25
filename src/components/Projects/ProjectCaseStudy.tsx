import { useParams, Link, Navigate } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { 
  ArrowLeft, 
  ExternalLink, 
  Github, 
  CheckCircle2, 
  Layers, 
  Sparkles, 
  Zap, 
  ShieldCheck, 
  ArrowRight,
  Calendar,
  User,
  Wrench
} from "lucide-react";
import SEOHead from "../SEO/SEOHead";
import ChromeButton from "../ui/chrome-button";
import { projectsData } from "../../data/projectsData";

export default function ProjectCaseStudy() {
  const { slug } = useParams<{ slug: string }>();
  const project = projectsData.find((p) => p.slug === slug);

  if (!project) {
    return <Navigate to="/projects" replace />;
  }

  // Schema for Case Study / Software Application / Creative Work
  const caseStudySchema = [
    {
      "@type": "SoftwareApplication",
      "@id": `https://www.buildwithtobi.online/projects/${project.slug}#app`,
      "name": project.title,
      "description": project.description,
      "applicationCategory": project.category === "Web App" ? "WebApplication" : "BusinessApplication",
      "operatingSystem": "All modern web browsers",
      "author": {
        "@id": "https://www.buildwithtobi.online/#person"
      },
      "image": project.imgPath,
      "url": project.demoLink || `https://www.buildwithtobi.online/projects/${project.slug}`,
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      }
    },
    {
      "@type": "BreadcrumbList",
      "@id": `https://www.buildwithtobi.online/projects/${project.slug}#breadcrumbs`,
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.buildwithtobi.online/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Projects",
          "item": "https://www.buildwithtobi.online/projects"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": project.title,
          "item": `https://www.buildwithtobi.online/projects/${project.slug}`
        }
      ]
    }
  ];

  // Related projects (exclude current)
  const relatedProjects = projectsData.filter((p) => p.slug !== project.slug).slice(0, 3);

  return (
    <>
      <SEOHead
        title={`${project.title} Case Study | Web Engineering by Tobiloba Akala`}
        description={`Explore the engineering case study for ${project.title}: Problem, architecture, tech stack (${project.details.toolsUsed.join(", ")}), challenges, and results.`}
        canonicalPath={`/projects/${project.slug}`}
        ogImage={project.imgPath}
        keywords={`${project.title}, ${project.title} case study, React case study, ${project.details.toolsUsed.join(", ")}, Tobiloba Akala project, BuildWithTobi`}
        jsonLd={caseStudySchema}
      />

      <div className="relative pt-32 pb-24 min-h-screen text-white">
        {/* Background glow */}
        <div className="absolute top-20 left-1/3 w-96 h-96 bg-[#00e5ff]/10 rounded-full blur-[140px] pointer-events-none"></div>
        <div className="absolute top-80 right-1/4 w-96 h-96 bg-[#c770f0]/10 rounded-full blur-[140px] pointer-events-none"></div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Top Breadcrumb & Back */}
          <div className="flex items-center justify-between gap-4 mb-8">
            <nav aria-label="Breadcrumbs" className="flex items-center gap-2 text-xs sm:text-sm text-gray-400">
              <Link to="/" className="hover:text-[#00e5ff] transition-colors">Home</Link>
              <span>/</span>
              <Link to="/projects" className="hover:text-[#00e5ff] transition-colors">Projects</Link>
              <span>/</span>
              <span className="text-[#00e5ff] font-medium">{project.title}</span>
            </nav>

            <Link 
              to="/projects" 
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm text-gray-300 hover:text-white transition-colors"
            >
              <ArrowLeft size={16} /> Back to Gallery
            </Link>
          </div>

          {/* Project Header */}
          <div className="mb-10">
            <div className="flex flex-wrap items-center gap-2.5 mb-4">
              <span className="bg-[#00e5ff]/10 text-[#00e5ff] border border-[#00e5ff]/30 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider">
                {project.category}
              </span>
              {project.year && (
                <span className="bg-white/5 border border-white/10 text-xs text-gray-300 px-3 py-1 rounded-full flex items-center gap-1">
                  <Calendar size={12} /> {project.year}
                </span>
              )}
              {project.clientOrContext && (
                <span className="bg-white/5 border border-white/10 text-xs text-gray-300 px-3 py-1 rounded-full flex items-center gap-1">
                  <User size={12} /> {project.clientOrContext}
                </span>
              )}
              {project.metrics && (
                <span className="bg-[#c770f0]/10 text-[#c770f0] border border-[#c770f0]/30 text-xs font-medium px-3 py-1 rounded-full flex items-center gap-1">
                  <Zap size={12} /> {project.metrics}
                </span>
              )}
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white mb-4">
              {project.title}
            </h1>

            <p className="text-lg sm:text-xl text-gray-300 font-light leading-relaxed mb-8">
              {project.description}
            </p>

            {/* Action buttons */}
            <div className="flex flex-wrap items-center gap-4">
              {project.demoLink ? (
                <a
                  href={project.demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-[#00e5ff] to-[#c770f0] text-[#151421] font-bold text-sm hover:opacity-95 transition-all shadow-[0_0_20px_rgba(0,229,255,0.3)]"
                >
                  Launch Live Demo <ExternalLink size={16} />
                </a>
              ) : project.inProgress ? (
                <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-yellow-500/10 border border-yellow-500/30 text-yellow-300 text-xs font-semibold">
                  ⚡ In Active Development
                </span>
              ) : null}

              {project.ghLink && (
                <a
                  href={project.ghLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/15 hover:border-white/40 bg-white/5 hover:bg-white/10 text-white font-medium text-sm transition-all"
                >
                  <Github size={16} /> View Source Code
                </a>
              )}
            </div>
          </div>

          {/* Hero Banner / Screenshot */}
          {project.imgPath && (
            <div className="rounded-3xl overflow-hidden border border-white/10 bg-black/40 mb-16 shadow-2xl">
              <img 
                src={project.imgPath} 
                alt={`${project.title} user interface preview`} 
                className="w-full max-h-[520px] object-cover"
                loading="eager"
              />
            </div>
          )}

          {/* Key Specifications Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            <div className="bg-[#151421]/80 backdrop-blur-md p-6 rounded-2xl border border-white/5">
              <div className="text-xs uppercase font-semibold text-gray-400 tracking-wider mb-2">
                Engineering Role
              </div>
              <div className="text-lg font-bold text-white">
                {project.details.role}
              </div>
            </div>

            <div className="bg-[#151421]/80 backdrop-blur-md p-6 rounded-2xl border border-white/5">
              <div className="text-xs uppercase font-semibold text-gray-400 tracking-wider mb-2">
                Core Technologies
              </div>
              <div className="flex flex-wrap gap-1.5 mt-1">
                {project.details.toolsUsed.map((tool, idx) => (
                  <span key={idx} className="bg-white/5 border border-white/10 px-2 py-0.5 rounded text-xs text-[#00e5ff] font-medium">
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-[#151421]/80 backdrop-blur-md p-6 rounded-2xl border border-white/5">
              <div className="text-xs uppercase font-semibold text-gray-400 tracking-wider mb-2">
                Context / Benchmark
              </div>
              <div className="text-sm font-medium text-gray-200">
                {project.clientOrContext || "Production Application"}
              </div>
            </div>
          </div>

          {/* Deep Case Study Body */}
          <div className="space-y-12 mb-20 text-gray-200 font-light">
            
            {/* The Problem */}
            <section className="bg-[#151421]/60 backdrop-blur-md p-8 sm:p-10 rounded-3xl border border-white/5">
              <div className="flex items-center gap-2.5 text-[#c770f0] text-xs font-bold uppercase tracking-wider mb-3">
                <ShieldCheck size={16} /> 01. The Challenge & Context
              </div>
              <h2 className="text-2xl font-serif font-bold text-white mb-4">
                The Problem
              </h2>
              <p className="text-base sm:text-lg leading-relaxed text-gray-300">
                {project.details.problem}
              </p>
            </section>

            {/* The Solution */}
            <section className="bg-[#151421]/60 backdrop-blur-md p-8 sm:p-10 rounded-3xl border border-white/5">
              <div className="flex items-center gap-2.5 text-[#00e5ff] text-xs font-bold uppercase tracking-wider mb-3">
                <Sparkles size={16} /> 02. The Solution
              </div>
              <h2 className="text-2xl font-serif font-bold text-white mb-4">
                Engineering Approach & Implementation
              </h2>
              <p className="text-base sm:text-lg leading-relaxed text-gray-300 mb-6">
                {project.details.solution}
              </p>

              {project.details.architecture && (
                <div className="p-4 rounded-xl bg-black/40 border border-white/5 text-sm text-gray-300 leading-relaxed">
                  <strong className="text-white block mb-1">Architecture Note:</strong>
                  {project.details.architecture}
                </div>
              )}
            </section>

            {/* Why These Tools */}
            <section className="bg-[#151421]/60 backdrop-blur-md p-8 sm:p-10 rounded-3xl border border-white/5">
              <div className="flex items-center gap-2.5 text-green-400 text-xs font-bold uppercase tracking-wider mb-3">
                <Wrench size={16} /> 03. Technology Selection
              </div>
              <h2 className="text-2xl font-serif font-bold text-white mb-4">
                Why These Specific Tools?
              </h2>
              <p className="text-base sm:text-lg leading-relaxed text-gray-300">
                {project.details.whyTools}
              </p>
            </section>

            {/* Key Features Breakdown */}
            <section className="bg-[#151421]/60 backdrop-blur-md p-8 sm:p-10 rounded-3xl border border-white/5">
              <div className="flex items-center gap-2.5 text-[#00e5ff] text-xs font-bold uppercase tracking-wider mb-3">
                <Layers size={16} /> 04. Functional Capabilities
              </div>
              <h2 className="text-2xl font-serif font-bold text-white mb-6">
                Key Features & Engineering Highlights
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {project.details.features.map((feat, idx) => (
                  <div key={idx} className="flex items-start gap-3 bg-black/30 p-4 rounded-xl border border-white/5">
                    <CheckCircle2 size={18} className="text-[#00e5ff] flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-200">{feat}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Technical Challenges & Solutions */}
            <section className="bg-[#151421]/60 backdrop-blur-md p-8 sm:p-10 rounded-3xl border border-white/5">
              <div className="flex items-center gap-2.5 text-yellow-400 text-xs font-bold uppercase tracking-wider mb-3">
                <Zap size={16} /> 05. Obstacles Overcome
              </div>
              <h2 className="text-2xl font-serif font-bold text-white mb-4">
                Key Engineering Challenge
              </h2>
              <p className="text-base sm:text-lg leading-relaxed text-gray-300">
                {project.details.challenges}
              </p>
            </section>

            {/* The Result & Measurable Outcome */}
            <section className="bg-gradient-to-r from-[#151421] to-[#1b1a2e] p-8 sm:p-10 rounded-3xl border border-[#00e5ff]/20 shadow-xl">
              <div className="flex items-center gap-2.5 text-[#00e5ff] text-xs font-bold uppercase tracking-wider mb-3">
                <CheckCircle2 size={16} /> 06. The Outcome
              </div>
              <h2 className="text-2xl font-serif font-bold text-white mb-4">
                Business & Technical Result
              </h2>
              <p className="text-base sm:text-lg leading-relaxed text-white font-normal">
                {project.details.result}
              </p>
            </section>

          </div>

          {/* Related Projects Section */}
          <div className="mb-20">
            <h2 className="text-2xl font-serif font-bold text-white mb-6">
              Explore More Case Studies
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedProjects.map((rel) => (
                <Link
                  key={rel.slug}
                  to={`/projects/${rel.slug}`}
                  className="bg-[#151421]/80 backdrop-blur-md p-6 rounded-2xl border border-white/5 hover:border-[#00e5ff]/40 transition-all group flex flex-col justify-between"
                >
                  <div>
                    <div className="text-[11px] font-semibold text-[#00e5ff] uppercase tracking-wider mb-1">
                      {rel.category}
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#00e5ff] transition-colors">
                      {rel.title}
                    </h3>
                    <p className="text-gray-400 text-xs font-light line-clamp-2 mb-4">
                      {rel.description}
                    </p>
                  </div>
                  <div className="text-xs font-semibold text-white inline-flex items-center gap-1 pt-3 border-t border-white/5">
                    View Case Study <ArrowRight size={12} className="text-[#00e5ff]" />
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Bottom Conversion CTA */}
          <div className="rounded-3xl bg-[#151421]/90 border border-white/10 p-8 sm:p-12 text-center">
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white mb-4">
              Need a Similar High-Performance Solution?
            </h2>
            <p className="text-gray-300 text-sm sm:text-base font-light mb-8 max-w-xl mx-auto">
              Let's discuss how modern React engineering and clean architecture can elevate your product.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <ChromeButton to="/contact#top" className="!py-3 !px-8 text-sm uppercase tracking-wider font-bold">
                Discuss Your Project
              </ChromeButton>
              <Link 
                to="/services" 
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/10 hover:border-white/30 bg-white/5 text-white font-medium text-sm transition-all"
              >
                Explore Services & Capabilities <ArrowRight size={16} />
              </Link>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}
