import sharp from 'sharp';
import { readFileSync } from 'fs';

// Read the base64 encoded Sora font
const fontBase64 = readFileSync(new URL('./fonts/sora-semibold.b64', import.meta.url), 'utf-8').trim();

const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs>
    <style>
      @font-face {
        font-family: 'Sora';
        font-weight: 600;
        src: url('data:font/truetype;base64,${fontBase64}') format('truetype');
      }
    </style>
  </defs>
  <rect width="1200" height="630" fill="#3b5bdb"/>
  <text x="80" y="270" font-family="Sora" font-size="100" font-weight="600" fill="white">Gretchen</text>
  <text x="80" y="390" font-family="Sora" font-size="100" font-weight="600" fill="white">Kerfoot</text>
</svg>`;

sharp(Buffer.from(svg))
  .png()
  .toFile('public/og-image.png')
  .then(() => console.log('Created og-image.png'))
  .catch(err => console.error(err));
