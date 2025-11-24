import React, { useState, useEffect, useRef } from 'react';
import { Play } from 'lucide-react';

interface HeroProps {
  onShowReel: () => void;
}

const Hero: React.FC<HeroProps> = ({ onShowReel }) => {
  const videoRefDesktop = useRef<HTMLVideoElement>(null);
  const videoRefMobile = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const playVideos = (videoRef: React.RefObject<HTMLVideoElement>) => {
      if (videoRef.current) {
        videoRef.current.play().catch(error => {
          console.log('Video play failed:', error);
        });
      }
    };

    playVideos(videoRefDesktop);
    playVideos(videoRefMobile);
  }, []);

  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-firefly-dark">
      {/* Desktop Video */}
      <video
        ref={videoRefDesktop}
        className="hidden md:block absolute inset-0 w-full h-full object-cover"
        src="/desktop-hero.mp4"
        loop
        autoPlay
        playsInline
        muted={false} // Ensure sound is not muted
      />

      {/* Mobile Video */}
      <video
        ref={videoRefMobile}
        className="md:hidden absolute inset-0 w-full h-full object-cover"
        src="/mobile-hero.mp4"
        loop
        autoPlay
        playsInline
        muted={false} // Ensure sound is not muted
      />

      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative z-10 text-center text-white px-4">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4 drop-shadow-lg">
          Illuminating Your Digital Path
        </h1>
        <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto opacity-90 drop-shadow">
          We are Firefly Creative Solutions, your partner in crafting exceptional digital experiences.
        </p>
        <button
          className="w-full sm:w-auto px-8 py-4 bg-transparent border border-white/20 hover:border-firefly-green hover:text-firefly-green text-white font-semibold rounded-lg transition-all duration-300 flex items-center justify-center gap-2 text-lg backdrop-blur-sm hover:bg-white/5"
          onClick={onShowReel}
        >
          <Play className="w-5 h-5 fill-current" />
          Previous Work
        </button>
      </div>
    </section>
  );
};

export default Hero;
