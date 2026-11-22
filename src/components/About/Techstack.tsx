import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiGit,
  DiMongodb,
} from "react-icons/di";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
  SiPostgresql,
  SiSupabase,
  SiFirebase,
} from "react-icons/si";
import React from "react";

const skills = [
  { icon: DiReact, name: "React", note: "Component architecture & hooks" },
  { icon: SiTypescript, name: "TypeScript", note: "Type-safe interfaces" },
  { icon: SiNextdotjs, name: "Next.js", note: "SSR & App Router" },
  { icon: SiTailwindcss, name: "Tailwind CSS", note: "Design systems" },
  { icon: DiJavascript1, name: "JavaScript", note: "Core ES6+ & Web APIs" },
  { icon: SiSupabase, name: "Supabase", note: "Auth & Postgres data" },
  { icon: SiFirebase, name: "Firebase", note: "Realtime sync" },
  { icon: DiNodejs, name: "Node.js", note: "API & backend wiring" },
  { icon: SiPostgresql, name: "PostgreSQL", note: "Relational schemas" },
  { icon: DiMongodb, name: "MongoDB", note: "Document storage" },
  { icon: DiGit, name: "Git", note: "Clean version control" },
];

export default function Techstack() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
      {skills.map((skill) => {
        const Icon = skill.icon;
        return (
          <div
            key={skill.name}
            className="bg-white border border-[#E5E2DC] hover:border-[#141413] rounded-xl p-5 flex items-center gap-4 transition-colors group"
          >
            <div className="text-2xl text-[#141413] group-hover:text-[#1D4ED8] transition-colors shrink-0">
              <Icon />
            </div>
            <div className="min-w-0">
              <div className="text-sm font-semibold text-[#141413] truncate">{skill.name}</div>
              <div className="text-xs text-[#86837C] truncate">{skill.note}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
