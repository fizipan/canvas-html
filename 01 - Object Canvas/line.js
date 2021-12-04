let canvas = document.querySelector('canvas');

// Set the width and height of the canvas
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Get the context of the canvas
let c = canvas.getContext('2d');

// Set line width
c.lineWidth = 15;

// Set line cap
c.lineCap = 'round';

// Create line
c.beginPath(); // Start the path
c.moveTo(90, 130); // Start the line
c.strokeStyle = 'blue'; // Set the color of the line
c.lineTo(90, 25); // End the line
c.lineTo(150, 80); // End the line
c.lineTo(205, 25); // End the line
c.lineTo(205, 130); // End the line
c.closePath(); // Close the path
c.stroke(); // Draw the line

// Create line
c.beginPath(); // Start the path
c.moveTo(90, 200); // Start the line
c.strokeStyle = 'red'; // Set the color of the line
c.lineTo(30, 300); // End the line
c.lineTo(150, 300); // End the line
c.closePath(); // Close the path
c.stroke(); // Draw the line
