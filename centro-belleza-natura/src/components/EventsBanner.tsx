import { motion } from 'framer-motion'
import { business, eventsBanner } from '../config/business'
import { Button } from './Button'
import { WhatsAppIcon } from './WhatsAppIcon'

export function EventsBanner() {
  const whatsappHref = `https://wa.me/${business.whatsapp}?text=${encodeURIComponent(eventsBanner.whatsappMessage)}`

  return (
    <section className="w-full bg-secondary px-5 py-20 sm:px-8 sm:py-24 lg:px-12">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="mx-auto flex max-w-4xl flex-col items-start gap-6"
      >
        <span className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-primary">
          <span className="h-px w-6 bg-primary" aria-hidden="true" />
          Bodas y eventos
        </span>
        <h2 className="font-serif text-3xl leading-tight text-background sm:text-4xl md:text-5xl">
          {eventsBanner.title}
        </h2>
        <p className="text-lg text-background/85">{eventsBanner.subtitle}</p>
        <p className="max-w-2xl text-base text-background/70">{eventsBanner.body}</p>
        <Button
          href={whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          variant="light"
          aria-label={eventsBanner.ctaLabel}
          className="mt-2"
        >
          {eventsBanner.ctaLabel}
          <WhatsAppIcon className="h-4 w-4" />
        </Button>
      </motion.div>
    </section>
  )
}
