import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DatePickerCard from '../components/DatePickerCard';
import FoodCard from '../components/FoodCard';
import GifDisplay from '../components/GifDisplay';

export default function DatePage() {
  const navigate = useNavigate();
  const [screen, setScreen] = useState(1);

  // Flow State
  const [selectedDate, setSelectedDate] = useState('');
  const [timePreset, setTimePreset] = useState('');
  const [customTime, setCustomTime] = useState('');
  const [selectedFood, setSelectedFood] = useState('');
  const [copied, setCopied] = useState(false);

  // Compute final prioritized time
  const getPrioritizedTime = () => {
    return customTime.trim() !== '' ? customTime.trim() : timePreset;
  };

  // Format date nicely (e.g. June 20, 2026)
  const getFormattedDate = (dateStr) => {
    if (!dateStr) return 'Not selected';
    const dateObj = new Date(dateStr);
    return dateObj.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  // Food Items configurations
  const foodOptions = [
    { emoji: '🍦', name: 'Naturals Ice Cream' },
    { emoji: '🍕', name: 'Pizza' },
    { emoji: '☕', name: 'Coffee Date' },
    { emoji: '🥞', name: 'Bangalore Canteen Breakfast' },
    { emoji: '🍔', name: 'Burger' },
    { emoji: '✨', name: 'Surprise Me' },
  ];

  // Copy to clipboard handler
  const handleCopy = async () => {
    const finalTime = getPrioritizedTime();
    const formattedDate = getFormattedDate(selectedDate);
    const confirmationText = `Date Confirmed ❤️\n\n📅 ${formattedDate}\n🕒 ${finalTime}\n🍽 ${selectedFood}\n\nCan't wait 🥹`;

    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(confirmationText);
        setCopied(true);
      } else {
        // Fallback for browsers/environments that don't support navigator.clipboard
        const textArea = document.createElement('textarea');
        textArea.value = confirmationText;
        textArea.style.position = 'fixed'; // Avoid scrolling to bottom
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        const successful = document.execCommand('copy');
        document.body.removeChild(textArea);
        if (successful) {
          setCopied(true);
        } else {
          alert('Failed to copy to clipboard. Please copy manually!');
        }
      }
    } catch (err) {
      console.error('Error copying text: ', err);
      alert('Failed to copy to clipboard. Please copy manually!');
    }
  };

  // Navigation handlers
  const handleNext = () => {
    if (screen === 2 && !selectedDate) {
      alert('Please select a date to proceed! 📅');
      return;
    }
    if (screen === 3 && !getPrioritizedTime()) {
      alert('Please choose or enter a time to proceed! 🕒');
      return;
    }
    if (screen === 4 && !selectedFood) {
      alert('Please select a food option to proceed! 🍽');
      return;
    }
    setScreen((prev) => prev + 1);
  };

  const handleBack = () => {
    setScreen((prev) => Math.max(1, prev - 1));
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center p-4 relative bg-[#FFF8F0] overflow-hidden selection:bg-[#FF8EA9]/20 selection:text-[#FF6FA5]">
      {/* Floating cozy background elements (subtle warm blobs) */}
      <div className="absolute top-[-10%] left-[-10%] w-[300px] h-[300px] rounded-full bg-[#FFE7EF]/40 blur-3xl pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[350px] h-[350px] rounded-full bg-[#FFF1E0]/60 blur-3xl pointer-events-none" />

      {/* Cozy Cafe Main Container Card */}
      <div className="w-full max-w-[420px] min-h-[640px] bg-white/90 backdrop-blur-md rounded-[32px] shadow-xl border-4 border-white/80 flex flex-col justify-between p-8 relative z-10 transition-all duration-500 ease-in-out">
        
        {/* Header navigation bar (Back button) */}
        {screen > 1 && screen < 5 && (
          <div className="w-full flex justify-start mb-2">
            <button
              type="button"
              onClick={handleBack}
              className="text-[#FF6FA5] hover:text-[#ff5b97] font-sans font-bold text-sm flex items-center gap-1 cursor-pointer transition-colors duration-200"
            >
              <span>←</span> Back
            </button>
          </div>
        )}

        {/* ── SCREEN 1: WELCOME ── */}
        {screen === 1 && (
          <div className="flex-1 flex flex-col justify-between animate-fade-in">
            <div className="mt-2 flex justify-center">
              <GifDisplay
                src="https://media1.tenor.com/m/f_dw95iRmlYAAAAd/puuung-couple.gif"
                alt="Cozy couple GIF"
                fallback="❤️"
                maxWidth="240px"
              />
            </div>

            <div className="text-center my-6 space-y-3">
              <h1 className="text-3xl font-heading font-extrabold text-gray-800 tracking-tight">
                Date Planning Time ❤️
              </h1>
              <div className="space-y-1">
                <p className="text-lg font-sans font-semibold text-[#FF6FA5]">
                  Since you said yes...
                </p>
                <p className="text-sm font-sans font-medium text-gray-500">
                  Let's plan our first date 🥹
                </p>
              </div>
            </div>

            <div className="mb-4">
              <button
                type="button"
                onClick={() => setScreen(2)}
                className="w-full py-4 bg-[#FF6FA5] hover:bg-[#ff5b97] text-white font-heading font-bold text-lg rounded-2xl shadow-lg shadow-pink-100 hover:shadow-xl hover:shadow-pink-200 active:scale-95 transition-all duration-300 select-none cursor-pointer"
              >
                Let's Go ✨
              </button>
            </div>
          </div>
        )}

        {/* ── SCREEN 2: DATE SELECTION ── */}
        {screen === 2 && (
          <div className="flex-1 flex flex-col justify-between animate-fade-in">
            <div className="my-auto py-4">
              <DatePickerCard
                value={selectedDate}
                onChange={setSelectedDate}
              />
            </div>

            <div className="mt-6 mb-2">
              <button
                type="button"
                onClick={handleNext}
                className="w-full py-4 bg-[#FF6FA5] hover:bg-[#ff5b97] text-white font-heading font-bold text-lg rounded-2xl shadow-md active:scale-95 transition-all duration-300 cursor-pointer"
              >
                Continue ✨
              </button>
            </div>
          </div>
        )}

        {/* ── SCREEN 3: TIME SELECTION ── */}
        {screen === 3 && (
          <div className="flex-1 flex flex-col justify-between animate-fade-in">
            <div className="my-auto py-4 space-y-6">
              <h2 className="text-center font-heading font-bold text-gray-800 text-xl">
                When are we meeting? 🕒
              </h2>

              {/* Presets Grid */}
              <div className="grid grid-cols-3 gap-3">
                {[
                  { label: 'Breakfast 🌞', value: 'Breakfast 🌞' },
                  { label: 'Afternoon ☀️', value: 'Afternoon ☀️' },
                  { label: 'Evening 🌙', value: 'Evening 🌙' },
                ].map((item) => {
                  const isSelected = timePreset === item.value && customTime.trim() === '';
                  return (
                    <button
                      key={item.value}
                      type="button"
                      onClick={() => {
                        setTimePreset(item.value);
                        setCustomTime(''); // Clear custom when preset clicked
                      }}
                      className={`py-3 px-2 text-xs sm:text-sm font-sans font-bold rounded-xl border-2 transition-all duration-300 cursor-pointer select-none ${
                        isSelected
                          ? 'border-[#FF6FA5] bg-[#FFE7EF]/40 text-gray-800 scale-105 shadow-sm shadow-pink-100'
                          : 'border-[#FFD3E2]/40 bg-white hover:border-[#FFD3E2] text-gray-600'
                      }`}
                    >
                      {item.label}
                    </button>
                  );
                })}
              </div>

              {/* Or Divider */}
              <div className="flex items-center justify-center gap-3">
                <div className="h-[1px] bg-gray-200 flex-1" />
                <span className="text-xs font-sans font-bold text-gray-400 uppercase tracking-widest">Or</span>
                <div className="h-[1px] bg-gray-200 flex-1" />
              </div>

              {/* Custom Time */}
              <div className="space-y-2">
                <label htmlFor="custom-time" className="block text-xs font-sans font-bold text-gray-500 uppercase tracking-wider text-center">
                  Enter Custom Time
                </label>
                <input
                  id="custom-time"
                  type="text"
                  placeholder="Example: 6:30 PM"
                  value={customTime}
                  onChange={(e) => {
                    setCustomTime(e.target.value);
                    // Keep preset stored but visual state is prioritized by custom input
                  }}
                  className="w-full px-4 py-3 bg-[#FFFBF7] border-2 border-[#FFD3E2] focus:border-[#FF6FA5] focus:outline-none rounded-xl text-gray-700 font-sans font-semibold text-center transition-all duration-300 shadow-sm"
                />
              </div>
            </div>

            <div className="mt-6 mb-2">
              <button
                type="button"
                onClick={handleNext}
                className="w-full py-4 bg-[#FF6FA5] hover:bg-[#ff5b97] text-white font-heading font-bold text-lg rounded-2xl shadow-md active:scale-95 transition-all duration-300 cursor-pointer"
              >
                Continue ✨
              </button>
            </div>
          </div>
        )}

        {/* ── SCREEN 4: FOOD SELECTION ── */}
        {screen === 4 && (
          <div className="flex-1 flex flex-col justify-between animate-fade-in">
            <div className="my-auto py-2 space-y-4">
              <h2 className="text-center font-heading font-bold text-gray-800 text-xl">
                What are we eating? 🍽
              </h2>

              <div className="grid grid-cols-2 gap-4">
                {foodOptions.map((food) => (
                  <FoodCard
                    key={food.name}
                    emoji={food.emoji}
                    name={food.name}
                    isSelected={selectedFood === food.name}
                    onClick={() => setSelectedFood(food.name)}
                  />
                ))}
              </div>
            </div>

            <div className="mt-6 mb-2">
              <button
                type="button"
                onClick={handleNext}
                className="w-full py-4 bg-[#FF6FA5] hover:bg-[#ff5b97] text-white font-heading font-bold text-lg rounded-2xl shadow-md active:scale-95 transition-all duration-300 cursor-pointer"
              >
                Confirm Date 💖
              </button>
            </div>
          </div>
        )}

        {/* ── SCREEN 5: FINAL CONFIRMATION ── */}
        {screen === 5 && (
          <div className="flex-1 flex flex-col justify-between animate-fade-in">
            <div className="mt-2 flex justify-center">
              <GifDisplay
                src="https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif"
                alt="Bear kiss cute couples GIF"
                fallback="🥰"
                maxWidth="180px"
              />
            </div>

            <div className="text-center my-4">
              <h2 className="text-3xl font-heading font-extrabold text-[#FF6FA5] tracking-tight mb-4">
                Date Confirmed ❤️
              </h2>

              {/* Displaying Choices in a Cozy Card */}
              <div className="bg-white/95 rounded-2xl p-5 shadow-md border-2 border-[#FFD3E2]/60 text-left space-y-3 max-w-[320px] mx-auto">
                <div className="flex items-center gap-3">
                  <span className="text-xl">📅</span>
                  <div className="font-sans font-bold text-gray-700 text-sm">
                    {getFormattedDate(selectedDate)}
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-xl">🕒</span>
                  <div className="font-sans font-bold text-gray-700 text-sm">
                    {getPrioritizedTime()}
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-xl">🍽</span>
                  <div className="font-sans font-bold text-gray-700 text-sm">
                    {selectedFood}
                  </div>
                </div>
              </div>

              <p className="text-xl font-sans font-bold text-[#C8A2FF] mt-6 tracking-wide animate-pulse">
                Can't wait 🥹
              </p>
            </div>

            <div className="mb-4 space-y-3">
              <button
                type="button"
                onClick={handleCopy}
                className="w-full py-4 bg-[#FF6FA5] hover:bg-[#ff5b97] text-white font-heading font-bold text-lg rounded-2xl shadow-lg shadow-pink-100 hover:shadow-xl hover:shadow-pink-200 active:scale-95 transition-all duration-300 cursor-pointer"
              >
                📋 Copy Confirmation ❤️
              </button>

              {copied && (
                <p className="text-center text-sm font-sans font-bold text-emerald-600 animate-fade-in">
                  Copied! Send it to me on WhatsApp 🫶
                </p>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
