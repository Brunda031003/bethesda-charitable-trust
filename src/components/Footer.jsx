import React from 'react';
import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black/50 py-6 px-4 text-center border-t border-red-700">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
        <div className="flex space-x-6">
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <a href="#" className="hover:text-yellow-300 transition-colors">Terms & Support</a>
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <a href="#" className="hover:text-yellow-300 transition-colors">Privacy Policy</a>
        </div>
        <div className="text-sm">
          Designed with <Heart className="inline w-4 h-4 fill-red-500" /> for BCT
        </div>
      </div>
    </footer>
  );
};

export default Footer;