#!/usr/bin/env bash
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
cd "$ROOT"

MSG="${1:-Actualizo sitio Match Point}"

if ! git rev-parse --is-inside-work-tree >/dev/null 2>&1; then
  echo "No estás en un repo git."
  exit 1
fi

git add -A

if git diff --staged --quiet; then
  echo "No hay cambios para subir."
  exit 0
fi

git commit -m "$MSG"
git push origin main

echo ""
echo "Listo. GitHub está publicando en Hostinger (2–4 min)."
echo "Seguimiento: https://github.com/match-poi/Match-Point-Web/actions"
echo "Web: https://matchpointmvd.com (Cmd+Shift+R cuando termine en verde)"
