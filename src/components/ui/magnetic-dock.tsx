import React, {
  useState,
  useRef,
  useContext,
  createContext,
  useEffect
} from "react";
import {
  motion,
  useMotionValue,
  useTransform,
  useSpring
} from "framer-motion";
import { Github, Linkedin, Twitter, Mail, MessageCircle } from "lucide-react";

// shared mouse position
const MouseContext = createContext({ x: 0, y: 0 });

// individual icon with magnetic effect
function DockIcon({ icon, href }: { icon: React.ReactNode, href: string }) {
  const ref = useRef<HTMLAnchorElement>(null);
  const mouse = useContext(MouseContext);
  const distance = useMotionValue(Infinity);

  useEffect(() => {
    if (!ref.current || mouse.x === 0) {
      distance.set(Infinity);
      return;
    }
    const iconRect = ref.current.getBoundingClientRect();
    const containerRect = ref.current.parentElement!.getBoundingClientRect();
    const iconCenterX = iconRect.left + iconRect.width / 2;
    const mouseXAbsolute = containerRect.left + mouse.x;
    distance.set(Math.abs(mouseXAbsolute - iconCenterX));
  }, [mouse, distance]);

  const width = useTransform(distance, [0, 100], [60, 48]);
  const springW = useSpring(width, { mass: 0.1, stiffness: 150, damping: 12 });

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noreferrer"
      ref={ref}
      style={{ width: springW }}
      className="aspect-square rounded-full bg-neutral-800/80 grid place-items-center cursor-pointer hover:bg-neutral-700 transition-colors border border-white/10 shadow-lg text-neutral-200 hover:text-white"
    >
      {icon}
    </motion.a>
  );
}

interface MagneticDockProps {
  links?: { href: string; icon: React.ReactNode }[];
}

// main dock
export default function MagneticDock({ links }: MagneticDockProps) {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, currentTarget } = e;
    const { left } = currentTarget.getBoundingClientRect();
    setPos({ x: clientX - left, y: 0 });
  };

  const onMouseLeave = () => {
    setPos({ x: 0, y: 0 });
  };

  const defaultLinks = [
    { href: "https://github.com/realtee01", icon: <Github className="w-6 h-6" /> },
    { href: "https://ng.linkedin.com/in/tobiloba-akala-35448a38b", icon: <Linkedin className="w-6 h-6" /> },
    { href: "https://x.com/realtee1111101", icon: <Twitter className="w-6 h-6" /> },
    { href: "mailto:tobilobaakala@gmail.com", icon: <Mail className="w-6 h-6" /> },
  ];

  const items = links || defaultLinks;

  return (
    <MouseContext.Provider value={pos}>
      <div className="flex w-full items-center justify-center">
        <div
          onMouseMove={onMouseMove}
          onMouseLeave={onMouseLeave}
          className="flex h-24 items-end gap-4 rounded-2xl bg-[#1b1a2ea9] backdrop-blur-md px-6 pb-4 border border-white/5 shadow-[0_8px_30px_rgba(0,0,0,0.5)]"
        >
          {items.map((item, idx) => (
            <DockIcon key={idx} href={item.href} icon={item.icon} />
          ))}
        </div>
      </div>
    </MouseContext.Provider>
  );
}
