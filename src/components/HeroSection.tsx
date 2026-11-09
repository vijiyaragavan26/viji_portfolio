import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowDown,
  Mail,
  FileText,
  Sparkles,
  Cpu,
  Code2,
  Laptop,
  User,
} from 'lucide-react';
import { GithubIcon, LinkedinIcon, WhatsappIcon } from './SocialIcons';
import { usePortfolioData } from '../context/DataContext';
import { TechHeroVisual } from './TechHeroVisual';

interface HeroSectionProps {
  onOpenResumeModal: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenResumeModal }) => {
  const { profile } = usePortfolioData();
  const [roleIndex, setRoleIndex] = useState(0);
  const [fadeRole, setFadeRole] = useState(true);
  const [heroVisualMode, setHeroVisualMode] = useState<'3d' | 'profile'>('3d');

  useEffect(() => {
    if (!profile.roles || profile.roles.length === 0) return;
    const interval = setInterval(() => {
      setFadeRole(false);
      setTimeout(() => {
        setRoleIndex((prev) => (prev + 1) % profile.roles.length);
        setFadeRole(true);
      }, 300);
    }, 3200);

    return () => clearInterval(interval);
  }, [profile.roles]);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      const navHeight = 80;
      const targetPos = el.getBoundingClientRect().top + window.pageYOffset - navHeight;
      window.scrollTo({
        top: targetPos,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen pt-28 pb-16 flex items-center justify-center overflow-hidden"
    >
      {/* Ambient background animated blobs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-primary/15 rounded-full blur-[140px] pointer-events-none animate-blob" />
      <div className="absolute top-1/3 right-10 w-[420px] h-[420px] bg-secondary/15 rounded-full blur-[120px] pointer-events-none animate-blob [animation-delay:4s]" />
      <div className="absolute bottom-20 left-10 w-[350px] h-[350px] bg-red-600/10 rounded-full blur-[110px] pointer-events-none animate-blob [animation-delay:7s]" />
      
      {/* Subtle grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(currentColor 1px, transparent 1px)`,
          backgroundSize: '24px 24px',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text & Hero Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="lg:col-span-7 flex flex-col items-start text-left"
          >
            
            {/* Availability Badge */}
            {profile.availability.status && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="inline-flex items-center space-x-2.5 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 text-xs font-medium mb-6 backdrop-blur-sm shadow-sm"
              >
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping inline-block" />
                <span className="text-emerald-500 dark:text-emerald-400 font-medium">
                  {profile.availability.label}
                </span>
              </motion.div>
            )}

            {/* Greeting */}
            <h2 className="text-lg sm:text-xl font-medium text-primary tracking-wide mb-2 flex items-center gap-2">
              <span className="inline-block animate-waving-hand">👋</span>
              <span>{profile.greeting}</span>
            </h2>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-dark-text leading-[1.12] mb-4">
              Building the Future with{' '}
              <span className="bg-gradient-to-r from-red-500 via-rose-400 to-red-600 bg-clip-text text-transparent">
                Code, AI & IoT.
              </span>
            </h1>

            {/* Rotating Dynamic Subtitle */}
            <div className="h-9 mb-6 flex items-center">
              <span className="text-sm sm:text-base font-mono text-dark-muted dark:text-dark-muted text-slate-500 mr-2">
                &gt;
              </span>
              <span
                className={`text-lg sm:text-xl font-semibold text-secondary transition-all duration-300 transform ${
                  fadeRole ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'
                }`}
              >
                {profile.roles?.[roleIndex] || profile.roles?.[0] || 'Software Engineer'}
              </span>
            </div>

            {/* Description */}
            <p className="text-base sm:text-lg text-dark-muted dark:text-dark-muted text-slate-600 max-w-2xl leading-relaxed mb-8">
              {profile.heroDescription}
            </p>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap gap-4 items-center mb-10 w-full sm:w-auto">
              <motion.a
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.96 }}
                href="#projects"
                onClick={(e) => scrollToSection(e, 'projects')}
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl font-semibold text-sm bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-500 hover:to-rose-500 text-white shadow-lg shadow-red-500/25 hover:shadow-red-500/40 transition-all duration-200 text-center cursor-pointer"
              >
                Explore My Projects
              </motion.a>

              <motion.button
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.96 }}
                type="button"
                onClick={onOpenResumeModal}
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl font-semibold text-sm border border-primary/30 dark:border-primary/30 border-slate-300 bg-dark-surface/60 dark:bg-dark-surface/60 bg-white text-dark-text dark:text-dark-text text-slate-800 hover:border-primary hover:bg-primary/10 transition-all duration-200 flex items-center justify-center space-x-2 group cursor-pointer shadow-sm"
              >
                <FileText size={16} className="text-primary group-hover:scale-110 transition-transform" />
                <span>View CV</span>
              </motion.button>

              <motion.a
                whileHover={{ scale: 1.04, x: 2 }}
                whileTap={{ scale: 0.96 }}
                href="#contact"
                onClick={(e) => scrollToSection(e, 'contact')}
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl font-semibold text-sm text-dark-muted dark:text-dark-muted text-slate-600 hover:text-dark-text dark:hover:text-white transition-colors text-center cursor-pointer"
              >
                Let&apos;s Connect &rarr;
              </motion.a>
            </div>

            {/* Social Links (only rendered if URL configured) */}
            <div className="flex items-center space-x-4 pt-2 border-t border-dark-border/60 dark:border-dark-border/60 border-slate-200/80 w-full">
              <span className="text-xs font-mono uppercase tracking-wider text-dark-muted dark:text-dark-muted text-slate-400">
                Connect:
              </span>
              <div className="flex items-center space-x-3">
                {profile.social.github && (
                  <motion.a
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    href={profile.social.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl border border-dark-border dark:border-dark-border border-slate-200 bg-dark-surface/40 dark:bg-dark-surface/40 bg-slate-50 text-dark-muted dark:text-dark-muted text-slate-600 hover:text-primary hover:border-primary/40 transition-all duration-200"
                    aria-label="GitHub Profile"
                  >
                    <GithubIcon size={18} />
                  </motion.a>
                )}
                {profile.social.linkedin && (
                  <motion.a
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    href={profile.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl border border-dark-border dark:border-dark-border border-slate-200 bg-dark-surface/40 dark:bg-dark-surface/40 bg-slate-50 text-dark-muted dark:text-dark-muted text-slate-600 hover:text-primary hover:border-primary/40 transition-all duration-200"
                    aria-label="LinkedIn Profile"
                  >
                    <LinkedinIcon size={18} />
                  </motion.a>
                )}
                {profile.social.email && (
                  <motion.a
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    href={`mailto:${profile.social.email}`}
                    className="p-2.5 rounded-xl border border-dark-border dark:border-dark-border border-slate-200 bg-dark-surface/40 dark:bg-dark-surface/40 bg-slate-50 text-dark-muted dark:text-dark-muted text-slate-600 hover:text-primary hover:border-primary/40 transition-all duration-200"
                    aria-label="Send Email"
                  >
                    <Mail size={18} />
                  </motion.a>
                )}
                {profile.social.whatsapp && (
                  <motion.a
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    href={`https://wa.me/${profile.social.whatsapp.replace(/[^0-9]/g, '')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl border border-dark-border dark:border-dark-border border-slate-200 bg-dark-surface/40 dark:bg-dark-surface/40 bg-slate-50 text-dark-muted dark:text-dark-muted text-slate-600 hover:text-emerald-400 hover:border-emerald-400/40 transition-all duration-200"
                    aria-label="WhatsApp"
                  >
                    <WhatsappIcon size={18} />
                  </motion.a>
                )}
              </div>
            </div>

          </motion.div>

          {/* Right Column: Visual Brand & 3D Tech Component */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            className="lg:col-span-5 flex flex-col items-center justify-center"
          >
            {/* View Mode Switcher Pill */}
            <div className="flex items-center space-x-1.5 p-1 rounded-full bg-dark-surface/90 dark:bg-dark-surface/90 bg-slate-100 border border-dark-border dark:border-dark-border border-slate-300 shadow-md backdrop-blur-md mb-4 z-30">
              <button
                type="button"
                onClick={() => setHeroVisualMode('3d')}
                className={`px-3.5 py-1.5 rounded-full text-xs font-mono font-medium transition-all duration-200 flex items-center space-x-1.5 cursor-pointer ${
                  heroVisualMode === '3d'
                    ? 'bg-gradient-to-r from-red-600 to-rose-600 text-white shadow-md shadow-red-500/25 border border-red-500/40'
                    : 'text-dark-muted hover:text-white text-slate-600'
                }`}
                aria-label="View 3D Tech Core"
              >
                <Laptop size={14} className={heroVisualMode === '3d' ? 'text-white' : 'text-primary'} />
                <span>3D Tech Core</span>
              </button>

              <button
                type="button"
                onClick={() => setHeroVisualMode('profile')}
                className={`px-3.5 py-1.5 rounded-full text-xs font-mono font-medium transition-all duration-200 flex items-center space-x-1.5 cursor-pointer ${
                  heroVisualMode === 'profile'
                    ? 'bg-gradient-to-r from-red-600 to-rose-600 text-white shadow-md shadow-red-500/25 border border-red-500/40'
                    : 'text-dark-muted hover:text-white text-slate-600'
                }`}
                aria-label="View Profile Card"
              >
                <User size={14} className={heroVisualMode === 'profile' ? 'text-white' : 'text-primary'} />
                <span>Profile View</span>
              </button>
            </div>

            {/* Visual Display Container */}
            <div className="relative w-full max-w-md min-h-[440px] flex items-center justify-center">
              <AnimatePresence mode="wait">
                {heroVisualMode === '3d' ? (
                  <motion.div
                    key="3d-core"
                    initial={{ opacity: 0, scale: 0.92, rotateY: -10 }}
                    animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                    exit={{ opacity: 0, scale: 0.92, rotateY: 10 }}
                    transition={{ duration: 0.45, ease: 'easeOut' }}
                    className="w-full flex justify-center"
                  >
                    <TechHeroVisual />
                  </motion.div>
                ) : (
                  <motion.div
                    key="profile-card"
                    initial={{ opacity: 0, scale: 0.92, rotateY: 10 }}
                    animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                    exit={{ opacity: 0, scale: 0.92, rotateY: -10 }}
                    transition={{ duration: 0.45, ease: 'easeOut' }}
                    className="w-full"
                  >
                    <div className="relative w-full max-w-md animate-float">
                      {/* Outer decorative halo */}
                      <div className="absolute -inset-2 bg-gradient-to-r from-red-500/30 via-rose-500/30 to-red-600/30 rounded-3xl blur-2xl opacity-75 animate-glow-pulse" />

                      {/* Main Card */}
                      <div className="relative rounded-2xl bg-dark-surface/90 dark:bg-dark-surface/90 bg-white border border-dark-border dark:border-dark-border border-slate-200 p-5 sm:p-7 shadow-2xl backdrop-blur-xl">
                        
                        {/* Header of card with badges */}
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
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>

        </div>

        {/* Scroll Indicator */}
        <div className="mt-16 flex justify-center">
          <a
            href="#about"
            onClick={(e) => scrollToSection(e, 'about')}
            className="flex flex-col items-center space-y-2 text-dark-muted dark:text-dark-muted text-slate-400 hover:text-primary transition-colors group"
            aria-label="Scroll to About section"
          >
            <span className="text-xs font-mono uppercase tracking-widest text-[10px]">
              Scroll Down
            </span>
            <div className="w-8 h-8 rounded-full border border-dark-border dark:border-dark-border border-slate-300 flex items-center justify-center group-hover:border-primary transition-colors">
              <ArrowDown size={14} className="group-hover:translate-y-0.5 transition-transform" />
            </div>
          </a>
        </div>

      </div>
    </section>
  );
};
