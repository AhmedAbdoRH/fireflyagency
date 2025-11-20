import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { NAV_LINKS } from '../constants';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-500 ease-in-out ${
        scrolled 
          ? 'bg-[#1c324e]/90 backdrop-blur-xl shadow-[0_4px_30px_rgba(0,0,0,0.2)] py-3' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          
          {/* Brand / Logo */}
          <div className="flex items-center gap-4 group cursor-pointer select-none">
            {/* Icon Container - Increased size for visibility */}
            <div className="relative w-16 h-16 flex items-center justify-center transition-transform duration-500 group-hover:scale-110">
               {/* Strong Back Glow */}
               <div className="absolute inset-0 bg-firefly-yellow/30 blur-2xl rounded-full opacity-50 group-hover:opacity-100 transition-opacity duration-500"></div>
               
               {/* NEW Simplified & Bolder Logo SVG */}
               <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-[0_0_15px_rgba(226,216,43,0.5)] z-10">
                  {/* Wings - Solid White */}
                  <path d="M10 35 C 20 15, 40 35, 50 40 C 60 35, 80 15, 90 35 C 95 45, 85 55, 50 55 C 15 55, 5 45, 10 35 Z" 
                        fill="#f8fafc" fillOpacity="1" />
                  
                  {/* Bulb Shape (Body) - High Contrast Dark Blue with Thick Yellow Stroke */}
                  <path d="M35 35 C 35 20, 65 20, 65 35 C 65 50, 55 55, 55 65 L 45 65 C 45 55, 35 50, 35 35 Z" 
                        fill="#1c324e" stroke="#e2d82b" strokeWidth="4" strokeLinejoin="round" />
                  
                  {/* Filament - The "Spark" */}
                  <path d="M45 30 L 55 30 M 50 30 L 50 45" 
                        stroke="#e2d82b" strokeWidth="4" strokeLinecap="round" />
                  
                  {/* Base of Bulb */}
                  <rect x="42" y="68" width="16" height="6" rx="2" fill="#e2d82b" />
                  <rect x="44" y="76" width="12" height="4" rx="2" fill="#e2d82b" />
               </svg>
            </div>

            {/* Text Container */}
            <div className="flex flex-col justify-center translate-y-1">
              <span className="font-serif font-bold text-3xl text-white leading-none tracking-wide drop-shadow-lg">
                Firefly
              </span>
              <span className="font-sans text-[0.7rem] font-bold text-firefly-yellow tracking-[0.25em] uppercase leading-none mt-1.5 drop-shadow-md">
                creative solutions
              </span>
            </div>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className="text-gray-200 hover:text-firefly-yellow transition-colors text-sm font-medium tracking-widest uppercase relative group overflow-hidden"
              >
                <span className="relative z-10">{link.name}</span>
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-firefly-yellow transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-right group-hover:origin-left"></span>
              </a>
            ))}
            <button className="relative overflow-hidden bg-firefly-yellow hover:bg-white text-firefly-dark font-bold py-3 px-7 rounded-full transition-all duration-300 transform hover:scale-105 shadow-[0_0_15px_rgba(226,216,43,0.4)] hover:shadow-[0_0_25px_rgba(255,255,255,0.6)] group">
              <span className="relative z-10">Get Started</span>
              <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]"></div>
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white p-2 hover:text-firefly-yellow transition-colors"
          >
            {isOpen ? <X className="w-9 h-9" /> : <Menu className="w-9 h-9" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Overlay */}
      <div className={`md:hidden absolute top-full left-0 w-full bg-[#1c324e] border-b border-white/10 transition-all duration-300 overflow-hidden shadow-2xl ${isOpen ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="px-6 py-6 space-y-4 flex flex-col">
          {NAV_LINKS.map((link) => (
            <a 
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-lg font-medium text-gray-200 hover:text-firefly-yellow border-l-2 border-transparent hover:border-firefly-yellow pl-4 transition-all"
            >
              {link.name}
            </a>
          ))}
          <button className="w-full mt-4 bg-gradient-to-r from-firefly-yellow to-firefly-green text-firefly-dark font-bold py-4 px-6 rounded-xl shadow-lg">
            Book a Call
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;