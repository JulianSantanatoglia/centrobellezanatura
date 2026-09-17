import { motion } from 'framer-motion'
import { Clock, MapPin } from 'lucide-react'
import { business } from '../config/business'
import { Button } from './Button'
import { SectionTitle } from './SectionTitle'

const days: { key: keyof typeof business.openingHours; label: string }[] = [
  { key: 'monday', label: 'Lunes' },
  { key: 'tuesday', label: 'Martes' },
  { key: 'wednesday', label: 'Miércoles' },
  { key: 'thursday', label: 'Jueves' },
  { key: 'friday', label: 'Viernes' },
  { key: 'saturday', label: 'Sábado' },
  { key: 'sunday', label: 'Domingo' },
]

export function LocationMap() {
  const todayIndex = (new Date().getDay() + 6) % 7 // 0 = lunes ... 6 = domingo

  return (
    <section id="ubicacion" className="w-full bg-surface px-5 py-20 sm:px-8 sm:py-28 lg:px-12">
      <div className="mx-auto flex max-w-6xl flex-col gap-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <SectionTitle eyebrow="Ubicación y horarios" title="Te esperamos en El Zapillo" />
        </motion.div>

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <iframe
              src={business.mapsEmbedSrc}
              width="100%"
              height="400"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={`Ubicación de ${business.name} en Google Maps`}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
            className="flex flex-col gap-8"
          >
            <div className="flex items-start gap-3">
              <MapPin className="mt-1 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
              <div>
                <p className="text-sm uppercase tracking-wide text-muted">Dirección</p>
                <p className="text-base text-secondary sm:text-lg">{business.address}</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Clock className="mt-1 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
              <div className="flex-1">
                <p className="mb-3 text-sm uppercase tracking-wide text-muted">Horario</p>
                <ul className="flex flex-col divide-y divide-secondary/10">
                  {days.map((day, index) => (
                    <li
                      key={day.key}
                      className={`flex items-baseline justify-between gap-4 px-2 py-2.5 text-sm sm:text-base ${
                        index === todayIndex ? 'bg-primary/15 font-medium text-secondary' : 'text-secondary'
                      }`}
                    >
                      <span>{day.label}</span>
                      <span>{business.openingHours[day.key]}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <Button
              href={business.mapsDirectionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              variant="secondary"
              size="sm"
              className="self-start"
              aria-label="Cómo llegar al salón en Google Maps"
            >
              Cómo llegar
              <MapPin className="h-4 w-4" aria-hidden="true" />
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
