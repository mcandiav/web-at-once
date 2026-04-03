/** Host público del sitio (sin protocolo). */
export const SITE_HOST = "web.at-once.cl";

const PRODUCTION_SITE_URL = `https://${SITE_HOST}`;

/**
 * URL base para `metadataBase` y enlaces absolutos.
 * - `NEXT_PUBLIC_SITE_URL` en EasyPanel / local anula el valor por defecto.
 * - En desarrollo, sin variable: `http://localhost:3000`.
 */
export function getSiteUrl(): string {
  const fromEnv = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "");
  if (fromEnv) return fromEnv;
  if (process.env.NODE_ENV === "development") return "http://localhost:3000";
  return PRODUCTION_SITE_URL;
}
