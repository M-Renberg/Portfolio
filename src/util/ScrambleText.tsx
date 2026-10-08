import { useEffect, useState } from 'react';

const CHARS = '!<>-_\\/[]{}—=+*^?#%&0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';

interface ScrambleTextProps {
  text: string;
  className?: string;
  delayMs?: number;
  speedMs?: number;
}

export default function ScrambleText({
  text,
  className = '',
  delayMs = 250,
  speedMs = 35,
}: ScrambleTextProps) {
  const [displayText, setDisplayText] = useState(() =>
    text
      .split('')
      .map((char) => (char === ' ' ? ' ' : CHARS[Math.floor(Math.random() * CHARS.length)]))
      .join('')
  );

  useEffect(() => {
    let frameId: number;
    let iteration = 0;
    const totalLength = text.length;

    const timeoutId = setTimeout(() => {
      let lastTime = performance.now();

      const update = (now: number) => {
        if (now - lastTime >= speedMs) {
          lastTime = now;

          const updated = text
            .split('')
            .map((targetChar, index) => {
              if (targetChar === ' ') return ' ';
              if (index < Math.floor(iteration)) {
                return targetChar;
              }
              return CHARS[Math.floor(Math.random() * CHARS.length)];
            })
            .join('');

          setDisplayText(updated);

          if (iteration >= totalLength) {
            setDisplayText(text);
            return;
          }

          iteration += 0.32;
        }

        frameId = requestAnimationFrame(update);
      };

      frameId = requestAnimationFrame(update);
    }, delayMs);

    return () => {
      clearTimeout(timeoutId);
      cancelAnimationFrame(frameId);
    };
  }, [text, delayMs, speedMs]);

  return (
    <h1
      className={`glitch-text ${className}`}
      data-text={displayText}
    >
      {displayText}
    </h1>
  );
}
