import { HashLink } from "react-router-hash-link";
import { ArrowUpRight } from "lucide-react";

const primaryLinks = [
  { title: "Home", href: "/#top" },
  { title: "Selected Work", href: "/projects#top" },
  { title: "Services", href: "/services#top" },
  { title: "About", href: "/about#top" },
  { title: "Journal", href: "/blog#top" },
];

const directoryLinks = [
  { title: "Experience", href: "/experience#top" },
  { title: "Testimonials", href: "/testimonials#top" },
  { title: "Resume / CV", href: "/resume#top" },
  { title: "Nigeria Web Dev", href: "/web-developer-nigeria#top" },
  { title: "Contact", href: "/contact#top" },
];

const socialLinks = [
  { title: "GitHub", href: "https://github.com/realtee01" },
  { title: "LinkedIn", href: "https://ng.linkedin.com/in/tobiloba-akala-35448a38b" },
  { title: "X / Twitter", href: "https://x.com/realtee1111101" },
  { title: "WhatsApp", href: "https://wa.me/2347032533869" },
];

export default function FooterSection() {
  return (
    <footer className="border-t border-[#E5E2DC] bg-[#FFFFFF] relative z-10">
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8 py-16 md:py-24">
        {/* Top Editorial Conversion & Identity Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b border-[#E5E2DC]">
          <div className="lg:col-span-5">
            <HashLink
              smooth
              to="/#top"
              className="font-serif text-2xl sm:text-3xl font-semibold text-[#141413] tracking-tight inline-block mb-4"
            >
              Tobiloba Akala
            </HashLink>
            <p className="text-[#575550] text-base leading-relaxed max-w-md mb-6">
              Full-stack & frontend engineer based in Lagos, Nigeria. Helping founders and brands ship fast, clean, high-converting web products.
            </p>
            <div className="flex flex-wrap items-center gap-4 text-sm">
              <a
                href="mailto:tobilobaakala@gmail.com"
                className="font-medium text-[#141413] underline underline-offset-4 decoration-[#CFCBC2] hover:decoration-[#1D4ED8] hover:text-[#1D4ED8] transition-colors"
              >
                tobilobaakala@gmail.com
              </a>
              <span className="text-[#CFCBC2]" aria-hidden="true">·</span>
              <a
                href="https://wa.me/2347032533869"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-[#575550] hover:text-[#141413] transition-colors"
              >
                +234 703 253 3869
              </a>
            </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xs font-medium text-[#86837C] mb-4">Navigation</h3>
              <ul className="space-y-2.5 text-sm">
                {primaryLinks.map((link) => (
                  <li key={link.href}>
                    <HashLink
                      smooth
                      to={link.href}
                      className="text-[#141413] hover:text-[#1D4ED8] transition-colors"
                    >
                      {link.title}
                    </HashLink>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-xs font-medium text-[#86837C] mb-4">More</h3>
              <ul className="space-y-2.5 text-sm">
                {directoryLinks.map((link) => (
                  <li key={link.href}>
                    <HashLink
                      smooth
                      to={link.href}
                      className="text-[#141413] hover:text-[#1D4ED8] transition-colors"
                    >
                      {link.title}
                    </HashLink>
                  </li>
                ))}
              </ul>
            </div>

            <div className="col-span-2 sm:col-span-1">
              <h3 className="text-xs font-medium text-[#86837C] mb-4">Elsewhere</h3>
              <ul className="space-y-2.5 text-sm">
                {socialLinks.map((social) => (
                  <li key={social.title}>
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-[#141413] hover:text-[#1D4ED8] transition-colors"
                    >
                      <span>{social.title}</span>
                      <ArrowUpRight size={13} className="text-[#86837C]" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Copyright Row */}
        <div className="pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-[#86837C]">
          <p>© {new Date().getFullYear()} Tobiloba Akala (BuildWithTobi). All rights reserved.</p>
          <p>Lagos, Nigeria · Working with teams worldwide</p>
        </div>
      </div>
    </footer>
  );
}
