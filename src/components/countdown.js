import { getTimeRemaining, formatNumber } from '../utils/dateUtils.js';

export function updateCountdown() {
  const time = getTimeRemaining();
  
  document.getElementById('days').textContent = formatNumber(time.days);
  document.getElementById('hours').textContent = formatNumber(time.hours);
  document.getElementById('minutes').textContent = formatNumber(time.minutes);
  document.getElementById('seconds').textContent = formatNumber(time.seconds);
  
  return time.total <= 0;
}

export function showNewYearMessage() {
  document.querySelector('.countdown').style.display = 'none';
  const message = document.getElementById('new-year-message');
  message.classList.remove('hidden');
  message.classList.add('visible');
}