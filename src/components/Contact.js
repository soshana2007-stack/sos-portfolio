import React, { useState } from 'react';
import {
  Mail,
  Send,
  MapPin,
  Linkedin,
  Github,
  CheckCircle2,
  Copy,
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { portfolioData } from '../data/portfolioData.js';

export default function Contact() {
  const { personal } = portfolioData;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    try {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
      });
    } catch (err) {
      // Ignore confetti errors
    }

    // Open the default email client with a prefilled message
    const mailtoUrl = `mailto:${personal.email}?subject=${encodeURIComponent(
      formData.subject || 'Portfolio Inquiry'
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;

    window.location.href = mailtoUrl;

    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
    }, 4000);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personal.email);
    setCopiedEmail(true);

    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section id="contact" className="section">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            <Mail size={14} />
            <span>Get In Touch</span>
          </div>

          <h2 className="section-title">
            Let's <span className="text-gradient">Connect</span>
          </h2>

          <p className="section-subtitle">
            Open to software engineering roles, internship opportunities,
            academic collaborations, and technical discussions.
          </p>
        </div>

        <div className="contact-grid">
          {/* Left Info Cards */}
          <div className="contact-info-cards">

            {/* Email Card */}
            <div className="glass-card contact-info-card">
              <div className="contact-icon-box">
                <Mail size={24} />
              </div>

              <div
                className="contact-card-text"
                style={{ flexGrow: 1 }}
              >
                <h4>Email Address</h4>
                <p>{personal.email}</p>
              </div>

              <button
                className="btn btn-secondary btn-sm"
                onClick={handleCopyEmail}
                title="Copy Email"
                type="button"
              >
                {copiedEmail ? (
                  <CheckCircle2
                    size={16}
                    style={{ color: '#34d399' }}
                  />
                ) : (
                  <Copy size={16} />
                )}
              </button>
            </div>

            {/* LinkedIn Card */}
            <div className="glass-card contact-info-card">
              <div
                className="contact-icon-box"
                style={{
                  color: '#06b6d4',
                  background: 'rgba(6, 182, 212, 0.15)',
                }}
              >
                <Linkedin size={24} />
              </div>

              <div
                className="contact-card-text"
                style={{ flexGrow: 1 }}
              >
                <h4>LinkedIn Profile</h4>
                <p>linkedin.com/in/soshanashree-s</p>
              </div>

              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary btn-sm"
              >
                Connect
              </a>
            </div>

            {/* GitHub Card - Added */}
            <div className="glass-card contact-info-card">
              <div
                className="contact-icon-box"
                style={{
                  color: '#ffffff',
                  background: 'rgba(255, 255, 255, 0.1)',
                }}
              >
                <Github size={24} />
              </div>

              <div
                className="contact-card-text"
                style={{ flexGrow: 1 }}
              >
                <h4>GitHub Profile</h4>
                <p>github.com/soshana2007-stack</p>
              </div>

              <a
                href="https://github.com/soshana2007-stack"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary btn-sm"
              >
                View Profile
              </a>
            </div>

            {/* Location Card */}
            <div className="glass-card contact-info-card">
              <div
                className="contact-icon-box"
                style={{
                  color: '#10b981',
                  background: 'rgba(16, 185, 129, 0.15)',
                }}
              >
                <MapPin size={24} />
              </div>

              <div className="contact-card-text">
                <h4>Location</h4>
                <p>{personal.location}</p>
              </div>
            </div>
          </div>

          {/* Right Form Card */}
          <div className="glass-card contact-form-card">
            {submitted ? (
              <div
                style={{
                  textAlign: 'center',
                  padding: '2rem 1rem',
                }}
              >
                <div
                  style={{
                    width: '64px',
                    height: '64px',
                    borderRadius: '50%',
                    background: 'rgba(16, 185, 129, 0.2)',
                    color: '#34d399',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 1rem auto',
                  }}
                >
                  <CheckCircle2 size={36} />
                </div>

                <h3
                  style={{
                    fontSize: '1.4rem',
                    color: '#ffffff',
                    marginBottom: '0.5rem',
                  }}
                >
                  Opening Mail Client!
                </h3>

                <p
                  style={{
                    color: 'var(--text-secondary)',
                    fontSize: '0.92rem',
                  }}
                >
                  Thank you for reaching out. Your default email
                  client is being opened to send the message directly
                  to {personal.email}.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    placeholder="e.g. John Doe"
                    value={formData.name}
                    onChange={handleChange}
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Your Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    placeholder="Project Inquiry / Job Opportunity"
                    value={formData.subject}
                    onChange={handleChange}
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows="4"
                    placeholder="Write your message here..."
                    value={formData.message}
                    onChange={handleChange}
                    className="form-input"
                  />
                </div>

                <button
                  type="submit"
                  className="btn btn-primary"
                  style={{ width: '100%' }}
                >
                  <Send size={18} />
                  <span>Send Message Directly</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}