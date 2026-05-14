import React, { useState } from "react";
import { motion } from "motion/react";

export default function Contact() {
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

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    if (!validate()) {
      e.preventDefault();
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
            Let's build <span className="text-gradient">something real.</span>
          </h1>
          <p className="text-gray-300 text-lg font-light tracking-wide max-w-xl mx-auto">
            Got a project? A brief? Just want to talk code? I'm here.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-black/40 backdrop-blur-3xl border border-white/5 rounded-[2.5rem] p-8 md:p-12 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.8)] relative"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-[#c770f0]/5 to-[#00e5ff]/5 rounded-[2.5rem] pointer-events-none"></div>
          <form 
            action="https://formspree.io/f/xaqlbalq" 
            method="POST" 
            className="space-y-8 relative z-10"
            onSubmit={handleSubmit}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">Name</label>
                <input 
                  name="name" 
                  id="name"
                  type="text" 
                  placeholder="Your Name" 
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full bg-black/50 border ${errors.name ? 'border-red-500' : 'border-white/10'} rounded-2xl px-5 py-4 text-white focus:outline-none focus:border-white/30 transition-all font-light placeholder:text-gray-600`} 
                />
                {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                <input 
                  name="email" 
                  id="email"
                  type="email" 
                  placeholder="Your Email" 
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full bg-black/50 border ${errors.email ? 'border-red-500' : 'border-white/10'} rounded-2xl px-5 py-4 text-white focus:outline-none focus:border-white/30 transition-all font-light placeholder:text-gray-600`} 
                />
                {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
              </div>
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">Message</label>
              <textarea 
                name="message" 
                id="message"
                placeholder="How can I help you?" 
                rows={5} 
                value={formData.message}
                onChange={handleChange}
                className={`w-full bg-black/50 border ${errors.message ? 'border-red-500' : 'border-white/10'} rounded-2xl px-5 py-4 text-white focus:outline-none focus:border-white/30 transition-all resize-none font-light placeholder:text-gray-600`}
              ></textarea>
              {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
            </div>
            <button 
              type="submit" 
              className="w-full bg-white text-[#0d0d12] hover:bg-gray-200 py-4 rounded-xl text-sm tracking-widest uppercase font-bold flex items-center justify-center gap-2 group transition-colors shadow-[0_0_20px_rgba(255,255,255,0.1)]"
            >
              Send Message 
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
}
