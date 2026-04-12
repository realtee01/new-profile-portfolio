export default function TechStack() {
  const tools = [
    { name: "React", desc: "Component Architecture", color: "text-blue-400" },
    { name: "JavaScript", desc: "ES6+ & Logic", color: "text-yellow-400" },
    { name: "Tailwind CSS", desc: "Utility-First Styling", color: "text-cyan-400" },
    { name: "Vite", desc: "Next-Gen Bundling", color: "text-purple-400" },
    { name: "Git/GitHub", desc: "Version Control", color: "text-orange-500" }
  ];

  return (
    <section className="mb-24">
      <h3 className="text-[10px] font-bold tracking-[0.3em] text-gray-600 uppercase mb-8">Tools I use. Problems I solve.</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {tools.map((tool) => (
          <div key={tool.name} className="bg-[#121212] border border-white/5 p-6 rounded-2xl hover:border-white/10 transition">
            <h4 className={`font-bold ${tool.color}`}>{tool.name}</h4>
            <p className="text-gray-500 text-xs mt-1">{tool.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
