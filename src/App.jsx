import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';
import DonatePage from './pages/DonatePage';
import CoreTeam from './components/CoreTeam';
import ImpactofBCT from './components/ImpactofBCT';

function MainPage() {
  // Scroll to the section smoothly by element id
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-600 via-red-700 to-red-800 text-white">
      <Navigation scrollToSection={scrollToSection} />
      <Hero />
      <About />
      <ImpactofBCT />
      <Gallery />
      <CoreTeam />
      <Contact />
      <Footer />
    </div>
  );
}

function App() {
  // Removed unused state and function to fix ESLint warning

  return (
    <Router>
      <Routes>
        <Route path="/donate" element={<DonatePage />} />
        <Route 
          path="/" 
          element={<MainPage />} 
        />
      </Routes>
    </Router>
  );
}

export default App;
