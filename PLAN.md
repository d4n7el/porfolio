# Plan: Rediseño UI/UX Portfolio — Obsidian Cybernetic

## 1. Análisis Comparativo

### Proyecto Actual vs. Diseño de Referencia

| Aspecto | Actual | Referencia | Cambio necesario |
|---|---|---|---|
| **Framework** | React 18 + Vite 5 | HTML/CN (CDN) | Mantener React+Vite |
| **Fuentes** | Roboto (self-hosted) + Inter (CSS) | Plus Jakarta Sans + JetBrains Mono (Google Fonts) | Cambiar fuentes |
| **Colores** | bg:#0a0a0f, surface:#111118, accent:#06b6d4 | bg:#0b0f17, cyber-900:#0f131c, cyan-500:#06b6d4 | Actualizar paleta |
| **Estilos** | Tailwind v3 + NextUI + Iconify | Tailwind v3 (solo utility) | Reducir dependencias UI |
| **Animaciones** | Framer Motion extensivo | CSS puro + Tailwind | Mantener Framer Motion |
| **Navbar** | Full-width, transparente/blur | Pill-shaped (rounded-full), centrado | Rediseñar a pill |
| **Hero** | Full-width, sin terminal | 2 col (7/5), con terminal mockup | Reescribir con bento |
| **About** | 2 col (texto + stats grid 2x2) | Bento 12-col (bio 8col + métrica 35% 4col + stats 4x) | Reescribir |
| **Experience** | Timeline alternada con dots | Cards apiladas con tags, bullet lists | Reescribir |
| **Skills** | 3 cat. con progress bars + soft skills | 4 cat. de tech items + educación + idiomas | Reescribir |
| **Contact** | CTA + social links | CTA + contact cards + social bar + footer | Reescribir |
| **Visitor Counter** | Visible en navbar | No visible (ocultar, NO eliminar) | Ocultar visualmente |
| **i18n** | Spanish/English | Solo español | Mantener i18n funcionando |
| **Theme toggle** | dark mode (next-themes) | Solo dark | Mantener, no mostrar toggle |

### Componentes que se reescribirán

| Componente actual | Acción | Razón |
|---|---|---|
| `navbar.tsx` | Reescribir | Nuevo diseño pill-shaped con "Hablemos" CTA |
| `home.tsx` | Modificar | Nuevo fondo sin gradiente dinámico |
| `container-home.tsx` | Reescribir | Hero completo: badge, headline, terminal, CTAs |
| `about.tsx` | Reescribir | Bento grid con bio + métrica 35% + 4 stats |
| `experience.tsx` | Reescribir | Cards apiladas, no timeline alternada |
| `skills-card.tsx` | Reescribir | 4 categorías tech + educación + idiomas |
| `contact.tsx` | Reescribir | Contact cards + social bar + copyright |
| `resume.tsx` | Modificar | Layout actualizado |
| `visit-count.tsx` | Ocultar visualmente | No aparece en diseño, pero lógica se conserva |
| `loading.tsx` | Simplificar | Skeleton más acorde al nuevo diseño |

### Componentes que se crearán desde cero

| Componente | Propósito |
|---|---|
| `SectionLabel` | Badge mono "Perfil Profesional", "Trayectoria Comprobada", etc. |
| `TerminalCard` | Mockup de terminal con código JS |
| `ContactCard` | Card de contacto con icono + label + link |
| `ExperienceCard` | Card reutilizable de experiencia laboral |
| `TechCategoryCard` | Card de categoría de tecnología |
| `EducationCard` | Card de educación |
| `LanguageCard` | Card de idioma |

### Componentes que se mantienen sin cambios

| Componente | Razón |
|---|---|
| `visit-count.tsx` | Funcionalidad Firebase, ocultar solo visualmente |
| `count-number-animated.tsx` | Dependencia de visit-count |
| `select-language.tsx` | i18n sigue funcionando |
| `svg-en.lang.tsx` / `svg-es.lang.tsx` | Para select-language |
| `notification-icon.tsx` | Puede reutilizarse |
| `time-line.tsx` | Se verificará si se usa |

### Código potencialmente obsoleto (revisar al final)

| Archivo/Componente | Motivo | Acción |
|---|---|---|
| `chip-skill.tsx` | Diseño actual usa progress bars, nuevo usa items de tech | Revisar |
| `hobbies.tsx` | No aparece en nuevo diseño | Revisar |
| `personal-skills.tsx` | No aparece explícitamente | Revisar |
| `title.tsx` | Se reemplaza por SectionLabel | Revisar |
| `card-contact.tsx` | Se reemplaza por ContactCard | Revisar |
| `skills-card.tsx` ( viejo) | Se reescribe completamente | Revisar |
| `@const/skills.tsx` | Datos Iconify, nuevo diseño usa datos differentes | Revisar |
| `select-porfolio.tsx` | Patrón extensible no usado aún | Revisar |

---

## 2. Fase 1 — Agent Setup (Configurar OpenCode)

**Objetivo:** Preparar el proyecto para desarrollo basado en agentes.

### Pasos:
1. Instalar skill `vercel-react-best-practices`:
   ```bash
   npx skills add https://github.com/vercel-labs/agent-skills --skill vercel-react-best-practices
   ```
2. Verificar que el skill se instaló correctamente.
3. Revisar que el AGENTS.md del proyecto exista o crear uno si es necesario.
4. Aplicar las buenas prácticas del skill en la implementación:
   - Componentes con props tipadas correctamente
   - Evitar re-renders innecesarios con `React.memo` donde sea apropiado
   - Usar `useMemo`/`useCallback` cuando sea necesario
   - Extraer componentes reutilizables
   - No crear abstracciones innecesarias

---

## 3. Fase 2 — Foundation (Estilos base)

**Objetivo:** Configurar tipografía, colores, background, y estilos globales.

### 3.1 Fuentes
- Descargar/agregar Plus Jakarta Sans (weights: 400, 500, 600, 700, 800) vía Google Fonts en `index.html`
- Descargar/agregar JetBrains Mono (weights: 400, 500, 600, 700) vía Google Fonts en `index.html`
- Actualizar `tailwind.config.js` con `fontFamily.sans: ['Plus Jakarta Sans', 'sans-serif']` y `fontFamily.mono: ['JetBrains Mono', 'monospace']`
- Quitar referencia a Roboto/Inter de `index.css`
- **NO eliminar** los archivos de fuentes TTF de `src/assets/fonts/` (mantener como respaldo)

### 3.2 Paleta de colores
- Actualizar `tailwind.config.js` con la nueva paleta cyber:
  ```js
  colors: {
    cyber: {
      950: '#07090e',
      900: '#0b0f17',
      850: '#0f1422',
      800: '#151c2e',
      750: '#1b243b',
      700: '#232e4a',
    },
    cyan: {
      300: '#67e8f9',
      400: '#22d3ee',
      500: '#06b6d4',
      600: '#0891b2',
    },
    emerald: {
      400: '#34d399',
      500: '#10b981',
    }
  }
  ```
- Mantener los colores del sistema existentes que se usan (background, surface, border, accent, etc.) pero mapearlos a los valores nuevos
- Agregar variable CSS para el fondo `#0b0f17`

### 3.3 Background y efectos ambientales
- Agregar clase `.cyber-grid` al body para la grilla sutil
- Agregar las 3 orbs de luz ambiente (fixed position, blur) al body/App
- Agregar `.glass-card`, `.glow-cyan`, `.glow-border` como clases utilitarias
- Actualizar scrollbar estilo (width: 7px, thumb hover cyan)
- Actualizar `::selection` a `bg-cyan-500/25 text-cyan-300`

### 3.4 CSS global
- Actualizar `index.css` con:
  - `body { background-color: #0b0f17; color: #94a3b8; font-family: 'Plus Jakarta Sans', sans-serif; overflow-x: hidden; }`
  - Cyber grid backdrop
  - Glow effects
  - Scrollbar actualizado
  - Selection colors actualizados
  - Glass card effect

---

## 4. Fase 3 — Layout (Navbar + Estructura)

### 4.1 Navbar (Reescribir `navbar.tsx`)
- Diseño pill-shaped centrado con `max-w-6xl`
- Logo: `</>` en mono cyan + "Daniel Zamora"
- Links: Sobre mí, Experiencia, Habilidades, Contacto
- CTA: "Hablemos" con arrow icon, pill button
- Mobile: hamburger con menú desplegable
- Eliminar `VisitCount` del navbar (ocultar, no eliminar import)
- Fondo: `bg-[#0f131c]/80 backdrop-blur-md border border-slate-800/80`
- Mantener scroll detection

### 4.2 PortfolioDefaultView
- Mantener la composición actual
- Ajustar spacing entre secciones

---

## 5. Fase 4 — Hero Section (Reescribir)

### 5.1 `home.tsx`
- Cambiar fondo a `#0b0f17` (sin gradiente dinámico)
- Eliminar el div radial gradient overlay
- Mantener lazy loading de ContainerHome

### 5.2 `container-home.tsx` (Reescribir completamente)
Layout: `grid grid-cols-1 lg:grid-cols-12 gap-12 items-center`

**Columna izquierda (lg:col-span-7):**
- Badge "Disponible para roles Senior & Nuevos Proyectos" con dot pulsante
- Headline: "Daniel Felipe" + "Zamora Ortiz" (gradient text)
- Role tag: "Full Stack Developer | Java & Frontend Specialist" con glow
- Elevator pitch con highlights en cyan
- Contact info bar (location, phone, email)
- CTAs: "Contactar directamente" (gradient cyan) + "Solicitar CV" (ghost) + GitHub + LinkedIn icons

**Columna derecha (lg:col-span-5):**
- Terminal mockup card con:
  - Window bar (dots macOS + título + version badge)
  - Código JavaScript formateado
  - Footer "Microservices & UI Ready"

---

## 6. Fase 5 — Content Components (Secciones de contenido)

### 6.1 `about.tsx` — Perfil Profesional (Reescribir)
Layout: Bento grid 12 columnas
- Section label mono cyan
- Heading bold
- **Bio card (md:col-span-8):** Icon + título + ubicación + párrafos + tags
- **Métrica destacada (md:col-span-4):** "35%" + descripción + source badge
- **Stats quad (md:col-span-12, 4 cols):** +7, 15+, +50, 100%

### 6.2 `experience.tsx` — Experiencia Laboral (Reescribir)
- Section label "Trayectoria Comprobada"
- Heading + timeline range "2017 – Presente (+7 años)"
- Cards apiladas verticalmente (no alternadas)
- Cada card: título + badge "Actual" + empresa + período + bullets + tags
- Datos actualizados de `@const/experience.ts` con bullets y tags

### 6.3 `skills-card.tsx` — Ecosistema Tecnológico (Reescribir completamente)
- Section label "Stack & Dominio Técnico"
- Heading "Ecosistema Tecnológico"
- 4 categorías (grid 4 cols):
  1. Backend & Java
  2. Frontend & Mobile
  3. Bases de Datos
  4. DevOps & Métodos
- Cada categoría: icono + título + items con dot indicators + metadata
- Educación: 2 cards (SENA)
- Idiomas: Español Nativo + Inglés en Formación
- Soft skills: tags

### 6.4 `contact.tsx` — CTA + Footer (Reescribir)
- Badge "Iniciemos una conversación"
- Heading "¿Listo para construir software de alto calibre?"
- 2 contact cards (email + teléfono)
- Social bar (LinkedIn + GitHub)
- Copyright + back-to-top

### 6.5 `resume.tsx` (Modificar)
- Actualizar layout para adaptarse a nuevos componentes
- Mantener composición Experience + Skills

---

## 7. Fase 6 — Funcionalidades Existentes

### 7.1 Contador de visitas
- **NO eliminar** `visit-count.tsx`, `count-number-animated.tsx`, ni la lógica Firebase
- Ocultar el componente visualmente (no renderizar en el navbar)
- Verificar que la lógica de incremento y suscripción sigue funcionando
- Considerar agregar un contador invisible (sin display) para mantener la métrica
- O: agregar el contador en algún lugar discreto si es apropiado

### 7.2 i18n
- Mantener toda la configuración de i18next
- Mantener `select-language.tsx` funcionando
- Los textos del nuevo diseño son en español (el i18n puede mantenerse para textos futuros)

### 7.3 Theme
- Mantener `next-themes` funcionando
- El diseño de referencia es dark-only, no mostrar toggle de tema
- Mantener `attribute='class' defaultTheme='dark'`

### 7.4 Firebase
- No tocar `firebase.config.ts` ni `App.tsx` providers

---

## 8. Fase 7 — Visual QA

### Checklist de verificación:
1. Ejecutar `pnpm dev` y verificar que compile
2. Comparar cada sección contra `screen.png`
3. Verificar responsive en 4 breakpoints:
   - Desktop (>1024px)
   - Laptop (768-1024px)
   - Tablet (480-768px)
   - Mobile (<480px)
4. Verificar hover effects en cards
5. Verificar ambient glow effects
6. Verificar terminal card
7. Verificar navbar pill shape
8. Verificar gradient text en hero
9. Verificar glassmorphic effects
10. Verificar scrollbar personalizada
11. Verificar que el visit counter sigue funcionando (inspeccionar con DevTools)
12. Verificar que i18n no se rompió

---

## 9. Fase 8 — Cleanup

### Revisar y potencialmente eliminar:
1. `chip-skill.tsx` — Verificar si se usa
2. `hobbies.tsx` — Verificar si se usa
3. `personal-skills.tsx` — Verificar si se usa
4. `title.tsx` — Verificar si se usa (reemplazado por SectionLabel)
5. `card-contact.tsx` — Verificar si se usa (reemplazado por ContactCard)
6. `skills-card.tsx` viejo — Reescribir completamente
7. `@const/skills.tsx` — Datos de Iconify, verificar si se usan
8. Archivos de fuentes TTF de Roboto — Mantener como respaldo
9. CSS de `App.css` — Verificar si se necesita

**NO eliminar:**
- `visit-count.tsx` / `count-number-animated.tsx` (crítico)
- Firebase config (crítico)
- i18n config (crítico)
- Loading component (crítico)

---

## 10. Fase 9 — Final Validation

### Comandos a ejecutar:
```bash
pnpm run build       # Verificar que compile sin errores TS
pnpm run lint        # Verificar que no haya warnings
pnpm run prod        # Verificar en modo production
```

### Checklist final:
- [ ] Build sin errores TypeScript
- [ ] Lint sin warnings nuevos
- [ ] Responsive funciona en todos los breakpoints
- [ ] Visit counter incrementa (verificar en Firestore)
- [ ] Navbar navega correctamente por hash links
- [ ] Terminal card se renderiza correctamente
- [ ] Ambient glow effects visibles
- [ ] Glassmorphic effects funcionando
- [ ] Hover effects en todas las cards
- [ ] Fuentes cargando correctamente (Plus Jakarta Sans + JetBrains Mono)
- [ ] Colores correctos
- [ ] Espaciados correctos
- [ ] Gradientes funcionando
- [ ] Animaciones de entrada con Framer Motion
- [ ] Sin errores de consola

---

## Resumen de Archivos a Modificar

| Archivo | Acción |
|---|---|
| `index.html` | Agregar Google Fonts (Plus Jakarta Sans + JetBrains Mono) |
| `tailwind.config.js` | Nueva paleta cyber, fuentes, plugins |
| `src/index.css` | Estilos globales: body, scrollbar, selection, cyber-grid, glass-card, glow |
| `src/App.css` | Simplificar/actualizar |
| `src/porfolio/components/default/navbar.tsx` | Reescribir: pill-shaped, Hablemos CTA |
| `src/porfolio/components/default/home.tsx` | Modificar: fondo simple #0b0f17 |
| `src/porfolio/components/default/container-home.tsx` | Reescribir: hero completo con terminal |
| `src/porfolio/components/default/about.tsx` | Reescribir: bento grid |
| `src/porfolio/components/default/experience.tsx` | Reescribir: cards apiladas con tags |
| `src/components/skills-card.tsx` | Reescribir: 4 tech categories + educación + idiomas |
| `src/porfolio/components/default/contact.tsx` | Reescribir: contact cards + social bar |
| `src/porfolio/components/default/resume.tsx` | Modificar layout |
| `src/const/experience.ts` | Actualizar datos (bullets + tags) |
| `src/components/visit-count.tsx` | Ocultar visualmente (mantener lógica) |
| `src/components/loading.tsx` | Simplificar skeleton |
| `src/porfolio/views/default/portfolio-default-view.tsx` | Ajustar si es necesario |

## Archivos a Crear

| Archivo | Propósito |
|---|---|
| `src/components/ui/section-label.tsx` | Badge mono de sección |
| `src/components/ui/terminal-card.tsx` | Mockup de terminal |
| `src/components/ui/contact-card.tsx` | Card de contacto |
| `src/components/ui/experience-card.tsx` | Card reutilizable de experiencia |
| `src/components/ui/tech-category-card.tsx` | Card de categoría tech |
| `src/components/ui/metric-card.tsx` | Card de métrica |
| `src/components/ui/tag.tsx` | Badge/tag reutilizable |
