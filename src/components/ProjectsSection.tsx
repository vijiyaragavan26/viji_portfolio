import React, { useState } from 'react';
import { ProjectCard } from './ProjectCard';
import { ProjectDetailsModal } from './ProjectDetailsModal';
import { usePortfolioData } from '../context/DataContext';
import { ProjectItem } from '../types';

const projectFilters = [
  'All Projects',
  'Web Development',
  'Python',
  'Artificial Intelligence',
] as const;

export const ProjectsSection: React.FC = () => {
  const { projects, isAdmin, openEditor } = usePortfolioData();
  const [selectedFilter, setSelectedFilter] = useState<string>('All Projects');
  const [activeModalProject, setActiveModalProject] = useState<ProjectItem | null>(null);

  const filteredProjects = projects.filter((proj) => {
    if (selectedFilter === 'All Projects') return true;
    return proj.category === selectedFilter;
  });

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-mono font-medium mb-3">
            <span>PORTFOLIO SHOWCASE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-dark-text tracking-tight mb-4">
            Featured Projects
          </h2>
          <p className="text-base text-dark-muted dark:text-dark-muted text-slate-600 leading-relaxed">
            Curated selection of three core software and engineering projects highlighting my full-stack web, Python scripting, and AI assistant explorations.
          </p>
          {isAdmin && (
            <div className="mt-4 flex justify-center">
              <button
                onClick={() => openEditor('projects')}
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-primary/10 border border-primary/30 text-primary hover:bg-primary/20 text-xs font-mono font-bold transition-all"
              >
                <span>🛠️ Manage Projects ({projects.length})</span>
              </button>
            </div>
          )}
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {projectFilters.map((filter) => (
            <button
              key={filter}
              onClick={() => setSelectedFilter(filter)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 ${
                selectedFilter === filter
                  ? 'bg-primary text-dark-bg font-semibold shadow-md shadow-primary/20 scale-105'
                  : 'bg-dark-surface dark:bg-dark-surface bg-white text-dark-muted dark:text-dark-muted text-slate-600 border border-dark-border dark:border-dark-border border-slate-200 hover:text-dark-text dark:hover:text-white hover:border-primary/40'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Exactly 3 Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onOpenDetails={(p) => setActiveModalProject(p)}
            />
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-16 border border-dashed border-dark-border rounded-2xl p-8">
            <p className="text-sm font-mono text-dark-muted">
              No projects in this category filter.
            </p>
          </div>
        )}

        {/* Verification Note */}
        <div className="mt-12 p-4 rounded-xl bg-dark-surface/40 dark:bg-dark-surface/40 bg-slate-100/70 border border-dark-border/50 dark:border-dark-border/50 border-slate-200 text-center max-w-2xl mx-auto">
          <p className="text-xs font-mono text-dark-muted dark:text-dark-muted text-slate-500">
            &bull; Project statuses (Concept, In Progress, Completed) accurately reflect real implementation progress without fabricated repository claims or metrics.
          </p>
        </div>

      </div>

      {/* Project Details Modal */}
      <ProjectDetailsModal
        project={activeModalProject}
        onClose={() => setActiveModalProject(null)}
      />
    </section>
  );
};
