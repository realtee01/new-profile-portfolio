import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const Loader: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 5000); 

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="z-50 fixed inset-0 flex justify-center items-center bg-black"
        >
          <div className="relative">
            {/* Animated name reveal */}
            <motion.div
              className="font-bold text-6xl md:text-8xl tracking-wider"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              {'YAHAYA'.split('').map((letter, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, y: 50, filter: 'blur(10px)' }}
                  animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                    ease: [0.6, 0.01, 0.05, 0.95]
                  }}
                  className="inline-block text-white"
                >
                  {letter}
                </motion.span>
              ))}
            </motion.div>

            {/* Gold accent line */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1, delay: 0.8, ease: 'easeInOut' }}
              className="bg-[#D4AF37] mt-4 h-1 origin-left"
            />

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.5 }}
              className="mt-4 text-[#D4AF37] text-sm md:text-base text-center tracking-widest"
            >
              FRONTEND DEVELOPER
            </motion.p>
          </div>

          {/* Loading dots */}
          <motion.div
            className="bottom-20 absolute flex gap-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                className="bg-[#D4AF37] rounded-full w-3 h-3"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.3, 1, 0.3]
                }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  delay: i * 0.2
                }}
              />
            ))}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};