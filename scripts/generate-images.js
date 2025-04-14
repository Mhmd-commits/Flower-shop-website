const { createCanvas } = require('canvas');
const fs = require('fs');
const path = require('path');

function generateImage(width, height, text, filename, style = 'default') {
  const canvas = createCanvas(width, height);
  const ctx = canvas.getContext('2d');

  // Create gradient background based on style
  const gradient = ctx.createLinearGradient(0, 0, width, height);
  
  switch(style) {
    case 'wedding':
      gradient.addColorStop(0, '#FFF5F9');
      gradient.addColorStop(1, '#FFE0ED');
      break;
    case 'tropical':
      gradient.addColorStop(0, '#FFE8D6');
      gradient.addColorStop(1, '#FFD6BA');
      break;
    case 'modern':
      gradient.addColorStop(0, '#F5F7FA');
      gradient.addColorStop(1, '#E4E7EB');
      break;
    default:
      gradient.addColorStop(0, '#f8e1e9');
      gradient.addColorStop(1, '#f3d2e3');
  }
  
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, width, height);

  // Add some decorative elements
  ctx.strokeStyle = '#ffffff50';
  ctx.lineWidth = 2;
  for (let i = 0; i < 5; i++) {
    ctx.beginPath();
    ctx.arc(
      Math.random() * width,
      Math.random() * height,
      Math.random() * 50 + 20,
      0,
      2 * Math.PI
    );
    ctx.stroke();
  }

  // Add text
  ctx.fillStyle = '#4a4a4a';
  ctx.font = 'bold 24px Arial';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText(text, width / 2, height / 2);

  // Save the image
  const buffer = canvas.toBuffer('image/jpeg');
  fs.writeFileSync(filename, buffer);
  console.log(`Generated ${filename}`);
}

// Ensure directories exist
const publicDir = path.join(__dirname, '..', 'public');
const imagesDir = path.join(publicDir, 'images');
const galleryDir = path.join(imagesDir, 'gallery');

[publicDir, imagesDir, galleryDir].forEach(dir => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
});

// Generate product images
[
  ['spring-bliss.jpg', 'Spring Bliss', 'default'],
  ['rose-romance.jpg', 'Rose Romance', 'default'],
  ['peaceful-orchid.jpg', 'Peaceful Orchid', 'modern'],
  ['rustic-wildflowers.jpg', 'Rustic Wildflowers', 'default'],
  ['succulent-garden.jpg', 'Succulent Garden', 'modern'],
  ['luxury-peony.jpg', 'Luxury Peony', 'default'],
  ['tropical-paradise.jpg', 'Tropical Paradise', 'tropical'],
  ['birthday-celebration.jpg', 'Birthday Celebration', 'default'],
  ['modern-minimalist.jpg', 'Modern Minimalist', 'modern'],
  ['wedding-collection.jpg', 'Wedding Collection', 'wedding']
].forEach(([filename, text, style]) => {
  generateImage(800, 600, text, path.join(imagesDir, filename), style);
});

// Generate gallery images
[
  ['wedding-1.jpg', 'Summer Wedding', 'wedding'],
  ['spring-1.jpg', 'Spring Collection', 'default'],
  ['corporate-1.jpg', 'Corporate Event', 'modern'],
  ['roses-1.jpg', 'Romantic Roses', 'default'],
  ['tropical-1.jpg', 'Tropical Paradise', 'tropical'],
  ['winter-1.jpg', 'Winter Wonderland', 'modern'],
  ['birthday-1.jpg', 'Birthday Celebration', 'default'],
  ['rustic-1.jpg', 'Rustic Garden', 'default'],
  ['peony-1.jpg', 'Luxury Peony', 'default']
].forEach(([filename, text, style]) => {
  generateImage(1200, 800, text, path.join(galleryDir, filename), style);
});
