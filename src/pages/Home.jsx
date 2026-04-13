import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowDownTrayIcon, ArrowRightIcon, EnvelopeIcon, PhoneIcon, MapPinIcon } from '@heroicons/react/24/outline';
import { FaReact, FaNodeJs, FaPython, FaJava, FaFigma, FaGithub, FaLinkedin, FaInstagram, FaTwitter } from 'react-icons/fa';
import { SiCss3, SiMongodb } from 'react-icons/si';
import SectionTitle from '../components/SectionTitle';
import ProjectCard from '../components/ProjectCard';
import { skills, featuredProjects } from '../data/homeData';
import profileImage from '../images/me.png';
import resumePDF from '../data/Samad_khan_9096345086.pdf';
const Home = () => {
  // Animation variants
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    initial: { opacity: 0 },
    whileInView: { opacity: 1 },
    viewport: { once: true },
    transition: { staggerChildren: 0.1 }
  };

  const scaleIn = {
    initial: { opacity: 0, scale: 0.8 },
    whileInView: { opacity: 1, scale: 1 },
    viewport: { once: true },
    transition: { duration: 0.5 }
  };

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
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2, duration: 0.8, type: "spring", stiffness: 100 }}
                >
                  Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">Samad Khan</span>
                </motion.h1>
                
                <motion.h2 
                  className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-6"
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4, duration: 0.8, type: "spring", stiffness: 100 }}
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
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8, duration: 0.8, type: "spring", stiffness: 100 }}
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
                    href={resumePDF}
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
                initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ delay: 0.5, duration: 1, type: "spring", stiffness: 100 }}
              >
                <div className="w-[200px] h-[200px] md:w-[300px] md:h-[300px] lg:w-[400px] lg:h-[400px] bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center shadow-2xl p-4 relative">
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
                  transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
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

      {/* About Me Section */}
      <section id="about" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <SectionTitle title="About Me" subtitle="Who Am I" />
                <motion.p 
                  className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                >
                  I'm a passionate Full Stack Developer with over 2 years of experience building modern web applications. I specialize in creating responsive, user-friendly solutions that solve real-world problems.
                </motion.p>
                <motion.p 
                  className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                >
                  My journey in tech started with a curiosity about how websites work, and it has evolved into a career focused on delivering high-quality digital experiences. I believe in writing clean, maintainable code and staying up-to-date with the latest industry trends.
                </motion.p>
                <motion.p 
                  className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                >
                  When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, or sharing knowledge with the developer community.
                </motion.p>
                
                <motion.div 
                  className="grid grid-cols-2 gap-6 mb-8"
                  variants={staggerContainer}
                  initial="initial"
                  whileInView="whileInView"
                  viewport={{ once: true }}
                >
                  {[
                    { value: '2+', label: 'Years Experience' },
                    { value: '15+', label: 'Projects Completed' },
                    { value: '10+', label: 'Happy Clients' },
                    { value: '5+', label: 'Technologies' }
                  ].map((stat, index) => (
                    <motion.div
                      key={index}
                      variants={fadeInUp}
                      whileHover={{ scale: 1.05 }}
                      className="text-center p-4 bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 rounded-lg"
                    >
                      <motion.h4 
                        className="text-3xl font-bold text-indigo-600 dark:text-indigo-400 mb-2"
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 + index * 0.1, type: "spring", stiffness: 200 }}
                      >
                        {stat.value}
                      </motion.h4>
                      <p className="text-gray-600 dark:text-gray-400">{stat.label}</p>
                    </motion.div>
                  ))}
                </motion.div>

                <Link to="/about">
                  <motion.button
                    className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors duration-300 font-medium flex items-center"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Learn More About Me
                    <ArrowRightIcon className="ml-2 h-5 w-5" />
                  </motion.button>
                </Link>
              </motion.div>

              <motion.div
                className="relative"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2, type: "spring", stiffness: 100 }}
              >
                <motion.div 
                  className="relative"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl transform rotate-6"
                    animate={{ 
                      rotate: [6, 8, 6],
                      scale: [1, 1.02, 1]
                    }}
                    transition={{ 
                      duration: 4, 
                      repeat: Infinity, 
                      ease: "easeInOut"
                    }}
                  ></motion.div>
                  <img
                    src="https://res.cloudinary.com/dxjwrock6/image/upload/v1776082149/WhatsApp_Image_2026-04-13_at_5.38.33_PM_hga89g.jpg"
                    alt="Samad Khan"
                    className="relative rounded-2xl shadow-2xl w-full h-auto object-cover"
                  />
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900/50">
        <div className="container mx-auto px-4">
          <SectionTitle title="What I Offer" subtitle="Services" center={true} />
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
          >
            {[
              {
                icon: '💻',
                title: 'Web Development',
                description: 'Building responsive, modern web applications using React, Node.js, and other cutting-edge technologies.',
                features: ['Custom Web Apps', 'E-Commerce Solutions', 'CMS Development']
              },
              {
                icon: '🎨',
                title: 'UI/UX Design',
                description: 'Creating intuitive, beautiful user interfaces that enhance user experience and drive engagement.',
                features: ['Wireframing', 'Prototyping', 'User Research']
              },
              {
                icon: '📱',
                title: 'Mobile Development',
                description: 'Developing cross-platform mobile applications that work seamlessly on iOS and Android devices.',
                features: ['React Native', 'Responsive Design', 'App Optimization']
              },
              {
                icon: '⚙️',
                title: 'Backend Development',
                description: 'Building robust, scalable server-side applications and APIs with modern frameworks.',
                features: ['REST APIs', 'Database Design', 'Cloud Services']
              },
              {
                icon: '🚀',
                title: 'Performance Optimization',
                description: 'Optimizing website speed and performance to ensure fast load times and smooth user experience.',
                features: ['Code Splitting', 'Caching', 'Lazy Loading']
              },
              {
                icon: '🛡️',
                title: 'Maintenance & Support',
                description: 'Providing ongoing support and maintenance to keep your applications running smoothly.',
                features: ['Bug Fixes', 'Updates', 'Monitoring']
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300"
                variants={fadeInUp}
                whileHover={{ y: -10, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.div 
                  className="text-5xl mb-4"
                  whileHover={{ rotate: 360, scale: 1.2 }}
                  transition={{ duration: 0.5 }}
                >
                  {service.icon}
                </motion.div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{service.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <motion.li 
                      key={idx} 
                      className="flex items-center text-gray-600 dark:text-gray-400"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1 }}
                    >
                      <motion.span 
                        className="w-2 h-2 bg-indigo-600 rounded-full mr-2"
                        whileHover={{ scale: 1.5 }}
                      ></motion.span>
                      {feature}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900/50">
        <div className="container mx-auto px-4">
          <SectionTitle title="My Skills" subtitle="Expertise" center={true} />
          
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
          >
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                className="text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
                variants={fadeInUp}
                whileHover={{ y: -10, scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.div 
                  className="w-16 h-16 mx-auto mb-4 bg-indigo-100 dark:bg-indigo-900/30 rounded-full flex items-center justify-center"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <skill.icon className={`w-8 h-8 ${skill.color || "text-indigo-600 dark:text-indigo-400"}`} />
                </motion.div>
                <h3 className="font-semibold text-lg text-gray-900 dark:text-white">{skill.name}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">{skill.level}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionTitle title="Featured Projects" subtitle="Recent Work" />
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
          >
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                variants={fadeInUp}
                whileHover={{ y: -10 }}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </motion.div>
          
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
                    className={`relative flex ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center`}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.2, type: "spring", stiffness: 100 }}
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
                      <motion.div 
                        className="w-6 h-6 rounded-full bg-indigo-600 dark:bg-indigo-500 border-4 border-white dark:border-gray-900 shadow-lg z-10"
                        whileInView={{ scale: [0, 1.3, 1] }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.3, type: "spring" }}
                      ></motion.div>
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

      {/* Contact & CTA Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900/50">
        <div className="container mx-auto px-4">
          <SectionTitle title="Get In Touch" subtitle="Contact" center={true} />
          
          <div className="max-w-6xl mx-auto">
            {/* Contact Info Cards */}
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
              variants={staggerContainer}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
            >
              <motion.div
                className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md text-center hover:shadow-lg transition-shadow duration-300"
                variants={fadeInUp}
                whileHover={{ y: -10, scale: 1.03 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-indigo-100 dark:bg-indigo-900/30 rounded-full flex items-center justify-center">
                  <EnvelopeIcon className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Email</h3>
                <a href="mailto:samad04.in@gmail.com" className="text-indigo-600 dark:text-indigo-400 hover:underline">
                  samad04.in@gmail.com
                </a>
                <p className="text-gray-600 dark:text-gray-400 text-sm mt-2">Response within 24 hours</p>
              </motion.div>

              <motion.div
                className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md text-center hover:shadow-lg transition-shadow duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-indigo-100 dark:bg-indigo-900/30 rounded-full flex items-center justify-center">
                  <PhoneIcon className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Phone</h3>
                <a href="tel:+919096345086" className="text-indigo-600 dark:text-indigo-400 hover:underline">
                  +91 9096345086
                </a>
                <p className="text-gray-600 dark:text-gray-400 text-sm mt-2">Mon-Sat, 9AM - 6PM IST</p>
              </motion.div>

              <motion.div
                className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md text-center hover:shadow-lg transition-shadow duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                whileHover={{ y: -5 }}
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-indigo-100 dark:bg-indigo-900/30 rounded-full flex items-center justify-center">
                  <MapPinIcon className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Location</h3>
                <p className="text-indigo-600 dark:text-indigo-400 font-medium">Nagpur, Maharashtra</p>
                <p className="text-gray-600 dark:text-gray-400 text-sm mt-2">Available for Remote Work</p>
              </motion.div>
            </motion.div>

            {/* Social Links */}
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3, type: "spring", stiffness: 100 }}
            >
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">Connect with me</h3>
              <div className="flex justify-center space-x-6">
                <motion.a
                  href="https://github.com/SamadKhan4"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-14 h-14 bg-white dark:bg-gray-800 rounded-full shadow-md flex items-center justify-center hover:bg-gray-900 hover:text-white dark:hover:bg-gray-700 transition-colors duration-300"
                  whileHover={{ y: -8, scale: 1.15, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <FaGithub className="text-2xl" />
                </motion.a>
                <motion.a
                  href="https://www.linkedin.com/in/samad-khan-a910b614a"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-14 h-14 bg-white dark:bg-gray-800 rounded-full shadow-md flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors duration-300"
                  whileHover={{ y: -8, scale: 1.15, rotate: -5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <FaLinkedin className="text-2xl" />
                </motion.a>
                <motion.a
                  href="https://twitter.com/samadkhan4"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-14 h-14 bg-white dark:bg-gray-800 rounded-full shadow-md flex items-center justify-center hover:bg-sky-500 hover:text-white transition-colors duration-300"
                  whileHover={{ y: -8, scale: 1.15, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <FaTwitter className="text-2xl" />
                </motion.a>
                <motion.a
                  href="https://instagram.com/khansamad.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-14 h-14 bg-white dark:bg-gray-800 rounded-full shadow-md flex items-center justify-center hover:bg-pink-600 hover:text-white transition-colors duration-300"
                  whileHover={{ y: -8, scale: 1.15, rotate: -5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <FaInstagram className="text-2xl" />
                </motion.a>
              </div>
            </motion.div>

            {/* CTA Card */}
            <motion.div
              className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-8 md:p-12 text-center shadow-xl"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4, type: "spring", stiffness: 100 }}
              whileHover={{ scale: 1.01 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to start your next project?</h2>
              <p className="text-indigo-100 text-lg mb-8 max-w-2xl mx-auto">
                Let's work together to bring your ideas to life. Feel free to reach out if you're looking for a developer, have a question, or just want to connect.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact">
                  <motion.button
                    className="px-8 py-4 bg-white text-indigo-600 rounded-lg hover:bg-gray-100 transition-colors duration-300 font-medium flex items-center justify-center w-full sm:w-auto"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Get In Touch
                    <ArrowRightIcon className="ml-2 h-5 w-5" />
                  </motion.button>
                </Link>
                <a href="mailto:samad04.in@gmail.com">
                  <motion.button
                    className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg hover:bg-white/10 transition-colors duration-300 font-medium flex items-center justify-center w-full sm:w-auto"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Send Email
                    <EnvelopeIcon className="ml-2 h-5 w-5" />
                  </motion.button>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;