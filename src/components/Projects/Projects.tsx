import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Calendar } from 'lucide-react';
import styles from './Projects.module.css';

const Projects: React.FC = () => {
  const projects = [
    {
      title: 'Smart Parking and Booking System',
      description: 'The Smart Parking and Booking System optimizes parking space utilization with a convenient booking platform, real-time updates, and enhanced user experience.',
      image: 'https://images.pexels.com/photos/753876/pexels-photo-753876.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'REST API', 'Leaflet', 'RazorPay'],
      liveLink: 'https://namma-spot.vercel.app/',
      githubLink: 'https://github.com/joyandrew-github',
      date: 'June 2024',
      featured: true,
    },
    {
      title: 'EduViz - Interactive 3D Learning Platform',
      description: 'Built an interactive 3D learning platform enabling real-time visualization of complex concepts in fields like engineering and medicine, with dynamic model rendering, smooth navigation, and subject-wise content management.',
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React', 'Three.js', 'Node.js', 'Express.js', 'MongoDB', 'GridFS', 'REST API'],
      liveLink: 'https://eduviz-learning-platform.vercel.app/ ',
      githubLink: 'https://github.com/joyandrew-github',
      date: 'Mar 2025',
      featured: true,
    },
    {
      title: 'ClassConnect - Virtual Classroom Platform',
      description: 'An advanced virtual classroom platform enabling seamless interaction between students and teachers. It supports live classes, course management, real-time chat, quizzes, performance tracking, and secure access through Google OAuth.',
      image: 'https://images.pexels.com/photos/4144923/pexels-photo-4144923.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React', 'Node.js', 'Express.js', 'MongoDB', 'REST API', 'Google OAuth', 'WebRTC', 'Cloudinary'],
      liveLink: 'https://classconnect-frontend.vercel.app/',
      githubLink: 'https://github.com/joyandrew-github',
      date: 'May 2025',
      featured: true,
    },
    {
      title: 'BookHive - Online Book Management',
      description: 'A dynamic online platform for managing and exploring books with user authentication, book listings, reviews, and responsive UI to enhance user interaction and accessibility.',
      image: 'https://images.pexels.com/photos/1370295/pexels-photo-1370295.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'REST API', 'Razorpay'],
      liveLink: 'https://mern-book-front-ruby.vercel.app/',
      githubLink: 'https://github.com/joyandrew-github',
      date: 'Jan 2024',
      featured: false,
    },
    {
      title: 'TASK MANAGER',
      description: 'Developed a task management application using C, allowing users to create, prioritize, and track deadlines for tasks. The app helps organize tasks efficiently with an easy-to-use interface. It also provides real-time notifications and progress tracking to boost productivity.',
      image: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['C'],
      liveLink: '#',
      githubLink: 'https://github.com/joyandrew-github',
      date: '',
      featured: false,
    },
    {
      title: 'SHOPIFY [E-COMMERCE PLATFORM]',
      description: 'SHOPIFY is a Django-based platform offering a seamless marketplace for buying and selling products, with secure authentication and admin management features. It integrates Jazmin for enhanced UI and Razorpay for secure payment handling, powered by MySQL for scalable performance. Future plans include expanding offerings and introducing AI-powered personalised recommendations for improved shopping experience.',
      image: 'https://images.pexels.com/photos/264636/pexels-photo-264636.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Python', 'Django', 'MySQL', 'Razorpay', 'Jazmin'],
      liveLink: '#',
      githubLink: 'https://github.com/joyandrew-github',
      date: '',
      featured: false,
    },
  ];

  return (
    <section id="projects" className={`${styles.projects} section-padding`}>
      <div className="container">
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className={styles.title}>
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className={styles.subtitle}>
            A showcase of my recent work and technical expertise
          </p>
        </motion.div>

        <div className={styles.projectsGrid}>
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className={`${styles.projectCard} ${project.featured ? styles.featured : ''}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className={styles.projectImage}>
                <img src={project.image} alt={project.title} />
                <div className={styles.projectOverlay}>
                  <div className={styles.projectLinks}>
                    <motion.a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.projectLink}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <ExternalLink size={18} />
                    </motion.a>
                    <motion.a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.projectLink}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Github size={18} />
                    </motion.a>
                  </div>
                </div>
              </div>

              <div className={styles.projectContent}>
                <div className={styles.projectHeader}>
                  <h3 className={styles.projectTitle}>{project.title}</h3>
                  <div className={styles.projectDate}>
                    <Calendar size={14} />
                    <span>{project.date}</span>
                  </div>
                </div>

                <p className={styles.projectDescription}>{project.description}</p>

                <div className={styles.projectTechnologies}>
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className={styles.tech}>
                      {tech}
                    </span>
                  ))}
                </div>

                <div className={styles.projectActions}>
                  <motion.a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ExternalLink size={16} />
                    Live Demo
                  </motion.a>
                  <motion.a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Github size={16} />
                    Code
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;