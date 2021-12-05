let canvas = document.querySelector('canvas');

// Set the width and height of the canvas
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Get the context of the canvas
let ctx = canvas.getContext('2d');

// Draw circles
for (let i = 0; i <= 3; i++) {
  for (let j = 0; j <= 2; j++) {
    ctx.beginPath();
    let x = 25 + j * 50; // x coordinate
    let y = 25 + i * 50; // y coordinate
    let radius = 20; // Arc radius
    let startAngle = 0; // Starting point on circle
    let endAngle = Math.PI + (Math.PI * j) / 2; // End point on circle
    let counterclockwise = i % 2 == 1; // Draw counterclockwise

    ctx.arc(x, y, radius, startAngle, endAngle, counterclockwise);

    if (i > 1) {
      ctx.fillStyle = 'green'; // Set the color of the fil
      ctx.fill(); // Draw fill the circle
    } else {
      if (j < 1) {
        ctx.strokeStyle = '#f00'; // Set the color of the stroke
        ctx.stroke(); // Draw stroke the circle
      } else {
        ctx.stroke(); // Draw stroke the circle
      }
    }
  }
}
