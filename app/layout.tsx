import type { Metadata } from "next";
import { Roboto, Roboto_Slab } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-roboto",
  display: "swap",
});

const robotoSlab = Roboto_Slab({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-robotoslab",
  display: "swap",
});
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
    <html
      lang="es"
      className={`${roboto.variable} ${robotoSlab.variable}`}
    >
      <body className={roboto.className}>{children}</body>
    </html>
  );
}
