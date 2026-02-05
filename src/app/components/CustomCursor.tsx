import { useEffect, useState, useCallback, useRef } from 'react';

interface Position {
  x: number;
  y: number;
}

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState<Position>({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState('default');
  const [isVisible, setIsVisible] = useState(true);
  const [isPressed, setIsPressed] = useState(false);
  const cursorRef = useRef<HTMLDivElement>(null);
  const trailRef = useRef<HTMLDivElement>(null);
  const isInsideWindow = useRef(true);

  const updateMousePosition = useCallback((e: MouseEvent) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
    // Force visibility on any mouse movement
    isInsideWindow.current = true;
    if (!isVisible) {
      setIsVisible(true);
    }
  }, [isVisible]);

  const handleMouseDown = useCallback(() => setIsPressed(true), []);
  const handleMouseUp = useCallback(() => setIsPressed(false), []);
  
  const handleMouseEnter = useCallback(() => {
    isInsideWindow.current = true;
    setIsVisible(true);
  }, []);
  
  const handleMouseLeave = useCallback((e: MouseEvent) => {
    // Only hide if leaving the document completely
    if (e.target === document.documentElement) {
      isInsideWindow.current = false;
      setIsVisible(false);
    }
  }, []);

  const handleElementHover = useCallback((elementType: string) => {
    setCursorVariant(elementType);
  }, []);

  const handleElementLeave = useCallback(() => {
    setCursorVariant('default');
  }, []);

  useEffect(() => {
    // Add global mouse listeners
    document.addEventListener('mousemove', updateMousePosition);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);

    // Add cursor-hidden class to body
    document.body.classList.add('cursor-hidden');

    // Ensure cursor starts visible
    setIsVisible(true);

    // Add hover listeners for interactive elements
    const addHoverListeners = (selector: string, variant: string) => {
      const elements = document.querySelectorAll(selector);
      elements.forEach(element => {
        const enterHandler = () => handleElementHover(variant);
        const leaveHandler = () => handleElementLeave();
        
        element.addEventListener('mouseenter', enterHandler);
        element.addEventListener('mouseleave', leaveHandler);
        
        // Store handlers for cleanup
        (element as any)._cursorEnterHandler = enterHandler;
        (element as any)._cursorLeaveHandler = leaveHandler;
      });
    };

    // Setup mutation observer for dynamic content
    const observer = new MutationObserver(() => {
      // Small delay to ensure DOM is ready
      setTimeout(() => {
        addHoverListeners('button, a, [role="button"], .magnetic', 'pointer');
        addHoverListeners('input, textarea, [contenteditable]', 'text');
        addHoverListeners('h1, h2, h3, h4, h5, h6', 'heading');
        addHoverListeners('img, video, canvas', 'media');
      }, 10);
    });

    observer.observe(document, {
      childList: true,
      subtree: true,
    });

    // Initial setup
    addHoverListeners('button, a, [role="button"], .magnetic', 'pointer');
    addHoverListeners('input, textarea, [contenteditable]', 'text');
    addHoverListeners('h1, h2, h3, h4, h5, h6', 'heading');
    addHoverListeners('img, video, canvas', 'media');

    return () => {
      document.removeEventListener('mousemove', updateMousePosition);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.body.classList.remove('cursor-hidden');
      observer.disconnect();
      
      // Clean up element listeners
      document.querySelectorAll('*').forEach(element => {
        if ((element as any)._cursorEnterHandler) {
          element.removeEventListener('mouseenter', (element as any)._cursorEnterHandler);
        }
        if ((element as any)._cursorLeaveHandler) {
          element.removeEventListener('mouseleave', (element as any)._cursorLeaveHandler);
        }
      });
    };
  }, [updateMousePosition, handleMouseDown, handleMouseUp, handleMouseEnter, handleMouseLeave, handleElementHover, handleElementLeave]);

  // Smooth cursor animation with RAF
  useEffect(() => {
    const cursor = cursorRef.current;
    const trail = trailRef.current;
    if (!cursor || !trail) return;

    let animationId: number;
    let currentPosition = { x: mousePosition.x, y: mousePosition.y };
    let targetPosition = { x: mousePosition.x, y: mousePosition.y };

    const animate = () => {
      // Smooth interpolation
      currentPosition.x += (targetPosition.x - currentPosition.x) * 0.15;
      currentPosition.y += (targetPosition.y - currentPosition.y) * 0.15;

      // Update cursor position
      const size = getCursorSize();
      const scale = getCursorScale();
      cursor.style.transform = `translate(${currentPosition.x - size/2}px, ${currentPosition.y - size/2}px) ${scale}`;
      trail.style.transform = `translate(${currentPosition.x - 4}px, ${currentPosition.y - 4}px)`;

      // Ensure visibility is maintained during movement
      if (isInsideWindow.current && !isVisible) {
        setIsVisible(true);
      }

      animationId = requestAnimationFrame(animate);
    };

    const updateTarget = () => {
      targetPosition = { x: mousePosition.x, y: mousePosition.y };
    };

    updateTarget();
    animate();

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, [mousePosition, isVisible]);

  const getCursorSize = () => {
    switch (cursorVariant) {
      case 'pointer':
        return isPressed ? 30 : 34;
      case 'text':
        return 24;
      case 'heading':
        return 36;
      case 'media':
        return 44;
      default:
        return isPressed ? 28 : 32;
    }
  };

  const getCursorScale = () => {
    if (isPressed) return 'scale(0.8)';
    switch (cursorVariant) {
      case 'pointer':
        return 'scale(1.1)';
      case 'text':
        return 'scaleX(0.5) scaleY(1.2)';
      case 'heading':
        return 'scale(1.15)';
      case 'media':
        return 'scale(1.4)';
      default:
        return 'scale(1)';
    }
  };

  const getCursorColor = () => {
    switch (cursorVariant) {
      case 'pointer':
        return '#8b5cf6';
      case 'text':
        return '#06b6d4';
      case 'heading':
        return '#f59e0b';
      case 'media':
        return '#ec4899';
      default:
        return '#6366f1';
    }
  };

  return (
    <>
      {/* Custom cursor trail */}
      <div
        ref={trailRef}
        className="custom-cursor-trail fixed top-0 left-0 w-2 h-2 rounded-full pointer-events-none transition-opacity duration-200"
        style={{
          background: `linear-gradient(45deg, ${getCursorColor()}, ${getCursorColor()}80)`,
          opacity: isVisible ? 0.6 : 0,
          zIndex: 9998,
        }}
      />

      {/* Main custom cursor */}
      <div
        ref={cursorRef}
        className="custom-cursor fixed top-0 left-0 rounded-full pointer-events-none transition-opacity duration-150"
        style={{
          width: `${getCursorSize()}px`,
          height: `${getCursorSize()}px`,
          border: `2px solid ${getCursorColor()}`,
          backgroundColor: `${getCursorColor()}10`,
          opacity: isVisible ? 1 : 0,
          zIndex: 9999,
          backdropFilter: 'blur(2px)',
          willChange: 'transform, opacity',
        }}
      >
        {/* Inner dot */}
        <div
          className="absolute top-1/2 left-1/2 rounded-full transition-all duration-150"
          style={{
            transform: 'translate(-50%, -50%)',
            width: cursorVariant === 'text' ? '2px' : '6px',
            height: cursorVariant === 'text' ? '16px' : '6px',
            backgroundColor: getCursorColor(),
          }}
        />
        
        {/* Hover effect ring */}
        {(cursorVariant === 'pointer' || cursorVariant === 'media') && (
          <div
            className="absolute -inset-2 rounded-full border animate-pulse"
            style={{
              borderColor: `${getCursorColor()}30`,
              animation: 'cursor-pulse 2s infinite',
            }}
          />
        )}
        
        {/* Click ripple effect */}
        {isPressed && (
          <div
            className="absolute -inset-4 rounded-full border-2"
            style={{
              borderColor: `${getCursorColor()}50`,
              animation: 'cursor-ripple 0.6s ease-out forwards',
            }}
          />
        )}
      </div>
    </>
  );
}