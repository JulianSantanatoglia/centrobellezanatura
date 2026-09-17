import { business } from '../config/business'
import { WhatsAppIcon } from './WhatsAppIcon'

const whatsappHref = `https://wa.me/${business.whatsapp}?text=${encodeURIComponent(
  `¡Hola ${business.name}! Me gustaría reservar una cita.`,
)}`

export function WhatsAppFloatingButton() {
  return (
    <a
      href={whatsappHref}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Reservar cita por WhatsApp"
      className="fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-primary text-secondary shadow-[0_4px_14px_rgba(43,36,32,0.3)] transition-transform hover:scale-105 md:hidden"
    >
      <span className="absolute inset-0 animate-ping rounded-full bg-primary/60" />
      <WhatsAppIcon className="relative h-6 w-6" />
    </a>
  )
}
