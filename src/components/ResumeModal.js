import React, { useState } from 'react';
import { 
  Printer, 
  Copy, 
  X, 
  Check, 
  Download, 
  ShieldCheck,
  FileCheck
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData.js';

export default function ResumeModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const [copied, setCopied] = useState(false);
  const { personal } = portfolioData;

  const handlePrint = () => {
    window.print();
  };

  const handleCopyText = () => {
    const resumePlainText = `
S. SOSHANASHREE
soshana2007@gmail.com | www.linkedin.com/in/soshanashree-s | Cuddalore, Tamil Nadu

PROFESSIONAL SUMMARY
B.Tech Information Technology student with a strong interest in programming, web development, databases, networking, and practical software solutions. Experienced in academic projects and hands-on web development training, with a focus on learning and building useful applications.

EDUCATION
• B.Tech – Information Technology — IFET College of Engineering, Villupuram | 2024 – 2028 | CGPA: 8.55/10
• HSC — St. Anne’s Matric Higher Secondary School | 2023 – 2024
• SSLC — Shree A. Subbraya Chettiar’s Girls School |

TECHNICAL SKILLS
• Programming: C, C++, Java
• Web Development: HTML, CSS, JavaScript, React.js
• Database: SQL, MySQL
• Networking: Computer Networks, CCNA Fundamentals
• Tools: Git, GitHub, VS Code

INTERNSHIP EXPERIENCE
Web Development Intern — IDA Creations, Chennai | Dec 2025 – Jan 2026
Completed a web development internship with practical exposure to web technologies, development workflows, and building web-based solutions.

PROJECT
Automatic Alarm and Speed Control for Unsafe Footboard Travelling
Developed a safety-focused embedded system concept to detect unsafe footboard travelling and automatically respond to reduce accident risk. The system uses sensor-based detection with Arduino and control components to trigger an alarm and reduce speed.
Technologies: Arduino, Sensors, L298N Motor Driver, Relay, Servo Motor, PWM

CERTIFICATIONS
• CCNA – Introduction to Networking, Cisco Networking Academy
• C, C++ and Java Certification

ADDITIONAL INFORMATION
• Languages: Tamil, English
• Hobbies: Singing, Cooking
`;
    navigator.clipboard.writeText(resumePlainText.trim());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div 
        className="modal-container" 
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modal-header">
          <div className="modal-title">
            <FileCheck size={24} style={{ color: 'var(--accent-primary)' }} />
            <div>
              <span style={{ fontWeight: 800, fontSize: '1.15rem', color: '#ffffff' }}>Verified Resume Document</span>
              <p style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', margin: 0 }}>
                Official Resume for S. Soshanashree (Printable / Verifiable)
              </p>
            </div>
          </div>

          <div className="modal-controls">
            <button 
              className="btn btn-secondary btn-sm"
              onClick={handleCopyText}
              title="Copy Resume Plaintext"
            >
              {copied ? <Check size={16} style={{ color: '#34d399' }} /> : <Copy size={16} />}
              <span>{copied ? 'Copied' : 'Copy Text'}</span>
            </button>

            <button 
              className="btn btn-primary btn-sm"
              onClick={handlePrint}
              title="Print or Save as PDF"
            >
              <Printer size={16} />
              <span>Print / PDF</span>
            </button>

            <button 
              onClick={onClose}
              style={{ color: 'var(--text-secondary)', padding: '0.4rem', marginLeft: '0.5rem' }}
              aria-label="Close modal"
            >
              <X size={22} />
            </button>
          </div>
        </div>

        <div className="modal-body-scroll">
          {/* Printable Resume Paper */}
          <div className="resume-paper" id="printable-resume">
            <h1 className="res-name">S. SOSHANASHREE</h1>
            <div className="res-contact">
              <span>soshana2007@gmail.com</span>
              <span>|</span>
              <a href="https://www.linkedin.com/in/soshanashree-s" target="_blank" rel="noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>
                www.linkedin.com/in/soshanashree-s
              </a>
              <span>|</span>
              <span>Cuddalore, Tamil Nadu</span>
            </div>

            {/* PROFESSIONAL SUMMARY */}
            <div className="res-section-title">PROFESSIONAL SUMMARY</div>
            <p style={{ textAlign: 'justify', lineHeight: '1.5' }}>
              B.Tech Information Technology student with a strong interest in programming, web development, databases, networking, and
              practical software solutions. Experienced in academic projects and hands-on web development training, with a focus on learning
              and building useful applications.
            </p>

            {/* EDUCATION */}
            <div className="res-section-title">EDUCATION</div>
            <p style={{ marginBottom: '0.35rem' }}>
              <strong>B.Tech – Information Technology</strong> — IFET College of Engineering, Villupuram | 2024 – 2028 | <strong>CGPA: 8.55/10</strong>
            </p>
            <p style={{ marginBottom: '0.35rem' }}>
              <strong>HSC</strong> — St. Anne’s Matric Higher Secondary School | 2023 – 2024
            </p>
            <p style={{ marginBottom: '0.35rem' }}>
              <strong>SSLC</strong> — Shree A. Subbraya Chettiar’s Girls School |
            </p>

            {/* TECHNICAL SKILLS */}
            <div className="res-section-title">TECHNICAL SKILLS</div>
            <table className="res-table">
              <tbody>
                <tr>
                  <td className="res-key">Programming</td>
                  <td>C, C++, Java</td>
                </tr>
                <tr>
                  <td className="res-key">Web Development</td>
                  <td>HTML, CSS, JavaScript, React.js</td>
                </tr>
                <tr>
                  <td className="res-key">Database</td>
                  <td>SQL, MySQL</td>
                </tr>
                <tr>
                  <td className="res-key">Networking</td>
                  <td>Computer Networks, CCNA Fundamentals</td>
                </tr>
                <tr>
                  <td className="res-key">Tools</td>
                  <td>Git, GitHub, VS Code</td>
                </tr>
              </tbody>
            </table>

            {/* INTERNSHIP EXPERIENCE */}
            <div className="res-section-title">INTERNSHIP EXPERIENCE</div>
            <p style={{ fontWeight: 'bold', marginBottom: '0.2rem' }}>
              Web Development Intern — IDA Creations, Chennai | Dec 2025 – Jan 2026
            </p>
            <p style={{ textAlign: 'justify', lineHeight: '1.45', marginBottom: '0.6rem' }}>
              Completed a web development internship with practical exposure to web technologies, development workflows, and building
              web-based solutions.
            </p>

            {/* PROJECT */}
            <div className="res-section-title">PROJECT</div>
            <p style={{ fontWeight: 'bold', marginBottom: '0.2rem' }}>
              Automatic Alarm and Speed Control for Unsafe Footboard Travelling
            </p>
            <p style={{ textAlign: 'justify', lineHeight: '1.45', marginBottom: '0.3rem' }}>
              Developed a safety-focused embedded system concept to detect unsafe footboard travelling and automatically respond to reduce
              accident risk. The system uses sensor-based detection with Arduino and control components to trigger an alarm and reduce speed.
            </p>
            <p style={{ fontSize: '0.88rem' }}>
              <strong>Technologies:</strong> Arduino, Sensors, L298N Motor Driver, Relay, Servo Motor, PWM
            </p>

            {/* CERTIFICATIONS */}
            <div className="res-section-title">CERTIFICATIONS</div>
            <ul style={{ paddingLeft: '1.4rem', margin: '0.3rem 0 0.6rem 0' }}>
              <li style={{ marginBottom: '0.25rem' }}>CCNA – Introduction to Networking, Cisco Networking Academy</li>
              <li style={{ marginBottom: '0.25rem' }}>C, C++ and Java Certification</li>
            </ul>

            {/* ADDITIONAL INFORMATION */}
            <div className="res-section-title">ADDITIONAL INFORMATION</div>
            <p style={{ marginBottom: '0.25rem' }}>
              <strong>Languages:</strong> Tamil, English
            </p>
            <p>
              <strong>Hobbies:</strong> Singing, Cooking
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
