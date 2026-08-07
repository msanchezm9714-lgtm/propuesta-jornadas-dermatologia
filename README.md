# Propuesta Interactiva — Jornadas Bienales de Dermatología 2026

Landing page que funciona como propuesta comercial interactiva. Construida con Next.js 15, React, TypeScript, Tailwind CSS y Framer Motion.

## Cómo correrlo

Este entorno no tenía Node.js instalado, así que el código no se corrió ni se probó en un navegador todavía. Para levantarlo en tu máquina:

```bash
cd "proyectos/jornadas-dermatologia"
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000).

Para producción:

```bash
npm run build
npm run start
```

## Todo el contenido vive en un solo archivo

**[data/cliente.json](data/cliente.json)** — Aquí está el 100% de los textos, precios, fases, cronograma, condiciones y datos de contacto. No hay textos "hardcodeados" en los componentes: para reutilizar esta misma landing con otro cliente, se copia el proyecto y solo se edita este JSON (y opcionalmente los colores en `tailwind.config.ts`).

Los tipos de este JSON están documentados en [src/lib/types.ts](src/lib/types.ts) — si agregas o quitas un campo del JSON, actualiza el tipo correspondiente ahí.

## Pendiente de tu parte antes de enviarla

En `data/cliente.json`, el bloque `"autor"` tiene datos de contacto de ejemplo que debes reemplazar por los reales:

```json
"autor": {
  "nombre": "Esteban Sánchez",
  "rol": "Estrategia y Diseño Digital",
  "email": "msanchezm9714@gmail.com",
  "telefono": "+52 1 984 000 0000",
  "whatsapp": "529840000000"
}
```

El teléfono y WhatsApp son placeholders — actualízalos. Los botones "Aceptar propuesta" / "Solicitar ajustes" abren un correo prellenado a `autor.email`.

## Estructura

```
data/cliente.json          → único origen de contenido
src/app/                   → App Router (layout, page, globals.css)
src/components/sections/   → una sección de la propuesta por archivo
src/components/ui/         → primitivos reutilizables (Button, Card, Toggle, Badge...)
src/components/layout/     → Navbar y Footer
src/context/ProposalContext.tsx → estado del toggle de Fase 2 y cálculo del total
src/lib/types.ts           → tipado del JSON
```

## Comportamiento interactivo

- El toggle de **Fase 2 (Gestión de Campaña)** recalcula el total en la tarjeta de resumen con una animación de conteo, y atenúa visualmente el paso 8 del cronograma ("Seguimiento de campaña") cuando está desactivado.
- Scroll progress bar sutil en la parte superior.
- Botón "Exportar PDF" en el navbar dispara `window.print()`; hay estilos de impresión en `globals.css` que ocultan navbar y barra de progreso al imprimir.

## Reutilizar con otro cliente

1. Duplica esta carpeta con el nombre del nuevo cliente/proyecto.
2. Reemplaza el contenido de `data/cliente.json`.
3. Si la marca tiene otra paleta, ajusta los colores en `tailwind.config.ts` (`brand`, `brand.soft`, `brand.hover`, `card`, `brand-border`).
4. Listo — ningún componente necesita tocarse.
