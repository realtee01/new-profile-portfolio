import { motion } from "framer-motion";

export default function Preloader({ load }: { load: boolean }) {
  return (
    <div id={load ? "preloader" : "preloader-none"}>
      <motion.svg
        width="100"
        height="100"
        viewBox="0 0 50 50"
        animate={{
          rotate: [0, 360, 360, 360, 720],
          scale: [1, 1, 1.2, 1.2, 1],
        }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
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
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          stroke="url(#x-gradient)"
          strokeWidth="5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="transparent"
        />
      </motion.svg>
    </div>
  );
}
