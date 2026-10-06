import React, { useState } from 'react';
import { SectionHeader } from './SectionHeader';
import { Send, Mail, MapPin, MessageCircle, CheckCircle2, AlertCircle, Loader2, ShieldCheck } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    _gotcha: '', // Honeypot field
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [feedbackMessage, setFeedbackMessage] = useState<string>('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus('error');
      setFeedbackMessage('Please fill in all required fields (Name, Email, and Message).');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email.trim())) {
      setStatus('error');
      setFeedbackMessage('Please enter a valid email address.');
      return;
    }

    setStatus('submitting');
    setFeedbackMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json().catch(() => ({}));

      if (response.ok && data.success) {
        setStatus('success');
        setFeedbackMessage(data.message || 'Thank you! Your message has been sent successfully. I will get back to you promptly.');
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: '',
          _gotcha: '',
        });
      } else {
        setStatus('error');
        setFeedbackMessage(data.error || 'Failed to deliver message. Please try again or reach out directly via email.');
      }
    } catch {
      setStatus('error');
      setFeedbackMessage('Network error occurred while sending your message. Please reach out directly to pacich112@gmail.com.');
    }
  };

  return (
    <section id="contact" className="section-container relative">
      <SectionHeader 
        title="Let's Build Something Meaningful." 
        align="center"
      />
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-2xl mx-auto mb-16 text-center"
      >
        <p className="text-lg text-slate-700 dark:text-slate-300 font-medium">
          I'm open for collaboration in Computer Science education, full-stack software development, EdTech innovation, and engineering leadership. Send a direct inquiry below.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-5xl mx-auto">
        
        {/* Contact Info */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-1 space-y-8"
        >
          <div className="flex items-start group">
            <div className="bg-primary-50 dark:bg-slate-800/80 p-4 rounded-2xl mr-4 group-hover:bg-primary-100 dark:group-hover:bg-slate-700 group-hover:-translate-y-1 transition-all duration-300 shadow-sm">
              <Mail className="text-primary-600 dark:text-primary-400 group-hover:scale-110 transition-transform" size={24} />
            </div>
            <div className="mt-1">
              <h4 className="font-bold text-slate-900 dark:text-white mb-1">Email</h4>
              <p className="text-slate-600 dark:text-slate-400 font-medium">
                <a href="mailto:pacich112@gmail.com" className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors interactive">
                  pacich112@gmail.com
                </a>
              </p>
            </div>
          </div>
          <div className="flex items-start group">
            <div className="bg-primary-50 dark:bg-slate-800/80 p-4 rounded-2xl mr-4 group-hover:bg-primary-100 dark:group-hover:bg-slate-700 group-hover:-translate-y-1 transition-all duration-300 shadow-sm">
              <MapPin className="text-primary-600 dark:text-primary-400 group-hover:scale-110 transition-transform" size={24} />
            </div>
            <div className="mt-1">
              <h4 className="font-bold text-slate-900 dark:text-white mb-1">Location</h4>
              <p className="text-slate-600 dark:text-slate-400 font-medium">Kigali, Rwanda</p>
            </div>
          </div>
          <div className="flex items-start group">
            <div className="bg-primary-50 dark:bg-slate-800/80 p-4 rounded-2xl mr-4 group-hover:bg-primary-100 dark:group-hover:bg-slate-700 group-hover:-translate-y-1 transition-all duration-300 shadow-sm">
              <MessageCircle className="text-primary-600 dark:text-primary-400 group-hover:scale-110 transition-transform" size={24} />
            </div>
            <div className="mt-1">
              <h4 className="font-bold text-slate-900 dark:text-white mb-1">WhatsApp</h4>
              <p className="text-slate-600 dark:text-slate-400 font-medium">
                <a href="https://wa.me/250781343621" target="_blank" rel="noopener noreferrer" className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors interactive">
                  +250781343621
                </a>
              </p>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-800 dark:text-emerald-300 text-xs flex items-center gap-3">
            <ShieldCheck size={20} className="shrink-0 text-emerald-600 dark:text-emerald-400" />
            <span>Direct SMTP delivery enabled. Inquiries arrive securely in my primary inbox with instant reply routing.</span>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-2 relative"
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-primary-500 to-purple-600 rounded-3xl blur opacity-20 dark:opacity-40"></div>
          <form onSubmit={handleSubmit} className="glass-panel p-5 sm:p-8 rounded-2xl relative z-10">
            
            {/* Feedback Notifications */}
            <AnimatePresence mode="wait">
              {status === 'success' && (
                <motion.div 
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="mb-6 p-4 rounded-xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-800 dark:text-emerald-200 text-sm flex items-start gap-3"
                >
                  <CheckCircle2 size={20} className="shrink-0 text-emerald-600 dark:text-emerald-400 mt-0.5" />
                  <div>
                    <strong className="font-semibold block mb-0.5">Message Delivered!</strong>
                    <span>{feedbackMessage}</span>
                  </div>
                </motion.div>
              )}

              {status === 'error' && (
                <motion.div 
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="mb-6 p-4 rounded-xl bg-rose-500/15 border border-rose-500/30 text-rose-800 dark:text-rose-200 text-sm flex items-start gap-3"
                >
                  <AlertCircle size={20} className="shrink-0 text-rose-600 dark:text-rose-400 mt-0.5" />
                  <div>
                    <strong className="font-semibold block mb-0.5">Delivery Issue</strong>
                    <span>{feedbackMessage}</span>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="group relative">
                <label htmlFor="name" className="block text-xs font-bold text-slate-500 dark:text-slate-400 mb-2 uppercase tracking-wider">
                  Name <span className="text-rose-500">*</span>
                </label>
                <input 
                  type="text" 
                  id="name" 
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  disabled={status === 'submitting'}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white/50 dark:bg-slate-900/50 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:border-primary-500 transition-all shadow-inner interactive disabled:opacity-60"
                  placeholder="Your Name"
                />
              </div>
              <div className="group relative">
                <label htmlFor="email" className="block text-xs font-bold text-slate-500 dark:text-slate-400 mb-2 uppercase tracking-wider">
                  Email <span className="text-rose-500">*</span>
                </label>
                <input 
                  type="email" 
                  id="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  disabled={status === 'submitting'}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white/50 dark:bg-slate-900/50 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:border-primary-500 transition-all shadow-inner interactive disabled:opacity-60"
                  placeholder="your.email@example.com"
                />
              </div>
            </div>
            
            <div className="mb-6 relative">
              <label htmlFor="subject" className="block text-xs font-bold text-slate-500 dark:text-slate-400 mb-2 uppercase tracking-wider">Subject</label>
              <input 
                type="text" 
                id="subject" 
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                disabled={status === 'submitting'}
                className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white/50 dark:bg-slate-900/50 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:border-primary-500 transition-all shadow-inner interactive disabled:opacity-60"
                placeholder="What is this regarding?"
              />
            </div>
            
            <div className="mb-8 relative">
              <label htmlFor="message" className="block text-xs font-bold text-slate-500 dark:text-slate-400 mb-2 uppercase tracking-wider">
                Message <span className="text-rose-500">*</span>
              </label>
              <textarea 
                id="message" 
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                required
                disabled={status === 'submitting'}
                className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white/50 dark:bg-slate-900/50 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:border-primary-500 transition-all resize-none shadow-inner interactive disabled:opacity-60"
                placeholder="Your message here..."
              ></textarea>
            </div>
            
            {/* Honeypot field for bot spam prevention */}
            <input 
              type="text" 
              name="_gotcha" 
              value={formData._gotcha}
              onChange={handleChange}
              tabIndex={-1} 
              autoComplete="off" 
              style={{ display: 'none' }} 
              aria-hidden="true" 
            />
            
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <motion.button 
                whileHover={{ scale: status === 'submitting' ? 1 : 1.02 }}
                whileTap={{ scale: status === 'submitting' ? 1 : 0.98 }}
                type="submit" 
                disabled={status === 'submitting'}
                className="w-full sm:w-auto inline-flex justify-center items-center px-8 py-3.5 border border-transparent text-base font-bold rounded-xl text-white bg-gradient-to-r from-primary-600 to-purple-600 hover:from-primary-500 hover:to-purple-500 shadow-lg shadow-primary-500/30 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition-all interactive disabled:cursor-not-allowed disabled:opacity-75"
              >
                {status === 'submitting' ? (
                  <>
                    <Loader2 className="mr-2 animate-spin" size={18} />
                    Sending Message...
                  </>
                ) : status === 'success' ? (
                  <>
                    <CheckCircle2 className="mr-2 text-emerald-200" size={18} />
                    Sent Successfully!
                  </>
                ) : (
                  <>
                    <Send className="mr-2" size={18} />
                    Send Message
                  </>
                )}
              </motion.button>

              <span className="text-xs text-slate-500 dark:text-slate-400 text-center sm:text-right">
                Delivers directly to <strong className="text-slate-700 dark:text-slate-300">pacich112@gmail.com</strong>
              </span>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
};
