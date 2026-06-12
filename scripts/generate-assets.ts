import fs from "fs";
import path from "path";
import sharp from "sharp";

async function run() {
  console.log("Generating PWA assets...");

  const faviconPath = path.resolve("public/favicon.svg");
  const websiteScreenshotPath = path.resolve("src/assets/images/website.webp");

  if (!fs.existsSync(faviconPath)) {
    console.error("Error: public/favicon.svg not found");
    process.exit(1);
  }

  // 1. Generate icon-192.png
  console.log("Rendering public/icon-192.png...");
  await sharp(faviconPath)
    .resize(192, 192)
    .png()
    .toFile(path.resolve("public/icon-192.png"));

  // 2. Generate icon-512.png
  console.log("Rendering public/icon-512.png...");
  await sharp(faviconPath)
    .resize(512, 512)
    .png()
    .toFile(path.resolve("public/icon-512.png"));

  // 3. Copy website screenshot to public/screenshot.webp
  if (fs.existsSync(websiteScreenshotPath)) {
    console.log("Copying website.webp to public/screenshot.webp...");
    fs.copyFileSync(
      websiteScreenshotPath,
      path.resolve("public/screenshot.webp"),
    );
  } else {
    console.warn(
      "Warning: src/assets/images/website.webp not found. Skipping screenshot copy.",
    );
  }

  console.log("✨ PWA assets successfully generated!");
}

run().catch((err) => {
  console.error("Asset generation crashed:", err);
  process.exit(1);
});
