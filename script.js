const bgMusic = document.getElementById('bg-music');

// Start music on first click anywhere
document.body.addEventListener('click', () => {
  if (bgMusic.paused) {
    bgMusic.play().catch(() => {});
  }
}, { once: true });

// Buttons: navigation
document.getElementById('play-btn').addEventListener('click', () => {
  bgMusic.pause(); // optional: stop music when navigating
  window.location.href = 'game.html';
});

document.getElementById('leaderboard-btn').addEventListener('click', () => {
  bgMusic.pause();
  window.location.href = 'leaderboard.html';
});
