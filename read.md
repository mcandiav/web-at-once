# Web At-once - Arquitectura

## Bitácora de cambios

| Fecha | Versión | Cambio realizado | Motivo | Impacto | Sección afectada |
|---|---|---|---|---|---|
| 2026-05-04 | V1.3 | Se corrige la definición: `https://labs.muze.cl/at-once/` no es inspiración ni referencia genérica; es el modelo que debe copiarse/reconstruirse visual y estructuralmente. | La implementación del Programador levantó, pero no quedó igual a la página objetivo. | El trabajo de desarrollo debe rehacerse hasta coincidir con la landing de Labs en layout, secciones, jerarquía, navegación, formularios, CTAs y experiencia visual. | Sección 9 / Criterios de aceptación |
| 2026-05-04 | V1.2 | Se incorpora una especificación funcional y visual para la landing de referencia `https://labs.muze.cl/at-once/`. | El despliegue inicial ya levanta, pero todavía no refleja la experiencia, estructura ni contenido de la landing objetivo. | El rol Programador queda instruido para reconstruir el sitio como landing comercial completa, no como placeholder corporativo mínimo. | Nueva sección 9 / Alcance visual y funcional |
| 2026-04-03 | V1.1 | Dominio público del sitio: **web.at-once.cl** (HTTPS). URL canónica reflejada en app (`lib/site.ts`) y build Docker (`NEXT_PUBLIC_SITE_URL`). | Fijar publicación y metadatos SEO/Open Graph. | EasyPanel / Cloudflare deben servir ese host; variables de entorno alineadas. | `read.md`, layout, Dockerfile |
| 2026-04-03 | V1.0 | Se define la arquitectura inicial de Web At-once como sitio corporativo multipágina en Next.js, desplegado por Docker en EasyPanel y publicado detrás de Cloudflare proxy. | Alinear el nuevo sitio con la infraestructura vigente y establecer una base técnica clara desde el inicio. | Queda aprobado el stack base, estrategia de despliegue, patrón de puertos y responsabilidad del servicio. | Todo el documento |

---

## 1. Problema u objetivo actual

Levantar el sitio web corporativo de **At-Once** como un proyecto independiente, desplegable en **EasyPanel**, versionado en **GitHub** y publicado detrás de **Cloudflare**.

El sitio ya levantó técnicamente, pero la implementación actual no cumple el objetivo visual: debe verse como la landing de Labs.

Sitio objetivo que se debe copiar/reconstruir:

```text
https://labs.muze.cl/at-once/
```

Sitio destino:

```text
https://web.at-once.cl
```

Definición corregida:

> `labs.muze.cl/at-once/` es el modelo visual y estructural a replicar. No es solo una inspiración.

---

## 2. Lo que está confirmado

- El proyecto se llama **Web At-once**.
- El sitio está desplegado como servicio en **EasyPanel**.
- El framework aprobado es **Next.js**.
- El empaquetado aprobado es **Docker**.
- El contenedor escucha internamente en puerto **80**.
- El dominio objetivo es **web.at-once.cl**.
- El sitio Labs `https://labs.muze.cl/at-once/` es el patrón exacto que debe seguir la implementación.
- La implementación actual del Programador no queda aceptada si visualmente no coincide con Labs.

---

## 3. Lo que falta validar

- Si Miguel autoriza copiar literalmente todos los textos finales de Labs o si el Programador debe dejarlos parametrizados para ajuste posterior.
- Si hay assets visuales específicos de Labs que deben reproducirse con CSS o incorporarse como imágenes.
- Validación visual final lado a lado entre:
  - `https://labs.muze.cl/at-once/`
  - `https://web.at-once.cl`
- Destino funcional del formulario. Por ahora solo debe existir visualmente.

---

## 4. Definición arquitectónica vigente

### 4.1 Stack aprobado

- **Framework:** Next.js.
- **Tipo de sitio:** landing comercial principal.
- **Repositorio:** GitHub.
- **Despliegue:** EasyPanel.
- **Empaquetado:** Docker.
- **Perímetro:** Cloudflare / EasyPanel según configuración del ambiente.

### 4.2 Principio central de esta etapa

La prioridad no es crear una landing parecida ni una reinterpretación visual.

La prioridad es reconstruir la landing Labs lo más fielmente posible:

- misma estructura narrativa,
- mismas secciones,
- mismo orden,
- misma jerarquía visual,
- misma intención comercial,
- misma disposición de bloques,
- misma navegación ancla,
- mismos CTAs,
- mismo formulario visual,
- misma experiencia responsive.

### 4.3 Restricción de arquitectura

No modificar Docker, puerto interno ni despliegue si el problema es visual/front-end.

El problema actual no está en infraestructura: el sitio levanta. El problema está en implementación de UI/contenido.

---

## 5. Impacto

### 5.1 NetSuite

Sin impacto directo.

La landing menciona NetSuite comercialmente, pero no debe conectarse a NetSuite en esta etapa.

### 5.2 Configuración

Sin cambios requeridos por ahora en EasyPanel si el sitio ya levanta.

### 5.3 Desarrollo

El Programador debe rehacer la home `/` para que coincida con la landing Labs.

No se acepta:

- home mínima,
- portada con solo logo,
- landing genérica,
- cambio de estilo propio,
- reinterpretación parcial,
- omitir secciones visibles de Labs,
- mover el contenido principal a `/netsuite` dejando `/` incompleto.

### 5.4 Operación

Después del nuevo commit, EasyPanel debe redeployar el servicio y Miguel debe validar visualmente contra Labs.

---

## 6. Siguiente acción por rol

### Arquitecto

Mantener esta definición como fuente oficial y rechazar implementaciones que no coincidan visualmente con Labs.

### Programador

Rehacer la implementación de la home `/` copiando la landing Labs como modelo exacto de estructura, layout y experiencia.

### Configurador

Solo validar despliegue posterior. No debe cambiar infraestructura para resolver un problema de UI.

### Miguel

Validar visualmente la página final lado a lado contra Labs.

---

## 7. Decisiones descartadas

- Usar `labs.muze.cl/at-once/` solo como inspiración.
- Crear una landing alternativa con estilo propio.
- Mantener la home actual si no coincide con Labs.
- Mezclar Next.js con Vue en este repositorio.
- Cambiar Docker o puertos para resolver un problema de diseño.
- Conectar formulario antes de tener aprobada la UI.
- Registrar este despliegue en `infra-prod.md` mientras siga en SB o etapa preliminar.

---

## 8. Fuente de verdad documental

Este archivo `read.md` es la fuente oficial de arquitectura vigente para este proyecto.

La documentación de infraestructura SB se actualizará solo cuando Miguel confirme el despliegue operativo final.

`infra-prod.md` queda reservado a infraestructura de producción y no aplica a este despliegue SB.

---

## 9. Especificación obligatoria para copiar la landing Labs

### 9.1 Alcance corregido

El Programador debe copiar/reconstruir la landing de Labs en el sitio `web.at-once.cl`.

Referencia obligatoria:

```text
https://labs.muze.cl/at-once/
```

Esta referencia debe usarse como patrón de comparación visual. La implementación se considera incompleta si al abrir ambas páginas lado a lado se perciben diferencias importantes de estructura, proporciones, orden, jerarquía, colores, cards, CTAs o formulario.

### 9.2 Ruta principal

La landing completa debe vivir en:

```text
/
```

La home no puede ser un splash, placeholder, logo simple ni página de acceso hacia otra ruta.

### 9.3 Estructura que debe replicarse

La landing debe mantener el mismo flujo visible de Labs:

1. Header / navegación superior.
2. Hero principal.
3. Métricas y bloque visual del diagnóstico.
4. Sección problema.
5. Sección diagnóstico de 10 áreas.
6. Sección entregables.
7. Sección oportunidades / casos de uso.
8. Sección proceso.
9. Sección perfil ideal.
10. Sección experiencia.
11. Sección evaluación / formulario.
12. CTA final.
13. Footer.

No se deben omitir secciones.

### 9.4 Navegación superior

Debe replicar el comportamiento y contenido de Labs:

- Diagnóstico.
- Casos de Uso.
- Proceso.
- Para quién es.
- Solicita tu evaluación.

El CTA superior debe verse como CTA, no como link común.

### 9.5 Hero

Debe reconstruirse con la misma intención visual de Labs:

- etiqueta superior `Diagnóstico IA + NetSuite`,
- título grande sobre optimización operacional con IA conectada a NetSuite,
- dos párrafos de bajada,
- CTA primario hacia evaluación,
- CTA secundario hacia explicación del proceso,
- línea comercial con duración, precio y modalidad,
- bloque visual de Quick Wins / Diagnóstico IA / NetSuite Operations,
- métricas: 10 áreas, 100% remote friendly, USD 4.900, 2-3 semanas,
- mini proceso de tres pasos.

### 9.6 Secciones de contenido

Deben replicarse las secciones de Labs en orden, con cards y grillas equivalentes:

- El Problema.
- El Diagnóstico.
- Lo que recibes.
- Ejemplos prácticos.
- El proceso.
- Perfil ideal.
- Nuestra experiencia.
- Evaluación.
- Diagnóstico especializado / CTA final.

### 9.7 Formulario

El formulario debe verse como el de Labs, aunque no se conecte todavía.

Debe incluir visualmente:

- Nombre y apellido.
- Cargo.
- Empresa.
- Correo corporativo.
- Teléfono / WhatsApp.
- Uso actual de NetSuite.
- Tipo de operación.
- Procesos a optimizar.
- Uso de Excel.
- Principal problema a resolver.
- Participantes sugeridos.
- Fecha estimada de inicio.
- Botón `Solicitar evaluación IA + NetSuite`.
- Mensaje de seguridad/respuesta en 48 horas.

Por ahora el submit puede ser simulado en frontend. No conectar backend.

### 9.8 Criterios visuales obligatorios

La implementación debe aproximarse a Labs en:

- layout general,
- ancho máximo de contenido,
- separación vertical entre secciones,
- grillas,
- cards,
- radios de borde,
- sombras o elevación,
- jerarquía tipográfica,
- tamaño de títulos,
- contraste de CTAs,
- fondos alternados,
- comportamiento responsive,
- footer.

No basta que el contenido esté: debe verse como la página objetivo.

### 9.9 Estructura técnica sugerida

Se recomienda organizar el código así:

```text
app/page.tsx
app/globals.css
components/Header.tsx
components/HeroSection.tsx
components/ProblemSection.tsx
components/DiagnosisSection.tsx
components/DeliverablesSection.tsx
components/UseCasesSection.tsx
components/ProcessSection.tsx
components/IdealProfileSection.tsx
components/ExperienceSection.tsx
components/EvaluationFormSection.tsx
components/FinalCtaSection.tsx
components/Footer.tsx
lib/landing-content.ts
```

Criterio:

- `app/page.tsx` solo debe orquestar secciones.
- `lib/landing-content.ts` debe concentrar textos, listas, cards y opciones.
- Los componentes deben encargarse de layout/presentación.
- No introducir backend todavía.

### 9.10 Criterios de aceptación

La tarea del Programador solo se acepta cuando:

- `https://web.at-once.cl` abre la landing completa en `/`.
- Al compararla lado a lado con `https://labs.muze.cl/at-once/`, la estructura y experiencia se ven prácticamente iguales.
- Todas las secciones de Labs están presentes.
- La navegación ancla funciona.
- Los CTAs llevan a evaluación/formulario.
- El formulario está completo visualmente.
- La página es responsive.
- `npm run build` compila.
- Docker sigue levantando en puerto interno `80`.
- EasyPanel redeploya sin cambios manuales extra.

### 9.11 Rechazo explícito de entrega

Debe rechazarse la entrega si ocurre cualquiera de estos casos:

- La home muestra solo logo, texto corto o link a otra página.
- La página tiene secciones distintas o en otro orden sin aprobación.
- Se omite el formulario.
- Se omiten métricas del hero.
- Se omite el proceso de 5 pasos.
- Se omite la sección de perfil ideal.
- Se omite la experiencia de 30+ años.
- El diseño parece una landing nueva no relacionada con Labs.
- El Programador cambia el stack o la infraestructura para resolver un problema de frontend.
