import React from 'react';

export default function FoodCard({ emoji, name, isSelected, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`w-full p-4 rounded-2xl bg-white/95 border-2 text-center transition-all duration-300 cursor-pointer flex flex-col items-center justify-center gap-2 shadow-sm hover:shadow-md select-none ${
        isSelected 
          ? 'border-[#FF6FA5] scale-[1.04] bg-[#FFE7EF]/40 shadow-pink-100/50' 
          : 'border-[#FFD3E2]/40 hover:border-[#FFD3E2] scale-100'
      }`}
    >
      <span className="text-3xl" role="img" aria-label={name}>
        {emoji}
      </span>
      <span className="font-sans font-bold text-gray-700 text-xs sm:text-sm tracking-wide">
        {name}
      </span>
    </button>
  );
}
