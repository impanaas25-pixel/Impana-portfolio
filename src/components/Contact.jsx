import React, { useState } from 'react';
import { Mail, Copy, Check, Send, AlertCircle, Sparkles, MapPin, ExternalLink } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './BrandIcons';
import confetti from 'canvas-confetti';
import { personalInfo } from '../data/portfolioData';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [statusMessage, setStatusMessage] = useState(null);

  const validateForm = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = 'Please provide your name.';
    if (!formData.email.trim()) {
      errs.email = 'Please provide your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please provide a valid email format.';
    }
    if (!formData.subject.trim()) errs.subject = 'Please specify a subject.';
    if (!formData.message.trim() || formData.message.trim().length < 10) {
      errs.message = 'Please provide a message with at least 10 characters.';
    }
    return errs;
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setStatusMessage({
        type: 'error',
        text: 'Please correct the highlighted fields before sending.'
      });
      return;
    }

    setErrors({});

    // Confetti effect on successful validation
    try {
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.8 }
      });
    } catch (_) {}

    // Form submission approach:
    // As per user instructions: "Connect the form to a real submission service only when configured;
    // otherwise display a clear setup instruction rather than pretending that a message was sent."
    // We launch the user's native email client with pre-filled inputs, and display the transparent setup note!
    const mailtoUrl = `mailto:${personalInfo.email}?subject=${encodeURIComponent(
      formData.subject
    )}&body=${encodeURIComponent(
      `From: ${formData.name} (${formData.email})\n\nMessage:\n${formData.message}`
    )}`;

    window.location.href = mailtoUrl;

    setStatusMessage({
      type: 'info',
      text: `Your message draft has been dispatched to your default mail client addressed to ${personalInfo.email}. (To configure serverless API auto-delivery, configure EmailJS or Formspree environment keys).`
    });
  };

  return (
    <section id="contact" className="py-20 lg:py-28 relative">
      {/* Background glow */}
      <div className="absolute top-1/3 left-10 w-[500px] h-[400px] bg-violet-600/10 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-10 w-[450px] h-[350px] bg-cyan-600/10 rounded-full blur-[130px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-left max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-violet-500/10 text-violet-300 text-xs font-mono uppercase tracking-widest border border-violet-500/20 mb-3">
            <span>Get In Touch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Let’s Build Something Meaningful.
          </h2>
          <p className="mt-3 text-base text-slate-300 leading-relaxed">
            I’m interested in connecting with developers, collaborating on interesting projects, and exploring opportunities to learn and grow.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start text-left">
          
          {/* Left Column: Direct Channels & Information */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Quick Email Card */}
            <div className="p-6 rounded-2xl bg-[#0c1021]/80 border border-white/[0.08] backdrop-blur-md space-y-4">
              <div className="flex items-center justify-between">
                <div className="p-3 rounded-xl bg-violet-500/10 text-violet-400 border border-violet-500/20">
                  <Mail className="w-5 h-5" />
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors cursor-pointer"
                  title="Copy email address"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy Email</span>
                    </>
                  )}
                </button>
              </div>

              <div>
                <div className="text-xs text-slate-400 font-mono uppercase tracking-wider">Direct Inbox</div>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="text-base sm:text-lg font-semibold text-white hover:text-cyan-300 transition-colors break-all"
                >
                  {personalInfo.email}
                </a>
              </div>

              <p className="text-xs text-slate-400 leading-relaxed">
                Feel free to email me regarding full-stack internships, collaborative open-source projects, or hackathon opportunities.
              </p>
            </div>

            {/* Social Channels Card */}
            <div className="p-6 rounded-2xl bg-[#0c1021]/80 border border-white/[0.08] backdrop-blur-md space-y-3">
              <div className="text-xs text-slate-400 font-mono uppercase tracking-wider mb-2">
                Professional Networks
              </div>

              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3 rounded-xl bg-slate-900/60 hover:bg-slate-900 border border-white/[0.06] hover:border-cyan-500/40 text-slate-200 transition-all group"
              >
                <div className="flex items-center gap-3">
                  <GithubIcon className="w-5 h-5 text-cyan-400" />
                  <div>
                    <div className="text-sm font-semibold text-white group-hover:text-cyan-300 transition-colors">
                      GitHub
                    </div>
                    <div className="text-xs text-slate-400 font-mono">
                      @impanaas25-pixel
                    </div>
                  </div>
                </div>
                <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-white transition-colors" />
              </a>

              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3 rounded-xl bg-slate-900/60 hover:bg-slate-900 border border-white/[0.06] hover:border-violet-500/40 text-slate-200 transition-all group"
              >
                <div className="flex items-center gap-3">
                  <LinkedinIcon className="w-5 h-5 text-violet-400" />
                  <div>
                    <div className="text-sm font-semibold text-white group-hover:text-violet-300 transition-colors">
                      LinkedIn
                    </div>
                    <div className="text-xs text-slate-400 font-mono">
                      Impana A S
                    </div>
                  </div>
                </div>
                <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-white transition-colors" />
              </a>
            </div>

            {/* Location & Institution */}
            <div className="p-4 rounded-xl bg-slate-900/40 border border-white/[0.06] flex items-center gap-3 text-xs text-slate-400">
              <MapPin className="w-4 h-4 text-teal-400 shrink-0" />
              <span>{personalInfo.institution} • {personalInfo.location}</span>
            </div>

          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <form
              onSubmit={handleSubmit}
              noValidate
              className="p-6 sm:p-8 rounded-2xl bg-[#0c1021]/90 border border-white/[0.08] shadow-2xl backdrop-blur-md space-y-5"
            >
              <h3 className="text-xl font-bold text-white mb-2">
                Send a Message
              </h3>

              {/* Status Message Notification */}
              {statusMessage && (
                <div
                  className={`p-3.5 rounded-xl text-xs leading-relaxed flex items-start gap-2.5 ${
                    statusMessage.type === 'error'
                      ? 'bg-rose-500/10 text-rose-300 border border-rose-500/20'
                      : 'bg-cyan-500/10 text-cyan-300 border border-cyan-500/30'
                  }`}
                >
                  <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                  <span>{statusMessage.text}</span>
                </div>
              )}

              {/* Name & Email Inputs */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label htmlFor="name" className="text-xs font-mono text-slate-300">
                    Your Name <span className="text-rose-400">*</span>
                  </label>
                  <input
                    id="name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g., Alex Kumar"
                    className={`w-full px-3.5 py-2.5 rounded-xl bg-slate-900/80 border text-xs text-white placeholder-slate-500 focus:outline-none transition-colors ${
                      errors.name ? 'border-rose-500' : 'border-white/10 focus:border-cyan-400'
                    }`}
                  />
                  {errors.name && (
                    <p className="text-[11px] text-rose-400 mt-0.5">{errors.name}</p>
                  )}
                </div>

                <div className="space-y-1">
                  <label htmlFor="email" className="text-xs font-mono text-slate-300">
                    Your Email <span className="text-rose-400">*</span>
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="e.g., alex@example.com"
                    className={`w-full px-3.5 py-2.5 rounded-xl bg-slate-900/80 border text-xs text-white placeholder-slate-500 focus:outline-none transition-colors ${
                      errors.email ? 'border-rose-500' : 'border-white/10 focus:border-cyan-400'
                    }`}
                  />
                  {errors.email && (
                    <p className="text-[11px] text-rose-400 mt-0.5">{errors.email}</p>
                  )}
                </div>
              </div>

              {/* Subject */}
              <div className="space-y-1">
                <label htmlFor="subject" className="text-xs font-mono text-slate-300">
                  Subject <span className="text-rose-400">*</span>
                </label>
                <input
                  id="subject"
                  type="text"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  placeholder="e.g., Project Collaboration / Internship Opportunity"
                  className={`w-full px-3.5 py-2.5 rounded-xl bg-slate-900/80 border text-xs text-white placeholder-slate-500 focus:outline-none transition-colors ${
                    errors.subject ? 'border-rose-500' : 'border-white/10 focus:border-cyan-400'
                  }`}
                />
                {errors.subject && (
                  <p className="text-[11px] text-rose-400 mt-0.5">{errors.subject}</p>
                )}
              </div>

              {/* Message */}
              <div className="space-y-1">
                <label htmlFor="message" className="text-xs font-mono text-slate-300">
                  Message <span className="text-rose-400">*</span>
                </label>
                <textarea
                  id="message"
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Write your note, inquiry, or project proposal here..."
                  className={`w-full px-3.5 py-2.5 rounded-xl bg-slate-900/80 border text-xs text-white placeholder-slate-500 focus:outline-none transition-colors resize-none ${
                    errors.message ? 'border-rose-500' : 'border-white/10 focus:border-cyan-400'
                  }`}
                />
                {errors.message && (
                  <p className="text-[11px] text-rose-400 mt-0.5">{errors.message}</p>
                )}
              </div>

              {/* Transparent Disclaimer */}
              <div className="p-3 rounded-lg bg-slate-900/40 border border-white/[0.05] text-[11px] text-slate-400 leading-snug">
                Submitting opens your native email application to dispatch directly to <span className="text-slate-200 font-mono">impanaas25@gmail.com</span> without unverified intermediaries.
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-violet-600 via-indigo-600 to-cyan-600 hover:from-violet-500 hover:to-cyan-500 border border-violet-400/30 shadow-lg shadow-violet-600/25 transition-all duration-200 hover:shadow-cyan-500/30 hover:scale-[1.01] active:scale-[0.99] cursor-pointer"
              >
                <span>Send Message</span>
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>

        </div>

      </div>
    </section>
  );
}
