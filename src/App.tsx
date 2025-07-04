import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Experience from './components/Experience/Experience';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';
import Achievements from './components/Achievements/Achievements';
import Contact from './components/Contact/Contact';
import Background3D from './components/Background3D/Background3D';
import './styles/global.css';

function App() {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const onScroll = () => {
      const about = document.getElementById('about');
      const projects = document.getElementById('projects');
      if (about) {
        const rect = about.getBoundingClientRect();
        if (rect.top <= 80 && rect.bottom >= 80) {
          setActiveSection('about');
          return;
        }
      }
      if (projects) {
        const rect = projects.getBoundingClientRect();
        if (rect.top <= 80 && rect.bottom >= 80) {
          setActiveSection('projects');
          return;
        }
      }
      setActiveSection('');
    };
    window.addEventListener('scroll', onScroll);
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <Background3D hideInDarkAbout={true} section={activeSection} />
      
      <div className="relative z-10">
        <Header />
        
        <motion.main
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <Hero />
          <About />
          <Experience />
          <Projects />
          <Skills />
          <Achievements />
          <Contact />
        </motion.main>
      </div>
    </div>
  );
}

export default App;