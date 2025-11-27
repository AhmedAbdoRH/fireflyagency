import React, { useState, useEffect } from 'react';
import Reveal from '../components/Reveal';
import { ArrowLeft, Play, Palette, Layers } from 'lucide-react';
import Image from 'next/image';

// Import images
const brandingImages = [
  '/Branding/1.png',
  '/Branding/2.png',
  '/Branding/3.png',
  '/Branding/4.png'
];

const designImages = [
  '/Designs/8.webp',
  '/Designs/10.webp',
  '/Designs/13.webp',
  '/Designs/Copy of 1.webp',
  '/Designs/Copy of 5.webp',
  '/Designs/Copy of 7.webp',
  '/Designs/Copy of Edit-2Bg.webp',
  '/Designs/Copy of social media 3-3.webp',
  '/Designs/Fiber laser (1).webp',
  '/Designs/fried chicken.webp',
  '/Designs/Gasket machine (3).webp',
  '/Designs/photo_2025-03-21_00-58-31.webp',
  '/Designs/pomegranate design (1).webp',
  '/Designs/Post 10 oc.webp',
  '/Designs/post 55 (2).webp',
  '/Designs/post5 (1) (3).webp',
  '/Designs/post6 (3).webp',
  '/Designs/post7 (1).webp',
  '/Designs/post8 (1).webp',
  '/Designs/post9 (2).webp',
  '/Designs/Vanilla Breeze post option 2.webp',
  '/Designs/اختار اللي تحب.webp',
  '/Designs/جربي طريقة (1).webp',
  '/Designs/هايشحن طاقتك-01.webp'
];

const photographyImages = [
  '/Photography/1.webp',
  '/Photography/2.webp',
  '/Photography/3.webp',
  '/Photography/4.webp',
  '/Photography/5.webp',
  '/Photography/6.webp'
];

const mediaProductionCategories = [
  {
    title: 'Reels',
    videos: [
      { src: '/Videos/Reels/234.mp4', title: 'Reel 1' },
      { src: '/Videos/Reels/2345.mp4', title: 'Reel 2' },
      { src: '/Videos/Reels/235.mp4', title: 'Reel 3' },
      { src: '/Videos/Reels/346.mp4', title: 'Reel 4' },
      { src: '/Videos/Reels/45.mp4', title: 'Reel 5' },
      { src: '/Videos/Reels/45654.mp4', title: 'Reel 6' },
      { src: '/Videos/Reels/457.mp4', title: 'Reel 7' },
      { src: '/Videos/Reels/57.mp4', title: 'Reel 8' },
      { src: '/Videos/Reels/7675.mp4', title: 'Reel 9' },
      { src: '/Videos/Reels/noor shawky video 4 V01.mp4', title: 'Noor Shawky' },
      { src: '/Videos/Reels/serene final.mp4', title: 'Serene' }
    ]
  },
  {
    title: 'Videos',
    videos: [
      { src: '/Videos/Videos/234.mp4', title: 'Video 1' },
      { src: '/Videos/Videos/24.mp4', title: 'Video 2' },
      { src: '/Videos/Videos/456.mp4', title: 'Video 3' },
      { src: '/Videos/Videos/567.mp4', title: 'Video 4' }
    ]
  },
  {
    title: 'Podcast',
    videos: [
      { src: '/Videos/Podcast/678.mp4', title: 'Podcast Episode 1' },
      { src: '/Videos/Podcast/789.mp4', title: 'Podcast Episode 2' }
    ]
  },
  {
    title: 'Short Films',
    videos: [
      { src: '/Videos/Short Films/346.mp4', title: 'Short Film' }
    ]
  },
  {
    title: 'Event Coverage',
    videos: [
      { src: '/Videos/Event Coverage/56.mp4', title: 'Event Coverage 1' },
      { src: '/Videos/Event Coverage/678.mp4', title: 'Event Coverage 2' }
    ]
  }
];

interface ShowReelProps {
  onNavigateHome: () => void;
}

const ShowReel: React.FC<ShowReelProps> = ({ onNavigateHome }) => {
  const [currentBrandingIndex, setCurrentBrandingIndex] = useState(0);
  const [videoMetadata, setVideoMetadata] = useState<{[key: string]: {width: number, height: number, duration: number}}>({});
  const [playingVideos, setPlayingVideos] = useState<Set<string>>(new Set());

  // Create continuous strips of all images
  // Create continuous strips of all images
  const allDesignImages = [...designImages, ...designImages]; // Duplicate for seamless loop
  // Duplicate photography images 8 times to match the width/count of design images (48 total) for consistent speed
  const doublePhoto = [...photographyImages, ...photographyImages];
  const quadPhoto = [...doublePhoto, ...doublePhoto];
  const allPhotographyImages = [...quadPhoto, ...quadPhoto];

  useEffect(() => {
    const brandingInterval = setInterval(() => {
      setCurrentBrandingIndex((prevIndex) => (prevIndex + 1) % brandingImages.length);
    }, 3000);

    return () => {
      clearInterval(brandingInterval);
    };
  }, []);

  useEffect(() => {
    const loadVideoMetadata = async () => {
      const metadata: {[key: string]: {width: number, height: number, duration: number}} = {};
      
      for (const category of mediaProductionCategories) {
        for (const video of category.videos) {
          try {
            const videoElement = document.createElement('video');
            videoElement.src = video.src;
            
            await new Promise((resolve) => {
              videoElement.onloadedmetadata = resolve;
            });
            
            metadata[video.src] = {
              width: videoElement.videoWidth,
              height: videoElement.videoHeight,
              duration: videoElement.duration
            };
          } catch (error) {
            console.warn(`Could not load metadata for ${video.src}:`, error);
          }
        }
      }
      
      setVideoMetadata(metadata);
    };

    loadVideoMetadata();
  }, []);

  // Set video thumbnails to middle frame
  useEffect(() => {
    const videos = document.querySelectorAll('video');
    videos.forEach((video) => {
      const videoElement = video as HTMLVideoElement;
      if (videoElement.src && videoMetadata[videoElement.src]) {
        videoElement.currentTime = videoMetadata[videoElement.src].duration / 2;
      }
    });
  }, [videoMetadata]);

  const handleBrandingClick = (index: number) => {
    setCurrentBrandingIndex(index);
  };

  const toggleVideoPlay = (videoSrc: string) => {
    setPlayingVideos(prev => {
      const newSet = new Set(prev);
      if (newSet.has(videoSrc)) {
        newSet.delete(videoSrc);
        // Pause the video
        const videoElement = document.querySelector(`video[src="${videoSrc}"]`) as HTMLVideoElement;
        if (videoElement) {
          videoElement.pause();
        }
      } else {
        newSet.add(videoSrc);
        // Play the video
        const videoElement = document.querySelector(`video[src="${videoSrc}"]`) as HTMLVideoElement;
        if (videoElement) {
          videoElement.play();
        }
      }
      return newSet;
    });
  };

  return (
    <>
      <style jsx>{`
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-5px); }
        }
        @keyframes imageEnter {
          0% { 
            opacity: 0;
            transform: scale(0.8) rotate(5deg) translateX(-50px);
            filter: blur(10px);
          }
          50% {
            opacity: 0.5;
            transform: scale(1.1) rotate(-2deg) translateX(25px);
            filter: blur(5px);
          }
          100% { 
            opacity: 1;
            transform: scale(1) rotate(0deg) translateX(0px);
            filter: blur(0px);
          }
        }
        @keyframes imageExit {
          0% { 
            opacity: 1;
            transform: scale(1) rotate(0deg) translateX(0px);
            filter: blur(0px);
          }
          100% { 
            opacity: 0;
            transform: scale(1.2) rotate(-5deg) translateX(50px);
            filter: blur(15px);
          }
        }
        @keyframes slideStrip {
          0% { 
            transform: translateX(0);
          }
          100% { 
            transform: translateX(-50%);
          }
        }
        .bg-gradient-animation {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        .image-enter {
          animation: imageEnter 1.2s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }
        .image-exit {
          animation: imageExit 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }
        .strip-animation {
          animation: slideStrip 8s linear infinite;
        }
        .strip-animation-reels {
          animation: slideStrip 15s linear infinite;
        }
        @media (max-width: 768px) {
          .strip-animation {
            animation: slideStrip 3s linear infinite;
          }
          .strip-animation-reels {
            animation: slideStrip 8s linear infinite;
          }
        }
        .strip-animation:hover {
          animation-play-state: paused;
        }
        .strip-animation-reels:hover {
          animation-play-state: paused;
        }
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .video-strip-container {
          overflow-x: auto;
          -webkit-overflow-scrolling: touch;
          scroll-behavior: smooth;
        }
        .video-strip-container::-webkit-scrollbar {
          height: 4px;
        }
        .video-strip-container::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.1);
          border-radius: 2px;
        }
        .video-strip-container::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.3);
          border-radius: 2px;
        }
        .video-strip-container::-webkit-scrollbar-thumb:hover {
          background: rgba(255, 255, 255, 0.5);
        }
      `}</style>
      <section className="min-h-screen bg-firefly-dark pt-28 pb-16 px-4 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-[-10%] left-[-5%] w-[500px] h-[500px] bg-firefly-yellow/20 rounded-full blur-[160px]"></div>
          <div className="absolute bottom-[-15%] right-[-10%] w-[600px] h-[600px] bg-firefly-green/15 rounded-full blur-[180px]"></div>
          <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: `linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(0deg, rgba(255,255,255,0.3) 1px, transparent 1px)`, backgroundSize: '80px 80px' }}></div>
        </div>

        <div className="container mx-auto max-w-6xl relative z-10">
          <Reveal width="100%">
            <div className="flex flex-col gap-6 mb-12 text-center">
              <span className="inline-flex mx-auto items-center gap-3 px-5 py-2 rounded-full border border-white/10 bg-white/5 text-xs tracking-[0.4em] uppercase text-white/80">
                Our previous Work
                <span className="w-1.5 h-1.5 rounded-full bg-firefly-yellow"></span>
              </span>
              <h1 className="font-heading text-4xl md:text-6xl font-bold text-white">
                Stories that <span className="text-firefly-yellow">glow</span> and strategies that scale
              </h1>
            </div>
          </Reveal>

          {/* Branding Section */}
          <div className="w-full mt-20 mb-16 text-center">
            <Reveal>
              <div className="flex justify-center items-center gap-3 mb-10">
                <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-firefly-yellow via-white to-firefly-green animate-gradient bg-gradient-animation">
                  Branding & Logo designs
                </h2>
              </div>
            </Reveal>

            <div className="flex justify-center items-center">
              <div className="relative w-full max-w-4xl rounded-2xl overflow-hidden hover:scale-[1.02] transition-all duration-300 hover:shadow-lg">
                {brandingImages.map((src, index) => (
                  <img
                    key={index}
                    src={src}
                    alt={`Branding Project ${index + 1}`}
                    className={`w-full h-auto transition-all duration-1000 ${index === currentBrandingIndex
                      ? 'opacity-100 scale-100 rotate-0 blur-0 translate-x-0'
                      : 'opacity-0 scale-110 rotate-3 blur-sm translate-x-10'
                      }`}
                    loading="lazy"
                    style={{
                      display: 'block',
                      position: index === currentBrandingIndex ? 'relative' : 'absolute',
                      top: index === currentBrandingIndex ? 'auto' : '0',
                      left: index === currentBrandingIndex ? 'auto' : '0'
                    }}
                  />
                ))}

                {/* Image indicators */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
                  {brandingImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => handleBrandingClick(index)}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${index === currentBrandingIndex
                        ? 'bg-firefly-yellow w-8'
                        : 'bg-white/30 hover:bg-white/50'
                        }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Graphic Design Section */}
          <div className="w-full mt-16 mb-8 text-center">
            <Reveal>
              <div className="flex justify-center items-center gap-3 mb-10">

                <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-firefly-yellow via-white to-firefly-green animate-gradient bg-gradient-animation">
                  Designs
                </h2>
              </div>
            </Reveal>

            <div className="overflow-hidden min-h-[400px]">
              <div className="flex strip-animation items-center">
                {allDesignImages.map((src, index) => (
                  <div
                    key={`strip-${index}`}
                    className="flex-shrink-0"
                  >
                    <div className="relative overflow-hidden hover:scale-[1.02] transition-all duration-300">
                      <img
                        src={src}
                        alt={`Design Project ${index + 1}`}
                        className="w-[250px] h-[350px] object-contain"
                        loading="lazy"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Photography Section */}
          <div className="w-full mt-16 mb-8 text-center">
            <Reveal>
              <div className="flex justify-center items-center gap-3 mb-10">
                <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-firefly-yellow via-white to-firefly-green animate-gradient bg-gradient-animation">
                  Photography
                </h2>
              </div>
            </Reveal>

            <div className="overflow-hidden min-h-[400px]">
              <div className="flex strip-animation items-center">
                {allPhotographyImages.map((src, index) => (
                  <div
                    key={`photo-strip-${index}`}
                    className="flex-shrink-0"
                  >
                    <div className="relative overflow-hidden hover:scale-[1.02] transition-all duration-300">
                      <img
                        src={src}
                        alt={`Photography Project ${index + 1}`}
                        className="w-[250px] h-[350px] object-contain"
                        loading="lazy"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Media Production Section */}
          <div className="w-full mt-16 mb-24 text-center">
            <Reveal>
              <div className="flex justify-center items-center gap-3 mb-10">
                <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-firefly-yellow via-white to-firefly-green animate-gradient bg-gradient-animation">
                  Media Production
                </h2>
              </div>
            </Reveal>

            <div className="space-y-16">
              {mediaProductionCategories.map((category, categoryIndex) => (
                <Reveal key={categoryIndex} width="100%">
                  <div className="text-center mb-8">
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                      {category.title}
                    </h3>
                    <div className="w-20 h-1 bg-gradient-to-r from-firefly-yellow to-firefly-green mx-auto rounded-full"></div>
                  </div>
                  
                  {/* Special mobile layout for Reels, Podcast, and Event Coverage */}
                  {category.title === 'Reels' || category.title === 'Podcast' || category.title === 'Event Coverage' ? (
                    <div className="block md:hidden">
                      {/* Mobile grid layout - 2x3 grid */}
                      <div className="grid grid-cols-2 gap-3 max-w-md mx-auto">
                        {category.videos.slice(0, 6).map((video, videoIndex) => {
                          const meta = videoMetadata[video.src];
                          const aspectRatio = category.title === 'Reels' 
                            ? (meta ? meta.width / meta.height : 9/16) // Vertical for reels
                            : (meta ? meta.width / meta.height : 16/9); // Horizontal for podcast, event coverage
                          
                          return (
                            <div
                              key={`mobile-${category.title.toLowerCase()}-${videoIndex}`}
                              className="relative"
                            >
                              <div className="relative overflow-hidden rounded-xl border border-white/10 bg-black/40 backdrop-blur-sm hover:shadow-2xl hover:shadow-firefly-yellow/20 transition-all duration-700 hover:scale-[1.02]">
                                {/* Video container for mobile */}
                                <div 
                                  className="relative w-full"
                                  style={{ aspectRatio }}
                                >
                                  <video
                                    src={video.src}
                                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                                    preload="metadata"
                                    muted={!playingVideos.has(video.src)}
                                    loop
                                    playsInline
                                    onClick={() => toggleVideoPlay(video.src)}
                                  >
                                    Your browser does not support the video tag.
                                  </video>
                                  
                                  {/* Always visible play icon overlay */}
                                  <div 
                                    className="absolute inset-0 flex items-center justify-center bg-black/30"
                                    onClick={() => toggleVideoPlay(video.src)}
                                  >
                                    {!playingVideos.has(video.src) ? (
                                      <div className="w-8 h-8 rounded-full bg-firefly-yellow/90 backdrop-blur-sm flex items-center justify-center hover:scale-110 transition-transform duration-200">
                                        <Play className="w-3 h-3 text-black ml-0.5" />
                                      </div>
                                    ) : (
                                      <div className="w-8 h-8 rounded-full bg-black/60 backdrop-blur-sm flex items-center justify-center hover:scale-110 transition-transform duration-200">
                                        <div className="w-2.5 h-3 bg-white rounded-sm"></div>
                                      </div>
                                    )}
                                  </div>
                                </div>
                                
                                {/* Loading skeleton */}
                                {!meta && (
                                  <div className="absolute inset-0 bg-gray-900/50 animate-pulse flex items-center justify-center">
                                    <div className="w-4 h-4 border-2 border-firefly-yellow border-t-transparent rounded-full animate-spin"></div>
                                  </div>
                                )}
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  ) : null}
                  
                  {/* Desktop layout for all categories + mobile layout for non-Reels/Podcast/Event Coverage */}
                  <div className={`${category.title === 'Reels' || category.title === 'Podcast' || category.title === 'Event Coverage' ? 'hidden md:block' : 'block'}`}>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                      {category.videos.map((video, videoIndex) => {
                        const meta = videoMetadata[video.src];
                        const aspectRatio = meta ? meta.width / meta.height : 16/9;
                        
                        return (
                          <div key={videoIndex} className="group relative">
                            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-black/40 backdrop-blur-sm hover:shadow-2xl hover:shadow-firefly-yellow/20 transition-all duration-700 hover:scale-[1.02]">
                              {/* Video Container with proper aspect ratio */}
                              <div 
                                className="relative w-full"
                                style={{ aspectRatio }}
                              >
                                <video
                                  ref={(el) => {
                                    if (el && !videoMetadata[video.src]) {
                                      el.onloadedmetadata = () => {
                                        setVideoMetadata(prev => ({
                                          ...prev,
                                          [video.src]: {
                                            width: el.videoWidth,
                                            height: el.videoHeight,
                                            duration: el.duration
                                          }
                                        }));
                                        // Set video to middle frame for thumbnail
                                        el.currentTime = el.duration / 2;
                                      };
                                    }
                                  }}
                                  src={video.src}
                                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                                  preload="metadata"
                                  muted={!playingVideos.has(video.src)}
                                  loop
                                  playsInline
                                  onClick={() => toggleVideoPlay(video.src)}
                                >
                                  Your browser does not support the video tag.
                                </video>
                                
                                {/* Always visible play button overlay */}
                                <div 
                                  className="absolute inset-0 flex items-center justify-center bg-black/30"
                                  onClick={() => toggleVideoPlay(video.src)}
                                >
                                  {!playingVideos.has(video.src) ? (
                                    <div className="w-16 h-16 rounded-full bg-firefly-yellow/90 backdrop-blur-sm flex items-center justify-center hover:scale-110 transition-transform duration-200">
                                      <Play className="w-6 h-6 text-black ml-1" />
                                    </div>
                                  ) : (
                                    <div className="w-16 h-16 rounded-full bg-black/60 backdrop-blur-sm flex items-center justify-center hover:scale-110 transition-transform duration-200">
                                      <div className="w-5 h-6 bg-white rounded-sm"></div>
                                    </div>
                                  )}
                                </div>
                                
                                {/* Video info overlay - removed */}
                              </div>
                              
                              {/* Loading skeleton */}
                              {!meta && (
                                <div className="absolute inset-0 bg-gray-900/50 animate-pulse flex items-center justify-center">
                                  <div className="w-8 h-8 border-2 border-firefly-yellow border-t-transparent rounded-full animate-spin"></div>
                                </div>
                              )}
                            </div>
                            
                            {/* Title below video - removed */}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ShowReel;

