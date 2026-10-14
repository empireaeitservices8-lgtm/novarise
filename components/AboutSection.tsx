'use client';

import React from 'react';

export default function AboutSection() {
  return (
    <section id="about" className="section" style={{ background: '#ffffff' }}>
      <div className="container">
        <div className="section-header">
          <div className="section-badge">ABOUT NOVA RISE EXPORTS</div>
          <h2>Founded on Integrity, Built for Global Trade</h2>
          <p>
            Bridging international commerce with India&apos;s rich agricultural, spice, and textile excellence.
          </p>
        </div>

        {/* Main About Card */}
        <div style={{
          background: 'linear-gradient(135deg, #f7faf8 0%, #edf4f0 100%)',
          borderRadius: '24px',
          border: '1px solid rgba(1, 90, 68, 0.12)',
          padding: '48px 40px',
          marginBottom: '56px',
          boxShadow: '0 8px 30px rgba(1, 90, 68, 0.05)'
        }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '40px',
            alignItems: 'center'
          }}>
            <div>
              <div style={{
                display: 'inline-block',
                background: '#015a44',
                color: '#ffffff',
                fontSize: '0.75rem',
                fontWeight: 700,
                letterSpacing: '0.08em',
                padding: '4px 12px',
                borderRadius: '6px',
                marginBottom: '16px'
              }}>
                COMPANY PROFILE & VISION
              </div>
              <h3 style={{
                fontSize: '1.9rem',
                color: '#071e17',
                lineHeight: 1.3,
                marginBottom: '20px'
              }}>
                Delivering High-Quality Products Globally from God&apos;s Own Country
              </h3>
              
              <blockquote style={{
                borderLeft: '4px solid #015a44',
                paddingLeft: '20px',
                margin: '20px 0',
                color: '#1e382f',
                fontSize: '1.12rem',
                lineHeight: 1.7,
                fontStyle: 'italic',
                background: 'rgba(1, 90, 68, 0.04)',
                paddingTop: '12px',
                paddingBottom: '12px',
                borderRadius: '0 12px 12px 0'
              }}>
                &ldquo;Nova Rise Exports is a partnership firm established with the vision of providing high quality products to our clients globally. Our firm is built on the principles of trust, reliability, and customer satisfaction.&rdquo;
              </blockquote>

              <p style={{ color: '#486156', fontSize: '0.98rem', lineHeight: 1.65, marginTop: '16px' }}>
                Headquartered in <strong>Kannur, Kerala, India</strong>, our strategic location offers direct proximity to prime agricultural belts, traditional weaving centers, and international air and sea transit routes. We serve importers, retail distributors, wholesale buyers, and institutional clients across the globe.
              </p>
            </div>

            {/* Strategic Pillars */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div style={{
                background: '#ffffff',
                padding: '24px',
                borderRadius: '16px',
                border: '1px solid rgba(1, 90, 68, 0.1)',
                boxShadow: '0 4px 12px rgba(0,0,0,0.03)'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
                  <span style={{
                    background: '#e8f5f0',
                    color: '#015a44',
                    width: '38px',
                    height: '38px',
                    borderRadius: '10px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.1rem',
                    fontWeight: 700
                  }}>01</span>
                  <h4 style={{ fontSize: '1.18rem', margin: 0, color: '#015a44' }}>Trust & Transparency</h4>
                </div>
                <p style={{ color: '#566e63', fontSize: '0.92rem', lineHeight: 1.55 }}>
                  Transparent pricing, verified product provenance, authentic batch weights, and honest communication from contract signing to final port discharge.
                </p>
              </div>

              <div style={{
                background: '#ffffff',
                padding: '24px',
                borderRadius: '16px',
                border: '1px solid rgba(1, 90, 68, 0.1)',
                boxShadow: '0 4px 12px rgba(0,0,0,0.03)'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
                  <span style={{
                    background: '#fdf7e6',
                    color: '#cfa847',
                    width: '38px',
                    height: '38px',
                    borderRadius: '10px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.1rem',
                    fontWeight: 700
                  }}>02</span>
                  <h4 style={{ fontSize: '1.18rem', margin: 0, color: '#8f6e16' }}>Reliability & Precision</h4>
                </div>
                <p style={{ color: '#566e63', fontSize: '0.92rem', lineHeight: 1.55 }}>
                  Punctual shipment schedules, export-grade packaging that preserves freshness, and rigorous end-to-end quality controls.
                </p>
              </div>

              <div style={{
                background: '#ffffff',
                padding: '24px',
                borderRadius: '16px',
                border: '1px solid rgba(1, 90, 68, 0.1)',
                boxShadow: '0 4px 12px rgba(0,0,0,0.03)'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
                  <span style={{
                    background: '#e8f5f0',
                    color: '#015a44',
                    width: '38px',
                    height: '38px',
                    borderRadius: '10px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.1rem',
                    fontWeight: 700
                  }}>03</span>
                  <h4 style={{ fontSize: '1.18rem', margin: 0, color: '#015a44' }}>Customer Satisfaction</h4>
                </div>
                <p style={{ color: '#566e63', fontSize: '0.92rem', lineHeight: 1.55 }}>
                  Dedicated support, customized private-label options, and flexible procurement solutions tailored to specific country requirements.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Entity Details Card */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '24px'
        }}>
          <div style={{
            background: '#ffffff',
            padding: '28px',
            borderRadius: '18px',
            border: '1px solid var(--border-light)',
            boxShadow: 'var(--shadow-sm)'
          }}>
            <div style={{ fontSize: '1.5rem', marginBottom: '12px' }}>🏢</div>
            <div style={{ fontSize: '0.8rem', fontWeight: 700, color: '#015a44', letterSpacing: '0.05em' }}>LEGAL ENTITY</div>
            <div style={{ fontSize: '1.15rem', fontWeight: 700, color: '#071e17', marginTop: '4px' }}>Registered Partnership Firm</div>
            <div style={{ fontSize: '0.9rem', color: '#5d756b', marginTop: '6px' }}>
              Compliant under Indian Partnership laws, holding full export authorization and commercial licenses.
            </div>
          </div>

          <div style={{
            background: '#ffffff',
            padding: '28px',
            borderRadius: '18px',
            border: '1px solid var(--border-light)',
            boxShadow: 'var(--shadow-sm)'
          }}>
            <div style={{ fontSize: '1.5rem', marginBottom: '12px' }}>👥</div>
            <div style={{ fontSize: '0.8rem', fontWeight: 700, color: '#015a44', letterSpacing: '0.05em' }}>FIRM PARTNERS</div>
            <div style={{ fontSize: '1.15rem', fontWeight: 700, color: '#071e17', marginTop: '4px' }}>Mr. Jagesh Karakandy &amp; Mr. Sooraj N L</div>
            <div style={{ fontSize: '0.9rem', color: '#5d756b', marginTop: '6px' }}>
              Hands-on leadership committed to personal oversight of every export consignment.
            </div>
          </div>

          <div style={{
            background: '#ffffff',
            padding: '28px',
            borderRadius: '18px',
            border: '1px solid var(--border-light)',
            boxShadow: 'var(--shadow-sm)'
          }}>
            <div style={{ fontSize: '1.5rem', marginBottom: '12px' }}>📍</div>
            <div style={{ fontSize: '0.8rem', fontWeight: 700, color: '#015a44', letterSpacing: '0.05em' }}>REGISTERED OFFICE</div>
            <div style={{ fontSize: '1.15rem', fontWeight: 700, color: '#071e17', marginTop: '4px' }}>Kannur, Kerala, India</div>
            <div style={{ fontSize: '0.9rem', color: '#5d756b', marginTop: '6px' }}>
              2nd Floor, Landmark Complex, Sannidhan Road, South Bazar, PIN 670002.
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
