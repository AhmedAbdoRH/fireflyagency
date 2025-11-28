import React, { useState, useEffect } from 'react';
import Reveal from '../components/Reveal';
import VideoPlayer from '../components/VideoPlayer';

// Import images
const brandingImages = [
  '/Branding/1.webp',
  '/Branding/2.webp',
  '/Branding/3.webp',
  '/Branding/4.webp'
];

const designImages = [
  '/Designs/10_resized.webp',
  '/Designs/13_resized.webp',
  '/Designs/8_resized.webp',
  '/Designs/Copy of 1_resized.webp',
  '/Designs/Copy of 5_resized.webp',
  '/Designs/Copy of 7_resized.webp',
  '/Designs/Copy of Edit-2Bg_resized.webp',
  '/Designs/Copy of social media 3-3_resized.webp',
  '/Designs/Fiber laser (1)_resized.webp',
  '/Designs/Gasket machine (3)_resized.webp',
  '/Designs/Post 10 oc_resized.webp',
  '/Designs/Vanilla Breeze post option 2_resized.webp',
  '/Designs/fried chicken_resized.webp',
  '/Designs/photo_2025-03-21_00-58-31_resized.webp',
  '/Designs/pomegranate design (1)_resized.webp',
  '/Designs/post 55 (2)_resized.webp',
  '/Designs/post5 (1) (3)_resized.webp',
  '/Designs/post6 (3)_resized.webp',
  '/Designs/post7 (1)_resized.webp',
  '/Designs/post8 (1)_resized.webp',
  '/Designs/post9 (2)_resized.webp',
  '/Designs/اختار اللي تحب_resized.webp',
  '/Designs/جربي طريقة (1)_resized.webp',
  '/Designs/هايشحن طاقتك-01_resized.webp'
];

const photographyImages = [
  '/Photography/1_resized_resized_resized.webp',
  '/Photography/2_resized_resized_resized.webp',
  '/Photography/388A8775_resized_resized_resized.webp',
  '/Photography/388A8869_resized_resized_resized.webp',
  '/Photography/388A8889_resized_resized_resized.webp',
  '/Photography/388A8904_resized_resized_resized.webp',
  '/Photography/388A8926 (1)_resized_resized_resized.webp',
  '/Photography/3_resized_resized_resized.webp',
  '/Photography/451765756_1047568193401914_132117585433680106_n (1)_resized_resized_resized.webp',
  '/Photography/457357359_1074873047338095_1550719257161620040_n (1)_resized_resized_resized.webp',
  '/Photography/457498131_1074730730685660_2151557050323122055_n (1)_resized_resized_resized.webp',
  '/Photography/457553410_1075417507283649_9187292011979397573_vv_resized_resized_resized.webp',
  '/Photography/457603866_1075386357286764_7156478770906911455_n (1)_resized_resized_resized.webp',
  '/Photography/4_resized_resized_resized.webp',
  '/Photography/5_resized_resized_resized.webp',
  '/Photography/5d9340c66696b68b20623db0e9f11b44_resized_resized_resized.webp',
  '/Photography/6_resized_resized_resized.webp',
  '/Photography/7_resized_resized_resized.webp',
  '/Photography/Copy of 388A8873_resized_resized_resized.webp',
  '/Photography/Copy of 388A8899_resized_resized.webp',
  '/Photography/Copy of 388A8899_resized_resized_resized.webp',
  '/Photography/Copy of 388A8909_resized_resized_resized.webp',
  '/Photography/DSCF0783_resized_resized_resized.webp',
  '/Photography/DSCF0880_resized_resized_resized.webp',
  '/Photography/DSCF0887_resized_resized_resized.webp',
  '/Photography/DSCF0917_resized_resized_resized.webp',
  '/Photography/DSCF1006_resized_resized_resized.webp',
  '/Photography/be3a98b0ee650d29d1a1e525112ab414_resized_resized_resized.webp',
  '/Photography/d742eb64a83fcbca1385630ea99fb17b_resized_resized_resized.webp',
  '/Photography/da7ef8097ea0f7843803953fa2e2b648_resized_resized_resized.webp'
];

const mediaProductionCategories = [
  {
    title: 'Reels',
    aspectRatio: '9/16',
    videos: [
      { src: 'https://res.cloudinary.com/dvikey3wc/video/upload/v1764324733/7_lms4zk.mp4', title: 'Reel 1' },
      { src: 'https://res.cloudinary.com/dvikey3wc/video/upload/v1764324328/4_bqddy7.mp4', title: 'Reel 2' },
      { src: 'https://res.cloudinary.com/dvikey3wc/video/upload/v1764326958/9_vefash.mp4', title: 'Reel 8' },
      { src: 'https://res.cloudinary.com/dvikey3wc/video/upload/v1764324334/1_cittin.mp4', title: 'Reel 3' },
      { src: 'https://res.cloudinary.com/dvikey3wc/video/upload/v1764324304/5_i08rah.mp4', title: 'Reel 4' },
      { src: 'https://res.cloudinary.com/dvikey3wc/video/upload/v1764324293/3_khiiuc.mp4', title: 'Reel 5' },
      { src: 'https://res.cloudinary.com/dvikey3wc/video/upload/v1764324286/8_gc7wjv.mp4', title: 'Reel 6' },
      { src: 'https://res.cloudinary.com/dvikey3wc/video/upload/v1764326073/6_odmjav.mp4', title: 'Reel 7' }
    ]
  },
  {
    title: 'Podcast',
    aspectRatio: '9/16',
    videos: [
      { src: 'https://res.cloudinary.com/dvikey3wc/video/upload/v1764313631/678_wqrqyq.mp4', title: 'Podcast Episode 1' },
      { src: 'https://res.cloudinary.com/dvikey3wc/video/upload/v1764313662/789_ilpmqy.mp4', title: 'Podcast Episode 2' },
    ]
  },
  {
    title: 'Short Films',
    aspectRatio: '16/9',
    videos: [
      { src: 'https://res.cloudinary.com/dvikey3wc/video/upload/v1764248691/1127_1_vvurfk.mp4', title: 'Short Film 1' },
      { src: 'https://res.cloudinary.com/dvikey3wc/video/upload/v1764249246/1127_4_n4jskf.mp4', title: 'Short Film 2' }
    ]
  },
  {
    title: 'Event Coverage',
    aspectRatio: '16/9',
    videos: [
      { src: 'https://res.cloudinary.com/dvikey3wc/video/upload/v1764248198/1127_j1ty5o.mp4', title: 'Event Coverage 1' }
    ]
  }
];

const getCloudinaryThumbnail = (videoUrl: string) => {
  if (!videoUrl.includes('cloudinary.com')) return undefined;
  // Replace .mp4 with .jpg
  let thumbnailUrl = videoUrl.replace(/\.[^/.]+$/, ".jpg");
  // Insert transformation before /v[0-9] to get a frame from the middle (50%)
  thumbnailUrl = thumbnailUrl.replace(/\/upload\/(v[0-9]+)/, '/upload/so_50p/$1');
  return thumbnailUrl;
};

interface ShowReelProps {
  onNavigateHome: () => void;
}

const ShowReel: React.FC<ShowReelProps> = ({ onNavigateHome }) => {
  const [currentBrandingIndex, setCurrentBrandingIndex] = useState(0);

  useEffect(() => {
    const brandingInterval = setInterval(() => {
      setCurrentBrandingIndex((prevIndex) => (prevIndex + 1) % brandingImages.length);
    }, 3000);

    return () => {
      clearInterval(brandingInterval);
    };
  }, []);

  const handleBrandingClick = (index: number) => {
    setCurrentBrandingIndex(index);
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
        .strip-animation {
          animation: slideStrip 180s linear infinite;
          width: max-content;
          will-change: transform;
        }
        .strip-animation-reels {
          animation: slideStrip 15s linear infinite;
        }
        .strip-animation-photography {
          animation: slideStrip 200s linear infinite;
          width: max-content;
          will-change: transform;
        }
        @media (max-width: 768px) {
          .strip-animation {
            animation: slideStrip 80s linear infinite;
          }
          .strip-animation-reels {
            animation: slideStrip 8s linear infinite;
          }
          .strip-animation-photography {
            animation: slideStrip 90s linear infinite;
          }
        }
        .strip-animation:hover {
          animation-play-state: paused;
        }
        .strip-animation-reels:hover {
          animation-play-state: paused;
        }
        .strip-animation-photography:hover {
          animation-play-state: paused;
        }
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
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
          <div className="w-full mt-8 mb-12 text-center">
            <Reveal>
              <div className="flex justify-center items-center gap-3 mb-8">
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
                    decoding="async"
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
          <div className="w-full mt-8 mb-8 text-center">
            <Reveal>
              <div className="flex justify-center items-center gap-3 mb-6">

                <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-firefly-yellow via-white to-firefly-green animate-gradient bg-gradient-animation">
                  Designs
                </h2>
              </div>
            </Reveal>

            <div className="overflow-hidden min-h-[300px] md:min-h-[400px]">
              <div className="flex strip-animation items-center">
                {[...designImages, ...designImages].map((src, index) => (
                  <div
                    key={`strip-${index}`}
                    className="flex-shrink-0"
                  >
                    <div className="relative overflow-hidden hover:scale-[1.02] transition-all duration-300">
                      <img
                        src={src}
                        alt={`Design Project ${index + 1}`}
                        className="w-[200px] h-[280px] md:w-[250px] md:h-[350px] object-contain"
                        loading="lazy"
                        decoding="async"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Photography Section */}
          <div className="w-full mt-8 mb-8 text-center">
            <Reveal>
              <div className="flex justify-center items-center gap-3 mb-6">
                <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-firefly-yellow via-white to-firefly-green animate-gradient bg-gradient-animation">
                  Photography
                </h2>
              </div>
            </Reveal>

            <div className="overflow-hidden min-h-[300px] md:min-h-[400px]">
              <div className="flex strip-animation-photography items-center">
                {[...photographyImages, ...photographyImages].map((src, index) => (
                  <div
                    key={`photo-strip-${index}`}
                    className="flex-shrink-0"
                  >
                    <div className="relative overflow-hidden hover:scale-[1.02] transition-all duration-300">
                      <img
                        src={src}
                        alt={`Photography Project ${index + 1}`}
                        className="w-[200px] h-[280px] md:w-[250px] md:h-[350px] object-contain"
                        loading="lazy"
                        decoding="async"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Media Production Section */}
          <div className="w-full mt-8 mb-24 text-center">
            <Reveal>
              <div className="flex justify-center items-center gap-3 mb-10">
                <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-firefly-yellow via-white to-firefly-green animate-gradient bg-gradient-animation">
                  Media Production
                </h2>
              </div>
            </Reveal>

            <div className="space-y-8 md:space-y-16">
              {mediaProductionCategories.map((category, categoryIndex) => (
                <Reveal key={categoryIndex} width="100%" delay={categoryIndex * 100}>
                  <div className="text-center mb-4 md:mb-8">
                    <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2">
                      {category.title}
                    </h3>
                    <div className="w-20 h-1 bg-gradient-to-r from-firefly-yellow to-firefly-green mx-auto rounded-full"></div>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-4 lg:gap-6">
                    {category.videos.map((video, videoIndex) => (
                      <div key={videoIndex} className="w-full max-w-[160px] mx-auto md:max-w-none">
                        <VideoPlayer
                          src={video.src}
                          title={video.title}
                          aspectRatio={category.aspectRatio}
                          poster={getCloudinaryThumbnail(video.src)}
                          className="w-full"
                        />
                      </div>
                    ))}
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

