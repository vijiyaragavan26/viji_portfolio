import React, { useEffect } from 'react';
import { X, ExternalLink, CheckCircle, Clock, Lightbulb, Tag } from 'lucide-react';
import { GithubIcon } from './SocialIcons';
import { ProjectItem } from '../types';

interface ProjectDetailsModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export const ProjectDetailsModal: React.FC<ProjectDetailsModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  const getStatusBadge = (status: ProjectItem['status']) => {
    switch (status) {
      case 'Completed':
        return (
          <span className="inline-flex items-center text-xs px-2.5 py-1 rounded-full border border-emerald-500/30 text-emerald-400 bg-emerald-500/10 font-mono">
            <CheckCircle size={12} className="mr-1.5" />
            Completed
          </span>
        );
      case 'In Progress':
        return (
          <span className="inline-flex items-center text-xs px-2.5 py-1 rounded-full border border-blue-500/30 text-blue-400 bg-blue-500/10 font-mono">
            <Clock size={12} className="mr-1.5" />
            In Progress
          </span>
        );
      case 'Concept':
      default:
        return (
          <span className="inline-flex items-center text-xs px-2.5 py-1 rounded-full border border-amber-500/30 text-amber-400 bg-amber-500/10 font-mono">
            <Lightbulb size={12} className="mr-1.5" />
            Concept Stage
          </span>
        );
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div
        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl bg-dark-surface dark:bg-dark-surface bg-white border border-dark-border dark:border-dark-border border-slate-200 shadow-2xl p-6 sm:p-8 animate-in zoom-in-95 duration-200 text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl border border-dark-border dark:border-dark-border border-slate-200 bg-dark-bg/60 dark:bg-dark-bg/60 bg-slate-100 text-dark-muted hover:text-dark-text dark:hover:text-white transition-colors"
          aria-label="Close modal"
        >
          <X size={18} />
        </button>

        {/* Modal Header */}
        <div className="flex flex-wrap items-center gap-2 mb-3">
          <span className="text-xs font-mono text-primary font-medium px-2 py-0.5 rounded bg-primary/10">
            {project.categoryLabel}
          </span>
          {getStatusBadge(project.status)}
        </div>

        <h3 id="modal-title" className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-dark-text mb-3">
          {project.title}
        </h3>

        {/* Overview */}
        <div className="mb-6 p-4 rounded-xl bg-dark-bg/50 dark:bg-dark-bg/50 bg-slate-50 border border-dark-border/60 dark:border-dark-border/60 border-slate-200 text-sm sm:text-base text-dark-muted dark:text-dark-muted text-slate-600 leading-relaxed">
          {project.fullDescription}
        </div>

        {/* Planned / Implemented Features */}
        <div className="mb-6">
          <h4 className="text-sm font-mono uppercase tracking-wider text-slate-900 dark:text-dark-text font-bold mb-3 flex items-center gap-2">
            <span>Planned &amp; Core Architecture Features</span>
          </h4>
          <ul className="space-y-2.5">
            {project.plannedFeatures.map((feat, i) => (
              <li
                key={i}
                className="flex items-start space-x-2.5 text-xs sm:text-sm text-dark-muted dark:text-dark-muted text-slate-600"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                <span>{feat}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Tech Stack */}
        <div className="mb-8">
          <h4 className="text-xs font-mono uppercase tracking-wider text-dark-muted font-semibold mb-2.5">
            Technologies &amp; Architecture
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="text-xs px-2.5 py-1 rounded-lg bg-dark-card dark:bg-dark-card bg-slate-100 border border-dark-border dark:border-dark-border border-slate-200 text-slate-700 dark:text-slate-300 font-mono"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Links or Status Notice */}
        <div className="pt-5 border-t border-dark-border dark:border-dark-border border-slate-200 flex flex-wrap items-center justify-between gap-3">
          <div className="text-xs text-dark-muted dark:text-dark-muted text-slate-500 font-mono">
            {project.status === 'Completed'
              ? 'Status: Verified implementation code'
              : project.status === 'In Progress'
              ? 'Status: Active repository development'
              : 'Status: Planned engineering concept'}
          </div>

          <div className="flex items-center space-x-3">
            {project.githubUrl ? (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-dark-bg border border-dark-border text-primary hover:border-primary transition-colors"
              >
                <GithubIcon size={14} />
                <span>Source Code</span>
              </a>
            ) : (
              <span className="text-[11px] font-mono text-dark-muted italic">
                Repo link provided upon publication
              </span>
            )}

            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-primary text-dark-bg hover:bg-primary-hover transition-colors"
              >
                <ExternalLink size={14} />
                <span>Live Demo</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
