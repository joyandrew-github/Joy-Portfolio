import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Smartphone, Globe, Server, Palette } from 'lucide-react';
import styles from './Skills.module.css';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: Code,
      skills: [
        { name: 'React.js', level: 90 },
        { name: 'JavaScript', level: 85 },
        { name: 'HTML/CSS', level: 95 },
        { name: 'Three.js', level: 75 },
        { name: 'Bootstrap', level: 80 },
        { name: 'GSAP', level: 70 },
        { name: 'Framer Motion', level: 80 },
      ],
    },
    {
      title: 'Backend Development',
      icon: Server,
      skills: [
        { name: 'Node.js', level: 85 },
        { name: 'Express.js', level: 80 },
        { name: 'REST API', level: 85 },
        { name: 'MongoDB', level: 80 },
        { name: 'Mongoose', level: 75 },
        { name: 'GridFS', level: 70 },
      ],
    },
    {
      title: 'Programming Languages',
      icon: Globe,
      skills: [
        { name: 'C++', level: 90 },
        { name: 'C', level: 85 },
        { name: 'Python', level: 80 },
        { name: 'Java', level: 75 },
        { name: 'JavaScript', level: 85 },
      ],
    },
    {
      title: 'Mobile Development',
      icon: Smartphone,
      skills: [
        { name: 'React Native', level: 75 },
      ],
    },
    {
      title: 'Database Management',
      icon: Database,
      skills: [
        { name: 'SQL', level: 80 },
        { name: 'MongoDB', level: 85 },
      ],
    },
    {
      title: 'Tools & Others',
      icon: Palette,
      skills: [
        { name: 'Git/GitHub', level: 85 },
        { name: 'VS Code', level: 90 },
        { name: 'IntelliJ', level: 75 },
        { name: 'Canva', level: 80 },
        { name: 'PowerPoint', level: 85 },
        { name: 'MATLAB', level: 70 },
        { name: 'Google Colab', level: 75 },
      ],
    },
  ];

  return (
    <section id="skills" className={`${styles.skills} section-padding`}>
      <div className="container">
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className={styles.title}>
            Skills & <span className="gradient-text">Expertise</span>
          </h2>
          <p className={styles.subtitle}>
            Technologies and tools I work with to bring ideas to life
          </p>
        </motion.div>

        <div className={styles.skillsGrid}>
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              className={styles.skillCategory}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className={styles.categoryHeader}>
                <div className={styles.categoryIcon}>
                  <category.icon size={20} />
                </div>
                <h3 className={styles.categoryTitle}>{category.title}</h3>
              </div>

              <div className={styles.skillsList}>
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    className={styles.skillItem}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ 
                      duration: 0.6, 
                      delay: categoryIndex * 0.1 + skillIndex * 0.05 
                    }}
                    viewport={{ once: true }}
                  >
                    <div className={styles.skillHeader}>
                      <span className={styles.skillName}>{skill.name}</span>
                      <span className={styles.skillLevel}>{skill.level}%</span>
                    </div>
                    <div className={styles.skillBar}>
                      <motion.div
                        className={styles.skillProgress}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ 
                          duration: 1, 
                          delay: categoryIndex * 0.1 + skillIndex * 0.05 + 0.3,
                          ease: "easeOut"
                        }}
                        viewport={{ once: true }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className={styles.additionalInfo}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <div className={styles.infoCard}>
            <h4>Core Concepts</h4>
            <p>Object-Oriented Programming (OOP) in C++, Data Structures & Algorithms (DSA)</p>
          </div>
          <div className={styles.infoCard}>
            <h4>Problem Solving</h4>
            <p>LeetCode: 150+ problems solved, Contest Rating: 1,608 | SkillRack: 950+ problems solved</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;