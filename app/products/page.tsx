'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRFQ } from '@/components/RFQContext';
import { 
  MapPin, 
  CheckCircle2, 
  MessageCircle, 
  FileText, 
  Sparkles, 
  ArrowRight, 
  Layers, 
  ShieldCheck,
  Search
} from 'lucide-react';

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
  grade: string;
}

const productsData: ProductItem[] = [
  {
    id: 1,
    name: 'Readymade Garments',
    category: 'textiles',
    categoryLabel: 'Textiles & Apparel',
    image: '/images/readymade-garments.jpg',
    description: 'Export-grade men\'s, women\'s, and children\'s readymade apparel crafted from premium cotton, blended textiles, and linen with international stitching tolerances.',
    features: ['High-precision lockstitch seams', 'Colorfast reactive dyed fabrics', 'Custom sizing & private labeling', 'Pre-shrunk, soft-feel finish'],
    packaging: 'Individual polybags, export master cartons, custom barcode hangtags',
    origin: 'Kannur / Tirupur / South India Textile Mills',
    grade: 'Commercial & Retail Grade'
  },
  {
    id: 2,
    name: 'Bed Sheets & Linens',
    category: 'textiles',
    categoryLabel: 'Textiles & Linens',
    image: '/images/bed-sheets-linen.jpg',
    description: 'Luxury hospitality-grade and domestic bed sheets, duvet covers, pillowcases, and bed spreads available in 200 to 600+ thread count pure combed cotton & satin weaves.',
    features: ['100% combed cotton / percale weave', 'Fade-resistant reactive printing', 'Single, Double, Queen, King & Custom sizes', 'Breathable & skin-friendly'],
    packaging: 'PVC zippered gift packs, branded cardboard wraps, bulk carton crates',
    origin: 'Kannur Handloom & Powerloom Clusters',
    grade: 'Luxury & Hospitality Grade'
  },
  {
    id: 3,
    name: 'Clothing Materials',
    category: 'textiles',
    categoryLabel: 'Textiles & Fabrics',
    image: '/images/clothing-materials.jpg',
    description: 'Unstitched textile fabrics, dress materials, printed cotton rolls, and blended weaves engineered for overseas garment manufacturers and fashion distributors.',
    features: ['Organic & certified cotton options', 'Vibrant traditional & contemporary prints', 'Uniform fabric density (GSM calibrated)', 'Roll & bale packaging'],
    packaging: 'Rolls in moisture-proof HDPE wrap, compressed bales for ocean freight',
    origin: 'Kerala & South India Weaving Belts',
    grade: 'Industrial & Wholesale Grade'
  },
  {
    id: 4,
    name: 'Packed Snacks',
    category: 'foods_fruits',
    categoryLabel: 'FMCG & Packed Foods',
    image: '/images/packed-snacks.jpg',
    description: 'World-renowned Kerala banana chips fried exclusively in pure coconut oil, spiced tapioca crisps, ripe jackfruit chips, and authentic South Indian savory namkeens.',
    features: ['Crisped in 100% pure coconut oil', 'Zero trans-fat & zero artificial preservatives', 'Nitrogen-flushed multi-layer pouches for maximum shelf-life', 'Authentic traditional recipe'],
    packaging: 'Food-grade multi-layer nitrogen foil pouches, display boxes, bulk tins',
    origin: 'Kannur & Central Kerala Kitchens',
    grade: 'FSSAI Certified Food Grade'
  },
  {
    id: 5,
    name: 'Fruits (including Jackfruit)',
    category: 'foods_fruits',
    categoryLabel: 'Fresh Produce & Fruits',
    image: '/images/fruits-jackfruit.jpg',
    description: 'Fresh, frozen, and processed tropical Kerala fruits, with special pride in premium indigenous Jackfruit—available as tender raw bulbs, ripe sweet fruit, and dehydrated flakes.',
    features: ['Naturally farm-grown, pesticide-monitored', 'High dietary fiber & superfood nutritional profile', 'Tender raw & ripe sweet varieties', 'Cold-chain ready consignments'],
    packaging: 'Ventilated corrugated CFB fruit boxes, vacuum nitrogen packs, IQF frozen containers',
    origin: 'Direct Kerala Orchard Cooperatives',
    grade: 'APEDA Export Standard'
  },
  {
    id: 6,
    name: 'Cereals',
    category: 'foods_fruits',
    categoryLabel: 'Grains & Cereals',
    image: '/images/cereals-grains.jpg',
    description: 'Finest Indian cereal varieties including 1121 and Traditional aged Basmati rice, non-basmati long grains, nutrient-dense Kerala red Palakkadan Matta rice, and nutritious millets.',
    features: ['Aged for maximum culinary elongation', '100% sortex optically cleaned & graded', 'Low moisture content (<12%)', 'GMO-free certified batches'],
    packaging: 'Non-woven BOPP bags (5kg, 10kg, 25kg, 50kg), seaworthy jute sacks',
    origin: 'Select Indian Agricultural Belts',
    grade: 'Export Graded Sortex Quality'
  },
  {
    id: 7,
    name: 'Pulses',
    category: 'foods_fruits',
    categoryLabel: 'Grains & Pulses',
    image: '/images/pulses-lentils.jpg',
    description: 'High-protein agricultural pulses including yellow toor dal, whole and split moong beans, premium chickpeas (kabuli & desi chana), red lentils, and kidney beans.',
    features: ['Machine cleaned, unpolished/polished options', 'Uniform grain size calibration', 'Free from foreign matter, stones & insects', 'High nutritional protein retention'],
    packaging: 'PP woven bags, laminated moisture-barrier poly pouches, 25kg / 50kg bulk export bags',
    origin: 'Certified Indian Pulse Producers',
    grade: 'Sortex Cleaned Export Grade'
  },
  {
    id: 8,
    name: 'Coconut Oil',
    category: 'spices_oils',
    categoryLabel: 'Oils & Extracts',
    image: '/images/coconut-oil.jpg',
    description: '100% pure cold-pressed expeller and virgin coconut oil extracted from sun-dried Kerala copra coconuts. Renowned globally for its culinary aroma, crystal clarity, and purity.',
    features: ['Zero preservatives, 100% chemical-free', 'Rich in Lauric Acid & medium-chain triglycerides (MCTs)', 'Edible grade & premium cosmetic grade', 'FSSAI certified purity'],
    packaging: 'Glass bottles (250ml/500ml/1L), food-grade HDPE jars, bulk 200L drums & IBC totes',
    origin: 'Kannur & Malabar Coastal Coconut Belts',
    grade: 'Pure Cold Pressed / Extra Virgin'
  },
  {
    id: 9,
    name: 'Spices',
    category: 'spices_oils',
    categoryLabel: 'Malabar Spices',
    image: '/images/malabar-spices.jpg',
    description: 'The historic crowning glory of Malabar—authentic export-grade Tellicherry bold black pepper, aromatic Alleppey green extra bold cardamom, cloves, turmeric, and ginger.',
    features: ['High volatile oil & piperine content', 'Sun-cured & hand-graded', 'Spices Board of India standards', 'Whole, cracked, or customized ground mesh'],
    packaging: 'Vacuum-sealed aluminum foil bags, multiwall paper sacks, private-label jars',
    origin: 'Wayanad, Idukki & Malabar Spice Hills',
    grade: 'Spices Board Certified Export Grade'
  }
];

export default function ProductsPage() {
  const [filter, setFilter] = useState<'all' | 'textiles' | 'spices_oils' | 'foods_fruits'>('all');
  const { openQuoteModal } = useRFQ();

  const filteredProducts = filter === 'all'
    ? productsData
    : productsData.filter(p => p.category === filter);

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
            <Layers size={14} style={{ color: '#cfa847' }} />
            <span>EXPORT PRODUCT CATALOG</span>
          </div>
          <h1 style={{
            fontSize: 'clamp(2.2rem, 4.2vw, 3.5rem)',
            color: '#ffffff',
            lineHeight: 1.2,
            marginBottom: '18px',
            maxWidth: '860px'
          }}>
            Our 9 Specialized <span className="text-gradient-gold">Export Categories</span>
          </h1>
          <p style={{
            fontSize: 'clamp(1rem, 1.6vw, 1.18rem)',
            color: '#d5e6df',
            maxWidth: '740px',
            lineHeight: 1.7,
            margin: 0
          }}>
            Carefully harvested, manufactured, and graded to withstand long-haul international shipping. Available in retail packs, private-label branding, or full container loads (FCL / LCL).
          </p>
        </div>
      </section>

      {/* 2. Interactive Filter Tabs & Products Grid */}
      <section className="section" style={{ background: '#f8faf8' }}>
        <div className="container">
          {/* Filter Pills */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            marginBottom: '48px'
          }}>
            <div style={{
              display: 'inline-flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: '8px',
              background: '#ffffff',
              padding: '6px',
              borderRadius: '999px',
              boxShadow: 'var(--shadow-sm)',
              border: '1px solid var(--border-light)'
            }}>
              {[
                { id: 'all', label: 'All 9 Categories' },
                { id: 'textiles', label: 'Textiles, Garments & Linens' },
                { id: 'foods_fruits', label: 'Snacks, Fruits & Grains' },
                { id: 'spices_oils', label: 'Kerala Spices & Coconut Oil' },
              ].map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setFilter(tab.id as any)}
                  style={{
                    padding: '10px 24px',
                    borderRadius: '999px',
                    fontSize: '0.88rem',
                    fontWeight: 600,
                    transition: 'all 0.22s ease',
                    background: filter === tab.id ? 'linear-gradient(135deg, #015a44 0%, #004332 100%)' : 'transparent',
                    color: filter === tab.id ? '#ffffff' : '#334e43',
                    boxShadow: filter === tab.id ? '0 4px 14px rgba(1, 90, 68, 0.25)' : 'none'
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
                className="luxury-card"
                style={{
                  display: 'flex',
                  flexDirection: 'column'
                }}
              >
                {/* Visual Header - Pure Image Without Any Overlaid Text */}
                <div style={{ position: 'relative', height: '230px', width: '100%', overflow: 'hidden' }}>
                  <Image
                    src={prod.image}
                    alt={prod.name}
                    fill
                    style={{ objectFit: 'cover' }}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>

                {/* Content */}
                <div style={{ padding: '24px 26px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                  {/* Category & Origin Meta Pills */}
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px', gap: '8px', flexWrap: 'wrap' }}>
                    <span style={{
                      background: 'rgba(1, 90, 68, 0.08)',
                      color: '#015a44',
                      fontSize: '0.74rem',
                      fontWeight: 700,
                      letterSpacing: '0.04em',
                      padding: '4px 10px',
                      borderRadius: '6px',
                      textTransform: 'uppercase'
                    }}>
                      {prod.categoryLabel}
                    </span>
                    <span style={{
                      fontSize: '0.74rem',
                      color: '#657e74',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '4px'
                    }}>
                      <MapPin size={12} style={{ color: '#cfa847' }} />
                      <span>{prod.origin.split('/')[0]}</span>
                    </span>
                  </div>

                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '8px' }}>
                    <h3 style={{ fontSize: '1.35rem', color: '#015a44', margin: 0 }}>
                      {prod.id}. {prod.name}
                    </h3>
                  </div>

                  <div style={{
                    fontSize: '0.78rem',
                    color: '#a88229',
                    fontWeight: 700,
                    marginBottom: '12px',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '5px'
                  }}>
                    <ShieldCheck size={13} style={{ color: '#cfa847' }} />
                    <span>GRADE: {prod.grade}</span>
                  </div>

                  <p style={{ color: '#526b60', fontSize: '0.92rem', lineHeight: 1.6, marginBottom: '20px' }}>
                    {prod.description}
                  </p>

                  {/* Features Checklist */}
                  <div style={{
                    marginBottom: '18px',
                    background: 'linear-gradient(135deg, #f7faf8 0%, #edf5f1 100%)',
                    padding: '14px 16px',
                    borderRadius: '12px',
                    border: '1px solid rgba(1, 90, 68, 0.08)'
                  }}>
                    <div style={{ fontSize: '0.76rem', fontWeight: 700, color: '#015a44', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                      Key Specifications
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '6px' }}>
                      {prod.features.map((feat, i) => (
                        <div key={i} style={{ fontSize: '0.84rem', color: '#334b41', display: 'flex', alignItems: 'center', gap: '8px' }}>
                          <CheckCircle2 size={13} style={{ color: '#015a44', flexShrink: 0 }} />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Packaging specs */}
                  <div style={{ fontSize: '0.82rem', color: '#688075', marginBottom: '22px' }}>
                    <strong style={{ color: '#1a3327' }}>Export Packaging:</strong> {prod.packaging}
                  </div>

                  {/* CTA buttons */}
                  <div style={{ marginTop: 'auto', display: 'flex', gap: '10px' }}>
                    <button
                      onClick={() => openQuoteModal(prod.name)}
                      className="btn-primary"
                      style={{
                        flex: 1,
                        padding: '12px 18px',
                        fontSize: '0.88rem',
                        justifyContent: 'center',
                        gap: '6px'
                      }}
                    >
                      <FileText size={15} />
                      <span>Request Quote</span>
                    </button>

                    <a
                      href={`https://wa.me/918129501405?text=Hello%20Nova%20Rise%20Exports,%20I%20want%20to%20inquire%20about%20${encodeURIComponent(prod.name)}.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-outline-dark"
                      style={{
                        padding: '12px 16px',
                        fontSize: '0.88rem',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}
                      title="Inquire via WhatsApp"
                    >
                      <MessageCircle size={17} style={{ color: '#25d366' }} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* 3. Bespoke Procurement Banner */}
          <div style={{
            marginTop: '64px',
            background: 'linear-gradient(135deg, #051611 0%, #014433 100%)',
            color: '#ffffff',
            borderRadius: '26px',
            padding: '52px 44px',
            boxShadow: 'var(--shadow-xl)',
            border: '1px solid rgba(207, 168, 71, 0.35)',
            position: 'relative',
            overflow: 'hidden'
          }}>
            <div style={{ maxWidth: '840px', position: 'relative', zIndex: 2 }}>
              <div className="section-badge gold" style={{ marginBottom: '16px' }}>
                <Sparkles size={13} style={{ color: '#cfa847' }} />
                <span>CUSTOM PROCUREMENT PROMISE</span>
              </div>

              <h2 style={{ color: '#ffffff', fontSize: 'clamp(1.8rem, 3.2vw, 2.4rem)', marginBottom: '18px' }}>
                Need a Commodity Beyond Our Regular Catalog?
              </h2>

              <blockquote
                className="luxury-editorial-quote"
                style={{
                  marginBottom: '22px',
                  borderLeft: '4px solid #cfa847',
                  paddingLeft: '22px',
                  background: 'linear-gradient(90deg, rgba(207, 168, 71, 0.15) 0%, rgba(207, 168, 71, 0.02) 100%)',
                  paddingTop: '16px',
                  paddingBottom: '16px',
                  borderRadius: '0 14px 14px 0',
                  boxShadow: 'inset 0 1px 0 rgba(207, 168, 71, 0.2)'
                }}
              >
                &ldquo;We understand that our clients may require beyond our regular offerings. We are committed to procuring and supplying any required products, ensuring timely delivery and competitive pricing.&rdquo;
              </blockquote>

              <p style={{ color: '#d2e5dd', fontSize: '0.98rem', lineHeight: 1.7, marginBottom: '30px' }}>
                Whether you require specialized grade spices, specific count textile materials, organic commodities, or unique agricultural goods, Nova Rise Exports acts as your dedicated on-ground procurement arm in India.
              </p>

              <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
                <Link href="/contact" className="btn-gold" style={{ padding: '14px 32px' }}>
                  <span>Submit Custom Sourcing Request</span>
                  <ArrowRight size={16} />
                </Link>
                <button
                  onClick={() => openQuoteModal('Bespoke Procurement')}
                  className="btn-outline"
                  style={{ padding: '14px 28px' }}
                >
                  <FileText size={16} />
                  <span>Request Bulk RFQ</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
