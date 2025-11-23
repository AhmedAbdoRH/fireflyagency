import React, { useEffect, useRef } from 'react';
import { ArrowRight, Play } from 'lucide-react';
import Reveal from './Reveal';
import TextReveal from './TextReveal';

interface HeroProps {
  onShowReel?: () => void;
}

const Hero: React.FC<HeroProps> = ({ onShowReel }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const videoRef = useRef<HTMLVideoElement>(null);
  const mobileVideoRef = useRef<HTMLVideoElement>(null);

  const handleTimeUpdate = (e: React.SyntheticEvent<HTMLVideoElement>) => {
    const video = e.currentTarget;
    // Stop 1.5 seconds before the end
    if (video.duration && video.currentTime >= video.duration - 1.5) {
      video.pause();
    }
  };

  // Helper to fade out audio before pausing
  const fadeOutAndPause = (video: HTMLVideoElement) => {
    const step = 0.05; // volume decrement per interval
    const intervalTime = 50; // ms
    const fadeInterval = setInterval(() => {
      if (video.volume > step) {
        video.volume = Math.max(0, video.volume - step);
      } else {
        video.volume = 0;
        video.pause();
        clearInterval(fadeInterval);
      }
    }, intervalTime);
  };

  // Intersection Observer to handle play/pause on scroll
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5, // Trigger when 50% of the video is visible
    };

    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        const video = entry.target as HTMLVideoElement;
        if (entry.isIntersecting) {
          // 1. Ensure video is muted first to guarantee autoplay works
          video.muted = true;
          video.volume = 1;

          // 2. Play the video
          const playPromise = video.play();

          if (playPromise !== undefined) {
            playPromise.then(() => {
              // 3. Once playing, try to unmute
              video.muted = false;
            }).catch(() => {
              // 4. If unmuting causes issues or play fails, ensure it plays muted
              console.log('Autoplay with sound prevented, playing muted');
              video.muted = true;
              video.play();
            });
          }
        } else {
          // Fade out audio then pause
          fadeOutAndPause(video);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, observerOptions);
    if (videoRef.current) observer.observe(videoRef.current);
    if (mobileVideoRef.current) observer.observe(mobileVideoRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  // Attempt to unmute on first user interaction if autoplay was muted
  useEffect(() => {
    const handleInteraction = () => {
      if (videoRef.current && videoRef.current.muted) {
        videoRef.current.muted = false;
        videoRef.current.volume = 1;
      }
      if (mobileVideoRef.current && mobileVideoRef.current.muted) {
        mobileVideoRef.current.muted = false;
        mobileVideoRef.current.volume = 1;
      }
      // Remove listeners after first interaction
      window.removeEventListener('click', handleInteraction);
      window.removeEventListener('touchstart', handleInteraction);
      window.removeEventListener('keydown', handleInteraction);
    };

    window.addEventListener('click', handleInteraction);
    window.addEventListener('touchstart', handleInteraction);
    window.addEventListener('keydown', handleInteraction);

    return () => {
      window.removeEventListener('click', handleInteraction);
      window.removeEventListener('touchstart', handleInteraction);
      window.removeEventListener('keydown', handleInteraction);
    };
  }, []);

  // Particle canvas effect
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      };
    };

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    };

    class Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      color: string;
      baseAlpha: number;
      alpha: number;
      originalX: number;
      originalY: number;

      constructor(w: number, h: number) {
        this.x = Math.random() * w;
        this.y = Math.random() * h;
        this.originalX = this.x;
        this.originalY = this.y;
        this.vx = (Math.random() - 0.5) * 0.5;
        this.vy = (Math.random() - 0.5) * 0.5;
        this.size = Math.random() * 2.5 + 0.5;
        const colors = ['#e2d82b', '#00ee8a', '#ffffff'];
        this.color = colors[Math.floor(Math.random() * colors.length)];
        this.baseAlpha = Math.random() * 0.6 + 0.1;
        this.alpha = this.baseAlpha;
      }

      update(w: number, h: number) {
        this.x += this.vx;
        this.y += this.vy;
        const dx = this.x - mouseRef.current.x;
        const dy = this.y - mouseRef.current.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const maxDistance = 150;
        if (distance < maxDistance) {
          const forceDirectionX = dx / distance;
          const forceDirectionY = dy / distance;
          const force = (maxDistance - distance) / maxDistance;
          const repulsionStrength = 2;
          this.x += forceDirectionX * force * repulsionStrength;
          this.y += forceDirectionY * force * repulsionStrength;
        }
        if (this.x < 0) this.x = w;
        if (this.x > w) this.x = 0;
        if (this.y < 0) this.y = h;
        if (this.y > h) this.y = 0;
      }

      draw(ctx: CanvasRenderingContext2D) {
        ctx.globalAlpha = this.alpha;
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.globalAlpha = 1.0;
      }
    }

    const initParticles = () => {
      particles = [];
      const particleCount = Math.min(Math.floor(window.innerWidth / 10), 80);
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle(canvas.width, canvas.height));
      }
    };

    const drawConnections = () => {
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 100) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(226, 216, 43, ${0.1 - dist / 1000})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
    };

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(p => {
        p.update(canvas.width, canvas.height);
        p.draw(ctx);
      });
      drawConnections();
      animationFrameId = requestAnimationFrame(render);
    };

    window.addEventListener('resize', resizeCanvas);
    window.addEventListener('mousemove', handleMouseMove);
    resizeCanvas();
    render();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 pb-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-firefly-dark opacity-90"></div>
        {/* Glow Effect 1 - Animated */}
        <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-firefly-green/20 rounded-full blur-[120px] animate-pulse"></div>
        {/* Glow Effect 2 - Animated */}
        <div className="absolute bottom-[-10%] left-[-10%] w-[700px] h-[700px] bg-firefly-yellow/10 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '2s' }}></div>
        {/* Grid Pattern Overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        ></div>
        {/* Particle Canvas */}
        <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-auto" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-12">
          {/* Video/Visual Side */}
          <div className="w-full lg:w-[300px] flex justify-center relative perspective-1000 hidden lg:block mt-14">
            <Reveal delay={1200} className="w-full max-w-[250px] lg:max-w-full relative">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-firefly-yellow/20 blur-[60px] rounded-full animate-pulse -z-10"></div>
              <div className="relative rounded-[2.5rem] overflow-hidden border-4 border-white/10 shadow-2xl bg-firefly-dark/50 backdrop-blur-sm animate-float transform rotate-[-3deg] hover:rotate-0 transition-transform duration-700">
                <div className="absolute inset-0 bg-gradient-to-t from-firefly-dark/60 via-transparent to-transparent z-10 pointer-events-none"></div>
                <video
                  ref={videoRef}
                  src="/Hero.mp4"
                  playsInline
                  onTimeUpdate={handleTimeUpdate}
                  className="w-full h-full object-cover aspect-[9/16] scale-105"
                />
              </div>
            </Reveal>
          </div>

          {/* Text Content Side */}
          <div className="w-full lg:w-1/2 text-center lg:text-left pt-10 lg:pt-0">
            <Reveal width="100%" className="flex justify-center lg:justify-start">
              <div className="mb-8"></div>
            </Reveal>
            <div className="mb-8">
              <h1 className="font-heading text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold leading-tight tracking-tight max-w-xs sm:max-w-none pb-4">
                <div className="text-white block mb-2">
                  <TextReveal text="Where Creativity" delay={300} />
                </div>
                <div className="text-transparent bg-clip-text bg-gradient-to-r from-firefly-yellow via-white to-firefly-green block pb-6">
                  Meets Strategy
                </div>
              </h1>
            </div>
            {/* Mobile-only Video */}
            <div className="w-full flex justify-center relative perspective-1000 lg:hidden mb-10 mt-10">
              <Reveal delay={1200} className="w-full max-w-[250px] relative">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-firefly-yellow/20 blur-[60px] rounded-full animate-pulse -z-10"></div>
                <div className="relative rounded-[2.5rem] overflow-hidden border-4 border-white/10 shadow-2xl bg-firefly-dark/50 backdrop-blur-sm animate-float transform rotate-[-3deg] hover:rotate-0 transition-transform duration-700">
                  <div className="absolute inset-0 bg-gradient-to-t from-firefly-dark/60 via-transparent to-transparent z-10 pointer-events-none"></div>
                  <video
                    ref={mobileVideoRef}
                    src="/Hero.mp4"
                    playsInline
                    onTimeUpdate={handleTimeUpdate}
                    className="w-full h-full object-cover aspect-[9/16] scale-105"
                  />
                </div>
              </Reveal>
            </div>
            <Reveal delay={1500} width="100%">
              <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto lg:mx-0 mb-10 leading-relaxed"></p>
            </Reveal>
            <Reveal delay={1700} width="100%">
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <button className="group w-full sm:w-auto px-8 py-4 bg-firefly-yellow hover:bg-white text-firefly-dark font-bold rounded-lg transition-all duration-300 transform hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(226,216,43,0.5)] flex items-center justify-center gap-2 text-lg overflow-hidden relative">
                  <span className="relative z-10 flex items-center gap-2">
                    Start Your Growth
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </button>
                <button className="w-full sm:w-auto px-8 py-4 bg-transparent border border-white/20 hover:border-firefly-green hover:text-firefly-green text-white font-semibold rounded-lg transition-all duration-300 flex items-center justify-center gap-2 text-lg backdrop-blur-sm hover:bg-white/5" onClick={onShowReel}>
                  <Play className="w-5 h-5 fill-current" />
                  View Showreel
                </button>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;