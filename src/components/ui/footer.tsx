import { HashLink } from "react-router-hash-link";
import {
  Globe, // Could represent a website or general online presence
  Share2, // Could represent sharing/social media in general
  MessageCircle, // Could represent communication/social
  Link as LinkIcon, // Renamed to avoid conflict with standard Link
  Send, // Could represent sending a message
  Feather, // Could be an abstract representation for a post/social link
  Linkedin, // Official LinkedIn icon
} from "lucide-react";

const links = [
  {
    title: "Home",
    href: "/#top",
  },
  {
    title: "Services",
    href: "/services#top",
  },
  {
    title: "About",
    href: "/about#top",
  },
  {
    title: "Projects",
    href: "/projects#top",
  },
  {
    title: "Nigeria Dev",
    href: "/web-developer-nigeria#top",
  },
  {
    title: "Experience",
    href: "/experience#top",
  },
  {
    title: "Testimonials",
    href: "/testimonials#top",
  },
  {
    title: "Resume",
    href: "/resume#top",
  },
  {
    title: "Blogs",
    href: "/blog#top",
  },
  {
    title: "Contact",
    href: "/contact#top",
  },
];

export default function FooterSection() {
  return (
    <footer className="py-16 md:py-24 border-t border-white/5 bg-[#040108] relative overflow-hidden">
      {/* Background soft glow elements */}
      <div className="absolute -bottom-24 -left-20 w-72 h-72 bg-[#c770f0]/5 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute -bottom-24 -right-20 w-72 h-72 bg-[#00e5ff]/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="mx-auto max-w-5xl px-6 relative z-10">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8 pb-8 border-b border-white/5">
          {/* Brand Logo (Leftmost) */}
          <div className="flex justify-start">
            <HashLink
              smooth
              to="/#top"
              aria-label="go home"
              className="group transition-transform duration-300 hover:scale-105"
            >
              <svg
                viewBox="0 0 100 100"
                className="w-12 h-12 drop-shadow-[0_0_10px_rgba(0,229,255,0.3)] transition-all duration-300 group-hover:drop-shadow-[0_0_15px_rgba(199,112,240,0.5)]"
                aria-label="TA Logo"
              >
                <defs>
                  <linearGradient id="footer-logo-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#c770f0" />
                    <stop offset="100%" stopColor="#00e5ff" />
                  </linearGradient>
                  <clipPath id="footer-circle-clip">
                    <circle cx="50" cy="50" r="50" />
                  </clipPath>
                  <mask id="footer-logo-mask">
                    <rect x="0" y="0" width="100" height="100" fill="black" />
                    <circle cx="50" cy="50" r="50" fill="white" />
                    <circle cx="50" cy="50" r="32" fill="black" />
                    <rect x="0" y="0" width="71" height="100" fill="black" />
                    <rect x="53" y="0" width="18" height="100" fill="white" />
                    <rect x="71" y="42" width="29" height="16" fill="white" />
                    <rect x="29" y="30" width="18" height="70" fill="white" />
                    <rect x="0" y="0" width="47" height="30" fill="white" />
                  </mask>
                </defs>
                <rect
                  x="0"
                  y="0"
                  width="100"
                  height="100"
                  fill="url(#footer-logo-grad)"
                  clipPath="url(#footer-circle-clip)"
                  mask="url(#footer-logo-mask)"
                />
              </svg>
            </HashLink>
          </div>

          {/* Navigation Links (Right/Center Aligned) */}
          <div className="flex flex-wrap gap-x-6 gap-y-3 text-sm md:justify-end">
            {links.map((link, index) => (
              <HashLink
                smooth
                key={index}
                to={link.href}
                className="text-gray-400 hover:text-[#00e5ff] font-medium duration-150 relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-[1px] after:bottom-0 after:left-0 after:bg-gradient-to-r after:from-[#00e5ff] after:to-[#c770f0] after:origin-bottom-right hover:after:scale-x-100 hover:after:origin-bottom-left after:transition-transform after:duration-300"
              >
                <span>{link.title}</span>
              </HashLink>
            ))}
          </div>
        </div>

        <div className="flex flex-col-reverse md:flex-row md:items-center md:justify-between gap-6 pt-8">
          {/* Rights Section (Leftmost) */}
          <span className="text-gray-500 text-sm font-light text-left">
            © {new Date().getFullYear()} Tobiloba Akala. All rights reserved.
          </span>

          {/* Social Links using generic icons matching template requests */}
          <div className="flex flex-wrap gap-6 text-sm">
            {/* GitHub Link (using basic globe/link icon) */}
            <a
              href="https://github.com/realtee01"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Portfolio"
              className="text-gray-400 hover:text-[#00e5ff] hover:scale-110 duration-200 block"
            >
              <Globe className="size-6" />
            </a>

            {/* LinkedIn Link */}
            <a
              href="https://ng.linkedin.com/in/tobiloba-akala-35448a38b"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="text-gray-400 hover:text-[#c770f0] hover:scale-110 duration-200 block"
            >
              <Linkedin className="size-6" />
            </a>

            {/* Social Link 2: Twitter / X (using feather/post/write icon) */}
            <a
              href="https://x.com/realtee1111101"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter Profile"
              className="text-gray-400 hover:text-[#c770f0] hover:scale-110 duration-200 block"
            >
              <Feather className="size-6" />
            </a>

            {/* Social Link 3: WhatsApp (using communication icon) */}
            <a
              href="https://wa.me/2347032533869"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp Contact"
              className="text-gray-400 hover:text-green-400 hover:scale-110 duration-200 block"
            >
              <MessageCircle className="size-6" />
            </a>

            {/* Link / URL Shortener or General Link */}
            <a
              href="https://github.com/realtee01?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Repositories"
              className="text-gray-400 hover:text-[#00e5ff] hover:scale-110 duration-200 block"
            >
              <LinkIcon className="size-6" />
            </a>

            {/* Send direct message */}
            <HashLink
              smooth
              to="/contact#top"
              aria-label="Send direct message"
              className="text-gray-400 hover:text-[#c770f0] hover:scale-110 duration-200 block"
            >
              <Send className="size-6" />
            </HashLink>

            {/* General Social Post/Share connection */}
            <a
              href="https://x.com/realtee1111101"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Share page"
              className="text-gray-400 hover:text-[#00e5ff] hover:scale-110 duration-200 block"
            >
              <Share2 className="size-6" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
