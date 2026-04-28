import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Download, ArrowDown } from 'lucide-react';

const roles = ['Front-end Developer', 'Problem Solver', 'Creative Thinker'];

export const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative flex justify-center items-center bg-gradient-to-br from-black via-gray-900 to-black min-h-screen overflow-hidden">
      <div className="absolute inset-0 opacity-30">
        <img src="https://d64gsuwffb70l.cloudfront.net/690f686e57f45bffc5367e90_1762617524415_c4a271a5.webp" alt="" className="w-full h-full object-cover" />
      </div>
      
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="z-10 relative mt-10 md:px-6 max-w-5xl text-center"
      >
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mb-4 font-serif text-white text-4xl md:text-6xl tracking-tight"
          style={{ fontFamily: 'Playfair Display, serif' }}
        >
          Yahaya Abdulsamad
        </motion.h1>
        
        <motion.div 
          key={roleIndex}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.5 }}
          className="mb-2 h-12"
        >
          <p className="font-light text-[#D4AF37] text-2xl md:text-3xl tracking-wide">
            {roles[roleIndex]}
          </p>
        </motion.div>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mx-auto mb-12 max-w-2xl text-gray-300 text-lg md:text-xl leading-relaxed"
        >
          Crafting exceptional digital experiences with elegant code
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="flex sm:flex-row flex-col justify-center items-center gap-4"
        >
          <button type='button' onClick={scrollToContact} className="group relative bg-[#D4AF37] px-8 py-4 rounded-lg overflow-hidden font-semibold text-black hover:scale-105 transition-all">
            <span className="z-10 relative">Let's Connect</span>
            <div className="absolute inset-0 bg-gradient-to-r from-[#F4E5C2] to-[#D4AF37] opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </button>
          
          <a href="/Abdulsamad Resume.pdf" download className="group flex items-center gap-2 hover:bg-[#D4AF37] px-8 py-4 border-[#D4AF37] border-2 rounded-lg font-semibold text-[#D4AF37] hover:text-black transition-all">
            <Download size={20} />
            Download Resume
          </a>
        </motion.div>
      </motion.div>

      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="bottom-5 md:bottom-8 left-1/2 absolute -translate-x-1/2 transform"
      >
        <ArrowDown className="text-[#D4AF37]" size={32} />
      </motion.div>
    </section>
  );
};
