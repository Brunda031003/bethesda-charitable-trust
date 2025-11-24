import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
// import Donation from './components/Donation'; // Removed from main page
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';
import DonatePage from './pages/DonatePage';
import CoreTeam from './components/CoreTeam';

function MainPage({ scrollToSection }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-600 via-red-700 to-red-800 text-white">
      <Navigation />
      <Hero scrollToSection={scrollToSection} />
      <About />
      {/* Donation component removed from main page */}
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
