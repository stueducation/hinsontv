// Video playlist
const videos = [
  "video1.mp4",
  "video2.mp4",
  "video3.mp4"
];

let current = 0;
const tv = document.getElementById('tv');

// Preload next video for seamless looping
function playNext() {
  const nextVideo = videos[current];
  const newVideo = document.createElement('video');
  newVideo.src = nextVideo;
  newVideo.autoplay = true;
  newVideo.muted = true;
  newVideo.style.position = 'absolute';
  newVideo.style.top = 0;
  newVideo.style.left = 0;
  newVideo.style.width = '100%';
  newVideo.style.height = '100%';
  newVideo.style.objectFit = 'cover';
  newVideo.style.zIndex = '1';
  newVideo.addEventListener('ended', () => {
    tv.src = newVideo.src;
    playNext();
    newVideo.remove();
  });
  document.body.appendChild(newVideo);
  current = (current + 1) % videos.length;
}

// Start the loop
playNext();

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
