import sharp from 'sharp';

const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <rect width="1200" height="630" fill="#3b5bdb"/>
  <text x="80" y="270" font-family="Sora, system-ui, -apple-system, sans-serif" font-size="100" font-weight="600" fill="white">Gretchen</text>
  <text x="80" y="390" font-family="Sora, system-ui, -apple-system, sans-serif" font-size="100" font-weight="600" fill="white">Kerfoot</text>
</svg>`;

sharp(Buffer.from(svg))
  .png()
  .toFile('public/og-image.png')
  .then(() => console.log('Created og-image.png'))
  .catch(err => console.error(err));
