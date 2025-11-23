import React from 'react';
import Reveal from './Reveal';

const FounderSection: React.FC = () => {
  return (
    <section className="py-16 md:py-20 lg:py-24 bg-gradient-to-b from-firefly-dark via-firefly-dark/95 to-firefly-dark/80 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-20 right-0 w-[400px] h-[400px] bg-firefly-green/10 rounded-full blur-[140px]"></div>
        <div className="absolute -bottom-10 left-0 w-[350px] h-[350px] bg-firefly-yellow/10 rounded-full blur-[120px]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <Reveal width="100%">
          <div className="text-center mb-12 md:mb-16">
            <span className="uppercase tracking-[0.3em] text-xs text-firefly-yellow/80 font-semibold mb-4 block">
              Meet Our Leader
            </span>
            <h2 className="font-heading text-4xl md:text-6xl font-bold">
              Meet Our Founder
            </h2>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <Reveal delay={100}>
            <div className="relative flex justify-center">
              <div className="relative w-full max-w-[520px]">
                <div className="relative rounded-[2.75rem] overflow-hidden border border-white/15 bg-white/5 backdrop-blur-md shadow-[0_20px_60px_rgba(0,0,0,0.55)]">
                  <div className="absolute inset-0 bg-gradient-to-tr from-firefly-yellow/20 via-transparent to-firefly-green/20 opacity-70 pointer-events-none"></div>
                  <img
                    src="/Founder.png"
                    alt="Febronia Atef"
                    className="relative z-10 w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="pointer-events-none absolute inset-0 border border-white/10 rounded-[2.75rem]"></div>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={200}>
            <div className="space-y-8">
              <div className="space-y-2">
                <p className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.4em] uppercase text-firefly-green/80">
                  Leadership
                  <span className="h-px w-12 bg-gradient-to-r from-firefly-green via-white to-firefly-yellow"></span>
                </p>
                <h3 className="text-3xl md:text-4xl font-heading font-bold text-white">Febronia Atef</h3>
                <p className="text-sm text-gray-400 uppercase tracking-[0.3em]">Founder &amp; CEO</p>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm p-8 space-y-5 text-gray-200">
                <p className="text-lg leading-relaxed">
                  With over a decade of experience in digital marketing, she established Firefly to transform your brand's dreams into reality. She believes that there is no one strategy that fits all, and that every business is different and unique!
                </p>
                <p className="text-lg leading-relaxed">
                  Her true passion lies in empowering businesses to stand out in a competitive digital landscape.
                </p>
                <p className="text-lg leading-relaxed text-gray-200">
                  She also believes that each client is a long-term partner in the journey toward success. A partnership built on trust and open communication; ensuring that clients feel supported and valued every step of the way.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                  <span className="text-3xl font-heading font-bold text-white">10+</span>
                  <p className="text-sm uppercase tracking-[0.3em] text-gray-400">Years Experience</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                  <span className="text-3xl font-heading font-bold text-white">150+</span>
                  <p className="text-sm uppercase tracking-[0.3em] text-gray-400">Brands Guided</p>
                </div>
              </div>

              <div className="flex items-center gap-4 text-gray-300 pt-2">
                <div className="h-px w-16 bg-gradient-to-r from-firefly-yellow to-firefly-green"></div>
                <div>
                  <p className="font-semibold">Febronia Atef</p>
                  <p className="text-xs uppercase tracking-[0.4em] text-gray-400">We grow together</p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default FounderSection;
