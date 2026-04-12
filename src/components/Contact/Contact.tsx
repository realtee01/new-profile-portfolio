import Particle from "../Particle";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <div className="relative pt-32 pb-16 min-h-screen flex flex-col items-center">
      <Particle />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Let's build <span className="text-gradient">something real.</span>
          </h1>
          <p className="text-gray-300 text-lg">
            Got a project? A brief? Just want to talk code? I'm here.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-white/5 backdrop-blur-md border border-[rgba(200,137,230,0.3)] rounded-2xl p-8 md:p-12 shadow-2xl"
        >
          <form action="https://formspree.io/f/xaqlbalq" method="POST" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">Name</label>
                <input 
                  name="name" 
                  id="name"
                  type="text" 
                  placeholder="Your Name" 
                  required 
                  className="w-full bg-[#0c0513]/50 border border-[rgba(200,137,230,0.2)] rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#00e5ff] transition-colors" 
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                <input 
                  name="email" 
                  id="email"
                  type="email" 
                  placeholder="Your Email" 
                  required 
                  className="w-full bg-[#0c0513]/50 border border-[rgba(200,137,230,0.2)] rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#00e5ff] transition-colors" 
                />
              </div>
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">Message</label>
              <textarea 
                name="message" 
                id="message"
                placeholder="How can I help you?" 
                rows={5} 
                required 
                className="w-full bg-[#0c0513]/50 border border-[rgba(200,137,230,0.2)] rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#00e5ff] transition-colors resize-none"
              ></textarea>
            </div>
            <button 
              type="submit" 
              className="w-full btn-primary py-4 rounded-xl text-lg font-bold flex items-center justify-center gap-2 group transition-all"
            >
              Send Message 
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
}
