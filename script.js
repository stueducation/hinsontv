const tv = document.getElementById('tv');
const startScreen = document.getElementById('start-screen');
const startBtn = document.getElementById('start-btn');

// Your local video files
const videos = ["video1.mp4", "video2.mp4", "video3.mp4"];
let current = 0;

// Load first video
tv.src = videos[current];
current = (current + 1) % videos.length;

// Function to play next video in loop
function playNext() {
  tv.src = videos[current];
  tv.play();
  current = (current + 1) % videos.length;
}

// Start button click (required for sound)
startBtn.addEventListener('click', () => {
  startScreen.style.display = 'none';
  tv.muted = false;
  tv.play();
  tv.addEventListener('ended', playNext);
});

// Live clock
function updateTime() {
  const now = new Date();
  const h = String(now.getHours()).padStart(2,'0');
  const m = String(now.getMinutes()).padStart(2,'0');
  const s = String(now.getSeconds()).padStart(2,'0');
  document.getElementById('live-time').textContent = `${h}:${m}:${s}`;
}

setInterval(updateTime, 1000);
updateTime();
