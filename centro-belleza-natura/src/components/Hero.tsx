import { motion } from 'framer-motion'
import { Star } from 'lucide-react'
import { business } from '../config/business'
import { Button } from './Button'
import { WhatsAppIcon } from './WhatsAppIcon'

const whatsappHref = `https://wa.me/${business.whatsapp}?text=${encodeURIComponent(
  `¡Hola ${business.name}! Me gustaría reservar una cita.`,
)}`

export function Hero() {
  return (
    <section id="inicio" className="relative flex min-h-[calc(100svh-5rem)] w-full items-end overflow-hidden">
      <img
        src={business.images.hero.src}
        width={business.images.hero.width}
        height={business.images.hero.height}
        alt={`Fachada de ${business.name} en El Zapillo, Almería`}
        className="absolute inset-0 h-full w-full scale-105 object-cover blur-[2px]"
        fetchPriority="high"
      />
      {/* Oscurecido uniforme (disimula la baja resolución de la foto) + degradado extra abajo para el texto */}
      <div className="absolute inset-0 bg-secondary/55" />
      <div className="absolute inset-0 bg-gradient-to-t from-secondary/95 via-secondary/35 to-transparent" />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="relative z-10 flex w-full flex-col gap-6 px-5 pb-28 pt-16 sm:px-8 sm:pb-24 lg:w-2/3 lg:px-12 xl:w-1/2"
      >
        <span className="flex items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-background/80">
          <span className="h-px w-6 bg-primary" aria-hidden="true" />
          El Zapillo, Almería
        </span>

        <div className="flex flex-col gap-3">
          <h1 className="font-serif text-4xl leading-[1.05] text-background sm:text-5xl md:text-6xl">
            {business.name}
          </h1>
          <p className="max-w-md text-base text-background/90 sm:text-lg">{business.tagline}</p>
          <span className="flex items-center gap-1.5 text-sm leading-none text-background/80">
            <Star className="h-4 w-4 fill-primary text-primary" aria-hidden="true" />
            {business.googleRating.toString().replace('.', ',')} en Google
          </span>
        </div>

        <div className="flex flex-wrap items-center gap-4 pt-2">
          <Button href={whatsappHref} target="_blank" rel="noopener noreferrer" variant="light" aria-label="Reservar cita por WhatsApp">
            Reservar por WhatsApp
            <WhatsAppIcon className="h-4 w-4" />
          </Button>
          <Button href="#servicios" variant="lightOutline">
            Ver servicios
          </Button>
        </div>
      </motion.div>
    </section>
  )
}
