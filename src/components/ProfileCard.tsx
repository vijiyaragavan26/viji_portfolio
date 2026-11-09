import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Sparkles, Cpu } from 'lucide-react';
import { usePortfolioData } from '../context/DataContext';

interface ProfileCardProps {
  className?: string;
}

export const ProfileCard: React.FC<ProfileCardProps> = ({ className = '' }) => {
  const { profile } = usePortfolioData();

  return (
    <div className={`relative w-full max-w-md mx-auto ${className}`}>
      {/* Outer decorative halo */}
      <div className="absolute -inset-2 bg-gradient-to-r from-red-500/30 via-rose-500/30 to-red-600/30 rounded-3xl blur-2xl opacity-75 animate-glow-pulse" />

      {/* Main Card */}
      <div className="relative rounded-2xl bg-dark-surface/90 dark:bg-dark-surface/90 bg-white border border-dark-border dark:border-dark-border border-slate-200 p-5 sm:p-7 shadow-2xl backdrop-blur-xl">
        
        {/* Header of card with traffic dots */}
        <div className="flex items-center justify-between border-b border-dark-border/80 dark:border-dark-border/80 border-slate-100 pb-4 sm:pb-5 mb-5 sm:mb-6">
          <div className="flex items-center space-x-2">
            <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
            <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block" />
            <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
          </div>
          <span className="text-[10px] font-mono text-dark-muted">viji-profile.card</span>
        </div>

        {/* Center Profile Branding Insignia */}
        <div className="flex flex-col items-center text-center my-2 sm:my-3">
          <div className="relative w-44 h-44 sm:w-52 sm:h-52 rounded-full p-1.5 bg-gradient-to-br from-red-500 via-rose-400 to-red-600 shadow-2xl mb-4 group transition-transform duration-300 hover:scale-[1.03]">
            <img
              src="/avatar.png?v=4"
              alt={profile.name}
              className="w-full h-full object-cover rounded-full border-2 border-dark-surface dark:border-dark-surface shadow-inner"
            />
            <div className="absolute -bottom-2.5 left-1/2 -translate-x-1/2 px-3.5 sm:px-4 py-1 rounded-full bg-dark-card border border-primary/50 text-[10px] sm:text-[11px] font-mono text-primary font-bold shadow-lg whitespace-nowrap">
              IoT &bull; CSE
            </div>
          </div>

          <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mt-1">
            {profile.name}
          </h3>
          <p className="text-xs sm:text-sm font-semibold text-primary mt-1">
            {profile.roles?.[0] || 'B.E - CSE Student'}
          </p>
          <p className="text-xs text-dark-muted dark:text-dark-muted text-slate-500 mt-0.5 max-w-xs">
            {profile.institution}
          </p>
          <p className="text-[11px] font-mono text-primary/90 mt-0.5">
            {profile.location}
          </p>
        </div>

        {/* Micro tech pills */}
        <div className="grid grid-cols-3 gap-2 mt-6 pt-5 border-t border-dark-border/70 dark:border-dark-border/70 border-slate-100">
          <div className="flex flex-col items-center p-2.5 rounded-xl bg-dark-card/60 dark:bg-dark-card/60 bg-slate-50 border border-dark-border/60 dark:border-dark-border/60 border-slate-200">
            <Code2 size={16} className="text-primary mb-1" />
            <span className="text-[11px] font-medium text-slate-700 dark:text-slate-300">Web Dev</span>
            <span className="text-[9px] text-dark-muted">React &bull; TS</span>
          </div>

          <div className="flex flex-col items-center p-2.5 rounded-xl bg-dark-card/60 dark:bg-dark-card/60 bg-slate-50 border border-dark-border/60 dark:border-dark-border/60 border-slate-200">
            <Sparkles size={16} className="text-secondary mb-1" />
            <span className="text-[11px] font-medium text-slate-700 dark:text-slate-300">AI & GenAI</span>
            <span className="text-[9px] text-dark-muted">Python &bull; Tools</span>
          </div>

          <div className="flex flex-col items-center p-2.5 rounded-xl bg-dark-card/60 dark:bg-dark-card/60 bg-slate-50 border border-dark-border/60 dark:border-dark-border/60 border-slate-200">
            <Cpu size={16} className="text-emerald-400 mb-1" />
            <span className="text-[11px] font-medium text-slate-700 dark:text-slate-300">IoT & Devices</span>
            <span className="text-[9px] text-dark-muted">Sensors &bull; C</span>
          </div>
        </div>

      </div>
    </div>
  );
};
