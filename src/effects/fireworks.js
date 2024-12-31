const COLORS = ['#ff0000', '#ffd700', '#ff69b4', '#00ff00', '#ff4500', '#4169e1', '#9400d3'];

function createParticle(x, y, color) {
  const particle = document.createElement('div');
  particle.className = 'particle';
  particle.style.backgroundColor = color;
  particle.style.left = `${x}px`;
  particle.style.top = `${y}px`;
  
  return particle;
}

export function createFirework(x, y) {
  const firework = document.createElement('div');
  firework.className = 'firework';
  firework.style.left = `${x}px`;
  firework.style.top = `${y}px`;
  firework.style.backgroundColor = COLORS[Math.floor(Math.random() * COLORS.length)];
  
  document.getElementById('fireworks').appendChild(firework);
  
  // Create more particles for better effect
  for (let i = 0; i < 40; i++) {
    const particle = createParticle(x, y, firework.style.backgroundColor);
    const angle = (i * 9) * Math.PI / 180;
    const velocity = 60 + Math.random() * 60;
    
    particle.style.setProperty('--x', `${Math.cos(angle) * velocity}px`);
    particle.style.setProperty('--y', `${Math.sin(angle) * velocity}px`);
    
    document.getElementById('fireworks').appendChild(particle);
    setTimeout(() => particle.remove(), 1500);
  }
  
  setTimeout(() => firework.remove(), 1500);
}

export function startFireworks() {
  // Create multiple fireworks every 5 seconds
  return setInterval(() => {
    for (let i = 0; i < 3; i++) {
      setTimeout(() => {
        const x = Math.random() * window.innerWidth;
        const y = Math.random() * window.innerHeight * 0.5;
        createFirework(x, y);
      }, i * 200);
    }
  }, 5000);
}