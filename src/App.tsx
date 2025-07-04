import React from 'react';
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
  return (
    <div className="relative min-h-screen bg-slate-50 text-slate-900 overflow-x-hidden">
      <Background3D />
      
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