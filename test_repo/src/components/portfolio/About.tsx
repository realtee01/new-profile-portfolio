import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="bg-white py-24 overflow-hidden">
      <div className="mx-auto px-6 max-w-7xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="items-center gap-12 grid md:grid-cols-2"
        >
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <img 
              src="https://res.cloudinary.com/dvd7wbty8/image/upload/v1762627058/Abdulsamad_q4knwy.jpg" 
              alt="Yahaya Abdulsamad" 
              className="shadow-2xl mx-auto border-[#D4AF37] border-4 rounded-2xl w-full max-w-md"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.8 }}
           
          >
            <h2 className="mb-6 font-serif text-black text-3xl md:text-5xl" style={{ fontFamily: 'Playfair Display, serif' }}>
              About Me
            </h2>
            <div className="bg-[#D4AF37] mb-8 w-20 h-1"></div>
            
            <p className="mb-6 text-gray-700 text-lg leading-relaxed">
              I'm a passionate front-end developer with a keen eye for design and a love for creating seamless user experiences. With expertise spanning modern web technologies, I transform ideas into elegant, high-performance applications.
            </p>
            
            <p className="mb-8 text-gray-700 text-lg leading-relaxed">
              My journey in tech is driven by curiosity and a commitment to continuous learning. I believe in writing clean, maintainable code and building products that make a real difference.
            </p>

            <div className="gap-4 grid grid-cols-2">
              {['Fast Learner', 'Team Player', 'Detail-Oriented', 'User-Focused'].map((skill, i) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.6 + i * 0.1, duration: 0.5 }}
                  className="hover:bg-[#D4AF37] px-4 py-3 border-[#D4AF37] border-2 rounded-lg font-semibold text-gray-800 hover:text-white text-center transition-all cursor-default"
                >
                  {skill}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
