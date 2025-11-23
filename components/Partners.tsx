import React, { useEffect, useRef, useState } from 'react';
import Reveal from './Reveal';

// Generate array of 33 images
const PARTNER_IMAGES = Array.from({ length: 33 }, (_, i) => `/Our-partners/${i + 1}.png`);

// Split images into two rows
const ROW_1 = PARTNER_IMAGES.slice(0, 17);
const ROW_2 = PARTNER_IMAGES.slice(17);

const Partners: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef<HTMLElement | null>(null);

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
            { threshold: 0.1 }
        );

        observer.observe(node);
        return () => observer.disconnect();
    }, []);

    return (
        <section
            ref={sectionRef}
            className={`py-24 relative overflow-hidden bg-firefly-dark transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
                }`}
        >
            <style>{`
        @keyframes scroll-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes scroll-right {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .animate-scroll-left {
          animation: scroll-left 40s linear infinite;
        }
        .animate-scroll-right {
          animation: scroll-right 40s linear infinite;
        }
        .pause-on-hover:hover {
          animation-play-state: paused;
        }
      `}</style>

            {/* Background Elements */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-[-10%] left-[5%] w-[500px] h-[500px] bg-firefly-yellow/5 rounded-full blur-[140px]"></div>
                <div className="absolute bottom-[-15%] right-[10%] w-[600px] h-[600px] bg-firefly-green/5 rounded-full blur-[150px]"></div>
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay"></div>
            </div>

            <div className="container-fluid relative z-10">
                <Reveal width="100%">
                    <div className="text-center max-w-3xl mx-auto mb-8 space-y-4 px-4">
                        <span className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-white/10 bg-white/5 text-xs tracking-[0.4em] uppercase text-white/80 backdrop-blur-sm">
                            Trusted Allies
                            <span className="w-1.5 h-1.5 rounded-full bg-firefly-green animate-pulse"></span>
                        </span>
                        <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white">
                            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-firefly-yellow to-firefly-green">Partners</span>
                        </h2>
                        <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
                            We are proud to collaborate with visionary brands that trust us to illuminate their path to growth.
                        </p>
                    </div>
                </Reveal>

                <div className="flex flex-col gap-6">
                    {/* Row 1 - Moving Left */}
                    <div className="relative w-full overflow-hidden py-4">
                        {/* Gradient Masks */}
                        <div className="absolute left-0 top-0 bottom-0 w-20 md:w-40 bg-gradient-to-r from-firefly-dark to-transparent z-10"></div>
                        <div className="absolute right-0 top-0 bottom-0 w-20 md:w-40 bg-gradient-to-l from-firefly-dark to-transparent z-10"></div>

                        <div className="flex w-max animate-scroll-left pause-on-hover">
                            {[...ROW_1, ...ROW_1].map((image, index) => (
                                <div key={`row1-${index}`} className="mx-2 md:mx-4 w-[150px] md:w-[200px] flex items-center justify-center">
                                    <div className="group relative p-3 rounded-2xl bg-white/5 border border-white/5 hover:border-white/20 hover:bg-white/10 transition-all duration-300 w-full aspect-[3/2] flex items-center justify-center">
                                        <div className="absolute inset-0 bg-gradient-to-br from-firefly-yellow/0 to-firefly-green/0 group-hover:from-firefly-yellow/10 group-hover:to-firefly-green/10 rounded-2xl transition-all duration-500 opacity-0 group-hover:opacity-100"></div>
                                        <img
                                            src={image}
                                            alt="Partner"
                                            className="w-full h-full object-contain transition-all duration-500 transform group-hover:scale-110"
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Row 2 - Moving Right */}
                    <div className="relative w-full overflow-hidden py-4">
                        {/* Gradient Masks */}
                        <div className="absolute left-0 top-0 bottom-0 w-20 md:w-40 bg-gradient-to-r from-firefly-dark to-transparent z-10"></div>
                        <div className="absolute right-0 top-0 bottom-0 w-20 md:w-40 bg-gradient-to-l from-firefly-dark to-transparent z-10"></div>

                        <div className="flex w-max animate-scroll-right pause-on-hover">
                            {[...ROW_2, ...ROW_2].map((image, index) => (
                                <div key={`row2-${index}`} className="mx-2 md:mx-4 w-[150px] md:w-[200px] flex items-center justify-center">
                                    <div className="group relative p-3 rounded-2xl bg-white/5 border border-white/5 hover:border-white/20 hover:bg-white/10 transition-all duration-300 w-full aspect-[3/2] flex items-center justify-center">
                                        <div className="absolute inset-0 bg-gradient-to-br from-firefly-yellow/0 to-firefly-green/0 group-hover:from-firefly-yellow/10 group-hover:to-firefly-green/10 rounded-2xl transition-all duration-500 opacity-0 group-hover:opacity-100"></div>
                                        <img
                                            src={image}
                                            alt="Partner"
                                            className="w-full h-full object-contain transition-all duration-500 transform group-hover:scale-110"
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Partners;
