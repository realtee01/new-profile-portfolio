import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    company: "Roitech AI",
    role: "Frontend Engineering Intern (Siwes and contract)",
    period: "2026 - Present",
    achievements: [
      "Collaborating with the Roitech AI engineering team to architect and build a high-performance, scalable web application from the ground up.",
      "Designing modular components to ensure consistency across the Roitech AI platform.",
      "Implementing fluid UI transitions using Framer Motion to match a high-fidelity 'vibe coding' aesthetic.",
      "Managing complex Git repositories and deployments via iOS to maintain 100% responsiveness.",
      "Leading the frontend roadmap from MVP toward a full-scale production launch over a 24-week timeline."
    ],
  },
  {
    company: "LearnIQ",
    role: "Lead Frontend Engineer",
    period: "2026 - Present",
    achievements: [
      "An accessible learning platform designed to bridge the gap in education through AI-driven summarization and inclusive UX.",
      "Building the frontend environment that allows students to interact with complex data through simplified, high-performance interfaces.",
      "Engineered a responsive 'Notes' ecosystem and grid layout prioritized for intuitive navigation.",
      "Developed the UI for audio transcription and automated summarization tools to enhance student learning workflows.",
      "Successfully managed the redesign of core platform pages to improve visual clarity and user engagement."
    ],
  },
  {
    company: "PeakEcho Digitals",
    role: "Content Marketer",
    period: "2025 - Present",
    achievements: [
      "Lead content creation and paid campaign strategies with focus on data-driven engagement metrics",
      "Manage digital assets and technical communications for diverse marketing projects",
    ],
  },
  {
    company: "Axia Africa",
    role: "Frontend Development Immersive",
    period: "Oct 2025 - March 2026",
    achievements: [
      "Completed a rigorous 6-month specialized track in modern frontend architectures focusing on React.js and state management",
      "Commended by instructors for technical precision, React.js mastery, and high-performance code architecture",
      "Mastered the transition from static web design to dynamic, data driven applications using Vite and Tailwind CSS",
      "Collaborated on version-controlled projects using Git/GitHub, ensuring clean, maintainable code and professional documentation",
    ],
  },
  {
    company: "University of Lagos",
    role: "Frontend Engineer - CineScope",
    period: "2026",
    achievements: [
      "Engineered a high-performance movie search engine featuring a mobile-first UI and custom skeleton loading states",
      "Implemented debounced search logic to optimize API performance and improve user experience",
      "Commended by University faculty for technical execution and high-quality interface design",
    ],
  },
];

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div className="relative pt-32 pb-16 min-h-screen flex flex-col items-center">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="mb-16 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl text-white font-bold mb-4"
          >
            My <span className="text-gradient">Experience</span>
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="bg-gradient-to-r from-transparent via-[#c770f0] to-transparent mx-auto w-32 h-1"
          ></motion.div>
        </div>

        <div ref={ref} className="relative">
          <div className="left-1/2 absolute bg-[#c770f0]/30 w-[2px] h-full -translate-x-1/2 transform hidden lg:block"></div>

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50, y: 20 }}
              animate={isInView ? { opacity: 1, x: 0, y: 0 } : {}}
              transition={{ delay: index * 0.2, duration: 0.6, ease: "easeOut" }}
              className={`relative mb-12 ${
                index % 2 === 0 ? "lg:pr-12 lg:text-right" : "lg:pl-12 lg:ml-auto"
              } lg:w-1/2`}
            >
              {/* Timeline dot */}
              <div
                className={`hidden lg:block top-6 absolute bg-[#1b1a2ea9] border-2 border-[#00e5ff] shadow-[0_0_10px_rgba(0,229,255,0.6)] rounded-full w-5 h-5 -translate-y-1/2 transform ${
                  index % 2 === 0 ? "right-0 translate-x-[11px]" : "left-0 -translate-x-[11px]"
                }`}
              ></div>

              <div className="bg-white/5 backdrop-blur-md border border-[rgba(200,137,230,0.3)] shadow-2xl p-8 rounded-2xl transition-all duration-300 hover:border-[#00e5ff] hover:shadow-[0_0_20px_rgba(0,229,255,0.15)] group">
                <div className={`flex items-center gap-3 mb-4 ${index % 2 === 0 ? "lg:justify-end" : ""}`}>
                  <div className="bg-[#c770f0]/20 p-3 rounded-xl text-[#c770f0] group-hover:text-[#00e5ff] group-hover:bg-[#00e5ff]/20 transition-colors">
                    <Briefcase size={24} />
                  </div>
                  <h3 className="font-bold text-white text-xl lg:text-2xl">{exp.role}</h3>
                </div>
                <p className="mb-2 font-semibold text-[#00e5ff] text-lg">
                  {exp.company}
                </p>
                <p className="mb-6 text-gray-400 font-mono text-sm">{exp.period}</p>
                <ul className={`space-y-3 ${index % 2 === 0 ? "lg:items-end flex flex-col" : ""}`}>
                  {exp.achievements.map((achievement, i) => (
                    <li
                      key={i}
                      className={`flex items-start gap-3 text-gray-300 ${index % 2 === 0 ? "lg:flex-row-reverse lg:text-right" : ""}`}
                    >
                      <span className="mt-1 text-[#c770f0] text-sm group-hover:text-[#00e5ff] transition-colors">✦</span>
                      <span className="leading-relaxed">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
