import React from 'react';
import { Cloud, Brain, Database, Award, CheckCircle2, ShieldCheck } from 'lucide-react';
import { certifications } from '../data/portfolioData';

export default function Certifications() {
  const iconMap = {
    Cloud: Cloud,
    Brain: Brain,
    Database: Database,
  };

  return (
    <section id="certifications" className="py-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-left max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-violet-500/10 text-violet-300 text-xs font-mono uppercase tracking-widest border border-violet-500/20 mb-3">
            <span>Certifications & Continuous Learning</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Verified Competencies & Credentials
          </h2>
          <p className="mt-3 text-base text-slate-300 leading-relaxed">
            Professional certifications and hands-on skill badges earned through rigorous vendor assessments and structured learning.
          </p>
        </div>

        {/* Credentials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          {certifications.map((cert) => {
            const Icon = iconMap[cert.icon] || Award;
            return (
              <div
                key={cert.id}
                className="group relative p-6 sm:p-7 rounded-2xl bg-gradient-to-b from-[#0e1329] to-[#090d1f] border border-white/[0.08] hover:border-violet-500/40 shadow-xl transition-all duration-300 flex flex-col justify-between hover:-translate-y-1"
              >
                <div>
                  {/* Top Bar with Issuer & Badge */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <div className="p-3 rounded-xl bg-slate-800/80 border border-white/10 text-violet-400 group-hover:text-cyan-300 transition-colors">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-[11px] font-mono font-medium bg-emerald-500/10 text-emerald-300 border border-emerald-500/30">
                      <ShieldCheck className="w-3.5 h-3.5" />
                      <span>Verified</span>
                    </span>
                  </div>

                  {/* Title & Issuer */}
                  <h3 className="text-lg font-bold text-white group-hover:text-violet-300 transition-colors">
                    {cert.title}
                  </h3>
                  <div className="text-xs font-medium text-cyan-300 mt-1">
                    {cert.issuer} • {cert.year}
                  </div>
                  <div className="text-[11px] font-mono text-slate-400 mt-0.5">
                    {cert.credentialType}
                  </div>

                  {/* Description */}
                  <p className="text-xs text-slate-300 leading-relaxed mt-4">
                    {cert.description}
                  </p>
                </div>

                {/* Skill Tags */}
                <div className="pt-6 border-t border-white/[0.06] mt-6">
                  <div className="flex flex-wrap gap-1.5">
                    {cert.tags.map((t) => (
                      <span
                        key={t}
                        className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-white/[0.03] text-slate-300 border border-white/[0.06]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
