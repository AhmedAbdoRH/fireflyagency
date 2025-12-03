import React, { useEffect, useRef, useState } from 'react';

const FlyingButterfly: React.FC = () => {
    const butterflyRef = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    // Physics state refs to avoid re-renders
    const position = useRef({ x: -100, y: 100 });
    const target = useRef({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
    const velocity = useRef({ x: 0, y: 0 });
    const angle = useRef(45);
    const time = useRef(0);

    useEffect(() => {
        // Delay appearance by 2 seconds
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        // Track mouse/touch
        const handleMove = (e: MouseEvent | TouchEvent) => {
            let clientX, clientY;
            if ('touches' in e) {
                clientX = e.touches[0].clientX;
                clientY = e.touches[0].clientY;
            } else {
                clientX = (e as MouseEvent).clientX;
                clientY = (e as MouseEvent).clientY;
            }

            target.current = { x: clientX, y: clientY };
        };

        window.addEventListener('mousemove', handleMove);
        window.addEventListener('touchmove', handleMove);

        // Animation loop
        let animationFrameId: number;

        const animate = () => {
            time.current += 0.01;

            // Add very subtle wandering noise
            const noiseX = Math.sin(time.current * 0.3) * 0.5;
            const noiseY = Math.cos(time.current * 0.4) * 0.5;

            // Calculate attraction to target
            const dx = target.current.x - position.current.x;
            const dy = target.current.y - position.current.y;

            // Even smoother follow with much reduced acceleration
            velocity.current.x += dx * 0.0003 + noiseX * 0.01;
            velocity.current.y += dy * 0.0003 + noiseY * 0.01;

            // Increased friction for much smoother deceleration
            velocity.current.x *= 0.98;
            velocity.current.y *= 0.98;

            // Update position
            position.current.x += velocity.current.x;
            position.current.y += velocity.current.y;

            // Calculate rotation based on velocity
            const speed = Math.sqrt(velocity.current.x ** 2 + velocity.current.y ** 2);
            if (speed > 0.1) {
                // Calculate target angle based on movement direction
                // Adding 90 degrees because the image is oriented upwards
                let targetAngle = Math.atan2(velocity.current.y, velocity.current.x) * (180 / Math.PI) + 90;

                // Smooth rotation
                const angleDiff = targetAngle - angle.current;
                // Handle wrapping around 360 degrees
                const normalizedDiff = ((angleDiff + 180) % 360) - 180;
                angle.current += normalizedDiff * 0.1;
            }

            // Apply transform
            if (butterflyRef.current) {
                butterflyRef.current.style.transform = `translate3d(${position.current.x}px, ${position.current.y}px, 0) rotate(${angle.current}deg) scale(1)`;
            }

            animationFrameId = requestAnimationFrame(animate);
        };

        animate();

        return () => {
            window.removeEventListener('mousemove', handleMove);
            window.removeEventListener('touchmove', handleMove);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <>
            {/* Flying Butterfly Container */}
            <div
                ref={butterflyRef}
                className={`fixed z-50 pointer-events-none will-change-transform transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
                style={{ top: 0, left: 0, width: '64px', height: '64px', marginLeft: '-32px', marginTop: '-32px' }} // Center pivot
            >
                <div className="animate-flutter relative">
                    {/* Inner Glow Effect */}
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-firefly-yellow/50 rounded-full blur-md animate-pulse mix-blend-screen"></div>

                    <img
                        src="/Fly.png"
                        alt="Flying Butterfly"
                        className="w-16 h-16 object-contain drop-shadow-[0_0_15px_rgba(226,216,43,0.6)] relative z-10"
                    />
                </div>
            </div>

            <style>{`
        @keyframes flutter {
          0%, 100% {
            transform: scaleX(1) translateY(0);
          }
          50% {
            transform: scaleX(0.7) translateY(-1.5px);
          }
        }

        .animate-flutter {
          animation: flutter 1s ease-in-out infinite;
          transform-origin: center;
        }
      `}</style>
        </>
    );
};

export default FlyingButterfly;
