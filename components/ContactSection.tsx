'use client';

import React, { useState } from 'react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    country: '',
    product: 'All / General Inquiry',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="section" style={{ background: '#f8faf8' }}>
      <div className="container">
        <div className="section-header">
          <div className="section-badge">GLOBAL CONTACT &amp; HEADQUARTERS</div>
          <h2>Connect with Nova Rise Exports</h2>
          <p>
            Whether you seek trade inquiries, sample requests, or custom procurement, our partners are ready to assist you.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
          gap: '40px',
          alignItems: 'start'
        }}>
          {/* Contact Details Card */}
          <div style={{
            background: '#ffffff',
            borderRadius: '24px',
            border: '1px solid var(--border-light)',
            padding: '36px',
            boxShadow: 'var(--shadow-md)'
          }}>
            <h3 style={{ fontSize: '1.45rem', color: '#015a44', marginBottom: '24px' }}>
              Registered Office &amp; Channels
            </h3>

            {/* Address */}
            <div style={{ display: 'flex', gap: '16px', marginBottom: '24px' }}>
              <div style={{
                background: '#edf7f3',
                color: '#015a44',
                width: '44px',
                height: '44px',
                borderRadius: '12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.2rem',
                flexShrink: 0
              }}>
                📍
              </div>
              <div>
                <div style={{ fontSize: '0.8rem', fontWeight: 700, color: '#cfa847', textTransform: 'uppercase' }}>
                  REGISTERED OFFICE
                </div>
                <div style={{ fontSize: '1.05rem', fontWeight: 700, color: '#071e17', marginTop: '2px' }}>
                  2nd Floor, Landmark Complex,
                </div>
                <div style={{ color: '#486156', fontSize: '0.94rem', lineHeight: 1.5, marginTop: '2px' }}>
                  Sannidhan Road, South Bazar,<br />
                  Kannur, Kerala, India - <strong>PIN 670002</strong>
                </div>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Landmark+Complex+South+Bazar+Kannur+Kerala+670002"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-block',
                    marginTop: '8px',
                    fontSize: '0.84rem',
                    color: '#015a44',
                    fontWeight: 600,
                    textDecoration: 'underline'
                  }}
                >
                  View on Google Maps ↗
                </a>
              </div>
            </div>

            {/* Phone */}
            <div style={{ display: 'flex', gap: '16px', marginBottom: '24px' }}>
              <div style={{
                background: '#edf7f3',
                color: '#015a44',
                width: '44px',
                height: '44px',
                borderRadius: '12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.2rem',
                flexShrink: 0
              }}>
                📞
              </div>
              <div>
                <div style={{ fontSize: '0.8rem', fontWeight: 700, color: '#cfa847', textTransform: 'uppercase' }}>
                  PHONE &amp; MOBILE
                </div>
                <div style={{ marginTop: '4px', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                  <a href="tel:+918129501405" style={{ fontSize: '1rem', fontWeight: 600, color: '#015a44' }}>
                    +91 8129501405 <span style={{ fontSize: '0.8rem', color: '#668074', fontWeight: 400 }}>(Mr. Jagesh Karakandy)</span>
                  </a>
                  <a href="tel:+919061630035" style={{ fontSize: '1rem', fontWeight: 600, color: '#015a44' }}>
                    +91 9061630035 <span style={{ fontSize: '0.8rem', color: '#668074', fontWeight: 400 }}>(Mr. Sooraj N L)</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Email */}
            <div style={{ display: 'flex', gap: '16px', marginBottom: '24px' }}>
              <div style={{
                background: '#edf7f3',
                color: '#015a44',
                width: '44px',
                height: '44px',
                borderRadius: '12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.2rem',
                flexShrink: 0
              }}>
                ✉️
              </div>
              <div>
                <div style={{ fontSize: '0.8rem', fontWeight: 700, color: '#cfa847', textTransform: 'uppercase' }}>
                  OFFICIAL EMAILS
                </div>
                <div style={{ marginTop: '4px', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                  <a href="mailto:info@novariseexports.com" style={{ fontSize: '0.96rem', fontWeight: 600, color: '#015a44' }}>
                    info@novariseexports.com
                  </a>
                  <a href="mailto:novariseexports@gmail.com" style={{ fontSize: '0.96rem', fontWeight: 600, color: '#015a44' }}>
                    novariseexports@gmail.com
                  </a>
                </div>
              </div>
            </div>

            {/* Website */}
            <div style={{ display: 'flex', gap: '16px', marginBottom: '28px' }}>
              <div style={{
                background: '#edf7f3',
                color: '#015a44',
                width: '44px',
                height: '44px',
                borderRadius: '12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.2rem',
                flexShrink: 0
              }}>
                🌐
              </div>
              <div>
                <div style={{ fontSize: '0.8rem', fontWeight: 700, color: '#cfa847', textTransform: 'uppercase' }}>
                  WEBSITE
                </div>
                <div style={{ marginTop: '4px' }}>
                  <a href="https://www.novariseexports.com" target="_blank" rel="noopener noreferrer" style={{ fontSize: '0.96rem', fontWeight: 600, color: '#015a44' }}>
                    www.novariseexports.com
                  </a>
                </div>
              </div>
            </div>

            {/* Quick Action Badges */}
            <div style={{
              background: '#f6f9f7',
              borderRadius: '14px',
              padding: '16px 20px',
              border: '1px solid rgba(1, 90, 68, 0.08)'
            }}>
              <div style={{ fontSize: '0.82rem', fontWeight: 700, color: '#015a44', marginBottom: '6px' }}>
                EXPORT DESK TIMINGS
              </div>
              <div style={{ fontSize: '0.86rem', color: '#4a6257' }}>
                Monday – Saturday: 9:00 AM – 7:00 PM (IST)<br />
                24/7 International Buyer Support via WhatsApp
              </div>
            </div>
          </div>

          {/* Interactive Inquiry Form */}
          <div style={{
            background: '#ffffff',
            borderRadius: '24px',
            border: '1px solid var(--border-light)',
            padding: '36px',
            boxShadow: 'var(--shadow-md)'
          }}>
            <h3 style={{ fontSize: '1.45rem', color: '#015a44', marginBottom: '8px' }}>
              Send an Export Inquiry
            </h3>
            <p style={{ color: '#556f63', fontSize: '0.9rem', marginBottom: '24px' }}>
              Fill in your consignment specifications and our trade representatives will respond promptly with catalog pricing and shipping terms.
            </p>

            {submitted ? (
              <div style={{
                background: '#e7f7f0',
                border: '1px solid #059669',
                borderRadius: '16px',
                padding: '32px 24px',
                textAlign: 'center',
                color: '#065f46'
              }}>
                <div style={{ fontSize: '2.5rem', marginBottom: '12px' }}>🎉</div>
                <h4 style={{ fontSize: '1.3rem', marginBottom: '8px' }}>Inquiry Successfully Received!</h4>
                <p style={{ fontSize: '0.95rem', lineHeight: 1.6 }}>
                  Thank you, <strong>{formData.name || 'Valued Client'}</strong>! Your export inquiry has been forwarded directly to <strong>Mr. Jagesh Karakandy</strong> and <strong>Mr. Sooraj N L</strong> at <em>novariseexports@gmail.com</em>.
                </p>
                <div style={{ marginTop: '20px' }}>
                  <a
                    href={`https://wa.me/918129501405?text=Hello%20Nova%20Rise%20Exports,%20I%20just%20submitted%20an%20inquiry%20for%20${encodeURIComponent(formData.product)}.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-gold"
                    style={{ padding: '10px 24px', fontSize: '0.88rem' }}
                  >
                    💬 Track Instantly on WhatsApp
                  </a>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '14px' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 600, color: '#273f35', marginBottom: '6px' }}>
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. John Smith"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '11px 14px',
                        borderRadius: '8px',
                        border: '1px solid #cbd5e1',
                        fontSize: '0.92rem'
                      }}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 600, color: '#273f35', marginBottom: '6px' }}>
                      Company / Organization
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Global Imports LLC"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '11px 14px',
                        borderRadius: '8px',
                        border: '1px solid #cbd5e1',
                        fontSize: '0.92rem'
                      }}
                    />
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '14px' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 600, color: '#273f35', marginBottom: '6px' }}>
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="buyer@domain.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '11px 14px',
                        borderRadius: '8px',
                        border: '1px solid #cbd5e1',
                        fontSize: '0.92rem'
                      }}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 600, color: '#273f35', marginBottom: '6px' }}>
                      Phone / WhatsApp *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+1 or +971..."
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '11px 14px',
                        borderRadius: '8px',
                        border: '1px solid #cbd5e1',
                        fontSize: '0.92rem'
                      }}
                    />
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '14px' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 600, color: '#273f35', marginBottom: '6px' }}>
                      Destination Country / Port *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. UAE, UK, USA, Germany..."
                      value={formData.country}
                      onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '11px 14px',
                        borderRadius: '8px',
                        border: '1px solid #cbd5e1',
                        fontSize: '0.92rem'
                      }}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 600, color: '#273f35', marginBottom: '6px' }}>
                      Product Category *
                    </label>
                    <select
                      value={formData.product}
                      onChange={(e) => setFormData({ ...formData, product: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '11px 14px',
                        borderRadius: '8px',
                        border: '1px solid #cbd5e1',
                        fontSize: '0.92rem',
                        background: '#ffffff'
                      }}
                    >
                      <option value="All / General Inquiry">All / General Inquiry</option>
                      <option value="Readymade Garments">1) Readymade Garments</option>
                      <option value="Bed sheets">2) Bed sheets</option>
                      <option value="Clothing materials">3) Clothing materials</option>
                      <option value="Packed Snacks">4) Packed Snacks (Banana chips & snacks)</option>
                      <option value="Fruits (including Jack fruit)">5) Fruits (including Jackfruit)</option>
                      <option value="Cereals">6) Cereals (Basmati, Matta, Grains)</option>
                      <option value="Pulses">7) Pulses (Lentils, Chickpeas)</option>
                      <option value="Coconut Oil">8) Coconut Oil (Pure Cold-Pressed)</option>
                      <option value="Spices">9) Spices (Malabar Black Pepper, Cardamom, etc.)</option>
                      <option value="Custom Procurement">Bespoke / Custom Procurement Offering</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 600, color: '#273f35', marginBottom: '6px' }}>
                    Consignment Specifications &amp; Details *
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Specify target volume (e.g. 1 FCL 20ft / 5 MT), packaging preferences, private label requirements, target timeline..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '12px 14px',
                      borderRadius: '8px',
                      border: '1px solid #cbd5e1',
                      fontSize: '0.92rem',
                      fontFamily: 'inherit'
                    }}
                  />
                </div>

                <button type="submit" className="btn-primary" style={{ padding: '14px', marginTop: '6px' }}>
                  🚀 Submit Export Inquiry to Partners
                </button>
              </form>
            )}
          </div>
        </div>

      </div>
    </section>
  );
}
