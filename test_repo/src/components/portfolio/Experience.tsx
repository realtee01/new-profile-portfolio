import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    company: "SterlingPro Business Application",
    role: "Support and Implementation",
    period: "July 2025 - Present",
    achievements: [
      "Provided technical support for front-end issues",
      "Worked on POS terminals to install TWIG software",
      "Assisted in user training and onboarding processes",
    ],
  },
  {
    company: "YourChildEducation",
    role: "Front-end Developer",
    period: "July 2025 - Present",
    achievements: [
      "Developed responsive user interfaces using React and Tailwind CSS",
      "Collaborated with designers to enhance UX/UI",
      "Collaborated with backend developers to integrate APIs and ensure seamless data flow",
    ],
  },
  {
    company: "NIIT",
    role: "Junior Front-end Developer",
    period: "May 2023 - Nov 2023",
    achievements: [
      "Assisted in developing web applications using HTML, CSS, and JavaScript",
      "Participated in code reviews and team meetings",
      "Maintained documentation for front-end processes and best practices",
    ],
  },
];

export const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="bg-gray-50 py-24 overflow-hidden">
      <div className="mx-auto px-6 max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="mb-4 font-serif text-black text-3xl md:text-5xl md:text-center text-start"
          style={{ fontFamily: "Playfair Display, serif" }}
        >
          Experience
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={isInView ? { opacity: 1, scaleX: 1 } : {}}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="bg-[#D4AF37] md:mx-auto mb-16 w-20 h-1"
        ></motion.div>

        <div ref={ref} className="relative">
          <div className="left-1/2 absolute bg-[#D4AF37] w-1 h-full -translate-x-1/2 transform"></div>

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className={`relative mb-12 ${
                index % 2 === 0 ? "md:pr-8 md:text-right" : "md:pl-8 md:ml-auto"
              } md:w-1/2`}
            >
              {/* Timeline dot */}
              <div className={`hidden md:block top-1/2 absolute bg-[#D4AF37] border-4 border-white rounded-full w-4 h-4 -translate-y-1/2 transform ${
                index % 2 === 0 ? "right-0 translate-x-1/2" : "left-0 -translate-x-1/2"
              }`}></div>
              
              <div className="bg-white shadow-lg p-6 border-2 border-gray-100 hover:border-[#D4AF37] rounded-xl transition-all">
                <div className="flex items-center gap-3 mb-3">
                  <Briefcase className="text-[#D4AF37]" size={24} />
                  <h3 className="font-bold text-black text-lg md:text-2xl">{exp.role}</h3>
                </div>
                <p className="mb-2 font-semibold text-[#D4AF37]">
                  {exp.company}
                </p>
                <p className="mb-4 text-gray-600">{exp.period}</p>
                <ul className="space-y-2">
                  {exp.achievements.map((achievement, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-gray-700"
                    >
                      <span className="mt-0 text-[#D4AF37]">•</span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};