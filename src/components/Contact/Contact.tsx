import React, { useState } from "react";
import Particle from "../Particle";
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
      <Particle />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Let's build <span className="text-gradient">something real.</span>
          </h1>
          <p className="text-gray-300 text-lg">
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
            action="https://formspree.io/f/xaqlbalq" 
            method="POST" 
            className="space-y-6"
            onSubmit={handleSubmit}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">Name</label>
                <input 
                  name="name" 
                  id="name"
                  type="text" 
                  placeholder="Your Name" 
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full bg-[#0c0513]/50 border ${errors.name ? 'border-red-500' : 'border-[rgba(200,137,230,0.2)]'} rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#00e5ff] transition-colors`} 
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
                  className={`w-full bg-[#0c0513]/50 border ${errors.email ? 'border-red-500' : 'border-[rgba(200,137,230,0.2)]'} rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#00e5ff] transition-colors`} 
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
                className={`w-full bg-[#0c0513]/50 border ${errors.message ? 'border-red-500' : 'border-[rgba(200,137,230,0.2)]'} rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#00e5ff] transition-colors resize-none`}
              ></textarea>
              {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
            </div>
            <button 
              type="submit" 
              className="w-full btn-primary py-4 rounded-xl text-lg font-bold flex items-center justify-center gap-2 group transition-all"
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
