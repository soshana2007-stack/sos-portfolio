import React, { useState } from 'react';
import { 
  Code, 
  Cpu, 
  Code2, 
  Coffee, 
  FileCode, 
  Palette, 
  Sparkles, 
  Atom, 
  Layout, 
  Database, 
  Server, 
  Layers, 
  Network, 
  Wifi, 
  Radio, 
  GitBranch, 
  GitCommit, 
  Terminal 
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData.js';

export default function Skills() {
  const { skills } = portfolioData;
  const [activeCategory, setActiveCategory] = useState('all');

  const iconMap = {
    Cpu: <Cpu size={20} />,
    Code2: <Code2 size={20} />,
    Coffee: <Coffee size={20} />,
    FileCode: <FileCode size={20} />,
    Palette: <Palette size={20} />,
    Sparkles: <Sparkles size={20} />,
    Atom: <Atom size={20} />,
    Layout: <Layout size={20} />,
    Database: <Database size={20} />,
    Server: <Server size={20} />,
    Layers: <Layers size={20} />,
    Network: <Network size={20} />,
    Wifi: <Wifi size={20} />,
    Radio: <Radio size={20} />,
    GitBranch: <GitBranch size={20} />,
    GitCommit: <GitCommit size={20} />,
    Terminal: <Terminal size={20} />
  };

  const categories = [
    { id: 'all', label: 'All Technologies' },
    { id: 'programming', label: 'Programming (C, C++, Java)' },
    { id: 'webDevelopment', label: 'Web Development (React, JS)' },
    { id: 'databases', label: 'Databases (SQL, MySQL)' },
    { id: 'networking', label: 'Networking (CCNA)' },
    { id: 'tools', label: 'Tools & DevOps' }
  ];

  const getFilteredSkills = () => {
    if (activeCategory === 'all') {
      return [
        ...skills.programming,
        ...skills.webDevelopment,
        ...skills.databases,
        ...skills.networking,
        ...skills.tools
      ];
    }
    return skills[activeCategory] || [];
  };

  const currentSkills = getFilteredSkills();

  return (
    <section id="skills" className="section" style={{ background: 'rgba(15, 20, 34, 0.4)' }}>
      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            <Code size={14} />
            <span>Technical Expertise</span>
          </div>
          <h2 className="section-title">
            Skills & <span className="text-gradient">Competencies</span>
          </h2>
          <p className="section-subtitle">
            Core programming languages, modern web development frameworks, database architectures, and networking principles.
          </p>
        </div>

        {/* Categories Tab Navigation */}
        <div className="skills-nav-tabs">
          {categories.map((cat) => (
            <button
              key={cat.id}
              className={`skill-tab-btn ${activeCategory === cat.id ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat.id)}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Skills Cards Grid */}
        <div className="skills-grid">
          {currentSkills.map((skill, index) => (
            <div key={index} className="glass-card skill-card">
              <div className="skill-card-head">
                <div className="skill-identity">
                  <div className="skill-icon-wrap">
                    {iconMap[skill.icon] || <Code size={20} />}
                  </div>
                  <div>
                    <div className="skill-name">{skill.name}</div>
                    <div className="skill-category-tag">{skill.category}</div>
                  </div>
                </div>
                <div className="skill-level-num">{skill.level}%</div>
              </div>

              <div className="skill-bar-bg">
                <div 
                  className="skill-bar-fill" 
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
