'use client';

import React, { useState } from 'react';

interface ProcurementSectionProps {
  onOpenQuoteModal: (product?: string) => void;
}

export default function ProcurementSection({ onOpenQuoteModal }: ProcurementSectionProps) {
  const [customProduct, setCustomProduct] = useState('');
  const [customQuantity, setCustomQuantity] = useState('');
  const [destinationCountry, setDestinationCountry] = useState('');
  const [clientContact, setClientContact] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="procurement" className="section" style={{ background: '#ffffff' }}>
      <div className="container">
        <div className="section-header">
          <div className="section-badge gold">BESPOKE EXPORT SERVICES</div>
          <h2>Procurement and Supply Beyond Our Catalog</h2>
          <p>
            Your dedicated procurement partner in India. Whatever your overseas market demands, we source, inspect, and deliver.
          </p>
        </div>

        {/* Highlight Feature Banner */}
        <div style={{
          background: 'linear-gradient(135deg, #071e17 0%, #015a44 100%)',
          borderRadius: '24px',
          color: '#ffffff',
          padding: '48px 40px',
          position: 'relative',
          overflow: 'hidden',
          boxShadow: '0 16px 40px rgba(1, 90, 68, 0.15)',
          marginBottom: '56px'
        }}>
          {/* Subtle Decorative element */}
          <div style={{
            position: 'absolute',
            top: '-50px',
            right: '-50px',
            width: '260px',
            height: '260px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(207, 168, 71, 0.2) 0%, transparent 70%)',
            pointerEvents: 'none'
          }} />

          <div style={{ maxWidth: '820px', position: 'relative', zIndex: 2 }}>
            <span style={{
              background: 'rgba(207, 168, 71, 0.2)',
              color: '#f6d585',
              border: '1px solid rgba(207, 168, 71, 0.4)',
              padding: '6px 14px',
              borderRadius: '999px',
              fontSize: '0.8rem',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.06em',
              display: 'inline-block',
              marginBottom: '18px'
            }}>
              OUR UNCONDITIONAL PROCUREMENT PROMISE
            </span>

            <blockquote style={{
              fontSize: '1.45rem',
              lineHeight: 1.55,
              color: '#ffffff',
              fontFamily: 'Cinzel, serif',
              marginBottom: '20px'
            }}>
              &ldquo;We Understand that our clients may require beyond our regular offerings. We are committed to procuring and supplying any required products, ensuring timely delivery and competitive pricing.&rdquo;
            </blockquote>

            <p style={{ color: '#d1e5dd', fontSize: '1rem', lineHeight: 1.65 }}>
              Whether you need specialized South Indian spices, specific fabric blends, unique ethnic foods, agricultural commodities, or custom manufactured items, Nova Rise Exports leverages an extensive supply chain across Kerala and India to deliver to your exact specifications.
            </p>
          </div>
        </div>

        {/* 4-Step Sourcing Process */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '24px',
          marginBottom: '56px'
        }}>
          {[
            {
              step: '01',
              title: 'Requirement Briefing',
              desc: 'Share your exact product specifications, quality parameters, volume requirements, target port, and delivery schedule.'
            },
            {
              step: '02',
              title: 'Pan-India Sourcing',
              desc: 'Our boots-on-the-ground team connects directly with certified farmers, state mills, and accredited processors.'
            },
            {
              step: '03',
              title: 'Lab Testing & QC',
              desc: 'Rigorous sample evaluation, moisture analysis, chemical testing, and pre-shipment export grading.'
            },
            {
              step: '04',
              title: 'Export Packaging & Dispatch',
              desc: 'Custom private labelling, moisture-proof palletization, customs clearance, and global ocean/air shipment.'
            }
          ].map((item, idx) => (
            <div
              key={idx}
              style={{
                background: '#fbfdfc',
                border: '1px solid var(--border-light)',
                borderRadius: '16px',
                padding: '28px',
                position: 'relative'
              }}
            >
              <div style={{
                color: '#cfa847',
                fontSize: '2rem',
                fontWeight: 800,
                fontFamily: 'Cinzel, serif',
                lineHeight: 1,
                marginBottom: '12px'
              }}>
                {item.step}
              </div>
              <h4 style={{ fontSize: '1.15rem', color: '#015a44', marginBottom: '8px' }}>
                {item.title}
              </h4>
              <p style={{ color: '#52695f', fontSize: '0.88rem', lineHeight: 1.55 }}>
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Quick Sourcing Inquiry Box */}
        <div style={{
          background: '#f4f8f6',
          borderRadius: '20px',
          border: '1.5px dashed rgba(1, 90, 68, 0.25)',
          padding: '36px',
        }}>
          <h3 style={{ fontSize: '1.4rem', color: '#015a44', marginBottom: '8px', textAlign: 'center' }}>
            Submit a Custom Sourcing Requirement
          </h3>
          <p style={{ color: '#50675d', fontSize: '0.92rem', textAlign: 'center', marginBottom: '28px' }}>
            Looking for something outside our listed 9 products? Tell us what you need and our procurement team will revert within 24 hours.
          </p>

          {submitted ? (
            <div style={{
              background: '#e6f7f0',
              border: '1px solid #10b981',
              padding: '24px',
              borderRadius: '12px',
              textAlign: 'center',
              color: '#065f46'
            }}>
              <div style={{ fontSize: '2rem', marginBottom: '8px' }}>✅</div>
              <div style={{ fontSize: '1.1rem', fontWeight: 700 }}>Custom Procurement Request Logged!</div>
              <p style={{ marginTop: '6px', fontSize: '0.92rem' }}>
                Thank you! Our partners Mr. Jagesh Karakandy &amp; Mr. Sooraj N L have received your inquiry. We will contact you shortly.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="btn-outline-dark"
                style={{ marginTop: '16px', padding: '8px 20px', fontSize: '0.84rem' }}
              >
                Submit Another Request
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
              gap: '16px'
            }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 600, color: '#273f35', marginBottom: '6px' }}>
                  Product Required *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Cardamom, Coir, Turmeric..."
                  value={customProduct}
                  onChange={(e) => setCustomProduct(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '12px 14px',
                    borderRadius: '8px',
                    border: '1px solid #cbd5e1',
                    fontSize: '0.92rem'
                  }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 600, color: '#273f35', marginBottom: '6px' }}>
                  Estimated Quantity *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. 5 Metric Tons, 1 FCL 20ft"
                  value={customQuantity}
                  onChange={(e) => setCustomQuantity(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '12px 14px',
                    borderRadius: '8px',
                    border: '1px solid #cbd5e1',
                    fontSize: '0.92rem'
                  }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 600, color: '#273f35', marginBottom: '6px' }}>
                  Destination Country / Port *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Dubai, London, New York..."
                  value={destinationCountry}
                  onChange={(e) => setDestinationCountry(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '12px 14px',
                    borderRadius: '8px',
                    border: '1px solid #cbd5e1',
                    fontSize: '0.92rem'
                  }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 600, color: '#273f35', marginBottom: '6px' }}>
                  Your Email / WhatsApp Phone *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. buyer@company.com / +1..."
                  value={clientContact}
                  onChange={(e) => setClientContact(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '12px 14px',
                    borderRadius: '8px',
                    border: '1px solid #cbd5e1',
                    fontSize: '0.92rem'
                  }}
                />
              </div>

              <div style={{
                gridColumn: '1 / -1',
                display: 'flex',
                justifyContent: 'center',
                gap: '14px',
                marginTop: '12px'
              }}>
                <button type="submit" className="btn-primary" style={{ padding: '13px 36px' }}>
                  Submit Procurement Inquiry
                </button>
                <a
                  href={`https://wa.me/918129501405?text=Hello%20Nova%20Rise%20Exports,%20I%20have%20a%20custom%20procurement%20requirement.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-gold"
                  style={{ padding: '13px 28px' }}
                >
                  Direct WhatsApp Inquiry
                </a>
              </div>
            </form>
          )}
        </div>

      </div>
    </section>
  );
}
