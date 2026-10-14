'use client';

import React from 'react';

export default function ComplianceSection() {
  const complianceBadges = [
    {
      title: 'Import Export Code (IEC)',
      code: 'DGFT Compliant',
      desc: 'Officially registered with the Directorate General of Foreign Trade, Government of India, holding full merchant export clearance.'
    },
    {
      title: 'APEDA Standards',
      code: 'Agri & Food Export',
      desc: 'Full conformity with the Agricultural and Processed Food Products Export Development Authority guidelines for farm produce & fruits.'
    },
    {
      title: 'Spices Board of India',
      code: 'Spice Export Protocols',
      desc: 'Authentic adherence to spice grading, moisture tolerance, and chemical residue thresholds mandated by the Spices Board.'
    },
    {
      title: 'FSSAI Food Safety',
      code: 'FSSAI Standards',
      desc: 'Adherence to comprehensive Food Safety and Standards Authority of India protocols across packaging, storage, and handling.'
    },
    {
      title: 'Phytosanitary & Fumigation',
      code: 'Plant Health Clearance',
      desc: 'Mandatory plant quarantine inspections, phytosanitary certifications, and approved pest-free container fumigation.'
    },
    {
      title: 'Certificate of Origin',
      code: 'Legal Chamber Attestation',
      desc: 'Authentic verification of Indian and Kerala provenance with formal attestation by recognized Chambers of Commerce.'
    }
  ];

  return (
    <section id="compliance" className="section" style={{ background: '#f8faf8' }}>
      <div className="container">
        <div className="section-header">
          <div className="section-badge">STATUTORY COMPLIANCE & QUALITY</div>
          <h2>Upholding the Highest Global Standards</h2>
          <p>
            Operating with complete regulatory transparency, rigorous testing, and international compliance across every export category.
          </p>
        </div>

        {/* Commitment Statement */}
        <div style={{
          background: '#ffffff',
          borderRadius: '20px',
          border: '1.5px solid rgba(1, 90, 68, 0.15)',
          padding: '40px',
          boxShadow: '0 8px 30px rgba(1, 90, 68, 0.05)',
          marginBottom: '48px',
          textAlign: 'center',
          maxWidth: '920px',
          margin: '0 auto 48px auto'
        }}>
          <div style={{
            fontSize: '1.8rem',
            marginBottom: '14px',
            color: '#cfa847'
          }}>
            🛡️
          </div>
          <h3 style={{ fontSize: '1.6rem', color: '#015a44', marginBottom: '16px' }}>
            Our Integrity &amp; Quality Pledge
          </h3>
          <blockquote style={{
            fontSize: '1.18rem',
            lineHeight: 1.7,
            color: '#1a332a',
            fontStyle: 'italic',
            marginBottom: '16px'
          }}>
            &ldquo;We ensure compliance with all relevant laws, regulations, and industry standards. Our firm is committed to maintaining the highest level of quality, integrity, and transparency in all our business dealings.&rdquo;
          </blockquote>
          <div style={{
            fontSize: '0.9rem',
            color: '#557065',
            fontWeight: 600
          }}>
            — Nova Rise Exports Governance Protocol
          </div>
        </div>

        {/* Compliance Badges Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '24px'
        }}>
          {complianceBadges.map((badge, idx) => (
            <div
              key={idx}
              style={{
                background: '#ffffff',
                borderRadius: '16px',
                border: '1px solid var(--border-light)',
                padding: '28px',
                display: 'flex',
                gap: '18px',
                alignItems: 'flex-start',
                boxShadow: '0 4px 16px rgba(0, 0, 0, 0.02)'
              }}
            >
              <div style={{
                background: '#edf7f3',
                color: '#015a44',
                width: '46px',
                height: '46px',
                borderRadius: '12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.3rem',
                flexShrink: 0
              }}>
                ✓
              </div>
              <div>
                <div style={{
                  fontSize: '0.74rem',
                  fontWeight: 700,
                  color: '#cfa847',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                  marginBottom: '4px'
                }}>
                  {badge.code}
                </div>
                <h4 style={{ fontSize: '1.12rem', color: '#015a44', marginBottom: '8px' }}>
                  {badge.title}
                </h4>
                <p style={{ color: '#52695e', fontSize: '0.88rem', lineHeight: 1.55, margin: 0 }}>
                  {badge.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Quality Workflow Steps */}
        <div style={{
          marginTop: '48px',
          background: '#071e17',
          color: '#ffffff',
          borderRadius: '20px',
          padding: '36px 32px',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '24px'
        }}>
          <div>
            <div style={{ color: '#cfa847', fontWeight: 700, fontSize: '0.85rem' }}>STAGE 01</div>
            <div style={{ fontWeight: 700, fontSize: '1.05rem', margin: '4px 0' }}>Pre-Harvest / Pre-Production</div>
            <div style={{ fontSize: '0.84rem', color: '#a2b9af' }}>Raw material grading, fabric thread count testing & pesticide checks.</div>
          </div>
          <div>
            <div style={{ color: '#cfa847', fontWeight: 700, fontSize: '0.85rem' }}>STAGE 02</div>
            <div style={{ fontWeight: 700, fontSize: '1.05rem', margin: '4px 0' }}>Processing & Sorting</div>
            <div style={{ fontSize: '0.84rem', color: '#a2b9af' }}>Sortex optical cleaning, color-matching, moisture management.</div>
          </div>
          <div>
            <div style={{ color: '#cfa847', fontWeight: 700, fontSize: '0.85rem' }}>STAGE 03</div>
            <div style={{ fontWeight: 700, fontSize: '1.05rem', margin: '4px 0' }}>Protective Packaging</div>
            <div style={{ fontSize: '0.84rem', color: '#a2b9af' }}>Barrier nitrogen flushing, seaworthy cartons, export pallets.</div>
          </div>
          <div>
            <div style={{ color: '#cfa847', fontWeight: 700, fontSize: '0.85rem' }}>STAGE 04</div>
            <div style={{ fontWeight: 700, fontSize: '1.05rem', margin: '4px 0' }}>Customs & Port Dispatch</div>
            <div style={{ fontSize: '0.84rem', color: '#a2b9af' }}>Formal inspection, bill of lading documentation, tracked transit.</div>
          </div>
        </div>

      </div>
    </section>
  );
}
