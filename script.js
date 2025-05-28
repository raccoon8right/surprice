for(let i = 1 ; i <= 3 ; i++){
  alert("Hi Ali :3");
}
for(let i = 1 ; i <= 4 ; i++){
  alert("Hii Aliiiiii...!!!!");
}
alert("I have a surprice for you...!!!!");

const canvas = document.getElementById("stars");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const stars = [];
const starCount = 150;

for(let i = 0; i < starCount; i++) {
  stars.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    radius: Math.random() * 1.5 + 0.5,
    brightness: Math.random(),
    flickerSpeed: Math.random() * 0.02 + 0.005,
    flickerPhase: Math.random() * Math.PI * 2
  });
}

function drawStars() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  stars.forEach(star => {
    let flicker = 0.5 + 0.5 * Math.sin(Date.now() * 0.005 * star.flickerSpeed * 1000 + star.flickerPhase);
    let alpha = star.brightness * flicker;

    let radius = star.radius;
    if (star.brightness > 0.7) radius *= 1.8;
    else if (star.brightness > 0.4) radius *= 1.2;

    ctx.beginPath();
    ctx.arc(star.x, star.y, radius, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(255, 255, 255, ${alpha.toFixed(2)})`;
    ctx.shadowColor = `rgba(255, 255, 255, ${alpha.toFixed(2)})`;
    ctx.shadowBlur = radius * 2;
    ctx.fill();
  });
  requestAnimationFrame(drawStars);
}
drawStars();

const container = document.getElementById('couponContainer');
let isDragging = false, offsetX, offsetY;

container.addEventListener('mousedown', e => {
  isDragging = true;
  offsetX = e.clientX - container.offsetLeft;
  offsetY = e.clientY - container.offsetTop;
  container.style.cursor = 'grabbing';
});

document.addEventListener('mousemove', e => {
  if (!isDragging) return;
  container.style.left = `${e.clientX - offsetX}px`;
  container.style.top = `${e.clientY - offsetY}px`;
});

document.addEventListener('mouseup', () => {
  isDragging = false;
  container.style.cursor = 'grab';
});

const music = document.getElementById('bg-music');
let isPlaying = false;

function toggleMusic() {
  if (isPlaying) music.pause();
  else music.play();
  isPlaying = !isPlaying;
}

function animateNyanCat() {
  const nyan = document.getElementById("nyan-cat");
  const screenW = window.innerWidth;
  nyan.style.top = `${Math.random() * 50 + 20}%`;
  nyan.style.left = `-200px`;
  nyan.style.opacity = 1;
  let pos = -200, speed = 2 + Math.random() * 3;
  const interval = setInterval(() => {
    pos += speed;
    nyan.style.left = `${pos}px`;
    if (pos > screenW + 200) {
      clearInterval(interval);
      nyan.style.opacity = 0;
      setTimeout(animateNyanCat, 5000 + Math.random() * 5000);
    }
  }, 20);
}

window.onload = () => {
  animateNyanCat();
};

window.addEventListener('resize', () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});
