import React from 'react';
import { motion } from 'framer-motion';
import {
  Compass,
  ArrowRight,
  CheckCircle2,
  Target,
  Sparkles,
  TrendingUp,
} from 'lucide-react';
import { usePortfolioData } from '../context/DataContext';

export const LearningJourneySection: React.FC = () => {
  const { learning, isAdmin, openEditor } = usePortfolioData();
  return (
    <section id="learning" className="py-24 relative overflow-hidden bg-dark-surface/30 dark:bg-dark-surface/30 bg-slate-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-mono font-medium mb-3">
            <span>CONTINUOUS GROWTH</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-dark-text tracking-tight mb-4">
            Learning Journey &amp; Milestones
          </h2>
          <p className="text-base text-dark-muted dark:text-dark-muted text-slate-600 leading-relaxed">
            Transparent view into what I am currently studying, what milestones I recently completed, and my immediate engineering targets.
          </p>
          {isAdmin && (
            <div className="mt-4 flex justify-center">
              <button
                onClick={() => openEditor('learning')}
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-primary/10 border border-primary/30 text-primary hover:bg-primary/20 text-xs font-mono font-bold transition-all"
              >
                <span>🛠️ Manage Learning Journey ({learning.length})</span>
              </button>
            </div>
          )}
        </div>

        {/* Learning Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {learning.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.5, delay: idx * 0.1, ease: 'easeOut' }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="rounded-2xl bg-dark-surface/85 dark:bg-dark-surface/85 bg-white border border-dark-border dark:border-dark-border border-slate-200 p-6 flex flex-col justify-between hover:border-primary/50 transition-colors shadow-sm hover:shadow-xl hover:shadow-primary/5 cursor-default"
            >
              <div>
                {/* Topic header */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-primary font-semibold">
                    {item.category}
                  </span>
                  {item.progressLevel !== undefined && (
                    <span className="text-xs font-mono text-dark-muted dark:text-dark-muted text-slate-500">
                      Phase: {item.progressLevel}%
                    </span>
                  )}
                </div>

                <h3 className="text-xl font-bold text-slate-900 dark:text-dark-text mb-4">
                  {item.topic}
                </h3>

                {/* Animated Progress Bar */}
                {item.progressLevel !== undefined && (
                  <div className="w-full bg-dark-bg dark:bg-dark-bg bg-slate-200 h-2 rounded-full overflow-hidden mb-6 border border-dark-border/50">
                    <motion.div
                      className="bg-gradient-to-r from-red-600 via-rose-500 to-red-500 h-full rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${item.progressLevel}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, ease: 'easeOut', delay: idx * 0.15 }}
                    />
                  </div>
                )}

                {/* Current Status */}
                <div className="mb-4">
                  <div className="text-[11px] font-mono uppercase tracking-wider text-dark-muted mb-1 flex items-center gap-1.5">
                    <TrendingUp size={12} className="text-primary" />
                    <span>Current Focus:</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-800 dark:text-slate-200 leading-relaxed">
                    {item.currentStatus}
                  </p>
                </div>

                {/* Latest Milestone */}
                <div className="mb-4 p-3 rounded-xl bg-dark-bg/50 dark:bg-dark-bg/50 bg-slate-100/70 border border-dark-border/60 dark:border-dark-border/60 border-slate-200">
                  <div className="text-[11px] font-mono text-emerald-400 font-semibold mb-1 flex items-center space-x-1.5">
                    <CheckCircle2 size={13} />
                    <span>Latest Milestone:</span>
                  </div>
                  <p className="text-xs text-dark-muted dark:text-dark-muted text-slate-600 leading-relaxed">
                    {item.latestMilestone}
                  </p>
                </div>

                {/* Next Goal */}
                <div className="mb-6 p-3 rounded-xl bg-dark-bg/50 dark:bg-dark-bg/50 bg-slate-100/70 border border-dark-border/60 dark:border-dark-border/60 border-slate-200">
                  <div className="text-[11px] font-mono text-secondary font-semibold mb-1 flex items-center space-x-1.5">
                    <Target size={13} />
                    <span>Next Objective:</span>
                  </div>
                  <p className="text-xs text-dark-muted dark:text-dark-muted text-slate-600 leading-relaxed">
                    {item.nextGoal}
                  </p>
                </div>
              </div>

              {/* Tags */}
              <div className="pt-4 border-t border-dark-border/60 dark:border-dark-border/60 border-slate-100 flex flex-wrap gap-1.5">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] font-mono px-2 py-0.5 rounded bg-dark-bg/70 dark:bg-dark-bg/70 bg-slate-100 border border-dark-border/60 text-dark-muted"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Note on genuine progress */}
        <div className="mt-12 text-center">
          <p className="text-xs font-mono text-dark-muted dark:text-dark-muted text-slate-500">
            &bull; Goals, active milestones, and learning tracks reflect genuine weekly computer science and engineering practice.
          </p>
        </div>

      </div>
    </section>
  );
};
