import { ArrowUpRight } from "lucide-react";
import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";

const engineeringServices = [
  {
    num: "01",
    title: "Custom React & Next.js Web Apps",
    desc: "Scalable SaaS platforms, dashboards, and internal tools built with clean TypeScript and zero sluggishness.",
    perfectFor: "Startups & product teams",
  },
  {
    num: "02",
    title: "Booking & Appointment Systems",
    desc: "Frictionless scheduling flows with real-time slot locking, WhatsApp alerts, and Paystack / Stripe checkout.",
    perfectFor: "Clinics, salons & consultants",
  },
  {
    num: "03",
    title: "AI Workflows & Automations",
    desc: "Smart lead-capture assistants and automated customer workflows that reply while you sleep.",
    perfectFor: "Agencies & service brands",
  },
  {
    num: "04",
    title: "Mobile App Development",
    desc: "Fast, responsive iOS & Android experiences engineered with modern cross-platform architecture.",
    perfectFor: "Product-led businesses",
  },
];

const growthServices = [
  {
    num: "01",
    title: "High-Converting Business Websites",
    desc: "Editorial storefronts and landing pages built to earn trust immediately and turn visitors into booked calls.",
    perfectFor: "Founders, contractors & agencies",
  },
  {
    num: "02",
    title: "E-Commerce Storefronts",
    desc: "Fast, mobile-first shopping experiences engineered to increase checkout completion and average order value.",
    perfectFor: "DTC brands & retailers",
  },
  {
    num: "03",
    title: "Website Redesign & Speed Rebuild",
    desc: "Taking slow, dated sites and re-engineering them to hit 95+ Core Web Vitals and climb organic search.",
    perfectFor: "Growing businesses",
  },
  {
    num: "04",
    title: "Technical SEO & Answer-Engine Readiness",
    desc: "Semantic HTML, structured JSON-LD schema, and clean metadata so Google and AI tools cite your brand first.",
    perfectFor: "Content & local brands",
  },
];

export default function Home2() {
  return (
    <div className="py-20 md:py-28 relative z-10 border-t border-[#E5E2DC] bg-white" id="about">
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8">
        {/* Personable Editorial Story Spread (Olivia-inspired) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 pb-20 border-b border-[#E5E2DC]">
          <div className="lg:col-span-5">
            <div className="text-xs font-medium text-[#86837C] mb-3">
              02. A Bit About Me
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl font-semibold text-[#141413] leading-[1.1] tracking-tight mb-6">
              Good software should feel like a great conversation.
            </h2>
            <p className="font-serif italic text-lg text-[#575550]">
              Clear, fast, and respectful of your visitor&apos;s time.
            </p>
          </div>

          <div className="lg:col-span-7 space-y-5 text-[#575550] text-base sm:text-[17px] leading-relaxed">
            <p>
              I&apos;m <strong className="text-[#141413] font-semibold">Tobiloba Akala</strong>, a
              full-stack developer and Computer Science student at the University of Lagos. I started
              building websites because I hated watching genuinely great businesses lose customers to
              slow, confusing web pages.
            </p>
            <p>
              Instead of just stacking frameworks on top of templates, I learned the web platform
              from the ground up. That lets me ship React, Next.js, and Tailwind CSS products that
              regularly score <span className="font-mono text-[#141413] font-medium">95+</span> on
              Core Web Vitals—even on busy mobile networks.
            </p>
            <p>
              Off the clock, you&apos;ll find me deep in a game, writing engineering notes, or
              listening to an overly curated coding playlist. Whether you&apos;re launching a new
              product or fixing an old site, I keep the process calm, transparent, and fast.
            </p>

            <div className="pt-4 flex flex-wrap items-center gap-6">
              <Link
                to="/about"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#141413] hover:text-[#1D4ED8] transition-colors"
              >
                <span>Read my full story &amp; stack</span>
                <ArrowUpRight size={15} />
              </Link>
              <Link
                to="/resume"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-[#575550] hover:text-[#141413] transition-colors"
              >
                <span>View Resume / CV</span>
                <ArrowUpRight size={15} />
              </Link>
            </div>
          </div>
        </div>

        {/* Two-Bucket Editorial "What I Do" Services Section (Olivia-inspired) */}
        <div className="pt-20">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <div>
              <div className="text-xs font-medium text-[#86837C] mb-3">
                03. What I Do
              </div>
              <h2 className="font-serif text-3xl sm:text-5xl font-semibold text-[#141413] tracking-tight">
                Two ways I help teams ship.
              </h2>
            </div>
            <Link
              to="/services"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#1D4ED8] hover:text-[#1E40AF] transition-colors whitespace-nowrap"
            >
              <span>Explore full service breakdown</span>
              <ArrowUpRight size={15} />
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Bucket 1: Engineering & Applications */}
            <div>
              <div className="pb-4 mb-2 border-b border-[#141413] flex items-baseline justify-between">
                <h3 className="font-serif text-2xl font-semibold text-[#141413]">
                  Product &amp; Web Engineering
                </h3>
                <span className="font-mono text-xs text-[#86837C]">04 capabilities</span>
              </div>
              <div className="divide-y divide-[#E5E2DC]">
                {engineeringServices.map((item) => (
                  <div key={item.num} className="py-6 group">
                    <div className="flex items-baseline justify-between gap-4 mb-2">
                      <div className="flex items-baseline gap-3">
                        <span className="font-mono text-xs text-[#86837C] tabular-nums">
                          {item.num}.
                        </span>
                        <h4 className="font-semibold text-base sm:text-lg text-[#141413] group-hover:text-[#1D4ED8] transition-colors">
                          {item.title}
                        </h4>
                      </div>
                    </div>
                    <p className="text-sm text-[#575550] leading-relaxed pl-7 mb-2">
                      {item.desc}
                    </p>
                    <p className="text-xs text-[#86837C] pl-7">
                      Best for: <span className="text-[#141413]">{item.perfectFor}</span>
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Bucket 2: Conversion Websites & Growth */}
            <div>
              <div className="pb-4 mb-2 border-b border-[#141413] flex items-baseline justify-between">
                <h3 className="font-serif text-2xl font-semibold text-[#141413]">
                  Websites &amp; Conversion Growth
                </h3>
                <span className="font-mono text-xs text-[#86837C]">04 capabilities</span>
              </div>
              <div className="divide-y divide-[#E5E2DC]">
                {growthServices.map((item) => (
                  <div key={item.num} className="py-6 group">
                    <div className="flex items-baseline justify-between gap-4 mb-2">
                      <div className="flex items-baseline gap-3">
                        <span className="font-mono text-xs text-[#86837C] tabular-nums">
                          {item.num}.
                        </span>
                        <h4 className="font-semibold text-base sm:text-lg text-[#141413] group-hover:text-[#1D4ED8] transition-colors">
                          {item.title}
                        </h4>
                      </div>
                    </div>
                    <p className="text-sm text-[#575550] leading-relaxed pl-7 mb-2">
                      {item.desc}
                    </p>
                    <p className="text-xs text-[#86837C] pl-7">
                      Best for: <span className="text-[#141413]">{item.perfectFor}</span>
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Direct Booking Strip */}
          <div className="mt-12 p-7 sm:p-10 rounded-2xl bg-[#F8F7F4] border border-[#E5E2DC] flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <h3 className="font-serif text-2xl font-semibold text-[#141413] mb-1.5">
                Have a brief in mind—or just a rough idea?
              </h3>
              <p className="text-sm text-[#575550]">
                Tell me what you&apos;re trying to achieve and I&apos;ll send back a clear timeline and honest quote.
              </p>
            </div>
            <HashLink
              smooth
              to="/contact#top"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#141413] text-white text-sm font-medium hover:bg-[#1D4ED8] transition-colors whitespace-nowrap shrink-0"
            >
              <span>Request a Custom Quote</span>
              <ArrowUpRight size={15} />
            </HashLink>
          </div>
        </div>
      </div>
    </div>
  );
}
