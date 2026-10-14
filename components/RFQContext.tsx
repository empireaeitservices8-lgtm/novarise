'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';
import RFQModal from './RFQModal';

interface RFQContextType {
  openQuoteModal: (product?: string) => void;
  closeQuoteModal: () => void;
  isQuoteModalOpen: boolean;
  selectedProduct?: string;
}

const RFQContext = createContext<RFQContextType | undefined>(undefined);

export function RFQProvider({ children }: { children: ReactNode }) {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<string | undefined>(undefined);

  const openQuoteModal = (product?: string) => {
    setSelectedProduct(product);
    setIsQuoteModalOpen(true);
  };

  const closeQuoteModal = () => {
    setIsQuoteModalOpen(false);
  };

  return (
    <RFQContext.Provider value={{ openQuoteModal, closeQuoteModal, isQuoteModalOpen, selectedProduct }}>
      {children}
      <RFQModal
        isOpen={isQuoteModalOpen}
        initialProduct={selectedProduct}
        onClose={closeQuoteModal}
      />
    </RFQContext.Provider>
  );
}

export function useRFQ() {
  const context = useContext(RFQContext);
  if (!context) {
    throw new Error('useRFQ must be used within an RFQProvider');
  }
  return context;
}
