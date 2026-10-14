'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Hero from '@/components/Hero';
import { useRFQ } from '@/components/RFQContext';
import {
  ShieldCheck,
  Handshake,
  Gauge,
  Award,
  ArrowRight,
  Sparkles,
  Sprout,
  Microscope,
  PackageCheck,
  Ship,
  FileText
} from 'lucide-react';

export default function Home() {
  const { openQuoteModal } = useRFQ();

  const productHighlights = [
    {
      title: 'Malabar Spices & Virgin Coconut Oil',
      category: 'Spices & Cold-Pressed Oils',
      image: '/images/malabar-spices.jpg',
      badge: 'Spices Board Certified',
      description: 'Authentic Tellicherry bold black pepper, Alleppey extra bold green cardamom, and 100% pure cold-pressed Kerala copra coconut oil.',
      tags: ['Wayanad & Kannur Origin', 'Export Graded', 'Chemical Free'],
    },
    {
      title: 'Readymade Garments & Linens',
      category: 'Textiles & Apparel',
      image: '/images/readymade-garments.jpg',
      badge: 'Hospitality Grade',
      description: 'Export-grade cotton apparel, luxury 200–600 thread-count bed sheets, and premium unstitched dress materials from South Indian textile mills.',
      tags: ['Pure Combed Cotton', 'Custom Sizing', 'Fade Resistant'],
    },
    {
      title: 'Kerala Snacks & Jackfruit Produce',
      category: 'FMCG & Agro Foods',
      image: '/images/packed-snacks.jpg',
      badge: 'FSSAI Certified',
      description: 'Pure coconut oil-crisped Kerala banana chips, tender raw and ripe sweet jackfruit products, and authentic South Indian savory namkeens.',
      tags: ['Nitrogen Flushed', 'Zero Preservatives', 'APEDA Graded'],
    },
    {
      title: 'Aged Cereals & Export Pulses',
      category: 'Grains & Pulses',
      image: '/images/cereals-grains.jpg',
      badge: 'Optical Sortex Quality',
      description: 'Aged 1121 and Traditional Basmati rice, indigenous Kerala Palakkadan Matta rice, and high-protein machine-cleaned agricultural pulses.',
      tags: ['Low Moisture (<12%)', 'Sortex Cleaned', 'GMO Free'],
    },
  ];

  const serviceHighlights = [
    {
      step: '01',
      title: 'Bespoke Pan-India Sourcing',
      icon: <Sprout size={24} style={{ color: '#fae297' }} />,
      desc: 'Direct procurement from accredited farm cooperatives and certified textile mills across Kerala and South India with transparent pricing and zero middleman markups.',
    },
    {
      step: '02',
      title: 'Rigorous Quality Assurance',
      icon: <Microscope size={24} style={{ color: '#fae297' }} />,
      desc: 'Systematic physical grading, sortex optical sorting, moisture calibration, and batch testing ensuring complete compliance with FSSAI, APEDA, and global standards.',
    },
    {
      step: '03',
      title: 'Custom OEM & Private Labeling',
      icon: <PackageCheck size={24} style={{ color: '#fae297' }} />,
      desc: 'Retail-ready private label branding, nitrogen-flushed barrier pouches, custom barcode hangtags, and heavy-duty seaworthy corrugated master cartons.',
    },
    {
      step: '04',
      title: 'Port Logistics & Global Freight',
      icon: <Ship size={24} style={{ color: '#fae297' }} />,
      desc: 'Strategic shipping execution through Cochin International Sea Port, New Mangalore Port, and Kannur Airport for expedited maritime and air freight dispatch.',
    },
  ];

  return (
    <>
      {/* 1. Hero Section */}
      <Hero />

      {/* 2. Corporate Overview & Foundations */}
      <section className="section" style={{ background: '#ffffff', position: 'relative' }}>
        <div className="container">
          {/* Centered Section Header with Single-Line Heading */}
          <div style={{ textAlign: 'center', maxWidth: '1100px', margin: '0 auto 36px auto' }}>
            <div style={{ display: 'inline-flex', marginBottom: '16px' }}>
              <div className="section-badge">
                <ShieldCheck size={14} style={{ color: '#015a44' }} />
                <span>ABOUT NOVA RISE EXPORTS</span>
              </div>
            </div>

            <h2 style={{ 
              fontSize: 'clamp(1.6rem, 2.6vw, 2.35rem)', 
              color: '#071e17', 
              lineHeight: 1.25, 
              marginBottom: '20px',
              fontWeight: 700
            }}>
              Connecting Global Buyers with India&apos;s Premier Heritage
            </h2>

            <blockquote
              className="luxury-editorial-quote"
              style={{
                maxWidth: '880px',
                margin: '0 auto',
                color: '#123024',
                fontSize: 'clamp(1.18rem, 2vw, 1.38rem)',
                background: 'linear-gradient(135deg, rgba(207, 168, 71, 0.12) 0%, rgba(1, 90, 68, 0.05) 100%)',
                padding: '20px 32px',
                borderRadius: '16px',
                border: '1px solid rgba(207, 168, 71, 0.35)',
                boxShadow: '0 4px 18px rgba(1, 90, 68, 0.06)'
              }}
            >
              &ldquo;Nova Rise Exports is a premier partnership firm established with the vision of providing high quality products to our clients globally. Built on the principles of trust, reliability, and customer satisfaction.&rdquo;
            </blockquote>
          </div>

          {/* 3 Core Pillar Feature Cards (3-Column Layout) */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '26px',
            marginBottom: '40px'
          }}>
            <div className="luxury-card" style={{
              padding: '32px 28px',
              background: 'linear-gradient(135deg, #f7faf8 0%, #edf5f1 100%)',
              display: 'flex',
              flexDirection: 'column',
              gap: '16px'
            }}>
              <div className="icon-badge icon-badge-emerald">
                <Handshake size={24} />
              </div>
              <div>
                <h4 style={{ color: '#015a44', fontSize: '1.2rem', marginBottom: '8px' }}>Trust &amp; Transparency</h4>
                <p style={{ color: '#536d61', fontSize: '0.92rem', margin: 0, lineHeight: 1.65 }}>
                  Clear contract pricing, verified origin authentication, accurate weight manifests, and transparent commercial documentation.
                </p>
              </div>
            </div>

            <div className="luxury-card" style={{
              padding: '32px 28px',
              background: 'linear-gradient(135deg, #fdfbf7 0%, #f7f2e4 100%)',
              borderColor: 'var(--border-gold)',
              display: 'flex',
              flexDirection: 'column',
              gap: '16px'
            }}>
              <div className="icon-badge icon-badge-gold">
                <Gauge size={24} />
              </div>
              <div>
                <h4 style={{ color: '#886714', fontSize: '1.2rem', marginBottom: '8px' }}>Reliability &amp; Precision</h4>
                <p style={{ color: '#536d61', fontSize: '0.92rem', margin: 0, lineHeight: 1.65 }}>
                  Strict shipment timelines, sea-worthy moisture barrier packaging, and uniform pre-dispatch quality grading.
                </p>
              </div>
            </div>

            <div className="luxury-card" style={{
              padding: '32px 28px',
              background: 'linear-gradient(135deg, #f7faf8 0%, #edf5f1 100%)',
              display: 'flex',
              flexDirection: 'column',
              gap: '16px'
            }}>
              <div className="icon-badge icon-badge-emerald">
                <Award size={24} />
              </div>
              <div>
                <h4 style={{ color: '#015a44', fontSize: '1.2rem', marginBottom: '8px' }}>Customer Satisfaction</h4>
                <p style={{ color: '#536d61', fontSize: '0.92rem', margin: 0, lineHeight: 1.65 }}>
                  Dedicated trade support, customized private label packaging, and flexible FOB / CIF export logistics.
                </p>
              </div>
            </div>
          </div>

          {/* Explore Company Profile Button */}
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Link href="/about" className="btn-primary" style={{ padding: '14px 34px', fontSize: '0.98rem' }}>
              <span>Explore Company Profile</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* 3. Attractive Products Brief Section */}
      <section className="section" style={{ background: '#f8faf9', borderTop: '1px solid rgba(1, 90, 68, 0.08)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto 48px auto' }}>
            <div className="section-badge gold">
              <Sparkles size={14} style={{ color: '#cfa847' }} />
              <span>EXPORT PRODUCT PORTFOLIO</span>
            </div>

            <h2 style={{
              fontSize: 'clamp(1.8rem, 3vw, 2.5rem)',
              color: '#071e17',
              marginBottom: '16px',
              lineHeight: 1.25,
              fontWeight: 700
            }}>
              Curated Indian Goods for Global Markets
            </h2>

            <p style={{ color: '#4e665c', fontSize: '1.02rem', lineHeight: 1.7, margin: 0 }}>
              Sourced directly from fertile agrarian belts and heritage weaving centers across Kerala and South India, prepared under rigorous international export specifications.
            </p>
          </div>

          {/* 4 Featured Product Visual Cards */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '26px',
            marginBottom: '46px'
          }}>
            {productHighlights.map((item) => (
              <div key={item.title} className="home-showcase-card">
                <div style={{
                  position: 'relative',
                  width: '100%',
                  height: '210px',
                  overflow: 'hidden',
                  background: '#041711'
                }}>
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    style={{ objectFit: 'cover' }}
                    className="home-card-img"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  />
                </div>

                <div style={{ padding: '24px 22px', display: 'flex', flexDirection: 'column', flex: 1, gap: '12px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '8px' }}>
                    <div style={{
                      fontSize: '0.76rem',
                      textTransform: 'uppercase',
                      color: '#cfa847',
                      fontWeight: 700,
                      letterSpacing: '0.08em'
                    }}>
                      {item.category}
                    </div>
                    <div style={{
                      fontSize: '0.72rem',
                      color: '#015a44',
                      background: 'rgba(1, 90, 68, 0.08)',
                      padding: '3px 10px',
                      borderRadius: '999px',
                      fontWeight: 600,
                      whiteSpace: 'nowrap'
                    }}>
                      {item.badge}
                    </div>
                  </div>

                  <h3 style={{
                    fontSize: '1.2rem',
                    color: '#071e17',
                    lineHeight: 1.35,
                    margin: 0
                  }}>
                    {item.title}
                  </h3>

                  <p style={{
                    color: '#536d61',
                    fontSize: '0.88rem',
                    lineHeight: 1.6,
                    margin: 0,
                    flex: 1
                  }}>
                    {item.description}
                  </p>

                  <div style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '6px',
                    paddingTop: '8px',
                    borderTop: '1px solid rgba(1, 90, 68, 0.08)'
                  }}>
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        style={{
                          background: 'rgba(1, 90, 68, 0.06)',
                          color: '#015a44',
                          fontSize: '0.74rem',
                          fontWeight: 600,
                          padding: '3px 9px',
                          borderRadius: '6px'
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Custom Sourcing Promise Banner */}
          <div style={{
            background: 'linear-gradient(135deg, #051611 0%, #014433 100%)',
            color: '#ffffff',
            borderRadius: '24px',
            padding: '36px 38px',
            border: '1px solid rgba(207, 168, 71, 0.35)',
            boxShadow: 'var(--shadow-lg)',
            marginBottom: '38px',
            position: 'relative',
            overflow: 'hidden'
          }}>
            <div style={{ display: 'inline-flex', marginBottom: '14px' }}>
              <div className="section-badge gold" style={{ marginBottom: 0 }}>
                <Sparkles size={13} style={{ color: '#cfa847' }} />
                <span>CUSTOM SOURCING COMMITMENT</span>
              </div>
            </div>

            <blockquote
              className="luxury-editorial-quote"
              style={{
                borderLeft: '4px solid #cfa847',
                paddingLeft: '22px',
                background: 'linear-gradient(90deg, rgba(207, 168, 71, 0.15) 0%, rgba(207, 168, 71, 0.02) 100%)',
                paddingTop: '16px',
                paddingBottom: '16px',
                borderRadius: '0 12px 12px 0',
                margin: 0
              }}
            >
              &ldquo;We understand that our clients may require beyond our regular offerings. We are committed to procuring and supplying any required products, ensuring timely delivery and competitive pricing.&rdquo;
            </blockquote>
          </div>

          {/* Catalog Link Button */}
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Link
              href="/products"
              className="btn-gold"
              style={{ padding: '14px 34px', fontSize: '0.98rem', borderRadius: '14px' }}
            >
              <span>View Category Catalog</span>
              <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </section>

      {/* 4. Attractive Services Brief Section */}
      <section className="section" style={{
        background: 'linear-gradient(180deg, #051a14 0%, #032118 50%, #051a14 100%)',
        color: '#ffffff',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Ambient Gold Radial Flare */}
        <div style={{
          position: 'absolute',
          top: '-10%',
          right: '5%',
          width: '500px',
          height: '500px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(207, 168, 71, 0.08) 0%, transparent 70%)',
          pointerEvents: 'none'
        }} />

        <div className="container" style={{ position: 'relative', zIndex: 5 }}>
          <div style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto 48px auto' }}>
            <div className="section-badge gold">
              <Ship size={14} style={{ color: '#cfa847' }} />
              <span>END-TO-END EXPORT CAPABILITIES</span>
            </div>

            <h2 style={{
              fontSize: 'clamp(1.8rem, 3vw, 2.5rem)',
              color: '#ffffff',
              marginBottom: '16px',
              lineHeight: 1.25,
              fontWeight: 700
            }}>
              How We Deliver Global Trade Excellence
            </h2>

            <p style={{ color: '#bcd3c9', fontSize: '1.02rem', lineHeight: 1.7, margin: 0 }}>
              From bespoke origin procurement and accredited lab grading to seaworthy packaging and maritime freight clearance, we manage the entire export journey.
            </p>
          </div>

          {/* 4 Core Export Capability Cards */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(270px, 1fr))',
            gap: '24px',
            marginBottom: '42px'
          }}>
            {serviceHighlights.map((svc) => (
              <div key={svc.title} className="home-service-card">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div className="icon-badge icon-badge-emerald" style={{ border: '1px solid rgba(207, 168, 71, 0.4)' }}>
                    {svc.icon}
                  </div>
                  <span style={{
                    fontSize: '1.4rem',
                    fontFamily: 'Cinzel, serif',
                    fontWeight: 700,
                    color: 'rgba(207, 168, 71, 0.45)'
                  }}>
                    {svc.step}
                  </span>
                </div>

                <div>
                  <h3 style={{
                    fontSize: '1.18rem',
                    color: '#ffffff',
                    margin: 0,
                    lineHeight: 1.35
                  }}>
                    {svc.title}
                  </h3>
                </div>

                <p style={{
                  color: '#9dbbb0',
                  fontSize: '0.88rem',
                  lineHeight: 1.65,
                  margin: 0
                }}>
                  {svc.desc}
                </p>
              </div>
            ))}
          </div>


          {/* Action Button Row */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '16px'
          }}>
            <Link
              href="/services"
              className="btn-gold"
              style={{ padding: '14px 32px', fontSize: '0.98rem', borderRadius: '14px' }}
            >
              <span>Explore All Export Services</span>
              <ArrowRight size={17} />
            </Link>

            <button
              onClick={() => openQuoteModal()}
              className="btn-outline"
              style={{
                padding: '14px 28px',
                fontSize: '0.98rem',
                borderRadius: '14px',
                borderColor: 'rgba(207, 168, 71, 0.45)',
                color: '#ffffff'
              }}
            >
              <FileText size={17} style={{ color: '#cfa847' }} />
              <span>Request Quotation / RFQ</span>
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
