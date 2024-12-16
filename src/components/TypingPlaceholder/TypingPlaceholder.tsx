import React, { useState, useEffect } from 'react';

export function TypingPlaceholder() {
  const [placeholder, setPlaceholder] = useState('');
  const fullText = 'Опишите сайт, который хотите создать...';
  const typingSpeed = 100; // milliseconds per character

  useEffect(() => {
    let currentIndex = 0;
    const intervalId = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setPlaceholder(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(intervalId);
      }
    }, typingSpeed);

    return () => clearInterval(intervalId);
  }, []);

  return placeholder;
}