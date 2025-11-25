import React, { useState, useEffect } from 'react';
import { Menu, X, Home } from 'lucide-react';

interface HeaderProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

const Header: React.FC<HeaderProps> = ({ currentPage, onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', value: 'home' },
    { name: 'About Us', value: 'about' },
    { name: 'Our Services', value: 'home', section: 'our-services-list' },
    { name: 'Contact', value: 'contact' },
  ];

  const handleNavClick = (e: React.MouseEvent, link: any) => {
    e.preventDefault();
    onNavigate(link.value);
    setIsMobileMenuOpen(false);

    if (link.section) {
      // Retry mechanism to ensure element exists after page transition
      let attempts = 0;
      const maxAttempts = 20; // Try for ~2 seconds

      const attemptScroll = () => {
        const element = document.getElementById(link.section);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        } else if (attempts < maxAttempts) {
          attempts++;
          setTimeout(attemptScroll, 100);
        }
      };

      attemptScroll();
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-500 ease-in-out ${isScrolled
        ? 'bg-[#1c324e]/90 backdrop-blur-xl shadow-[0_4px_30px_rgba(0,0,0,0.2)] py-3'
        : 'bg-transparent py-6'
        }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-start items-center">

          {/* Brand / Logo */}
          <div
            className="flex items-center gap-4 group cursor-pointer select-none ml-auto md:ml-0 md:mr-16"
            onClick={() => {
              onNavigate('home');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            {/* Logo Container */}
            <div className="relative w-20 h-20 flex items-center justify-center transition-transform duration-500 group-hover:scale-110 translate-y-2">
              <div className="absolute inset-0 bg-firefly-yellow/30 blur-2xl rounded-full opacity-50 group-hover:opacity-100 transition-opacity duration-500"></div>
              <img
                src="/Fly.png"
                alt="Firefly Logo"
                className="w-full h-full object-contain drop-shadow-[0_0_15px_rgba(226,216,43,0.5)] z-10"
              />
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
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={`#${link.section ?? link.value}`}
                onClick={(e) => handleNavClick(e, link)}
                className={`text-sm font-medium tracking-widest uppercase relative group overflow-hidden transition-colors ${currentPage === link.value && !link.section ? 'text-firefly-yellow' : 'text-gray-200 hover:text-firefly-yellow'
                  }`}
              >
                <span className="relative z-10">{link.name}</span>
                <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-firefly-yellow transform transition-transform duration-300 origin-right group-hover:origin-left ${currentPage === link.value && !link.section ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                  }`}></span>
              </a>
            ))}
            <button
              onClick={(e) => handleNavClick(e, { value: 'home', section: 'cta-section' })}
              className="relative overflow-hidden bg-firefly-yellow hover:bg-white text-firefly-dark font-bold py-3 px-7 rounded-full transition-all duration-300 transform hover:scale-105 shadow-[0_0_15px_rgba(226,216,43,0.4)] hover:shadow-[0_0_25px_rgba(255,255,255,0.6)] group"
            >
              <span className="relative z-10">Get Started</span>
              <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]"></div>
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-white p-2 hover:text-firefly-yellow transition-colors ml-auto"
          >
            {isMobileMenuOpen ? <X className="w-9 h-9" /> : <Menu className="w-9 h-9" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Overlay */}
      <div className={`md:hidden absolute top-full left-0 w-full bg-[#1c324e] border-b border-white/10 transition-all duration-300 overflow-hidden shadow-2xl ${isMobileMenuOpen ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="px-6 py-6 space-y-4 flex flex-col">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={`#${link.section ?? link.value}`}
              onClick={(e) => handleNavClick(e, link)}
              className={`text-lg font-medium border-l-2 pl-4 transition-all ${currentPage === link.value && !link.section
                ? 'text-firefly-yellow border-firefly-yellow'
                : 'text-gray-200 hover:text-firefly-yellow border-transparent hover:border-firefly-yellow'
                }`}
            >
              {link.name}
            </a>
          ))}
          <button
            onClick={() => {
              onNavigate('contact');
              setIsMobileMenuOpen(false);
            }}
            className="w-full mt-4 bg-gradient-to-r from-firefly-yellow to-firefly-green text-firefly-dark font-bold py-4 px-6 rounded-xl shadow-lg"
          >
            Book a Call
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;