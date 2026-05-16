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
          className="bg-white/5 backdrop-blur-md border border-[rgba(200,137,230,0.3)] rounded-2xl p-12 shadow-2xl"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", bounce: 0.5, duration: 0.8 }}
            className="w-20 h-20 bg-[#00e5ff] rounded-full mx-auto flex items-center justify-center mb-8 shadow-[0_0_20px_rgba(0,229,255,0.4)]"
          >
            <svg className="w-10 h-10 text-[#0d0d12]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
            </svg>
          </motion.div>
          
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
            Thanks!
          </h1>
          <p className="text-gray-300 text-lg sm:text-xl font-light tracking-wide max-w-2xl mx-auto mb-10">
            We received your request and we'll contact you soon.
          </p>

          <Link 
            to="/" 
            className="inline-block bg-white text-[#0d0d12] hover:bg-gray-200 py-4 px-8 rounded-xl text-sm tracking-widest uppercase font-bold transition-all shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_25px_rgba(255,255,255,0.2)]"
          >
            Return to Homepage
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
