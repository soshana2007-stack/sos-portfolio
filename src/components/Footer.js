import React from 'react';
import { ShieldCheck, Heart, ArrowUp, Linkedin, Mail, MapPin } from 'lucide-react';
import { portfolioData } from '../data/portfolioData.js';

export default function Footer({ onOpenResume, onOpenVerification }) {
  const { personal } = portfolioData;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="nav-brand" style={{ marginBottom: '0.5rem' }}>
              <div className="nav-avatar-icon">
                <span>SS</span>
              </div>
              <span style={{ color: '#ffffff' }}>S. Soshanashree</span>
            </div>
            <p>
              B.Tech Information Technology student at IFET College of Engineering. Focused on modern web development, core programming, embedded systems, and network fundamentals.
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginTop: '1rem' }}>
              <div className="verified-pill" onClick={onOpenVerification} style={{ cursor: 'pointer' }}>
                <span className="pulse-dot"></span>
                <ShieldCheck size={14} />
                <span>Verified Candidate</span>
              </div>
            </div>
          </div>

          <div className="footer-col">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              <li><a href="#about">About Me</a></li>
              <li><a href="#skills">Technical Skills</a></li>
              <li><a href="#projects">Key Projects</a></li>
              <li><a href="#experience">Internship Experience</a></li>
              <li><a href="#education">Education Details</a></li>
              <li><a href="#certificates">Certifications</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Connect & Verify</h4>
            <ul className="footer-links">
              <li>
                <a href={personal.linkedin} target="_blank" rel="noreferrer">
                  LinkedIn Profile
                </a>
              </li>
              <li>
                <a href={`mailto:${personal.email}`}>
                  {personal.email}
                </a>
              </li>
              <li>
                <button 
                  onClick={onOpenResume}
                  style={{ color: 'var(--text-secondary)', textAlign: 'left', font: 'inherit' }}
                >
                  View Full Resume (PDF)
                </button>
              </li>
              <li>
                <button 
                  onClick={onOpenVerification}
                  style={{ color: '#34d399', textAlign: 'left', font: 'inherit', fontWeight: 600 }}
                >
                  Credential Verification
                </button>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <div>
            © {new Date().getFullYear()} S. Soshanashree. All rights reserved.
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <span>Built with React & Vite</span>
            <button 
              className="btn btn-secondary btn-sm"
              onClick={scrollToTop}
              title="Back to Top"
            >
              <ArrowUp size={14} />
              <span>Top</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
