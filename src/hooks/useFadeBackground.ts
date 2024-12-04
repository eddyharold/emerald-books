import { useState, useEffect } from 'react';

export function useFadeBackground(initialColor: string, targetColor: string) {
  const [backgroundColor, setBackgroundColor] = useState(initialColor);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setBackgroundColor(targetColor);
          } else {
            setBackgroundColor(initialColor);
          }
        });
      },
      { threshold: 0.5 }
    );

    const element = document.getElementById('fade-trigger');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [initialColor, targetColor]);

  return backgroundColor;
}

