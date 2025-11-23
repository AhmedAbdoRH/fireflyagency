import React, { useEffect, useRef, useState } from 'react';
import Reveal from './Reveal';

const PARTNER_IMAGES = [
  '/Our%20partners/1.png',
  '/Our%20partners/2.png',
  '/Our%20partners/3.png',
];

const Partners: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % PARTNER_IMAGES.length);
    }, 4500);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`py-24 relative overflow-hidden bg-gradient-to-b from-firefly-dark via-firefly-dark/95 to-firefly-dark/90 transition-all duration-1000 ease-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
      }`}
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[5%] w-[380px] h-[380px] bg-firefly-yellow/10 rounded-full blur-[140px]"></div>
        <div className="absolute bottom-[-15%] right-[10%] w-[420px] h-[420px] bg-firefly-green/10 rounded-full blur-[150px]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <Reveal width="100%">
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
            <span className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-white/10 bg-white/5 text-xs tracking-[0.4em] uppercase text-white/80">
              Trusted Allies
              <span className="w-1.5 h-1.5 rounded-full bg-firefly-green"></span>
            </span>
            <h2 className="font-heading text-3xl md:text-5xl font-bold text-white">
              Our <span className="text-firefly-yellow">Partners</span>
            </h2>
            <p className="text-gray-400 text-base md:text-lg">
              A curated network of innovative brands who rely on Firefly to illuminate their growth.
            </p>
          </div>
        </Reveal>

        <div className="max-w-5xl mx-auto">
          <div className="relative aspect-[21/9] rounded-[2.5rem] overflow-hidden border border-white/10 backdrop-blur-md bg-white/5 shadow-[0_24px_80px_rgba(0,0,0,0.3)]">
            <div className="absolute inset-0 bg-gradient-to-t from-firefly-dark/70 via-transparent to-transparent pointer-events-none"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%] h-[70%] rounded-full bg-gradient-to-r from-firefly-yellow/10 to-firefly-green/10 blur-3xl opacity-40"></div>

            {PARTNER_IMAGES.map((image, index) => (
              <div
                key={image}
                className={`absolute inset-0 flex items-center justify-center ${
                  index === activeIndex
                    ? 'opacity-100 translate-y-0 scale-100 blur-0'
                    : 'opacity-0 translate-y-8 scale-95 blur-sm pointer-events-none'
                }`}
                style={{
                  transition: 'opacity 900ms ease, transform 900ms ease, filter 900ms ease, clip-path 950ms ease',
                  clipPath:
                    index === activeIndex ? 'circle(150% at 50% 50%)' : 'circle(5% at 50% 50%)'
                }}
              >
                <div className="relative w-full h-full p-8 sm:p-10">
                  <img
                    src={image}
                    alt={`Partners collage ${index + 1}`}
                    loading="lazy"
                    className="w-full h-full object-contain drop-shadow-[0_10px_45px_rgba(0,0,0,0.6)]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-firefly-dark/20"></div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex items-center justify-center gap-3 mt-8">
            {PARTNER_IMAGES.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === activeIndex ? 'bg-firefly-yellow scale-125 shadow-[0_0_10px_rgba(226,216,43,0.6)]' : 'bg-white/20'
                }`}
                aria-label={`Show partners collage ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
