import React from "react";
import { motion } from "motion/react";
import { CheckCircle2 } from "lucide-react";
import { HashLink } from "react-router-hash-link";

export default function WhyWorkWithMe() {
  const reasons = [
    { title: "Business-First Approach", desc: "Every design decision is made to improve conversions, not just look pretty." },
    { title: "SEO-Friendly Architecture", desc: "Built with semantic HTML and best practices so customers can find you." },
    { title: "Lightning Fast Performance", desc: "Optimized for 90+ Core Web Vitals to prevent bounce rates." },
    { title: "Scalable Technologies", desc: "Built on React, Next.js, and modern tools that grow with your business." },
    { title: "Mobile Optimized", desc: "Flawless experiences on phones, tablets, and desktops." },
    { title: "Lead Generation Focus", desc: "Integrated forms, booking systems, and CRM connections." }
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
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {reasons.map((reason, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white/5 p-6 rounded-2xl border border-white/10 hover:border-[#00e5ff]/40 transition-colors"
              >
                <CheckCircle2 className="text-[#00e5ff] mb-4" size={24} />
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
