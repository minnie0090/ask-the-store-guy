const bgMusic = document.getElementById('bg-music');

// Restore playback position if available
const savedTime = localStorage.getItem('musicTime');
if (savedTime) {
  bgMusic.currentTime = parseFloat(savedTime);
}

// Restore playing state if music was playing
const wasPlaying = localStorage.getItem('musicPlaying') === 'true';
if (wasPlaying) {
  bgMusic.play().catch(() => {}); // Try to resume playing immediately
}

// Play music on first user interaction (click or touch), if paused
function tryPlayMusic() {
  if (bgMusic.paused) {
    bgMusic.play().catch(() => {});
  }
}
document.addEventListener('click', tryPlayMusic, { once: true });
document.addEventListener('touchstart', tryPlayMusic, { once: true });

// Save time and playing state on unload
window.addEventListener('beforeunload', () => {
  localStorage.setItem('musicTime', bgMusic.currentTime);
  localStorage.setItem('musicPlaying', !bgMusic.paused);
});

// Play button on index.html navigation to play.html (only if element exists)
const playBtn = document.getElementById('play-btn');
if (playBtn) {
  playBtn.addEventListener('click', () => {
    localStorage.setItem('musicPlaying', !bgMusic.paused);
    window.location.href = 'play.html';
  });
}

// Shift buttons navigation handling (works on both index.html and play.html)
document.querySelectorAll('.shift-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    localStorage.setItem('musicPlaying', !bgMusic.paused);
    const href = btn.getAttribute('data-href');
    if (href) {
      window.location.href = href;
    }
  });
});



