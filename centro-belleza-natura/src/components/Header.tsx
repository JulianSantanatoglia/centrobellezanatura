import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import { business } from '../config/business'
import { Button } from './Button'
import { WhatsAppIcon } from './WhatsAppIcon'

const navLinks = [
  { label: 'Servicios', href: '#servicios' },
  { label: 'Sobre nosotros', href: '#sobre-nosotros' },
  { label: 'Galería', href: '#galeria' },
  { label: 'Contacto', href: '#contacto' },
]

const whatsappHref = `https://wa.me/${business.whatsapp}?text=${encodeURIComponent(
  `¡Hola ${business.name}! Me gustaría reservar una cita.`,
)}`

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-secondary/10 bg-background">
      <div className="flex h-20 items-center justify-between px-5 sm:px-8 lg:px-12">
        <a href="#inicio" className="flex flex-col leading-none">
          <span className="font-serif text-xl text-secondary sm:text-2xl">{business.name}</span>
          <span className="mt-1 text-[0.65rem] font-medium uppercase tracking-[0.25em] text-muted">
            Peluquería · Uñas · Estética
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium tracking-wide text-secondary underline decoration-transparent underline-offset-4 transition-colors hover:decoration-primary"
            >
              {link.label}
            </a>
          ))}
          <Button href={whatsappHref} target="_blank" rel="noopener noreferrer" size="sm" aria-label="Reservar cita por WhatsApp">
            Reservar por WhatsApp
            <WhatsAppIcon className="h-4 w-4" />
          </Button>
        </nav>

        <button
          type="button"
          className="inline-flex items-center justify-center p-2 text-secondary md:hidden"
          aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {menuOpen && (
        <nav className="flex flex-col gap-1 border-t border-secondary/10 bg-background px-5 pb-6 pt-2 md:hidden">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="py-3 text-base font-medium text-secondary"
            >
              {link.label}
            </a>
          ))}
          <Button
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Reservar cita por WhatsApp"
            onClick={() => setMenuOpen(false)}
            className="mt-2"
          >
            Reservar por WhatsApp
            <WhatsAppIcon className="h-4 w-4" />
          </Button>
        </nav>
      )}
    </header>
  )
}
