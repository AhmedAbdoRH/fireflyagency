import React, { useEffect, useRef } from 'react';

const CustomCursor: React.FC = () => {
  const cursorDotRef = useRef<HTMLDivElement>(null);
  const cursorOutlineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const dot = cursorDotRef.current;
    const outline = cursorOutlineRef.current;
    
    if (!dot || !outline) return;

    // Hide cursor on touch devices
    if (window.matchMedia("(pointer: coarse)").matches) {
      dot.style.display = "none";
      outline.style.display = "none";
      return;
    }

    let mouseX = 0;
    let mouseY = 0;
    let outlineX = 0;
    let outlineY = 0;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      
      // Dot follows immediately
      dot.style.left = `${mouseX}px`;
      dot.style.top = `${mouseY}px`;
      
      // Add active state to interactive elements
      const target = e.target as HTMLElement;
      const isInteractive = target.closest('button, a, input, textarea, .cursor-pointer');
      
      if (isInteractive) {
        outline.style.transform = `translate(-50%, -50%) scale(1.5)`;
        outline.style.backgroundColor = "rgba(226, 216, 43, 0.1)";
        outline.style.borderColor = "transparent";
      } else {
        outline.style.transform = `translate(-50%, -50%) scale(1)`;
        outline.style.backgroundColor = "transparent";
        outline.style.borderColor = "rgba(226, 216, 43, 0.5)";
      }
    };

    const animateOutline = () => {
      // Smooth follow logic (Linear interpolation)
      outlineX += (mouseX - outlineX) * 0.15;
      outlineY += (mouseY - outlineY) * 0.15;

      outline.style.left = `${outlineX}px`;
      outline.style.top = `${outlineY}px`;

      requestAnimationFrame(animateOutline);
    };

    window.addEventListener('mousemove', onMouseMove);
    const animationId = requestAnimationFrame(animateOutline);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <>
      <div ref={cursorDotRef} className="cursor-dot hidden md:block"></div>
      <div ref={cursorOutlineRef} className="cursor-outline hidden md:block"></div>
    </>
  );
};

export default CustomCursor;