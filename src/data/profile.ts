import { ProfileData } from '../types';

export const profileData: ProfileData = {
  name: 'Vijayaragavan V',
  initials: 'VV',
  headline: 'B.E - CSE Student | Aspiring Software Engineer | Full-Stack Developer',
  greeting: "Hi, I'm Vijayaragavan V.",
  heroHeadline: 'Building the Future with Code, AI & IoT.',
  heroDescription:
    'Self-driven 2nd year Computer Science and Engineering (IoT) undergraduate with a CGPA of 8.70/10. Passionate about building algorithms, web technologies, artificial intelligence, and IoT applications for real-world impact.',
  roles: [
    'B.E - CSE Student',
    'Aspiring Software Engineer',
    'Full-Stack Developer',
    'AI & IoT Enthusiast',
    'Python Developer',
  ],
  aboutHeading: 'A Little About Me',
  aboutText:
    'I am a 2nd year CSE (IoT) undergraduate with a solid academic foundation (CGPA 8.70/10) who enjoys turning engineering concepts into practical technology solutions. I focus on core algorithms, full-stack web development, Python programming, and intelligent systems, with aspirations to build impactful digital products.',
  expandableAbout: {
    engineeringMindset:
      'Approaching software engineering with curiosity and discipline — breaking complex problems into modular, testable components, understanding how code interacts with hardware systems in IoT environments, and applying clean design patterns.',
    problemSolving:
      'Focusing on data structures, algorithms, and GATE (CS & IT) core subjects including Operating Systems, Computer Architecture, Theory of Computation, and Engineering Mathematics.',
    collaboration:
      'Active participant in hackathons (FORGEXAI 2026 24-hr Hackathon), technical symposiums, and coding communities. Eager to collaborate with fellow engineers and contribute to impactful software initiatives.',
    aspirations:
      'Seeking a two-month research or software engineering internship to gain hands-on production experience, deepen foundations in computer science, and contribute meaningfully to innovative tech stacks.',
  },
  institution: 'Sengunthar Engineering College',
  department: 'Computer Science and Engineering (Internet of Things)',
  degree: 'Bachelor of Engineering (B.E.)',
  location: 'Erode, Tamil Nadu, India',
  availability: {
    status: true,
    label: 'Open to Research Internships & Collaborations',
  },
  social: {
    github: 'https://github.com/vijiyaragavan26',
    linkedin: 'https://www.linkedin.com/in/vijiyaragavan',
    email: 'vijiyaragavan26@gmail.com',
    whatsapp: '+91 7604906429',
    blog: '',
  },
  resumeUrl: '/resume.pdf',
  photoUrl: '/avatar.png',
};

export const aboutFeatures = [
  {
    title: 'Web Development',
    description: 'Building responsive interfaces, practical landing pages, and mastering React, TypeScript, and MERN stack.',
    icon: 'code',
    gradient: 'from-blue-500/20 to-cyan-500/10',
    borderColor: 'border-blue-500/30',
    iconColor: 'text-blue-400',
  },
  {
    title: 'Artificial Intelligence',
    description: 'Exploring Python, LLMs, Google AI tools, Generative AI Studio, and AI API integrations.',
    icon: 'sparkles',
    gradient: 'from-purple-500/20 to-indigo-500/10',
    borderColor: 'border-purple-500/30',
    iconColor: 'text-purple-400',
  },
  {
    title: 'Internet of Things',
    description: 'Studying connected devices, smart transport tracking, sensors, and practical embedded systems.',
    icon: 'cpu',
    gradient: 'from-emerald-500/20 to-teal-500/10',
    borderColor: 'border-emerald-500/30',
    iconColor: 'text-emerald-400',
  },
];
