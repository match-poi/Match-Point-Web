# Guía para editar la web de Match Point

Esta guía explica cómo **acceder**, **editar** y **publicar** cambios en https://matchpointmvd.com.

Está pensada para colaboradores (no hace falta ser programador/a).

---

## Resumen rápido

| Qué querés hacer | Dónde |
|---|---|
| Cambiar textos, secciones, botones | Archivos en Cursor (ver mapa abajo) |
| Ver cómo queda antes de publicar | http://localhost:3000 |
| Publicar en internet | `git push origin main` (automático) **o** subir carpeta `out/` a Hostinger a mano |
| Código y respaldo | GitHub: https://github.com/match-poi/Match-Point-Web |

---

## Parte 1 — Lo que hace Mario (una sola vez)

### 1.1 Invitar a GitHub (acceso al código)

1. Entrar a https://github.com/match-poi/Match-Point-Web
2. **Settings** → **Collaborators** (o **Manage access**)
3. **Add people**
4. Email o usuario de GitHub de tu socia
5. Rol: **Write** (puede editar y subir cambios, no borrar el repo)

Con esto puede clonar el proyecto, editar y hacer push.

### 1.2 Acceso a Hostinger (opcional pero recomendado)

Para publicar la web sin depender de Mario:

**Opción A — Colaborador en Hostinger (ideal)**  
1. hPanel → **Mi perfil** o **Colaboradores**  
2. Invitar con email de tu socia  
3. Permisos: solo el sitio `matchpointmvd.com` (Archivos + FTP si hace falta)

**Opción B — Compartir usuario FTP dedicado**  
1. Hostinger → matchpointmvd.com → **FTP**  
2. Crear cuenta: ej. `editor-matchpoint`  
3. Directorio: `public_html`  
4. Pasar host, usuario y contraseña **por canal privado** (WhatsApp, 1Password, etc.)

⚠️ **No compartir** la contraseña principal de Hostinger ni tokens de GitHub por email público.

### 1.3 Deploy automático GitHub → Hostinger (una sola vez, Mario)

Cada `git push` a `main` ejecuta el workflow **Deploy to Hostinger** (build + subida FTP de la carpeta `out/`).

1. Entrar a https://github.com/match-poi/Match-Point-Web/settings/secrets/actions  
2. **New repository secret** — crear estos cuatro (nombres exactos):

| Secret | Ejemplo / dónde sacarlo |
|---|---|
| `FTP_SERVER` | Host FTP de Hostinger (sin `ftp://`), ej. `ftp.matchpointmvd.com` o el que muestre hPanel → **Archivos → Cuentas FTP** |
| `FTP_USERNAME` | Usuario FTP (cuenta apuntando a `public_html`) |
| `FTP_PASSWORD` | Contraseña de esa cuenta FTP |
| `FTP_SERVER_DIR` | **`/`** solamente (una barra). **No** uses `/public_html/`: Hostinger ya abre el FTP en `public_html`, y si ponés `/public_html/` la web nueva queda en `matchpointmvd.com/public_html/` y el dominio principal no cambia. |

3. Probar: **Actions** → **Deploy to Hostinger** → **Run workflow** (botón manual).  
4. Si falla el paso FTP: en hPanel revisar que la cuenta FTP tenga directorio `public_html`; probar los mismos datos en FileZilla. Si Hostinger pide FTPS, avisar a quien mantenga el repo para ajustar el workflow.

Cuando esto funciona, publicar es solo:

```bash
npm run publish -- "Qué cambiaste en una frase"
```

(Eso hace `git add`, `commit` y `push`; GitHub sube solo a Hostinger.)

Esperar 2–4 min y revisar https://matchpointmvd.com (Cmd+Shift+R).

### 1.4 Qué enviarle a tu socia

Enviarle este archivo (`GUIA-COLABORADORES.md`) más:

- Link al repo: https://github.com/match-poi/Match-Point-Web
- Link a la web: https://matchpointmvd.com
- Credenciales FTP o invitación Hostinger (si aplica)
- Número de WhatsApp oficial del club (para `whatsapp.ts`)

---

## Parte 2 — Lo que hace tu socia (primera vez)

### 2.1 Crear cuenta en GitHub

1. https://github.com/signup  
2. Verificar email  
3. Aceptar la invitación al repo `match-poi/Match-Point-Web` (llega por mail)

### 2.2 Instalar programas

| Programa | Para qué | Link |
|---|---|---|
| **Cursor** | Editar la web (editor con IA) | https://cursor.com |
| **Node.js** (LTS) | Correr la web en la computadora | https://nodejs.org |
| **Git** | Ya viene con Cursor en Mac; en Windows instalar Git | https://git-scm.com |

Verificar en terminal:

```bash
node -v    # debe mostrar v20 o v22
npm -v     # debe mostrar un número
git --version
```

### 2.3 Descargar el proyecto

1. Abrir **Cursor**
2. **Terminal → New Terminal**
3. Elegir una carpeta (ej. Documentos) y ejecutar:

```bash
cd ~/Documents
git clone https://github.com/match-poi/Match-Point-Web.git
cd Match-Point-Web
npm install
```

4. **File → Open Folder** → elegir la carpeta `Match-Point-Web`

### 2.4 Configurar GitHub en la computadora (primera vez)

Al hacer el primer `git push`, GitHub pedirá login:

1. Crear **Personal Access Token**: https://github.com/settings/tokens  
2. Tipo: **classic**  
3. Permiso: marcar **`repo`**  
4. Al hacer push:
   - Username: tu usuario de GitHub  
   - Password: el token (`ghp_...`), **no** la contraseña de GitHub

---

## Parte 3 — Mapa de archivos (qué editar)

```
Match-Point-Web/
├── src/
│   ├── app/
│   │   ├── page.tsx          ← CASI TODO: textos, secciones, botones, servicios, niveles
│   │   ├── layout.tsx        ← Título de la pestaña del browser y SEO
│   │   └── globals.css       ← Colores y estilos globales
│   ├── components/
│   │   ├── FaqSection.tsx    ← Preguntas frecuentes
│   │   └── QuizAutonivelacion.tsx  ← Quiz de niveles
│   └── constants/
│       └── whatsapp.ts       ← Número y links de WhatsApp
├── public/
│   └── map-match-point.png   ← Imagen del mapa
└── out/                      ← NO EDITAR: se genera sola al publicar
```

### Ejemplos concretos

| Querés cambiar… | Archivo |
|---|---|
| Texto del hero ("Clases de tenis de alto impacto…") | `src/app/page.tsx` |
| Servicios, precios, descripciones | `src/app/page.tsx` |
| Niveles (Iniciantes, Principiantes…) | `src/app/page.tsx` |
| Tips del mes | `src/app/page.tsx` |
| Preguntas FAQ | `src/components/FaqSection.tsx` |
| Quiz de autonivelación | `src/components/QuizAutonivelacion.tsx` |
| WhatsApp / teléfono | `src/constants/whatsapp.ts` |
| Título Google ("MATCH POINT \| Academia…") | `src/app/layout.tsx` |
| Color naranja / fondo negro | `src/app/globals.css` |

---

## Parte 4 — Flujo de trabajo diario

### Paso 1 — Editar

1. Abrir el archivo correcto en Cursor  
2. Cambiar el texto (cuidado con comillas `"` y llaves `{`)  
3. Guardar: **Cmd + S** (Mac) o **Ctrl + S** (Windows)

### Paso 2 — Probar en local

En terminal (dentro de la carpeta del proyecto):

```bash
npm run dev
```

Abrir http://localhost:3000 y revisar:

- Textos correctos  
- Botones de WhatsApp funcionan  
- Se ve bien en celular (achicar ventana del browser)

Para frenar el servidor: **Ctrl + C** en la terminal.

### Paso 3 — Publicar en internet

#### Método A — Manual (funciona siempre hoy)

```bash
npm run build
```

1. Hostinger → **Administrador de archivos** → `public_html`  
2. Subir **todo el contenido** de la carpeta `out/` (no la carpeta `out` en sí)  
3. Verificar: https://matchpointmvd.com (Cmd+Shift+R para refrescar sin caché)

#### Método B — Git + deploy automático (cuando FTP esté bien configurado)

```bash
git add .
git commit -m "Actualizo texto de servicios"
git push origin main
```

Esperar 2–3 min y revisar: https://github.com/match-poi/Match-Point-Web/actions

---

## Parte 5 — Reglas importantes

### ✅ Sí hacer

- Probar siempre en localhost antes de publicar  
- Escribir mensajes de commit claros: `"Actualizo horarios de verano"`  
- Hacer cambios chicos y publicar seguido  
- Preguntar a Mario si no están seguros de un cambio grande

### ❌ No hacer

- Editar la carpeta `out/` a mano (se regenera con `npm run build`)  
- Subir contraseñas o tokens al repo  
- Borrar la carpeta `_next` en Hostinger sin subir la nueva  
- Hacer push directo sin probar en local (salvo typo mínimo)

---

## Parte 6 — Solución de problemas

| Problema | Solución |
|---|---|
| `npm run dev` no funciona | Verificar que estás en la carpeta `Match-Point-Web` y correr `npm install` |
| La web en vivo muestra 403 | Falta `index.html` en `public_html` → volver a subir contenido de `out/` |
| Cambios no se ven en matchpointmvd.com | Refrescar con Cmd+Shift+R; verificar que subiste `out/` completo |
| `git push` pide password | Usar token GitHub (`ghp_...`), no contraseña normal |
| Error al publicar por FTP en GitHub | Usar método manual (Parte 4, Método A) |

---

## Parte 7 — Contactos y links

| Recurso | URL |
|---|---|
| Web en vivo | https://matchpointmvd.com |
| Código (GitHub) | https://github.com/match-poi/Match-Point-Web |
| Panel Hostinger | https://hpanel.hostinger.com |
| GitHub Actions (deploys) | https://github.com/match-poi/Match-Point-Web/actions |

---

## Glosario (palabras que vas a ver)

| Palabra | Significado simple |
|---|---|
| **Repo** | Carpeta del proyecto en GitHub |
| **Commit** | Guardar un cambio con un mensaje |
| **Push** | Enviar commits a GitHub |
| **Build** | Generar la versión lista para publicar (`out/`) |
| **Deploy** | Subir esa versión a internet |
| **localhost:3000** | La web corriendo solo en tu computadora |
| **public_html** | Carpeta en Hostinger donde vive la web pública |

---

*Última actualización: agosto 2026*
