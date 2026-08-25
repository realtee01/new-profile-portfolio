import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { 
  Zap, 
  Smartphone, 
  ShieldCheck, 
  Code2, 
  TrendingUp, 
  CheckCircle2, 
  ArrowRight, 
  ChevronDown, 
  ExternalLink, 
  MapPin, 
  Layers, 
  Sparkles 
} from "lucide-react";
import SEOHead from "../SEO/SEOHead";
import ChromeButton from "../ui/chrome-button";
import { projectsData } from "../../data/projectsData";

const faqs = [
  {
    q: "Why hire a specialized React & Frontend developer in Nigeria over a generic agency?",
    a: "Generic agencies often outsource to junior builders using heavy, bloated WordPress or drag-and-drop themes that load slowly on mobile networks and break easily. When you work with Tobiloba Akala (BuildWithTobi), you get dedicated engineering craftsmanship: bespoke React code, tailored state management, 95+ Core Web Vitals performance scores, and clean maintainable code written specifically for your business goals."
  },
  {
    q: "How do you optimize websites for Nigerian cellular network speeds (3G/4G)?",
    a: "We implement dynamic code-splitting via Vite, modern responsive image formats (WebP/AVIF) with CSS skeleton placeholders, client-side data caching with debounce mechanisms, and lightweight bundle architectures under 70KB initial payload. This ensures your website becomes interactive in under 1.5 seconds even on fluctuating mobile data in Lagos, Abuja, Port Harcourt, or anywhere globally."
  },
  {
    q: "Can you integrate local and international payment systems (Paystack, Flutterwave, Stripe)?",
    a: "Yes. We have extensive experience integrating secure checkout flows and payment webhooks including Paystack and Flutterwave for Nigerian and African naira/card payments, as well as Stripe and cryptocurrency/Web3 wallet integrations for global clientele."
  },
  {
    q: "What is your typical development process and turnaround time?",
    a: "A standard high-converting business website or landing page typically takes 1 to 2 weeks from architectural planning to production launch. Complex custom web applications, SaaS MVPs, and booking platforms range from 3 to 6 weeks. Every project includes wireframing review, weekly progress builds, testing across real mobile devices, SEO schema injection, and a post-launch warranty."
  },
  {
    q: "Do you work with international clients outside of Nigeria?",
    a: "Yes! While based in Lagos, Nigeria (WAT / GMT+1), Tobiloba regularly collaborates with startups, agencies, and businesses across the UK, United States, Canada, and Europe, maintaining clear async communication, Git-based version control, and flexible meeting scheduling."
  },
  {
    q: "What technical stack do you specialize in?",
    a: "Our core stack centers on React 19, TypeScript, Tailwind CSS v4, Next.js, Vite, and Framer Motion for frontends; paired with Supabase, PostgreSQL, Firebase, Node.js, and REST/GraphQL APIs for robust backend and data synchronization."
  }
];

export default function WebDeveloperNigeria() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  // Schema markup specifically for Nigerian web developer authority
  const pageSchema = [
    {
      "@type": "ProfessionalService",
      "@id": "https://www.buildwithtobi.online/web-developer-nigeria#service",
      "name": "Tobiloba Akala - Web Developer & Frontend Specialist Nigeria",
      "alternateName": "BuildWithTobi Web Development Nigeria",
      "url": "https://www.buildwithtobi.online/web-developer-nigeria",
      "image": "https://res.cloudinary.com/dw8jtwbka/image/upload/v1780309581/refined_profile_picture_keiybp.png",
      "description": "Professional custom web development, React web applications, and high-performance business websites engineered in Lagos, Nigeria by Tobiloba Akala.",
      "priceRange": "$$",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Lagos",
        "addressCountry": "NG"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "6.5244",
        "longitude": "3.3792"
      },
      "telephone": "+2347032533869",
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday"
        ],
        "opens": "08:00",
        "closes": "20:00"
      },
      "areaServed": [
        {
          "@type": "Country",
          "name": "Nigeria"
        },
        {
          "@type": "AdministrativeArea",
          "name": "Lagos State"
        },
        {
          "@type": "AdministrativeArea",
          "name": "Abuja FCT"
        },
        {
          "@type": "Country",
          "name": "United Kingdom"
        },
        {
          "@type": "Country",
          "name": "United States"
        }
      ],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Web Development Services in Nigeria",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Custom React Web Application Development"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "High-Converting Business Websites & Landing Pages"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Website Speed Optimization & Core Web Vitals Engineering"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Appointment & Online Booking Platform Architecture"
            }
          }
        ]
      }
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.buildwithtobi.online/web-developer-nigeria#faq",
      "mainEntity": faqs.map((faq) => ({
        "@type": "Question",
        "name": faq.q,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.a
        }
      }))
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.buildwithtobi.online/web-developer-nigeria#breadcrumbs",
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
          "name": "Web Developer Nigeria",
          "item": "https://www.buildwithtobi.online/web-developer-nigeria"
        }
      ]
    }
  ];

  const featuredProjects = projectsData.slice(0, 4);

  return (
    <>
      <SEOHead
        title="Web Developer in Nigeria | High-Performance React Websites & Web Apps"
        description="Hire Tobiloba Akala (BuildWithTobi), a top-tier Web Developer and Frontend Specialist in Lagos, Nigeria. Custom React web applications, conversion-driven websites, and high-speed digital experiences."
        canonicalPath="/web-developer-nigeria"
        keywords="web developer Nigeria, frontend developer Nigeria, React developer Nigeria, website developer Lagos, web development company Nigeria, hire React developer Nigeria, custom web apps Nigeria, Tobiloba Akala, BuildWithTobi"
        jsonLd={pageSchema}
      />

      <div className="relative pt-32 pb-24 min-h-screen text-white">
        {/* Background glow accents */}
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-[#00e5ff]/10 rounded-full blur-[140px] pointer-events-none"></div>
        <div className="absolute top-60 right-1/4 w-96 h-96 bg-[#c770f0]/10 rounded-full blur-[140px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Breadcrumb Navigation */}
          <nav aria-label="Breadcrumbs" className="mb-6 flex items-center gap-2 text-xs sm:text-sm text-gray-400">
            <Link to="/" className="hover:text-[#00e5ff] transition-colors">Home</Link>
            <span>/</span>
            <span className="text-[#00e5ff] font-medium">Web Developer Nigeria</span>
          </nav>

          {/* Hero Section */}
          <div className="text-center max-w-4xl mx-auto mb-20">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs sm:text-sm text-gray-300 mb-6 backdrop-blur-md">
              <MapPin size={14} className="text-[#00e5ff]" />
              <span>Based in Lagos, Nigeria • Serving Ambitious Clients Globally</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold tracking-tight mb-6 leading-tight">
              Web Developer & Frontend Specialist in <span className="text-gradient">Nigeria</span>
            </h1>

            <p className="text-lg sm:text-xl text-gray-300 font-light leading-relaxed mb-10 max-w-3xl mx-auto">
              I am <strong className="text-white font-semibold">Tobiloba Akala</strong> (<span className="text-[#c770f0] font-medium">BuildWithTobi</span>). I engineer high-converting websites and lightning-fast React web applications engineered to outperform generic templates on mobile networks and turn visitors into paying clients.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <ChromeButton to="/contact#top" className="!py-3 !px-8 text-sm uppercase tracking-wider font-bold">
                Start Your Project
              </ChromeButton>
              <HashLink 
                smooth 
                to="#case-studies" 
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/10 hover:border-[#00e5ff]/50 bg-white/5 hover:bg-white/10 text-white font-medium text-sm transition-all duration-300"
              >
                View Case Studies <ArrowRight size={16} />
              </HashLink>
            </div>
          </div>

          {/* Key Metrics / Proof Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-24">
            <div className="bg-[#151421]/80 backdrop-blur-md p-6 rounded-2xl border border-white/5 text-center">
              <div className="text-3xl sm:text-4xl font-bold text-[#00e5ff] font-serif mb-1">98+</div>
              <div className="text-xs sm:text-sm text-gray-400 font-medium">Avg. Performance Score</div>
            </div>
            <div className="bg-[#151421]/80 backdrop-blur-md p-6 rounded-2xl border border-white/5 text-center">
              <div className="text-3xl sm:text-4xl font-bold text-[#c770f0] font-serif mb-1">&lt; 1.5s</div>
              <div className="text-xs sm:text-sm text-gray-400 font-medium">Mobile 4G Load Time</div>
            </div>
            <div className="bg-[#151421]/80 backdrop-blur-md p-6 rounded-2xl border border-white/5 text-center">
              <div className="text-3xl sm:text-4xl font-bold text-white font-serif mb-1">17+</div>
              <div className="text-xs sm:text-sm text-gray-400 font-medium">Delivered Web Projects</div>
            </div>
            <div className="bg-[#151421]/80 backdrop-blur-md p-6 rounded-2xl border border-white/5 text-center">
              <div className="text-3xl sm:text-4xl font-bold text-green-400 font-serif mb-1">100%</div>
              <div className="text-xs sm:text-sm text-gray-400 font-medium">Custom Responsive Code</div>
            </div>
          </div>

          {/* Why Businesses Need Custom Code in Nigeria */}
          <div className="mb-24">
            <div className="max-w-3xl mb-12">
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white mb-4">
                The Reality of Building for Nigerian & Global Audiences
              </h2>
              <p className="text-gray-300 leading-relaxed font-light">
                Over 82% of internet traffic in Nigeria originates from mobile devices operating on variable bandwidth. When businesses rely on slow, plugin-heavy WordPress templates or cookie-cutter builders, mobile bounce rates soar and sales drop. Here is how our engineering approach creates competitive advantages:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-[#151421]/60 backdrop-blur-md p-8 rounded-2xl border border-white/5 hover:border-[#00e5ff]/30 transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-[#00e5ff]/10 text-[#00e5ff] flex items-center justify-center mb-6">
                  <Zap size={24} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Bandwidth-Frugal Architecture</h3>
                <p className="text-gray-300 font-light text-sm leading-relaxed">
                  We isolate initial JavaScript payloads under 70KB and apply progressive WebP/AVIF image delivery, ensuring instant interactions even on congested 3G/4G connections.
                </p>
              </div>

              <div className="bg-[#151421]/60 backdrop-blur-md p-8 rounded-2xl border border-white/5 hover:border-[#c770f0]/30 transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-[#c770f0]/10 text-[#c770f0] flex items-center justify-center mb-6">
                  <Smartphone size={24} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Mobile-First UI/UX Precision</h3>
                <p className="text-gray-300 font-light text-sm leading-relaxed">
                  Every button, touch target (44px+ minimum), sticky CTA, and navigation drawer is mathematically designed for effortless one-handed smartphone use.
                </p>
              </div>

              <div className="bg-[#151421]/60 backdrop-blur-md p-8 rounded-2xl border border-white/5 hover:border-green-400/30 transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-green-400/10 text-green-400 flex items-center justify-center mb-6">
                  <ShieldCheck size={24} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Seamless Payments & Bookings</h3>
                <p className="text-gray-300 font-light text-sm leading-relaxed">
                  Direct integration with Paystack, Flutterwave, Supabase, and WhatsApp dispatch enables customers to pay, book, and communicate without administrative delays.
                </p>
              </div>
            </div>
          </div>

          {/* Core Services Breakdown */}
          <div className="mb-24">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white mb-4">
                Specialized Web Development Services
              </h2>
              <p className="text-gray-400 font-light">
                Tailored engineering solutions for startups, growing Nigerian businesses, and international founders.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              <div className="bg-[#151421]/70 backdrop-blur-md p-8 rounded-2xl border border-white/5 flex flex-col justify-between group hover:border-[#00e5ff]/40 transition-all">
                <div>
                  <div className="text-[#00e5ff] text-xs font-semibold uppercase tracking-wider mb-2 flex items-center gap-1.5">
                    <Code2 size={14} /> Full-Stack & Frontend
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">Custom React Web Applications</h3>
                  <p className="text-gray-300 font-light text-sm leading-relaxed mb-6">
                    Bespoke web applications built with React 19, TypeScript, and modern state architectures. Ideal for SaaS MVPs, interactive dashboards, internal operational tools, and customer portals.
                  </p>
                  <ul className="space-y-2 mb-6 text-sm text-gray-300">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={16} className="text-[#00e5ff]" /> Instant client-side state reactivity without page reloads
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={16} className="text-[#00e5ff]" /> RESTful & Supabase/Firebase database integrations
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={16} className="text-[#00e5ff]" /> Robust authentication & role-based access controls
                    </li>
                  </ul>
                </div>
                <Link to="/contact" className="text-[#00e5ff] text-sm font-semibold inline-flex items-center gap-1.5 hover:underline">
                  Discuss Application Scope <ArrowRight size={14} />
                </Link>
              </div>

              <div className="bg-[#151421]/70 backdrop-blur-md p-8 rounded-2xl border border-white/5 flex flex-col justify-between group hover:border-[#c770f0]/40 transition-all">
                <div>
                  <div className="text-[#c770f0] text-xs font-semibold uppercase tracking-wider mb-2 flex items-center gap-1.5">
                    <TrendingUp size={14} /> High-Conversion Architecture
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">Business Websites & Landing Pages</h3>
                  <p className="text-gray-300 font-light text-sm leading-relaxed mb-6">
                    Conversion-engineered digital storefronts for agencies, clinics, consulting firms, hospitality, and service providers looking to dominate their market.
                  </p>
                  <ul className="space-y-2 mb-6 text-sm text-gray-300">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={16} className="text-[#c770f0]" /> High-contrast typography and clear call-to-action funnels
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={16} className="text-[#c770f0]" /> Interactive quote calculators and booking pickers
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={16} className="text-[#c770f0]" /> Deep SEO metadata, Open Graph cards, and JSON-LD schema
                    </li>
                  </ul>
                </div>
                <Link to="/contact" className="text-[#c770f0] text-sm font-semibold inline-flex items-center gap-1.5 hover:underline">
                  Request Website Quote <ArrowRight size={14} />
                </Link>
              </div>

            </div>
          </div>

          {/* Featured Case Studies Spotlight */}
          <div id="case-studies" className="mb-24 scroll-mt-24">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
              <div>
                <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white mb-3">
                  Featured Case Studies
                </h2>
                <p className="text-gray-400 font-light max-w-xl">
                  Explore real-world applications engineered for real businesses and high-performance requirements.
                </p>
              </div>
              <Link to="/projects" className="text-[#00e5ff] font-medium text-sm inline-flex items-center gap-1.5 hover:underline whitespace-nowrap">
                Browse All 17+ Projects <ArrowRight size={16} />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {featuredProjects.map((proj) => (
                <div 
                  key={proj.id}
                  className="bg-[#151421]/80 backdrop-blur-md rounded-2xl border border-white/5 overflow-hidden hover:border-[#00e5ff]/30 transition-all duration-300 group flex flex-col justify-between"
                >
                  <div className="relative h-60 overflow-hidden bg-black/40">
                    <img 
                      src={proj.imgPath} 
                      alt={proj.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-xs font-semibold text-white border border-white/10">
                      {proj.category}
                    </div>
                    {proj.metrics && (
                      <div className="absolute bottom-3 left-3 right-3 bg-black/70 backdrop-blur-md px-3 py-1.5 rounded-lg text-xs font-medium text-[#00e5ff] border border-white/10 line-clamp-1">
                        ⚡ {proj.metrics}
                      </div>
                    )}
                  </div>

                  <div className="p-6 flex flex-col flex-grow justify-between">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#00e5ff] transition-colors">
                        {proj.title}
                      </h3>
                      <p className="text-gray-300 text-sm font-light leading-relaxed mb-4 line-clamp-2">
                        {proj.description}
                      </p>
                      <div className="flex flex-wrap gap-1.5 mb-6">
                        {proj.details.toolsUsed.map((tool, idx) => (
                          <span key={idx} className="bg-white/5 border border-white/10 px-2 py-0.5 rounded text-[11px] text-gray-300">
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t border-white/5">
                      <Link 
                        to={`/projects/${proj.slug}`} 
                        className="text-white text-xs sm:text-sm font-semibold hover:text-[#00e5ff] inline-flex items-center gap-1 transition-colors"
                      >
                        Read Deep Case Study <ArrowRight size={14} />
                      </Link>
                      {proj.demoLink && (
                        <a 
                          href={proj.demoLink} 
                          target="_blank" 
                          rel="noreferrer" 
                          className="text-gray-400 hover:text-white text-xs inline-flex items-center gap-1"
                        >
                          Live Demo <ExternalLink size={12} />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Development Process */}
          <div className="mb-24 bg-[#151421]/60 backdrop-blur-md p-8 sm:p-12 rounded-3xl border border-white/5">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="text-3xl font-serif font-bold text-white mb-3">Our 4-Stage Development Process</h2>
              <p className="text-gray-400 font-light text-sm">
                Transparent milestones with continuous progress demos and zero surprise delays.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-black/30 p-6 rounded-2xl border border-white/5 relative">
                <div className="text-2xl font-bold font-serif text-[#00e5ff] mb-2">01</div>
                <h3 className="text-lg font-bold text-white mb-2">Discovery & Architecture</h3>
                <p className="text-gray-400 text-xs leading-relaxed font-light">
                  We analyze your user personas, conversion goals, content architecture, and tech stack requirements.
                </p>
              </div>

              <div className="bg-black/30 p-6 rounded-2xl border border-white/5 relative">
                <div className="text-2xl font-bold font-serif text-[#c770f0] mb-2">02</div>
                <h3 className="text-lg font-bold text-white mb-2">UI/UX & Interactive Prototypes</h3>
                <p className="text-gray-400 text-xs leading-relaxed font-light">
                  Crafting high-fidelity wireframes, typography pairings, and responsive components tailored for your brand.
                </p>
              </div>

              <div className="bg-black/30 p-6 rounded-2xl border border-white/5 relative">
                <div className="text-2xl font-bold font-serif text-[#00e5ff] mb-2">03</div>
                <h3 className="text-lg font-bold text-white mb-2">Clean React Engineering</h3>
                <p className="text-gray-400 text-xs leading-relaxed font-light">
                  Writing clean TypeScript code, setting up databases (Supabase/Firebase), and integrating API endpoints.
                </p>
              </div>

              <div className="bg-black/30 p-6 rounded-2xl border border-white/5 relative">
                <div className="text-2xl font-bold font-serif text-green-400 mb-2">04</div>
                <h3 className="text-lg font-bold text-white mb-2">Auditing & Production Launch</h3>
                <p className="text-gray-400 text-xs leading-relaxed font-light">
                  Rigorous cross-device testing, 95+ Core Web Vitals optimization, JSON-LD schema injection, and DNS deployment.
                </p>
              </div>
            </div>
          </div>

          {/* Interactive FAQ Section with Schema */}
          <div className="mb-24 max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white mb-3">
                Frequently Asked Questions
              </h2>
              <p className="text-gray-400 font-light text-sm">
                Got questions about hiring a web developer in Nigeria? Here are clear, straightforward answers.
              </p>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, index) => {
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

          {/* Final Call to Action */}
          <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-[#1b1a2e] to-[#151421] border border-white/10 p-8 sm:p-14 text-center max-w-4xl mx-auto shadow-2xl">
            <div className="absolute inset-0 bg-radial from-[#00e5ff]/10 via-transparent to-transparent pointer-events-none"></div>
            
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white mb-4 relative z-10">
              Ready to Build a High-Performance Digital Product?
            </h2>
            <p className="text-gray-300 text-base sm:text-lg font-light mb-8 max-w-2xl mx-auto relative z-10 leading-relaxed">
              Whether you are an ambitious business in Nigeria or an international founder seeking world-class frontend engineering, let's turn your vision into production reality.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 relative z-10">
              <ChromeButton to="/contact#top" className="!py-3 !px-8 text-sm uppercase tracking-wider font-bold">
                Get a Free Consultation & Quote
              </ChromeButton>
              <a 
                href="https://wa.me/2347032533869" 
                target="_blank" 
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-green-500/40 hover:border-green-400 bg-green-500/10 hover:bg-green-500/20 text-green-400 font-medium text-sm transition-all"
              >
                Chat on WhatsApp (+234 703 253 3869)
              </a>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}
