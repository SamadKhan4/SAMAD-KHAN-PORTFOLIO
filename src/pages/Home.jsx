import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowDownTrayIcon, ArrowRightIcon } from '@heroicons/react/24/outline';
import { FaReact, FaNodeJs, FaPython, FaJava, FaFigma } from 'react-icons/fa';
import { SiCss3, SiMongodb } from 'react-icons/si';
import SectionTitle from '../components/SectionTitle';
import ProjectCard from '../components/ProjectCard';
import { skills } from '../data/homeData';
import { getFeaturedProjects } from '../services/api';
import profileImage from '../images/me.png';

const Home = () => {
  const [featuredProjects, setFeaturedProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFeaturedProjects = async () => {
      try {
        const response = await getFeaturedProjects();
        const projectsData = response.success ? response.data : response;
        setFeaturedProjects(projectsData);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching featured projects:', error);
        setLoading(false);
      }
    };

    fetchFeaturedProjects();
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-cyan-50 dark:from-gray-900 dark:via-gray-800 dark:to-indigo-900/20"></div>
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full filter blur-3xl animate-blob"></div>
          <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full filter blur-3xl animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-1/4 left-1/2 w-96 h-96 bg-indigo-500/10 rounded-full filter blur-3xl animate-blob animation-delay-4000"></div>
        </div>
        
        <div className="container mx-auto px-4 py-12 md:py-20 relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
            <div className="lg:w-1/2 text-center lg:text-left">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className=""
              >
                <motion.h1 
                  className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.8 }}
                >
                  Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">Samad Khan</span>
                </motion.h1>
                
                <motion.h2 
                  className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-6"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4, duration: 0.8 }}
                >
                  Full Stack Developer & UI/UX Designer
                </motion.h2>
                
                <motion.p 
                  className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto lg:mx-0"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6, duration: 0.8 }}
                >
                  I build exceptional digital experiences that are fast, accessible, visually appealing, and responsive. Creating modern web applications with cutting-edge technologies.
                </motion.p>
                
                <motion.div
                  className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8, duration: 0.8 }}
                >
                  <Link to="/projects">
                    <motion.button
                      className="px-8 py-4 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors duration-300 font-medium flex items-center justify-center"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      View Projects
                      <ArrowRightIcon className="ml-2 h-5 w-5" />
                    </motion.button>
                  </Link>
                  
                  <motion.a
                    href="/Resume.pdf"
                    download="Samad_Khan_Resume.pdf"
                    className="px-8 py-4 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg border border-gray-300 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-300 font-medium flex items-center justify-center"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Download CV
                    <ArrowDownTrayIcon className="ml-2 h-5 w-5" />
                  </motion.a>
                </motion.div>
              </motion.div>
            </div>
            
            <div className="lg:w-1/2 flex justify-center lg:justify-end">
              <motion.div
                className="relative"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                <div className="w-[250px] h-[250px] md:w-[350px] md:h-[350px] lg:w-[450px] lg:h-[450px] bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center shadow-2xl p-4 relative">
                  <img 
                    src={profileImage} 
                    alt="Samad Khan" 
                    className="w-full h-full object-cover rounded-full border-4 border-white/20"
                  />
                </div>
                
                {/* Tech Icons Around Circle */}
                <motion.div
                  className="absolute inset-0"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                >
                  {/* React - Top */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <div className="w-12 h-12 md:w-14 md:h-14 bg-white dark:bg-gray-800 rounded-full shadow-lg flex items-center justify-center border-2 border-cyan-500 hover:scale-110 transition">
                      <FaReact className="text-2xl md:text-3xl text-cyan-500" />
                    </div>
                  </div>

                  {/* Node - Right */}
                  <div className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2">
                    <div className="w-12 h-12 md:w-14 md:h-14 bg-white dark:bg-gray-800 rounded-full shadow-lg flex items-center justify-center border-2 border-green-600 hover:scale-110 transition">
                      <FaNodeJs className="text-2xl md:text-3xl text-green-600" />
                    </div>
                  </div>

                  {/* Python - Bottom */}
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2">
                    <div className="w-12 h-12 md:w-14 md:h-14 bg-white dark:bg-gray-800 rounded-full shadow-lg flex items-center justify-center border-2 border-yellow-500 hover:scale-110 transition">
                      <FaPython className="text-2xl md:text-3xl text-yellow-500" />
                    </div>
                  </div>

                  {/* Figma - Left */}
                  <div className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2">
                    <div className="w-12 h-12 md:w-14 md:h-14 bg-white dark:bg-gray-800 rounded-full shadow-lg flex items-center justify-center border-2 border-purple-500 hover:scale-110 transition">
                      <FaFigma className="text-2xl md:text-3xl text-purple-500" />
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
        
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          <Link to="#about" smooth={true}>
            <motion.div
              whileHover={{ y: 5 }}
              whileTap={{ y: 0 }}
              className="w-10 h-16 rounded-full border-2 border-gray-400 flex justify-center p-2 cursor-pointer"
            >
              <div className="w-3 h-3 rounded-full bg-gray-400 animate-bounce"></div>
            </motion.div>
          </Link>
        </motion.div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900/50">
        <div className="container mx-auto px-4">
          <SectionTitle title="My Skills" subtitle="Expertise" center={true} />
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {skills.map((skill, index) => (
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
                  <skill.icon className={`w-8 h-8 ${skill.color || "text-indigo-600 dark:text-indigo-400"}`} />
                </div>
                <h3 className="font-semibold text-lg text-gray-900 dark:text-white">{skill.name}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">{skill.level}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionTitle title="Featured Projects" subtitle="Recent Work" />
          
          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3].map((index) => (
                <div key={index} className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 animate-pulse">
                  <div className="h-48 bg-gray-300 dark:bg-gray-700 rounded-lg mb-4"></div>
                  <div className="h-6 bg-gray-300 dark:bg-gray-700 rounded mb-2"></div>
                  <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded mb-4"></div>
                  <div className="flex space-x-2 mb-4">
                    <div className="h-6 bg-gray-300 dark:bg-gray-700 rounded-full w-16"></div>
                    <div className="h-6 bg-gray-300 dark:bg-gray-700 rounded-full w-20"></div>
                  </div>
                  <div className="h-10 bg-gray-300 dark:bg-gray-700 rounded"></div>
                </div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredProjects.map((project, index) => (
                <ProjectCard key={index} project={project} />
              ))}
            </div>
          )}
          
          <div className="text-center mt-12">
            <Link to="/projects">
              <motion.button
                className="px-8 py-3 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg border border-gray-300 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-300 font-medium"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View All Projects
              </motion.button>
            </Link>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900/50">
        <div className="container mx-auto px-4">
          <SectionTitle title="Experience" subtitle="My Journey" center={true} />
          
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gray-300 dark:bg-gray-700 hidden md:block"></div>
              
              {/* Timeline items */}
              <div className="space-y-12 md:space-y-0">
                {[
                  {
                    year: "2026 - Present",
                    title: "Full Stack Developer",
                    company: "Elite Associate",
                    description: "Led development of multiple web applications using React, Node.js, and cloud technologies."
                  },
                  {
                    year: "2025 - February",
                    title: "Full Stack Developer",
                    company: "Agarkar Media Pvt.Ltd",
                    description: "Developed responsive web applications and collaborated with UX designers to implement pixel-perfect designs."
                  },
                  {
                    year: "2024 - May",
                    title: "Cloud Intern",
                    company: "Kasnet Pvt.Ltd",
                    description: "Built and maintained various client websites and learned modern development practices."
                  }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className={`relative flex ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center`}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                  >
                    <div className="md:w-1/2 mb-4 md:mb-0 md:px-8">
                      <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
                        <span className="text-indigo-600 dark:text-indigo-400 font-semibold">{item.year}</span>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mt-2">{item.title}</h3>
                        <h4 className="text-lg text-indigo-600 dark:text-indigo-400">{item.company}</h4>
                        <p className="text-gray-600 dark:text-gray-400 mt-3">{item.description}</p>
                      </div>
                    </div>
                    
                    <div className="hidden md:flex md:w-1/2 justify-center">
                      <div className="w-6 h-6 rounded-full bg-indigo-600 dark:bg-indigo-500 border-4 border-white dark:border-gray-900 shadow-lg z-10"></div>
                    </div>
                    
                    <div className="md:hidden w-full flex justify-center my-4">
                      <div className="w-6 h-6 rounded-full bg-indigo-600 dark:bg-indigo-500 border-4 border-white dark:border-gray-900 shadow-lg"></div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to start your next project?</h2>
            <p className="text-indigo-100 text-lg mb-8 max-w-2xl mx-auto">
              Let's work together to bring your ideas to life. Feel free to reach out if you're looking for a developer, have a question, or just want to connect.
            </p>
            <Link to="/contact">
              <motion.button
                className="px-8 py-4 bg-white text-indigo-600 rounded-lg hover:bg-gray-100 transition-colors duration-300 font-medium"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get In Touch
              </motion.button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;