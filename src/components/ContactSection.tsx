import React, { useState } from 'react';
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Copy,
  Check,
  ArrowRight,
} from 'lucide-react';
import { LinkedinIcon, WhatsappIcon } from './SocialIcons';
import { profileData } from '../data/profile';

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<FormState>({
    name: '',
    email: '',
    subject: 'Research Internship Opportunity',
    message: '',
  });

  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    if (!profileData.social.email) return;
    navigator.clipboard
      .writeText(profileData.social.email)
      .then(() => {
        setCopiedEmail(true);
        setTimeout(() => setCopiedEmail(false), 2500);
      })
      .catch(() => {
        alert(`Contact email: ${profileData.social.email}`);
      });
  };

  const handleSendInquiry = (e: React.FormEvent) => {
    e.preventDefault();
    const recipient = profileData.social.email || 'vijiyaragavan26@gmail.com';
    const senderName = formData.name.trim() || 'Professional Contact';
    const senderEmail = formData.email.trim();
    const topic = formData.subject || 'Research Internship Opportunity';
    const userMessage = formData.message.trim();

    // Professional Subject Line
    const emailSubject = `${topic} — Inquiry from ${senderName}`;

    // Professional Email Body
    const emailBody = `Dear Vijayaragavan,\n\n${userMessage || 'I came across your portfolio and would like to connect with you regarding ' + topic + '.'}\n\nBest regards,\n${senderName}${senderEmail ? `\n${senderEmail}` : ''}\n\n---\nSent via Vijayaragavan V Portfolio`;

    // Direct Gmail Web compose URL
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
      recipient
    )}&su=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;

    // Standard mailto fallback
    const mailtoUrl = `mailto:${recipient}?subject=${encodeURIComponent(
      emailSubject
    )}&body=${encodeURIComponent(emailBody)}`;

    // Open email directly
    const opened = window.open(gmailUrl, '_blank');
    if (!opened || opened.closed || typeof opened.closed === 'undefined') {
      window.location.href = mailtoUrl;
    }
  };

  return (
    <section
      id="contact"
      className="py-24 relative overflow-hidden bg-[#020b14] text-white border-t border-cyan-500/20 selection:bg-cyan-500/30 selection:text-cyan-200"
    >
      {/* Ambient background glow */}
      <div className="absolute top-1/4 left-1/4 w-[480px] h-[480px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-[420px] h-[420px] bg-emerald-500/10 rounded-full blur-[130px] pointer-events-none" />

      {/* Subtle grid texture */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#38bdf8 1px, transparent 1px)`,
          backgroundSize: '24px 24px',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Badge */}
        <div className="text-left mb-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-950/40 text-cyan-400 text-xs font-mono font-medium tracking-wide shadow-sm backdrop-blur-sm">
            <Mail className="w-3.5 h-3.5 text-cyan-400" />
            <span>OPEN FOR OPPORTUNITIES &amp; COLLABORATIONS</span>
          </div>
        </div>

        {/* Section Heading & Subtitle */}
        <div className="text-left mb-10 max-w-3xl">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-3">
            Let&apos;s Connect
          </h2>
          <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
            For research discussions, academic opportunities, laboratory collaborations or professional mentorship, feel free to reach out.
          </p>
        </div>

        {/* Two-Column Grid: Contact Cards & Direct Message Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Vertical Stack of 4 Cards + LinkedIn Banner */}
          <div className="lg:col-span-5 flex flex-col space-y-4">
            
            {/* Card 1: EMAIL INQUIRIES */}
            <div className="p-4 sm:p-5 rounded-2xl bg-[#04121e]/90 border border-cyan-500/25 hover:border-cyan-500/50 transition-all duration-300 shadow-lg shadow-cyan-950/20 backdrop-blur-sm group">
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-3.5 min-w-0">
                  <div className="w-11 h-11 rounded-xl bg-cyan-950/70 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shrink-0 group-hover:scale-105 group-hover:border-cyan-400 transition-all">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <span className="text-[10px] sm:text-xs font-mono font-semibold tracking-wider text-cyan-400 uppercase block">
                      EMAIL INQUIRIES
                    </span>
                    <a
                      href={`mailto:${profileData.social.email}`}
                      className="text-xs sm:text-sm font-bold text-white hover:text-cyan-400 transition-colors truncate block"
                    >
                      {profileData.social.email}
                    </a>
                    <span className="text-[11px] text-slate-400 block mt-0.5 truncate">
                      Quickest response for academic &amp; research inquiries
                    </span>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="px-2.5 py-1 rounded-md text-xs font-mono font-semibold text-cyan-400 hover:text-cyan-300 hover:bg-cyan-500/10 flex items-center gap-1 transition-colors shrink-0 cursor-pointer"
                  title="Copy email to clipboard"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Card 2: DIRECT PHONE */}
            <div className="p-4 sm:p-5 rounded-2xl bg-[#04121e]/90 border border-cyan-500/25 hover:border-cyan-500/50 transition-all duration-300 shadow-lg shadow-cyan-950/20 backdrop-blur-sm group">
              <div className="flex items-center gap-3.5">
                <div className="w-11 h-11 rounded-xl bg-cyan-950/70 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shrink-0 group-hover:scale-105 group-hover:border-cyan-400 transition-all">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] sm:text-xs font-mono font-semibold tracking-wider text-cyan-400 uppercase block">
                    DIRECT PHONE
                  </span>
                  <a
                    href="tel:+917604906429"
                    className="text-xs sm:text-sm font-bold text-white hover:text-cyan-400 transition-colors"
                  >
                    +91 7604906429
                  </a>
                  <span className="text-[11px] text-slate-400 block mt-0.5">
                    Available for phone discussions
                  </span>
                </div>
              </div>
            </div>

            {/* Card 3: WHATSAPP DIRECT */}
            <div className="p-4 sm:p-5 rounded-2xl bg-[#04121e]/90 border border-emerald-500/25 hover:border-emerald-500/50 transition-all duration-300 shadow-lg shadow-emerald-950/20 backdrop-blur-sm group">
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-3.5 min-w-0">
                  <div className="w-11 h-11 rounded-xl bg-emerald-950/70 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0 group-hover:scale-105 group-hover:border-emerald-400 transition-all">
                    <WhatsappIcon size={20} />
                  </div>
                  <div className="min-w-0">
                    <span className="text-[10px] sm:text-xs font-mono font-semibold tracking-wider text-emerald-400 uppercase block">
                      WHATSAPP DIRECT
                    </span>
                    <span className="text-xs sm:text-sm font-bold text-white block">
                      +91 7604906429
                    </span>
                    <span className="text-[11px] text-slate-400 block mt-0.5 truncate">
                      Instant messaging for research opportunities
                    </span>
                  </div>
                </div>

                <a
                  href="https://wa.me/917604906429"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-1.5 rounded-full bg-emerald-400 hover:bg-emerald-300 text-slate-950 font-bold text-xs flex items-center gap-1.5 shadow-md shadow-emerald-400/25 hover:scale-105 transition-all shrink-0 cursor-pointer"
                >
                  <span>Chat</span>
                  <span>&rarr;</span>
                </a>
              </div>
            </div>

            {/* Card 4: BASE LOCATION */}
            <div className="p-4 sm:p-5 rounded-2xl bg-[#04121e]/90 border border-cyan-500/25 hover:border-cyan-500/50 transition-all duration-300 shadow-lg shadow-cyan-950/20 backdrop-blur-sm group">
              <div className="flex items-center gap-3.5">
                <div className="w-11 h-11 rounded-xl bg-cyan-950/70 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shrink-0 group-hover:scale-105 group-hover:border-cyan-400 transition-all">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] sm:text-xs font-mono font-semibold tracking-wider text-cyan-400 uppercase block">
                    BASE LOCATION
                  </span>
                  <span className="text-xs sm:text-sm font-bold text-white block">
                    Dharmapuri &amp; Erode, Tamil Nadu, India
                  </span>
                  <span className="text-[11px] text-slate-400 block mt-0.5">
                    Tamil Nadu, India &bull; Open to relocation for research positions
                  </span>
                </div>
              </div>
            </div>

            {/* Card 5: CONNECT ON LINKEDIN BANNER */}
            <a
              href={profileData.social.linkedin || 'https://www.linkedin.com/in/vijiyaragavan'}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 sm:p-5 rounded-2xl bg-[#04121e]/90 border border-cyan-500/25 hover:border-cyan-500/50 transition-all duration-300 shadow-lg shadow-cyan-950/20 backdrop-blur-sm group block"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3.5">
                  <div className="w-11 h-11 rounded-xl bg-cyan-950/70 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shrink-0 group-hover:scale-105 group-hover:border-cyan-400 transition-all">
                    <LinkedinIcon size={20} />
                  </div>
                  <div>
                    <span className="text-xs sm:text-sm font-bold text-white block group-hover:text-cyan-400 transition-colors">
                      Connect on LinkedIn
                    </span>
                    <span className="text-[11px] text-slate-400 block mt-0.5">
                      Professional Network &amp; Updates
                    </span>
                  </div>
                </div>

                <div className="text-cyan-400 group-hover:translate-x-1.5 transition-transform duration-200">
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </a>

          </div>

          {/* Right Column: Send Direct Message / Research Inquiry */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl bg-[#04121e]/95 border border-cyan-500/30 p-6 sm:p-8 backdrop-blur-xl shadow-2xl relative">
              
              {/* Form Title with Mail Icon */}
              <div className="flex items-center gap-2.5 mb-6 text-white font-bold text-base sm:text-lg">
                <Mail className="w-5 h-5 text-cyan-400" />
                <span>Send Direct Message / Research Inquiry</span>
              </div>

              <form onSubmit={handleSendInquiry} className="space-y-4" noValidate>
                
                {/* Row 1: Name and Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name */}
                  <div>
                    <label
                      htmlFor="form-name"
                      className="block text-[11px] font-mono font-semibold tracking-wider text-cyan-400 uppercase mb-1.5"
                    >
                      YOUR NAME
                    </label>
                    <input
                      id="form-name"
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Prof. / Dr. / Researcher"
                      className="w-full px-4 py-3 rounded-xl text-xs sm:text-sm bg-[#020b14] border border-cyan-500/30 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition-colors"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label
                      htmlFor="form-email"
                      className="block text-[11px] font-mono font-semibold tracking-wider text-cyan-400 uppercase mb-1.5"
                    >
                      YOUR EMAIL
                    </label>
                    <input
                      id="form-email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="name@institution.edu"
                      className="w-full px-4 py-3 rounded-xl text-xs sm:text-sm bg-[#020b14] border border-cyan-500/30 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition-colors"
                    />
                  </div>
                </div>

                {/* Subject / Topic Dropdown */}
                <div>
                  <label
                    htmlFor="form-subject"
                    className="block text-[11px] font-mono font-semibold tracking-wider text-cyan-400 uppercase mb-1.5"
                  >
                    SUBJECT / TOPIC
                  </label>
                  <div className="relative">
                    <select
                      id="form-subject"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl text-xs sm:text-sm bg-[#020b14] border border-cyan-500/30 text-white focus:outline-none focus:border-cyan-400 transition-colors appearance-none cursor-pointer"
                    >
                      <option value="Research Internship Opportunity" className="bg-[#04121e] text-white">
                        Research Internship Opportunity
                      </option>
                      <option value="Software Engineering & Project Collaboration" className="bg-[#04121e] text-white">
                        Software Engineering &amp; Project Collaboration
                      </option>
                      <option value="AI & IoT System Architecture" className="bg-[#04121e] text-white">
                        AI &amp; IoT System Architecture
                      </option>
                      <option value="Academic & Technical Mentorship" className="bg-[#04121e] text-white">
                        Academic &amp; Technical Mentorship
                      </option>
                      <option value="General Inquiry" className="bg-[#04121e] text-white">
                        General Inquiry
                      </option>
                    </select>
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-cyan-400 text-xs">
                      &#9662;
                    </div>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="form-message"
                    className="block text-[11px] font-mono font-semibold tracking-wider text-cyan-400 uppercase mb-1.5"
                  >
                    MESSAGE
                  </label>
                  <textarea
                    id="form-message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Share details regarding your research inquiry, internship opening, or academic opportunity..."
                    className="w-full px-4 py-3 rounded-xl text-xs sm:text-sm bg-[#020b14] border border-cyan-500/30 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition-colors resize-y min-h-[110px]"
                  />
                </div>

                {/* Submit Action */}
                <button
                  type="submit"
                  className="w-full py-3.5 px-6 rounded-xl font-bold text-xs sm:text-sm bg-cyan-400 hover:bg-cyan-300 text-slate-950 flex items-center justify-center gap-2 shadow-lg shadow-cyan-400/25 active:scale-[0.99] transition-all cursor-pointer mt-4"
                >
                  <Send className="w-4 h-4 text-slate-950" />
                  <span>Send Message</span>
                </button>

              </form>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
