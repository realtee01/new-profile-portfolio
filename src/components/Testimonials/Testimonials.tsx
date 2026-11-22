import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Play, Pause, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "../../context/LanguageContext";
import SEOHead from "../SEO/SEOHead";

const testimonials = [
  {
    name: "Damilola 'D-Beatz' Adeyemi",
    role: "Music Producer",
    text: "Tobiloba's ability to translate the energy of music into a digital interface is unmatched. He built my producer portfolio with a sleek aesthetic that perfectly represents my sound, and the performance is top-notch.",
    company: "Echo Chamber Studios",
    image:
      "https://images.unsplash.com/photo-1606459431839-90b942dc3754?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Olamide Bakare",
    role: "Founder & Creative Director",
    text: "As a fashion brand, aesthetics are everything. Tobiloba understood our 'Luxe Thread' vision immediately. He delivered a high-end storefront experience that feels as refined as our clothing line.",
    company: "Luxe Thread",
    image:
      "https://images.unsplash.com/photo-1531384441138-2736e62e0919?q=80&w=256&auto=format&fit=crop",
  },
  {
    name: "Micheal Cheng",
    role: "CEO",
    text: "Collaborating with Tobiloba was seamless from start to finish. He quickly grasped our goals and delivered results that exceeded expectations. His creativity and frontend execution made everything smoother.",
    company: "Relay Group",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=256&auto=format&fit=crop",
  },
  {
    name: "Axia Africa Academy",
    role: "Lead Tutor",
    text: "Tobiloba consistently demonstrated a deep understanding of modern frontend engineering. His capstone project was a masterclass in React performance and responsive CSS. Truly one of our top-tier graduates.",
    company: "Academy Review",
    image:
      "https://images.unsplash.com/photo-1566165335512-bb5ba58365b4?q=80&w=410&auto=format&fit=crop&ixlib=rb-4.1.0",
  },
];

const commendations = [
  {
    quote: "His attention to design detail is what you'd expect from a Lead Engineer.",
    author: "Engineering Lead · PeakEcho",
  },
  {
    quote: "The CineScope search engine he built is a benchmark for our students.",
    author: "Senior Facilitator · Unique Groups",
  },
  {
    quote: "One of the cleanest Git workflows and component structures I've reviewed this year.",
    author: "Lead Tutor · Axia Africa",
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(false);
  const { t } = useLanguage();

  const testimonialsSchema = [
    {
      "@type": "ItemList",
      "@id": "https://www.buildwithtobi.online/testimonials#reviews",
      name: "Client Reviews & Endorsements for Tobiloba Akala",
      itemListElement: testimonials.map((testi, idx) => ({
        "@type": "Review",
        position: idx + 1,
        author: {
          "@type": "Person",
          name: testi.name,
          jobTitle: `${testi.role} at ${testi.company}`,
        },
        reviewBody: testi.text,
        itemReviewed: {
          "@type": "Person",
          name: "Tobiloba Akala",
          url: "https://www.buildwithtobi.online/",
        },
        reviewRating: {
          "@type": "Rating",
          ratingValue: "5",
          bestRating: "5",
        },
      })),
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.buildwithtobi.online/testimonials#breadcrumbs",
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
          name: "Testimonials",
          item: "https://www.buildwithtobi.online/testimonials",
        },
      ],
    },
  ];

  useEffect(() => {
    if (!isAutoPlay) return;
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [isAutoPlay]);

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <div className="relative pt-32 pb-24 min-h-screen">
      <SEOHead
        title="Client Testimonials & Reviews | Tobiloba Akala"
        description="Read verified client reviews, endorsements, and commendations from founders, CEOs, and engineering leads who have worked with Tobiloba Akala."
        canonicalPath="/testimonials"
        keywords="Tobiloba Akala reviews, BuildWithTobi testimonials, client feedback, frontend developer recommendations Nigeria"
        jsonLd={testimonialsSchema}
      />

      <div className="max-w-5xl mx-auto px-5 sm:px-8 relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14 pb-10 border-b border-[#E5E2DC]">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-xl"
          >
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-[#86837C] mb-4">
              Kind Words
            </p>
            <h1 className="font-serif text-4xl sm:text-5xl text-[#141413] font-medium tracking-[-0.025em] leading-[1.08]">
              {t("testimonials.title1")}{" "}
              <span className="italic text-[#1D4ED8]">{t("testimonials.title2")}</span>
            </h1>
          </motion.div>

          <button
            onClick={() => setIsAutoPlay((p) => !p)}
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border text-xs font-medium transition-colors whitespace-nowrap shrink-0 self-start md:self-end ${
              isAutoPlay
                ? "bg-[#141413] text-[#F8F7F4] border-[#141413]"
                : "bg-white text-[#141413] border-[#E5E2DC] hover:border-[#141413]"
            }`}
          >
            {isAutoPlay ? <Pause size={13} /> : <Play size={13} />}
            <span>{isAutoPlay ? "Pause Auto-Play" : "Auto-Play Quotes"}</span>
          </button>
        </div>

        {/* Featured Editorial Quote Card */}
        <div className="mb-20">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.35 }}
              className="bg-white border border-[#E5E2DC] rounded-3xl p-8 sm:p-14"
            >
              <div className="flex items-center justify-between mb-8">
                <span className="font-serif text-5xl leading-none text-[#1D4ED8]/30 select-none">
                  “
                </span>
                <span className="font-mono text-xs text-[#86837C] tabular-nums">
                  {String(current + 1).padStart(2, "0")} / {String(testimonials.length).padStart(2, "0")}
                </span>
              </div>

              <blockquote className="font-serif text-2xl sm:text-3xl text-[#141413] leading-[1.35] font-normal mb-10">
                {testimonials[current].text}
              </blockquote>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pt-8 border-t border-[#E5E2DC]">
                <div className="flex items-center gap-4">
                  <img
                    src={testimonials[current].image}
                    alt={testimonials[current].name}
                    className="w-14 h-14 rounded-full object-cover border border-[#E5E2DC]"
                    referrerPolicy="no-referrer"
                  />
                  <div>
                    <p className="font-semibold text-[#141413] text-base">
                      {testimonials[current].name}
                    </p>
                    <p className="text-xs text-[#575550] mt-0.5">
                      {testimonials[current].role} · {testimonials[current].company}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={prev}
                    aria-label="Previous testimonial"
                    className="w-11 h-11 rounded-full border border-[#E5E2DC] bg-[#F8F7F4] hover:border-[#141413] text-[#141413] flex items-center justify-center transition-colors"
                  >
                    <ChevronLeft size={18} />
                  </button>
                  <button
                    onClick={next}
                    aria-label="Next testimonial"
                    className="w-11 h-11 rounded-full border border-[#E5E2DC] bg-[#F8F7F4] hover:border-[#141413] text-[#141413] flex items-center justify-center transition-colors"
                  >
                    <ChevronRight size={18} />
                  </button>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Short Endorsements Grid */}
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-[#86837C] mb-6">
            Additional Endorsements
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {commendations.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.08 }}
                viewport={{ once: true }}
                className="bg-white border border-[#E5E2DC] p-7 rounded-2xl flex flex-col justify-between"
              >
                <p className="font-serif italic text-lg text-[#141413] leading-relaxed mb-6">
                  “{item.quote}”
                </p>
                <p className="text-xs font-mono text-[#86837C]">— {item.author}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-14 pt-10 border-t border-[#E5E2DC] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <p className="text-sm text-[#575550]">
              Ready to build something worth recommending?
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-[#141413] hover:text-[#1D4ED8] transition-colors whitespace-nowrap shrink-0"
            >
              Start a conversation <ArrowUpRight size={15} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
