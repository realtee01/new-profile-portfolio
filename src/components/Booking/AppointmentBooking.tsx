import React from "react";
import { motion } from "motion/react";
import { Check, MessageSquare, Phone } from "lucide-react";

export default function AppointmentBooking() {
  return (
    <div className="relative pb-24 flex flex-col items-center">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6 tracking-wide leading-tight">
            Let's Build a Website <br className="hidden md:block" /> That Grows Your Business
          </h2>
          <p className="text-gray-300 text-lg md:text-xl font-light tracking-wide max-w-2xl mx-auto">
            Send a message or call me directly to discuss how your website can generate more leads, automate workflows, and improve conversions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 mb-20 items-center">
          {/* Start Conversation */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 sm:p-12 shadow-2xl relative overflow-hidden flex flex-col items-center justify-center min-h-[400px]"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#c770f0]/5 to-[#00e5ff]/5 pointer-events-none" />
            {/* Interactive Direct Connect & Consultation SVG Illustration */}
            <div className="flex items-center gap-4 mb-6 relative">
              <div className="relative w-20 h-20 sm:w-24 sm:h-24 flex items-center justify-center">
                <svg viewBox="0 0 120 120" className="w-full h-full drop-shadow-[0_0_25px_rgba(0,229,255,0.4)]">
                  <defs>
                    <linearGradient id="consultGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#c770f0" />
                      <stop offset="100%" stopColor="#00e5ff" />
                    </linearGradient>
                    <linearGradient id="consultBg" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#1e1833" />
                      <stop offset="100%" stopColor="#0d0a17" />
                    </linearGradient>
                  </defs>
                  
                  {/* Orbiting dashed accent ring */}
                  <circle cx="60" cy="60" r="54" fill="none" stroke="url(#consultGrad)" strokeWidth="1.5" strokeDasharray="6 4" opacity="0.5" />
                  <circle cx="60" cy="60" r="46" fill="url(#consultBg)" stroke="url(#consultGrad)" strokeWidth="2" />
                  
                  {/* Speech bubble & code conversation glyph */}
                  <path d="M42 42 h36 a6 6 0 0 1 6 6 v18 a6 6 0 0 1 -6 6 h-16 l-8 7 v-7 h-12 a6 6 0 0 1 -6 -6 v-18 a6 6 0 0 1 6 -6 z" fill="#151224" stroke="#00e5ff" strokeWidth="1.8" strokeLinejoin="round" />
                  
                  {/* Live audio & code frequency waveforms */}
                  <line x1="49" y1="56" x2="49" y2="56" stroke="#c770f0" strokeWidth="3" strokeLinecap="round" />
                  <line x1="55" y1="52" x2="55" y2="60" stroke="#00e5ff" strokeWidth="3" strokeLinecap="round" />
                  <line x1="60" y1="48" x2="60" y2="64" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" />
                  <line x1="65" y1="52" x2="65" y2="60" stroke="#00e5ff" strokeWidth="3" strokeLinecap="round" />
                  <line x1="71" y1="56" x2="71" y2="56" stroke="#c770f0" strokeWidth="3" strokeLinecap="round" />
                </svg>
                
                {/* Live Availability Signal */}
                <span
                  className="absolute bottom-0 right-0 w-4 h-4 rounded-full bg-emerald-400 border-2 border-[#130f1e] shadow-[0_0_10px_#34d399] animate-pulse"
                  title="Live • Available for Consultation"
                />
              </div>

              <div className="flex flex-col gap-2">
                <div className="w-10 h-10 bg-white/10 border border-white/20 rounded-full flex items-center justify-center text-[#c770f0] backdrop-blur-sm shadow-md hover:scale-110 transition-transform">
                  <MessageSquare size={18} />
                </div>
                <div className="w-10 h-10 bg-white/10 border border-white/20 rounded-full flex items-center justify-center text-[#00e5ff] backdrop-blur-sm shadow-md hover:scale-110 transition-transform">
                  <Phone size={18} />
                </div>
              </div>
            </div>
            <h3 className="text-white text-xl font-semibold mb-2 text-center relative z-10">Start a Conversation</h3>
            <p className="text-gray-400 text-center text-sm max-w-sm mb-8 relative z-10">
              Fill out the contact form below with your project details, or give me a call directly to set up a meeting.
            </p>
            <div className="flex flex-col w-full max-w-[280px] gap-4 relative z-10">
              <button 
                onClick={() => {
                  const form = document.getElementById('contact-form');
                  if (form) {
                    form.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="w-full bg-gradient-to-r from-[#c770f0] to-[#00e5ff] text-[#0c0513] hover:opacity-90 px-8 py-3 rounded-xl font-bold uppercase tracking-wider text-sm transition-all shadow-[0_0_20px_rgba(0,229,255,0.2)]"
              >
                Send a Message
              </button>
              <a 
                href="tel:+2347032533869"
                className="w-full text-center bg-white/5 hover:bg-white/10 text-white border border-white/20 hover:border-[#00e5ff]/50 px-8 py-3 rounded-xl font-bold uppercase tracking-wider text-sm transition-all"
              >
                Call Me
              </a>
            </div>
          </motion.div>

          {/* Benefits */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col justify-center space-y-6 pl-0 lg:pl-12"
          >
            <h3 className="text-2xl font-serif font-bold text-white mb-2">Why reach out?</h3>
            <div className="space-y-4">
              {[
                "Free consultation",
                "No obligation",
                "Website strategy",
                "Business growth advice",
                "Custom roadmap"
              ].map((benefit, index) => (
                <div key={index} className="flex items-center gap-4 text-gray-300">
                  <div className="w-6 h-6 rounded-full bg-[#00e5ff]/10 text-[#00e5ff] flex items-center justify-center flex-shrink-0 border border-[#00e5ff]/30">
                    <Check size={14} strokeWidth={3} />
                  </div>
                  <span className="text-lg tracking-wide">{benefit}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Process Steps */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="bg-white/[0.02] border border-white/5 rounded-3xl p-8 sm:p-12 relative overflow-hidden"
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-md h-px bg-gradient-to-r from-transparent via-[#c770f0]/50 to-transparent" />
          <h3 className="text-center text-2xl font-serif font-bold text-white mb-12">What happens after you reach out?</h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            <div className="hidden lg:block absolute top-6 left-[12%] right-[12%] h-px bg-white/10 -z-10" />
            
            {[
              { step: "Step 1", title: "Send a message or call", desc: "Use the form below or give me a call to get started." },
              { step: "Step 2", title: "Discovery meeting", desc: "We discuss your business, goals, and challenges." },
              { step: "Step 3", title: "Receive a tailored proposal", desc: "I send a custom roadmap, pricing, and timeline." },
              { step: "Step 4", title: "Project kickoff", desc: "We finalize details and start building your growth engine." }
            ].map((item, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-[#110c1c] border border-[#c770f0]/30 text-[#c770f0] font-bold flex items-center justify-center mb-6 shadow-[0_0_15px_rgba(199,112,240,0.2)]">
                  {index + 1}
                </div>
                <div className="text-xs font-semibold text-[#00e5ff] uppercase tracking-widest mb-2">{item.step}</div>
                <h4 className="text-white font-semibold mb-2">{item.title}</h4>
                <p className="text-gray-400 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
