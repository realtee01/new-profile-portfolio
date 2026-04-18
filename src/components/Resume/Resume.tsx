import Particle from "../Particle";
import { AiOutlineDownload } from "react-icons/ai";

export default function Resume() {
  return (
    <div className="relative pt-32 pb-16 min-h-screen flex flex-col items-center">
      <Particle />
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full flex flex-col items-center">
        
        <div className="mb-12 text-center">
          <h1 className="text-4xl text-white font-bold mb-4">My <span className="text-gradient">Resume</span></h1>
          <a
            href="/Resume.pdf"
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
             <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-2 uppercase tracking-wide">Tobiloba Akala</h2>
             <p className="text-2xl text-[#00e5ff] font-medium mb-4">Web Developer</p>
             <p className="text-gray-400 text-sm md:text-base flex flex-wrap justify-center md:justify-start gap-3">
               <span>📍 Lagos, Nigeria</span>
               <span className="hidden md:inline">•</span>
               <span>✉️ tobilobaakala@gmail.com</span>
               <span className="hidden md:inline">•</span>
               <span>📞 07032533869</span>
             </p>
           </div>

           {/* PROFILE */}
           <div className="mb-10">
             <h3 className="text-2xl font-bold text-gradient mb-4 uppercase tracking-wider">Profile</h3>
             <p className="text-gray-300 leading-relaxed text-lg">
               Data-driven Frontend Developer and Computer Science undergraduate at the University of Lagos. Proficient in building responsive, API-integrated web applications using React.js and Tailwind CSS. Passionate about leveraging AI and modern web technologies to solve real-world problems.
             </p>
           </div>

           {/* SKILLS */}
           <div className="mb-10">
             <h3 className="text-2xl font-bold text-gradient mb-4 uppercase tracking-wider">Skills</h3>
             <ul className="grid grid-cols-2 md:grid-cols-3 gap-2 text-gray-300 list-disc list-inside text-lg">
               <li>React.js & Vite</li>
               <li>JavaScript (ES6+)</li>
               <li>Tailwind CSS</li>
               <li>REST API Integration</li>
               <li>Git & Version Control</li>
               <li>Problem-Solving</li>
             </ul>
           </div>

           {/* EDUCATION */}
           <div className="mb-10">
             <h3 className="text-2xl font-bold text-gradient mb-4 uppercase tracking-wider border-b border-white/10 pb-2">Education</h3>
             
             <div className="mb-6">
               <h4 className="text-xl font-bold text-white">Bachelor of Science, Computer Science</h4>
               <p className="text-[#c770f0] font-medium mb-1">University of Lagos (UNILAG) <span className="text-gray-400 font-normal ml-2">• 2021 – Present</span></p>
             </div>

             <div className="mb-4">
               <h4 className="text-xl font-bold text-white">Professional Certificate in Frontend Development</h4>
               <p className="text-[#c770f0] font-medium mb-1">Axia Africa (Cohort 9) <span className="text-gray-400 font-normal ml-2">• Completed 2026</span></p>
             </div>
           </div>

           {/* WORK EXPERIENCE & PROJECTS */}
           <div className="mb-10">
             <h3 className="text-2xl font-bold text-gradient mb-4 uppercase tracking-wider border-b border-white/10 pb-2">Work Experience & Projects</h3>
             
             <div className="mb-8">
               <h4 className="text-xl font-bold text-white content-start flex flex-col md:flex-row md:items-center md:justify-between">
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
               <h4 className="text-xl font-bold text-white content-start flex flex-col md:flex-row md:items-center md:justify-between">
                 <span>Content Marketer — <span className="text-gray-300 font-medium">PeakEcho Digitals</span></span>
               </h4>
               <p className="text-[#00e5ff] font-medium mb-3">Lagos, Nigeria <span className="text-gray-400 font-normal ml-2">• 2025 – Present</span></p>
               <ul className="list-disc list-outside ml-5 text-gray-300 space-y-2 text-lg">
                 <li>Lead content creation and paid campaign strategies with focus on data-driven engagement metrics</li>
                 <li>Manage digital assets and technical communications for diverse marketing projects</li>
               </ul>
             </div>

             <div className="mb-4">
               <h4 className="text-xl font-bold text-white content-start flex flex-col md:flex-row md:items-center md:justify-between">
                 <span>Frontend Development Immersive — <span className="text-gray-300 font-medium">Axia Africa</span></span>
               </h4>
               <p className="text-[#00e5ff] font-medium mb-3">October 2025 – March 2026</p>
               <ul className="list-disc list-outside ml-5 text-gray-300 space-y-2 text-lg">
                 <li>Completed a rigorous 6-month specialized track in modern frontend architectures focusing on React.js and state management</li>
                 <li>Mastered the transition from static web design to dynamic, data driven applications using Vite and Tailwind CSS</li>
                 <li>Collaborated on version-controlled projects using Git/GitHub, ensuring clean, maintainable code and professional documentation</li>
               </ul>
             </div>
           </div>

           {/* AWARDS & RECOGNITION */}
           <div className="mb-10">
             <h3 className="text-2xl font-bold text-gradient mb-4 uppercase tracking-wider border-b border-white/10 pb-2">Awards & Recognition</h3>
             <ul className="list-disc list-outside ml-5 text-gray-300 space-y-2 text-lg">
               <li>Top 5% Faculty Recognition for CineScope Project (2026)</li>
               <li>Certified Frontend Developer, Axia Africa (2026)</li>
             </ul>
           </div>

           {/* ADDITIONAL INFORMATION */}
           <div className="mb-4">
             <h3 className="text-2xl font-bold text-gradient mb-4 uppercase tracking-wider border-b border-white/10 pb-2">Additional Information</h3>
             <p className="text-gray-300 text-lg">
               <strong className="text-white">Languages:</strong> English, Yoruba
             </p>
           </div>
        </div>
      </div>
    </div>
  );
}
