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
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-firefly-dark/90 backdrop-blur-md shadow-lg border-b border-white/5' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          {/* Logo */}
          <div className="flex items-center gap-3 group cursor-pointer select-none">
            <div className="relative w-14 h-14 flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
               <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-[0_0_15px_rgba(226,216,43,0.4)]">
                  {/* Wings */}
                  <path d="M10 40 Q 25 20 45 38" fill="#f8fafc" opacity="0.9" />
                  <path d="M90 40 Q 75 20 55 38" fill="#f8fafc" opacity="0.9" />
                  
                  {/* Bulb Body (Dark with Yellow Outline) */}
                  <path d="M32 32 A 23 23 0 1 1 68 32 L 62 65 L 38 65 Z" fill="#1c324e" stroke="#e2d82b" strokeWidth="2.5" />
                  
                  {/* Brain/Filament Pattern */}
                  <path d="M40 35 Q 50 25 60 35" stroke="#e2d82b" strokeWidth="2" fill="none" strokeLinecap="round" />
                  <path d="M42 45 Q 50 35 58 45" stroke="#e2d82b" strokeWidth="2" fill="none" strokeLinecap="round" />
                  <path d="M50 25 V 55" stroke="#e2d82b" strokeWidth="2" strokeLinecap="round" />
                  
                  {/* Base of Bulb */}
                  <rect x="40" y="68" width="20" height="4" rx="2" fill="#e2d82b" />
                  <rect x="42" y="74" width="16" height="4" rx="2" fill="#e2d82b" />
                  
                  {/* Top Shine/Rays */}
                  <path d="M50 5 L 50 10" stroke="#e2d82b" strokeWidth="2" strokeLinecap="round" />
                  <path d="M25 15 L 28 18" stroke="#e2d82b" strokeWidth="2" strokeLinecap="round" />
                  <path d="M75 15 L 72 18" stroke="#e2d82b" strokeWidth="2" strokeLinecap="round" />
               </svg>
            </div>
            <div className="flex flex-col justify-center">
              <span className="font-serif font-bold text-3xl text-white leading-none tracking-wide">
                Firefly
              </span>
              <span className="font-sans text-[0.65rem] font-bold text-firefly-yellow tracking-[0.2em] uppercase leading-none mt-1">
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
                className="text-gray-300 hover:text-firefly-yellow transition-colors text-sm font-medium tracking-wide"
              >
                {link.name}
              </a>
            ))}
            <button className="bg-firefly-yellow hover:bg-firefly-green text-firefly-dark font-bold py-2.5 px-6 rounded-full transition-all duration-300 transform hover:scale-105 shadow-[0_0_10px_rgba(226,216,43,0.3)]">
              Get Started
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-300 hover:text-white p-2"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-firefly-dark/95 backdrop-blur-xl border-b border-white/10 absolute w-full">
          <div className="px-4 pt-2 pb-8 space-y-4">
            {NAV_LINKS.map((link) => (
              <a 
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block text-gray-300 hover:text-firefly-green font-medium text-lg py-2 border-b border-white/5"
              >
                {link.name}
              </a>
            ))}
            <button className="w-full mt-4 bg-gradient-to-r from-firefly-yellow to-firefly-green text-firefly-dark font-bold py-3 px-6 rounded-lg">
              Book a Call
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;