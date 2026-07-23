import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { CustomEase } from "gsap/CustomEase";
import { HashLink } from "react-router-hash-link";
import { X, ArrowRight, Home, User, Briefcase, MessageSquareQuote, FileText, LayoutGrid, Newspaper, Globe } from "lucide-react";
import ChromeButton from "./chrome-button";

if (typeof window !== "undefined") {
  gsap.registerPlugin(CustomEase);
}

export interface NavItemType {
  to: string;
  text: string;
  icon?: React.ReactNode;
  index: string;
}

interface SterlingKineticNavProps {
  isOpen: boolean;
  onClose: () => void;
  language: string;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

export function SterlingGateKineticNavigation({
  isOpen,
  onClose,
  language,
  toggleLanguage,
  t,
}: SterlingKineticNavProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  const menuItems: NavItemType[] = [
    { index: "01", to: "/#top", text: t("nav.home"), icon: <Home size={18} /> },
    { index: "02", to: "/about#top", text: t("nav.about"), icon: <User size={18} /> },
    { index: "03", to: "/projects#top", text: t("nav.projects"), icon: <LayoutGrid size={18} /> },
    { index: "04", to: "/experience#top", text: "Experience", icon: <Briefcase size={18} /> },
    { index: "05", to: "/testimonials#top", text: "Testimonials", icon: <MessageSquareQuote size={18} /> },
    { index: "06", to: "/resume#top", text: t("nav.resume"), icon: <FileText size={18} /> },
    { index: "07", to: "/blog#top", text: t("nav.blogs"), icon: <Newspaper size={18} /> },
  ];

  // Initial Setup & Hover Effects for Kinetic Abstract Shapes
  useEffect(() => {
    if (!containerRef.current) return;

    try {
      if (!gsap.parseEase("main")) {
        CustomEase.create("main", "0.65, 0.01, 0.05, 0.99");
        gsap.defaults({ ease: "main", duration: 0.35 });
      }
    } catch (e) {
      console.warn("CustomEase fallback to power2.out", e);
      gsap.defaults({ ease: "power2.out", duration: 0.35 });
    }

    const ctx = gsap.context(() => {
      const items = containerRef.current!.querySelectorAll(".kinetic-menu-item[data-shape]");
      const shapesContainer = containerRef.current!.querySelector(".kinetic-shapes");

      items.forEach((item) => {
        const shapeIndex = item.getAttribute("data-shape");
        const shape = shapesContainer ? shapesContainer.querySelector(`.bg-shape-${shapeIndex}`) : null;

        if (!shape) return;

        const shapeEls = shape.querySelectorAll(".shape-element");

        const onEnter = () => {
          if (shapesContainer) {
            shapesContainer.querySelectorAll(".bg-shape").forEach((s) => s.classList.remove("active"));
          }
          shape.classList.add("active");

          gsap.fromTo(
            shapeEls,
            { scale: 0.5, opacity: 0, rotation: -12 },
            {
              scale: 1,
              opacity: 1,
              rotation: 0,
              duration: 0.3,
              stagger: 0.03,
              ease: "back.out(1.7)",
              overwrite: "auto",
            }
          );
        };

        const onLeave = () => {
          gsap.to(shapeEls, {
            scale: 0.8,
            opacity: 0,
            duration: 0.15,
            ease: "power2.in",
            onComplete: () => shape.classList.remove("active"),
            overwrite: "auto",
          });
        };

        item.addEventListener("mouseenter", onEnter);
        item.addEventListener("mouseleave", onLeave);

        (item as unknown as { _cleanup?: () => void })._cleanup = () => {
          item.removeEventListener("mouseenter", onEnter);
          item.removeEventListener("mouseleave", onLeave);
        };
      });
    }, containerRef);

    return () => {
      ctx.revert();
      if (containerRef.current) {
        const items = containerRef.current.querySelectorAll(".kinetic-menu-item[data-shape]");
        items.forEach((item: unknown) => {
          const typed = item as { _cleanup?: () => void };
          if (typed._cleanup) typed._cleanup();
        });
      }
    };
  }, []);

  // Menu Open/Close GSAP Timeline Animation Effect
  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      const navWrap = containerRef.current!.querySelector(".nav-overlay-wrapper");
      const menu = containerRef.current!.querySelector(".menu-content");
      const overlay = containerRef.current!.querySelector(".overlay");
      const bgPanels = containerRef.current!.querySelectorAll(".backdrop-layer");
      const menuLinks = containerRef.current!.querySelectorAll(".kinetic-nav-link");
      const fadeTargets = containerRef.current!.querySelectorAll("[data-menu-fade]");

      const tl = gsap.timeline();

      if (isOpen) {
        if (navWrap) navWrap.setAttribute("data-nav", "open");

        tl.set(navWrap, { display: "block" })
          .set(menu, { xPercent: 0 }, "<")
          .fromTo(overlay, { autoAlpha: 0 }, { autoAlpha: 1, duration: 0.2 }, "<")
          .fromTo(
            bgPanels,
            { xPercent: 101 },
            { xPercent: 0, stagger: 0.05, duration: 0.28, ease: "power3.out" },
            "<"
          )
          .fromTo(
            menuLinks,
            { yPercent: 100, rotate: 4, opacity: 0 },
            { yPercent: 0, rotate: 0, opacity: 1, stagger: 0.025, duration: 0.25, ease: "power2.out" },
            "<+=0.08"
          );

        if (fadeTargets.length) {
          tl.fromTo(
            fadeTargets,
            { autoAlpha: 0, yPercent: 20 },
            { autoAlpha: 1, yPercent: 0, stagger: 0.02, clearProps: "all" },
            "<+=0.05"
          );
        }
      } else {
        if (navWrap) navWrap.setAttribute("data-nav", "closed");

        tl.to(menuLinks, { yPercent: 20, opacity: 0, duration: 0.12, stagger: 0.015 })
          .to(bgPanels, { xPercent: 101, stagger: 0.03, duration: 0.2, ease: "power2.in" }, "<")
          .to(overlay, { autoAlpha: 0, duration: 0.15 }, "<")
          .set(navWrap, { display: "none" });
      }
    }, containerRef);

    return () => ctx.revert();
  }, [isOpen]);

  return (
    <div ref={containerRef}>
      <section className="fullscreen-menu-container">
        <div data-nav={isOpen ? "open" : "closed"} className="nav-overlay-wrapper fixed inset-0 z-[100] hidden">
          {/* Dark Overlay backdrop */}
          <div
            className="overlay absolute inset-0 bg-[#06020c]/80 backdrop-blur-md cursor-pointer"
            onClick={onClose}
          />

          <nav className="menu-content fixed top-0 right-0 h-screen w-[88%] max-w-[420px] z-10 flex flex-col overflow-hidden shadow-[-25px_0_60px_rgba(0,0,0,0.9)] border-l border-white/10">
            {/* Multi-layered Kinetic Background */}
            <div className="menu-bg absolute inset-0 overflow-hidden pointer-events-none">
              <div className="backdrop-layer first absolute inset-0 bg-[#070212]" />
              <div className="backdrop-layer second absolute inset-0 bg-[#0e0520]" />
              <div className="backdrop-layer absolute inset-0 bg-[#06020c]" />

              {/* Ambient Glowing Orbs matching portfolio theme */}
              <div className="absolute -top-10 -right-10 w-72 h-72 rounded-full bg-[#00e5ff]/15 blur-[90px]" />
              <div className="absolute -bottom-10 -left-10 w-72 h-72 rounded-full bg-[#c770f0]/15 blur-[90px]" />

              {/* Abstract GSAP Reactive Vector Shapes */}
              <div className="ambient-background-shapes kinetic-shapes absolute inset-0 pointer-events-none opacity-90">
                {/* Shape 1: Floating Orbs */}
                <svg className="bg-shape bg-shape-1 absolute inset-0 w-full h-full opacity-0 transition-opacity duration-300" viewBox="0 0 400 600" fill="none">
                  <circle className="shape-element" cx="80" cy="120" r="45" fill="rgba(0, 229, 255, 0.18)" />
                  <circle className="shape-element" cx="310" cy="90" r="65" fill="rgba(199, 112, 240, 0.16)" />
                  <circle className="shape-element" cx="210" cy="340" r="85" fill="rgba(0, 229, 255, 0.12)" />
                  <circle className="shape-element" cx="340" cy="480" r="35" fill="rgba(199, 112, 240, 0.18)" />
                </svg>

                {/* Shape 2: Neon Waves */}
                <svg className="bg-shape bg-shape-2 absolute inset-0 w-full h-full opacity-0 transition-opacity duration-300" viewBox="0 0 400 600" fill="none">
                  <path className="shape-element" d="M-50 200 Q100 80, 250 220 T 450 200" stroke="rgba(0, 229, 255, 0.22)" strokeWidth="50" fill="none" />
                  <path className="shape-element" d="M-50 320 Q100 200, 250 340 T 450 320" stroke="rgba(199, 112, 240, 0.2)" strokeWidth="35" fill="none" />
                </svg>

                {/* Shape 3: Grid Dots */}
                <svg className="bg-shape bg-shape-3 absolute inset-0 w-full h-full opacity-0 transition-opacity duration-300" viewBox="0 0 400 600" fill="none">
                  <circle className="shape-element" cx="60" cy="80" r="8" fill="rgba(0, 229, 255, 0.4)" />
                  <circle className="shape-element" cx="160" cy="80" r="8" fill="rgba(199, 112, 240, 0.4)" />
                  <circle className="shape-element" cx="260" cy="80" r="8" fill="rgba(0, 229, 255, 0.4)" />
                  <circle className="shape-element" cx="110" cy="200" r="12" fill="rgba(199, 112, 240, 0.35)" />
                  <circle className="shape-element" cx="210" cy="200" r="12" fill="rgba(0, 229, 255, 0.35)" />
                  <circle className="shape-element" cx="310" cy="200" r="12" fill="rgba(199, 112, 240, 0.35)" />
                  <circle className="shape-element" cx="60" cy="320" r="10" fill="rgba(0, 229, 255, 0.4)" />
                  <circle className="shape-element" cx="160" cy="320" r="10" fill="rgba(199, 112, 240, 0.4)" />
                  <circle className="shape-element" cx="260" cy="320" r="10" fill="rgba(0, 229, 255, 0.4)" />
                  <circle className="shape-element" cx="110" cy="440" r="8" fill="rgba(199, 112, 240, 0.35)" />
                  <circle className="shape-element" cx="210" cy="440" r="8" fill="rgba(0, 229, 255, 0.35)" />
                </svg>

                {/* Shape 4: Organic Kinetic Blobs */}
                <svg className="bg-shape bg-shape-4 absolute inset-0 w-full h-full opacity-0 transition-opacity duration-300" viewBox="0 0 400 600" fill="none">
                  <path className="shape-element" d="M80 120 Q140 60, 220 120 Q300 180, 220 260 Q140 340, 80 260 Q20 180, 80 120" fill="rgba(0, 229, 255, 0.16)" />
                  <path className="shape-element" d="M220 300 Q280 240, 350 300 Q420 360, 350 440 Q280 520, 220 440 Q160 360, 220 300" fill="rgba(199, 112, 240, 0.15)" />
                </svg>

                {/* Shape 5: Diagonal Kinetic Beams */}
                <svg className="bg-shape bg-shape-5 absolute inset-0 w-full h-full opacity-0 transition-opacity duration-300" viewBox="0 0 400 600" fill="none">
                  <line className="shape-element" x1="-50" y1="100" x2="350" y2="500" stroke="rgba(0, 229, 255, 0.25)" strokeWidth="36" />
                  <line className="shape-element" x1="50" y1="0" x2="420" y2="400" stroke="rgba(199, 112, 240, 0.22)" strokeWidth="28" />
                  <line className="shape-element" x1="150" y1="-50" x2="450" y2="350" stroke="rgba(0, 229, 255, 0.18)" strokeWidth="22" />
                </svg>

                {/* Shape 6 & 7: Extra Kinetic Waves for remaining links */}
                <svg className="bg-shape bg-shape-6 absolute inset-0 w-full h-full opacity-0 transition-opacity duration-300" viewBox="0 0 400 600" fill="none">
                  <circle className="shape-element" cx="200" cy="250" r="140" stroke="rgba(199, 112, 240, 0.22)" strokeWidth="2" strokeDasharray="8 8" />
                  <circle className="shape-element" cx="200" cy="250" r="90" fill="rgba(0, 229, 255, 0.12)" />
                </svg>
                <svg className="bg-shape bg-shape-7 absolute inset-0 w-full h-full opacity-0 transition-opacity duration-300" viewBox="0 0 400 600" fill="none">
                  <polygon className="shape-element" points="200,80 320,300 80,300" fill="rgba(0, 229, 255, 0.15)" />
                  <polygon className="shape-element" points="200,450 340,250 180,250" fill="rgba(199, 112, 240, 0.15)" />
                </svg>
              </div>
            </div>

            {/* Header */}
            <div className="relative z-10 flex items-center justify-between p-5 sm:p-6 border-b border-white/10 bg-[#06020c]/60 backdrop-blur-xl">
              <div className="flex items-center gap-2.5">
                <svg viewBox="0 0 100 100" className="w-10 h-10 drop-shadow-[0_0_15px_rgba(0,229,255,0.4)]" aria-label="TA Logo">
                  <defs>
                    <linearGradient id="logo-grad-kinetic" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#c770f0" />
                      <stop offset="100%" stopColor="#00e5ff" />
                    </linearGradient>
                    <clipPath id="circle-clip-kinetic">
                      <circle cx="50" cy="50" r="50" />
                    </clipPath>
                    <mask id="logo-mask-kinetic">
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
                  <rect x="0" y="0" width="100" height="100" fill="url(#logo-grad-kinetic)" clipPath="url(#circle-clip-kinetic)" mask="url(#logo-mask-kinetic)" />
                </svg>
                <div>
                  <span className="text-white font-bold tracking-wider text-xs sm:text-sm uppercase block">Navigation</span>
                  <span className="text-[10px] text-[#00e5ff] font-mono tracking-widest uppercase">Portfolio</span>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={toggleLanguage}
                  className="flex items-center justify-center gap-1 text-white/90 hover:text-[#00e5ff] px-2.5 py-1 rounded-full border border-white/10 bg-white/5 text-xs transition-colors"
                >
                  <Globe size={13} />
                  <span className="text-[10px] font-bold uppercase">{language}</span>
                </button>
                <button
                  onClick={onClose}
                  className="p-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-gray-300 hover:text-white transition-all duration-300 group"
                  aria-label="Close Menu"
                >
                  <X size={18} className="transition-transform duration-300 group-hover:rotate-90" />
                </button>
              </div>
            </div>

            {/* Kinetic Link List Container */}
            <div className="menu-content-wrapper relative z-10 flex-1 overflow-y-auto py-6 px-5 sm:px-6 flex flex-col justify-between scrollbar-thin scrollbar-thumb-white/10">
              <ul className="menu-list flex flex-col gap-2.5 sm:gap-3 my-auto">
                {menuItems.map((item, idx) => (
                  <li
                    key={item.index}
                    className="menu-list-item kinetic-menu-item group"
                    data-shape={(idx % 7) + 1}
                  >
                    <HashLink
                      smooth
                      to={item.to}
                      onClick={onClose}
                      className="kinetic-nav-link relative flex items-center justify-between w-full px-4 py-3 sm:py-3.5 rounded-2xl bg-white/[0.03] hover:bg-gradient-to-r hover:from-[#c770f0]/15 hover:to-[#00e5ff]/15 border border-white/10 hover:border-[#00e5ff]/40 transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.3)] hover:shadow-[0_8px_30px_rgba(0,229,255,0.15)] overflow-hidden"
                    >
                      <div className="flex items-center gap-3.5">
                        <span className="font-mono text-xs font-semibold tracking-wider text-[#00e5ff]/60 group-hover:text-[#00e5ff] transition-colors duration-300">
                          {item.index}
                        </span>
                        <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/5 border border-white/10 text-[#c770f0] group-hover:bg-[#00e5ff]/15 group-hover:text-[#00e5ff] group-hover:border-[#00e5ff]/40 transition-all duration-300 shadow-inner">
                          {item.icon}
                        </div>
                        <span className="text-base sm:text-lg font-semibold tracking-wide text-white/90 group-hover:text-white group-hover:translate-x-1 transition-all duration-300">
                          {item.text}
                        </span>
                      </div>
                      <div className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300 text-[#00e5ff]">
                        <ArrowRight size={18} />
                      </div>
                    </HashLink>
                  </li>
                ))}
              </ul>

              {/* Kinetic Footer CTA */}
              <div data-menu-fade className="pt-4 border-t border-white/10 mt-4">
                <ChromeButton
                  to="/contact#top"
                  onClick={onClose}
                  className="w-full flex justify-center !py-3.5 !text-xs sm:!text-sm tracking-widest uppercase font-bold shadow-[0_0_25px_rgba(0,229,255,0.25)]"
                >
                  {t("nav.contact")}
                </ChromeButton>
              </div>
            </div>
          </nav>
        </div>
      </section>
    </div>
  );
}

export default SterlingGateKineticNavigation;
