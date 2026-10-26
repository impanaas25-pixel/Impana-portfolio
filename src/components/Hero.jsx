import React from 'react';
import { ArrowDown, Download, MessageSquare, ExternalLink, GraduationCap, Award, Layers, Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './BrandIcons';
import { personalInfo } from '../data/portfolioData';

export default function Hero({ onOpenResume }) {
  const handleScrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-[88vh] flex items-center justify-center pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden text-center">
      {/* Background Ambiance Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] bg-violet-600/15 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-[450px] h-[350px] bg-cyan-500/12 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-[350px] h-[250px] bg-teal-500/10 rounded-full blur-[110px] pointer-events-none -z-10" />

      {/* Subtle Radial Grid */}
      <div className="absolute inset-0 bg-radial-grid opacity-35 pointer-events-none -z-10" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col items-center">
        
        {/* Eyebrow Pill */}
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-slate-900/80 border border-violet-500/30 shadow-sm shadow-violet-500/20 backdrop-blur-md mb-6">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-teal-500" />
          </span>
          <span className="text-xs sm:text-sm font-semibold tracking-wide text-slate-200">
            {personalInfo.eyebrow}
          </span>
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.12] max-w-4xl">
          {personalInfo.headlineMain}{' '}
          <span className="bg-gradient-to-r from-violet-400 via-cyan-300 to-teal-300 bg-clip-text text-transparent block mt-2">
            {personalInfo.headlineGradient}
          </span>
        </h1>

        {/* Description */}
        <p className="mt-6 text-base sm:text-xl text-slate-300 leading-relaxed max-w-3xl font-normal">
          {personalInfo.bio}
        </p>

        {/* Authentic Highlights Badges */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 my-6 max-w-2xl">
          <div className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-slate-900/80 border border-cyan-500/30 text-xs font-mono text-cyan-300">
            <GraduationCap className="w-3.5 h-3.5 text-cyan-400" />
            <span>8.65 CGPA (upto 4th Sem) • 5th Sem, 3rd Year</span>
          </div>

          <div className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-slate-900/80 border border-violet-500/30 text-xs font-mono text-violet-300">
            <Layers className="w-3.5 h-3.5 text-violet-400" />
            <span>PERN Stack (PostgreSQL, Express, React, Node)</span>
          </div>

          <div className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-slate-900/80 border border-emerald-500/30 text-xs font-mono text-emerald-300">
            <Award className="w-3.5 h-3.5 text-emerald-400" />
            <span>BIET Davangere CSE</span>
          </div>
        </div>

        {/* Availability Label */}
        <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-300 bg-slate-900/60 border border-emerald-500/30 px-4 py-2 rounded-xl mb-8">
          <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>{personalInfo.availability}</span>
        </div>

        {/* Three Functional CTA Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
          <button
            onClick={() => handleScrollTo('projects')}
            className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-violet-600 via-indigo-600 to-cyan-600 hover:from-violet-500 hover:to-cyan-500 border border-violet-400/30 shadow-lg shadow-violet-600/30 transition-all duration-200 hover:shadow-cyan-500/30 hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
          >
            <span>Explore My Projects</span>
            <ArrowDown className="w-4 h-4 transition-transform group-hover:translate-y-0.5" />
          </button>

          <button
            onClick={onOpenResume}
            className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold text-slate-200 bg-slate-900/80 hover:bg-slate-800/90 border border-slate-700/80 hover:border-cyan-400/50 shadow-md transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
          >
            <Download className="w-4 h-4 text-cyan-400 group-hover:animate-bounce" />
            <span>Download Resume</span>
          </button>

          <button
            onClick={() => handleScrollTo('contact')}
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold text-slate-300 hover:text-white bg-white/[0.03] hover:bg-white/[0.08] border border-white/10 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
          >
            <MessageSquare className="w-4 h-4 text-violet-400" />
            <span>Let's Connect</span>
          </button>
        </div>

        {/* Social & Channel Badges */}
        <div className="flex flex-wrap items-center justify-center gap-3 text-slate-400 pt-2">
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-slate-900/60 border border-white/10 text-xs font-medium text-slate-300 hover:text-cyan-300 hover:border-cyan-500/40 transition-colors"
            aria-label="GitHub Profile"
          >
            <GithubIcon className="w-4 h-4 text-cyan-400" />
            <span>github.com/impanaas25-pixel</span>
            <ExternalLink className="w-3 h-3 opacity-60" />
          </a>

          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-slate-900/60 border border-white/10 text-xs font-medium text-slate-300 hover:text-violet-300 hover:border-violet-500/40 transition-colors"
            aria-label="LinkedIn Profile"
          >
            <LinkedinIcon className="w-4 h-4 text-violet-400" />
            <span>LinkedIn Profile</span>
            <ExternalLink className="w-3 h-3 opacity-60" />
          </a>

          <a
            href={`mailto:${personalInfo.email}`}
            className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-slate-900/60 border border-white/10 text-xs font-medium text-slate-300 hover:text-teal-300 hover:border-teal-500/40 transition-colors"
          >
            <Mail className="w-4 h-4 text-teal-400" />
            <span>{personalInfo.email}</span>
          </a>
        </div>

      </div>
    </section>
  );
}
