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
    title: 'E-Commerce Platform',
    description: 'A full-featured e-commerce platform with shopping cart, payment processing, and admin dashboard.',
    image: 'https://placehold.co/600x400/4f46e5/white?text=E-Commerce',
    techStack: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    category: 'Web Application',
    year: '2023',
    liveUrl: '#',
    githubUrl: '#'
  },
  {
    id: 2,
    title: 'Task Management App',
    description: 'A collaborative task management application with real-time updates and team features.',
    image: 'https://placehold.co/600x400/10b981/white?text=Task+Manager',
    techStack: ['React', 'Firebase', 'Tailwind CSS'],
    category: 'Web Application',
    year: '2023',
    liveUrl: '#',
    githubUrl: '#'
  },
  {
    id: 3,
    title: 'Weather Forecast Dashboard',
    description: 'A weather forecasting application with interactive maps and detailed forecasts.',
    image: 'https://placehold.co/600x400/0ea5e9/white?text=Weather+App',
    techStack: ['Vue.js', 'Express', 'OpenWeather API'],
    category: 'Web Application',
    year: '2022',
    liveUrl: '#',
    githubUrl: '#'
  }
];