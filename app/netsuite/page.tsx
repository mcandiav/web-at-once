import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { getHomeLeadAsset, mediaUrl } from "@/lib/media";
import { getSiteUrl } from "@/lib/site";
import styles from "./landing.module.css";

const contactEmail =
  process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "contacto@at-once.cl";

export const metadata: Metadata = {
  title: "Servicios NetSuite para empresas | At-Once",
  description:
    "Consultoría independiente con experiencia en NetSuite (no somos partner oficial Oracle). CRM, integraciones, capacitación y evolución del core comercial.",
  alternates: {
    canonical: "/netsuite",
  },
  openGraph: {
    title: "Servicios NetSuite para empresas | At-Once",
    description:
      "Experiencia en NetSuite, consultoría independiente (no partner Oracle). CRM, datos, integraciones y adopción.",
    url: `${getSiteUrl()}/netsuite`,
    siteName: "At-Once",
    locale: "es_CL",
    type: "website",
  },
};

export default function NetSuiteLandingPage() {
  const mailto = `mailto:${contactEmail}?subject=${encodeURIComponent(
    "Consulta NetSuite — diagnóstico / servicios",
  )}`;
  const logo = getHomeLeadAsset();

  return (
    <div className={styles.page}>
      <header className={styles.nav}>
        <Link href="/" className={styles.brand}>
          {logo ? (
            <Image
              src={mediaUrl(logo.file)}
              alt={logo.alt}
              width={200}
              height={48}
              className={styles.brandLogo}
              priority
            />
          ) : (
            "At-Once"
          )}
        </Link>
        <div className={styles.navLinks}>
          <Link href="#servicios">Servicios</Link>
          <a className={styles.navCta} href={mailto}>
            Hablar con un especialista
          </a>
        </div>
      </header>

      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <p className={styles.kicker}>NetSuite como núcleo comercial</p>
          <h1>
            Su empresa ya corre en NetSuite. Nosotros hacemos que el CRM cumpla
            de verdad.
          </h1>
          <p className={styles.lead}>
            Para organizaciones que usan NetSuite como core de ventas, servicio
            y operación comercial: ordenamos procesos, limpiamos datos, integramos
            lo que falta y capacitamos a su gente para que el sistema deje de
            ser un freno y pase a ser ventaja competitiva.
          </p>
          <div className={styles.heroActions}>
            <a className={styles.btnPrimary} href={mailto}>
              Solicitar diagnóstico express
            </a>
            <a className={styles.btnGhost} href="#servicios">
              Ver servicios estrella
            </a>
          </div>
          <p className={styles.disclaimer}>
            Contamos con <strong>experiencia real en NetSuite</strong> en entornos
            productivos. <strong>No somos partner oficial de Oracle</strong>: somos
            consultores independientes; trabajamos para su empresa, con
            transparencia y sin vendernos como canal oficial del fabricante.
          </p>
        </div>
      </section>

      <section className={styles.section} id="para-quien">
        <div className={styles.container}>
          <h2>¿Esto es para usted?</h2>
          <p className={styles.sectionIntro}>
            Trabajamos con equipos que dependen de NetSuite todos los días.
          </p>
          <ul className={styles.listCheck}>
            <li>
              El pipeline y las oportunidades no reflejan la realidad de ventas.
            </li>
            <li>
              Hay duplicidad de clientes, campos vacíos o reportes que nadie
              confía.
            </li>
            <li>
              Marketing, soporte o finanzas piden vistas distintas y chocan en
              el CRM.
            </li>
            <li>
              Implementaron hace años y el sistema quedó “congelado” por miedo a
              romper algo.
            </li>
            <li>
              Necesitan integrar canales (web, firma, tickets, etc.) sin perder
              trazabilidad en NetSuite.
            </li>
          </ul>
        </div>
      </section>

      <section
        className={`${styles.section} ${styles.sectionAlt}`}
        id="servicios"
      >
        <div className={styles.container}>
          <h2>Servicios estrella</h2>
          <p className={styles.sectionIntro}>
            Paquetes pensados para empresas que ya tienen NetSuite y quieren
            extraerle valor comercial sin proyectos interminables.
          </p>
          <div className={styles.grid2}>
            <article className={styles.card}>
              <h3>CRM y ventas alineados al negocio</h3>
              <p>
                Roles, formularios, pipelines, cotizaciones y aprobaciones
                acordes a su ciclo de venta real — no al manual genérico.
              </p>
            </article>
            <article className={styles.card}>
              <h3>Datos confiables y gobierno ligero</h3>
              <p>
                Reglas de duplicados, catálogos, segmentación de clientes y
                estándares para que reportes y forecast sean defendibles frente
                a dirección.
              </p>
            </article>
            <article className={styles.card}>
              <h3>Integraciones que no rompen el core</h3>
              <p>
                Conexión con herramientas de captación, firma electrónica,
                soporte, facturación o BI, manteniendo NetSuite como fuente de
                verdad.
              </p>
            </article>
            <article className={styles.card}>
              <h3>Capacitación y adopción medible</h3>
              <p>
                Programas por rol (ventas, servicio, back-office), material en
                español y seguimiento para que el cambio se use en la semana uno.
              </p>
            </article>
            <article className={styles.card}>
              <h3>Soporte evolutivo y health check</h3>
              <p>
                Revisiones periódicas, backlog priorizado con su equipo y
                mejoras incrementales sin parar la operación.
              </p>
            </article>
            <article className={styles.card}>
              <h3>Reordenamiento post-implementación</h3>
              <p>
                Cuando la primera puesta en marcha quedó corta o el negocio
                cambió: re-mapeo de procesos y ajuste fino sin arrancar de cero.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <h2>Cómo trabajamos</h2>
          <p className={styles.sectionIntro}>
            Transparencia en alcance, entregables claros y conversación con quien
            opera el sistema.
          </p>
          <div className={styles.steps}>
            <div className={styles.step}>
              <strong>1. Diagnóstico express</strong>
              <span>
                Sesión con su equipo: dónde duele hoy el CRM y qué resultado
                buscan en 30–90 días.
              </span>
            </div>
            <div className={styles.step}>
              <strong>2. Propuesta priorizada</strong>
              <span>
                Plan por fases con esfuerzo, riesgos y quick wins — sin humo.
              </span>
            </div>
            <div className={styles.step}>
              <strong>3. Ejecución y transferencia</strong>
              <span>
                Implementamos, documentamos y dejamos a su gente autónoma con
                nuestro acompañamiento.
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className={styles.container}>
          <h2>Por qué At-Once en NetSuite</h2>
          <div className={styles.compare}>
            <div className={`${styles.compareBox} ${styles.bad}`}>
              <h3>Lo que suele fallar</h3>
              <ul>
                <li>Consultoras que desaparecen tras el go-live.</li>
                <li>Configuración “estándar” que no calza con su canal o industria.</li>
                <li>Proyectos gigantes sin dueño interno claro.</li>
                <li>Integraciones frágiles sin documentación ni soporte.</li>
              </ul>
            </div>
            <div className={`${styles.compareBox} ${styles.good}`}>
              <h3>Cómo lo hacemos nosotros</h3>
              <ul>
                <li>Enfoque en procesos comerciales y adopción, no solo en pantallas.</li>
                <li>Iteración por entregables: valor visible en semanas.</li>
                <li>Comunicación directa con quien usa NetSuite a diario.</li>
                <li>Capacitación y handover explícitos en cada fase.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.ctaBand} id="contacto">
        <h2>¿NetSuite es su core CRM y siente que puede dar más?</h2>
        <p>
          Escríbanos. En una primera conversación definimos si somos encaje y
          qué haría falta para el siguiente paso.
        </p>
        <a className={styles.btnPrimary} href={mailto}>
          Escribir a {contactEmail}
        </a>
      </section>

      <section className={styles.contact}>
        <div className={styles.container}>
          <p>
            También puede volver al sitio corporativo o combinar esta oferta con
            otros servicios At-Once según su maturidad digital.
          </p>
          <Link href="/" className={styles.btnGhost}>
            Ir al inicio
          </Link>
        </div>
      </section>

      <footer className={styles.footer}>
        <p>
          © {new Date().getFullYear()} At-Once ·{" "}
          <a href={mailto}>{contactEmail}</a>
        </p>
        <p className={styles.legal}>
          NetSuite y Oracle son marcas de Oracle Corporation. At-Once no es
          partner oficial de Oracle ni está afiliada ni avalada por Oracle.
        </p>
      </footer>
    </div>
  );
}
