// src/components/Navbar.jsx

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-[#0a0a0a]/80 backdrop-blur-md z-50 border-b border-white/5">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* The T/A Logo */}
        <a href="/" className="group flex items-center gap-2">
          <div className="flex items-center font-black text-2xl tracking-tighter">
            <span className="text-white">T</span>
            <span className="text-blue-500 mx-[1px]">/</span> 
            <span className="text-gray-500 group-hover:text-white transition-colors duration-300">A</span>
          </div>
          
          <div className="hidden md:flex flex-col border-l border-white/10 pl-3 ml-1">
            <span className="text-[10px] font-bold tracking-[0.2em] text-white leading-none">
              TOBILOBA
            </span>
            <span className="text-[7px] font-medium tracking-[0.3em] text-gray-500 uppercase mt-1">
              Frontend Developer
            </span>
          </div>
        </a>

        {/* Navigation Links */}
        <div className="flex items-center gap-6 md:gap-8">
          <a 
            href="#projects" 
            className="text-[10px] font-bold tracking-[0.2em] text-gray-400 hover:text-white transition-all uppercase"
          >
            projects
          </a>
          
          {/* New About Link */}
          <a 
            href="#about" 
            className="text-[10px] font-bold tracking-[0.2em] text-gray-400 hover:text-white transition-all uppercase"
          >
            About
          </a>

         <a 
  href="mailto:tobilobaakala@gmail.com" 
  className="text-[9px] md:text-[10px] font-bold tracking-[0.1em] md:tracking-[0.2em] bg-white text-black px-3 py-2 md:px-5 md:py-2.5 rounded-full hover:bg-blue-500 hover:text-white transition-all active:scale-95 uppercase whitespace-nowrap"
>
  Hire Me
</a>

        </div>
        
      </div>
    </nav>
  );
}
