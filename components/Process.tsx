import React from 'react';
import { Search, FileText, Target, TrendingUp, ArrowRight } from 'lucide-react';
import Reveal from './Reveal';

const steps = [
    {
        id: 1,
        title: 'Discovery',
        description: 'We ask the right questions to ensure we do a deep dive to understand your business. We assess current performance and identify opportunities for improvement.',
        icon: <Search className="w-8 h-8" />,
        color: 'text-firefly-yellow',
        bg: 'bg-firefly-yellow/10',
        border: 'border-firefly-yellow/20'
    },
    {
        id: 2,
        title: 'Strategize',
        description: 'Create a tailored strategy for your business with our proposed recommendations and Roadmap. We define clear objectives, KPIs, and budget allocations.',
        icon: <FileText className="w-8 h-8" />,
        color: 'text-firefly-green',
        bg: 'bg-firefly-green/10',
        border: 'border-firefly-green/20'
    },
    {
        id: 3,
        title: 'Implement',
        description: 'We implement the right set of actions with the right packages, to achieve a positive ROI.',
        icon: <Target className="w-8 h-8" />,
        color: 'text-blue-400',
        bg: 'bg-blue-400/10',
        border: 'border-blue-400/20'
    },
    {
        id: 4,
        title: 'Optimization',
        description: 'We track performance to ensure your business is on track and adjusting strategies when needed.',
        icon: <TrendingUp className="w-8 h-8" />,
        color: 'text-purple-400',
        bg: 'bg-purple-400/10',
        border: 'border-purple-400/20'
    }
];

const Process: React.FC = () => {
    return (
        <section className="py-24 bg-firefly-dark relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 left-[-10%] w-[500px] h-[500px] bg-firefly-green/5 rounded-full blur-[100px]"></div>
                <div className="absolute bottom-1/4 right-[-10%] w-[500px] h-[500px] bg-firefly-yellow/5 rounded-full blur-[100px]"></div>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <Reveal width="100%">
                    <div className="text-center mb-20">
                        <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6">
                            Here's how we ensure <span className="text-firefly-yellow">success</span> for our clients
                        </h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-firefly-yellow to-firefly-green mx-auto rounded-full"></div>
                    </div>
                </Reveal>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
                    {/* Connecting Line (Desktop) */}
                    <div className="hidden lg:block absolute top-12 left-[12%] right-[12%] h-0.5 bg-gradient-to-r from-firefly-yellow/20 via-firefly-green/20 to-purple-400/20 -z-10"></div>

                    {steps.map((step, index) => (
                        <Reveal key={step.id} delay={index * 200} width="100%">
                            <div className="group relative h-full">
                                <div className={`h-full p-8 rounded-2xl border ${step.border} bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 hover:-translate-y-2`}>
                                    {/* Icon */}
                                    <div className={`w-16 h-16 rounded-xl ${step.bg} ${step.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-[0_0_20px_rgba(0,0,0,0.2)]`}>
                                        {step.icon}
                                    </div>

                                    {/* Step Number */}
                                    <div className="absolute top-4 right-4 text-4xl font-heading font-bold text-white/5 select-none">
                                        0{step.id}
                                    </div>

                                    {/* Content */}
                                    <h3 className={`text-xl font-bold mb-4 ${step.color}`}>
                                        {step.title}
                                    </h3>
                                    <p className="text-gray-400 leading-relaxed">
                                        {step.description}
                                    </p>

                                    {/* Arrow for mobile/tablet flow indication */}
                                    {index < steps.length - 1 && (
                                        <div className="lg:hidden flex justify-center mt-6 text-white/20">
                                            <ArrowRight className="w-6 h-6 transform rotate-90 md:rotate-0" />
                                        </div>
                                    )}
                                </div>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Process;
