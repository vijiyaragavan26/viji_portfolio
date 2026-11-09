import React from 'react';
import {
  GraduationCap,
  Calendar,
  MapPin,
  BookOpen,
  Award,
  Sparkles,
  CheckCircle2,
} from 'lucide-react';
import { usePortfolioData } from '../context/DataContext';

export const EducationSection: React.FC = () => {
  const { education, isAdmin, openEditor } = usePortfolioData();
  return (
    <section id="education" className="py-24 relative overflow-hidden bg-dark-surface/30 dark:bg-dark-surface/30 bg-slate-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-mono font-medium mb-3">
            <span>ACADEMIC BACKGROUND</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-dark-text tracking-tight mb-4">
            Education &amp; Training
          </h2>
          <p className="text-base text-dark-muted dark:text-dark-muted text-slate-600 leading-relaxed">
            Formal engineering education combining core computer science fundamentals with specialized Internet of Things and smart connected architectures.
          </p>
          {isAdmin && (
            <div className="mt-4 flex justify-center">
              <button
                onClick={() => openEditor('education')}
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-primary/10 border border-primary/30 text-primary hover:bg-primary/20 text-xs font-mono font-bold transition-all"
              >
                <span>🛠️ Manage Education ({education.length})</span>
              </button>
            </div>
          )}
        </div>

        {/* Education Timeline Card */}
        <div className="max-w-4xl mx-auto space-y-8">
          {education.map((edu) => (
            <div
              key={edu.id}
              className="relative rounded-2xl bg-dark-surface/90 dark:bg-dark-surface/90 bg-white border border-dark-border dark:border-dark-border border-slate-200 p-7 sm:p-10 shadow-xl overflow-hidden"
            >
              {/* Decorative accent top bar */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-primary via-secondary to-blue-500" />

              {/* Title & Institute Header */}
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                <div>
                  <div className="flex items-center space-x-3 mb-2">
                    <div className="p-2.5 rounded-xl bg-primary/10 border border-primary/20 text-primary">
                      <GraduationCap size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-dark-text">
                        {edu.degree}
                      </h3>
                      <h4 className="text-base font-semibold text-primary">
                        {edu.department}
                      </h4>
                    </div>
                  </div>
                  <p className="text-sm font-medium text-slate-700 dark:text-slate-300 mt-1">
                    {edu.institution}
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row md:flex-col items-start md:items-end gap-2 text-xs font-mono text-dark-muted dark:text-dark-muted text-slate-500">
                  <span className="inline-flex items-center px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mr-2 animate-pulse" />
                    {edu.period}
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <MapPin size={13} className="text-secondary" />
                    <span>{edu.location}</span>
                  </span>
                </div>
              </div>

              {/* Description */}
              <p className="text-sm text-dark-muted dark:text-dark-muted text-slate-600 leading-relaxed mb-8">
                {edu.description}
              </p>

              {/* Relevant Coursework */}
              <div className="mb-8">
                <h5 className="text-xs font-mono uppercase tracking-wider text-slate-900 dark:text-dark-text font-bold mb-3 flex items-center space-x-2">
                  <BookOpen size={14} className="text-primary" />
                  <span>Key Coursework &amp; Subject Modules</span>
                </h5>
                <div className="flex flex-wrap gap-2">
                  {edu.coursework.map((course) => (
                    <span
                      key={course}
                      className="text-xs px-3 py-1.5 rounded-lg bg-dark-bg/70 dark:bg-dark-bg/70 bg-slate-100 border border-dark-border/60 dark:border-dark-border/60 border-slate-200 text-slate-700 dark:text-slate-300 font-medium"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>

              {/* Workshops & Seminars */}
              <div className="mb-8">
                <h5 className="text-xs font-mono uppercase tracking-wider text-slate-900 dark:text-dark-text font-bold mb-3 flex items-center space-x-2">
                  <Sparkles size={14} className="text-secondary" />
                  <span>Workshops &amp; Seminars Attended</span>
                </h5>
                <ul className="space-y-2">
                  {edu.workshopsAndSeminars.map((workshop, i) => (
                    <li
                      key={i}
                      className="flex items-start space-x-2.5 text-xs sm:text-sm text-dark-muted dark:text-dark-muted text-slate-600"
                    >
                      <CheckCircle2 size={14} className="text-secondary mt-0.5 shrink-0" />
                      <span>{workshop}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Verified Highlights */}
              <div className="p-4 rounded-xl bg-dark-bg/50 dark:bg-dark-bg/50 bg-slate-50 border border-dark-border/60 dark:border-dark-border/60 border-slate-200">
                <h5 className="text-xs font-mono uppercase tracking-wider text-primary font-bold mb-2 flex items-center space-x-2">
                  <Award size={14} />
                  <span>Academic Focus &amp; Objective</span>
                </h5>
                <ul className="space-y-1.5">
                  {edu.verifiedHighlights.map((hl, i) => (
                    <li
                      key={i}
                      className="text-xs text-dark-muted dark:text-dark-muted text-slate-600 flex items-start space-x-2"
                    >
                      <span className="text-primary font-bold">&bull;</span>
                      <span>{hl}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
