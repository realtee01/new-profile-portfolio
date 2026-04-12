import {
  SiPostman,
  SiSlack,
  SiVercel
} from "react-icons/si";
import { DiWindows, DiVisualstudio } from "react-icons/di";

export default function Toolstack() {
  return (
    <div className="flex flex-wrap justify-center gap-6 pb-12">
      <div className="tech-icons flex justify-center items-center w-32 h-32 text-white">
        <DiWindows />
      </div>
      <div className="tech-icons flex justify-center items-center w-32 h-32 text-white">
        <DiVisualstudio />
      </div>
      <div className="tech-icons flex justify-center items-center w-32 h-32 text-white">
        <SiPostman />
      </div>
      <div className="tech-icons flex justify-center items-center w-32 h-32 text-white">
        <SiVercel />
      </div>
      <div className="tech-icons flex justify-center items-center w-32 h-32 text-white">
        <SiSlack />
      </div>
    </div>
  );
}
