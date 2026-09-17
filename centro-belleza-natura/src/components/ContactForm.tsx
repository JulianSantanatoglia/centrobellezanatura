import { motion } from 'framer-motion'
import { MapPin, Phone } from 'lucide-react'
import { useMemo, useState } from 'react'
import { business } from '../config/business'
import { Button } from './Button'
import { SectionTitle } from './SectionTitle'
import { WhatsAppIcon } from './WhatsAppIcon'

const serviceOptions = [
  'Corte',
  'Color',
  'Peinado',
  'Manicura / Pedicura',
  'Diseño de uñas',
  'Estética',
  'Boda / Comunión / Bautizo',
  'Otra consulta',
]

const timingOptions = [
  'Esta semana',
  'El fin de semana',
  'Tengo un evento en fecha concreta',
  'Me adapto al hueco que tengáis',
]

function OptionGroup({
  label,
  options,
  selected,
  onSelect,
}: {
  label: string
  options: string[]
  selected: string | null
  onSelect: (value: string) => void
}) {
  return (
    <fieldset className="flex flex-col gap-3">
      <legend className="text-xs font-medium uppercase tracking-widest text-background/60">{label}</legend>
      <div className="flex flex-wrap gap-2">
        {options.map((option) => {
          const isSelected = selected === option
          return (
            <button
              key={option}
              type="button"
              aria-pressed={isSelected}
              onClick={() => onSelect(option)}
              className={`border px-4 py-2.5 text-sm transition-colors ${
                isSelected
                  ? 'border-background bg-background text-secondary'
                  : 'border-background/25 bg-transparent text-background hover:border-background'
              }`}
            >
              {option}
            </button>
          )
        })}
      </div>
    </fieldset>
  )
}

export function ContactForm() {
  const [service, setService] = useState<string | null>(null)
  const [timing, setTiming] = useState<string | null>(null)
  const [name, setName] = useState('')

  const message = useMemo(() => {
    let text = `¡Hola ${business.name}! Me gustaría reservar una cita`
    text += service ? ` para ${service}.` : '.'
    if (timing) text += ` ¿Para cuándo? ${timing}.`
    if (name.trim()) text += ` Mi nombre es ${name.trim()}.`
    return text
  }, [service, timing, name])

  const whatsappHref = `https://wa.me/${business.whatsapp}?text=${encodeURIComponent(message)}`

  return (
    <section id="contacto" className="w-full bg-secondary px-5 py-20 sm:px-8 sm:py-28 lg:px-12">
      <div className="mx-auto flex max-w-6xl flex-col gap-12">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <SectionTitle
            eyebrow="Contacto"
            title="Reserva tu cita"
            description="Cuéntanos qué necesitas y te preparamos el mensaje para enviarlo por WhatsApp en un momento."
            light
          />
        </motion.div>

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="flex flex-col gap-8"
          >
            <OptionGroup
              label="¿Qué te querés hacer?"
              options={serviceOptions}
              selected={service}
              onSelect={setService}
            />
            <OptionGroup label="¿Para cuándo?" options={timingOptions} selected={timing} onSelect={setTiming} />
            <label className="flex flex-col gap-2">
              <span className="text-xs font-medium uppercase tracking-widest text-background/60">
                Nombre (opcional)
              </span>
              <input
                type="text"
                value={name}
                onChange={(event) => setName(event.target.value)}
                placeholder="Tu nombre"
                className="border border-background/25 bg-transparent px-4 py-3 text-background placeholder:text-background/40 focus:border-background focus:outline-none"
              />
            </label>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
            className="flex flex-col gap-6 border border-background/20 p-6 sm:p-8"
          >
            <h3 className="text-xs font-medium uppercase tracking-widest text-background/60">
              Mensaje listo para enviar
            </h3>
            <p className="flex-1 text-base leading-relaxed text-background">{message}</p>

            <div className="flex flex-col gap-3">
              <Button
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                variant="light"
                aria-label="Enviar mensaje por WhatsApp"
              >
                Enviar por WhatsApp
                <WhatsAppIcon className="h-4 w-4" />
              </Button>
              <Button href="tel:+34658332828" variant="lightOutline" aria-label="Llamar ahora al salón">
                Llamar ahora
                <Phone className="h-4 w-4" aria-hidden="true" />
              </Button>
              <Button
                href={business.mapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                variant="lightOutline"
                aria-label="Cómo llegar al salón en Google Maps"
              >
                Cómo llegar
                <MapPin className="h-4 w-4" aria-hidden="true" />
              </Button>
            </div>

            <p className="text-xs text-background/60">
              Se abre WhatsApp con el mensaje ya escrito. Tú decides si lo envías. También puedes llamarnos al{' '}
              <span className="text-background">{business.phone}</span>.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
