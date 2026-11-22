import { SiPostman, SiSlack, SiVercel, SiGithub, SiFigma } from "react-icons/si";
import { DiVisualstudio } from "react-icons/di";

const tools = [
  { icon: DiVisualstudio, name: "VS Code", note: "Primary editor" },
  { icon: SiFigma, name: "Figma", note: "Design handoff & specs" },
  { icon: SiGithub, name: "GitHub", note: "Repos & CI workflows" },
  { icon: SiVercel, name: "Vercel", note: "Edge deployments" },
  { icon: SiPostman, name: "Postman", note: "API inspection" },
  { icon: SiSlack, name: "Slack", note: "Team collaboration" },
];

export default function Toolstack() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
      {tools.map((tool) => {
        const Icon = tool.icon;
        return (
          <div
            key={tool.name}
            className="bg-white border border-[#E5E2DC] hover:border-[#141413] rounded-xl p-5 flex items-center gap-4 transition-colors group"
          >
            <div className="text-2xl text-[#141413] group-hover:text-[#1D4ED8] transition-colors shrink-0">
              <Icon />
            </div>
            <div className="min-w-0">
              <div className="text-sm font-semibold text-[#141413] truncate">{tool.name}</div>
              <div className="text-xs text-[#86837C] truncate">{tool.note}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
