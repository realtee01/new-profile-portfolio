import Techstack from "./Techstack";
import Toolstack from "./Toolstack";
import { FaSpotify } from "react-icons/fa";

export default function About() {
  return (
    <div className="relative pt-32 pb-16 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 mb-24">
          <div className="md:w-1/2 text-white text-lg">
            <h1 className="text-4xl font-bold mb-8 text-center md:text-left">
              Know Who <strong className="text-gradient">I'M</strong>
            </h1>
            <p className="text-justify leading-relaxed mb-4">
              Hi Everyone, I am <span className="text-[#c770f0]">Tobiloba Akala </span>
              from <span className="text-[#c770f0]"> Lagos, Nigeria.</span>
              <br />
              I am currently a frontend developer open to freelance work and full-time roles.
              <br />
              I am pursuing a B.Sc. in Computer Science at the University of Lagos.
              <br />
              <br />
              Apart from coding, some other activities that I love to do!
            </p>
            <ul className="list-none space-y-2 mb-8">
              <li className="flex items-center gap-2">
                <span className="text-[#c770f0]">👉</span> Playing Games
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[#c770f0]">👉</span> Writing Tech Blogs
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[#c770f0]">👉</span> Travelling
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[#c770f0]">👉</span> listening and vibing to music
            
            </li>
            </ul>

            <div className="mb-8">
              <a 
                href="https://open.spotify.com/playlist/0Ymw2v0SbK6btauZEL9lRz?si=a1dfa08a37954282" 
                target="_blank" 
                rel="noreferrer" 
                className="flex items-center gap-4 bg-[#1b1a2ea9] border border-[#1DB954]/30 hover:border-[#1DB954]/80 p-4 rounded-xl transition-all duration-300 shadow-[0_0_15px_rgba(29,185,84,0.15)] hover:shadow-[0_0_20px_rgba(29,185,84,0.3)] group max-w-sm backdrop-blur-sm"
              >
                <div className="relative flex-shrink-0">
                  <div className="absolute inset-0 bg-[#1DB954] blur-md opacity-20 group-hover:opacity-40 transition-opacity rounded-full"></div>
                  <FaSpotify className="relative text-[#1DB954] text-5xl group-hover:scale-105 transition-transform duration-300" />
                </div>
                <div>
                  <h3 className="text-white font-bold group-hover:text-[#1DB954] transition-colors line-clamp-1">Coding & Focus Mode</h3>
                  <p className="text-gray-400 text-sm mt-0.5 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#1DB954] animate-[pulse_2s_ease-in-out_infinite]"></span>
                    My favorite playlist
                  </p>
                </div>
                <div className="ml-auto text-gray-500 group-hover:text-white transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                </div>
              </a>
            </div>

            <p className="text-[#c770f0] italic opacity-80">
              "Build. Ship. Repeat."
            </p>
            <footer className="text-[#c770f0] mt-2">— Tobiloba</footer>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <img
              src="https://raw.githubusercontent.com/soumyajit4419/Portfolio/master/src/Assets/about.png"
              alt="about"
              className="w-full max-w-md object-contain"
            />
          </div>
        </div>

        <h1 className="text-4xl font-bold text-white text-center mb-12">
          Professional <strong className="text-gradient">Skillset</strong>
        </h1>
        <Techstack />

        <h1 className="text-4xl font-bold text-white text-center mt-24 mb-12">
          <strong className="text-gradient">Tools</strong> I use
        </h1>
        <Toolstack />
      </div>
    </div>
  );
}
