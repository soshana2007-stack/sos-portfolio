import React, { useState, useEffect } from 'react';
import { 
  FileText, 
  ArrowRight, 
  ShieldCheck, 
  Linkedin, 
  Mail, 
  MapPin, 
  Award, 
  Cpu, 
  Sparkles,
  Code2,
  GraduationCap
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData.js';

export default function Hero({ onOpenResume, onOpenVerification }) {
  const { personal } = portfolioData;
  const [taglineIndex, setTaglineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [displayText, setDisplayText] = useState('');

  useEffect(() => {
    const currentTagline = personal.taglines[taglineIndex];
    const speed = isDeleting ? 40 : 80;

    const timer = setTimeout(() => {
      if (!isDeleting && charIndex < currentTagline.length) {
        setDisplayText(currentTagline.substring(0, charIndex + 1));
        setCharIndex((prev) => prev + 1);
      } else if (isDeleting && charIndex > 0) {
        setDisplayText(currentTagline.substring(0, charIndex - 1));
        setCharIndex((prev) => prev - 1);
      } else if (!isDeleting && charIndex === currentTagline.length) {
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setTaglineIndex((prev) => (prev + 1) % personal.taglines.length);
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, taglineIndex, personal.taglines]);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="section hero-section">
      <div className="hero-glow-1"></div>
      <div className="hero-glow-2"></div>

      <div className="container hero-grid">
        <div className="hero-content">
          <div className="hero-badge-wrap">
            <div className="verified-pill" onClick={onOpenVerification} style={{ cursor: 'pointer' }}>
              <span className="pulse-dot"></span>
              <ShieldCheck size={16} />
              <span>{personal.verificationStatus}</span>
            </div>

            <div className="badge badge-primary">
              <Sparkles size={13} />
              <span>IFET College of Engineering</span>
            </div>
          </div>

          <h1 className="hero-title">
            Hi, I'm <span className="text-gradient">{personal.name}</span>
          </h1>

          <div className="hero-typed-wrap">
            <span>{displayText}</span>
            <span className="typing-cursor"></span>
          </div>

          <p className="hero-bio">
            {personal.shortBio}
          </p>

          <div className="hero-cta-group">
            <button className="btn btn-primary" onClick={onOpenResume}>
              <FileText size={18} />
              <span>View Full Resume</span>
            </button>

            <button 
              className="btn btn-secondary" 
              onClick={() => scrollToSection('projects')}
            >
              <span>Explore Projects</span>
              <ArrowRight size={18} />
            </button>

            <button 
              className="btn btn-verified"
              onClick={onOpenVerification}
            >
              <ShieldCheck size={18} />
              <span>Verify Profile</span>
            </button>
          </div>

          <div className="hero-social-links">
            <a 
              href={personal.linkedin} 
              target="_blank" 
              rel="noreferrer" 
              className="social-circle" 
              title="LinkedIn Profile"
            >
              <Linkedin size={20} />
            </a>

            <a 
              href={`mailto:${personal.email}`} 
              className="social-circle" 
              title="Send Email"
            >
              <Mail size={20} />
            </a>

            <div 
              className="social-circle" 
              title="Location"
              style={{ cursor: 'default' }}
            >
              <MapPin size={20} />
            </div>

            <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginLeft: '0.5rem' }}>
              {personal.location}
            </span>
          </div>
        </div>

        {/* Hero Right Visual Profile Card */}
        <div className="hero-card-wrapper">
          <div className="floating-tech-badge badge-top-right">
            <Cpu size={18} style={{ color: '#38bdf8' }} />
            <span>Embedded IoT & Arduino</span>
          </div>

          <div className="floating-tech-badge badge-bottom-left">
            <Code2 size={18} style={{ color: '#a855f7' }} />
            <span>React.js & Web Dev</span>
          </div>

          <div className="hero-profile-card">
            <div className="profile-avatar-banner">
              <div className="large-avatar-circle">
                <span>SS</span>
                <div className="large-avatar-badge" title="Verified Identity">
                  ✓
                </div>
              </div>
              <div className="profile-meta">
                <h3>{personal.name}</h3>
                <p>{personal.degree}</p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', marginTop: '0.3rem' }}>
                  <GraduationCap size={15} style={{ color: 'var(--accent-primary)' }} />
                  <span style={{ fontSize: '0.8rem', color: 'var(--text-highlight)' }}>
                    CGPA: <strong>{personal.cgpa}</strong>
                  </span>
                </div>
              </div>
            </div>

            <div className="profile-quick-stats">
              <div className="quick-stat-box">
                <div className="stat-box-val text-gradient">8.55</div>
                <div className="stat-box-lbl">Academic CGPA</div>
              </div>
              <div className="quick-stat-box">
                <div className="stat-box-val text-cyan-gradient">10+</div>
                <div className="stat-box-lbl">Tech Skills</div>
              </div>
              <div className="quick-stat-box">
                <div className="stat-box-val text-emerald-gradient">100%</div>
                <div className="stat-box-lbl">Verified Proof</div>
              </div>
              <div className="quick-stat-box">
                <div className="stat-box-val" style={{ color: '#fbbf24' }}>2024–28</div>
                <div className="stat-box-lbl">Batch Period</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
