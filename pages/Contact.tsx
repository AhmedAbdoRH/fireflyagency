import React from 'react';
import Reveal from '../components/Reveal';
import { Mail, Phone, MapPin, Send, Instagram, Facebook, MessageCircle } from 'lucide-react';

const Contact: React.FC = () => {
    return (
        <section className="min-h-screen bg-firefly-dark pt-32 pb-20 px-4 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-firefly-green/10 rounded-full blur-[150px] animate-pulse"></div>
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-firefly-yellow/10 rounded-full blur-[150px] animate-pulse" style={{ animationDelay: '1s' }}></div>
                <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)`, backgroundSize: '60px 60px' }}></div>
            </div>

            <div className="container mx-auto max-w-6xl relative z-10">
                <Reveal width="100%">
                    <div className="text-center mb-16">
                        <span className="inline-flex items-center gap-2 px-4 py-1 rounded-full border border-white/10 bg-white/5 text-xs tracking-[0.4em] uppercase text-white/80 mb-6">
                            Get in Touch
                            <span className="w-1.5 h-1.5 rounded-full bg-firefly-yellow"></span>
                        </span>
                        <h1 className="font-heading text-4xl md:text-6xl font-bold text-white mb-6">
                            Let's Start a <span className="text-firefly-yellow">Conversation</span>
                        </h1>
                        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                            Ready to ignite your brand's potential? We're here to help you shine brighter. Reach out to us for inquiries, collaborations, or just to say hello.
                        </p>
                    </div>
                </Reveal>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
                    {/* Contact Info */}
                    <Reveal delay={200} width="100%">
                        <div className="space-y-10">
                            <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-sm hover:bg-white/10 transition-colors duration-300">
                                <h3 className="text-2xl font-heading font-bold text-white mb-8">Contact Information</h3>

                                <div className="space-y-8">
                                    <div className="flex items-start gap-6 group">
                                        <div className="w-12 h-12 rounded-xl bg-firefly-yellow/10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                                            <Mail className="w-6 h-6 text-firefly-yellow" />
                                        </div>
                                        <div>
                                            <p className="text-sm uppercase tracking-wider text-gray-500 mb-1">Email Us</p>
                                            <a href="mailto:info@firefly-agency.com" className="text-xl text-white font-medium hover:text-firefly-yellow transition-colors">
                                                info@firefly-agency.com
                                            </a>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-6 group">
                                        <div className="w-12 h-12 rounded-xl bg-green-500/10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                                            <MessageCircle className="w-6 h-6 text-green-400" />
                                        </div>
                                        <div>
                                            <p className="text-sm uppercase tracking-wider text-gray-500 mb-1">WhatsApp</p>
                                            <a href="https://wa.me/+201552479991" target="_blank" rel="noopener noreferrer" className="text-xl text-white font-medium hover:text-green-400 transition-colors">
                                                01552479991
                                            </a>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-6 group">
                                        <div className="w-12 h-12 rounded-xl bg-firefly-green/10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                                            <Phone className="w-6 h-6 text-firefly-green" />
                                        </div>
                                        <div>
                                            <p className="text-sm uppercase tracking-wider text-gray-500 mb-1">Call Us</p>
                                            <a href="tel:+201552479991" className="text-xl text-white font-medium hover:text-firefly-green transition-colors">
                                                01552479991
                                            </a>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-6 group">
                                        <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                                            <MapPin className="w-6 h-6 text-purple-400" />
                                        </div>
                                        <div>
                                            <p className="text-sm uppercase tracking-wider text-gray-500 mb-1">Visit Us</p>
                                            <p className="text-xl text-white font-medium">
                                                2 Almazah Street, <br />
                                                Cairo, Egypt
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-sm">
                                <h3 className="text-xl font-heading font-bold text-white mb-6">Follow Our Journey</h3>
                                <div className="flex gap-4">
                                    <a
                                        href="https://www.instagram.com/firefly_creativesolutions/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-firefly-yellow hover:border-firefly-yellow hover:bg-firefly-yellow/10 transition-all duration-300"
                                        aria-label="Instagram"
                                    >
                                        <Instagram className="w-5 h-5" />
                                    </a>
                                    <a
                                        href="https://www.facebook.com/people/Firefly-Creative-Solutions/61552621582651/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-firefly-yellow hover:border-firefly-yellow hover:bg-firefly-yellow/10 transition-all duration-300"
                                        aria-label="Facebook"
                                    >
                                        <Facebook className="w-5 h-5" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </Reveal>

                    {/* Contact Form */}
                    <Reveal delay={400} width="100%">
                        <div className="bg-white/5 border border-white/10 rounded-3xl p-8 md:p-10 backdrop-blur-sm relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-firefly-yellow/5 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2"></div>

                            <h3 className="text-2xl font-heading font-bold text-white mb-8 relative z-10">Send us a Message</h3>

                            <form 
                                action="https://getform.io/f/awnxyjzb"
                                method="POST"
                                className="space-y-6 relative z-10"
                            >
                                <input type="hidden" name="_gotcha" value="info@firefly-agency.com" />
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label htmlFor="name" className="text-sm text-gray-400 ml-2">Your Name</label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            required
                                            className="w-full bg-firefly-dark/50 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-firefly-yellow/50 focus:ring-1 focus:ring-firefly-yellow/50 transition-all placeholder:text-gray-600"
                                            placeholder="John Doe"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="email" className="text-sm text-gray-400 ml-2">Email Address</label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            required
                                            className="w-full bg-firefly-dark/50 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-firefly-yellow/50 focus:ring-1 focus:ring-firefly-yellow/50 transition-all placeholder:text-gray-600"
                                            placeholder="john@example.com"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="subject" className="text-sm text-gray-400 ml-2">Subject</label>
                                    <select
                                        id="subject"
                                        name="subject"
                                        required
                                        className="w-full bg-firefly-dark/50 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-firefly-yellow/50 focus:ring-1 focus:ring-firefly-yellow/50 transition-all appearance-none"
                                    >
                                        <option value="" className="bg-firefly-dark text-gray-500">Select a topic</option>
                                        <option value="project" className="bg-firefly-dark">Start a Project</option>
                                        <option value="collaboration" className="bg-firefly-dark">Collaboration</option>
                                        <option value="general" className="bg-firefly-dark">General Inquiry</option>
                                    </select>
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="message" className="text-sm text-gray-400 ml-2">Message</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows={5}
                                        required
                                        className="w-full bg-firefly-dark/50 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-firefly-yellow/50 focus:ring-1 focus:ring-firefly-yellow/50 transition-all placeholder:text-gray-600 resize-none"
                                        placeholder="Tell us about your project..."
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    className="w-full bg-gradient-to-r from-firefly-yellow to-firefly-green text-firefly-dark font-bold py-4 rounded-xl shadow-[0_0_20px_rgba(226,216,43,0.3)] hover:shadow-[0_0_30px_rgba(226,216,43,0.5)] transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2"
                                >
                                    <span>Send Message</span>
                                    <Send className="w-5 h-5" />
                                </button>
                            </form>
                        </div>
                    </Reveal>
                </div>
            </div>
        </section>
    );
};

export default Contact;
