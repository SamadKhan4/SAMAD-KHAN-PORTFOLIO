import React from 'react';
import { motion } from 'framer-motion';

const SectionTitle = ({ title, subtitle, center = false }) => {
  return (
    <div className={`${center ? 'text-center' : ''} mb-16`}>
      {subtitle && (
        <motion.p
          className="text-sm font-semibold text-indigo-600 dark:text-indigo-400 uppercase tracking-wide mb-2"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {subtitle}
        </motion.p>
      )}
      <motion.h2
        className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        {title}
      </motion.h2>
      <motion.div
        className="w-20 h-1 bg-indigo-600 dark:bg-indigo-400 mt-4 mx-auto"
        initial={{ width: 0 }}
        whileInView={{ width: 80 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      />
    </div>
  );
};

export default SectionTitle;