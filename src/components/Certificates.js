import React from 'react';
import { Award, CheckCircle2, ShieldCheck } from 'lucide-react';
import { portfolioData } from '../data/portfolioData.js';

export default function Certificates() {
  const { certifications } = portfolioData;

  return (
    <section id="certificates" className="section" style={{ background: 'rgba(15, 20, 34, 0.4)' }}>
      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            <Award size={14} />
            <span>Verified Credentials</span>
          </div>
          <h2 className="section-title">
            Certifications & <span className="text-gradient">Training</span>
          </h2>
          <p className="section-subtitle">
            Industry-standard certifications validating technical knowledge in computer networking and programming.
          </p>
        </div>

        <div className="certs-grid">
          {certifications.map((cert) => (
            <div key={cert.id} className="glass-card cert-card">
              <div>
                <div className="cert-top-badge">
                  <span className="badge badge-cyan">{cert.badge}</span>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', color: '#34d399', fontSize: '0.8rem' }}>
                    <ShieldCheck size={16} />
                    <span>Verified</span>
                  </div>
                </div>

                <h3 className="cert-title">{cert.title}</h3>
                <div className="cert-issuer">{cert.issuer}</div>
                <p className="cert-desc">{cert.description}</p>
              </div>

              <div>
                <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', marginBottom: '0.4rem', textTransform: 'uppercase' }}>
                  Validated Competencies
                </div>
                <div className="project-tech-tags">
                  {cert.skills.map((skill, idx) => (
                    <span key={idx} className="tech-tag" style={{ color: 'var(--text-highlight)' }}>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
