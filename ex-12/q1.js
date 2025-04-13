const pondCanvas = document.getElementById('pondCanvas');
const pondCtx = pondCanvas.getContext('2d');

let boatX = 360;
let direction = 1;

function drawScene() {
  pondCtx.clearRect(0, 0, pondCanvas.width, pondCanvas.height);

  // Sky background
  pondCtx.fillStyle = "#d0f4f7";
  pondCtx.fillRect(0, 0, pondCanvas.width, pondCanvas.height);

  // Sun (Large circle with rays)
  pondCtx.fillStyle = "yellow";
  pondCtx.beginPath();
  pondCtx.arc(700, 80, 40, 0, Math.PI * 2);
  pondCtx.fill();
  for (let i = 0; i < 12; i++) {
    let angle = i * (Math.PI / 6);
    let x1 = 700 + Math.cos(angle) * 50;
    let y1 = 80 + Math.sin(angle) * 50;
    let x2 = 700 + Math.cos(angle) * 60;
    let y2 = 80 + Math.sin(angle) * 60;
    pondCtx.beginPath();
    pondCtx.moveTo(x1, y1);
    pondCtx.lineTo(x2, y2);
    pondCtx.strokeStyle = "yellow";
    pondCtx.stroke();
  }

  // House (rectangle + triangle roof)
  pondCtx.fillStyle = "#ff9900";
  pondCtx.fillRect(100, 250, 80, 100);
  pondCtx.beginPath();
  pondCtx.moveTo(90, 250);
  pondCtx.lineTo(140, 200);
  pondCtx.lineTo(190, 250);
  pondCtx.closePath();
  pondCtx.fillStyle = "red";
  pondCtx.fill();

  // House windows and door
  pondCtx.fillStyle = "#0000cc";
  pondCtx.fillRect(110, 270, 20, 20);
  pondCtx.fillStyle = "#663300";
  pondCtx.fillRect(145, 300, 25, 50);

  // Pond (oval)
  pondCtx.beginPath();
  pondCtx.ellipse(400, 300, 130, 70, 0, 0, 2 * Math.PI);
  pondCtx.fillStyle = "#add8e6";
  pondCtx.fill();
  pondCtx.stroke();

  // Boat (polygon - animated)
  pondCtx.beginPath();
  pondCtx.moveTo(boatX, 300);
  pondCtx.lineTo(boatX + 30, 320);
  pondCtx.lineTo(boatX - 30, 320);
  pondCtx.closePath();
  pondCtx.fillStyle = "brown";
  pondCtx.fill();

  // Duck (two circles)
  pondCtx.fillStyle = "yellow";
  pondCtx.beginPath();
  pondCtx.arc(550, 370, 20, 0, Math.PI * 2); // body
  pondCtx.fill();
  pondCtx.beginPath();
  pondCtx.arc(570, 355, 10, 0, Math.PI * 2); // head
  pondCtx.fill();
  pondCtx.fillStyle = "black";
  pondCtx.beginPath();
  pondCtx.arc(573, 353, 2, 0, Math.PI * 2); // eye
  pondCtx.fill();

  // Flower (ellipse + vertical line + petals)
  pondCtx.fillStyle = "green";
  pondCtx.fillRect(650, 320, 5, 60); // stem
  pondCtx.fillStyle = "pink";
  for (let i = 0; i < 5; i++) {
    let angle = i * (2 * Math.PI / 5);
    pondCtx.beginPath();
    pondCtx.ellipse(652 + Math.cos(angle) * 15, 320 + Math.sin(angle) * 15, 10, 15, angle, 0, Math.PI * 2);
    pondCtx.fill();
  }
  pondCtx.fillStyle = "yellow";
  pondCtx.beginPath();
  pondCtx.arc(652, 320, 7, 0, Math.PI * 2); // center
  pondCtx.fill();

  // Stones (multiple small circles)
  const stoneCoords = [
    [100, 370], [115, 375], [130, 370], // left
    [600, 420], [615, 423], [630, 420]  // right
  ];
  pondCtx.fillStyle = "#666666";
  stoneCoords.forEach(([x, y]) => {
    pondCtx.beginPath();
    pondCtx.arc(x, y, 10, 0, Math.PI * 2);
    pondCtx.fill();
  });

  // Animate boat
  boatX += direction * 1.5;
  if (boatX > 460 || boatX < 340) direction *= -1;

  requestAnimationFrame(drawScene);
}

drawScene();
const clockCanvas = document.getElementById("clockCanvas");
const ctx = clockCanvas.getContext("2d");
const radius = clockCanvas.height / 2;

ctx.translate(radius, radius);

function drawClock() {
  drawFace(ctx, radius);
  drawNumbers(ctx, radius);
  drawTime(ctx, radius);
}

function drawFace(ctx, radius) {
  ctx.beginPath();
  ctx.arc(0, 0, radius - 5, 0, 2 * Math.PI);
  ctx.fillStyle = "#fffacd";
  ctx.fill();
  ctx.strokeStyle = "#333";
  ctx.lineWidth = 4;
  ctx.stroke();

  // Center
  ctx.beginPath();
  ctx.arc(0, 0, 5, 0, 2 * Math.PI);
  ctx.fillStyle = "#333";
  ctx.fill();
}

function drawNumbers(ctx, radius) {
  ctx.font = radius * 0.15 + "px arial";
  ctx.textBaseline = "middle";
  ctx.textAlign = "center";
  for (let num = 1; num <= 12; num++) {
    let angle = (num * Math.PI) / 6;
    let x = Math.cos(angle - Math.PI / 2) * (radius * 0.8);
    let y = Math.sin(angle - Math.PI / 2) * (radius * 0.8);
    ctx.fillText(num.toString(), x, y);
  }
}

function drawTime(ctx, radius) {
  const now = new Date();
  let hour = now.getHours() % 12;
  let minute = now.getMinutes();
  let second = now.getSeconds();

  // Hour
  hour = hour * Math.PI / 6 + minute * Math.PI / (6 * 60);
  drawHand(ctx, hour, radius * 0.5, 6);

  // Minute
  minute = minute * Math.PI / 30 + second * Math.PI / (30 * 60);
  drawHand(ctx, minute, radius * 0.75, 4);

  // Second
  second = second * Math.PI / 30;
  drawHand(ctx, second, radius * 0.85, 2, "red");
}

function drawHand(ctx, pos, length, width, color = "#000") {
  ctx.beginPath();
  ctx.lineWidth = width;
  ctx.lineCap = "round";
  ctx.strokeStyle = color;
  ctx.moveTo(0, 0);
  ctx.lineTo(Math.cos(pos - Math.PI / 2) * length, Math.sin(pos - Math.PI / 2) * length);
  ctx.stroke();
}

setInterval(() => {
  ctx.clearRect(-radius, -radius, clockCanvas.width, clockCanvas.height);
  drawClock();
}, 1000);

