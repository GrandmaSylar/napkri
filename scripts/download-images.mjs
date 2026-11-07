import { writeFile, unlink } from "node:fs/promises";
import { existsSync } from "node:fs";
import { join } from "node:path";

const IMAGES = {
  // Category images
  "category-laptops.jpg": "photo-1517336714731-489689fd1ca8",
  "category-desktops.jpg": "photo-1593640408182-31c70c8268f5",
  "category-monitors.jpg": "photo-1527443224154-c4a3942d3acf",
  "category-storage.jpg": "photo-1597872200969-2b65d56bd16b",
  "category-audio.jpg": "photo-1505740420928-5e560c06d30e",
  "category-accessories.jpg": "photo-1629429408209-1f912961dbd8",
  "category-peripherals.jpg": "photo-1587829741301-dc798b83add3",

  // Launch products
  "product-macbook-air-m2.jpg": "photo-1611186871348-b1ce696e52c9",
  "product-thinkpad-x1-carbon.jpg": "photo-1588872657578-7efd1f1555ed",
  "product-dell-xps-15.jpg": "photo-1593642632823-8f785ba67e45",
  "product-hp-envy-x360.jpg": "photo-1525547719571-a2d4ac8945e2",
  "product-dell-ultrasharp-27.jpg": "photo-1541807084-5c52b6b3adef",
  "product-samsung-t7-shield.jpg": "photo-1531492746076-161ca9bcad58",
  "product-logitech-mx-master-3s.jpg": "photo-1615663245857-ac93bb7c39e7",
  "product-keychron-k2-pro.jpg": "photo-1595225476474-87563907a212",
  "product-anker-thunderbolt-dock.jpg": "photo-1544652478-6653e09f18a2",
  "product-sony-wh1000xm5.jpg": "photo-1546435770-a3e426bf472b"
};

const LEGACY_FILES = [
  "category-bags.jpg",
  "category-beauty.jpg",
  "category-clothing.jpg",
  "category-heels.jpg",
  "category-perfumes.jpg",
  "category-slippers.jpg",
  "product-ambre-noir-eau-de-parfum.jpg",
  "product-cashmere-crewneck.jpg",
  "product-matte-silk-lip-oil.jpg",
  "product-minimal-gold-hoop.jpg",
  "product-quilted-crossbody.jpg",
  "product-silk-charmeuse-shirt.jpg",
  "product-structured-leather-tote.jpg",
  "product-tailored-wool-coat.jpg",
  "product-vetiver-hand-balm.jpg",
  "product-wool-wide-leg-trouser.jpg"
];

const targetDir = new URL("../public/images/", import.meta.url).pathname.replace(/^\/([A-Z]:)/, "$1");

console.log("Downloading Nakpri tech and hardware photography...");

for (const [filename, photoId] of Object.entries(IMAGES)) {
  const url = `https://images.unsplash.com/${photoId}?auto=format&fit=crop&w=1000&q=82`;
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error(`Failed to download ${url}: ${res.statusText}`);
  }
  const buffer = Buffer.from(await res.arrayBuffer());
  const filePath = join(targetDir, filename);
  await writeFile(filePath, buffer);
  console.log(`✓ ${filename} (${Math.round(buffer.length / 1024)} KB)`);
}

console.log("\nRemoving legacy fashion images...");
for (const legacy of LEGACY_FILES) {
  const p = join(targetDir, legacy);
  if (existsSync(p)) {
    await unlink(p);
    console.log(`Deleted legacy image: ${legacy}`);
  }
}

// Remove legacy root files
const pubDir = new URL("../public/", import.meta.url).pathname.replace(/^\/([A-Z]:)/, "$1");
for (const file of ["IMG_1123.JPG.jpeg", "tillys-gallery-business-card.pdf"]) {
  const p = join(pubDir, file);
  if (existsSync(p)) {
    await unlink(p);
    console.log(`Deleted legacy file: ${file}`);
  }
}

console.log("\nAll Nakpri hardware photography ready!");
