import React, { useEffect } from 'react';
import {
  X,
  Mail,
  MapPin,
  Phone,
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import { resumeData } from '../data/resume';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/80 backdrop-blur-md overflow-y-auto print:p-0 print:bg-white"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="resume-title"
    >
      <div
        className="relative w-full max-w-4xl max-h-[94vh] flex flex-col rounded-2xl bg-white text-slate-900 border border-slate-300 shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200 print:max-h-none print:border-none print:shadow-none print:rounded-none"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Control Bar (Hidden during print) */}
        <div className="no-print flex items-center justify-between px-6 py-4 bg-slate-100 border-b border-slate-200">
          <div className="flex items-center space-x-2">
            <span className="font-bold text-sm text-slate-800">
              Official Curriculum Vitae Preview
            </span>
            <span className="text-xs px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 font-mono font-semibold">
              CGPA: {resumeData.header.cgpa}
            </span>
          </div>

          <div className="flex items-center space-x-2">
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg border border-slate-300 text-slate-600 hover:text-red-600 hover:border-red-300 transition-colors cursor-pointer"
              aria-label="Close resume preview"
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {/* Printable Resume Document Body */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-10 bg-white font-sans text-slate-800 text-left print-page space-y-5">
          
          {/* Header */}
          <div className="border-b-2 border-slate-900 pb-3 text-center">
            <h1 id="resume-title" className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-wide uppercase">
              {resumeData.header.name}
            </h1>
            <p className="text-xs sm:text-sm font-semibold text-slate-800 mt-1">
              {resumeData.header.headline}
            </p>
            <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-xs text-slate-700 mt-1.5 font-sans">
              <span className="flex items-center gap-1">
                <MapPin size={11} />
                {resumeData.header.location}
              </span>
              <span>|</span>
              <span className="flex items-center gap-1">
                <Phone size={11} />
                {resumeData.header.phone}
              </span>
              <span>|</span>
              <span className="flex items-center gap-1">
                <Mail size={11} />
                <a href={`mailto:${resumeData.header.email}`} className="hover:underline">
                  {resumeData.header.email}
                </a>
              </span>
              <span>|</span>
              <a
                href={resumeData.header.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-700 hover:underline flex items-center gap-1"
              >
                <LinkedinIcon size={11} />
                <span>LinkedIn</span>
              </a>
              <span>|</span>
              <a
                href={resumeData.header.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-700 hover:underline flex items-center gap-1"
              >
                <GithubIcon size={11} />
                <span>GitHub</span>
              </a>
            </div>
          </div>

          {/* Research Interests & Objectives */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1 mb-2 font-mono">
              Research Interests &amp; Objectives
            </h2>
            <p className="text-xs sm:text-[13px] text-slate-700 leading-relaxed text-justify">
              {resumeData.summary}
            </p>
          </div>

          {/* Education */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1 mb-2 font-mono">
              Education
            </h2>
            <div className="space-y-2.5 text-xs sm:text-[13px]">
              <div>
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between font-bold text-slate-900">
                  <span>Sengunthar Engineering College, Erode, Tamil Nadu, India</span>
                  <span className="font-mono text-slate-700 font-normal">2026 – Present</span>
                </div>
                <div className="text-slate-800 font-semibold">
                  B.E. Computer Science and Engineering (IoT) | CGPA: 8.70/10 (2nd year)
                </div>
                <ul className="list-disc list-inside text-slate-600 mt-0.5">
                  <li>
                    Admitted through the Tamil Nadu Government School Students 7.5% Reservation Scheme, with educational expenses supported by the Government of Tamilnadu.
                  </li>
                </ul>
              </div>

              <div>
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between font-bold text-slate-900">
                  <span>Government boys Higher Secondary School, Kadathur, Tamil Nadu, India</span>
                  <span className="font-mono text-slate-700 font-normal">2021 – 2024</span>
                </div>
                <ul className="list-disc list-inside text-slate-600 mt-0.5">
                  <li>
                    Class XII: 493/600 (82.2%) | Class X: 444/500 (88.8%)
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Technical Skills */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1 mb-2 font-mono">
              Technical Skills
            </h2>
            <div className="space-y-1 text-xs sm:text-[13px]">
              <div>
                <span className="font-bold text-slate-900">&bull; Programming Languages:</span>{' '}
                <span className="text-slate-700">{resumeData.skillsGrouped.languages.join(', ')}</span>
              </div>
              <div>
                <span className="font-bold text-slate-900">&bull; Developer Tools:</span>{' '}
                <span className="text-slate-700">{resumeData.skillsGrouped.tools.join(', ')}</span>
              </div>
              <div>
                <span className="font-bold text-slate-900">&bull; Core Concepts:</span>{' '}
                <span className="text-slate-700">{resumeData.skillsGrouped.coreConcepts.join(', ')}</span>
              </div>
              <div>
                <span className="font-bold text-slate-900">&bull; Currently learning:</span>{' '}
                <span className="text-slate-700">{resumeData.skillsGrouped.currentlyLearning.join(', ')}</span>
              </div>
            </div>
          </div>

          {/* Computer Science Coursework & Academic Preparation */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1 mb-2 font-mono">
              Computer Science Coursework &amp; Academic Preparation
            </h2>
            <div className="space-y-1 text-xs sm:text-[13px] text-slate-700">
              {resumeData.courseworkAndPreparation.map((item, idx) => (
                <div key={idx}>
                  <span className="font-bold text-slate-900">&bull; {item.title}:</span>{' '}
                  <span>{item.details}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Projects & Practical Work */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1 mb-2 font-mono">
              Technical Projects &amp; Practical Work
            </h2>
            <div className="space-y-2.5 text-xs sm:text-[13px]">
              {resumeData.practicalWork.map((pw, i) => (
                <div key={i}>
                  <div className="font-bold text-slate-900">
                    <span>{pw.title}</span> | <span className="font-normal text-slate-700">{pw.technologies}</span>
                  </div>
                  <ul className="list-disc list-inside text-slate-600 mt-0.5 space-y-0.5">
                    {pw.bullets.map((b, bi) => (
                      <li key={bi}>{b}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Training & Workshops */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1 mb-2 font-mono">
              Technical Training &amp; Workshops
            </h2>
            <div className="space-y-2 text-xs sm:text-[12.5px]">
              {resumeData.technicalTraining.map((tt, idx) => (
                <div key={idx}>
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between font-semibold text-slate-900">
                    <span>{tt.title}</span>
                    <span className="font-mono text-xs text-slate-600 font-normal shrink-0">{tt.period}</span>
                  </div>
                  <ul className="list-disc list-inside text-slate-600 mt-0.5">
                    <li>{tt.description}</li>
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Additional Achievements */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1 mb-2 font-mono">
              Additional Achievements
            </h2>
            <div className="space-y-1 text-xs sm:text-[13px] text-slate-700">
              <div>
                <strong className="text-slate-900">Languages:</strong> {resumeData.languages}
              </div>
              {resumeData.achievements.map((ach, idx) => (
                <div key={idx}>
                  <span>&bull; {ach}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Footer info note */}
        <div className="no-print p-3.5 bg-slate-50 border-t border-slate-200 text-center text-xs text-slate-500 font-mono flex items-center justify-between">
          <span>Synced with verified official CV</span>
          <button
            onClick={onClose}
            className="text-blue-600 font-semibold hover:underline"
          >
            Close Preview
          </button>
        </div>
      </div>
    </div>
  );
};
