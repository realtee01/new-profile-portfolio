import { useState } from "react";
import { AiFillGithub } from "react-icons/ai";
import { FaWhatsapp, FaPhone } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { AppWindow, Palette, Search, Zap, LayoutDashboard, MonitorSmartphone, ShoppingCart } from "lucide-react";
import Tilt from "react-parallax-tilt";
import { HashLink } from "react-router-hash-link";
import MagneticDock from "../ui/magnetic-dock";

const services = [
  {
    icon: <AppWindow className="text-[#00e5ff] w-6 h-6" />,
    title: "Code to Launch",
    desc: "Building complete, production-ready websites and web apps."
  },
  {
    icon: <Palette className="text-[#c770f0] w-6 h-6" />,
    title: "Brand Identity",
    desc: "Designing unique logos and integrating them seamlessly."
  },
  {
    icon: <Search className="text-[#00e5ff] w-6 h-6" />,
    title: "AI & SEO Visibility",
    desc: "Optimizing for Google and AI engines like Gemini & ChatGPT."
  },
  {
    icon: <Zap className="text-[#c770f0] w-6 h-6" />,
    title: "High Performance",
    desc: "Guaranteeing lightning-fast load times and 90+ speed scores."
  },
  {
    icon: <LayoutDashboard className="text-[#00e5ff] w-6 h-6" />,
    title: "Secure Portals",
    desc: "Creating safe login systems and real-time management dashboards."
  },
  {
    icon: <MonitorSmartphone className="text-[#c770f0] w-6 h-6" />,
    title: "Responsive Design",
    desc: "Crafting flawless experiences for mobile, tablet, and desktop."
  },
  {
    icon: <ShoppingCart className="text-[#00e5ff] w-6 h-6" />,
    title: "Custom E-Commerce",
    desc: "Developing high-converting, uniquely branded Shopify stores."
  }
];

export default function Home2() {
  const [revealed, setRevealed] = useState(false);

  return (
    <div className="py-16 relative z-10" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="lg:w-2/3 text-white">
            <h1 className="text-4xl font-bold mb-8 text-center lg:text-left uppercase">
              LET ME <span className="text-gradient"> INTRODUCE </span> MYSELF
            </h1>
            <div className="text-xl leading-relaxed mb-6 space-y-6">
              <p>
                I am a Frontend Engineer and Computer Science student at the University of Lagos, dedicated to bridging the gap between complex technical logic and high-end visual aesthetics.
              </p>
              <p>
                My approach is rooted in <b className="text-[#00e5ff]">Performance-First Engineering</b> — architecting applications that are not just visually premium, but hyper-fast, scalable, and optimized for the modern web.
              </p>
              <p>
                I didn’t take the shortcut through frameworks; I mastered the core of <b className="text-[#c770f0]">Vanilla JavaScript</b> to understand exactly how the web behaves under the hood. Today, I leverage <b className="text-[#00e5ff]">React, Next.js, and Tailwind CSS</b> to build production-ready systems that consistently achieve 95+ Lighthouse scores for performance and technical SEO.
              </p>
              <p>
                Beyond the interface, I focus on <b className="text-[#c770f0]">Visibility Engineering</b>. In the age of AI, a website must be both human-readable and "AI-Readable." I specialize in AEO (Answer Engine Optimization) and Schema Integration (JSON-LD), ensuring that the brands I build aren't just seen on Google, but are cited as top answers by AI engines like Gemini and ChatGPT.
              </p>
              <p>
                I help startups and businesses launch faster by delivering high-authority web applications without the overhead of massive teams.
              </p>

              <div className="mt-16 mb-8 pt-8 border-t border-white/10">
                <h2 className="text-3xl font-bold text-gradient mb-8 tracking-wide">⚙️ Services & Capabilities</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-6">
                  {services.map((s, i) => (
                    <div key={i} className={`bg-[#151421]/60 backdrop-blur-md p-6 rounded-2xl border border-white/5 hover:-translate-y-1 hover:border-[#00e5ff]/30 transition-all duration-300 hover:shadow-[0_10px_30px_rgba(0,229,255,0.1)] group ${i === services.length - 1 ? 'md:col-span-2' : ''}`}>
                      <div className="bg-white/5 w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:bg-[#00e5ff]/10 transition-colors">
                        {s.icon}
                      </div>
                      <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#00e5ff] group-hover:to-[#c770f0] transition-colors">{s.title}</h3>
                      <p className="text-sm text-gray-400 leading-relaxed font-medium">
                        {s.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="lg:w-1/3 flex justify-center">
            <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10} scale={1.05} transitionSpeed={2500}>
              <div className="relative group animate-[updown_2.5s_ease-in-out_infinite]">
                <div className="absolute -inset-1 bg-gradient-to-r from-[#00e5ff] to-[#c770f0] rounded-2xl blur opacity-25 group-hover:opacity-60 transition duration-1000 group-hover:duration-200"></div>
                <div className="relative rounded-2xl overflow-hidden ring-1 ring-white/10 shadow-[0_8px_30px_rgb(0,0,0,0.5)]">
                  <img 
                    src="https://i.ibb.co/gbnR8T2Y/IMG-8573.png"
                    alt="Developer Headshot"
                    className="w-72 h-80 object-cover transform transition duration-700 hover:scale-105 object-top"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                
                {/* Floating Cards on Hover */}
                <div className="absolute -left-2 sm:-left-10 top-12 sm:top-16 bg-[#1b1a2ea9] backdrop-blur-md px-3 py-1.5 sm:px-4 sm:py-2 rounded-xl border border-[#00e5ff]/30 shadow-[0_0_15px_rgba(0,229,255,0.2)] opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100 translate-y-4 group-hover:translate-y-0 z-20 pointer-events-none">
                  <span className="text-white text-xs sm:text-sm font-semibold flex items-center gap-1.5 sm:gap-2">
                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#00e5ff] animate-pulse"></div>
                    Frontend Dev
                  </span>
                </div>
                
                <div className="absolute -right-2 sm:-right-8 bottom-20 sm:bottom-24 bg-[#1b1a2ea9] backdrop-blur-md px-3 py-1.5 sm:px-4 sm:py-2 rounded-xl border border-[#c770f0]/30 shadow-[0_0_15px_rgba(199,112,240,0.2)] opacity-0 group-hover:opacity-100 transition-all duration-500 delay-200 translate-y-4 group-hover:translate-y-0 z-20 pointer-events-none">
                  <span className="text-white text-xs sm:text-sm font-semibold flex items-center gap-1.5 sm:gap-2">
                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#c770f0] animate-[pulse_2s_ease-in-out_infinite]"></div>
                    Creative Engine
                  </span>
                </div>

                <div className="absolute left-[5%] sm:left-[10%] -bottom-2 sm:-bottom-4 bg-[#1b1a2ea9] backdrop-blur-md px-3 py-1.5 sm:px-4 sm:py-2 rounded-xl border border-white/20 shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-500 delay-300 translate-y-4 group-hover:translate-y-0 z-20 pointer-events-none">
                  <span className="text-white text-xs sm:text-sm font-semibold flex items-center gap-1.5 sm:gap-2">
                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-green-400"></div>
                    Available
                  </span>
                </div>

                {/* Floating Card Click-to-Reveal */}
                <div 
                  onClick={() => setRevealed(!revealed)}
                  className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/40 backdrop-blur-md border border-white/10 text-white/90 text-[10px] sm:text-xs px-3 py-1.5 rounded-full cursor-pointer transition-all duration-300 hover:bg-white/10 hover:border-white/30 z-30 whitespace-nowrap shadow-xl flex items-center gap-2"
                >
                  <div className={`w-1.5 h-1.5 rounded-full ${revealed ? 'bg-[#c770f0]' : 'bg-[#00e5ff] animate-[pulse_2s_ease-in-out_infinite]'}`}></div>
                  {revealed ? "Web developer" : "Click me to reveal what I am"}
                </div>
              </div>
            </Tilt>
          </div>
        </div>

        <div className="mt-24 text-center">
          <h1 className="text-4xl font-bold text-white mb-4">FIND ME ON</h1>
          <p className="text-white mb-8">
            Feel free to <span className="text-[#00e5ff]">connect </span>with me
          </p>
          <div className="mb-12">
            <MagneticDock 
              links={[
                { href: "https://github.com/realtee01", icon: <AiFillGithub className="w-8 h-8" color="white" /> },
                { href: "https://x.com/realtee1111101", icon: <FaXTwitter className="w-7 h-7" color="#00e5ff" /> },
                { href: "https://wa.me/2347032533869", icon: <FaWhatsapp className="w-8 h-8" color="#c770f0" /> },
                { href: "tel:+2347032533869", icon: <FaPhone className="w-7 h-7" color="#00e5ff" /> }
              ]} 
            />
          </div>
          <HashLink
            smooth
            to="/contact#top"
            className="inline-block mt-4 bg-[#c770f0] hover:bg-[#00e5ff] text-white font-bold py-3 px-8 rounded-full transition-all duration-300 shadow-[0_0_15px_rgba(199,112,240,0.5)] hover:shadow-[0_0_20px_rgba(0,229,255,0.6)]"
          >
            Contact Me
          </HashLink>
        </div>
      </div>
    </div>
  );
}
