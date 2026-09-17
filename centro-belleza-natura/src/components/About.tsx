import { motion } from 'framer-motion'
import { business } from '../config/business'
import { SectionTitle } from './SectionTitle'

const quickFacts = [
  { label: 'Atención', value: 'Personalizada y sin prisas' },
  { label: 'Servicios', value: 'Peluquería, uñas y estética' },
  { label: 'Ambiente', value: 'Cercano y natural' },
]

export function About() {
  return (
    <section id="sobre-nosotros" className="w-full bg-surface">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-5 py-20 sm:px-8 sm:py-28 lg:grid-cols-2 lg:gap-16 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="flex flex-col gap-8"
        >
          <SectionTitle eyebrow="Sobre nosotros" title="Un espacio para cuidarte, sin prisas" />
          <p className="max-w-md text-base leading-relaxed text-secondary sm:text-lg">
            En Centro Belleza Natura cuidamos de ti con calma, buenos productos y atención personalizada.
            Combinamos peluquería, uñas y estética para que tengas un único sitio de confianza, del día a día
            a tu gran día.
          </p>

          <div className="grid grid-cols-3 gap-6 border-t border-secondary/10 pt-6">
            {quickFacts.map((fact) => (
              <div key={fact.label} className="flex flex-col gap-1">
                <span className="text-xs font-medium uppercase tracking-wide text-muted">{fact.label}</span>
                <span className="text-sm text-secondary sm:text-base">{fact.value}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
          className="aspect-3/4 w-full overflow-hidden"
        >
          <img
            src={business.images.about.src}
            width={business.images.about.width}
            height={business.images.about.height}
            alt={`Interior del salón ${business.name}`}
            loading="lazy"
            className="h-full w-full object-cover"
          />
        </motion.div>
      </div>
    </section>
  )
}
