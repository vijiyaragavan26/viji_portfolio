import React, { useState } from 'react';
import { Lock, Eye, EyeOff, X, Shield, AlertCircle } from 'lucide-react';
import { usePortfolioData } from '../../context/DataContext';

export const AdminLoginModal: React.FC = () => {
  const { isLoginModalOpen, setIsLoginModalOpen, login } = usePortfolioData();
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState<string | null>(null);

  if (!isLoginModalOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!password.trim()) {
      setError('Please enter the admin password.');
      return;
    }

    const success = login(password);
    if (!success) {
      setError('Invalid admin password. Please try again.');
    } else {
      setError(null);
      setPassword('');
    }
  };

  const handleClose = () => {
    setIsLoginModalOpen(false);
    setError(null);
    setPassword('');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-md bg-dark-surface dark:bg-dark-surface bg-white border border-primary/30 rounded-3xl p-6 sm:p-8 shadow-2xl text-slate-900 dark:text-dark-text animate-in zoom-in-95 duration-200"
        role="dialog"
        aria-modal="true"
        aria-labelledby="admin-login-title"
      >
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-5 right-5 p-2 rounded-xl text-dark-muted hover:text-white hover:bg-white/10 transition-colors"
          aria-label="Close admin login modal"
        >
          <X size={18} />
        </button>

        {/* Modal Header */}
        <div className="flex items-center space-x-3 mb-6">
          <div className="w-12 h-12 rounded-2xl bg-primary/10 border border-primary/30 flex items-center justify-center text-primary">
            <Shield size={24} />
          </div>
          <div>
            <h3 id="admin-login-title" className="text-xl font-bold tracking-tight">
              Admin Authentication
            </h3>
            <p className="text-xs text-dark-muted dark:text-dark-muted text-slate-500">
              Manage portfolio content with full CRUD control
            </p>
          </div>
        </div>

        {/* Error message */}
        {error && (
          <div className="mb-4 p-3 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-xs flex items-center gap-2">
            <AlertCircle size={16} className="shrink-0" />
            <span>{error}</span>
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-mono font-medium text-dark-muted dark:text-dark-muted text-slate-600 mb-2">
              ADMIN PASSWORD / PASSCODE
            </label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  if (error) setError(null);
                }}
                placeholder="Enter admin password"
                className="w-full px-4 py-3 pr-12 rounded-xl bg-dark-bg dark:bg-dark-bg bg-slate-50 border border-dark-border dark:border-dark-border border-slate-300 focus:border-primary focus:ring-1 focus:ring-primary text-base sm:text-sm font-mono outline-none transition-all placeholder:text-slate-500"
                autoFocus
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-1.5 text-dark-muted hover:text-primary transition-colors"
                aria-label={showPassword ? 'Hide password' : 'Show password'}
              >
                {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
              </button>
            </div>
          </div>

          <button
            type="submit"
            className="w-full mt-2 py-3 px-4 rounded-xl bg-primary hover:bg-primary-hover text-dark-bg font-bold text-sm tracking-wide flex items-center justify-center gap-2 shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all active:scale-[0.99]"
          >
            <Lock size={16} />
            <span>Enter Admin Dashboard</span>
          </button>
        </form>

        <p className="text-[11px] text-center text-dark-muted dark:text-dark-muted text-slate-500 mt-5">
          Allows real-time editing, adding, and removing projects, skills, education, certifications, and profile data.
        </p>
      </div>
    </div>
  );
};
