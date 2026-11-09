export interface SocialLinks {
  github?: string;
  linkedin?: string;
  email?: string;
  whatsapp?: string;
  blog?: string;
}

export interface ProfileData {
  name: string;
  initials: string;
  headline: string;
  greeting: string;
  heroHeadline: string;
  heroDescription: string;
  roles: string[];
  aboutHeading: string;
  aboutText: string;
  expandableAbout: {
    engineeringMindset: string;
    problemSolving: string;
    collaboration: string;
    aspirations: string;
  };
  institution: string;
  department: string;
  degree: string;
  location: string;
  availability: {
    status: boolean;
    label: string;
  };
  social: SocialLinks;
  resumeUrl: string; // Path or external link
  photoUrl?: string;
}

export type SkillProficiency = 'Comfortable With' | 'Currently Learning';

export interface SkillItem {
  name: string;
  category: 'Frontend' | 'Backend' | 'Programming' | 'Databases' | 'Tools' | 'AI & IoT';
  proficiency: SkillProficiency;
  icon?: string;
  description?: string;
}

export type ProjectStatus = 'Concept' | 'In Progress' | 'Completed';
export type ProjectCategory = 'Web Development' | 'Python' | 'Artificial Intelligence';

export interface ProjectItem {
  id: string;
  title: string;
  category: ProjectCategory;
  categoryLabel: string;
  shortDescription: string;
  fullDescription: string;
  status: ProjectStatus;
  technologies: string[];
  plannedFeatures: string[];
  githubUrl?: string; // Only displayed when real link exists
  liveUrl?: string;   // Only displayed when real link exists
  gradient: string;
  accentColor: string;
  iconName: string;
}

export interface EducationItem {
  id: string;
  degree: string;
  department: string;
  institution: string;
  location: string;
  period: string;
  status: string;
  description: string;
  coursework: string[];
  workshopsAndSeminars: string[];
  verifiedHighlights: string[];
}

export type CertificateCategory =
  | 'All Certificates'
  | 'Artificial Intelligence & Generative AI'
  | 'Programming & Web Development'
  | 'Cybersecurity'
  | 'Developer Tools'
  | 'Workshops & Technical Events';

export interface CertificateItem {
  id: string;
  title: string;
  issuer: string;
  date?: string;
  category: CertificateCategory;
  featured: boolean;
  description: string;
  credentialUrl?: string;
  image?: string; // Path to high-res image once user adds it
  badgeColor: string;
  iconType: 'ai' | 'code' | 'security' | 'tools' | 'workshop' | 'cloud';
}

export interface LearningItem {
  id: string;
  topic: string;
  currentStatus: string;
  latestMilestone: string;
  nextGoal: string;
  progressLevel?: number; // 0-100 optional manual indicator
  category: string;
  tags: string[];
}
