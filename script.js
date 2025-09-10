const tv = document.getElementById('tv');
const startScreen = document.getElementById('start-screen');
const startBtn = document.getElementById('start-btn');

const videos = ["video1.mp4", "video2.mp4", "video3.mp4"];
let current = 0;

tv.src = videos[current];
current = (current + 1) % videos.length;

function playNext() {
  tv.src = videos[current];
  tv.play();
  current = (current + 1) % videos.length;
}

startBtn.addEventListener('click', () => {
  startScreen.style.display = 'none';
  tv.muted = false;
  tv.play();
  tv.addEventListener('ended', playNext);
});

function updateTime() {
  const now = new Date();
  const hours = String(now.getHours()).padStart(2,'0');
  const minutes = String(now.getMinutes()).padStart(2,'0');
  const seconds = String(now.getSeconds()).padStart(2,'0');
  document.getElementById('live-time').textContent = `${hours}:${minutes}:${seconds}`;
}
setInterval(updateTime, 1000);
updateTime();
