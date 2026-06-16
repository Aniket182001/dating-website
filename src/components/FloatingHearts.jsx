import React, { useMemo } from 'react';

export default function FloatingHearts() {
  // Generate random values once on mount to keep animations stable
  const hearts = useMemo(() => {
    return Array.from({ length: 18 }).map((_, i) => {
      const size = Math.random() * 20 + 12; // Size between 12px and 32px
      const left = Math.random() * 100; // Position from 0% to 100%
      const delay = Math.random() * 10; // Animation delay up to 10s
      const duration = Math.random() * 6 + 8; // Speed between 8s and 14s
      const drift = Math.random() * 80 - 40; // Horizontal drift between -40px and 40px
      const rotate = Math.random() * 180 - 90; // Rotation between -90deg and 90deg
      const opacity = Math.random() * 0.4 + 0.2; // Opacity between 0.2 and 0.6
      
      // Alternate between pink, lavender and soft white/rose
      const colors = ['#FF6FA5', '#C8A2FF', '#FFB6C1', '#FFA07A'];
      const color = colors[i % colors.length];

      return {
        id: i,
        left,
        size,
        delay,
        duration,
        drift,
        rotate,
        opacity,
        color
      };
    });
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
      {hearts.map((heart) => (
        <svg
          key={heart.id}
          className="absolute bottom-0 animate-float"
          style={{
            left: `${heart.left}%`,
            width: `${heart.size}px`,
            height: `${heart.size}px`,
            animationDelay: `${heart.delay}s`,
            animationDuration: `${heart.duration}s`,
            opacity: heart.opacity,
            fill: heart.color,
            '--float-x': `${heart.drift}px`,
            '--float-rotate': `${heart.rotate}deg`,
          }}
          viewBox="0 0 24 24"
        >
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
        </svg>
      ))}
    </div>
  );
}
