import React from 'react';
import { TESTIMONIALS } from '../constants';
import { Quote } from 'lucide-react';
import Reveal from './Reveal';

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-24 bg-firefly-dark relative overflow-hidden">
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <Reveal>
              <span className="text-firefly-green font-bold tracking-wider text-sm uppercase mb-2 block">Success Stories</span>
              <h2 className="font-heading text-3xl md:text-5xl font-bold text-white">
                Don't just take our <span className="text-firefly-yellow underline decoration-4 decoration-firefly-yellow/30 underline-offset-4">word</span> for it.
              </h2>
            </Reveal>
          </div>
          <div className="hidden md:block">
            <Reveal delay={200}>
              <p className="text-gray-400 text-right max-w-xs">
                Join hundreds of fast-growing companies scaling with Firefly.
              </p>
            </Reveal>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t, index) => (
            <Reveal key={index} delay={index * 200} className="h-full">
              <div 
                className="relative p-8 rounded-3xl bg-[#132235] border border-white/5 hover:border-firefly-green/30 transition-all duration-500 group hover:-translate-y-2 hover:shadow-[0_10px_30px_-10px_rgba(0,238,138,0.1)] h-full"
              >
                <Quote className="absolute top-8 right-8 w-10 h-10 text-white/5 group-hover:text-firefly-yellow/10 transition-colors duration-500 group-hover:rotate-12" />
                
                <p className="text-gray-300 mb-8 relative z-10 leading-relaxed italic">
                  "{t.content}"
                </p>
                
                <div className="flex items-center gap-4 mt-auto">
                  <div className="relative">
                    <div className="absolute inset-0 bg-firefly-green rounded-full blur opacity-0 group-hover:opacity-50 transition-opacity duration-500"></div>
                    <img 
                      src={t.avatar} 
                      alt={t.name} 
                      className="relative w-12 h-12 rounded-full border-2 border-firefly-dark object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="text-white font-bold font-heading group-hover:text-firefly-yellow transition-colors">{t.name}</h4>
                    <p className="text-firefly-yellow text-xs font-medium tracking-wide">{t.role}, {t.company}</p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;