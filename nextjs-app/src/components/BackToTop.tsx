'use client';

import { useState, useEffect } from 'react';

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      className={`xconnect-back-to-top${isVisible ? ' is-visible' : ''}`}
      onClick={scrollToTop}
      aria-label="Back to top"
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256">
        <path d="M205.66,138.34a8,8,0,0,1-11.32,11.32L136,91.31V216a8,8,0,0,1-16,0V91.31l-58.34,58.35a8,8,0,0,1-11.32-11.32l72-72a8,8,0,0,1,11.32,0Z"></path>
      </svg>
    </button>
  );
}
