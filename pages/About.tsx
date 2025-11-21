import React, { useEffect } from 'react';
import { Compass, Lightbulb } from 'lucide-react';
import Stats from '../components/Stats';
import WhyUs from '../components/WhyUs';
import Process from '../components/Process';
import Industries from '../components/Industries';
import Reveal from '../components/Reveal';

const About: React.FC = () => {
    // Scroll to top when component mounts
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="pt-20">
            {/* About Header */}
            <section className="py-20 bg-firefly-dark relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                    <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-firefly-green/10 rounded-full blur-[100px]"></div>
                </div>

                <div className="container mx-auto px-4 relative z-10 text-center">
                    <Reveal width="100%">
                        <h1 className="font-heading text-5xl md:text-7xl font-bold mb-6">
                            About <span className="text-firefly-yellow">Firefly</span>
                        </h1>
                    </Reveal>
                    <Reveal delay={200} width="100%">
                        <p className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed text-justify mb-16">
                            <span className="font-bold text-white">Firefly Marketing Agency</span> is a dynamic and innovative marketing firm dedicated to illuminating brands and businesses through strategic and creative solutions. Our clients receive customized solutions based on their specific goals and challenges.
                            <br /><br />
                            With a passion for igniting growth and visibility, we specialize in crafting tailored marketing strategies that resonate with target audiences and drive tangible results. Our team consists of skilled professionals with diverse expertise in digital marketing to make you stand out in a competitive digital landscape.
                        </p>
                    </Reveal>

                    {/* Rise and Shine Section */}
                    <Reveal delay={300} width="100%">
                        <div className="max-w-4xl mx-auto bg-white/5 rounded-2xl p-8 md:p-12 border border-white/10 mb-16 relative overflow-hidden group hover:bg-white/10 transition-colors duration-500">
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-firefly-yellow to-firefly-green transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                            <h3 className="text-3xl font-heading font-bold text-firefly-yellow mb-6">FireFly - Rise and Shine</h3>
                            <p className="text-lg text-gray-300 leading-relaxed">
                                At Firefly, “Rise and Shine” is more than a slogan — it’s a promise. We lift brands with smart strategy and make them shine with bold creativity. From branding to digital campaigns and media production, we craft solutions that help your business stand out and grow with confidence.
                            </p>
                        </div>
                    </Reveal>

                    {/* Mission & Vision Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto text-left">
                        {/* Mission */}
                        <Reveal delay={400} width="100%">
                            <div className="h-full p-8 md:p-10 rounded-2xl bg-gradient-to-br from-white/5 to-transparent border border-white/10 hover:border-firefly-yellow/30 transition-all duration-300 hover:-translate-y-2">
                                <div className="w-14 h-14 bg-firefly-yellow/10 rounded-xl flex items-center justify-center mb-6 text-firefly-yellow">
                                    <Compass className="w-8 h-8" />
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-4">Our Mission</h3>
                                <p className="text-gray-400 leading-relaxed">
                                    Is to be the guiding light for businesses seeking to navigate the complex landscape of modern marketing. We aim to empower our clients by delivering cutting-edge strategies, exceptional creativity, and unparalleled customer service, ultimately helping them shine brightly in their respective industries.
                                </p>
                            </div>
                        </Reveal>

                        {/* Vision */}
                        <Reveal delay={500} width="100%">
                            <div className="h-full p-8 md:p-10 rounded-2xl bg-gradient-to-br from-white/5 to-transparent border border-white/10 hover:border-firefly-green/30 transition-all duration-300 hover:-translate-y-2">
                                <div className="w-14 h-14 bg-firefly-green/10 rounded-xl flex items-center justify-center mb-6 text-firefly-green">
                                    <Lightbulb className="w-8 h-8" />
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-4">Our Vision</h3>
                                <p className="text-gray-400 leading-relaxed">
                                    We believe that with the right strategy and creative vision, any business can achieve its full potential. Let us be the guiding light on your journey to success. Contact us today to learn more about how we can help your brand shine brighter than ever before.
                                </p>
                            </div>
                        </Reveal>
                    </div>
                </div>
            </section>

            <Stats />
            <WhyUs />
            <Process />
            <Industries />
        </div>
    );
};

export default About;
