import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Background from './components/Background';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-brand-dark text-white selection:bg-brand-accent selection:text-white font-sans overflow-x-hidden">
      <Background />
      <div className="relative">
        <Header />
        <main className="flex-grow">
          <Hero />
          <Features />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default App;