import React from "react";
import { motion } from "motion/react";
import { Link } from "react-router-dom";

export default function ThankYou() {
  return (
    <div className="relative pt-32 pb-16 min-h-screen flex flex-col items-center justify-center">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-white/5 backdrop-blur-md border border-[rgba(200,137,230,0.3)] rounded-2xl p-12 shadow-2xl relative overflow-hidden"
        >
          <div className="absolute inset-0 pointer-events-none z-0">
            {Array.from({ length: 60 }).map((_, i) => {
              const colors = ['#00e5ff', '#c770f0', '#ffffff', '#ffbd2e', '#27c93f'];
              const color = colors[Math.floor(Math.random() * colors.length)];
              const angle = Math.random() * Math.PI * 2;
              const velocity = Math.random() * 150 + 50;
              const x = Math.cos(angle) * velocity;
              const y = Math.sin(angle) * velocity;
              const size = Math.random() * 6 + 4;
              return (
                <motion.div
                  key={i}
                  initial={{ 
                    opacity: 1, 
                    x: "-50%", 
                    y: "-50%", 
                    rotate: 0,
                    scale: 0,
                    left: "50%",
                    top: "50%"
                  }}
                  animate={{ 
                    opacity: [0, 1, 1, 0],
                    x: `calc(-50% + ${x}px)`, 
                    y: `calc(-50% + ${y + 80}px)`, 
                    rotate: Math.random() * 360 + 180,
                    scale: [0, 1, 1, 0.5]
                  }}
                  transition={{ 
                    duration: Math.random() * 1.5 + 1.5, 
                    delay: Math.random() * 0.2,
                    ease: "easeOut",
                    times: [0, 0.1, 0.8, 1]
                  }}
                  className="absolute"
                  style={{ 
                    width: size,
                    height: size * (Math.random() > 0.5 ? 1 : 2),
                    backgroundColor: color,
                    borderRadius: Math.random() > 0.5 ? "50%" : "2px"
                  }}
                />
              );
            })}
          </div>

          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", bounce: 0.5, duration: 0.8 }}
            className="w-20 h-20 bg-gradient-to-br from-[#00e5ff]/20 to-[#c770f0]/20 text-[#00e5ff] border border-[#00e5ff]/30 rounded-full mx-auto flex items-center justify-center mb-8 shadow-[0_0_20px_rgba(0,229,255,0.4)] relative z-10"
          >
            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
            </svg>
          </motion.div>
          
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6 relative z-10">
            Thanks!
          </h1>
          <p className="text-gray-300 text-lg sm:text-xl font-light tracking-wide max-w-2xl mx-auto mb-10 relative z-10">
            We received your request and we'll contact you soon.
          </p>

          <Link 
            to="/" 
            className="relative z-10 inline-block bg-white text-[#0d0d12] hover:bg-gray-200 py-4 px-8 rounded-xl text-sm tracking-widest uppercase font-bold transition-all shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_25px_rgba(255,255,255,0.2)]"
          >
            Return to Homepage
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
