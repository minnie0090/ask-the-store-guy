const bgMusic = document.getElementById('bg-music');

// Play music on first user interaction
document.addEventListener('click', () => {
  if (bgMusic.paused) {
    bgMusic.play().catch(() => {});
  }
}, { once: true });

// Button click navigation
document.getElementById('play-btn').addEventListener('click', () => {
  bgMusic.pause();
  window.location.href = 'game.html';
});

document.getElementById('leaderboard-btn').addEventListener('click', () => {
  bgMusic.pause();
  window.location.href = 'leaderboard.html';
});


