import React, { useState, useEffect } from 'react';

// GIF states for the proposal screen, keyed by emotional level
export const BEAR_GIFS = {
  happy: {
    url: 'https://media.tenor.com/RBa37_6ApVcAAAAi/cute-adorable.gif',
    alt: 'Cute adorable bear',
    label: 'happy',
  },
  sad: {
    url: 'https://media.tenor.com/nDPnFBbXnfcAAAAC/sad-bear-sad.gif',
    alt: 'Sad bear looking down',
    label: 'sad',
  },
  crying: {
    url: 'https://media.tenor.com/MZ9LPRDJgWgAAAAC/crying-bear-sad.gif',
    alt: 'Crying bear in tears',
    label: 'crying',
  },
  kiss: {
    url: 'https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif',
    alt: 'Bear sending kisses in celebration',
    label: 'kiss',
  },
};

// Returns which bear mood to show based on noCount
export function getBearMood(noCount) {
  if (noCount === 0) return 'happy';
  if (noCount < 5) return 'happy';   // 1-4 NO presses → still happy
  if (noCount < 10) return 'sad';    // 5-9 NO presses → getting sad
  return 'crying';                    // 10+ NO presses → full crying
}

/**
 * BearGif component: shows a GIF img with a smooth CSS crossfade between states.
 * Uses opacity transition + key-based remount to restart from 0 opacity on change.
 */
export default function BearGif({ mood }) {
  const gif = BEAR_GIFS[mood];
  const [visible, setVisible] = useState(false);

  // Trigger fade-in whenever the mood (and therefore key) changes
  useEffect(() => {
    setVisible(false);
    const t = setTimeout(() => setVisible(true), 30);
    return () => clearTimeout(t);
  }, [mood]);

  return (
    <div
      className="mx-auto flex items-center justify-center relative select-none"
      style={{ maxWidth: '200px', width: '100%' }}
    >
      <img
        key={mood}
        src={gif.url}
        alt={gif.alt}
        className="w-full h-auto object-contain rounded-2xl"
        style={{
          transition: 'opacity 0.4s ease-in-out',
          opacity: visible ? 1 : 0,
          display: 'block',
        }}
        onError={(e) => {
          e.currentTarget.style.display = 'none';
          const fallback = e.currentTarget.nextElementSibling;
          if (fallback) fallback.style.display = 'flex';
        }}
      />
      {/* Emoji fallback shown only if the GIF fails to load */}
      <div className="absolute inset-0 items-center justify-center hidden" aria-hidden="true">
        {mood === 'happy'  && <span className="text-7xl">🐻</span>}
        {mood === 'sad'    && <span className="text-7xl">🐻</span>}
        {mood === 'crying' && <span className="text-7xl">😢🐻</span>}
        {mood === 'kiss'   && <span className="text-7xl">🐻‍❤️‍💋‍🐻</span>}
      </div>
    </div>
  );
}
