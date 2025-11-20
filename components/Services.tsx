import React from 'react';
import { SERVICES } from '../constants';
import Reveal from './Reveal';

const Services: React.FC = () => {
  // Simple 3D Tilt effect logic on mouse move
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = ((y - centerY) / centerY) * -5; // -5 to 5 deg
    const rotateY = ((x - centerX) / centerX) * 5; // -5 to 5 deg
    
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    e.currentTarget.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
  };

  return (
    <section id="services" className="py-24 bg-firefly-dark relative">
      {/* Decorative Blob */}
      <div className="absolute top-1/2 right-0 w-[300px] h-[300px] bg-firefly-green/5 rounded-full blur-[100px] animate-pulse"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <Reveal>
            <h2 className="font-heading text-3xl md:text-5xl font-bold text-white mb-6">
              Complete Digital <span className="text-firefly-yellow">Solutions</span>
            </h2>
          </Reveal>
          <Reveal delay={200}>
            <p className="text-gray-400 text-lg">
              We provide end-to-end services designed to scale your business, automate your workflows, and amplify your market presence.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => (
            <Reveal key={index} delay={index * 100} className="h-full">
              <div 
                className="tilt-card group p-8 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 hover:border-firefly-yellow/30 transition-all duration-300 h-full flex flex-col relative overflow-hidden"
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
              >
                {/* Card Hover Glow */}
                <div className="absolute -inset-px bg-gradient-to-r from-firefly-yellow/0 via-firefly-yellow/0 to-firefly-yellow/0 group-hover:from-firefly-yellow/10 group-hover:via-firefly-green/10 group-hover:to-firefly-yellow/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-firefly-yellow/20 to-firefly-green/20 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                  <service.icon className="w-8 h-8 text-firefly-yellow group-hover:text-firefly-green transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 font-heading group-hover:text-firefly-yellow transition-colors">{service.title}</h3>
                <p className="text-gray-400 leading-relaxed text-sm flex-grow">
                  {service.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;