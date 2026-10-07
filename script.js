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
  if (!counter) return;

  // Load GoatCounter for normal pageview tracking.
  const goat = document.createElement('script');
  goat.async = true;
  goat.src = 'https://gc.zgo.at/count.js';
  goat.dataset.goatcounter = 'https://lithiumgardenia.goatcounter.com/count';
  document.head.appendChild(goat);

  // Use GoatCounter's documented JSON endpoint for the visible total.
  // This avoids embedding GoatCounter's counter HTML/iframe, which was
  // returning the 403 page in Safari.
  const request = new XMLHttpRequest();
  request.open(
    'GET',
    'https://lithiumgardenia.goatcounter.com/counter/TOTAL.json',
    true
  );
  request.addEventListener('load', () => {
    if (request.status < 200 || request.status >= 300) return;

    try {
      const data = JSON.parse(request.responseText);
      if (typeof data.count !== 'string' && typeof data.count !== 'number') return;

      counter.innerHTML = '';
      const number = document.createElement('span');
      number.textContent = String(data.count);
      number.id = 'gcvc-views';
      counter.appendChild(number);
    } catch (_) {
      // Leave the placeholder in place if GoatCounter returns invalid JSON.
    }
  });
  request.send();
}
