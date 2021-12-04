let canvas = document.querySelector('canvas');

// Set the width and height of the canvas
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Get the context of the canvas
let c = canvas.getContext('2d');

// draws a rectangle
c.fillStyle = 'rgba(255, 0, 0, 0.5)'; // sets the color of the rectangle
c.fillRect(300, 100, 100, 100); // (x, y, width, height)

c.fillStyle = 'rgba(255, 255, 0, 0.5)'; // sets the color of the rectangle
c.fillRect(500, 450, 100, 100); // (x, y, width, height)

c.fillStyle = 'rgba(0, 255, 0, 0.5)'; // sets the color of the rectangle
c.fillRect(100, 450, 100, 100); // (x, y, width, height)

c.fillStyle = 'rgba(0, 0, 255, 0.5)'; // sets the color of the rectangle
c.fillRect(300, 300, 100, 100); // (x, y, width, height)

console.log(canvas);
