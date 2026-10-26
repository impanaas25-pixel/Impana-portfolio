import React, { useState } from 'react';
import { Code2, Globe, Database, Wrench, Search, Terminal } from 'lucide-react';
import { skillCategories } from '../data/portfolioData';

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const categoryIcons = {
    'Programming Languages': Code2,
    'Web & Backend (PERN Stack)': Globe,
    'Databases': Database,
    'Tools & Platforms': Wrench,
  };

  const allCategories = ['All', ...skillCategories.map(c => c.name)];

  const filteredCategories = skillCategories.map(cat => {
    if (selectedCategory !== 'All' && cat.name !== selectedCategory) {
      return null;
    }

    const matchingSkills = cat.skills.filter(s =>
      s.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.context.toLowerCase().includes(searchQuery.toLowerCase())
    );

    if (matchingSkills.length === 0) return null;

    return {
      ...cat,
      skills: matchingSkills
    };
  }).filter(Boolean);

  return (
    <section id="skills" className="py-20 lg:py-28 relative">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-violet-600/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-left max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-teal-500/10 text-teal-300 text-xs font-mono uppercase tracking-widest border border-teal-500/20 mb-3">
            <span>Technical Skills</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Languages, Stacks & Engineering Tools
          </h2>
          <p className="mt-3 text-base text-slate-300 leading-relaxed">
            Organized across core computer science foundations, full-stack application development, database management, and cloud dev workflows.
          </p>
        </div>

        {/* Filter Controls & Search */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 mb-10">
          
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 rounded-2xl bg-[#0c1021] border border-white/[0.08]">
            {allCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-violet-600 text-white shadow-md shadow-violet-600/25 font-semibold'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-white/[0.04]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative max-w-xs w-full">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Filter technologies..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 rounded-xl bg-slate-900/80 border border-white/10 text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-cyan-400/50 transition-colors"
            />
          </div>

        </div>

        {/* Categorized Skills Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 text-left">
          {filteredCategories.map((cat) => {
            const Icon = categoryIcons[cat.name] || Terminal;
            return (
              <div
                key={cat.name}
                className="p-6 sm:p-7 rounded-2xl bg-[#0c1021]/80 border border-white/[0.08] backdrop-blur-md hover:border-white/20 transition-all duration-300"
              >
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-5 pb-3 border-b border-white/[0.06]">
                  <div className="p-2.5 rounded-xl bg-slate-800/80 border border-white/10 text-cyan-400">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">{cat.name}</h3>
                    <div className="text-xs text-slate-400 font-mono">
                      {cat.skills.length} Competencies
                    </div>
                  </div>
                </div>

                {/* Skill Chips with Practical Context */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {cat.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="group p-3 rounded-xl bg-white/[0.02] hover:bg-white/[0.05] border border-white/[0.05] hover:border-cyan-400/30 transition-all duration-200 text-left"
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-semibold text-sm text-slate-200 group-hover:text-cyan-300 transition-colors">
                          {skill.name}
                        </span>
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 opacity-60 group-hover:opacity-100" />
                      </div>
                      <p className="text-[11px] text-slate-400 mt-1 leading-snug line-clamp-2">
                        {skill.context}
                      </p>
                    </div>
                  ))}
                </div>

              </div>
            );
          })}
        </div>

        {/* Honest Transparency Note */}
        <div className="mt-10 p-4 rounded-xl bg-slate-900/40 border border-white/[0.06] text-xs text-slate-400 font-mono text-center max-w-2xl mx-auto">
          Skills reflect ongoing engineering coursework, competitive hackathon implementations, and self-directed project development at BIET Davangere.
        </div>

      </div>
    </section>
  );
}
