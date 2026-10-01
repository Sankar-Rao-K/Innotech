import React, { useEffect, useRef, useState } from 'react';

export type AnimationType = 'fade-up' | 'fade-down' | 'fade-in' | 'scale-up' | 'slide-right' | 'slide-left';

interface AnimateOnScrollProps {
  children: React.ReactNode;
  type?: AnimationType;
  delay?: number; // in seconds, e.g. 0.05, 0.1
  duration?: number; // in seconds, e.g. 0.45
  className?: string;
  as?: React.ElementType;
  style?: React.CSSProperties;
}

// Module-level singleton observer for optimal 60 FPS performance with zero memory leak
type ObserverCallback = (isIntersecting: boolean) => void;
const observerCallbacks = new WeakMap<Element, ObserverCallback>();

let globalObserver: IntersectionObserver | null = null;

function getGlobalObserver(): IntersectionObserver | null {
  if (typeof window === 'undefined') return null;
  if (!('IntersectionObserver' in window)) return null;

  if (!globalObserver) {
    globalObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cb = observerCallbacks.get(entry.target);
            if (cb) {
              cb(true);
              observerCallbacks.delete(entry.target);
            }
            // Animate once per element: unobserve immediately upon entering viewport
            globalObserver?.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.05,
        rootMargin: '0px 0px -25px 0px',
      }
    );
  }
  return globalObserver;
}

export const AnimateOnScroll: React.FC<AnimateOnScrollProps> = ({
  children,
  type = 'fade-up',
  delay = 0,
  duration,
  className = '',
  as: Component = 'div',
  style = {},
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Respect prefers-reduced-motion immediately
    if (typeof window !== 'undefined') {
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (prefersReducedMotion) {
        setIsVisible(true);
        return;
      }
    }

    const currentRef = ref.current;
    if (!currentRef) return;
    if (isVisible) return;

    const observer = getGlobalObserver();
    if (observer) {
      observerCallbacks.set(currentRef, (isIntersecting) => {
        if (isIntersecting) {
          setIsVisible(true);
        }
      });
      observer.observe(currentRef);
    } else {
      // Fallback for environments without IntersectionObserver
      setIsVisible(true);
    }

    return () => {
      if (currentRef) {
        observerCallbacks.delete(currentRef);
        globalObserver?.unobserve(currentRef);
      }
    };
  }, [isVisible]);

  // Ensure mobile animation stays fast and clean with minimal delay
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
  const effectiveDelay = isMobile ? Math.min(delay * 0.4, 0.08) : delay;

  return (
    <Component
      ref={ref}
      className={`reveal-element reveal-${type} ${isVisible ? 'is-visible' : ''} ${className}`}
      style={{
        transitionDelay: isVisible && effectiveDelay > 0 ? `${effectiveDelay}s` : '0s',
        ...(duration ? { transitionDuration: `${duration}s` } : {}),
        ...style,
      }}
    >
      {children}
    </Component>
  );
};

// Convenient Stagger Grid/List Wrapper for Card Groups
interface StaggerGroupProps {
  children: React.ReactNode;
  className?: string;
  staggerDelay?: number; // delay increment per item, e.g. 0.06 (60ms)
  baseDelay?: number;
  type?: AnimationType;
  duration?: number;
  as?: React.ElementType;
}

export const StaggerGroup: React.FC<StaggerGroupProps> = ({
  children,
  className = '',
  staggerDelay = 0.06,
  baseDelay = 0,
  type = 'fade-up',
  duration,
  as: Component = 'div',
}) => {
  return (
    <Component className={className}>
      {React.Children.map(children, (child, index) => {
        if (!React.isValidElement(child)) return child;
        // Cap stagger delay so elements render quickly (max 200ms delay)
        const delay = Math.min(baseDelay + index * staggerDelay, 0.22);
        return (
          <AnimateOnScroll type={type} delay={delay} duration={duration}>
            {child}
          </AnimateOnScroll>
        );
      })}
    </Component>
  );
};
