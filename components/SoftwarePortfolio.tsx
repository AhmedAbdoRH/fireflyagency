"use client";
import React, { useState, useEffect } from 'react';
import { ExternalLink, Globe, Smartphone, Bot } from 'lucide-react';
import Reveal from './Reveal';

type ProjectCategory = 'web' | 'apps' | 'ai';

interface Project {
  id: number;
  title: string;
  category: ProjectCategory;
  image: string;
  link: string;
  displayUrl: string;
}

const sections: {
  id: ProjectCategory;
  title: string;
  icon: typeof Globe;
}[] = [
  { id: 'web', title: 'Websites', icon: Globe },
  { id: 'apps', title: 'Android Apps', icon: Smartphone },
  { id: 'ai', title: 'Automation & AI', icon: Bot },
];

const projects: Project[] = [
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
  {
    id: 101,
    title: 'تطبيق ممتن',
    category: 'apps',
    image: '/androin/oc.png',
    link: 'https://momtn.app/',
    displayUrl: 'Momtn.app',
  },
  {
    id: 102,
    title: 'تطبيق تاجر أونلاين',
    category: 'apps',
    image: '/androin/momtn.png',
    link: 'https://play.google.com/store/apps/details?id=com.tagronline.app',
    displayUrl: 'Tagr-Online.com',
  },
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
  },
];

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const cat = project.category;
  const Icon = cat === 'apps' ? Smartphone : cat === 'ai' ? Bot : Globe;
  const ctaLabel = cat === 'apps' ? 'عرض التطبيق' : 'عرض الموقع';

  return (
    <Reveal delay={index * 80} width="100%">
      <a
        href={project.link !== '#' ? project.link : undefined}
        target={project.link !== '#' ? '_blank' : undefined}
        rel={project.link !== '#' ? 'noopener noreferrer' : undefined}
        className={`group block w-full ${project.link === '#' ? 'cursor-default' : 'cursor-pointer'}`}
        onClick={(e) => project.link === '#' && e.preventDefault()}
      >
        <div className="relative w-full aspect-[16/9] lg:aspect-[2/1] rounded-lg md:rounded-xl overflow-hidden mb-3 md:mb-5 bg-white/5">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
          
          {project.link !== '#' && (
            <div className="absolute top-3 right-3 md:top-5 md:right-5 w-8 h-8 md:w-12 md:h-12 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center opacity-0 scale-75 group-hover:opacity-100 group-hover:scale-100 transition-all duration-500 shadow-xl">
              <ExternalLink className="w-3.5 h-3.5 md:w-5 md:h-5 text-white" />
            </div>
          )}
        </div>

        <div className="flex flex-col px-1 md:px-2 gap-1.5 md:gap-2">
          <h3 className="text-sm md:text-xl font-bold text-white/90 group-hover:text-firefly-green transition-colors duration-300 line-clamp-1 leading-snug">
            {project.title}
          </h3>

          <div className="flex items-center gap-1.5 md:gap-2 mt-0.5">
            <Icon className="w-3.5 h-3.5 md:w-4 md:h-4 text-firefly-yellow/90 shrink-0" />
            
            <div className={`flex items-center gap-1 md:gap-1.5 ${project.link !== '#' ? 'text-firefly-green/80 group-hover:text-firefly-green' : 'text-white/50'} transition-colors duration-300`}>
              <span className={`text-[11px] md:text-sm font-medium tracking-wide truncate ${project.link !== '#' ? 'border-b border-transparent group-hover:border-firefly-green/40 pb-0.5' : ''}`} dir="ltr">
                {project.displayUrl}
              </span>
              {project.link !== '#' && (
                <ExternalLink className="w-3 h-3 md:w-3.5 md:h-3.5 opacity-70 group-hover:opacity-100 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all duration-300 shrink-0" />
              )}
            </div>
          </div>
        </div>
      </a>
    </Reveal>
  );
}

export default function SoftwarePortfolio() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [featuredIndex, setFeaturedIndex] = useState(0);

  useEffect(() => {
    if (isExpanded) return;
    const interval = setInterval(() => {
      setFeaturedIndex((prev) => (prev + 1) % projects.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [isExpanded]);

  const featuredProject = projects[featuredIndex];

  return (
    <div className="w-full mt-16 mb-24" dir="rtl">
      <Reveal width="100%">
        <div className="w-full flex justify-center items-center mb-8 md:mb-12 px-4" dir="ltr">
          <h2 className="w-full max-w-4xl mx-auto text-center text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-firefly-yellow via-white to-firefly-green animate-gradient bg-gradient-animation">
            Websites & Apps
          </h2>
        </div>
      </Reveal>

      {!isExpanded ? (
        <div className="flex flex-col items-center justify-center px-4">
          <div className="w-full max-w-2xl mb-8">
            <ProjectCard project={featuredProject} index={0} />
          </div>
          <button
            onClick={() => setIsExpanded(true)}
            className="group relative px-8 py-3 rounded-xl bg-white/5 border border-white/10 hover:border-firefly-green hover:bg-firefly-green/10 text-white font-bold transition-all duration-300 shadow-lg overflow-hidden"
          >
            <div className="relative z-10 flex items-center gap-2">
              <span className="group-hover:text-firefly-green transition-colors duration-300">عرض المزيد من الأعمال</span>
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-firefly-yellow/0 via-firefly-green/10 to-firefly-yellow/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
          </button>
        </div>
      ) : (
        <div className="flex flex-col gap-14 md:gap-20">
          {sections.map((section) => {
            const SectionIcon = section.icon;
            const list = projects.filter((p) => p.category === section.id);
            if (list.length === 0) return null;

            return (
              <div key={section.id} className="last:mb-0">
                <Reveal width="100%">
                  <div
                    className="w-full flex flex-col items-center justify-center gap-3 mb-8 md:mb-10 px-4"
                    dir="ltr"
                  >
                    <SectionIcon className="w-8 h-8 md:w-10 md:h-10 text-firefly-yellow" />
                    <h3 className="text-center text-xl md:text-3xl font-bold text-white tracking-tight">
                      {section.title}
                    </h3>
                  </div>
                </Reveal>

                <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6 md:gap-8 lg:gap-10 px-3 md:px-4">
                  {list.map((project, index) => (
                    <ProjectCard key={project.id} project={project} index={index} />
                  ))}
                </div>
              </div>
            );
          })}
          
          <div className="flex justify-center mt-4">
            <button
              onClick={() => setIsExpanded(false)}
              className="px-6 py-2.5 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 text-white/60 hover:text-white transition-all duration-300 text-sm"
            >
              إخفاء التفاصيل
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
