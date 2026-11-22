import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { Check, ArrowUpRight, ChevronDown } from "lucide-react";
import SEOHead from "../SEO/SEOHead";
import { projectsData } from "../../data/projectsData";

const servicesList = [
  {
    num: "01",
    id: "frontend-react",
    title: "Frontend Engineering & React Applications",
    tagline: "Ultra-fast, component-driven user interfaces built with React, TypeScript, and Tailwind CSS.",
    description:
      "I build responsive, pixel-accurate frontend applications from scratch or turn Figma designs into clean, maintainable code with fluid transitions and zero layout jank.",
    deliverables: [
      "Modular React 19 + TypeScript component architecture",
      "Tailwind CSS design systems & responsive grids",
      "Subtle motion & interactive modal/state transitions",
      "Clean REST, Supabase & Firebase API integration",
      "Accessible semantic HTML (WCAG AA contrast)",
    ],
    perfectFor: "Startups shipping web products, product teams needing frontend help, and SaaS dashboards.",
    relatedProjects: ["cinescope", "julios-pizza"],
  },
  {
    num: "02",
    id: "business-websites",
    title: "Editorial Business Websites & Landing Pages",
    tagline: "Clean, high-trust web storefronts designed to turn visitors into booked calls.",
    description:
      "Your website should communicate value in five seconds. I build sharp, uncluttered pages with clear hierarchy, sub-1.5s load times, and effortless WhatsApp or booking flows.",
    deliverables: [
      "Mobile-first layouts tested across real smartphones",
      "Direct booking, contact forms & WhatsApp triggers",
      "OpenGraph social cards, SEO metadata & JSON-LD schema",
      "Sub-1.5 second load times on 4G mobile networks",
    ],
    perfectFor: "Founders, studios, clinics, agencies, and service brands upgrading their online presence.",
    relatedProjects: ["riad-dentist-care", "tribe-fitness"],
  },
  {
    num: "03",
    id: "performance-seo",
    title: "Frontend Redesigns & Speed Rebuilds",
    tagline: "Transform sluggish templates into 95+ Lighthouse benchmarks.",
    description:
      "If your current site feels dated or slow on mobile, I audit and rebuild the frontend with modern code-splitting, crisp typography, and lean assets that keep users engaged.",
    deliverables: [
      "Full Lighthouse & Core Web Vitals performance audit",
      "Bundle reduction, code-splitting & lazy loading",
      "Zero Cumulative Layout Shift (CLS < 0.01)",
      "Clean technical SEO & structured schema setup",
    ],
    perfectFor: "Growing brands losing mobile visitors to slow, heavy legacy websites.",
    relatedProjects: ["cinescope", "riad-dentist-care"],
  },
];

const serviceFaqs = [
  {
    q: "How much do your frontend services cost?",
    a: "Pricing depends on scope and complexity. Focused landing pages and portfolio/business sites use transparent fixed pricing, while custom React applications are structured around clear milestones.",
  },
  {
    q: "How long does a typical project take?",
    a: "Landing pages and company websites usually take 1–2 weeks. Custom React applications and booking flows take 3–5 weeks, with live staging links shared every step of the way.",
  },
  {
    q: "Do I own the source code when we finish?",
    a: "100% yes. You receive full ownership of the repository, clean code, and deployment setup—zero vendor lock-in.",
  },
  {
    q: "Do you work with teams outside Nigeria?",
    a: "Yes. While based in Lagos (WAT / GMT+1), I regularly collaborate with founders and teams across the UK, US, Canada, and Europe.",
  },
];

export default function Services() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <>
      <SEOHead
        title="Frontend Development Services | Tobiloba Akala"
        description="Frontend engineering services by Tobiloba Akala: React & TypeScript applications, editorial websites, and Core Web Vitals speed rebuilds."
        canonicalPath="/services"
        keywords="frontend developer services, React developer Nigeria, hire frontend engineer, website redesign, Tobiloba Akala"
      />

      <div className="relative pt-28 sm:pt-36 pb-24 min-h-screen">
        <div className="max-w-[1100px] mx-auto px-5 sm:px-8 relative z-10">
          {/* Header */}
          <div className="max-w-3xl pb-14 mb-14 border-b border-[#E5E2DC]">
            <p className="text-xs font-medium text-[#86837C] mb-3">Services &amp; Capabilities</p>
            <h1 className="font-serif text-4xl sm:text-6xl font-semibold text-[#141413] tracking-tight mb-5">
              Frontend engineering built for <span className="italic text-[#1D4ED8]">speed</span> and clarity.
            </h1>
            <p className="text-base sm:text-lg text-[#575550] leading-relaxed mb-8">
              Whether you need a sharp React web app, a clean business website, or a faster rebuild
              of what you already have—here&apos;s how we can work together.
            </p>
            <div className="flex flex-wrap items-center gap-3.5">
              <HashLink
                smooth
                to="/contact#top"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#141413] text-white text-sm font-medium hover:bg-[#1D4ED8] transition-colors"
              >
                <span>Request a Quote</span>
                <ArrowUpRight size={15} />
              </HashLink>
              <Link
                to="/projects"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-[#CFCBC2] bg-white text-[#141413] text-sm font-medium hover:border-[#141413] transition-colors"
              >
                <span>See Recent Work</span>
              </Link>
            </div>
          </div>

          {/* Services Breakdown */}
          <div className="space-y-8 mb-24">
            {servicesList.map((service) => (
              <section
                key={service.id}
                id={service.id}
                className="bg-white border border-[#E5E2DC] rounded-2xl p-7 sm:p-10"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pb-8 mb-8 border-b border-[#E5E2DC]">
                  <div className="lg:col-span-8">
                    <div className="font-mono text-xs text-[#1D4ED8] mb-2">{service.num}.</div>
                    <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-[#141413] mb-2">
                      {service.title}
                    </h2>
                    <p className="text-sm font-medium text-[#1D4ED8] mb-4">{service.tagline}</p>
                    <p className="text-sm sm:text-base text-[#575550] leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  <div className="lg:col-span-4 bg-[#F8F7F4] border border-[#E5E2DC] rounded-xl p-5 flex flex-col justify-between">
                    <div className="mb-5">
                      <div className="text-xs font-medium text-[#86837C] mb-1.5">Best For</div>
                      <p className="text-sm text-[#141413] leading-relaxed">{service.perfectFor}</p>
                    </div>
                    <HashLink
                      smooth
                      to="/contact#top"
                      className="w-full inline-flex items-center justify-center gap-1.5 py-2.5 px-5 rounded-full bg-[#141413] text-white text-xs font-medium hover:bg-[#1D4ED8] transition-colors"
                    >
                      <span>Book This Service</span>
                      <ArrowUpRight size={13} />
                    </HashLink>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-7">
                  {service.deliverables.map((item) => (
                    <div key={item} className="flex items-start gap-2.5 text-sm text-[#141413]">
                      <Check size={15} className="text-[#1D4ED8] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-5 border-t border-[#E5E2DC] flex flex-wrap items-center gap-3 text-xs">
                  <span className="text-[#86837C]">Related examples:</span>
                  {service.relatedProjects.map((slug) => {
                    const proj = projectsData.find((p) => p.slug === slug);
                    if (!proj) return null;
                    return (
                      <Link
                        key={slug}
                        to={`/projects/${slug}`}
                        className="inline-flex items-center gap-1 font-medium text-[#141413] hover:text-[#1D4ED8] underline underline-offset-4 decoration-[#CFCBC2]"
                      >
                        {proj.title}
                        <ArrowUpRight size={12} />
                      </Link>
                    );
                  })}
                </div>
              </section>
            ))}
          </div>

          {/* FAQs */}
          <div className="max-w-3xl mx-auto mb-20">
            <h2 className="font-serif text-3xl font-semibold text-[#141413] mb-8">
              Common Questions
            </h2>
            <div className="divide-y divide-[#E5E2DC] border-y border-[#E5E2DC]">
              {serviceFaqs.map((faq, idx) => {
                const isOpen = openFaq === idx;
                return (
                  <div key={faq.q} className="py-5">
                    <button
                      type="button"
                      onClick={() => setOpenFaq(isOpen ? null : idx)}
                      className="w-full text-left flex items-center justify-between gap-4 font-medium text-[#141413] text-base sm:text-lg cursor-pointer"
                      aria-expanded={isOpen}
                    >
                      <span>{faq.q}</span>
                      <ChevronDown
                        size={18}
                        className={`text-[#86837C] transition-transform duration-200 shrink-0 ${
                          isOpen ? "rotate-180 text-[#141413]" : ""
                        }`}
                      />
                    </button>
                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.2 }}
                          className="overflow-hidden"
                        >
                          <p className="pt-3 text-sm sm:text-base text-[#575550] leading-relaxed">
                            {faq.a}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
