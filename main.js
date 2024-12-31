import './style.css';
import { createFirework, startFireworks } from './src/effects/fireworks.js';
import { updateCountdown, showNewYearMessage } from './src/components/countdown.js';

// Initialize countdown
const countdownInterval = setInterval(() => {
  const isNewYear = updateCountdown();
  if (isNewYear) {
    clearInterval(countdownInterval);
    showNewYearMessage();
    startFireworks();
  }
}, 1000);

// Initial countdown update
updateCountdown();

// Initial fireworks
for (let i = 0; i < 3; i++) {
  setTimeout(() => {
    const x = Math.random() * window.innerWidth;
    const y = Math.random() * window.innerHeight * 0.5;
    createFirework(x, y);
  }, i * 500);
}