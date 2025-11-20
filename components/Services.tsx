import React from 'react';
import { SERVICES } from '../constants';
import Reveal from './Reveal';

const Services: React.FC = () => {
  
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    // Update CSS variables for the spotlight effect
    card.style.setProperty('--mouse-x', `${x}px`);
    card.style.setProperty('--mouse-y', `${y}px`);
    
    // Tilt Logic
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -3; 
    const rotateY = ((x - centerX) / centerX) * 3;
    
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.01, 1.01, 1.01)`;
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
  };

  return (
    <section id="services" className="py-24 bg-firefly-dark relative">
      {/* Decorative Blob */}
      <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-firefly-green/5 rounded-full blur-[120px] animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-firefly-yellow/5 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1s' }}></div>

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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service, index) => (
            <Reveal key={index} delay={index * 100} className="h-full">
              <div 
                className="spotlight-card group p-8 rounded-2xl bg-white/5 border border-white/5 transition-all duration-300 h-full flex flex-col relative"
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
              >
                {/* Spotlight Glow Background */}
                <div className="spotlight-bg"></div>
                
                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-firefly-yellow/10 to-firefly-green/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 border border-white/10 group-hover:border-firefly-yellow/30">
                    <service.icon className="w-7 h-7 text-firefly-yellow group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 font-heading group-hover:text-firefly-yellow transition-colors">{service.title}</h3>
                  <p className="text-gray-400 leading-relaxed text-sm flex-grow group-hover:text-gray-300 transition-colors">
                    {service.description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;