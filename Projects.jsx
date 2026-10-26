import React, { useState } from 'react';
import { ExternalLink, ArrowRight, BookOpen, Sparkles, Code2, Cpu } from 'lucide-react';
import { GithubIcon } from './BrandIcons';
import { projects, projectCategories } from '../data/portfolioData';
import ProjectModal from './ProjectModal';

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('All Projects');
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = projects.filter((project) => {
    if (activeCategory === 'All Projects') return true;
    return project.category === activeCategory;
  });

  return (
    <section id="projects" className="py-20 lg:py-28 relative">
      {/* Background glow effects */}
      <div className="absolute top-1/3 right-10 w-[500px] h-[500px] bg-cyan-600/10 rounded-full blur-[150px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-violet-600/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 text-left">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-cyan-500/10 text-cyan-300 text-xs font-mono uppercase tracking-widest border border-cyan-500/20 mb-3">
              <span>Projects Showcase</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Engineered Systems & Applied Innovation
            </h2>
            <p className="mt-3 text-base text-slate-300 leading-relaxed">
              Real-world web architectures, algorithmic optimizers, and AI integrations developed for academic milestones and BIET hackathons.
            </p>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap items-center gap-2 p-1.5 rounded-2xl bg-[#0c1021] border border-white/[0.08] backdrop-blur-md">
            {projectCategories.map((category) => {
              const isActive = activeCategory === category;
              return (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'bg-gradient-to-r from-violet-600 to-cyan-600 text-white shadow-md shadow-violet-600/20 font-semibold'
                      : 'text-slate-400 hover:text-slate-200 hover:bg-white/[0.04]'
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group relative rounded-2xl bg-gradient-to-b from-[#0e142b] to-[#0a0d1e] border border-white/[0.08] hover:border-cyan-400/40 shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden hover:-translate-y-1.5"
            >
              {/* Top Accent Gradient Bar */}
              <div className={`h-1.5 w-full bg-gradient-to-r ${project.gradient}`} />

              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-6">
                
                {/* Meta Header */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between gap-2">
                    <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono font-medium bg-slate-900 border border-violet-500/30 text-violet-300">
                      {project.category}
                    </span>
                    
                    {project.statusType === 'active' && (
                      <span className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-mono text-emerald-300 bg-emerald-500/10 border border-emerald-500/30">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        {project.statusBadge}
                      </span>
                    )}

                    {project.statusType === 'hackathon' && (
                      <span className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-mono text-cyan-300 bg-cyan-500/10 border border-cyan-500/30">
                        <Sparkles className="w-3 h-3 text-cyan-400" />
                        {project.statusBadge}
                      </span>
                    )}

                    {project.statusType === 'coming-soon' && (
                      <span className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-mono text-amber-300 bg-amber-500/10 border border-amber-500/30">
                        {project.statusBadge}
                      </span>
                    )}
                  </div>

                  {/* Title & Subtitle */}
                  <div>
                    <h3 className="text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {project.title}
                    </h3>
                    <div className="text-sm font-medium text-slate-400 mt-0.5">
                      {project.subtitle}
                    </div>
                  </div>

                  {/* Role Badge */}
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white/[0.04] text-xs font-mono text-slate-300 border border-white/[0.06]">
                    <span className="text-slate-500">Role:</span>
                    <span className="text-cyan-300 font-semibold">{project.role}</span>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-slate-300 leading-relaxed">
                    {project.shortDescription}
                  </p>

                  {/* Highlight Quote */}
                  <div className="p-3.5 rounded-xl bg-slate-900/80 border-l-2 border-cyan-400 text-xs text-slate-300 italic">
                    "{project.highlight}"
                  </div>
                </div>

                {/* Tech Chips */}
                <div className="space-y-4 pt-2">
                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-white/[0.03] text-slate-300 border border-white/[0.06] group-hover:border-white/10 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex items-center justify-between gap-3 pt-4 border-t border-white/[0.06]">
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-cyan-400 hover:text-cyan-300 group/btn transition-colors cursor-pointer"
                    >
                      <BookOpen className="w-4 h-4 text-cyan-400" />
                      <span>Explore Case Study</span>
                      <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-1" />
                    </button>

                    {project.githubUrl ? (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-xs font-medium text-slate-200 border border-white/10 transition-colors"
                        aria-label={`View ${project.title} on GitHub`}
                      >
                        <GithubIcon className="w-3.5 h-3.5 text-cyan-400" />
                        <span>GitHub</span>
                        <ExternalLink className="w-3 h-3 opacity-60" />
                      </a>
                    ) : (
                      <span className="text-[11px] font-mono text-slate-400 bg-slate-900/60 px-2 py-1 rounded border border-white/5">
                        {project.gitStatus || 'Internal Project (Not Pushed)'}
                      </span>
                    )}
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Case Study Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}
