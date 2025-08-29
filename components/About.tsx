'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          <div className="relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden">
            <motion.div
              initial={{ scale: 1.2 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative w-full h-full"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20" />
              <Image
                src="/images/profile.png"
                alt="Profile"
                fill
                className="object-cover"
                priority
              />
            </motion.div>
          </div>
          <div>
            <motion.h2
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="text-3xl lg:text-4xl font-bold mb-6"
            >
              About Me
            </motion.h2>
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-gray-600 dark:text-gray-300 mb-6"
            >
              Software Developer with 2 years of experience in ReactJS, Spring Boot, and MySQL. 
              I&apos;ve successfully built 10+ high-uptime apps, improved UI consistency, and boosted data sync 
              speeds by 35% via RESTful APIs. Passionate about enhancing UX and optimizing performance.
            </motion.p>
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="grid grid-cols-2 gap-4"
            >
              <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <h3 className="font-semibold mb-2">Frontend</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  React, Next.js, TypeScript, Tailwind CSS
                </p>
              </div>
              <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <h3 className="font-semibold mb-2">Backend</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Node.js, Python, PostgreSQL, MongoDB
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
