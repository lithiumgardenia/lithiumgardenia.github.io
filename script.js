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
  const ticker = document.querySelector('.ticker span');
  const secret = secrets[Math.floor(Math.random() * secrets.length)];
  el.style.opacity = 0;
  setTimeout(() => {
    el.textContent = secret;
    ticker.textContent = secret;
    el.style.opacity = 1;
  }, 500);
}

// change secret every 7 seconds
setInterval(whisperSecret, 7000);
whisperSecret();
