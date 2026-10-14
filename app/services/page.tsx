import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { 
  Sprout, 
  Microscope, 
  PackageCheck, 
  FileCheck2, 
  Ship, 
  Plane, 
  Anchor, 
  CheckCircle2, 
  ArrowRight, 
  MessageCircle, 
  Sparkles,
  Globe2,
  ShieldCheck
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Export Services & Custom Sourcing | Nova Rise Exports',
  description: 'Comprehensive end-to-end export solutions by Nova Rise Exports: bespoke commodity procurement, quality assurance, private label packaging, and international shipping clearance.',
};

export default function ServicesPage() {
  const exportServices = [
    {
      step: '01',
      title: 'Bespoke Sourcing & Procurement',
      subtitle: 'PAN-INDIA PROCUREMENT NETWORK',
      icon: <Sprout size={24} />,
      desc: 'Going beyond our standard catalog to procure any specialized Indian commodity requested by overseas clients. From regional spices to specialized textile weaves, we source directly from accredited growers and industrial mills with transparent pricing.',
      features: [
        'Direct farm & cooperative sourcing across Kerala and India',
        'Transparent wholesale pricing with no intermediary markups',
        'Unconditional procurement promise for unlisted goods',
        'Consignment volume aggregation for small & large orders'
      ]
    },
    {
      step: '02',
      title: 'Quality Assurance & Lab Testing',
      subtitle: 'RIGOROUS EXPORT QUALITY CONTROL',
      icon: <Microscope size={24} />,
      desc: 'Zero tolerance for substandard quality. Every consignment undergoes systematic physical grading, sortex optical sorting, moisture content analysis, and accredited laboratory testing prior to packing.',
      features: [
        'Physical sample dispatch via courier prior to volume order',
        'Moisture, volatile oil, and grain size grading',
        'Food safety & pesticide residue compliance (FSSAI / APEDA)',
        'Detailed batch inspection certificates with every shipment'
      ]
    },
    {
      step: '03',
      title: 'Custom Packaging & Private Labeling',
      subtitle: 'OEM & WHITE-LABEL PACKAGING',
      icon: <PackageCheck size={24} />,
      desc: 'Tailored export packaging built for durability at sea and retail appeal on overseas shelves. We offer full private-label OEM packaging, branded cartons, custom barcode hangtags, and moisture barrier protection.',
      features: [
        'Nitrogen-flushed foil pouches for chips & agro snacks',
        'Seaworthy corrugated master cartons & palletization',
        'Retail packaging with your branding, logos & translations',
        'Bulk drums (200L), HDPE containers, and woven PP export sacks'
      ]
    },
    {
      step: '04',
      title: 'Export Documentation & Compliance',
      subtitle: 'STATUTORY REGULATORY CLEARANCES',
      icon: <FileCheck2 size={24} />,
      desc: 'Flawless regulatory paperwork for swift customs clearance across GCC, European, UK, US, and Asian ports. We manage all Indian statutory documentation under our authorized DGFT IEC license.',
      features: [
        'Chamber of Commerce Certificate of Origin attestation',
        'Mandatory Phytosanitary inspection & plant quarantine clearance',
        'Commercial invoices, packing lists, and shipping bills',
        'Container fumigation certificates & bill of lading dispatch'
      ]
    },
    {
      step: '05',
      title: 'Port Logistics & Global Freight',
      subtitle: 'FOB, CIF, CFR OCEAN & AIR FREIGHT',
      icon: <Ship size={24} />,
      desc: 'Strategic shipping execution utilizing Kerala\'s prime gateways. We operate through Cochin International Sea Port, New Mangalore Port, and Kannur International Airport (CNN) for rapid cargo dispatch.',
      features: [
        'Flexible Incoterms: FOB, CIF, CFR, and EXW',
        'Full Container Load (20ft / 40ft FCL) and Less than Container (LCL)',
        'Container stuffing inspection and seal verification',
        'Real-time shipment tracking and maritime vessel coordination'
      ]
    }
  ];

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
            <span>END-TO-END TRADE SERVICES</span>
          </div>
          <h1 style={{
            fontSize: 'clamp(2.2rem, 4.2vw, 3.5rem)',
            color: '#ffffff',
            lineHeight: 1.2,
            marginBottom: '18px',
            maxWidth: '860px'
          }}>
            Global Export &amp; <span className="text-gradient-gold">Custom Sourcing Services</span>
          </h1>
          <p style={{
            fontSize: 'clamp(1rem, 1.6vw, 1.18rem)',
            color: '#d5e6df',
            maxWidth: '740px',
            lineHeight: 1.7,
            margin: 0
          }}>
            From bespoke commodity sourcing across India to lab quality inspection, custom private labeling, and port clearance, we serve as your trusted, boots-on-the-ground export arm.
          </p>
        </div>
      </section>

      {/* 2. Procurement Promise Quote Banner */}
      <section style={{ background: '#ffffff', padding: '64px 0 36px 0' }}>
        <div className="container">
          <div style={{
            background: 'linear-gradient(135deg, #051611 0%, #014433 100%)',
            color: '#ffffff',
            borderRadius: '26px',
            padding: '48px 44px',
            boxShadow: 'var(--shadow-xl)',
            border: '1px solid rgba(207, 168, 71, 0.35)',
            position: 'relative',
            overflow: 'hidden'
          }}>
            <div style={{ maxWidth: '840px', position: 'relative', zIndex: 2 }}>
              <div className="section-badge gold" style={{ marginBottom: '16px' }}>
                <Sparkles size={13} style={{ color: '#cfa847' }} />
                <span>OUR UNCONDITIONAL PROCUREMENT PROMISE</span>
              </div>

              <blockquote style={{
                fontSize: 'clamp(1.2rem, 2.4vw, 1.45rem)',
                lineHeight: 1.65,
                fontFamily: 'Cinzel, serif',
                color: '#ffffff',
                marginBottom: '18px',
                borderLeft: '4px solid #cfa847',
                paddingLeft: '22px'
              }}>
                &ldquo;We understand that our clients may require beyond our regular offerings. We are committed to procuring and supplying any required products, ensuring timely delivery and competitive pricing.&rdquo;
              </blockquote>

              <p style={{ color: '#d2e5dd', fontSize: '0.98rem', lineHeight: 1.7, margin: 0 }}>
                Overseas buyers frequently require tailored commodities that extend past standard catalogs. Nova Rise Exports connects directly with regional agricultural belts, state cooperatives, and manufacturing mills across Kerala and India to deliver to your exact specifications.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Comprehensive Services Grid */}
      <section className="section" style={{ background: '#ffffff' }}>
        <div className="container">
          <div className="section-header">
            <div className="section-badge">
              <ShieldCheck size={14} style={{ color: '#015a44' }} />
              <span>SERVICE CAPABILITIES</span>
            </div>
            <h2>What We Do for Global Importers</h2>
            <p>
              A seamless, five-stage export lifecycle designed to de-risk overseas trade and guarantee consignment excellence.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
            {exportServices.map((service, idx) => (
              <div
                key={idx}
                className="luxury-card"
                style={{
                  padding: '38px',
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                  gap: '36px',
                  alignItems: 'center'
                }}
              >
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '14px' }}>
                    <div className="icon-badge icon-badge-emerald">
                      {service.icon}
                    </div>
                    <div>
                      <div style={{ fontSize: '0.74rem', fontWeight: 700, color: '#a88229', letterSpacing: '0.06em' }}>
                        {service.subtitle}
                      </div>
                      <div style={{ fontSize: '0.85rem', color: '#6a8276', fontWeight: 600 }}>
                        STAGE {service.step}
                      </div>
                    </div>
                  </div>

                  <h3 style={{ fontSize: '1.5rem', color: '#015a44', marginBottom: '12px' }}>
                    {service.title}
                  </h3>

                  <p style={{ color: '#506a5e', fontSize: '0.94rem', lineHeight: 1.65, margin: 0 }}>
                    {service.desc}
                  </p>
                </div>

                <div style={{
                  background: 'linear-gradient(135deg, #f7faf8 0%, #edf5f1 100%)',
                  borderRadius: '16px',
                  padding: '26px',
                  border: '1px solid rgba(1, 90, 68, 0.08)'
                }}>
                  <div style={{ fontSize: '0.8rem', fontWeight: 700, color: '#015a44', textTransform: 'uppercase', marginBottom: '14px', letterSpacing: '0.04em' }}>
                    Core Service Highlights:
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    {service.features.map((feat, i) => (
                      <div key={i} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start', fontSize: '0.9rem', color: '#374f44' }}>
                        <CheckCircle2 size={15} style={{ color: '#015a44', flexShrink: 0, marginTop: '2px' }} />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Logistics Gateways & Port Access */}
      <section className="section" style={{ background: '#f8faf8' }}>
        <div className="container">
          <div className="section-header">
            <div className="section-badge gold">
              <Anchor size={14} style={{ color: '#cfa847' }} />
              <span>STRATEGIC DISPATCH HUBS</span>
            </div>
            <h2>Air &amp; Sea Port Gateways from Kerala</h2>
            <p>Direct connectivity to prime maritime routes linking the Arabian Gulf, Europe, Southeast Asia, and the Americas.</p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '26px',
            marginBottom: '52px'
          }}>
            <div className="luxury-card" style={{ padding: '32px' }}>
              <div className="icon-badge icon-badge-gold" style={{ marginBottom: '16px' }}>
                <Anchor size={24} />
              </div>
              <h4 style={{ fontSize: '1.25rem', color: '#015a44', marginBottom: '6px' }}>Cochin Sea Port (COK)</h4>
              <div style={{ fontSize: '0.78rem', color: '#a88229', fontWeight: 700, marginBottom: '10px' }}>INTERNATIONAL CONTAINER TRANSSHIPMENT</div>
              <p style={{ color: '#556f63', fontSize: '0.9rem', lineHeight: 1.6, margin: 0 }}>
                Vallarpadam ICTT terminal handling deep-draft container vessels directly connecting Jebel Ali, Singapore, Colombo, and European hubs.
              </p>
            </div>

            <div className="luxury-card" style={{ padding: '32px' }}>
              <div className="icon-badge icon-badge-emerald" style={{ marginBottom: '16px' }}>
                <Ship size={24} />
              </div>
              <h4 style={{ fontSize: '1.25rem', color: '#015a44', marginBottom: '6px' }}>New Mangalore Port (NMPT)</h4>
              <div style={{ fontSize: '0.78rem', color: '#a88229', fontWeight: 700, marginBottom: '10px' }}>PROXIMITY CORRIDOR (~140 KM)</div>
              <p style={{ color: '#556f63', fontSize: '0.9rem', lineHeight: 1.6, margin: 0 }}>
                Rapid sea freight route along the Konkan coast ideal for bulk agricultural produce, spices, and non-perishables.
              </p>
            </div>

            <div className="luxury-card" style={{ padding: '32px' }}>
              <div className="icon-badge icon-badge-gold" style={{ marginBottom: '16px' }}>
                <Plane size={24} />
              </div>
              <h4 style={{ fontSize: '1.25rem', color: '#015a44', marginBottom: '6px' }}>Kannur Int&apos;l Airport (CNN)</h4>
              <div style={{ fontSize: '0.78rem', color: '#a88229', fontWeight: 700, marginBottom: '10px' }}>LOCAL AIR CARGO TERMINAL (~25 KM)</div>
              <p style={{ color: '#556f63', fontSize: '0.9rem', lineHeight: 1.6, margin: 0 }}>
                Direct air cargo connections to Gulf destinations (Dubai, Doha, Riyadh, Kuwait) for perishable fruits, jackfruit, and urgent samples.
              </p>
            </div>
          </div>

          {/* CTA Banner */}
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
                Need a Custom Sourcing Solution or Freight Quote?
              </h3>
              <p style={{ color: '#d2e5dd', fontSize: '0.94rem', margin: 0 }}>
                Speak with our governing partners regarding consignment volumes, Incoterms, and schedules.
              </p>
            </div>

            <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
              <Link href="/contact" className="btn-gold" style={{ padding: '13px 28px' }}>
                <span>Submit Sourcing Request</span>
                <ArrowRight size={16} />
              </Link>
              <a
                href="https://wa.me/918129501405?text=Hello%20Nova%20Rise%20Exports,%20I%20have%20an%20export%20service%20inquiry."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline"
                style={{ 
                  padding: '13px 24px',
                  background: 'rgba(37, 211, 102, 0.16)',
                  borderColor: 'rgba(37, 211, 102, 0.45)'
                }}
              >
                <MessageCircle size={16} style={{ color: '#25d366' }} />
                <span>WhatsApp Trade Desk</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
