import { useEffect, useRef, useState, useCallback } from 'react';

interface MagneticOptions {
  strength?: number;
  distance?: number;
  duration?: number;
}

export function useMagnetic(options: MagneticOptions = {}) {
  const {
    strength = 0.3,
    distance = 100,
    duration = 0.15
  } = options;

  const elementRef = useRef<HTMLElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [transform, setTransform] = useState({ x: 0, y: 0 });

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (!elementRef.current) return;

    const rect = elementRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const deltaX = e.clientX - centerX;
    const deltaY = e.clientY - centerY;
    
    const distanceFromCenter = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
    
    if (distanceFromCenter < distance) {
      const magneticForce = Math.max(0, (distance - distanceFromCenter) / distance);
      setTransform({
        x: deltaX * strength * magneticForce,
        y: deltaY * strength * magneticForce
      });
    }
  }, [strength, distance]);

  const handleMouseEnter = useCallback(() => {
    setIsHovered(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsHovered(false);
    setTransform({ x: 0, y: 0 });
  }, []);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    element.addEventListener('mouseenter', handleMouseEnter);
    element.addEventListener('mouseleave', handleMouseLeave);

    if (isHovered) {
      document.addEventListener('mousemove', handleMouseMove);
    }

    return () => {
      element.removeEventListener('mouseenter', handleMouseEnter);
      element.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, [isHovered, handleMouseMove, handleMouseEnter, handleMouseLeave]);

  const magneticStyle = {
    transform: `translate(${transform.x}px, ${transform.y}px)`,
    transition: isHovered ? `transform ${duration}s cubic-bezier(0.165, 0.84, 0.44, 1)` : 'transform 0.3s ease-out',
  };

  return {
    elementRef,
    magneticStyle,
    isHovered,
  };
}

export default useMagnetic;