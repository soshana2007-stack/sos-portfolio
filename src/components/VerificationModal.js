import React from 'react';
import { 
  ShieldCheck, 
  CheckCircle2, 
  X, 
  ExternalLink, 
  FileText, 
  Building2, 
  Award, 
  QrCode,
  Calendar,
  Lock
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData.js';

export default function VerificationModal({ isOpen, onClose, onOpenResume }) {
  if (!isOpen) return null;

  const { personal, verification } = portfolioData;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div 
        className="modal-container" 
        style={{ maxWidth: '780px' }} 
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modal-header" style={{ background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.15), rgba(15, 20, 34, 0.95))' }}>
          <div className="modal-title" style={{ color: '#34d399' }}>
            <ShieldCheck size={26} />
            <div>
              <span style={{ fontWeight: 800, fontSize: '1.2rem', color: '#ffffff' }}>Candidate Verification Record</span>
              <p style={{ fontSize: '0.78rem', color: '#a7f3d0', margin: 0 }}>
                Digital Profile Authentication & Academic Credential Ledger
              </p>
            </div>
          </div>
          <button 
            onClick={onClose}
            style={{ color: 'var(--text-secondary)', padding: '0.4rem' }}
            aria-label="Close modal"
          >
            <X size={22} />
          </button>
        </div>

        <div className="modal-body-scroll" style={{ background: '#0a0d14', color: '#f8fafc', padding: '2rem' }}>
          {/* Certificate Badge Banner */}
          <div style={{
            background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.12) 0%, rgba(6, 182, 212, 0.08) 100%)',
            border: '1px solid rgba(16, 185, 129, 0.4)',
            borderRadius: '16px',
            padding: '1.5rem',
            marginBottom: '1.75rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1rem'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <div style={{
                width: '56px',
                height: '56px',
                borderRadius: '50%',
                background: 'rgba(16, 185, 129, 0.2)',
                border: '2px solid #10b981',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#34d399',
                fontSize: '1.6rem'
              }}>
                ✓
              </div>
              <div>
                <h4 style={{ fontSize: '1.15rem', color: '#ffffff', marginBottom: '0.2rem' }}>
                  {verification.candidateName}
                </h4>
                <p style={{ fontSize: '0.85rem', color: '#34d399', margin: 0, display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <Lock size={14} /> Official Verified Profile Status: <strong>{verification.status}</strong>
                </p>
              </div>
            </div>

            <div style={{ textAlign: 'right' }}>
              <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Verification Hash</div>
              <code style={{ fontSize: '0.85rem', color: 'var(--text-highlight)', fontFamily: 'var(--font-mono)' }}>
                {personal.verificationId}
              </code>
            </div>
          </div>

          {/* Verification Breakdown Grid */}
          <h4 style={{ fontSize: '1rem', color: '#ffffff', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Award size={18} style={{ color: 'var(--accent-primary)' }} />
            Verified Attribute Breakdown
          </h4>

          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '0.85rem',
            marginBottom: '2rem'
          }}>
            {verification.verifiedItems.map((item, idx) => (
              <div 
                key={idx}
                style={{
                  background: 'rgba(255, 255, 255, 0.03)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  borderRadius: '12px',
                  padding: '1rem 1.25rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: '1rem'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
                  <CheckCircle2 size={20} style={{ color: '#10b981', flexShrink: 0 }} />
                  <div>
                    <div style={{ fontSize: '0.92rem', fontWeight: 600, color: '#ffffff' }}>{item.label}</div>
                    <div style={{ fontSize: '0.82rem', color: 'var(--text-secondary)' }}>{item.detail}</div>
                  </div>
                </div>

                <span style={{
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  color: '#34d399',
                  background: 'rgba(16, 185, 129, 0.12)',
                  border: '1px solid rgba(16, 185, 129, 0.3)',
                  padding: '0.25rem 0.65rem',
                  borderRadius: '999px'
                }}>
                  {item.status}
                </span>
              </div>
            ))}
          </div>

          {/* Action buttons */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end',
            gap: '1rem',
            paddingTop: '1.25rem',
            borderTop: '1px solid var(--border-subtle)'
          }}>
            <button 
              className="btn btn-secondary btn-sm"
              onClick={onClose}
            >
              Close
            </button>
            <button 
              className="btn btn-primary btn-sm"
              onClick={() => {
                onClose();
                onOpenResume();
              }}
            >
              <FileText size={16} />
              <span>Inspect Attached Resume</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
