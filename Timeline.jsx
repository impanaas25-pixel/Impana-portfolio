import React from 'react';
import { Trophy, GraduationCap, Calendar, MapPin, Users, Award, Sparkles } from 'lucide-react';
import { timelineEvents } from '../data/portfolioData';

export default function Timeline() {
  return (
    <section id="achievements" className="py-20 lg:py-28 relative">
      {/* Background radial glow */}
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 bg-cyan-600/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-left max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-cyan-500/10 text-cyan-300 text-xs font-mono uppercase tracking-widest border border-cyan-500/20 mb-3">
            <span>Hackathons & Academic Journey</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Milestones, Competitive Builds & Education
          </h2>
          <p className="mt-3 text-base text-slate-300 leading-relaxed">
            Hands-on problem solving at BIET Davangere internal hackathons alongside my formal Computer Science Engineering undergraduate coursework.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative max-w-4xl mx-auto text-left">
          
          {/* Vertical Progress Line */}
          <div className="absolute left-4 sm:left-1/2 top-4 bottom-4 w-0.5 bg-gradient-to-b from-violet-500 via-cyan-400 to-teal-400 -translate-x-1/2 opacity-40" />

          <div className="space-y-12">
            {timelineEvents.map((item, idx) => {
              const isEven = idx % 2 === 0;
              const isEducation = item.type === 'education';

              return (
                <div
                  key={item.id}
                  className={`relative flex flex-col sm:flex-row items-start sm:items-center ${
                    isEven ? 'sm:flex-row-reverse' : ''
                  }`}
                >
                  {/* Central Node Indicator */}
                  <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 flex items-center justify-center w-9 h-9 rounded-full bg-[#080b18] border-2 border-cyan-400 shadow-md shadow-cyan-400/40 z-10">
                    {isEducation ? (
                      <GraduationCap className="w-4 h-4 text-cyan-300" />
                    ) : (
                      <Trophy className="w-4 h-4 text-violet-400" />
                    )}
                  </div>

                  {/* Content Card (Left or Right on desktop) */}
                  <div className="ml-12 sm:ml-0 sm:w-1/2 sm:px-8 w-full">
                    <div className="p-6 sm:p-7 rounded-2xl bg-[#0c1021]/90 border border-white/[0.08] hover:border-cyan-400/40 shadow-xl transition-all duration-300 group hover:-translate-y-1">
                      
                      {/* Top Badges */}
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                        <div className="flex flex-wrap items-center gap-1.5">
                          <span className="px-2.5 py-0.5 rounded-md text-[11px] font-mono font-medium bg-slate-900 border border-white/10 text-cyan-300">
                            {item.badge}
                          </span>
                          {item.scoreBadge && (
                            <span className="px-2.5 py-0.5 rounded-md text-[11px] font-mono font-semibold bg-emerald-500/10 border border-emerald-500/30 text-emerald-300">
                              {item.scoreBadge}
                            </span>
                          )}
                        </div>
                        <span className="text-xs font-mono text-slate-400">
                          {item.period}
                        </span>
                      </div>

                      {/* Title & Institution */}
                      <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                        {item.title}
                      </h3>
                      
                      <div className="flex items-center gap-1.5 text-xs font-medium text-slate-400 mt-1">
                        <MapPin className="w-3.5 h-3.5 text-violet-400 shrink-0" />
                        <span>{item.institution}</span>
                      </div>

                      {/* Team / Role Details */}
                      <div className="my-3 py-2.5 px-3 rounded-xl bg-slate-900/60 border border-white/[0.05] flex flex-wrap items-center justify-between gap-2 text-xs">
                        <div className="flex items-center gap-1.5 text-slate-300">
                          <Users className="w-3.5 h-3.5 text-teal-400" />
                          <span className="font-semibold text-white">{item.role}</span>
                        </div>
                        {item.project && (
                          <span className="font-mono text-violet-300">
                            Project: {item.project}
                          </span>
                        )}
                      </div>

                      {/* Description */}
                      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                        {item.description}
                      </p>

                    </div>
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
