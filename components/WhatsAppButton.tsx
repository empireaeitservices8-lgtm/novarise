'use client';

import React from 'react';
import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
  return (
    <aside
      aria-label="Direct WhatsApp Contact"
      className="whatsapp-float-container"
    >
      <a
        href="https://wa.me/918129501405?text=Hello%20Nova%20Rise%20Exports,%20I%20am%20interested%20in%20discussing%20an%20export%20consignment."
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-float-btn"
        aria-label="Chat with Nova Rise Exports on WhatsApp"
      >
        <MessageCircle size={20} className="whatsapp-icon" />
        <span className="whatsapp-text">Chat on WhatsApp</span>
      </a>

      <style jsx>{`
        .whatsapp-float-container {
          position: fixed;
          bottom: 24px;
          right: 24px;
          z-index: 99;
          display: flex;
          align-items: center;
        }

        .whatsapp-float-btn {
          background: linear-gradient(135deg, #25d366 0%, #1ea952 100%);
          color: #ffffff;
          border-radius: 999px;
          padding: 10px 20px;
          display: inline-flex;
          align-items: center;
          gap: 9px;
          box-shadow: 0 6px 20px rgba(37, 211, 102, 0.38), 0 2px 6px rgba(0, 0, 0, 0.2);
          font-weight: 600;
          font-size: 0.88rem;
          letter-spacing: 0.01em;
          transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
          text-decoration: none;
          border: 1px solid rgba(255, 255, 255, 0.3);
        }

        .whatsapp-float-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 28px rgba(37, 211, 102, 0.55), 0 3px 8px rgba(0, 0, 0, 0.25);
          background: linear-gradient(135deg, #2de06e 0%, #20b85a 100%);
          color: #ffffff;
        }

        @media (max-width: 640px) {
          .whatsapp-float-container {
            bottom: 18px;
            right: 18px;
          }
          .whatsapp-text {
            display: none;
          }
          .whatsapp-float-btn {
            width: 48px;
            height: 48px;
            padding: 0;
            justify-content: center;
            border-radius: 50%;
            box-shadow: 0 4px 16px rgba(37, 211, 102, 0.45);
          }
        }
      `}</style>
    </aside>
  );
}
