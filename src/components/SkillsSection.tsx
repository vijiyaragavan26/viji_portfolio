import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Code,
  Server,
  Terminal,
  Database,
  Wrench,
  Cpu,
  CheckCircle2,
  Clock,
  Sparkles,
  Layers,
} from 'lucide-react';
import { skillCategories } from '../data/skills';
import { usePortfolioData } from '../context/DataContext';
import { SkillProficiency } from '../types';

export const SkillsSection: React.FC = () => {
  const { skills, isAdmin, openEditor } = usePortfolioData();
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [proficiencyFilter, setProficiencyFilter] = useState<'All' | SkillProficiency>('All');

  const filteredSkills = skills.filter((item) => {
    const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
    const matchesProficiency =
      proficiencyFilter === 'All' || item.proficiency === proficiencyFilter;
    return matchesCategory && matchesProficiency;
  });

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Frontend':
        return <Code size={16} className="text-blue-400" />;
      case 'Backend':
        return <Server size={16} className="text-indigo-400" />;
      case 'Programming':
        return <Terminal size={16} className="text-emerald-400" />;
      case 'Databases':
        return <Database size={16} className="text-amber-400" />;
      case 'Tools':
        return <Wrench size={16} className="text-cyan-400" />;
      case 'AI & IoT':
        return <Cpu size={16} className="text-purple-400" />;
      default:
        return <Layers size={16} className="text-primary" />;
    }
  };

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-dark-surface/30 dark:bg-dark-surface/30 bg-slate-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-mono font-medium mb-3">
            <span>TECHNICAL CAPABILITIES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-dark-text tracking-tight mb-4">
            Skills &amp; Technologies
          </h2>
          <p className="text-base text-dark-muted dark:text-dark-muted text-slate-600 leading-relaxed">
            Technologies and tools I actively build with or am currently studying in depth. Categorized honestly without arbitrary or fabricated percentages.
          </p>
          {isAdmin && (
            <div className="mt-4 flex justify-center">
              <button
                onClick={() => openEditor('skills')}
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-primary/10 border border-primary/30 text-primary hover:bg-primary/20 text-xs font-mono font-bold transition-all"
              >
                <span>🛠️ Manage Skills ({skills.length})</span>
              </button>
            </div>
          )}
        </div>

        {/* Filter Controls */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-10 pb-6 border-b border-dark-border/60 dark:border-dark-border/60 border-slate-200">
          
          {/* Category Tabs */}
          <div className="flex flex-wrap gap-1.5 sm:gap-2 w-full sm:w-auto">
            {skillCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`min-h-[36px] px-3 sm:px-3.5 py-1.5 rounded-xl text-xs font-medium transition-all duration-200 flex items-center space-x-1.5 ${
                  selectedCategory === cat
                    ? 'bg-primary text-dark-bg font-semibold shadow-sm'
                    : 'bg-dark-surface dark:bg-dark-surface bg-white text-dark-muted dark:text-dark-muted text-slate-600 border border-dark-border dark:border-dark-border border-slate-200 hover:text-dark-text dark:hover:text-white'
                }`}
              >
                <span>{cat}</span>
              </button>
            ))}
          </div>

          {/* Proficiency Pill Toggle */}
          <div className="flex items-center space-x-1 bg-dark-bg/80 dark:bg-dark-bg/80 bg-slate-200/60 p-1 rounded-xl border border-dark-border/60 dark:border-dark-border/60 border-slate-300 w-full sm:w-auto justify-center overflow-x-auto no-scrollbar">
            {(['All', 'Comfortable With', 'Currently Learning'] as const).map((prof) => (
              <button
                key={prof}
                onClick={() => setProficiencyFilter(prof)}
                className={`min-h-[32px] px-2.5 sm:px-3 py-1 rounded-lg text-[11px] sm:text-xs font-medium transition-all whitespace-nowrap ${
                  proficiencyFilter === prof
                    ? 'bg-dark-surface dark:bg-dark-surface bg-white text-primary dark:text-primary shadow-sm font-semibold'
                    : 'text-dark-muted dark:text-dark-muted text-slate-600 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                {prof}
              </button>
            ))}
          </div>

        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredSkills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-20px' }}
              transition={{ duration: 0.35, delay: (index % 6) * 0.08 }}
              whileHover={{ y: -4, scale: 1.02, transition: { duration: 0.2 } }}
              className="group p-5 rounded-xl bg-dark-surface/80 dark:bg-dark-surface/80 bg-white border border-dark-border dark:border-dark-border border-slate-200 hover:border-primary/50 transition-colors shadow-sm hover:shadow-lg hover:shadow-primary/5 flex flex-col justify-between cursor-default"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-2">
                    <div className="p-1.5 rounded-lg bg-dark-bg dark:bg-dark-bg bg-slate-100 border border-dark-border dark:border-dark-border border-slate-200">
                      {getCategoryIcon(skill.category)}
                    </div>
                    <span className="text-xs font-mono text-dark-muted dark:text-dark-muted text-slate-500">
                      {skill.category}
                    </span>
                  </div>

                  <span
                    className={`inline-flex items-center text-[10px] font-mono px-2 py-0.5 rounded-full border ${
                      skill.proficiency === 'Comfortable With'
                        ? 'border-emerald-500/30 text-emerald-400 bg-emerald-500/10'
                        : 'border-rose-500/30 text-rose-400 bg-rose-500/10'
                    }`}
                  >
                    {skill.proficiency === 'Comfortable With' ? (
                      <>
                        <CheckCircle2 size={10} className="mr-1" />
                        Comfortable
                      </>
                    ) : (
                      <>
                        <Clock size={10} className="mr-1" />
                        Learning
                      </>
                    )}
                  </span>
                </div>

                <h3 className="font-bold text-base text-slate-900 dark:text-dark-text group-hover:text-primary transition-colors">
                  {skill.name}
                </h3>
              </div>

              {skill.description && (
                <p className="text-xs text-dark-muted dark:text-dark-muted text-slate-500 mt-2 line-clamp-2">
                  {skill.description}
                </p>
              )}
            </motion.div>
          ))}
        </div>

        {/* Note on Authenticity */}
        <div className="mt-12 text-center">
          <p className="text-xs font-mono text-dark-muted dark:text-dark-muted text-slate-500">
            &bull; Skills are curated based on genuine project application, ongoing coursework, and verifiable certifications.
          </p>
        </div>

      </div>
    </section>
  );
};
