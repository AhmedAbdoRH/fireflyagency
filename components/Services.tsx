import React from 'react';
import { SERVICES } from '../constants';
import { Search, ClipboardList, Rocket, TrendingUp } from 'lucide-react';
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
          <Reveal delay={150} width="100%">
            <h3 className="font-heading text-3xl md:text-4xl font-bold text-white mb-6">
              Why partnering with us is a game changer?
            </h3>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-8">
              At fire fly we ensure that not only your marketing objectives are being met, but also that your business is thriving. We're not just about quick wins; we focus on growth that builds your brand.
            </p>
          </Reveal>
          <Reveal delay={200}>
            <p className="text-gray-400 text-lg">
              Firefly Marketing Agency is a dynamic and innovative marketing firm dedicated to illuminating brands and businesses through strategic and creative solutions. Our clients receive customized solutions based on their specific goals and challenges. With a passion for igniting growth and visibility, we specialize in crafting tailored marketing strategies that resonate with target audiences and drive tangible results. Our team consists of skilled professionals with diverse expertise in digital marketing to make you stand out in a competitive digital landscape.
            </p>
          </Reveal>
        </div>

        {/* How we ensure success section */}
        <div className="mb-20">
          <Reveal delay={300}>
            <h3 className="font-heading text-3xl md:text-4xl font-bold text-white mb-12 text-center">
              Here's how we ensure success for our clients
            </h3>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Reveal delay={400}>
              <div className="flex flex-col items-center text-center p-6 rounded-xl bg-white/5 border border-white/10">
                <Search className="w-12 h-12 text-firefly-yellow mb-4" />
                <h4 className="text-xl font-bold text-white mb-2">Discovery</h4>
                <p className="text-gray-400">We ask the right questions to ensure we do a deep dive to understand your business. We assess current performance and identify opportunities for improvement.</p>
              </div>
            </Reveal>
            <Reveal delay={500}>
              <div className="flex flex-col items-center text-center p-6 rounded-xl bg-white/5 border border-white/10">
                <ClipboardList className="w-12 h-12 text-firefly-green mb-4" />
                <h4 className="text-xl font-bold text-white mb-2">Strategize</h4>
                <p className="text-gray-400">Create a tailored strategy for your business with our proposed recommendations and road map. We define clear objectives, KPIs, and budget allocations.</p>
              </div>
            </Reveal>
            <Reveal delay={600}>
              <div className="flex flex-col items-center text-center p-6 rounded-xl bg-white/5 border border-white/10">
                <Rocket className="w-12 h-12 text-firefly-yellow mb-4" />
                <h4 className="text-xl font-bold text-white mb-2">Implement</h4>
                <p className="text-gray-400">We implement the right set of actions with the right packages, to achieve a positive ROI.</p>
              </div>
            </Reveal>
            <Reveal delay={700}>
              <div className="flex flex-col items-center text-center p-6 rounded-xl bg-white/5 border border-white/10">
                <TrendingUp className="w-12 h-12 text-firefly-green mb-4" />
                <h4 className="text-xl font-bold text-white mb-2">Optimization</h4>
                <p className="text-gray-400">Tracking performance to ensure your business is on track and adjusting strategies when needed.</p>
              </div>
            </Reveal>
          </div>
        </div>

        <Reveal width="100%">
          <div className="text-center mb-16">
            <span className="text-firefly-yellow font-medium tracking-wider uppercase text-sm mb-2 block">What We Do</span>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-white inline-block relative">
              Our Services
              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-firefly-yellow to-firefly-green rounded-full"></div>
            </h2>
          </div>
        </Reveal>

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