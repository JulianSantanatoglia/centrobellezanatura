import { AtSign, MapPin, Phone } from 'lucide-react'
import { business } from '../config/business'
import { ContactInfoItem } from './ContactInfoItem'
import { WhatsAppIcon } from './WhatsAppIcon'

const navLinks = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Sobre nosotros', href: '#sobre-nosotros' },
  { label: 'Galería', href: '#galeria' },
  { label: 'Contacto', href: '#contacto' },
]

// Placeholders de una línea: contenido pendiente de definir con el cliente (ver sección 21 del brief).
const legalLinks = ['Aviso legal', 'Política de privacidad', 'Política de cookies']

export function Footer() {
  return (
    <footer className="w-full bg-secondary px-5 py-16 sm:px-8 lg:px-12">
      <div className="mx-auto flex max-w-6xl flex-col gap-12">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col gap-3">
            <p className="font-serif text-2xl text-background">{business.name}</p>
            <p className="text-sm text-background/70">{business.tagline}</p>
          </div>

          <div className="flex flex-col gap-3">
            <span className="text-xs font-medium uppercase tracking-widest text-background/50">Navegación</span>
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="text-sm text-background/80 hover:text-background">
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex flex-col gap-4">
            <span className="text-xs font-medium uppercase tracking-widest text-background/50">Contacto</span>
            <ContactInfoItem icon={Phone} label="Teléfono" value={business.phone} href="tel:+34658332828" light />
            <ContactInfoItem
              icon={WhatsAppIcon}
              label="WhatsApp"
              value={business.phone}
              href={`https://wa.me/${business.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              light
            />
            <ContactInfoItem icon={MapPin} label="Dirección" value={business.address} light />
          </div>

          <div className="flex flex-col gap-3">
            <span className="text-xs font-medium uppercase tracking-widest text-background/50">Síguenos</span>
            <ContactInfoItem
              icon={AtSign}
              label="Instagram"
              value="@centrobellezanatura"
              href={business.instagram}
              target="_blank"
              rel="noopener noreferrer"
              light
            />
          </div>
        </div>

        <div className="flex flex-col gap-4 border-t border-background/15 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {legalLinks.map((label) => (
              <li key={label} className="text-xs text-background/50">
                {label}
              </li>
            ))}
          </ul>
          <p className="text-xs text-background/50">
            © {new Date().getFullYear()} {business.name}. Sitio creado por .js agency.
          </p>
        </div>
      </div>
    </footer>
  )
}
