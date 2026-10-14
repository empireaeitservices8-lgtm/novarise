'use client';

import React, { useState, useEffect } from 'react';
import { X, CheckCircle2, MessageCircle, FileText, Send, Ship } from 'lucide-react';

interface RFQModalProps {
  isOpen: boolean;
  initialProduct?: string;
  onClose: () => void;
}

export default function RFQModal({ isOpen, initialProduct, onClose }: RFQModalProps) {
  const [product, setProduct] = useState(initialProduct || 'Readymade Garments');
  const [quantity, setQuantity] = useState('');
  const [unit, setUnit] = useState('Metric Tons');
  const [destination, setDestination] = useState('');
  const [incoterms, setIncoterms] = useState('FOB');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (initialProduct) {
      setProduct(initialProduct);
    }
  }, [initialProduct]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(5, 22, 17, 0.85)',
      backdropFilter: 'blur(10px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 1000,
      padding: '20px'
    }}>
      <div style={{
        background: '#ffffff',
        borderRadius: '24px',
        maxWidth: '580px',
        width: '100%',
        maxHeight: '92vh',
        overflowY: 'auto',
        boxShadow: '0 24px 70px rgba(0, 0, 0, 0.4)',
        border: '1px solid rgba(207, 168, 71, 0.35)',
        position: 'relative'
      }}>
        {/* Header */}
        <div style={{
          background: 'linear-gradient(135deg, #051611 0%, #014433 100%)',
          color: '#ffffff',
          padding: '24px 28px',
          borderTopLeftRadius: '23px',
          borderTopRightRadius: '23px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          borderBottom: '1px solid rgba(207, 168, 71, 0.25)'
        }}>
          <div>
            <div style={{ fontSize: '0.74rem', color: '#cfa847', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase' }}>
              OFFICIAL EXPORT QUOTE INQUIRY (RFQ)
            </div>
            <h3 style={{ fontSize: '1.35rem', color: '#ffffff', margin: '4px 0 0 0' }}>
              Nova Rise Exports Trade Desk
            </h3>
          </div>
          <button
            onClick={onClose}
            aria-label="Close modal"
            style={{
              background: 'rgba(255, 255, 255, 0.12)',
              color: '#ffffff',
              borderRadius: '50%',
              width: '36px',
              height: '36px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'all 0.2s ease'
            }}
          >
            <X size={18} />
          </button>
        </div>

        {/* Content */}
        <div style={{ padding: '28px' }}>
          {submitted ? (
            <div style={{ textAlign: 'center', padding: '24px 0' }}>
              <div style={{
                width: '64px',
                height: '64px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #015a44 0%, #004332 100%)',
                color: '#fae297',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 16px auto',
                boxShadow: '0 8px 24px rgba(1, 90, 68, 0.3)'
              }}>
                <CheckCircle2 size={34} />
              </div>

              <h4 style={{ fontSize: '1.4rem', color: '#015a44', marginBottom: '10px' }}>
                RFQ Successfully Transmitted!
              </h4>
              <p style={{ color: '#4a6358', fontSize: '0.94rem', lineHeight: 1.65, marginBottom: '24px' }}>
                Thank you, <strong>{name}</strong>! Your quote request for <strong>{quantity} {unit}</strong> of <strong>{product}</strong> to <strong>{destination}</strong> has been dispatched directly to partners Mr. Jagesh Karakandy &amp; Mr. Sooraj N L.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <a
                  href={`https://wa.me/918129501405?text=Hello%20Nova%20Rise%20Exports,%20I%20just%20requested%20an%20RFQ%20for%20${encodeURIComponent(quantity + ' ' + unit + ' ' + product)}%20to%20${encodeURIComponent(destination)}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-gold"
                  style={{ padding: '14px', textAlign: 'center', justifyContent: 'center' }}
                >
                  <MessageCircle size={18} />
                  <span>Speed Up Priority via WhatsApp</span>
                </a>
                <button
                  onClick={onClose}
                  className="btn-outline-dark"
                  style={{ padding: '12px', justifyContent: 'center' }}
                >
                  Close Window
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 600, color: '#273f35', marginBottom: '6px' }}>
                  Select Export Product *
                </label>
                <select
                  value={product}
                  onChange={(e) => setProduct(e.target.value)}
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
                  <option value="Readymade Garments">1) Readymade Garments</option>
                  <option value="Bed sheets">2) Bed sheets & Linens</option>
                  <option value="Clothing materials">3) Clothing materials</option>
                  <option value="Packed Snacks">4) Packed Snacks (Banana chips & snacks)</option>
                  <option value="Fruits (including Jack fruit)">5) Fruits (including Jackfruit)</option>
                  <option value="Cereals">6) Cereals (Rice, Millets, Grains)</option>
                  <option value="Pulses">7) Pulses (Lentils, Chickpeas)</option>
                  <option value="Coconut Oil">8) Coconut Oil (Cold Pressed / Virgin)</option>
                  <option value="Spices">9) Spices (Malabar Black Pepper, Cardamom, etc.)</option>
                  <option value="Bespoke Procurement">Custom / Unlisted Product Procurement</option>
                </select>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '12px' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 600, color: '#273f35', marginBottom: '6px' }}>
                    Required Volume / Quantity *
                  </label>
                  <input
                    type="number"
                    required
                    placeholder="e.g. 5, 20, 500"
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
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
                    Unit
                  </label>
                  <select
                    value={unit}
                    onChange={(e) => setUnit(e.target.value)}
                    style={{
                      width: '100%',
                      padding: '11px 10px',
                      borderRadius: '10px',
                      border: '1.5px solid #cbd5e1',
                      fontSize: '0.88rem',
                      background: '#ffffff',
                      outline: 'none'
                    }}
                  >
                    <option value="Metric Tons">MT</option>
                    <option value="Kilograms">KG</option>
                    <option value="Containers 20ft">20ft FCL</option>
                    <option value="Containers 40ft">40ft FCL</option>
                    <option value="Carton Boxes">Cartons</option>
                    <option value="Liters">Liters</option>
                  </select>
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '12px' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 600, color: '#273f35', marginBottom: '6px' }}>
                    Discharge Port / Destination Country *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Jebel Ali, Felixstowe, New York..."
                    value={destination}
                    onChange={(e) => setDestination(e.target.value)}
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
                    value={incoterms}
                    onChange={(e) => setIncoterms(e.target.value)}
                    style={{
                      width: '100%',
                      padding: '11px 10px',
                      borderRadius: '10px',
                      border: '1.5px solid #cbd5e1',
                      fontSize: '0.88rem',
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
                  Contact Person / Representative Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Your full name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
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

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 600, color: '#273f35', marginBottom: '6px' }}>
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="name@company.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
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
                    WhatsApp / Phone *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+Country Code..."
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
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

              <div style={{ display: 'flex', gap: '12px', marginTop: '12px' }}>
                <button type="submit" className="btn-primary" style={{ flex: 1, padding: '14px', justifyContent: 'center' }}>
                  <Send size={16} />
                  <span>Generate Formal RFQ</span>
                </button>
                <button type="button" onClick={onClose} className="btn-outline-dark" style={{ padding: '14px 22px', justifyContent: 'center' }}>
                  Cancel
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
