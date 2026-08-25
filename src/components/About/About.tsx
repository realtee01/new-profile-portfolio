import Techstack from "./Techstack";
import Toolstack from "./Toolstack";
import LaptopTerminal from "./LaptopTerminal";
import { FaSpotify, FaGithub, FaLaptopCode } from "react-icons/fa";
import { useEffect, useState, useRef } from "react";
import { useInView } from "motion/react";
import { useLanguage } from "../../context/LanguageContext";
import SEOHead from "../SEO/SEOHead";

const AnimatedCounter = ({ end, duration = 2 }: { end: number, duration?: number }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  useEffect(() => {
    if (isInView) {
      let startTimestamp: number | null = null;
      const step = (timestamp: number) => {
        if (!startTimestamp) startTimestamp = timestamp;
        // Easing function for smoother animation (easeOutExpo)
        const progress = Math.min((timestamp - startTimestamp) / (duration * 1000), 1);
        const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
        setCount(Math.floor(easeProgress * end));
        if (progress < 1) {
          window.requestAnimationFrame(step);
        }
      };
      window.requestAnimationFrame(step);
    }
  }, [isInView, end, duration]);

  return <span ref={ref}>{count}</span>;
};

export default function About() {
  const { t } = useLanguage();

  const aboutSchema = [
    {
      "@type": "ProfilePage",
      "@id": "https://www.buildwithtobi.online/about#webpage",
      "url": "https://www.buildwithtobi.online/about",
      "name": "About Tobiloba Akala | Web Developer & Frontend Specialist",
      "isPartOf": {
        "@type": "WebSite",
        "@id": "https://www.buildwithtobi.online/#website"
      },
      "about": {
        "@type": "Person",
        "@id": "https://www.buildwithtobi.online/#person"
      },
      "inLanguage": "en-US"
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.buildwithtobi.online/about#breadcrumbs",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.buildwithtobi.online/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "About",
          "item": "https://www.buildwithtobi.online/about"
        }
      ]
    }
  ];

  return (
    <div className="relative pt-32 pb-16 min-h-screen">
      <SEOHead
        title="About Tobiloba Akala | Web Developer & Frontend Specialist"
        description="Learn more about Tobiloba Akala (BuildWithTobi) - Computer Science student at UNILAG, frontend engineer, tech stack, and background in building production web applications."
        canonicalPath="/about"
        keywords="About Tobiloba Akala, BuildWithTobi biography, Frontend Developer Nigeria, UNILAG Computer Science, React Engineer Nigeria"
        jsonLd={aboutSchema}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 mb-16">
          <div className="lg:w-1/2 text-white text-lg">
            <h1 className="text-4xl sm:text-5xl font-serif font-bold mb-8 text-center lg:text-left tracking-wide">
              {t('about.title1')} <strong className="text-gradient">{t('about.title2')}</strong>
            </h1>
            <p className="text-justify leading-relaxed mb-4 text-gray-200 font-light">
              I'm <span className="text-white font-medium">Tobiloba Akala</span>, a full-stack developer based in <span className="text-white font-medium">Lagos, Nigeria.</span> I focus on creating polished, high-performance digital solutions to businesses and brands worldwide.
              <br /><br />
              Currently pursuing a B.Sc. in Computer Science at the University of Lagos, I balance theoretical knowledge with practical, production-level engineering. I use these principles to actively build modern tools, open-source projects, and client applications.
              <br /><br />
              When I'm not writing code or optimizing web performance, you can usually find me:
            </p>
            <ul className="list-none space-y-2 mb-8">
              <li className="flex items-center gap-2">
                <span className="text-[#c770f0]">👉</span> Playing Games
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[#c770f0]">👉</span> Writing Tech Blogs
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[#c770f0]">👉</span> Travelling
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[#c770f0]">👉</span> listening and vibing to music
              </li>
            </ul>

            <div className="mb-8">
              <a 
                href="https://open.spotify.com/playlist/0Ymw2v0SbK6btauZEL9lRz?si=a1dfa08a37954282" 
                target="_blank" 
                rel="noreferrer" 
                className="flex items-center gap-4 bg-[#1b1a2ea9] border border-[#1DB954]/30 hover:border-[#1DB954]/80 p-4 rounded-xl transition-all duration-300 shadow-[0_0_15px_rgba(29,185,84,0.15)] hover:shadow-[0_0_20px_rgba(29,185,84,0.3)] group max-w-sm backdrop-blur-sm"
              >
                <div className="relative flex-shrink-0">
                  <div className="absolute inset-0 bg-[#1DB954] blur-md opacity-20 group-hover:opacity-40 transition-opacity rounded-full"></div>
                  <FaSpotify className="relative text-[#1DB954] text-5xl group-hover:scale-105 transition-transform duration-300" />
                </div>
                <div>
                  <h3 className="text-white font-bold group-hover:text-[#1DB954] transition-colors line-clamp-1">Coding & Focus Mode</h3>
                  <p className="text-gray-400 text-sm mt-0.5 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#1DB954] animate-[pulse_2s_ease-in-out_infinite]"></span>
                    My favorite playlist
                  </p>
                </div>
                <div className="ml-auto text-gray-500 group-hover:text-white transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                </div>
              </a>
            </div>

            <p className="text-[#c770f0] italic opacity-80">
              "Build. Ship. Repeat."
            </p>
            <footer className="text-[#c770f0] mt-2">— Tobiloba</footer>
          </div>
          <div className="lg:w-1/2 flex justify-center">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-[#00e5ff] to-[#c770f0] rounded-3xl blur-lg opacity-40 group-hover:opacity-75 transition duration-1000"></div>
              <div className="relative rounded-3xl overflow-hidden ring-1 ring-white/10 bg-[#151421] p-3 shadow-2xl">
                <img 
                  src="https://res.cloudinary.com/dw8jtwbka/image/upload/f_auto,q_auto,w_800/v1780309581/refined_profile_picture_keiybp.png"
                  alt="Tobiloba Akala - Web Developer"
                  width={380}
                  height={440}
                  className="w-full max-w-[340px] sm:max-w-[380px] h-[380px] sm:h-[440px] object-cover object-top rounded-2xl transition duration-700 group-hover:scale-105"
                  loading="lazy"
                  decoding="async"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 mb-24 px-4">
          <div className="bg-[#151421] border border-white/5 backdrop-blur-sm p-6 rounded-2xl w-full md:w-64 flex flex-col items-center justify-center gap-3 transition-all duration-300 hover:-translate-y-1 hover:border-[#00e5ff]/30 hover:shadow-[0_10px_30px_-10px_rgba(0,229,255,0.2)]">
            <div className="bg-[#00e5ff]/10 p-4 rounded-full text-[#00e5ff]">
              <FaLaptopCode className="text-3xl" />
            </div>
            <div className="text-4xl font-bold text-white flex items-center">
              <AnimatedCounter end={30} duration={2} />+
            </div>
            <p className="text-sm text-gray-400 font-medium tracking-wide uppercase">{t('about.projects')}</p>
          </div>
          
          <div className="bg-[#151421] border border-white/5 backdrop-blur-sm p-6 rounded-2xl w-full md:w-64 flex flex-col items-center justify-center gap-3 transition-all duration-300 hover:-translate-y-1 hover:border-[#c770f0]/30 hover:shadow-[0_10px_30px_-10px_rgba(199,112,240,0.2)]">
            <div className="bg-[#c770f0]/10 p-4 rounded-full text-[#c770f0]">
              <FaGithub className="text-3xl" />
            </div>
            <div className="text-4xl font-bold text-white flex items-center">
              <AnimatedCounter end={500} duration={2.5} />+
            </div>
            <p className="text-sm text-gray-400 font-medium tracking-wide uppercase">{t('about.contributions')}</p>
          </div>
        </div>

        <h1 className="text-4xl sm:text-5xl font-serif font-bold text-white text-center mb-12 tracking-wide">
          Professional <strong className="text-gradient">Skillset</strong>
        </h1>
        <LaptopTerminal />
        <Techstack />

        <h1 className="text-4xl sm:text-5xl font-serif font-bold text-white text-center mt-24 mb-12 tracking-wide">
          <strong className="text-gradient">Tools</strong> I use
        </h1>
        <Toolstack />
        
        <div className="text-center mt-8 text-gray-400 font-medium text-lg">
          And many more...
        </div>
      </div>
    </div>
  );
}
