import { 
  CodeBracketIcon, 
  DevicePhoneMobileIcon, 
  ServerStackIcon, 
  PaintBrushIcon,
  CloudArrowUpIcon,
  ArrowPathIcon
} from '@heroicons/react/24/outline';

// Skills data for the Home page
export const skills = [
  { name: 'React', level: 'Expert', icon: CodeBracketIcon },
  { name: 'JavaScript', level: 'Expert', icon: CodeBracketIcon },
  { name: 'Node.js', level: 'Advanced', icon: ServerStackIcon },
  { name: 'UI/UX Design', level: 'Advanced', icon: PaintBrushIcon },
  { name: 'Mobile Development', level: 'Intermediate', icon: DevicePhoneMobileIcon },
  { name: 'Cloud Services', level: 'Intermediate', icon: CloudArrowUpIcon },
  { name: 'DevOps', level: 'Intermediate', icon: ArrowPathIcon },
  { name: 'Python', level: 'Advanced', icon: CodeBracketIcon },
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