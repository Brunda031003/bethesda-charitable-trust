import React from 'react';
import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black/50 py-6 px-4 text-center border-t border-red-700">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
        <div className="align-center text-sm">
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <p>©2025 Bethesta Charity Trust. All rights reserved.</p>
          
        </div>
        <div className="text-sm align-right flex items-center justify-center space-x-1">
          Designed by First Echo
        </div>
      </div>
    </footer>
  );
};

export default Footer;