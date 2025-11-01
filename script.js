const bgMusic = document.getElementById('bg-music');

function tryPlayMusic() {
  if (bgMusic.paused) {
    bgMusic.play().then(() => {
      // Success: remove listeners once music plays
      window.removeEventListener('click', tryPlayMusic);
      window.removeEventListener('touchstart', tryPlayMusic);
    }).catch(() => {
      // If play() rejected (e.g., no user interaction), do nothing
    });
  }
}

// Listen on window for click or touchstart
window.addEventListener('click', tryPlayMusic, { passive: true });
window.addEventListener('touchstart', tryPlayMusic, { passive: true });

// Pause music when clicking nav links
document.querySelectorAll('.button-container a').forEach(link => {
  link.addEventListener('click', () => {
    bgMusic.pause();
  });
});



