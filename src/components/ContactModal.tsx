import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Check, Copy, Mail, Send, Sparkles } from 'lucide-react';
import ContactButton from './ContactButton';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [copied, setCopied] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    service: '3D Modeling & Rendering',
    message: ''
  });

  const handleCopy = () => {
    navigator.clipboard.writeText('mina.creator3d@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md select-none"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.94, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.94, opacity: 0, y: 20 }}
            transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            onClick={e => e.stopPropagation()}
            className="relative w-full max-w-xl rounded-[36px] border border-[#D7E2EA]/30 bg-[#111111] p-6 sm:p-8 text-[#D7E2EA] shadow-[0_25px_60px_rgba(0,0,0,0.8)] overflow-hidden"
          >
            {/* Close button */}
            <button
              type="button"
              onClick={onClose}
              className="absolute top-5 right-5 p-2 rounded-full text-[#D7E2EA]/70 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Header */}
            <div className="flex items-center gap-2 mb-2">
              <span className="inline-block w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-xs uppercase tracking-widest text-[#D7E2EA]/70 font-medium">
                Available for New Projects
              </span>
            </div>
            <h3 className="hero-heading text-3xl sm:text-4xl font-black uppercase tracking-tight">
              Let&apos;s Build Together
            </h3>
            <p className="text-sm text-[#D7E2EA]/70 font-light mt-1 mb-6">
              Have a 3D vision, brand identity, or animation need? Reach out directly.
            </p>

            {/* Quick copy email bar */}
            <div className="flex items-center justify-between rounded-2xl bg-[#1A1A1A] border border-[#D7E2EA]/15 p-3 sm:p-4 mb-6">
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-purple-400" />
                <span className="text-sm sm:text-base font-medium select-all">
                  mina.creator3d@gmail.com
                </span>
              </div>
              <button
                type="button"
                onClick={handleCopy}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 hover:bg-white/20 text-xs uppercase tracking-wider text-white transition-colors cursor-pointer"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? 'Copied' : 'Copy'}</span>
              </button>
            </div>

            {/* Form */}
            {submitted ? (
              <div className="text-center py-8">
                <div className="w-12 h-12 rounded-full bg-purple-900/50 border border-purple-500/50 flex items-center justify-center mx-auto mb-3">
                  <Sparkles className="w-6 h-6 text-purple-300" />
                </div>
                <h4 className="text-xl font-bold uppercase tracking-tight text-white mb-1">
                  Message Sent!
                </h4>
                <p className="text-sm text-[#D7E2EA]/70 max-w-sm mx-auto mb-6">
                  Thank you! Mina will review your brief and reply within 24 hours.
                </p>
                <button
                  type="button"
                  onClick={onClose}
                  className="px-6 py-2.5 rounded-full border border-[#D7E2EA]/40 text-xs uppercase tracking-widest hover:bg-white/10 transition-colors"
                >
                  Close
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs uppercase tracking-wider text-[#D7E2EA]/60 font-medium">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Jane Doe"
                      value={form.name}
                      onChange={e => setForm({ ...form, name: e.target.value })}
                      className="rounded-xl bg-[#1A1A1A] border border-[#D7E2EA]/15 px-3.5 py-2.5 text-sm text-[#D7E2EA] placeholder-[#D7E2EA]/30 focus:outline-none focus:border-purple-500"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs uppercase tracking-wider text-[#D7E2EA]/60 font-medium">
                      Your Email
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="jane@company.com"
                      value={form.email}
                      onChange={e => setForm({ ...form, email: e.target.value })}
                      className="rounded-xl bg-[#1A1A1A] border border-[#D7E2EA]/15 px-3.5 py-2.5 text-sm text-[#D7E2EA] placeholder-[#D7E2EA]/30 focus:outline-none focus:border-purple-500"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs uppercase tracking-wider text-[#D7E2EA]/60 font-medium">
                    Service Interested In
                  </label>
                  <select
                    value={form.service}
                    onChange={e => setForm({ ...form, service: e.target.value })}
                    className="rounded-xl bg-[#1A1A1A] border border-[#D7E2EA]/15 px-3.5 py-2.5 text-sm text-[#D7E2EA] focus:outline-none focus:border-purple-500 cursor-pointer"
                  >
                    <option value="3D Modeling">01 - 3D Modeling</option>
                    <option value="Rendering">02 - High-Quality Rendering</option>
                    <option value="Motion Design">03 - Motion Design</option>
                    <option value="Branding">04 - Visual Identity & Branding</option>
                    <option value="Web Design">05 - Web & Interactive Experience</option>
                  </select>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs uppercase tracking-wider text-[#D7E2EA]/60 font-medium">
                    Project Details
                  </label>
                  <textarea
                    rows={3}
                    required
                    placeholder="Tell me about timeline, deliverables, or inspirations..."
                    value={form.message}
                    onChange={e => setForm({ ...form, message: e.target.value })}
                    className="rounded-xl bg-[#1A1A1A] border border-[#D7E2EA]/15 px-3.5 py-2.5 text-sm text-[#D7E2EA] placeholder-[#D7E2EA]/30 focus:outline-none focus:border-purple-500 resize-none"
                  />
                </div>

                <div className="pt-2 flex justify-end">
                  <ContactButton label="Send Message" className="w-full sm:w-auto" />
                </div>
              </form>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
