const tv = document.getElementById('tv');
const startScreen = document.getElementById('start-screen');
const startBtn = document.getElementById('start-btn');

// Video playlist
const videos = [
  "video1.mp4",
  "video2.mp4",
  "video3.mp4"
];

let current = 0;

// Function to play next video in loop
function playNext() {
  tv.src = videos[current];
  tv.play();
  current = (current + 1) % videos.length;
}

// Start TV button click
startBtn.addEventListener('click', () => {
  tv.muted = false; // enable sound
  startScreen.style.display = 'none';
  playNext();
  tv.addEventListener('ended', playNext);
});

// Live clock
function updateTime() {
  const now = new Date();
  const hours = String(now.getHours()).padStart(2,'0');
  const minutes = String(now.getMinutes()).padStart(2,'0');
  const seconds = String(now.getSeconds()).padStart(2,'0');
  document.getElementById('live-time').textContent = `${hours}:${minutes}:${seconds}`;
}

setInterval(updateTime, 1000);
updateTime();
