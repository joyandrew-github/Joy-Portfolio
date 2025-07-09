import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Award, Star, Target } from 'lucide-react';
import styles from './Achievements.module.css';
import leetcodeLogo from '../../assets/leetcode.jpeg';
import skillrackLogo from '../../assets/skillrack.jpg';
import codechefLogo from '../../assets/codechef.png';
import hackerrankLogo from '../../assets/hackerrank.png';

const Achievements: React.FC = () => {
  const achievements = [
    {
      title: 'Winner - Buildathon- Expo',
      organization: 'Sri Eshwar College of Engineering',
      description: 'Achieved 1st place among 20+ teams in the department at the C Buildathon held at Sri Eshwar College of Engineering.',
      date: 'Oct 2023',
      icon: Award,
      type: 'competition',
    },
    {
      title: 'Winner - Shophify (eCommerce Website)',
      organization: 'Sri Eshwar College of Engineering',
      description: 'Achieved 1st place among 60+ members in Project-Based Learning by developing a fully functional eCommerce website (Shophify) using Django and MySQL.',
      date: 'June 2024',
      icon: Trophy,
      type: 'competition',
    },
    {
      title: 'Winner - Project Expo',
      organization: 'Sri Ramakrishna Institute of Technology',
      description: 'Secured 1st place at the Project Expo held at Sri Ramakrishna Institute of Technology for EduViz - Interactive 3D Learning Platform, winning a cash prize of ₹2,000.',
      date: 'April 2025',
      icon: Award,
      type: 'competition',
    },
    {
      title: 'Winners Up - Mini Project Expo 2K25',
      organization: 'Sri Eshwar College of Engineering',
      description: 'A Web-Based Solution that enhances conceptual understanding through immersive 3D Visualizations (EduViz).',
      date: 'April 2025',
      icon: Star,
      type: 'competition',
    },
    {
      title: 'Runner Up - Freshathon',
      organization: 'Sri Eshwar College of Engineering',
      description: 'Developed a Smart Parking and Booking System, winning a ₹5,000 cash prize among 15 finalist teams, featuring real-time space tracking, optimized allocation, and congestion reduction.',
      date: 'June 2024',
      icon: Target,
      type: 'hackathon',
    },
  ];

  const certifications = [
    'C++/C Data Structures & Algorithms (Udemy)',
    'National Level STTP 2K24 (AICTE & Brainovision Solutions) - Java Full Stack',
    'Python for Data Science (Udemy)',
    'SQL Basics & Intermediate (HackerRank)',
    'Frontend Development: HTML, CSS & JavaScript (Udemy)',
    'Full Stack Development: React.js, Node.js, Express.js, MongoDB (Udemy)',
    'Java Programming: Beginner to Master (Udemy)',
  ];

  const problemSolving = [
    {
      platform: 'LeetCode',
      achievement: 'Solved 200+ problems, Contest Rating: 1,608',
      link: 'https://leetcode.com/u/user5788Ci/',
    },
    {
      platform: 'SkillRack',
      achievement: 'Solved 950+ problems, Rank: 23915',
      link: 'https://www.skillrack.com/faces/resume.xhtml?id=484635&key=30ab779f84cdb0655c44daaefde8f946d1f5e7cd',
    },
    {
      platform: 'CodeChef',
      achievement: 'Solved 85+ problems',
      link: 'https://www.codechef.com/users/joyandrews', // Replace with your actual CodeChef profile link
    },
    {
      platform: 'HackerRank',
      achievement: 'Java 5★ (Gold), C++ 3★ (Silver), Python 3★ (Silver), SQL 1★ (Bronze), Hackos: 502',
      link: 'https://www.hackerrank.com/profile/joyandrew006',
    },
  ];

  return (
    <section id="achievements" className={`${styles.achievements} section-padding`}>
      <div className="container">
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className={styles.title}>
            Achievements & <span className="gradient-text">Recognition</span>
          </h2>
          <p className={styles.subtitle}>
            Awards, certifications, and milestones in my journey
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
              Awards & Competitions
            </motion.h3>

            <div className={styles.achievementsGrid}>
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  className={styles.achievementCard}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                >
                  <div className={styles.achievementIcon}>
                    <achievement.icon size={20} />
                  </div>
                  <div className={styles.achievementContent}>
                    <h4 className={styles.achievementTitle}>{achievement.title}</h4>
                    <p className={styles.organization}>{achievement.organization}</p>
                    <p className={styles.description}>{achievement.description}</p>
                    {achievement.title === 'Winner - Buildathon- Expo' && false && (
                      <div className={styles.achievementLogos}>
                        <img src={leetcodeLogo} alt="LeetCode" style={{ height: 36, width: 52, objectFit: 'contain', borderRadius: 6, background: '#fff', boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }} />
                        <img src={skillrackLogo} alt="Skillrack" style={{ height: 36, width: 36, objectFit: 'contain', borderRadius: 6, background: '#fff', boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }} />
                      </div>
                    )}
                    <div className={styles.achievementDate}>{achievement.date}</div>
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
              Problem Solving
            </motion.h3>

            <div className={styles.problemSolvingGrid}>
              {problemSolving.map((item, index) => (
                <motion.a
                  key={index}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.problemSolvingCard}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02, y: -5 }}
                >
                  {item.platform === 'LeetCode' && (
                    <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 8 }}>
                      <img src={leetcodeLogo} alt="LeetCode" style={{ height: 36, width: 52, objectFit: 'contain', borderRadius: 6, background: '#fff', boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }} />
                    </div>
                  )}
                  {item.platform === 'SkillRack' && (
                    <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 8 }}>
                      <img src={skillrackLogo} alt="Skillrack" style={{ height: 36, width: 36, objectFit: 'contain', borderRadius: 6, background: '#fff', boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }} />
                    </div>
                  )}
                  {item.platform === 'CodeChef' && (
                    <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 8 }}>
                      <img src={codechefLogo} alt="CodeChef" style={{ height: 36, width: 52, objectFit: 'contain', borderRadius: 6, background: '#fff', boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }} />
                    </div>
                  )}
                  {item.platform === 'HackerRank' && (
                    <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 8 }}>
                      <img src={hackerrankLogo} alt="HackerRank" style={{ height: 36, width: 52, objectFit: 'contain', borderRadius: 6, background: '#fff', boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }} />
                    </div>
                  )}
                  <h4 className={styles.platform}>{item.platform}</h4>
                  {item.platform === 'HackerRank' ? (
                    <div className={styles.achievement} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 0 }}>
                      <span>Java <span className={styles.goldStar}>5★</span> (Gold)</span>
                      <span>C++ <span className={styles.silverStar}>3★</span> (Silver)</span>
                      <span>Python <span className={styles.silverStar}>3★</span> (Silver)</span>
                      <span>C <span className={styles.bronzeStar}>1★</span> (Bronze)</span>
                      <span>SQL <span className={styles.bronzeStar}>1★</span> (Bronze)</span>
                      <span>Hackos: 502</span>
                    </div>
                  ) : (
                    <p className={styles.achievement}>{item.achievement}</p>
                  )}
                </motion.a>
              ))}
            </div>
          </div>

          <div className={styles.section}>
            <motion.h3
              className={styles.sectionTitle}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              Certifications
            </motion.h3>

            <div className={styles.certificationsGrid}>
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  className={styles.certificationItem}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 + index * 0.05 }}
                  viewport={{ once: true }}
                  whileHover={{ x: 5 }}
                >
                  <div className={styles.certificationIcon}>
                    <Award size={16} />
                  </div>
                  <span>{cert}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;