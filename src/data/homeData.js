import { 
  CodeBracketIcon, 
  DevicePhoneMobileIcon, 
  ServerStackIcon, 
  PaintBrushIcon,
  CloudArrowUpIcon,
  ArrowPathIcon
} from '@heroicons/react/24/outline';
import { FaReact, FaNodeJs, FaPython, FaJava, FaFigma, FaAws } from 'react-icons/fa';
import { SiJavascript, SiMongodb, SiFirebase, SiTailwindcss, SiVuedotjs } from 'react-icons/si';

// Skills data for the Home page
export const skills = [
  { name: 'React', level: 'Expert', icon: FaReact, color: 'text-cyan-500' },
  { name: 'JavaScript', level: 'Expert', icon: SiJavascript, color: 'text-yellow-500' },
  { name: 'Node.js', level: 'Advanced', icon: FaNodeJs, color: 'text-green-600' },
  { name: 'UI/UX Design', level: 'Advanced', icon: FaFigma, color: 'text-purple-500' },
  { name: 'Mobile Development', level: 'Intermediate', icon: DevicePhoneMobileIcon, color: 'text-indigo-500' },
  { name: 'Cloud Services', level: 'Intermediate', icon: FaAws, color: 'text-orange-500' },
  { name: 'DevOps', level: 'Intermediate', icon: ArrowPathIcon, color: 'text-blue-500' },
  { name: 'Python', level: 'Advanced', icon: FaPython, color: 'text-blue-400' },
];

// Featured projects for the Home page
export const featuredProjects = [
  {
    id: 1,
    title: 'Trillion App',
    description: 'A technological solution for managing tasks and teams with real-time collaboration and project tracking features.',
    image: 'https://res.cloudinary.com/dxjwrock6/image/upload/v1776079666/Screenshot_2026-04-13_165729_hdvtpl.png',
    techStack: ['React', 'Tailwind CSS', 'ExcelSheet', 'App script'],
    category: 'Web Application',
    year: '2026',
    liveUrl: 'https://triilion-app.vercel.app/',
    githubUrl: 'https://github.com/AdbornSolutions/TriilionApp'
  },
  {
    id: 2,
    title: 'Jd-Bot ',
    description: 'An AI Bot which is designed to assist in finding a Candidate for a job  its is made for recruiters to find the best candidates for their jobs.',
    image: 'https://res.cloudinary.com/dxjwrock6/image/upload/v1772170887/portfolio_projects/a30noih2ztczjpzwav3x.png',
    techStack: ['React', 'n8n', 'Tailwind CSS'],
    category: 'Web Application',
    year: '2025',
    liveUrl: 'https://jd-bot-iota.vercel.app/',
    githubUrl: 'https://github.com/SamadKhan4/JD-bot'
  },
  {
    id: 3,
    title: 'Elite Management',
    description: 'A Management Course website for students to learn about management skills and techniques.',
    image: 'https://res.cloudinary.com/dxjwrock6/image/upload/v1772170754/portfolio_projects/ahxlrrhmuqapbcsmfgjo.png',
    techStack: ['React.js', 'Express', 'REST API', 'MongoDB', 'Tailwind CSS'],
    category: 'Web Application',
    year: '2025',
    liveUrl: 'https://managements-com.vercel.app/',
    githubUrl: 'https://github.com/SamadKhan4/managements.com'
  }
];

// All projects for the Projects page
export const allProjects = [
  {
    id: 1,
    title: 'Trillion App',
    description: 'A technological solution for managing tasks and teams with real-time collaboration and project tracking features.',
    image: 'https://res.cloudinary.com/dxjwrock6/image/upload/v1776079666/Screenshot_2026-04-13_165729_hdvtpl.png',
    techStack: ['React', 'Tailwind CSS', 'ExcelSheet', 'App script'],
    category: 'Web Application',
    year: '2026',
    liveUrl: 'https://triilion-app.vercel.app/',
    githubUrl: 'https://github.com/AdbornSolutions/TriilionApp'
  },
  {
    id: 2,
    title: 'Jd-Bot ',
    description: 'An AI Bot which is designed to assist in finding a Candidate for a job  its is made for recruiters to find the best candidates for their jobs.',
    image: 'https://res.cloudinary.com/dxjwrock6/image/upload/v1772170887/portfolio_projects/a30noih2ztczjpzwav3x.png',
    techStack: ['React', 'n8n', 'Tailwind CSS'],
    category: 'Web Application',
    year: '2025',
    liveUrl: 'https://jd-bot-iota.vercel.app/',
    githubUrl: 'https://github.com/SamadKhan4/JD-bot'
  },
  {
    id: 3,
    title: 'Elite Management',
    description: 'A Management Course website for students to learn about management skills and techniques.',
    image: 'https://res.cloudinary.com/dxjwrock6/image/upload/v1772170754/portfolio_projects/ahxlrrhmuqapbcsmfgjo.png',
    techStack: ['React.js', 'Express', 'MongoDB', 'Tailwind CSS'],
    category: 'Web Application',
    year: '2025',
    liveUrl: 'https://managements-com.vercel.app/',
    githubUrl: 'https://github.com/SamadKhan4/managements.com'
  },
  {
    id: 4,
    title: 'Elite Properties Dashboard',
    description: 'Elite Properties is a real estate service provider website for managing properties and tenants with real-time collaboration and project tracking features.  { id : admin@eliteassociate.in , password : elite@crm25 }',
    image: 'https://res.cloudinary.com/dxjwrock6/image/upload/v1772171103/portfolio_projects/s2n9egdbhsfy3aptx5qb.png',
    techStack: ['React', 'TypeScript', 'Chart.js', 'REST API'],
    category: 'Dashboard',
    year: '2025',
    liveUrl: 'https://elite-properties-crm.vercel.app/dashboard',
    githubUrl: 'https://github.com/SamadKhan4/elite-properties-CRM'
  },
  {
    id: 5,
    title: 'Elite Job Portal',
    description: 'A job portal Website for job seekers to find jobs and employers to post jobs.',
    image: 'https://res.cloudinary.com/dxjwrock6/image/upload/v1773298410/portfolio_projects/jdtte62b1l8vb0qcev4q.png',
    techStack: ['React', 'Firebase', 'Redux', 'Tailwind CSS'],
    category: 'Web Application',
    year: '2025',
    liveUrl: 'https://www.eliteindiajobs.com/',
    githubUrl: 'http://github.com/kbamnote/elite-jobs'
  },
  {
    id: 6,
    title: 'Adborn Solutions',
    description: 'Design, development, content, and ads — everything your brand needs in one powerful package, delivered by a global leader committed to driving real Impact through Innovation .',
    image: 'https://res.cloudinary.com/dxjwrock6/image/upload/v1776080959/Screenshot_2026-04-13_171833_qvkbxu.png',
    techStack: ['html', 'css', 'javascript', 'bootstrap'],
    category: 'Website',
    year: '2026',
    liveUrl: 'https://adbornsolutions.com/index.html',
    githubUrl: 'https://github.com/komalshrawankar/Adborn-solutions'
  }
];