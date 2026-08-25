import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Link } from "react-router-dom";
import { 
  Code2, 
  Layout, 
  Database, 
  Zap, 
  CheckCircle2, 
  ArrowRight, 
  ExternalLink, 
  ChevronDown, 
  Sparkles, 
  Layers 
} from "lucide-react";
import SEOHead from "../SEO/SEOHead";
import ChromeButton from "../ui/chrome-button";
import { projectsData } from "../../data/projectsData";

const servicesList = [
  {
    id: "frontend-react",
    title: "Frontend Engineering & React Applications",
    tagline: "Ultra-fast, component-driven user interfaces built with React 19 and Tailwind CSS.",
    icon: <Code2 className="w-8 h-8 text-[#00e5ff]" />,
    description: "I build responsive, pixel-perfect frontend applications from scratch or convert complex Figma designs into clean, maintainable code. Every interface is crafted with strict type-safety, fluid transitions, and zero unnecessary re-renders.",
    deliverables: [
      "Modular React 19 + TypeScript component architecture",
      "Tailwind CSS v4 utility design systems & dark mode styling",
      "Fluid page & state animations via Framer Motion / Motion",
      "API data fetching, error boundary handling, and caching states",
      "Accessible semantic HTML conforming to WCAG AA guidelines"
    ],
    perfectFor: "Startups building SaaS products, product teams needing frontend expertise, and modern web applications.",
    relatedProjects: ["cinescope", "roitech-ai-learniq", "julios-pizza", "cgpa-calculator"]
  },
  {
    id: "business-websites",
    title: "High-Converting Business Websites & Landing Pages",
    tagline: "Strategic digital storefronts engineered to build trust and capture qualified leads.",
    icon: <Layout className="w-8 h-8 text-[#c770f0]" />,
    description: "A website should be your hardest-working salesperson. I design and build modern, high-contrast web pages with clear visual hierarchies, fast load times, and conversion-focused call-to-action funnels that turn visitors into paying customers.",
    deliverables: [
      "Mobile-first responsive layouts tested across real devices",
      "Interactive quote calculators, custom sliders, and lead funnels",
      "Automated WhatsApp, email, and CRM contact triggers",
      "Full OpenGraph preview tags, metadata, and JSON-LD schema",
      "Sub-1.5 second initial load times on mobile 4G networks"
    ],
    perfectFor: "Agencies, healthcare clinics, local businesses, consulting practices, and e-commerce brands.",
    relatedProjects: ["peak-echo-digitals", "nextclean", "riad-dentist-care", "heritage-kitchen"]
  },
  {
    id: "custom-mvp",
    title: "Custom Web App MVPs & Booking Platforms",
    tagline: "End-to-end full-stack solutions with auth, database synchronization, and payment gateways.",
    icon: <Database className="w-8 h-8 text-green-400]" />,
    description: "From concept to production launch, I build scalable Minimum Viable Products (MVPs) and booking engines. Utilizing lightweight serverless backends like Supabase and Firebase, we ship secure products rapidly without bloated infrastructure costs.",
    deliverables: [
      "Relational database design (PostgreSQL/Supabase) with Row-Level Security",
      "Client authentication (Email, Magic Links, OAuth, Web3 Wallets)",
      "Dynamic scheduling engines with concurrency-safe availability locks",
      "Local & global payment gateways (Paystack, Flutterwave, Stripe)",
      "Admin dashboards for managing bookings, orders, and content"
    ],
    perfectFor: "Founders launching digital products, service providers needing custom booking, and booking-heavy businesses.",
    relatedProjects: ["makeup-booking-platform", "trendy-transit", "nexchat3", "forzchain"]
  },
  {
    id: "performance-seo",
    title: "Performance Optimization & Technical SEO Rebuilds",
    tagline: "Transform sluggish, low-converting websites into 95+ Lighthouse speed benchmarks.",
    icon: <Zap className="w-8 h-8 text-[#00e5ff]" />,
    description: "Is your current website lagging on mobile or losing Google search rankings? I audit, refactor, and migrate bloated websites to lightweight modern architectures that achieve 95+ Core Web Vitals and climb organic search results.",
    deliverables: [
      "Lighthouse performance audit and code-splitting refactor",
      "Asset compression, modern WebP/AVIF formatting, and lazy-loading",
      "Removal of layout thrashing and Cumulative Layout Shift (CLS < 0.01)",
      "Deep JSON-LD structured data (Person, WebSite, ProfessionalService, FAQs)",
      "Robots.txt, XML sitemap generation, and search engine crawl setup"
    ],
    perfectFor: "Existing businesses losing mobile visitors due to slow load times or missing search presence.",
    relatedProjects: ["cinescope", "peak-echo-digitals", "nextclean", "pixel-clean-ai"]
  }
];

const serviceFaqs = [
  {
    q: "How much do your web development services cost?",
    a: "Pricing is tailored to the functional complexity and scope of your project. High-converting landing pages and business websites typically start at accessible fixed tiers, while custom full-stack web applications and SaaS MVPs are priced based on milestones. Contact us for a transparent, itemized quote with zero hidden fees."
  },
  {
    q: "How long does a typical project take to deliver?",
    a: "Standard business websites and landing pages are completed within 1 to 2 weeks. Custom React applications and full-stack booking platforms typically require 3 to 5 weeks. We establish clear milestone timelines at the start and provide staging previews along the way."
  },
  {
    q: "Do I get full ownership of the source code upon completion?",
    a: "100% yes. You receive full ownership of all source code, design assets, and repository access upon project completion and final handover. No vendor lock-in."
  },
  {
    q: "What maintenance and post-launch support do you provide?",
    a: "All projects include a complimentary 30-day post-launch support period for any bug fixes, technical adjustments, or performance questions. We also offer ongoing monthly maintenance agreements for active feature scaling."
  }
];

export default function Services() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const servicesSchema = [
    {
      "@type": "Service",
      "@id": "https://www.buildwithtobi.online/services#service-catalog",
      "name": "Web Development & Frontend Engineering Services",
      "provider": {
        "@id": "https://www.buildwithtobi.online/#person"
      },
      "serviceType": "Web Development",
      "description": "Professional frontend engineering, custom React web applications, conversion-focused business websites, and technical SEO performance optimization by Tobiloba Akala.",
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Core Service Capabilities",
        "itemListElement": servicesList.map((s, idx) => ({
          "@type": "Offer",
          "position": idx + 1,
          "itemOffered": {
            "@type": "Service",
            "name": s.title,
            "description": s.description
          }
        }))
      }
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.buildwithtobi.online/services#faq",
      "mainEntity": serviceFaqs.map((f) => ({
        "@type": "Question",
        "name": f.q,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": f.a
        }
      }))
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.buildwithtobi.online/services#breadcrumbs",
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
          "name": "Services",
          "item": "https://www.buildwithtobi.online/services"
        }
      ]
    }
  ];

  return (
    <>
      <SEOHead
        title="Web Development Services & Capabilities | Tobiloba Akala"
        description="Explore professional web development services by Tobiloba Akala (BuildWithTobi): Custom React Applications, High-Converting Business Websites, SaaS MVPs, and Performance SEO."
        canonicalPath="/services"
        keywords="web development services, React developer services, hire frontend developer, custom website design, web app development, landing page development, Tobiloba Akala services, BuildWithTobi"
        jsonLd={servicesSchema}
      />

      <div className="relative pt-32 pb-24 min-h-screen text-white">
        {/* Background Ambient Glow */}
        <div className="absolute top-20 right-1/4 w-96 h-96 bg-[#c770f0]/10 rounded-full blur-[140px] pointer-events-none"></div>
        <div className="absolute top-80 left-1/4 w-96 h-96 bg-[#00e5ff]/10 rounded-full blur-[140px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Breadcrumb Navigation */}
          <nav aria-label="Breadcrumbs" className="mb-6 flex items-center gap-2 text-xs sm:text-sm text-gray-400">
            <Link to="/" className="hover:text-[#00e5ff] transition-colors">Home</Link>
            <span>/</span>
            <span className="text-[#00e5ff] font-medium">Services</span>
          </nav>

          {/* Header */}
          <div className="text-center max-w-4xl mx-auto mb-20">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs sm:text-sm text-[#00e5ff] mb-6 backdrop-blur-md">
              <Sparkles size={14} />
              <span>Full-Stack Engineering & High-Converting Web Design</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold tracking-tight mb-6">
              Engineering Digital Products That <span className="text-gradient">Drive Results</span>
            </h1>

            <p className="text-lg sm:text-xl text-gray-300 font-light leading-relaxed mb-10 max-w-3xl mx-auto">
              From high-performance React web applications to conversion-focused business websites, every service is tailored to maximize speed, user experience, and revenue generation.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <ChromeButton to="/contact#top" className="!py-3 !px-8 text-sm uppercase tracking-wider font-bold">
                Get a Custom Quote
              </ChromeButton>
              <Link 
                to="/web-developer-nigeria" 
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/10 hover:border-[#c770f0]/50 bg-white/5 hover:bg-white/10 text-white font-medium text-sm transition-all duration-300"
              >
                Nigeria Web Dev Hub <ArrowRight size={16} />
              </Link>
            </div>
          </div>

          {/* Service Cards Grid */}
          <div className="space-y-12 mb-24">
            {servicesList.map((service, index) => (
              <div 
                key={service.id}
                id={service.id}
                className="bg-[#151421]/80 backdrop-blur-md rounded-3xl border border-white/5 p-8 sm:p-12 hover:border-white/15 transition-all duration-300 shadow-xl"
              >
                <div className="flex flex-col lg:flex-row items-start justify-between gap-8 mb-8 pb-8 border-b border-white/5">
                  <div className="lg:w-2/3">
                    <div className="bg-white/5 w-14 h-14 rounded-2xl flex items-center justify-center mb-6 border border-white/10">
                      {service.icon}
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white mb-2">
                      {service.title}
                    </h2>
                    <p className="text-[#00e5ff] text-sm sm:text-base font-medium mb-4">
                      {service.tagline}
                    </p>
                    <p className="text-gray-300 font-light leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  <div className="lg:w-1/3 w-full bg-black/40 p-6 rounded-2xl border border-white/5">
                    <div className="text-xs uppercase font-semibold text-gray-400 tracking-wider mb-2">
                      Perfect For
                    </div>
                    <p className="text-sm text-gray-200 font-light mb-6">
                      {service.perfectFor}
                    </p>
                    <ChromeButton to="/contact#top" className="w-full text-center !py-2.5 text-xs uppercase tracking-wider font-bold">
                      Book This Service
                    </ChromeButton>
                  </div>
                </div>

                {/* Deliverables List */}
                <div className="mb-8">
                  <h3 className="text-sm uppercase tracking-wider font-semibold text-gray-400 mb-4">
                    What's Included
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {service.deliverables.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-sm text-gray-200">
                        <CheckCircle2 size={16} className="text-[#00e5ff] flex-shrink-0 mt-0.5" />
                        <span className="font-light">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Relevant Project Examples */}
                {service.relatedProjects.length > 0 && (
                  <div className="pt-6 border-t border-white/5">
                    <div className="text-xs uppercase tracking-wider font-semibold text-gray-400 mb-3 flex items-center gap-1.5">
                      <Layers size={14} className="text-[#c770f0]" /> Relevant Project Case Studies
                    </div>
                    <div className="flex flex-wrap gap-3">
                      {service.relatedProjects.map((slug) => {
                        const proj = projectsData.find((p) => p.slug === slug);
                        if (!proj) return null;
                        return (
                          <Link
                            key={slug}
                            to={`/projects/${slug}`}
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 hover:border-[#00e5ff]/40 text-xs text-gray-300 hover:text-white transition-colors"
                          >
                            <span className="text-white font-medium">{proj.title}</span>
                            <ArrowRight size={12} className="text-[#00e5ff]" />
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* FAQs Section */}
          <div className="mb-24 max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white mb-3">
                Service & Collaboration FAQs
              </h2>
              <p className="text-gray-400 font-light text-sm">
                Clear answers regarding timelines, pricing structure, code ownership, and warranties.
              </p>
            </div>

            <div className="space-y-4">
              {serviceFaqs.map((faq, index) => {
                const isOpen = openFaq === index;
                return (
                  <div 
                    key={index} 
                    className="bg-[#151421]/70 backdrop-blur-md rounded-2xl border border-white/5 overflow-hidden transition-all duration-300 hover:border-white/15"
                  >
                    <button
                      onClick={() => setOpenFaq(isOpen ? null : index)}
                      className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 font-semibold text-white sm:text-lg focus:outline-none"
                      aria-expanded={isOpen}
                    >
                      <span>{faq.q}</span>
                      <ChevronDown 
                        size={20} 
                        className={`text-[#00e5ff] transition-transform duration-300 flex-shrink-0 ${isOpen ? "rotate-180" : ""}`} 
                      />
                    </button>
                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.25 }}
                        >
                          <div className="px-5 sm:px-6 pb-6 text-gray-300 text-sm sm:text-base leading-relaxed font-light border-t border-white/5 pt-4">
                            {faq.a}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Bottom Conversion CTA */}
          <div className="rounded-3xl bg-gradient-to-r from-[#1b1a2e] to-[#151421] border border-white/10 p-8 sm:p-14 text-center max-w-4xl mx-auto shadow-2xl">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white mb-4">
              Have a Specific Project in Mind?
            </h2>
            <p className="text-gray-300 text-base sm:text-lg font-light mb-8 max-w-2xl mx-auto leading-relaxed">
              Let's evaluate your product goals, map the optimal technology architecture, and bring your web project to life.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <ChromeButton to="/contact#top" className="!py-3 !px-8 text-sm uppercase tracking-wider font-bold">
                Get in Touch Today
              </ChromeButton>
              <Link
                to="/projects"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/10 hover:border-white/30 bg-white/5 text-white font-medium text-sm transition-all"
              >
                Browse Portfolio Gallery <ArrowRight size={16} />
              </Link>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}
