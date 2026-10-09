import React, { useState } from 'react';
import { 
  FolderGit2, 
  ExternalLink, 
  Github, 
  Cpu, 
  Sparkles, 
  CheckCircle,
  X,
  Layers
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData.js';

export default function Projects() {
  const { projects } = portfolioData;
  const [selectedFilter, setSelectedFilter] = useState('All');
  const [activeProjectModal, setActiveProjectModal] = useState(null);

  const filters = ['All', 'IoT / Embedded Systems', 'Web Development'];

  const filteredProjects = selectedFilter === 'All'
    ? projects
    : projects.filter(p => p.category === selectedFilter);

  return (
    <section id="projects" className="section">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            <FolderGit2 size={14} />
            <span>Featured Innovations</span>
          </div>
          <h2 className="section-title">
            Key <span className="text-gradient">Projects</span>
          </h2>
          <p className="section-subtitle">
            Safety-focused embedded hardware engineering and modern responsive web applications.
          </p>
        </div>

        {/* Filter Chips */}
        <div className="projects-filter-bar">
          {filters.map((filter) => (
            <button
              key={filter}
              className={`filter-chip ${selectedFilter === filter ? 'active' : ''}`}
              onClick={() => setSelectedFilter(filter)}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Projects Cards Grid */}
        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <div key={project.id} className="glass-card project-card">
              <div className="project-header">
                <span className="project-category">{project.category}</span>
                <span className="badge badge-primary">{project.badge}</span>
              </div>

              <h3 className="project-title">{project.title}</h3>
              <p className="project-desc">{project.shortDescription}</p>

              <div className="project-tech-tags">
                {project.technologies.slice(0, 4).map((tech, idx) => (
                  <span key={idx} className="tech-tag">{tech}</span>
                ))}
                {project.technologies.length > 4 && (
                  <span className="tech-tag">+{project.technologies.length - 4} more</span>
                )}
              </div>

              <div className="project-actions">
                <button
                  className="btn btn-secondary btn-sm"
                  onClick={() => setActiveProjectModal(project)}
                >
                  <Layers size={14} />
                  <span>View Details</span>
                </button>

                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-primary btn-sm"
                >
                  <Github size={14} />
                  <span>Code</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Project Detail Modal */}
        {activeProjectModal && (
          <div className="modal-overlay" onClick={() => setActiveProjectModal(null)}>
            <div 
              className="modal-container" 
              style={{ maxWidth: '680px' }} 
              onClick={(e) => e.stopPropagation()}
            >
              <div className="modal-header">
                <div className="modal-title">
                  <Cpu size={22} style={{ color: 'var(--accent-primary)' }} />
                  <div>
                    <h3 style={{ fontSize: '1.2rem', margin: 0, color: '#ffffff' }}>
                      {activeProjectModal.title}
                    </h3>
                    <span style={{ fontSize: '0.8rem', color: 'var(--accent-secondary)' }}>
                      {activeProjectModal.category} • {activeProjectModal.period}
                    </span>
                  </div>
                </div>
                <button 
                  onClick={() => setActiveProjectModal(null)}
                  style={{ color: 'var(--text-secondary)', padding: '0.4rem' }}
                >
                  <X size={22} />
                </button>
              </div>

              <div className="modal-body-scroll" style={{ background: '#0a0d14', color: '#f8fafc', padding: '1.75rem' }}>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.7', whiteSpace: 'pre-line', marginBottom: '1.5rem' }}>
                  {activeProjectModal.fullDescription}
                </p>

                <h4 style={{ fontSize: '0.95rem', color: '#ffffff', marginBottom: '0.8rem' }}>
                  Key Engineering Highlights:
                </h4>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '1.5rem' }}>
                  {activeProjectModal.features.map((feat, idx) => (
                    <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem', fontSize: '0.88rem', color: 'var(--text-secondary)' }}>
                      <CheckCircle size={16} style={{ color: '#10b981', flexShrink: 0, marginTop: '3px' }} />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>

                <h4 style={{ fontSize: '0.95rem', color: '#ffffff', marginBottom: '0.8rem' }}>
                  Hardware & Tech Stack:
                </h4>
                <div className="project-tech-tags">
                  {activeProjectModal.technologies.map((tech, idx) => (
                    <span key={idx} className="tech-tag" style={{ color: 'var(--text-highlight)' }}>
                      {tech}
                    </span>
                  ))}
                </div>

                <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '1.5rem' }}>
                  <button 
                    className="btn btn-primary btn-sm"
                    onClick={() => setActiveProjectModal(null)}
                  >
                    Close Preview
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
