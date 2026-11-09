import React from 'react';
import { motion } from 'framer-motion';
import {
  FileText,
  Printer,
  Download,
  GraduationCap,
  Layers,
  Award,
  CheckCircle,
  ExternalLink,
} from 'lucide-react';
import { usePortfolioData } from '../context/DataContext';

interface ResumeSectionProps {
  onOpenResumeModal: () => void;
}

export const ResumeSection: React.FC<ResumeSectionProps> = ({ onOpenResumeModal }) => {
  const { profile, projects, certificates } = usePortfolioData();
  return (
    <section id="resume" className="py-24 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-mono font-medium mb-3">
            <span>CURRICULUM VITAE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-dark-text tracking-tight mb-4">
            CV &amp; Credentials
          </h2>
          <p className="text-base text-dark-muted dark:text-dark-muted text-slate-600 leading-relaxed">
            Consolidated overview of my academic foundation, software projects, skill profile, and 13 technical credentials.
          </p>
        </div>

        {/* Resume Preview Banner Card */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="max-w-4xl mx-auto rounded-3xl bg-dark-surface/90 dark:bg-dark-surface/90 bg-white border border-dark-border dark:border-dark-border border-slate-200 p-8 sm:p-12 shadow-2xl relative overflow-hidden"
        >
          
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-8 border-b border-dark-border/80 dark:border-dark-border/80 border-slate-200">
            <div>
              <div className="inline-flex items-center space-x-2 text-xs font-mono text-primary font-semibold mb-2">
                <FileText size={16} />
                <span>OFFICIAL PROFILE DOCUMENT</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-dark-text">
                {profile.name}
              </h3>
              <p className="text-sm font-medium text-dark-muted dark:text-dark-muted text-slate-600 mt-1">
                {profile.headline}
              </p>
              <p className="text-xs font-mono text-slate-500 mt-0.5">
                {profile.institution} &bull; {profile.location}
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center">
              <button
                onClick={onOpenResumeModal}
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl text-xs sm:text-sm font-semibold bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-500 hover:to-rose-500 text-white shadow-md shadow-red-500/25 flex items-center justify-center space-x-2 transition-all cursor-pointer"
              >
                <FileText size={16} />
                <span>View Full CV</span>
              </button>
            </div>
          </div>

          {/* Quick Snapshot Metrics */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 py-8 border-b border-dark-border/80 dark:border-dark-border/80 border-slate-200">
            <div className="flex items-start space-x-3">
              <div className="p-2.5 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400">
                <GraduationCap size={20} />
              </div>
              <div>
                <span className="text-xs font-mono text-dark-muted">Degree Pursuit</span>
                <h4 className="text-sm font-bold text-slate-900 dark:text-dark-text mt-0.5">
                  B.E. CSE (IoT)
                </h4>
                <p className="text-[11px] text-dark-muted">In Progress</p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <div className="p-2.5 rounded-xl bg-rose-500/10 border border-rose-500/20 text-rose-400">
                <Layers size={20} />
              </div>
              <div>
                <span className="text-xs font-mono text-dark-muted">Selected Projects</span>
                <h4 className="text-sm font-bold text-slate-900 dark:text-dark-text mt-0.5">
                  {projects.length} Core Projects
                </h4>
                <p className="text-[11px] text-dark-muted">Full-Stack, Python, AI</p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <div className="p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
                <Award size={20} />
              </div>
              <div>
                <span className="text-xs font-mono text-dark-muted">Credentials</span>
                <h4 className="text-sm font-bold text-slate-900 dark:text-dark-text mt-0.5">
                  {certificates.length} Verified Entries
                </h4>
                <p className="text-[11px] text-dark-muted">Official Credentials</p>
              </div>
            </div>
          </div>

          {/* Notice on Resume File Configuration */}
          <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-dark-muted dark:text-dark-muted text-slate-500 gap-3">
            <span>
              &bull; Printable format renders cleanly on standard A4 paper without dark theme artifacts.
            </span>
            <button
              onClick={onOpenResumeModal}
              className="text-primary hover:underline font-medium font-mono text-xs"
            >
              Preview Document &rarr;
            </button>
          </div>

        </motion.div>

      </div>
    </section>
  );
};
