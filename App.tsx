import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import ProductShowcase from './components/ProductShowcase';
import Services from './components/Services';
import TradeInSection from './components/TradeInSection';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <ProductShowcase />
        <Services />
        <TradeInSection />
      </main>
      <Footer />
    </div>
  );
};

export default App;