import React from 'react';
import { Award, ShieldCheck, Code, Sparkles, Terminal, FileCheck } from 'lucide-react';
import { CertificateItem } from '../types';

interface CertificateThumbnailProps {
  certificate: CertificateItem;
  className?: string;
  zoomLevel?: number;
}

export const CertificateThumbnail: React.FC<CertificateThumbnailProps> = ({
  certificate,
  className = '',
  zoomLevel = 1,
}) => {
  const [imageError, setImageError] = React.useState(false);

  const getBadgeIcon = () => {
    switch (certificate.iconType) {
      case 'ai':
        return <Sparkles className="w-8 h-8 text-purple-400" />;
      case 'code':
        return <Code className="w-8 h-8 text-emerald-400" />;
      case 'security':
        return <ShieldCheck className="w-8 h-8 text-red-400" />;
      case 'tools':
        return <Terminal className="w-8 h-8 text-amber-400" />;
      case 'workshop':
      default:
        return <Award className="w-8 h-8 text-blue-400" />;
    }
  };

  if (certificate.image && !imageError) {
    return (
      <div
        className={`relative w-full aspect-[4/3] rounded-xl overflow-hidden bg-dark-card border border-dark-border/80 flex items-center justify-center p-1.5 transition-transform duration-200 ${className}`}
        style={{ transform: `scale(${zoomLevel})`, transformOrigin: 'center center' }}
      >
        <img
          src={certificate.image}
          alt={certificate.title}
          onError={() => setImageError(true)}
          className="w-full h-full object-contain rounded-lg shadow-md"
          loading="lazy"
        />
        {certificate.featured && (
          <span className="absolute top-3 right-3 text-[9px] font-mono uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-secondary/90 text-slate-950 shadow-md">
            Featured
          </span>
        )}
      </div>
    );
  }

  return (
    <div
      className={`relative w-full aspect-[4/3] rounded-xl overflow-hidden bg-gradient-to-br from-dark-surface via-dark-card to-dark-bg border border-dark-border/80 flex flex-col justify-between p-5 select-none transition-transform duration-200 ${className}`}
      style={{ transform: `scale(${zoomLevel})`, transformOrigin: 'center center' }}
    >
      {/* Background certificate watermark & guilloche styling */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#60A5FA 1px, transparent 1px), radial-gradient(#A78BFA 1px, transparent 1px)`,
          backgroundSize: '20px 20px',
          backgroundPosition: '0 0, 10px 10px',
        }}
      />

      {/* Outer Certificate Border Stamp */}
      <div className="absolute inset-2 border border-dashed border-primary/20 rounded-lg pointer-events-none" />

      {/* Header with Issuer */}
      <div className="relative z-10 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 rounded-lg bg-dark-bg/80 border border-primary/30 flex items-center justify-center shadow-inner">
            {getBadgeIcon()}
          </div>
          <div>
            <span className="text-[10px] font-mono uppercase tracking-wider text-primary font-bold block">
              {certificate.issuer}
            </span>
            <span className="text-[9px] font-mono text-dark-muted">
              {certificate.category}
            </span>
          </div>
        </div>

        {certificate.featured && (
          <span className="text-[9px] font-mono uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-secondary/15 text-secondary border border-secondary/30">
            Featured
          </span>
        )}
      </div>

      {/* Main Center Title */}
      <div className="relative z-10 my-auto text-center px-2">
        <div className="text-[10px] font-mono text-dark-muted mb-1 uppercase tracking-widest">
          Certificate of Completion / Participation
        </div>
        <h4 className="text-sm sm:text-base font-bold text-dark-text tracking-tight leading-snug line-clamp-3">
          {certificate.title}
        </h4>
        <div className="text-[11px] font-mono text-primary/80 mt-1">
          Awarded to: <span className="font-semibold text-white">Vijayaragavan V</span>
        </div>
      </div>

      {/* Certificate Footer / Seal */}
      <div className="relative z-10 flex items-center justify-between pt-2 border-t border-dark-border/60 text-[10px] font-mono text-dark-muted">
        <div className="flex items-center space-x-1 text-emerald-400">
          <FileCheck size={12} />
          <span>{certificate.date || 'Verified Credential'}</span>
        </div>

        <div className="flex items-center space-x-1 text-dark-muted">
          <span className="w-1.5 h-1.5 rounded-full bg-primary/60 inline-block" />
          <span>ID: {certificate.id}</span>
        </div>
      </div>
    </div>
  );
};
