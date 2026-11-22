import { ReactNode } from "react";
import { HashLink } from "react-router-hash-link";

interface ChromeButtonProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  to?: string;
}

function ChromeButton({ children, className = "", onClick, to }: ChromeButtonProps) {
  const baseClasses = `inline-flex items-center justify-center gap-2 py-2.5 px-6 rounded-full bg-[#141413] text-white font-medium text-sm hover:bg-[#1D4ED8] active:scale-[0.98] transition-all duration-200 whitespace-nowrap shrink-0 cursor-pointer ${className}`;

  if (to) {
    return (
      <HashLink smooth to={to} onClick={onClick} className={baseClasses}>
        {children}
      </HashLink>
    );
  }

  return (
    <button onClick={onClick} className={baseClasses}>
      {children}
    </button>
  );
}

export default ChromeButton;
