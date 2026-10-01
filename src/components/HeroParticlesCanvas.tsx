import React, { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  color: string;
  alpha: number;
  pulsePhase: number;
  pulseSpeed: number;
}

interface HeroParticlesCanvasProps {
  className?: string;
  particleCount?: number;
}

export const HeroParticlesCanvas: React.FC<HeroParticlesCanvasProps> = ({ 
  className = '',
  particleCount = 55
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Check prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    let animationFrameId: number;
    let width = container.clientWidth;
    let height = container.clientHeight;
    let dpr = Math.min(window.devicePixelRatio || 1, 2);

    const resizeCanvas = () => {
      if (!canvas || !container) return;
      width = container.clientWidth;
      height = container.clientHeight;
      dpr = Math.min(window.devicePixelRatio || 1, 2);

      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      ctx.scale(dpr, dpr);
    };

    resizeCanvas();

    // Biopharm color scheme
    const colors = [
      'rgba(47, 159, 234, ',   // InnoTech primary sky blue (#2F9FEA)
      'rgba(35, 137, 210, ',   // Deep biopharm blue (#2389D2)
      'rgba(142, 202, 246, ',  // Bright cyan-blue
      'rgba(18, 59, 93, '      // Navy anchor (#123B5D)
    ];

    // Responsive count based on screen width
    const targetCount = width < 768 ? Math.floor(particleCount * 0.55) : particleCount;

    const particles: Particle[] = [];
    for (let i = 0; i < targetCount; i++) {
      const colorBase = colors[Math.floor(Math.random() * colors.length)];
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.45,
        vy: (Math.random() - 0.5) * 0.45,
        radius: Math.random() * 2.2 + 1.2,
        color: colorBase,
        alpha: Math.random() * 0.45 + 0.3,
        pulsePhase: Math.random() * Math.PI * 2,
        pulseSpeed: 0.02 + Math.random() * 0.02
      });
    }

    // Interactive mouse positioning
    const mouse = {
      x: -1000,
      y: -1000,
      radius: 120,
      active: false
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
      mouse.active = true;
    };

    const handleMouseLeave = () => {
      mouse.active = false;
      mouse.x = -1000;
      mouse.y = -1000;
    };

    container.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('mouseleave', handleMouseLeave);

    const maxConnectionDistance = 115;
    const maxConnectionDistanceSq = maxConnectionDistance * maxConnectionDistance;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw subtle connecting molecular lines
      for (let i = 0; i < particles.length; i++) {
        const p1 = particles[i];

        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const distSq = dx * dx + dy * dy;

          if (distSq < maxConnectionDistanceSq) {
            const dist = Math.sqrt(distSq);
            const lineAlpha = (1 - dist / maxConnectionDistance) * 0.22;
            ctx.beginPath();
            ctx.strokeStyle = `rgba(47, 159, 234, ${lineAlpha})`;
            ctx.lineWidth = 0.85;
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }

        // Connect to mouse cursor gently if active
        if (mouse.active) {
          const mdx = p1.x - mouse.x;
          const mdy = p1.y - mouse.y;
          const mdistSq = mdx * mdx + mdy * mdy;
          if (mdistSq < mouse.radius * mouse.radius) {
            const mdist = Math.sqrt(mdistSq);
            const mLineAlpha = (1 - mdist / mouse.radius) * 0.35;
            ctx.beginPath();
            ctx.strokeStyle = `rgba(35, 137, 210, ${mLineAlpha})`;
            ctx.lineWidth = 1;
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.stroke();

            // Subtle magnetic hover repulsion
            if (!prefersReducedMotion) {
              const force = (mouse.radius - mdist) / mouse.radius;
              const angle = Math.atan2(mdy, mdx);
              p1.x += Math.cos(angle) * force * 1.2;
              p1.y += Math.sin(angle) * force * 1.2;
            }
          }
        }
      }

      // Draw molecular nodes
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        if (!prefersReducedMotion) {
          p.x += p.vx;
          p.y += p.vy;
          p.pulsePhase += p.pulseSpeed;

          // Boundary bounce with soft wrapping
          if (p.x < -10) p.x = width + 10;
          else if (p.x > width + 10) p.x = -10;

          if (p.y < -10) p.y = height + 10;
          else if (p.y > height + 10) p.y = -10;
        }

        const currentAlpha = p.alpha + Math.sin(p.pulsePhase) * 0.15;
        const clampedAlpha = Math.max(0.1, Math.min(0.85, currentAlpha));

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `${p.color}${clampedAlpha})`;
        ctx.fill();

        // Delicate outer halo for larger particles
        if (p.radius > 2.0) {
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.radius * 2.2, 0, Math.PI * 2);
          ctx.fillStyle = `${p.color}${clampedAlpha * 0.18})`;
          ctx.fill();
        }
      }

      if (!prefersReducedMotion) {
        animationFrameId = requestAnimationFrame(render);
      }
    };

    render();

    const resizeObserver = new ResizeObserver(() => {
      resizeCanvas();
      if (prefersReducedMotion) {
        render();
      }
    });

    resizeObserver.observe(container);

    return () => {
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
      container.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('mouseleave', handleMouseLeave);
      resizeObserver.disconnect();
    };
  }, [particleCount]);

  return (
    <div 
      ref={containerRef} 
      className={`absolute inset-0 overflow-hidden pointer-events-auto ${className}`}
      aria-hidden="true"
    >
      <canvas 
        ref={canvasRef} 
        className="w-full h-full block"
      />
    </div>
  );
};
