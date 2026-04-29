import { useState } from "react";
import { AiFillGithub } from "react-icons/ai";
import { FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Tilt from "react-parallax-tilt";
import { HashLink } from "react-router-hash-link";

export default function Home2() {
  const [revealed, setRevealed] = useState(false);

  return (
    <div className="py-16 relative z-10" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="md:w-2/3 text-white">
            <h1 className="text-4xl font-bold mb-8 text-center md:text-left uppercase">
              LET ME <span className="text-gradient"> INTRODUCE </span> MYSELF
            </h1>
            <div className="text-xl leading-relaxed mb-6 space-y-6">
              <p>
                I am a Frontend Engineer and Computer Science student at the University of Lagos, dedicated to bridging the gap between complex technical logic and high-end visual aesthetics.
              </p>
              <p>
                My approach to development is rooted in <b className="text-[#00e5ff]">performance-first engineering</b> — building applications that are not just visually appealing, but fast, scalable, and reliable.
              </p>
              <p>
                I’m not the developer who jumped straight into frameworks. I took the long road — mastering <b className="text-[#c770f0]">vanilla JavaScript</b> and understanding how things work under the hood. Today, I build with modern tools like <b className="text-[#00e5ff]">React and Tailwind</b>, with a deep understanding of system behavior and performance.
              </p>
              <p>
                Beyond interfaces, I develop complete, production-ready applications with secure authentication, user dashboards, and dynamic data handling. I build secure, scalable backend systems using modern technologies, enabling businesses and startups to launch fast and efficiently without unnecessary complexity.
              </p>
              <p>
                I help businesses launch faster by delivering production-ready applications without the overhead of large development teams.
              </p>
              <p>
                My focus is simple: creating clean, scalable solutions that not only function seamlessly but are intuitive and enjoyable for users.
              </p>

              <div className="mt-12">
                <h2 className="text-2xl font-bold text-gradient mb-6">⚙️ What I Do</h2>
                <ul className="space-y-3 list-none">
                  <li className="flex items-start">
                    <span className="text-[#00e5ff] mr-3">•</span>
                    <span>I build complete websites and web apps from idea to launch</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#00e5ff] mr-3">•</span>
                    <span>I create secure login systems and manage user accounts</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#00e5ff] mr-3">•</span>
                    <span>I design simple, easy-to-use dashboards and admin panels</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#00e5ff] mr-3">•</span>
                    <span>I connect apps to real-time data so everything stays updated</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#00e5ff] mr-3">•</span>
                    <span>I make sure websites work smoothly on all devices (mobile, tablet, desktop)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#00e5ff] mr-3">•</span>
                    <span>I improve speed, performance, and overall user experience</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="md:w-1/3 flex justify-center">
            <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10} scale={1.05} transitionSpeed={2500}>
              <div className="relative group animate-[updown_2.5s_ease-in-out_infinite]">
                <div className="absolute -inset-1 bg-gradient-to-r from-[#00e5ff] to-[#c770f0] rounded-2xl blur opacity-25 group-hover:opacity-60 transition duration-1000 group-hover:duration-200"></div>
                <div className="relative rounded-2xl overflow-hidden ring-1 ring-white/10 shadow-[0_8px_30px_rgb(0,0,0,0.5)]">
                  <img 
                    src="https://i.ibb.co/gbnR8T2Y/IMG-8573.png"
                    alt="Developer Headshot"
                    className="w-72 h-80 object-cover transform transition duration-700 hover:scale-105 object-top"
                    referrerPolicy="no-referrer"
                  />
                </div>
                
                {/* Floating Cards on Hover */}
                <div className="absolute -left-10 top-16 bg-[#1b1a2ea9] backdrop-blur-md px-4 py-2 rounded-xl border border-[#00e5ff]/30 shadow-[0_0_15px_rgba(0,229,255,0.2)] opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100 translate-y-4 group-hover:translate-y-0 hidden sm:block z-20 pointer-events-none">
                  <span className="text-white text-sm font-semibold flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-[#00e5ff] animate-pulse"></div>
                    Frontend Dev
                  </span>
                </div>
                
                <div className="absolute -right-8 bottom-24 bg-[#1b1a2ea9] backdrop-blur-md px-4 py-2 rounded-xl border border-[#c770f0]/30 shadow-[0_0_15px_rgba(199,112,240,0.2)] opacity-0 group-hover:opacity-100 transition-all duration-500 delay-200 translate-y-4 group-hover:translate-y-0 hidden sm:block z-20 pointer-events-none">
                  <span className="text-white text-sm font-semibold flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-[#c770f0] animate-[pulse_2s_ease-in-out_infinite]"></div>
                    Creative Engine
                  </span>
                </div>

                <div className="absolute left-[10%] -bottom-4 bg-[#1b1a2ea9] backdrop-blur-md px-4 py-2 rounded-xl border border-white/20 shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-500 delay-300 translate-y-4 group-hover:translate-y-0 hidden sm:block z-20 pointer-events-none">
                  <span className="text-white text-sm font-semibold flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-green-400"></div>
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
          <ul className="flex justify-center space-x-6 mb-12">
            <li>
              <a
                href="https://github.com/realtee01"
                target="_blank"
                rel="noreferrer"
                className="home-about-social-icon"
              >
                <AiFillGithub />
              </a>
            </li>
            <li>
              <a
                href="https://x.com/realtee1111101"
                target="_blank"
                rel="noreferrer"
                className="home-about-social-icon"
              >
                <FaXTwitter />
              </a>
            </li>
            <li>
              <a
                href="https://wa.me/2347032533869"
                target="_blank"
                rel="noreferrer"
                className="home-about-social-icon"
              >
                <FaWhatsapp />
              </a>
            </li>
          </ul>
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
