import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Code,
  Sparkles,
  Cpu,
  ChevronDown,
  ChevronUp,
  GraduationCap,
  Target,
  Users,
  Compass,
} from 'lucide-react';
import { aboutFeatures } from '../data/profile';
import { usePortfolioData } from '../context/DataContext';
import { ProfileCard } from './ProfileCard';

export const AboutSection: React.FC = () => {
  const { profile } = usePortfolioData();
  const [isExpanded, setIsExpanded] = useState(false);

  const getFeatureIcon = (iconName: string) => {
    switch (iconName) {
      case 'code':
        return <Code className="w-6 h-6 text-red-500" />;
      case 'sparkles':
        return <Sparkles className="w-6 h-6 text-rose-500" />;
      case 'cpu':
        return <Cpu className="w-6 h-6 text-emerald-400" />;
      default:
        return <Code className="w-6 h-6 text-red-500" />;
    }
  };

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background ambient element */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Spotlight: Profile Card + About Me Narrative */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-16">
          {/* Left Column: Dedicated Profile Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="lg:col-span-5 flex justify-center"
          >
            <ProfileCard />
          </motion.div>

          {/* Right Column: About Narrative & Metrics */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="lg:col-span-7 flex flex-col justify-center text-left"
          >
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-mono font-medium mb-3 w-fit">
              <span>ABOUT ME</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-dark-text tracking-tight mb-4">
              {profile.aboutHeading}
            </h2>
            <p className="text-base sm:text-lg text-dark-muted dark:text-dark-muted text-slate-600 leading-relaxed mb-6">
              {profile.aboutText}
            </p>

            {/* Quick Metrics / Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              <div className="p-3.5 rounded-xl bg-dark-surface/60 dark:bg-dark-surface/60 bg-slate-50 border border-dark-border dark:border-dark-border border-slate-200">
                <div className="text-xl font-extrabold text-primary">8.70</div>
                <div className="text-xs text-dark-muted">CGPA / 10.0</div>
              </div>
              <div className="p-3.5 rounded-xl bg-dark-surface/60 dark:bg-dark-surface/60 bg-slate-50 border border-dark-border dark:border-dark-border border-slate-200">
                <div className="text-xl font-extrabold text-secondary">2nd Year</div>
                <div className="text-xs text-dark-muted">B.E CSE (IoT)</div>
              </div>
              <div className="p-3.5 rounded-xl bg-dark-surface/60 dark:bg-dark-surface/60 bg-slate-50 border border-dark-border dark:border-dark-border border-slate-200 col-span-2 sm:col-span-1">
                <div className="text-xl font-extrabold text-emerald-400">10+</div>
                <div className="text-xs text-dark-muted">Projects Built</div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* 3 Core Pillar Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {aboutFeatures.map((feature, idx) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: idx * 0.15, ease: 'easeOut' }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="group relative rounded-2xl bg-dark-surface/70 dark:bg-dark-surface/70 bg-white border border-dark-border dark:border-dark-border border-slate-200 p-6 sm:p-8 hover:border-primary/50 transition-colors shadow-sm hover:shadow-2xl hover:shadow-primary/10 flex flex-col justify-between cursor-default"
            >
              <div>
                <div
                  className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.gradient} border ${feature.borderColor} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-sm`}
                >
                  {getFeatureIcon(feature.icon)}
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-dark-text mb-3">
                  {feature.title}
                </h3>
                <p className="text-sm text-dark-muted dark:text-dark-muted text-slate-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-dark-border/50 dark:border-dark-border/50 border-slate-100 flex items-center justify-between text-xs font-mono text-dark-muted">
                <span>Pillar 0{idx + 1}</span>
                <span className="text-primary font-semibold">&bull; Active Track</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Expandable "More About Me" Card */}
        <div className="rounded-2xl bg-dark-surface/50 dark:bg-dark-surface/50 bg-slate-50 border border-dark-border dark:border-dark-border border-slate-200 p-6 sm:p-8 transition-all">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="w-full flex items-center justify-between text-left focus:outline-none group"
            aria-expanded={isExpanded}
          >
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary group-hover:bg-primary/20 transition-colors">
                <Compass size={20} />
              </div>
              <div>
                <h4 className="text-base sm:text-lg font-bold text-slate-900 dark:text-dark-text group-hover:text-primary transition-colors">
                  More About Me &amp; Engineering Philosophy
                </h4>
                <p className="text-xs text-dark-muted dark:text-dark-muted text-slate-500">
                  {isExpanded ? 'Click to collapse insights' : 'Click to learn about my approach, problem solving, and goals'}
                </p>
              </div>
            </div>

            <div className="p-2 rounded-lg border border-dark-border dark:border-dark-border border-slate-200 text-dark-muted group-hover:text-primary transition-colors">
              {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
            </div>
          </button>

          {isExpanded && (
            <div className="mt-8 pt-6 border-t border-dark-border/70 dark:border-dark-border/70 border-slate-200 grid grid-cols-1 md:grid-cols-2 gap-6 animate-in fade-in duration-300">
              
              <div className="p-5 rounded-xl bg-dark-bg/60 dark:bg-dark-bg/60 bg-white border border-dark-border/60 dark:border-dark-border/60 border-slate-200">
                <div className="flex items-center space-x-2 text-primary font-semibold text-sm mb-2">
                  <Target size={16} />
                  <span>Engineering Mindset</span>
                </div>
                <p className="text-xs sm:text-sm text-dark-muted dark:text-dark-muted text-slate-600 leading-relaxed">
                  {profile.expandableAbout.engineeringMindset}
                </p>
              </div>

              <div className="p-5 rounded-xl bg-dark-bg/60 dark:bg-dark-bg/60 bg-white border border-dark-border/60 dark:border-dark-border/60 border-slate-200">
                <div className="flex items-center space-x-2 text-secondary font-semibold text-sm mb-2">
                  <GraduationCap size={16} />
                  <span>Foundational Problem Solving</span>
                </div>
                <p className="text-xs sm:text-sm text-dark-muted dark:text-dark-muted text-slate-600 leading-relaxed">
                  {profile.expandableAbout.problemSolving}
                </p>
              </div>

              <div className="p-5 rounded-xl bg-dark-bg/60 dark:bg-dark-bg/60 bg-white border border-dark-border/60 dark:border-dark-border/60 border-slate-200">
                <div className="flex items-center space-x-2 text-emerald-400 font-semibold text-sm mb-2">
                  <Users size={16} />
                  <span>Collaboration & Community</span>
                </div>
                <p className="text-xs sm:text-sm text-dark-muted dark:text-dark-muted text-slate-600 leading-relaxed">
                  {profile.expandableAbout.collaboration}
                </p>
              </div>

              <div className="p-5 rounded-xl bg-dark-bg/60 dark:bg-dark-bg/60 bg-white border border-dark-border/60 dark:border-dark-border/60 border-slate-200">
                <div className="flex items-center space-x-2 text-red-500 font-semibold text-sm mb-2">
                  <Sparkles size={16} />
                  <span>Current Aspirations</span>
                </div>
                <p className="text-xs sm:text-sm text-dark-muted dark:text-dark-muted text-slate-600 leading-relaxed">
                  {profile.expandableAbout.aspirations}
                </p>
              </div>

            </div>
          )}
        </div>

      </div>
    </section>
  );
};
