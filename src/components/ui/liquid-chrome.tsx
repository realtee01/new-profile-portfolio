import React from 'react';
import { motion } from 'framer-motion';

interface LiquidChromeProps {
  baseColor?: number[];
  speed?: number;
  amplitude?: number;
  interactive?: boolean;
}

export default function LiquidChrome({
  baseColor = [0.039, 0.039, 0.039],
}: LiquidChromeProps) {
  const r = Math.round(baseColor[0] * 255);
  const g = Math.round(baseColor[1] * 255);
  const b = Math.round(baseColor[2] * 255);

  return (
    <div className="absolute inset-0 overflow-hidden w-full h-full pointer-events-none" style={{ backgroundColor: `rgb(${r}, ${g}, ${b})` }}>
      <div className="absolute inset-0 opacity-80 blur-[20px] mix-blend-screen overflow-hidden">
        <motion.div
          animate={{
            rotate: [0, 180, 360],
            scale: [1, 1.5, 1],
            x: ["-20%", "20%", "-20%"],
            y: ["-20%", "20%", "-20%"]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut"
          }}
          className="absolute -top-1/2 -left-1/2 w-[200%] h-[200%] rounded-[40%] bg-gradient-to-r from-transparent via-[#00e5ff] to-transparent opacity-60"
        />
        <motion.div
          animate={{
            rotate: [360, 180, 0],
            scale: [1, 1.8, 1],
            x: ["20%", "-20%", "20%"],
            y: ["20%", "-20%", "20%"]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut"
          }}
          className="absolute -bottom-1/2 -right-1/2 w-[200%] h-[200%] rounded-[45%] bg-gradient-to-r from-transparent via-[#c770f0] to-transparent opacity-60"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-white/20 to-transparent mix-blend-overlay" />
      <div className="absolute inset-0 bg-black/10 shadow-[inset_0_0_20px_rgba(255,255,255,0.1)] rounded-full" />
    </div>
  );
}
