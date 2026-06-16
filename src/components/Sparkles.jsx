import React, { useMemo } from 'react';

export default function Sparkles() {
  const sparkleItems = useMemo(() => {
    return Array.from({ length: 10 }).map((_, i) => {
      // Position them around the container edges (top, bottom, left, right)
      // We will place them in percentages
      const top = Math.random() * 85 + 5; // 5% to 90%
      const left = Math.random() * 85 + 5; // 5% to 90%
      const size = Math.random() * 16 + 12; // 12px to 28px
      const delay = Math.random() * 2; // delay up to 2s
      const duration = Math.random() * 2 + 2; // speed between 2s and 4s
      
      // Select between accent-pink, accent-lavender, and gold/yellow
      const colors = ['#FF6FA5', '#C8A2FF', '#FFDF00', '#FFFFFF'];
      const color = colors[i % colors.length];

      return {
        id: i,
        top,
        left,
        size,
        delay,
        duration,
        color
      };
    });
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-10">
      {sparkleItems.map((sparkle) => (
        <svg
          key={sparkle.id}
          className="absolute animate-sparkle-slow"
          style={{
            top: `${sparkle.top}%`,
            left: `${sparkle.left}%`,
            width: `${sparkle.size}px`,
            height: `${sparkle.size}px`,
            animationDelay: `${sparkle.delay}s`,
            animationDuration: `${sparkle.duration}s`,
            fill: sparkle.color,
          }}
          viewBox="0 0 24 24"
        >
          <path d="M12 3l1.9 5.8a1 1 0 00.6.6L21 12l-5.8 1.9a1 1 0 00-.6.6L12 21l-1.9-5.8a1 1 0 00-.6-.6L3 12l5.8-1.9a1 1 0 00.6-.6L12 3z" />
        </svg>
      ))}
    </div>
  );
}
