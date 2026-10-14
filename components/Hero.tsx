'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, MessageCircle } from 'lucide-react';

export default function Hero() {
  const categories = [
    'Garments & Apparel',
    'Bed Sheets & Linens',
    'Clothing Materials',
    'Packed Kerala Snacks',
    'Fresh Jackfruit & Fruits',
    'Cereals & Basmati Rice',
    'Export-Graded Pulses',
    'Pure Virgin Coconut Oil',
    'Malabar Spices',
  ];

  return (
    <section id="home" className="hero-section">
      {/* 1. Cinematic Container Ship & Global Logistics Background */}
      <div className="hero-backdrop-img hero-bg-pan">
        <Image
          src="/images/hero-logistics.jpg"
          alt="Nova Rise Exports Global Shipping Port and Container Logistics"
          fill
          style={{ objectFit: 'cover', objectPosition: 'center' }}
          priority
          quality={90}
        />
      </div>

      {/* 2. Precision Dual Gradients for Readability and Depth */}
      <div className="hero-vignette-overlay" />
      <div className="hero-vertical-overlay" />
      <div className="hero-ambient-glow" />

      {/* 3. Hero Content */}
      <div className="container" style={{ position: 'relative', zIndex: 10, width: '100%' }}>
        <div className="hero-content-wrapper">
          {/* Confident Editorial Serif Headline */}
          <h1 className="hero-heading hero-anim-rise">
            Global Merchant Exporters of <br className="hero-title-break" />
            <span className="hero-gold-accent">Finest Quality Products</span>
          </h1>

          {/* Supporting Text */}
          <p className="hero-subtext hero-anim-rise" style={{ animationDelay: '120ms' }}>
            Established with the vision of delivering premium Indian goods worldwide. 
            Built on unshakeable pillars of <span className="hero-subtext-highlight">trust</span>, <span className="hero-subtext-highlight">reliability</span>, and <span className="hero-subtext-highlight">customer satisfaction</span>.
          </p>

          {/* 9 Product Category Chips with Restrained Gold Details */}
          <div className="hero-chips-container" role="list" aria-label="Product Categories">
            {categories.map((category, idx) => (
              <div
                key={category}
                className="hero-chip hero-chip-anim"
                style={{ animationDelay: `${180 + idx * 40}ms` }}
                role="listitem"
              >
                <span className="hero-chip-dot" aria-hidden="true" />
                <span>{category}</span>
              </div>
            ))}
          </div>

          {/* Action Buttons Row */}
          <div className="hero-actions hero-anim-rise" style={{ animationDelay: '580ms' }}>
            <Link
              href="/products"
              className="hero-btn-catalog"
            >
              <span>View Product Catalog</span>
              <ArrowRight size={16} />
            </Link>

            <a
              href="https://wa.me/918129501405?text=Hello%20Nova%20Rise%20Exports,%20I%20am%20looking%20for%20export%20inquiry."
              target="_blank"
              rel="noopener noreferrer"
              className="hero-btn-whatsapp"
            >
              <MessageCircle size={17} style={{ color: '#25d366' }} />
              <span>Direct WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
