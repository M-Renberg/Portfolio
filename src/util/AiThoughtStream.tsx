import { useEffect, useRef } from 'react';

const THOUGHT_PHRASES = [
  // Machine Learning Lifecycle & Training (Scikit-Learn, PyTorch, Math)
  'scikit_learn.fit(X_train, y_train)',
  'evaluating_loss: 0.0014',
  'roc_auc_score: 0.942',
  'confusion_matrix.calculate()',
  'feature_engineering.transform()',
  'backpropagate_gradients()',
  'gradient_descent.step()',
  'cross_val_score(cv=5): 0.92',
  'torch.optim.AdamW(lr=1e-4)',

  // Deep Learning & Local SLM Inference (Transformers, SmolLM2, NLP)
  'smollm2.cpu_inference()',
  'transformers.AutoModelForCausalLM',
  'streaming_tokens: 48 t/s',
  'context_window: 128k',
  'kv_cache.lookup: HIT',
  'pydantic.validate_schema()',
  'token_stream: [0x4F, 0x8A]',

  // Production Serving & Full-Stack Architecture (FastAPI, Convex, Devotion ATS)
  'fastapi.post("/api/v1/predict")',
  'uvicorn.workers: ACTIVE',
  'convex.mutation: candidate_sync',
  'human_in_the_loop: APPROVED',
  'sqlite_3nf.constraint_check()',
  'type_safety: STRICT',
  'async_event_queue.drain()',

  // Telemetry & LIA Signals
  'malmo_sweden.lia_ready: TRUE',
  'zero_data_leakage: VERIFIED',
];

const CIPHER_CHARS = '!<>-_/[]{}—=+*^?#%&0123456789ABCDEF';

interface Thought {
  targetText: string;
  currentDisplay: string;
  x: number;
  y: number;
  speed: number;
  angle: number;
  angleDrift: number;
  waveFreq: number;
  age: number;
  maxAge: number;
  fontSize: number;
  color: string;
  peakAlpha: number;
  lastScramble: number;
}

export default function AiThoughtStream() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    let dpr = window.devicePixelRatio || 1;
    let width = window.innerWidth;
    let height = window.innerHeight;

    const resize = () => {
      dpr = window.devicePixelRatio || 1;
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(dpr, dpr);
    };

    resize();
    window.addEventListener('resize', resize);

    const thoughts: Thought[] = [];
    const MAX_THOUGHTS = 8;
    let lastSpawn = performance.now();

    const spawnThought = (now: number, isInitial = false): Thought => {
      const phrase = THOUGHT_PHRASES[Math.floor(Math.random() * THOUGHT_PHRASES.length)];
      const side = Math.floor(Math.random() * 4); // 0: left, 1: right, 2: top, 3: bottom
      let x = 0;
      let y = 0;
      let angle = 0;

      if (isInitial) {
        x = 50 + Math.random() * (width - 100);
        y = 50 + Math.random() * (height - 100);
        angle = Math.random() * Math.PI * 2;
      } else if (side === 0) {
        // From left side
        x = -150;
        y = Math.random() * height;
        angle = (Math.random() - 0.5) * 1.0;
      } else if (side === 1) {
        // From right side
        x = width + 50;
        y = Math.random() * height;
        angle = Math.PI + (Math.random() - 0.5) * 1.0;
      } else if (side === 2) {
        // From top
        x = Math.random() * width;
        y = -50;
        angle = Math.PI / 2 + (Math.random() - 0.5) * 1.0;
      } else {
        // From bottom
        x = Math.random() * width;
        y = height + 50;
        angle = -Math.PI / 2 + (Math.random() - 0.5) * 1.0;
      }

      const colors = ['#285A48', '#387862', '#2DD4BF', '#5EEAD4'];
      const chosenColor = colors[Math.floor(Math.random() * colors.length)];

      const initialCipher = phrase
        .split('')
        .map((c) => (c === ' ' ? ' ' : CIPHER_CHARS[Math.floor(Math.random() * CIPHER_CHARS.length)]))
        .join('');

      return {
        targetText: phrase,
        currentDisplay: initialCipher,
        x,
        y,
        speed: 0.5 + Math.random() * 0.6, // gentle drifting speed
        angle,
        angleDrift: (Math.random() - 0.5) * 0.025, // smooth curved trajectory
        waveFreq: 0.012 + Math.random() * 0.015,
        age: isInitial ? Math.floor(Math.random() * 120) : 0,
        maxAge: 400 + Math.random() * 240, // lives ~8-12 seconds
        fontSize: Math.floor(12 + Math.random() * 3), // 12px - 14px subtle size
        color: chosenColor,
        peakAlpha: 0.20 + Math.random() * 0.14, // soft ambient opacity (0.20 - 0.34)
        lastScramble: now,
      };
    };

    // Pre-populate with thoughts already visible
    for (let i = 0; i < 5; i++) {
      thoughts.push(spawnThought(performance.now(), true));
    }

    const render = (now: number) => {
      ctx.clearRect(0, 0, width, height);

      // Spawn new thought periodically
      if (thoughts.length < MAX_THOUGHTS && now - lastSpawn > 1200) {
        thoughts.push(spawnThought(now));
        lastSpawn = now;
      }

      // Update and draw thoughts
      for (let i = thoughts.length - 1; i >= 0; i--) {
        const t = thoughts[i];
        t.age++;

        // Curving movement: angle oscillates, so it NEVER moves straight
        t.angle += Math.sin(t.age * t.waveFreq) * t.angleDrift;
        t.x += Math.cos(t.angle) * t.speed;
        t.y += Math.sin(t.angle) * t.speed;

        // Scramble / Cipher animation
        if (now - t.lastScramble > 40) {
          t.lastScramble = now;
          const progress = t.age / t.maxAge;
          // Resolves characters as it drifts
          const resolveThreshold = Math.min(progress * 1.5, 1);
          const resolvedIndex = Math.floor(resolveThreshold * t.targetText.length);

          t.currentDisplay = t.targetText
            .split('')
            .map((char, idx) => {
              if (char === ' ') return ' ';
              if (idx < resolvedIndex) return char;
              return CIPHER_CHARS[Math.floor(Math.random() * CIPHER_CHARS.length)];
            })
            .join('');
        }

        // Opacity envelope: smooth fade in, sustain, smooth fade out
        const lifeRatio = t.age / t.maxAge;
        let alpha = 0;
        if (lifeRatio < 0.15) {
          alpha = (lifeRatio / 0.15) * t.peakAlpha;
        } else if (lifeRatio > 0.8) {
          alpha = ((1 - lifeRatio) / 0.2) * t.peakAlpha;
        } else {
          alpha = t.peakAlpha;
        }

        // Draw with neon glow
        ctx.save();
        ctx.font = `600 ${t.fontSize}px 'Courier New', Consolas, monospace`;
        ctx.fillStyle = t.color;
        ctx.globalAlpha = Math.max(0, Math.min(alpha, 1));
        ctx.shadowColor = '#2DD4BF';
        ctx.shadowBlur = 2;
        ctx.fillText(t.currentDisplay, t.x, t.y);
        ctx.restore();

        // Expire when life ends or far outside viewport
        if (
          t.age >= t.maxAge ||
          t.x < -250 ||
          t.x > width + 250 ||
          t.y < -150 ||
          t.y > height + 150
        ) {
          thoughts.splice(i, 1);
        }
      }

      animId = requestAnimationFrame(render);
    };

    animId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        pointerEvents: 'none',
        zIndex: 1,
      }}
      aria-hidden="true"
    />
  );
}
