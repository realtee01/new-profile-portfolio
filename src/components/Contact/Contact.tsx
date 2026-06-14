import React, { useState } from "react";
import { motion } from "motion/react";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "../../context/LanguageContext";

export default function Contact() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { t } = useLanguage();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user types
    if (errors[name as keyof typeof errors]) {
      setErrors(prev => ({ ...prev, [name]: "" }));
    }
  };

  const validate = () => {
    let isValid = true;
    const newErrors = { name: "", email: "", message: "" };

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
      isValid = false;
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
      isValid = false;
    }
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validate()) {
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      const response = await fetch("https://formspree.io/f/xaqlbalq", {
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });
      
      if (response.ok) {
        navigate("/thank-you");
      } else {
        // Handle error if needed or assume user can try again
        setIsSubmitting(false);
      }
    } catch (error) {
      console.error("Form submission error", error);
      setIsSubmitting(false);
    }
  };

  return (
    <div className="relative pt-32 pb-16 min-h-screen flex flex-col items-center">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6 tracking-wide">
            {t('contact.title1')} <span className="text-gradient">{t('contact.title2')}</span>
          </h1>
          <p className="text-gray-300 text-lg font-light tracking-wide max-w-xl mx-auto">
            Got a project? A brief? Just want to talk code? I'm here.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-white/5 backdrop-blur-md border border-[rgba(200,137,230,0.3)] rounded-2xl p-8 md:p-12 shadow-2xl"
        >
          <form 
            className="space-y-6"
            onSubmit={handleSubmit}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">Full Name</label>
                <input 
                  name="name" 
                  id="name"
                  type="text" 
                  placeholder="Enter your Full name" 
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full bg-[#06020c]/50 border ${errors.name ? 'border-red-500' : 'border-[rgba(200,137,230,0.2)]'} rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#00e5ff] transition-colors`} 
                />
                {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                <input 
                  name="email" 
                  id="email"
                  type="email" 
                  placeholder="example@email.com" 
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full bg-[#06020c]/50 border ${errors.email ? 'border-red-500' : 'border-[rgba(200,137,230,0.2)]'} rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#00e5ff] transition-colors`} 
                />
                {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
              </div>
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">Brief Overview</label>
              <textarea 
                name="message" 
                id="message"
                placeholder="How can I help you?" 
                rows={5} 
                value={formData.message}
                onChange={handleChange}
                className={`w-full bg-[#06020c]/50 border ${errors.message ? 'border-red-500' : 'border-[rgba(200,137,230,0.2)]'} rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#00e5ff] transition-colors resize-none mb-4`}
              ></textarea>
              {errors.message && <p className="text-red-500 text-xs mt-1 mb-2">{errors.message}</p>}
              
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
                <span className="text-sm font-medium text-gray-300">Quick start with a template:</span>
                <div className="flex flex-wrap gap-2">
                  <button
                    type="button"
                    onClick={() => {
                      setFormData(prev => ({ 
                        ...prev, 
                        message: "Hi! I'm looking to build a new mobile app. Here is a bit about what I need: [brief context].\nMy budget is around [budget], and my target launch date is [timeline]." 
                      }));
                      if (errors.message) setErrors(prev => ({ ...prev, message: "" }));
                    }}
                    className="flex items-center gap-2 text-xs bg-white/5 hover:bg-white/10 border border-white/10 text-gray-300 py-1.5 px-3 rounded-full transition-colors"
                  >
                    <span>📱</span> Mobile App
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setFormData(prev => ({ 
                        ...prev, 
                        message: "Hi! I'm looking to build a new website. Here is a bit about what I need: [brief context].\nMy budget is around [budget], and my target launch date is [timeline]." 
                      }));
                      if (errors.message) setErrors(prev => ({ ...prev, message: "" }));
                    }}
                    className="flex items-center gap-2 text-xs bg-white/5 hover:bg-white/10 border border-white/10 text-gray-300 py-1.5 px-3 rounded-full transition-colors"
                  >
                    <span>💻</span> Website
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setFormData(prev => ({ 
                        ...prev, 
                        message: "Hi! I'm looking to build a custom project. Here is a bit about what I need: [brief context].\nMy budget is around [budget], and my target launch date is [timeline]." 
                      }));
                      if (errors.message) setErrors(prev => ({ ...prev, message: "" }));
                    }}
                    className="flex items-center gap-2 text-xs bg-white/5 hover:bg-white/10 border border-white/10 text-gray-300 py-1.5 px-3 rounded-full transition-colors"
                  >
                    <span>✨</span> Custom Project
                  </button>
                </div>
              </div>
            </div>
            <button 
              type="submit" 
              disabled={isSubmitting}
              className={`w-full bg-white text-[#0d0d12] hover:bg-gray-200 py-4 rounded-xl text-sm tracking-widest uppercase font-bold flex items-center justify-center gap-2 group transition-colors shadow-[0_0_20px_rgba(255,255,255,0.1)] ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'} 
              {!isSubmitting && <span className="group-hover:translate-x-1 transition-transform">→</span>}
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
}
