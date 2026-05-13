import React, { useState, useEffect } from 'react';
import { ExternalLink, Globe, Smartphone, Bot } from 'lucide-react';
import Reveal from './Reveal';

const categories = [
  { id: 'web', name: 'تطوير الويب', icon: Globe },
  { id: 'apps', name: 'تطبيقات الأندرويد وأنظمة الـ Saas', icon: Smartphone },
  { id: 'ai', name: 'أتمتة وAI', icon: Bot },
];

const projects = [
  // Web & E-commerce
  {
    id: 1,
    title: 'منصة أنا كفو التعليمية',
    category: 'web',
    image: '/website/1.webp',
    link: 'https://Ana-Kafou.com',
    displayUrl: 'Ana-Kafou.com',
  },
  {
    id: 7,
    title: 'موقع وكالة بوفا التسويقية',
    category: 'web',
    image: '/website/bova-agency.webp',
    link: 'https://PovaAgency.com',
    displayUrl: 'PovaAgency.com',
  },
  {
    id: 14,
    title: 'جاردينيا للاستشارات البيئية',
    category: 'web',
    image: '/website/14.jpeg',
    link: 'https://GardeniaEC.com',
    displayUrl: 'GardeniaEC.com',
  },
  {
    id: 13,
    title: 'شركة الوسام ليموزين',
    category: 'web',
    image: '/website/13.webp',
    link: 'https://el-wessam.netlify.app',
    displayUrl: 'El-Wessam.com',
  },
  {
    id: 12,
    title: 'الرؤى للتجارة والتوريدات',
    category: 'web',
    image: '/website/12.png',
    link: 'https://elroaa-store.com',
    displayUrl: 'Elroaa-Store.com',
  },
  {
    id: 5,
    title: 'موقع شركة الماسة الصناعية',
    category: 'web',
    image: '/website/5.webp',
    link: 'https://Almasa.com.sa',
    displayUrl: 'Almasa.com.sa',
  },
  {
    id: 15,
    title: 'موقع د. حاتم جلال سعيد',
    category: 'web',
    image: '/website/15.webp',
    link: 'https://Dr-HatemGalalSaid.com',
    displayUrl: 'Dr-HatemGalalSaid.com',
  },
  // Apps
  {
    id: 101,
    title: 'تطبيق ممتن',
    category: 'apps',
    image: '/androin/oc.png',
    link: 'https://momtn.app/',
    displayUrl: 'تطبيق تواصل إجتماعي',
  },
  {
    id: 102,
    title: 'تطبيق تاجر أونلاين',
    category: 'apps',
    image: '/androin/momtn.png',
    link: 'https://play.google.com/store/apps/details?id=com.tagronline.app',
    displayUrl: 'تطبيق للتجارة الإلكترونية',
  },
  // AI & Automation
  {
    id: 301,
    title: 'وكيل الرد على العملاء (Ai Chat Agent)',
    category: 'ai',
    image: '/Ai/1.png',
    link: '#',
    displayUrl: 'شركة سمارت تيم للإنشاءات',
  },
  {
    id: 302,
    title: 'برنامج التحدث مع ملفات البيانات (ChatWithData)',
    category: 'ai',
    image: '/Ai/2.png',
    link: '#',
    displayUrl: 'جمعية رسالة للأعمال الخيرية',
  }
];

const INITIAL_VISIBLE = 4;

export default function SoftwarePortfolio() {
  const [activeTab, setActiveTab] = useState('web');
  const [showAll, setShowAll] = useState(false);

  const filteredProjects = projects.filter(p => p.category === activeTab);

  useEffect(() => {
    setShowAll(false);
  }, [activeTab]);

  const visibleProjects = showAll
    ? filteredProjects
    : filteredProjects.slice(0, INITIAL_VISIBLE);
  const hasMore = filteredProjects.length > INITIAL_VISIBLE;

  return (
    <div 
      className="w-full mt-16 mb-24"
      dir="rtl"
    >
      <Reveal>
        <div className="flex justify-center items-center gap-3 mb-10 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-firefly-yellow via-white to-firefly-green animate-gradient bg-gradient-animation">
            Software & Web Development
          </h2>
        </div>
      </Reveal>

      {/* Tabs Selection */}
      <Reveal width="100%">
        <div className="flex flex-wrap justify-center gap-1.5 md:gap-4 mb-6 md:mb-12 px-2" dir="rtl">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => {
                setActiveTab(cat.id);
              }}
              className={`group relative flex items-center justify-center gap-1 md:gap-2 px-2.5 py-2 md:px-6 md:py-3 rounded-lg md:rounded-2xl font-bold text-[10px] md:text-base transition-all duration-300 border flex-1 min-w-[100px] max-w-[160px] md:min-w-0 md:max-w-none md:flex-none ${
                activeTab === cat.id
                  ? 'bg-firefly-green/20 border-firefly-green text-white shadow-[0_0_15px_rgba(0,238,138,0.3)] scale-105'
                  : 'bg-white/5 border-white/10 text-gray-400 hover:bg-white/10 hover:text-white'
              }`}
            >
              <cat.icon className={`w-3 h-3 md:w-5 md:h-5 shrink-0 transition-colors ${activeTab === cat.id ? 'text-firefly-yellow' : 'text-gray-400 group-hover:text-firefly-yellow'}`} />
              <span className="relative z-10 text-center leading-tight">{cat.name}</span>
            </button>
          ))}
        </div>
      </Reveal>

      {/* Projects Grid */}
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-8 min-h-[280px] md:min-h-[400px] px-3 md:px-4">
        {visibleProjects.map((project, index) => (
          <Reveal key={`${activeTab}-${project.id}`} delay={index * 100} width="100%">
            <div className="group relative rounded-xl md:rounded-3xl overflow-hidden bg-[#152538] border border-white/5 hover:border-firefly-green/30 shadow-lg transition-all duration-500 hover:-translate-y-0.5 md:hover:-translate-y-2">
              {/* Project Image */}
              <div className="relative aspect-[4/3] md:aspect-[16/10] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#152538] via-transparent to-transparent opacity-80" />
              </div>

              {/* Website URL Bar */}
              <div className="relative py-1.5 px-2 md:py-3 md:px-5 border-b border-white/5 bg-[#1a2d42]">
                <div className="flex items-center gap-1.5 md:gap-3 w-full min-w-0">
                  <div className="p-1 md:p-2 rounded-md md:rounded-lg bg-firefly-dark border border-white/10 group-hover:border-firefly-green/50 transition-colors shrink-0">
                    {activeTab === 'apps' ? 
                    <Smartphone className="w-3 h-3 md:w-5 md:h-5 text-firefly-yellow" /> :
                    activeTab === 'ai' ? 
                    <Bot className="w-3 h-3 md:w-5 md:h-5 text-firefly-yellow" /> :
                    <Globe className="w-3 h-3 md:w-5 md:h-5 text-firefly-yellow" />
                  }
                  </div>
                  <span className="text-white/70 text-[10px] md:text-sm font-medium tracking-wide truncate group-hover:text-firefly-green transition-colors duration-300" dir="ltr">
                    {project.displayUrl}
                  </span>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-2 md:p-6 flex flex-col gap-2 md:gap-4">
                <h3 className="text-[11px] md:text-xl font-bold text-white group-hover:text-firefly-yellow transition-colors line-clamp-2 md:line-clamp-1 leading-snug">
                  {project.title}
                </h3>

                <a
                  href={project.link !== '#' ? project.link : undefined}
                  target={project.link !== '#' ? "_blank" : undefined}
                  rel={project.link !== '#' ? "noopener noreferrer" : undefined}
                  className={`relative inline-flex items-center justify-center w-full px-2 py-1.5 md:px-6 md:py-3 font-bold text-firefly-dark bg-firefly-green hover:bg-firefly-yellow transition-colors duration-300 rounded-md md:rounded-xl overflow-hidden shadow-[0_0_10px_rgba(0,238,138,0.15)] md:shadow-[0_0_15px_rgba(0,238,138,0.2)] hover:shadow-[0_0_20px_rgba(226,216,43,0.4)] ${project.link === '#' ? 'opacity-50 cursor-not-allowed' : ''}`}
                  onClick={(e) => project.link === '#' && e.preventDefault()}
                >
                  <div className="relative z-10 flex items-center gap-1 md:gap-2">
                    <span className="tracking-wide text-[10px] md:text-base">{activeTab === 'apps' ? 'عرض التطبيق' : 'عرض الموقع'}</span>
                    <ExternalLink className="w-3 h-3 md:w-4 md:h-4 shrink-0" />
                  </div>
                </a>
              </div>

              {/* Bottom Gradient Line */}
              <div className="absolute bottom-0 left-0 h-1 md:h-1.5 w-0 group-hover:w-full transition-all duration-500 bg-gradient-to-r from-firefly-yellow to-firefly-green" />
            </div>
          </Reveal>
        ))}
      </div>

      {hasMore && !showAll && (
        <Reveal width="100%">
          <div className="flex justify-center mt-6 md:mt-8 px-4">
            <button
              type="button"
              onClick={() => setShowAll(true)}
              className="px-5 py-2 md:px-8 md:py-3 rounded-lg md:rounded-xl font-bold text-xs md:text-base text-white bg-white/10 border border-white/15 hover:bg-white/15 hover:border-firefly-green/40 transition-all duration-300"
            >
              إظهار المزيد
            </button>
          </div>
        </Reveal>
      )}
    </div>
  );
}
