const { createCanvas } = require('canvas');
const fs = require('fs');
const path = require('path');

function generateHeroImage() {
  const width = 1920;
  const height = 1080;
  const canvas = createCanvas(width, height);
  const ctx = canvas.getContext('2d');

  // Create a soft, elegant background
  const gradient = ctx.createLinearGradient(0, 0, width, height);
  gradient.addColorStop(0, '#171036');  // Dark purple
  gradient.addColorStop(1, '#231C47');  // Slightly lighter purple
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, width, height);

  // Add some decorative floral elements
  ctx.strokeStyle = '#FFD700';  // Gold color
  ctx.lineWidth = 1;

  // Create multiple rose-like patterns
  for (let i = 0; i < 12; i++) {
    const x = Math.random() * width;
    const y = Math.random() * height;
    const size = Math.random() * 100 + 50;

    ctx.save();
    ctx.translate(x, y);
    ctx.rotate(Math.random() * Math.PI * 2);

    // Draw a rose-like pattern
    for (let j = 0; j < 12; j++) {
      ctx.beginPath();
      ctx.arc(0, 0, size * (j / 12), 0, Math.PI * 2);
      ctx.stroke();
    }

    ctx.restore();
  }

  // Save the hero background image
  const buffer = canvas.toBuffer('image/jpeg', { quality: 0.9 });
  fs.writeFileSync(path.join(__dirname, '..', 'public', 'images', 'hero-bg.jpg'), buffer);
  console.log('Generated hero background image');
}

function generateFeaturedFlower() {
  const size = 800;  // Large enough for the circular display
  const canvas = createCanvas(size, size);
  const ctx = canvas.getContext('2d');

  // Create a radial gradient background
  const gradient = ctx.createRadialGradient(size/2, size/2, 0, size/2, size/2, size/2);
  gradient.addColorStop(0, '#FFE0ED');  // Light pink
  gradient.addColorStop(1, '#FFB7D1');  // Darker pink
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, size, size);

  // Draw a stylized flower
  ctx.strokeStyle = '#FF74A9';  // Pink
  ctx.lineWidth = 3;
  
  // Draw petals
  for (let i = 0; i < 12; i++) {
    ctx.save();
    ctx.translate(size/2, size/2);
    ctx.rotate((i * Math.PI * 2) / 12);
    
    // Draw a petal
    ctx.beginPath();
    ctx.moveTo(0, -50);
    ctx.quadraticCurveTo(100, -100, 0, -200);
    ctx.quadraticCurveTo(-100, -100, 0, -50);
    ctx.stroke();
    ctx.fillStyle = '#FFC9DE';
    ctx.fill();
    
    ctx.restore();
  }

  // Draw center
  ctx.beginPath();
  ctx.arc(size/2, size/2, 50, 0, Math.PI * 2);
  ctx.fillStyle = '#FF83B2';
  ctx.fill();

  // Save the featured flower image
  const buffer = canvas.toBuffer('image/jpeg', { quality: 0.9 });
  fs.writeFileSync(path.join(__dirname, '..', 'public', 'images', 'featured-flower.jpg'), buffer);
  console.log('Generated featured flower image');
}

function generateDecorativeFlowers() {
  // Generate flower1.png
  const flower1 = createCanvas(400, 400);
  const ctx1 = flower1.getContext('2d');
  
  // Simple flower design for flower1
  ctx1.fillStyle = '#FFD700';
  for (let i = 0; i < 8; i++) {
    ctx1.save();
    ctx1.translate(200, 200);
    ctx1.rotate((i * Math.PI * 2) / 8);
    ctx1.beginPath();
    ctx1.ellipse(0, -50, 20, 80, 0, 0, Math.PI * 2);
    ctx1.fill();
    ctx1.restore();
  }
  
  const buffer1 = flower1.toBuffer('image/png');
  fs.writeFileSync(path.join(__dirname, '..', 'public', 'images', 'flower1.png'), buffer1);
  console.log('Generated flower1.png');

  // Generate flower2.png
  const flower2 = createCanvas(300, 300);
  const ctx2 = flower2.getContext('2d');
  
  // Different flower design for flower2
  ctx2.fillStyle = '#FFE878';
  for (let i = 0; i < 6; i++) {
    ctx2.save();
    ctx2.translate(150, 150);
    ctx2.rotate((i * Math.PI * 2) / 6);
    ctx2.beginPath();
    ctx2.ellipse(0, -40, 15, 60, 0, 0, Math.PI * 2);
    ctx2.fill();
    ctx2.restore();
  }
  
  const buffer2 = flower2.toBuffer('image/png');
  fs.writeFileSync(path.join(__dirname, '..', 'public', 'images', 'flower2.png'), buffer2);
  console.log('Generated flower2.png');
}

// Generate all images
generateHeroImage();
generateFeaturedFlower();
generateDecorativeFlowers();
