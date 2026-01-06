import React, { useState, useEffect } from 'react';
import { useMousePosition } from '../hooks/useMousePosition';
import { TextShimmer } from './ui/text-shimmer';

const MouseFollower = () => {
  const { x, y } = useMousePosition();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleClick = () => {
      setIsVisible(true);
      setTimeout(() => setIsVisible(false), 2000);
    };

    const buttons = document.querySelectorAll('button, a[href]');
    buttons.forEach(button => {
      button.addEventListener('click', handleClick);
    });

    return () => {
      buttons.forEach(button => {
        button.removeEventListener('click', handleClick);
      });
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div
      className="fixed pointer-events-none z-50 transform -translate-x-1/2 -translate-y-1/2"
      style={{ left: x, top: y - 30 }}
    >
      <div className="bg-black/80 backdrop-blur-sm border border-green-500/50 rounded-lg px-3 py-1">
        <TextShimmer 
          className="text-green-400 font-mono text-sm [--base-color:theme(colors.green.500)] [--base-gradient-color:theme(colors.green.300)]"
          duration={1}
        >
          Ucieczka z Matrixa...
        </TextShimmer>
      </div>
    </div>
  );
};

export default MouseFollower;