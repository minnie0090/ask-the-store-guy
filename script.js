const bgMusic = document.getElementById('bg-music');

// Play music on first click anywhere on the page
document.body.addEventListener('click', () => {
  if (bgMusic.paused) {
    bgMusic.play();
  }
});

// Redirect buttons
document.getElementById('play-btn').addEventListener('click', () => {
  bgMusic.pause(); // optional: stop music when navigating
  window.location.href = 'game.html'; 
});

document.getElementById('leaderboard-btn').addEventListener('click', () => {
  bgMusic.pause();
  window.location.href = 'leaderboard.html';
});
