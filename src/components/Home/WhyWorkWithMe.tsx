import React from "react";
import { motion } from "motion/react";
import { HashLink } from "react-router-hash-link";
import { 
  TrendingUp, 
  Search, 
  Zap, 
  Layers, 
  Smartphone, 
  Target 
} from "lucide-react";

export default function WhyWorkWithMe() {
  const reasons = [
    { 
      icon: <TrendingUp className="text-[#00e5ff]" size={20} />, 
      title: "Business-First Approach", 
      desc: "Every design decision is made to improve conversions, not just look pretty." 
    },
    { 
      icon: <Search className="text-[#c770f0]" size={20} />, 
      title: "SEO-Friendly Architecture", 
      desc: "Built with semantic HTML and best practices so customers can find you." 
    },
    { 
      icon: <Zap className="text-[#00e5ff]" size={20} />, 
      title: "Lightning Fast Performance", 
      desc: "Optimized for 90+ Core Web Vitals to prevent bounce rates." 
    },
    { 
      icon: <Layers className="text-[#c770f0]" size={20} />, 
      title: "Scalable Technologies", 
      desc: "Built on React, Next.js, and modern tools that grow with your business." 
    },
    { 
      icon: <Smartphone className="text-[#00e5ff]" size={20} />, 
      title: "Mobile Optimized", 
      desc: "Flawless experiences on phones, tablets, and desktops." 
    },
    { 
      icon: <Target className="text-[#c770f0]" size={20} />, 
      title: "Lead Generation Focus", 
      desc: "Integrated forms, booking systems, and CRM connections." 
    }
  ];

  return (
    <div className="py-24 relative z-10 border-t border-white/5 bg-[#0a0a0a]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6">
              Why Partner With Me?
            </h2>
            <p className="text-gray-300 text-lg font-light mb-8 leading-relaxed">
              I don't just build websites; I engineer digital growth engines. By bridging the gap between premium design and rigorous engineering, I deliver platforms that perform flawlessly and drive actual business results.
            </p>
            <div className="flex gap-4">
              <HashLink smooth to="/contact#top" className="bg-gradient-to-r from-[#c770f0] to-[#00e5ff] text-[#0c0513] font-bold px-8 py-3 rounded-full hover:opacity-90 transition-all shadow-[0_0_15px_rgba(0,229,255,0.3)]">
                Start Your Project
              </HashLink>
            </div>

            {/* Digital Growth Engine SVG Illustration */}
            <div className="mt-10 p-5 rounded-2xl bg-[#151424]/60 border border-white/10 backdrop-blur-md">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-semibold text-gray-300 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  Engineering & Conversion Performance Matrix
                </span>
                <span className="text-[11px] font-mono text-[#00e5ff]">99.8% Reliability</span>
              </div>
              <svg viewBox="0 0 400 110" className="w-full h-auto overflow-visible">
                <defs>
                  <linearGradient id="whyGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#c770f0" stopOpacity="0.8" />
                    <stop offset="50%" stopColor="#00e5ff" stopOpacity="0.9" />
                    <stop offset="100%" stopColor="#34d399" stopOpacity="1" />
                  </linearGradient>
                  <linearGradient id="whyArea" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#00e5ff" stopOpacity="0.25" />
                    <stop offset="100%" stopColor="#00e5ff" stopOpacity="0" />
                  </linearGradient>
                </defs>
                {/* Grid lines */}
                <line x1="20" y1="20" x2="380" y2="20" stroke="rgba(255,255,255,0.06)" strokeDasharray="4 4" />
                <line x1="20" y1="55" x2="380" y2="55" stroke="rgba(255,255,255,0.06)" strokeDasharray="4 4" />
                <line x1="20" y1="90" x2="380" y2="90" stroke="rgba(255,255,255,0.06)" strokeDasharray="4 4" />
                
                {/* Area fill */}
                <path d="M20 85 Q 90 75, 140 50 T 265 38 T 380 18 L 380 100 L 20 100 Z" fill="url(#whyArea)" />
                
                {/* Growth Curve */}
                <path d="M20 85 Q 90 75, 140 50 T 265 38 T 380 18" fill="none" stroke="url(#whyGrad)" strokeWidth="3" strokeLinecap="round" />
                
                {/* Data nodes */}
                <circle cx="20" cy="85" r="4" fill="#c770f0" stroke="#151424" strokeWidth="2" />
                <circle cx="140" cy="50" r="4.5" fill="#00e5ff" stroke="#151424" strokeWidth="2" />
                <circle cx="265" cy="38" r="4.5" fill="#00e5ff" stroke="#151424" strokeWidth="2" />
                <circle cx="380" cy="18" r="5" fill="#34d399" stroke="#151424" strokeWidth="2" />
              </svg>
              <div className="flex justify-between text-[10px] text-gray-400 mt-2 font-mono">
                <span>Architecture Setup</span>
                <span>Sub-Second Load</span>
                <span>Conversion Scale</span>
              </div>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {reasons.map((reason, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white/5 p-6 rounded-2xl border border-white/10 hover:border-[#00e5ff]/40 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-4">
                  {reason.icon}
                </div>
                <h3 className="text-white font-semibold mb-2">{reason.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{reason.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
