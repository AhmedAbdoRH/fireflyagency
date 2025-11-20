import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Stats from './components/Stats';
import Testimonials from './components/Testimonials';
import Cta from './components/Cta';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';

const SplashScreen = ({ onFinished }: { onFinished: () => void }) => {
  const [step, setStep] = useState(0);

  useEffect(() => {
    // Timeline of intro animation
    setTimeout(() => setStep(1), 100); // Logo appears (fade-in, scale-up)
    setTimeout(() => setStep(2), 2000); // Add glow effect
    setTimeout(() => setStep(3), 3000); // Exit animation starts
    setTimeout(() => onFinished(), 3500); // Remove component
  }, [onFinished]);

  return (
    <div 
      className={`fixed inset-0 z-[100] bg-[#1c324e] flex items-center justify-center transition-all duration-700 ease-in-out ${
        step === 3 ? 'opacity-0 pointer-events-none scale-110 blur-xl' : 'opacity-100'
      }`}
    >
      <div className="relative flex flex-col items-center">
        {/* Animated Logo Image */}
        <div className="w-32 h-32 mb-4">
           <img 
             src="Logo.png" 
             alt="Firefly Logo" 
             className={`w-full h-full object-contain 
               transition-all duration-1000 ease-out 
               ${step >= 1 ? 'opacity-100 scale-100' : 'opacity-0 scale-80'} 
               ${step >= 2 ? 'drop-shadow-[0_0_30px_rgba(226,216,43,0.6)]' : ''}
             `} 
           />
        </div>

        {/* Text Reveal */}
        <div className="overflow-hidden h-16 flex items-center justify-center relative">
          <h1 
            className={`font-serif text-5xl text-white font-bold tracking-wider transform transition-all duration-700 ${
              step >= 2 ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
            }`}
          >
            Firefly
          </h1>
        </div>
        <div 
          className={`font-sans text-sm font-bold text-firefly-yellow tracking-[0.4em] uppercase mt-2 transition-all duration-700 delay-100 ${
            step >= 2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          Creative Solutions
        </div>
      </div>
    </div>
  );
};

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);

  return (
    <div className="min-h-screen bg-firefly-dark text-white font-sans selection:bg-firefly-yellow selection:text-firefly-dark overflow-x-hidden">
      <CustomCursor />
      
      {loading && <SplashScreen onFinished={() => setLoading(false)} />}
      
      <div className={`transition-opacity duration-1000 ${loading ? 'opacity-0' : 'opacity-100'}`}>
        <Header />
        <main>
          <Hero />
          <Stats />
          <Services />
          <Testimonials />
          <Cta />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default App;