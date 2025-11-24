import React from 'react';
import {
    Stethoscope,
    UserCircle,
    Factory,
    Sparkles,
    Pill,
    Scissors,
    HardHat,
    Utensils,
    Building2,
    GraduationCap,
    Plane,
    Gem
} from 'lucide-react';
import Reveal from './Reveal';

const industries = [
    { name: 'Medical', icon: <Stethoscope className="w-6 h-6" /> },
    { name: 'Personal Branding', icon: <UserCircle className="w-6 h-6" /> },
    { name: 'Industrial Services', icon: <Factory className="w-6 h-6" /> },
    { name: 'Cosmetics', icon: <Sparkles className="w-6 h-6" /> },
    { name: 'Pharmacies', icon: <Pill className="w-6 h-6" /> },
    { name: 'Fashion', icon: <Scissors className="w-6 h-6" /> },
    { name: 'Construction', icon: <HardHat className="w-6 h-6" /> },
    { name: 'Restaurants', icon: <Utensils className="w-6 h-6" /> },
    { name: 'Commercial', icon: <Building2 className="w-6 h-6" /> },
    { name: 'Educational Courses', icon: <GraduationCap className="w-6 h-6" /> },
    { name: 'Travel Agencies', icon: <Plane className="w-6 h-6" /> },
    { name: 'Gold', icon: <Gem className="w-6 h-6" /> },
];

const Industries: React.FC = () => {
    return (
        <section className="py-24 bg-firefly-dark relative overflow-hidden">
            <div className="container mx-auto px-4 relative z-10">

                {/* Header Section */}
                <div className="max-w-4xl mx-auto text-center mb-16">
                    <Reveal width="100%">
                        <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6 leading-relaxed">
                            Walk you through how we crafted these services for our <span className="text-firefly-yellow">partners and clients</span>
                        </h2>
                    </Reveal>
                    <Reveal delay={200} width="100%">
                        <p className="text-gray-400 text-lg">
                            We are proud of each project we undertook, as a true testament to our dedication and expertise.
                        </p>
                    </Reveal>
                </div>

                {/* Industries Grid */}
                <div className="mb-12">
                    <Reveal width="100%">
                        <h3 className="text-2xl font-bold mb-8 text-center">Some Industries we working with:</h3>
                    </Reveal>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
                        {industries.map((industry, index) => (
                            <Reveal key={index} delay={index * 50} width="100%">
                                <div className="group p-6 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-firefly-yellow/30 transition-all duration-300 flex flex-col items-center justify-center gap-4 text-center hover:-translate-y-1">
                                    <div className="p-3 rounded-full bg-white/5 text-firefly-yellow group-hover:scale-110 transition-transform duration-300">
                                        {industry.icon}
                                    </div>
                                    <span className="font-semibold text-gray-200 group-hover:text-white transition-colors">
                                        {industry.name}
                                    </span>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Industries;
