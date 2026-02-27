import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../components/SectionTitle';
import ContactForm from '../components/ContactForm';
import { EnvelopeIcon, MapPinIcon, PhoneIcon, AcademicCapIcon } from '@heroicons/react/24/outline';

const Contact = () => {
  const contactInfo = [
    {
      icon: EnvelopeIcon,
      title: 'Email',
      value: 'samad04.in@gmail.com',
      description: 'Send me an email anytime'
    },
    {
      icon: PhoneIcon,
      title: 'Phone',
      value: '+91 9096345086',
      description: 'Mon-Sat from 9am to 5pm'
    },
    {
      icon: MapPinIcon,
      title: 'Location',
      value: 'Nagpur, Maharashtra, IND',
      description: 'Available for Work'
    },
    {
      icon: AcademicCapIcon,
      title: 'Office Hours',
      value: '9AM - 6PM PST',
      description: 'Response within 24 hours'
    }
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <SectionTitle title="Get In Touch" subtitle="Contact Me" center={true} />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">Let's talk about everything!</h3>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-10 leading-relaxed">
              Have a project in mind? Want to collaborate? Or just want to say hi? Feel free to reach out and I'll get back to you as soon as possible.
            </p>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  className="flex items-start p-4 bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900/30 rounded-full flex items-center justify-center flex-shrink-0">
                    <info.icon className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
                  </div>
                  <div className="ml-4">
                    <h4 className="font-semibold text-gray-900 dark:text-white">{info.title}</h4>
                    <p className="text-indigo-600 dark:text-indigo-400 font-medium">{info.value}</p>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">{info.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Social Links */}
            <div className="mt-12">
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Connect with me</h4>
              <div className="flex space-x-4">
              {[ 
                { name: 'GitHub', url: 'https://github.com/SamadKhan4', icon: 'GH' },
                { name: 'LinkedIn', url: 'https://www.linkedin.com/in/samad-khan-a910b614a', icon: 'IN' },
                { name: 'Twitter', url: 'https://twitter.com/samadkhan4', icon: 'TW' },
                { name: 'Instagram', url: 'https://instagram.com/khansamad.in', icon: 'IG' }
              ].map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center hover:bg-indigo-600 hover:text-white transition-colors duration-300"
                  whileHover={{ y: -3, scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="sr-only">{social.name}</span>
                  <span className="font-medium text-sm">{social.icon}</span>
                </motion.a>
              ))}
            </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8"
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Send me a message</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-8">
              Fill out the form and I'll get back to you as soon as possible.
            </p>
            <ContactForm />
          </motion.div>
        </div>

        {/* FAQ Section */}
        <div className="mt-20">
          <SectionTitle title="Frequently Asked Questions" subtitle="FAQ" center={true} />
          
          <div className="max-w-4xl mx-auto space-y-6">
            {[
              {
                question: "How long does it take to complete a project?",
                answer: "Project timelines vary depending on complexity, but typically range from 2-8 weeks for most web applications."
              },
              {
                question: "Do you offer maintenance services?",
                answer: "Yes, I offer ongoing maintenance and support packages to ensure your project stays up-to-date and secure."
              },
              {
                question: "What technologies do you specialize in?",
                answer: "I specialize in modern JavaScript frameworks like React, Vue, and Node.js, along with cloud platforms like AWS and Azure."
              },
              {
                question: "Can you work remotely?",
                answer: "Absolutely! I have extensive experience working with remote teams and clients worldwide using various collaboration tools."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <h4 className="font-semibold text-lg text-gray-900 dark:text-white mb-2">{faq.question}</h4>
                <p className="text-gray-600 dark:text-gray-400">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;