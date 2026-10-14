'use client';

import React from 'react';
import { RFQProvider } from './RFQContext';
import Navbar from './Navbar';
import Footer from './Footer';
import WhatsAppButton from './WhatsAppButton';

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <RFQProvider>
      <Navbar />
      <main>{children}</main>
      <Footer />
      <WhatsAppButton />
    </RFQProvider>
  );
}
