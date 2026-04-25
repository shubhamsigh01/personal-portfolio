import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Download, Send, Loader2, CheckCircle, AlertCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';

const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_ipu7fjl';
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_n4x3wso';
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || '7Q2v_PtRrefEDd1zb';

const Contact = () => {
  const formRef = useRef(null);
  const [status, setStatus] = useState('idle'); // 'idle' | 'sending' | 'success' | 'error'

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        EMAILJS_PUBLIC_KEY
      );
      setStatus('success');
      formRef.current.reset();
      setTimeout(() => setStatus('idle'), 6000);
    } catch (error) {
      console.error('EmailJS error:', error);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 6000);
    }
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-purple-600 mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* ── Left panel: contact info ── */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="glass p-10 rounded-3xl"
          >
            <h3 className="text-2xl font-bold mb-6 text-gradient">Let's Connect</h3>
            <p className="text-gray-400 mb-8 leading-relaxed">
              I'm always interested in hearing about new projects and opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
            </p>

            <div className="space-y-6">
              <a href="mailto:shubham6122000@gmail.com" className="flex items-center space-x-4 group p-4 rounded-2xl hover:bg-white/5 transition-colors">
                <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-400 border border-cyan-500/20 group-hover:scale-110 transition-transform">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Email Me</p>
                  <p className="text-white font-medium">shubham6122000@gmail.com</p>
                </div>
              </a>

              <div className="flex space-x-4 pt-4">
                <a
                  href="https://github.com/shubhamsigh01"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                  className="w-14 h-14 rounded-2xl glass flex items-center justify-center text-white hover:text-cyan-400 hover:border-cyan-500/30 transition-all"
                >
                  <Github size={28} />
                </a>
                <a
                  href="https://linkedin.com/in/shubham-kumar-89674a295"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                  className="w-14 h-14 rounded-2xl glass flex items-center justify-center text-white hover:text-purple-400 hover:border-purple-500/30 transition-all"
                >
                  <Linkedin size={28} />
                </a>
              </div>
            </div>

            <div className="mt-12">
              <a
                href="/Resume.pdf"
                download
                className="w-full btn-secondary flex items-center justify-center space-x-2"
                aria-label="Download Shubham's Resume"
              >
                <Download size={20} />
                <span>Download Resume</span>
              </a>
            </div>
          </motion.div>

          {/* ── Right panel: form ── */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="glass p-10 rounded-3xl"
          >
            {status === 'success' && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="h-full flex flex-col items-center justify-center text-center space-y-4 py-20"
              >
                <div className="w-20 h-20 rounded-full bg-cyan-500/20 flex items-center justify-center text-cyan-400 border border-cyan-500/30 mb-4">
                  <CheckCircle size={40} />
                </div>
                <h3 className="text-2xl font-bold text-white">Message Sent!</h3>
                <p className="text-gray-400">Thank you for reaching out. I'll get back to you soon.</p>
                <button onClick={() => setStatus('idle')} className="text-cyan-400 text-sm hover:underline mt-4">
                  Send another message
                </button>
              </motion.div>
            )}

            {status === 'error' && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="h-full flex flex-col items-center justify-center text-center space-y-4 py-20"
              >
                <div className="w-20 h-20 rounded-full bg-red-500/20 flex items-center justify-center text-red-400 border border-red-500/30 mb-4">
                  <AlertCircle size={40} />
                </div>
                <h3 className="text-2xl font-bold text-white">Something went wrong</h3>
                <p className="text-gray-400">Please email me directly at shubham6122000@gmail.com</p>
                <button onClick={() => setStatus('idle')} className="text-cyan-400 text-sm hover:underline mt-4">
                  Try again
                </button>
              </motion.div>
            )}

            {(status === 'idle' || status === 'sending') && (
              <form ref={formRef} className="space-y-6" onSubmit={handleSubmit} noValidate>
                <div>
                  <label htmlFor="contact-name" className="block text-sm font-medium text-gray-400 mb-2">Name</label>
                  <input
                    id="contact-name"
                    type="text"
                    name="user_name"
                    required
                    disabled={status === 'sending'}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-cyan-500/50 transition-colors disabled:opacity-50"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="contact-email" className="block text-sm font-medium text-gray-400 mb-2">Email</label>
                  <input
                    id="contact-email"
                    type="email"
                    name="user_email"
                    required
                    disabled={status === 'sending'}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-cyan-500/50 transition-colors disabled:opacity-50"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="contact-message" className="block text-sm font-medium text-gray-400 mb-2">Message</label>
                  <textarea
                    id="contact-message"
                    rows="4"
                    name="message"
                    required
                    disabled={status === 'sending'}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-cyan-500/50 transition-colors resize-none disabled:opacity-50"
                    placeholder="Your message here..."
                  />
                </div>
                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="w-full btn-primary flex items-center justify-center space-x-2 disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100"
                >
                  {status === 'sending' ? (
                    <>
                      <Loader2 size={18} className="animate-spin" />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send size={18} />
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
