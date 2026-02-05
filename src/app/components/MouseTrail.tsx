import { useEffect, useCallback, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  life: number;
  decay: number;
  size: number;
  color: string;
  vx: number;
  vy: number;
  shape: 'circle' | 'star' | 'plus' | 'diamond' | 'triangle' | 'heart';
  rotation: number;
  rotationSpeed: number;
}

export default function MouseTrail() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const mouseRef = useRef({ x: 0, y: 0 });
  const animationRef = useRef<number>();

  const colors = [
    'rgba(99, 102, 241, 0.8)',   // Indigo
    'rgba(139, 92, 246, 0.8)',   // Purple
    'rgba(236, 72, 153, 0.8)',   // Pink
    'rgba(59, 130, 246, 0.8)',   // Blue
    'rgba(16, 185, 129, 0.8)',   // Emerald
    'rgba(245, 158, 11, 0.8)',   // Amber
    'rgba(239, 68, 68, 0.8)',    // Red
  ];

  const shapes: Particle['shape'][] = ['circle', 'star', 'plus', 'diamond', 'triangle', 'heart'];

  const createParticle = useCallback((x: number, y: number) => {
    return {
      x,
      y,
      life: 1,
      decay: 0.015 + Math.random() * 0.02,
      size: 3 + Math.random() * 6,
      color: colors[Math.floor(Math.random() * colors.length)],
      vx: (Math.random() - 0.5) * 3,
      vy: (Math.random() - 0.5) * 3,
      shape: shapes[Math.floor(Math.random() * shapes.length)],
      rotation: Math.random() * Math.PI * 2,
      rotationSpeed: (Math.random() - 0.5) * 0.2,
    };
  }, [colors, shapes]);

  const updateParticles = useCallback(() => {
    particlesRef.current = particlesRef.current.filter(particle => {
      particle.life -= particle.decay;
      particle.x += particle.vx;
      particle.y += particle.vy;
      particle.vx *= 0.98;
      particle.vy *= 0.98;
      particle.rotation += particle.rotationSpeed;
      return particle.life > 0;
    });
  }, []);

  const drawShape = useCallback((ctx: CanvasRenderingContext2D, particle: Particle) => {
    const { x, y, size, shape, rotation } = particle;
    const radius = size;
    
    ctx.save();
    ctx.translate(x, y);
    ctx.rotate(rotation);
    
    switch (shape) {
      case 'star':
        drawStar(ctx, 0, 0, 5, radius, radius * 0.5);
        break;
      case 'plus':
        drawPlus(ctx, 0, 0, radius);
        break;
      case 'diamond':
        drawDiamond(ctx, 0, 0, radius);
        break;
      case 'triangle':
        drawTriangle(ctx, 0, 0, radius);
        break;
      case 'heart':
        drawHeart(ctx, 0, 0, radius * 0.8);
        break;
      default: // circle
        ctx.beginPath();
        ctx.arc(0, 0, radius, 0, Math.PI * 2);
        ctx.fill();
        break;
    }
    
    ctx.restore();
  }, []);

  const drawStar = (ctx: CanvasRenderingContext2D, cx: number, cy: number, spikes: number, outerRadius: number, innerRadius: number) => {
    let rot = Math.PI / 2 * 3;
    let x = cx;
    let y = cy;
    const step = Math.PI / spikes;

    ctx.beginPath();
    ctx.moveTo(cx, cy - outerRadius);
    
    for (let i = 0; i < spikes; i++) {
      x = cx + Math.cos(rot) * outerRadius;
      y = cy + Math.sin(rot) * outerRadius;
      ctx.lineTo(x, y);
      rot += step;

      x = cx + Math.cos(rot) * innerRadius;
      y = cy + Math.sin(rot) * innerRadius;
      ctx.lineTo(x, y);
      rot += step;
    }
    
    ctx.lineTo(cx, cy - outerRadius);
    ctx.closePath();
    ctx.fill();
  };

  const drawPlus = (ctx: CanvasRenderingContext2D, cx: number, cy: number, size: number) => {
    const thickness = size * 0.3;
    ctx.beginPath();
    ctx.rect(cx - thickness / 2, cy - size, thickness, size * 2);
    ctx.rect(cx - size, cy - thickness / 2, size * 2, thickness);
    ctx.fill();
  };

  const drawDiamond = (ctx: CanvasRenderingContext2D, cx: number, cy: number, size: number) => {
    ctx.beginPath();
    ctx.moveTo(cx, cy - size);
    ctx.lineTo(cx + size, cy);
    ctx.lineTo(cx, cy + size);
    ctx.lineTo(cx - size, cy);
    ctx.closePath();
    ctx.fill();
  };

  const drawTriangle = (ctx: CanvasRenderingContext2D, cx: number, cy: number, size: number) => {
    ctx.beginPath();
    ctx.moveTo(cx, cy - size);
    ctx.lineTo(cx - size * 0.866, cy + size * 0.5);
    ctx.lineTo(cx + size * 0.866, cy + size * 0.5);
    ctx.closePath();
    ctx.fill();
  };

  const drawHeart = (ctx: CanvasRenderingContext2D, cx: number, cy: number, size: number) => {
    ctx.beginPath();
    const topCurveHeight = size * 0.3;
    ctx.moveTo(cx, cy + topCurveHeight);
    // Left curve
    ctx.bezierCurveTo(
      cx, cy, 
      cx - size / 2, cy, 
      cx - size / 2, cy + topCurveHeight
    );
    ctx.bezierCurveTo(
      cx - size / 2, cy + (size + topCurveHeight) / 2, 
      cx, cy + (size + topCurveHeight) / 2, 
      cx, cy + size
    );
    // Right curve
    ctx.bezierCurveTo(
      cx, cy + (size + topCurveHeight) / 2, 
      cx + size / 2, cy + (size + topCurveHeight) / 2, 
      cx + size / 2, cy + topCurveHeight
    );
    ctx.bezierCurveTo(
      cx + size / 2, cy, 
      cx, cy, 
      cx, cy + topCurveHeight
    );
    ctx.closePath();
    ctx.fill();
  };

  const drawParticles = useCallback((ctx: CanvasRenderingContext2D) => {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    
    particlesRef.current.forEach(particle => {
      const alpha = particle.life;
      const size = particle.size * alpha;
      
      ctx.globalAlpha = alpha;
      ctx.fillStyle = particle.color;
      
      // Draw the shape
      drawShape(ctx, { ...particle, size });
      
      // Add glow effect
      ctx.shadowColor = particle.color;
      ctx.shadowBlur = size * 1.5;
      drawShape(ctx, { ...particle, size });
      ctx.shadowBlur = 0;
    });
    
    ctx.globalAlpha = 1;
  }, [drawShape]);

  const animate = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    updateParticles();
    drawParticles(ctx);
    
    animationRef.current = requestAnimationFrame(animate);
  }, [updateParticles, drawParticles]);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    mouseRef.current = { x: e.clientX, y: e.clientY };
    
    // Create particles occasionally with varying frequency based on movement speed
    if (Math.random() < 0.4) {
      particlesRef.current.push(
        createParticle(e.clientX, e.clientY)
      );
    }
  }, [createParticle]);

  const handleClick = useCallback((e: MouseEvent) => {
    // Create burst of particles on click with mixed shapes
    for (let i = 0; i < 12; i++) {
      const angle = (i / 12) * Math.PI * 2;
      const velocity = 4 + Math.random() * 3;
      const particle = createParticle(e.clientX, e.clientY);
      particle.vx = Math.cos(angle) * velocity;
      particle.vy = Math.sin(angle) * velocity;
      particle.size = 4 + Math.random() * 4;
      particle.decay = 0.01 + Math.random() * 0.015; // Longer lasting for click burst
      particlesRef.current.push(particle);
    }
    
    // Add a few special large shapes in the center
    for (let i = 0; i < 3; i++) {
      const centerParticle = createParticle(e.clientX, e.clientY);
      centerParticle.vx = (Math.random() - 0.5) * 1;
      centerParticle.vy = (Math.random() - 0.5) * 1;
      centerParticle.size = 8 + Math.random() * 4;
      centerParticle.shape = ['star', 'heart', 'diamond'][i % 3] as Particle['shape'];
      centerParticle.decay = 0.008; // Very long lasting
      particlesRef.current.push(centerParticle);
    }
  }, [createParticle]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    animate();

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('click', handleClick);
    window.addEventListener('resize', resizeCanvas);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('click', handleClick);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, [animate, handleMouseMove, handleClick]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: 9997 }}
    />
  );
}