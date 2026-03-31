import sharp from 'sharp';

const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <rect width="1200" height="630" fill="#ffffff"/>
  <rect x="450" y="165" width="300" height="300" rx="50" fill="#3b5bdb"/>
  <text x="600" y="355" font-family="system-ui, -apple-system, sans-serif" font-size="140" font-weight="600" fill="white" text-anchor="middle">GK</text>
</svg>`;

sharp(Buffer.from(svg))
  .png()
  .toFile('public/og-image.png')
  .then(() => console.log('Created og-image.png'))
  .catch(err => console.error(err));
