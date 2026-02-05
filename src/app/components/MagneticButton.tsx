import { useEffect, useState } from 'react';

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  strength?: number;
  onClick?: () => void;
}

export default function MagneticButton({ 
  children, 
  className = "", 
  strength = 0.3, 
  onClick 
}: MagneticButtonProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [buttonRef, setButtonRef] = useState<HTMLButtonElement | null>(null);

  useEffect(() => {
    if (!buttonRef) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = buttonRef.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      
      const deltaX = e.clientX - centerX;
      const deltaY = e.clientY - centerY;
      
      const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
      const maxDistance = Math.max(rect.width, rect.height);
      
      if (distance < maxDistance * 1.5) {
        setMousePosition({
          x: deltaX * strength,
          y: deltaY * strength
        });
      } else {
        setMousePosition({ x: 0, y: 0 });
      }
    };

    const handleMouseEnter = () => setIsHovered(true);
    const handleMouseLeave = () => {
      setIsHovered(false);
      setMousePosition({ x: 0, y: 0 });
    };

    if (isHovered) {
      document.addEventListener('mousemove', handleMouseMove);
    }

    buttonRef.addEventListener('mouseenter', handleMouseEnter);
    buttonRef.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      buttonRef.removeEventListener('mouseenter', handleMouseEnter);
      buttonRef.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [buttonRef, isHovered, strength]);

  return (
    <button
      ref={setButtonRef}
      className={`relative overflow-hidden transition-all duration-300 ${className}`}
      style={{
        transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
      }}
      onClick={onClick}
    >
      {/* Magnetic glow effect */}
      <div 
        className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500/20 to-indigo-500/20 opacity-0 transition-opacity duration-300"
        style={{
          opacity: isHovered ? 1 : 0,
          transform: `scale(${isHovered ? 1.1 : 0.8})`,
        }}
      />
      
      {/* Ripple effect on hover */}
      <div 
        className="absolute inset-0 rounded-full border-2 border-purple-400/30"
        style={{
          transform: `scale(${isHovered ? 1.2 : 1})`,
          opacity: isHovered ? 0 : 1,
          transition: 'all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
        }}
      />
      
      <span className="relative z-10">
        {children}
      </span>
    </button>
  );
}