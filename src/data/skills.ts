import { SkillItem } from '../types';

export const skillItems: SkillItem[] = [
  // Frontend
  {
    name: 'HTML5',
    category: 'Frontend',
    proficiency: 'Comfortable With',
    description: 'Semantic markup, modern web standards, accessibility',
  },
  {
    name: 'CSS3',
    category: 'Frontend',
    proficiency: 'Comfortable With',
    description: 'Flexbox, Grid, animations, responsive design',
  },
  {
    name: 'JavaScript',
    category: 'Frontend',
    proficiency: 'Comfortable With',
    description: 'ES6+, asynchronous programming, DOM manipulation',
  },
  {
    name: 'React',
    category: 'Frontend',
    proficiency: 'Currently Learning',
    description: 'Component architecture, hooks, state management',
  },
  {
    name: 'TypeScript',
    category: 'Frontend',
    proficiency: 'Currently Learning',
    description: 'Type safety, interfaces, typed modern web development',
  },

  // Backend
  {
    name: 'Node.js',
    category: 'Backend',
    proficiency: 'Currently Learning',
    description: 'JavaScript runtime, asynchronous I/O, server scripts',
  },
  {
    name: 'Express.js',
    category: 'Backend',
    proficiency: 'Currently Learning',
    description: 'Server routing, middleware, backend services',
  },
  {
    name: 'REST APIs',
    category: 'Backend',
    proficiency: 'Currently Learning',
    description: 'Endpoint architecture, JSON data exchange, CRUD services',
  },

  // Programming
  {
    name: 'Python',
    category: 'Programming',
    proficiency: 'Comfortable With',
    description: 'Core syntax, OOP, scripting, data handling',
  },
  {
    name: 'C',
    category: 'Programming',
    proficiency: 'Comfortable With',
    description: 'Foundational programming, memory concepts, algorithms',
  },

  // Databases
  {
    name: 'PostgreSQL',
    category: 'Databases',
    proficiency: 'Currently Learning',
    description: 'Relational data modeling, SQL queries, schemas',
  },
  {
    name: 'MySQL',
    category: 'Databases',
    proficiency: 'Currently Learning',
    description: 'Relational databases, indexing, relational tables',
  },
  {
    name: 'MongoDB',
    category: 'Databases',
    proficiency: 'Currently Learning',
    description: 'Document-oriented NoSQL, JSON-like structures',
  },

  // Tools
  {
    name: 'Git',
    category: 'Tools',
    proficiency: 'Comfortable With',
    description: 'Version control, branch management, commit hygiene',
  },
  {
    name: 'GitHub',
    category: 'Tools',
    proficiency: 'Comfortable With',
    description: 'Repository hosting, collaborative workflows, issues',
  },
  {
    name: 'VS Code',
    category: 'Tools',
    proficiency: 'Comfortable With',
    description: 'Primary code editor, extensions, workspace debugging',
  },
  {
    name: 'Netlify',
    category: 'Tools',
    proficiency: 'Comfortable With',
    description: 'Frontend deployment, continuous deployment workflows',
  },
  {
    name: 'Vercel',
    category: 'Tools',
    proficiency: 'Comfortable With',
    description: 'React/Vite production deployments, cloud edge',
  },

  // AI and IoT
  {
    name: 'AI-assisted development tools',
    category: 'AI & IoT',
    proficiency: 'Comfortable With',
    description: 'Claude Code, GitHub Copilot, prompting, iterative coding',
  },
  {
    name: 'OpenCV',
    category: 'AI & IoT',
    proficiency: 'Currently Learning',
    description: 'Computer vision fundamentals, image processing techniques',
  },
  {
    name: 'IoT fundamentals',
    category: 'AI & IoT',
    proficiency: 'Currently Learning',
    description: 'Microcontrollers, architecture of embedded devices',
  },
  {
    name: 'Sensors & connected systems',
    category: 'AI & IoT',
    proficiency: 'Currently Learning',
    description: 'Sensor interfacing, telemetry, data acquisition protocols',
  },
];

export const skillCategories = [
  'All',
  'Frontend',
  'Backend',
  'Programming',
  'Databases',
  'Tools',
  'AI & IoT',
] as const;
