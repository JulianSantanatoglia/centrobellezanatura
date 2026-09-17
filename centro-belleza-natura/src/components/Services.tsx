import { motion } from 'framer-motion'
import { business } from '../config/business'
import { Button } from './Button'
import { SectionTitle } from './SectionTitle'
import { ServiceItem } from './ServiceItem'
import { WhatsAppIcon } from './WhatsAppIcon'

const whatsappHref = `https://wa.me/${business.whatsapp}?text=${encodeURIComponent(
  `¡Hola ${business.name}! Me gustaría consultar precios y disponibilidad.`,
)}`

export function Services() {
  return (
    <section id="servicios" className="w-full bg-background px-5 py-20 sm:px-8 sm:py-28 lg:px-12">
      <div className="mx-auto flex max-w-4xl flex-col gap-12">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <SectionTitle
            eyebrow="Servicios"
            title="Todo lo que necesitas, en un mismo espacio"
            description="Peluquería, uñas y estética con la misma atención al detalle en cada visita."
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
        >
          {business.services.map((service, index) => (
            <ServiceItem key={service.name} service={service} index={index} />
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.15 }}
          className="self-start"
        >
          <Button href={whatsappHref} target="_blank" rel="noopener noreferrer" variant="secondary" size="sm">
            Consultar precios por WhatsApp
            <WhatsAppIcon className="h-4 w-4" />
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
