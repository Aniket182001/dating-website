import React from 'react';

// SCREEN 1 GIF Placeholder: A cute envelope with hearts escaping
export function EnvelopeGif() {
  return (
    <div className="w-48 h-48 mx-auto flex items-center justify-center relative select-none">
      {/* Animated floating hearts from the envelope */}
      <div className="absolute top-4 left-1/4 animate-bounce duration-1000 delay-100 text-2xl">💖</div>
      <div className="absolute top-0 right-1/4 animate-bounce duration-700 text-xl">💕</div>
      <div className="absolute top-6 right-1/3 animate-ping opacity-75 text-sm">✨</div>
      
      {/* Envelope Box */}
      <div className="w-36 h-28 bg-[#FFD3E2] rounded-2xl shadow-lg border-4 border-white flex items-center justify-center relative overflow-hidden transform hover:scale-105 transition-transform duration-300 animate-pulse">
        {/* Envelope Flap flap effect */}
        <div className="absolute top-0 left-0 right-0 h-14 bg-[#FFB6C1] rounded-b-3xl border-b-4 border-white"></div>
        {/* Big beating heart in the center */}
        <div className="absolute bottom-4 inset-x-0 flex justify-center">
          <svg className="w-14 h-14 fill-[#FF6FA5] animate-heart-pulse drop-shadow-md" viewBox="0 0 24 24">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>
        </div>
      </div>
    </div>
  );
}

// SCREEN 2 GIF Placeholder: Two cute blush hearts hugging / looking shy
export function ShyHeartsGif() {
  return (
    <div className="w-48 h-48 mx-auto flex items-center justify-center relative select-none">
      <div className="flex gap-2 relative">
        {/* Left Heart (Shy Pink) */}
        <div className="w-20 h-20 bg-[#FF8EBA] rounded-full relative flex items-center justify-center shadow-md animate-bounce duration-1000">
          {/* Heart tail */}
          <div className="absolute bottom-[-4px] left-1/2 transform -translate-x-1/2 rotate-45 w-6 h-6 bg-[#FF8EBA]"></div>
          {/* Eyes */}
          <div className="absolute top-6 left-5 flex gap-5 z-10">
            <div className="w-2 h-2 bg-gray-800 rounded-full"></div>
            <div className="w-2 h-2 bg-gray-800 rounded-full"></div>
          </div>
          {/* Blush */}
          <div className="absolute top-8 left-3 flex gap-7 opacity-70">
            <div className="w-3 h-1.5 bg-[#FF3B7A] rounded-full"></div>
            <div className="w-3 h-1.5 bg-[#FF3B7A] rounded-full"></div>
          </div>
          {/* Shy Mouth */}
          <div className="absolute bottom-6 w-2 h-1 bg-gray-800 rounded-full"></div>
        </div>

        {/* Right Heart (Cute Lavender) */}
        <div className="w-20 h-20 bg-[#D7BCFF] rounded-full relative flex items-center justify-center shadow-md animate-bounce duration-1000 delay-300">
          {/* Heart tail */}
          <div className="absolute bottom-[-4px] left-1/2 transform -translate-x-1/2 rotate-45 w-6 h-6 bg-[#D7BCFF]"></div>
          {/* Eyes */}
          <div className="absolute top-6 left-5 flex gap-5 z-10">
            <div className="w-2 h-2 bg-gray-800 rounded-full"></div>
            <div className="w-2 h-2 bg-gray-800 rounded-full"></div>
          </div>
          {/* Blush */}
          <div className="absolute top-8 left-3 flex gap-7 opacity-70">
            <div className="w-3 h-1.5 bg-[#A05CFF] rounded-full"></div>
            <div className="w-3 h-1.5 bg-[#A05CFF] rounded-full"></div>
          </div>
          {/* Cute Mouth */}
          <div className="absolute bottom-6 w-3 h-2.5 border-b-2 border-gray-800 rounded-b-full"></div>
        </div>
      </div>
      
      {/* Floating small question mark */}
      <span className="absolute top-6 right-6 text-[#C8A2FF] font-bold text-2xl animate-pulse">?</span>
    </div>
  );
}

// SUCCESS SCREEN GIF Placeholder: An excited heart celebrating
export function CelebrateGif() {
  return (
    <div className="w-48 h-48 mx-auto flex items-center justify-center relative select-none">
      {/* Sparkles radiating */}
      <div className="absolute top-4 left-6 text-xl animate-ping opacity-75">✨</div>
      <div className="absolute bottom-8 right-6 text-2xl animate-bounce delay-150">🎉</div>
      <div className="absolute top-8 right-8 text-xl animate-ping opacity-50">✨</div>
      <div className="absolute bottom-6 left-8 text-2xl animate-bounce">🥳</div>
      
      {/* Main Celebration Heart */}
      <div className="w-28 h-28 bg-[#FF6FA5] rounded-full relative flex flex-col items-center justify-center shadow-lg animate-bounce duration-500 border-4 border-white">
        {/* Heart tail */}
        <div className="absolute bottom-[-5px] left-1/2 transform -translate-x-1/2 rotate-45 w-8 h-8 bg-[#FF6FA5] border-r-4 border-b-4 border-white"></div>
        {/* Eyes (Happy curved) */}
        <div className="absolute top-8 left-7 flex gap-6 z-10">
          <div className="w-3 h-3 border-t-2 border-l-2 border-gray-800 rounded-tl-full transform rotate-45"></div>
          <div className="w-3 h-3 border-t-2 border-r-2 border-gray-800 rounded-tr-full transform -rotate-45"></div>
        </div>
        {/* Cheerful Blush */}
        <div className="absolute top-10 left-5 flex gap-9 opacity-80">
          <div className="w-4 h-2 bg-[#FF1E6C] rounded-full"></div>
          <div className="w-4 h-2 bg-[#FF1E6C] rounded-full"></div>
        </div>
        {/* Happy Open Mouth */}
        <div className="absolute bottom-9 w-4 h-4 bg-gray-800 rounded-b-full"></div>
      </div>
    </div>
  );
}
