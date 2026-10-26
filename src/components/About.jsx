import React, { useState } from 'react';
import { LayoutGrid, Sparkles, Cpu, CheckCircle2, GraduationCap, Languages, Award } from 'lucide-react';
import { authenticStats, whatIEnjoy, spokenLanguages, personalInfo } from '../data/portfolioData';

export default function About() {
  const [selectedTopic, setSelectedTopic] = useState('web-apps');

  const iconMap = {
    LayoutGrid: LayoutGrid,
    Sparkles: Sparkles,
    Cpu: Cpu,
  };

  return (
    <section id="about" className="py-20 lg:py-28 relative">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-violet-600/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-left max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-violet-500/10 text-violet-300 text-xs font-mono uppercase tracking-widest border border-violet-500/20 mb-3">
            <span>About Me</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Passionate About Engineering Systems That Matter.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            I’m an undergraduate student currently in my <strong className="text-cyan-300 font-semibold">5th Semester (3rd Year)</strong> pursuing a{' '}
            <strong className="text-white font-medium">B.E. in Computer Science & Engineering</strong> at{' '}
            <strong className="text-white font-medium">Bapuji Institute of Engineering & Technology (BIET), Davangere</strong>, maintaining an{' '}
            <strong className="text-teal-300 font-semibold">8.65 CGPA (upto 4th Sem)</strong>. My focus centers on full-stack web engineering with the PERN stack, generative AI integrations, and practical algorithm design.
          </p>
        </div>

        {/* Narrative & Highlights Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          
          {/* Detailed Editorial Column */}
          <div className="lg:col-span-7 space-y-5 text-left text-slate-300 leading-relaxed text-sm sm:text-base">
            
            {/* Academic Track Record Card */}
            <div className="p-6 rounded-2xl bg-[#0c1021]/80 border border-white/[0.08] backdrop-blur-md space-y-3">
              <h3 className="text-lg font-semibold text-white flex items-center gap-2">
                <GraduationCap className="w-5 h-5 text-cyan-400" />
                <span>Academic Rigor & Track Record</span>
              </h3>
              <p>
                My educational journey reflects strong dedication and continuous learning:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                <div className="p-3 rounded-xl bg-slate-900/80 border border-white/10 text-left">
                  <div className="text-xs font-mono text-cyan-400">Current B.E. (5th Sem, 3rd Year)</div>
                  <div className="text-sm font-bold text-white mt-1">8.65 CGPA</div>
                  <div className="text-[11px] text-slate-400 mt-0.5">Upto 4th Sem • BIET</div>
                </div>
                <div className="p-3 rounded-xl bg-slate-900/80 border border-white/10 text-left">
                  <div className="text-xs font-mono text-violet-400">PUC (12th Grade)</div>
                  <div className="text-sm font-bold text-white mt-1">91.33%</div>
                  <div className="text-[11px] text-slate-400 mt-0.5">Anubhava Mantapa PU</div>
                </div>
                <div className="p-3 rounded-xl bg-slate-900/80 border border-white/10 text-left">
                  <div className="text-xs font-mono text-teal-400">10th Grade (SSLC)</div>
                  <div className="text-sm font-bold text-white mt-1">93.12%</div>
                  <div className="text-[11px] text-slate-400 mt-0.5">Sri Taralabalu School</div>
                </div>
              </div>
            </div>

            {/* Practical Full-Stack & Hackathon Experience */}
            <div className="p-6 rounded-2xl bg-[#0c1021]/80 border border-white/[0.08] backdrop-blur-md space-y-4">
              <h3 className="text-lg font-semibold text-white flex items-center gap-2">
                <Award className="w-5 h-5 text-violet-400" />
                <span>Collaborative Development & Hackathons</span>
              </h3>
              <p>
                Hands-on hackathons and project collaboration have been integral to my journey. As a <strong className="text-violet-300">Team Member in Team Code Coven</strong> during the Smart India Internal Hackathon at BIET Davangere, I contributed to developing <strong className="text-slate-100">KalaSetu-AI</strong>, an AI platform designed to help rural artisans showcase and commercialize their crafts.
              </p>
              <p>
                Similarly, in <strong className="text-cyan-300">Hackarena 1.0</strong> at BIET, I collaborated with <strong className="text-cyan-300">Team Amethyst</strong> on <strong className="text-slate-100">CraftSetu</strong>. On the open-source front, I lead <strong className="text-slate-100">StudioYield</strong> (greedy job optimizer) and collaborated on <strong className="text-slate-100">Urban Flow</strong> with a collaborative Git push workflow.
              </p>
            </div>

            {/* Multilingual Proficiency Card */}
            <div className="p-6 rounded-2xl bg-[#0c1021]/80 border border-white/[0.08] backdrop-blur-md space-y-3">
              <h3 className="text-base font-semibold text-white flex items-center gap-2">
                <Languages className="w-5 h-5 text-teal-400" />
                <span>Multilingual Communication</span>
              </h3>
              <p className="text-xs text-slate-400">
                Effective communication across diverse team environments in regional, national, and international contexts:
              </p>
              <div className="flex flex-wrap gap-2 pt-1">
                {spokenLanguages.map((lang) => (
                  <div
                    key={lang.name}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900/90 border border-white/10 text-xs text-slate-200"
                  >
                    <span className="font-semibold text-white">{lang.name}</span>
                    <span className="text-[10px] font-mono text-cyan-400 bg-cyan-500/10 px-1.5 py-0.5 rounded border border-cyan-500/20">
                      {lang.badge}
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Authentic Statistics Column */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-4">
            {authenticStats.map((stat, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-gradient-to-br from-[#0c1021] to-[#0f142b] border border-white/[0.08] hover:border-violet-500/40 transition-all duration-300 group hover:-translate-y-1 shadow-lg text-left"
              >
                <div className="font-mono text-3xl sm:text-4xl font-extrabold bg-gradient-to-r from-violet-300 via-cyan-300 to-teal-300 bg-clip-text text-transparent group-hover:scale-105 transition-transform origin-left">
                  {stat.value}
                </div>
                <div className="text-sm font-semibold text-white mt-1">
                  {stat.label}
                </div>
                <div className="text-xs text-slate-400 mt-1 leading-snug">
                  {stat.detail}
                </div>
              </div>
            ))}

            {/* Credential summary callout */}
            <div className="col-span-2 p-5 rounded-2xl bg-gradient-to-r from-violet-950/40 via-slate-900/80 to-cyan-950/40 border border-cyan-500/30 text-left">
              <div className="flex items-center gap-2 text-xs font-mono text-cyan-300 uppercase tracking-wider mb-1">
                <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                <span>Verified Academic Record</span>
              </div>
              <p className="text-xs text-slate-300">
                All coursework, 8.65 CGPA upto 4th semester (currently in 5th sem, 3rd year), 91.33% in 12th, 93.12% in 10th, and BIET hackathons represent genuine milestones in my Computer Science Engineering journey.
              </p>
            </div>
          </div>

        </div>

        {/* "What I Enjoy Building" Section */}
        <div className="pt-6">
          <div className="text-left mb-8">
            <h3 className="text-2xl font-bold text-white tracking-tight">
              What I Enjoy Building
            </h3>
            <p className="text-sm text-slate-400 mt-1">
              Interactive focus areas bridging user experience and engineering logic.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {whatIEnjoy.map((item) => {
              const IconComponent = iconMap[item.icon] || LayoutGrid;
              const isSelected = selectedTopic === item.id;

              return (
                <div
                  key={item.id}
                  onClick={() => setSelectedTopic(item.id)}
                  className={`group relative p-6 rounded-2xl text-left cursor-pointer transition-all duration-300 border backdrop-blur-md ${
                    isSelected
                      ? 'bg-slate-900/90 border-cyan-400/50 shadow-xl shadow-cyan-500/10'
                      : 'bg-[#0c1021]/70 border-white/[0.08] hover:border-white/20 hover:bg-[#0c1021]/90'
                  }`}
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 rounded-xl bg-slate-800/80 border border-white/10 text-cyan-400 group-hover:text-cyan-300 group-hover:scale-110 transition-transform">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    {isSelected && (
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                        Active Focus
                      </span>
                    )}
                  </div>

                  <h4 className="text-lg font-semibold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                    {item.title}
                  </h4>

                  <p className="text-sm text-slate-300 leading-relaxed mb-4">
                    {item.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 pt-2 border-t border-white/[0.06]">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[11px] font-mono px-2 py-0.5 rounded-md bg-white/[0.04] text-slate-300 border border-white/[0.06]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
