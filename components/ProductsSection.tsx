'use client';

import React, { useState } from 'react';
import Image from 'next/image';

interface ProductItem {
  id: number;
  name: string;
  category: 'textiles' | 'spices_oils' | 'foods_fruits';
  categoryLabel: string;
  image: string;
  description: string;
  features: string[];
  packaging: string;
  origin: string;
}

const productsData: ProductItem[] = [
  {
    id: 1,
    name: 'Readymade Garments',
    category: 'textiles',
    categoryLabel: 'Textiles & Apparel',
    image: '/images/garments-textiles.jpg',
    description: 'Export-grade men\'s, women\'s, and children\'s readymade apparel crafted from premium cotton, blends, and linen with international stitching tolerances.',
    features: ['High-precision stitching', 'Colorfast dyed fabrics', 'Custom sizing & private labeling', 'Pre-shrunk finish'],
    packaging: 'Individual polybag, export master cartons, custom barcode hangtags',
    origin: 'Kannur / Tirupur / South India Mills'
  },
  {
    id: 2,
    name: 'Bed Sheets & Linens',
    category: 'textiles',
    categoryLabel: 'Textiles & Apparel',
    image: '/images/garments-textiles.jpg',
    description: 'Luxury hotel-grade and domestic bed sheets, duvet covers, pillowcases, and bed spreads available in 200 to 600+ thread count pure cotton & satin weaves.',
    features: ['100% combed cotton / percale', 'Fade-resistant reactive printing', 'Single, Queen, King & Custom sizes', 'Breathable & skin-friendly'],
    packaging: 'PVC zippered gift packs, branded cardboard wraps, bulk carton crates',
    origin: 'Kannur Handloom & Powerloom Hubs'
  },
  {
    id: 3,
    name: 'Clothing Materials',
    category: 'textiles',
    categoryLabel: 'Textiles & Apparel',
    image: '/images/garments-textiles.jpg',
    description: 'Unstitched textile fabrics, dress materials, printed cotton rolls, and blended weaves engineered for garment manufacturers and fashion distributors.',
    features: ['Organic & certified cotton', 'Vibrant traditional & modern prints', 'Uniform fabric density (GSM calibrated)', 'Roll & bale packaging'],
    packaging: 'Rolls in moisture-proof HDPE wrap, compressed bales for sea freight',
    origin: 'Kerala & Tamil Nadu Textile Clusters'
  },
  {
    id: 4,
    name: 'Packed Snacks',
    category: 'foods_fruits',
    categoryLabel: 'FMCG & Packed Foods',
    image: '/images/jackfruit-snacks.jpg',
    description: 'World-renowned Kerala banana chips fried in pure coconut oil, spiced tapioca crisps, jackfruit chips, and authentic South Indian savory namkeens.',
    features: ['Crisped in pure coconut oil', 'Zero trans-fat & artificial colors', 'Nitrogen-flushed for extended crunch', 'Authentic traditional recipe'],
    packaging: 'Food-grade multi-layer foil pouches, retail boxes, bulk tin packs',
    origin: 'Kannur & Central Kerala Kitchens'
  },
  {
    id: 5,
    name: 'Fruits (including Jackfruit)',
    category: 'foods_fruits',
    categoryLabel: 'Fresh Produce & Fruits',
    image: '/images/jackfruit-snacks.jpg',
    description: 'Fresh, frozen, and processed tropical Kerala fruits, with special pride in premium indigenous Jackfruit—available as tender raw bulbs, ripe fruit, and dehydrated slices.',
    features: ['Naturally farm-grown, pesticide-monitored', 'High dietary fiber & superfood value', 'Tender raw & ripe sweet varieties', 'Cold-chain ready consignments'],
    packaging: 'Ventilated corrugated CFB fruit boxes, vacuum nitrogen packs, IQF frozen containers',
    origin: 'Direct Kerala Orchard Cooperatives'
  },
  {
    id: 6,
    name: 'Cereals',
    category: 'foods_fruits',
    categoryLabel: 'Grains & Cereals',
    image: '/images/cereals-pulses.jpg',
    description: 'Finest Indian cereal varieties including long-grain aged Basmati rice, non-basmati varieties, traditional Kerala red Palakkadan Matta rice, and nutritious millets.',
    features: ['Aged for maximum aroma & elongation', '100% sortex cleaned & graded', 'Low moisture content (<12%)', 'GMO-free certified batches'],
    packaging: 'Non-woven BOPP bags (5kg, 10kg, 25kg, 50kg), jute sacks',
    origin: 'Select Indian Agricultural Belts'
  },
  {
    id: 7,
    name: 'Pulses',
    category: 'foods_fruits',
    categoryLabel: 'Grains & Pulses',
    image: '/images/cereals-pulses.jpg',
    description: 'High-protein agricultural pulses including yellow toor dal, moong beans, premium chickpeas (kabuli & desi chana), red lentils, and kidney beans.',
    features: ['Machine cleaned & unpolished/polished', 'Uniform grain size calibration', 'Free from foreign matter & stones', 'High nutritional protein retention'],
    packaging: 'PP woven bags, laminated poly pouches, 25kg / 50kg bulk export bags',
    origin: 'Certified Indian Pulse Producers'
  },
  {
    id: 8,
    name: 'Coconut Oil',
    category: 'spices_oils',
    categoryLabel: 'Oils & Extracts',
    image: '/images/spices-coconutoil.jpg',
    description: '100% pure cold-pressed expeller and virgin coconut oil extracted from sun-dried Kerala copra coconuts. Celebrated worldwide for its aroma and purity.',
    features: ['Zero preservatives, 100% chemical-free', 'Rich in Lauric Acid & MCTs', 'Edible grade & premium cosmetic grade', 'FSSAI certified purity'],
    packaging: 'Glass bottles (250ml/500ml/1L), food-grade HDPE jars, bulk 200L drums & IBC totes',
    origin: 'Kannur & Malabar Coastal Coconut Belts'
  },
  {
    id: 9,
    name: 'Spices',
    category: 'spices_oils',
    categoryLabel: 'Malabar Spices',
    image: '/images/spices-coconutoil.jpg',
    description: 'The crowning glory of Malabar—authentic export-grade Tellicherry bold black pepper, aromatic green cardamom (alleppey green extra bold), cloves, turmeric, and ginger.',
    features: ['High volatile oil & piperine content', 'Sun-cured & hand-graded', 'Spices Board of India standards', 'Whole, cracked, or customized ground mesh'],
    packaging: 'Vacuum-sealed aluminum foil bags, multiwall paper sacks, private-label jars',
    origin: 'Wayanad, Idukki & Malabar Spice Hills'
  }
];

interface ProductsSectionProps {
  onOpenQuoteModal: (product?: string) => void;
}

export default function ProductsSection({ onOpenQuoteModal }: ProductsSectionProps) {
  const [filter, setFilter] = useState<'all' | 'textiles' | 'spices_oils' | 'foods_fruits'>('all');

  const filteredProducts = filter === 'all' 
    ? productsData 
    : productsData.filter(p => p.category === filter);

  return (
    <section id="products" className="section" style={{ background: '#f8faf8' }}>
      <div className="container">
        <div className="section-header">
          <div className="section-badge">EXPORT PRODUCT PORTFOLIO</div>
          <h2>Our Specialized Export Categories</h2>
          <p>
            We specialize in exporting a wide range of authenticated Indian goods, carefully graded and packaged to withstand international transit while meeting global standards.
          </p>

          {/* Filter Pills */}
          <div style={{
            display: 'inline-flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '8px',
            marginTop: '28px',
            background: '#ffffff',
            padding: '6px',
            borderRadius: '999px',
            boxShadow: '0 2px 12px rgba(1, 90, 68, 0.08)',
            border: '1px solid var(--border-light)'
          }}>
            {[
              { id: 'all', label: 'All 9 Product Lines' },
              { id: 'textiles', label: 'Textiles, Garments & Linens' },
              { id: 'spices_oils', label: 'Kerala Spices & Coconut Oil' },
              { id: 'foods_fruits', label: 'Snacks, Fruits & Grains' },
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setFilter(tab.id as any)}
                style={{
                  padding: '9px 20px',
                  borderRadius: '999px',
                  fontSize: '0.86rem',
                  fontWeight: 600,
                  transition: 'all 0.25s ease',
                  background: filter === tab.id ? '#015a44' : 'transparent',
                  color: filter === tab.id ? '#ffffff' : '#334e43',
                  boxShadow: filter === tab.id ? '0 4px 12px rgba(1, 90, 68, 0.25)' : 'none'
                }}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Product Cards Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(360px, 1fr))',
          gap: '32px'
        }}>
          {filteredProducts.map((prod) => (
            <div
              key={prod.id}
              style={{
                background: '#ffffff',
                borderRadius: '20px',
                border: '1px solid rgba(1, 90, 68, 0.1)',
                overflow: 'hidden',
                boxShadow: '0 6px 24px rgba(1, 90, 68, 0.05)',
                display: 'flex',
                flexDirection: 'column',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease'
              }}
            >
              {/* Product Visual */}
              <div style={{ position: 'relative', height: '220px', width: '100%', overflow: 'hidden' }}>
                <Image
                  src={prod.image}
                  alt={prod.name}
                  fill
                  style={{ objectFit: 'cover' }}
                />
                <div style={{
                  position: 'absolute',
                  top: '14px',
                  left: '14px',
                  background: 'rgba(1, 90, 68, 0.92)',
                  color: '#ffffff',
                  fontSize: '0.74rem',
                  fontWeight: 700,
                  letterSpacing: '0.04em',
                  padding: '4px 12px',
                  borderRadius: '999px',
                  backdropFilter: 'blur(4px)'
                }}>
                  {prod.categoryLabel}
                </div>
                <div style={{
                  position: 'absolute',
                  bottom: '12px',
                  right: '12px',
                  background: 'rgba(0, 0, 0, 0.7)',
                  color: '#e8c872',
                  fontSize: '0.72rem',
                  fontWeight: 600,
                  padding: '3px 10px',
                  borderRadius: '6px'
                }}>
                  📍 {prod.origin}
                </div>
              </div>

              {/* Product Info */}
              <div style={{ padding: '24px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '8px' }}>
                  <h3 style={{ fontSize: '1.35rem', color: '#015a44', margin: 0 }}>
                    {prod.id}. {prod.name}
                  </h3>
                </div>

                <p style={{ color: '#526b60', fontSize: '0.92rem', lineHeight: 1.55, marginBottom: '18px' }}>
                  {prod.description}
                </p>

                {/* Features Checklist */}
                <div style={{ marginBottom: '16px', background: '#f5f9f7', padding: '12px', borderRadius: '10px' }}>
                  <div style={{ fontSize: '0.78rem', fontWeight: 700, color: '#015a44', marginBottom: '6px', textTransform: 'uppercase' }}>
                    Key Specifications
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '4px' }}>
                    {prod.features.map((feat, i) => (
                      <div key={i} style={{ fontSize: '0.84rem', color: '#334b41', display: 'flex', alignItems: 'center', gap: '6px' }}>
                        <span style={{ color: '#015a44', fontWeight: 700 }}>✓</span> {feat}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Packaging specs */}
                <div style={{ fontSize: '0.82rem', color: '#688075', marginBottom: '22px' }}>
                  <strong style={{ color: '#273c33' }}>Export Packaging:</strong> {prod.packaging}
                </div>

                {/* CTA buttons */}
                <div style={{ marginTop: 'auto', display: 'flex', gap: '10px' }}>
                  <button
                    onClick={() => onOpenQuoteModal(prod.name)}
                    className="btn-primary"
                    style={{
                      flex: 1,
                      padding: '11px 16px',
                      fontSize: '0.88rem'
                    }}
                  >
                    Request Quote
                  </button>

                  <a
                    href={`https://wa.me/918129501405?text=Hello%20Nova%20Rise%20Exports,%20I%20want%20to%20inquire%20about%20${encodeURIComponent(prod.name)}.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-outline-dark"
                    style={{
                      padding: '11px 14px',
                      fontSize: '0.88rem'
                    }}
                    title="Inquire via WhatsApp"
                  >
                    💬
                  </a>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Catalog Banner */}
        <div style={{
          marginTop: '60px',
          background: 'linear-gradient(135deg, #015a44 0%, #004433 100%)',
          color: '#ffffff',
          borderRadius: '20px',
          padding: '36px 40px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '24px'
        }}>
          <div>
            <h3 style={{ color: '#ffffff', fontSize: '1.6rem', marginBottom: '8px' }}>
              Need a Custom Quantity, Grade, or Destination Port Quotation?
            </h3>
            <p style={{ color: '#d4e3dc', fontSize: '0.96rem', maxWidth: '680px' }}>
              We facilitate custom FOB, CIF, or CFR terms worldwide with full export inspection, lab reports, and timely dispatch.
            </p>
          </div>
          <button
            onClick={() => onOpenQuoteModal()}
            className="btn-gold"
            style={{ padding: '14px 30px', whiteSpace: 'nowrap' }}
          >
            Inquire Bulk Consignment →
          </button>
        </div>

      </div>
    </section>
  );
}
