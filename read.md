# Web At-once - Arquitectura

## Bitácora de cambios

| Fecha | Versión | Cambio realizado | Motivo | Impacto | Sección afectada |
|---|---|---|---|---|---|
| 2026-04-03 | V1.0 | Se define la arquitectura inicial de Web At-once como sitio corporativo multipágina en Next.js, desplegado por Docker en EasyPanel y publicado detrás de Cloudflare proxy. | Alinear el nuevo sitio con la infraestructura vigente y establecer una base técnica clara desde el inicio. | Queda aprobado el stack base, estrategia de despliegue, patrón de publicación y criterio de puertos. | Todo el documento |

---

## 1. Problema u objetivo actual

Levantar el sitio web corporativo multipágina de **At-Once** como un proyecto independiente, desplegable en **EasyPanel**, versionado en **GitHub** y publicado detrás de **Cloudflare** en modo proxy.

---

## 2. Lo que está confirmado

- El rol de este hilo es **Arquitecto**.
- El proyecto se llamará **Web At-once**.
- El sitio será **multipágina**.
- El framework aprobado es **Next.js**.
- El repositorio se crea **desde cero**.
- El despliegue será en **EasyPanel**.
- La estrategia elegida es **Ruta A**: `GitHub -> EasyPanel`.
- El perímetro de publicación será **Cloudflare en modo proxy**.
- El contenido se gestionará en **otro proyecto**, separado del proyecto técnico del sitio.

---

## 3. Lo que falta validar

- Dominio final del sitio (raíz o subdominio).
- Política de caché en Cloudflare.
- Estructura exacta del proyecto de contenido y mecanismo de integración.
- Estrategia de build final:
  - Next.js servido por runtime Node,
  - o export estático servido por web server.
- Reglas de observabilidad, backup y rollback específicas del servicio en EasyPanel.

---

## 4. Definición arquitectónica propuesta

### 4.1 Stack aprobado

- **Framework:** Next.js
- **Tipo de sitio:** corporativo multipágina
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
  - **3002** es el puerto interno acordado si Next.js corre con runtime Node (este proyecto);
  - **80** es adecuado si el build se sirve mediante un servidor web dedicado.

Decisión vigente:
- **seguir con 80/443 en publicación externa**;
- dejar el puerto interno sujeto a la forma final de runtime del contenedor.

### 4.5 Integración con infraestructura existente

Web At-once se desplegará como servicio de **EasyPanel**, dentro del entorno descrito en `Infra/infrastructure.md`, sin mezclar su responsabilidad con:

- Traefik,
- n8n,
- OpenProject,
- Nextcloud,
- servicios de base de datos.

Su rol es exclusivamente el de **sitio corporativo web**.

---

## 5. Impacto

### 5.1 NetSuite

Sin impacto directo.

### 5.2 Configuración

- Creación del proyecto en EasyPanel.
- Vinculación al repositorio GitHub.
- Configuración de dominio y publicación detrás de Cloudflare.
- Definición posterior de variables de entorno si hicieran falta.

### 5.3 Desarrollo

- Creación del repositorio base.
- Estructura multipágina en Next.js.
- Dockerfile y archivos de soporte al despliegue.

### 5.4 Operación

- Despliegue repetible desde Git.
- Rollback por commit o release.
- Publicación web estándar detrás de Cloudflare.

---

## 6. Siguiente acción

### Arquitecto

Mantener vigente esta definición y usarla como fuente oficial del proyecto.

### Programador

Crear la base técnica del proyecto Next.js y su empaquetado Docker.

### Configurador

Preparar el servicio correspondiente en EasyPanel y su publicación por Cloudflare.

---

## 7. Decisiones descartadas

- Mezclar **Next.js** con **Vue** en el mismo proyecto.
- Usar **puerto 90** como estándar de publicación del sitio.
- Acoplar el contenido editorial al mismo proyecto técnico desde la V1.
- Tratar este servicio como backend de negocio o servicio compartido de infraestructura.

---

## 8. Fuente de verdad documental

El archivo `Web At-once/read.md` es la fuente oficial de arquitectura vigente para este proyecto.  
La documentación de infraestructura complementaria vive en `Infra/infrastructure.md`.
