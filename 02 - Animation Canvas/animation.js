const canvas = document.querySelector('canvas');

// Set canvas size
const width = (canvas.width = window.innerWidth);
const height = (canvas.height = window.innerHeight);

// Get context
const ctx = canvas.getContext('2d');

// Circle object
function Circle(x, y, dx, dy, radius, r, g, b) {
  this.x = x;
  this.y = y;
  this.dx = dx;
  this.dy = dy;
  this.radius = radius;
  this.r = r;
  this.g = g;
  this.b = b;

  this.draw = function () {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    ctx.fillStyle = `rgba(${r}, ${g}, ${b}, 0.5)`;
    ctx.fill();
  };

  this.update = function () {
    if (this.x + this.radius > width || this.x - this.radius < 0) {
      this.dx = -this.dx;
    }

    if (this.y + this.radius > height || this.y - this.radius < 0) {
      this.dy = -this.dy;
    }

    this.x += this.dx;
    this.y += this.dy;

    this.draw();
  };
}

// Create array of circles
let circleArray = [];

// Add circles
for (let i = 0; i < 100; i++) {
  // Config animation
  let x = Math.random() * width;
  let y = Math.random() * height;
  let dx = (Math.random() - 0.5) * 10;
  let dy = (Math.random() - 0.5) * 10;
  let radius = 30;
  let r = Math.round(Math.random() * 255 + 1);
  let g = Math.round(Math.random() * 255 + 1);
  let b = Math.round(Math.random() * 255 + 1);

  circleArray.push(new Circle(x, y, dx, dy, radius, r, g, b));
}

// Animation loop
function animate() {
  requestAnimationFrame(animate);

  ctx.clearRect(0, 0, width, height);

  for (let i = 0; i < circleArray.length; i++) {
    circleArray[i].update();
  }
}

animate();
