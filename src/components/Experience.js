import React from 'react';
import { Briefcase, Building2, MapPin, Calendar, CheckCircle } from 'lucide-react';
import { portfolioData } from '../data/portfolioData.js';

export default function Experience() {
  const { experience } = portfolioData;

  return (
    <section id="experience" className="section" style={{ background: 'rgba(15, 20, 34, 0.4)' }}>
      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            <Briefcase size={14} />
            <span>Practical Experience</span>
          </div>
          <h2 className="section-title">
            Internship <span className="text-gradient">Journey</span>
          </h2>
          <p className="section-subtitle">
            Hands-on technical exposure to industry web development workflows and software delivery.
          </p>
        </div>

        <div style={{ maxWidth: '850px', margin: '0 auto' }}>
          <div className="timeline-track">
            {experience.map((exp) => (
              <div key={exp.id} className="timeline-item">
                <div className="timeline-marker"></div>
                <div className="glass-card timeline-card">
                  <div className="timeline-header">
                    <div>
                      <h3 className="timeline-role">{exp.role}</h3>
                      <div className="timeline-company">
                        <Building2 size={16} />
                        <span>{exp.company}</span>
                        <span>•</span>
                        <MapPin size={14} />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                    <span className="timeline-period">
                      <Calendar size={13} style={{ display: 'inline', marginRight: '4px' }} />
                      {exp.period}
                    </span>
                  </div>

                  <p className="timeline-body">{exp.description}</p>

                  <ul className="timeline-bullet-list">
                    {exp.achievements.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>

                  <div className="project-tech-tags" style={{ marginTop: '1.25rem' }}>
                    {exp.skillsUsed.map((tech, idx) => (
                      <span key={idx} className="tech-tag">{tech}</span>
                    ))}
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
