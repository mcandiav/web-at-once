import Image from "next/image";
import Link from "next/link";
import { getHomeLeadAsset, mediaUrl } from "@/lib/media";

export default function Home() {
  const lead = getHomeLeadAsset();

  return (
    <main
      style={{
        minHeight: "100vh",
        display: "grid",
        placeItems: "center",
        gap: "1.5rem",
        fontFamily: "system-ui, sans-serif",
        color: "#1a1a1a",
        background: "#fafafa",
        padding: "2rem",
      }}
    >
      {lead ? (
        <div
          style={{
            position: "relative",
            width: "min(280px, 85vw)",
            height: "100px",
          }}
        >
          <Image
            src={mediaUrl(lead.file)}
            alt={lead.alt}
            title={lead.title}
            fill
            sizes="280px"
            style={{ objectFit: "contain" }}
            priority
          />
        </div>
      ) : null}
      <p style={{ margin: 0, fontSize: "1rem" }}>At-Once</p>
      <Link
        href="/netsuite"
        style={{
          fontSize: "0.9rem",
          color: "#00d1ff",
          textDecoration: "underline",
          textUnderlineOffset: "3px",
        }}
      >
        Servicios NetSuite para empresas
      </Link>
    </main>
  );
}
