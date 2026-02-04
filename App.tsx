import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import ProductShowcase from './components/ProductShowcase';
import Services from './components/Services';
import TradeInSection from './components/TradeInSection';
import ObjectionSection from './components/ObjectionSection';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white font-sans">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Services />
        <TradeInSection />
        <ProductShowcase />
        <ObjectionSection />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default App;