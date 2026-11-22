import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, ArrowUpRight, Check } from "lucide-react";

export default function ReferralSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    businessName: "",
    businessWebsite: "",
    businessContact: "",
    relation: "",
    notes: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await fetch("https://formspree.io/f/xaqlbalq", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          subject: "New Referral Submission",
          ...formData,
        }),
      });
    } catch {
      // Handle gracefully
    } finally {
      setIsSubmitting(false);
      setIsSuccess(true);
      setTimeout(() => {
        setIsModalOpen(false);
        setIsSuccess(false);
        setFormData({
          name: "",
          email: "",
          phone: "",
          businessName: "",
          businessWebsite: "",
          businessContact: "",
          relation: "",
          notes: "",
        });
      }, 2800);
    }
  };

  return (
    <section className="relative py-20 md:py-28 z-20 border-t border-[#E5E2DC] bg-white">
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8">
        <div className="bg-[#F8F7F4] border border-[#E5E2DC] rounded-2xl p-8 sm:p-12 lg:p-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end pb-12 border-b border-[#E5E2DC]">
            <div className="lg:col-span-7">
              <div className="text-xs font-medium text-[#86837C] mb-3">
                07. Referral Partner Program
              </div>
              <h2 className="font-serif text-3xl sm:text-5xl font-semibold text-[#141413] tracking-tight mb-4">
                Know someone who needs a great website?
              </h2>
              <p className="text-[#575550] text-base leading-relaxed max-w-xl">
                Introduce a founder or business owner to BuildWithTobi. When they become a client,
                you earn a generous referral reward as a thank you.
              </p>
            </div>

            <div className="lg:col-span-5 flex flex-wrap lg:justify-end gap-3">
              <button
                type="button"
                onClick={() => setIsModalOpen(true)}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-[#141413] text-white text-sm font-medium hover:bg-[#1D4ED8] transition-colors cursor-pointer"
              >
                <span>Refer a Business</span>
                <ArrowUpRight size={15} />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-10">
            {[
              {
                step: "01",
                title: "Make a Quick Intro",
                desc: "Share the contact details of a business owner who needs a new website or rebuild.",
              },
              {
                step: "02",
                title: "I Handle Everything",
                desc: "I take care of discovery, design, engineering, revisions, and production launch.",
              },
              {
                step: "03",
                title: "Receive Your Reward",
                desc: "Once the project is completed and paid, your referral reward is sent directly to you.",
              },
            ].map((card) => (
              <div key={card.step}>
                <div className="font-mono text-xs text-[#1D4ED8] tabular-nums mb-2">
                  {card.step}.
                </div>
                <h3 className="font-serif text-xl font-semibold text-[#141413] mb-2">
                  {card.title}
                </h3>
                <p className="text-sm text-[#575550] leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Referral Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <div
            className="fixed inset-0 z-[110] flex items-center justify-center p-4"
            role="dialog"
            aria-modal="true"
            aria-labelledby="referral-modal-title"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
              className="fixed inset-0 bg-[#141413]/55 backdrop-blur-xs cursor-pointer"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 16 }}
              transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-white border border-[#E5E2DC] rounded-2xl shadow-2xl p-6 sm:p-8 z-10"
            >
              <button
                type="button"
                onClick={() => setIsModalOpen(false)}
                aria-label="Close referral modal"
                className="absolute top-5 right-5 w-9 h-9 rounded-full border border-[#E5E2DC] bg-[#F8F7F4] text-[#575550] hover:text-[#141413] hover:border-[#141413] flex items-center justify-center transition-colors cursor-pointer"
              >
                <X size={17} />
              </button>

              <h3 id="referral-modal-title" className="font-serif text-2xl font-semibold text-[#141413] mb-1.5">
                Refer a Business
              </h3>
              <p className="text-sm text-[#575550] mb-6">
                Fill out the details below. I&apos;ll reach out respectfully and keep you posted.
              </p>

              {isSuccess ? (
                <div className="py-12 flex flex-col items-center justify-center text-center">
                  <div className="w-14 h-14 rounded-full bg-[#1D4ED8]/10 text-[#1D4ED8] flex items-center justify-center mb-5">
                    <Check size={28} />
                  </div>
                  <h4 className="font-serif text-2xl font-semibold text-[#141413] mb-2">
                    Referral received—thank you!
                  </h4>
                  <p className="text-sm text-[#575550] max-w-sm">
                    I&apos;ll review the details and follow up shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-[#575550] mb-1.5">
                        Your Name *
                      </label>
                      <input
                        required
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full bg-[#F8F7F4] border border-[#E5E2DC] rounded-xl px-4 py-2.5 text-[#141413] text-sm focus:outline-none focus:border-[#141413] transition-colors"
                        placeholder="Jane Doe"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-[#575550] mb-1.5">
                        Your Email *
                      </label>
                      <input
                        required
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full bg-[#F8F7F4] border border-[#E5E2DC] rounded-xl px-4 py-2.5 text-[#141413] text-sm focus:outline-none focus:border-[#141413] transition-colors"
                        placeholder="jane@example.com"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-[#575550] mb-1.5">
                        Your Phone (optional)
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full bg-[#F8F7F4] border border-[#E5E2DC] rounded-xl px-4 py-2.5 text-[#141413] text-sm focus:outline-none focus:border-[#141413] transition-colors"
                        placeholder="+234 ..."
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-[#575550] mb-1.5">
                        Business Name *
                      </label>
                      <input
                        required
                        type="text"
                        name="businessName"
                        value={formData.businessName}
                        onChange={handleChange}
                        className="w-full bg-[#F8F7F4] border border-[#E5E2DC] rounded-xl px-4 py-2.5 text-[#141413] text-sm focus:outline-none focus:border-[#141413] transition-colors"
                        placeholder="Acme Studio"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-[#575550] mb-1.5">
                        Business Website (optional)
                      </label>
                      <input
                        type="url"
                        name="businessWebsite"
                        value={formData.businessWebsite}
                        onChange={handleChange}
                        className="w-full bg-[#F8F7F4] border border-[#E5E2DC] rounded-xl px-4 py-2.5 text-[#141413] text-sm focus:outline-none focus:border-[#141413] transition-colors"
                        placeholder="https://acme.com"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-[#575550] mb-1.5">
                        Business Contact *
                      </label>
                      <input
                        required
                        type="text"
                        name="businessContact"
                        value={formData.businessContact}
                        onChange={handleChange}
                        className="w-full bg-[#F8F7F4] border border-[#E5E2DC] rounded-xl px-4 py-2.5 text-[#141413] text-sm focus:outline-none focus:border-[#141413] transition-colors"
                        placeholder="Email or phone number"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-[#575550] mb-1.5">
                      How do you know them? *
                    </label>
                    <input
                      required
                      type="text"
                      name="relation"
                      value={formData.relation}
                      onChange={handleChange}
                      className="w-full bg-[#F8F7F4] border border-[#E5E2DC] rounded-xl px-4 py-2.5 text-[#141413] text-sm focus:outline-none focus:border-[#141413] transition-colors"
                      placeholder="Client, friend, colleague"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-[#575550] mb-1.5">
                      Additional Notes (optional)
                    </label>
                    <textarea
                      name="notes"
                      value={formData.notes}
                      onChange={handleChange}
                      rows={3}
                      className="w-full bg-[#F8F7F4] border border-[#E5E2DC] rounded-xl px-4 py-2.5 text-[#141413] text-sm focus:outline-none focus:border-[#141413] transition-colors resize-none"
                      placeholder="Anything helpful to know before reaching out?"
                    />
                  </div>
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`w-full bg-[#141413] text-white hover:bg-[#1D4ED8] py-3 rounded-full text-sm font-medium transition-colors cursor-pointer ${
                        isSubmitting ? "opacity-70 cursor-not-allowed" : ""
                      }`}
                    >
                      {isSubmitting ? "Submitting..." : "Submit Referral"}
                    </button>
                  </div>
                </form>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
