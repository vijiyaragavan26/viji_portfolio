import React, { useState, useEffect } from 'react';
import {
  X,
  ChevronLeft,
  ChevronRight,
  ZoomIn,
  ZoomOut,
  RotateCcw,
  ExternalLink,
  Award,
  CheckCircle,
  Sparkles,
  Info,
} from 'lucide-react';
import { CertificateItem } from '../types';
import { CertificateThumbnail } from './CertificateIllustrations';

interface CertificateModalProps {
  certificates: CertificateItem[];
  currentIndex: number | null;
  onClose: () => void;
  onNavigate: (newIndex: number) => void;
}

export const CertificateModal: React.FC<CertificateModalProps> = ({
  certificates,
  currentIndex,
  onClose,
  onNavigate,
}) => {
  const [zoomLevel, setZoomLevel] = useState(1);
  const [imageError, setImageError] = useState(false);

  const activeCert = currentIndex !== null ? certificates[currentIndex] : null;

  useEffect(() => {
    setZoomLevel(1);
    setImageError(false);
  }, [currentIndex]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowLeft' && currentIndex !== null && currentIndex > 0) {
        onNavigate(currentIndex - 1);
      } else if (
        e.key === 'ArrowRight' &&
        currentIndex !== null &&
        currentIndex < certificates.length - 1
      ) {
        onNavigate(currentIndex + 1);
      }
    };

    if (currentIndex !== null) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [currentIndex, certificates.length, onClose, onNavigate]);

  if (currentIndex === null || !activeCert) return null;

  const handleZoomIn = () => setZoomLevel((prev) => Math.min(prev + 0.25, 2.5));
  const handleZoomOut = () => setZoomLevel((prev) => Math.max(prev - 0.25, 0.75));
  const handleResetZoom = () => setZoomLevel(1);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="cert-modal-title"
    >
      <div
        className="relative w-full max-w-4xl max-h-[95vh] rounded-2xl bg-dark-surface dark:bg-dark-surface bg-white border border-dark-border dark:border-dark-border border-slate-200 shadow-2xl flex flex-col overflow-hidden animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Action Bar */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-dark-border dark:border-dark-border border-slate-200 bg-dark-bg/60 dark:bg-dark-bg/60 bg-slate-50">
          <div className="flex items-center space-x-2">
            <span className="text-xs font-mono text-dark-muted">
              {currentIndex + 1} of {certificates.length}
            </span>
            {activeCert.featured && (
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-secondary/15 text-secondary border border-secondary/30">
                Featured
              </span>
            )}
          </div>

          {/* Zoom controls & close */}
          <div className="flex items-center space-x-2">
            <button
              onClick={handleZoomOut}
              disabled={zoomLevel <= 0.75}
              className="p-1.5 rounded-lg border border-dark-border text-dark-muted hover:text-dark-text disabled:opacity-40 transition-colors"
              title="Zoom out"
              aria-label="Zoom out"
            >
              <ZoomOut size={16} />
            </button>
            <button
              onClick={handleResetZoom}
              className="px-2 py-1 rounded-lg border border-dark-border text-xs font-mono text-dark-muted hover:text-dark-text transition-colors"
              title="Reset zoom"
            >
              {Math.round(zoomLevel * 100)}%
            </button>
            <button
              onClick={handleZoomIn}
              disabled={zoomLevel >= 2.5}
              className="p-1.5 rounded-lg border border-dark-border text-dark-muted hover:text-dark-text disabled:opacity-40 transition-colors"
              title="Zoom in"
              aria-label="Zoom in"
            >
              <ZoomIn size={16} />
            </button>
            <div className="h-4 w-[1px] bg-dark-border mx-1" />
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg border border-dark-border text-dark-muted hover:text-red-400 transition-colors"
              title="Close modal (Esc)"
              aria-label="Close modal"
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {/* Center Certificate Preview Area */}
        <div className="relative flex-1 overflow-auto p-4 sm:p-8 flex items-center justify-center min-h-[300px] sm:min-h-[420px] bg-dark-bg/95">
          {/* Previous Button */}
          <button
            onClick={() => currentIndex > 0 && onNavigate(currentIndex - 1)}
            disabled={currentIndex === 0}
            className="absolute left-3 top-1/2 -translate-y-1/2 z-20 p-2.5 rounded-full bg-dark-surface/90 border border-dark-border text-dark-text hover:text-primary disabled:opacity-30 disabled:pointer-events-none transition-all shadow-lg"
            aria-label="Previous certificate"
          >
            <ChevronLeft size={20} />
          </button>

          {/* Next Button */}
          <button
            onClick={() => currentIndex < certificates.length - 1 && onNavigate(currentIndex + 1)}
            disabled={currentIndex === certificates.length - 1}
            className="absolute right-3 top-1/2 -translate-y-1/2 z-20 p-2.5 rounded-full bg-dark-surface/90 border border-dark-border text-dark-text hover:text-primary disabled:opacity-30 disabled:pointer-events-none transition-all shadow-lg"
            aria-label="Next certificate"
          >
            <ChevronRight size={20} />
          </button>

          {/* Certificate Image or Rich SVG representation */}
          <div className="w-full max-w-2xl transition-transform duration-200 flex justify-center">
            {activeCert.image && !imageError ? (
              <img
                src={activeCert.image}
                alt={activeCert.title}
                onError={() => setImageError(true)}
                className="max-h-[60vh] object-contain rounded-xl shadow-2xl transition-transform"
                style={{ transform: `scale(${zoomLevel})` }}
              />
            ) : (
              <CertificateThumbnail
                certificate={activeCert}
                zoomLevel={zoomLevel}
                className="shadow-2xl max-w-xl"
              />
            )}
          </div>
        </div>

        {/* Bottom Details Footer */}
        <div className="p-5 sm:p-6 border-t border-dark-border dark:border-dark-border border-slate-200 bg-dark-surface dark:bg-dark-surface bg-white">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <div className="flex items-center space-x-2 text-xs font-mono text-primary font-semibold mb-1">
                <span>{activeCert.issuer}</span>
                <span>&bull;</span>
                <span className="text-dark-muted">{activeCert.category}</span>
              </div>
              <h3
                id="cert-modal-title"
                className="text-lg sm:text-xl font-bold text-slate-900 dark:text-dark-text"
              >
                {activeCert.title}
              </h3>
              <p className="text-xs sm:text-sm text-dark-muted dark:text-dark-muted text-slate-600 mt-1 max-w-2xl">
                {activeCert.description}
              </p>
            </div>

            <div className="flex items-center space-x-3 shrink-0">
              {activeCert.credentialUrl ? (
                <a
                  href={activeCert.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-1.5 px-4 py-2 rounded-xl text-xs font-semibold bg-primary text-dark-bg hover:bg-primary-hover transition-colors"
                >
                  <ExternalLink size={14} />
                  <span>Verify Credential</span>
                </a>
              ) : (
                <div className="flex items-center space-x-1.5 text-xs font-mono text-dark-muted bg-dark-bg/60 px-3 py-1.5 rounded-lg border border-dark-border">
                  <CheckCircle size={13} className="text-emerald-400" />
                  <span>{activeCert.date || 'Verified Course Record'}</span>
                </div>
              )}
            </div>
          </div>

          {/* Original Certificate Image Notice */}
          <div className="mt-4 pt-3 border-t border-dark-border/50 text-[11px] font-mono text-dark-muted flex items-center space-x-2">
            <Info size={13} className="text-primary shrink-0" />
            <span>
              Tip: Drop individual scanned certificate images into <code className="text-primary">/public/certificates/</code> and set the <code className="text-primary">image</code> path in <code className="text-primary">certificates.ts</code> for instant high-res photo viewing.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
