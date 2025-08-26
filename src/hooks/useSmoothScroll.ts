import { useEffect } from 'react';

export const useSmoothScroll = () => {
  const scrollToSection = (sectionId: string) => {
    const section = document.querySelector(sectionId);
    const header = document.querySelector('header');
    const headerHeight = header?.offsetHeight || 0;

    if (section) {
      const sectionTop = section.getBoundingClientRect().top + window.pageYOffset - headerHeight;
      window.scrollTo({
        top: sectionTop,
        behavior: 'smooth'
      });
    }
  };

  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    
    // Handle hash links on page load
    if (window.location.hash) {
      setTimeout(() => {
        scrollToSection(window.location.hash);
      }, 0);
    }

    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return scrollToSection;
};
