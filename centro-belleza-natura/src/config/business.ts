export type Service = {
  name: string
  description: string
  price: number | null
}

export type GalleryImage = {
  src: string
  width: number
  height: number
  alt: string
}

export const business = {
  name: 'Centro Belleza Natura',
  tagline: 'Peluquería, uñas y estética en el corazón de El Zapillo',

  phone: '+34 658 33 28 28',
  whatsapp: '34658332828',

  address: 'C. Vinaroz, 29, 04007 Almería, España',
  city: 'Almería',

  instagram: 'https://www.instagram.com/centrobellezanatura/',

  mapsUrl: 'https://www.google.es/maps/place/Centro+Belleza+Natura/@36.828281,-2.4492509,17z',
  mapsEmbedSrc: 'https://www.google.com/maps?q=Centro+Belleza+Natura,+C.+Vinaroz,+29,+04007+Almería&z=17&output=embed',
  mapsDirectionsUrl: 'https://www.google.com/maps/dir/?api=1&destination=36.828281,-2.4492509',

  // PENDIENTE: cantidad total de reseñas en Google — no mostrar un número inventado
  googleRating: 4.9,

  openingHours: {
    monday: '10:00–20:00',
    tuesday: '10:00–20:00',
    wednesday: '10:00–20:00',
    thursday: '10:00–20:00',
    friday: '10:00–20:00',
    saturday: '10:00–20:00',
    sunday: 'Cerrado (salvo eventos con cita previa)',
  },

  services: [
    {
      name: 'Peluquería',
      description: 'Cortes, color, peinados y tratamientos capilares.',
      price: null, // PENDIENTE: precios sin confirmar
    },
    {
      name: 'Manicura y pedicura',
      description:
        'Con gel, diseño de uñas y Baby Boomer. Buenos productos, buen tiempo dedicado a cada detalle.',
      price: null,
    },
    {
      name: 'Estética', // PENDIENTE: confirmar con la clienta el listado exacto de tratamientos
      description: 'Tratamientos faciales y corporales. Consulta disponibilidad por WhatsApp.',
      price: null,
    },
  ] satisfies Service[],

  images: {
    hero: { src: '/images/header.webp', width: 1192, height: 553 },
    about: { src: '/images/interior.webp', width: 675, height: 761 },
    gallery: [
      {
        src: '/images/1.webp',
        width: 674,
        height: 807,
        alt: 'Manicura en gel con esmalte nude perlado — Centro Belleza Natura',
      },
      {
        src: '/images/2.webp',
        width: 679,
        height: 819,
        alt: 'Diseño de uñas almendra con francesa amarilla y flores rojas — Centro Belleza Natura',
      },
      {
        src: '/images/3.webp',
        width: 676,
        height: 814,
        alt: 'Uñas con diseño veraniego de rayas y estrellas de mar — Centro Belleza Natura',
      },
      {
        src: '/images/4.webp',
        width: 681,
        height: 788,
        alt: 'Manicura en tono burdeos con detalle de corazones — Centro Belleza Natura',
      },
      {
        src: '/images/5.webp',
        width: 676,
        height: 777,
        alt: 'Uñas nude con delicados dibujos florales de colores — Centro Belleza Natura',
      },
      {
        src: '/images/6.webp',
        width: 679,
        height: 815,
        alt: 'Diseño de uñas otoñal en tonos tierra y blanco — Centro Belleza Natura',
      },
    ] satisfies GalleryImage[],
  },
}

export const eventsBanner = {
  title: '¿Boda, comunión o bautizo?',
  subtitle: 'Reservamos sábados y domingos para tu gran día.',
  body: 'Peinado, maquillaje y manicura para novias, comuniones y bautizos, coordinando contigo la fecha y el horario — también en domingo, con cita previa.',
  ctaLabel: 'Consultar disponibilidad para mi evento',
  whatsappMessage:
    '¡Hola Centro Belleza Natura! Tengo una boda/comunión/bautizo y me gustaría consultar disponibilidad para ese día.',
}

export const reviews = [
  {
    name: 'María del Mar',
    rating: 5,
    text: 'Muy buen servicio, las chicas muy amables, se toman el tiempo necesario para hacer una buena limpieza de las uñas y usan buenos productos. Muy contenta, gracias Fátima.',
  },
  {
    name: 'Emma',
    rating: 5,
    text: 'Es con diferencia el mejor salón de belleza de Almería, personal super confiable tanto para peluquería como para uñas, un sitio super cómodo y agradable ☺️',
  },
  {
    name: 'Miguel',
    rating: 5,
    text: 'Sitio fabuloso, el trato es inmejorable y los resultados son excelentes, una gran profesionalidad en todos los sentidos. ¡Os lo recomiendo!',
  },
]
