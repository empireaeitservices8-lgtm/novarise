'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { MapPin, Phone, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer style={{
      background: '#ffffff',
      color: '#2a4439',
      borderTop: '1px solid rgba(1, 90, 68, 0.12)',
      paddingTop: '56px',
      paddingBottom: '40px',
      position: 'relative'
    }}>
      <div style={{ maxWidth: '1080px', margin: '0 auto', padding: '0 24px', textAlign: 'center' }}>
        
        {/* Brand Crest & Logo */}
        <div style={{ marginBottom: '36px' }}>
          <Link href="/" style={{ display: 'inline-block', textDecoration: 'none' }}>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '6px 16px',
              transition: 'all 0.3s ease'
            }}>
              <Image
                src="/logo-dark.png"
                alt="Nova Rise Exports"
                width={280}
                height={64}
                style={{
                  height: '54px',
                  width: 'auto',
                  objectFit: 'contain'
                }}
                priority
              />
            </div>
          </Link>
          
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '12px',
            marginTop: '8px'
          }}>
            <span style={{ height: '1px', width: '36px', background: 'linear-gradient(90deg, transparent, rgba(207, 168, 71, 0.6))' }} />
            <span style={{
              fontSize: '0.82rem',
              color: '#8f6e1f',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              fontWeight: 700
            }}>
              Global Merchant Exporters · Kannur, Kerala, India
            </span>
            <span style={{ height: '1px', width: '36px', background: 'linear-gradient(90deg, rgba(207, 168, 71, 0.6), transparent)' }} />
          </div>
        </div>

        {/* 3-Column Unified Contact Desk */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '20px',
          marginBottom: '40px',
          textAlign: 'left'
        }}>
          {/* Card 1: Registered Office */}
          <div className="footer-contact-card" style={{ height: '100%', minHeight: '94px' }}>
            <div className="icon-badge icon-badge-emerald" style={{ width: '46px', height: '46px', flexShrink: 0 }}>
              <MapPin size={20} style={{ color: '#015a44' }} />
            </div>
            <div>
              <div style={{
                fontSize: '0.72rem',
                color: '#a88229',
                fontWeight: 700,
                letterSpacing: '0.08em',
                textTransform: 'uppercase'
              }}>
                REGISTERED OFFICE
              </div>
              <div style={{
                fontSize: '0.94rem',
                color: '#071e17',
                fontWeight: 700,
                marginTop: '3px'
              }}>
                Kannur, Kerala, India
              </div>
              <div style={{ fontSize: '0.78rem', color: '#597368', marginTop: '1px' }}>
                PIN 670002 · South Bazar
              </div>
            </div>
          </div>

          {/* Card 2: Export Phone Lines */}
          <a
            href="tel:+918129501405"
            className="footer-contact-card"
            title="Call Nova Rise Exports Trade Desk"
            style={{ height: '100%', minHeight: '94px' }}
          >
            <div className="icon-badge icon-badge-gold" style={{ width: '46px', height: '46px', flexShrink: 0 }}>
              <Phone size={20} style={{ color: '#886714' }} />
            </div>
            <div>
              <div style={{
                fontSize: '0.72rem',
                color: '#a88229',
                fontWeight: 700,
                letterSpacing: '0.08em',
                textTransform: 'uppercase'
              }}>
                DIRECT EXPORT DESK
              </div>
              <div style={{
                fontSize: '0.94rem',
                color: '#071e17',
                fontWeight: 700,
                marginTop: '3px'
              }}>
                +91 8129501405
              </div>
              <div style={{ fontSize: '0.78rem', color: '#597368', marginTop: '1px' }}>
                Alt: +91 9061630035
              </div>
            </div>
          </a>

          {/* Card 3: Trade Inquiries */}
          <a
            href="mailto:info@novariseexports.com"
            className="footer-contact-card"
            title="Email Nova Rise Exports"
            style={{ height: '100%', minHeight: '94px' }}
          >
            <div className="icon-badge icon-badge-emerald" style={{ width: '46px', height: '46px', flexShrink: 0 }}>
              <Mail size={20} style={{ color: '#015a44' }} />
            </div>
            <div>
              <div style={{
                fontSize: '0.72rem',
                color: '#a88229',
                fontWeight: 700,
                letterSpacing: '0.08em',
                textTransform: 'uppercase'
              }}>
                TRADE INQUIRIES
              </div>
              <div style={{
                fontSize: '0.94rem',
                color: '#015a44',
                fontWeight: 700,
                marginTop: '3px'
              }}>
                info@novariseexports.com
              </div>
              <div style={{ fontSize: '0.78rem', color: '#597368', marginTop: '1px' }}>
                Official Commercial Inbox
              </div>
            </div>
          </a>
        </div>

        {/* Divider & Bottom Copyright */}
        <div style={{
          borderTop: '1px solid rgba(1, 90, 68, 0.1)',
          paddingTop: '24px',
          textAlign: 'center',
          fontSize: '0.84rem',
          color: '#5f7d71'
        }}>
          © {new Date().getFullYear()} <strong style={{ color: '#071e17', fontWeight: 700 }}>NOVA RISE EXPORTS</strong> · Partnership Firm, Kerala, India. All Rights Reserved.
        </div>

      </div>
    </footer>
  );
}


