import type { Metadata } from "next";
import "./globals.css";
import { getFaviconAsset, getMediaCatalog, mediaUrl } from "@/lib/media";
import { getSiteUrl } from "@/lib/site";

const defaultOg = getMediaCatalog().assets.find((a) => a.defaultOg);
const favicon = getFaviconAsset();
const siteUrl = getSiteUrl();

const faviconUrl = favicon ? mediaUrl(favicon.file) : undefined;

export const metadata: Metadata = {
  title: "At-Once",
  description: "Sitio corporativo At-Once",
  metadataBase: new URL(siteUrl),
  ...(faviconUrl && {
    icons: {
      icon: faviconUrl,
      apple: faviconUrl,
    },
  }),
  ...(defaultOg && {
    openGraph: {
      images: [{ url: mediaUrl(defaultOg.file), alt: defaultOg.alt }],
      ...(defaultOg.ogTitle && { title: defaultOg.ogTitle }),
      ...(defaultOg.ogDescription && {
        description: defaultOg.ogDescription,
      }),
    },
  }),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
