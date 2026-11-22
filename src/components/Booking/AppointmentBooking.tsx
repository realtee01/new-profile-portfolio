import { motion } from "motion/react";
import { Check, MessageSquare, Phone, ArrowUpRight } from "lucide-react";

export default function AppointmentBooking() {
  const scrollToForm = () => {
    const form = document.getElementById("contact-form");
    if (form) {
      form.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative pb-16 flex flex-col items-center">
      <div className="max-w-5xl mx-auto px-5 sm:px-8 relative z-10 w-full">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="text-center mb-12"
        >
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-[#86837C] mb-3">
            Discovery Call
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl font-medium text-[#141413] mb-4 tracking-[-0.02em] leading-tight">
            Let&apos;s Build a Fast, Conversion-Ready Frontend
          </h2>
          <p className="text-[#575550] text-base max-w-2xl mx-auto leading-relaxed">
            Send a message or call directly to walk through your React web app, website redesign, or frontend performance goals.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-14 items-stretch">
          <div className="bg-white border border-[#E5E2DC] rounded-3xl p-8 sm:p-10 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-6 text-[#1D4ED8]">
                <MessageSquare size={20} />
                <Phone size={20} />
              </div>
              <h3 className="font-serif text-2xl text-[#141413] font-medium mb-2">
                Start a Conversation
              </h3>
              <p className="text-[#575550] text-sm leading-relaxed mb-8">
                Share a brief note using the contact form or reach out by phone to schedule a 20-minute scoping call.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <button
                type="button"
                onClick={scrollToForm}
                className="inline-flex items-center justify-center gap-1.5 bg-[#141413] hover:bg-[#1D4ED8] text-[#F8F7F4] px-6 py-3 rounded-full text-sm font-medium transition-colors whitespace-nowrap shrink-0"
              >
                Send a Message <ArrowUpRight size={15} />
              </button>
              <a
                href="tel:+2347032533869"
                className="inline-flex items-center justify-center bg-[#F8F7F4] hover:border-[#141413] text-[#141413] border border-[#E5E2DC] px-6 py-3 rounded-full text-sm font-medium transition-colors whitespace-nowrap shrink-0"
              >
                Call Directly
              </a>
            </div>
          </div>

          <div className="bg-[#F1EFEA]/70 border border-[#E5E2DC] rounded-3xl p-8 sm:p-10 flex flex-col justify-center">
            <h3 className="font-serif text-2xl font-medium text-[#141413] mb-6">
              What you get on the call
            </h3>
            <ul className="space-y-4">
              {[
                "Honest frontend architecture & stack advice",
                "Zero-obligation scope and timeline estimate",
                "UX and Core Web Vitals review of your current site",
                "Clear milestone roadmap before writing code",
              ].map((benefit, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 text-sm sm:text-base text-[#2D2B27]"
                >
                  <Check
                    size={16}
                    strokeWidth={2.5}
                    className="text-[#1D4ED8] mt-1 shrink-0"
                  />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
