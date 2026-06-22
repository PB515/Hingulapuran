"use client";

import { useSound } from "./SoundProvider";

/* The header sound control: a temple-bell glyph that rings (unmuted) or is
   struck through (muted). This click is the gesture that unlocks audio. */
export function SoundToggle() {
  const { muted, toggle } = useSound();
  return (
    <button
      onClick={toggle}
      aria-label={muted ? "Turn temple sound on" : "Turn temple sound off"}
      aria-pressed={!muted}
      title={muted ? "Sound off" : "Sound on"}
      className="grid h-8 w-8 place-items-center rounded-full text-loha transition-colors hover:text-swarna"
    >
      <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        {/* ghanta bell */}
        <path d="M12 3.2c.7 0 1.1.5 1.1 1.1 2.6.6 4 2.8 4 5.6 0 3.4.6 4.8 1.6 6 .4.5 0 1.3-.7 1.3H6c-.7 0-1.1-.8-.7-1.3 1-1.2 1.6-2.6 1.6-6 0-2.8 1.4-5 4-5.6 0-.6.4-1.1 1.1-1.1Z" />
        <path d="M10.2 19.2a1.8 1.8 0 0 0 3.6 0" />
        {muted ? (
          <line x1="4" y1="3.5" x2="20" y2="20.5" stroke="currentColor" strokeWidth="1.6" />
        ) : (
          <>
            <path d="M18.8 6.2c.9 1 1.4 2.3 1.5 3.8" opacity="0.7" />
            <path d="M5.2 6.2c-.9 1-1.4 2.3-1.5 3.8" opacity="0.7" />
          </>
        )}
      </svg>
    </button>
  );
}
