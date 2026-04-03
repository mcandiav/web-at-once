/**
 * Miguel solo añade archivos en media/. Este script:
 * - Registra en catalog.json cada imagen nueva (sin tocar entradas ya existentes).
 * - Rellena alt / Open Graph con plantillas At-Once + web.at-once.cl.
 * - Deja solo un defaultOg: true (prioridad: archivo con "logo" en el nombre, si no el primero del catálogo).
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const mediaDir = path.join(root, "media");
const catalogPath = path.join(mediaDir, "catalog.json");

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

const SKIP = new Set(["catalog.json", ".gitkeep", ".ds_store"]);

const SITE = "At-Once";
const SITE_URL = "web.at-once.cl";

function listImageFiles() {
  if (!fs.existsSync(mediaDir)) return [];
  return fs
    .readdirSync(mediaDir, { withFileTypes: true })
    .filter((e) => e.isFile())
    .map((e) => e.name)
    .filter((name) => {
      const low = name.toLowerCase();
      if (SKIP.has(low)) return false;
      return IMAGE_EXT.has(path.extname(name).toLowerCase());
    })
    .sort((a, b) => a.localeCompare(b));
}

function stem(file) {
  return path.basename(file, path.extname(file));
}

function suggestAlt(file) {
  const s = stem(file).toLowerCase();
  if (s.includes("logo")) {
    return `${SITE} — logotipo corporativo`;
  }
  if (s.includes("favicon")) {
    return `${SITE} — icono del sitio (favicon)`;
  }
  const words = s
    .replace(/[-_]+/g, " ")
    .trim()
    .split(/\s+/)
    .filter(Boolean)
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
  return `${words || "Imagen"} — contenido corporativo ${SITE}`;
}

function newEntry(file, withDefaultOg) {
  const alt = suggestAlt(file);
  return {
    file,
    alt,
    title: SITE,
    ogTitle: SITE,
    ogDescription: `Sitio corporativo ${SITE} (${SITE_URL})`,
    ...(withDefaultOg ? { defaultOg: true } : {}),
  };
}

function normalizeDefaultOg(assets) {
  const withLogo = assets.find((a) => stem(a.file).toLowerCase().includes("logo"));
  const pick = withLogo ?? assets[0];
  return assets.map((a) => ({
    ...a,
    defaultOg: a.file === pick.file,
  }));
}

function main() {
  const files = listImageFiles();
  let catalog = { assets: [] };
  if (fs.existsSync(catalogPath)) {
    try {
      catalog = JSON.parse(fs.readFileSync(catalogPath, "utf8"));
    } catch {
      catalog = { assets: [] };
    }
  }
  if (!Array.isArray(catalog.assets)) catalog.assets = [];

  const byFile = new Map(catalog.assets.map((a) => [a.file, a]));
  let added = [];

  for (const file of files) {
    if (byFile.has(file)) continue;
    const entry = newEntry(file, false);
    catalog.assets.push(entry);
    byFile.set(file, entry);
    added.push(file);
  }

  if (catalog.assets.length > 0) {
    catalog.assets = normalizeDefaultOg(catalog.assets);
  }

  const prev = fs.existsSync(catalogPath)
    ? fs.readFileSync(catalogPath, "utf8")
    : "";
  const next = JSON.stringify(catalog, null, 2) + "\n";
  if (prev !== next) {
    fs.writeFileSync(catalogPath, next, "utf8");
    if (added.length) {
      console.log("ingest-media: registradas", added.join(", "));
    } else {
      console.log("ingest-media: catálogo actualizado (defaultOg / orden)");
    }
  } else {
    console.log("ingest-media: sin cambios");
  }
}

main();
