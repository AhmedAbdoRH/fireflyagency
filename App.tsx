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
    setTimeout(() => setStep(1), 100); // Start drawing
    setTimeout(() => setStep(2), 2000); // Fill color + Text Reveal
    setTimeout(() => setStep(3), 3000); // Exit
    setTimeout(() => onFinished(), 3500); // Remove component
  }, [onFinished]);

  return (
    <div 
      className={`fixed inset-0 z-[100] bg-[#1c324e] flex items-center justify-center transition-all duration-700 ease-in-out ${
        step === 3 ? 'opacity-0 pointer-events-none scale-110 blur-xl' : 'opacity-100'
      }`}
    >
      <div className="relative flex flex-col items-center">
        {/* Animated Logo SVG */}
        <div className={`w-32 h-32 mb-4 transition-all duration-1000 ${step >= 2 ? 'scale-110 drop-shadow-[0_0_30px_rgba(226,216,43,0.6)]' : ''}`}>
           <svg viewBox="0 0 100 100" className="w-full h-full overflow-visible">
              {/* Wings - Draw animation */}
              <path 
                d="M10 35 C 20 15, 40 35, 50 40 C 60 35, 80 15, 90 35 C 95 45, 85 55, 50 55 C 15 55, 5 45, 10 35 Z" 
                fill={step >= 2 ? "#f8fafc" : "transparent"} 
                stroke="#f8fafc"
                strokeWidth="2"
                strokeDasharray="300"
                strokeDashoffset={step >= 1 ? "0" : "300"}
                className="transition-all duration-1000 ease-out"
                style={{ opacity: 1 }}
              />
              
              {/* Bulb Body */}
              <path 
                d="M35 35 C 35 20, 65 20, 65 35 C 65 50, 55 55, 55 65 L 45 65 C 45 55, 35 50, 35 35 Z" 
                fill={step >= 2 ? "#1c324e" : "transparent"} 
                stroke="#e2d82b" 
                strokeWidth="3" 
                strokeDasharray="200"
                strokeDashoffset={step >= 1 ? "0" : "200"}
                className="transition-all duration-[1.5s] ease-in-out"
              />
              
              {/* Spark */}
              <g className={`transition-opacity duration-500 ${step >= 2 ? 'opacity-100' : 'opacity-0'}`}>
                <path d="M45 30 L 55 30 M 50 30 L 50 45" stroke="#e2d82b" strokeWidth="3" strokeLinecap="round" />
                <rect x="42" y="68" width="16" height="6" rx="2" fill="#e2d82b" />
                <rect x="44" y="76" width="12" height="4" rx="2" fill="#e2d82b" />
              </g>
           </svg>
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