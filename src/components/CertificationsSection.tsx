import React, { useState } from 'react';
import {
  Search,
  Award,
  Sparkles,
  ExternalLink,
  Eye,
  CheckCircle,
  FileBadge,
} from 'lucide-react';
import { certificateCategories } from '../data/certificates';
import { usePortfolioData } from '../context/DataContext';
import { CertificateItem, CertificateCategory } from '../types';
import { CertificateThumbnail } from './CertificateIllustrations';
import { CertificateModal } from './CertificateModal';

export const CertificationsSection: React.FC = () => {
  const { certificates, isAdmin, openEditor } = usePortfolioData();
  const [selectedCategory, setSelectedCategory] = useState<CertificateCategory>('All Certificates');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeModalIndex, setActiveModalIndex] = useState<number | null>(null);

  // Filter by category and search
  const filteredCertificates = certificates.filter((cert) => {
    const matchesCategory =
      selectedCategory === 'All Certificates' || cert.category === selectedCategory;
    const matchesSearch =
      cert.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      cert.issuer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="certifications" className="py-24 relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-mono font-medium mb-3">
            <span>VERIFIED ACHIEVEMENTS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-dark-text tracking-tight mb-4">
            Certifications &amp; Credentials
          </h2>
          <p className="text-base text-dark-muted dark:text-dark-muted text-slate-600 leading-relaxed">
            Gallery of 13 certified courses, technical bootcamps, and academic workshops in AI, web development, cybersecurity, and algorithms.
          </p>
          {isAdmin && (
            <div className="mt-4 flex justify-center">
              <button
                onClick={() => openEditor('certificates')}
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-primary/10 border border-primary/30 text-primary hover:bg-primary/20 text-xs font-mono font-bold transition-all"
              >
                <span>🛠️ Manage Certifications ({certificates.length})</span>
              </button>
            </div>
          )}
        </div>

        {/* Search & Filter Toolbar */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-4 mb-10">
          
          {/* Category Pills */}
          <div className="flex flex-wrap gap-2 w-full lg:w-auto">
            {certificateCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-medium transition-all duration-200 ${
                  selectedCategory === cat
                    ? 'bg-primary text-dark-bg font-semibold shadow-sm'
                    : 'bg-dark-surface dark:bg-dark-surface bg-white text-dark-muted dark:text-dark-muted text-slate-600 border border-dark-border dark:border-dark-border border-slate-200 hover:text-dark-text dark:hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Bar */}
          <div className="relative w-full lg:w-80">
            <Search
              size={16}
              className="absolute left-3.5 top-1/2 -translate-y-1/2 text-dark-muted"
            />
            <input
              type="text"
              placeholder="Search by title or issuer..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-xl text-xs sm:text-sm bg-dark-surface dark:bg-dark-surface bg-white border border-dark-border dark:border-dark-border border-slate-200 text-dark-text dark:text-dark-text text-slate-900 placeholder:text-dark-muted focus:outline-none focus:border-primary transition-colors"
            />
          </div>

        </div>

        {/* Certificates Grid (13 entries) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCertificates.map((cert, index) => {
            // Find global index in certificates for modal navigation
            const globalIndex = certificates.findIndex((c: CertificateItem) => c.id === cert.id);

            return (
              <div
                key={cert.id}
                className="group rounded-2xl bg-dark-surface/85 dark:bg-dark-surface/85 bg-white border border-dark-border dark:border-dark-border border-slate-200 hover:border-primary/40 transition-all duration-300 hover:-translate-y-2 flex flex-col justify-between overflow-hidden shadow-sm hover:shadow-2xl hover:shadow-primary/10"
              >
                {/* Visual Thumbnail */}
                <div className="relative p-3 bg-dark-bg/60 dark:bg-dark-bg/60 bg-slate-100/70 border-b border-dark-border/60 dark:border-dark-border/60 border-slate-200">
                  <CertificateThumbnail certificate={cert} />
                  
                  {/* Quick hover overlay button */}
                  <button
                    onClick={() => setActiveModalIndex(globalIndex)}
                    className="absolute inset-0 m-3 bg-dark-bg/75 backdrop-blur-xs flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 rounded-xl space-x-2 text-primary font-semibold text-xs"
                    aria-label={`View certificate ${cert.title}`}
                  >
                    <Eye size={18} />
                    <span>View Certificate</span>
                  </button>
                </div>

                {/* Card Information */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <span className="text-[11px] font-mono text-primary font-semibold uppercase tracking-wider">
                        {cert.issuer}
                      </span>
                      {cert.featured && (
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-secondary/15 text-secondary border border-secondary/30 font-semibold">
                          Featured
                        </span>
                      )}
                    </div>

                    <h3 className="font-bold text-base text-slate-900 dark:text-dark-text group-hover:text-primary transition-colors line-clamp-2 mb-2">
                      {cert.title}
                    </h3>

                    <p className="text-xs text-dark-muted dark:text-dark-muted text-slate-600 line-clamp-2 mb-4 leading-relaxed">
                      {cert.description}
                    </p>
                  </div>

                  {/* Actions & Verification */}
                  <div className="pt-3 border-t border-dark-border/60 dark:border-dark-border/60 border-slate-100 flex items-center justify-between">
                    <button
                      onClick={() => setActiveModalIndex(globalIndex)}
                      className="inline-flex items-center space-x-1.5 text-xs font-semibold text-primary hover:text-primary-hover transition-colors"
                    >
                      <Eye size={14} />
                      <span>View Certificate</span>
                    </button>

                    {cert.credentialUrl ? (
                      <a
                        href={cert.credentialUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center space-x-1 text-xs text-dark-muted hover:text-primary transition-colors"
                        title="Verify credential on issuer site"
                      >
                        <span>Verify</span>
                        <ExternalLink size={12} />
                      </a>
                    ) : (
                      <span className="text-[11px] font-mono text-dark-muted flex items-center space-x-1">
                        <CheckCircle size={11} className="text-emerald-400" />
                        <span>{cert.date || 'Verified'}</span>
                      </span>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Empty Search State */}
        {filteredCertificates.length === 0 && (
          <div className="text-center py-16 border border-dashed border-dark-border rounded-2xl p-8">
            <FileBadge size={36} className="mx-auto text-dark-muted mb-3" />
            <h4 className="text-base font-semibold text-dark-text mb-1">
              No certificates match your query
            </h4>
            <p className="text-xs font-mono text-dark-muted">
              Try adjusting your search terms or select &quot;All Certificates&quot;.
            </p>
          </div>
        )}

        {/* Reference Image & Original Assets Notice */}
        <div className="mt-12 p-5 rounded-2xl bg-dark-surface/60 dark:bg-dark-surface/60 bg-slate-100 border border-dark-border/70 dark:border-dark-border/70 border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 max-w-4xl mx-auto">
          <div className="text-xs text-dark-muted dark:text-dark-muted text-slate-600 leading-relaxed text-center sm:text-left">
            <strong className="text-slate-900 dark:text-white">Authentic Credentials:</strong>{' '}
            Derived from official course verifications and certificate records. Individual high-resolution certificate files can be loaded by placing files in <code className="text-primary font-mono">/public/certificates/</code>.
          </div>
          <div className="text-xs font-mono text-primary font-bold shrink-0">
            Total Verified: {certificates.length} Entries
          </div>
        </div>

      </div>

      {/* Certificate Viewer Modal */}
      <CertificateModal
        certificates={certificates}
        currentIndex={activeModalIndex}
        onClose={() => setActiveModalIndex(null)}
        onNavigate={(newIndex) => setActiveModalIndex(newIndex)}
      />
    </section>
  );
};
