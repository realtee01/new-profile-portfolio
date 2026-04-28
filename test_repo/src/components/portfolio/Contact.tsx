import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useEffect } from 'react';
import { Mail, Coffee, Send, CheckCircle } from 'lucide-react';
import { useForm, ValidationError } from '@formspree/react';

export const Contact = () => {
  const ref = useRef(null);
  const formRef = useRef<HTMLFormElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [state, handleSubmit] = useForm("mdkynyqp");

  useEffect(() => {
    if (state.succeeded && formRef.current) {
      formRef.current.reset();
    }
  }, [state.succeeded]);

  return (
    <section id="contact" className="bg-white py-24">
      <div className="mx-auto px-6 max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="mb-4 font-serif text-black text-3xl md:text-5xl md:text-center text-start"
          style={{ fontFamily: 'Playfair Display, serif' }}
        >
          Let's Connect
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={isInView ? { opacity: 1, scaleX: 1 } : {}}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="bg-[#D4AF37] md:mx-auto mb-8 w-20 h-1"
        ></motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.3 }}
          className="mx-auto mb-12 max-w-2xl text-gray-600 text-sm md:text-lg md:text-center text-start"
        >
          I'm currently open to new opportunities and exciting projects. Let's create something amazing together!
        </motion.p>

        <div ref={ref} className="gap-12 grid md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <div className="mb-8">
              <div className="inline-block bg-green-100 mb-6 px-4 py-2 rounded-full font-semibold text-green-700 text-sm md:text-base">
                Available for Work
              </div>
              <h3 className="mb-4 font-bold text-black text-2xl md:text-3xl">Ready to collaborate?</h3>
              <p className="mb-6 text-gray-700 text-sm md:text-base">
                Whether you have a project in mind or just want to chat about tech, I'd love to hear from you.
              </p>
            </div>

            <div className="space-y-4">
              <a href="mailto:samadolalekan15@gmail.com" className="group flex items-center gap-4 bg-gray-50 hover:bg-[#D4AF37] p-4 rounded-lg hover:text-white transition-all">
                <Mail className="text-[#D4AF37] group-hover:text-white" size={24} />
                <div>
                  <p className="font-semibold">Say Hi</p>
                  <p className="opacity-75 text-sm">samadolalekan15@gmail.com</p>
                </div>
              </a>

              <a href="https://wa.me/2349094472087" className="group flex items-center gap-4 bg-gray-50 hover:bg-[#D4AF37] p-4 rounded-lg hover:text-white transition-all">
                <Coffee className="text-[#D4AF37] group-hover:text-white" size={24} />
                <div>
                  <p className="font-semibold">Book a Coffee Chat</p>
                  <p className="opacity-75 text-sm">Let's discuss your project</p>
                </div>
              </a>
            </div>
          </motion.div>

          <motion.form
            ref={formRef}
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.6, duration: 0.6 }}
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            <div>
              <label htmlFor="name" className="block mb-2 font-semibold text-gray-700">Name</label>
              <input
                id="name"
                type="text"
                name="name"
                required
                className="px-4 py-3 border-2 border-gray-200 focus:border-[#D4AF37] rounded-lg focus:outline-none w-full transition-colors"
                placeholder="Your name"
              />
              <ValidationError 
                prefix="Name" 
                field="name"
                errors={state.errors}
              />
            </div>

            <div>
              <label htmlFor="email" className="block mb-2 font-semibold text-gray-700">Email</label>
              <input
                id="email"
                type="email"
                name="email"
                required
                className="px-4 py-3 border-2 border-gray-200 focus:border-[#D4AF37] rounded-lg focus:outline-none w-full transition-colors"
                placeholder="your@email.com"
              />
              <ValidationError 
                prefix="Email" 
                field="email"
                errors={state.errors}
              />
            </div>

            <div>
              <label htmlFor="message" className="block mb-2 font-semibold text-gray-700">Message</label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                className="px-4 py-3 border-2 border-gray-200 focus:border-[#D4AF37] rounded-lg focus:outline-none w-full transition-colors resize-none"
                placeholder="Tell me about your project..."
              />
              <ValidationError 
                prefix="Message" 
                field="message"
                errors={state.errors}
              />
            </div>

            <button
              type="submit"
              disabled={state.submitting}
              className="flex justify-center items-center gap-2 bg-[#D4AF37] hover:bg-[#8B7355] disabled:opacity-50 py-4 rounded-lg w-full font-bold text-white transition-all"
            >
              {state.succeeded ? (
                <>
                  <CheckCircle size={20} />
                  Message Sent!
                </>
              ) : (
                <>
                  <Send size={20} />
                  {state.submitting ? 'Sending...' : 'Send Message'}
                </>
              )}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};