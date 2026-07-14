import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Users, Briefcase, Gift, X } from "lucide-react";

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
    notes: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch("https://formspree.io/f/xaqlbalq", {
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          subject: "New Referral Submission",
          ...formData
        })
      });
      
      if (response.ok) {
        setIsSuccess(true);
        setTimeout(() => {
          setIsModalOpen(false);
          setIsSuccess(false);
          setFormData({
            name: "", email: "", phone: "", businessName: "", businessWebsite: "", businessContact: "", relation: "", notes: ""
          });
        }, 3000);
      } else {
        console.error("Submission failed");
      }
    } catch (error) {
      console.error("Error submitting referral", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="relative py-24 z-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-[#1b1a2ea9] backdrop-blur-2xl border border-white/10 rounded-[2.5rem] p-8 md:p-12 lg:p-16 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5),0_0_40px_rgba(0,229,255,0.05)] relative overflow-hidden">
          {/* Decorative Gradients */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#00e5ff]/10 rounded-full blur-[80px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#c770f0]/10 rounded-full blur-[80px] pointer-events-none" />

          <div className="relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-white/80 text-sm font-medium mb-6 backdrop-blur-sm"
              >
                <Gift size={16} className="text-[#00e5ff]" />
                Referral Partner Program
              </motion.div>
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-white mb-6 tracking-tight"
              >
                Earn by Referring <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00e5ff] to-[#c770f0]">Businesses</span>
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-gray-300 text-lg leading-relaxed font-light"
              >
                Know a business that needs a modern website? Introduce them to BuildWithTobi. If they become a paying client, you'll receive a referral reward as a thank you.
              </motion.p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-16">
              {[
                {
                  step: "01",
                  icon: <Users className="w-6 h-6 transition-transform duration-300 group-hover:scale-110 text-[#00e5ff]" />,
                  title: "Simple Referral",
                  desc: "Introduce a business owner who needs a website or redesign.",
                  delay: 0.3,
                  color: "#00e5ff",
                  glowClass: "hover:shadow-[0_0_30px_rgba(0,229,255,0.15)] hover:border-[#00e5ff]/30",
                  iconBg: "bg-[#00e5ff]/10 border-[#00e5ff]/20 text-[#00e5ff]"
                },
                {
                  step: "02",
                  icon: <Briefcase className="w-6 h-6 transition-transform duration-300 group-hover:scale-110 text-[#c770f0]" />,
                  title: "We Handle Everything",
                  desc: "I'll take care of the consultation, design, development, revisions, and launch.",
                  delay: 0.4,
                  color: "#c770f0",
                  glowClass: "hover:shadow-[0_0_30px_rgba(199,112,240,0.15)] hover:border-[#c770f0]/30",
                  iconBg: "bg-[#c770f0]/10 border-[#c770f0]/20 text-[#c770f0]"
                },
                {
                  step: "03",
                  icon: <Gift className="w-6 h-6 transition-transform duration-300 group-hover:scale-110 text-[#00e5ff]" />,
                  title: "Get Rewarded",
                  desc: "Once the project is completed and fully paid, you'll receive your referral reward.",
                  delay: 0.5,
                  color: "#00e5ff",
                  glowClass: "hover:shadow-[0_0_30px_rgba(0,229,255,0.15)] hover:border-[#00e5ff]/30",
                  iconBg: "bg-[#00e5ff]/10 border-[#00e5ff]/20 text-[#00e5ff]"
                }
              ].map((card, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  transition={{ 
                    type: "spring", 
                    stiffness: 400, 
                    damping: 25, 
                    delay: card.delay 
                  }}
                  className={`bg-white/[0.03] backdrop-blur-md border border-white/5 rounded-[2rem] p-8 hover:bg-white/[0.07] transition-all duration-300 relative group flex flex-col justify-between overflow-hidden shadow-xl ${card.glowClass}`}
                >
                  <div className="absolute -inset-px bg-gradient-to-br from-white/0 via-white/0 to-white/5 rounded-[2rem] pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div>
                    <div className="flex items-center justify-between mb-8 relative z-10">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center border transition-all duration-300 shadow-md ${card.iconBg}`}>
                        {card.icon}
                      </div>
                      <span className="text-xs font-mono tracking-widest text-gray-500 group-hover:text-white/60 transition-colors uppercase">
                        Phase {card.step}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-white mb-3 tracking-wide group-hover:text-[#00e5ff] transition-colors duration-300 relative z-10">
                      {card.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed relative z-10">
                      {card.desc}
                    </p>
                  </div>
                  
                  <div 
                    className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] transition-all duration-500 group-hover:w-[80%]" 
                    style={{ backgroundColor: card.color }}
                  />
                </motion.div>
              ))}
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8"
            >
              <button 
                onClick={() => setIsModalOpen(true)}
                className="w-full sm:w-auto bg-white text-[#0d0d12] hover:bg-gray-200 font-semibold py-3.5 px-8 rounded-full shadow-[0_10px_20px_-5px_rgba(255,255,255,0.2)] uppercase tracking-widest text-sm transition-colors"
              >
                Become a Referral Partner
              </button>
              <button 
                onClick={() => setIsModalOpen(true)}
                className="w-full sm:w-auto bg-transparent text-white font-semibold py-3.5 px-8 rounded-full border border-white/30 backdrop-blur-md hover:bg-white/10 transition-colors uppercase tracking-widest text-sm"
              >
                Refer a Business
              </button>
            </motion.div>

            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="text-center text-xs text-gray-500 font-medium tracking-wide uppercase"
            >
              * Referral rewards are paid after the client successfully completes payment for their project.
            </motion.p>

          </div>
        </div>
      </div>

      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
              className="absolute inset-0 bg-[#06020c]/80 backdrop-blur-sm"
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-[#151421] border border-white/10 rounded-2xl shadow-2xl p-6 md:p-8"
            >
              <button 
                onClick={() => setIsModalOpen(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-white bg-white/5 hover:bg-white/10 rounded-full p-2 transition-colors"
              >
                <X size={20} />
              </button>

              <h3 className="text-2xl font-serif font-bold text-white mb-2">Refer a Business</h3>
              <p className="text-gray-400 text-sm mb-6">Fill out the details below. We'll reach out to them and keep you updated on the progress.</p>

              {isSuccess ? (
                <div className="py-12 flex flex-col items-center justify-center text-center">
                  <div className="w-16 h-16 bg-[#00e5ff]/20 text-[#00e5ff] rounded-full flex items-center justify-center mb-4">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                  </div>
                  <h4 className="text-xl font-bold text-white mb-2">Thank You!</h4>
                  <p className="text-gray-400">Your referral has been submitted successfully. We'll be in touch soon.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-gray-400 mb-1">Your Name *</label>
                      <input required type="text" name="name" value={formData.name} onChange={handleChange} className="w-full bg-[#06020c]/50 border border-[rgba(200,137,230,0.2)] rounded-xl px-4 py-2.5 text-white text-sm focus:outline-none focus:border-[#00e5ff] transition-colors" placeholder="John Doe" />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-gray-400 mb-1">Your Email *</label>
                      <input required type="email" name="email" value={formData.email} onChange={handleChange} className="w-full bg-[#06020c]/50 border border-[rgba(200,137,230,0.2)] rounded-xl px-4 py-2.5 text-white text-sm focus:outline-none focus:border-[#00e5ff] transition-colors" placeholder="john@example.com" />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-gray-400 mb-1">Your Phone (optional)</label>
                      <input type="tel" name="phone" value={formData.phone} onChange={handleChange} className="w-full bg-[#06020c]/50 border border-[rgba(200,137,230,0.2)] rounded-xl px-4 py-2.5 text-white text-sm focus:outline-none focus:border-[#00e5ff] transition-colors" placeholder="+1 234 567 890" />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-gray-400 mb-1">Business Name *</label>
                      <input required type="text" name="businessName" value={formData.businessName} onChange={handleChange} className="w-full bg-[#06020c]/50 border border-[rgba(200,137,230,0.2)] rounded-xl px-4 py-2.5 text-white text-sm focus:outline-none focus:border-[#00e5ff] transition-colors" placeholder="Acme Corp" />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-gray-400 mb-1">Business Website (optional)</label>
                      <input type="url" name="businessWebsite" value={formData.businessWebsite} onChange={handleChange} className="w-full bg-[#06020c]/50 border border-[rgba(200,137,230,0.2)] rounded-xl px-4 py-2.5 text-white text-sm focus:outline-none focus:border-[#00e5ff] transition-colors" placeholder="https://acme.com" />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-gray-400 mb-1">Business Contact *</label>
                      <input required type="text" name="businessContact" value={formData.businessContact} onChange={handleChange} className="w-full bg-[#06020c]/50 border border-[rgba(200,137,230,0.2)] rounded-xl px-4 py-2.5 text-white text-sm focus:outline-none focus:border-[#00e5ff] transition-colors" placeholder="Email or phone of the contact" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-gray-400 mb-1">How do you know them? *</label>
                    <input required type="text" name="relation" value={formData.relation} onChange={handleChange} className="w-full bg-[#06020c]/50 border border-[rgba(200,137,230,0.2)] rounded-xl px-4 py-2.5 text-white text-sm focus:outline-none focus:border-[#00e5ff] transition-colors" placeholder="E.g., Client, Friend, Colleague" />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-gray-400 mb-1">Additional Notes (optional)</label>
                    <textarea name="notes" value={formData.notes} onChange={handleChange} rows={3} className="w-full bg-[#06020c]/50 border border-[rgba(200,137,230,0.2)] rounded-xl px-4 py-2.5 text-white text-sm focus:outline-none focus:border-[#00e5ff] transition-colors resize-none" placeholder="Any details about what they need?"></textarea>
                  </div>
                  <div className="pt-2">
                    <button 
                      type="submit" 
                      disabled={isSubmitting}
                      className={`w-full bg-white text-[#0d0d12] hover:bg-gray-200 py-3 rounded-xl text-sm tracking-widest uppercase font-bold flex items-center justify-center gap-2 group transition-colors shadow-[0_0_20px_rgba(255,255,255,0.1)] ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                    >
                      {isSubmitting ? 'Submitting...' : 'Submit Referral'}
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
