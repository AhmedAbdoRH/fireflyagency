import React from 'react';
import { TrendingUp, Target, Zap } from 'lucide-react';
import Reveal from './Reveal';

const WhyUs: React.FC = () => {
    return (
        <section className="py-20 bg-firefly-dark relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-firefly-green/5 rounded-full blur-[120px] pointer-events-none"></div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-4xl mx-auto text-center">
                    <Reveal width="100%">
                        <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight">
                            Why Is partnering with us is a <span className="text-firefly-yellow">game changer?</span>
                        </h2>
                    </Reveal>

                    <Reveal delay={200} width="100%">
                        <div className="p-8 md:p-12 rounded-3xl bg-white/5 backdrop-blur-sm border border-white/10 relative overflow-hidden group hover:bg-white/10 transition-colors duration-500">
                            {/* Decorative Icons */}
                            <TrendingUp className="absolute top-10 left-10 w-12 h-12 text-white/5 group-hover:text-firefly-yellow/20 transition-colors duration-500" />
                            <Target className="absolute bottom-10 right-10 w-12 h-12 text-white/5 group-hover:text-firefly-green/20 transition-colors duration-500" />

                            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed font-light">
                                At <span className="font-bold text-white">Firefly</span>, we ensure that not only your marketing objectives are being met, but also that your business is <span className="text-firefly-green font-semibold">thriving</span>.
                                <br /><br />
                                We're not just about quick wins; we focus on <span className="text-firefly-yellow font-semibold">growth</span> that builds your brand.
                            </p>
                        </div>
                    </Reveal>
                </div>
            </div>
        </section>
    );
};

export default WhyUs;
