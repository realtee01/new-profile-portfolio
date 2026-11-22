import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

interface BlogCardProps {
  title: string;
  date: string;
  readTime?: string;
  excerpt: string;
  image: string;
  link: string;
}

export default function BlogCard({
  title,
  date,
  readTime,
  excerpt,
  image,
  link,
}: BlogCardProps) {
  const [imgFailed, setImgFailed] = useState(false);

  return (
    <Link
      to={link}
      className="group bg-[var(--surface-card)]/90 hover:bg-[var(--surface-card)] border border-white/85 hover:border-[var(--accent)]/60 rounded-[1.5rem] overflow-hidden shadow-[var(--shadow-paper)] transition-all duration-200 hover:-translate-y-1 flex flex-col h-full p-2.5"
    >
      <div className="overflow-hidden aspect-[16/10] rounded-[1.1rem] bg-[var(--bg-band)]/45">
        {!imgFailed ? (
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
            referrerPolicy="no-referrer"
            loading="lazy"
            onError={() => setImgFailed(true)}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center p-5 text-center">
            <span className="font-editorial text-xl font-black text-[var(--ink)]">
              {title}
            </span>
          </div>
        )}
      </div>

      <div className="px-3.5 pt-4 pb-3 flex flex-col flex-grow">
        <p className="font-mono text-[11px] text-[var(--ink-soft)] mb-2.5 tabular-nums">
          {date}
          {readTime ? ` · ${readTime}` : ""}
        </p>

        <h2 className="font-editorial text-xl font-black text-[var(--ink)] group-hover:text-[var(--accent)] transition-colors mb-2.5 leading-snug line-clamp-2">
          {title}
        </h2>

        <p className="text-[var(--ink-muted)] text-sm leading-relaxed mb-5 flex-grow line-clamp-3">
          {excerpt}
        </p>

        <span className="inline-flex items-center gap-1 text-xs font-bold text-[var(--ink)] group-hover:text-[var(--accent)] transition-colors mt-auto">
          <span>Read note</span>
          <ArrowUpRight
            size={14}
            className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        </span>
      </div>
    </Link>
  );
}
