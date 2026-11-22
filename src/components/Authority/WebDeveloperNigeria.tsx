import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import {
  Zap,
  Smartphone,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  ArrowUpRight,
  ChevronDown,
  ExternalLink,
} from "lucide-react";
import SEOHead from "../SEO/SEOHead";
import ChromeButton from "../ui/chrome-button";
import { projectsData } from "../../data/projectsData";

const faqs = [
  {
    q: "Why hire a specialized React & Frontend developer in Nigeria over a generic agency?",
    a: "Generic agencies often hand projects off to template builders using heavy WordPress themes that load slowly on mobile networks. Working directly with Tobiloba Akala gives you clean React and TypeScript engineering, 95+ Core Web Vitals scores, and maintainable code built around your business goals.",
  },
  {
    q: "How do you optimize websites for Nigerian mobile network speeds (3G/4G)?",
    a: "I use dynamic code-splitting with Vite, modern WebP/AVIF responsive assets with clean skeleton placeholders, debounced data requests, and lean initial JavaScript bundles so pages become interactive quickly even on fluctuating cellular connections.",
  },
  {
    q: "Can you integrate local and international payment systems (Paystack, Flutterwave, Stripe)?",
    a: "Yes. I build clean checkout experiences and integrate payment flows for Paystack and Flutterwave across Nigeria and Africa, as well as Stripe for international customers.",
  },
  {
    q: "What is your typical turnaround time?",
    a: "A conversion-focused business website or landing page typically takes 1 to 2 weeks from kickoff to launch. Custom React web applications, booking platforms, and SaaS frontends generally range from 3 to 6 weeks with weekly live preview builds.",
  },
  {
    q: "Do you work with international clients outside of Nigeria?",
    a: "Yes. Based in Lagos (WAT / GMT+1), I regularly collaborate with founders, product teams, and agencies across the UK, US, Canada, and Europe with reliable async updates and Git-based workflows.",
  },
  {
    q: "What frontend stack do you specialize in?",
    a: "React 19, TypeScript, Next.js, Tailwind CSS, Vite, and Framer Motion on the frontend—paired cleanly with REST APIs, Supabase, and Firebase when projects need auth or real-time data.",
  },
];

export default function WebDeveloperNigeria() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const pageSchema = [
    {
      "@type": "ProfessionalService",
      "@id": "https://www.buildwithtobi.online/web-developer-nigeria#service",
      name: "Tobiloba Akala - Frontend Developer & React Specialist Nigeria",
      alternateName: "BuildWithTobi Web Development Nigeria",
      url: "https://www.buildwithtobi.online/web-developer-nigeria",
      image:
        "https://res.cloudinary.com/dw8jtwbka/image/upload/v1780309581/refined_profile_picture_keiybp.png",
      description:
        "Custom frontend development, React web applications, and fast business websites engineered in Lagos, Nigeria by Tobiloba Akala.",
      priceRange: "$$",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Lagos",
        addressCountry: "NG",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: "6.5244",
        longitude: "3.3792",
      },
      telephone: "+2347032533869",
      openingHoursSpecification: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        opens: "08:00",
        closes: "20:00",
      },
      areaServed: [
        { "@type": "Country", name: "Nigeria" },
        { "@type": "AdministrativeArea", name: "Lagos State" },
        { "@type": "AdministrativeArea", name: "Abuja FCT" },
        { "@type": "Country", name: "United Kingdom" },
        { "@type": "Country", name: "United States" },
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Frontend Development Services in Nigeria",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Custom React Web Application Development",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "High-Converting Business Websites & Landing Pages",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Website Speed Optimization & Core Web Vitals Engineering",
            },
          },
        ],
      },
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.buildwithtobi.online/web-developer-nigeria#faq",
      mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: faq.q,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.a,
        },
      })),
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.buildwithtobi.online/web-developer-nigeria#breadcrumbs",
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
          name: "Web Developer Nigeria",
          item: "https://www.buildwithtobi.online/web-developer-nigeria",
        },
      ],
    },
  ];

  const featuredProjects = projectsData.slice(0, 4);

  return (
    <>
      <SEOHead
        title="Frontend & Web Developer in Nigeria | React Websites & Web Apps"
        description="Hire Tobiloba Akala (BuildWithTobi), a Frontend Developer and React Specialist in Lagos, Nigeria. Custom React web applications, fast websites, and Core Web Vitals engineering."
        canonicalPath="/web-developer-nigeria"
        keywords="web developer Nigeria, frontend developer Nigeria, React developer Nigeria, website developer Lagos, hire React developer Nigeria, Tobiloba Akala, BuildWithTobi"
        jsonLd={pageSchema}
      />

      <div className="relative pt-32 pb-24 min-h-screen">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 relative z-10">
          {/* Quiet Breadcrumbs */}
          <nav
            aria-label="Breadcrumbs"
            className="mb-8 flex items-center gap-2 text-xs text-[#86837C]"
          >
            <Link to="/" className="hover:text-[#141413] transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-[#141413]">Web Developer Nigeria</span>
          </nav>

          {/* Editorial Hero */}
          <div className="max-w-3xl mb-16 pb-12 border-b border-[#E5E2DC]">
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-[#86837C] mb-4">
              Lagos, Nigeria · Available Worldwide
            </p>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-medium text-[#141413] tracking-[-0.025em] leading-[1.06] mb-6">
              Frontend &amp; Web Developer in{" "}
              <span className="italic text-[#1D4ED8]">Nigeria</span>
            </h1>
            <p className="text-base sm:text-lg text-[#575550] leading-relaxed mb-9 max-w-2xl">
              I&apos;m <strong className="font-semibold text-[#141413]">Tobiloba Akala</strong> (BuildWithTobi). I build fast React web applications and editorial-grade business websites engineered to load cleanly on mobile networks and turn visitors into customers.
            </p>

            <div className="flex flex-wrap items-center gap-3.5">
              <ChromeButton to="/contact#top" className="text-sm">
                Start a Project
              </ChromeButton>
              <HashLink
                smooth
                to="#case-studies"
                className="inline-flex items-center gap-1.5 px-6 py-3 rounded-full border border-[#D4D0C8] hover:border-[#141413] text-[#141413] text-sm font-medium transition-colors whitespace-nowrap shrink-0"
              >
                View Case Studies <ArrowRight size={15} />
              </HashLink>
            </div>
          </div>

          {/* Proof Strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mb-20">
            {[
              { value: "98+", label: "Avg. Lighthouse Score" },
              { value: "< 1.5s", label: "Mobile 4G Load Time" },
              { value: "19+", label: "Shipped Web Projects" },
              { value: "100%", label: "Custom React Code" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="bg-white border border-[#E5E2DC] rounded-2xl p-6"
              >
                <div className="font-serif text-3xl sm:text-4xl font-medium text-[#141413] tabular-nums mb-1">
                  {stat.value}
                </div>
                <div className="text-xs text-[#86837C]">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Engineering Edge */}
          <div className="mb-20">
            <div className="max-w-2xl mb-10">
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-[#86837C] mb-3">
                Performance First
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl font-medium text-[#141413] tracking-[-0.02em] mb-3">
                Built for Nigerian &amp; Global Mobile Networks
              </h2>
              <p className="text-sm sm:text-base text-[#575550] leading-relaxed">
                Most web traffic in Nigeria happens on smartphones over variable mobile bandwidth. Heavy themes lose visitors before the page finishes painting—custom React frontends fix that.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  icon: Zap,
                  title: "Lean Bundle Architecture",
                  desc: "Code-split Vite builds and modern WebP/AVIF assets keep initial payloads small for crisp interaction on 3G and 4G.",
                },
                {
                  icon: Smartphone,
                  title: "Mobile-First Interface Craft",
                  desc: "Generous touch targets, clean typographic hierarchy, and smooth layouts designed for one-handed phone browsing.",
                },
                {
                  icon: ShieldCheck,
                  title: "Payments & Booking Flows",
                  desc: "Clean integration with Paystack, Flutterwave, Supabase, and WhatsApp so customers can pay or book effortlessly.",
                },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.title}
                    className="bg-white border border-[#E5E2DC] rounded-2xl p-7"
                  >
                    <Icon size={20} className="text-[#1D4ED8] mb-5" />
                    <h3 className="font-serif text-xl font-medium text-[#141413] mb-2.5">
                      {item.title}
                    </h3>
                    <p className="text-sm text-[#575550] leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Core Services */}
          <div className="mb-20">
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-[#86837C] mb-3">
              Capabilities
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl font-medium text-[#141413] tracking-[-0.02em] mb-10">
              Specialized Frontend Services
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  num: "01",
                  title: "Custom React Web Applications",
                  desc: "Bespoke React 19 and TypeScript applications for SaaS products, interactive dashboards, and booking platforms.",
                  points: [
                    "Fast client-side state reactivity with zero page lag",
                    "Clean REST, Supabase, and Firebase integrations",
                    "Maintainable, component-driven codebase",
                  ],
                  cta: "Discuss application scope",
                },
                {
                  num: "02",
                  title: "Business Websites & Landing Pages",
                  desc: "Editorial, conversion-focused storefronts for agencies, clinics, founders, and service brands.",
                  points: [
                    "Sharp visual hierarchy and focused conversion paths",
                    "Interactive booking pickers and lead capture flows",
                    "Technical SEO, Open Graph, and JSON-LD structured data",
                  ],
                  cta: "Request a website quote",
                },
              ].map((svc) => (
                <div
                  key={svc.num}
                  className="bg-white border border-[#E5E2DC] rounded-2xl p-8 flex flex-col justify-between"
                >
                  <div>
                    <span className="font-mono text-xs text-[#1D4ED8] block mb-3">
                      {svc.num}
                    </span>
                    <h3 className="font-serif text-2xl font-medium text-[#141413] mb-3">
                      {svc.title}
                    </h3>
                    <p className="text-sm text-[#575550] leading-relaxed mb-6">
                      {svc.desc}
                    </p>
                    <ul className="space-y-2.5 mb-7 text-sm text-[#2D2B27]">
                      {svc.points.map((pt) => (
                        <li key={pt} className="flex items-start gap-2.5">
                          <CheckCircle2
                            size={15}
                            className="text-[#1D4ED8] mt-0.5 shrink-0"
                          />
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-[#141413] hover:text-[#1D4ED8] transition-colors"
                  >
                    {svc.cta} <ArrowUpRight size={15} />
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* Featured Case Studies */}
          <div id="case-studies" className="mb-20 scroll-mt-24">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.18em] text-[#86837C] mb-3">
                  Selected Work
                </p>
                <h2 className="font-serif text-3xl sm:text-4xl font-medium text-[#141413] tracking-[-0.02em]">
                  Featured Case Studies
                </h2>
              </div>
              <Link
                to="/projects"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-[#141413] hover:text-[#1D4ED8] transition-colors whitespace-nowrap shrink-0"
              >
                Browse all projects <ArrowUpRight size={15} />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
              {featuredProjects.map((proj) => (
                <div
                  key={proj.id}
                  className="bg-white border border-[#E5E2DC] hover:border-[#141413]/40 rounded-2xl overflow-hidden transition-colors group flex flex-col justify-between"
                >
                  <div className="relative aspect-[16/10] overflow-hidden bg-[#F1EFEA]">
                    <img
                      src={proj.imgPath}
                      alt={proj.title}
                      className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
                      loading="lazy"
                      referrerPolicy="no-referrer"
                    />
                  </div>

                  <div className="p-6 flex flex-col flex-grow justify-between">
                    <div>
                      <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-[#86837C] mb-2">
                        {proj.category}
                        {proj.metrics ? ` · ${proj.metrics}` : ""}
                      </p>
                      <h3 className="font-serif text-xl font-medium text-[#141413] mb-2 group-hover:text-[#1D4ED8] transition-colors">
                        {proj.title}
                      </h3>
                      <p className="text-[#575550] text-sm leading-relaxed mb-4 line-clamp-2">
                        {proj.description}
                      </p>
                      <p className="text-xs font-mono text-[#86837C] mb-6">
                        {proj.details.toolsUsed.join(" · ")}
                      </p>
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t border-[#E5E2DC]">
                      <Link
                        to={`/projects/${proj.slug}`}
                        className="text-[#141413] text-sm font-medium hover:text-[#1D4ED8] inline-flex items-center gap-1 transition-colors"
                      >
                        Read case study <ArrowUpRight size={14} />
                      </Link>
                      {proj.demoLink && (
                        <a
                          href={proj.demoLink}
                          target="_blank"
                          rel="noreferrer"
                          className="text-[#575550] hover:text-[#141413] text-xs inline-flex items-center gap-1"
                        >
                          Live site <ExternalLink size={12} />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* FAQ Accordion */}
          <div className="mb-20 max-w-3xl mx-auto">
            <div className="mb-10">
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-[#86837C] mb-3">
                FAQ
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl font-medium text-[#141413] tracking-[-0.02em]">
                Common Questions
              </h2>
            </div>

            <div className="divide-y divide-[#E5E2DC] border-y border-[#E5E2DC]">
              {faqs.map((faq, index) => {
                const isOpen = openFaq === index;
                return (
                  <div key={index}>
                    <button
                      type="button"
                      onClick={() => setOpenFaq(isOpen ? null : index)}
                      className="w-full text-left py-5 flex items-center justify-between gap-4 font-medium text-[#141413] text-base focus:outline-none"
                      aria-expanded={isOpen}
                    >
                      <span>{faq.q}</span>
                      <ChevronDown
                        size={18}
                        className={`text-[#86837C] transition-transform duration-200 shrink-0 ${
                          isOpen ? "rotate-180 text-[#1D4ED8]" : ""
                        }`}
                      />
                    </button>
                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.22 }}
                          className="overflow-hidden"
                        >
                          <p className="pb-5 text-[#575550] text-sm sm:text-[15px] leading-relaxed">
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

          {/* Closing CTA */}
          <div className="bg-white border border-[#E5E2DC] rounded-3xl p-8 sm:p-14 text-center max-w-4xl mx-auto">
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-[#86837C] mb-3">
              Ready When You Are
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl font-medium text-[#141413] mb-4 tracking-[-0.02em]">
              Let&apos;s Ship Your Next Web Product
            </h2>
            <p className="text-[#575550] text-base mb-8 max-w-xl mx-auto leading-relaxed">
              Whether you&apos;re a growing Nigerian brand or an international startup needing sharp React frontend engineering, let&apos;s talk.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3.5">
              <ChromeButton to="/contact#top" className="text-sm">
                Book a Discovery Call
              </ChromeButton>
              <a
                href="https://wa.me/2347032533869"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-6 py-3 rounded-full border border-[#D4D0C8] hover:border-[#141413] text-[#141413] text-sm font-medium transition-colors whitespace-nowrap shrink-0"
              >
                WhatsApp (+234 703 253 3869) <ArrowUpRight size={15} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
