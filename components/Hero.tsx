import React, { useEffect, useRef } from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import Reveal from './Reveal';

const Hero: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];

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
      pulseOffset: number;
      pulseSpeed: number;
      
      constructor(w: number, h: number) {
        this.x = Math.random() * w;
        this.y = Math.random() * h;
        this.vx = (Math.random() - 0.5) * 0.3; 
        this.vy = (Math.random() - 0.5) * 0.3;
        this.size = Math.random() * 3 + 0.5;
        const colors = ['#e2d82b', '#00ee8a', '#ffffff'];
        this.color = colors[Math.floor(Math.random() * colors.length)];
        this.baseAlpha = Math.random() * 0.5 + 0.2;
        this.alpha = this.baseAlpha;
        this.pulseOffset = Math.random() * Math.PI * 2;
        this.pulseSpeed = 0.02 + Math.random() * 0.03;
      }

      update(w: number, h: number, time: number) {
        this.x += this.vx;
        this.y += this.vy;

        // Wrap around screen
        if (this.x < 0) this.x = w;
        if (this.x > w) this.x = 0;
        if (this.y < 0) this.y = h;
        if (this.y > h) this.y = 0;

        // Subtle pulsing effect
        this.alpha = this.baseAlpha + Math.sin(time * this.pulseSpeed + this.pulseOffset) * 0.15;
        // Clamp alpha
        if (this.alpha < 0.1) this.alpha = 0.1;
        if (this.alpha > 0.8) this.alpha = 0.8;
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
      const particleCount = Math.min(Math.floor(window.innerWidth / 15), 60);
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle(canvas.width, canvas.height));
      }
    };

    let time = 0;
    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      time += 1;
      
      particles.forEach(p => {
        p.update(canvas.width, canvas.height, time);
        p.draw(ctx);
      });
      
      animationFrameId = requestAnimationFrame(render);
    };

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();
    render();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-firefly-dark opacity-90"></div>
        {/* Glow Effect 1 - Animated */}
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-firefly-green/20 rounded-full blur-[120px] animate-pulse"></div>
        {/* Glow Effect 2 - Animated */}
        <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-firefly-yellow/10 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '2s' }}></div>
        
        {/* Grid Pattern Overlay */}
        <div 
          className="absolute inset-0 opacity-[0.05]" 
          style={{ 
            backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)`, 
            backgroundSize: '50px 50px' 
          }}
        ></div>

        {/* Particle Canvas */}
        <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none" />
      </div>

      <div className="container mx-auto px-4 relative z-10 text-center">
        
        {/* Badge */}
        <Reveal width="100%" className="flex justify-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-sm hover:border-firefly-yellow/50 transition-colors duration-300">
            <Sparkles className="w-4 h-4 text-firefly-yellow animate-spin-slow" />
            <span className="text-sm text-gray-300 font-medium">The Future of Digital Growth</span>
          </div>
        </Reveal>

        {/* Heading */}
        <Reveal delay={200} width="100%">
          <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-6 tracking-tight">
            <span className="text-white inline-block hover:scale-105 transition-transform duration-500 cursor-default">Ignite Your</span>
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-firefly-yellow via-white to-firefly-green inline-block">
              Brand's Potential
            </span>
          </h1>
        </Reveal>

        {/* Subheading */}
        <Reveal delay={400} width="100%">
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            We fuse creativity with data-driven strategies to build systems that generate consistent revenue. Stop chasing leads. Let them find you.
          </p>
        </Reveal>

        {/* Buttons */}
        <Reveal delay={600} width="100%">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="group w-full sm:w-auto px-8 py-4 bg-firefly-yellow hover:bg-firefly-green text-firefly-dark font-bold rounded-lg transition-all duration-300 transform hover:-translate-y-1 hover:shadow-[0_10px_30px_-5px_rgba(226,216,43,0.6)] flex items-center justify-center gap-2 text-lg overflow-hidden relative">
              <span className="relative z-10 flex items-center gap-2">
                Start Your Growth
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
              {/* Button shine effect */}
              <div className="absolute top-0 left-[-100%] w-full h-full bg-white/30 -skew-x-12 group-hover:left-[100%] transition-all duration-700"></div>
            </button>
            
            <button className="w-full sm:w-auto px-8 py-4 bg-transparent border border-white/20 hover:border-firefly-green hover:text-firefly-green text-white font-semibold rounded-lg transition-all duration-300 flex items-center justify-center gap-2 text-lg backdrop-blur-sm hover:bg-white/5">
              View Case Studies
            </button>
          </div>
        </Reveal>

        {/* Trust Indicators */}
        <Reveal delay={800} width="100%">
          <div className="mt-20 pt-10 border-t border-white/5">
            <p className="text-sm text-gray-500 mb-6 uppercase tracking-widest">Trusted by Innovative Companies</p>
            <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-700 ease-in-out">
               {/* Simple SVG Placeholders for Logos */}
               {['Acme Corp', 'GlobalTech', 'Nebula', 'Vertex', 'Oasis'].map((brand, i) => (
                 <span key={i} className="text-xl font-heading font-bold text-white hover:text-firefly-yellow transition-colors cursor-default hover:scale-110 transform duration-300">{brand}</span>
               ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Hero;