import { useEffect, useRef } from 'react';
import { useInView } from 'motion/react';

export default function LaptopTerminal() {
  const termRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(termRef, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!isInView || !termRef.current) return;

    const term = termRef.current;
    
    const lines = [
        [ {t:"import ", c:"text-[#c770f0] mr-2"}, {t:"Experience ", c:"text-white font-bold"}, {t:"from ", c:"text-[#c770f0] mx-2"}, {t:"'life'", c:"text-[#00e5ff]"}, {t:";", c:"text-white"} ],
        [ {t:"const ", c:"text-[#c770f0] mr-2"}, {t:"skills ", c:"text-blue-400"}, {t:"= [", c:"text-white ml-2"} ],
        [ {t:"  'React'", c:"text-[#00e5ff] pl-4"}, {t:",", c:"text-white"}, {t:" 'Next.js'", c:"text-[#00e5ff]"}, {t:",", c:"text-white"} ],
        [ {t:"  'TypeScript'", c:"text-[#00e5ff] pl-4"}, {t:",", c:"text-white"}, {t:" 'Tailwind'", c:"text-[#00e5ff]"}, {t:",", c:"text-white"} ],
        [ {t:"  'Node.js'", c:"text-[#00e5ff] pl-4"}, {t:",", c:"text-white"}, {t:" 'Solidity'", c:"text-[#00e5ff]"} ],
        [ {t:"];", c:"text-white"} ],
        [ {t:"", c:""} ],
        [ {t:"// Keep building amazing things", c:"text-gray-500 italic"} ],
    ];

    let lineIndex = 0;
    
    term.innerHTML = '';

    const cursor = document.createElement('span');
    cursor.className = 'w-2 h-5 bg-[#c770f0] inline-block align-middle animate-pulse ml-1 shadow-[0_0_10px_#c770f0]';
    term.appendChild(cursor);

    function typeNextLine() {
        if (!termRef.current) return;
        if (lineIndex >= lines.length) return;
        
        const lineData = lines[lineIndex];
        const lineDiv = document.createElement('div');
        lineDiv.className = 'flex flex-wrap items-center';
        termRef.current.insertBefore(lineDiv, cursor);
        
        let tokenIndex = 0;
        
        function typeNextToken() {
            if (tokenIndex >= lineData.length) {
                lineIndex++;
                setTimeout(typeNextLine, 100);
                return;
            }
            
            const token = lineData[tokenIndex];
            const span = document.createElement('span');
            span.className = token.c;
            lineDiv.appendChild(span);
            
            let charIndex = 0;
            function typeChar() {
                if (charIndex >= token.t.length) {
                    tokenIndex++;
                    typeNextToken();
                    return;
                }
                span.textContent += token.t[charIndex];
                charIndex++;
                setTimeout(typeChar, Math.random() * 20 + 5);
            }
            typeChar();
        }
        typeNextToken();
    }

    setTimeout(typeNextLine, 500);
    
  }, [isInView]);

  return (
    <div className="w-full max-w-4xl mx-auto mb-20 px-4">
      <div className="relative mx-auto max-w-3xl">
        <div className="bg-[#000] rounded-t-2xl border-t-[1px] border-x-[1px] border-white/20 p-2 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
            <div className="bg-[#0a0a0a] rounded-lg h-64 md:h-80 overflow-hidden relative flex flex-col items-start justify-start border border-white/5">
              <div className="absolute top-0 w-full h-8 bg-[#1a1a1a] flex items-center px-4 gap-2 border-b border-white/5 z-10">
                  <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
              </div>
              <div 
                ref={termRef}
                className="text-left font-mono text-sm md:text-base space-y-1 p-8 w-full opacity-90 overflow-y-auto mt-10 h-full [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
              >
                  <span className="text-[#c770f0] animate-pulse">_</span>
              </div>
            </div>
        </div>
        <div className="h-4 md:h-5 bg-[#1a1a1a] rounded-b-2xl mx-auto w-[102%] shadow-xl border-b border-white/10 relative -ml-[1%]">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-1.5 bg-black/40 rounded-b-lg"></div>
        </div>
        <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-3/4 h-20 bg-[#00e5ff]/10 blur-[60px] rounded-full pointer-events-none"></div>
      </div>
    </div>
  );
}
