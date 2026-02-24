import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { name: 'GitHub', url: '#' },
    { name: 'LinkedIn', url: '#' },
    { name: 'Twitter', url: '#' },
    { name: 'Instagram', url: '#' },
  ];

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <motion.div
              className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              DevPortfolio
            </motion.div>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Crafting exceptional digital experiences with clean, efficient code.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-indigo-600 dark:text-gray-400 dark:hover:text-indigo-400 transition-colors duration-300"
                  whileHover={{ y: -3 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <span className="sr-only">{social.name}</span>
                  {social.name}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-span-1 md:col-span-1">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={link.name}>
                  <motion.a
                    href={link.path}
                    className="text-gray-600 hover:text-indigo-600 dark:text-gray-400 dark:hover:text-indigo-400 transition-colors duration-300"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    {link.name}
                  </motion.a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-span-1 md:col-span-1">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Contact Info</h3>
            <ul className="space-y-2">
              <li className="text-gray-600 dark:text-gray-400">Email: hello@example.com</li>
              <li className="text-gray-600 dark:text-gray-400">Location: San Francisco, CA</li>
              <li className="text-gray-600 dark:text-gray-400">Phone: +1 (555) 123-4567</li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="col-span-1 md:col-span-1">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Stay Updated</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Subscribe to my newsletter for the latest updates and offers.
            </p>
            <form className="flex flex-col space-y-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <motion.button
                type="submit"
                className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors duration-300"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Subscribe
              </motion.button>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-200 dark:border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <motion.p
            className="text-gray-600 dark:text-gray-400 text-sm"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            &copy; {currentYear} DevPortfolio. All rights reserved.
          </motion.p>
          <motion.div
            className="mt-4 md:mt-0"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Made with ❤️ using React & Tailwind CSS
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;