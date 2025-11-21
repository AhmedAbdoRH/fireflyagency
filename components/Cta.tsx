import React from 'react';
import { ArrowRight, Mail, Target, Eye } from 'lucide-react';
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
                <h2 className="relative z-10 font-heading text-4xl md:text-5xl font-bold text-white mb-4">
                  FireFly - <span className="text-firefly-yellow">raise and shine</span>
                </h2>
                <p className="relative z-10 text-gray-300 text-lg md:text-xl max-w-2xl mx-auto mb-10">
                  At Firefly, “Rise and Shine” is more than a slogan — it’s a promise. We lift brands with smart strategy and make them shine with bold creativity. From branding to digital campaigns and media production, we craft solutions that help your business stand out and grow with confidence.
                </p>
              </Reveal>

              <Reveal delay={100} width="100%">
                <h2 className="relative z-10 font-heading text-3xl md:text-4xl font-bold text-white mb-4 flex items-center justify-center gap-3">
                  <Target className="w-8 h-8 text-firefly-yellow" /> Our Mission
                </h2>
                <p className="relative z-10 text-gray-300 text-lg md:text-xl max-w-2xl mx-auto mb-10">
                  Is to be the guiding light for businesses seeking to navigate the complex landscape of modern marketing. We aim to empower our clients by delivering cutting-edge strategies, exceptional creativity, and unparalleled customer service, ultimately helping them shine brightly in their respective industries.
                </p>
              </Reveal>

              <Reveal delay={150} width="100%">
                <h2 className="relative z-10 font-heading text-3xl md:text-4xl font-bold text-white mb-4 flex items-center justify-center gap-3">
                  <Eye className="w-8 h-8 text-firefly-yellow" /> Our Vision
                </h2>
                <p className="relative z-10 text-gray-300 text-lg md:text-xl max-w-2xl mx-auto mb-10">
                  We believe that with the right strategy and creative vision, any business can achieve its full potential. Let us be the guiding light on your journey to success. Contact us today to learn more about how we can help your brand shine brighter than ever before.
                </p>
              </Reveal>

<Reveal delay={200} width="100%">
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