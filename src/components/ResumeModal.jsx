import React, { useEffect } from 'react';
import { X, Download, Printer, GraduationCap, Code2, Award, Briefcase, FileText, Languages } from 'lucide-react';
import { personalInfo, projects, skillCategories, spokenLanguages } from '../data/portfolioData';

export default function ResumeModal({ onClose }) {
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

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/85 backdrop-blur-md transition-opacity animate-in fade-in"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-4xl rounded-2xl bg-[#0b0e1d] border border-white/10 shadow-2xl overflow-hidden z-10 text-left my-6 animate-in zoom-in-95 duration-200">
        
        {/* Header Bar */}
        <div className="p-4 sm:p-6 bg-[#080a16] border-b border-white/[0.08] flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-violet-500/10 text-violet-400 border border-violet-500/20">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-white">
                Impana A S — Technical Resume
              </h2>
              <p className="text-xs text-slate-400">
                5th Sem CSE (3rd Year) • BIET Davangere • Verified Academic CV
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <a
              href="/Impana_A_S_Resume.pdf"
              download="Impana_A_S_Resume.pdf"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-violet-600 to-cyan-600 hover:from-violet-500 hover:to-cyan-500 shadow-md shadow-violet-600/20 transition-all cursor-pointer"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download PDF</span>
            </a>

            <button
              onClick={handlePrint}
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-medium text-slate-300 hover:text-white bg-slate-800/80 hover:bg-slate-700 transition-colors cursor-pointer"
              title="Print Resume"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print</span>
            </button>

            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Resume Preview Paper */}
        <div className="p-6 sm:p-10 max-h-[75vh] overflow-y-auto space-y-8 font-sans bg-[#0d1124] text-slate-200">
          
          {/* Resume Header */}
          <div className="border-b border-white/10 pb-6">
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              {personalInfo.name}
            </h1>
            <p className="text-sm font-semibold text-cyan-300 mt-1">
              B.E. Computer Science & Engineering (5th Sem, 3rd Year | 8.65 CGPA upto 4th Sem) • BIET Davangere
            </p>
            <div className="flex flex-wrap items-center gap-y-1 gap-x-4 text-xs text-slate-400 mt-3 font-mono">
              <span>Email: {personalInfo.email}</span>
              <span>•</span>
              <span>GitHub: github.com/impanaas25-pixel</span>
              <span>•</span>
              <span>Location: Davangere, Karnataka, India</span>
            </div>
          </div>

          {/* Education Section */}
          <div className="space-y-3">
            <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400 flex items-center gap-2">
              <GraduationCap className="w-4 h-4" />
              <span>Education & Academic Record</span>
            </h3>
            
            <div className="space-y-2.5 text-xs">
              {/* Higher Education */}
              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] space-y-1">
                <div className="flex justify-between items-center text-sm font-semibold text-white">
                  <span>Bachelor of Engineering (B.E.) in Computer Science & Engineering</span>
                  <span className="text-xs text-cyan-300 font-mono font-bold">8.65 CGPA (upto 4th Sem)</span>
                </div>
                <div className="text-slate-300 font-medium">
                  Bapuji Institute of Engineering & Technology (BIET), Davangere
                </div>
                <p className="text-slate-400 leading-relaxed pt-0.5">
                  Currently pursuing 5th Semester (3rd Year) with an 8.65 CGPA upto 4th semester. Core coursework: Data Structures, Algorithms, Database Management, Operating Systems, Computer Networks, and PERN Stack Web Development.
                </p>
              </div>

              {/* Pre-University */}
              <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.06] space-y-1">
                <div className="flex justify-between items-center text-sm font-semibold text-white">
                  <span>Pre-University Education (PUC / 12th Grade)</span>
                  <span className="text-xs text-teal-300 font-mono font-bold">91.33%</span>
                </div>
                <div className="text-slate-400 font-medium">
                  Anubhava Mantapa PU College, Davangere
                </div>
              </div>

              {/* Schooling */}
              <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.06] space-y-1">
                <div className="flex justify-between items-center text-sm font-semibold text-white">
                  <span>Secondary Schooling (10th Grade / SSLC)</span>
                  <span className="text-xs text-violet-300 font-mono font-bold">93.12%</span>
                </div>
                <div className="text-slate-400 font-medium">
                  Sri Taralabalu Jagadguru Residential School, Davangere
                </div>
              </div>
            </div>
          </div>

          {/* Technical Skills Section */}
          <div className="space-y-3">
            <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-violet-400 flex items-center gap-2">
              <Code2 className="w-4 h-4" />
              <span>Technical Skills (PERN & Cloud)</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              {skillCategories.map((cat) => (
                <div key={cat.name} className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                  <div className="font-semibold text-white mb-1.5">{cat.name}</div>
                  <div className="text-slate-300 font-mono leading-relaxed">
                    {cat.skills.map((s) => s.name).join(', ')}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Multilingual Skills */}
          <div className="space-y-3">
            <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-400 flex items-center gap-2">
              <Languages className="w-4 h-4" />
              <span>Languages Known</span>
            </h3>
            <div className="flex flex-wrap gap-2 text-xs">
              {spokenLanguages.map((lang) => (
                <span
                  key={lang.name}
                  className="px-3 py-1.5 rounded-lg bg-white/[0.03] border border-white/[0.08] text-slate-200"
                >
                  <strong className="text-white">{lang.name}:</strong> <span className="text-slate-400">{lang.level}</span>
                </span>
              ))}
            </div>
          </div>

          {/* Projects Section */}
          <div className="space-y-3">
            <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-teal-400 flex items-center gap-2">
              <Briefcase className="w-4 h-4" />
              <span>Engineered Systems</span>
            </h3>
            <div className="space-y-3 text-xs">
              {projects.map((proj) => (
                <div key={proj.id} className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] space-y-2">
                  <div className="flex flex-wrap items-center justify-between gap-1 text-sm font-semibold text-white">
                    <span>{proj.title} — {proj.subtitle}</span>
                    <span className="text-xs font-mono text-cyan-300">{proj.role}</span>
                  </div>
                  <div className="flex flex-wrap items-center justify-between gap-2 text-[11px] font-mono text-slate-400">
                    <span>Stack: {proj.technologies.join(', ')}</span>
                    <span className="text-teal-300 bg-teal-500/10 px-2 py-0.5 rounded border border-teal-500/20">
                      {proj.gitStatus}
                    </span>
                  </div>
                  <p className="text-slate-300 leading-relaxed">
                    {proj.shortDescription}
                  </p>
                  <div className="text-slate-400 italic">
                    Key Highlight: "{proj.highlight}"
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Hackathons & Milestones */}
          <div className="space-y-3">
            <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-amber-400 flex items-center gap-2">
              <Award className="w-4 h-4" />
              <span>Hackathon Milestones & Credentials</span>
            </h3>
            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] space-y-3 text-xs">
              <div>
                <strong className="text-white">Smart India Internal Hackathon (BIET Davangere):</strong> Team Member for Team Code Coven presenting KalaSetu-AI, an AI artisan digitization solution.
              </div>
              <div>
                <strong className="text-white">Hackarena 1.0 (BIET Davangere):</strong> Full-stack developer with Team Amethyst developing CraftSetu.
              </div>
              <div className="pt-2 border-t border-white/[0.06] text-slate-300 space-y-1">
                <div>• 5x Google Cloud Skill Badges — Google Cloud Platform (2026)</div>
                <div>• Introduction to AI & ML — LinkedIn Learning (2026)</div>
              </div>
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-[#080a16] border-t border-white/[0.08] flex items-center justify-between text-xs text-slate-400 font-mono">
          <span>Impana A S • B.E. CSE 5th Sem, 3rd Year (8.65 CGPA upto 4th Sem) • BIET Davangere</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-lg bg-slate-800 text-slate-300 hover:text-white transition-colors cursor-pointer"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
}
