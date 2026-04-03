import catalog from "@/media/catalog.json";

export type MediaAsset = {
  /** Nombre del archivo tal cual en /media (ej. hero.webp) */
  file: string;
  /** Texto alternativo (accesibilidad y contexto para buscadores) */
  alt: string;
  /** Título opcional (tooltip / algunos lectores) */
  title?: string;
  /** Open Graph: título al compartir enlace con esta imagen */
  ogTitle?: string;
  /** Open Graph: descripción al compartir */
  ogDescription?: string;
  /** Si es true, el layout puede usarla como og:image por defecto */
  defaultOg?: boolean;
};

type Catalog = { assets: MediaAsset[] };

export function getMediaCatalog(): Catalog {
  return catalog as Catalog;
}

export function getMediaAsset(file: string): MediaAsset | undefined {
  return (catalog as Catalog).assets.find((a) => a.file === file);
}

/** URL pública tras sync-media (mismo nombre de archivo en /media/...) */
export function mediaUrl(file: string): string {
  return `/media/${file}`;
}

/**
 * Imagen principal para la home: preferencia por nombre "logo"; si no, la primera del catálogo.
 * Miguel solo sube archivos a media/; ingest-media y este helper enlazan el resto.
 */
export function getHomeLeadAsset(): MediaAsset | undefined {
  const { assets } = getMediaCatalog();
  if (assets.length === 0) return undefined;
  const stem = (f: string) => f.replace(/\.[^.]+$/, "").toLowerCase();
  const logo = assets.find((a) => stem(a.file).includes("logo"));
  if (logo) return logo;
  const notFavicon = assets.filter((a) => !stem(a.file).includes("favicon"));
  return notFavicon[0] ?? assets[0];
}

/** Favicon para `<link rel="icon">` / metadata: nombre con "favicon" o extensión .ico */
export function getFaviconAsset(): MediaAsset | undefined {
  const { assets } = getMediaCatalog();
  const stem = (f: string) => f.replace(/\.[^.]+$/, "").toLowerCase();
  const byName = assets.find((a) => stem(a.file).includes("favicon"));
  if (byName) return byName;
  return assets.find((a) => a.file.toLowerCase().endsWith(".ico"));
}
