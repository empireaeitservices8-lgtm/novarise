'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useRFQ } from './RFQContext';
import { Menu, X, FileText, ChevronRight } from 'lucide-react';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const { openQuoteModal } = useRFQ();

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Products', href: '/products' },
    { name: 'Services', href: '/services' },
    { name: 'Contact', href: '/contact' },
  ];

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  return (
    <>
      {/* Main Sticky Navbar */}
      <header style={{
        position: 'sticky',
        top: 0,
        zIndex: 90,
        background: 'rgba(2, 48, 36, 0.94)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        boxShadow: '0 4px 24px rgba(0, 0, 0, 0.3)',
        borderBottom: '1px solid rgba(207, 168, 71, 0.25)'
      }}>
        <div style={{
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '8px 24px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}>
          {/* Brand Logo */}
          <Link href="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
            <div style={{
              position: 'relative',
              height: '66px',
              width: 'auto',
              minWidth: '220px',
              display: 'flex',
              alignItems: 'center'
            }}>
              <Image
                src="/logo-transparent.png"
                alt="Nova Rise Exports Logo"
                width={280}
                height={66}
                style={{
                  height: '62px',
                  width: 'auto',
                  objectFit: 'contain',
                  filter: 'drop-shadow(0 2px 8px rgba(0, 0, 0, 0.35))'
                }}
                priority
              />
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav style={{
            display: 'flex',
            alignItems: 'center',
            gap: '6px'
          }} className="desktop-nav">
            {navLinks.map((item) => {
              const active = isActive(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  style={{
                    color: active ? '#fae297' : 'rgba(240, 248, 244, 0.88)',
                    fontWeight: active ? 600 : 500,
                    fontSize: '0.92rem',
                    padding: '7px 15px',
                    borderRadius: '999px',
                    background: active ? 'rgba(207, 168, 71, 0.12)' : 'transparent',
                    border: active ? '1px solid rgba(207, 168, 71, 0.35)' : '1px solid transparent',
                    boxShadow: active ? '0 2px 10px rgba(0, 0, 0, 0.15)' : 'none',
                    transition: 'all 0.22s cubic-bezier(0.16, 1, 0.3, 1)'
                  }}
                  className="nav-link-hover"
                >
                  {item.name}
                </Link>
              );
            })}
          </nav>

          {/* Right Action Button */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }} className="desktop-nav">
            <button
              onClick={() => openQuoteModal()}
              className="btn-gold"
              style={{
                padding: '9px 20px',
                fontSize: '0.86rem',
                borderRadius: '999px',
                gap: '7px',
                cursor: 'pointer'
              }}
            >
              <FileText size={14} />
              <span>Request RFQ</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
            style={{
              display: 'none',
              color: '#fae297',
              padding: '8px',
              borderRadius: '8px',
              background: 'rgba(207, 168, 71, 0.12)',
              border: '1px solid rgba(207, 168, 71, 0.25)',
              cursor: 'pointer'
            }}
            className="mobile-toggle"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div style={{
            background: 'linear-gradient(180deg, #022a1f 0%, #03140e 100%)',
            borderTop: '1px solid rgba(207, 168, 71, 0.25)',
            padding: '18px 20px',
            display: 'flex',
            flexDirection: 'column',
            gap: '8px',
            boxShadow: '0 16px 36px rgba(0, 0, 0, 0.45)'
          }}>
            {navLinks.map((item) => {
              const active = isActive(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  style={{
                    color: active ? '#fae297' : '#e6f2ec',
                    fontSize: '1rem',
                    fontWeight: active ? 600 : 500,
                    padding: '11px 16px',
                    borderRadius: '10px',
                    background: active ? 'rgba(207, 168, 71, 0.12)' : 'rgba(255, 255, 255, 0.03)',
                    border: active ? '1px solid rgba(207, 168, 71, 0.3)' : '1px solid rgba(255, 255, 255, 0.05)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between'
                  }}
                >
                  <span>{item.name}</span>
                  <ChevronRight size={16} style={{ opacity: active ? 1 : 0.4, color: active ? '#fae297' : 'inherit' }} />
                </Link>
              );
            })}

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                openQuoteModal();
              }}
              className="btn-gold"
              style={{
                width: '100%',
                marginTop: '10px',
                padding: '12px',
                borderRadius: '10px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                fontSize: '0.94rem'
              }}
            >
              <FileText size={16} />
              <span>Request RFQ</span>
            </button>
          </div>
        )}
      </header>

      <style jsx>{`
        @media (max-width: 860px) {
          :global(.desktop-nav) {
            display: none !important;
          }
          :global(.mobile-toggle) {
            display: block !important;
          }
        }
        :global(.nav-link-hover:hover) {
          color: #fae297 !important;
          background: rgba(207, 168, 71, 0.08) !important;
          border-color: rgba(207, 168, 71, 0.25) !important;
        }
      `}</style>
    </>
  );
}
