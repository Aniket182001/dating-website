import React from 'react';

export default function DatePickerCard({ value, onChange }) {
  // Get today's date in YYYY-MM-DD format for the 'min' attribute
  const today = new Date().toISOString().split('T')[0];

  return (
    <div className="w-full bg-white/95 rounded-2xl p-6 shadow-md border-2 border-[#FFD3E2]/60 hover:shadow-lg transition-all duration-300">
      <label 
        htmlFor="date-picker" 
        className="block text-center font-heading font-bold text-gray-700 text-lg mb-4"
      >
        Choose a Date 📅
      </label>
      
      <div className="relative">
        <input
          id="date-picker"
          type="date"
          min={today}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full px-4 py-3 bg-[#FFFBF7] border-2 border-[#FFD3E2] focus:border-[#FF6FA5] focus:outline-none rounded-xl text-gray-700 font-sans font-semibold text-center cursor-pointer transition-all duration-300 shadow-sm"
        />
      </div>

      <p className="text-center text-xs font-sans text-gray-400 mt-4 font-medium">
        Select any future date for our date ✨
      </p>
    </div>
  );
}
