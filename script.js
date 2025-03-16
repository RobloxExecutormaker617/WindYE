const canvas = document.getElementById('matrix');
const ctx = canvas.getContext('2d');

// Set canvas dimensions to fill the window
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Characters for the Matrix effect
const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*()_+';
const charArray = characters.split('');
const fontSize = 14;
const columns = canvas.width / fontSize;

// Array to track the position of each drop
const drops = Array(Math.floor(columns)).fill(1);

// Function to draw the Matrix effect
function drawMatrix() {
  // Set the background color with slight transparency for the trailing effect
  ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Set the text color and font
  ctx.fillStyle = '#0f0';
  ctx.font = `${fontSize}px monospace`;

  // Draw each character
  for (let i = 0; i < drops.length; i++) {
    const text = charArray[Math.floor(Math.random() * charArray.length)];
    ctx.fillText(text, i * fontSize, drops[i] * fontSize);

    // Reset the drop if it goes beyond the canvas height
    if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
      drops[i] = 0;
    }
    drops[i]++;
  }
}

// Start the Matrix effect
setInterval(drawMatrix, 50);

// Handle window resizing
window.addEventListener('resize', () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});
