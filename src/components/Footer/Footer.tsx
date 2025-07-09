import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowUp, User, Code2, FolderOpen, Send, Briefcase, Trophy } from 'lucide-react';
import styles from './Footer.module.css';

const navItems = [
  { href: '#about', label: 'About', icon: <User size={18} /> },
  { href: '#skills', label: 'Skills', icon: <Code2 size={18} /> },
  { href: '#projects', label: 'Projects', icon: <FolderOpen size={18} /> },
  { href: '#experience', label: 'Experience', icon: <Briefcase size={18} /> },
  { href: '#achievements', label: 'Achievements', icon: <Trophy size={18} /> },
  { href: '#contact', label: 'Contact', icon: <Send size={18} /> },
];

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.topSection}>
        <div className={styles.aboutSection}>
          <span className={styles.logo}>
            <span className="gradient-text">Joyandrew S</span>
          </span>
          <p className={styles.description}>
            Full Stack Developer passionate about creating innovative digital solutions.
          </p>
        </div>
        <div className={styles.linksSection}>
          <h4 className={styles.linksTitle}>Quick Links</h4>
          <div className={styles.linksGrid}>
            <div>
              <a href="#about" className={styles.link}>
                <span className={styles.linkIcon}><User size={18} /></span>About
              </a>
              <a href="#skills" className={styles.link}>
                <span className={styles.linkIcon}><Code2 size={18} /></span>Skills
              </a>
              <a href="#experience" className={styles.link}>
                <span className={styles.linkIcon}><Briefcase size={18} /></span>Experience
              </a>
            </div>
            <div>
              <a href="#projects" className={styles.link}>
                <span className={styles.linkIcon}><FolderOpen size={18} /></span>Projects
              </a>
              <a href="#achievements" className={styles.link}>
                <span className={styles.linkIcon}><Trophy size={18} /></span>Achievements
              </a>
              <a href="#contact" className={styles.link}>
                <span className={styles.linkIcon}><Send size={18} /></span>Contact
              </a>
            </div>
          </div>
        </div>
        <div className={styles.connectSection}>
          <h4 className={styles.connectTitle}>Connect</h4>
          <div className={styles.socialRow}>
            <a
              href="https://github.com/joyandrew-github"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialCircle}
              aria-label="GitHub"
            >
              <Github size={22} />
            </a>
            <a
              href="https://www.linkedin.com/in/joyandrew-s-b450322a9/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialCircle}
              aria-label="LinkedIn"
            >
              <Linkedin size={22} />
            </a>
            <a
              href="mailto:joyandrew.s2023it@sece.ac.in"
              className={styles.socialCircle}
              aria-label="Email"
            >
              <Mail size={22} />
            </a>
          </div>
          <a href="#home" className={styles.backToTop}>
            <ArrowUp size={18} /> Back to Top
          </a>
        </div>
      </div>
      <hr className={styles.divider} />
      <div className={styles.bottomSection}>
        <span className={styles.copyright}>
          &copy; {new Date().getFullYear()} Joyandrew S. All rights reserved.
        </span>
        {/* <span className={styles.credit}>
          Made with <span style={{color: '#f87171', fontWeight: 600}}>&#10084;</span> using React, TypeScript &amp; Tailwind CSS
        </span> */}
      </div>
    </footer>
  );
};

export default Footer;
