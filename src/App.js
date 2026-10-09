import React, { useState } from 'react';
import Navbar from './components/Navbar.js';
import Hero from './components/Hero.js';
import About from './components/About.js';
import Skills from './components/Skills.js';
import Projects from './components/Projects.js';
import Experience from './components/Experience.js';
import Education from './components/Education.js';
import Certificates from './components/Certificates.js';
import Contact from './components/Contact.js';
import ResumeModal from './components/ResumeModal.js';
import VerificationModal from './components/VerificationModal.js';
import Footer from './components/Footer.js';

export default function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [isVerificationOpen, setIsVerificationOpen] = useState(false);

  return (
    <div className="portfolio-app">
      <Navbar 
        onOpenResume={() => setIsResumeOpen(true)}
        onOpenVerification={() => setIsVerificationOpen(true)}
      />

      <main>
        <Hero 
          onOpenResume={() => setIsResumeOpen(true)}
          onOpenVerification={() => setIsVerificationOpen(true)}
        />
        <About 
          onOpenVerification={() => setIsVerificationOpen(true)}
        />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Certificates />
        <Contact />
      </main>

      <Footer 
        onOpenResume={() => setIsResumeOpen(true)}
        onOpenVerification={() => setIsVerificationOpen(true)}
      />

      <ResumeModal 
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />

      <VerificationModal 
        isOpen={isVerificationOpen}
        onClose={() => setIsVerificationOpen(false)}
        onOpenResume={() => setIsResumeOpen(true)}
      />
    </div>
  );
}
