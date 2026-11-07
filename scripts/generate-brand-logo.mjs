import sharp from "sharp";
import { writeFile } from "node:fs/promises";
import { join } from "node:path";

const pubDir = new URL("../public/", import.meta.url).pathname.replace(/^\/([A-Z]:)/, "$1");

function getSvg(isDark = false) {
  const ink = isDark ? "#FFFFFF" : "#0F2338";
  const sub = isDark ? "#94A3B8" : "#64748B";
  const chassis = isDark ? "#38BDF8" : "#0F2338";
  const screen = isDark ? "#0A0F1D" : "#0A0F1D";
  const cyan = isDark ? "#38BDF8" : "#0284C7";
  const base = isDark ? "#38BDF8" : "#0F2338";

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 460 96" width="460" height="96" fill="none">
    <!-- Laptop Icon -->
    <g transform="translate(4, 8)">
      <!-- Screen Lid Outer -->
      <rect x="8" y="4" width="76" height="52" rx="7" fill="${chassis}" />
      <!-- Display Bezel / Screen -->
      <rect x="14" y="10" width="64" height="40" rx="4" fill="${screen}" />
      <!-- Terminal Prompt Symbol >_ -->
      <path d="M24 22 L34 30 L24 38" stroke="#38BDF8" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
      <line x1="40" y1="36" x2="52" y2="36" stroke="#38BDF8" stroke-width="3" stroke-linecap="round" />
      <!-- Laptop Base / Keyboard deck -->
      <path d="M2 56 L90 56 L83 66 L9 66 Z" fill="${base}" />
      <!-- Trackpad notch -->
      <line x1="38" y1="60" x2="54" y2="60" stroke="#38BDF8" stroke-width="2" stroke-linecap="round" />
    </g>

    <!-- Wordmark -->
    <text x="110" y="52" font-family="system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="42" font-weight="900" letter-spacing="1.5" fill="${ink}">NAKPRI</text>
    <text x="112" y="74" font-family="system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="12.5" font-weight="700" letter-spacing="3.8" fill="${sub}">LAPTOPS &amp; ACCESSORIES</text>
    
    <!-- Tech Accent Bar -->
    <rect x="112" y="83" width="56" height="3" rx="1.5" fill="${cyan}" />
  </svg>`;
}

function getSquareAppIconSvg() {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="512" height="512">
    <rect width="512" height="512" rx="112" fill="#0F2338"/>
    <g transform="translate(96, 110) scale(3.5)">
      <rect x="8" y="4" width="76" height="52" rx="7" fill="#38BDF8" />
      <rect x="14" y="10" width="64" height="40" rx="4" fill="#0A0F1D" />
      <path d="M24 22 L34 30 L24 38" stroke="#38BDF8" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round" />
      <line x1="40" y1="36" x2="52" y2="36" stroke="#38BDF8" stroke-width="3.2" stroke-linecap="round" />
      <path d="M2 56 L90 56 L83 66 L9 66 Z" fill="#38BDF8" />
      <line x1="38" y1="60" x2="54" y2="60" stroke="#0F2338" stroke-width="2.5" stroke-linecap="round" />
    </g>
  </svg>`;
}

async function generate() {
  const lightSvg = getSvg(false);
  const darkSvg = getSvg(true);
  const appIconSvg = getSquareAppIconSvg();

  // Save SVGs
  await writeFile(join(pubDir, "logo.svg"), lightSvg);
  await writeFile(join(pubDir, "logo-dark.svg"), darkSvg);

  // Render high-DPI transparent PNGs (width: 920, height: 192 for crisp 2x retina)
  await sharp(Buffer.from(lightSvg)).resize(920, 192).png().toFile(join(pubDir, "logo.png"));
  await sharp(Buffer.from(darkSvg)).resize(920, 192).png().toFile(join(pubDir, "logo-dark.png"));

  // App icon
  const iconBuffer = Buffer.from(appIconSvg);
  await sharp(iconBuffer).resize(512, 512).png().toFile(join(pubDir, "icons/icon-512.png"));
  await sharp(iconBuffer).resize(512, 512).png().toFile(join(pubDir, "icons/icon-maskable-512.png"));
  await sharp(iconBuffer).resize(192, 192).png().toFile(join(pubDir, "icons/icon-192.png"));
  
  // Next.js favicon icon.png
  const appDir = new URL("../app/", import.meta.url).pathname.replace(/^\/([A-Z]:)/, "$1");
  await sharp(iconBuffer).resize(192, 192).png().toFile(join(appDir, "icon.png"));

  console.log("✓ Generated logo.png, logo-dark.png, logo.svg, and app icons!");
}

generate().catch(console.error);
