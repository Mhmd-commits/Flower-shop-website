const { createCanvas, loadImage } = require('canvas');
const fs = require('fs');
const path = require('path');

async function generateLogo() {
  const width = 800;
  const height = 800;
  const canvas = createCanvas(width, height);
  const ctx = canvas.getContext('2d');

  // Set background
  ctx.fillStyle = '#FFF9F5';  // Warm cream background
  ctx.fillRect(0, 0, width, height);

  // Draw the text "Fruze"
  ctx.font = 'italic 120px serif';
  ctx.fillStyle = '#FF9EC3';  // Pink color
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('Fruze', width/2, height/2);

  // Draw "GROWN WITH GRACE"
  ctx.font = '24px sans-serif';
  ctx.fillStyle = '#B4E4FF';  // Light blue color
  ctx.fillText('GROWN WITH GRACE', width/2, height/2 + 80);

  // Draw decorative flowers
  ctx.strokeStyle = '#FF9EC3';  // Pink color
  ctx.lineWidth = 2;

  // Top flowers
  for (let i = 0; i < 3; i++) {
    const x = width/2 + (i - 1) * 80;
    const y = height/2 - 100;
    drawFlower(ctx, x, y);
  }

  // Bottom flower
  drawFlower(ctx, width/2, height/2 + 40);

  // Save the image
  const buffer = canvas.toBuffer('image/png');
  fs.writeFileSync(path.join(__dirname, '..', 'public', 'images', 'logo.png'), buffer);
  console.log('Generated logo image');
}

function drawFlower(ctx, x, y) {
  // Draw petals
  ctx.strokeStyle = '#FF9EC3';  // Pink for petals
  for (let i = 0; i < 6; i++) {
    ctx.save();
    ctx.translate(x, y);
    ctx.rotate((i * Math.PI * 2) / 6);
    
    // Draw a petal
    ctx.beginPath();
    ctx.moveTo(0, -10);
    ctx.quadraticCurveTo(15, -25, 0, -40);
    ctx.quadraticCurveTo(-15, -25, 0, -10);
    ctx.stroke();
    
    ctx.restore();
  }

  // Draw leaves
  ctx.strokeStyle = '#B4E4FF';  // Light blue for leaves
  for (let i = 0; i < 2; i++) {
    ctx.save();
    ctx.translate(x, y);
    ctx.rotate(Math.PI/4 + i * Math.PI);
    
    // Draw a leaf
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.quadraticCurveTo(20, 10, 40, 0);
    ctx.quadraticCurveTo(20, -10, 0, 0);
    ctx.stroke();
    
    ctx.restore();
  }
}

generateLogo(); 