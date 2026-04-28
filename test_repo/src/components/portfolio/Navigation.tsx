import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Download } from 'lucide-react';

export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Tech Stack', href: '#tech' },
    { name: 'Projects', href: '#projects' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.3 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || isMobileMenuOpen ? 'bg-black/95 backdrop-blur-md fixed top-0 shadow-lg py-4 md:py-4' : 'bg-transparent py-6'
      }`}
      style={{ transform: 'translateZ(0)' }}
    >
      <div className="flex justify-between items-center mx-auto px-6 max-w-7xl">
        <a href="#" className="font-serif text-white text-2xl" style={{ fontFamily: 'Playfair Display, serif' }}>
          <span className="text-[#D4AF37]">Y</span>ahaya
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map(link => (
            <a
              key={link.name}
              href={link.href}
              className="font-medium text-white hover:text-[#D4AF37] transition-colors"
            >
              {link.name}
            </a>
          ))}
          
          <a
            href="/Abdulsamad Resume.pdf"
            download
            className="flex items-center gap-2 bg-[#D4AF37] hover:bg-[#F4E5C2] px-6 py-2 rounded-lg font-semibold text-black transition-all"
          >
            <Download size={18} />
            Resume
          </a>
        </div>

        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden text-white"
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden"
        >
          <div className="space-y-4 px-6 py-4 pt-2">
            {navLinks.map(link => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block py-2 font-medium text-white hover:text-[#D4AF37] transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a
              href="/Abdulsamad Resume.pdf"
              download
              className="block bg-[#D4AF37] hover:bg-[#F4E5C2] px-6 py-3 rounded-lg font-semibold text-black text-center transition-all"
            >
              Download Resume
            </a>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};