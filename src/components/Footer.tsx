import React from 'react';
import { ArrowUp, Mail, Lock, ShieldCheck } from 'lucide-react';
import { GithubIcon, LinkedinIcon, WhatsappIcon } from './SocialIcons';
import { usePortfolioData } from '../context/DataContext';

const quickLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Education', href: '#education' },
  { name: 'Certifications', href: '#certifications' },
  { name: 'Learning', href: '#learning' },
  { name: 'Contact', href: '#contact' },
];

export const Footer: React.FC = () => {
  const { profile, isAdmin, setIsLoginModalOpen, setIsEditorOpen } = usePortfolioData();
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetEl = document.querySelector(href);
    if (targetEl) {
      targetEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative bg-[#020b14] border-t border-cyan-500/20 text-slate-300 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        
        {/* Main Footer Grid with distinct spacing */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-cyan-500/15">
          
          {/* Column 1: Brand & Profile Info (5 cols) */}
          <div className="md:col-span-5 flex flex-col items-start space-y-4">
            <div className="flex items-center space-x-3.5">
              <div className="w-11 h-11 rounded-full overflow-hidden border-2 border-cyan-400/50 shadow-md ring-2 ring-cyan-400/20 shrink-0">
                <img
                  src="/avatar.png?v=4"
                  alt={profile.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <span className="font-bold text-lg tracking-tight text-white block">
                  {profile.name}
                </span>
                <span className="font-mono text-xs text-cyan-400 font-semibold block">
                  {profile.roles?.[0] || 'B.E - CSE Student'}
                </span>
              </div>
            </div>
            <p className="text-xs text-slate-400 max-w-sm leading-relaxed">
              {profile.heroDescription ||
                'Computer Science and Engineering undergraduate focused on algorithms, full-stack web applications, Python development, and applied artificial intelligence.'}
            </p>
          </div>

          {/* Column 2: Quick Links 2-column clean grid (4 cols) */}
          <div className="md:col-span-4">
            <span className="block text-[11px] font-mono font-semibold tracking-wider text-cyan-400 uppercase mb-4">
              QUICK DIRECTORY
            </span>
            <div className="grid grid-cols-2 gap-x-6 gap-y-2.5">
              {quickLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="text-xs text-slate-400 hover:text-cyan-400 transition-colors flex items-center gap-1.5"
                >
                  <span className="text-cyan-500/50 text-[10px]">&bull;</span>
                  <span>{link.name}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Column 3: Connect & Top Button (3 cols) */}
          <div className="md:col-span-3 flex flex-col items-start md:items-end justify-between space-y-4">
            <div>
              <span className="block text-[11px] font-mono font-semibold tracking-wider text-cyan-400 uppercase mb-4 md:text-right">
                CHANNELS &amp; SOCIAL
              </span>
              <div className="flex items-center gap-2.5 flex-wrap">
                {profile.social.github && (
                  <a
                    href={profile.social.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl border border-cyan-500/25 bg-[#04121e] text-slate-400 hover:text-cyan-400 hover:border-cyan-400 transition-all duration-200"
                    aria-label="GitHub Profile"
                  >
                    <GithubIcon size={16} />
                  </a>
                )}
                {profile.social.linkedin && (
                  <a
                    href={profile.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl border border-cyan-500/25 bg-[#04121e] text-slate-400 hover:text-cyan-400 hover:border-cyan-400 transition-all duration-200"
                    aria-label="LinkedIn Profile"
                  >
                    <LinkedinIcon size={16} />
                  </a>
                )}
                {profile.social.email && (
                  <a
                    href={`mailto:${profile.social.email}`}
                    className="p-2.5 rounded-xl border border-cyan-500/25 bg-[#04121e] text-slate-400 hover:text-cyan-400 hover:border-cyan-400 transition-all duration-200"
                    aria-label="Send Email"
                  >
                    <Mail size={16} />
                  </a>
                )}
                {profile.social.whatsapp && (
                  <a
                    href={`https://wa.me/${profile.social.whatsapp.replace(/[^0-9]/g, '')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl border border-cyan-500/25 bg-[#04121e] text-slate-400 hover:text-emerald-400 hover:border-emerald-400 transition-all duration-200"
                    aria-label="WhatsApp Contact"
                  >
                    <WhatsappIcon size={16} />
                  </a>
                )}
                <button
                  onClick={scrollToTop}
                  className="p-2.5 rounded-xl border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 hover:bg-cyan-500/20 hover:border-cyan-400 transition-all duration-200 ml-1"
                  title="Scroll back to top"
                  aria-label="Scroll back to top"
                >
                  <ArrowUp size={16} />
                </button>
              </div>
            </div>

            <p className="text-[11px] font-mono text-slate-500 md:text-right">
              Perundurai, Erode &bull; Tamil Nadu
            </p>
          </div>

        </div>

        {/* Bottom Credits, Copyright & Admin Entry */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p className="flex items-center space-x-1">
            <span>Designed and built by <span className="text-slate-300 font-semibold">{profile.name}</span></span>
          </p>
          
          <div className="flex items-center flex-wrap gap-4">
            <p className="font-mono text-[11px]">
              &copy; {currentYear} {profile.name} &bull; All Rights Reserved.
            </p>

            {/* Admin Login / Manage Portal Button */}
            {isAdmin ? (
              <button
                onClick={() => setIsEditorOpen(true)}
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 hover:bg-emerald-500/20 font-mono text-[11px] font-bold transition-all shadow-sm"
                title="Open Admin Portal"
              >
                <ShieldCheck size={13} />
                <span>Admin Active</span>
              </button>
            ) : (
              <button
                onClick={() => setIsLoginModalOpen(true)}
                className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-xl border border-cyan-500/30 text-slate-400 hover:text-cyan-400 hover:border-cyan-400 hover:bg-cyan-500/10 transition-colors font-mono text-[11px]"
                title="Admin Login (CRUD Portal)"
              >
                <Lock size={12} />
                <span>Admin Login</span>
              </button>
            )}
          </div>
        </div>

      </div>
    </footer>
  );
};
