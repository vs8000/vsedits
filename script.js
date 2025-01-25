// Get the canvas element
const canvas = document.getElementById('photoCanvas');
const ctx = canvas.getContext('2d');

// Set the canvas dimensions
canvas.width = 800;
canvas.height = 600;

// Load an image onto the canvas
const image = new Image();
image.src = 'image.jpg'; // Replace with your image URL
image.onload = () => {
    ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
};

// Add event listeners for the toolbar buttons
document.getElementById('textBtn').addEventListener('click', () => {
    // Add text to the canvas
    const text = prompt('Enter your text:');
    ctx.font = '24px Arial';
    ctx.fillStyle = '#000';
    ctx.textAlign = 'left';
    ctx.textBaseline = 'top';
    ctx.fillText(text, 10, 10);
});

document.getElementById('drawBtn').addEventListener('click', () => {
    // Allow the user to draw on the canvas
    let drawing = false;
    let lastX, lastY;

    canvas.addEventListener('mousedown', (e) => {
        drawing = true;
        lastX = e.offsetX;
        lastY = e.offsetY;
    });

    canvas.addEventListener('mousemove', (e) => {
        if
