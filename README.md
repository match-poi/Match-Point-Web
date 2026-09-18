# MATCH POINT — Web

Branding: **MATCH POINT** (identidad propia, minimalista, alto rendimiento).

## Stack

- Next.js (App Router)
- Tailwind CSS
- Lucide React (iconos)

## Estructura

- `src/app/`: rutas, `layout.tsx`, `page.tsx`, estilos globales
- `src/components/`: componentes reutilizables (UI)
- `src/lib/`: helpers y utilidades

## Arranque local

Requiere Node.js + npm.

```bash
npm install
npm run dev
```

Dev local (puerto fijo):

```bash
npm run dev:clean
```

Abrí `http://127.0.0.1:3011`.

## Publicar en matchpointmvd.com (automático)

1. Configurar secrets en GitHub (una vez): ver **§1.3** en `GUIA-COLABORADORES.md` (`FTP_SERVER`, `FTP_USERNAME`, `FTP_PASSWORD`, `FTP_SERVER_DIR`).
2. Subir cambios a `main`:

```bash
git add .
git commit -m "Tu mensaje"
git push origin main
```

3. Seguir el deploy en [GitHub Actions](https://github.com/match-poi/Match-Point-Web/actions) (workflow **Deploy to Hostinger**).

Build local de respaldo: `npm run build` → contenido en `out/`.

