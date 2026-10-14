'use client';

import React, { useState } from 'react';
import { useRFQ } from '@/components/RFQContext';
import { 
  MapPin, 
  Phone, 
  Mail, 
  MessageCircle, 
  Ship, 
  Globe2, 
  CheckCircle2, 
  Send, 
  Clock, 
  ArrowUpRight, 
  ShieldCheck,
  Building2,
  FileText
} from 'lucide-react';

export default function ContactPage() {
  const { openQuoteModal } = useRFQ();
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    country: '',
    product: 'All / General Inquiry',
    quantity: '',
    incoterms: 'FOB',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div>
      {/* 1. Page Header Banner */}
      <section style={{
        background: 'linear-gradient(135deg, #051611 0%, #014433 100%)',
        color: '#ffffff',
        padding: '80px 0 68px 0',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Ambient Halo */}
        <div style={{
          position: 'absolute',
          top: '-20%',
          right: '5%',
          width: '450px',
          height: '450px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(207, 168, 71, 0.12) 0%, transparent 70%)',
          pointerEvents: 'none'
        }} />

        <div className="container" style={{ position: 'relative', zIndex: 10 }}>
          <div className="section-badge gold" style={{ marginBottom: '18px' }}>
            <Globe2 size={14} style={{ color: '#cfa847' }} />
            <span>GLOBAL TRADE DESK &amp; HEADQUARTERS</span>
          </div>
          <h1 style={{
            fontSize: 'clamp(2.2rem, 4.2vw, 3.5rem)',
            color: '#ffffff',
            lineHeight: 1.2,
            marginBottom: '18px',
            maxWidth: '860px'
          }}>
            Connect with <span className="text-gradient-gold">Nova Rise Exports</span>
          </h1>
          <p style={{
            fontSize: 'clamp(1rem, 1.6vw, 1.18rem)',
            color: '#d5e6df',
            maxWidth: '740px',
            lineHeight: 1.7,
            margin: 0
          }}>
            Our governing partners personally handle all commercial export inquiries, sample requests, and procurement consignments. We invite international buyers and distributors to initiate dialogue.
          </p>
        </div>
      </section>

      {/* 2. Registered Office & Interactive Inquiry Form */}
      <section className="section" style={{ background: '#f8faf8' }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            gap: '40px',
            alignItems: 'start'
          }}>
            {/* Left Col: Contact Info & Office Credentials */}
            <div className="luxury-card" style={{ padding: '38px' }}>
              <div className="section-badge">
                <Building2 size={13} style={{ color: '#015a44' }} />
                <span>OFFICIAL TRADE CHANNELS</span>
              </div>
              <h2 style={{ fontSize: '1.65rem', color: '#015a44', marginBottom: '26px' }}>
                Registered Office &amp; Partner Lines
              </h2>

              {/* Physical Office Address */}
              <div style={{ display: 'flex', gap: '16px', marginBottom: '26px' }}>
                <div className="icon-badge icon-badge-emerald">
                  <MapPin size={22} />
                </div>
                <div>
                  <div style={{ fontSize: '0.76rem', fontWeight: 700, color: '#a88229', textTransform: 'uppercase' }}>
                    REGISTERED OFFICE LOCATION
                  </div>
                  <div style={{ fontSize: '1.1rem', fontWeight: 700, color: '#071e17', marginTop: '2px' }}>
                    Nova Rise Exports
                  </div>
                  <div style={{ color: '#486156', fontSize: '0.94rem', lineHeight: 1.6, marginTop: '2px' }}>
                    2nd Floor, Landmark Complex,<br />
                    Sannidhan Road, South Bazar,<br />
                    Kannur, Kerala, India - <strong>PIN 670002</strong>
                  </div>
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=Landmark+Complex+South+Bazar+Kannur+Kerala+670002"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '4px',
                      marginTop: '8px',
                      fontSize: '0.86rem',
                      color: '#015a44',
                      fontWeight: 600
                    }}
                  >
                    <span>View Registered Office on Google Maps</span>
                    <ArrowUpRight size={14} />
                  </a>
                </div>
              </div>

              {/* Phone & Partner Contacts */}
              <div style={{ display: 'flex', gap: '16px', marginBottom: '26px' }}>
                <div className="icon-badge icon-badge-gold">
                  <Phone size={22} />
                </div>
                <div>
                  <div style={{ fontSize: '0.76rem', fontWeight: 700, color: '#a88229', textTransform: 'uppercase' }}>
                    DIRECT PARTNER PHONE LINES
                  </div>
                  <div style={{ marginTop: '6px', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                    <a href="tel:+918129501405" style={{ fontSize: '1.02rem', fontWeight: 600, color: '#015a44' }}>
                      +91 8129501405 <span style={{ fontSize: '0.82rem', color: '#668074', fontWeight: 400 }}>(Mr. Jagesh Karakandy)</span>
                    </a>
                    <a href="tel:+919061630035" style={{ fontSize: '1.02rem', fontWeight: 600, color: '#015a44' }}>
                      +91 9061630035 <span style={{ fontSize: '0.82rem', color: '#668074', fontWeight: 400 }}>(Mr. Sooraj N L)</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Official Emails */}
              <div style={{ display: 'flex', gap: '16px', marginBottom: '26px' }}>
                <div className="icon-badge icon-badge-emerald">
                  <Mail size={22} />
                </div>
                <div>
                  <div style={{ fontSize: '0.76rem', fontWeight: 700, color: '#a88229', textTransform: 'uppercase' }}>
                    OFFICIAL CORRESPONDENCE EMAILS
                  </div>
                  <div style={{ marginTop: '6px', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                    <a href="mailto:info@novariseexports.com" style={{ fontSize: '0.96rem', fontWeight: 600, color: '#015a44' }}>
                      info@novariseexports.com
                    </a>
                    <a href="mailto:novariseexports@gmail.com" style={{ fontSize: '0.96rem', fontWeight: 600, color: '#015a44' }}>
                      novariseexports@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              {/* 24/7 WhatsApp */}
              <div style={{ display: 'flex', gap: '16px', marginBottom: '30px' }}>
                <div className="icon-badge" style={{ background: '#25D366', color: '#ffffff' }}>
                  <MessageCircle size={22} />
                </div>
                <div>
                  <div style={{ fontSize: '0.76rem', fontWeight: 700, color: '#a88229', textTransform: 'uppercase' }}>
                    INSTANT WHATSAPP SUPPORT
                  </div>
                  <div style={{ marginTop: '4px' }}>
                    <a
                      href="https://wa.me/918129501405?text=Hello%20Nova%20Rise%20Exports,%20I%20am%20interested%20in%20an%20export%20proposal."
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        fontSize: '0.94rem',
                        fontWeight: 700,
                        color: '#015a44',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '4px'
                      }}
                    >
                      <span>Click to Chat on WhatsApp (+91 8129501405)</span>
                      <ArrowUpRight size={14} />
                    </a>
                  </div>
                </div>
              </div>

              {/* Transit Ports & Logistics Gateway Box */}
              <div style={{
                background: 'linear-gradient(135deg, #f7faf8 0%, #edf5f1 100%)',
                borderRadius: '16px',
                padding: '22px',
                border: '1px solid rgba(1, 90, 68, 0.1)'
              }}>
                <div style={{
                  fontSize: '0.82rem',
                  fontWeight: 700,
                  color: '#015a44',
                  marginBottom: '10px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px'
                }}>
                  <Ship size={15} style={{ color: '#cfa847' }} />
                  <span>SEAPORTS &amp; LOGISTICS HUBS</span>
                </div>
                <div style={{ fontSize: '0.86rem', color: '#446054', lineHeight: 1.65 }}>
                  • <strong>Cochin Port (COK):</strong> Major international transshipment terminal.<br />
                  • <strong>New Mangalore Port (NMPT):</strong> Rapid container shipping corridor.<br />
                  • <strong>Kannur Int&apos;l Airport (CNN):</strong> Express perishables &amp; courier samples.<br />
                  • <strong>Operating Hours:</strong> Mon - Sat: 9:00 AM - 7:00 PM IST (24/7 WhatsApp)
                </div>
              </div>
            </div>

            {/* Right Col: Interactive Consignment Inquiry Form */}
            <div className="luxury-card" style={{ padding: '38px' }}>
              <div className="section-badge gold">
                <FileText size={13} style={{ color: '#cfa847' }} />
                <span>EXPORT INQUIRY &amp; RFQ</span>
              </div>
              <h2 style={{ fontSize: '1.65rem', color: '#015a44', marginBottom: '8px' }}>
                Submit Trade Consignment Inquiry
              </h2>
              <p style={{ color: '#556f63', fontSize: '0.92rem', marginBottom: '24px' }}>
                Please specify your destination country, required products, and quantities. We will respond within 24 hours with a comprehensive proforma quotation.
              </p>

              {submitted ? (
                <div style={{
                  background: 'linear-gradient(135deg, #edf7f3 0%, #e2f2eb 100%)',
                  border: '1px solid #059669',
                  borderRadius: '20px',
                  padding: '40px 28px',
                  textAlign: 'center',
                  color: '#065f46'
                }}>
                  <div style={{
                    width: '64px',
                    height: '64px',
                    borderRadius: '50%',
                    background: '#015a44',
                    color: '#fae297',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 16px auto',
                    boxShadow: '0 8px 20px rgba(1, 90, 68, 0.25)'
                  }}>
                    <CheckCircle2 size={34} />
                  </div>
                  <h3 style={{ fontSize: '1.4rem', marginBottom: '10px', color: '#065f46' }}>Inquiry Dispatched Successfully!</h3>
                  <p style={{ fontSize: '0.95rem', lineHeight: 1.65, marginBottom: '24px' }}>
                    Thank you, <strong>{formData.name || 'Valued Client'}</strong>! Your consignment inquiry for <strong>{formData.product}</strong> ({formData.quantity || 'Consignment'}) destined for <strong>{formData.country || 'Destination Port'}</strong> has been received by governing partners Mr. Jagesh Karakandy &amp; Mr. Sooraj N L.
                  </p>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    <a
                      href={`https://wa.me/918129501405?text=Hello%20Nova%20Rise%20Exports,%20I%20just%20submitted%20a%20formal%20inquiry%20for%20${encodeURIComponent(formData.product)}%20destined%20for%20${encodeURIComponent(formData.country)}.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-gold"
                      style={{ padding: '14px 24px', textAlign: 'center', justifyContent: 'center' }}
                    >
                      <MessageCircle size={17} />
                      <span>Expedite Reply via WhatsApp</span>
                    </a>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="btn-outline-dark"
                      style={{ padding: '12px 20px', justifyContent: 'center' }}
                    >
                      Submit Another Consignment Inquiry
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '14px' }}>
                    <div>
                      <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 600, color: '#273f35', marginBottom: '6px' }}>
                        Representative Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Robert Anderson"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        style={{
                          width: '100%',
                          padding: '11px 14px',
                          borderRadius: '10px',
                          border: '1.5px solid #cbd5e1',
                          fontSize: '0.92rem',
                          outline: 'none'
                        }}
                      />
                    </div>

                    <div>
                      <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 600, color: '#273f35', marginBottom: '6px' }}>
                        Company / Enterprise Name
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Apex Global Trading LLC"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        style={{
                          width: '100%',
                          padding: '11px 14px',
                          borderRadius: '10px',
                          border: '1.5px solid #cbd5e1',
                          fontSize: '0.92rem',
                          outline: 'none'
                        }}
                      />
                    </div>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '14px' }}>
                    <div>
                      <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 600, color: '#273f35', marginBottom: '6px' }}>
                        Corporate Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="buyer@enterprise.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        style={{
                          width: '100%',
                          padding: '11px 14px',
                          borderRadius: '10px',
                          border: '1.5px solid #cbd5e1',
                          fontSize: '0.92rem',
                          outline: 'none'
                        }}
                      />
                    </div>

                    <div>
                      <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 600, color: '#273f35', marginBottom: '6px' }}>
                        WhatsApp / Phone (with Country Code) *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+CountryCode..."
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        style={{
                          width: '100%',
                          padding: '11px 14px',
                          borderRadius: '10px',
                          border: '1.5px solid #cbd5e1',
                          fontSize: '0.92rem',
                          outline: 'none'
                        }}
                      />
                    </div>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '14px' }}>
                    <div>
                      <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 600, color: '#273f35', marginBottom: '6px' }}>
                        Discharge Port / Destination Country *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Jebel Ali, Rotterdam, London..."
                        value={formData.country}
                        onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                        style={{
                          width: '100%',
                          padding: '11px 14px',
                          borderRadius: '10px',
                          border: '1.5px solid #cbd5e1',
                          fontSize: '0.92rem',
                          outline: 'none'
                        }}
                      />
                    </div>

                    <div>
                      <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 600, color: '#273f35', marginBottom: '6px' }}>
                        Product Line of Interest *
                      </label>
                      <select
                        value={formData.product}
                        onChange={(e) => setFormData({ ...formData, product: e.target.value })}
                        style={{
                          width: '100%',
                          padding: '11px 14px',
                          borderRadius: '10px',
                          border: '1.5px solid #cbd5e1',
                          fontSize: '0.92rem',
                          background: '#ffffff',
                          outline: 'none'
                        }}
                      >
                        <option value="All / General Inquiry">All / General Inquiry</option>
                        <option value="Readymade Garments">1) Readymade Garments</option>
                        <option value="Bed sheets">2) Bed sheets &amp; Linens</option>
                        <option value="Clothing materials">3) Clothing materials</option>
                        <option value="Packed Snacks">4) Packed Snacks (Banana chips &amp; namkeens)</option>
                        <option value="Fruits (including Jack fruit)">5) Fruits (including Jackfruit)</option>
                        <option value="Cereals">6) Cereals (Basmati Rice, Matta &amp; Grains)</option>
                        <option value="Pulses">7) Pulses (Toor dal, Chickpeas, Moong)</option>
                        <option value="Coconut Oil">8) Coconut Oil (Pure Cold-Pressed Virgin)</option>
                        <option value="Spices">9) Spices (Malabar Black Pepper, Cardamom, etc.)</option>
                        <option value="Custom Procurement">Bespoke / Custom Procurement Offering</option>
                      </select>
                    </div>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '14px' }}>
                    <div>
                      <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 600, color: '#273f35', marginBottom: '6px' }}>
                        Estimated Volume / Quantity
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. 1 x 20ft FCL / 5 MT / 1000 Cartons"
                        value={formData.quantity}
                        onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                        style={{
                          width: '100%',
                          padding: '11px 14px',
                          borderRadius: '10px',
                          border: '1.5px solid #cbd5e1',
                          fontSize: '0.92rem',
                          outline: 'none'
                        }}
                      />
                    </div>

                    <div>
                      <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 600, color: '#273f35', marginBottom: '6px' }}>
                        Incoterms
                      </label>
                      <select
                        value={formData.incoterms}
                        onChange={(e) => setFormData({ ...formData, incoterms: e.target.value })}
                        style={{
                          width: '100%',
                          padding: '11px 12px',
                          borderRadius: '10px',
                          border: '1.5px solid #cbd5e1',
                          fontSize: '0.92rem',
                          background: '#ffffff',
                          outline: 'none'
                        }}
                      >
                        <option value="FOB">FOB</option>
                        <option value="CIF">CIF</option>
                        <option value="CFR">CFR</option>
                        <option value="EXW">EXW</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 600, color: '#273f35', marginBottom: '6px' }}>
                      Consignment Specifications &amp; Requirements *
                    </label>
                    <textarea
                      rows={4}
                      required
                      placeholder="Specify packaging requirements (private label vs bulk), grade preferences, target delivery schedule, or any specific questions..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '12px 14px',
                        borderRadius: '10px',
                        border: '1.5px solid #cbd5e1',
                        fontSize: '0.92rem',
                        fontFamily: 'inherit',
                        outline: 'none'
                      }}
                    />
                  </div>

                  <button type="submit" className="btn-primary" style={{ padding: '14px', marginTop: '6px', justifyContent: 'center' }}>
                    <Send size={16} />
                    <span>Dispatch Consignment Inquiry to Partners</span>
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* 3. Trade FAQs & Assurances */}
          <div className="luxury-card" style={{
            marginTop: '64px',
            padding: '48px 40px'
          }}>
            <div className="section-header" style={{ marginBottom: '36px' }}>
              <div className="section-badge">
                <ShieldCheck size={13} style={{ color: '#015a44' }} />
                <span>FREQUENT TRADE INQUIRIES</span>
              </div>
              <h2>International Buyer Assurances</h2>
              <p>Transparent information regarding minimum order quantities, shipping protocols, and testing certifications.</p>
            </div>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '28px'
            }}>
              <div style={{
                background: 'linear-gradient(135deg, #f7faf8 0%, #edf5f1 100%)',
                padding: '24px',
                borderRadius: '16px',
                border: '1px solid rgba(1, 90, 68, 0.08)'
              }}>
                <h4 style={{ color: '#015a44', fontSize: '1.14rem', marginBottom: '8px' }}>
                  What are the accepted Incoterms and Payment terms?
                </h4>
                <p style={{ color: '#526e61', fontSize: '0.9rem', lineHeight: 1.65, margin: 0 }}>
                  We work flexibly on FOB (Cochin or Mangalore Ports), CIF (any global discharge port), and CFR terms. Payment structures include Irrevocable Letter of Credit (LC at Sight) and Telegraphic Transfer (TT).
                </p>
              </div>

              <div style={{
                background: 'linear-gradient(135deg, #f7faf8 0%, #edf5f1 100%)',
                padding: '24px',
                borderRadius: '16px',
                border: '1px solid rgba(1, 90, 68, 0.08)'
              }}>
                <h4 style={{ color: '#015a44', fontSize: '1.14rem', marginBottom: '8px' }}>
                  Do you provide sample testing prior to bulk dispatch?
                </h4>
                <p style={{ color: '#526e61', fontSize: '0.9rem', lineHeight: 1.65, margin: 0 }}>
                  Yes. We dispatch verified consignment counter-samples via DHL/FedEx for physical evaluation, along with accredited government laboratory test certificates for moisture, purity, and microbiology.
                </p>
              </div>

              <div style={{
                background: 'linear-gradient(135deg, #f7faf8 0%, #edf5f1 100%)',
                padding: '24px',
                borderRadius: '16px',
                border: '1px solid rgba(1, 90, 68, 0.08)'
              }}>
                <h4 style={{ color: '#015a44', fontSize: '1.14rem', marginBottom: '8px' }}>
                  Can products be private-labeled under our brand?
                </h4>
                <p style={{ color: '#526e61', fontSize: '0.9rem', lineHeight: 1.65, margin: 0 }}>
                  Absolutely. We offer complete OEM and private-label packaging for readymade garments, bed sheet retail covers, packaged banana chips, and bottled virgin coconut oil with your customized barcodes and language translations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
