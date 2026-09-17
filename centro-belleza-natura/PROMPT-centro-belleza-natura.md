# PROMPT — CENTRO BELLEZA NATURA | .js agency

Actúa como un **frontend developer senior + UI/UX designer especializado en webs comerciales premium para pequeños negocios locales**.

Vamos a construir la **landing demo de Centro Belleza Natura**, un salón de belleza real en El Zapillo, Almería, para una propuesta comercial de `.js agency`.

El objetivo no es una web genérica que parezca hecha por IA. Queremos que la dueña del salón, al verla, piense:

> "Esto podría ser la web de mi salón."

Debe sentirse como una web diseñada por una agencia profesional: cuidada, elegante, editorial, y realista para un negocio local — no una plantilla de SaaS con la marca pegada encima.

---

# 1. CONTEXTO DEL PROYECTO

Proyecto ya creado con:

```bash
npm create vite@latest
```

usando React + TypeScript. Trabajá sobre este proyecto existente.

### Instalar y configurar

- Tailwind CSS, correctamente configurado.
- `lucide-react` para iconos. No usar emojis como iconos de interfaz (sí pueden aparecer emojis dentro de texto real, como en alguna reseña citada literalmente).
- `framer-motion` solo para las animaciones on-scroll descritas en la sección 20. No sumar librerías para cosas que Tailwind/CSS resuelven solo (ej. no uses una librería de carrusel para la galería si un grid + lightbox propio alcanza).

---

# 2. ESTRUCTURA DE IMÁGENES

Antes de maquetar, inspeccioná `public/images/` (o donde el usuario haya colocado las imágenes) y confirmá qué archivos existen realmente. Se espera que aparezcan:

- `header.png` (o similar) → foto para el Hero, sacada de la ficha de Google del negocio.
- `interior.png` (o similar) → foto del interior del local, para la sección "Sobre nosotros".
- 6 fotografías de uñas → para la Galería.

Si los nombres reales difieren de estos, usá los nombres que encuentres — **no renombres ni inventes rutas que no existen**. Si el contenido de un archivo no es evidente por el nombre, comprobalo visualmente antes de asignarlo a una sección. No hay logo todavía: el "logo" en esta versión es el nombre del negocio en tipografía, no un archivo de imagen.

---

# 3. DATOS CONFIGURABLES

Centralizá TODO el contenido del negocio en un único archivo tipado. No debe haber textos ni datos de contacto sueltos hardcodeados en los componentes.

```ts
// src/config/business.ts

export const business = {
  name: "Centro Belleza Natura",
  tagline: "Peluquería, uñas y estética en el corazón de El Zapillo",

  phone: "+34 658 33 28 28",
  whatsapp: "34658332828", // formato wa.me: código país sin '+', sin espacios

  address: "C. Vinaroz, 29, 04007 Almería, España",
  city: "Almería",

  instagram: "https://www.instagram.com/centrobellezanatura/",

  mapsUrl: "https://www.google.es/maps/place/Centro+Belleza+Natura/@36.828281,-2.4492509,17z",
  mapsEmbedSrc: "https://www.google.com/maps?q=36.828281,-2.4492509&z=17&output=embed",
  mapsDirectionsUrl: "https://www.google.com/maps/dir/?api=1&destination=36.828281,-2.4492509",

  googleRating: 4.9, // PENDIENTE: cantidad total de reseñas — no mostrar un número de reseñas inventado

  openingHours: {
    monday: "10:00–20:00",
    tuesday: "10:00–20:00",
    wednesday: "10:00–20:00",
    thursday: "10:00–20:00",
    friday: "10:00–20:00",
    saturday: "10:00–20:00",
    sunday: "Cerrado (salvo eventos con cita previa)",
  },

  services: [
    {
      name: "Peluquería",
      description: "Cortes, color, peinados y tratamientos capilares.",
      price: null, // PENDIENTE: sin precios confirmados — no mostrar "Desde XX €" inventado, omitir precio en UI si es null
    },
    {
      name: "Manicura y pedicura",
      description: "Con gel, diseño de uñas y Baby Boomer. Buenos productos, buen tiempo dedicado a cada detalle.",
      price: null,
    },
    {
      name: "Estética", // PENDIENTE: confirmar con la clienta el listado exacto de tratamientos
      description: "Tratamientos faciales y corporales. Consulta disponibilidad por WhatsApp.",
      price: null,
    },
  ],

  images: {
    hero: "/images/header.png",
    about: "/images/interior.png",
    gallery: [
      "/images/gallery-1.jpg",
      "/images/gallery-2.jpg",
      "/images/gallery-3.jpg",
      "/images/gallery-4.jpg",
      "/images/gallery-5.jpg",
      "/images/gallery-6.jpg",
    ], // ajustar nombres reales tras inspeccionar public/images
  },
};

export const eventsBanner = {
  title: "¿Boda, comunión o bautizo?",
  subtitle: "Reservamos sábados y domingos para tu gran día.",
  body: "Peinado, maquillaje y manicura para novias, comuniones y bautizos, coordinando contigo la fecha y el horario — también en domingo, con cita previa.",
  ctaLabel: "Consultar disponibilidad para mi evento",
  whatsappMessage: "¡Hola Centro Belleza Natura! Tengo una boda/comunión/bautizo y me gustaría consultar disponibilidad para ese día.",
};

export const reviews = [
  {
    name: "María del Mar",
    rating: 5,
    text: "Muy buen servicio, las chicas muy amables, se toman el tiempo necesario para hacer una buena limpieza de las uñas y usan buenos productos. Muy contenta, gracias Fátima.",
  },
  {
    name: "Emma",
    rating: 5,
    text: "Es con diferencia el mejor salón de belleza de Almería, personal super confiable tanto para peluquería como para uñas, un sitio super cómodo y agradable ☺️",
  },
  {
    name: "Miguel",
    rating: 5,
    text: "Sitio fabuloso, el trato es inmejorable y los resultados son excelentes, una gran profesionalidad en todos los sentidos. ¡Os lo recomiendo!",
  },
];
```

**No hay email real de contacto.** La web anterior del negocio mostraba `info@nails.com`, que es un email genérico de la plantilla que usaban, no del negocio — no lo incluyas en ningún lado.

---

# 4. OBJETIVO VISUAL

- Elegante, minimalista, editorial, cálido.
- Cercano y de confianza — no clínico, no infantil, no "influencer".
- El nombre "Natura" es la única licencia de branding permitida: transmití cuidado natural y cercanía a través de la paleta y la fotografía, sin usar iconografía botánica literal (nada de hojitas ni ilustraciones verdes de plantas).
- NO debe parecer una plantilla de SaaS ni un sitio generado automáticamente por IA.

---

# 5. PROHIBICIONES DE DISEÑO

MUY IMPORTANTE. No utilizar:

- gradientes llamativos ni fondos degradados
- blobs ni formas abstractas decorativas
- glassmorphism
- tarjetas excesivamente redondeadas
- botones tipo píldora
- elementos flotantes innecesarios
- sombras exageradas
- bordes redondeados en absolutamente todo
- estética de dashboard / SaaS
- exceso de animaciones
- neón, exceso de colores, diseños futuristas
- textos gigantes sin sentido
- elementos decorativos que no aporten nada (sin hojas, flores o ilustraciones botánicas "de stock")

No quiero:

```text
[ tarjeta redonda con sombra ]
[ tarjeta redonda con sombra ]
[ tarjeta redonda con sombra ]
```

repetido para servicios, ni:

```text
BOTÓN PÍLDORA
```

para absolutamente todo. Los botones deben ser rectangulares, sobrios, con esquinas pequeñas o cuadradas, buen padding, buena tipografía y jerarquía visual clara.

---

# 6. COLORES

Paleta cálida y clara, coherente con el nombre "Natura" sin literalidad botánica:

```text
--color-primary: #B98A5E     (terracota/dorado suave — CTAs y acentos)
--color-secondary: #2B2420   (marrón muy oscuro casi negro — texto principal, más cálido que negro puro)
--color-background: #FBF8F5  (blanco roto)
--color-surface: #F5EFE9     (nude/beige — fondos de sección alternos)
--color-muted: #8A7C6E       (texto secundario, subtítulos)
```

Definirlos como variables CSS o tokens de Tailwind (`tailwind.config.ts` → `theme.extend.colors`), nunca hardcodeados en hex sueltos dentro de los componentes.

---

# 7. TIPOGRAFÍA

- Titulares: una serif elegante y legible (ej. "Playfair Display" o "Cormorant Garamond").
- Cuerpo y UI: una sans-serif limpia (ej. "Inter" o "Manrope").
- Cargar por `<link>` de Google Fonts en `index.html` con `font-display: swap`.
- Buena jerarquía editorial en títulos grandes; excelente legibilidad en body en mobile y desktop.

---

# 8. DESKTOP

La web debe aprovechar todo el ancho disponible. Nada de todo el contenido encerrado en un contenedor de `max-width: 1200px` con márgenes blancos enormes. Usá secciones full-width, grids, fotografías grandes, espacio negativo, y composiciones asimétricas en Hero y Galería. Los contenedores internos son para el texto, no para forzar todas las secciones al mismo ancho.

---

# 9. RESPONSIVE

Mobile-first real, no "la versión desktop encogida":

- navegación adaptada (menú hamburguesa simple, sin exceso de items)
- botones cómodos al tacto
- fotografías bien recortadas (no estiradas ni cortadas en mal punto)
- tipografías y espaciado consistentes
- CTA de WhatsApp siempre accesible (botón flotante fijo en mobile)
- cero scroll horizontal

---

# 10. ESTRUCTURA DE LA WEB

1. Header
2. Hero
3. Servicios
4. Bodas y Eventos (banner destacado)
5. Sobre nosotros
6. Galería
7. Reseñas
8. Contacto / Formulario WhatsApp
9. Ubicación y horarios
10. Footer

**Las reseñas van justo antes del formulario de contacto**, no al final del todo — la prueba social funciona mejor inmediatamente antes de pedir la acción. El footer sí cierra la página.

---

# 11. HEADER

- Nombre del negocio en tipografía (no hay logo aún) + navegación (`Servicios`, `Sobre nosotros`, `Galería`, `Contacto`) + CTA "Reservar por WhatsApp".
- Sticky con transición sutil al hacer scroll (cambia de transparente/sobre la imagen a fondo sólido).
- Buen contraste en ambos estados. No llenarlo de elementos.

---

# 12. HERO

Uno de los elementos más importantes. Usá `images.hero` (la foto real del salón).

NO quiero el patrón genérico de:

```text
TÍTULO ENORME
subtítulo
[ BOTÓN ]  [ BOTÓN ]
```

centrado sobre la imagen con un velo negro pesado de punta a punta.

Preferí una composición editorial: la foto ocupando gran parte de la pantalla, ligeramente oscurecida solo donde hace falta para que el texto se lea (un degradado suave en la zona del texto, no un overlay uniforme sobre toda la imagen), con el bloque de texto anclado a un costado o al tercio inferior — no necesariamente centrado.

Contenido del bloque de texto:
- Nombre del negocio + tagline ("Peluquería, uñas y estética en el corazón de El Zapillo").
- Badge discreto: estrella + "4,9 en Google" (sin inventar cantidad de reseñas).
- Dos CTAs con jerarquía clara: primario "Reservar por WhatsApp" (ancla a contacto), secundario más sutil "Ver servicios".

---

# 13. COPYWRITING

Genera textos ya redactados, no placeholders de texto — es un cliente real. Nada de copy agresivo o de humo. Por ejemplo, evitar frases como:

> "Transformamos tu imagen y llevamos tu estilo al siguiente nivel."

> "Descubre una experiencia de belleza revolucionaria."

> "El salón que cambiará tu rutina para siempre."

En su lugar, un tono cercano, tranquilo, profesional y natural. Ejemplo del registro buscado (no copiar literal, redactar variantes propias en el mismo tono):

> "Un espacio para cuidarte, sin prisas y con atención a cada detalle."

No hace falta mencionar "El Zapillo" en cada sección — la web debe sentirse local sin caer en el cliché de repetirlo todo el tiempo.

**Texto ya definido para "Sobre nosotros"** (usar tal cual o pulir sin cambiar el sentido):

> "En Centro Belleza Natura cuidamos de ti con calma, buenos productos y atención personalizada. Combinamos peluquería, uñas y estética para que tengas un único sitio de confianza, del día a día a tu gran día."

---

# 14. SERVICIOS

Usar `business.services`. Presentación editorial, **no tarjetas gigantes con sombra**: lista con líneas divisorias horizontales, tipografía grande para el nombre del servicio, descripción corta debajo en tono más suave, número o ícono pequeño de `lucide-react` a la izquierda (`Scissors`, `Sparkles`, `Flower2`). Si `price` es `null`, no mostrar precio ni "Desde XX €" — mostrar el servicio sin precio y, si hace falta un cierre, un link a "Consultar por WhatsApp".

---

# 15. BODAS Y EVENTOS (banner destacado)

Este es el diferencial más fuerte del negocio — el propio cliente pidió darle protagonismo. Sección de ancho completo, visualmente distinta a la de Servicios (fondo de color de acento o foto con overlay, texto en blanco), usando `eventsBanner`. CTA propio que arma directamente un mensaje de WhatsApp para eventos — no reutilices el formulario general de la sección de contacto acá, es un botón directo.

---

# 16. SOBRE NOSOTROS

Dos columnas en desktop (imagen `images.about` + texto), apiladas en mobile. Usar el texto de la sección 13. No inventar años de trayectoria, cantidad de empleadas ni certificaciones — no están confirmados.

---

# 17. GALERÍA

6 fotos reales de uñas (`images.gallery`). Composición editorial, no un grid uniforme y aburrido de:

```text
[IMG][IMG][IMG]
[IMG][IMG][IMG]
```

Usá tamaños variados (por ejemplo, la primera imagen ocupando el doble de ancho o alto que el resto) y algo de asimetría con sentido. Al hacer click sobre una imagen, abrir un lightbox simple construido a mano (sin sumar una librería pesada) con navegación entre imágenes (flechas y teclado, `Escape` para cerrar). Cada imagen con `alt` descriptivo real (ej. "Manicura en gel diseño Baby Boomer — Centro Belleza Natura", nunca "imagen1"), `loading="lazy"` salvo la primera si queda visible sin scroll, y buen `object-fit: cover`.

---

# 18. RESEÑAS

Grid o carrusel simple (sin librería, `overflow-x-auto` + `scroll-snap` si es carrusel) con las 3 reseñas de `reviews`: nombre, 5 estrellas (`Star` de lucide, relleno), texto completo. Encabezado de la sección con el badge "4,9 ⭐ en Google" — si más adelante se confirma la cantidad total de reseñas, se agrega "+N reseñas en Google", no antes.

---

# 19. CONTACTO / FORMULARIO WHATSAPP

Replicar el patrón de referencia del cliente (selector de opciones + mensaje armado en vivo), con las opciones adaptadas a los servicios reales de este negocio:

**"¿Qué te querés hacer?"**
`Corte` · `Color` · `Peinado` · `Manicura / Pedicura` · `Diseño de uñas` · `Estética` · `Boda / Comunión / Bautizo` · `Otra consulta`

**"¿Para cuándo?"**
`Esta semana` · `El fin de semana` · `Tengo un evento en fecha concreta` · `Me adapto al hueco que tengáis`

**Nombre (opcional).**

Panel derecho ("Mensaje listo para enviar") con el texto armado en vivo, ej.:

`¡Hola Centro Belleza Natura! Me gustaría reservar una cita para Manicura/Pedicura. ¿Para cuándo? El fin de semana. Mi nombre es Laura.`

Botón principal "Enviar por WhatsApp" → `https://wa.me/${business.whatsapp}?text=${encodeURIComponent(mensaje)}`, se abre en pestaña nueva.

Agregados aprobados por el cliente además del patrón base:
- Botón secundario "Llamar ahora" → `tel:+34658332828`.
- Link "Cómo llegar" → `business.mapsDirectionsUrl`.
- Texto pequeño debajo: "Se abre WhatsApp con el mensaje ya escrito. Tú decides si lo envías." + teléfono visible como fallback.

---

# 20. UBICACIÓN Y HORARIOS

Dos columnas en desktop (mapa a la izquierda, horarios + dirección a la derecha), apiladas en mobile.

```html
<iframe
  src="https://www.google.com/maps?q=36.828281,-2.4492509&z=17&output=embed"
  width="100%"
  height="400"
  style="border:0"
  loading="lazy"
  referrerpolicy="no-referrer-when-downgrade"
  title="Ubicación de Centro Belleza Natura en Google Maps"
></iframe>
```

Tabla/lista de horarios desde `business.openingHours`. Detalle opcional de calidad: resaltar visualmente el día actual comparando con `new Date().getDay()`.

---

# 21. FOOTER

- Nombre del negocio + tagline corta.
- Columna de contacto: teléfono, WhatsApp, Instagram, dirección.
- Horarios resumidos o ancla a la sección de horarios.
- Links "Aviso legal" / "Política de privacidad" / "Política de cookies" — en esta demo pueden ser placeholders de una línea ("Contenido pendiente de definir con el cliente"). No los omitas: es lo que separa una demo de agencia seria de una plantilla improvisada.
- Copyright: `© {new Date().getFullYear()} Centro Belleza Natura. Sitio creado por .js agency.` — año dinámico, no hardcodeado.

---

# 22. ICONOGRAFÍA

`lucide-react` en toda la web, sin mezclar con otro set de iconos. Ejemplos: `Scissors`, `Sparkles`, `Flower2`, `Phone`, `MapPin`, `Instagram`, `Clock`, `Calendar`, `MessageCircle`, `Star`, `ArrowUpRight`. Nunca iconos gigantes usados como decoración vacía.

---

# 23. ANIMACIONES

Muy sutiles: fade + pequeño desplazamiento al entrar en viewport (`whileInView` de `framer-motion`), hover con leve escala en tarjetas de servicio y en la galería (`scale-105`, `transition-transform duration-300`), transición suave del lightbox.

Prohibido: animaciones constantes, elementos flotando, parallax, textos rebotando, loaders innecesarios, cualquier efecto que compita con el contenido.

Respetar `prefers-reduced-motion` — desactivar o reducir las animaciones si el usuario lo tiene activado.

---

# 24. SEO

- `<title>`: "Centro Belleza Natura | Peluquería, Estética y Uñas en El Zapillo, Almería"
- `<meta name="description">`: "Peluquería, uñas y estética en El Zapillo, Almería. Especialistas en bodas, comuniones y bautizos. Reserva tu cita por WhatsApp — 4,9★ en Google."
- `lang="es"`, viewport correcto, HTML5 semántico, headings jerarquizados (`h1` único por página), `alt` en todas las imágenes, Open Graph básico (`og:title`, `og:description`, `og:image` = `images.hero`, `og:locale` = `es_ES`).

---

# 25. SEO LOCAL

JSON-LD tipo `BeautySalon` en el `<head>`, con datos desde `business` — nunca inventados:

```json
{
  "@context": "https://schema.org",
  "@type": "BeautySalon",
  "name": "Centro Belleza Natura",
  "image": "URL_ABSOLUTA_DE_HERO",
  "telephone": "+34658332828",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "C. Vinaroz, 29",
    "postalCode": "04007",
    "addressLocality": "Almería",
    "addressCountry": "ES"
  },
  "geo": { "@type": "GeoCoordinates", "latitude": 36.828281, "longitude": -2.4492509 },
  "openingHoursSpecification": [
    { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"], "opens": "10:00", "closes": "20:00" }
  ],
  "sameAs": ["https://www.instagram.com/centrobellezanatura/"]
}
```

No agregar `aggregateRating` hasta tener la cantidad real de reseñas confirmada.

---

# 26. ACCESIBILIDAD

Contraste AA en todo texto sobre imagen, focus states visibles, navegación por teclado completa, botones y enlaces reales (nunca `<div onClick>`), `aria-label` en los CTAs de WhatsApp/llamar/cómo llegar, headings y landmarks correctos, tamaño táctil adecuado en mobile. No sacrificar accesibilidad por estética.

---

# 27. PERFORMANCE

Optimizar `header.png`, `interior.png` y las 6 fotos de galería a `.webp` antes o durante el build. `width`/`height` o `aspect-ratio` en todas las imágenes para evitar layout shift. Lazy loading en todo lo que no sea visible en el primer viewport. Sin JavaScript innecesario. Criterio de aceptación antes de entregar: Lighthouse mobile con performance y accesibilidad por encima de 90.

---

# 28. ARQUITECTURA DEL CÓDIGO

```text
src/
├── components/
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── Services.tsx
│   ├── EventsBanner.tsx
│   ├── About.tsx
│   ├── Gallery.tsx
│   ├── Reviews.tsx
│   ├── ContactForm.tsx
│   ├── LocationMap.tsx
│   └── Footer.tsx
├── config/
│   └── business.ts
├── App.tsx
└── main.tsx
```

Componentes que reciben datos vía props desde `business`/`reviews`/`eventsBanner`, no datos hardcodeados dentro del JSX. Nada de componentes gigantes que mezclen tres secciones.

---

# 29. PERSONALIZACIÓN PARA FUTUROS CLIENTES

Aunque este proyecto ya tiene los datos reales de Centro Belleza Natura cargados, el código debe quedar reutilizable para el próximo salón de belleza que reciba .js agency. Al cambiar de cliente, lo único que debería tocarse es:

- `src/config/business.ts` completo (nombre, tagline, teléfono, whatsapp, dirección, instagram, horarios, servicios, rating).
- Las imágenes dentro de `public/images/`.
- Los tokens de color de la sección 6 (paleta), si el nuevo negocio pide otra identidad.
- El texto de "Sobre nosotros" y el `eventsBanner` (o quitar este último si el nuevo cliente no tiene un ángulo de eventos).

Todo lo demás — estructura de componentes, lógica del formulario de WhatsApp, lightbox, SEO local — debe funcionar sin tocar código.

---

# 30. COMPONENTES REUTILIZABLES

Extraer al menos: `SectionTitle`, `Button` (variantes primary/secondary/ghost, siempre rectangular por la sección 5), `ServiceItem`, `ReviewCard`, `ContactInfoItem` (ícono + label + valor, reutilizado en footer y en contacto). No hace falta convertir todo en componente — buscar un equilibrio razonable.

---

# 31. DETALLE SOBRE LA MARCA LOCAL

El Zapillo es una zona de comercio de proximidad en Almería: clientas de la zona, trato cercano, confianza. Tené eso en cuenta en el tono, pero no agregues hashtags de barrio ni frases de campaña institucional — la web tiene que sentirse profesional, no una iniciativa vecinal.

---

# 32. NO INVENTAR INFORMACIÓN

Todo lo marcado `PENDIENTE` en la sección 3 (listado exacto de tratamientos de estética, cantidad total de reseñas, precios) se deja sin completar o sin mostrar en la UI — nunca con un valor inventado. Las fotografías reales sí se usan sin problema: son material provisto por el cliente.

---

# 33. EXPERIENCIA FINAL

La web debe transmitir: **"salón de belleza local profesional con presencia digital moderna"** — nunca "landing generada por IA". Alguien que entra desde el móvil debe poder, sin fricción: saber qué salón es → ver cómo es el local → entender qué servicios ofrece → ver trabajos reales (uñas) → saber que atienden bodas/eventos → saber dónde está → contactar por WhatsApp.

---

# 34. CRITERIO DE DISEÑO

Antes de dar por terminada cada sección, preguntate: **¿esto realmente parece diseñado por un profesional para un salón de belleza real de Almería?** Si la respuesta es no, simplificá. Priorizá tipografía + fotografía + composición + espacio + jerarquía por encima de efectos + gradientes + sombras + animación + decoración.

---

# 35. DESARROLLO (orden de trabajo)

1. Inspeccionar estructura actual del proyecto, `package.json`, imágenes en `public/images/`, configuración de Vite/TS.
2. Instalar y configurar Tailwind.
3. Instalar solo `lucide-react` y `framer-motion` (nada más salvo necesidad real).
4. Crear `src/config/business.ts` con los datos de la sección 3.
5. Crear la arquitectura de componentes de la sección 28.
6. Implementar cada sección en el orden de la sección 10, usando las imágenes reales encontradas.
7. Comprobar responsive en mobile/tablet/desktop.
8. Comprobar accesibilidad (teclado, contraste, aria-labels).
9. Comprobar SEO y SEO local (title, meta, JSON-LD).
10. Ejecutar el proyecto y confirmar cero errores de TypeScript y de consola.
11. Revisar visualmente toda la página contra la sección 5 (prohibiciones de diseño) y corregir cualquier cosa que se sienta genérica o artificial.

---

# 36. CHECK FINAL

- [ ] Tailwind funciona correctamente.
- [ ] React + TypeScript sin errores.
- [ ] Sin errores en consola.
- [ ] Todas las imágenes usadas existen y ninguna está rota.
- [ ] La web ocupa correctamente el ancho en desktop (sin encajonamiento tipo `max-width: 1200px` con márgenes enormes).
- [ ] Responsive y mobile correctos, sin scroll horizontal.
- [ ] Header sticky con buen contraste en ambos estados.
- [ ] Hero con composición editorial, sin overlay exagerado ni patrón centrado genérico.
- [ ] Servicios en formato lista editorial, no tarjetas gigantes.
- [ ] Banner de Bodas y Eventos con jerarquía visual propia.
- [ ] Galería con composición asimétrica y lightbox funcional (navegación + teclado).
- [ ] Reseñas ubicadas justo antes del formulario de contacto.
- [ ] Formulario WhatsApp arma el mensaje en vivo y abre `wa.me` correctamente.
- [ ] Botones "Llamar" y "Cómo llegar" funcionan.
- [ ] Mapa embebido carga con `loading="lazy"`.
- [ ] Horarios correctos, sin inventar datos.
- [ ] Footer con links legales (aunque sean placeholder) y copyright con año dinámico.
- [ ] SEO básico y SEO local (JSON-LD) implementados, sin `aggregateRating` sin confirmar.
- [ ] Accesibilidad revisada (contraste, foco, aria-labels, botones/enlaces reales).
- [ ] Imágenes optimizadas a `.webp`, con `alt` descriptivo y lazy loading.
- [ ] Sin gradientes, blobs, glassmorphism, botones píldora ni estética SaaS en ninguna sección.
- [ ] Sin precios ni cantidad de reseñas inventados — los campos `PENDIENTE` quedan sin completar.
- [ ] Textos naturales, sin claims comerciales exagerados.
- [ ] Todos los datos del negocio centralizados en `src/config/business.ts`.
- [ ] `prefers-reduced-motion` respetado.

---

# RESULTADO ESPERADO

No entregues solo una estructura básica. Necesito una **landing terminada y visualmente convincente**, lista para mostrarle a la dueña de Centro Belleza Natura como propuesta de `.js agency`. Debe quedar en un estado tal que, si el proyecto se vende, el siguiente paso sea afinar detalles con la clienta (precios, tratamientos de estética exactos, cantidad de reseñas) y no rehacer secciones enteras.
