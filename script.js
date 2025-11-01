const bgMusic = document.getElementById('bg-music');

function playMusicOnInteraction() {
  if (bgMusic.paused) {
    bgMusic.play().catch(() => {});
  }
  document.removeEventListener('click', playMusicOnInteraction);
  document.removeEventListener('touchstart', playMusicOnInteraction);
}

document.addEventListener('click', playMusicOnInteraction);
document.addEventListener('touchstart', playMusicOnInteraction);

// Pause music and navigate on link click
document.querySelectorAll('.button-container a').forEach(link => {
  link.addEventListener('click', (e) => {
    bgMusic.pause();
    // Navigation happens naturally by the link href
  });
});


