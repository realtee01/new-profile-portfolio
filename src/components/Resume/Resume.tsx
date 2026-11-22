import { useState } from "react";
import {
  Download,
  Printer,
  Mail,
  Phone,
  MapPin,
  Globe,
  Github,
} from "lucide-react";
import resumeFile from "../../assets/Resume.pdf";
import SEOHead from "../SEO/SEOHead";

export default function Resume() {
  const [copied, setCopied] = useState(false);

  const handlePrint = () => {
    window.print();
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("tobilobaakala@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const resumeSchema = [
    {
      "@type": "DigitalDocument",
      "@id": "https://www.buildwithtobi.online/resume#doc",
      name: "Tobiloba Akala - Frontend Engineer & React Specialist Resume",
      url: "https://www.buildwithtobi.online/resume",
      author: {
        "@id": "https://www.buildwithtobi.online/#person",
      },
      fileFormat: "application/pdf",
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.buildwithtobi.online/resume#breadcrumbs",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://www.buildwithtobi.online/",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Resume",
          item: "https://www.buildwithtobi.online/resume",
        },
      ],
    },
  ];

  return (
    <div className="relative pt-28 sm:pt-32 pb-24 min-h-screen flex flex-col items-center">
      <SEOHead
        title="Resume | Tobiloba Akala — Frontend Developer"
        description="Official resume of Tobiloba Akala (BuildWithTobi) — 35+ deployed web projects, 15+ client solutions, React/TypeScript specialist, UNILAG Computer Science."
        canonicalPath="/resume"
        keywords="Tobiloba Akala resume, BuildWithTobi CV, Frontend Developer CV Nigeria, React developer resume, UNILAG Computer Science"
        jsonLd={resumeSchema}
      />

      <div className="max-w-4xl mx-auto px-5 sm:px-8 relative z-10 w-full flex flex-col items-center">
        {/* Top Action Bar */}
        <div className="mb-10 flex flex-col sm:flex-row sm:items-end justify-between gap-6 w-full print:hidden">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-[#86837C] mb-3">
              Curriculum Vitae
            </p>
            <h1 className="font-serif text-4xl sm:text-5xl text-[#141413] font-medium tracking-[-0.025em]">
              Tobiloba <span className="italic text-[#1D4ED8]">Resume</span>
            </h1>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href={resumeFile}
              download="Tobiloba_Akala_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full text-[#F8F7F4] text-sm font-medium bg-[#141413] hover:bg-[#1D4ED8] transition-colors whitespace-nowrap shrink-0"
            >
              <Download size={16} />
              <span>Download PDF</span>
            </a>

            <button
              onClick={handlePrint}
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full text-[#141413] text-sm font-medium bg-white hover:border-[#141413] border border-[#E5E2DC] transition-colors whitespace-nowrap shrink-0"
            >
              <Printer size={16} />
              <span>Print</span>
            </button>
          </div>
        </div>

        {/* Crisp Paper Resume Sheet */}
        <div className="w-full bg-white border border-[#E5E2DC] rounded-3xl p-7 sm:p-12 md:p-14 text-[#141413] shadow-[0_12px_40px_-20px_rgba(20,20,19,0.12)] text-left print:p-0 print:border-none print:shadow-none print:rounded-none">
          {/* Header */}
          <header className="border-b border-[#E5E2DC] pb-7 mb-8">
            <h2 className="font-serif text-3xl sm:text-4xl font-semibold tracking-tight text-[#141413]">
              Tobiloba Akala
            </h2>
            <p className="text-base sm:text-lg font-medium text-[#1D4ED8] mt-1">
              Frontend Engineer · React &amp; TypeScript Specialist
            </p>

            <div className="mt-4 pt-4 border-t border-[#E5E2DC]/70 flex flex-wrap items-center gap-y-2 gap-x-4 text-xs sm:text-sm text-[#575550]">
              <span className="inline-flex items-center gap-1.5">
                <MapPin size={14} className="text-[#86837C]" /> Lagos, Nigeria
              </span>
              <span className="text-[#D4D0C8]">·</span>
              <a
                href="tel:07032533869"
                className="inline-flex items-center gap-1.5 hover:text-[#1D4ED8] transition-colors"
              >
                <Phone size={14} className="text-[#86837C]" /> +234 703 253 3869
              </a>
              <span className="text-[#D4D0C8]">·</span>
              <button
                type="button"
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-1.5 hover:text-[#1D4ED8] transition-colors cursor-pointer text-left"
                title="Click to copy email"
              >
                <Mail size={14} className="text-[#86837C]" /> tobilobaakala@gmail.com{" "}
                {copied && (
                  <span className="text-[#1D4ED8] text-xs font-mono">
                    (Copied)
                  </span>
                )}
              </button>
              <span className="text-[#D4D0C8]">·</span>
              <a
                href="https://www.buildwithtobi.online"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 hover:text-[#1D4ED8] transition-colors"
              >
                <Globe size={14} className="text-[#86837C]" /> buildwithtobi.online
              </a>
              <span className="text-[#D4D0C8]">·</span>
              <a
                href="https://github.com/realtee01"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 hover:text-[#1D4ED8] transition-colors"
              >
                <Github size={14} className="text-[#86837C]" /> github.com/realtee01
              </a>
            </div>
          </header>

          {/* Professional Summary */}
          <section className="mb-9">
            <h3 className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#86837C] font-semibold mb-3">
              Profile
            </h3>
            <p className="text-[#2D2B27] text-sm sm:text-[15px] leading-relaxed">
              Frontend Developer with a proven record shipping fast, responsive web applications for growing teams and founders.{" "}
              <strong className="font-semibold text-[#141413]">35+ deployed projects</strong> including{" "}
              <strong className="font-semibold text-[#141413]">15+ client solutions</strong> across e-commerce, booking platforms, and product interfaces. Top 5% Axia Africa cohort performer with strong React, TypeScript, Tailwind CSS, and Core Web Vitals foundations, pursuing a B.Sc. in Computer Science at the University of Lagos.
            </p>
          </section>

          {/* Key Impact Strip */}
          <section className="mb-9 grid grid-cols-2 sm:grid-cols-4 gap-4 py-5 border-y border-[#E5E2DC]">
            {[
              { value: "35+", label: "Deployed Projects" },
              { value: "15+", label: "Client Solutions" },
              { value: "98%+", label: "Avg. Lighthouse" },
              { value: "Top 5%", label: "Faculty Recognition" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="font-serif text-2xl font-medium text-[#141413] tabular-nums">
                  {stat.value}
                </div>
                <div className="text-xs text-[#86837C] mt-0.5">{stat.label}</div>
              </div>
            ))}
          </section>

          {/* Technical Stack */}
          <section className="mb-9">
            <h3 className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#86837C] font-semibold mb-4">
              Technical Stack
            </h3>
            <div className="space-y-2.5 text-sm text-[#575550]">
              <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-4">
                <strong className="text-[#141413] font-medium sm:w-40 shrink-0">
                  Frontend Core
                </strong>
                <span>React.js, Next.js, TypeScript, JavaScript (ES6+), Vite</span>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-4">
                <strong className="text-[#141413] font-medium sm:w-40 shrink-0">
                  Styling &amp; Motion
                </strong>
                <span>Tailwind CSS, CSS Grid, Flexbox, Framer Motion, Responsive UI</span>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-4">
                <strong className="text-[#141413] font-medium sm:w-40 shrink-0">
                  Performance &amp; SEO
                </strong>
                <span>98%+ Lighthouse, Code Splitting, Lazy Loading, Semantic HTML, JSON-LD</span>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-4">
                <strong className="text-[#141413] font-medium sm:w-40 shrink-0">
                  Data &amp; Tooling
                </strong>
                <span>REST APIs, Supabase, Firebase, Git / GitHub, Vercel, Figma</span>
              </div>
            </div>
          </section>

          {/* Experience */}
          <section className="mb-9">
            <h3 className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#86837C] font-semibold pb-2 mb-5 border-b border-[#E5E2DC]">
              Experience
            </h3>
            <div className="space-y-6">
              <div>
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                  <h4 className="text-base font-semibold text-[#141413]">
                    Frontend Developer ·{" "}
                    <span className="text-[#1D4ED8] font-medium">Axia Africa</span>
                  </h4>
                  <span className="text-xs font-mono text-[#86837C] tabular-nums">
                    Oct 2025 – Mar 2026
                  </span>
                </div>
                <ul className="list-disc list-outside ml-4 text-sm text-[#575550] space-y-1 mt-2">
                  <li>Delivered 15 production frontend projects; earned Top 5% Faculty Recognition.</li>
                  <li>Built responsive React interfaces with clean state architecture and performance audits.</li>
                </ul>
              </div>

              <div>
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                  <h4 className="text-base font-semibold text-[#141413]">
                    Frontend Developer &amp; Digital Strategist ·{" "}
                    <span className="text-[#1D4ED8] font-medium">PeakEcho Digitals</span>
                  </h4>
                  <span className="text-xs font-mono text-[#86837C] tabular-nums">
                    Jan 2025 – Present · Remote
                  </span>
                </div>
                <ul className="list-disc list-outside ml-4 text-sm text-[#575550] space-y-1 mt-2">
                  <li>Built and maintain the company website using React, Next.js, and Tailwind CSS.</li>
                  <li>Owned technical SEO structure, landing page conversions, and product documentation.</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Selected Client & Technical Work */}
          <section className="mb-9">
            <h3 className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#86837C] font-semibold pb-2 mb-5 border-b border-[#E5E2DC]">
              Selected Production Work
            </h3>
            <div className="space-y-5">
              {[
                {
                  name: "CineScope — Movie Discovery Platform",
                  stack: "React · TMDB API · Tailwind CSS · 98% Lighthouse",
                  bullets: [
                    "Built high-speed search experience with debounced queries reducing API calls by 65%.",
                    "Faculty-recognized at UNILAG for UI craftsmanship and custom skeleton loading states.",
                  ],
                },
                {
                  name: "Julio's Pizza — Online Ordering Platform",
                  stack: "React · Tailwind CSS · Menu & Checkout UX",
                  bullets: [
                    "Engineered an interactive mobile-first ordering flow solving peak-hour customer wait times.",
                  ],
                },
                {
                  name: "Riad Dentist Care — Clinic & Appointment Platform",
                  stack: "React · Responsive UI · Scheduling Workflow",
                  bullets: [
                    "Built a clear, trust-building clinic frontend with integrated online appointment booking.",
                  ],
                },
                {
                  name: "Trendy Transit — E-Commerce Storefront",
                  stack: "Next.js · Tailwind CSS · Supabase",
                  bullets: [
                    "Delivered a dynamic catalog and fast cart checkout flow built for mobile shoppers.",
                  ],
                },
              ].map((proj) => (
                <div key={proj.name}>
                  <h4 className="text-base font-semibold text-[#141413]">
                    {proj.name}
                  </h4>
                  <p className="text-xs font-mono text-[#1D4ED8] mt-0.5 mb-1.5">
                    {proj.stack}
                  </p>
                  <ul className="list-disc list-outside ml-4 text-sm text-[#575550] space-y-1">
                    {proj.bullets.map((b, i) => (
                      <li key={i}>{b}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Education */}
          <section>
            <h3 className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#86837C] font-semibold pb-2 mb-5 border-b border-[#E5E2DC]">
              Education
            </h3>
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                <div>
                  <h4 className="text-base font-semibold text-[#141413]">
                    B.Sc. Computer Science
                  </h4>
                  <p className="text-sm text-[#575550]">
                    University of Lagos (UNILAG) · Data Structures, Software Architecture, Design Patterns
                  </p>
                </div>
                <span className="text-xs font-mono text-[#86837C] tabular-nums shrink-0">
                  2021 – Present
                </span>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                <div>
                  <h4 className="text-base font-semibold text-[#141413]">
                    Professional Certificate in Frontend Development
                  </h4>
                  <p className="text-sm text-[#575550]">
                    Axia Africa (Cohort 9) · Top 5% Recognition
                  </p>
                </div>
                <span className="text-xs font-mono text-[#86837C] tabular-nums shrink-0">
                  Completed Mar 2026
                </span>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
