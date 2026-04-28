import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  { name: 'Sholanke Taiwo', role: 'Front-end Developer', text: 'Yahaya delivered exceptional work on our platform. His attention to detail and technical expertise exceeded our expectations.', company: 'Habeb.Js', image: 'https://res.cloudinary.com/dvd7wbty8/image/upload/v1762714662/codingTime_avzmjn.png' },
  { name: 'Akinpelu Olamilekan', role: 'Shopify Website Developer', text: 'Collaborating with Yahaya was seamless from start to finish. He quickly grasped our goals and delivered results that exceeded expectations. His creativity and technical skill made everything smoother. Yahaya truly made our life easier at EMW3.', company: 'EMW3', image: 'https://res.cloudinary.com/dvd7wbty8/image/upload/v1762714460/photo_2025-11-09_19-51-51_qbfybj.jpg' },
  { name: 'Olumayowa Feyisayo', role: 'Front-end Developer', text: 'One of the best developers I\'ve worked with. Fast, reliable, and always delivers high-quality results.', company: 'YourChildEducation', image: 'https://res.cloudinary.com/dvd7wbty8/image/upload/v1762714460/photo_2025-11-09_19-51-50_gyxmr0.jpg' },
];

export const Testimonials = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section id="testimonials" className="bg-gray-50 py-24">
      <div className="mx-auto px-6 max-w-5xl">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="mb-4 font-serif text-black text-3xl md:text-5xl md:text-center text-start"
          style={{ fontFamily: 'Playfair Display, serif' }}
        >
          Testimonials
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={isInView ? { opacity: 1, scaleX: 1 } : {}}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="bg-[#D4AF37] md:mx-auto mb-16 w-20 h-1"
        ></motion.div>

        <div ref={ref} className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="bg-white shadow-xl p-12 rounded-2xl"
            >
              <Quote className="mb-6 text-[#D4AF37]" size={38} />
              <p className="mb-8 text-gray-800 text-xs md:text-2xl italic leading-relaxed">"{testimonials[current].text}"</p>
              <div className="flex items-center gap-4">
                <img 
                  src={testimonials[current].image} 
                  alt={testimonials[current].name}
                  className="border-[#D4AF37] border-2 rounded-full w-16 h-16 object-cover"
                />
                <div>
                  <p className="font-bold text-black text-xs md:text-lg">{testimonials[current].name}</p>
                  <p className="text-gray-600 text-xs md:text-base">{testimonials[current].role}</p>
                  <p className="text-[#D4AF37] text-xs md:text-sm">{testimonials[current].company}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-center items-center gap-4 mt-8">
            <button onClick={prev} className="bg-white hover:bg-[#D4AF37] shadow-lg p-3 rounded-full hover:text-white transition-all">
              <ChevronLeft size={24} />
            </button>
            
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrent(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === current ? 'bg-[#D4AF37] w-8' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
            
            <button onClick={next} className="bg-white hover:bg-[#D4AF37] shadow-lg p-3 rounded-full hover:text-white transition-all">
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};