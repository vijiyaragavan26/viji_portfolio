import { ProjectItem } from '../types';

export const projectsData: ProjectItem[] = [
  {
    id: 'meatmart',
    title: 'MeatMart',
    category: 'Web Development',
    categoryLabel: 'E-commerce / Full-Stack Development',
    shortDescription:
      'A local delivery platform concept for ordering chicken, selected masalas, and related products, with customer ordering and delivery management features.',
    fullDescription:
      'MeatMart is designed as a localized quick-commerce solution catering to neighborhood meat delivery, customized portions, and essential kitchen spice blends. The project explores full-stack architecture, real-time inventory adjustments, seamless cart operations, and an intuitive dispatch dashboard for store owners.',
    status: 'Concept',
    technologies: ['React', 'Node.js', 'Express.js', 'PostgreSQL', 'Tailwind CSS', 'REST APIs'],
    plannedFeatures: [
      'Product catalog with categorized inventory and portion sizing',
      'Interactive shopping cart with instant subtotal calculations',
      'Secure customer authentication and profile management',
      'Order placement, status tracking, and delivery timeline',
      'Online payment gateway integration (mock / test sandbox)',
      'Delivery-area geo-fence configuration and minimum order rules',
      'Admin dashboard for real-time inventory updates and order fulfillment',
    ],
    // Repository & live URLs: Leave undefined or set when published
    // githubUrl: 'https://github.com/Vijayaragavan-V/meatmart',
    // liveUrl: 'https://meatmart-preview.vercel.app',
    gradient: 'from-amber-500/20 via-orange-500/10 to-transparent',
    accentColor: '#F97316',
    iconName: 'shopping-bag',
  },
  {
    id: 'ai-personal-assistant',
    title: 'AI Personal Assistant',
    category: 'Artificial Intelligence',
    categoryLabel: 'Python / Artificial Intelligence',
    shortDescription:
      'A personal AI assistant project exploring conversational interfaces, useful automation, and integration with AI services.',
    fullDescription:
      'An intelligent desktop and terminal personal assistant prototype built in Python. It interfaces with modern LLM APIs to perform task automation, answer technical queries, summarize developer documentation, and execute routine local system tasks through structured natural language commands.',
    status: 'In Progress',
    technologies: ['Python', 'OpenAI / Claude API', 'JSON-based Storage', 'Prompt Engineering', 'OS Scripting'],
    plannedFeatures: [
      'Interactive terminal and web-based chat interface',
      'AI API integration with temperature and token configuration',
      'Configurable assistant personality and specialized system instructions',
      'Robust error handling, rate-limit recovery, and fallback models',
      'Optional local conversation history persistence and memory retrieval',
      'Quick developer utilities (code explanation, regex generation, git commit helper)',
    ],
    // githubUrl: 'https://github.com/Vijayaragavan-V/ai-personal-assistant',
    gradient: 'from-blue-500/20 via-indigo-500/10 to-transparent',
    accentColor: '#60A5FA',
    iconName: 'bot',
  },
  {
    id: 'student-record-manager',
    title: 'Student Record Manager',
    category: 'Python',
    categoryLabel: 'Python / Programming',
    shortDescription:
      'A Python project for managing student records and practicing programming fundamentals, data structures, CRUD operations, and input validation.',
    fullDescription:
      'A robust terminal-based data management application created to deepen understanding of fundamental computer science principles. It implements complete CRUD operations for student academic records, robust input sanitization, sorting algorithms, and optional file-based persistence using CSV and JSON serialization.',
    status: 'Completed',
    technologies: ['Python', 'Data Structures', 'File I/O (JSON/CSV)', 'Unit Testing', 'CLI UI'],
    plannedFeatures: [
      'Add student records with student ID, name, branch, and semester details',
      'View formatted tabular records and search by ID, name, or department',
      'Update student information with verification safeguards',
      'Delete records with confirmation prompt and audit logging',
      'Strict input validation preventing malformed or duplicate primary keys',
      'Optional file-based storage supporting persistent JSON and CSV export',
    ],
    // githubUrl: 'https://github.com/Vijayaragavan-V/student-record-manager',
    gradient: 'from-emerald-500/20 via-teal-500/10 to-transparent',
    accentColor: '#10B981',
    iconName: 'database',
  },
];
