'use client';

import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-50 dark:bg-gray-900 py-12">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          <div>
            <h3 className="text-xl font-bold mb-4">Portfolio</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Software Developer specializing in ReactJS, Spring Boot, and MySQL.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Connect</h3>
            <div className="space-y-2">
              <a
                href="https://github.com/akashkore019"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400"
              >
                GitHub
              </a>
              <a
                href="https://linkedin.com/in/akashkore19"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400"
              >
                LinkedIn
              </a>
              <a
                href="mailto:akashkore1912@gmail.com"
                className="block text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400"
              >
                Email
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <div className="space-y-2">
              <p className="text-gray-600 dark:text-gray-400">
                Email: akashkore1912@gmail.com
              </p>
              <p className="text-gray-600 dark:text-gray-400">
                Location: Pune, Maharashtra
              </p>
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="border-t border-gray-200 dark:border-gray-700 mt-12 pt-8 text-center"
        >
          <p className="text-gray-600 dark:text-gray-400">
            © {currentYear} Akash Rajkumar Kore. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
