import { motion, AnimatePresence } from "motion/react";
import { useInView } from "motion/react";
import { useRef, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Quote, Play, Pause } from "lucide-react";

const testimonials = [
  { 
    name: "Damilola 'D-Beatz' Adeyemi", 
    role: "Music Producer", 
    text: "Tobiloba's ability to translate the energy of music into a digital interface is unmatched. He built my producer portfolio with a sleek, dark aesthetic that perfectly represents my sound. The performance is top-notch.", 
    company: "Echo Chamber Studios", 
    image: "https://images.unsplash.com/photo-1606459431839-90b942dc3754?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
  },
  { 
    name: "Olamide Bakare", 
    role: "Founder & Creative Director", 
    text: "As a fashion brand, aesthetics are everything. Tobiloba understood our 'Luxe Thread' vision immediately. He delivered a high-end e-commerce experience that feels as premium as our clothing line.", 
    company: "Luxe Thread", 
    image: "https://images.unsplash.com/photo-1531384441138-2736e62e0919?q=80&w=256&auto=format&fit=crop" 
  },
  { 
    name: "Micheal Cheng", 
    role: "CEO", 
    text: "Collaborating with Tobiloba was seamless from start to finish. He quickly grasped our goals and delivered results that exceeded expectations. His creativity and technical skill made everything smoother. Tobiloba truly made our life easier.", 
    company: "Relay group of company", 
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=256&auto=format&fit=crop" 
  },
  { 
    name: "Axia Africa Academy", 
    role: "Lead tutor", 
    text: "Tobiloba consistently demonstrated a deep understanding of complex frontend concepts. His final project was a masterclass in React performance and responsive CSS. Truly one of our top-tier graduates.", 
    company: "Academy Review", 
    image: "https://images.unsplash.com/photo-1566165335512-bb5ba58365b4?q=80&w=410&auto=format&fit=crop&ixlib=rb-4.1.0" 
  },
];

const commendations = [
  { quote: "His attention to design detail is what you'd expect from a Lead Engineer.", author: "Frontend Lead @ PeakEcho" },
  { quote: "The CineScope search engine he built is a benchmark for our students.", author: "Senior Facilitator, Unique Groups" },
  { quote: "one of the cleanest Git workflow and documentation I've seen from a developer this year.", author: "Lead Tutor,Axia" },
];

export default function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [current, setCurrent] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(false);

  useEffect(() => {
    let interval: any;
    if (isAutoPlay) {
      interval = setInterval(() => {
        setCurrent((prev) => (prev + 1) % testimonials.length);
      }, 6000);
    }
    return () => clearInterval(interval);
  }, [isAutoPlay]);

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <div className="relative pt-32 pb-16 min-h-screen flex flex-col items-center">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="mb-16 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl font-serif text-white font-bold mb-6 tracking-wide uppercase"
          >
            Professional <span className="text-gradient">Endorsements</span>
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={isInView ? { opacity: 1, scaleX: 1 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="bg-gradient-to-r from-transparent via-[#00e5ff] to-transparent mx-auto w-32 h-1 mb-8"
          ></motion.div>

          {/* Slideshow Control */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4 }}
            className="flex justify-center"
          >
            <button
              onClick={() => setIsAutoPlay(!isAutoPlay)}
              className={`flex items-center gap-2 px-6 py-2 rounded-full border transition-all duration-300 ${
                isAutoPlay 
                  ? "bg-[#00e5ff] text-[#1b1a2e] border-[#00e5ff] shadow-[0_0_20px_rgba(0,229,255,0.4)]" 
                  : "bg-white/5 text-white border-white/10 hover:bg-white/10"
              }`}
            >
              {isAutoPlay ? <Pause size={16} fill="currentColor" /> : <Play size={16} fill="currentColor" />}
              <span className="text-xs font-bold uppercase tracking-widest">
                {isAutoPlay ? "Pause Slideshow" : "Start Slideshow"}
              </span>
            </button>
          </motion.div>
        </div>

        <div ref={ref} className="relative mb-24">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 50, filter: 'blur(10px)' }}
              animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
              exit={{ opacity: 0, x: -50, filter: 'blur(10px)' }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="bg-black/40 backdrop-blur-3xl shadow-[0_30px_60px_-15px_rgba(0,0,0,0.8),0_0_40px_rgba(199,112,240,0.05)] border border-white/5 p-10 md:p-20 rounded-[2.5rem] relative"
            >
              <Quote className="mb-10 text-[#00e5ff]/50" size={60} />
              
              <p className="mb-14 text-white text-xl md:text-3xl font-light italic leading-relaxed tracking-wide">
                "{testimonials[current].text}"
              </p>
              
              <div className="flex flex-col md:flex-row items-center gap-8 border-t border-white/5 pt-10">
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-tr from-[#c770f0] to-[#00e5ff] rounded-full blur-md opacity-30 group-hover:opacity-60 transition-opacity duration-500"></div>
                  <img 
                    src={testimonials[current].image} 
                    alt={testimonials[current].name}
                    className="relative border-4 border-[#1b1a2e] rounded-full w-24 h-24 object-cover z-10 transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="text-center md:text-left">
                  <p className="font-bold text-white text-2xl tracking-wider">{testimonials[current].name}</p>
                  <p className="text-gray-400 text-sm mt-1 uppercase tracking-[0.2em]">{testimonials[current].role}</p>
                  <div className="inline-block mt-3 bg-white/5 px-4 py-1 rounded-full border border-white/10">
                    <p className="text-[#00e5ff] text-xs font-bold uppercase tracking-widest">{testimonials[current].company}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-center items-center gap-8 mt-12">
            <button 
              onClick={prev} 
              className="bg-white/5 hover:bg-white/10 border border-white/10 text-white p-5 rounded-full transition-all duration-300 hover:scale-110"
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              onClick={next} 
              className="bg-white/5 hover:bg-white/10 border border-white/10 text-white p-5 rounded-full transition-all duration-300 hover:scale-110"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        {/* Short Commendations Masonry-like Grid */}
        <div className="mt-32">
          <h2 className="text-2xl text-white font-serif font-bold mb-12 text-center tracking-widest uppercase">Verified <span className="text-[#c770f0]">Referrals</span></h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {commendations.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-2xl hover:border-[#00e5ff]/50 transition-colors duration-500"
              >
                <p className="text-gray-300 italic mb-6 leading-relaxed">"{item.quote}"</p>
                <p className="text-[#00e5ff] text-xs font-bold tracking-widest uppercase">— {item.author}</p>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-12">
            <p className="text-white text-lg italic tracking-wider">and many more.....</p>
          </div>
        </div>
      </div>
    </div>
  );
}
