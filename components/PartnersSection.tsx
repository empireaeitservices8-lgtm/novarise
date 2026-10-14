'use client';

import React from 'react';

export default function PartnersSection() {
  return (
    <section id="partners" className="section" style={{ background: '#ffffff' }}>
      <div className="container">
        <div className="section-header">
          <div className="section-badge gold">LEADERSHIP &amp; PARTNERS</div>
          <h2>Message from the Partners</h2>
          <p>
            Personal dedication and hands-on governance behind every export partnership.
          </p>
        </div>

        {/* Partners Letter / Executive Message Card */}
        <div style={{
          maxWidth: '960px',
          margin: '0 auto',
          background: 'linear-gradient(135deg, #071e17 0%, #014433 100%)',
          color: '#ffffff',
          borderRadius: '24px',
          padding: '48px 42px',
          boxShadow: '0 16px 40px rgba(1, 90, 68, 0.15)',
          border: '1px solid rgba(255, 255, 255, 0.15)',
          position: 'relative'
        }}>
          {/* Decorative quote mark */}
          <div style={{
            position: 'absolute',
            top: '20px',
            right: '30px',
            fontSize: '6rem',
            lineHeight: 1,
            color: 'rgba(207, 168, 71, 0.15)',
            fontFamily: 'Georgia, serif',
            pointerEvents: 'none'
          }}>
            &rdquo;
          </div>

          <div style={{
            fontSize: '0.82rem',
            fontWeight: 700,
            color: '#cfa847',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            marginBottom: '16px'
          }}>
            EXECUTIVE ADDRESS TO GLOBAL BUYERS &amp; PARTNERS
          </div>

          <h3 style={{
            fontSize: 'clamp(1.4rem, 2.5vw, 1.85rem)',
            color: '#ffffff',
            lineHeight: 1.4,
            marginBottom: '24px'
          }}>
            Building Enduring Relationships Across Global Borders
          </h3>

          <div style={{
            fontSize: '1.08rem',
            lineHeight: 1.8,
            color: '#dbece4',
            marginBottom: '28px'
          }}>
            <p style={{ marginBottom: '16px' }}>
              &ldquo;Join us in our journey to provide the best products and services to our clients worldwide. Thank you for considering Nova Rise Exports as your trusted business partner.&rdquo;
            </p>
            <p style={{ fontSize: '0.96rem', color: '#b9d4c8' }}>
              At Nova Rise Exports, we do not view trade as mere transactions. We treat every order as a testament to Indian craftsmanship, agricultural bounty, and unwavering commercial integrity. Whether it is our Malabar spices, organic oils, fine apparel, or customized bulk commodities, we personally ensure that quality benchmarks are surpassed before dispatch.
            </p>
          </div>


        </div>

        {/* Two Partner Cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '32px',
          maxWidth: '860px',
          margin: '48px auto 0 auto'
        }}>
          {/* Partner 1 */}
          <div style={{
            background: '#ffffff',
            borderRadius: '20px',
            border: '1px solid var(--border-light)',
            padding: '32px',
            boxShadow: 'var(--shadow-sm)',
            textAlign: 'center'
          }}>
            <div style={{
              width: '80px',
              height: '80px',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #015a44 0%, #0d7a5e 100%)',
              color: '#ffffff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 18px auto',
              fontSize: '1.6rem',
              fontWeight: 700,
              fontFamily: 'Cinzel, serif',
              border: '3px solid #cfa847'
            }}>
              JK
            </div>
            <h4 style={{ fontSize: '1.3rem', color: '#015a44', marginBottom: '4px' }}>
              Mr. Jagesh Karakandy
            </h4>
            <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#cfa847', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '12px' }}>
              Partner, Nova Rise Exports
            </div>
            <p style={{ color: '#556f63', fontSize: '0.9rem', lineHeight: 1.55 }}>
              Leading international client relations, overseas marketing, and procurement quality management.
            </p>
            <div style={{ marginTop: '16px', paddingTop: '16px', borderTop: '1px solid #eef3f0', fontSize: '0.85rem' }}>
              <a href="tel:+918129501405" style={{ color: '#015a44', fontWeight: 600 }}>
                📞 +91 8129501405
              </a>
            </div>
          </div>

          {/* Partner 2 */}
          <div style={{
            background: '#ffffff',
            borderRadius: '20px',
            border: '1px solid var(--border-light)',
            padding: '32px',
            boxShadow: 'var(--shadow-sm)',
            textAlign: 'center'
          }}>
            <div style={{
              width: '80px',
              height: '80px',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #015a44 0%, #0d7a5e 100%)',
              color: '#ffffff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 18px auto',
              fontSize: '1.6rem',
              fontWeight: 700,
              fontFamily: 'Cinzel, serif',
              border: '3px solid #cfa847'
            }}>
              SN
            </div>
            <h4 style={{ fontSize: '1.3rem', color: '#015a44', marginBottom: '4px' }}>
              Mr. Sooraj N L
            </h4>
            <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#cfa847', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '12px' }}>
              Partner, Nova Rise Exports
            </div>
            <p style={{ color: '#556f63', fontSize: '0.9rem', lineHeight: 1.55 }}>
              Overseeing supply chain logistics, port dispatches, statutory export compliance, and sourcing operations.
            </p>
            <div style={{ marginTop: '16px', paddingTop: '16px', borderTop: '1px solid #eef3f0', fontSize: '0.85rem' }}>
              <a href="tel:+919061630035" style={{ color: '#015a44', fontWeight: 600 }}>
                📞 +91 9061630035
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
