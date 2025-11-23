import React from 'react';
import { ArrowRight, Mail } from 'lucide-react';
import Reveal from './Reveal';

const Cta: React.FC = () => {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <Reveal width="100%">
          <div className="relative rounded-[2.5rem] overflow-hidden bg-gradient-to-r from-firefly-yellow via-firefly-green to-firefly-yellow p-[1px] animate-gradient-xy bg-[length:400%_400%]">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20 mix-blend-overlay"></div>
            
            <div className="bg-firefly-dark rounded-[2.4rem] py-20 px-6 md:px-16 text-center relative overflow-hidden group">
              {/* Background glows that move on hover */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[600px] h-[300px] bg-firefly-yellow/10 blur-[100px] rounded-full group-hover:bg-firefly-green/10 transition-colors duration-1000"></div>

              <Reveal delay={50} width="100%">
                <h2 className="relative z-10 font-heading text-4xl md:text-6xl font-bold text-white mb-6">
                  Ready to <span className="text-firefly-yellow">Light Up</span> Your Industry?
                </h2>
              </Reveal>
              
              <Reveal delay={300} width="100%">
                <p className="relative z-10 text-gray-300 text-lg md:text-xl max-w-2xl mx-auto mb-10">
                  Stop relying on guesswork. Implement the systems that top-performing companies use to dominate their market.
                </p>
              </Reveal>

              <Reveal delay={400} width="100%">
                <div className="relative z-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                  <button className="w-full sm:w-auto px-8 py-4 bg-white text-firefly-dark font-bold rounded-xl hover:bg-gray-100 transition-all duration-300 flex items-center justify-center gap-2 text-lg shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:shadow-[0_0_30px_rgba(255,255,255,0.4)] hover:-translate-y-1">
                    Book Strategy Call
                    <ArrowRight className="w-5 h-5" />
                  </button>
                  <button className="w-full sm:w-auto px-8 py-4 bg-firefly-dark border border-white/20 text-white font-bold rounded-xl hover:bg-white/10 transition-colors flex items-center justify-center gap-2 text-lg">
                    <Mail className="w-5 h-5" />
                    Email Us
                  </button>
                </div>
              </Reveal>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Cta;