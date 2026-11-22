import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "../../context/LanguageContext";
import SEOHead from "../SEO/SEOHead";

const experiences = [
  {
    company: "Roitech AI",
    role: "Frontend & Product Engineering Intern",
    period: "2026 — Present",
    location: "Remote",
    achievements: [
      "Collaborating with the Roitech AI engineering team to architect and ship a responsive, scalable React web application from scratch.",
      "Designing modular, reusable UI components to keep visual hierarchy and interaction patterns consistent across the platform.",
      "Implementing fluid motion transitions and accessible layouts tuned for speed on desktop and mobile devices.",
      "Shipping iterative milestones from MVP to production launch with clean Git workflows and strict code reviews.",
    ],
  },
  {
    company: "LearnIQ",
    role: "Lead Frontend Engineer",
    period: "2026 — Present",
    location: "Lagos · Remote",
    achievements: [
      "Leading the frontend architecture of an accessible learning platform centered on clear typography and inclusive UX.",
      "Engineered a responsive Notes workspace and layout grid built for distraction-free reading and navigation.",
      "Crafted interactive interfaces for audio transcription and summarization workflows with instant client-side feedback.",
      "Redesigned core platform screens to sharpen visual clarity, reduce friction, and lift student engagement.",
    ],
  },
  {
    company: "Axia Africa",
    role: "Frontend Development Immersive",
    period: "Oct 2025 — Mar 2026",
    location: "Lagos",
    achievements: [
      "Completed a rigorous 6-month frontend engineering program centered on React.js, TypeScript, Tailwind CSS, and state management.",
      "Recognized in the Top 5% by faculty for code architecture, visual craft, and production-grade responsive interfaces.",
      "Shipped 15+ production web interfaces using Vite, modern React patterns, and version-controlled GitHub workflows.",
    ],
  },
  {
    company: "PeakEcho Digitals",
    role: "Frontend Developer & Digital Strategist",
    period: "2025 — Present",
    location: "Remote",
    achievements: [
      "Built and maintain the company website using React, Next.js, and Tailwind CSS with strong technical SEO fundamentals.",
      "Translated marketing goals into clean landing pages, technical documentation, and conversion-focused web flows.",
    ],
  },
  {
    company: "University of Lagos",
    role: "Frontend Engineer — CineScope",
    period: "2026",
    location: "Lagos",
    achievements: [
      "Engineered a fast movie discovery web app featuring mobile-first UI, debounced search logic, and custom skeleton states.",
      "Achieved 98% Lighthouse performance and earned faculty commendation for interface quality and API optimization.",
    ],
  },
];

export default function Experience() {
  const { t } = useLanguage();

  const experienceSchema = [
    {
      "@type": "ItemList",
      "@id": "https://www.buildwithtobi.online/experience#timeline",
      name: "Professional Engineering Experience - Tobiloba Akala",
      description:
        "Work history, internships, and lead frontend roles held by Tobiloba Akala (BuildWithTobi).",
      itemListElement: experiences.map((exp, idx) => ({
        "@type": "ListItem",
        position: idx + 1,
        name: `${exp.role} at ${exp.company} (${exp.period})`,
      })),
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.buildwithtobi.online/experience#breadcrumbs",
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
          name: "Experience",
          item: "https://www.buildwithtobi.online/experience",
        },
      ],
    },
  ];

  return (
    <div className="relative pt-32 pb-24 min-h-screen">
      <SEOHead
        title="Experience & Career History | Tobiloba Akala — Frontend Developer"
        description="Review the frontend engineering experience, internships (Roitech AI, LearnIQ, Axia Africa), and product roles of Tobiloba Akala."
        canonicalPath="/experience"
        keywords="Tobiloba Akala experience, Roitech AI engineer, LearnIQ lead engineer, Axia Africa, frontend developer experience Nigeria"
        jsonLd={experienceSchema}
      />

      <div className="max-w-5xl mx-auto px-5 sm:px-8 relative z-10">
        {/* Editorial Header */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mb-16 pb-10 border-b border-[#E5E2DC]"
        >
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-[#86837C] mb-4">
            Career Timeline
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl text-[#141413] font-medium tracking-[-0.025em] leading-[1.08] mb-5">
            {t("experience.title1")}{" "}
            <span className="italic text-[#1D4ED8]">{t("experience.title2")}</span>
          </h1>
          <p className="text-[#575550] text-base sm:text-lg leading-relaxed">
            Teams, products, and client engagements where I have shipped fast, maintainable React interfaces and frontend systems.
          </p>
        </motion.div>

        {/* Clean Editorial Two-Column Timeline Rows */}
        <div className="divide-y divide-[#E5E2DC]">
          {experiences.map((exp, index) => (
            <motion.article
              key={`${exp.company}-${index}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: index * 0.06, duration: 0.45 }}
              className="py-10 first:pt-2 grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10"
            >
              {/* Left Column: Index & Period */}
              <div className="md:col-span-4 flex flex-col">
                <span className="font-mono text-xs text-[#86837C] tabular-nums mb-2">
                  {String(index + 1).padStart(2, "0")} · {exp.period}
                </span>
                <h2 className="font-serif text-2xl text-[#141413] font-medium tracking-tight">
                  {exp.company}
                </h2>
                <span className="text-xs text-[#86837C] mt-1">{exp.location}</span>
              </div>

              {/* Right Column: Role & Highlights */}
              <div className="md:col-span-8">
                <h3 className="text-base sm:text-lg font-semibold text-[#1D4ED8] mb-4">
                  {exp.role}
                </h3>
                <ul className="space-y-3">
                  {exp.achievements.map((achievement, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-sm sm:text-[15px] text-[#575550] leading-relaxed"
                    >
                      <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#141413]/35 shrink-0" />
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Bottom Quiet CTA Strip */}
        <div className="mt-14 pt-10 border-t border-[#E5E2DC] flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <div>
            <p className="font-serif text-2xl text-[#141413]">
              Want the full one-page breakdown?
            </p>
            <p className="text-sm text-[#575550] mt-1">
              View my interactive frontend CV or reach out about a role or project.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <Link
              to="/resume"
              className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-[#141413] text-[#F8F7F4] hover:bg-[#1D4ED8] text-sm font-medium transition-colors whitespace-nowrap shrink-0"
            >
              View Resume <ArrowUpRight size={15} />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full border border-[#D4D0C8] text-[#141413] hover:border-[#141413] text-sm font-medium transition-colors whitespace-nowrap shrink-0"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
