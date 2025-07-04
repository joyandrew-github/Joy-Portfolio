import React from 'react';
import { motion } from 'framer-motion';
import { User, GraduationCap, MapPin, Calendar, Download } from 'lucide-react';
import styles from './About.module.css';

const About: React.FC = () => {
  const stats = [
    { label: 'Years of Experience', value: '2+' },
    { label: 'Projects Completed', value: '15+' },
    { label: 'Technologies Mastered', value: '20+' },
    { label: 'Problem Solving Rating', value: '1608' },
  ];

  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = '/Joyandrew S Resume_Final.pdf';
    link.download = 'Joyandrew_S_Resume.pdf';
    link.click();
  };

  return (
    <section id="about" className={`${styles.about} section-padding`}>
      <div className="container">
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className={styles.title}>
            About <span className="gradient-text">Me</span>
          </h2>
          <p className={styles.subtitle}>
            Get to know more about my journey and passion for technology
          </p>
        </motion.div>

        <div className={styles.content}>
          <motion.div
            className={styles.textContent}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className={styles.bio}>
              <h3>Hello! I'm Joyandrew S</h3>
              <p>
                A passionate Full Stack Developer currently pursuing B.Tech in Information Technology 
                at Sri Eshwar College of Engineering. I specialize in creating innovative web solutions 
                using modern technologies and frameworks.
              </p>
              <p>
                My journey in software development began with a curiosity about how things work behind 
                the scenes. This curiosity has evolved into a deep passion for creating user-centric 
                applications that solve real-world problems.
              </p>
              <p>
                I believe in continuous learning and staying updated with the latest technologies. 
                My goal is to contribute to meaningful projects that make a positive impact on people's lives.
              </p>
            </div>

            <div className={styles.details}>
              <div className={styles.detailItem}>
                <User className={styles.detailIcon} />
                <div>
                  <strong>Full Name:</strong>
                  <span>Joyandrew S</span>
                </div>
              </div>
              <div className={styles.detailItem}>
                <GraduationCap className={styles.detailIcon} />
                <div>
                  <strong>Education:</strong>
                  <span>B.Tech IT - Sri Eshwar College of Engineering</span>
                </div>
              </div>
              <div className={styles.detailItem}>
                <MapPin className={styles.detailIcon} />
                <div>
                  <strong>Location:</strong>
                  <span>Tamil Nadu, India</span>
                </div>
              </div>
              <div className={styles.detailItem}>
                <Calendar className={styles.detailIcon} />
                <div>
                  <strong>Graduation:</strong>
                  <span>2027</span>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className={styles.statsContent}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className={styles.stats}>
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className={styles.statItem}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <div className={styles.statValue}>{stat.value}</div>
                  <div className={styles.statLabel}>{stat.label}</div>
                </motion.div>
              ))}
            </div>

            <motion.div
              className={styles.resumeSection}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              viewport={{ once: true }}
            >
              <h4>Want to know more?</h4>
              <p>Download my resume to get detailed information about my experience and skills.</p>
              <motion.button
                className="btn-primary"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleDownloadResume}
              >
                <Download size={18} />
                Download Resume
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;