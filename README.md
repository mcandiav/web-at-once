# Web At-once

## Bitácora de cambios

| Fecha | Versión | Cambio realizado | Motivo | Impacto | Sección afectada |
|---|---|---|---|---|---|
| 2026-05-04 | V2.1 | Se agrega especificación de efectos visuales por bloque basada en inspección directa de `https://labs.muze.cl/at-once/`. | El Programador necesita saber exactamente qué efecto o animación debe tener cada sección para replicar la experiencia visual de Labs. | Cada bloque del punto 9 ahora incluye un párrafo `**Efectos visuales del bloque:**` con instrucciones de animación y comportamiento visual. | Especificación funcional y visual |
| 2026-05-04 | V2.0 | Se consolida la documentación oficial del proyecto en `README.md`. | Evitar doble fuente documental entre `README.md` y `read.md`. | `README.md` pasa a ser la única fuente oficial del proyecto. `read.md` deja de ser documento vigente. | Documento completo |
| 2026-05-04 | V2.0 | Se redefine el sitio como landing de una sola página. | El Programador estaba generando una home inicial y una segunda página de taladro, lo que no corresponde al objetivo. | Toda la experiencia debe vivir en `/`; no debe existir navegación obligatoria hacia otra página para ver el contenido principal. | Arquitectura frontend / Rutas |
| 2026-05-04 | V2.0 | Se incorpora especificación bloque por bloque basada en la landing `https://labs.muze.cl/at-once/`. | El Programador necesita una guía cerrada para implementar sin reinterpretar contenido, estructura ni flujo. | La implementación debe copiar/reconstruir la landing Labs como modelo visual, estructural y narrativo. | Especificación funcional y visual |
| 2026-04-03 | V1.1 | Se definió dominio público `web.at-once.cl` y build Docker con `NEXT_PUBLIC_SITE_URL`. | Fijar publicación y metadatos SEO/Open Graph. | EasyPanel / Cloudflare deben servir ese host; variables de entorno alineadas. | Infraestructura de publicación |
| 2026-04-03 | V1.0 | Se definió arquitectura inicial Next.js + Docker + EasyPanel. | Establecer base técnica reproducible. | Queda aprobado el stack base y patrón de despliegue. | Arquitectura inicial |

---

## 1. Fuente oficial de documentación

Este archivo es la única fuente oficial del proyecto:

```text
Web At-once/README.md
```

No existe otro documento oficial vigente para arquitectura, alcance, programación o criterios de aceptación del proyecto.

El archivo histórico `read.md`, si existe, no debe ser usado por el Programador como fuente de verdad. La información válida está consolidada en este `README.md`.

---

## 2. Problema u objetivo actual

El sitio `web.at-once.cl` debe copiar/reconstruir la landing pública de Labs:

```text
https://labs.muze.cl/at-once/
```

El problema actual es que la implementación del Programador genera una página inicial y luego una segunda página de detalle o taladro. Eso queda descartado.

La solución correcta es una **landing de una sola página**, con todo el contenido principal en la ruta raíz:

```text
/
```

La página debe contener todo el flujo comercial: hero, diagnóstico, problemas, entregables, casos de uso, proceso, perfil ideal, experiencia, formulario, CTA final y footer.

---

## 3. Definición arquitectónica vigente

### 3.1 Tipo de sitio

El proyecto es una landing comercial de una sola página.

No es un sitio multipágina para la V2.

### 3.2 Ruta principal

La única ruta principal aceptada para la landing es:

```text
/
```

### 3.3 Rutas descartadas como experiencia principal

No se acepta que el contenido principal viva en:

```text
/netsuite
```

Tampoco se acepta una home que funcione como portada, splash, índice o paso previo hacia otra página.

Si `/netsuite` existe en el código actual, el Programador debe eliminarla, redirigirla a `/` o dejarla sin uso visible. No debe ser necesaria para navegar la landing.

### 3.4 Stack técnico aprobado

- Framework: Next.js.
- Runtime: Node / Next standalone.
- Empaquetado: Docker.
- Despliegue: EasyPanel.
- Dominio objetivo: `web.at-once.cl`.
- Puerto interno del contenedor: `80`.
- Publicación externa: 80/443 mediante EasyPanel / proxy correspondiente.

### 3.5 Restricción técnica

No modificar Docker, puerto interno, dominio ni despliegue para resolver el problema actual.

El problema actual es de implementación frontend, estructura y contenido, no de infraestructura.

---

## 4. Principio de implementación

La referencia `https://labs.muze.cl/at-once/` no es inspiración ni referencia conceptual.

Es el modelo que se debe copiar/reconstruir en:

```text
https://web.at-once.cl
```

El Programador debe replicar:

- estructura de una sola página,
- orden de secciones,
- narrativa comercial,
- contenido visible,
- navegación por anclas,
- bloques visuales,
- cards,
- métricas,
- formulario,
- CTA final,
- footer,
- jerarquía visual,
- comportamiento responsive.

No se acepta una reinterpretación libre.

---

## 5. Lo que está confirmado

- El proyecto se llama `Web At-once`.
- La landing destino es `web.at-once.cl`.
- La referencia a copiar/reconstruir es `https://labs.muze.cl/at-once/`.
- El sitio debe ser de una sola página.
- Toda la experiencia debe vivir en `/`.
- El formulario debe existir visualmente, pero no debe conectarse todavía a backend, email, CRM, n8n ni NetSuite.
- NetSuite se menciona como parte de la oferta comercial, pero no hay integración técnica en esta etapa.
- El despliegue sigue siendo Next.js + Docker + EasyPanel.

---

## 6. Lo que falta validar

- Si los textos se copiarán literalmente desde Labs o si Miguel aprobará una adaptación editorial final.
- Si se incorporarán assets específicos adicionales o se recreará todo con CSS y componentes.
- Validación visual final lado a lado entre:
  - `https://labs.muze.cl/at-once/`
  - `https://web.at-once.cl`
- Destino real del formulario en una etapa posterior.

---

## 7. Reglas obligatorias para el Programador

El Programador debe cumplir estas reglas:

1. Implementar toda la landing en `/`.
2. No crear una página inicial más una segunda página de taladro.
3. No usar `/netsuite` como destino principal.
4. No dejar una home con logo, texto corto o link hacia otra página.
5. No omitir secciones de Labs.
6. No inventar una landing nueva.
7. No cambiar el stack técnico.
8. No cambiar Docker ni puertos.
9. No conectar el formulario todavía.
10. No usar contenido genérico de relleno.
11. Separar el contenido en una estructura mantenible, idealmente `lib/landing-content.ts`.
12. Validar visualmente contra Labs antes de entregar.

---

## 8. Estructura técnica esperada

Estructura recomendada:

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
components/SubmittedModal.tsx
lib/landing-content.ts
```

Criterios:

- `app/page.tsx` debe orquestar las secciones.
- `lib/landing-content.ts` debe concentrar textos, listas, cards, opciones del formulario y navegación.
- Los componentes deben ser principalmente presentacionales.
- El formulario puede manejar estado local para mostrar un mensaje de éxito simulado.
- No crear API routes nuevas para el formulario en esta etapa.

---

## 9. Especificación bloque por bloque basada en Labs

Esta sección define lo que el Programador debe implementar. El objetivo es que programe directamente, sin reinterpretar la página.

---

### 9.1 Header / navegación superior

**Objetivo:** permitir navegación interna dentro de la misma landing.

**Ubicación:** parte superior de la página, antes del hero.

**Comportamiento esperado:** sticky o visualmente permanente al inicio, con navegación clara y CTA destacado.

**Contenido:**

- Links de navegación interna:
  - `Diagnóstico` → ancla hacia sección diagnóstico.
  - `Casos de Uso` → ancla hacia oportunidades/casos prácticos.
  - `Proceso` → ancla hacia proceso de 5 pasos.
  - `Para quién es` → ancla hacia perfil ideal.
- CTA destacado:
  - `Solicita tu evaluación` → ancla hacia formulario.

**Regla:** todos los links deben apuntar a secciones dentro de `/`. No deben navegar a otra página.

**Efectos visuales del bloque:** El header es `sticky` (posición fija al hacer scroll). Sobre fondo blanco con una sombra sutil (`box-shadow`) que aparece al hacer scroll para separarlo visualmente del contenido. Los links de navegación tienen transición de color suave (`transition: color 180ms ease`) al hacer hover. El botón CTA `Solicita tu evaluación` tiene fondo azul sólido (`#2563EB`) con ligera elevación de sombra al hacer hover (`box-shadow` más pronunciado). En mobile, el menú colapsa a un ícono hamburger con animación de apertura.

---

### 9.2 Hero principal

**Objetivo:** explicar de inmediato la oferta comercial: diagnóstico IA + NetSuite para empresas productivas.

**Layout esperado:** dos columnas o composición equivalente:

- columna izquierda: texto, CTAs y línea comercial;
- columna derecha: panel visual de diagnóstico, métricas y mini flujo.

**Contenido obligatorio:**

- Etiqueta superior:

```text
Diagnóstico IA + NetSuite
```

- Título principal:

```text
Optimiza tu operación con IA conectada a NetSuite
```

- Bajada 1:

```text
Ayudamos a empresas productivas que usan NetSuite a detectar oportunidades reales para reducir trabajo manual, mejorar trazabilidad, proteger márgenes y convertir datos operacionales en decisiones gerenciales.
```

- Bajada 2:

```text
Analizamos la brecha entre tu ERP y la operación real para identificar dónde la IA, automatización e integraciones pueden generar impacto medible.
```

- CTA primario:

```text
Solicitar evaluación IA + NetSuite
```

- CTA secundario:

```text
Ver cómo funciona
```

- Línea comercial bajo los CTAs:

```text
Diagnóstico en 2-3 semanas • USD 4.900 • Remoto o híbrido
```

**Regla visual:** el hero debe ser la sección de mayor impacto visual. No puede verse como una portada mínima.

**Efectos visuales del bloque:** El fondo del hero tiene un patrón de puntos en red tipo "neural network" en azul muy claro (`opacity: 0.06`) sobre blanco, generado con SVG o `radial-gradient`. El título tiene palabras clave en azul (`#2563EB`) y el resto en negro/oscuro, usando `<span>` con color diferenciado (por ejemplo, "IA conectada" resaltado). La etiqueta superior `Diagnóstico IA + NetSuite` es un badge con borde redondeado (`border-radius: 9999px`), borde sutil azul y un punto parpadeante animado con `@keyframes pulse` (escala entre 0.8 y 1.2, `opacity` entre 0.6 y 1, duración 2s infinito). El CTA primario tiene fondo azul sólido con transición de sombra al hover. El CTA secundario es outline/ghost. Ambos CTAs y el párrafo de texto entran con animación `fade-in` + `translateY(20px → 0)` al cargar la página, en cascada con `animation-delay` escalonado (0ms, 100ms, 200ms). La línea comercial bajo los CTAs es texto pequeño en gris con separadores `•`.

---

### 9.3 Panel visual del hero

**Objetivo:** reforzar que la oferta es un diagnóstico operativo estructurado.

**Elementos obligatorios:**

Chips o etiquetas visuales:

```text
Quick Wins
Diagnóstico IA
NetSuite Operations
```

Métricas destacadas:

```text
10 áreas analizadas
100% remote friendly
USD 4.900 valor diagnóstico
2-3 semanas
```

Mini flujo:

1. Evaluamos tu operación actual.
2. Identificamos oportunidades de IA.
3. Entregamos roadmap ejecutable.

**Regla visual:** debe verse como card/panel destacado, no como texto plano.

**Efectos visuales del bloque:** El panel es una card con fondo blanco, borde redondeado (`border-radius: 16px`) y sombra media (`box-shadow: 0 8px 32px rgba(0,0,0,0.10)`). Los chips (`Quick Wins`, `Diagnóstico IA`, `NetSuite Operations`) son badges pill con fondo azul claro (`#EFF6FF`) y texto azul (`#2563EB`), con transición de fondo al hover. Las métricas (`10`, `100%`, `USD 4.900`, `2-3`) muestran el número en tipografía grande y bold, en azul, y el label debajo en gris. Los números de métrica deben animarse al entrar en viewport con un efecto de conteo ascendente (`counter animation` vía `requestAnimationFrame` o librería `CountUp.js`). El mini flujo tiene números grandes (1, 2, 3) en gris claro como marca de agua de fondo, con el texto encima. El panel completo entra con `fade-in` + `translateX(30px → 0)` al cargar la página, con `animation-delay: 300ms`.

---

### 9.4 Sección El Problema

**Objetivo:** mostrar la brecha entre tener NetSuite y operar todavía con procesos fuera del sistema.

**Contenido:**

- Eyebrow:

```text
El Problema
```

- Título:

```text
Tu empresa usa NetSuite, pero parte de la operación sigue fuera del sistema
```

- Bajada:

```text
Muchas empresas cuentan con un ERP robusto, pero sus procesos críticos siguen dependiendo de planillas, reuniones, reportes poco accionables y decisiones basadas más en experiencia que en datos operacionales conectados.
```

**Cards obligatorias:**

1. **Procesos críticos en Excel**  
   Información operativa relevante queda fuera del ERP o se duplica manualmente.

2. **Coordinación por reuniones**  
   Decisiones y seguimiento dependen de reuniones, memoria y coordinación informal.

3. **Reportes poco accionables**  
   Los datos existen, pero no se transforman fácilmente en decisiones de gestión.

4. **Decisiones por intuición**  
   La experiencia pesa más que indicadores conectados y alertas oportunas.

**Regla visual:** cards en grilla, con separación clara, bordes suaves y jerarquía similar a Labs.

**Efectos visuales del bloque:** La sección tiene fondo levemente diferenciado (gris muy claro, `#F8FAFC` o equivalente) para separarse visualmente del hero. El eyebrow `EL PROBLEMA` aparece en texto pequeño uppercase con `letter-spacing` amplio, en azul. Las 4 cards están en grilla de 2×2 (desktop) o 1 columna (mobile). Cada card tiene fondo blanco, borde `1px solid #E2E8F0`, `border-radius: 12px` y sombra sutil. Al hacer hover sobre cada card, se eleva la sombra (`box-shadow` más pronunciado) y aparece un borde izquierdo azul de 3px (`border-left: 3px solid #2563EB`) con transición suave de `200ms`. Toda la sección (eyebrow, título, bajada y las 4 cards) entra con animación `scroll reveal`: `opacity: 0 → 1` + `translateY(24px → 0)` al cruzar el viewport, usando `IntersectionObserver`. Las cards aparecen en cascada con `animation-delay` escalonado de 80ms entre cada una.

---

### 9.5 Sección El Diagnóstico

**Objetivo:** mostrar las áreas analizadas durante el diagnóstico.

**Contenido:**

- Eyebrow:

```text
El Diagnóstico
```

- Título:

```text
10 áreas analizadas a fondo
```

- Bajada:

```text
Evaluamos punto por punto dónde tu operación puede funcionar mejor conectando NetSuite, IA, automatización e integraciones prácticas.
```

**Áreas / cards obligatorias:**

1. **Costos y márgenes**  
   Precisión en cálculo, atribución y seguimiento de costos reales.

2. **Producción**  
   Planificación, ejecución y control de órdenes de trabajo.

3. **Inventario**  
   Materiales inmovilizados, baja rotación y oportunidades de control.

4. **Trazabilidad**  
   Seguimiento de cambios, compromisos, decisiones y datos operacionales.

5. **Alertas automáticas**  
   Notificaciones proactivas para eventos críticos de operación.

6. **Integraciones**  
   Conexión entre NetSuite, IA y herramientas externas.

7. **Automatización**  
   Tareas repetitivas que pueden eliminarse o simplificarse.

8. **Reportabilidad**  
   Transformación de datos en reportes gerenciales útiles.

9. **Operación real vs ERP**  
   Brechas entre el proceso real y el registro formal en NetSuite.

10. **Priorización de oportunidades**  
   Clasificación por impacto, dificultad y quick wins.

**Regla visual:** debe ser una grilla clara de cards. La cifra `10 áreas` debe coincidir con 10 elementos visibles.

**Efectos visuales del bloque:** Fondo blanco. La cifra `10` en el título puede resaltarse en azul. La grilla de 10 cards se organiza en 2 columnas (desktop) o 1 columna (mobile); la última card (item 10) ocupa el ancho de 2 columnas si el total es impar, o bien se mantiene en grilla simétrica. Cada card tiene fondo blanco, borde `1px solid #E2E8F0`, `border-radius: 12px`, ícono o número de área pequeño en la esquina superior izquierda en azul claro. Al hacer hover, la card eleva su `box-shadow` y el borde pasa de gris claro a azul (`border-color: #2563EB`) con transición `200ms ease`. La sección completa entra con `scroll reveal` idéntico al bloque anterior: `opacity + translateY` vía `IntersectionObserver`. Las 10 cards se revelan en grupos de 2 (por fila), con `animation-delay` escalonado.

---

### 9.6 Sección Lo que recibes

**Objetivo:** convertir el diagnóstico en entregables concretos.

**Contenido:**

- Eyebrow:

```text
Lo que recibes
```

- Título:

```text
Entregables concretos del diagnóstico
```

**Cards obligatorias:**

1. **Problemas detectados**  
   Principales puntos críticos de operación, datos y gestión.

2. **Brechas identificadas**  
   Diferencias entre lo que registra NetSuite y lo que realmente ocurre.

3. **Oportunidades de IA**  
   Casos donde IA puede reducir carga manual o mejorar decisiones.

4. **Priorización**  
   Ordenamiento por impacto, dificultad, urgencia y valor operacional.

5. **Quick wins**  
   Mejoras rápidas de alto impacto que pueden abordarse primero.

6. **Roadmap inicial**  
   Ruta práctica para implementar las oportunidades priorizadas.

**Regla visual:** bloque de cards breves. No convertirlo en texto largo.

**Efectos visuales del bloque:** Fondo gris claro (`#F8FAFC`) para diferenciar visualmente de la sección anterior. Las 6 cards están en grilla de 3 columnas (desktop) o 2 columnas (tablet) o 1 columna (mobile). Cada card tiene fondo blanco, `border-radius: 12px`, sombra ligera. El título de cada entregable en bold negro y el texto descriptivo en gris muted. Al hacer hover, ligero `scale(1.02)` más elevación de sombra (`transform + box-shadow`) con transición `200ms ease`. La sección entra con `scroll reveal` (`opacity + translateY`) vía `IntersectionObserver`, con las 6 cards apareciendo en cascada con `animation-delay` de 60ms entre cada una.

---

### 9.7 Sección Ejemplos prácticos / Casos de uso

**Objetivo:** mostrar oportunidades concretas donde IA, automatización e integración aportan valor.

**Contenido:**

- Eyebrow:

```text
Ejemplos prácticos
```

- Título:

```text
Oportunidades que podemos identificar
```

- Bajada:

```text
Detectamos procesos donde IA puede reducir trabajo manual, cruzar información, generar alertas y transformar datos operacionales en herramientas reales de gestión.
```

**Cards obligatorias:**

1. **Tiempos reales de producción**  
   Medición conectada a órdenes de trabajo y ejecución real.

2. **Comparación estimada vs real**  
   Contrastar tiempos o costos presupuestados con resultados reales.

3. **Alertas de margen**  
   Avisos cuando una orden, venta o proyecto empieza a perder rentabilidad.

4. **Reportes editables**  
   Reducir recarga manual de información en reportes periódicos.

5. **Trazabilidad histórica**  
   Registro de cambios en fechas, compromisos, observaciones y decisiones.

6. **Inventario añejo**  
   Identificación de materiales sin movimiento o baja rotación.

7. **Resúmenes automáticos**  
   Reportes gerenciales generados desde datos cruzados.

8. **Patrones de mejora**  
   Identificación de piezas, materiales, clientes o procesos repetitivos.

9. **Cruce de datos**  
   Relación entre producción, inventario, ventas y costos.

**Regla visual:** grilla de oportunidades con cards homogéneas y fácil lectura.

**Efectos visuales del bloque:** Fondo blanco. Grilla de 3 columnas (desktop), 2 columnas (tablet), 1 columna (mobile). Cada card tiene fondo blanco, borde `1px solid #E2E8F0`, `border-radius: 12px`, título en bold negro y descripción en gris. Al hacer hover sobre la card, el borde cambia a azul (`border-color: #2563EB`) y aparece un ligero `box-shadow` azul difuso. La sección entra con `scroll reveal` (`opacity + translateY`) vía `IntersectionObserver`. Las 9 cards se revelan en cascada con `animation-delay` de 60ms entre cada una, de izquierda a derecha, fila por fila.

---

### 9.8 Sección El proceso

**Objetivo:** explicar cómo se ejecuta el diagnóstico.

**Contenido:**

- Eyebrow:

```text
El proceso
```

- Título:

```text
Cómo funciona el diagnóstico
```

- Bajada:

```text
Un proceso estructurado de 5 pasos para identificar oportunidades concretas con IA aplicada a NetSuite y la operación real de tu empresa.
```

**Pasos obligatorios:**

1. **Solicitud**  
   La empresa completa el formulario con información básica y principales dolores operacionales.

2. **Revisión**  
   Se analiza si la empresa cumple condiciones para que el diagnóstico tenga valor.

3. **Reunión inicial**  
   Se entienden procesos críticos, áreas involucradas, sistemas actuales y oportunidades.

4. **Análisis**  
   Se revisan procesos, reportes, planillas, flujos y brechas entre NetSuite y operación.

5. **Informe final**  
   Se entrega una lista priorizada de oportunidades, quick wins y roadmap de implementación.

**Regla visual:** timeline, stepper o cards numeradas. Los números 1 a 5 deben verse claramente.

**Efectos visuales del bloque:** Fondo gris claro (`#F8FAFC`). Cada paso se presenta como una card vertical o fila con el número grande como marca de agua de fondo (tipografía grande, gris muy claro, `opacity: 0.15`, posicionado detrás del contenido con `z-index`). Encima de ese número de fondo, aparece un badge azul pequeño con el número del paso (`1`, `2`, ..., `5`). Al hacer hover sobre cada paso, la sombra se eleva y el badge azul se ilumina levemente. Los 5 pasos entran con `scroll reveal` escalonado: cada paso aparece con `opacity + translateY` con un `animation-delay` de 100ms adicional por paso (0ms, 100ms, 200ms, 300ms, 400ms), dando una sensación de secuencia progresiva al hacer scroll.

---

### 9.9 Sección Perfil ideal

**Objetivo:** filtrar empresas y explicar para quién aplica el diagnóstico.

**Contenido:**

- Eyebrow:

```text
Perfil ideal
```

- Título:

```text
¿Es para tu empresa?
```

**Bloque Para empresas que:**

- Utilizan NetSuite actualmente o están en proceso de implementación.
- Tienen operación productiva, logística, industrial, bodega o inventario.
- Manejan órdenes de trabajo, órdenes de venta, materiales o planificación.
- Usan Excel para complementar procesos críticos.
- Necesitan mejorar trazabilidad, costos, tiempos, márgenes o reportabilidad.
- Tienen gerencia involucrada en la mejora operacional.
- Buscan aplicar IA de forma práctica.

**Bloque Funciona mejor cuando:**

1. **Hay madurez operacional**  
   Existen procesos definidos y datos disponibles en NetSuite.

2. **Existe disposición a revisar procesos**  
   Hay apertura a cambiar lo que no funciona.

3. **Se busca aplicar IA**  
   El foco es práctico, no una tendencia abstracta.

4. **Hay gerencia comprometida**  
   Existe patrocinio desde la dirección.

**Texto de cierre:**

```text
El diagnóstico requiere uso real de NetSuite y disposición a revisar procesos actuales para detectar oportunidades concretas de mejora.
```

**Métricas visibles al final:**

```text
30+ años de experiencia
100% foco operacional
NetSuite expertise
```

**Efectos visuales del bloque:** Fondo blanco. La sección se divide en dos columnas (desktop): izquierda con la lista `Para empresas que...` y derecha con las 4 cards `Funciona mejor cuando...`. Los ítems de la lista tienen un ícono de check azul (`✓`) animado: al entrar en viewport, los checks aparecen en secuencia con `opacity + scale` (de `0` a `1`) con `animation-delay` de 60ms por ítem, simulando que se van tildando uno a uno. Las 4 cards de `Funciona mejor cuando` tienen fondo blanco, borde `1px solid #E2E8F0`, `border-radius: 12px`, y el título de cada condición en bold azul. El texto de cierre aparece en una franja gris claro con borde izquierdo azul de 3px (`border-left: 3px solid #2563EB`) a modo de blockquote. Las 3 métricas finales (`30+`, `100%`, `NetSuite`) se muestran en tipografía grande bold azul con su label en gris debajo, entrando con animación de conteo o `fade-in` al cruzar el viewport.

---

### 9.10 Sección Nuestra experiencia

**Objetivo:** respaldar la propuesta con experiencia operacional y tecnológica.

**Contenido:**

- Eyebrow:

```text
Nuestra experiencia
```

- Título:

```text
Liderado por ingenieros con más de 30 años de experiencia en procesos apoyados en TI
```

- Párrafo 1:

```text
Combinamos experiencia en procesos empresariales, tecnología, IA, automatización e integración para detectar oportunidades reales de mejora operacional.
```

- Párrafo 2:

```text
El enfoque parte desde la operación, los procesos, la gestión, los datos y las necesidades reales de empresas productivas, no desde la moda de IA.
```

- Párrafo 3:

```text
Entendemos organizaciones tradicionales, decisiones operacionales y cómo NetSuite puede potenciarse dentro y fuera del ERP.
```

**Cards obligatorias:**

1. **Experiencia operacional**  
   Permite hacer las preguntas correctas y entender la realidad del negocio.

2. **IA aplicada**  
   Permite diseñar soluciones más rápidas, prácticas y conectadas a datos reales.

3. **NetSuite integrado**  
   Lleva las soluciones al corazón de la gestión empresarial.

**Métricas visibles del bloque:**

```text
2-3 semanas
USD 4.900
Remoto o híbrido
```

**Efectos visuales del bloque:** Fondo gris muy claro (`#F8FAFC`). El título resalta `30 años` en azul bold. La sección se puede organizar en dos columnas (desktop): izquierda con los 3 párrafos y derecha con las 3 cards. Las 3 cards (`Experiencia operacional`, `IA aplicada`, `NetSuite integrado`) tienen fondo blanco, `border-radius: 12px`, sombra ligera, con el título bold negro y descripción en gris. Al hacer hover, se eleva la sombra con `transition: box-shadow 200ms ease`. La franja de métricas al pie (`2-3 semanas • USD 4.900 • Remoto o híbrido`) se presenta en una barra gris claro separada, con texto en gris muted y separadores `|` o `•`. Toda la sección entra con `scroll reveal` (`opacity + translateY`) vía `IntersectionObserver`.

---

### 9.11 Sección Evaluación / Formulario

**Objetivo:** conversión principal de la landing.

**Contenido introductorio:**

- Eyebrow:

```text
Evaluación
```

- Título:

```text
Solicita tu evaluación IA + NetSuite
```

- Párrafo 1:

```text
Completa el formulario para revisar si tu empresa califica para el diagnóstico.
```

- Párrafo 2:

```text
Si existen oportunidades concretas, coordinaremos una reunión inicial para entender tu operación y evaluar el alcance.
```

**Beneficios junto al formulario:**

- Sin compromiso inicial.
- Revisión de idoneidad gratuita.
- Respuesta en 48 horas hábiles.
- Contacto directo: `contacto@at-once.cl`.

**Campos obligatorios del formulario:**

1. **Nombre y apellido**  
   Tipo texto. Obligatorio.

2. **Cargo**  
   Tipo texto. Obligatorio.

3. **Empresa**  
   Tipo texto. Obligatorio.

4. **Correo corporativo**  
   Tipo email. Obligatorio.

5. **Teléfono / WhatsApp**  
   Tipo texto/teléfono. Opcional o requerido visualmente según diseño final.

6. **Uso actual de NetSuite**  
   Selector obligatorio con opciones:
   - Sí, usamos NetSuite actualmente.
   - Estamos implementando NetSuite.
   - Estamos evaluando NetSuite.
   - No usamos NetSuite.

7. **Tipo de operación**  
   Selector obligatorio con opciones:
   - Producción / manufactura.
   - Metalmecánica.
   - Distribución / logística.
   - Bodega e inventario.
   - Servicios industriales.
   - Importación / comercialización.
   - Otro.

8. **Procesos a optimizar**  
   Selección múltiple con opciones:
   - Órdenes de trabajo.
   - Órdenes de venta.
   - Cotizaciones.
   - Control de costos.
   - Margen por orden.
   - Planificación producción.
   - Bodega / inventario.
   - Reportes gerenciales.
   - Alertas automáticas.
   - Trazabilidad.
   - Integración Excel.
   - Necesito diagnóstico.

9. **Uso actual de Excel para complementar NetSuite**  
   Selector con opciones:
   - Sí, en procesos críticos.
   - Sí, pero solo para reportes menores.
   - No.
   - No estoy seguro.

10. **Principal problema que espera resolver**  
    Textarea. Obligatorio.

11. **Participantes sugeridos para reunión**  
    Selección múltiple con opciones:
    - Gerencia general.
    - Operaciones.
    - Producción.
    - Finanzas.
    - TI / Sistemas.
    - Bodega / Inventario.
    - Comercial / Ventas.
    - Otro.

12. **Fecha estimada de inicio**  
    Selector obligatorio con opciones:
    - Lo antes posible.
    - Dentro de 30 días.
    - En 2 a 3 meses.
    - Solo estoy evaluando.

**Botón del formulario:**

```text
Solicitar evaluación IA + NetSuite
```

**Mensaje bajo formulario:**

```text
Tu información está segura. No compartimos datos con terceros y responderemos en menos de 48 horas hábiles.
```

**Regla técnica:** no conectar a backend. El submit debe mostrar un modal o mensaje local de éxito.

**Efectos visuales del bloque:** Fondo blanco. La sección se divide en dos columnas (desktop): izquierda con el texto introductorio y los beneficios, derecha con el formulario. Los beneficios (`Sin compromiso inicial`, `Revisión gratuita`, `Respuesta en 48 horas`) tienen un ícono de check azul delante. El bloque de contacto directo (`contacto@at-once.cl`) se presenta como un link azul subrayado con ícono de sobre. Los campos del formulario tienen borde `1px solid #CBD5E1`, `border-radius: 8px`, y al recibir foco (`focus`) el borde cambia a azul (`#2563EB`) con una sombra de foco sutil (`box-shadow: 0 0 0 3px rgba(37,99,235,0.15)`), con `transition: border-color 180ms, box-shadow 180ms`. Los checkboxes de selección múltiple son chips/tags clicables (no checkboxes nativos): cada opción es un badge pill que al seleccionarse cambia de fondo blanco+borde gris a fondo azul claro (`#EFF6FF`) + borde azul, con `transition: background 180ms`. El botón de submit es azul sólido, ancho completo, con efecto hover de sombra más intensa. Al hacer submit, el formulario se reemplaza por el modal/mensaje de éxito con animación `fade-in` (ver bloque 9.12). La sección completa entra con `scroll reveal` (`opacity + translateY`) al cruzar el viewport.

---

### 9.12 Modal / mensaje de evaluación enviada

**Objetivo:** feedback visual después del submit simulado.

**Contenido:**

- Título:

```text
Evaluación enviada
```

- Mensaje:

```text
Revisaremos tu solicitud y te contactaremos en menos de 48 horas hábiles.
```

- Botón:

```text
Entendido
```

**Regla técnica:** estado local en React. No persistir ni enviar datos todavía.

**Efectos visuales del bloque:** Al hacer submit, el formulario desaparece con `opacity: 1 → 0` + `scale(0.97)` en `200ms`, y el modal/mensaje de éxito aparece con `opacity: 0 → 1` + `scale(0.97 → 1)` en `300ms` (`transition: opacity, transform`). El modal tiene un ícono de check animado (círculo verde que se dibuja con animación `stroke-dashoffset` de SVG, o bien un checkmark con `@keyframes` de escala). Fondo blanco, borde redondeado `border-radius: 16px`, sombra `box-shadow` prominente. El botón `Entendido` es azul sólido con hover de sombra. Si se implementa como overlay/modal flotante, aparece sobre un backdrop semitransparente (`background: rgba(0,0,0,0.4)`) con `backdrop-filter: blur(4px)`.

---

### 9.13 CTA final Diagnóstico especializado

**Objetivo:** cerrar la página con conversión fuerte.

**Contenido:**

- Eyebrow:

```text
Diagnóstico especializado
```

- Título:

```text
Descubre dónde la IA puede generar impacto real en tu operación
```

- Párrafo:

```text
Por USD 4.900 obtienes un diagnóstico especializado para identificar oportunidades concretas de optimización con IA aplicada a tu ERP y operación real.
```

- Beneficio:

```text
Identifica oportunidades antes de invertir en desarrollos mayores.
```

- Línea comercial:

```text
Diagnóstico en 2-3 semanas • Modalidad remota o híbrida • Informe ejecutivo incluido
```

- CTA:

```text
Solicitar evaluación IA + NetSuite
```

**Efectos visuales del bloque:** Fondo azul oscuro (`#1E3A5F` o similar) o azul de marca (`#1D4ED8`) para crear contraste fuerte con las secciones anteriores. Todo el texto en blanco o blanco semitransparente. El eyebrow en texto pequeño uppercase con `letter-spacing` amplio, en azul claro o blanco suave. El precio `USD 4.900` resaltado en tipografía bold blanca o amarilla. El botón CTA es blanco sólido con texto azul oscuro, con hover que invierte a borde blanco + texto blanco + fondo transparente. La línea comercial es texto pequeño blanco semitransparente con separadores `•`. Toda la sección entra con `scroll reveal` (`opacity + translateY`) al cruzar el viewport.

---

### 9.14 Footer

**Objetivo:** cierre institucional simple.

**Contenido:**

- Texto de propuesta:

```text
Ayudamos a empresas productivas que usan NetSuite a optimizar su operación con IA, automatizaciones e integraciones prácticas.
```

- Navegación:
  - Inicio.
  - Diagnóstico.
  - Casos de Uso.
  - Para quién es.
  - Sobre At-Once.

- Contacto:

```text
contacto@at-once.cl
```

- Link/CTA:

```text
Solicitar evaluación
```

- Copyright:

```text
© 2026 At-Once. Todos los derechos reservados.
```

- Línea final:

```text
Diseñado para empresas productivas con NetSuite.
```

**Efectos visuales del bloque:** Fondo gris oscuro o casi negro (`#0F172A` o `#1E293B`). Texto en blanco con `opacity: 0.8` para el cuerpo y `opacity: 0.5` para el copyright. El logo `At-Once` se muestra en blanco. Los links de navegación tienen transición de `opacity: 0.7 → 1` al hover. El email `contacto@at-once.cl` tiene ícono de sobre antes del texto. La línea divisoria entre la navegación y el copyright es un `<hr>` con color blanco semitransparente (`rgba(255,255,255,0.1)`). No hay efectos de scroll reveal en el footer; entra estáticamente.

---

## 10. Criterios visuales obligatorios

El Programador debe lograr que el sitio se vea como Labs en términos de:

- estructura de una sola página,
- orden de bloques,
- grillas,
- cards,
- fondos alternados,
- jerarquía tipográfica,
- tamaño de títulos,
- espaciado vertical,
- ancho máximo de contenido,
- bordes redondeados,
- sombras o separación visual,
- CTAs destacados,
- panel visual del hero,
- formulario extenso,
- responsive mobile/desktop.

No basta con que el contenido esté escrito. Debe verse como la landing objetivo.

---

## 11. Criterios de aceptación

La tarea se acepta solo si se cumplen todos estos puntos:

1. `https://web.at-once.cl` abre la landing completa en `/`.
2. No existe una home inicial que derive a otra página.
3. No se requiere `/netsuite` para ver la landing.
4. Todas las secciones descritas en este README están implementadas.
5. La navegación superior usa anclas internas.
6. Todos los CTAs llevan al formulario dentro de la misma página.
7. El formulario está completo visualmente.
8. El submit muestra un mensaje/modal local sin backend.
9. El sitio compila con `npm run build`.
10. Docker sigue levantando en puerto interno `80`.
11. EasyPanel puede redeployar sin cambios manuales extra.
12. La página es responsive.
13. Al compararla lado a lado con Labs, la estructura y experiencia son prácticamente iguales.

---

## 12. Rechazo explícito de entrega

La entrega debe rechazarse si ocurre cualquiera de estos casos:

- La home muestra solo logo, texto corto o link a otra página.
- La experiencia está dividida en dos páginas.
- `/netsuite` contiene la landing principal.
- La página tiene secciones distintas o en otro orden sin aprobación.
- Se omite el formulario.
- Se omiten métricas del hero.
- Se omite el proceso de 5 pasos.
- Se omite la sección de perfil ideal.
- Se omite la experiencia de 30+ años.
- El diseño parece una landing nueva no relacionada con Labs.
- El Programador cambia infraestructura para resolver un problema de frontend.
- Se conecta el formulario sin autorización explícita.

---

## 13. Impacto

### 13.1 NetSuite

Sin impacto técnico en esta etapa.

La landing menciona NetSuite como parte de la propuesta comercial, pero no se conecta con NetSuite.

### 13.2 Configuración

Sin cambios requeridos en EasyPanel si el servicio ya levanta.

### 13.3 Desarrollo

El cambio requerido es frontend/contenido:

- reemplazar la home actual,
- eliminar la lógica de dos páginas,
- concentrar la landing en `/`,
- implementar todos los bloques de Labs.

### 13.4 Operación

Después del commit del Programador, Miguel debe redeployar/validar en EasyPanel y comparar visualmente contra Labs.

---

## 14. Próxima acción

Rol ejecutor: Programador.

Acción:

```text
Rehacer la home `/` como landing única, copiando/reconstruyendo bloque por bloque la página https://labs.muze.cl/at-once/ según esta especificación.
```

Rol Configurador:

```text
Solo validar despliegue posterior en EasyPanel. No modificar infraestructura para resolver este problema.
```

Rol Arquitecto:

```text
Rechazar cualquier entrega que no cumpla la especificación de una sola página y comparación visual contra Labs.
```
