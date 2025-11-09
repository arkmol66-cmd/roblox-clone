const canvas = document.getElementById("editor");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let blocks = [];
canvas.addEventListener("click", e => {
  blocks.push({ x: e.clientX, y: e.clientY });
});

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "gray";
  for (let b of blocks) ctx.fillRect(b.x - 10, b.y - 10, 20, 20);
  requestAnimationFrame(draw);
}
draw();
