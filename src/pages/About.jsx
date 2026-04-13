import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../components/SectionTitle';
import { 
  CodeBracketIcon, 
  DevicePhoneMobileIcon, 
  ServerStackIcon, 
  PaintBrushIcon,
  AcademicCapIcon,
  UserGroupIcon
} from '@heroicons/react/24/outline';
import { FaReact, FaNodeJs, FaPython, FaJava, FaFigma, FaAws, FaGithub, FaGraduationCap, FaLaptopCode, FaCode, FaNode } from 'react-icons/fa';
import { SiJavascript, SiMongodb, SiFirebase, SiTailwindcss, SiVuedotjs, SiNextdotjs, SiGithub, SiReact  } from 'react-icons/si';
import profileImage from '../images/me.png';
import resumePDF from '../data/Samad_khan_9096345086.pdf';

const About = () => {
  const aboutStats = [
    { value: '1+', label: 'Years Experience' },
    { value: '10+', label: 'Projects Completed' },
    { value: '5+', label: 'Happy Clients' },
    { value: '15+', label: 'Technologies Mastered' },
  ];

  const skills = [
    { name: 'JavaScript', level: 90, color: 'bg-yellow-500', icon: SiJavascript },
    { name: 'React', level: 85, color: 'bg-blue-500', icon: FaReact },
    { name: 'Node.js', level: 80, color: 'bg-green-500', icon: FaNodeJs },
    { name: 'Python', level: 75, color: 'bg-blue-600', icon: FaPython },
    { name: 'TypeScript', level: 80, color: 'bg-blue-700', icon: SiJavascript },
    { name: 'UI/UX Design', level: 70, color: 'bg-purple-500', icon: FaFigma },
  ];

  const achievements = [
    { icon: FaGraduationCap, title: 'Education', description: 'B.Tech in Computer Science' },
    { icon: FaLaptopCode, title: 'Experience', description: 'Full Stack Developer with hands-on project experience' },
    { icon: FaCode, title: 'Skills', description: 'Proficient in modern web technologies and frameworks' },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-20 pb-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-12 md:mb-0">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div className="text-center">
                  <SectionTitle title="About Me" subtitle="Introduction" />
                </div>
                
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                  Crafting Digital Experiences with Passion and Precision
                </h2>
                
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                  Hello! I'm Samad Khan, a passionate Full Stack Developer with 1+ years of experience creating 
                  beautiful, functional, and user-centered digital experiences. I'm driven by the challenge of solving 
                  complex problems with elegant solutions.
                </p>
                
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                  My journey in web development began during my computer science studies, where I discovered my love for 
                  turning ideas into reality. I specialize in building modern web applications using cutting-edge 
                  technologies and creating intuitive user experiences.
                </p>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                  {aboutStats.map((stat, index) => (
                    <motion.div
                      key={index}
                      className="text-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <div className="text-2xl md:text-3xl font-bold text-indigo-600 dark:text-indigo-400 mb-1">
                        {stat.value}
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        {stat.label}
                      </div>
                    </motion.div>
                  ))}
                </div>
                
                <motion.a
                  href={resumePDF}
                  download="Samad_Khan_Resume.pdf"
                  className="px-8 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors duration-300 font-medium inline-block"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Download Resume
                </motion.a>
              </motion.div>
            </div>
            
            <div className="md:w-1/2 flex justify-center">
              <motion.div
                className="relative"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <div className="w-64 h-64 md:w-80 md:h-80 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center shadow-2xl p-4">
                  <img 
                    src={profileImage} 
                    alt="Samad Khan" 
                    className="w-full h-full object-cover rounded-full border-4 border-white/20"
                  />
                </div>
                
                {/* Decorative elements */}
                <motion.div 
                  className="absolute -top-4 -right-4 w-24 h-24 bg-indigo-100 dark:bg-indigo-900/30 rounded-full flex items-center justify-center shadow-lg"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                >
                  <CodeBracketIcon className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />
                </motion.div>
                
                <motion.div 
                  className="absolute -bottom-4 -left-4 w-20 h-20 bg-cyan-100 dark:bg-cyan-900/30 rounded-full flex items-center justify-center shadow-lg"
                  animate={{ rotate: -360 }}
                  transition={{ duration: 15, repeat: Infinity, ease: "linear", delay: 1 }}
                >
                  <PaintBrushIcon className="w-6 h-6 text-cyan-600 dark:text-cyan-400" />
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900/50">
        <div className="container mx-auto px-4">
          <SectionTitle title="My Skills" subtitle="Technical Expertise" center={true} />
          
          <div className="max-w-4xl mx-auto">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                className="mb-8"
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex justify-between mb-2 items-center">
                  <div className="flex items-center space-x-2">
                    {skill.icon && (
                      <skill.icon className={`w-5 h-5 ${skill.color.replace('bg-', 'text-')}`} />
                    )}
                    <span className="font-medium text-gray-900 dark:text-white">{skill.name}</span>
                  </div>
                  <span className="text-gray-600 dark:text-gray-400">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                  <motion.div
                    className={`h-3 rounded-full ${skill.color}`}
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                  ></motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionTitle title="Technologies I Use" subtitle="Tools & Technologies" center={true} />
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[ 
              { name: 'Frontend', icon: SiReact, color: 'text-cyan-500', items: ['React', 'Next.js', 'three.js', 'Tailwind CSS'] },
              { name: 'Backend', icon: FaNodeJs, color: 'text-green-600', items: ['Node.js', 'Express', 'Python', 'REST APIs'] },
              { name: 'Database', icon: SiMongodb, color: 'text-green-500', items: ['MongoDB', 'Firebase', 'SQL', 'Redis'] },
              { name: 'Tools', icon: FaGithub, color: 'text-gray-800 dark:text-white', items: ['Git', 'GitHub', 'Vercel', 'Figma'] },
            ].map((category, index) => (
              <motion.div
                key={index}
                className="text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-indigo-100 dark:bg-indigo-900/30 rounded-full flex items-center justify-center">
                  <category.icon className={`w-8 h-8 ${category.color || "text-indigo-600 dark:text-indigo-400"}`} />
                </div>
                <h3 className="font-semibold text-lg text-gray-900 dark:text-white mb-4">{category.name}</h3>
                <ul className="space-y-2">
                  {category.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="text-gray-600 dark:text-gray-400 text-sm">{item}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900/50">
        <div className="container mx-auto px-4">
          <SectionTitle title="Achievements" subtitle="My Journey" center={true} />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-md text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-indigo-100 dark:bg-indigo-900/30 rounded-full flex items-center justify-center">
                  <achievement.icon className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />
                </div>
                <h3 className="font-semibold text-xl text-gray-900 dark:text-white mb-2">{achievement.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{achievement.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Fun Facts Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionTitle title="Fun Facts" subtitle="About Me" center={true} />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              { fact: "I code in 5+ programming languages", icon: "💻" },
              { fact: "Built 15+ successful projects", icon: "🚀" },
              { fact: "Love solving complex algorithms", icon: "🧩" },
              { fact: "Continuous learner & tech enthusiast", icon: "📚" },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md text-center"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-3xl mb-3">{item.icon}</div>
                <p className="text-gray-700 dark:text-gray-300">{item.fact}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;