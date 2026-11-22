import { motion } from "motion/react";
import { HashLink } from "react-router-hash-link";
import { ArrowUpRight } from "lucide-react";

export default function WhyWorkWithMe() {
  const reasons = [
    {
      num: "01",
      title: "Business-First Craft",
      desc: "Every layout and interaction is designed to earn trust and drive conversions—not just win design-twitter likes.",
    },
    {
      num: "02",
      title: "Sub-Second Speed",
      desc: "Optimized for 95+ Core Web Vitals so mobile visitors on 3G/4G networks never bounce waiting for heavy assets.",
    },
    {
      num: "03",
      title: "Search & AI Readable",
      desc: "Semantic HTML and clean JSON-LD schema so both Google and modern AI assistants surface your business.",
    },
    {
      num: "04",
      title: "Clean, Ownable Code",
      desc: "Built on React, Next.js, and TypeScript with 100% repository ownership handed over on completion.",
    },
  ];

  return (
    <div className="py-20 md:py-28 relative z-10 border-t border-[#E5E2DC]">
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="lg:col-span-5"
          >
            <div className="text-xs font-medium text-[#86837C] mb-3">
              06. Why Partner With Me
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl font-semibold text-[#141413] leading-[1.1] tracking-tight mb-6">
              Engineered for real growth, not vanity metrics.
            </h2>
            <p className="text-[#575550] text-base leading-relaxed mb-8">
              By bridging editorial taste with rigorous computer science fundamentals, I deliver
              digital platforms that feel effortless to use and measurably lift business inquiries.
            </p>

            {/* Editorial Performance Curve Diagram */}
            <div className="p-6 rounded-2xl bg-white border border-[#E5E2DC] mb-8">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-medium text-[#575550]">
                  Speed &amp; Conversion Trajectory
                </span>
                <span className="text-xs font-mono text-[#1D4ED8] tabular-nums">
                  98+ Lighthouse
                </span>
              </div>
              <svg viewBox="0 0 400 105" className="w-full h-auto overflow-visible" role="img" aria-label="Performance and conversion growth curve">
                <defs>
                  <linearGradient id="editorialArea" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#1D4ED8" stopOpacity="0.14" />
                    <stop offset="100%" stopColor="#1D4ED8" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <line x1="16" y1="22" x2="384" y2="22" stroke="#E5E2DC" strokeDasharray="3 4" />
                <line x1="16" y1="56" x2="384" y2="56" stroke="#E5E2DC" strokeDasharray="3 4" />
                <line x1="16" y1="90" x2="384" y2="90" stroke="#E5E2DC" />

                <path
                  d="M16 84 Q 100 74, 155 52 T 275 34 T 384 16 L 384 90 L 16 90 Z"
                  fill="url(#editorialArea)"
                />
                <path
                  d="M16 84 Q 100 74, 155 52 T 275 34 T 384 16"
                  fill="none"
                  stroke="#1D4ED8"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
                <circle cx="16" cy="84" r="3.5" fill="#141413" />
                <circle cx="155" cy="52" r="3.5" fill="#1D4ED8" />
                <circle cx="275" cy="34" r="3.5" fill="#1D4ED8" />
                <circle cx="384" cy="16" r="4" fill="#141413" />
              </svg>
              <div className="flex justify-between text-[11px] text-[#86837C] mt-3 font-mono">
                <span>Architecture</span>
                <span>Sub-Second Load</span>
                <span>Higher Conversion</span>
              </div>
            </div>

            <HashLink
              smooth
              to="/contact#top"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#141413] text-white text-sm font-medium hover:bg-[#1D4ED8] transition-colors"
            >
              <span>Start Your Project</span>
              <ArrowUpRight size={15} />
            </HashLink>
          </motion.div>

          {/* Right Column: Clean 2x2 Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {reasons.map((reason, idx) => (
              <motion.div
                key={reason.num}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: idx * 0.06 }}
                className="bg-white border border-[#E5E2DC] rounded-2xl p-7"
              >
                <div className="font-mono text-xs text-[#86837C] tabular-nums mb-4">
                  {reason.num}
                </div>
                <h3 className="font-serif text-xl font-semibold text-[#141413] mb-2.5">
                  {reason.title}
                </h3>
                <p className="text-sm text-[#575550] leading-relaxed">
                  {reason.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
