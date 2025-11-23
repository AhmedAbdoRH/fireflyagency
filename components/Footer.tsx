import React from 'react';
import { SERVICES } from '../../constants';
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
               <div className="relative w-14 h-14 flex items-center justify-center">
                  {/* Use Logo.png */}
                  <img 
                    src="/Logo.png" 
                    alt="Firefly Creative Solutions Logo" 
                    className="w-full h-full object-contain drop-shadow-[0_0_8px_rgba(226,216,43,0.3)]" 
                  />
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
              <a href="https://instagram.com/firefly_creativesolutions" className="text-gray-500 hover:text-firefly-yellow transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://www.facebook.com/profile.php?id=61552621582651" className="text-gray-500 hover:text-firefly-yellow transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Column 2 */}
          <div>
            <h4 className="text-white font-bold mb-6">Services</h4>
            <ul className="space-y-4 text-sm text-gray-400">
            : SERVICES.map(service => (
                <li key={service.title}><a href="#" className="hover:text-firefly-green transition-colors">{service.title}</a></li>
              ))}
            </ul>
          </div>

          {/* Column 3 - Contact Us */}
          <div>
            <h4 className="text-white font-bold mb-6">Contact Us</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><a href="mailto:info@firefly-agency.com" className="hover:text-firefly-green transition-colors">info@firefly-agency.com</a></li>
              <li><a href="https://api.whatsapp.com/send?phone=0201552479991" className="hover:text-firefly-green transition-colors">WhatsApp: +0201552479991</a></li>
              <li><a href="tel:+0201552479991" className="hover:text-firefly-green transition-colors">Phone: +0201552479991</a></li>
            </ul>
          </div>

          {/* Column 4 - Newsletter */}
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
          <p>&copy; {currentYear} Firefly Creative Solutions. All rights reserved. | Tax no.: 770-694-675</p>
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