import React, { useEffect, useRef, useState } from 'react';
import { STATS } from '../constants';
import Reveal from './Reveal';

const CountUp: React.FC<{ value: string; label: string }> = ({ value, label }) => {
  const [displayValue, setDisplayValue] = useState("0");
  const elementRef = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  // Extract number and suffix (e.g., "50" and "M+")
  const numberPart = parseFloat(value.replace(/[^0-9.]/g, ''));
  const prefix = value.match(/^[^0-9]*/)?.[0] ?? '';
  const suffix = value.match(/[^0-9]*$/)?.[0] ?? '';

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          let startTimestamp: number | null = null;
          const duration = 2000; // 2 seconds

          const step = (timestamp: number) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            
            // Ease out quart
            const easeProgress = 1 - Math.pow(1 - progress, 4);
            
            const currentCount = Math.floor(easeProgress * numberPart);
            setDisplayValue(`${prefix}${currentCount}${suffix}`);

            if (progress < 1) {
              window.requestAnimationFrame(step);
            } else {
              setDisplayValue(value); // Ensure final value is exact
            }
          };
          
          window.requestAnimationFrame(step);
        }
      },
      { threshold: 0.5 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [value, numberPart, prefix, suffix]);

  return (
    <div ref={elementRef} className="p-4">
      <div className="font-heading text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-firefly-yellow to-firefly-green mb-2 tabular-nums">
        {displayValue}
      </div>
      <div className="text-sm text-gray-400 uppercase tracking-wider font-medium">
        {label}
      </div>
    </div>
  );
};

const Stats: React.FC = () => {
  return (
    <section className="py-20 border-y border-white/5 bg-[#15263d] relative overflow-hidden">
      {/* Ambient Glow behind stats */}
      <div className="absolute inset-0 bg-gradient-to-r from-firefly-yellow/5 via-transparent to-firefly-green/5 blur-xl pointer-events-none"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-white/5">
          {STATS.map((stat, index) => (
            <CountUp key={index} value={stat.value} label={stat.label} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;