import React, { useState, useEffect } from 'react';
import { Send } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { usePortfolioData } from '../context/DataContext';

interface NavbarProps {
  onOpenResumeModal: () => void;
}

interface NavItem {
  label: string;
  href: string;
  isAction?: boolean;
}

const navLinks: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Learning', href: '#learning' },
  { label: "Let's Connect", href: '#contact', isAction: true },
];

export const Navbar: React.FC<NavbarProps> = ({ onOpenResumeModal }) => {
  const { profile } = usePortfolioData();
  const { theme, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sectionIds = navLinks.map((link) => link.href.substring(1));
      const scrollPosition = window.scrollY + 140;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionIds[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sectionIds[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.substring(1);
    const targetEl = document.getElementById(targetId);
    if (targetEl) {
      const navHeight = 85;
      const targetPos = targetEl.getBoundingClientRect().top + window.pageYOffset - navHeight;
      window.scrollTo({
        top: targetPos,
        behavior: 'smooth',
      });
      setActiveSection(targetId);
    }
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'py-2.5 bg-dark-bg/95 dark:bg-dark-bg/95 bg-white/95 backdrop-blur-md shadow-lg border-b border-primary/20 dark:border-primary/20 border-slate-200'
          : 'py-4 bg-dark-bg/80 dark:bg-dark-bg/80 bg-white/80 backdrop-blur-sm border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Left: Brand Identity with Profile Thumbnail & Live Pulsing Dot */}
        <a
          href="#home"
          onClick={(e) => handleLinkClick(e, '#home')}
          className="group flex items-center gap-3 focus:outline-none"
          aria-label="Vijayaragavan V — Home"
        >
          <div className="relative shrink-0 group-hover:scale-105 transition-transform duration-300">
            <div className="w-11 h-11 rounded-full overflow-hidden border-2 border-primary shadow-sm ring-2 ring-primary/30 bg-dark-surface dark:bg-dark-surface bg-slate-100">
              <img
                src="/avatar.png?v=4"
                alt={profile.name}
                className="w-full h-full object-cover"
              />
            </div>
            <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-emerald-400 border-2 border-dark-bg" />
          </div>

          <div className="flex flex-col text-left min-w-0">
            <span className="font-bold text-sm sm:text-base md:text-lg tracking-normal text-slate-900 dark:text-dark-text leading-tight group-hover:text-primary transition-colors flex items-center gap-1.5 sm:gap-2 truncate">
              <span>{profile.name.split(' ').slice(0, -1).join(' ').toUpperCase() || 'VIJIYARAGAVAN'}</span>
              <span>{profile.name.split(' ').slice(-1)[0]?.toUpperCase() || 'V'}</span>
            </span>
            <span className="font-mono text-[10px] sm:text-[11px] text-primary font-medium tracking-wide truncate">
              {profile.roles?.[0] || 'B.E - CSE Student'}
            </span>
          </div>
        </a>

        {/* Center/Right: Desktop Navigation Bar */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-1.5" aria-label="Main Navigation">
          {navLinks.map((item) => {
            const isActive = activeSection === item.href.substring(1);

            if (item.isAction) {
              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleLinkClick(e, item.href)}
                  className="ml-2 inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold bg-dark-surface dark:bg-dark-surface bg-slate-100 text-slate-900 dark:text-dark-text border border-primary/30 hover:border-primary hover:bg-primary/20 hover:shadow-md hover:shadow-primary/10 transition-all duration-200 group"
                >
                  <Send className="w-3.5 h-3.5 text-primary group-hover:translate-x-0.5 transition-transform" />
                  <span>{item.label}</span>
                </a>
              );
            }

            return (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleLinkClick(e, item.href)}
                className={`relative px-3 py-1.5 rounded-lg text-xs xl:text-sm font-medium transition-all ${
                  isActive
                    ? 'text-primary bg-primary/10 font-bold'
                    : 'text-dark-muted dark:text-dark-muted text-slate-600 hover:text-primary hover:bg-primary/5'
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute bottom-0 left-2 right-2 h-0.5 bg-gradient-to-r from-primary to-secondary rounded-full" />
                )}
              </a>
            );
          })}
        </nav>

        {/* Mobile Controls: Hamburger Toggle Button */}
        <div className="lg:hidden flex items-center gap-2">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2.5 rounded-xl text-slate-900 dark:text-dark-text hover:bg-dark-surface dark:hover:bg-dark-surface transition-colors border border-primary/20"
            aria-label="Toggle Navigation Menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? (
              <svg className="w-5 h-5" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none">
                <path d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-5 h-5" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none">
                <path d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

      </div>

      {/* Mobile Drawer (Matches the reference model styling) */}
      {mobileMenuOpen && (
        <>
          {/* Backdrop Overlay */}
          <div
            className="fixed inset-0 top-[70px] bg-black/60 backdrop-blur-sm z-40 lg:hidden animate-in fade-in duration-200"
            onClick={() => setMobileMenuOpen(false)}
            aria-hidden="true"
          />

          <div className="relative z-50 lg:hidden bg-dark-bg/98 dark:bg-dark-bg/98 bg-white/98 border-b border-primary/20 backdrop-blur-xl shadow-2xl overflow-hidden animate-in slide-in-from-top-3 duration-200">
            <div className="px-5 py-6 space-y-2 max-h-[80vh] overflow-y-auto">
              
              {/* Header info bar */}
              <div className="pb-3 mb-3 border-b border-primary/20 flex items-center justify-between">
                <span className="text-xs font-mono font-semibold text-dark-muted dark:text-dark-muted text-slate-600">
                  NAVIGATION DIRECTORY
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-dark-surface dark:bg-dark-surface bg-slate-100 text-primary border border-primary/30 font-semibold">
                  {profile.roles?.[0] || 'B.E - CSE Student'}
                </span>
              </div>

              {/* Links List */}
              {navLinks.map((item) => {
                const isActive = activeSection === item.href.substring(1);

                if (item.isAction) {
                  return (
                    <a
                      key={item.href}
                      href={item.href}
                      onClick={(e) => handleLinkClick(e, item.href)}
                      className="min-h-[44px] px-4 py-3 rounded-xl text-base font-medium bg-dark-surface dark:bg-dark-surface bg-slate-100 text-slate-900 dark:text-dark-text border border-primary/40 font-bold text-center flex items-center justify-center gap-2 mt-3 hover:bg-primary/20 hover:text-primary transition-colors"
                    >
                      <Send className="w-4 h-4 text-primary" />
                      <span>{item.label}</span>
                    </a>
                  );
                }

                return (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={(e) => handleLinkClick(e, item.href)}
                    className={`min-h-[44px] flex items-center px-4 py-2.5 rounded-xl text-base font-medium transition-colors ${
                      isActive
                        ? 'text-primary font-bold bg-primary/10'
                        : 'text-slate-900 dark:text-dark-text hover:bg-dark-surface dark:hover:bg-dark-surface hover:text-primary'
                    }`}
                  >
                    {item.label}
                  </a>
                );
              })}

            </div>
          </div>
        </>
      )}
    </header>
  );
};
