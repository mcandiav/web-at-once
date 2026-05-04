# Web At-once - Arquitectura

## Bitácora de cambios

| Fecha | Versión | Cambio realizado | Motivo | Impacto | Sección afectada |
|---|---|---|---|---|---|
| 2026-05-04 | V1.2 | Se incorpora una especificación funcional y visual para que el sitio replique la landing de referencia `https://labs.muze.cl/at-once/`. | El despliegue inicial ya levanta, pero todavía no refleja la experiencia, estructura ni contenido de la landing objetivo. | El rol Programador queda instruido para reconstruir el sitio como landing comercial completa, no como placeholder corporativo mínimo. | Nueva sección 9 / Alcance visual y funcional |
| 2026-04-03 | V1.1 | Dominio público del sitio: **web.at-once.cl** (HTTPS). URL canónica reflejada en app (`lib/site.ts`) y build Docker (`NEXT_PUBLIC_SITE_URL`). | Fijar publicación y metadatos SEO/Open Graph. | EasyPanel / Cloudflare deben servir ese host; variables de entorno alineadas. | `read.md`, layout, Dockerfile |
| 2026-04-03 | V1.0 | Se define la arquitectura inicial de Web At-once como sitio corporativo multipágina en Next.js, desplegado por Docker en EasyPanel y publicado detrás de Cloudflare proxy. | Alinear el nuevo sitio con la infraestructura vigente y establecer una base técnica clara desde el inicio. | Queda aprobado el stack base, estrategia de despliegue, patrón de publicación y criterio de puertos. | Todo el documento |

---

## 1. Problema u objetivo actual

Levantar el sitio web corporativo multipágina de **At-Once** como un proyecto independiente, desplegable en **EasyPanel**, versionado en **GitHub** y publicado detrás de **Cloudflare** en modo proxy.

El despliegue ya debe servir una experiencia equivalente a la landing de referencia pública `https://labs.muze.cl/at-once/`, no una portada mínima o placeholder.

---

## 2. Lo que está confirmado

- El rol de este hilo es **Arquitecto**.
- El proyecto se llamará **Web At-once**.
- El sitio será **multipágina**, pero la prioridad inmediata es la landing principal.
- El framework aprobado es **Next.js**.
- El repositorio se crea **desde cero**.
- El despliegue será en **EasyPanel**.
- La estrategia elegida es **Ruta A**: `GitHub -> EasyPanel`.
- El perímetro de publicación será **Cloudflare en modo proxy**.
- El contenido se gestionará en **otro proyecto**, separado del proyecto técnico del sitio.
- **Dominio del sitio:** **web.at-once.cl** (subdominio, tráfico HTTPS vía Cloudflare proxy según despliegue).
- La landing objetivo de esta etapa es la experiencia pública de referencia `labs.muze.cl/at-once`.

---

## 3. Lo que falta validar

- Política de caché en Cloudflare.
- Estructura exacta del proyecto de contenido y mecanismo de integración.
- Estrategia de build final:
  - Next.js servido por runtime Node,
  - o export estático servido por web server.
- Reglas de observabilidad, backup y rollback específicas del servicio en EasyPanel.
- Si la versión final debe copiar literalmente textos/branding de la referencia o si se adaptará con redacción propia aprobada por Miguel.
- Destino funcional del formulario. Por ahora debe quedar como componente visual sin integración obligatoria.

---

## 4. Definición arquitectónica propuesta

### 4.1 Stack aprobado

- **Framework:** Next.js
- **Tipo de sitio:** corporativo multipágina con landing principal prioritaria
- **Repositorio:** GitHub
- **Despliegue:** EasyPanel
- **Empaquetado:** Docker
- **Perímetro:** Cloudflare proxy

### 4.2 Principios arquitectónicos

- El sitio debe mantenerse independiente de otros servicios del ecosistema.
- La infraestructura de publicación debe ser simple, reproducible y portable.
- El proyecto técnico del sitio y el proyecto de contenido deben permanecer desacoplados.
- La V1 no incorpora backend de negocio propio.
- Se prioriza SEO, mantenibilidad y facilidad de despliegue.
- La home no debe quedar como placeholder: debe implementar la landing comercial completa.

### 4.3 Flujo de despliegue

1. Desarrollo y versionado en GitHub.
2. EasyPanel toma el repositorio y ejecuta el build.
3. El proyecto se empaqueta y ejecuta como contenedor Docker.
4. Cloudflare publica el servicio en modo proxy.

### 4.4 Puertos

Criterio aprobado para este servicio:

- **No se adopta puerto 90 como estándar**.
- A nivel público, el servicio debe mantenerse en el patrón normal de publicación web: **80/443**.
- A nivel interno de contenedor:
  - En este proyecto el contenedor escucha en **80** por dentro; Traefik / EasyPanel enrutan a ese puerto.

Decisión vigente:

- **80/443 en publicación externa** (Traefik);
- **puerto interno del contenedor: 80**, alineado con el enrutado del panel (sin depender de `.env` en el repo: `PORT` va en variables del servicio o en el `Dockerfile`).

### 4.5 Integración con infraestructura existente

Web At-once se desplegará como servicio de **EasyPanel**, dentro del entorno que Miguel determine para SB, sin mezclar su responsabilidad con:

- Traefik,
- n8n,
- OpenProject,
- Nextcloud,
- servicios de base de datos,
- infraestructura productiva documentada en `infra-prod.md`.

Su rol es exclusivamente el de **sitio corporativo web**.

---

## 5. Impacto

### 5.1 NetSuite

Sin impacto directo.

La landing habla de NetSuite como propuesta comercial, pero no debe conectarse a NetSuite en esta etapa.

### 5.2 Configuración

- Servicio ya creado en EasyPanel.
- Vinculación al repositorio GitHub.
- Configuración de dominio y publicación detrás de Cloudflare.
- Definición posterior de variables de entorno si hicieran falta.

### 5.3 Desarrollo

- Reemplazar la portada mínima actual por una landing completa.
- Implementar estructura visual, secciones, navegación ancla, CTA y contenido comercial.
- Mantener Dockerfile y despliegue actual mientras no haya una razón técnica para cambiarlos.

### 5.4 Operación

- Despliegue repetible desde Git.
- Rollback por commit o release.
- Publicación web estándar detrás de Cloudflare.

---

## 6. Siguiente acción

### Arquitecto

Mantener vigente esta definición y usarla como fuente oficial del proyecto.

### Programador

Implementar la landing principal según la especificación de la sección 9.

### Configurador

Validar publicación en EasyPanel y Cloudflare después del commit del Programador.

---

## 7. Decisiones descartadas

- Mezclar **Next.js** con **Vue** en el mismo proyecto.
- Usar **puerto 90** como estándar de publicación del sitio.
- Acoplar el contenido editorial al mismo proyecto técnico desde la V1.
- Tratar este servicio como backend de negocio o servicio compartido de infraestructura.
- Mantener una home mínima con solo logo y enlace a `/netsuite` como versión publicada final.

---

## 8. Fuente de verdad documental

El archivo `Web At-once/read.md` es la fuente oficial de arquitectura vigente para este proyecto.

La documentación de infraestructura SB se actualizará cuando Miguel confirme el despliegue operativo. `infra-prod.md` queda reservado a infraestructura de producción y no aplica a este despliegue SB.

---

## 9. Especificación para reconstruir la landing de referencia

### 9.1 Objetivo de implementación

El Programador debe transformar el sitio actual en una landing comercial completa equivalente a la referencia pública:

- URL de referencia: `https://labs.muze.cl/at-once/`
- URL objetivo del proyecto: `https://web.at-once.cl`

La implementación debe capturar estructura, jerarquía visual, narrativa, secciones, CTA, cards y experiencia general de la referencia.

No basta con mostrar el logo o una portada simple.

### 9.2 Ruta principal

La landing debe vivir en la ruta principal:

```text
/
```

La ruta `/netsuite` puede mantenerse solo si aporta valor, pero la experiencia principal de venta debe estar en la home.

### 9.3 Navegación superior

Debe existir navegación sticky o claramente visible con enlaces ancla a secciones internas.

Items mínimos:

- Diagnóstico
- Casos de Uso
- Proceso
- Para quién es
- Solicita tu evaluación

El CTA principal debe destacar visualmente frente a los enlaces normales.

### 9.4 Hero principal

Debe incluir:

- Eyebrow o etiqueta: `Diagnóstico IA + NetSuite`
- Título principal: `Optimiza tu operación con IA conectada a NetSuite`
- Bajada principal orientada a empresas productivas que usan NetSuite.
- Segunda bajada sobre brecha entre ERP y operación real.
- CTA primario hacia evaluación.
- CTA secundario hacia proceso o explicación.
- Línea de confianza: `Diagnóstico en 2-3 semanas • USD 4.900 • Remoto o híbrido`
- Panel visual lateral o inferior con conceptos:
  - Quick Wins
  - Diagnóstico IA
  - NetSuite Operations
- Métricas destacadas:
  - 10 áreas analizadas
  - 100% remote friendly
  - USD 4.900 valor diagnóstico
  - 2-3 semanas
- Mini flujo de tres pasos:
  1. Evaluamos tu operación actual
  2. Identificamos oportunidades de IA
  3. Entregamos roadmap ejecutable

### 9.5 Sección problema

Debe explicar que muchas empresas usan NetSuite, pero parte de la operación vive fuera del sistema.

Cards mínimas:

- Procesos críticos en Excel
- Coordinación por reuniones
- Reportes poco accionables
- Decisiones por intuición

### 9.6 Sección diagnóstico

Debe presentar las 10 áreas analizadas.

Áreas:

1. Costos y márgenes
2. Producción
3. Inventario
4. Trazabilidad
5. Alertas automáticas
6. Integraciones
7. Automatización
8. Reportabilidad
9. Operación real vs ERP
10. Priorización de oportunidades

### 9.7 Entregables del diagnóstico

Debe incluir una sección `Lo que recibes` con cards para:

- Problemas detectados
- Brechas identificadas
- Oportunidades de IA
- Priorización
- Quick wins
- Roadmap inicial

### 9.8 Casos de uso / oportunidades

Debe incluir una sección `Oportunidades que podemos identificar`.

Cards mínimas:

- Tiempos reales de producción
- Comparación estimada vs real
- Alertas de margen
- Reportes editables
- Trazabilidad histórica
- Inventario añejo
- Resúmenes automáticos
- Patrones de mejora
- Cruce de datos

### 9.9 Proceso

Debe implementar un proceso de 5 pasos:

1. Solicitud
2. Revisión
3. Reunión inicial
4. Análisis
5. Informe final

Debe verse como timeline, cards numeradas o bloque secuencial claro.

### 9.10 Perfil ideal

Debe incluir la sección `¿Es para tu empresa?`.

Bloque `Para empresas que...`:

- Utilizan NetSuite actualmente o están en proceso de implementación.
- Tienen operación productiva, logística, industrial, bodega o inventario.
- Manejan órdenes de trabajo, órdenes de venta, materiales o planificación.
- Usan Excel para complementar procesos críticos.
- Necesitan mejorar trazabilidad, costos, tiempos, márgenes o reportabilidad.
- Tienen gerencia involucrada en la mejora operacional.
- Buscan aplicar IA de forma práctica.

Bloque `Funciona mejor cuando...`:

- Hay madurez operacional.
- Existe disposición a revisar procesos.
- Se busca aplicar IA, no solo explorarla.
- Hay gerencia comprometida.

Debe incluir métricas de confianza:

- 30+ años de experiencia
- 100% foco operacional
- NetSuite expertise

### 9.11 Experiencia

Debe incluir una sección sobre experiencia:

- Liderado por ingenieros con más de 30 años de experiencia en procesos apoyados en TI.
- Enfoque desde operación, procesos, gestión, datos y necesidades reales de empresas productivas.
- Cards:
  - Experiencia operacional
  - IA aplicada
  - NetSuite integrado

### 9.12 Formulario visual

El formulario debe estar presente visualmente, aunque por ahora no tenga integración funcional.

Campos mínimos visibles:

- Nombre y apellido
- Cargo
- Empresa
- Correo corporativo
- Teléfono / WhatsApp
- Uso actual de NetSuite
- Tipo de operación
- Procesos a optimizar
- Uso de Excel
- Principal problema a resolver
- Participantes sugeridos en reunión
- Fecha estimada de inicio

Criterio técnico vigente:

- No conectar todavía a backend, email, CRM, webhook, NetSuite ni n8n.
- Puede mostrar mensaje local de éxito simulado.
- Debe ser fácil conectar posteriormente a un endpoint mediante variable de entorno.

### 9.13 CTA final y footer

Debe existir una sección final de conversión con:

- Título orientado a descubrir dónde la IA puede generar impacto real.
- Precio `USD 4.900`.
- Duración `2-3 semanas`.
- Modalidad remota o híbrida.
- CTA hacia evaluación.

Footer mínimo:

- Texto corto de propuesta At-Once.
- Navegación interna.
- Contacto `contacto@at-once.cl`.
- Copyright.

### 9.14 Criterios visuales

La landing debe sentirse moderna, ejecutiva y B2B.

Lineamientos:

- Fondo claro con secciones alternadas.
- Cards con bordes suaves, sombras sutiles o separación visual clara.
- Uso de grillas responsive.
- Títulos grandes y jerarquía tipográfica marcada.
- CTA principal destacado.
- Colores compatibles con la identidad At-Once.
- Buen espaciado vertical.
- Mobile first / responsive.

### 9.15 Estructura técnica sugerida

Componentes sugeridos:

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

- `app/page.tsx` debe orquestar secciones.
- El contenido editable debe vivir preferentemente en `lib/landing-content.ts`.
- Los componentes deben ser presentacionales y simples.
- No introducir backend en esta etapa.

### 9.16 Criterios de aceptación

La tarea del Programador se considerará terminada cuando:

- La home `/` se parezca estructuralmente a la landing de referencia.
- Todas las secciones principales estén presentes.
- La navegación superior funcione con anclas internas.
- Los CTA lleven al formulario/evaluación dentro de la misma página.
- El sitio compile con `npm run build`.
- La imagen Docker siga levantando en puerto interno `80`.
- EasyPanel pueda desplegar sin cambios manuales adicionales.
- El sitio sea responsive en móvil y escritorio.
- El formulario esté visible, pero sin integración real.

### 9.17 Restricciones

- No modificar la arquitectura Docker si no es necesario.
- No conectar el formulario sin autorización explícita.
- No registrar este despliegue en `infra-prod.md`.
- No mezclar este sitio con n8n u otros servicios.
- No dejar textos genéricos de placeholder en la home.
