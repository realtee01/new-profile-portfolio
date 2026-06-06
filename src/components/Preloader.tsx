import { motion } from "framer-motion";

export default function Preloader({ load }: { load: boolean }) {
  return (
    <div id={load ? "preloader" : "preloader-none"} className="flex-col">
      <div className="relative flex flex-col items-center">
        {/* Animated name reveal */}
        <motion.div
          className="font-black text-5xl md:text-7xl tracking-[0.25em] text-center flex"
          style={{ fontFamily: 'Playfair Display, serif' }}
        >
          {'TOBILOBA'.split('').map((letter, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, y: 20, filter: 'blur(5px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{
                duration: 0.4,
                delay: index * 0.05,
                ease: [0.6, 0.01, 0.05, 0.95],
              }}
              className="inline-block text-white"
            >
              {letter === " " ? "\u00A0" : letter}
            </motion.span>
          ))}
        </motion.div>

        {/* Classy accent line */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4, ease: 'easeInOut' }}
          className="bg-gradient-to-r from-transparent via-white/50 to-transparent mt-6 h-[1px] w-full max-w-[300px] origin-center"
        />

        <div className="my-8">
          <motion.svg
            width="80"
            height="80"
            viewBox="0 0 50 50"
            animate={{
              rotate: [0, 360, 360, 360, 720],
              scale: [1, 1, 1.2, 1.2, 1],
            }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <defs>
              <linearGradient id="x-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#c770f0" />
                <stop offset="100%" stopColor="#00e5ff" />
              </linearGradient>
            </defs>
            <motion.path
              animate={{
                d: [
                  "M 15 15 L 35 35 M 15 35 L 35 15", // X
                  "M 15 15 L 35 35 M 15 35 L 35 15", // X
                  "M 15 15 L 35 25 M 15 35 L 35 25", // Arrow >
                  "M 15 15 L 35 25 M 15 35 L 35 25", // Arrow >
                  "M 15 15 L 35 35 M 15 35 L 35 15", // X
                ]
              }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              stroke="url(#x-gradient)"
              strokeWidth="5"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="transparent"
            />
          </motion.svg>
        </div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
          className="text-white/70 text-xs md:text-sm font-light text-center tracking-[0.4em] uppercase"
        >
          FULL-STACK DEVELOPER
        </motion.p>
      </div>

      {/* Loading dots */}
      <motion.div
        className="absolute bottom-20 flex gap-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
      >
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            className="bg-white/80 rounded-full w-2 h-2"
            style={{ boxShadow: "0 0 10px rgba(255,255,255,0.4)" }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.3, 1, 0.3]
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              delay: i * 0.2,
              ease: "easeInOut"
            }}
          />
        ))}
      </motion.div>
    </div>
  );
}
