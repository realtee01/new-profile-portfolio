import { useState } from "react";
import { 
  Download, 
  Printer, 
  Mail, 
  Phone, 
  MapPin, 
  Globe, 
  Github, 
  CheckCircle2, 
  Briefcase, 
  GraduationCap, 
  Code2, 
  Star
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
      "name": "Tobiloba Akala - Professional Frontend Engineer & React Specialist Resume",
      "url": "https://www.buildwithtobi.online/resume",
      "author": {
        "@id": "https://www.buildwithtobi.online/#person"
      },
      "fileFormat": "application/pdf"
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.buildwithtobi.online/resume#breadcrumbs",
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
          "name": "Resume",
          "item": "https://www.buildwithtobi.online/resume"
        }
      ]
    }
  ];

  return (
    <div className="relative pt-28 sm:pt-32 pb-20 min-h-screen flex flex-col items-center">
      <SEOHead
        title="Resume | Tobiloba Akala - Frontend Engineer & Full-Stack Developer"
        description="Official resume of Tobiloba Akala (BuildWithTobi) – 35+ deployed web apps, 15+ client solutions, React/Next.js specialist, UNILAG Computer Science."
        canonicalPath="/resume"
        keywords="Tobiloba Akala resume, BuildWithTobi CV, Web Developer CV Nigeria, frontend developer resume, React developer CV, UNILAG Computer Science resume"
        jsonLd={resumeSchema}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full flex flex-col items-center">
        
        {/* Top Header & Action Controls */}
        <div className="mb-10 text-center print:hidden w-full max-w-2xl">
          <h1 className="text-4xl sm:text-5xl font-serif text-white font-bold mb-4 tracking-wide">
            Professional <span className="text-gradient">Resume</span>
          </h1>
          <p className="text-gray-300 text-sm sm:text-base max-w-xl mx-auto mb-8 font-light">
            Full-Stack Frontend Engineer with 35+ deployed projects, 15+ real-world client solutions, and 98%+ average Lighthouse performance.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href={resumeFile}
              download="Tobiloba_Akala_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-white font-medium bg-gradient-to-r from-[#623686] to-[#7928ca] hover:from-[#7928ca] hover:to-[#00e5ff] border border-white/20 shadow-[0_0_20px_rgba(121,40,202,0.35)] transition-all duration-300 transform hover:-translate-y-0.5"
            >
              <Download size={18} />
              <span>Download PDF File</span>
            </a>

            <button
              onClick={handlePrint}
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-gray-200 hover:text-white font-medium bg-white/5 hover:bg-white/10 border border-white/15 backdrop-blur-md transition-all duration-300 transform hover:-translate-y-0.5"
            >
              <Printer size={18} />
              <span>Print / Save PDF</span>
            </button>
          </div>
        </div>

        {/* RESUME PAPER / CARD CONTAINER */}
        <div className="w-full bg-[#151421]/80 backdrop-blur-xl border border-white/10 rounded-2xl sm:rounded-3xl p-6 sm:p-10 md:p-14 text-white shadow-2xl text-left print:bg-white print:text-black print:p-0 print:border-none print:shadow-none print:rounded-none">
          
          {/* HEADER SECTION */}
          <header className="border-b border-white/10 pb-8 mb-8 print:border-black/20">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
              <div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-black tracking-tight text-white print:text-black uppercase">
                  TOBILOBA AKALA
                </h2>
                <p className="text-lg sm:text-xl font-medium text-[#00e5ff] print:text-[#0066cc] mt-1">
                  Frontend Engineer <span className="text-gray-400 font-normal">|</span> Full-Stack Developer <span className="text-gray-400 font-normal">|</span> React Specialist
                </p>
              </div>
            </div>

            {/* CONTACT ROW */}
            <div className="mt-4 pt-4 border-t border-white/5 print:border-black/10 flex flex-wrap items-center gap-y-2 gap-x-4 text-xs sm:text-sm text-gray-300 print:text-gray-700">
              <span className="inline-flex items-center gap-1.5">
                <MapPin size={14} className="text-[#00e5ff] print:text-black" /> Lagos, Nigeria
              </span>
              <span className="text-gray-500">•</span>
              <a href="tel:07032533869" className="inline-flex items-center gap-1.5 hover:text-[#00e5ff] transition-colors">
                <Phone size={14} className="text-[#00e5ff] print:text-black" /> 07032533869
              </a>
              <span className="text-gray-500">•</span>
              <button 
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-1.5 hover:text-[#00e5ff] transition-colors cursor-pointer text-left"
                title="Click to copy email"
              >
                <Mail size={14} className="text-[#00e5ff] print:text-black" /> tobilobaakala@gmail.com {copied && <span className="text-[#00e5ff] text-xs font-mono">(Copied!)</span>}
              </button>
              <span className="text-gray-500">•</span>
              <a href="https://www.buildwithtobi.online" target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 hover:text-[#00e5ff] transition-colors">
                <Globe size={14} className="text-[#00e5ff] print:text-black" /> www.buildwithtobi.online
              </a>
              <span className="text-gray-500">•</span>
              <a href="https://github.com/realtee01" target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 hover:text-[#00e5ff] transition-colors">
                <Github size={14} className="text-[#00e5ff] print:text-black" /> github.com/realtee01
              </a>
            </div>
          </header>

          {/* PROFESSIONAL SUMMARY */}
          <section className="mb-10">
            <h3 className="text-xs font-mono uppercase tracking-widest text-[#c770f0] print:text-[#623686] font-bold mb-3 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#c770f0] print:bg-[#623686]"></span>
              Professional Summary
            </h3>
            <p className="text-gray-200 print:text-gray-800 text-sm sm:text-base leading-relaxed">
              Full-Stack Frontend Engineer with proven track record building production applications for real businesses. <strong>35+ deployed projects</strong> including <strong>15+ client solutions</strong> (e-commerce, booking systems, digital transformation). Top 5% performer with expertise in React, Next.js, Tailwind CSS, and database integration. CS student with strong fundamentals. Immediately available for impactful projects.
            </p>
          </section>

          {/* IMPACT METRICS */}
          <section className="mb-10 p-4 sm:p-5 rounded-2xl bg-white/[0.03] border border-white/10 print:bg-gray-100 print:border-gray-300">
            <h3 className="text-xs font-mono uppercase tracking-widest text-[#00e5ff] print:text-[#0066cc] font-bold mb-3">
              Key Impact Metrics
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs sm:text-sm">
              <div className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-[#00e5ff] print:text-[#0066cc] flex-shrink-0" />
                <span className="font-semibold text-white print:text-black">35+ Live Projects</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-[#00e5ff] print:text-[#0066cc] flex-shrink-0" />
                <span className="font-semibold text-white print:text-black">15+ Client Solutions</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-[#00e5ff] print:text-[#0066cc] flex-shrink-0" />
                <span className="font-semibold text-white print:text-black">98%+ Lighthouse</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-[#00e5ff] print:text-[#0066cc] flex-shrink-0" />
                <span className="font-semibold text-white print:text-black">Top 5% Faculty Recognition</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-[#00e5ff] print:text-[#0066cc] flex-shrink-0" />
                <span className="font-semibold text-white print:text-black">Full-Stack Capability</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-[#00e5ff] print:text-[#0066cc] flex-shrink-0" />
                <span className="font-semibold text-white print:text-black">Professional Delivery</span>
              </div>
            </div>
          </section>

          {/* TECHNICAL STACK */}
          <section className="mb-10">
            <h3 className="text-xs font-mono uppercase tracking-widest text-[#c770f0] print:text-[#623686] font-bold mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#c770f0] print:bg-[#623686]"></span>
              Technical Stack
            </h3>
            
            <div className="space-y-2.5 text-xs sm:text-sm text-gray-300 print:text-gray-800">
              <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-2">
                <strong className="text-white print:text-black sm:w-36 flex-shrink-0">Frontend:</strong>
                <span>React.js, Next.js, Vite, JavaScript ES6+, TypeScript</span>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-2">
                <strong className="text-white print:text-black sm:w-36 flex-shrink-0">Styling:</strong>
                <span>Tailwind CSS, CSS Grid, Flexbox, Responsive Design</span>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-2">
                <strong className="text-white print:text-black sm:w-36 flex-shrink-0">Backend/Database:</strong>
                <span>Firebase, Supabase, REST APIs, Real-time Sync</span>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-2">
                <strong className="text-white print:text-black sm:w-36 flex-shrink-0">Performance:</strong>
                <span>98%+ Lighthouse, Code Splitting, Memoization, Lazy Loading</span>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-2">
                <strong className="text-white print:text-black sm:w-36 flex-shrink-0">Tools:</strong>
                <span>Git/GitHub, VS Code, Vercel, npm/yarn</span>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-2">
                <strong className="text-white print:text-black sm:w-36 flex-shrink-0">Specialization:</strong>
                <span>E-commerce Platforms, Booking Systems, API Integration, Mobile-First Design</span>
              </div>
            </div>
          </section>

          {/* CLIENT PROJECTS (15+ DEPLOYED) */}
          <section className="mb-10">
            <div className="flex items-center justify-between border-b border-white/10 pb-2 mb-6 print:border-black/20">
              <h3 className="text-xs font-mono uppercase tracking-widest text-[#00e5ff] print:text-[#0066cc] font-bold flex items-center gap-2">
                <Briefcase size={14} />
                Client Projects (15+ Deployed)
              </h3>
              <span className="text-xs text-gray-400 font-mono">Production Solutions</span>
            </div>

            <div className="space-y-6">
              {/* Project 1 */}
              <div>
                <div className="flex flex-wrap items-baseline justify-between gap-1">
                  <h4 className="text-base sm:text-lg font-bold text-white print:text-black">
                    PeakEcho Digitals <span className="text-gray-400 font-normal">— Company Website</span>
                  </h4>
                  <span className="text-xs font-mono px-2 py-0.5 rounded bg-[#c770f0]/15 text-[#c770f0] print:bg-purple-100 print:text-purple-800 font-semibold">
                    INTERNSHIP PROJECT
                  </span>
                </div>
                <p className="text-xs font-mono text-[#00e5ff] print:text-[#0066cc] mt-1 mb-2">
                  React | Next.js | Tailwind CSS | Professional Branding | SEO Optimized
                </p>
                <ul className="list-disc list-outside ml-4 text-xs sm:text-sm text-gray-300 print:text-gray-700 space-y-1">
                  <li>Built modern, responsive company website for tech marketing firm</li>
                  <li>Implemented professional branding and SEO optimization for online visibility</li>
                </ul>
              </div>

              {/* Project 2 */}
              <div>
                <div className="flex flex-wrap items-baseline justify-between gap-1">
                  <h4 className="text-base sm:text-lg font-bold text-white print:text-black">
                    Julio's Pizza <span className="text-gray-400 font-normal">— Online Ordering Platform</span>
                  </h4>
                  <span className="text-xs font-mono px-2 py-0.5 rounded bg-white/10 text-gray-300 print:bg-gray-200 print:text-gray-800 font-semibold">
                    CLIENT PROJECT
                  </span>
                </div>
                <p className="text-xs font-mono text-[#00e5ff] print:text-[#0066cc] mt-1 mb-2">
                  React | Tailwind CSS | Order Management | Streamlined Checkout | High Volume Handling
                </p>
                <ul className="list-disc list-outside ml-4 text-xs sm:text-sm text-gray-300 print:text-gray-700 space-y-1">
                  <li>Built interactive ordering system solving high customer volume delays</li>
                  <li>Developed visually appealing product displays with menu management</li>
                </ul>
              </div>

              {/* Project 3 */}
              <div>
                <div className="flex flex-wrap items-baseline justify-between gap-1">
                  <h4 className="text-base sm:text-lg font-bold text-white print:text-black">
                    Riad Dentist Care <span className="text-gray-400 font-normal">— Professional Clinic Website</span>
                  </h4>
                  <span className="text-xs font-mono px-2 py-0.5 rounded bg-white/10 text-gray-300 print:bg-gray-200 print:text-gray-800 font-semibold">
                    CLIENT PROJECT
                  </span>
                </div>
                <p className="text-xs font-mono text-[#00e5ff] print:text-[#0066cc] mt-1 mb-2">
                  React | Responsive Design | Booking System | Appointment Integration | Patient Attraction
                </p>
                <ul className="list-disc list-outside ml-4 text-xs sm:text-sm text-gray-300 print:text-gray-700 space-y-1">
                  <li>Created professional online presence with responsive design</li>
                  <li>Integrated appointment booking system streamlining patient scheduling</li>
                </ul>
              </div>

              {/* Project 4 */}
              <div>
                <div className="flex flex-wrap items-baseline justify-between gap-1">
                  <h4 className="text-base sm:text-lg font-bold text-white print:text-black">
                    Trendy Transit <span className="text-gray-400 font-normal">— E-Commerce Platform</span>
                  </h4>
                  <span className="text-xs font-mono px-2 py-0.5 rounded bg-white/10 text-gray-300 print:bg-gray-200 print:text-gray-800 font-semibold">
                    CLIENT PROJECT
                  </span>
                </div>
                <p className="text-xs font-mono text-[#00e5ff] print:text-[#0066cc] mt-1 mb-2">
                  Next.js | Tailwind CSS | Supabase | Dynamic Catalog | Fast Checkout
                </p>
                <ul className="list-disc list-outside ml-4 text-xs sm:text-sm text-gray-300 print:text-gray-700 space-y-1">
                  <li>Engineered modern e-commerce platform solving catalog management issues</li>
                  <li>Built dynamic product catalog with intuitive shopping cart system</li>
                </ul>
              </div>

              {/* Additional Client Solutions */}
              <div className="pt-2">
                <h4 className="text-base sm:text-lg font-bold text-white print:text-black">
                  11+ Additional Client Solutions
                </h4>
                <p className="text-xs font-mono text-[#00e5ff] print:text-[#0066cc] mt-1 mb-2">
                  React | Next.js | Various Integrations | Diverse Industries | Professional Delivery
                </p>
                <ul className="list-disc list-outside ml-4 text-xs sm:text-sm text-gray-300 print:text-gray-700 space-y-1">
                  <li>Portfolio includes 11+ additional client projects across various industries</li>
                  <li>Proven delivery of business-critical solutions with professional standards</li>
                </ul>
              </div>
            </div>
          </section>

          {/* PORTFOLIO HIGHLIGHTS (20+ PROJECTS) */}
          <section className="mb-10">
            <div className="flex items-center justify-between border-b border-white/10 pb-2 mb-6 print:border-black/20">
              <h3 className="text-xs font-mono uppercase tracking-widest text-[#c770f0] print:text-[#623686] font-bold flex items-center gap-2">
                <Code2 size={14} />
                Portfolio Highlights (20+ Projects)
              </h3>
              <span className="text-xs text-gray-400 font-mono">Selected Technical Work</span>
            </div>

            <div className="space-y-6">
              {/* Highlight 1 */}
              <div>
                <h4 className="text-base sm:text-lg font-bold text-white print:text-black">
                  CineScope <span className="text-gray-400 font-normal">— Movie Discovery Platform</span>
                </h4>
                <p className="text-xs font-mono text-[#00e5ff] print:text-[#0066cc] mt-1 mb-2">
                  React | TMDB API | Tailwind | Vercel | 98% Lighthouse | Top 5% Recognition
                </p>
                <ul className="list-disc list-outside ml-4 text-xs sm:text-sm text-gray-300 print:text-gray-700 space-y-1">
                  <li>High-performance search engine with 65% API optimization</li>
                  <li>Faculty-recognized for technical excellence and UX design</li>
                </ul>
              </div>

              {/* Highlight 2 */}
              <div>
                <h4 className="text-base sm:text-lg font-bold text-white print:text-black">
                  Portfolio Website & GitHub Dashboard
                </h4>
                <p className="text-xs font-mono text-[#00e5ff] print:text-[#0066cc] mt-1 mb-2">
                  React | Next.js | Dark Mode | API Integration | 99+ Lighthouse Scores | SEO Optimized
                </p>
                <ul className="list-disc list-outside ml-4 text-xs sm:text-sm text-gray-300 print:text-gray-700 space-y-1">
                  <li>Professional portfolio with filterable project gallery</li>
                  <li>Real-time GitHub stats dashboard with visualization</li>
                </ul>
              </div>

              {/* Highlight 3 */}
              <div>
                <h4 className="text-base sm:text-lg font-bold text-white print:text-black">
                  Couples Quiz & Firebase Real-Time Apps
                </h4>
                <p className="text-xs font-mono text-[#00e5ff] print:text-[#0066cc] mt-1 mb-2">
                  React | Firebase Firestore | Real-time Sync | Complex State Management | Multiplayer
                </p>
                <ul className="list-disc list-outside ml-4 text-xs sm:text-sm text-gray-300 print:text-gray-700 space-y-1">
                  <li>Real-time collaborative platform with Firestore synchronization</li>
                  <li>Shareable link system for cross-device experiences</li>
                </ul>
              </div>

              {/* Highlight 4 */}
              <div>
                <h4 className="text-base sm:text-lg font-bold text-white print:text-black">
                  PixelCleanAI & Job Listings + 16 More
                </h4>
                <p className="text-xs font-mono text-[#00e5ff] print:text-[#0066cc] mt-1 mb-2">
                  React | Google Gemini API | Advanced Filtering | AI Integration | Multi-criteria Search
                </p>
                <ul className="list-disc list-outside ml-4 text-xs sm:text-sm text-gray-300 print:text-gray-700 space-y-1">
                  <li>Gemini Vision API integration for image processing</li>
                  <li>20+ portfolio projects demonstrating diverse technical capabilities</li>
                </ul>
              </div>
            </div>
          </section>

          {/* PROFESSIONAL EXPERIENCE */}
          <section className="mb-10">
            <div className="border-b border-white/10 pb-2 mb-6 print:border-black/20">
              <h3 className="text-xs font-mono uppercase tracking-widest text-[#00e5ff] print:text-[#0066cc] font-bold flex items-center gap-2">
                <Briefcase size={14} />
                Professional Experience
              </h3>
            </div>

            <div className="space-y-6">
              {/* Experience 1 */}
              <div>
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between">
                  <h4 className="text-base sm:text-lg font-bold text-white print:text-black">
                    Frontend Developer <span className="text-[#00e5ff] print:text-[#0066cc] font-medium">— Axia Africa</span>
                  </h4>
                  <span className="text-xs font-mono text-gray-400 print:text-gray-600">
                    Oct 2025 – Mar 2026 | 6-Month Intensive Program
                  </span>
                </div>
                <ul className="list-disc list-outside ml-4 text-xs sm:text-sm text-gray-300 print:text-gray-700 space-y-1 mt-2">
                  <li>15 production projects delivered; Top 5% Faculty Recognition</li>
                  <li>Mastered React, State Management, debugging, and performance optimization</li>
                  <li>Built client solutions under professional standards and deadlines</li>
                </ul>
              </div>

              {/* Experience 2 */}
              <div>
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between">
                  <h4 className="text-base sm:text-lg font-bold text-white print:text-black">
                    Content Marketer <span className="text-[#00e5ff] print:text-[#0066cc] font-medium">— PeakEcho Digitals</span>
                  </h4>
                  <span className="text-xs font-mono text-gray-400 print:text-gray-600">
                    Jan 2025 – Present | Remote
                  </span>
                </div>
                <ul className="list-disc list-outside ml-4 text-xs sm:text-sm text-gray-300 print:text-gray-700 space-y-1 mt-2">
                  <li>Data-driven content strategy for technology product campaigns</li>
                  <li>Technical documentation and engineering-marketing communications</li>
                  <li>Built and maintain company website (React, Next.js, Tailwind CSS)</li>
                </ul>
              </div>
            </div>
          </section>

          {/* EDUCATION */}
          <section className="mb-10">
            <div className="border-b border-white/10 pb-2 mb-6 print:border-black/20">
              <h3 className="text-xs font-mono uppercase tracking-widest text-[#c770f0] print:text-[#623686] font-bold flex items-center gap-2">
                <GraduationCap size={14} />
                Education
              </h3>
            </div>

            <div className="space-y-5">
              <div>
                <h4 className="text-base sm:text-lg font-bold text-white print:text-black">
                  Professional Certificate in Frontend Development
                </h4>
                <p className="text-xs sm:text-sm text-[#00e5ff] print:text-[#0066cc] font-medium">
                  Axia Africa (Cohort 9) <span className="text-gray-400 font-normal">| Completed Mar 2026 | Top 5% Recognition</span>
                </p>
              </div>

              <div>
                <h4 className="text-base sm:text-lg font-bold text-white print:text-black">
                  Bachelor of Science, Computer Science
                </h4>
                <p className="text-xs sm:text-sm text-[#00e5ff] print:text-[#0066cc] font-medium mb-1">
                  University of Lagos (UNILAG) <span className="text-gray-400 font-normal">| 2021 – Present</span>
                </p>
                <p className="text-xs sm:text-sm text-gray-300 print:text-gray-700">
                  <strong className="text-white print:text-black">Coursework:</strong> Data Structures | Software Architecture | Design Patterns | Agile/Scrum
                </p>
              </div>
            </div>
          </section>

          {/* WHY HIRE ME */}
          <section className="pt-2">
            <div className="border-b border-white/10 pb-2 mb-6 print:border-black/20">
              <h3 className="text-xs font-mono uppercase tracking-widest text-[#00e5ff] print:text-[#0066cc] font-bold flex items-center gap-2">
                <Star size={14} />
                Why Hire Me
              </h3>
            </div>

            <ul className="space-y-2.5 text-xs sm:text-sm text-gray-300 print:text-gray-800">
              <li className="flex items-start gap-2.5">
                <span className="text-[#00e5ff] print:text-[#0066cc] mt-0.5 font-bold">✓</span>
                <span><strong>Real Client Experience:</strong> Delivered 15+ client solutions + PeakEcho company website</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-[#00e5ff] print:text-[#0066cc] mt-0.5 font-bold">✓</span>
                <span><strong>Proven Track Record:</strong> 35+ live projects with 98%+ Lighthouse scores and faculty recognition</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-[#00e5ff] print:text-[#0066cc] mt-0.5 font-bold">✓</span>
                <span><strong>Full-Stack Capability:</strong> Frontend + database integration (Firebase, Supabase) and backend knowledge</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-[#00e5ff] print:text-[#0066cc] mt-0.5 font-bold">✓</span>
                <span><strong>Business Impact:</strong> Solved real business problems (ordering, booking, e-commerce, digital transformation)</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-[#00e5ff] print:text-[#0066cc] mt-0.5 font-bold">✓</span>
                <span><strong>Technical Depth:</strong> CS student with algorithms + modern framework expertise, not just coding</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-[#00e5ff] print:text-[#0066cc] mt-0.5 font-bold">✓</span>
                <span><strong>Remote Ready:</strong> Disciplined, independent, excellent communication, reliable delivery</span>
              </li>
            </ul>

            {/* Footer metadata */}
            <div className="mt-8 pt-6 border-t border-white/10 print:border-black/20 flex flex-wrap items-center justify-between gap-2 text-xs font-mono text-gray-400 print:text-gray-600">
              <span>Portfolio: <a href="https://www.buildwithtobi.online" className="text-[#00e5ff] print:text-[#0066cc]">www.buildwithtobi.online</a></span>
              <span>GitHub: <a href="https://github.com/realtee01" className="text-[#00e5ff] print:text-[#0066cc]">github.com/realtee01</a></span>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}
