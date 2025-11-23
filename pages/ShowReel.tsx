import React from 'react';
import Reveal from '../components/Reveal';
import { ArrowLeft, Play } from 'lucide-react';

interface ShowReelProps {
  onNavigateHome: () => void;
}

const ShowReel: React.FC<ShowReelProps> = ({ onNavigateHome }) => {
  return (
    <section className="min-h-screen bg-firefly-dark pt-28 pb-16 px-4 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-5%] w-[500px] h-[500px] bg-firefly-yellow/20 rounded-full blur-[160px]"></div>
        <div className="absolute bottom-[-15%] right-[-10%] w-[600px] h-[600px] bg-firefly-green/15 rounded-full blur-[180px]"></div>
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: `linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(0deg, rgba(255,255,255,0.3) 1px, transparent 1px)`, backgroundSize: '80px 80px' }}></div>
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <Reveal width="100%">
          <div className="flex flex-col gap-6 mb-12 text-center">
            <button
              onClick={onNavigateHome}
              className="self-start inline-flex items-center gap-2 text-sm uppercase tracking-[0.4em] text-gray-300 hover:text-firefly-yellow transition-colors"
            >
              <ArrowLeft className="w-4 h-4" /> Back Home
            </button>
            <span className="inline-flex mx-auto items-center gap-3 px-5 py-2 rounded-full border border-white/10 bg-white/5 text-xs tracking-[0.4em] uppercase text-white/80">
              Show Reel
              <span className="w-1.5 h-1.5 rounded-full bg-firefly-yellow"></span>
            </span>
            <h1 className="font-heading text-4xl md:text-6xl font-bold text-white">
              Stories that <span className="text-firefly-yellow">glow</span> and strategies that scale
            </h1>
            <p className="text-gray-300 text-base md:text-lg max-w-3xl mx-auto">
              Dive into a curated montage of campaigns, motion pieces, and brand experiences that highlight how we blend creativity with measurable impact.
            </p>
          </div>
        </Reveal>

        <Reveal delay={200} width="100%">
          <div className="relative rounded-[2.5rem] overflow-hidden border border-white/10 bg-white/5 backdrop-blur-md shadow-[0_30px_90px_rgba(0,0,0,0.45)]">
            <div className="absolute inset-0 bg-gradient-to-t from-firefly-dark/70 via-transparent to-transparent pointer-events-none"></div>
            <video
              src="Hero.mp4"
              controls
              loop
              playsInline
              poster="HeroPoster.png"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="flex items-center gap-3 bg-firefly-dark/60 backdrop-blur-lg px-6 py-3 rounded-full border border-white/10 text-white text-sm uppercase tracking-[0.4em]">
                <Play className="w-4 h-4" /> Now Playing
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default ShowReel;
