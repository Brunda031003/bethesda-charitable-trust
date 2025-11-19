import React from 'react';
import { Gift } from 'lucide-react';

const Hero = ({ scrollToSection }) => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-4">
      <div className="max-w-5xl mx-auto text-center space-y-8 animate-fade-in">
        <div className="mb-8">
          <div className="inline-flex items-center space-x-3 text-yellow-300 mb-4">
            <div className="w-16 h-1 bg-yellow-300"></div>
            <Gift className="w-10 h-10" />
            <div className="w-16 h-1 bg-yellow-300"></div>
          </div>
        </div>
        
        <h1 className="text-5xl sm:text-7xl font-bold mb-6 tracking-tight">
          BETHESDA CHARITABLE TRUST
        </h1>
        
        <div className="space-y-4 text-lg sm:text-xl">
          <p className="font-semibold text-yellow-300 text-2xl sm:text-3xl">
            PRESENTS
          </p>
          <h2 className="text-4xl sm:text-6xl font-bold italic">
            Christmas Charity Event
          </h2>
          <p className="text-2xl sm:text-3xl font-semibold text-yellow-200">
            December 27, 2025
          </p>
          <p className="text-xl text-yellow-100">
            5:00 PM Onwards<br></br>BCT Ground Indoor, Mundgod
          </p>
        </div>

        <div className="pt-0">
          <button 
            onClick={() => scrollToSection('donation')}
            className="bg-yellow-400 text-red-900 px-10 py-4 rounded-full font-bold text-lg hover:bg-yellow-300 transition-all transform hover:scale-105 shadow-xl"
          >
            DONATE NOW
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;