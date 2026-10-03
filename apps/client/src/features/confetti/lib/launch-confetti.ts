import confetti from "canvas-confetti";

const COLORS = ["#ff4d6d", "#ffd43b", "#51cf66", "#339af0", "#cc5de8"];
const DURATION_MS = 2500;

// Fait éclater des confettis sur tout l'écran : deux canons sur les côtés
// pendant quelques secondes, plus une grosse explosion au centre.
export function launchConfetti() {
  const reduceMotion = window.matchMedia?.(
    "(prefers-reduced-motion: reduce)",
  ).matches;
  const base = { zIndex: 10000, colors: COLORS, disableForReducedMotion: false };

  confetti({
    ...base,
    particleCount: reduceMotion ? 60 : 180,
    spread: 120,
    startVelocity: 55,
    origin: { x: 0.5, y: 0.55 },
  });

  if (reduceMotion) return;

  const end = Date.now() + DURATION_MS;
  const frame = () => {
    confetti({
      ...base,
      particleCount: 6,
      angle: 60,
      spread: 70,
      origin: { x: 0, y: 0.7 },
    });
    confetti({
      ...base,
      particleCount: 6,
      angle: 120,
      spread: 70,
      origin: { x: 1, y: 0.7 },
    });
    if (Date.now() < end) {
      requestAnimationFrame(frame);
    }
  };
  requestAnimationFrame(frame);
}
