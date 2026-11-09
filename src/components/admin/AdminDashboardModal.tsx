import React, { useState } from 'react';
import {
  X,
  User,
  Briefcase,
  Layers,
  GraduationCap,
  Award,
  Compass,
  Settings,
  Plus,
  Trash2,
  Edit2,
  Save,
  Check,
  RefreshCw,
  Download,
  Upload,
  AlertCircle,
  ExternalLink,
} from 'lucide-react';
import { usePortfolioData, AdminTab } from '../../context/DataContext';
import {
  ProjectItem,
  SkillItem,
  EducationItem,
  CertificateItem,
  LearningItem,
  ProjectCategory,
  ProjectStatus,
  SkillProficiency,
  CertificateCategory,
} from '../../types';

export const AdminDashboardModal: React.FC = () => {
  const {
    isEditorOpen,
    setIsEditorOpen,
    activeEditorTab,
    setActiveEditorTab,
    profile,
    updateProfile,
    projects,
    addProject,
    updateProject,
    deleteProject,
    skills,
    addSkill,
    updateSkill,
    deleteSkill,
    education,
    addEducation,
    updateEducation,
    deleteEducation,
    certificates,
    addCertificate,
    updateCertificate,
    deleteCertificate,
    learning,
    addLearning,
    updateLearning,
    deleteLearning,
    resetAllData,
    exportDataJson,
    importDataJson,
    adminPassword,
    changePassword,
    logout,
  } = usePortfolioData();

  // Notification Toast State
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3000);
  };

  // Profile Form Local State
  const [profileForm, setProfileForm] = useState(profile);

  // Sync profile form when tab changes or modal opens
  React.useEffect(() => {
    setProfileForm(profile);
  }, [profile, isEditorOpen]);

  // Project Form State
  const [editingProject, setEditingProject] = useState<ProjectItem | null>(null);
  const [isAddingProject, setIsAddingProject] = useState(false);

  // Skill Form State
  const [editingSkill, setEditingSkill] = useState<{ origName: string; item: SkillItem } | null>(null);
  const [isAddingSkill, setIsAddingSkill] = useState(false);

  // Education Form State
  const [editingEducation, setEditingEducation] = useState<EducationItem | null>(null);
  const [isAddingEducation, setIsAddingEducation] = useState(false);

  // Certificate Form State
  const [editingCert, setEditingCert] = useState<CertificateItem | null>(null);
  const [isAddingCert, setIsAddingCert] = useState(false);

  // Learning Form State
  const [editingLearning, setEditingLearning] = useState<LearningItem | null>(null);
  const [isAddingLearning, setIsAddingLearning] = useState(false);

  // Password Change State
  const [newPassword, setNewPassword] = useState('');
  const [importJsonText, setImportJsonText] = useState('');

  if (!isEditorOpen) return null;

  const handleProfileSave = (e: React.FormEvent) => {
    e.preventDefault();
    updateProfile(profileForm);
    showToast('Profile information successfully saved!');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-6xl h-[92vh] flex flex-col bg-dark-bg dark:bg-dark-bg bg-white border border-primary/30 rounded-3xl shadow-2xl overflow-hidden text-slate-900 dark:text-dark-text animate-in zoom-in-95 duration-200"
        role="dialog"
        aria-modal="true"
        aria-labelledby="admin-panel-title"
      >
        {/* Top Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-primary/20 bg-dark-surface/60 dark:bg-dark-surface/60 bg-slate-50/80 backdrop-blur-md">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center text-primary font-bold">
              🛠️
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 id="admin-panel-title" className="text-lg font-bold tracking-tight">
                  Portfolio Admin Portal
                </h2>
                <span className="px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-mono text-[10px] font-bold">
                  CRUD ACTIVE
                </span>
              </div>
              <p className="text-xs text-dark-muted dark:text-dark-muted text-slate-500">
                Directly create, update, and manage all portfolio sections in real-time
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => {
                if (window.confirm('Log out from admin mode?')) {
                  logout();
                }
              }}
              className="text-xs font-semibold px-3 py-1.5 rounded-xl border border-red-500/30 text-red-400 hover:bg-red-500/10 transition-colors"
            >
              Logout
            </button>
            <button
              onClick={() => setIsEditorOpen(false)}
              className="p-2 rounded-xl text-dark-muted hover:text-white hover:bg-white/10 transition-colors"
              aria-label="Close admin dashboard"
            >
              <X size={20} />
            </button>
          </div>
        </div>

        {/* Toast alert */}
        {toastMessage && (
          <div className="absolute top-16 right-6 z-50 flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-500 text-dark-bg font-bold text-xs shadow-xl animate-in slide-in-from-top-2 duration-200">
            <Check size={16} />
            <span>{toastMessage}</span>
          </div>
        )}

        {/* Main Body with Sidebar Tabs */}
        <div className="flex-1 flex flex-col md:flex-row overflow-hidden">
          
          {/* Navigation Sidebar */}
          <nav className="w-full md:w-60 border-b md:border-b-0 md:border-r border-dark-border dark:border-dark-border border-slate-200 p-3 space-y-1 bg-dark-surface/40 dark:bg-dark-surface/40 bg-slate-50 flex md:flex-col overflow-x-auto md:overflow-x-visible shrink-0">
            <button
              onClick={() => setActiveEditorTab('profile')}
              className={`w-full flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs font-semibold transition-all shrink-0 ${
                activeEditorTab === 'profile'
                  ? 'bg-primary text-dark-bg font-bold shadow-md shadow-primary/20'
                  : 'text-dark-muted hover:text-primary hover:bg-primary/10'
              }`}
            >
              <User size={16} />
              <span>Profile & Hero</span>
            </button>

            <button
              onClick={() => setActiveEditorTab('projects')}
              className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs font-semibold transition-all shrink-0 ${
                activeEditorTab === 'projects'
                  ? 'bg-primary text-dark-bg font-bold shadow-md shadow-primary/20'
                  : 'text-dark-muted hover:text-primary hover:bg-primary/10'
              }`}
            >
              <div className="flex items-center gap-2.5">
                <Briefcase size={16} />
                <span>Projects</span>
              </div>
              <span className="font-mono text-[10px] px-1.5 py-0.5 rounded bg-black/20 text-current">
                {projects.length}
              </span>
            </button>

            <button
              onClick={() => setActiveEditorTab('skills')}
              className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs font-semibold transition-all shrink-0 ${
                activeEditorTab === 'skills'
                  ? 'bg-primary text-dark-bg font-bold shadow-md shadow-primary/20'
                  : 'text-dark-muted hover:text-primary hover:bg-primary/10'
              }`}
            >
              <div className="flex items-center gap-2.5">
                <Layers size={16} />
                <span>Skills</span>
              </div>
              <span className="font-mono text-[10px] px-1.5 py-0.5 rounded bg-black/20 text-current">
                {skills.length}
              </span>
            </button>

            <button
              onClick={() => setActiveEditorTab('education')}
              className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs font-semibold transition-all shrink-0 ${
                activeEditorTab === 'education'
                  ? 'bg-primary text-dark-bg font-bold shadow-md shadow-primary/20'
                  : 'text-dark-muted hover:text-primary hover:bg-primary/10'
              }`}
            >
              <div className="flex items-center gap-2.5">
                <GraduationCap size={16} />
                <span>Education</span>
              </div>
              <span className="font-mono text-[10px] px-1.5 py-0.5 rounded bg-black/20 text-current">
                {education.length}
              </span>
            </button>

            <button
              onClick={() => setActiveEditorTab('certificates')}
              className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs font-semibold transition-all shrink-0 ${
                activeEditorTab === 'certificates'
                  ? 'bg-primary text-dark-bg font-bold shadow-md shadow-primary/20'
                  : 'text-dark-muted hover:text-primary hover:bg-primary/10'
              }`}
            >
              <div className="flex items-center gap-2.5">
                <Award size={16} />
                <span>Certifications</span>
              </div>
              <span className="font-mono text-[10px] px-1.5 py-0.5 rounded bg-black/20 text-current">
                {certificates.length}
              </span>
            </button>

            <button
              onClick={() => setActiveEditorTab('learning')}
              className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs font-semibold transition-all shrink-0 ${
                activeEditorTab === 'learning'
                  ? 'bg-primary text-dark-bg font-bold shadow-md shadow-primary/20'
                  : 'text-dark-muted hover:text-primary hover:bg-primary/10'
              }`}
            >
              <div className="flex items-center gap-2.5">
                <Compass size={16} />
                <span>Learning Journey</span>
              </div>
              <span className="font-mono text-[10px] px-1.5 py-0.5 rounded bg-black/20 text-current">
                {learning.length}
              </span>
            </button>

            <div className="pt-2 border-t border-dark-border dark:border-dark-border border-slate-200 mt-2">
              <button
                onClick={() => setActiveEditorTab('settings')}
                className={`w-full flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs font-semibold transition-all shrink-0 ${
                  activeEditorTab === 'settings'
                    ? 'bg-primary text-dark-bg font-bold shadow-md shadow-primary/20'
                    : 'text-dark-muted hover:text-primary hover:bg-primary/10'
                }`}
              >
                <Settings size={16} />
                <span>Backup &amp; Settings</span>
              </button>
            </div>
          </nav>

          {/* Main Content Area */}
          <div className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8">
            
            {/* ============================================================== */}
            {/* TAB: PROFILE & HERO                                            */}
            {/* ============================================================== */}
            {activeEditorTab === 'profile' && (
              <div className="max-w-4xl space-y-6">
                <div>
                  <h3 className="text-xl font-bold tracking-tight">Profile &amp; Hero Settings</h3>
                  <p className="text-xs text-dark-muted dark:text-dark-muted text-slate-500">
                    Update your primary identity, hero headlines, bio descriptions, and contact links.
                  </p>
                </div>

                <form onSubmit={handleProfileSave} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono font-medium text-dark-muted mb-1">
                        FULL NAME
                      </label>
                      <input
                        type="text"
                        value={profileForm.name}
                        onChange={(e) => setProfileForm({ ...profileForm, name: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-dark-surface dark:bg-dark-surface bg-slate-100 border border-dark-border text-sm font-semibold outline-none focus:border-primary"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono font-medium text-dark-muted mb-1">
                        INITIALS / BADGE
                      </label>
                      <input
                        type="text"
                        value={profileForm.initials}
                        onChange={(e) => setProfileForm({ ...profileForm, initials: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-dark-surface dark:bg-dark-surface bg-slate-100 border border-dark-border text-sm font-semibold outline-none focus:border-primary"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-medium text-dark-muted mb-1">
                      MAIN HEADLINE / SUBTITLE
                    </label>
                    <input
                      type="text"
                      value={profileForm.headline}
                      onChange={(e) => setProfileForm({ ...profileForm, headline: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-dark-surface dark:bg-dark-surface bg-slate-100 border border-dark-border text-sm outline-none focus:border-primary"
                      required
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono font-medium text-dark-muted mb-1">
                        HERO GREETING
                      </label>
                      <input
                        type="text"
                        value={profileForm.greeting}
                        onChange={(e) => setProfileForm({ ...profileForm, greeting: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-dark-surface dark:bg-dark-surface bg-slate-100 border border-dark-border text-sm outline-none focus:border-primary"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono font-medium text-dark-muted mb-1">
                        HERO MAIN HEADLINE
                      </label>
                      <input
                        type="text"
                        value={profileForm.heroHeadline}
                        onChange={(e) => setProfileForm({ ...profileForm, heroHeadline: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-dark-surface dark:bg-dark-surface bg-slate-100 border border-dark-border text-sm outline-none focus:border-primary"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-medium text-dark-muted mb-1">
                      HERO DESCRIPTION
                    </label>
                    <textarea
                      rows={3}
                      value={profileForm.heroDescription}
                      onChange={(e) => setProfileForm({ ...profileForm, heroDescription: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-dark-surface dark:bg-dark-surface bg-slate-100 border border-dark-border text-sm outline-none focus:border-primary"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-medium text-dark-muted mb-1">
                      ROTATING ROLES (Comma separated)
                    </label>
                    <input
                      type="text"
                      value={profileForm.roles.join(', ')}
                      onChange={(e) =>
                        setProfileForm({
                          ...profileForm,
                          roles: e.target.value.split(',').map((s) => s.trim()).filter(Boolean),
                        })
                      }
                      className="w-full px-3.5 py-2.5 rounded-xl bg-dark-surface dark:bg-dark-surface bg-slate-100 border border-dark-border text-sm font-mono outline-none focus:border-primary"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono font-medium text-dark-muted mb-1">
                        INSTITUTION / COLLEGE
                      </label>
                      <input
                        type="text"
                        value={profileForm.institution}
                        onChange={(e) => setProfileForm({ ...profileForm, institution: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-dark-surface dark:bg-dark-surface bg-slate-100 border border-dark-border text-sm outline-none focus:border-primary"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono font-medium text-dark-muted mb-1">
                        DEPARTMENT &amp; DEGREE
                      </label>
                      <input
                        type="text"
                        value={profileForm.department}
                        onChange={(e) => setProfileForm({ ...profileForm, department: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-dark-surface dark:bg-dark-surface bg-slate-100 border border-dark-border text-sm outline-none focus:border-primary"
                      />
                    </div>
                  </div>

                  {/* Social links */}
                  <div className="pt-4 border-t border-dark-border">
                    <h4 className="text-sm font-bold mb-3">Contact &amp; Social Links</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-mono font-medium text-dark-muted mb-1">
                          EMAIL ADDRESS
                        </label>
                        <input
                          type="email"
                          value={profileForm.social.email || ''}
                          onChange={(e) =>
                            setProfileForm({
                              ...profileForm,
                              social: { ...profileForm.social, email: e.target.value },
                            })
                          }
                          className="w-full px-3.5 py-2 rounded-xl bg-dark-surface border border-dark-border text-sm font-mono outline-none focus:border-primary"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-mono font-medium text-dark-muted mb-1">
                          WHATSAPP NUMBER
                        </label>
                        <input
                          type="text"
                          value={profileForm.social.whatsapp || ''}
                          onChange={(e) =>
                            setProfileForm({
                              ...profileForm,
                              social: { ...profileForm.social, whatsapp: e.target.value },
                            })
                          }
                          className="w-full px-3.5 py-2 rounded-xl bg-dark-surface border border-dark-border text-sm font-mono outline-none focus:border-primary"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-mono font-medium text-dark-muted mb-1">
                          GITHUB PROFILE URL
                        </label>
                        <input
                          type="url"
                          value={profileForm.social.github || ''}
                          onChange={(e) =>
                            setProfileForm({
                              ...profileForm,
                              social: { ...profileForm.social, github: e.target.value },
                            })
                          }
                          className="w-full px-3.5 py-2 rounded-xl bg-dark-surface border border-dark-border text-sm font-mono outline-none focus:border-primary"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-mono font-medium text-dark-muted mb-1">
                          LINKEDIN PROFILE URL
                        </label>
                        <input
                          type="url"
                          value={profileForm.social.linkedin || ''}
                          onChange={(e) =>
                            setProfileForm({
                              ...profileForm,
                              social: { ...profileForm.social, linkedin: e.target.value },
                            })
                          }
                          className="w-full px-3.5 py-2 rounded-xl bg-dark-surface border border-dark-border text-sm font-mono outline-none focus:border-primary"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-end pt-4">
                    <button
                      type="submit"
                      className="px-6 py-2.5 rounded-xl bg-primary hover:bg-primary-hover text-dark-bg font-bold text-sm flex items-center gap-2 shadow-lg shadow-primary/20 transition-all"
                    >
                      <Save size={16} />
                      <span>Save Profile Changes</span>
                    </button>
                  </div>
                </form>
              </div>
            )}

            {/* ============================================================== */}
            {/* TAB: PROJECTS (CRUD)                                           */}
            {/* ============================================================== */}
            {activeEditorTab === 'projects' && (
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-bold tracking-tight">Projects Management</h3>
                    <p className="text-xs text-dark-muted dark:text-dark-muted text-slate-500">
                      Create, edit, and delete featured projects showcased in your portfolio.
                    </p>
                  </div>
                  <button
                    onClick={() => {
                      setEditingProject({
                        id: `project-${Date.now()}`,
                        title: '',
                        category: 'Web Development',
                        categoryLabel: 'Web Engineering',
                        shortDescription: '',
                        fullDescription: '',
                        status: 'In Progress',
                        technologies: ['React', 'Node.js'],
                        plannedFeatures: ['Core feature implementation'],
                        gradient: 'from-blue-500/20 via-indigo-500/10 to-transparent',
                        accentColor: '#38BDF8',
                        iconName: 'folder',
                      });
                      setIsAddingProject(true);
                    }}
                    className="flex items-center gap-2 px-4 py-2 rounded-xl bg-primary hover:bg-primary-hover text-dark-bg font-bold text-xs shadow-md transition-all"
                  >
                    <Plus size={16} />
                    <span>Add New Project</span>
                  </button>
                </div>

                {/* Project Edit / Add Form Modal overlay */}
                {(isAddingProject || editingProject) && editingProject && (
                  <div className="p-6 rounded-2xl bg-dark-surface/90 dark:bg-dark-surface/90 bg-slate-100 border border-primary/40 space-y-4">
                    <div className="flex items-center justify-between border-b border-primary/20 pb-3">
                      <h4 className="font-bold text-base text-primary">
                        {isAddingProject ? '➕ Create New Project' : `✏️ Edit: ${editingProject.title}`}
                      </h4>
                      <button
                        onClick={() => {
                          setEditingProject(null);
                          setIsAddingProject(false);
                        }}
                        className="text-dark-muted hover:text-white"
                      >
                        <X size={18} />
                      </button>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      <div>
                        <label className="block text-xs font-mono font-medium text-dark-muted mb-1">TITLE</label>
                        <input
                          type="text"
                          value={editingProject.title}
                          onChange={(e) => setEditingProject({ ...editingProject, title: e.target.value })}
                          className="w-full px-3 py-2 rounded-xl bg-dark-bg border border-dark-border text-sm font-semibold outline-none focus:border-primary"
                          placeholder="Project Name"
                          required
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-mono font-medium text-dark-muted mb-1">CATEGORY</label>
                        <select
                          value={editingProject.category}
                          onChange={(e) =>
                            setEditingProject({
                              ...editingProject,
                              category: e.target.value as ProjectCategory,
                            })
                          }
                          className="w-full px-3 py-2 rounded-xl bg-dark-bg border border-dark-border text-sm outline-none focus:border-primary"
                        >
                          <option value="Web Development">Web Development</option>
                          <option value="Python">Python</option>
                          <option value="Artificial Intelligence">Artificial Intelligence</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-mono font-medium text-dark-muted mb-1">STATUS</label>
                        <select
                          value={editingProject.status}
                          onChange={(e) =>
                            setEditingProject({
                              ...editingProject,
                              status: e.target.value as ProjectStatus,
                            })
                          }
                          className="w-full px-3 py-2 rounded-xl bg-dark-bg border border-dark-border text-sm outline-none focus:border-primary"
                        >
                          <option value="Completed">Completed</option>
                          <option value="In Progress">In Progress</option>
                          <option value="Concept">Concept</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-mono font-medium text-dark-muted mb-1">
                        SHORT SUMMARY
                      </label>
                      <input
                        type="text"
                        value={editingProject.shortDescription}
                        onChange={(e) => setEditingProject({ ...editingProject, shortDescription: e.target.value })}
                        className="w-full px-3 py-2 rounded-xl bg-dark-bg border border-dark-border text-sm outline-none focus:border-primary"
                        placeholder="One-line summary for project cards"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono font-medium text-dark-muted mb-1">
                        FULL DESCRIPTION
                      </label>
                      <textarea
                        rows={3}
                        value={editingProject.fullDescription}
                        onChange={(e) => setEditingProject({ ...editingProject, fullDescription: e.target.value })}
                        className="w-full px-3 py-2 rounded-xl bg-dark-bg border border-dark-border text-sm outline-none focus:border-primary"
                        placeholder="Comprehensive details for project modal"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono font-medium text-dark-muted mb-1">
                        TECHNOLOGIES (Comma separated)
                      </label>
                      <input
                        type="text"
                        value={editingProject.technologies.join(', ')}
                        onChange={(e) =>
                          setEditingProject({
                            ...editingProject,
                            technologies: e.target.value.split(',').map((t) => t.trim()).filter(Boolean),
                          })
                        }
                        className="w-full px-3 py-2 rounded-xl bg-dark-bg border border-dark-border text-sm font-mono outline-none focus:border-primary"
                        placeholder="React, TypeScript, Python, Tailwind"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-mono font-medium text-dark-muted mb-1">
                          GITHUB URL (Optional)
                        </label>
                        <input
                          type="url"
                          value={editingProject.githubUrl || ''}
                          onChange={(e) => setEditingProject({ ...editingProject, githubUrl: e.target.value })}
                          className="w-full px-3 py-2 rounded-xl bg-dark-bg border border-dark-border text-sm font-mono outline-none focus:border-primary"
                          placeholder="https://github.com/..."
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-mono font-medium text-dark-muted mb-1">
                          LIVE PREVIEW URL (Optional)
                        </label>
                        <input
                          type="url"
                          value={editingProject.liveUrl || ''}
                          onChange={(e) => setEditingProject({ ...editingProject, liveUrl: e.target.value })}
                          className="w-full px-3 py-2 rounded-xl bg-dark-bg border border-dark-border text-sm font-mono outline-none focus:border-primary"
                          placeholder="https://my-app.vercel.app"
                        />
                      </div>
                    </div>

                    <div className="flex justify-end gap-2 pt-2">
                      <button
                        type="button"
                        onClick={() => {
                          setEditingProject(null);
                          setIsAddingProject(false);
                        }}
                        className="px-4 py-2 rounded-xl text-xs font-semibold text-dark-muted hover:text-white"
                      >
                        Cancel
                      </button>
                      <button
                        type="button"
                        onClick={() => {
                          if (!editingProject.title.trim()) {
                            alert('Project title is required.');
                            return;
                          }
                          if (isAddingProject) {
                            addProject(editingProject);
                            showToast(`Project "${editingProject.title}" added!`);
                          } else {
                            updateProject(editingProject.id, editingProject);
                            showToast(`Project "${editingProject.title}" updated!`);
                          }
                          setEditingProject(null);
                          setIsAddingProject(false);
                        }}
                        className="px-5 py-2 rounded-xl bg-primary hover:bg-primary-hover text-dark-bg text-xs font-bold shadow-md"
                      >
                        Save Project
                      </button>
                    </div>
                  </div>
                )}

                {/* Projects List */}
                <div className="grid grid-cols-1 gap-3">
                  {projects.map((proj) => (
                    <div
                      key={proj.id}
                      className="p-4 rounded-2xl bg-dark-surface/60 dark:bg-dark-surface/60 bg-slate-50 border border-dark-border flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                    >
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <h4 className="font-bold text-sm">{proj.title}</h4>
                          <span className="px-2 py-0.5 rounded-md text-[10px] font-mono bg-primary/10 text-primary border border-primary/20">
                            {proj.category}
                          </span>
                          <span className="px-2 py-0.5 rounded-md text-[10px] font-mono bg-dark-bg text-dark-muted border border-dark-border">
                            {proj.status}
                          </span>
                        </div>
                        <p className="text-xs text-dark-muted line-clamp-1">
                          {proj.shortDescription}
                        </p>
                        <div className="flex flex-wrap gap-1 pt-1">
                          {proj.technologies.map((t) => (
                            <span key={t} className="text-[10px] font-mono text-dark-muted">
                              #{t}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="flex items-center gap-2 shrink-0">
                        <button
                          onClick={() => {
                            setEditingProject(proj);
                            setIsAddingProject(false);
                          }}
                          className="p-2 rounded-xl border border-primary/30 text-primary hover:bg-primary/10 transition-colors"
                          title="Edit Project"
                        >
                          <Edit2 size={15} />
                        </button>
                        <button
                          onClick={() => {
                            if (window.confirm(`Delete project "${proj.title}"?`)) {
                              deleteProject(proj.id);
                              showToast(`Project "${proj.title}" deleted.`);
                            }
                          }}
                          className="p-2 rounded-xl border border-red-500/30 text-red-400 hover:bg-red-500/10 transition-colors"
                          title="Delete Project"
                        >
                          <Trash2 size={15} />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* ============================================================== */}
            {/* TAB: SKILLS (CRUD)                                             */}
            {/* ============================================================== */}
            {activeEditorTab === 'skills' && (
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-bold tracking-tight">Skills &amp; Technologies</h3>
                    <p className="text-xs text-dark-muted dark:text-dark-muted text-slate-500">
                      Add, adjust proficiency, and manage technical proficiencies.
                    </p>
                  </div>
                  <button
                    onClick={() => {
                      setEditingSkill({
                        origName: '',
                        item: {
                          name: '',
                          category: 'Programming',
                          proficiency: 'Comfortable With',
                          description: '',
                        },
                      });
                      setIsAddingSkill(true);
                    }}
                    className="flex items-center gap-2 px-4 py-2 rounded-xl bg-primary hover:bg-primary-hover text-dark-bg font-bold text-xs shadow-md transition-all"
                  >
                    <Plus size={16} />
                    <span>Add New Skill</span>
                  </button>
                </div>

                {/* Add / Edit Skill Drawer */}
                {(isAddingSkill || editingSkill) && editingSkill && (
                  <div className="p-5 rounded-2xl bg-dark-surface/90 border border-primary/40 space-y-4">
                    <h4 className="font-bold text-sm text-primary">
                      {isAddingSkill ? '➕ Add Skill' : `✏️ Edit: ${editingSkill.item.name}`}
                    </h4>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      <div>
                        <label className="block text-xs font-mono text-dark-muted mb-1">SKILL NAME</label>
                        <input
                          type="text"
                          value={editingSkill.item.name}
                          onChange={(e) =>
                            setEditingSkill({
                              ...editingSkill,
                              item: { ...editingSkill.item, name: e.target.value },
                            })
                          }
                          className="w-full px-3 py-2 rounded-xl bg-dark-bg border border-dark-border text-sm outline-none focus:border-primary font-bold"
                          placeholder="e.g. Python, Docker, C++"
                          required
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-mono text-dark-muted mb-1">CATEGORY</label>
                        <select
                          value={editingSkill.item.category}
                          onChange={(e) =>
                            setEditingSkill({
                              ...editingSkill,
                              item: {
                                ...editingSkill.item,
                                category: e.target.value as SkillItem['category'],
                              },
                            })
                          }
                          className="w-full px-3 py-2 rounded-xl bg-dark-bg border border-dark-border text-sm outline-none focus:border-primary"
                        >
                          <option value="Frontend">Frontend</option>
                          <option value="Backend">Backend</option>
                          <option value="Programming">Programming</option>
                          <option value="Databases">Databases</option>
                          <option value="Tools">Tools</option>
                          <option value="AI & IoT">AI &amp; IoT</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-mono text-dark-muted mb-1">PROFICIENCY</label>
                        <select
                          value={editingSkill.item.proficiency}
                          onChange={(e) =>
                            setEditingSkill({
                              ...editingSkill,
                              item: {
                                ...editingSkill.item,
                                proficiency: e.target.value as SkillProficiency,
                              },
                            })
                          }
                          className="w-full px-3 py-2 rounded-xl bg-dark-bg border border-dark-border text-sm outline-none focus:border-primary"
                        >
                          <option value="Comfortable With">Comfortable With</option>
                          <option value="Currently Learning">Currently Learning</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-dark-muted mb-1">DESCRIPTION / SCOPE</label>
                      <input
                        type="text"
                        value={editingSkill.item.description || ''}
                        onChange={(e) =>
                          setEditingSkill({
                            ...editingSkill,
                            item: { ...editingSkill.item, description: e.target.value },
                          })
                        }
                        className="w-full px-3 py-2 rounded-xl bg-dark-bg border border-dark-border text-sm outline-none focus:border-primary"
                        placeholder="Short context of experience"
                      />
                    </div>

                    <div className="flex justify-end gap-2 pt-2">
                      <button
                        type="button"
                        onClick={() => {
                          setEditingSkill(null);
                          setIsAddingSkill(false);
                        }}
                        className="px-4 py-2 rounded-xl text-xs font-semibold text-dark-muted hover:text-white"
                      >
                        Cancel
                      </button>
                      <button
                        type="button"
                        onClick={() => {
                          if (!editingSkill.item.name.trim()) {
                            alert('Skill name is required');
                            return;
                          }
                          if (isAddingSkill) {
                            addSkill(editingSkill.item);
                            showToast(`Skill "${editingSkill.item.name}" added!`);
                          } else {
                            updateSkill(editingSkill.origName, editingSkill.item);
                            showToast(`Skill "${editingSkill.item.name}" updated!`);
                          }
                          setEditingSkill(null);
                          setIsAddingSkill(false);
                        }}
                        className="px-5 py-2 rounded-xl bg-primary text-dark-bg text-xs font-bold shadow-md"
                      >
                        Save Skill
                      </button>
                    </div>
                  </div>
                )}

                {/* Skills Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {skills.map((s) => (
                    <div
                      key={s.name}
                      className="p-3.5 rounded-2xl bg-dark-surface/60 border border-dark-border flex items-center justify-between gap-2"
                    >
                      <div className="overflow-hidden">
                        <div className="flex items-center gap-2">
                          <span className="font-bold text-sm truncate">{s.name}</span>
                          <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-dark-bg text-primary border border-primary/20">
                            {s.category}
                          </span>
                        </div>
                        <p className="text-[11px] text-dark-muted truncate mt-0.5">
                          {s.proficiency}
                        </p>
                      </div>

                      <div className="flex items-center gap-1 shrink-0">
                        <button
                          onClick={() => {
                            setEditingSkill({ origName: s.name, item: { ...s } });
                            setIsAddingSkill(false);
                          }}
                          className="p-1.5 rounded-lg text-primary hover:bg-primary/10 transition-colors"
                          title="Edit Skill"
                        >
                          <Edit2 size={13} />
                        </button>
                        <button
                          onClick={() => {
                            if (window.confirm(`Delete skill "${s.name}"?`)) {
                              deleteSkill(s.name);
                              showToast(`Skill "${s.name}" deleted.`);
                            }
                          }}
                          className="p-1.5 rounded-lg text-red-400 hover:bg-red-500/10 transition-colors"
                          title="Delete Skill"
                        >
                          <Trash2 size={13} />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* ============================================================== */}
            {/* TAB: EDUCATION (CRUD)                                          */}
            {/* ============================================================== */}
            {activeEditorTab === 'education' && (
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-bold tracking-tight">Academic Education</h3>
                    <p className="text-xs text-dark-muted dark:text-dark-muted text-slate-500">
                      Manage degree programs, institutions, GPA scores, and academic highlights.
                    </p>
                  </div>
                  <button
                    onClick={() => {
                      setEditingEducation({
                        id: `edu-${Date.now()}`,
                        degree: 'Bachelor of Engineering (B.E.)',
                        department: 'Computer Science and Engineering',
                        institution: '',
                        location: 'Tamil Nadu, India',
                        period: '2025 – Present',
                        status: 'In Progress',
                        description: '',
                        coursework: ['Data Structures', 'Algorithms'],
                        workshopsAndSeminars: [],
                        verifiedHighlights: ['CGPA: 8.70/10'],
                      });
                      setIsAddingEducation(true);
                    }}
                    className="flex items-center gap-2 px-4 py-2 rounded-xl bg-primary hover:bg-primary-hover text-dark-bg font-bold text-xs shadow-md transition-all"
                  >
                    <Plus size={16} />
                    <span>Add Education</span>
                  </button>
                </div>

                {/* Edit / Add Education Form */}
                {(isAddingEducation || editingEducation) && editingEducation && (
                  <div className="p-6 rounded-2xl bg-dark-surface/90 border border-primary/40 space-y-4">
                    <h4 className="font-bold text-sm text-primary">
                      {isAddingEducation ? '➕ Add Education Entry' : `✏️ Edit: ${editingEducation.institution}`}
                    </h4>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-xs font-mono text-dark-muted mb-1">DEGREE</label>
                        <input
                          type="text"
                          value={editingEducation.degree}
                          onChange={(e) => setEditingEducation({ ...editingEducation, degree: e.target.value })}
                          className="w-full px-3 py-2 rounded-xl bg-dark-bg border border-dark-border text-sm outline-none focus:border-primary font-bold"
                          placeholder="e.g. Bachelor of Engineering (B.E.)"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-mono text-dark-muted mb-1">INSTITUTION</label>
                        <input
                          type="text"
                          value={editingEducation.institution}
                          onChange={(e) => setEditingEducation({ ...editingEducation, institution: e.target.value })}
                          className="w-full px-3 py-2 rounded-xl bg-dark-bg border border-dark-border text-sm outline-none focus:border-primary font-bold"
                          placeholder="e.g. Sengunthar Engineering College"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      <div>
                        <label className="block text-xs font-mono text-dark-muted mb-1">DEPARTMENT</label>
                        <input
                          type="text"
                          value={editingEducation.department}
                          onChange={(e) => setEditingEducation({ ...editingEducation, department: e.target.value })}
                          className="w-full px-3 py-2 rounded-xl bg-dark-bg border border-dark-border text-sm outline-none focus:border-primary"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-mono text-dark-muted mb-1">PERIOD</label>
                        <input
                          type="text"
                          value={editingEducation.period}
                          onChange={(e) => setEditingEducation({ ...editingEducation, period: e.target.value })}
                          className="w-full px-3 py-2 rounded-xl bg-dark-bg border border-dark-border text-sm outline-none focus:border-primary"
                          placeholder="2025 – Present"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-mono text-dark-muted mb-1">STATUS / CGPA</label>
                        <input
                          type="text"
                          value={editingEducation.status}
                          onChange={(e) => setEditingEducation({ ...editingEducation, status: e.target.value })}
                          className="w-full px-3 py-2 rounded-xl bg-dark-bg border border-dark-border text-sm outline-none focus:border-primary"
                          placeholder="In Progress (2nd Year, CGPA 8.70)"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-dark-muted mb-1">OVERVIEW DESCRIPTION</label>
                      <textarea
                        rows={3}
                        value={editingEducation.description}
                        onChange={(e) => setEditingEducation({ ...editingEducation, description: e.target.value })}
                        className="w-full px-3 py-2 rounded-xl bg-dark-bg border border-dark-border text-sm outline-none focus:border-primary"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-dark-muted mb-1">
                        KEY HIGHLIGHTS (One per line)
                      </label>
                      <textarea
                        rows={3}
                        value={editingEducation.verifiedHighlights.join('\n')}
                        onChange={(e) =>
                          setEditingEducation({
                            ...editingEducation,
                            verifiedHighlights: e.target.value.split('\n').filter(Boolean),
                          })
                        }
                        className="w-full px-3 py-2 rounded-xl bg-dark-bg border border-dark-border text-sm font-mono outline-none focus:border-primary"
                      />
                    </div>

                    <div className="flex justify-end gap-2 pt-2">
                      <button
                        type="button"
                        onClick={() => {
                          setEditingEducation(null);
                          setIsAddingEducation(false);
                        }}
                        className="px-4 py-2 rounded-xl text-xs font-semibold text-dark-muted hover:text-white"
                      >
                        Cancel
                      </button>
                      <button
                        type="button"
                        onClick={() => {
                          if (isAddingEducation) {
                            addEducation(editingEducation);
                            showToast('Education entry added!');
                          } else {
                            updateEducation(editingEducation.id, editingEducation);
                            showToast('Education entry updated!');
                          }
                          setEditingEducation(null);
                          setIsAddingEducation(false);
                        }}
                        className="px-5 py-2 rounded-xl bg-primary text-dark-bg text-xs font-bold shadow-md"
                      >
                        Save Education
                      </button>
                    </div>
                  </div>
                )}

                {/* Education List */}
                <div className="space-y-3">
                  {education.map((edu) => (
                    <div
                      key={edu.id}
                      className="p-5 rounded-2xl bg-dark-surface/60 border border-dark-border flex items-start justify-between gap-4"
                    >
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <h4 className="font-bold text-sm">{edu.degree}</h4>
                          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-primary/10 text-primary border border-primary/20">
                            {edu.period}
                          </span>
                        </div>
                        <p className="text-xs font-semibold text-primary/90">{edu.institution} &bull; {edu.location}</p>
                        <p className="text-xs text-dark-muted mt-1">{edu.description}</p>
                        <div className="flex flex-wrap gap-1.5 pt-2">
                          {edu.verifiedHighlights.slice(0, 3).map((h, i) => (
                            <span key={i} className="text-[10px] font-mono px-2 py-0.5 rounded bg-dark-bg text-dark-muted border border-dark-border">
                              &bull; {h}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="flex items-center gap-1.5 shrink-0">
                        <button
                          onClick={() => {
                            setEditingEducation(edu);
                            setIsAddingEducation(false);
                          }}
                          className="p-2 rounded-xl border border-primary/30 text-primary hover:bg-primary/10"
                          title="Edit"
                        >
                          <Edit2 size={14} />
                        </button>
                        <button
                          onClick={() => {
                            if (window.confirm(`Delete education entry "${edu.institution}"?`)) {
                              deleteEducation(edu.id);
                              showToast('Education entry deleted.');
                            }
                          }}
                          className="p-2 rounded-xl border border-red-500/30 text-red-400 hover:bg-red-500/10"
                          title="Delete"
                        >
                          <Trash2 size={14} />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* ============================================================== */}
            {/* TAB: CERTIFICATES (CRUD)                                       */}
            {/* ============================================================== */}
            {activeEditorTab === 'certificates' && (
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-bold tracking-tight">Certifications &amp; Credentials</h3>
                    <p className="text-xs text-dark-muted dark:text-dark-muted text-slate-500">
                      Manage official course certificates, dates, issuers, and verification URLs.
                    </p>
                  </div>
                  <button
                    onClick={() => {
                      setEditingCert({
                        id: `cert-${Date.now()}`,
                        title: '',
                        issuer: '',
                        date: new Date().toLocaleDateString('en-US', { month: 'short', year: 'numeric' }),
                        category: 'Programming & Web Development',
                        featured: true,
                        description: '',
                        badgeColor: 'border-blue-500/40 text-blue-400 bg-blue-500/10',
                        iconType: 'code',
                      });
                      setIsAddingCert(true);
                    }}
                    className="flex items-center gap-2 px-4 py-2 rounded-xl bg-primary hover:bg-primary-hover text-dark-bg font-bold text-xs shadow-md transition-all"
                  >
                    <Plus size={16} />
                    <span>Add Certificate</span>
                  </button>
                </div>

                {/* Edit / Add Cert Form */}
                {(isAddingCert || editingCert) && editingCert && (
                  <div className="p-6 rounded-2xl bg-dark-surface/90 border border-primary/40 space-y-4">
                    <h4 className="font-bold text-sm text-primary">
                      {isAddingCert ? '➕ Add Certificate' : `✏️ Edit: ${editingCert.title}`}
                    </h4>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-xs font-mono text-dark-muted mb-1">CERTIFICATE TITLE</label>
                        <input
                          type="text"
                          value={editingCert.title}
                          onChange={(e) => setEditingCert({ ...editingCert, title: e.target.value })}
                          className="w-full px-3 py-2 rounded-xl bg-dark-bg border border-dark-border text-sm outline-none focus:border-primary font-bold"
                          placeholder="e.g. Google AI Essentials"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-mono text-dark-muted mb-1">ISSUER / PLATFORM</label>
                        <input
                          type="text"
                          value={editingCert.issuer}
                          onChange={(e) => setEditingCert({ ...editingCert, issuer: e.target.value })}
                          className="w-full px-3 py-2 rounded-xl bg-dark-bg border border-dark-border text-sm outline-none focus:border-primary font-bold"
                          placeholder="Google, NPTEL, Coursera"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      <div>
                        <label className="block text-xs font-mono text-dark-muted mb-1">DATE</label>
                        <input
                          type="text"
                          value={editingCert.date || ''}
                          onChange={(e) => setEditingCert({ ...editingCert, date: e.target.value })}
                          className="w-full px-3 py-2 rounded-xl bg-dark-bg border border-dark-border text-sm outline-none focus:border-primary"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-mono text-dark-muted mb-1">CATEGORY</label>
                        <select
                          value={editingCert.category}
                          onChange={(e) =>
                            setEditingCert({
                              ...editingCert,
                              category: e.target.value as CertificateCategory,
                            })
                          }
                          className="w-full px-3 py-2 rounded-xl bg-dark-bg border border-dark-border text-sm outline-none focus:border-primary"
                        >
                          <option value="Artificial Intelligence & Generative AI">AI & GenAI</option>
                          <option value="Programming & Web Development">Programming & Web Dev</option>
                          <option value="Cybersecurity">Cybersecurity</option>
                          <option value="Developer Tools">Developer Tools</option>
                          <option value="Workshops & Technical Events">Workshops & Events</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-xs font-mono text-dark-muted mb-1">CREDENTIAL URL</label>
                        <input
                          type="url"
                          value={editingCert.credentialUrl || ''}
                          onChange={(e) => setEditingCert({ ...editingCert, credentialUrl: e.target.value })}
                          className="w-full px-3 py-2 rounded-xl bg-dark-bg border border-dark-border text-sm font-mono outline-none focus:border-primary"
                          placeholder="Verification link"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-dark-muted mb-1">DESCRIPTION</label>
                      <textarea
                        rows={3}
                        value={editingCert.description}
                        onChange={(e) => setEditingCert({ ...editingCert, description: e.target.value })}
                        className="w-full px-3 py-2 rounded-xl bg-dark-bg border border-dark-border text-sm outline-none focus:border-primary"
                      />
                    </div>

                    <div className="flex justify-end gap-2 pt-2">
                      <button
                        type="button"
                        onClick={() => {
                          setEditingCert(null);
                          setIsAddingCert(false);
                        }}
                        className="px-4 py-2 rounded-xl text-xs font-semibold text-dark-muted hover:text-white"
                      >
                        Cancel
                      </button>
                      <button
                        type="button"
                        onClick={() => {
                          if (isAddingCert) {
                            addCertificate(editingCert);
                            showToast(`Certificate "${editingCert.title}" added!`);
                          } else {
                            updateCertificate(editingCert.id, editingCert);
                            showToast(`Certificate "${editingCert.title}" updated!`);
                          }
                          setEditingCert(null);
                          setIsAddingCert(false);
                        }}
                        className="px-5 py-2 rounded-xl bg-primary text-dark-bg text-xs font-bold shadow-md"
                      >
                        Save Certificate
                      </button>
                    </div>
                  </div>
                )}

                {/* Certificates List */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {certificates.map((cert) => (
                    <div
                      key={cert.id}
                      className="p-4 rounded-2xl bg-dark-surface/60 border border-dark-border flex items-start justify-between gap-3"
                    >
                      <div className="space-y-1">
                        <h4 className="font-bold text-sm line-clamp-1">{cert.title}</h4>
                        <p className="text-xs text-primary/90 font-medium">
                          {cert.issuer} {cert.date ? `• ${cert.date}` : ''}
                        </p>
                        <p className="text-[11px] text-dark-muted line-clamp-2 mt-1">{cert.description}</p>
                      </div>

                      <div className="flex items-center gap-1 shrink-0">
                        <button
                          onClick={() => {
                            setEditingCert(cert);
                            setIsAddingCert(false);
                          }}
                          className="p-1.5 rounded-lg text-primary hover:bg-primary/10"
                          title="Edit"
                        >
                          <Edit2 size={14} />
                        </button>
                        <button
                          onClick={() => {
                            if (window.confirm(`Delete certificate "${cert.title}"?`)) {
                              deleteCertificate(cert.id);
                              showToast('Certificate deleted.');
                            }
                          }}
                          className="p-1.5 rounded-lg text-red-400 hover:bg-red-500/10"
                          title="Delete"
                        >
                          <Trash2 size={14} />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* ============================================================== */}
            {/* TAB: LEARNING JOURNEY (CRUD)                                   */}
            {/* ============================================================== */}
            {activeEditorTab === 'learning' && (
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-bold tracking-tight">Learning Journey &amp; Milestones</h3>
                    <p className="text-xs text-dark-muted dark:text-dark-muted text-slate-500">
                      Track ongoing studies, latest milestones, and upcoming targets.
                    </p>
                  </div>
                  <button
                    onClick={() => {
                      setEditingLearning({
                        id: `learn-${Date.now()}`,
                        topic: '',
                        category: 'Engineering',
                        currentStatus: '',
                        latestMilestone: '',
                        nextGoal: '',
                        progressLevel: 50,
                        tags: ['Software'],
                      });
                      setIsAddingLearning(true);
                    }}
                    className="flex items-center gap-2 px-4 py-2 rounded-xl bg-primary hover:bg-primary-hover text-dark-bg font-bold text-xs shadow-md transition-all"
                  >
                    <Plus size={16} />
                    <span>Add Milestone</span>
                  </button>
                </div>

                {/* Edit / Add Learning Form */}
                {(isAddingLearning || editingLearning) && editingLearning && (
                  <div className="p-6 rounded-2xl bg-dark-surface/90 border border-primary/40 space-y-4">
                    <h4 className="font-bold text-sm text-primary">
                      {isAddingLearning ? '➕ Add Milestone' : `✏️ Edit: ${editingLearning.topic}`}
                    </h4>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      <div>
                        <label className="block text-xs font-mono text-dark-muted mb-1">TOPIC</label>
                        <input
                          type="text"
                          value={editingLearning.topic}
                          onChange={(e) => setEditingLearning({ ...editingLearning, topic: e.target.value })}
                          className="w-full px-3 py-2 rounded-xl bg-dark-bg border border-dark-border text-sm outline-none focus:border-primary font-bold"
                          placeholder="e.g. Distributed Systems"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-mono text-dark-muted mb-1">CATEGORY</label>
                        <input
                          type="text"
                          value={editingLearning.category}
                          onChange={(e) => setEditingLearning({ ...editingLearning, category: e.target.value })}
                          className="w-full px-3 py-2 rounded-xl bg-dark-bg border border-dark-border text-sm outline-none focus:border-primary"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-mono text-dark-muted mb-1">PROGRESS % (0-100)</label>
                        <input
                          type="number"
                          min={0}
                          max={100}
                          value={editingLearning.progressLevel || 0}
                          onChange={(e) =>
                            setEditingLearning({
                              ...editingLearning,
                              progressLevel: parseInt(e.target.value) || 0,
                            })
                          }
                          className="w-full px-3 py-2 rounded-xl bg-dark-bg border border-dark-border text-sm font-mono outline-none focus:border-primary"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-dark-muted mb-1">CURRENT STUDY STATUS</label>
                      <input
                        type="text"
                        value={editingLearning.currentStatus}
                        onChange={(e) => setEditingLearning({ ...editingLearning, currentStatus: e.target.value })}
                        className="w-full px-3 py-2 rounded-xl bg-dark-bg border border-dark-border text-sm outline-none focus:border-primary"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-xs font-mono text-dark-muted mb-1">LATEST MILESTONE</label>
                        <input
                          type="text"
                          value={editingLearning.latestMilestone}
                          onChange={(e) => setEditingLearning({ ...editingLearning, latestMilestone: e.target.value })}
                          className="w-full px-3 py-2 rounded-xl bg-dark-bg border border-dark-border text-sm outline-none focus:border-primary"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-mono text-dark-muted mb-1">NEXT GOAL</label>
                        <input
                          type="text"
                          value={editingLearning.nextGoal}
                          onChange={(e) => setEditingLearning({ ...editingLearning, nextGoal: e.target.value })}
                          className="w-full px-3 py-2 rounded-xl bg-dark-bg border border-dark-border text-sm outline-none focus:border-primary"
                        />
                      </div>
                    </div>

                    <div className="flex justify-end gap-2 pt-2">
                      <button
                        type="button"
                        onClick={() => {
                          setEditingLearning(null);
                          setIsAddingLearning(false);
                        }}
                        className="px-4 py-2 rounded-xl text-xs font-semibold text-dark-muted hover:text-white"
                      >
                        Cancel
                      </button>
                      <button
                        type="button"
                        onClick={() => {
                          if (isAddingLearning) {
                            addLearning(editingLearning);
                            showToast(`Milestone "${editingLearning.topic}" added!`);
                          } else {
                            updateLearning(editingLearning.id, editingLearning);
                            showToast(`Milestone "${editingLearning.topic}" updated!`);
                          }
                          setEditingLearning(null);
                          setIsAddingLearning(false);
                        }}
                        className="px-5 py-2 rounded-xl bg-primary text-dark-bg text-xs font-bold shadow-md"
                      >
                        Save Milestone
                      </button>
                    </div>
                  </div>
                )}

                {/* Learning Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {learning.map((item) => (
                    <div
                      key={item.id}
                      className="p-4 rounded-2xl bg-dark-surface/60 border border-dark-border flex items-start justify-between gap-3"
                    >
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <h4 className="font-bold text-sm">{item.topic}</h4>
                          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-primary/10 text-primary">
                            {item.progressLevel}%
                          </span>
                        </div>
                        <p className="text-xs text-dark-muted">{item.currentStatus}</p>
                        <p className="text-[11px] text-emerald-400">&bull; Latest: {item.latestMilestone}</p>
                        <p className="text-[11px] text-blue-400">&bull; Goal: {item.nextGoal}</p>
                      </div>

                      <div className="flex items-center gap-1 shrink-0">
                        <button
                          onClick={() => {
                            setEditingLearning(item);
                            setIsAddingLearning(false);
                          }}
                          className="p-1.5 rounded-lg text-primary hover:bg-primary/10"
                          title="Edit"
                        >
                          <Edit2 size={14} />
                        </button>
                        <button
                          onClick={() => {
                            if (window.confirm(`Delete milestone "${item.topic}"?`)) {
                              deleteLearning(item.id);
                              showToast('Milestone deleted.');
                            }
                          }}
                          className="p-1.5 rounded-lg text-red-400 hover:bg-red-500/10"
                          title="Delete"
                        >
                          <Trash2 size={14} />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* ============================================================== */}
            {/* TAB: BACKUP & SETTINGS                                         */}
            {/* ============================================================== */}
            {activeEditorTab === 'settings' && (
              <div className="max-w-3xl space-y-8">
                <div>
                  <h3 className="text-xl font-bold tracking-tight">Admin Settings &amp; Data Backup</h3>
                  <p className="text-xs text-dark-muted dark:text-dark-muted text-slate-500">
                    Export your custom edits, import portfolio bundles, or reset everything back to factory defaults.
                  </p>
                </div>

                {/* Change Admin Password */}
                <div className="p-5 rounded-2xl bg-dark-surface/70 border border-dark-border space-y-3">
                  <h4 className="font-bold text-sm">Security &amp; Admin Password</h4>
                  <p className="text-xs text-dark-muted">
                    Current password is active. Enter a new password to update your authentication key.
                  </p>
                  <div className="flex items-center gap-2 max-w-sm">
                    <input
                      type="text"
                      value={newPassword}
                      onChange={(e) => setNewPassword(e.target.value)}
                      placeholder="New password"
                      className="px-3.5 py-2 rounded-xl bg-dark-bg border border-dark-border text-sm font-mono outline-none focus:border-primary flex-1"
                    />
                    <button
                      type="button"
                      onClick={() => {
                        if (!newPassword.trim()) return;
                        changePassword(newPassword.trim());
                        setNewPassword('');
                        showToast('Admin password updated successfully!');
                      }}
                      className="px-4 py-2 rounded-xl bg-primary text-dark-bg text-xs font-bold shrink-0"
                    >
                      Update Password
                    </button>
                  </div>
                </div>

                {/* Export Data JSON */}
                <div className="p-5 rounded-2xl bg-dark-surface/70 border border-dark-border space-y-3">
                  <h4 className="font-bold text-sm">Export Portfolio Data (Backup)</h4>
                  <p className="text-xs text-dark-muted">
                    Download or copy the complete portfolio JSON bundle including all your custom edits.
                  </p>
                  <div className="flex gap-2">
                    <button
                      type="button"
                      onClick={() => {
                        const jsonStr = exportDataJson();
                        const blob = new Blob([jsonStr], { type: 'application/json' });
                        const url = URL.createObjectURL(blob);
                        const a = document.createElement('a');
                        a.href = url;
                        a.download = `portfolio-backup-${new Date().toISOString().slice(0, 10)}.json`;
                        a.click();
                        URL.revokeObjectURL(url);
                        showToast('Backup JSON downloaded!');
                      }}
                      className="flex items-center gap-2 px-4 py-2 rounded-xl bg-primary/10 border border-primary/30 text-primary hover:bg-primary/20 text-xs font-bold transition-all"
                    >
                      <Download size={14} />
                      <span>Download JSON Backup</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => {
                        navigator.clipboard.writeText(exportDataJson());
                        showToast('JSON copied to clipboard!');
                      }}
                      className="px-4 py-2 rounded-xl bg-dark-bg border border-dark-border text-dark-muted hover:text-white text-xs font-semibold"
                    >
                      Copy to Clipboard
                    </button>
                  </div>
                </div>

                {/* Import Data JSON */}
                <div className="p-5 rounded-2xl bg-dark-surface/70 border border-dark-border space-y-3">
                  <h4 className="font-bold text-sm">Import Portfolio Data</h4>
                  <p className="text-xs text-dark-muted">
                    Paste an exported JSON bundle to overwrite and restore custom portfolio content.
                  </p>
                  <textarea
                    rows={3}
                    value={importJsonText}
                    onChange={(e) => setImportJsonText(e.target.value)}
                    placeholder="Paste portfolio backup JSON here..."
                    className="w-full px-3 py-2 rounded-xl bg-dark-bg border border-dark-border text-xs font-mono outline-none focus:border-primary"
                  />
                  <button
                    type="button"
                    onClick={() => {
                      if (!importJsonText.trim()) return;
                      const ok = importDataJson(importJsonText.trim());
                      if (ok) {
                        setImportJsonText('');
                        showToast('Portfolio data restored from JSON!');
                      } else {
                        alert('Invalid JSON structure. Please verify backup format.');
                      }
                    }}
                    className="flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 hover:bg-emerald-500/30 text-xs font-bold transition-all"
                  >
                    <Upload size={14} />
                    <span>Apply Imported Data</span>
                  </button>
                </div>

                {/* Reset All to Factory Defaults */}
                <div className="p-5 rounded-2xl bg-red-500/5 border border-red-500/20 space-y-3">
                  <h4 className="font-bold text-sm text-red-400">Reset to Factory Defaults</h4>
                  <p className="text-xs text-dark-muted">
                    Permanently reset all portfolio content (projects, skills, education, certificates) back to the clean default source code.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      if (
                        window.confirm(
                          'Are you sure you want to revert all changes back to original defaults?'
                        )
                      ) {
                        resetAllData();
                        showToast('All portfolio data reset to original defaults!');
                      }
                    }}
                    className="flex items-center gap-2 px-4 py-2 rounded-xl bg-red-500 hover:bg-red-600 text-white text-xs font-bold shadow-md transition-all"
                  >
                    <RefreshCw size={14} />
                    <span>Revert Everything to Default</span>
                  </button>
                </div>
              </div>
            )}

          </div>
        </div>
      </div>
    </div>
  );
};
