import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiGit,
} from "react-icons/di";
import {
  SiNextdotjs,
  SiSolidity,
  SiTailwindcss,
  SiTypescript
} from "react-icons/si";

export default function Techstack() {
  return (
    <div className="flex flex-wrap justify-center gap-6 pb-12">
      <div className="tech-icons flex justify-center items-center w-32 h-32 text-white">
        <DiReact />
      </div>
      <div className="tech-icons flex justify-center items-center w-32 h-32 text-white">
        <DiJavascript1 />
      </div>
      <div className="tech-icons flex justify-center items-center w-32 h-32 text-white">
        <SiTailwindcss />
      </div>
      <div className="tech-icons flex justify-center items-center w-32 h-32 text-white">
        <SiTypescript />
      </div>
      <div className="tech-icons flex justify-center items-center w-32 h-32 text-white">
        <DiNodejs />
      </div>
      <div className="tech-icons flex justify-center items-center w-32 h-32 text-white">
        <SiNextdotjs />
      </div>
      <div className="tech-icons flex justify-center items-center w-32 h-32 text-white">
        <DiGit />
      </div>
      <div className="tech-icons flex justify-center items-center w-32 h-32 text-white">
        <SiSolidity />
      </div>
    </div>
  );
}
