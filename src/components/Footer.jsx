import React from 'react';

export default function Footer() {
  return (
    <footer className="w-full py-6 mt-auto text-center z-10">
      <p className="text-gray-500 font-sans text-sm tracking-wide flex items-center justify-center gap-1 hover:scale-105 transition-transform duration-300 select-none">
        Made with lots of courage by Aniket <span className="animate-heart-pulse inline-block">🫶</span>
      </p>
    </footer>
  );
}
