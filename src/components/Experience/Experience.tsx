import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, ExternalLink, Award } from 'lucide-react';
import styles from './Experience.module.css';

const Experience: React.FC = () => {
  const experiences = [
    {
      title: 'MERN Stack Internship',
      company: 'Better Tomorrow',
      duration: 'Jan 2024',
      location: 'Remote',
      description: 'Completed a full-stack MERN project titled BookHive, a dynamic online platform for managing and exploring books. Implemented features such as user authentication, book listings, reviews, and responsive UI to enhance user interaction and accessibility.',
      technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'REST API', 'Razorpay'],
      link: 'https://mern-book-front-ruby.vercel.app/',
    },
  ];

  const education = [
    {
      degree: 'B.Tech (Information Technology)',
      institution: 'Sri Eshwar College of Engineering',
      duration: '2023-2027',
      cgpa: '8.32 CGPA',
      description: 'Currently pursuing Bachelor of Technology in Information Technology with focus on software development, data structures, algorithms, and modern web technologies.',
    },
    {
      degree: 'HSC (Higher Secondary Certificate)',
      institution: "St. Anthony's Matric Higher Secondary School",
      duration: '2022-2023',
      percentage: '90.3%',
      description: 'Completed higher secondary education with distinction in Mathematics, Physics, Chemistry, and Computer Science.',
    },
    {
      degree: 'SSLC (Secondary School Leaving Certificate)',
      institution: "St. Anthony's Matric Higher Secondary School",
      duration: '2020-2021',
      percentage: 'Pass',
      description: 'Completed secondary education with strong foundation in core subjects.',
    },
  ];

  return (
    <section id="experience" className={`${styles.experience} section-padding`}>
      <div className="container">
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className={styles.title}>
            Experience & <span className="gradient-text">Education</span>
          </h2>
          <p className={styles.subtitle}>
            My professional journey and academic background
          </p>
        </motion.div>

        <div className={styles.content}>
          <div className={styles.section}>
            <motion.h3
              className={styles.sectionTitle}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Professional Experience
            </motion.h3>

            <div className={styles.timeline}>
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  className={styles.timelineItem}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className={styles.timelineMarker}></div>
                  <div className={styles.timelineContent}>
                    <div className={styles.experienceHeader}>
                      <div>
                        <h4 className={styles.experienceTitle}>{exp.title}</h4>
                        <h5 className={styles.company}>{exp.company}</h5>
                      </div>
                      {exp.link && (
                        <motion.a
                          href={exp.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={styles.projectLink}
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <ExternalLink size={18} />
                        </motion.a>
                      )}
                      {/* View Certificate Button */}
                      {exp.title === 'MERN Stack Internship' && (
                        <motion.a
                          href="/intern-certificate-23.pdf"
                          target="_blank"
                          rel="noopener noreferrer"
                          className={styles.certificateButton}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.97 }}
                        >
                          <Award size={20} color="#FFD600" style={{marginRight: 4}} />
                          View Certificate
                        </motion.a>
                      )}
                    </div>

                    <div className={styles.experienceDetails}>
                      <div className={styles.detailItem}>
                        <Calendar size={16} />
                        <span>{exp.duration}</span>
                      </div>
                      <div className={styles.detailItem}>
                        <MapPin size={16} />
                        <span>{exp.location}</span>
                      </div>
                    </div>

                    <p className={styles.description}>{exp.description}</p>

                    <div className={styles.technologies}>
                      {exp.technologies.map((tech, techIndex) => (
                        <span key={techIndex} className={styles.tech}>
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className={styles.section}>
            <motion.h3
              className={styles.sectionTitle}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Education
            </motion.h3>

            <div className={styles.timeline}>
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  className={styles.timelineItem}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className={styles.timelineMarker}></div>
                  <div className={styles.timelineContent}>
                    <div className={styles.educationHeader}>
                      <h4 className={styles.degree}>{edu.degree}</h4>
                      <h5 className={styles.institution}>{edu.institution}</h5>
                    </div>

                    <div className={styles.educationDetails}>
                      <div className={styles.detailItem}>
                        <Calendar size={16} />
                        <span>{edu.duration}</span>
                      </div>
                      <div className={styles.detailItem}>
                        <span className={styles.grade}>
                          {edu.cgpa || edu.percentage}
                        </span>
                      </div>
                    </div>

                    <p className={styles.description}>{edu.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;