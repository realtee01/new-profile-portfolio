import { ReactNode } from "react";
import { HashLink } from "react-router-hash-link";
import LiquidChrome from "./liquid-chrome";

interface ChromeButtonProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  to?: string;
}

function ChromeButton({ children, className = "", onClick, to }: ChromeButtonProps) {
  const innerContent = (
    <>
      <div className="absolute inset-0 z-0 opacity-80 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
        <LiquidChrome
          baseColor={[
            0.0392156862745098, 0.0392156862745098, 0.0392156862745098,
          ]}
          speed={2}
          amplitude={0.1}
          interactive={false}
        />
      </div>
      <span className="relative z-10 font-semibold tracking-widest uppercase text-xs xl:text-sm">{children}</span>
    </>
  );

  const baseClasses = `inline-flex items-center justify-center relative py-2.5 px-6 xl:py-3.5 xl:px-10 rounded-full border-neutral-800 border-2 bg-neutral-950 overflow-hidden group text-white active:scale-95 transition-all duration-300 shadow-lg ${className}`;

  if (to) {
    return (
      <HashLink smooth to={to} onClick={onClick} className={baseClasses}>
        {innerContent}
      </HashLink>
    );
  }

  return (
    <button onClick={onClick} className={baseClasses}>
      {innerContent}
    </button>
  );
}

export default ChromeButton;
