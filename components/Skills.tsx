'use client';

import { motion } from 'framer-motion';

const skills = [
  {
    category: 'Frontend Development',
    items: [
      { name: 'ReactJS', level: 90 },
      { name: 'JavaScript', level: 85 },
      { name: 'HTML5', level: 90 },
      { name: 'Tailwind CSS', level: 85 },
      { name: 'Flutter', level: 75 },
    ],
  },
  {
    category: 'Backend Development',
    items: [
      { name: 'Spring Boot', level: 85 },
      { name: 'Node.js', level: 80 },
      { name: 'MySQL', level: 85 },
      { name: 'RESTful APIs', level: 90 },
    ],
  },
  {
    category: 'Tools & Others',
    items: [
      { name: 'Git', level: 85 },
      { name: 'GitHub', level: 85 },
      { name: 'JIRA', level: 80 },
      { name: 'Postman', level: 85 },
      { name: 'VS Code', level: 90 },
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="text-3xl lg:text-4xl font-bold text-center mb-16"
        >
          Skills & Expertise
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skillGroup, groupIndex) => (
            <motion.div
              key={groupIndex}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: groupIndex * 0.2 }}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg"
            >
              <h3 className="text-xl font-semibold mb-6">{skillGroup.category}</h3>
              <div className="space-y-4">
                {skillGroup.items.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-600 dark:text-gray-300">{skill.name}</span>
                      <span className="text-gray-600 dark:text-gray-300">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: skillIndex * 0.1 }}
                        className="h-2.5 rounded-full bg-gradient-to-r from-blue-500 to-purple-500"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
