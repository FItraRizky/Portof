import React, { useEffect, useMemo, useRef, ReactNode, RefObject } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface ScrollFloatTextProps {
  children: ReactNode;
  scrollContainerRef?: RefObject<HTMLElement>;
  containerClassName?: string;
  textClassName?: string;
  animationDuration?: number;
  ease?: string;
  scrollStart?: string;
  scrollEnd?: string;
  stagger?: number;
  as?: 'p' | 'span' | 'div' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  splitBy?: 'character' | 'word';
}

const ScrollFloatText: React.FC<ScrollFloatTextProps> = ({
  children,
  scrollContainerRef,
  containerClassName = '',
  textClassName = '',
  animationDuration = 1,
  ease = 'power2.out',
  scrollStart = 'top bottom-=100',
  scrollEnd = 'bottom bottom-=200',
  stagger = 0.02,
  as: Component = 'p',
  splitBy = 'word'
}) => {
  const containerRef = useRef<HTMLElement>(null);

  const splitText = useMemo(() => {
    const text = typeof children === 'string' ? children : '';
    
    if (splitBy === 'character') {
      return text.split('').map((char, index) => (
        <span className="inline-block" key={index}>
          {char === ' ' ? '\u00A0' : char}
        </span>
      ));
    }

    // Split by word for better performance
    return text.split(' ').map((word, index) => (
      <span className="inline-block mr-[0.25em]" key={index}>
        {word}
      </span>
    ));
  }, [children, splitBy]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const scroller = scrollContainerRef && scrollContainerRef.current ? scrollContainerRef.current : window;

    const elements = el.querySelectorAll('.inline-block');

    const animation = gsap.fromTo(
      elements,
      {
        willChange: 'opacity, transform',
        opacity: 0,
        y: 20,
        // Removed scale animations for better performance
      },
      {
        duration: animationDuration,
        ease: ease,
        opacity: 1,
        y: 0,
        stagger: stagger,
        scrollTrigger: {
          trigger: el,
          scroller,
          start: scrollStart,
          end: scrollEnd,
          scrub: true
        }
      }
    );

    return () => {
      animation.kill();
    };
  }, [scrollContainerRef, animationDuration, ease, scrollStart, scrollEnd, stagger]);

  return React.createElement(
    Component,
    {
      ref: containerRef as any,
      className: `${containerClassName}` // Removed overflow-hidden to prevent clipping of descenders
    },
    <span className={`${textClassName}`}>{splitText}</span>
  );
};

export default ScrollFloatText;
