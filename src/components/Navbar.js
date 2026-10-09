import React, { useState, useEffect } from 'react';
import { ShieldCheck, FileText, Menu, X, Sparkles } from 'lucide-react';
import { portfolioData } from '../data/portfolioData.js';

export default function Navbar({ onOpenResume, onOpenVerification }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeNav, setActiveNav] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'experience', label: 'Experience' },
    { id: 'education', label: 'Education' },
    { id: 'certificates', label: 'Certifications' },
    { id: 'contact', label: 'Contact' }
  ];

  const handleNavClick = (id) => {
    setActiveNav(id);
    setMobileOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
      <div className="container nav-container">
        <a href="#hero" className="nav-brand" onClick={() => handleNavClick('hero')}>
          <div className="nav-avatar-icon">
            <span>SS</span>
          </div>
          <div>
            <span style={{ color: '#ffffff' }}>Soshanashree</span>
            <span style={{ color: 'var(--accent-primary)', marginLeft: '2px' }}>.</span>
          </div>
        </a>

        <ul className={`nav-links ${mobileOpen ? 'open' : ''}`}>
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                className={`nav-link ${activeNav === link.id ? 'active' : ''}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.id);
                }}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="nav-actions">
          <button
            className="btn btn-verified btn-sm"
            onClick={onOpenVerification}
            title="View Official Verification & Identity Proof"
          >
            <ShieldCheck size={16} />
            <span>Verified ID</span>
          </button>

          <button
            className="btn btn-primary btn-sm"
            onClick={onOpenResume}
            title="Open Interactive Fullscreen Resume"
          >
            <FileText size={16} />
            <span>Resume</span>
          </button>

          <button
            className="nav-toggle"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle navigation"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>
    </nav>
  );
}
