import { useState } from "react";
import { AiFillGithub } from "react-icons/ai";
import { FaWhatsapp, FaPhone } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { AppWindow, Palette, Search, Zap, LayoutDashboard, MonitorSmartphone, ShoppingCart, Cuboid, Sparkles, Bot, Mic, Smartphone } from "lucide-react";
import Tilt from "react-parallax-tilt";
import { HashLink } from "react-router-hash-link";
import MagneticDock from "../ui/magnetic-dock";
import ChromeButton from "../ui/chrome-button";

const services = [
  {
    icon: <AppWindow className="text-[#00e5ff] w-6 h-6" />,
    title: "Code to Launch",
    desc: "Building complete, production-ready websites and web apps."
  },
  {
    icon: <Smartphone className="text-[#c770f0] w-6 h-6" />,
    title: "Mobile App Development",
    desc: "Developing fast, scalable, and intuitive mobile applications for iOS and Android."
  },
  {
    icon: <Bot className="text-[#00e5ff] w-6 h-6" />,
    title: "AI Agents",
    desc: "Automating workflows by building intelligent AI agents tailored for your business."
  },
  {
    icon: <Mic className="text-[#c770f0] w-6 h-6" />,
    title: "Voice Agents & Receptionists",
    desc: "Integrating conversational voice agents and AI receptionists into modern websites."
  },
  {
    icon: <Cuboid className="text-[#00e5ff] w-6 h-6" />,
    title: "3D Websites",
    desc: "Crafting immersive 3D websites using modern web technologies."
  },
  {
    icon: <Sparkles className="text-[#00e5ff] w-6 h-6" />,
    title: "Animation Websites",
    desc: "Developing highly interactive, fluid animation websites that captivate users."
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
            <h2 className="text-sm font-sans tracking-widest text-[#00e5ff] uppercase mb-4 text-center lg:text-left font-semibold">
              A Bit About Me
            </h2>
            <h3 className="text-3xl md:text-5xl font-serif font-bold mb-8 text-white leading-tight text-center lg:text-left">
              Building products that look premium and perform flawlessly.
            </h3>
            <div className="text-lg leading-relaxed mb-6 space-y-6 text-gray-300 font-light max-w-3xl">
              <p>
                I'm Tobiloba Akala, a Frontend Engineer and Computer Science student at the University of Lagos. I create solutions to businesses and brands by bridging the gap between rigorous engineering principles and thoughtful, polished design.
              </p>
              <p>
                I don't just write code—I focus on the entire product experience. From architecting scalable React systems to crafting immersive <span className="text-white font-medium">3D experiences</span> and <span className="text-white font-medium">fluid animations</span>, every detail matters.
              </p>
              <p>
                Instead of just learning frameworks, I learned the platform. My foundation in core web APIs and JavaScript allows me to build robust applications with React, Next.js, and Tailwind that consistently hit 95+ performance scores.
              </p>
              <p>
                Beyond the interface, I focus on building <span className="text-[#c770f0] font-medium">AI-Readable</span> applications—utilizing semantic HTML and structured data to ensure products are cited and surfaced correctly by modern answer engines.
              </p>
              <p>
                Whether you're an early-stage startup or scaling a complex SaaS tool, I design and write code to get you to market faster, without sacrificing quality.
              </p>
            </div>

            <div className="mt-16 mb-8 pt-10 border-t border-white/5">
                <h2 className="text-3xl font-serif font-bold text-gradient mb-8 tracking-wide">⚙️ Services & Capabilities</h2>
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
          <div className="lg:w-1/3 flex justify-center">
            <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10} scale={1.05} transitionSpeed={2500}>
              <div className="relative group animate-[updown_2.5s_ease-in-out_infinite]">
                <div className="absolute -inset-1 bg-gradient-to-r from-[#00e5ff] to-[#c770f0] rounded-2xl blur opacity-60 transition duration-1000"></div>
                <div className="relative rounded-2xl overflow-hidden ring-1 ring-white/10 shadow-[0_8px_30px_rgb(0,0,0,0.5)]">
                  <img 
                    src="https://res.cloudinary.com/dw8jtwbka/image/upload/v1780309581/refined_profile_picture_keiybp.png"
                    alt="Developer Headshot"
                    className="w-72 h-80 object-cover transform transition duration-700 scale-100 hover:scale-105 object-top"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                
                {/* Floating Cards */}
                <div className="absolute -left-2 sm:-left-10 top-12 sm:top-16 bg-[#1b1a2ea9] backdrop-blur-md px-3 py-1.5 sm:px-4 sm:py-2 rounded-xl border border-[#00e5ff]/30 shadow-[0_0_15px_rgba(0,229,255,0.2)] opacity-100 transition-all duration-500 delay-100 translate-y-0 z-20 pointer-events-none">
                  <span className="text-white text-xs sm:text-sm font-semibold flex items-center gap-1.5 sm:gap-2">
                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#00e5ff] animate-pulse"></div>
                    Frontend Dev
                  </span>
                </div>
                
                <div className="absolute -right-2 sm:-right-8 bottom-20 sm:bottom-24 bg-[#1b1a2ea9] backdrop-blur-md px-3 py-1.5 sm:px-4 sm:py-2 rounded-xl border border-[#c770f0]/30 shadow-[0_0_15px_rgba(199,112,240,0.2)] opacity-100 transition-all duration-500 delay-200 translate-y-0 z-20 pointer-events-none">
                  <span className="text-white text-xs sm:text-sm font-semibold flex items-center gap-1.5 sm:gap-2">
                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#c770f0] animate-[pulse_2s_ease-in-out_infinite]"></div>
                    Creative Engine
                  </span>
                </div>

                <div className="absolute left-[5%] sm:left-[10%] -bottom-2 sm:-bottom-4 bg-[#1b1a2ea9] backdrop-blur-md px-3 py-1.5 sm:px-4 sm:py-2 rounded-xl border border-white/20 shadow-lg opacity-100 transition-all duration-500 delay-300 translate-y-0 z-20 pointer-events-none">
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
          <h1 className="text-4xl font-serif font-bold text-white mb-4 tracking-wider">FIND ME ON</h1>
          <p className="text-white mb-8 text-lg font-light tracking-wide">
            Feel free to <span className="text-[#00e5ff] font-medium">connect</span> with me
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
          <ChromeButton
            to="/contact#top"
            className="mt-4"
          >
            Contact Me
          </ChromeButton>
        </div>
      </div>
    </div>
  );
}
