import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const srcDir = path.join(root, "media");
const destDir = path.join(root, "public", "media");

const IMAGE_EXT = new Set([
  ".jpg",
  ".jpeg",
  ".png",
  ".webp",
  ".gif",
  ".svg",
  ".avif",
  ".ico",
]);

const SKIP = new Set([".gitkeep", "catalog.json", ".ds_store"]);

function sync() {
  fs.mkdirSync(destDir, { recursive: true });
  if (!fs.existsSync(srcDir)) return;

  for (const name of fs.readdirSync(srcDir)) {
    const lower = name.toLowerCase();
    if (SKIP.has(lower)) continue;
    const ext = path.extname(name).toLowerCase();
    if (!IMAGE_EXT.has(ext)) continue;
    fs.copyFileSync(path.join(srcDir, name), path.join(destDir, name));
  }
}

sync();
console.log("sync-media: listo → public/media");
