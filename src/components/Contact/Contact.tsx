import React, { useState } from "react";
import { motion } from "motion/react";
import { useNavigate } from "react-router-dom";
import { Mail, MessageCircle, ArrowRight, Copy, Check } from "lucide-react";
import SEOHead from "../SEO/SEOHead";
import { SparkleMark } from "../ui/EditorialPrimitives";
import { useTheme } from "../../context/ThemeContext";
import { BrandsAndContactSection } from "../Editorial/EditorialSections";

const QUICK_TEMPLATES = [
  {
    label: "Frontend Web App",
    text: "Hi Tobi! I'm looking for a frontend developer to build a React / TypeScript web application. Here is a quick overview: [brief context].\nTimeline: [timeline] · Budget range: [budget].",
  },
  {
    label: "Website Redesign",
    text: "Hi Tobi! I want to redesign and speed up my existing website so it converts better on mobile and desktop. Current site: [URL].\nTimeline: [timeline] · Budget range: [budget].",
  },
  {
    label: "Product / Team Role",
    text: "Hi Tobi! We're hiring a frontend engineer for [team / product] and would love to discuss a role or contract. Here are the details: [role summary].",
  },
];

export default function Contact() {
  const navigate = useNavigate();
  const { reduceMotion } = useTheme();
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [copied, setCopied] = useState(false);

  const contactSchema = [
    {
      "@type": "ContactPage",
      "@id": "https://www.buildwithtobi.online/contact#contact",
      name: "Contact Tobiloba Akala (BuildWithTobi)",
      url: "https://www.buildwithtobi.online/contact",
      mainEntity: {
        "@type": "Person",
        "@id": "https://www.buildwithtobi.online/#person",
        name: "Tobiloba Akala",
        email: "tobilobaakala@gmail.com",
        telephone: "+2347032533869",
      },
    },
  ];

  const handleCopyEmail = () => {
    navigator.clipboard?.writeText("tobilobaakala@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof typeof errors]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validate = () => {
    let valid = true;
    const next = { name: "", email: "", message: "" };
    if (!formData.name.trim()) {
      next.name = "Please enter your name.";
      valid = false;
    }
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) {
      next.email = "Please enter a valid email address.";
      valid = false;
    }
    if (!formData.message.trim()) {
      next.message = "Please include a short note about your project.";
      valid = false;
    }
    setErrors(next);
    return valid;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    try {
      await fetch("https://formspree.io/f/xaqlbalq", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      navigate("/thank-you");
    } catch {
      navigate("/thank-you");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div id="top" className="relative pt-28 sm:pt-36 pb-16 sm:pb-24 px-5 sm:px-8 lg:px-12">
      <SEOHead
        title="Contact Tobiloba Akala | Hire a Web Developer"
        description="Send a project brief or book a call with Tobiloba Akala (BuildWithTobi) for frontend engineering, React web apps, and high-converting websites."
        canonicalPath="/contact"
        keywords="Contact Tobiloba Akala, Hire Frontend Developer Nigeria, React Developer Lagos"
        jsonLd={contactSchema}
      />

      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="mb-12"
        >
          <div className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.16em] text-[var(--ink-muted)] mb-5">
            <SparkleMark className="w-3 h-3 text-[var(--accent)]" />
            <span>Contact</span>
          </div>

          <h1 className="font-editorial font-black text-[clamp(3rem,7.2vw,5.2rem)] leading-[0.95] tracking-[-0.03em] text-[var(--ink)] mb-5 text-balance">
            Tell me what you&apos;re{" "}
            <span className="italic text-[var(--accent)]">building.</span>
          </h1>

          <p className="text-base sm:text-lg text-[var(--ink-muted)] max-w-xl leading-relaxed">
            Share a quick brief below or email me directly. I reply personally
            within 24 hours with honest timelines and next steps.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Brief Form */}
          <form
            onSubmit={handleSubmit}
            noValidate
            className="lg:col-span-7 bg-[var(--surface-card)]/90 border border-white/85 rounded-3xl p-6 sm:p-8 shadow-[var(--shadow-paper)] space-y-5"
          >
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-[var(--ink-soft)] mb-2.5">
                Quick Start Templates
              </p>
              <div className="flex flex-wrap gap-2">
                {QUICK_TEMPLATES.map((tpl) => (
                  <button
                    key={tpl.label}
                    type="button"
                    onClick={() =>
                      setFormData((prev) => ({ ...prev, message: tpl.text }))
                    }
                    className="px-3.5 py-1.5 rounded-full text-xs font-semibold border border-[var(--border-hairline)] bg-white/75 hover:border-[var(--ink)] text-[var(--ink)] transition-colors cursor-pointer whitespace-nowrap"
                  >
                    {tpl.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="contact-name" className="block text-xs font-bold text-[var(--ink)] mb-1.5">
                  Name
                </label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className="w-full px-4 py-3 rounded-xl bg-white/85 border border-[var(--border-hairline)] focus:border-[var(--ink)] focus:outline-none text-sm text-[var(--ink)]"
                />
                {errors.name && (
                  <p className="text-xs text-rose-700 font-medium mt-1">{errors.name}</p>
                )}
              </div>

              <div>
                <label htmlFor="contact-email" className="block text-xs font-bold text-[var(--ink)] mb-1.5">
                  Email
                </label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@domain.com"
                  className="w-full px-4 py-3 rounded-xl bg-white/85 border border-[var(--border-hairline)] focus:border-[var(--ink)] focus:outline-none text-sm text-[var(--ink)]"
                />
                {errors.email && (
                  <p className="text-xs text-rose-700 font-medium mt-1">{errors.email}</p>
                )}
              </div>
            </div>

            <div>
              <label htmlFor="contact-message" className="block text-xs font-bold text-[var(--ink)] mb-1.5">
                Project Brief
              </label>
              <textarea
                id="contact-message"
                name="message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                placeholder="What are we building, and when do you want to launch?"
                className="w-full px-4 py-3 rounded-xl bg-white/85 border border-[var(--border-hairline)] focus:border-[var(--ink)] focus:outline-none text-sm text-[var(--ink)] resize-y"
              />
              {errors.message && (
                <p className="text-xs text-rose-700 font-medium mt-1">{errors.message}</p>
              )}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="inline-flex items-center justify-center gap-2 px-7 py-3 rounded-full bg-[var(--ink)] text-white text-sm font-semibold hover:opacity-90 transition-opacity cursor-pointer disabled:opacity-60 whitespace-nowrap"
            >
              <span>{isSubmitting ? "Sending..." : "Send Brief"}</span>
              <ArrowRight size={15} />
            </button>
          </form>

          {/* Direct Channels Sidebar */}
          <div className="lg:col-span-5 space-y-4">
            <div className="rounded-3xl bg-[var(--surface-card)]/85 border border-white/85 p-6 shadow-[var(--shadow-paper)]">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.14em] text-[var(--ink-soft)] mb-2">
                <Mail size={14} className="text-[var(--accent)]" />
                <span>Direct Email</span>
              </div>
              <a
                href="mailto:tobilobaakala@gmail.com"
                className="font-editorial text-xl font-black text-[var(--ink)] underline underline-offset-4 hover:text-[var(--accent)] transition-colors break-all"
              >
                tobilobaakala@gmail.com
              </a>
              <div className="mt-4">
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-[var(--border-hairline)] bg-white/80 hover:border-[var(--ink)] text-xs font-semibold text-[var(--ink)] transition-colors cursor-pointer"
                >
                  {copied ? <Check size={13} /> : <Copy size={13} />}
                  <span>{copied ? "Copied to clipboard" : "Copy email"}</span>
                </button>
              </div>
            </div>

            <div className="rounded-3xl bg-[var(--surface-card)]/85 border border-white/85 p-6 shadow-[var(--shadow-paper)]">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.14em] text-[var(--ink-soft)] mb-2">
                <MessageCircle size={14} className="text-[var(--accent)]" />
                <span>Fastest Response</span>
              </div>
              <p className="text-sm text-[var(--ink-muted)] leading-relaxed mb-4">
                Prefer a quick chat before writing a full brief? Reach me
                directly on WhatsApp.
              </p>
              <a
                href="https://wa.me/2347032533869"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-[var(--border-strong)] text-xs font-bold text-[var(--ink)] hover:bg-[var(--ink)] hover:text-white transition-colors"
              >
                <span>Open WhatsApp</span>
                <ArrowRight size={13} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Brands & Direct Contact Sticker Cloud (Reference Screenshot 2) */}
      <div className="mt-14 sm:mt-20 border-t border-dashed border-[var(--border-hairline)]">
        <BrandsAndContactSection />
      </div>
    </div>
  );
}
