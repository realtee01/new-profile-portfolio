import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { Check, ArrowLeft } from "lucide-react";
import { SparkleMark } from "../ui/EditorialPrimitives";

export default function ThankYou() {
  return (
    <div className="relative pt-32 pb-20 min-h-[75vh] flex flex-col items-center justify-center px-5">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="max-w-xl w-full bg-[var(--surface-card)] border border-[var(--border-strong)] rounded-3xl p-10 sm:p-14 text-center shadow-[var(--shadow-paper)]"
      >
        <div className="w-16 h-16 paper-band text-[var(--ink)] border border-[var(--border-strong)] rounded-full mx-auto flex items-center justify-center mb-6">
          <Check size={28} strokeWidth={2.4} />
        </div>

        <div className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-[0.16em] text-[var(--accent)] mb-3">
          <SparkleMark className="w-3 h-3" />
          <span>Brief Received</span>
        </div>

        <h1 className="font-editorial font-black text-4xl sm:text-5xl text-[var(--ink)] tracking-tight mb-4">
          Thank you.
        </h1>

        <p className="text-[var(--ink-muted)] text-base leading-relaxed max-w-md mx-auto mb-9">
          Your note is in my inbox. I personally reply within 24 hours with next
          steps or a couple of times to chat.
        </p>

        <Link
          to="/"
          className="inline-flex items-center justify-center gap-2 bg-[var(--ink)] hover:opacity-90 text-white py-3 px-7 rounded-full text-sm font-semibold transition-opacity whitespace-nowrap shrink-0"
        >
          <ArrowLeft size={15} />
          <span>Return Home</span>
        </Link>
      </motion.div>
    </div>
  );
}
