import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import Installation from './components/Installation';
import About from './components/About';
import UseCases from './components/UseCases';
import OpenSource from './components/OpenSource';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-black text-white font-lato">
      {/* Background gradients */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-blue-500/10 via-transparent to-purple-500/10 blur-3xl"></div>
        <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-tl from-cyan-500/10 via-transparent to-blue-500/10 blur-3xl"></div>
      </div>
      
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <Features />
        <HowItWorks />
        <Installation />
        <About />
        <UseCases />
        <OpenSource />
      </main>
      <Footer />
    </div>
  );
}

export default App;