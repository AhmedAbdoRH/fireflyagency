import React from 'react';
import { Twitter, Linkedin, Instagram, Github, Flame } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#132235] pt-20 pb-10 border-t border-white/5">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-6 select-none">
               <div className="relative w-10 h-10 flex items-center justify-center">
                  <svg viewBox="0 0 100 100" className="w-full h-full">
                      {/* Wings */}
                      <path d="M10 40 Q 25 20 45 38" fill="#f8fafc" opacity="0.9" />
                      <path d="M90 40 Q 75 20 55 38" fill="#f8fafc" opacity="0.9" />
                      {/* Bulb Body */}
                      <path d="M32 32 A 23 23 0 1 1 68 32 L 62 65 L 38 65 Z" fill="#1c324e" stroke="#e2d82b" strokeWidth="3" />
                      {/* Brain */}
                      <path d="M40 35 Q 50 25 60 35" stroke="#e2d82b" strokeWidth="2" fill="none" />
                      <path d="M42 45 Q 50 35 58 45" stroke="#e2d82b" strokeWidth="2" fill="none" />
                      {/* Base */}
                      <rect x="40" y="68" width="20" height="4" rx="2" fill="#e2d82b" />
                      <rect x="42" y="74" width="16" height="4" rx="2" fill="#e2d82b" />
                  </svg>
               </div>
               <div className="flex flex-col justify-center">
                <span className="font-serif font-bold text-2xl text-white leading-none tracking-wide">
                  Firefly
                </span>
                <span className="font-sans text-[0.5rem] font-bold text-firefly-yellow tracking-[0.2em] uppercase leading-none mt-1">
                  creative solutions
                </span>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Illuminating the path to digital dominance. We build the engines that power modern business growth.
            </p>
            <div className="flex gap-4">
              {[Twitter, Linkedin, Instagram, Github].map((Icon, i) => (
                <a key={i} href="#" className="text-gray-500 hover:text-firefly-yellow transition-colors">
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2 */}
          <div>
            <h4 className="text-white font-bold mb-6">Services</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              {['Outreach Automation', 'CRM Integration', 'Web Design', 'PPC Advertising', 'SEO Strategy'].map(item => (
                <li key={item}><a href="#" className="hover:text-firefly-green transition-colors">{item}</a></li>
              ))}
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h4 className="text-white font-bold mb-6">Company</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              {['About Us', 'Careers', 'Case Studies', 'Blog', 'Contact'].map(item => (
                <li key={item}><a href="#" className="hover:text-firefly-green transition-colors">{item}</a></li>
              ))}
            </ul>
          </div>

          {/* Column 4 */}
          <div>
            <h4 className="text-white font-bold mb-6">Newsletter</h4>
            <p className="text-gray-400 text-sm mb-4">Get the latest growth hacks delivered to your inbox.</p>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="Enter email" 
                className="bg-firefly-dark border border-white/10 rounded-lg px-4 py-2 text-white text-sm focus:outline-none focus:border-firefly-yellow w-full placeholder-gray-500"
              />
              <button className="bg-firefly-yellow hover:bg-firefly-green text-firefly-dark p-2 rounded-lg transition-colors">
                <Flame className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>&copy; {currentYear} Firefly Creative Solutions. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;