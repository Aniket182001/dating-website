import React, { useState } from 'react';

/**
 * GifDisplay — reusable GIF image component.
 *
 * Features:
 * - Smooth fade-in once the image is loaded (no flash of empty space)
 * - Maintains natural aspect ratio via object-contain
 * - Capped at a maximum width so it never dominates the card
 * - Centered horizontally inside its container
 * - Emoji fallback if the network fails to load the GIF
 */
export default function GifDisplay({
  src,
  alt = 'GIF',
  fallback = '🥰',
  maxWidth = '200px',
  className = '',
}) {
  const [loaded, setLoaded] = useState(false);
  const [errored, setErrored] = useState(false);

  return (
    <div
      className={`mx-auto flex items-center justify-center relative select-none ${className}`}
      style={{ maxWidth, width: '100%' }}
    >
      {!errored ? (
        <img
          src={src}
          alt={alt}
          onLoad={() => setLoaded(true)}
          onError={() => setErrored(true)}
          className="w-full h-auto object-contain rounded-2xl"
          style={{
            transition: 'opacity 0.45s ease-in-out',
            opacity: loaded ? 1 : 0,
            display: 'block',
          }}
        />
      ) : (
        /* Fallback: rendered if GIF fails to load */
        <div className="flex items-center justify-center w-full h-40">
          <span className="text-7xl">{fallback}</span>
        </div>
      )}

      {/* Loading placeholder: visible until the GIF fires its onLoad */}
      {!loaded && !errored && (
        <div
          className="absolute inset-0 flex items-center justify-center rounded-2xl"
          aria-hidden="true"
        >
          <span
            className="text-4xl"
            style={{ opacity: 0.35 }}
          >
            {fallback}
          </span>
        </div>
      )}
    </div>
  );
}
