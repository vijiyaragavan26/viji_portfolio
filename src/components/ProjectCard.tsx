import React from 'react';
import { ExternalLink, ArrowRight, ShoppingBag, Bot, Database } from 'lucide-react';
import { GithubIcon } from './SocialIcons';
import { ProjectItem } from '../types';

interface ProjectCardProps {
  project: ProjectItem;
  onOpenDetails: (project: ProjectItem) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onOpenDetails }) => {
  const getProjectIcon = (iconName: string) => {
    switch (iconName) {
      case 'shopping-bag':
        return <ShoppingBag className="w-8 h-8 text-orange-400" />;
      case 'bot':
        return <Bot className="w-8 h-8 text-blue-400" />;
      case 'database':
        return <Database className="w-8 h-8 text-emerald-400" />;
      default:
        return <ShoppingBag className="w-8 h-8 text-primary" />;
    }
  };

  const getStatusColor = (status: ProjectItem['status']) => {
    switch (status) {
      case 'Completed':
        return 'text-emerald-400 border-emerald-500/30 bg-emerald-500/10';
      case 'In Progress':
        return 'text-rose-400 border-rose-500/30 bg-rose-500/10';
      case 'Concept':
      default:
        return 'text-amber-400 border-amber-500/30 bg-amber-500/10';
    }
  };

  return (
    <div className="group rounded-2xl bg-dark-surface/90 dark:bg-dark-surface/90 bg-white border border-dark-border dark:border-dark-border border-slate-200 hover:border-primary/50 transition-all duration-300 hover:-translate-y-2 flex flex-col justify-between overflow-hidden shadow-sm hover:shadow-2xl hover:shadow-primary/10">
      {/* Visual Header / Banner Illustration */}
      <div className={`relative h-44 w-full bg-gradient-to-br ${project.gradient} p-6 flex flex-col justify-between border-b border-dark-border/60 dark:border-dark-border/60 border-slate-100 overflow-hidden`}>
        {/* Subtle grid in thumbnail */}
        <div
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(#ffffff 1px, transparent 1px)`,
            backgroundSize: '16px 16px',
          }}
        />

        <div className="flex items-center justify-between relative z-10">
          <span className="text-[11px] font-mono uppercase tracking-wider font-semibold px-2.5 py-1 rounded-md bg-dark-bg/80 dark:bg-dark-bg/80 bg-white/80 border border-dark-border/50 text-dark-text dark:text-dark-text text-slate-800 backdrop-blur-sm">
            {project.category}
          </span>

          <span
            className={`text-[11px] font-mono px-2.5 py-0.5 rounded-full border backdrop-blur-sm font-medium ${getStatusColor(
              project.status
            )}`}
          >
            {project.status}
          </span>
        </div>

        {/* Center icon artwork */}
        <div className="relative z-10 flex items-center space-x-3">
          <div className="w-14 h-14 rounded-xl bg-dark-surface/90 dark:bg-dark-surface/90 bg-white border border-dark-border dark:border-dark-border border-slate-200 flex items-center justify-center shadow-md group-hover:scale-105 transition-transform">
            {getProjectIcon(project.iconName)}
          </div>
          <div>
            <h4 className="text-xs font-mono text-dark-muted dark:text-dark-muted text-slate-600">
              {project.categoryLabel}
            </h4>
            <span className="text-xs font-mono text-primary font-semibold">
              Project Spec
            </span>
          </div>
        </div>
      </div>

      {/* Body Content */}
      <div className="p-6 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="text-xl font-bold text-slate-900 dark:text-dark-text mb-2.5 group-hover:text-primary transition-colors">
            {project.title}
          </h3>

          <p className="text-xs sm:text-sm text-dark-muted dark:text-dark-muted text-slate-600 leading-relaxed mb-6">
            {project.shortDescription}
          </p>

          {/* Tech tags */}
          <div className="flex flex-wrap gap-1.5 mb-6">
            {project.technologies.slice(0, 4).map((tech) => (
              <span
                key={tech}
                className="text-[11px] font-mono px-2 py-0.5 rounded bg-dark-bg/60 dark:bg-dark-bg/60 bg-slate-100 border border-dark-border/60 dark:border-dark-border/60 border-slate-200 text-slate-600 dark:text-slate-400"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 4 && (
              <span className="text-[11px] font-mono px-1.5 py-0.5 rounded text-dark-muted">
                +{project.technologies.length - 4} more
              </span>
            )}
          </div>
        </div>

        {/* Action Controls */}
        <div className="pt-4 border-t border-dark-border/60 dark:border-dark-border/60 border-slate-100 flex items-center justify-between">
          <button
            onClick={() => onOpenDetails(project)}
            className="inline-flex items-center space-x-1.5 text-xs font-semibold text-primary hover:text-primary-hover group-hover:translate-x-0.5 transition-all focus:outline-none"
          >
            <span>View Details</span>
            <ArrowRight size={14} />
          </button>

          <div className="flex items-center space-x-2">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 rounded-lg border border-dark-border text-dark-muted hover:text-primary transition-colors"
                title="View Source Code"
              >
                <GithubIcon size={14} />
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 rounded-lg border border-dark-border text-dark-muted hover:text-primary transition-colors"
                title="Open Live Demo"
              >
                <ExternalLink size={14} />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
