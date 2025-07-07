import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Smartphone, Globe, Server, Palette } from 'lucide-react';
import styles from './Skills.module.css';
import leetcodeLogo from '../../assets/leetcode.jpeg';
import skillrackLogo from '../../assets/skillrack.jpg';
import datastructureLogo from '../../assets/image.png';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: Code,
      skills: [
        { name: 'React.js' },
        { name: 'JavaScript' },
        { name: 'HTML/CSS' },
        { name: 'Three.js' },
        { name: 'Bootstrap' },
        { name: 'GSAP' },
        { name: 'Framer Motion' },
      ],
    },
    {
      title: 'Backend Development',
      icon: Server,
      skills: [
        { name: 'Node.js' },
        { name: 'Express.js' },
        { name: 'Django' },
        { name: 'REST API' },
        { name: 'MongoDB' },
        { name: 'Mongoose' },
        { name: 'GridFS' },
      ],
    },
    {
      title: 'Programming Languages',
      icon: Globe,
      skills: [
        { name: 'C++' },
        { name: 'C' },
        { name: 'Python' },
        { name: 'Java' },
        { name: 'JavaScript' },
      ],
    },
    {
      title: 'Mobile Development',
      icon: Smartphone,
      skills: [
        { name: 'React Native' },
      ],
    },
    {
      title: 'Database Management',
      icon: Database,
      skills: [
        { name: 'SQL' },
        { name: 'MongoDB' },
      ],
    },
    {
      title: 'Tools & Others',
      icon: Palette,
      skills: [
        { name: 'Git/GitHub' },
        { name: 'VS Code' },
        { name: 'IntelliJ' },
        { name: 'Canva' },
        { name: 'PowerPoint' },
        { name: 'MATLAB' },
        { name: 'Google Colab' },
      ],
    },
  ];

  const frontendLogos: Record<string, string> = {
    'React.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
    'JavaScript': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
    'HTML/CSS': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
    'Three.js': 'https://raw.githubusercontent.com/mrdoob/three.js/dev/files/icon.svg',
    'Bootstrap': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg',
    'GSAP': 'https://shots.codepen.io/username/pen/PoXrZEg-800.jpg?version=1703085562',
    'Framer Motion': 'https://cdn.sanity.io/images/ny7hli7r/production/d15889b5e323f407247b0365781f998ed37de31e-2147x927.png',
  };

  const backendLogos: Record<string, string> = {
    'Node.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
    'Express.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg',
    'Django': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg',
    'REST API': 'https://tse3.mm.bing.net/th/id/OIP.I8_CIuflc5pRWmVCVpph3gHaFs?cb=thvnextc1&rs=1&pid=ImgDetMain&o=7&rm=3',
    'MongoDB': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
    'Mongoose': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongoose/mongoose-original.svg',
    'GridFS': 'https://img.icons8.com/ios-filled/50/000000/database.png',
  };

  const programmingLogos: Record<string, string> = {
    'C++': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg',
    'C': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg',
    'Python': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
    'Java': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
    'JavaScript': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
  };

  const toolsLogos: Record<string, string> = {
    'Git/GitHub': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg',
    'VS Code': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg',
    'IntelliJ': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/intellij/intellij-original.svg',
    'Canva': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/canva/canva-original.svg',
    'PowerPoint': 'https://logodownload.org/wp-content/uploads/2020/04/microsoft-powerpoint-logo-0.png',
    'MATLAB': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/matlab/matlab-original.svg',
    'Google Colab': 'https://colab.research.google.com/img/colab_favicon_256px.png',
  };

  const databaseLogos: Record<string, string> = {
    'SQL': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
    'MongoDB': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
  };

  const mobileLogos: Record<string, string> = {
    'React Native': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
  };

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
                      {category.title === 'Frontend Development' && frontendLogos[skill.name] && (
                        <img src={frontendLogos[skill.name]} alt={skill.name + ' logo'} style={{ height: 24, width: 24, objectFit: 'contain', marginRight: 8 }} />
                      )}
                      {category.title === 'Backend Development' && backendLogos[skill.name] && (
                        <img src={backendLogos[skill.name]} alt={skill.name + ' logo'} style={{ height: 24, width: 24, objectFit: 'contain', marginRight: 8, background: '#fff', borderRadius: 4 }} />
                      )}
                      {category.title === 'Programming Languages' && programmingLogos[skill.name] && (
                        <img src={programmingLogos[skill.name]} alt={skill.name + ' logo'} style={{ height: 24, width: 24, objectFit: 'contain', marginRight: 8 }} />
                      )}
                      {category.title === 'Tools & Others' && toolsLogos[skill.name] && (
                        <img src={toolsLogos[skill.name]} alt={skill.name + ' logo'} style={{ height: 24, width: 24, objectFit: 'contain', marginRight: 8 }} />
                      )}
                      {category.title === 'Database Management' && databaseLogos[skill.name] && (
                        <img src={databaseLogos[skill.name]} alt={skill.name + ' logo'} style={{ height: 24, width: 24, objectFit: 'contain', marginRight: 8 }} />
                      )}
                      {category.title === 'Mobile Development' && mobileLogos[skill.name] && (
                        <img src={mobileLogos[skill.name]} alt={skill.name + ' logo'} style={{ height: 24, width: 24, objectFit: 'contain', marginRight: 8 }} />
                      )}
                      <span className={styles.skillName}>{skill.name}</span>
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
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem', marginBottom: '0.5rem' }}>
              <img src={datastructureLogo} alt="Data Structure" style={{ height: 94, width: 94, objectFit: 'contain', borderRadius: 8, background: '#fff', boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }} />
            </div>
            <p>Object-Oriented Programming (OOP) in C++, Data Structures & Algorithms (DSA)</p>
          </div>
          <div className={styles.infoCard}>
            <h4>Problem Solving</h4>
            <div style={{ display: 'flex', alignItems: 'center', gap: '2rem', justifyContent: 'center', marginBottom: '0.5rem' }}>
              <img src={leetcodeLogo} alt="LeetCode" style={{ height: 72, width: 100, objectFit: 'contain', borderRadius: 8, background: '#fff', boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }} />
              <img src={skillrackLogo} alt="Skillrack" style={{ height: 72, width: 72, objectFit: 'contain', borderRadius: 8, background: '#fff', boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }} />
            </div>
            <p style={{ textAlign: 'center' }}>LeetCode: 200+ problems solved, Contest Rating: 1,608 | SkillRack: 950+ problems solved</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;