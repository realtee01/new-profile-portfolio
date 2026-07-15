import React from "react";
import { motion } from "motion/react";
import { Search, PenTool, Figma, Code2, Bug, Rocket, Headphones } from "lucide-react";
import { HashLink } from "react-router-hash-link";

export default function ProcessSection() {
  const steps = [
    { icon: <Search />, title: "Discovery", desc: "Understanding your business goals, target audience, and project requirements." },
    { icon: <PenTool />, title: "Planning", desc: "Creating user journeys, site maps, and defining the core technical architecture." },
    { icon: <Figma />, title: "UI/UX Design", desc: "Designing high-fidelity mockups with premium aesthetics and conversion focus." },
    { icon: <Code2 />, title: "Development", desc: "Building the solution with clean, scalable, and performance-optimized code." },
    { icon: <Bug />, title: "Testing", desc: "Rigorous QA testing across devices and browsers to ensure a flawless experience." },
    { icon: <Rocket />, title: "Launch", desc: "Deploying the project to production and monitoring for smooth performance." },
    { icon: <Headphones />, title: "Support", desc: "Ongoing maintenance, updates, and strategic advice to keep you growing." }
  ];

  return (
    <div className="py-24 relative z-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6">
            My Proven Process
          </h2>
          <p className="text-gray-300 text-lg font-light max-w-2xl mx-auto">
            A structured approach to turn your vision into a high-performing digital reality.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-[#151421]/60 backdrop-blur-md p-6 rounded-2xl border border-white/5 hover:-translate-y-2 hover:border-[#c770f0]/30 transition-all duration-300"
            >
              <div className="text-[#00e5ff] mb-4">
                {step.icon}
              </div>
              <h3 className="text-white text-lg font-semibold mb-2 flex items-center gap-2">
                <span className="text-[#c770f0] text-sm">0{idx + 1}.</span> {step.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: steps.length * 0.1 }}
            className="bg-gradient-to-br from-[#c770f0]/10 to-[#00e5ff]/10 backdrop-blur-md p-6 rounded-2xl border border-[#00e5ff]/30 flex flex-col justify-center items-center text-center"
          >
            <h3 className="text-white text-xl font-semibold mb-4">Ready to start?</h3>
            <HashLink smooth to="/contact#top" className="bg-white text-black px-6 py-2.5 rounded-full font-semibold text-sm hover:bg-gray-200 transition-colors">
              Message Me
            </HashLink>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
