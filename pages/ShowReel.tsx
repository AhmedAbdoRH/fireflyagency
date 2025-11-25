import React, { useState, useEffect } from 'react';
import Reveal from '../components/Reveal';
import { ArrowLeft, Play, Palette, Layers } from 'lucide-react';
import Image from 'next/image';

// Import images
const brandingImages = [
  '/Branding/1.png',
  '/Branding/2.png',
  '/Branding/3.png',
  '/Branding/4.png'
];

const designImages = [
  '/Designs/1.png',
  '/Designs/2.png',
  '/Designs/3.png',
  '/Designs/4.webp',
  '/Designs/5.webp',
  '/Designs/6.webp'
];

const photographyImages = [
  '/Photography/1.webp',
  '/Photography/2.webp',
  '/Photography/3.webp',
  '/Photography/4.webp',
  '/Photography/5.webp',
  '/Photography/6.webp'
];

interface ShowReelProps {
  onNavigateHome: () => void;
}

const ShowReel: React.FC<ShowReelProps> = ({ onNavigateHome }) => {
  const [currentBrandingIndex, setCurrentBrandingIndex] = useState(0);

  useEffect(() => {
    const brandingInterval = setInterval(() => {
      setCurrentBrandingIndex((prevIndex) => (prevIndex + 1) % brandingImages.length);
    }, 3000); // Change branding image every 3 seconds

    return () => {
      clearInterval(brandingInterval);
    };
  }, []);

  const handleBrandingClick = (index: number) => {
    setCurrentBrandingIndex(index);
  };

  return (
    <>
      <style jsx>{`
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-5px); }
        }
        @keyframes imageEnter {
          0% { 
            opacity: 0;
            transform: scale(0.8) rotate(5deg) translateX(-50px);
            filter: blur(10px);
          }
          50% {
            opacity: 0.5;
            transform: scale(1.1) rotate(-2deg) translateX(25px);
            filter: blur(5px);
          }
          100% { 
            opacity: 1;
            transform: scale(1) rotate(0deg) translateX(0px);
            filter: blur(0px);
          }
        }
        @keyframes imageExit {
          0% { 
            opacity: 1;
            transform: scale(1) rotate(0deg) translateX(0px);
            filter: blur(0px);
          }
          100% { 
            opacity: 0;
            transform: scale(1.2) rotate(-5deg) translateX(50px);
            filter: blur(15px);
          }
        }
        .bg-gradient-animation {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        .image-enter {
          animation: imageEnter 1.2s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }
        .image-exit {
          animation: imageExit 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }
      `}</style>
      <section className="min-h-screen bg-firefly-dark pt-28 pb-16 px-4 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-5%] w-[500px] h-[500px] bg-firefly-yellow/20 rounded-full blur-[160px]"></div>
        <div className="absolute bottom-[-15%] right-[-10%] w-[600px] h-[600px] bg-firefly-green/15 rounded-full blur-[180px]"></div>
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: `linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(0deg, rgba(255,255,255,0.3) 1px, transparent 1px)`, backgroundSize: '80px 80px' }}></div>
        </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <Reveal width="100%">
          <div className="flex flex-col gap-6 mb-12 text-center">
            <span className="inline-flex mx-auto items-center gap-3 px-5 py-2 rounded-full border border-white/10 bg-white/5 text-xs tracking-[0.4em] uppercase text-white/80">
              Our previous Work
              <span className="w-1.5 h-1.5 rounded-full bg-firefly-yellow"></span>
            </span>
            <h1 className="font-heading text-4xl md:text-6xl font-bold text-white">
              Stories that <span className="text-firefly-yellow">glow</span> and strategies that scale
            </h1>
          </div>
        </Reveal>

        {/* Branding Section */}
        <div className="w-full mt-20 mb-16 text-center">
          <Reveal>
            <div className="flex justify-center items-center gap-3 mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-firefly-yellow via-white to-firefly-green animate-gradient bg-gradient-animation">
                Branding & Logo designs
              </h2>
            </div>
          </Reveal>

          <div className="flex justify-center items-center">
            <div className="relative w-full max-w-4xl rounded-2xl overflow-hidden hover:scale-[1.02] transition-all duration-300 hover:shadow-lg">
              {brandingImages.map((src, index) => (
                <img
                  key={index}
                  src={src}
                  alt={`Branding Project ${index + 1}`}
                  className={`w-full h-auto transition-all duration-1000 ${
                    index === currentBrandingIndex 
                      ? 'opacity-100 scale-100 rotate-0 blur-0 translate-x-0' 
                      : 'opacity-0 scale-110 rotate-3 blur-sm translate-x-10'
                  }`}
                  loading="lazy"
                  style={{ 
                    display: 'block',
                    position: index === currentBrandingIndex ? 'relative' : 'absolute',
                    top: index === currentBrandingIndex ? 'auto' : '0',
                    left: index === currentBrandingIndex ? 'auto' : '0'
                  }}
                />
              ))}
              
              {/* Image indicators */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
                {brandingImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => handleBrandingClick(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentBrandingIndex
                        ? 'bg-firefly-yellow w-8'
                        : 'bg-white/30 hover:bg-white/50'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Graphic Design Section */}
        <div className="w-full mt-32 mb-16 text-center">
          <Reveal>
            <div className="flex justify-center items-center gap-3 mb-10">

              <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-firefly-yellow via-white to-firefly-green animate-gradient bg-gradient-animation">
                Designs
              </h2>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {designImages.map((src, index) => (
              <Reveal key={index} delay={100 * index} width="100%">
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-white/10 bg-white/5 hover:bg-white/10 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg">
                  <img
                    src={src}
                    alt={`Design Project ${index + 1}`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Photography Section */}
        <div className="w-full mt-32 mb-16 text-center">
          <Reveal>
            <div className="flex justify-center items-center gap-3 mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-firefly-yellow via-white to-firefly-green animate-gradient bg-gradient-animation">
                Photography
              </h2>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {photographyImages.map((src, index) => (
              <Reveal key={index} delay={100 * index} width="100%">
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-white/10 bg-white/5 hover:bg-white/10 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg">
                  <img
                    src={src}
                    alt={`Photography Project ${index + 1}`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default ShowReel;
