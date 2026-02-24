import React from 'react';
import { motion } from 'framer-motion';

const ProjectCard = ({ project }) => {
  return (
    <motion.div
      className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg border border-gray-200 dark:border-gray-700 transition-all duration-300 hover:shadow-2xl group"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -10 }}
      transition={{ duration: 0.3 }}
    >
      <div className="relative overflow-hidden">
        <img
          src={project.image || 'https://placehold.co/400x250'}
          alt={project.title}
          className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
          <div className="text-white">
            <h3 className="font-bold text-lg">{project.title}</h3>
            <p className="text-sm opacity-80">{project.category}</p>
          </div>
        </div>
      </div>
      
      <div className="p-6">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-300">
            {project.title}
          </h3>
          {project.year && (
            <span className="text-sm text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">
              {project.year}
            </span>
          )}
        </div>
        
        <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {(project.technologies || project.techStack || []).map((tech, index) => (
            <span
              key={index}
              className="text-xs font-medium px-3 py-1 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-800 dark:text-indigo-200 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
        
        <div className="flex space-x-3">
          {(project.liveLink || project.liveUrl) && (
            <motion.a
              href={project.liveLink || project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 text-center px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors duration-300 text-sm font-medium"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Live Demo
            </motion.a>
          )}
          
          {(project.githubLink || project.githubUrl) && (
            <motion.a
              href={project.githubLink || project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 text-center px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-300 text-sm font-medium"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Code
            </motion.a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;