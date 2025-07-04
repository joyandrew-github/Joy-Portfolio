import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowDown, Code, Database, Smartphone } from 'lucide-react';
import styles from './Hero.module.css';
import profileImg from '../../assets/profile.jpg';

const Hero: React.FC = () => {
  const socialLinks = [
    { icon: Github, href: 'https://github.com/joyandrew-github', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/joyandrew-s-b450322a9/', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:joyandrew.s2023it@sece.ac.in', label: 'Email' },
  ];

  const skills = [
    { icon: Code, label: 'Frontend Development' },
    { icon: Database, label: 'Backend Development' },
    { icon: Smartphone, label: 'Mobile Development' },
  ];

  return (
    <div className="dark">
      <section id="home" className={styles.hero}>
        <div className="container">
          <div className={styles.content}>
            <motion.div
              className={styles.textContent}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <motion.p
                className={styles.greeting}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                Hello, I'm
              </motion.p>

              <motion.h1
                className={styles.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                <span className="gradient-text">Joyandrew S</span>
              </motion.h1>

              <motion.h2
                className={styles.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.8 }}
              >
                Full Stack Developer
              </motion.h2>

              <motion.p
                className={styles.description}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9, duration: 0.8 }}
              >
                Passionate about creating innovative web solutions with modern technologies. 
                Specializing in MERN Stack, React Native, and cutting-edge development practices.
              </motion.p>

              <motion.div
                className={styles.skills}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.1, duration: 0.8 }}
              >
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.label}
                    className={styles.skillItem}
                    whileHover={{ scale: 1.05, y: -2 }}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.3 + index * 0.1, duration: 0.6 }}
                  >
                    <skill.icon size={20} />
                    <span>{skill.label}</span>
                  </motion.div>
                ))}
              </motion.div>

              <motion.div
                className={styles.actions}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.5, duration: 0.8 }}
              >
                <motion.a
                  href="#contact"
                  className="btn-primary"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Get In Touch
                </motion.a>

                <motion.a
                  href="#projects"
                  className="btn-secondary"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View Projects
                </motion.a>
              </motion.div>

              <motion.div
                className={styles.socialLinks}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.7, duration: 0.8 }}
              >
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.socialLink}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.9 + index * 0.1, duration: 0.6 }}
                  >
                    <link.icon size={20} />
                  </motion.a>
                ))}
              </motion.div>
            </motion.div>

            <motion.div
              className={styles.imageContent}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
            >
              <div className={styles.profileImage}>
                <motion.div
                  className={styles.imageWrapper}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <img
                    src={profileImg}
                    alt="Joyandrew S"
                    className={styles.image}
                  />
                  <div className={styles.imageOverlay}></div>
                </motion.div>
              </div>
            </motion.div>
          </div>

          <motion.div
            className={styles.scrollIndicator}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.2, duration: 0.8 }}
          >
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <ArrowDown size={20} />
            </motion.div>
            <span>Scroll to explore</span>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Hero;