import { AiOutlineDownload } from "react-icons/ai";
import resumeFile from "../../assets/Resume.pdf";

export default function Resume() {
  return (
    <div className="relative pt-32 pb-16 min-h-screen flex flex-col items-center">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full flex flex-col items-center">
        
        <div className="mb-12 text-center">
          <h1 className="text-4xl sm:text-5xl font-serif text-white font-bold mb-4 tracking-wide">My <span className="text-gradient">Resume</span></h1>
          <a
            href={resumeFile}
            target="_blank"
            rel="noopener noreferrer"
            download="Tobiloba_Akala_Resume.pdf"
            className="btn-primary inline-flex items-center gap-2 px-6 py-3 rounded text-lg transition-colors shadow-lg"
          >
            <AiOutlineDownload size={24} />
            &nbsp;Download PDF Version
          </a>
        </div>

        <div className="w-full bg-white/5 backdrop-blur-md border border-[rgba(200,137,230,0.3)] rounded-2xl p-8 md:p-12 text-white shadow-2xl text-left">
           {/* HEADER */}
           <div className="border-b border-[#00e5ff]/30 pb-8 mb-8 text-center md:text-left">
             <h2 className="text-4xl md:text-5xl font-serif font-bold text-gradient mb-2 uppercase tracking-widest">Tobiloba Akala</h2>
             <p className="text-2xl text-[#00e5ff] font-serif font-medium mb-4 italic">Web Developer</p>
             <p className="text-gray-400 text-sm md:text-base flex flex-wrap justify-center md:justify-start gap-3 tracking-wide">
               <span>📍 Lagos, Nigeria</span>
               <span className="hidden md:inline">•</span>
               <span>✉️ tobilobaakala@gmail.com</span>
               <span className="hidden md:inline">•</span>
               <span>📞 07032533869</span>
             </p>
           </div>

           {/* PROFILE */}
           <div className="mb-10">
             <h3 className="text-2xl font-serif font-bold text-gradient mb-4 uppercase tracking-widest border-b-2 border-transparent w-max">Profile</h3>
             <p className="text-gray-300 leading-relaxed text-lg font-light">
               Data-driven Full-stack Developer (Frontend-focused) and Computer Science undergraduate at the University of Lagos. Proficient in building responsive web applications using React.js, Tailwind CSS, alongside backend technologies like Node.js, MongoDB, and PostgreSQL. Passionate about creating premium digital solutions to businesses and brands, and leveraging AI and modern web technologies to solve real-world problems.
             </p>
           </div>

           {/* SKILLS */}
           <div className="mb-10">
             <h3 className="text-2xl font-serif font-bold text-gradient mb-4 uppercase tracking-widest border-b-2 border-transparent w-max">Skills</h3>
             <ul className="grid grid-cols-2 lg:grid-cols-3 gap-2 text-gray-300 list-disc list-inside text-lg font-light tracking-wide">
               <li>React.js & Vite</li>
               <li>JavaScript & TypeScript</li>
               <li>Tailwind CSS</li>
               <li>Mobile App Development (React Native)</li>
               <li>Building AI Agents</li>
               <li>Voice & AI Receptionists</li>
               <li>REST API Integration</li>
               <li>Git & Version Control</li>
               <li>Problem-Solving</li>
             </ul>
           </div>

           {/* EDUCATION */}
           <div className="mb-10">
             <h3 className="text-2xl font-serif font-bold text-gradient mb-6 uppercase tracking-widest border-b border-white/10 pb-3">Education</h3>
             
             <div className="mb-6">
               <h4 className="text-xl font-bold text-white">Bachelor of Science, Computer Science</h4>
               <p className="text-[#c770f0] font-medium mb-1">University of Lagos (UNILAG) <span className="text-gray-400 font-normal ml-2">• 2021 – Present</span></p>
             </div>

             <div className="mb-4">
               <h4 className="text-xl font-bold text-white">Professional Certificate in Full-stack Development</h4>
               <p className="text-[#c770f0] font-medium mb-1">Axia Africa (Cohort 9) <span className="text-gray-400 font-normal ml-2">• Completed 2026</span></p>
             </div>
           </div>

           {/* WORK EXPERIENCE & PROJECTS */}
           <div className="mb-10">
             <h3 className="text-2xl font-serif font-bold text-gradient mb-6 uppercase tracking-widest border-b border-white/10 pb-3">Work Experience & Projects</h3>
             
             <div className="mb-8">
               <h4 className="text-xl font-bold text-white content-start flex flex-col lg:flex-row lg:items-center lg:justify-between">
                 <span>CineScope — <span className="text-gray-300 font-medium">Movie Discovery Platform</span></span>
               </h4>
               <p className="text-[#00e5ff] font-medium mb-3">React.js, Tailwind CSS, TMDB API <span className="text-gray-400 font-normal ml-2">• 2026</span></p>
               <ul className="list-disc list-outside ml-5 text-gray-300 space-y-2 text-lg">
                 <li>Engineered a high-performance movie search engine featuring a mobile-first UI and custom skeleton loading states</li>
                 <li>Implemented debounced search logic to optimize API performance and improve user experience</li>
                 <li>Commended by University faculty for technical execution and high-quality interface design</li>
               </ul>
             </div>

             <div className="mb-8">
               <h4 className="text-xl font-bold text-white content-start flex flex-col lg:flex-row lg:items-center lg:justify-between">
                 <span>Content Marketer — <span className="text-gray-300 font-medium">PeakEcho Digitals</span></span>
               </h4>
               <p className="text-[#00e5ff] font-medium mb-3">Lagos, Nigeria <span className="text-gray-400 font-normal ml-2">• 2025 – Present</span></p>
               <ul className="list-disc list-outside ml-5 text-gray-300 space-y-2 text-lg">
                 <li>Lead content creation and paid campaign strategies with focus on data-driven engagement metrics</li>
                 <li>Manage digital assets and technical communications for diverse marketing projects</li>
               </ul>
             </div>

             <div className="mb-4">
               <h4 className="text-xl font-bold text-white content-start flex flex-col lg:flex-row lg:items-center lg:justify-between">
                 <span>Full-stack Development Immersive — <span className="text-gray-300 font-medium">Axia Africa</span></span>
               </h4>
               <p className="text-[#00e5ff] font-medium mb-3">October 2025 – March 2026</p>
               <ul className="list-disc list-outside ml-5 text-gray-300 space-y-2 text-lg">
                 <li>Completed a rigorous 6-month specialized track in modern full-stack architectures focusing on React.js, Node.js, and state management</li>
                 <li>Mastered the transition from static web design to dynamic, data driven applications using Vite and Tailwind CSS</li>
                 <li>Collaborated on version-controlled projects using Git/GitHub, ensuring clean, maintainable code and professional documentation</li>
               </ul>
             </div>
           </div>

           {/* AWARDS & RECOGNITION */}
           <div className="mb-10">
             <h3 className="text-2xl font-serif font-bold text-gradient mb-6 uppercase tracking-widest border-b border-white/10 pb-3">Awards & Recognition</h3>
             <ul className="list-disc list-outside ml-5 text-gray-300 space-y-2 text-lg font-light">
               <li>Top 5% Faculty Recognition for CineScope Project (2026)</li>
               <li>Certified Full-stack Developer, Axia Africa (2026)</li>
               <li>GitHub Pull Shark Award</li>
               <li>GitHub Quickdraw Award</li>
             </ul>
           </div>

           {/* ADDITIONAL INFORMATION */}
           <div className="mb-4">
             <h3 className="text-2xl font-serif font-bold text-gradient mb-6 uppercase tracking-widest border-b border-white/10 pb-3">Additional Information</h3>
             <p className="text-gray-300 text-lg font-light tracking-wide">
               <strong className="text-white">Languages:</strong> English, Yoruba
             </p>
           </div>
        </div>
      </div>
    </div>
  );
}
