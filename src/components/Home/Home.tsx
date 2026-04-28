import { motion } from "motion/react";
import Type from "./Type";
import Home2 from "./Home2";
import { Code2, Cpu, Globe, Rocket, Zap } from "lucide-react";
import { HashLink } from "react-router-hash-link";

export default function Home() {
  return (
    <section className="overflow-hidden">
      <div className="relative pt-24 pb-8 md:pt-40 md:pb-20 min-h-screen flex items-center" id="home">
        
        {/* Advanced Background Gradients */}
        <div className="absolute top-1/4 -left-20 w-64 h-64 md:w-96 md:h-96 bg-[#c770f0]/20 rounded-full blur-[80px] md:blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-1/4 -right-20 w-64 h-64 md:w-96 md:h-96 bg-[#00e5ff]/20 rounded-full blur-[80px] md:blur-[120px] animate-pulse delay-700"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full mt-[-5vh]">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-16 xl:gap-24 w-full">
            
            {/* Left Content - Text */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="w-full lg:w-[55%] flex flex-col items-center lg:items-start text-center lg:text-left"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: [0.95, 1.05, 0.95] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-white/80 text-sm font-medium mb-6 backdrop-blur-sm"
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00e5ff] opacity-75 duration-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00e5ff] animate-[pulse_1s_ease-in-out_infinite]"></span>
                </span>
                Available
              </motion.div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#00e5ff] mb-8 sm:mb-12 tracking-tight leading-tight">
                Hi There! <span className="wave" role="img" aria-labelledby="wave">👋🏻</span>
              </h1>

              <h1 className="text-4xl leading-[1.1] sm:leading-[1.2] sm:text-5xl md:text-6xl xl:text-7xl font-extrabold mb-12 sm:mb-16 tracking-tighter break-words">
                <span className="text-gradient animate-text-flash-1 block mb-6 sm:mb-10 font-medium text-2xl sm:text-4xl md:text-5xl">
                  I'm
                </span>
                
                <span className="text-gradient animate-text-flash-2 block mb-3 sm:mb-5">
                  TOBILOBA
                </span>
                
                <span className="text-gradient animate-text-flash-3 block">
                  AKALA
                </span>
              </h1>

              <div className="text-lg sm:text-3xl md:text-4xl font-mono font-medium text-[#00e5ff] min-h-[50px] sm:min-h-[80px] md:min-h-[5rem] w-full flex justify-center lg:justify-start mt-4 sm:mt-8 mb-10 md:mb-8">
                <Type />
              </div>

              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 1 }}
                className="text-gray-400 text-lg md:text-xl max-w-xl leading-relaxed mb-10 hidden md:block"
              >
                Engineering high-performance, pixel-perfect digital experiences with a focus on modern aesthetics and technical excellence.
              </motion.p>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="flex flex-wrap justify-center lg:justify-start gap-5 md:gap-8 mt-6 md:mt-10"
              >
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <HashLink 
                    smooth
                    to="/projects#top" 
                    className="inline-block bg-gradient-to-r from-[#c770f0] to-[#a24ed3] text-white font-bold py-3 md:py-3.5 px-8 rounded-2xl shadow-[0_10px_20px_-5px_rgba(199,112,240,0.4)]"
                  >
                    View My Works
                  </HashLink>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <HashLink 
                    smooth
                    to="/contact#top" 
                    className="inline-block bg-white/5 hover:bg-white/10 text-white font-bold py-3 md:py-3.5 px-8 rounded-2xl border border-white/10 backdrop-blur-md transition-colors"
                  >
                    Let's Talk
                  </HashLink>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Right Content - Premium Visuals */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="w-full lg:w-[45%] relative flex flex-col justify-center items-center mt-12 lg:mt-0"
            >
              <div className="relative w-full aspect-[4/3] sm:aspect-square max-w-[450px]">
                {/* Main Abstract Container */}
                <div className="absolute inset-4 sm:inset-0 bg-gradient-to-br from-[#c770f0]/10 to-[#00e5ff]/10 rounded-[2.5rem] sm:rounded-[3rem] border border-white/5 backdrop-blur-[2px] overflow-hidden z-0">
                  <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(0,229,255,0.05),transparent_70%)]"></div>
                </div>

                {/* Central Focus Element */}
                <div className="absolute inset-[25%] sm:inset-[15%] rounded-full bg-gradient-to-tr from-[#c770f0]/20 to-[#00e5ff]/20 blur-2xl animate-pulse z-0"></div>

                {/* Floating Elements */}
                {/* Code Card */}
                <motion.div 
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute top-0 sm:top-[10%] left-0 sm:-left-[10%] w-56 sm:w-72 bg-[#1b1a2ea9] backdrop-blur-xl border border-white/10 rounded-2xl p-4 sm:p-5 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.5)] z-30"
                >
                  <div className="flex gap-1.5 mb-3 sm:mb-4">
                    <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
                    <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
                    <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
                  </div>
                  <div className="font-mono text-[10px] sm:text-sm space-y-2">
                    <p className="text-[#c770f0]">const <span className="text-white">Profile</span> = () =&gt; &#123;</p>
                    <p className="pl-3 sm:pl-4 text-gray-400 lowercase">return (</p>
                    <p className="pl-6 sm:pl-8 text-[#00e5ff]">&lt;Hero name="Tobiloba" /&gt;</p>
                    <p className="pl-3 sm:pl-4 text-gray-400 lowercase">);</p>
                    <p className="text-[#c770f0]">&#125;;</p>
                  </div>
                </motion.div>

                {/* Performance Stat Card */}
                <motion.div 
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  className="absolute bottom-4 sm:bottom-[10%] right-0 sm:-right-[5%] w-44 sm:w-56 bg-[#1b1a2ea9] sm:bg-white/5 backdrop-blur-2xl border border-white/10 rounded-2xl p-4 sm:p-6 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.5)] z-40"
                >
                  <div className="flex items-center gap-3 mb-2 sm:mb-3">
                    <div className="p-1.5 sm:p-2 bg-[#00e5ff]/20 rounded-lg text-[#00e5ff]">
                      <Zap size={20} />
                    </div>
                    <span className="text-white font-bold text-base sm:text-lg tracking-wide">100%</span>
                  </div>
                  <p className="text-gray-400 text-[10px] sm:text-xs uppercase font-bold tracking-widest">Core Web Vitals</p>
                </motion.div>

                {/* Tech Icons orbiting */}
                <motion.div 
                  animate={{ rotate: 360 }}
                  transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-4 sm:inset-0 pointer-events-none z-20"
                >
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 p-2 sm:p-3 bg-[#1b1a2ea9] sm:bg-white/5 border border-white/10 rounded-xl backdrop-blur-md text-[#c770f0] shadow-lg">
                    <Code2 size={20} className="sm:w-6 sm:h-6" />
                  </div>
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 p-2 sm:p-3 bg-[#1b1a2ea9] sm:bg-white/5 border border-white/10 rounded-xl backdrop-blur-md text-[#00e5ff] shadow-lg">
                    <Cpu size={20} className="sm:w-6 sm:h-6" />
                  </div>
                  <div className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 p-2 sm:p-3 bg-[#1b1a2ea9] sm:bg-white/5 border border-white/10 rounded-xl backdrop-blur-md text-white/50 shadow-lg">
                    <Globe size={20} className="sm:w-6 sm:h-6" />
                  </div>
                  <div className="absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2 p-2 sm:p-3 bg-[#1b1a2ea9] sm:bg-white/5 border border-white/10 rounded-xl backdrop-blur-md text-[#c770f0]/70 shadow-lg">
                    <Rocket size={20} className="sm:w-6 sm:h-6" />
                  </div>
                </motion.div>
              </div>

              {/* Developer Illustration (Secondary Visual) */}
              <div
                className="w-full max-w-[350px] mt-24 md:mt-32 flex justify-center relative z-10"
              >
                <img 
                  src="https://raw.githubusercontent.com/soumyajit4419/Portfolio/master/src/Assets/home-main.svg"
                  alt="Developer Illustration"
                  className="w-full object-contain animate-[updown-hue_3s_ease-in-out_infinite]"
                />
              </div>
            </motion.div>

          </div>
        </div>
      </div>
      <Home2 />
    </section>
  );
}
