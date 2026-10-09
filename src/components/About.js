import React from 'react';
import { 
  User, 
  GraduationCap, 
  Code, 
  Briefcase, 
  Award, 
  MapPin, 
  Mail, 
  Languages, 
  Heart,
  ShieldCheck,
  CheckCircle
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData.js';

export default function About({ onOpenVerification }) {
  const { personal, verification } = portfolioData;

  const iconMap = {
    GraduationCap: <GraduationCap size={24} />,
    Code: <Code size={24} />,
    Briefcase: <Briefcase size={24} />,
    Award: <Award size={24} />
  };

  return (
    <section id="about" className="section">
      <div className="container">
        {/* Verification Summary Strip */}
        <div className="verification-card">
          <div className="verification-grid">
            <div className="shield-icon-wrap">
              <ShieldCheck />
            </div>

            <div className="verification-details">
              <h3>
                <span>Candidate Profile Verified</span>
                <span className="badge badge-emerald">Authentic Credential</span>
              </h3>
              <p>
                Academic verification confirmed for <strong>{personal.name}</strong> • {personal.degree} at {personal.college} (CGPA: {personal.cgpa}).
              </p>
            </div>

            <div>
              <button 
                className="btn btn-verified btn-sm"
                onClick={onOpenVerification}
              >
                <ShieldCheck size={16} />
                <span>Verification Details</span>
              </button>
            </div>
          </div>
        </div>

        <div className="section-header">
          <div className="section-tag">
            <User size={14} />
            <span>Profile Overview</span>
          </div>
          <h2 className="section-title">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="section-subtitle">
            Passionate B.Tech Information Technology student focused on software engineering, web technologies, and practical IoT innovations.
          </p>
        </div>

        <div className="about-grid">
          {/* Left Summary Card */}
          <div className="glass-card about-card">
            <h3 style={{ fontSize: '1.4rem', marginBottom: '1rem', color: '#ffffff' }}>
              Professional Summary
            </h3>
            <p className="about-text">
              {personal.about}
            </p>

            <div className="personal-info-list">
              <div className="info-item">
                <span className="info-label">Degree</span>
                <span className="info-val">{personal.degree}</span>
              </div>
              <div className="info-item">
                <span className="info-label">Institution</span>
                <span className="info-val">{personal.college}</span>
              </div>
              <div className="info-item">
                <span className="info-label">Academic Standing</span>
                <span className="info-val" style={{ color: '#34d399' }}>CGPA: {personal.cgpa}</span>
              </div>
              <div className="info-item">
                <span className="info-label">Location</span>
                <span className="info-val">{personal.location}</span>
              </div>
            </div>

            <div className="interests-wrap">
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                <Languages size={16} style={{ color: 'var(--accent-primary)' }} />
                <span style={{ fontSize: '0.85rem', fontWeight: 600, color: '#ffffff' }}>Languages Known</span>
              </div>
              <div className="tag-cloud">
                {personal.languages.map((lang, idx) => (
                  <span key={idx} className="tag-item">{lang}</span>
                ))}
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginTop: '1rem', marginBottom: '0.5rem' }}>
                <Heart size={16} style={{ color: '#ec4899' }} />
                <span style={{ fontSize: '0.85rem', fontWeight: 600, color: '#ffffff' }}>Hobbies & Interests</span>
              </div>
              <div className="tag-cloud">
                {personal.hobbies.map((hobby, idx) => (
                  <span key={idx} className="tag-item">{hobby}</span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Highlights & Stats Grid */}
          <div className="stats-cards-grid">
            {personal.stats.map((stat, idx) => (
              <div key={idx} className="glass-card stat-feature-card">
                <div>
                  <div className="stat-feature-icon">
                    {iconMap[stat.icon] || <Award size={24} />}
                  </div>
                  <div className="stat-feature-val text-gradient">
                    {stat.value}<span style={{ fontSize: '1.2rem', color: 'var(--text-highlight)' }}>{stat.suffix}</span>
                  </div>
                </div>
                <div className="stat-feature-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
