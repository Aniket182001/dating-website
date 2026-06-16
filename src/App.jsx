import React, { useState, useEffect, useCallback } from 'react';
import FloatingHearts from './components/FloatingHearts';
import Sparkles from './components/Sparkles';
import Footer from './components/Footer';
import { EnvelopeGif } from './components/Gifs';
import GifDisplay from './components/GifDisplay';
import BearGif from './components/BearGif';
import confetti from 'canvas-confetti';
import { noMessages } from './noMessages';

// YES button grows aggressively with each NO press.
const YES_SCALES = [1, 1.25, 1.5, 1.8, 2.2, 2.6, 3.0];

export default function App() {
  const [screen, setScreen] = useState(1);
  const [showRequestCard, setShowRequestCard] = useState(false);

  // Screen-4 interaction state (Proposal screen)
  const [noCount, setNoCount] = useState(0);
  const [yesLabel, setYesLabel] = useState('🥰 YES');
  const [yesDisabled, setYesDisabled] = useState(false);

  /* ── Confetti + request card on success screen ── */
  useEffect(() => {
    if (screen !== 5) return;

    confetti({
      particleCount: 150,
      spread: 80,
      origin: { y: 0.65 },
      colors: ['#FF6FA5', '#C8A2FF', '#FFD3E2', '#FFFFFF'],
    });

    const extraBurst = setTimeout(() => {
      confetti({
        particleCount: 80,
        angle: 60,
        spread: 60,
        origin: { x: 0, y: 0.7 },
        colors: ['#FF6FA5', '#C8A2FF', '#FFD3E2', '#FFFFFF'],
      });
      confetti({
        particleCount: 80,
        angle: 120,
        spread: 60,
        origin: { x: 1, y: 0.7 },
        colors: ['#FF6FA5', '#C8A2FF', '#FFD3E2', '#FFFFFF'],
      });
    }, 450);

    const timer = setTimeout(() => setShowRequestCard(true), 2400);

    return () => {
      clearTimeout(extraBurst);
      clearTimeout(timer);
    };
  }, [screen]);

  /* ── YES button handler ── */
  const handleYes = useCallback(() => {
    if (yesDisabled) return;
    setYesDisabled(true);
    setYesLabel('🥹 REALLY?');
    setTimeout(() => {
      setScreen(5);
    }, 500);
  }, [yesDisabled]);

  /* ── NO button handler ── */
  const handleNo = useCallback(() => {
    setNoCount((prev) => Math.min(prev + 1, noMessages.length - 1));
  }, []);

  /* ── Derived values for proposal ── */
  const noLabel = noCount === 0 ? '😏 NO' : noMessages[noCount];
  const yesScale = YES_SCALES[Math.min(noCount, YES_SCALES.length - 1)];
  
  // YES font grows clearly and aggressively with scale progression
  const yesFontSize = Math.min(1.125 * yesScale, 2.5);
  const yesPaddingTop = `${1 * yesScale}rem`;
  const yesPaddingBottom = `${1 * yesScale}rem`;

  return (
    <div className="min-h-screen w-full flex items-center justify-center p-4 relative bg-[#FFE7EF] overflow-hidden selection:bg-[#FF6FA5]/20 selection:text-[#FF6FA5]">
      {/* Floating hearts in the background */}
      <FloatingHearts />

      {/* Main premium mobile card */}
      <div className="w-full max-w-[420px] min-h-[640px] bg-white/80 backdrop-blur-md rounded-[32px] shadow-2xl border-4 border-white flex flex-col justify-between p-8 relative z-10 transition-all duration-500 ease-in-out">

        {/* ── SCREEN 1 ── */}
        {screen === 1 && (
          <div className="flex-1 flex flex-col justify-between animate-fade-in">
            <div className="mt-4">
              <GifDisplay
                src="https://media1.tenor.com/m/qcLIwuCuj5UAAAAd/husband-lover.gif"
                alt="Cute bear waving a surprise"
                fallback="🥰"
                maxWidth="200px"
              />
            </div>

            <div className="text-center my-6 space-y-3">
              <h1 className="text-3xl font-heading font-extrabold text-gray-800 tracking-tight">
                Hi Cutiee ❤️
              </h1>
              <div className="space-y-1">
                <p className="text-lg font-sans font-semibold text-[#FF6FA5]">
                  I made something for you ✨
                </p>
                <p className="text-sm font-sans font-medium text-gray-500">
                  Tap below for a tiny surprise 🫶
                </p>
              </div>
            </div>

            <div className="mb-6">
              <button
                id="open-surprise-btn"
                type="button"
                onClick={() => setScreen(2)}
                className="w-full py-4 bg-[#FF6FA5] hover:bg-[#ff5b97] text-white font-heading font-bold text-lg rounded-2xl shadow-lg shadow-pink-200 hover:shadow-xl hover:shadow-pink-300 active:scale-95 transition-all duration-300 select-none cursor-pointer"
              >
                Open Surprise ✨
              </button>
            </div>
          </div>
        )}

        {/* ── SCREEN 2 (Friendship Memories) ── */}
        {screen === 2 && (
          <div className="flex-1 flex flex-col justify-between animate-fade-in">
            <div className="mt-4 flex justify-center">
              <GifDisplay
                src="https://media.tenor.com/BPdD0RL63tcAAAAi/anuragita-anurag.gif"
                alt="Friendship memories GIF"
                fallback="❤️"
                maxWidth="220px"
              />
            </div>

            <div className="text-center my-6 space-y-3">
              <h1 className="text-3xl font-heading font-extrabold text-gray-800 tracking-tight">
                Before we continue...
              </h1>
              <p className="text-sm sm:text-base font-sans font-semibold text-gray-600 leading-relaxed px-2">
                Over the years we've had some crazy conversations, shared countless laughs, and created so many memories that I genuinely cherish ❤️
              </p>
            </div>

            <div className="mb-6">
              <button
                type="button"
                onClick={() => setScreen(3)}
                className="w-full py-4 bg-[#FF6FA5] hover:bg-[#ff5b97] text-white font-heading font-bold text-lg rounded-2xl shadow-lg shadow-pink-200 hover:shadow-xl hover:shadow-pink-300 active:scale-95 transition-all duration-300 select-none cursor-pointer"
              >
                Continue ✨
              </button>
            </div>
          </div>
        )}

        {/* ── SCREEN 3 (Tiny Curiosity) ── */}
        {screen === 3 && (
          <div className="flex-1 flex flex-col justify-between animate-fade-in">
            <div className="mt-4 flex justify-center">
              <GifDisplay
                src="https://media.tenor.com/UCYy8CnBm3wAAAAi/bunny-rabbit.gif"
                alt="Tiny curiosity GIF"
                fallback="🤭"
                maxWidth="220px"
              />
            </div>

            <div className="text-center my-6 space-y-3">
              <h1 className="text-3xl font-heading font-extrabold text-gray-800 tracking-tight">
                One more question...
              </h1>
              <p className="text-sm sm:text-base font-sans font-semibold text-gray-600 leading-relaxed px-2">
                Would you like to discover what this surprise is all about? 👀
              </p>
            </div>

            <div className="flex flex-col gap-3 mb-6">
              <button
                type="button"
                onClick={() => setScreen(4)}
                className="w-full py-4 bg-[#FF6FA5] hover:bg-[#ff5b97] text-white font-heading font-bold text-lg rounded-2xl shadow-lg shadow-pink-200 hover:shadow-xl hover:shadow-pink-300 active:scale-95 transition-all duration-300 select-none cursor-pointer"
              >
                Of course 😄
              </button>
              <button
                type="button"
                onClick={() => setScreen(4)}
                className="w-full py-4 bg-[#C8A2FF] hover:bg-[#b585ff] text-white font-heading font-bold text-lg rounded-2xl shadow-lg shadow-purple-100 hover:shadow-xl hover:shadow-purple-200 active:scale-95 transition-all duration-300 select-none cursor-pointer"
              >
                I'm curious now 🤭
              </button>
            </div>
          </div>
        )}

        {/* ── SCREEN 4 (Proposal Screen) ── */}
        {screen === 4 && (
          <div className="flex-1 flex flex-col justify-between animate-fade-in">
            {/* GIF stays fixed throughout the entire question screen */}
            <div className="mt-4">
              <BearGif mood="happy" />
            </div>

            <div className="text-center my-4 space-y-1">
              <span className="text-[#FF6FA5] font-sans font-bold text-base tracking-wide block">
                I wanted to ask
              </span>
              <h1 className="text-3xl font-heading font-extrabold text-gray-800 tracking-tight leading-snug">
                Will you be my girlfriend? ❤️
              </h1>
              <p className="text-2xl mt-2">
                👉🏻👈🏻😅
              </p>
            </div>

            {/* Buttons area — vertically stacked, YES grows prominently, NO stays readable */}
            <div className="flex flex-col items-center gap-4 my-4 justify-center w-full">

              {/* YES button — grows aggressively with each NO press */}
              <div
                className="w-full flex justify-center items-center transition-all duration-500 ease-in-out"
                style={{
                  // Clamp scale so it never overflows the card; transforms from center
                  transform: `scaleX(${Math.min(yesScale, 1)}) scaleY(1)`,
                  transformOrigin: 'center',
                  // Grow width directly via percentage for values above 1
                  width: yesScale <= 1 ? '100%' : `${Math.min(yesScale * 100, 100)}%`,
                }}
              >
                <button
                  id="yes-btn"
                  type="button"
                  disabled={yesDisabled}
                  onClick={handleYes}
                  className="w-full font-heading font-extrabold rounded-2xl shadow-md shadow-green-100 hover:shadow-lg hover:shadow-green-200 transition-all duration-500 select-none cursor-pointer bg-[#A8E6A3] hover:bg-[#96d791] text-[#2E5030] active:scale-95 disabled:opacity-80"
                  style={{ 
                    fontSize: `${yesFontSize}rem`,
                    paddingTop: yesPaddingTop,
                    paddingBottom: yesPaddingBottom,
                  }}
                >
                  {yesLabel}
                </button>
              </div>

              {/* NO button — natural auto width, never clips text, wraps if needed */}
              <div className="flex justify-center items-center w-full transition-all duration-500 ease-in-out">
                <button
                  id="no-btn"
                  type="button"
                  onClick={handleNo}
                  className="px-6 py-3 min-w-[80px] bg-[#FFB3C1] hover:bg-[#ffa1b2] text-[#7A3040] font-heading font-bold rounded-2xl shadow-md shadow-pink-100 hover:shadow-lg hover:shadow-pink-200 active:scale-95 transition-all duration-300 select-none cursor-pointer text-sm text-center break-words leading-snug"
                >
                  {noLabel}
                </button>
              </div>
            </div>
          </div>
        )}

        {/* ── SCREEN 5 — SUCCESS ── */}
        {screen === 5 && (
          <div className="flex-1 flex flex-col justify-between relative animate-fade-in">
            <Sparkles />

            {/* Kiss bear GIF on success screen */}
            <div className="mt-4">
              <BearGif mood="kiss" />
            </div>

            <div className="text-center mt-6 mb-4 space-y-2">
              <h1 className="text-4xl font-heading font-extrabold text-[#FF6FA5] tracking-tight animate-pulse">
                YAYYYYY ❤️❤️❤️
              </h1>
              <p className="text-lg font-sans font-semibold text-gray-700 px-2 leading-relaxed">
                You just made me the happiest person alive 🥹
              </p>
            </div>

            {/* Request card fades in after confetti settles */}
            <div className="min-h-[160px] flex flex-col justify-center mb-6">
              {showRequestCard && (
                <div className="bg-white border-2 border-pink-100 rounded-2xl p-5 shadow-lg shadow-pink-100/50 text-center animate-fade-in space-y-3">
                  <h3 className="font-heading font-extrabold text-[#FF6FA5] text-base tracking-wide flex items-center justify-center gap-1.5">
                    One tiny request 🤭
                  </h3>
                  <div className="space-y-2">
                    <p className="font-sans text-xs text-gray-500 font-semibold text-center">
                      If you reached this page...
                    </p>
                    <div className="bg-[#FFE7EF]/60 p-3 rounded-xl border border-pink-100 hover:scale-[1.02] transition-transform duration-300">
                      <p className="font-sans font-bold text-gray-700 text-sm text-center leading-relaxed">
                        just text me — "You owe me a Natural's Ice cream 🍦"
                      </p>
                    </div>
                    <p className="font-sans text-xs text-center text-[#C8A2FF] font-bold">
                      That's all I'll need to know ❤️
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        <Footer />
      </div>
    </div>
  );
}
