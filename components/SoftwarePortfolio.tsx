import React, { useState, useEffect, useCallback } from 'react';
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
    image: '/website/8.webp',
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

export default function SoftwarePortfolio() {
  const [activeTab, setActiveTab] = useState('web');
  const [isPaused, setIsPaused] = useState(false);
  const [progress, setProgress] = useState(0);

  const getAutoplayDuration = (tabId: string) => {
    return tabId === 'web' ? 16000 : 8000;
  };

  const handleNextTab = useCallback(() => {
    const currentIndex = categories.findIndex(cat => cat.id === activeTab);
    const nextIndex = (currentIndex + 1) % categories.length;
    setActiveTab(categories[nextIndex].id);
    setProgress(0);
  }, [activeTab]);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    let progressInterval: NodeJS.Timeout;

    if (!isPaused) {
      const currentDuration = getAutoplayDuration(activeTab);
      const PROGRESS_STEP = 100 / (currentDuration / 100);

      progressInterval = setInterval(() => {
        setProgress(prev => {
          if (prev >= 100) return 0;
          return prev + PROGRESS_STEP;
        });
      }, 100);

      interval = setInterval(() => {
        handleNextTab();
      }, currentDuration);
    }

    return () => {
      clearInterval(interval);
      clearInterval(progressInterval);
    };
  }, [isPaused, handleNextTab, activeTab]);

  const filteredProjects = projects.filter(p => p.category === activeTab);

  return (
    <div 
      className="w-full mt-16 mb-24"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
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
        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12" dir="rtl">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => {
                setActiveTab(cat.id);
                setProgress(0);
              }}
              className={`group relative flex items-center gap-2 px-4 py-3 md:px-6 md:py-3 rounded-2xl font-bold text-sm md:text-base transition-all duration-300 border ${
                activeTab === cat.id
                  ? 'bg-firefly-green/20 border-firefly-green text-white shadow-[0_0_15px_rgba(0,238,138,0.3)] scale-105'
                  : 'bg-white/5 border-white/10 text-gray-400 hover:bg-white/10 hover:text-white'
              }`}
            >
              <cat.icon className={`w-4 h-4 md:w-5 md:h-5 transition-colors ${activeTab === cat.id ? 'text-firefly-yellow' : 'text-gray-400 group-hover:text-firefly-yellow'}`} />
              <span className="relative z-10">{cat.name}</span>

              {/* Progress Indicator */}
              {activeTab === cat.id && (
                <div className="absolute bottom-0 left-0 h-1 bg-firefly-green/20 w-full rounded-b-2xl overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-firefly-yellow to-firefly-green transition-all duration-100 ease-linear"
                    style={{ width: `${progress}%` }}
                  />
                </div>
              )}
            </button>
          ))}
        </div>
      </Reveal>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 min-h-[400px]">
        {filteredProjects.map((project, index) => (
          <Reveal key={`${activeTab}-${project.id}`} delay={index * 100} width="100%">
            <div className="group relative rounded-3xl overflow-hidden bg-[#152538] border border-white/5 hover:border-firefly-green/30 shadow-lg transition-all duration-500 hover:-translate-y-2">
              {/* Project Image */}
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#152538] via-transparent to-transparent opacity-80" />
              </div>

              {/* Website URL Bar */}
              <div className="relative py-3 px-5 border-b border-white/5 bg-[#1a2d42]">
                <div className="flex items-center gap-3 w-full">
                  <div className="p-2 rounded-lg bg-firefly-dark border border-white/10 group-hover:border-firefly-green/50 transition-colors">
                    {activeTab === 'apps' ? 
                    <Smartphone className="w-4 h-4 md:w-5 md:h-5 text-firefly-yellow" /> :
                    activeTab === 'ai' ? 
                    <Bot className="w-4 h-4 md:w-5 md:h-5 text-firefly-yellow" /> :
                    <Globe className="w-4 h-4 md:w-5 md:h-5 text-firefly-yellow" />
                  }
                  </div>
                  <span className="text-white/70 text-sm font-medium tracking-wide truncate group-hover:text-firefly-green transition-colors duration-300" dir="ltr">
                    {project.displayUrl}
                  </span>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6 flex flex-col gap-4">
                <h3 className="text-lg md:text-xl font-bold text-white group-hover:text-firefly-yellow transition-colors line-clamp-1">
                  {project.title}
                </h3>

                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative inline-flex items-center justify-center w-full px-6 py-3 font-bold text-firefly-dark bg-firefly-green hover:bg-firefly-yellow transition-colors duration-300 rounded-xl overflow-hidden shadow-[0_0_15px_rgba(0,238,138,0.2)] hover:shadow-[0_0_20px_rgba(226,216,43,0.4)]"
                >
                  <div className="relative z-10 flex items-center gap-2">
                    <span className="tracking-wide">{activeTab === 'apps' ? 'عرض التطبيق' : 'عرض الموقع'}</span>
                    <ExternalLink className="w-4 h-4" />
                  </div>
                </a>
              </div>

              {/* Bottom Gradient Line */}
              <div className="absolute bottom-0 left-0 h-1.5 w-0 group-hover:w-full transition-all duration-500 bg-gradient-to-r from-firefly-yellow to-firefly-green" />
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
