// src/components/Card.jsx
export default function Card({ title, description, tech, link, image }) {
  return (
    <div className="bg-[#121212] border border-white/5 rounded-3xl overflow-hidden hover:border-blue-500/50 transition-all group">
      {/* Project Image Container */}
      <div className="aspect-video w-full overflow-hidden bg-gray-900">
        {image ? (
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-gray-700 font-bold">
            NO PREVIEW
          </div>
        )}
      </div>

      <div className="p-8">
        <span className="text-[10px] font-bold text-blue-500 tracking-widest uppercase">{tech}</span>
        <h3 className="text-2xl font-bold mt-2 mb-3 text-white">{title}</h3>
        <p className="text-gray-400 text-sm mb-8 leading-relaxed">{description}</p>
        <a 
          href={link} 
          target="_blank" 
          rel="noreferrer"
          className="text-sm font-bold text-white border-b-2 border-blue-500 pb-1 hover:text-blue-400 transition-colors"
        >
          LIVE DEMO →
        </a>
      </div>
    </div>
  );
}
