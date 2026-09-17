type WhatsAppIconProps = {
  className?: string
  // acepta y descarta strokeWidth para ser intercambiable con los íconos de lucide-react (icon-based, no stroke)
  strokeWidth?: number
}

// lucide-react no incluye el logo de WhatsApp (se removieron los íconos de marca);
// se define acá como SVG propio para que el botón sea reconocible de un vistazo.
export function WhatsAppIcon({ className }: WhatsAppIconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12.04 2c-5.52 0-10 4.48-10 10 0 1.77.46 3.45 1.32 4.95L2 22l5.2-1.36a9.96 9.96 0 0 0 4.84 1.23h.01c5.52 0 10-4.48 10-10s-4.48-10-10.01-10Zm0 18.15h-.01a8.3 8.3 0 0 1-4.24-1.16l-.3-.18-3.15.82.84-3.07-.2-.32a8.28 8.28 0 0 1-1.27-4.42c0-4.58 3.73-8.31 8.32-8.31 2.22 0 4.31.87 5.88 2.44a8.25 8.25 0 0 1 2.44 5.88c0 4.59-3.73 8.32-8.31 8.32Zm4.55-6.23c-.25-.12-1.47-.73-1.7-.81-.23-.08-.39-.12-.56.12-.17.25-.64.81-.78.97-.14.17-.29.19-.53.06-.25-.12-1.05-.39-2-1.23-.74-.66-1.24-1.48-1.39-1.73-.14-.25-.02-.38.11-.51.11-.11.25-.29.37-.43.12-.14.16-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.56-1.35-.77-1.85-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31-.23.25-.86.84-.86 2.05s.88 2.38 1 2.54c.12.17 1.74 2.65 4.22 3.72.59.25 1.05.4 1.41.52.59.19 1.13.16 1.55.1.47-.07 1.47-.6 1.68-1.18.21-.58.21-1.08.14-1.18-.06-.11-.23-.17-.48-.29Z" />
    </svg>
  )
}
