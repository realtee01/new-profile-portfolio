import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { HashLink } from "react-router-hash-link";

export default function ProcessSection() {
  const steps = [
    {
      num: "01",
      title: "Discovery & Strategy",
      desc: "We align on your business goals, audience, and what success actually looks like before writing a single line of code.",
    },
    {
      num: "02",
      title: "Editorial UI & Architecture",
      desc: "Clean wireframes, refined typography, and a lean component structure mapped out for effortless mobile and desktop flow.",
    },
    {
      num: "03",
      title: "Clean Full-Stack Engineering",
      desc: "Building with React, Next.js, TypeScript, and modern backends—with weekly staging links so you never guess what's happening.",
    },
    {
      num: "04",
      title: "QA, Launch & Support",
      desc: "Real-device testing, 95+ Core Web Vitals optimization, SEO schema setup, and calm post-launch support as you grow.",
    },
  ];

  return (
    <div className="py-20 md:py-28 relative z-10 border-t border-[#E5E2DC] bg-white">
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div className="max-w-2xl">
            <div className="text-xs font-medium text-[#86837C] mb-3">
              05. How We Work
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl font-semibold text-[#141413] tracking-tight mb-4">
              Simple process, zero drama.
            </h2>
            <p className="text-[#575550] text-base leading-relaxed">
              Four clear stages from your initial brief to a live, high-performing digital product.
            </p>
          </div>

          <HashLink
            smooth
            to="/contact#top"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-[#CFCBC2] bg-[#F8F7F4] text-[#141413] text-sm font-medium hover:border-[#141413] transition-colors whitespace-nowrap self-start md:self-end"
          >
            <span>Start a conversation</span>
            <ArrowUpRight size={15} />
          </HashLink>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, idx) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: idx * 0.06 }}
              className="bg-[#F8F7F4] border border-[#E5E2DC] rounded-2xl p-7 flex flex-col justify-between"
            >
              <div>
                <div className="font-mono text-xs text-[#1D4ED8] tabular-nums mb-6">
                  {step.num}
                </div>
                <h3 className="font-serif text-xl font-semibold text-[#141413] mb-3">
                  {step.title}
                </h3>
                <p className="text-sm text-[#575550] leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
