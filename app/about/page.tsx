import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { 
  ShieldCheck, 
  Scale, 
  Users, 
  MapPin, 
  Anchor, 
  Handshake, 
  Gauge, 
  Award, 
  Phone, 
  ArrowRight, 
  CheckCircle2, 
  FileText,
  Sparkles,
  Globe2,
  FileCheck2,
  Sprout,
  Microscope,
  BadgeCheck
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Us | Nova Rise Exports - Merchant Exporters from Kerala, India',
  description: 'Learn about Nova Rise Exports, our governing partners Mr. Jagesh Karakandy & Mr. Sooraj N L, our corporate pillars of trust, reliability, and our statutory export compliance.',
};

export default function AboutPage() {
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
          right: '8%',
          width: '450px',
          height: '450px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(207, 168, 71, 0.12) 0%, transparent 70%)',
          pointerEvents: 'none'
        }} />

        <div className="container" style={{ position: 'relative', zIndex: 10 }}>
          <div className="section-badge gold" style={{ marginBottom: '18px' }}>
            <Globe2 size={14} style={{ color: '#cfa847' }} />
            <span>ABOUT OUR EXPORT HOUSE</span>
          </div>
          <h1 style={{
            fontSize: 'clamp(2.2rem, 4.2vw, 3.5rem)',
            color: '#ffffff',
            lineHeight: 1.2,
            marginBottom: '18px',
            maxWidth: '860px'
          }}>
            Founded on Integrity, Built for <span className="text-gradient-gold">Global Trade</span>
          </h1>
          <p style={{
            fontSize: 'clamp(1rem, 1.6vw, 1.18rem)',
            color: '#d5e6df',
            maxWidth: '740px',
            lineHeight: 1.7,
            margin: 0
          }}>
            Nova Rise Exports is a premier partnership firm based in Kannur, Kerala, India. We bridge international commerce with India&apos;s rich agricultural bounty, authentic spices, and textile craftsmanship.
          </p>
        </div>
      </section>

      {/* 2. Company Story & Corporate Overview */}
      <section className="section" style={{ background: '#ffffff' }}>
        <div className="container">
          {/* Centered Editorial Header & Vision */}
          <div style={{ textAlign: 'center', maxWidth: '960px', margin: '0 auto 48px auto' }}>
            <div style={{ display: 'inline-flex', marginBottom: '16px' }}>
              <div className="section-badge">
                <ShieldCheck size={14} style={{ color: '#015a44' }} />
                <span>CORPORATE PROFILE &amp; VISION</span>
              </div>
            </div>

            <h2 style={{
              fontSize: 'clamp(1.8rem, 3.2vw, 2.6rem)',
              color: '#071e17',
              lineHeight: 1.25,
              marginBottom: '24px',
              fontWeight: 700
            }}>
              Delivering High-Quality Products Globally from God&apos;s Own Country
            </h2>

            <blockquote
              className="luxury-editorial-quote"
              style={{
                maxWidth: '860px',
                margin: '0 auto',
                color: '#123024',
                fontSize: 'clamp(1.18rem, 2vw, 1.4rem)',
                background: 'linear-gradient(135deg, rgba(207, 168, 71, 0.12) 0%, rgba(1, 90, 68, 0.05) 100%)',
                padding: '22px 34px',
                borderRadius: '16px',
                border: '1px solid rgba(207, 168, 71, 0.35)',
                boxShadow: '0 4px 20px rgba(1, 90, 68, 0.06)'
              }}
            >
              &ldquo;Nova Rise Exports is a partnership firm established with the vision of providing high quality products to our clients globally. Our firm is built on the principles of trust, reliability, and customer satisfaction.&rdquo;
            </blockquote>
          </div>

          {/* 4 Entity Credentials Cards (Balanced Full-Width Deck) */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '22px',
            marginBottom: '68px'
          }}>
            <div className="home-showcase-card" style={{ padding: '28px 24px', gap: '14px' }}>
              <div className="icon-badge icon-badge-emerald" style={{ width: '44px', height: '44px' }}>
                <Scale size={22} />
              </div>
              <div>
                <div style={{ fontSize: '0.74rem', color: '#cfa847', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '4px' }}>
                  LEGAL CONSTITUTION
                </div>
                <h4 style={{ fontSize: '1.15rem', color: '#071e17', margin: '0 0 8px 0', lineHeight: 1.35 }}>
                  Registered Partnership Firm
                </h4>
                <p style={{ color: '#566f64', fontSize: '0.88rem', margin: 0, lineHeight: 1.6 }}>
                  Fully authorized commercial merchant exporter under the Ministry of Commerce &amp; Industry, Government of India.
                </p>
              </div>
            </div>

            <div className="home-showcase-card" style={{ padding: '28px 24px', gap: '14px' }}>
              <div className="icon-badge icon-badge-gold" style={{ width: '44px', height: '44px' }}>
                <Users size={22} />
              </div>
              <div>
                <div style={{ fontSize: '0.74rem', color: '#cfa847', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '4px' }}>
                  FIRM PARTNERS
                </div>
                <h4 style={{ fontSize: '1.15rem', color: '#071e17', margin: '0 0 8px 0', lineHeight: 1.35 }}>
                  Mr. Jagesh Karakandy &amp; Mr. Sooraj N L
                </h4>
                <p style={{ color: '#566f64', fontSize: '0.88rem', margin: 0, lineHeight: 1.6 }}>
                  Joint governing partners with direct client accountability, contract supervision, and active trade leadership.
                </p>
              </div>
            </div>

            <div className="home-showcase-card" style={{ padding: '28px 24px', gap: '14px' }}>
              <div className="icon-badge icon-badge-emerald" style={{ width: '44px', height: '44px' }}>
                <MapPin size={22} />
              </div>
              <div>
                <div style={{ fontSize: '0.74rem', color: '#cfa847', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '4px' }}>
                  REGISTERED HEADQUARTERS
                </div>
                <h4 style={{ fontSize: '1.15rem', color: '#071e17', margin: '0 0 8px 0', lineHeight: 1.35 }}>
                  Kannur, Kerala (PIN 670002)
                </h4>
                <p style={{ color: '#566f64', fontSize: '0.88rem', margin: 0, lineHeight: 1.6 }}>
                  2nd Floor, Landmark Complex, Sannidhan Road, South Bazar, Kerala, India.
                </p>
              </div>
            </div>

            <div className="home-showcase-card" style={{ padding: '28px 24px', gap: '14px' }}>
              <div className="icon-badge icon-badge-gold" style={{ width: '44px', height: '44px' }}>
                <Anchor size={22} />
              </div>
              <div>
                <div style={{ fontSize: '0.74rem', color: '#cfa847', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '4px' }}>
                  DISPATCH CORRIDORS
                </div>
                <h4 style={{ fontSize: '1.15rem', color: '#071e17', margin: '0 0 8px 0', lineHeight: 1.35 }}>
                  Cochin &amp; Mangalore Gateways
                </h4>
                <p style={{ color: '#566f64', fontSize: '0.88rem', margin: 0, lineHeight: 1.6 }}>
                  Direct ocean container stuffing via Cochin Port (ICTT) &amp; Mangalore Port, with CNN air cargo connectivity.
                </p>
              </div>
            </div>
          </div>

          {/* 3 Core Pillars in Detail */}
          <div style={{ marginBottom: '68px' }}>
            <div className="section-header">
              <div className="section-badge">CORE PRINCIPLES</div>
              <h2>The Three Pillars Guiding Every Consignment</h2>
              <p>
                How our commitment to fundamental values translates into peace of mind for international buyers.
              </p>
            </div>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '28px'
            }}>
              <div className="luxury-card" style={{ padding: '36px 30px' }}>
                <div className="icon-badge icon-badge-emerald" style={{ marginBottom: '20px' }}>
                  <Handshake size={24} />
                </div>
                <h3 style={{ fontSize: '1.3rem', color: '#015a44', marginBottom: '12px' }}>
                  Trust &amp; Transparency
                </h3>
                <p style={{ color: '#546f63', fontSize: '0.92rem', lineHeight: 1.65 }}>
                  We believe enduring international trade is built on radical honesty. We provide clear proforma contracts, authentic weight slips, verified phytosanitary certificates, and unvarnished lab test reports with zero hidden surcharges.
                </p>
              </div>

              <div className="luxury-card" style={{ padding: '36px 30px', borderColor: 'var(--border-gold)' }}>
                <div className="icon-badge icon-badge-gold" style={{ marginBottom: '20px' }}>
                  <Gauge size={24} />
                </div>
                <h3 style={{ fontSize: '1.3rem', color: '#886714', marginBottom: '12px' }}>
                  Reliability &amp; Precision
                </h3>
                <p style={{ color: '#546f63', fontSize: '0.92rem', lineHeight: 1.65 }}>
                  From thread count in our bed sheets to volatile oil percentages in Malabar black pepper, we enforce strict tolerances. Punctual shipment schedules and moisture-barrier protective packing guarantee zero cargo degradation at sea.
                </p>
              </div>

              <div className="luxury-card" style={{ padding: '36px 30px' }}>
                <div className="icon-badge icon-badge-emerald" style={{ marginBottom: '20px' }}>
                  <Award size={24} />
                </div>
                <h3 style={{ fontSize: '1.3rem', color: '#015a44', marginBottom: '12px' }}>
                  Customer Satisfaction
                </h3>
                <p style={{ color: '#546f63', fontSize: '0.92rem', lineHeight: 1.65 }}>
                  Our clients are long-term commercial partners, not single orders. We tailor private labelling, flexible volume configurations, customized carton markings, and responsive 24/7 communications to serve your time zone.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Partners Leadership Message & Profiles */}
      <section className="section" style={{ background: '#f8faf8' }}>
        <div className="container">
          <div className="section-header">
            <div className="section-badge gold">
              <Sparkles size={13} style={{ color: '#cfa847' }} />
              <span>EXECUTIVE LEADERSHIP</span>
            </div>
            <h2>Message from the Governing Partners</h2>
            <p>
              Personal dedication, direct accountability, and commercial integrity behind every export shipment.
            </p>
          </div>

          {/* Letter Card */}
          <div style={{
            maxWidth: '920px',
            margin: '0 auto 52px auto',
            background: 'linear-gradient(135deg, #051611 0%, #014433 100%)',
            color: '#ffffff',
            borderRadius: '26px',
            padding: '52px 44px',
            boxShadow: 'var(--shadow-xl)',
            border: '1px solid rgba(207, 168, 71, 0.35)'
          }}>
            <div style={{
              fontSize: '0.8rem',
              fontWeight: 700,
              color: '#cfa847',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              marginBottom: '16px'
            }}>
              OFFICIAL ADDRESS TO INTERNATIONAL IMPORTERS
            </div>

            <h3 style={{ fontSize: 'clamp(1.4rem, 2.5vw, 1.85rem)', color: '#ffffff', lineHeight: 1.4, marginBottom: '22px' }}>
              Building Enduring Trade Relationships Across Global Borders
            </h3>

            <blockquote style={{
              fontSize: '1.14rem',
              lineHeight: 1.75,
              color: '#e2f0ea',
              fontStyle: 'italic',
              marginBottom: '20px',
              borderLeft: '4px solid #cfa847',
              paddingLeft: '20px'
            }}>
              &ldquo;Join us in our journey to provide the best products and services to our clients worldwide. Thank you for considering Nova Rise Exports as your trusted business partner.&rdquo;
            </blockquote>

            <p style={{ fontSize: '0.96rem', lineHeight: 1.7, color: '#bcd7cb', margin: 0 }}>
              At Nova Rise Exports, we do not view trade as transactional commodity movement. Every consignment is an ambassador of India&apos;s agrarian excellence, textile heritage, and business integrity. Whether we are shipping container loads of pure cold-pressed coconut oil, export-graded rice, or handcrafted garments, we personally oversee the supply chain from our Kannur office to the dispatch vessel.
            </p>
          </div>

          {/* Two Partners Spotlight Cards */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '32px',
            maxWidth: '860px',
            margin: '0 auto'
          }}>
            <div className="luxury-card" style={{
              padding: '38px 32px',
              textAlign: 'center'
            }}>
              <div style={{
                width: '84px',
                height: '84px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #015a44 0%, #0d7a5e 100%)',
                color: '#ffffff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 18px auto',
                fontSize: '1.65rem',
                fontWeight: 700,
                fontFamily: 'Cinzel, serif',
                border: '3px solid #cfa847',
                boxShadow: '0 8px 20px rgba(1, 90, 68, 0.25)'
              }}>
                JK
              </div>
              <h4 style={{ fontSize: '1.35rem', color: '#015a44', marginBottom: '4px' }}>
                Mr. Jagesh Karakandy
              </h4>
              <div style={{ fontSize: '0.82rem', fontWeight: 700, color: '#a88229', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '14px' }}>
                Partner, Nova Rise Exports
              </div>
              <p style={{ color: '#566f64', fontSize: '0.92rem', lineHeight: 1.6 }}>
                Directly leads international client relations, overseas contract structuring, export marketing, and commercial negotiations.
              </p>
              <div style={{ marginTop: '22px', paddingTop: '16px', borderTop: '1px solid #edf2ef' }}>
                <a
                  href="tel:+918129501405"
                  style={{
                    color: '#015a44',
                    fontWeight: 700,
                    fontSize: '0.95rem',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px'
                  }}
                >
                  <Phone size={15} style={{ color: '#cfa847' }} />
                  <span>+91 8129501405</span>
                </a>
              </div>
            </div>

            <div className="luxury-card" style={{
              padding: '38px 32px',
              textAlign: 'center'
            }}>
              <div style={{
                width: '84px',
                height: '84px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #015a44 0%, #0d7a5e 100%)',
                color: '#ffffff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 18px auto',
                fontSize: '1.65rem',
                fontWeight: 700,
                fontFamily: 'Cinzel, serif',
                border: '3px solid #cfa847',
                boxShadow: '0 8px 20px rgba(1, 90, 68, 0.25)'
              }}>
                SN
              </div>
              <h4 style={{ fontSize: '1.35rem', color: '#015a44', marginBottom: '4px' }}>
                Mr. Sooraj N L
              </h4>
              <div style={{ fontSize: '0.82rem', fontWeight: 700, color: '#a88229', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '14px' }}>
                Partner, Nova Rise Exports
              </div>
              <p style={{ color: '#566f64', fontSize: '0.92rem', lineHeight: 1.6 }}>
                Oversees supply chain operations, port logistics, statutory export licensing, lab inspections, and shipment dispatch.
              </p>
              <div style={{ marginTop: '22px', paddingTop: '16px', borderTop: '1px solid #edf2ef' }}>
                <a
                  href="tel:+919061630035"
                  style={{
                    color: '#015a44',
                    fontWeight: 700,
                    fontSize: '0.95rem',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px'
                  }}
                >
                  <Phone size={15} style={{ color: '#cfa847' }} />
                  <span>+91 9061630035</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Statutory Compliance & Quality Assurance */}
      <section className="section" style={{ background: '#ffffff', paddingTop: '32px' }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '26px',
            marginBottom: '52px'
          }}>
            {[
              {
                code: 'DGFT COMPLIANT',
                title: 'Import Export Code (IEC)',
                desc: 'Registered with the Directorate General of Foreign Trade, Government of India, enabling full merchant export clearance and international maritime trade.',
                icon: <FileCheck2 size={22} style={{ color: '#ffffff' }} />,
                bg: 'linear-gradient(145deg, #f0f7ff 0%, #e0effe 100%)',
                border: '1px solid rgba(37, 99, 235, 0.28)',
                iconBg: 'linear-gradient(135deg, #1d4ed8 0%, #2563eb 100%)',
                tagBg: 'rgba(37, 99, 235, 0.1)',
                tagBorder: 'rgba(37, 99, 235, 0.28)',
                tagColor: '#1d4ed8',
                titleColor: '#0f2942',
                descColor: '#2d4b68',
                accentColor: '#2563eb',
                authority: 'Ministry of Commerce & Industry'
              },
              {
                code: 'AGRO STANDARDS',
                title: 'APEDA Guidelines',
                desc: 'Full conformity with Agricultural and Processed Food Products Export Development Authority standards for fresh produce, tropical fruits, and Jackfruit.',
                icon: <Sprout size={22} style={{ color: '#ffffff' }} />,
                bg: 'linear-gradient(145deg, #f0fdf4 0%, #dcfce7 100%)',
                border: '1px solid rgba(22, 163, 74, 0.28)',
                iconBg: 'linear-gradient(135deg, #15803d 0%, #16a34a 100%)',
                tagBg: 'rgba(22, 163, 74, 0.1)',
                tagBorder: 'rgba(22, 163, 74, 0.28)',
                tagColor: '#15803d',
                titleColor: '#0e3820',
                descColor: '#255438',
                accentColor: '#16a34a',
                authority: 'APEDA Regulatory Protocol'
              },
              {
                code: 'SPICES BOARD OF INDIA',
                title: 'Spice Export Protocols',
                desc: 'Rigorous laboratory adherence to moisture thresholds, volatile oil percentages, and Sortex optical purity mandated by the Spices Board of India.',
                icon: <Sparkles size={22} style={{ color: '#ffffff' }} />,
                bg: 'linear-gradient(145deg, #fffbeb 0%, #fef3c7 100%)',
                border: '1px solid rgba(217, 119, 6, 0.28)',
                iconBg: 'linear-gradient(135deg, #b45309 0%, #d97706 100%)',
                tagBg: 'rgba(217, 119, 6, 0.12)',
                tagBorder: 'rgba(217, 119, 6, 0.28)',
                tagColor: '#92400e',
                titleColor: '#3d2508',
                descColor: '#5c3e17',
                accentColor: '#d97706',
                authority: 'Spices Board Certified'
              },
              {
                code: 'FOOD SAFETY',
                title: 'FSSAI Certification',
                desc: 'Comprehensive adherence to Food Safety and Standards Authority of India hygiene across food consignments, Kerala banana chips, and virgin coconut oil.',
                icon: <ShieldCheck size={22} style={{ color: '#ffffff' }} />,
                bg: 'linear-gradient(145deg, #f0fdfa 0%, #ccfbf1 100%)',
                border: '1px solid rgba(13, 148, 136, 0.28)',
                iconBg: 'linear-gradient(135deg, #0f766e 0%, #0d9488 100%)',
                tagBg: 'rgba(13, 148, 136, 0.12)',
                tagBorder: 'rgba(13, 148, 136, 0.28)',
                tagColor: '#0f766e',
                titleColor: '#08332f',
                descColor: '#1e524d',
                accentColor: '#0d9488',
                authority: 'FSSAI Food Safety Mandate'
              },
              {
                code: 'PLANT QUARANTINE',
                title: 'Phytosanitary & Fumigation',
                desc: 'Mandatory plant quarantine inspections, formal phytosanitary certificates, and authorized pest-free fumigation guaranteeing ocean biosecurity.',
                icon: <Microscope size={22} style={{ color: '#ffffff' }} />,
                bg: 'linear-gradient(145deg, #faf5ff 0%, #f3e8ff 100%)',
                border: '1px solid rgba(147, 51, 234, 0.28)',
                iconBg: 'linear-gradient(135deg, #7e22ce 0%, #9333ea 100%)',
                tagBg: 'rgba(147, 51, 234, 0.1)',
                tagBorder: 'rgba(147, 51, 234, 0.28)',
                tagColor: '#7e22ce',
                titleColor: '#2b1042',
                descColor: '#4a2c68',
                accentColor: '#9333ea',
                authority: 'Govt Plant Quarantine Division'
              },
              {
                code: 'PROVENANCE VERIFICATION',
                title: 'Certificate of Origin',
                desc: 'Authentic Indian provenance attestation issued by recognized Indian Chambers of Commerce for overseas preferential customs duty clearance.',
                icon: <Award size={22} style={{ color: '#ffffff' }} />,
                bg: 'linear-gradient(145deg, #fff1f2 0%, #ffe4e6 100%)',
                border: '1px solid rgba(225, 29, 72, 0.28)',
                iconBg: 'linear-gradient(135deg, #be123c 0%, #e11d48 100%)',
                tagBg: 'rgba(225, 29, 72, 0.1)',
                tagBorder: 'rgba(225, 29, 72, 0.28)',
                tagColor: '#be123c',
                titleColor: '#3d0a16',
                descColor: '#632130',
                accentColor: '#e11d48',
                authority: 'Chamber of Commerce Attested'
              }
            ].map((item, idx) => (
              <div
                key={idx}
                className="luxury-card"
                style={{
                  padding: '30px 26px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '16px',
                  background: item.bg,
                  border: item.border,
                  borderRadius: '20px',
                  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.04)',
                  transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div style={{
                    width: '46px',
                    height: '46px',
                    borderRadius: '12px',
                    background: item.iconBg,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)'
                  }}>
                    {item.icon}
                  </div>
                  <span style={{
                    background: item.tagBg,
                    border: `1px solid ${item.tagBorder}`,
                    borderRadius: '999px',
                    padding: '4px 12px',
                    fontSize: '0.72rem',
                    color: item.tagColor,
                    fontWeight: 700,
                    letterSpacing: '0.06em'
                  }}>
                    {item.code}
                  </span>
                </div>

                <div style={{ flex: 1 }}>
                  <h4 style={{
                    fontSize: '1.25rem',
                    color: item.titleColor,
                    margin: '0 0 10px 0',
                    lineHeight: 1.3,
                    fontWeight: 700
                  }}>
                    {item.title}
                  </h4>
                  <p style={{
                    color: item.descColor,
                    fontSize: '0.9rem',
                    lineHeight: 1.65,
                    margin: 0
                  }}>
                    {item.desc}
                  </p>
                </div>

                <div style={{
                  paddingTop: '16px',
                  borderTop: `1px solid ${item.tagBorder}`,
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  fontSize: '0.78rem'
                }}>
                  <span style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    color: item.titleColor,
                    fontWeight: 600
                  }}>
                    <BadgeCheck size={15} style={{ color: item.accentColor }} />
                    <span>{item.authority}</span>
                  </span>
                  <span style={{
                    color: '#15803d',
                    background: 'rgba(22, 163, 74, 0.12)',
                    padding: '2px 8px',
                    borderRadius: '999px',
                    fontWeight: 700,
                    fontSize: '0.72rem',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '4px'
                  }}>
                    <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: '#16a34a', display: 'inline-block' }} />
                    Active
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* CTA to Products & Contact */}
          <div style={{
            background: 'linear-gradient(135deg, #051611 0%, #014433 100%)',
            color: '#ffffff',
            borderRadius: '24px',
            padding: '40px 44px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '24px',
            border: '1px solid rgba(207, 168, 71, 0.3)',
            boxShadow: 'var(--shadow-xl)'
          }}>
            <div>
              <h3 style={{ color: '#ffffff', fontSize: '1.45rem', marginBottom: '8px' }}>
                Discover Our 9 Specialized Export Product Lines
              </h3>
              <p style={{ color: '#d2e5dd', fontSize: '0.94rem', margin: 0 }}>
                Explore full specifications for apparel, bed sheets, snacks, jackfruit, grains, coconut oil, and spices.
              </p>
            </div>

            <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
              <Link href="/products" className="btn-gold" style={{ padding: '13px 28px' }}>
                <span>View Products Catalog</span>
                <ArrowRight size={16} />
              </Link>
              <Link href="/contact" className="btn-outline" style={{ padding: '13px 26px' }}>
                <span>Contact Office</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
