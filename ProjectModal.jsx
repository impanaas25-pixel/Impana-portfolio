import React, { useEffect } from 'react';
import { X, ExternalLink, Cpu, CheckCircle2, AlertCircle, Layers, UserCheck } from 'lucide-react';
import { GithubIcon } from './BrandIcons';

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity animate-in fade-in"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-3xl rounded-2xl bg-[#0c1024] border border-white/10 shadow-2xl overflow-hidden z-10 text-left my-8 animate-in zoom-in-95 duration-200">
        
        {/* Header with Gradient Accent */}
        <div className={`p-6 sm:p-8 bg-gradient-to-r ${project.gradient} border-b border-white/[0.08] relative`}>
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-xl bg-slate-900/80 hover:bg-slate-800 text-slate-300 hover:text-white transition-colors cursor-pointer"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex flex-wrap items-center gap-2 mb-2">
            <span className="px-2.5 py-1 rounded-md text-xs font-mono font-medium bg-slate-900/80 text-cyan-300 border border-cyan-400/30">
              {project.category}
            </span>
            <span className="px-2.5 py-1 rounded-md text-xs font-mono font-medium bg-slate-900/80 text-slate-300 border border-white/10">
              {project.statusBadge}
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
            {project.title}
          </h2>
          <p className="text-sm sm:text-base text-cyan-200 font-medium mt-1">
            {project.subtitle}
          </p>
        </div>

        {/* Modal Content Body */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[70vh] overflow-y-auto">
          
          {/* Key Role & Highlight */}
          <div className="p-4 rounded-xl bg-slate-900/80 border border-violet-500/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <div className="flex items-center gap-2.5">
              <UserCheck className="w-5 h-5 text-violet-400 shrink-0" />
              <div>
                <div className="text-xs text-slate-400 uppercase font-mono tracking-wider">Role & Responsibility</div>
                <div className="text-sm font-semibold text-white">{project.role}</div>
              </div>
            </div>
            <div className="text-xs text-slate-300 sm:text-right italic">
              "{project.highlight}"
            </div>
          </div>

          {/* Problem Statement */}
          <div className="space-y-2">
            <h3 className="text-sm font-semibold font-mono uppercase tracking-wider text-slate-300 flex items-center gap-2">
              <AlertCircle className="w-4 h-4 text-amber-400" />
              <span>Problem Addressed</span>
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed pl-6">
              {project.problem}
            </p>
          </div>

          {/* Solution & Implementation */}
          <div className="space-y-2">
            <h3 className="text-sm font-semibold font-mono uppercase tracking-wider text-slate-300 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-teal-400" />
              <span>Solution & Approach</span>
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed pl-6">
              {project.solution}
            </p>
          </div>

          {/* Architecture & Engineering Stack */}
          <div className="space-y-2">
            <h3 className="text-sm font-semibold font-mono uppercase tracking-wider text-slate-300 flex items-center gap-2">
              <Layers className="w-4 h-4 text-cyan-400" />
              <span>Architecture & Tech Pipeline</span>
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed pl-6">
              {project.architecture}
            </p>
          </div>

          {/* Personal Key Contribution */}
          <div className="space-y-2">
            <h3 className="text-sm font-semibold font-mono uppercase tracking-wider text-slate-300 flex items-center gap-2">
              <Cpu className="w-4 h-4 text-violet-400" />
              <span>Personal Contribution</span>
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed pl-6">
              {project.contribution}
            </p>
          </div>

          {/* Technologies Used */}
          <div className="space-y-2 pt-2">
            <div className="text-xs font-mono text-slate-400 uppercase tracking-wider">
              Technologies & Methodologies
            </div>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-lg text-xs font-mono bg-white/[0.04] text-slate-200 border border-white/10"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="p-4 sm:p-6 bg-[#080b18] border-t border-white/[0.08] flex flex-wrap items-center justify-between gap-3">
          <div className="text-xs text-slate-400 font-mono">
            BIET Davangere • Portfolio Verified
          </div>

          <div className="flex items-center gap-3">
            {project.githubUrl ? (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold text-white bg-slate-800 hover:bg-slate-700 border border-white/10 transition-colors"
              >
                <GithubIcon className="w-4 h-4 text-cyan-400" />
                <span>View on GitHub</span>
                <ExternalLink className="w-3 h-3 opacity-60" />
              </a>
            ) : (
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono text-cyan-300 bg-cyan-500/10 border border-cyan-500/20">
                <span>{project.gitStatus || "Internal Hackathon Build (Not Pushed to Git)"}</span>
              </div>
            )}

            <button
              onClick={onClose}
              className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-300 hover:text-white bg-white/[0.05] hover:bg-white/[0.1] transition-colors cursor-pointer"
            >
              Close
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
