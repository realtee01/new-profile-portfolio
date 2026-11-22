import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

const featuredQuotes = [
  {
    quote:
      "Collaborating with Tobiloba was seamless from start to finish. He quickly grasped our goals and delivered results that exceeded expectations.",
    name: "Micheal Cheng",
    role: "CEO",
    company: "Relay Group of Companies",
  },
  {
    quote:
      "Tobiloba understood our Luxe Thread vision immediately. He delivered a high-end e-commerce experience that feels as refined as our clothing line.",
    name: "Olamide Bakare",
    role: "Founder & Creative Director",
    company: "Luxe Thread",
  },
  {
    quote:
      "His final project was a masterclass in React performance and responsive CSS. Truly one of our top-tier graduates.",
    name: "Lead Tutor",
    role: "Engineering Faculty",
    company: "Axia Africa Academy",
  },
];

export default function SocialProof() {
  return (
    <div className="py-20 md:py-24 relative z-10 border-t border-[#E5E2DC]">
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
          <div>
            <div className="text-xs font-medium text-[#86837C] mb-3">
              04. Kind Words
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-[#141413] tracking-tight">
              What clients &amp; leads say.
            </h2>
          </div>
          <Link
            to="/testimonials"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-[#575550] hover:text-[#141413] transition-colors whitespace-nowrap"
          >
            <span>Read all testimonials</span>
            <ArrowUpRight size={15} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredQuotes.map((item) => (
            <figure
              key={item.name}
              className="bg-white border border-[#E5E2DC] rounded-2xl p-7 flex flex-col justify-between"
            >
              <blockquote className="font-serif text-lg text-[#141413] leading-relaxed mb-8">
                &ldquo;{item.quote}&rdquo;
              </blockquote>
              <figcaption className="pt-4 border-t border-[#E5E2DC]">
                <div className="text-sm font-semibold text-[#141413]">{item.name}</div>
                <div className="text-xs text-[#86837C] mt-0.5">
                  {item.role} · {item.company}
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </div>
  );
}
