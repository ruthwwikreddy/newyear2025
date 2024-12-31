export function getTimeRemaining() {
  const now = new Date();
  const currentYear = now.getFullYear();
  const newYear = new Date(currentYear + 1, 0, 1);
  const diff = newYear - now;

  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
    seconds: Math.floor((diff % (1000 * 60)) / 1000),
    total: diff
  };
}

export function formatNumber(number) {
  return String(number).padStart(2, '0');
}