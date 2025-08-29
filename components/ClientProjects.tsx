'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const projects = [
  {
    title: 'Mediplus',
    description: 'An e-commerce website for pharmacy products and medical supplies. Users can browse medicines, view product details, and securely place orders. Built with ReactJS and Spring Boot, it includes authentication, cart system, and a secure payment gateway.',
    image: '/images/mediplus.png',
    tech: ['ReactJS', 'Spring Boot', 'MySQL', 'JWT', 'CORS'],
    link: 'https://medi-plus-beta.vercel.app/'
  },

  {
    title: 'Clinic Management Software',
    description: 'A web app to help clinics manage appointments, patients, and billing. Doctors can track schedules easily while patients can book faster. Added secure login and payment integration for smoother operations.',
    image: '/images/clinic_img.png',
    tech: ['ReactJS', 'Spring Boot', 'MySQL', 'JWT', 'CORS'],
    link: '#contact'
  },

  {
    title: 'Cab Booking System',
    description: 'A booking system for employee travel with real-time GPS tracking and simple ride management. It helps employees book cabs easily and admins monitor rides with live tracking.',
    image: '/images/cab_booking.png',
    tech: ['ReactJS', 'Spring Boot', 'GPS Integration', 'Real-time Tracking'],
    link: '#contact'
  }
];

const ClientProjects = () => {
  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <motion.h2 
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center mb-12"
        >
          Featured Projects
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden"
            >
              <div className="relative h-48">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <a 
                  href={project.link}
                  className="text-blue-500 hover:text-blue-600 font-medium"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Project →
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientProjects;
