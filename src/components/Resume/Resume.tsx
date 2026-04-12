import Particle from "../Particle";
import { AiOutlineDownload } from "react-icons/ai";

export default function Resume() {
  return (
    <div className="relative pt-32 pb-16 min-h-screen flex flex-col items-center">
      <Particle />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full flex flex-col items-center">
        <div className="mb-12">
          <a
            href="/Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary px-6 py-3 rounded text-lg flex items-center gap-2 transition-colors shadow-lg"
          >
            <AiOutlineDownload size={24} />
            &nbsp;Download CV
          </a>
        </div>

        <div className="w-full max-w-4xl bg-white/5 backdrop-blur-md border border-[rgba(200,137,230,0.3)] rounded-lg p-8 text-white">
           <h2 className="text-3xl font-bold text-gradient mb-6">Tobiloba Akala</h2>
           <p className="text-xl mb-4">Frontend Engineer</p>
           <p className="text-gray-300 mb-8">
             A frontend developer who spent a year grinding JavaScript before touching React. Totally worth it. I build high-performance, accessible, and visually stunning interfaces with React — clean codes, real results.
           </p>

           <h3 className="text-2xl font-bold text-gradient mb-4 border-b border-[#00e5ff]/30 pb-2">Experience & Education</h3>
           
           <div className="mb-6">
             <h4 className="text-xl font-semibold">Frontend Engineering</h4>
             <p className="text-gray-400">Axia Africa • 6 Months Intensive</p>
           </div>

           <div className="mb-8">
             <h4 className="text-xl font-semibold">B.Sc. Computer Science</h4>
             <p className="text-gray-400">University of Lagos • In View</p>
           </div>

           <h3 className="text-2xl font-bold text-gradient mb-4 border-b border-[#00e5ff]/30 pb-2">Skills</h3>
           <p className="text-gray-300 leading-relaxed">
             React.js, JavaScript (ES6+), TypeScript, Tailwind CSS, HTML5, CSS3, Node.js, Next.js, Git, GitHub, Vercel, Framer Motion, Responsive Design, Performance Optimization.
           </p>
        </div>

        <div className="mt-12">
          <a
            href="/Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary px-6 py-3 rounded text-lg flex items-center gap-2 transition-colors shadow-lg"
          >
            <AiOutlineDownload size={24} />
            &nbsp;Download CV
          </a>
        </div>
      </div>
    </div>
  );
}
