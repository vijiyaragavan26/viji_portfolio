import { profileData } from './profile';
import { educationData } from './education';
import { projectsData } from './projects';
import { certificatesData } from './certificates';

export const resumeData = {
  header: {
    name: 'VIJIYARAGAVAN V',
    headline: 'B.E. Computer Science and Engineering (Internet of Things) Undergraduate',
    location: 'Tamil Nadu, India',
    phone: '+91 7604906429',
    cgpa: '8.70/10 (2nd year)',
    institution: 'Sengunthar Engineering College, Erode',
    email: 'vijiyaragavan26@gmail.com',
    github: 'https://github.com/vijiyaragavan26',
    linkedin: 'https://www.linkedin.com/in/vijiyaragavan',
    resumeDownloadPath: '/resume.pdf',
  },
  summary:
    'Self-driven 2nd year computer science and engineering (IoT) undergraduate with a CGPA of 8.70/10, seeking a two-month research internship to gain hands-on research experience and deepen my foundations in computer science. My interests include algorithms, web technologies, artificial intelligence, and IoT, particularly their application to intelligent transport-tracking systems for rural and underserved communities. I am eager to contribute to ongoing research while exploring new areas aligned with the host laboratory’s expertise.',
  education: educationData,
  projects: projectsData,
  skillsGrouped: {
    languages: ['C', 'Python', 'HTML5', 'CSS3'],
    tools: ['Git', 'GitHub', 'VS Code'],
    coreConcepts: ['Data Structures and Algorithms', 'Computer Networks', 'DBMS', 'Operating Systems'],
    currentlyLearning: ['JavaScript', 'React.js', 'MERN Stack', 'MySQL'],
  },
  courseworkAndPreparation: [
    {
      title: 'NPTEL Coursework',
      details: 'Data Structures and Algorithms, DBMS, Computer networks, Introduction to C, Industry 4.0 and Industrial IoT.',
    },
    {
      title: 'GATE (CS & IT) preparation',
      details: 'Self-studying core CS subjects including Operating Systems, Computer Architecture, and Theory of Computation, Engineering Mathematics and Aptitude.',
    },
  ],
  practicalWork: [
    {
      title: 'VR Headsets Website',
      technologies: 'HTML5, CSS3',
      bullets: [
        'Designed a responsive multi-section landing page with navigation, hero, product, promotional, newsletter and footer sections.',
        'Applied HTML page structure and CSS styling, image sizing, alignment and layout techniques; documented the learning process on LinkedIn.',
      ],
    },
    {
      title: 'Grocery Management System',
      technologies: 'Python, Database',
      bullets: [
        'Built a grocery management application in Python with database integration as part of practical programming work.',
      ],
    },
    {
      title: 'Docx Automated Generator',
      technologies: 'Python, Python–docx',
      bullets: [
        'Applied Python practical coursework to generate a formatted Microsoft Word CV using the python-docx library.',
      ],
    },
    {
      title: 'Hospital Patient Registration System',
      technologies: 'Java',
      bullets: [
        'Developed a hospital patient registration system in Java as a team project for the Object Oriented Programming course (23CS302).',
      ],
    },
  ],
  technicalTraining: [
    {
      title: 'AI Bootcamp – IntelliPaat (Online)',
      period: 'Oct 2026',
      description: 'Participated in an online AI Bootcamp conducted by IntelliPaat on 15 October 2026.',
    },
    {
      title: 'FORGEXAI 2026 National Level 24 Hours Hackathon – Erode Sengunthar Engineering College',
      period: 'Sep 2026',
      description: 'Participated in a 24-hour national-level hackathon organized by the Department of Artificial Intelligence and Data Science (22–23 September 2026).',
    },
    {
      title: 'Viksit Bharat Young Leaders Dialogue (VBYLD) 2027 Online Quiz – MY Bharat',
      period: 'Sep 2026',
      description: 'Participated in the online quiz conducted on MYBharat by the Ministry of Youth Affairs & Sports.',
    },
    {
      title: 'Certified Wi-Fi Pentesting 101 – CappricioSec University (Online)',
      period: 'Sep 2026',
      description: 'Completed training on wireless network attacks (deauth, spam and captive portal), covering practical and theoretical aspects.',
    },
    {
      title: 'Claude Code 101 & Claude Code in Action – Claude Academy (Online)',
      period: 'Aug 2026',
      description: 'Earned course completion badges for Claude Code 101 and Claude Code in Action.',
    },
    {
      title: 'Introduction to Artificial Intelligence – Simplilearn SkillUp (Online)',
      period: 'Aug 2026',
      description: 'Completed the introductory online course on Artificial Intelligence.',
    },
    {
      title: 'Google AI Essentials Specialization – Google via Coursera (Online)',
      period: 'Aug 2026',
      description: 'Completed five Google-developed courses on AI fundamentals, productivity with AI tools, prompting and responsible AI use.',
    },
    {
      title: 'Introduction to Programming in C – NPTEL, IIT Kanpur (Online)',
      period: 'Jul – Sep 2026',
      description: 'Completed the 8-week NPTEL course with a proctored certification exam; 3 credits recommended.',
    },
    {
      title: 'Cybersecurity & Ethical Hacking – CappricioSec University (Online)',
      period: 'Apr 2026',
      description: 'Completed 42 hours of practical and theoretical training, gaining introductory exposure to cybersecurity and ethical-hacking concepts and tools.',
    },
    {
      title: 'Full Stack Development using MERN – Kongu Engineering College',
      period: 'Mar 2026',
      description: 'Participated in hands-on training in full-stack development using the MERN stack.',
    },
    {
      title: 'ANRF – Sponsored National Seminar – Erode Sengunthar Engineering College',
      period: 'Mar 2026',
      description: 'Participated in a two-day seminar on mathematical structure, algorithms and resolving sets in sparse graphs.',
    },
    {
      title: 'Introduction to Generative AI Studio – Google Cloud course via Simplilearn SkillUp (Online)',
      period: 'Dec 2025',
      description: 'Completed introductory coursework on Generative AI Studio; course completion, not an official Google Cloud certification.',
    },
    {
      title: 'HTML with AI – Unstop (Online)',
      period: '2026',
      description: 'Completed the online course HTML with AI provided by Unstop.',
    },
  ],
  achievements: [
    'Tamilnadu Government Technical Examination: Junior Grade Typewriting English (30 WPM) – First Class with Distinction (Aug 2025)',
    'Chess: ELO Rating 1373',
  ],
  languages: 'Tamil (Native); English (Intermediate)',
};
