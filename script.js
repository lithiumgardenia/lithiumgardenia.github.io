const secrets = [
  "you left the stove on. again.",
  "they know what you did to the creekbed.",
  "your skin remembers the infection.",
  "he never forgave you for the screaming.",
  "you were supposed to die in 2023.",
  "the blood in the freezer isn’t animal.",
  "that fossil in your bag isn’t a fossil.",
  "you've already been replaced once before.",
  "you only feel sick when it gets closer.",
  "they’ll call it madness. you’ll call it hunger."
];

function whisperSecret() {
  const el = document.querySelector('.ai-secret');
  if (!el) return;
  const secret = secrets[Math.floor(Math.random() * secrets.length)];
  el.style.opacity = 0;
  setTimeout(() => {
    el.textContent = secret;
    el.style.opacity = 1;
  }, 500);
}

function addSectionTicker() {
  const path = window.location.pathname.split('/').pop() || 'index.html';
  if (path === 'index.html' || path === '') return;
  const ticker = document.createElement('div');
  ticker.className = 'ticker';
  ticker.innerHTML = '<span></span>';
  document.body.appendChild(ticker);
  const span = ticker.querySelector('span');
  const update = () => { span.textContent = secrets[Math.floor(Math.random() * secrets.length)]; };
  update();
  setInterval(update, 7000);
}

document.addEventListener('DOMContentLoaded', () => {
  whisperSecret();
  setInterval(whisperSecret, 7000);
  addSectionTicker();
  loadGoatCounter();
});

function loadGoatCounter() {
  const counter = document.querySelector('#vault-visitor-count');

  const goat = document.createElement('script');
  goat.async = true;
  goat.src = 'https://gc.zgo.at/count.js';
  goat.dataset.goatcounter = 'https://lithiumgardenia.goatcounter.com/count';

  goat.onload = () => {
    if (!counter || !window.goatcounter || !window.goatcounter.visit_count) return;

    window.goatcounter.visit_count({
      path: 'TOTAL',
      append: '#vault-visitor-count',
      no_branding: true
    });
  };

  document.head.appendChild(goat);
}
