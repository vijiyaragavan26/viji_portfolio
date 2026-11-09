import React from 'react';
import { ShieldAlert, Edit3, LogOut, RefreshCw } from 'lucide-react';
import { usePortfolioData } from '../../context/DataContext';

export const AdminFloatingToolbar: React.FC = () => {
  const { isAdmin, setIsEditorOpen, logout, resetAllData } = usePortfolioData();

  if (!isAdmin) return null;

  return (
    <aside
      aria-label="Admin Control Bar"
      className="fixed bottom-6 right-6 z-40 flex items-center gap-2 p-2 rounded-2xl bg-dark-surface/95 dark:bg-dark-surface/95 bg-white/95 border border-primary/40 backdrop-blur-xl shadow-2xl animate-in slide-in-from-bottom-4 duration-300"
    >
      <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-primary/10 border border-primary/20 text-primary text-xs font-mono font-semibold">
        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
        <span>Admin Mode</span>
      </div>

      <button
        onClick={() => setIsEditorOpen(true)}
        className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-primary hover:bg-primary-hover text-dark-bg text-xs font-bold transition-all shadow-md hover:shadow-primary/20"
      >
        <Edit3 size={14} />
        <span>Manage Portfolio (CRUD)</span>
      </button>

      <button
        onClick={() => {
          if (window.confirm('Reset all portfolio data back to default factory content?')) {
            resetAllData();
          }
        }}
        className="p-2 rounded-xl text-dark-muted hover:text-amber-400 hover:bg-amber-400/10 transition-colors"
        title="Reset all to defaults"
        aria-label="Reset all data to defaults"
      >
        <RefreshCw size={15} />
      </button>

      <button
        onClick={logout}
        className="p-2 rounded-xl text-dark-muted hover:text-red-400 hover:bg-red-400/10 transition-colors"
        title="Logout Admin"
        aria-label="Logout Admin"
      >
        <LogOut size={15} />
      </button>
    </aside>
  );
};
