import React from 'react';
import { GraduationCap, Award, Calendar, MapPin, BookOpen } from 'lucide-react';
import { portfolioData } from '../data/portfolioData.js';

export default function Education() {
  const { education } = portfolioData;

  return (
    <section id="education" className="section">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            <GraduationCap size={14} />
            <span>Academic Background</span>
          </div>
          <h2 className="section-title">
            Education & <span className="text-gradient">Qualifications</span>
          </h2>
          <p className="section-subtitle">
            Formal engineering education, school foundations, and consistent academic achievements.
          </p>
        </div>

        <div style={{ maxWidth: '850px', margin: '0 auto' }}>
          <div className="timeline-track">
            {education.map((edu) => (
              <div key={edu.id} className="timeline-item">
                <div className="timeline-marker"></div>
                <div className="glass-card timeline-card">
                  <div className="timeline-header">
                    <div>
                      <h3 className="timeline-role">{edu.degree}</h3>
                      <div className="timeline-company">
                        <span>{edu.institution}</span>
                        <span>•</span>
                        <MapPin size={14} />
                        <span>{edu.location}</span>
                      </div>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '0.3rem' }}>
                      <span className="timeline-period">{edu.period}</span>
                      <span className="badge badge-emerald">{edu.score}</span>
                    </div>
                  </div>

                  <p className="timeline-body">{edu.highlight}</p>

                  <div style={{ marginTop: '1rem' }}>
                    <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '0.4rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                      Key Subjects & Coursework
                    </div>
                    <div className="project-tech-tags">
                      {edu.coursework.map((course, idx) => (
                        <span key={idx} className="tech-tag">{course}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
