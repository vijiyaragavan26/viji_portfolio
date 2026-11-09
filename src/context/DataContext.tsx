import React, { createContext, useContext, useState, useEffect } from 'react';
import {
  ProfileData,
  ProjectItem,
  SkillItem,
  EducationItem,
  CertificateItem,
  LearningItem,
} from '../types';
import { profileData as defaultProfile } from '../data/profile';
import { projectsData as defaultProjects } from '../data/projects';
import { skillItems as defaultSkills } from '../data/skills';
import { educationData as defaultEducation } from '../data/education';
import { certificatesData as defaultCertificates } from '../data/certificates';
import { learningItems as defaultLearning } from '../data/learning';

export type AdminTab =
  | 'profile'
  | 'projects'
  | 'skills'
  | 'education'
  | 'certificates'
  | 'learning'
  | 'settings';

interface DataContextType {
  // Data States
  profile: ProfileData;
  projects: ProjectItem[];
  skills: SkillItem[];
  education: EducationItem[];
  certificates: CertificateItem[];
  learning: LearningItem[];

  // Admin Session State
  isAdmin: boolean;
  login: (pass: string) => boolean;
  logout: () => void;
  adminPassword: string;
  changePassword: (newPass: string) => void;

  // Modals & Navigation
  isLoginModalOpen: boolean;
  setIsLoginModalOpen: (open: boolean) => void;
  isEditorOpen: boolean;
  setIsEditorOpen: (open: boolean) => void;
  activeEditorTab: AdminTab;
  setActiveEditorTab: (tab: AdminTab) => void;
  openEditor: (tab?: AdminTab) => void;

  // Profile CRUD
  updateProfile: (data: Partial<ProfileData>) => void;

  // Projects CRUD
  addProject: (item: ProjectItem) => void;
  updateProject: (id: string, item: Partial<ProjectItem>) => void;
  deleteProject: (id: string) => void;

  // Skills CRUD
  addSkill: (item: SkillItem) => void;
  updateSkill: (name: string, item: Partial<SkillItem>) => void;
  deleteSkill: (name: string) => void;

  // Education CRUD
  addEducation: (item: EducationItem) => void;
  updateEducation: (id: string, item: Partial<EducationItem>) => void;
  deleteEducation: (id: string) => void;

  // Certificates CRUD
  addCertificate: (item: CertificateItem) => void;
  updateCertificate: (id: string, item: Partial<CertificateItem>) => void;
  deleteCertificate: (id: string) => void;

  // Learning CRUD
  addLearning: (item: LearningItem) => void;
  updateLearning: (id: string, item: Partial<LearningItem>) => void;
  deleteLearning: (id: string) => void;

  // Reset & Backup
  resetAllData: () => void;
  exportDataJson: () => string;
  importDataJson: (jsonStr: string) => boolean;
}

const STORAGE_KEYS = {
  PROFILE: 'portfolio_data_profile_v3',
  PROJECTS: 'portfolio_data_projects_v2',
  SKILLS: 'portfolio_data_skills_v2',
  EDUCATION: 'portfolio_data_education_v2',
  CERTIFICATES: 'portfolio_data_certificates_v2',
  LEARNING: 'portfolio_data_learning_v2',
  PASSWORD: 'portfolio_admin_password_v3',
  SESSION: 'portfolio_admin_session_v3',
};

const DEFAULT_ADMIN_PASS = 'Vijay@265';

const DataContext = createContext<DataContextType | undefined>(undefined);

function loadFromStorage<T>(key: string, defaultValue: T): T {
  try {
    const raw = localStorage.getItem(key);
    if (raw) {
      return JSON.parse(raw);
    }
  } catch (err) {
    console.error(`Failed to load ${key} from localStorage:`, err);
  }
  return defaultValue;
}

function saveToStorage<T>(key: string, value: T) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (err) {
    console.error(`Failed to save ${key} to localStorage:`, err);
  }
}

export const DataProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [profile, setProfileState] = useState<ProfileData>(() =>
    loadFromStorage(STORAGE_KEYS.PROFILE, defaultProfile)
  );
  const [projects, setProjectsState] = useState<ProjectItem[]>(() =>
    loadFromStorage(STORAGE_KEYS.PROJECTS, defaultProjects)
  );
  const [skills, setSkillsState] = useState<SkillItem[]>(() =>
    loadFromStorage(STORAGE_KEYS.SKILLS, defaultSkills)
  );
  const [education, setEducationState] = useState<EducationItem[]>(() =>
    loadFromStorage(STORAGE_KEYS.EDUCATION, defaultEducation)
  );
  const [certificates, setCertificatesState] = useState<CertificateItem[]>(() =>
    loadFromStorage(STORAGE_KEYS.CERTIFICATES, defaultCertificates)
  );
  const [learning, setLearningState] = useState<LearningItem[]>(() =>
    loadFromStorage(STORAGE_KEYS.LEARNING, defaultLearning)
  );

  const [adminPassword, setAdminPassword] = useState<string>(() => {
    return localStorage.getItem(STORAGE_KEYS.PASSWORD) || DEFAULT_ADMIN_PASS;
  });

  const [isAdmin, setIsAdmin] = useState<boolean>(() => {
    return sessionStorage.getItem(STORAGE_KEYS.SESSION) === 'true';
  });

  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isEditorOpen, setIsEditorOpen] = useState(false);
  const [activeEditorTab, setActiveEditorTab] = useState<AdminTab>('profile');

  // Persistence effects
  useEffect(() => {
    saveToStorage(STORAGE_KEYS.PROFILE, profile);
  }, [profile]);

  useEffect(() => {
    saveToStorage(STORAGE_KEYS.PROJECTS, projects);
  }, [projects]);

  useEffect(() => {
    saveToStorage(STORAGE_KEYS.SKILLS, skills);
  }, [skills]);

  useEffect(() => {
    saveToStorage(STORAGE_KEYS.EDUCATION, education);
  }, [education]);

  useEffect(() => {
    saveToStorage(STORAGE_KEYS.CERTIFICATES, certificates);
  }, [certificates]);

  useEffect(() => {
    saveToStorage(STORAGE_KEYS.LEARNING, learning);
  }, [learning]);

  // Auth functions
  const login = (pass: string): boolean => {
    if (pass.trim() === adminPassword.trim()) {
      setIsAdmin(true);
      sessionStorage.setItem(STORAGE_KEYS.SESSION, 'true');
      setIsLoginModalOpen(false);
      setIsEditorOpen(true);
      return true;
    }
    return false;
  };

  const logout = () => {
    setIsAdmin(false);
    sessionStorage.removeItem(STORAGE_KEYS.SESSION);
    setIsEditorOpen(false);
  };

  const changePassword = (newPass: string) => {
    setAdminPassword(newPass);
    localStorage.setItem(STORAGE_KEYS.PASSWORD, newPass);
  };

  const openEditor = (tab?: AdminTab) => {
    if (tab) setActiveEditorTab(tab);
    setIsEditorOpen(true);
  };

  // Profile CRUD
  const updateProfile = (data: Partial<ProfileData>) => {
    setProfileState((prev) => ({ ...prev, ...data }));
  };

  // Projects CRUD
  const addProject = (item: ProjectItem) => {
    setProjectsState((prev) => [item, ...prev]);
  };

  const updateProject = (id: string, item: Partial<ProjectItem>) => {
    setProjectsState((prev) =>
      prev.map((p) => (p.id === id ? { ...p, ...item } : p))
    );
  };

  const deleteProject = (id: string) => {
    setProjectsState((prev) => prev.filter((p) => p.id !== id));
  };

  // Skills CRUD
  const addSkill = (item: SkillItem) => {
    setSkillsState((prev) => [...prev, item]);
  };

  const updateSkill = (name: string, item: Partial<SkillItem>) => {
    setSkillsState((prev) =>
      prev.map((s) => (s.name.toLowerCase() === name.toLowerCase() ? { ...s, ...item } : s))
    );
  };

  const deleteSkill = (name: string) => {
    setSkillsState((prev) =>
      prev.filter((s) => s.name.toLowerCase() !== name.toLowerCase())
    );
  };

  // Education CRUD
  const addEducation = (item: EducationItem) => {
    setEducationState((prev) => [item, ...prev]);
  };

  const updateEducation = (id: string, item: Partial<EducationItem>) => {
    setEducationState((prev) =>
      prev.map((e) => (e.id === id ? { ...e, ...item } : e))
    );
  };

  const deleteEducation = (id: string) => {
    setEducationState((prev) => prev.filter((e) => e.id !== id));
  };

  // Certificates CRUD
  const addCertificate = (item: CertificateItem) => {
    setCertificatesState((prev) => [item, ...prev]);
  };

  const updateCertificate = (id: string, item: Partial<CertificateItem>) => {
    setCertificatesState((prev) =>
      prev.map((c) => (c.id === id ? { ...c, ...item } : c))
    );
  };

  const deleteCertificate = (id: string) => {
    setCertificatesState((prev) => prev.filter((c) => c.id !== id));
  };

  // Learning CRUD
  const addLearning = (item: LearningItem) => {
    setLearningState((prev) => [item, ...prev]);
  };

  const updateLearning = (id: string, item: Partial<LearningItem>) => {
    setLearningState((prev) =>
      prev.map((l) => (l.id === id ? { ...l, ...item } : l))
    );
  };

  const deleteLearning = (id: string) => {
    setLearningState((prev) => prev.filter((l) => l.id !== id));
  };

  // Reset to default factory data
  const resetAllData = () => {
    setProfileState(defaultProfile);
    setProjectsState(defaultProjects);
    setSkillsState(defaultSkills);
    setEducationState(defaultEducation);
    setCertificatesState(defaultCertificates);
    setLearningState(defaultLearning);
    saveToStorage(STORAGE_KEYS.PROFILE, defaultProfile);
    saveToStorage(STORAGE_KEYS.PROJECTS, defaultProjects);
    saveToStorage(STORAGE_KEYS.SKILLS, defaultSkills);
    saveToStorage(STORAGE_KEYS.EDUCATION, defaultEducation);
    saveToStorage(STORAGE_KEYS.CERTIFICATES, defaultCertificates);
    saveToStorage(STORAGE_KEYS.LEARNING, defaultLearning);
  };

  // Export JSON backup
  const exportDataJson = (): string => {
    const bundle = {
      profile,
      projects,
      skills,
      education,
      certificates,
      learning,
      exportedAt: new Date().toISOString(),
    };
    return JSON.stringify(bundle, null, 2);
  };

  // Import JSON backup
  const importDataJson = (jsonStr: string): boolean => {
    try {
      const parsed = JSON.parse(jsonStr);
      if (parsed.profile) setProfileState(parsed.profile);
      if (Array.isArray(parsed.projects)) setProjectsState(parsed.projects);
      if (Array.isArray(parsed.skills)) setSkillsState(parsed.skills);
      if (Array.isArray(parsed.education)) setEducationState(parsed.education);
      if (Array.isArray(parsed.certificates)) setCertificatesState(parsed.certificates);
      if (Array.isArray(parsed.learning)) setLearningState(parsed.learning);
      return true;
    } catch (err) {
      console.error('Failed to parse import JSON:', err);
      return false;
    }
  };

  return (
    <DataContext.Provider
      value={{
        profile,
        projects,
        skills,
        education,
        certificates,
        learning,
        isAdmin,
        login,
        logout,
        adminPassword,
        changePassword,
        isLoginModalOpen,
        setIsLoginModalOpen,
        isEditorOpen,
        setIsEditorOpen,
        activeEditorTab,
        setActiveEditorTab,
        openEditor,
        updateProfile,
        addProject,
        updateProject,
        deleteProject,
        addSkill,
        updateSkill,
        deleteSkill,
        addEducation,
        updateEducation,
        deleteEducation,
        addCertificate,
        updateCertificate,
        deleteCertificate,
        addLearning,
        updateLearning,
        deleteLearning,
        resetAllData,
        exportDataJson,
        importDataJson,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const usePortfolioData = () => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error('usePortfolioData must be used within a DataProvider');
  }
  return context;
};
