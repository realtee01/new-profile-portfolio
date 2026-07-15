import React from "react";
import { motion, useInView } from "motion/react";
import { useRef, useEffect, useState } from "react";

function Counter({ from, to, duration = 2, suffix = "" }: { from: number; to: number; duration?: number; suffix?: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const [count, setCount] = useState(from);

  useEffect(() => {
    if (inView) {
      let startTime: number | null = null;
      const step = (currentTime: number) => {
        if (!startTime) startTime = currentTime;
        const progress = Math.min((currentTime - startTime) / (duration * 1000), 1);
        setCount(Math.floor(progress * (to - from) + from));
        if (progress < 1) {
          window.requestAnimationFrame(step);
        }
      };
      window.requestAnimationFrame(step);
    }
  }, [inView, from, to, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
}

export default function SocialProof() {
  const stats = [
    { label: "Projects Completed", value: 35, suffix: "+" },
    { label: "Client Satisfaction", value: 100, suffix: "%" },
    { label: "Years Experience", value: 4, suffix: "+" },
    { label: "Countries Reached", value: 10, suffix: "+" }
  ];

  return (
    <div className="py-16 relative z-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="text-center"
            >
              <h3 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#00e5ff] to-[#c770f0] mb-2">
                <Counter from={0} to={stat.value} suffix={stat.suffix} />
              </h3>
              <p className="text-gray-400 text-sm tracking-wider uppercase">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
